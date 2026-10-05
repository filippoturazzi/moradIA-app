import { useEffect, useId, useRef, useState } from 'react';
import styled from "styled-components"
import { FiMapPin, FiPlus, FiSearch, FiX } from 'react-icons/fi';

const Busca = styled.div`
    position: relative;
`;

const IconeBusca = styled(FiSearch)`
    position: absolute;
    top: 50%;
    left: 16px;
    color: #9CA3AF;
    font-size: 16px;
    transform: translateY(-50%);
    pointer-events: none;
`;

const EntradaBusca = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 12px 16px 12px 44px;
    border: 1px solid ${({ $aberta }) => ($aberta ? 'var(--roxo-moradia)' : '#E5E7EB')};
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: ${({ $aberta }) => ($aberta ? '0 0 0 3px #EEF2FF' : 'none')};
    color: #111827;
    font-family: var(--fonte-moradia);
    font-size: 14px;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
        outline: none;
        border-color: var(--roxo-moradia);
        box-shadow: 0 0 0 3px #EEF2FF;
    }

    &::placeholder {
        color: #9CA3AF;
    }
`;

const Sugestoes = styled.ul`
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 0;
    padding: 6px;
    list-style: none;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    background-color: #FFFFFF;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
`;

const Sugestao = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 8px;
    background-color: ${({ $destacada }) => ($destacada ? '#F8FAFC' : 'transparent')};
    color: ${({ $salva }) => ($salva ? '#9CA3AF' : '#111827')};
    font-size: 14px;
    cursor: ${({ $salva }) => ($salva ? 'default' : 'pointer')};

    span:last-child {
        display: flex;
        align-items: center;
        gap: 4px;
        flex-shrink: 0;
        color: ${({ $salva }) => ($salva ? '#9CA3AF' : 'var(--roxo-moradia)')};
        font-size: 13px;
        font-weight: 600;
    }
`;

const MensagemSugestoes = styled.li`
    padding: 10px 12px;
    color: #6B7280;
    font-size: 14px;
`;

const Lista = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ItemCidade = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    padding: 16px;
    border: 1px solid #E5E7EB;
    border-radius: 16px;
    background-color: #FFFFFF;
`;

const CaixaIcone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: #EEF2FF;
    color: var(--roxo-moradia);
    font-size: 20px;
`;

const TextosCidade = styled.div`
    flex: 1;
    min-width: 0;
`;

const NomeCidade = styled.p`
    overflow: hidden;
    color: #111827;
    font-size: 16px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const UfCidade = styled.p`
    margin-top: 2px;
    color: #6B7280;
    font-size: 12px;
`;

const BotaoRemover = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    background-color: #FFFFFF;
    color: #6B7280;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;

    &:hover:not(:disabled) {
        border-color: #FCA5A5;
        color: #DC2626;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

const Vazio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 32px 24px;
    border: 1px dashed #E5E7EB;
    border-radius: 16px;
    background-color: #F8FAFC;
    color: #6B7280;
    font-size: 14px;
    text-align: center;
`;

const Erro = styled.p`
    color: #DC2626;
    font-size: 13px;
    font-weight: 600;
`;

const LIMITE_SUGESTOES = 8;

// A lista do IBGE (~100 KB) só é baixada quando a pessoa começa a buscar.
let promessaMunicipios;
function carregarMunicipios() {
    promessaMunicipios ??= import('../../dados/municipios.json').then((modulo) => modulo.default);
    return promessaMunicipios;
}

