# MoradIA

> **Encontre a cidade onde sua vida faz mais sentido.**

O **MoradIA** é uma plataforma de recomendação de cidades que cruza
**perfil pessoal, orçamento e estilo de vida** com dados de cidades
brasileiras para indicar onde cada usuário pode viver melhor.

A proposta é transformar uma decisão complexa --- escolher onde morar
--- em uma experiência orientada por dados, permitindo que o usuário
descubra, compare e avalie cidades de acordo com suas próprias
prioridades.

------------------------------------------------------------------------

## 📌 Sobre o projeto

Escolher onde morar é uma das decisões mais impactantes da vida, mas
normalmente envolve informações espalhadas por diferentes fontes e
critérios difíceis de comparar.

O MoradIA busca resolver esse problema centralizando os principais
indicadores em uma única experiência:

-   **Informação espalhada:** dados sobre custo de vida, segurança,
    clima e outros fatores estão distribuídos em diferentes fontes.
-   **Comparação difícil:** sem um critério comum, comparar cidades de
    maneira justa é complexo.
-   **Decisão de alto risco:** uma escolha inadequada pode gerar
    impactos financeiros, profissionais e de qualidade de vida.

A plataforma transforma essas informações em uma **recomendação
personalizada**, baseada no perfil e nas prioridades de cada usuário.

------------------------------------------------------------------------

## 🎯 Objetivo

O objetivo do MoradIA é ajudar pessoas a responder uma pergunta simples:

> **Qual cidade combina mais com a minha vida?**

Para isso, o produto coleta informações sobre o usuário, analisa
diferentes dimensões das cidades e apresenta um ranking personalizado
com os locais mais compatíveis com seu perfil.

A recomendação busca substituir decisões baseadas apenas em opinião,
pesquisas fragmentadas ou achismo por uma experiência estruturada e
orientada por dados.

------------------------------------------------------------------------

## 👥 Público-alvo

O produto foi pensado para diferentes perfis de pessoas que precisam
tomar uma decisão sobre onde morar.

### Estudantes

Pessoas que estão iniciando a faculdade ou mudando de cidade e precisam
equilibrar fatores como:

-   Baixo custo de vida
-   Proximidade e contexto de localização
-   Vida noturna
-   Novos vínculos

### Aposentados

Pessoas que procuram uma cidade com maior qualidade de vida e
tranquilidade, considerando:

-   Saúde
-   Segurança
-   Clima agradável
-   Qualidade de vida

### Famílias e imigrantes

Pessoas ou famílias que estão se mudando para o Brasil e precisam
avaliar fatores como:

-   Segurança
-   Mercado de trabalho
-   Vida em família
-   Oportunidades profissionais

------------------------------------------------------------------------

## 🧠 Como funciona

O MoradIA organiza a experiência em três grandes momentos:

1.  **Conhecer o usuário**
2.  **Analisar os dados**
3.  **Apresentar e comparar as melhores opções**

O usuário responde a um questionário dividido em etapas. A partir dessas
respostas, seu perfil é comparado com os indicadores das cidades
disponíveis.

O resultado é um **ranking personalizado de cidades**, acompanhado por
um percentual de compatibilidade, pontos positivos, pontos de atenção e
informações detalhadas.

------------------------------------------------------------------------

## 📝 Onboarding

O onboarding possui **8 etapas**, desenvolvidas para coletar as
informações necessárias sem tornar o preenchimento cansativo.

### Etapas

1.  Sobre você
2.  Orçamento
3.  Localização
4.  Trabalho
5.  Estilo de vida
6.  Segurança
7.  Clima
8.  Prioridades

A experiência utiliza barra de progresso e tempo estimado para dar ao
usuário uma noção clara de seu avanço durante o processo.

------------------------------------------------------------------------

## 📊 Dimensões analisadas

