package com.produto.produto.repositories;

import com.produto.produto.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
}
