import React from 'react';
import RecetteOrecchiette from '../components/recipe-blog';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fff2f2]">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold text-[#ff7b7b]">Mes Recettes Italiennes</h1>
      </header>
      <main>
        <RecetteOrecchiette />
      </main>
    </div>
  );
};

export default Home;
