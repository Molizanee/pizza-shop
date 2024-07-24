import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-lg">A página que você tentou acessar não existe.</p>
      <Link to="/" className="text-blue-500">
        Voltar para a página inicial
      </Link>
    </div>
  );
};
