# Design system do MoradIA

Referência extraída da **Landing Page** no Figma (fonte de verdade da identidade visual):
https://www.figma.com/design/mC4unLMnWnjcAAtdVGTIgm/MoradIA?node-id=5-8 (frame `01 — Landing Page`, 1440px de largura).

O arquivo Figma não tem variáveis/estilos publicados — os valores abaixo são os usados diretamente nos layers. Toda tela nova deve reusar estes tokens e padrões.

## Cores

| Token sugerido | Hex | Uso |
|---|---|---|
| `--roxo-moradia` | `#4F46E5` | Marca: botões primários, links, eyebrow, "IA" do logo, ícones, valores em destaque |
| `--roxo-claro` | `#EEF2FF` | Fundo de caixas de ícone, fundo do visual do hero |
| `--texto-titulo` | `#111827` | Títulos, labels fortes, logo "Morad" |
| `--texto-corpo` | `#6B7280` | Parágrafos, descrições, links de navegação |
| `--texto-suave` | `#9CA3AF` | Copyright, textos terciários |
| `--borda` | `#E5E7EB` | Bordas de cards, divisórias entre seções, header |
| `--fundo-pagina` | `#F8FAFC` | Fundo da página e de cards dentro de seções brancas |
| `--branco` | `#FFFFFF` | Header, seções alternadas, cards sobre fundo cinza |
| `--verde-sucesso` | `#10B981` | Match alto, avaliações positivas ("Excelente") |
| `--verde-sucesso-fundo` | `#ECFDF5` | Fundo do badge de match |

**Ritmo de fundos:** seções alternam `#F8FAFC` (sem borda) e `#FFFFFF` (com `border-top`/`border-bottom: 1px solid #E5E7EB`). Cards invertem: card branco sobre seção cinza, card `#F8FAFC` sobre seção branca.

## Tipografia

Família única: **Inter** (`var(--fonte-moradia)`).

| Papel | Tamanho | Peso | Line-height | Cor |
|---|---|---|---|---|
| Display (H1 do hero) | 56px | 800 | 1.1 | `#111827` |
| Título de seção (H2) | 36px | 800 | normal | `#111827` |
| Eyebrow (acima do H2) | 14px, `uppercase` | 700 | normal | `#4F46E5` |
| Logo | 20px | 700 | normal | "Morad" `#111827` + "IA" `#4F46E5` |
| Valor de métrica | 20px | 700 | normal | `#111827` / `#10B981` / `#4F46E5` |
| Título de card grande | 18px | 700 | normal | `#111827` |
| Lead (subtítulo do hero) | 18px | 400 | 1.6 | `#6B7280` |
| Título de card pequeno | 16px | 700 | normal | `#111827` |
| Corpo | 16px | 400 | 1.6 | `#6B7280` |
| Botão primário grande | 16px | 700 | — | branco |
| Botão / link / nav | 14px | 600 (nav: 500) | — | branco / `#4F46E5` / `#6B7280` |
| Corpo pequeno | 14px | 400 | 1.5 | `#6B7280` |
| Legenda / label | 12px | 400 (label de métrica: 600) | normal | `#6B7280` |
| Badge / pin | 12px | 700 | normal | `#10B981` / `#111827` |

A palavra "IA" em títulos que citam a marca vai em roxo (ex.: "Como funciona o Morad**IA**?").

## Espaçamento e layout

- Largura de referência 1440px, **padding horizontal de 80px** (conteúdo em 1280px).
- Seções: `padding: 96px 80px`; hero `100px 80px`. Gap entre cabeçalho da seção e conteúdo: 48–64px.
- Cabeçalho de seção centralizado com largura de 600px: eyebrow + H2, gap 12px.
- Grids: gap 24px (cards pequenos) ou 32px (cards grandes); colunas com `flex: 1`.
- Escala usada: 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96.

## Raios e sombras

| Raio | Onde |
|---|---|
| 6px | Badge, logo pequeno (28px) |
| 8px | Botão padrão, logo (32px) |
| 10px | Caixa de ícone 40px |
| 12px | Botão grande, caixa de ícone 48px, mini-card de métrica |
| 16px | Cards |
| 20px | Card de preview grande, pins (pílula) |
| 24px | Painel visual do hero |

