package com.biblioteca.projeto.service;

import com.biblioteca.projeto.model.Livro;
import com.biblioteca.projeto.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
    public class LivroService {
    @Autowired
    private LivroRepository livroRepository;

    public List<Livro> listarTodos(){
        return livroRepository.findAll();
    }
public Livro buscarPorId(Long id){
      return livroRepository.findById(id) .orElseThrow(() -> new RuntimeException("Livro nao encontrado");
    }
public Livro salvar(Livro livro){
        return livroRepository.save(livro);
}
public Livro atualizar(Long id, Livro LivroAtualizado){
        Livro livro=buscarPorId(id);
        livro.setTitulo(LivroAtualizado.getTitulo());
        livro.setAutor(LivroAtualizado.getAutor());
        livro.setGenero(LivroAtualizado.getGenero());
        livro.setDataPublicacao(LivroAtualizado.getDataPublicacao());
        return livroRepository.save(livro);
}
public void deletar (Long id){
        livroRepository.deleteById(id);
}
}
