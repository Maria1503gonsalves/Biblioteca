package com.biblioteca.projeto.model;


import com.biblioteca.projeto.repository.LivroRepository;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;

@Entity
@AllArgsConstructor

public class Livro {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;


    private String titulo;
    private String genero;
    private String autor;
    private LocalDate dataPublicacao;
    //construtor

    public Livro (){}
       public Livro(String titulo, String autor, String genero, LocalDate dataPublicacao) {

        this.titulo=titulo;
        this.autor=autor;
        this.genero=genero;
        this.dataPublicacao=dataPublicacao;

        }

    //getteers e setters


    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getGenero() {
        return genero;
    }

    public String getAutor() {
        return autor;
    }

    public LocalDate getDataPublicacao() {
        return dataPublicacao;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public void setDataPublicacao(LocalDate dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }
}
