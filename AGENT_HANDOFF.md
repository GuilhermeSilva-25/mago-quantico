# 🤝 AGENT HANDOFF: Mentor & Guia do curso.dev

> **Atenção para o Agente de IA (Antigravity / Assistente):**
> Você está atuando como **Mentor e Guia de Aprendizado** do desenvolvedor **Guilherme** no **curso.dev** (do Filipe Deschamps).
>
> 🔮 **DECISÃO ESTRATÉGICA DE PRODUTO (O MAGO QUÂNTICO):**
> O Guilherme decidiu transformar o projeto em um **produto 100% original**, mantendo todo o rigor arquitetural e tecnológico do curso.dev:
>
> - **Nome do Produto:** **O Mago Quântico**
> - **Conceito:** Portal colaborativo de artigos, estudos e debates sobre como a consciência, os símbolos e a informação moldam a realidade.
> - **Identidade:** Inspirado na estética limpa, minimalista e objetiva do TabNews (livre de ruídos, clickbait e focado em alta densidade de conteúdo), unindo ciência de fronteira (física quântica, teoria da informação) e filosofia hermética/desenvolvimento pessoal. O "Mago" como arquétipo do domínio da mente e dos símbolos; o "Quântico" como a visão da realidade enquanto campo de possibilidades onde o observador altera o observado.
> - **Regra de Ouro:** Toda a stack tecnológica, boas práticas, testes, arquitetura de banco, migrations e infraestrutura do curso.dev são aplicadas integralmente; todo o conteúdo temático, copywriting, regras de negócio e identidade visual são adaptados para **O Mago Quântico**.
>
> **LEIA ESTE ARQUIVO COM ATENÇÃO ANTES DE RESPONDER.**
> Ele contém a identidade do seu papel, o histórico completo do que já foi feito, as decisões arquiteturais tomadas e a próxima tarefa a ser executada. Ao final de cada sessão, atualize o bloco de _Notas de Sessão_ para manter a continuidade perfeita do projeto.

---

## 🎯 1. Princípios de Atuação (Seu Papel como Tutor)

1. **Entendimento antes da execução:**
   - Nunca cuspa códigos prontos gigantescos sem explicar o conceito.
   - O Guilherme precisa entender os fundamentos (arquitetura, porquês e decisões de design).
2. **O Guilherme no comando:**
   - Ele escreve, digita os comandos e gerencia o repositório. Você orienta passo a passo, aponta o caminho e explica o que cada instrução faz.
3. **Dissecar e aprender com erros:**
   - Quando um erro aparecer, não apenas dê a correção; explique de onde o erro veio, o que a mensagem significa e por que a solução funciona.
4. **Padrão profissional:**
   - Commits atômicos, descritivos e no padrão Conventional Commits (ex: `feat: ...`, `fix: ...`).
   - Respeito à didática do curso.dev (evitar atalhos mágicos como `create-next-app` — construir do zero para aprender).

---

## 💻 2. Contexto do Ambiente de Desenvolvimento

- **Sistema Operacional:** Windows 11 com **WSL 2 (Ubuntu)**.
- **Local do Projeto no Linux:** `/home/guilherme/clone-tabnews` (armazenado no filesystem nativo do Linux no WSL para máxima performance de I/O).
- **Docker:** **Docker Engine nativo no Ubuntu** (sem Docker Desktop pesado), configurado para rodar sem `sudo` (`sudo usermod -aG docker $USER`).
- **Node & NVM:** NVM instalado no Ubuntu (`v0.40.1`), Node.js LTS (`v26.13.0`) e npm configurados.
- **Editor:** Visual Studio Code no Windows conectado ao WSL via extensão oficial (`ms-vscode-remote.remote-wsl`).
- **Git & GitHub:**
  - Repositório remoto: `https://github.com/GuilhermeSilva-25/clone-tabnews.git`
  - Conexão configurada via **HTTPS com Git Credential Manager** (`/mnt/c/Program Files/Git/mingw64/bin/git-credential-manager.exe`).
  - _Nota:_ Conexão configurada via HTTPS com Git Credential Manager adotada como padrão estável.