O índice de compatibilidade das cidades é construído a partir de **8
dimensões principais**:

  -----------------------------------------------------------------------
  Dimensão                            O que representa
  ----------------------------------- -----------------------------------
  💰 Custo de vida                    Adequação dos custos da cidade ao
                                      orçamento do usuário

  🛡️ Segurança                        Condições de segurança pública

  🌤️ Clima                            Compatibilidade das condições
                                      climáticas com as preferências

  ⭐ Qualidade de vida                Aspectos gerais relacionados ao
                                      bem-estar

  💼 Mercado de trabalho              Oportunidades profissionais
                                      disponíveis

  🚆 Mobilidade                       Condições de transporte e
                                      deslocamento

  🎭 Lazer                            Opções de entretenimento e
                                      atividades

  🎓 Educação                         Estrutura e oportunidades
                                      educacionais
  -----------------------------------------------------------------------

Essas dimensões são combinadas para formar o **índice de
compatibilidade** de cada cidade com o perfil do usuário.

------------------------------------------------------------------------

## 🏙️ Ranking personalizado

Depois do processamento do perfil, o usuário recebe um ranking de
cidades.

Cada recomendação apresenta informações como:

-   **Match Score / percentual de compatibilidade**
-   Indicadores por categoria
-   Pontos fortes
-   Pontos de atenção
-   Acesso aos detalhes completos da cidade

No protótipo apresentado, a análise é realizada considerando **523
cidades brasileiras**, com processamento estimado em menos de 10
segundos.

------------------------------------------------------------------------

## 🔎 Detalhes da cidade

Cada cidade recomendada possui uma página própria com uma visão mais
completa dos seus indicadores.

Entre as informações apresentadas estão:

-   Custo de vida
-   Aluguel médio
-   Segurança pública
-   Saúde
-   Educação
-   Transporte
-   Oportunidades de trabalho

### Simulador financeiro

O MoradIA também apresenta um simulador de custo mensal baseado no
perfil financeiro do usuário.

A experiência permite visualizar:

**Renda → Despesas estimadas → Saldo livre estimado**

Isso ajuda o usuário a entender não apenas se uma cidade combina com seu
estilo de vida, mas também se ela é financeiramente compatível com sua
realidade.

------------------------------------------------------------------------

## ⚖️ Comparação entre cidades

Quando o usuário fica em dúvida entre duas ou três opções, o MoradIA
permite realizar uma comparação lado a lado.

A comparação apresenta:

-   **8 indicadores**
-   Barras de progresso
-   Destaque automático do melhor desempenho em cada categoria
-   Acesso direto à análise completa de cada cidade

Dessa forma, o usuário consegue visualizar rapidamente as diferenças
entre suas principais opções.

------------------------------------------------------------------------

## 🔄 Fluxo do produto

O fluxo principal do MoradIA é composto por seis etapas:

``` text
Landing Page
     ↓
Onboarding
     ↓
Processamento
     ↓
Resultados
     ↓
Detalhes da cidade
     ↓
Comparação
```

### 1. Landing Page

Apresentação da proposta de valor do MoradIA.

### 2. Onboarding

Questionário de 8 etapas para compreender o perfil do usuário.

### 3. Processamento

Análise das respostas e comparação com os dados das cidades.

### 4. Resultados

Ranking personalizado das cidades mais compatíveis.

### 5. Detalhes

Visualização aprofundada dos indicadores e simulação financeira de uma
cidade.

### 6. Comparação

Comparação lado a lado entre duas ou três cidades.

------------------------------------------------------------------------

## 🎨 Design e experiência

O projeto foi desenvolvido com foco em **front-end e experiência do
usuário**.

O processo de desenvolvimento apresentado no projeto foi dividido em
quatro etapas:

### 01 --- Pesquisa & Problema

Investigação sobre como as pessoas decidem onde morar e quais dados são
relevantes para essa decisão.

### 02 --- Arquitetura do fluxo

Mapeamento da jornada do usuário, contemplando:

-   Onboarding
-   Processamento
-   Resultados
-   Detalhes
-   Comparação

### 03 --- UI Design

Definição do design system, incluindo:

-   Cores
-   Componentes
-   Hierarquia visual

### 04 --- Protótipo interativo

Construção do protótipo navegável no **Figma**, utilizado como fonte de
verdade do produto.

------------------------------------------------------------------------

## 🧩 Principais funcionalidades

### MVP / Protótipo

-   [x] Landing Page
-   [x] Onboarding em 8 etapas
-   [x] Coleta de perfil do usuário
-   [x] Coleta de orçamento
-   [x] Coleta de preferências de localização
-   [x] Coleta de preferências profissionais
-   [x] Coleta de estilo de vida
-   [x] Coleta de preferências de segurança
-   [x] Coleta de preferências climáticas
-   [x] Definição de prioridades
-   [x] Processamento do perfil
-   [x] Ranking personalizado
-   [x] Match Score
-   [x] Indicadores por categoria
-   [x] Detalhes da cidade
-   [x] Simulador de custo mensal
-   [x] Comparação entre cidades

------------------------------------------------------------------------

## 📁 Estrutura conceitual do produto

``` text
MoradIA
│
├── Landing Page
│
├── Onboarding
│   ├── Sobre você
│   ├── Orçamento
│   ├── Localização
│   ├── Trabalho
│   ├── Estilo de vida
│   ├── Segurança
│   ├── Clima
│   └── Prioridades
│
├── Processamento
│
├── Resultados
│   ├── Ranking
│   ├── Match Score
│   ├── Pontos fortes
│   └── Pontos de atenção
│
├── Cidade
│   ├── Indicadores
│   ├── Custo de vida
│   ├── Segurança
│   ├── Saúde
│   ├── Educação
│   ├── Transporte
│   ├── Trabalho
│   └── Simulador financeiro
│
└── Comparação
    ├── Cidade A
    ├── Cidade B
    └── Cidade C
```

------------------------------------------------------------------------

## 🛠️ Status do projeto

O MoradIA encontra-se apresentado como um **projeto de front-end e
protótipo de produto**, com a interface, fluxo de onboarding e telas de
resultado desenvolvidos a partir de um protótipo navegável no Figma.

> O Figma é utilizado como fonte de verdade do produto apresentado.

------------------------------------------------------------------------

## 📈 Dados e contexto

O projeto utiliza como contexto dados apresentados na própria pesquisa
do projeto, incluindo informações do **IBGE**, como:

-   **19,2 milhões** de pessoas vivendo fora da região onde nasceram.
-   **4,7 milhões** de pessoas que mudaram de estado entre 2017 e 2022.
-   **87,4%** da população brasileira vivendo em áreas urbanas.
-   **23,3%** das pessoas que moram de aluguel comprometendo mais de 30%
    da renda com moradia.

Esses dados reforçam a relevância de ferramentas que auxiliem na tomada
de decisão sobre localização e moradia.

------------------------------------------------------------------------

## 🚀 Visão do produto

O MoradIA parte de uma ideia simples: **a melhor cidade para morar não é
necessariamente a melhor cidade de forma geral --- é a cidade que melhor
combina com determinada pessoa.**

Ao combinar preferências individuais, orçamento e indicadores urbanos, o
produto busca transformar uma decisão subjetiva e complexa em uma
experiência mais estruturada, personalizada e baseada em dados.

------------------------------------------------------------------------

## 📚 Fonte

Conteúdo e conceitos deste README foram estruturados a partir da
apresentação do projeto **MoradIA --- Projeto Front-End · Protótipo de
Produto**.

Os dados de contexto apresentados no projeto têm como fontes indicadas:

-   IBGE --- Censo Demográfico 2022
-   IBGE --- Pesquisa Nacional por Amostra de Domicílios Contínua (PNAD
    Contínua)
