# Publicar no GitHub Pages

Este projeto está preparado para o endereço:

https://geysllaramos.github.io/curitiba-digital-guide/

No GitHub:
1. Vá em Settings > Pages.
2. Em Build and deployment, selecione Source: GitHub Actions.
3. Vá em Actions e execute "Deploy to GitHub Pages" (ou faça um novo push na branch main).
4. Aguarde o workflow terminar.
5. Acesse o endereço acima.

A configuração do Vite usa a base `/curitiba-digital-guide/`, necessária para um repositório publicado como GitHub Pages de projeto.

## Correções aplicadas (04/09/2026)

O deploy estava falhando com 404 por três motivos, já corrigidos neste projeto:

1. **Sem HTML estático**: o projeto usa TanStack Start em modo SSR, que por padrão não gera nenhum `index.html` — só um servidor. Foi habilitado o pré-renderização estática (`prerender.enabled: true` em `vite.config.ts`), gerando HTML real para cada rota, compatível com GitHub Pages (que só serve arquivos estáticos).
2. **`base` ignorado**: o wrapper `@lovable.dev/vite-tanstack-config` só aplica configurações do Vite quando colocadas dentro de uma chave `vite: { ... }`. O `base` estava no nível raiz do objeto e era descartado silenciosamente, fazendo os arquivos CSS/JS serem referenciados a partir da raiz do domínio (dando 404) em vez de `/curitiba-digital-guide/`. Corrigido movendo `base` para dentro de `vite: { base: ... }`.
3. **Dois workflows conflitantes**: existiam `deploy.yml` e `deploy-pages.yml`, ambos disparando no mesmo push e competindo pelo mesmo grupo de deploy do GitHub Pages. Foi removido o duplicado, mantendo apenas `deploy.yml` (baseado em Bun, compatível com o `bun.lock` do projeto).

Build testado localmente e validado: todas as rotas são pré-renderizadas com os caminhos de assets, links de navegação e favicon corretamente prefixados com `/curitiba-digital-guide/`.