Sombra única e sutil: `0 4px 10px rgba(0, 0, 0, 0.03)` (botão principal do hero e pins). O restante do visual usa bordas, não sombras.

## Componentes

**Header** — altura 80px, fundo branco, `border-bottom 1px #E5E7EB`, `space-between`. Logo à esquerda (quadrado roxo 32px raio 8px com ícone bússola branco + "MoradIA"); à direita links de nav (14px/500 `#6B7280`, gap 32px) e botão primário pequeno.

**Botões**
- Primário grande: fundo `#4F46E5`, texto branco 16px/700, `padding 16px 32px`, raio 12px, sombra sutil.
- Primário padrão: fundo `#4F46E5`, texto branco 14px/600, `padding 10px 20px` (header) ou `12px 24px`, raio 8px.
- Link com seta: texto `#4F46E5` 16px/600 + ícone `arrow-right` 16px, gap 8px, sem fundo.
- Link simples: `#4F46E5` 14px/600 (ex.: "Ver Detalhes").

**Caixa de ícone** — fundo `#EEF2FF`, ícone roxo centralizado. 48px/raio 12px com ícone 24px (cards grandes) ou 40px/raio 10px com ícone 20px (cards pequenos).

**Card de etapa** (vertical) — fundo `#F8FAFC`, `padding 32px`, raio 16px, gap 20px: caixa de ícone 48px → título 18px/700 → texto 14px/1.5.

**Card de indicador** (horizontal) — fundo branco, borda `#E5E7EB`, `padding 20px`, raio 16px, gap 16px: caixa de ícone 40px + título 16px/700 e descrição 12px (uma linha, com `text-overflow: ellipsis`).

**Card de cidade / preview** — fundo `#F8FAFC`, borda `#E5E7EB`, `padding 32px`, raio 20px, gap 24px. Topo: nome da cidade 18px/700 + badge de match, e link "Ver Detalhes" à direita. Abaixo, 3 mini-cards de métrica (branco, borda, `padding 16px`, raio 12px, gap 8px): label 12px/600 `#6B7280` + valor 20px/700 colorido pelo significado.

**Badge de match** — fundo `#ECFDF5`, texto `#10B981` 12px/700, `padding 4px 8px`, raio 6px. Formato do texto: `98% Match`.

**Pin de cidade** — pílula branca, raio 20px, `padding 8px`, gap 8px, sombra sutil: bolinha 12px (verde para melhor match, roxa para os demais) + "Cidade • 92% Match" 12px/700.

**Footer** — fundo branco, `border-top`, `padding 64px 80px 40px`. Logo (28px) + descrição 14px à esquerda (largura 320px); colunas de links à direita (título 14px/700 `#111827`, links 14px/400 `#6B7280`, gap 12px, colunas com gap 64px). Linha inferior: copyright 14px `#9CA3AF` e ícones sociais 20px (gap 16px).

## Ícones

Os ícones do Figma são do set **Feather** (compass, arrow-right, user, activity, star, wallet, shield, sun, heart, briefcase, map, book-open, twitter, instagram, linkedin). No código, usar `react-icons/fi` (`FiCompass`, `FiArrowRight`, …), já disponível via `react-icons`. Cor padrão: `#4F46E5` dentro das caixas de ícone, branca no logo.

## Tom de voz

pt-BR, direto e acolhedor, na segunda pessoa ("Encontre a cidade onde sua vida faz mais sentido", "Conte sobre você"). Resultados sempre com percentual de match.

## Observações sobre o código atual

- `src/index.css` define `--roxo-moradia` e `--fonte-moradia`, mas o `body` usa `#EEF2FF` como fundo, enquanto a landing usa `#F8FAFC` — telas novas devem seguir a landing.
- O Login atual usa algumas variações que não aparecem na landing (bordas `#E0E7FF`/`#C7D2FE`, sombras roxas). Ao criar telas novas, preferir os tokens deste documento.
