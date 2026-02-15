
# Bruno Reis - Portfólio Profissional

Este projeto é um site profissional desenvolvido com **Next.js 15 (App Router)**, **TypeScript** e **TailwindCSS v4**. O foco é alta performance, SEO e conversão de leads para WhatsApp.

## 🚀 Como Iniciar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Rode o servidor local:**
   ```bash
   npm run dev
   ```

3. **Acesse:** `http://localhost:3000`

## 🛠️ Como Personalizar

O site foi construído pensando na facilidade de edição. Você não precisa mexer em lógica complexa para alterar textos e dados.

### 1. Dados Principais
No diretório `src/data/`, você encontra arquivos TypeScript simples para editar o conteúdo:
- `src/data/profile.ts`: Suas informações (Nome, WhatsApp, Bio, Links).
- `src/data/services.ts`: Seus serviços e pacotes.
- `src/data/projects.ts`: Seus cases de portfólio.
- `src/data/content.ts`: Depoimentos e Perguntas Frequentes (FAQ).

### 2. Estilos e Cores
O tema visual é controlado via variáveis CSS no arquivo `src/app/globals.css`.
Para mudar a cor principal (Azul/Roxo), altere os valores HSL de `--brand-primary` e `--brand-accent`.

### 3. Imagens
Coloque suas imagens na pasta `public/`.
- Ícone/Logo: Substitua o texto "BrunoReis" no componente `Navbar.tsx` se desejar.
- Projetos: Adicione imagens em `public/projects/` e atualize o caminho em `src/data/projects.ts`.

## 📦 Deploy

Este projeto está pronto para ser hospedado na **Vercel** ou **Netlify**.
Basta conectar seu repositório Git e o deploy será automático.

## 📝 Stack Tecnológica

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Ícones:** Lucide React
- **Fonte:** Inter (Google Fonts)

---
Desenvolvido por Bruno Reis (via Antigravity AI).