// Ignora acentos e maiúsculas: "sao paulo" encontra "São Paulo, SP".
function normalizar(texto) {
    return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

const capitais = new Set([
    'Aracaju, SE', 'Belém, PA', 'Belo Horizonte, MG', 'Boa Vista, RR', 'Brasília, DF', 'Campo Grande, MS',
    'Cuiabá, MT', 'Curitiba, PR', 'Florianópolis, SC', 'Fortaleza, CE', 'Goiânia, GO', 'João Pessoa, PB',
    'Macapá, AP', 'Maceió, AL', 'Manaus, AM', 'Natal, RN', 'Palmas, TO', 'Porto Alegre, RS', 'Porto Velho, RO',
    'Recife, PE', 'Rio Branco, AC', 'Rio de Janeiro, RJ', 'Salvador, BA', 'São Luís, MA', 'São Paulo, SP',
    'Teresina, PI', 'Vitória, ES',
]);

// Ordem: nome exato, depois começa com o termo, depois só contém;
// em cada grupo, capitais primeiro e então os nomes mais curtos.
function buscarCidades(municipios, termo) {
    const busca = normalizar(termo);
    if (!busca) return [];

    const encontradas = [];
    for (const cidade of municipios) {
        const nome = normalizar(cidade.slice(0, cidade.lastIndexOf(', ')));
        const grupo = nome === busca ? 0 : nome.startsWith(busca) ? 1 : nome.includes(busca) ? 2 : -1;
        if (grupo >= 0) encontradas.push({ cidade, grupo, capital: capitais.has(cidade) ? 0 : 1 });
    }

    return encontradas
        .sort((a, b) => a.grupo - b.grupo || a.capital - b.capital || a.cidade.length - b.cidade.length)
        .slice(0, LIMITE_SUGESTOES)
        .map(({ cidade }) => cidade);
}

function separarCidade(cidade) {
    const corte = cidade.lastIndexOf(', ');
    return { nome: cidade.slice(0, corte), uf: cidade.slice(corte + 2) };
}

function CidadesSalvas({ cidades, onSalvar }) {
    const [salvas, setSalvas] = useState(cidades);
    const [termo, setTermo] = useState('');
    const [municipios, setMunicipios] = useState(null);
    const [erroCarregar, setErroCarregar] = useState(false);
    const [aberta, setAberta] = useState(false);
    const [destaque, setDestaque] = useState(0);
    const [salvando, setSalvando] = useState(false);
    const [erroSalvar, setErroSalvar] = useState(false);
    const busca = useRef(null);
    const idSugestoes = useId();

    const sugestoes = municipios ? buscarCidades(municipios, termo) : [];
    const mostrarSugestoes = aberta && termo.trim() !== '';

    useEffect(() => {
        if (!mostrarSugestoes) return;
        function fecharSeFora(evento) {
            if (!busca.current.contains(evento.target)) setAberta(false);
        }
        document.addEventListener('mousedown', fecharSeFora);
        return () => document.removeEventListener('mousedown', fecharSeFora);
    }, [mostrarSugestoes]);

    function prepararBusca() {
        if (municipios) return;
        carregarMunicipios()
            .then(setMunicipios)
            .catch(() => setErroCarregar(true));
    }

    async function atualizar(novaLista) {
        const anterior = salvas;
        setSalvas(novaLista);
        setSalvando(true);
        setErroSalvar(false);
        const { error } = await onSalvar(novaLista);
        setSalvando(false);
        if (error) {
            setSalvas(anterior);
            setErroSalvar(true);
        }
    }

    function salvar(cidade) {
        if (!cidade || salvando || salvas.includes(cidade)) return;
        atualizar([...salvas, cidade]);
        setTermo('');
        setAberta(false);
    }

    function remover(cidade) {
        atualizar(salvas.filter((item) => item !== cidade));
    }

    function handleTeclado(evento) {
        if (!mostrarSugestoes || sugestoes.length === 0) return;
        const acoes = {
            ArrowDown: () => setDestaque((atual) => Math.min(atual + 1, sugestoes.length - 1)),
            ArrowUp: () => setDestaque((atual) => Math.max(atual - 1, 0)),
            Enter: () => salvar(sugestoes[destaque]),
            Escape: () => setAberta(false),
        };
        if (acoes[evento.key]) {
            evento.preventDefault();
            acoes[evento.key]();
        }
    }

    return (
        <>
            <Busca ref={busca}>
                <IconeBusca aria-hidden="true" />
                <EntradaBusca
                    type="search"
                    role="combobox"
                    aria-label="Pesquisar cidade para salvar"
                    aria-autocomplete="list"
                    aria-expanded={mostrarSugestoes}
                    aria-controls={idSugestoes}
                    aria-activedescendant={mostrarSugestoes && sugestoes.length > 0 ? `${idSugestoes}-${destaque}` : undefined}
                    $aberta={mostrarSugestoes}
                    value={termo}
                    placeholder="Pesquise uma cidade pelo nome"
                    autoComplete="off"
                    onFocus={() => { prepararBusca(); setAberta(true); }}
                    onChange={(e) => { setTermo(e.target.value); setDestaque(0); setAberta(true); }}
                    onKeyDown={handleTeclado}
                />

                {mostrarSugestoes && (
                    <Sugestoes id={idSugestoes} role="listbox">
                        {erroCarregar && <MensagemSugestoes>Não foi possível carregar as cidades.</MensagemSugestoes>}
                        {!erroCarregar && !municipios && <MensagemSugestoes>Carregando cidades…</MensagemSugestoes>}
                        {municipios && sugestoes.length === 0 && (
                            <MensagemSugestoes>Nenhuma cidade encontrada para “{termo.trim()}”.</MensagemSugestoes>
                        )}
                        {sugestoes.map((cidade, indice) => {
                            const jaSalva = salvas.includes(cidade);
                            return (
                                <Sugestao
                                    key={cidade}
                                    id={`${idSugestoes}-${indice}`}
                                    role="option"
                                    aria-selected={indice === destaque}
                                    aria-disabled={jaSalva}
                                    $destacada={indice === destaque}
                                    $salva={jaSalva}
                                    onMouseEnter={() => setDestaque(indice)}
                                    onMouseDown={(evento) => evento.preventDefault()}
                                    onClick={() => salvar(cidade)}
                                >
                                    <span>{cidade}</span>
                                    <span>{jaSalva ? 'Salva' : <><FiPlus aria-hidden="true" /> Salvar</>}</span>
                                </Sugestao>
                            );
                        })}
                    </Sugestoes>
                )}
            </Busca>

            {erroSalvar && <Erro role="alert">Não foi possível salvar. Tente novamente.</Erro>}

            {salvas.length > 0 ? (
                <Lista aria-label="Cidades salvas">
                    {salvas.map((cidade) => {
                        const { nome, uf } = separarCidade(cidade);
                        return (
                            <ItemCidade key={cidade}>
                                <CaixaIcone><FiMapPin /></CaixaIcone>
                                <TextosCidade>
                                    <NomeCidade title={nome}>{nome}</NomeCidade>
                                    <UfCidade>{uf}</UfCidade>
                                </TextosCidade>
                                <BotaoRemover
                                    type="button"
                                    onClick={() => remover(cidade)}
                                    disabled={salvando}
                                    title="Remover"
                                    aria-label={`Remover ${cidade}`}
                                >
                                    <FiX />
                                </BotaoRemover>
                            </ItemCidade>
                        );
                    })}
                </Lista>
            ) : (
                <Vazio>
                    <CaixaIcone><FiMapPin /></CaixaIcone>
                    Você ainda não salvou nenhuma cidade. Pesquise acima para começar.
                </Vazio>
            )}
        </>
    );
}

export default CidadesSalvas
