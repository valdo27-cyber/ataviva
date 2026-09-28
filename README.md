Ata Viva

    Grave reuniões pelo celular, transcreva automaticamente e gere atas, resumos e tarefas com IA — direto no navegador, sem servidor e sem custo.

O Ata Viva é um aplicativo web progressivo (PWA) 100% front-end: você toca em Iniciar Reunião, fala normalmente com o time e, ao finalizar, o app analisa tudo e entrega o documento no formato que você escolher — ata formal, resumo executivo, tarefas com responsáveis, prazos, pendências e mais. Nenhum dado sai do aparelho.
Funcionalidades

    Gravação de áudio real pelo microfone (com forma de onda ao vivo e controle de pausar/finalizar)
    Transcrição automática em português enquanto a reunião acontece (Web Speech API)
    Participantes & vozes: cadastro de pessoas, frase de reconhecimento e amostra vocal (tom + timbre medidos no dispositivo)
    Presença na sala: marque quem está presente antes de gravar; quem tem voz cadastrada é identificado nas falas
    9 formatos de documento gerados automaticamente por análise de texto local
    Histórico com busca por título e conteúdo, edição de documentos e exclusão com confirmação
    Compartilhamento por WhatsApp, e-mail ou cópia de texto
    Exportação em PDF (paginado), Word (.doc) e áudio original (.webm)
    Backup & restauração: exporta tudo em um único arquivo .json e restaura em qualquer momento ou aparelho
    Armazenamento persistente: o sistema não apaga os dados para liberar espaço
    Instalável como app (ícone na tela inicial, tela cheia) e funciona offline após a primeira visita
    Modo demonstração: se o microfone estiver indisponível, uma reunião simulada permite testar todo o fluxo

Formatos de documento gerados
#	Formato	Descrição
01	Ata formal da reunião	Documento completo para registro oficial
02	Resumo executivo	Os pontos essenciais em poucas linhas
03	Principais decisões	O que foi decidido e combinado
04	Tarefas e responsáveis	Quem faz o quê
05	Prazos definidos	Datas e compromissos, com destaque no texto
06	Pendências	O que ainda está em aberto
07	Próximos passos	Os próximos movimentos do time
08	Transcrição completa	Tudo o que foi dito, com autor e horário
09	Resumo personalizado	Descreva o foco desejado e a IA prioriza

A análise é feita no próprio dispositivo (detecção de decisões, atribuições, prazos, pendências e resumo extrativo) — nenhum texto é enviado para servidores.
Estrutura do projeto

ataviva/├── index.html      # o aplicativo completo (HTML + CSS + JS)├── manifest.json   # metadados do PWA (ícone, nome, cores)├── sw.js           # service worker (cache offline)└── icon.svg        # ícone do aplicativo

Sem build, sem dependências para instalar, sem backend.
Como rodar localmente

Opção 1 — abrir direto (teste rápido no computador):

Dê dois cliques em index.html. O app abre, mas a transcrição por voz fica limitada (navegadores exigem HTTPS para o microfone completo). Use o modo demonstração para navegar pelo fluxo.

Opção 2 — servidor local (recomendado):

# com Node.jsnpx serve .# ou com Pythonpython -m http.server 8080

Acesse http://localhost:8080 no navegador.
Como publicar (grátis)

Netlify Drop (mais rápido):

    Acesse app.netlify.com/drop
    Arraste a pasta do projeto
    O link HTTPS fica pronto na hora

GitHub Pages:

    Crie um repositório público
    Faça upload dos 4 arquivos
    Vá em Settings → Pages → Branch: main → Save
    O app ficará disponível em https://SEU-USUARIO.github.io/NOME-DO-REPO/

Como instalar no celular

Android (Chrome):

    Abra o link publicado no Chrome
    Menu ⋮ → “Instalar app” (ou “Adicionar à tela inicial”)
    Permita o microfone na primeira gravação

iPhone (Safari):

    Abra o link no Safari
    Botão Compartilhar → “Adicionar à Tela de Início”

O app abre em tela cheia, como um aplicativo nativo, e funciona offline após a primeira visita.
Compatibilidade
Recurso	Chrome / Edge (Android e PC)	Safari (iPhone)	Firefox
Gravação de áudio	✅	✅	✅
Transcrição ao vivo	✅	⚠️ limitada	❌
Cadastro de voz / identificação	✅	⚠️ parcial	⚠️ parcial
Documentos, PDF, Word, compartilhar	✅	✅	✅
Backup e histórico	✅	✅	✅
Instalação como app (PWA)	✅	✅	⚠️ parcial

Em navegadores sem transcrição ao vivo, o áudio continua sendo gravado e o modo demonstração cobre o teste do fluxo completo.
Privacidade e dados

    Tudo fica no aparelho: reuniões, transcrições, participantes e perfis de voz são salvos apenas no armazenamento local do navegador (localStorage). Nenhum dado é enviado para servidores próprios — a única dependência externa é o serviço nativo de fala do navegador, usado durante a transcrição.
    Armazenamento persistente: o app solicita ao sistema proteção contra exclusão automática.
    Fechou o navegador? Reiniciou o celular? Ficou sem internet? Nada se perde.
    As duas únicas formas de perder os dados — limpar os dados do navegador no sistema ou desinstalar o app — são cobertas pelo Backup & restauração: exporte o arquivo .json periodicamente (guarde no Google Drive, por exemplo) e restaure quando precisar, inclusive em outro aparelho.
    Exclusões dentro do app sempre pedem confirmação antes de apagar.

    Dica: faça um backup após reuniões importantes. O cartão “Backup & restauração” na tela inicial mostra a data da última cópia.

Limitações conhecidas

    A transcrição ao vivo exige internet (usa o serviço de fala nativo do navegador) e funciona melhor no Chrome e no Edge.
    A identificação de quem está falando é acústica (compara tom e timbre com a amostra cadastrada) — não é biometria. Funciona melhor com vozes distinguíveis entre si; falas sem correspondência ficam sem nome e podem ser corrigidas na edição do documento.
    Os documentos gerados são rascunhos inteligentes: revise antes de circular como documento oficial.

Atualizando o app

Se você editar o index.html e republicar, aumente a versão no topo do sw.js (ex.: ataviva-v1.0 → ataviva-v1.1) para que os celulares baixem a nova versão no próximo acesso.
Stack técnica

    JavaScript puro (sem frameworks) + HTML + CSS
    MediaRecorder API — gravação de áudio
    Web Speech API — transcrição ao vivo (pt-BR)
    Web Audio API — forma de onda, análise de tom (autocorrelação) e timbre (centroide espectral)
    Canvas — visualização do áudio
    localStorage — persistência local
    Service Worker + Web App Manifest — PWA offline
    jsPDF — exportação em PDF
    Lucide — ícones
    Fraunces, Instrument Sans e IBM Plex Mono — tipografia

Licença

Distribuído livremente — ajuste a licença conforme sua necessidade (sugestão: MIT).
