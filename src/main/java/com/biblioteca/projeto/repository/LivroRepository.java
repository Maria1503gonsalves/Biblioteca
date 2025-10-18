package com.biblioteca.projeto.repository;

import com.biblioteca.projeto.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepository  extends JpaRepository<Livro,Long> {
}
