// Funções puras que derivam os KPIs do dashboard a partir do histórico de análises.
// Quando houver backend, basta trocar a fonte das análises.

const chaveCidade = ({ nome, uf }) => `${nome}, ${uf}`;

function porDataDesc(a, b) {
    return b.data.localeCompare(a.data);
}

// Cidade que ficou em 1º lugar mais vezes (empate: a que venceu mais recentemente).
function cidadeMaisRecomendada(analises) {
    const vitorias = new Map();
    for (const analise of [...analises].sort(porDataDesc)) {
        const chave = chaveCidade(analise.cidades[0]);
        vitorias.set(chave, (vitorias.get(chave) ?? 0) + 1);
    }

    let campea = null;
    for (const [cidade, vezes] of vitorias) {
        if (!campea || vezes > campea.vezes) campea = { cidade, vezes };
    }
    return campea;
}

function melhorMatch(analises) {
    let melhor = null;
    for (const analise of analises) {
        for (const cidade of analise.cidades) {
            if (!melhor || cidade.match > melhor.match) {
                melhor = { cidade: chaveCidade(cidade), match: cidade.match };
            }
        }
    }
    return melhor;
}

// Cidades que mais aparecem em qualquer posição do ranking, com o match médio.
function rankingCidades(analises, limite) {
    const cidades = new Map();
    for (const analise of analises) {
        for (const cidade of analise.cidades) {
            const chave = chaveCidade(cidade);
            const atual = cidades.get(chave) ?? { cidade: chave, aparicoes: 0, somaMatch: 0 };
            atual.aparicoes += 1;
            atual.somaMatch += cidade.match;
            cidades.set(chave, atual);
        }
    }

    return [...cidades.values()]
        .map(({ cidade, aparicoes, somaMatch }) => ({
            cidade,
            aparicoes,
            matchMedio: Math.round(somaMatch / aparicoes),
        }))
        .sort((a, b) => b.aparicoes - a.aparicoes || b.matchMedio - a.matchMedio)
        .slice(0, limite);
}

function analisesRecentes(analises, limite) {
    return [...analises]
        .sort(porDataDesc)
        .slice(0, limite)
        .map((analise) => ({
            id: analise.id,
            data: analise.data,
            cidade: chaveCidade(analise.cidades[0]),
            match: analise.cidades[0].match,
        }));
}

export function calcularIndicadores(analises) {
    const cidadesAvaliadas = new Set(
        analises.flatMap((analise) => analise.cidades.map(chaveCidade))
    );

    return {
        totalAnalises: analises.length,
        cidadeMaisRecomendada: cidadeMaisRecomendada(analises),
        melhorMatch: melhorMatch(analises),
        cidadesAvaliadas: cidadesAvaliadas.size,
        ranking: rankingCidades(analises, 5),
        recentes: analisesRecentes(analises, 3),
    };
}
