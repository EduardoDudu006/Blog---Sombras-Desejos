🩸 Sombras & Desejos — Dark Romance Blog

Sombras & Desejos é um projeto de blog moderno e interativo voltado ao universo Dark Romance, desenvolvido exclusivamente com HTML, CSS e JavaScript puro, sem frameworks ou bibliotecas externas.

O foco do projeto é unir estética sombria, experiência cinematográfica e boa legibilidade, criando uma interface elegante, imersiva e emocionalmente coerente com o gênero literário proposto.

📸 Visão Geral

O blog apresenta:

Página única (SPA estática)

Layout responsivo

Identidade visual dark com destaque em vermelho

Transição cinematográfica ao alternar temas

Modo Dark + Red automático

Seção de lançamentos

Seção de resenhas com conteúdo editorial

Estrutura pronta para expansão (loja, posts, newsletter, etc.)

🚀 Tecnologias Utilizadas

HTML5
Estrutura semântica e acessível

CSS3

Variáveis CSS (custom properties)

Gradientes avançados

Glassmorphism

Animações e transições

Layout com Grid e Flexbox

JavaScript (Vanilla JS)

Controle de tema

Detecção de horário do sistema

Detecção de preferência do sistema operacional

Transição cinematográfica

Persistência de preferências com localStorage

📂 Estrutura do Projeto
/
├── index.html      # Estrutura principal da página
├── style.css       # Estilos globais, temas e animações
└── script.js       # Lógica de tema e transições

🎨 Funcionalidades Principais
🌙 Modo Dark + Red Automático

O projeto ativa automaticamente o tema Dark + Red quando:

O sistema operacional do usuário está em modo escuro OU

O horário local está entre 18h e 6h

O usuário também pode alternar manualmente o tema através do botão no header.
A escolha é salva no localStorage.

🎬 Transição Cinematográfica de Tema

Ao alternar o tema, o sistema executa uma transição suave e dramática:

Overlay escuro com gradiente vermelho

Efeito de blur no conteúdo

Sweep de luz animado

Duração curta (~900ms) para não comprometer UX

Essa transição foi pensada para reforçar a atmosfera narrativa do projeto.

🖤 Identidade Visual

Tipografia elegante e legível

Contraste adequado para leitura prolongada

Cores coerentes com o gênero Dark Romance

Botões com hover, glow e feedback visual

Cards com profundidade e efeito glass

📖 Conteúdo Editorial

O projeto já inclui uma resenha completa do livro fictício Sombras da Noite, servindo como:

Demonstração de conteúdo

Modelo para futuras resenhas

Prova de conceito editorial

🧠 Arquitetura de Tema

O controle de tema é feito via:

:root { ... }
[data-theme="dark-red"] { ... }


Isso permite:

Fácil criação de novos temas

Manutenção simples

Escalabilidade sem refatorações complexas

🧪 Compatibilidade

Navegadores modernos (Chrome, Edge, Firefox, Safari)

Algumas features visuais utilizam backdrop-filter

Navegadores antigos podem não renderizar blur (degradação graciosa)

⚠️ Pontos de Atenção

Imagens do Unsplash são placeholders

Botões de compra não possuem backend

Não há persistência de dados além do localStorage

Projeto é 100% frontend estático

🔮 Possíveis Evoluções Futuras

Sistema de posts dinâmicos

Integração com API ou CMS

Newsletter funcional

Página de resenha individual

Loja com links de afiliado reais

Versão PWA instalável

Múltiplos temas narrativos (Dark Gold, Noir Total, etc.)

📜 Licença

Este projeto é livre para uso educacional e demonstrativo.
Para uso comercial, recomenda-se ajustar imagens, textos e direitos autorais.

✨ Conclusão

Sombras & Desejos não é apenas um blog — é uma experiência visual e narrativa pensada para leitores que apreciam histórias intensas, atmosferas densas e interfaces que conversam com o conteúdo.

“A noite cai… e o site acompanha.”
