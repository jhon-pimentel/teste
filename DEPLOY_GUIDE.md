# Guia de Deploy - Prepara One Page (Backend)

Este projeto usa o Google Apps Script para salvar os leads em uma planilha do Google.

## Passo 1: Criar a Planilha e o Script
1. Crie uma nova **Google Sheet** (ou use uma existente).
2. No menu superior, clique em **Extensões** > **Apps Script**.
3. Apague todo o código que estiver no arquivo `Código.gs` (ou `Code.gs`).
4. Copie o conteúdo do arquivo `Code.gs` que está na pasta do projeto e cole no editor do Apps Script.

## Passo 2: Publicar como Web App
1. No editor do Apps Script, clique no botão azul **Implantar** (Deploy) > **Nova implantação** (New deployment).
2. Em "Selecione o tipo" (Select type), clique na engrenagem e escolha **App da Web** (Web app).
3. Preencha:
   - **Descrição**: "Backend Leads Prepara"
   - **Executar como**: "Eu" (Me) — *Importante!*
   - **Quem pode acessar**: "Qualquer pessoa" (Anyone) — *Muito Importante! Isso permite que o site envie dados sem login.*
4. Clique em **Implantar** (Deploy).
5. Autorize o script (se pedir permissão, clique em *Review permissions* -> Escolha sua conta -> *Advanced* -> *Go to (Unsafe)* -> *Allow*).

## Passo 3: Conectar ao Site
1. Copie a **URL do App da Web** gerada (começa com `https://script.google.com/macros/s/...`).
2. Abra o arquivo `index.html` do projeto.
3. Procure a linha:
   ```javascript
   const SCRIPT_URL = "URL_DO_SEU_APPS_SCRIPT_AQUI";
   ```
4. Cole sua URL ali dentro das aspas.

## Testar
1. Abra o `index.html` no navegador.
2. Preencha o formulário e envie.
3. Verifique se os dados apareceram na aba "Leads" da sua planilha.
