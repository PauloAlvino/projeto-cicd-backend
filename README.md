# Projeto CI/CD - Backend (API)

Este repositório contém a API desenvolvida para a atividade bimestral de Integração e Entrega Contínua (CI/CD).

## Objetivo

Demonstrar a integração entre GitHub, Docker, GitHub Actions e Render, com deploy automatizado usando versionamento semântico.

## Fluxo de Deploy (Automático)

O deploy acontece somente quando uma nova Tag Semântica é criada.

1. **Desenvolvimento**  
   Commits enviados para a branch `main`.

2. **Release**  
   Criar uma tag:
   ```bash
    git tag v1.0.0
   ```

3. **Enviar a tag para o GitHub**  
    ```bash
    git push origin v1.0.0
   ```

4. **GitHub Actions**  
    - Detecta a tag → builda a imagem Docker → envia para o Render.

5. **Resultado** 
    - A API é atualizada automaticamente em produção.

**URLs do Projeto**

- **API (Backend):** https://seu-projeto-back.onrender.com  
- **Dashboard (Frontend):** https://seu-projeto-front.vercel.app

Desenvolvido pela equipe: Thiago Cunha, Paulo Ricardo, Vinicius de Araujo Silva.