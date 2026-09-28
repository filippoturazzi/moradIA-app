import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase.js';
import Login from './componentes/Login/index.jsx';
import Inicio from './componentes/Inicio/index.jsx';


function App(){
  const [sessao, setSessao] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSessao(data.session);
      setCarregando(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_evento, novaSessao) => {
      setSessao(novaSessao);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  if (carregando) return null;

  return(
    <>
      {sessao ? <Inicio usuario={sessao.user} /> : <Login />}
    </>
  )
}

export default App;
