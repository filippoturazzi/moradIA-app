import { useEffect, useId, useRef, useState } from 'react';
import styled from "styled-components"
import { FiCheck, FiChevronDown } from 'react-icons/fi';

const Envoltorio = styled.div`
    position: relative;
    width: 100%;
`;

const Gatilho = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 16px;
    border: 1px solid ${({ $aberta }) => ($aberta ? 'var(--roxo-moradia)' : '#E5E7EB')};
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: ${({ $aberta }) => ($aberta ? '0 0 0 3px #EEF2FF' : 'none')};
    color: ${({ $vazia }) => ($vazia ? '#9CA3AF' : '#111827')};
    font-family: var(--fonte-moradia);
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus-visible {
        outline: none;
        border-color: var(--roxo-moradia);
        box-shadow: 0 0 0 3px #EEF2FF;
    }

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    svg {
        flex-shrink: 0;
        color: #6B7280;
        font-size: 16px;
        transform: rotate(${({ $aberta }) => ($aberta ? '180deg' : '0')});
        transition: transform 0.2s;
    }
`;

const Lista = styled.ul`
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 240px;
    margin: 0;
    padding: 6px;
    overflow-y: auto;
    list-style: none;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    background-color: #FFFFFF;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
`;

const Opcao = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 8px;
    background-color: ${({ $selecionada, $destacada }) => (
        $selecionada ? '#EEF2FF' : $destacada ? '#F8FAFC' : 'transparent'
    )};
    color: ${({ $selecionada }) => ($selecionada ? 'var(--roxo-moradia)' : '#111827')};
    font-size: 14px;
    font-weight: ${({ $selecionada }) => ($selecionada ? 600 : 400)};
    cursor: pointer;

    svg {
        flex-shrink: 0;
        font-size: 16px;
    }
`;

// Dropdown no padrão visual do MoradIA (o <select> nativo não permite estilizar a lista).
// Segue o padrão ARIA de combobox "select-only": o foco fica no gatilho e as setas navegam.
function Selecao({ valor, opcoes, onChange, placeholder = 'Selecione', ...props }) {
    const [aberta, setAberta] = useState(false);
    const [destaque, setDestaque] = useState(-1);
    const envoltorio = useRef(null);
    const lista = useRef(null);
    const idLista = useId();
    const indiceSelecionado = opcoes.indexOf(valor);

    useEffect(() => {
        if (!aberta) return;
        function fecharSeFora(evento) {
            if (!envoltorio.current.contains(evento.target)) setAberta(false);
        }
        document.addEventListener('mousedown', fecharSeFora);
        return () => document.removeEventListener('mousedown', fecharSeFora);
    }, [aberta]);

    useEffect(() => {
        if (aberta && destaque >= 0) {
            lista.current?.children[destaque]?.scrollIntoView({ block: 'nearest' });
        }
    }, [aberta, destaque]);

    function abrir() {
        setDestaque(Math.max(indiceSelecionado, 0));
        setAberta(true);
    }

    function escolher(indice) {
        onChange(opcoes[indice]);
        setAberta(false);
    }

    function handleTeclado(evento) {
        const { key } = evento;

        if (!aberta) {
            if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(key)) {
                evento.preventDefault();
                abrir();
            }
            return;
        }

        const ultimo = opcoes.length - 1;
        const acoes = {
            ArrowDown: () => setDestaque((atual) => Math.min(atual + 1, ultimo)),
            ArrowUp: () => setDestaque((atual) => Math.max(atual - 1, 0)),
            Home: () => setDestaque(0),
            End: () => setDestaque(ultimo),
            Enter: () => escolher(destaque),
            ' ': () => escolher(destaque),
            Escape: () => setAberta(false),
        };

        if (acoes[key]) {
            evento.preventDefault();
            acoes[key]();
        } else if (key === 'Tab') {
            setAberta(false);
        } else if (key.length === 1) {
            // Busca rápida pela primeira letra.
            const indice = opcoes.findIndex((opcao) => opcao.toLowerCase().startsWith(key.toLowerCase()));
            if (indice >= 0) setDestaque(indice);
        }
    }

    return (
        <Envoltorio ref={envoltorio}>
            <Gatilho
                type="button"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={aberta}
                aria-controls={idLista}
                aria-activedescendant={aberta && destaque >= 0 ? `${idLista}-${destaque}` : undefined}
                $aberta={aberta}
                $vazia={!valor}
                onClick={() => (aberta ? setAberta(false) : abrir())}
                onKeyDown={handleTeclado}
                {...props}
            >
                <span>{valor || placeholder}</span>
                <FiChevronDown aria-hidden="true" />
            </Gatilho>

            {aberta && (
                <Lista ref={lista} id={idLista} role="listbox">
                    {opcoes.map((opcao, indice) => (
                        <Opcao
                            key={opcao}
                            id={`${idLista}-${indice}`}
                            role="option"
                            aria-selected={opcao === valor}
                            $selecionada={opcao === valor}
                            $destacada={indice === destaque}
                            onMouseEnter={() => setDestaque(indice)}
                            onMouseDown={(evento) => evento.preventDefault()}
                            onClick={() => escolher(indice)}
                        >
                            {opcao}
                            {opcao === valor && <FiCheck aria-hidden="true" />}
                        </Opcao>
                    ))}
                </Lista>
            )}
        </Envoltorio>
    );
}

export default Selecao