---

## 🗺️ 3. Status da Jornada (Roadmap do curso.dev)

| Módulo / Dia                       | Descrição                                                          | Status                              |
| :--------------------------------- | :----------------------------------------------------------------- | :---------------------------------- |
| **Dia 01. Ambiente Local**         | WSL 2, Ubuntu, Docker Engine nativo, NVM, Node LTS, Git            | ✅ **Concluído**                    |
| **Dia 02. Setup do Projeto**       | `npm init -y`, `package.json`, Next.js do zero, `.gitignore`       | ✅ **Concluído**                    |
| **Dia 03. Primeira Página**        | `pages/index.js`, Fast Refresh no `http://localhost:3000`          | ✅ **Concluído** (commit `932fd2f`) |
| **Dia 04. Deploy Contínuo**        | Conta Vercel, integração GitHub e CD automático                    | ✅ **Concluído** (commit `52a2f26`) |
| **Dia 05. Git a Fundo**            | Snapshots, Diffs, 3 Estágios e `git commit --amend`                | ✅ **Concluído** (commit `6c8a8f1`) |
| **Dia 06. Git Remoto & Push**      | `git push`, `main` vs `origin/main`, `rebase` e `git push --force` | ✅ **Concluído** (commit `4d0c67f`) |
| **Dia 07. Client/Server & Deploy** | Modelagem Client/Server, URLs imutáveis Vercel, Desafio 7.5        | ✅ **Concluído** (commit `ff50cc3`) |
| **Dia 08. Mentalidade Técnica**    | Programação "Orgânica" vs "Impressora 3D", ciclos curtos           | ✅ **Concluído**                    |
| **Dia 09. Gestão & Milestones**    | Minimalismo, quebra em tarefas, Milestones e Issues no GitHub      | ✅ **Concluído**                    |
| **Dia 10. Estilização & Linter**   | EditorConfig, Prettier, Scripts lint e Issue #2 fechada            | ✅ **Concluído** (commit `a02b7fe`) |
| **Dia 11. Teoria de DNS**          | Resolução da raiz ao autoritativo, `dig +trace`, Níveis 1 e 2      | ✅ **Concluído**                    |
| **Dia 12. Domínio Próprio**        | Registro.br + Vercel (Issue #1 pausada temporariamente)            | ⏸️ **Pausado (Backlog)**            |
| **Dia 13. Em Construção**          | Página do Mago Quântico no ar e Issue #3 fechada                   | ✅ **Concluído** (commit `d3cee7e`) |
| **Próximo. Banco & Docker**        | Docker Compose PostgreSQL, variáveis de ambiente, `/api/v1/status` | ⏳ **A EXECUTAR**                   |
| **Futuro. Banco & Migrations**     | Docker Compose PostgreSQL, `node-pg-migrate`                       | ⏳ Pendente                         |
| **Futuro. Testes Automatizados**   | Jest, orquestração e GitHub Actions                                | ⏳ Pendente                         |
| **Futuro. Core do TabNews**        | APIs, autenticação, posts e frontend completo                      | ⏳ Pendente                         |

---

## 🐛 4. Diário de Decisões e Gotchas Resolvidos

1. **Conflito de formato de módulo (CommonJS vs ESM):**
   - _Problema:_ O `npm init -y` do Node v26 gerou `"type": "commonjs"` automaticamente no `package.json`. Ao rodar `pages/index.js` com `export default Home`, o Turbopack do Next.js quebrou acusando conflito de módulo.
   - _Solução:_ Removemos as chaves `"type": "commonjs"` e `"main": "index.js"` do `package.json`, permitindo que o Next.js gerencie os módulos nativamente.
2. **Bloqueio de SSH (Porta 22):**
   - _Problema:_ O comando `ssh -T git@github.com` congelava no estágio devido a bloqueio de firewall na porta 22.
   - _Solução:_ Configuramos o Git Credential Manager sobre HTTPS. Rápido, seguro e funciona em qualquer rede.
3. **Local dos arquivos:**
   - O repositório foi clonado dentro da home do Ubuntu (`~/clone-tabnews`) para garantir que o Next.js e o Docker rodem com velocidade nativa (evitando a lentidão da ponte 9P em `/mnt/c/`).

---

## 📝 5. Diário de Bordo (Session Handoff Log)

### Sessão 01 — 10/11/2026

- **Tutor:** Antigravity (Sessão inicial)
- **O que foi feito:**
  - Instalação e ativação do WSL 2 e distribuição Ubuntu.
  - Instalação do Docker Engine e Docker Compose nativos no Linux.
  - Configuração do NVM e Node LTS.
  - Instalação da extensão WSL no VS Code.
  - Inicialização do projeto Next.js do zero com `package.json` limpo e `.gitignore` protegido (`node_modules`, `.next`).
  - Criação da primeira rota `pages/index.js` renderizando no navegador.
  - Primeiro commit profissional realizado e sincronizado no GitHub (`feat: adiciona Next.js e cria primeira pagina`).

### Sessão 02 — 11/11/2026

- **Tutor:** Antigravity (Pair Programming / Tutor curso.dev)
- **O que foi feito:**
  - **Módulo / Dia 04 (Deploy Contínuo na Vercel):**
    - Cadastro e configuração da conta Vercel (plano Hobby) integrada ao GitHub (`GuilhermeSilva-25`).
    - Importação do repositório `clone-tabnews` com detecção automática do framework Next.js.
    - Primeiro deploy em produção com sucesso (URL pública, HTTPS e CDN Edge).
    - Validação prática do pipeline de CD: alteração de frase em `pages/index.js` (Sêneca), commit semântico (`52a2f26 feat: atualiza mensagem da pagina inicial`), push e deploy automático imediato na Vercel via Webhook.
  - **Módulo / Dia 05 (Git a Fundo e Prática Avançada):**
    - Desmistificação do funcionamento interno do Git: banco de dados local na pasta `.git`, operação 100% offline.
    - O "Plot Twist" dos snapshots vs deltas ("Jogo dos 7 Erros") e leitura técnica de cabeçalhos de diff (`a/`, `b/`, hunk header `@@ -1,5 +1,5 @@`).
    - Domínio dos 3 estágios: _Working Directory_ ➔ _Staging Area (Index)_ ➔ _Repository_.
    - Pegadinha do `git diff` resolvida na prática: entendimento de que `git diff` compara Working Tree com Staging Area, enquanto `git diff --staged` compara Staging Area com HEAD.
    - Uso prático de `git commit --amend`: inclusão de esquecimento intencional no `README.md`, substituição do snapshot, compreensão da alteração do HASH criptográfico (SHA-1) e assimilação da Regra de Ouro (nunca dar amend em commits já publicados).
    - Commit semântico finalizado e enviado com sucesso para o GitHub: `6c8a8f1 docs: adiciona descricao e link do tabnews no README`.
- **Próxima Ação Imediata:**
  - Sincronizar o repositório local via `git pull` e iniciar o Dia 06.

### Sessão 03 — 12-13/11/2026

- **Tutor:** Antigravity (Tutor curso.dev)
- **O que foi feito:**
  - **Módulo / Dia 06 (Git Remoto, Linhas do Tempo e Push Force):**
    - Entendimento conceitual de `origin` como alias do repositório remoto e distinção dos ponteiros `main` (local) vs `origin/main` (rastreador remoto).
    - Descolamento de ponteiros comprovado na prática via `git log --graph` ao commitar localmente mantendo `origin/main` no passado.
    - **Momento de Ouro / Resolução de Divergência Real:** Ocorrência prática de histórico divergente (formato em "Y" com bifurcação de commits) após alteração local antes de pull da sessão anterior. Diagnóstico do erro `rejected (non-fast-forward)`.
    - Aplicação de `git pull --rebase` para unificar a árvore em linha reta sem nós (Fast-Forward), entendendo a recalculação do hash SHA-1 da nova base.
    - **Prática da Aula 6.4 (O perigo do `--force`):** Uso de `git commit --amend` pós-push gerando nova divergência, validação da rejeição de segurança do Git e execução consciente de `git push --force` (`+ 860a29b...4d0c67f main -> main (forced update)`).
    - Fixação da Regra de Ouro: nunca usar `--force` em branches compartilhadas (equipes/main), restringindo seu uso para branches isoladas de feature.
  - **Módulo / Dia 07 (Client e Server, Vercel e Desafio da Frase):**
    - Consolidação do modelo mental de Client e Server como papéis flexíveis e contextuais (e não entidades físicas fixas).
    - Entendimento sobre o ecossistema de deploy contínuo (CD), URLs de produção vs URLs imutáveis de deploy na Vercel e o mecanismo de _Deployment Protection_.
    - Execução autônoma do Desafio 7.5: atualização de `pages/index.js` com a frase de Steve Jobs (_"Todos deveriam aprender a programar, porque isso ensina a pensar."_), commit semântico (`ff50cc3 feat: atualiza mensagem da pagina inicial`), push e validação do deploy em produção.
  - **Módulo / Dia 08 (Mentalidade Técnica e Programação Orgânica):**
    - Absorção do modelo de Programação Orgânica vs Impressora 3D (sistemas vivos, iterativos e com ciclos curtos de entrega).
    - Desmistificação do sucesso em software: contato com a realidade rápido, feedback contínuo e respeito aos fundamentos.
  - **Módulo / Dia 09 (Gestão Minimalista, Dopamina e GitHub Milestones):**
    - Aulas 9.1 a 9.4 assistidas: entendimento sobre a neurobiologia da motivação (dopamina na conclusão de tarefas pequenas) e o perigo do "tudo ou nada".
    - Princípio do minimalismo em gestão de projetos: manter tarefas e marcos centralizados diretamente no GitHub.
- **Próxima Ação Imediata:**
  - Setup do ambiente na máquina de casa e criação da Milestone 0 / Issues no GitHub.

### Sessão 04 — 13/11/2026

- **Tutor:** Antigravity (Tutor curso.dev)
- **O que foi feito:**
  - **Setup Completo do Ambiente Local na Máquina Pessoal:**
    - Diagnóstico do sistema operacional e detecção de dependências existentes.
    - Instalação e ativação da distribuição **Ubuntu** no **WSL 2**.
    - Instalação da extensão oficial do **WSL** (`ms-vscode-remote.remote-wsl`) no VS Code.
    - Instalação do **NVM** (`v0.40.1`), Node.js LTS (`v26.13.1`) e npm (`11.20.0`) no Ubuntu.
    - Configuração de identidade do Git (`Guilherme Silva` / `guime.silva333@gmail.com`) e integração nativa com o **Git Credential Manager** do Windows (`ucrt64/bin`).
    - Clonagem do repositório no sistema de arquivos nativo do Linux (`~/clone-tabnews`), eliminando gargalos de I/O e prevenindo conflitos com o OneDrive.
    - Resolução de dependências com `npm install` e validação com sucesso do servidor Fast Refresh do Next.js via `npm run dev` na porta 3000.
    - Paridade 100% atingida entre a máquina do estágio e a máquina de casa.
  - **Módulo / Dia 09 (Gestão & Milestones - Conclusão Prática):**
    - Criação da **Milestone 0: Em construção** no repositório GitHub.
    - Abertura e vinculação das 3 primeiras issues à Milestone 0:
      - Issue #1: `Colocar o site num domínio .com.br`
      - Issue #2: `Definir estilização do código e configurar editor`
      - Issue #3: `Programar página de "Em construção"`
    - Fixação do modelo de gestão minimalista: centralização do ciclo de vida do projeto no GitHub e foco em ciclos curtos de entrega.
- **Próxima Ação Imediata:**
  - Iniciar a resolução das tarefas da Milestone 0 pelo **Dia 10**:
    - Analisar a Issue #1 (estratégia de domínio) ou avançar para a Issue #2 (`.editorconfig`).

### Sessão 05 — 14/11/2026

- **Tutor:** Antigravity (Tutor curso.dev)
- **O que foi feito:**
  - **Módulo / Dia 10 (Estilização de Código, EditorConfig & Prettier):**
    - Absorção da importância crítica de estilização de código para a sanidade de Git diffs e prevenção de incidentes em produção (história real do Pagar.me).
    - Criação de tasklist interna na Issue #2 do GitHub.
    - Instalação da extensão oficial do EditorConfig no VS Code e criação do arquivo `.editorconfig` na raiz do projeto (commit `ba753fe`).
    - Instalação do Prettier (`v3.10.1`) em `devDependencies` e configuração dos scripts `lint:check` e `lint:fix` no `package.json`.
    - Criação do arquivo de proteção `.prettierignore` para a pasta de cache/build do Next.js (`.next`).
    - Execução do `npm run lint:fix` formatando com sucesso todos os arquivos (`pages/index.js`, `package.json`, etc.).
    - Fechamento automatizado da Issue #2 no GitHub através de commit semântico (`a02b7fe style: adiciona prettier e scripts de lint (closes #2)`).
    - Avanço da **Milestone 0: Em construção** para **33%** de conclusão (1 fechada / 2 abertas).
- **Próxima Ação Imediata:**
  - Avaliar a Issue #1 (`Colocar o site num domínio .com.br`) ou avançar para o desenvolvimento da Issue #3 (`Programar página de "Em construção"`).

### Sessão 06 — 15-16/11/2026

- **Tutor:** Antigravity (Tutor curso.dev)
- **O que foi feito:**
  - **Módulo / Dia 11 (DNS a Fundo - Teoria e Prática de Resolução):**
    - Desmistificação da árvore de DNS da direita para a esquerda (`.` ➔ `.br` ➔ autoritativo ➔ IP).
    - Execução do Desafio Nível 1 com `dig +trace tabnews.com.br` no Ubuntu, observando os 3 saltos reais (Root servers, Registro.br e Cloudflare Anycast).
    - Execução do Desafio Nível 2 dissecando registros cirúrgicos: `NS`, `AAAA`, `A` da Vercel e registros `TXT` (entendimento profundo de SPF contra spoofing e verificação de propriedade).
  - **Virada Estratégica de Produto (O Mago Quântico):**
    - Decisão de transformar o projeto em um produto original mantendo 100% da stack e rigor do curso.dev.
    - Atualização do `package.json` (`o-mago-quantico`), `README.md` completo com manifesto, e criação da página "Em Construção" (`pages/index.js`) em modo escuro com design minimalista.
    - Build de produção Next.js validado com sucesso e lint 100% aprovado.
    - Fechamento da **Issue #3: Programar página de "Em construção"** via commit semântico (`d3cee7e feat: transforma projeto em O Mago Quantico e cria pagina em construcao (closes #3)`).
    - Milestone 0 avançada para **66%** concluída.
  - **Decisão Pragmática de Gestão (Issue #1 / Domínio):**
    - Conscientemente optou-se por postergar a compra do domínio `.com.br` no Registro.br (R$ 40), mantendo a Issue #1 no backlog para o momento de lançamento final.
    - Domínio gratuito e seguro com HTTPS da Vercel (`*.vercel.app`) atende perfeitamente à fase atual de desenvolvimento.
- **Próxima Ação Imediata:**
  - Iniciar o próximo grande marco do curso.dev: **Banco de Dados, Docker Compose e a primeira rota de API (`/api/v1/status`)**.

---

_(Próximo agente: adicione a "Sessão 07" abaixo ao encerrar sua jornada!)_
