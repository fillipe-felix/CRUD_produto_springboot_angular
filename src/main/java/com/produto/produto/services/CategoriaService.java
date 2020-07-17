package com.produto.produto.services;

import com.produto.produto.entities.Categoria;
import com.produto.produto.repositories.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;


    public List<Categoria> findAll() {
       return categoriaRepository.findAll();
    }

    public Categoria findById(Integer id) {
        Optional<Categoria> objCategoria = categoriaRepository.findById(id);
        return objCategoria.get();
    }

    public Categoria insert(Categoria objCategoria) {
        return categoriaRepository.save(objCategoria);
    }
}
