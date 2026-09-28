import { useState } from 'react';
import styled from "styled-components"
import { FiCompass, FiLogOut, FiPlus } from 'react-icons/fi';
import { sair } from '../../lib/supabase.js';

const Cabecalho = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    height: 80px;
    padding: 0 80px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #E5E7EB;
    font-family: var(--fonte-moradia);

    @media (max-width: 900px) {
        padding: 0 16px;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 700;
    color: #111827;

    span {
        color: var(--roxo-moradia);
    }
`;

const IconeLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: var(--roxo-moradia);
    color: #FFFFFF;
    font-size: 18px;
`;

const Navegacao = styled.nav`
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: 900px) {
        display: none;
    }
`;

const LinkNavegacao = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-family: var(--fonte-moradia);
    font-size: 14px;
    font-weight: ${({ $ativo }) => ($ativo ? 700 : 500)};
    color: ${({ $ativo }) => ($ativo ? 'var(--roxo-moradia)' : '#6B7280')};
    cursor: ${({ $ativo }) => ($ativo ? 'default' : 'not-allowed')};
`;

const Acoes = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const BotaoNovaAnalise = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    background-color: #EEF2FF;
    color: var(--roxo-moradia);
    font-family: var(--fonte-moradia);
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #E0E7FF;
    }

    @media (max-width: 600px) {
        span {
            display: none;
        }
    }
`;

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
`;

const AvatarIniciais = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #EEF2FF;
    color: var(--roxo-moradia);
    font-size: 14px;
    font-weight: 700;
`;

const BotaoSair = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    background-color: #FFFFFF;
    color: #6B7280;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: var(--roxo-moradia);
    }

    &:disabled {
        opacity: 0.6;
        cursor: default;
    }
`;

const linksNavegacao = ['Dashboard', 'Minhas cidades', 'Comparar', 'Meu perfil'];

function CabecalhoApp({ usuario, paginaAtiva, onNovaAnalise }){
    const [saindo, setSaindo] = useState(false);
    const { full_name, avatar_url } = usuario.user_metadata ?? {};
    const inicial = (full_name ?? usuario.email ?? '?').charAt(0).toUpperCase();

    async function handleSair() {
        setSaindo(true);
        await sair();
    }

    return(
        <Cabecalho>
            <Logo>
                <IconeLogo><FiCompass /></IconeLogo>
                <p>Morad<span>IA</span></p>
            </Logo>

            <Navegacao>
                {linksNavegacao.map((link) => (
                    <LinkNavegacao
                        key={link}
                        $ativo={link === paginaAtiva}
                        aria-current={link === paginaAtiva ? 'page' : undefined}
                        title={link === paginaAtiva ? undefined : 'Em breve'}
                    >
                        {link}
                    </LinkNavegacao>
                ))}
            </Navegacao>

            <Acoes>
                <BotaoNovaAnalise onClick={onNovaAnalise} aria-label="Nova Análise">
                    <FiPlus /> <span>Nova Análise</span>
                </BotaoNovaAnalise>
                {avatar_url
                    ? <Avatar src={avatar_url} alt={full_name ?? ''} referrerPolicy="no-referrer" />
                    : <AvatarIniciais aria-hidden="true">{inicial}</AvatarIniciais>}
                <BotaoSair onClick={handleSair} disabled={saindo} title="Sair" aria-label="Sair">
                    <FiLogOut />
                </BotaoSair>
            </Acoes>
        </Cabecalho>
    )
}

export default CabecalhoApp
