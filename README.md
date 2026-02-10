# Link da Bio - Prepara Cursos

Uma Landing Page One-Page de alta conversão, focada em capturar leads antes de redirecionar para o WhatsApp.

## Tecnologias
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla) - Foco em performance.
- **Backend**: Google Apps Script (para salvar em planilha).
- **Design**: Estilo Premium SaaS, Mobile-first.

## Como fazer o Deploy na Vercel

A estrutura do projeto já está pronta. Como é um site estático (`index.html`), a Vercel detecta e configura tudo automaticamente.

### Opção 1: Via Git (Recomendado)
1. Crie um repositório no GitHub/GitLab/Bitbucket.
2. Suba os arquivos desta pasta.
3. Conecte sua conta da Vercel ao repositório.
4. O deploy será automático.

### Opção 2: Via Vercel CLI
Se você tiver a CLI instalada:
```bash
vercel
```

## Como Atualizar o Site
Se você fez alterações (como adicionar o logo), basta publicar novamente:
- **Via Vercel CLI**: Rode `vercel --prod` no terminal.
- **Via Git**: Faça `git add .`, `git commit -m "add logo"` e `git push`. A Vercel detectará e atualizará automaticamente.

## Configuração Obrigatória
Não esqueça de configurar a URL do Backend no arquivo `index.html`:
```javascript
const SCRIPT_URL = "SUA_URL_DO_GOOGLE_APPS_SCRIPT";
```
*(Veja o arquivo `DEPLOY_GUIDE.md` para saber como gerar essa URL)*
