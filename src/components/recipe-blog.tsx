import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from 'lucide-react';

const RecipeBlog = () => {
  // Exemple de recettes
  const initialRecipes = [
    {
      id: 1,
      title: "Tarte aux pommes",
      category: "Desserts",
      prepTime: "45 min",
      difficulty: "Facile",
      ingredients: [
        "6 pommes",
        "1 pâte brisée",
        "100g de sucre",
        "1 sachet de sucre vanillé",
        "Cannelle"
      ],
      instructions: [
        "Préchauffer le four à 180°C",
        "Éplucher et couper les pommes en tranches",
        "Étaler la pâte dans un moule",
        "Disposer les pommes en rosace",
        "Saupoudrer de sucre et cannelle",
        "Cuire 45 minutes"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Quiche Lorraine",
      category: "Plats principaux",
      prepTime: "50 min",
      difficulty: "Moyen",
      ingredients: [
        "1 pâte brisée",
        "200g de lardons",
        "4 œufs",
        "20cl de crème fraîche",
        "20cl de lait",
        "Muscade"
      ],
      instructions: [
        "Préchauffer le four à 180°C",
        "Faire revenir les lardons",
        "Mélanger œufs, crème, lait",
        "Garnir le moule de pâte",
        "Ajouter lardons et appareil",
        "Cuire 45-50 minutes"
      ],
      image: "/api/placeholder/400/300"
    }
  ];

  const [recipes, setRecipes] = useState(initialRecipes);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrer les recettes selon la recherche
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Mon Blog de Recettes</h1>
        
        {/* Barre de recherche */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Rechercher une recette..."
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Grille de recettes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map(recipe => (
            <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl font-bold">{recipe.title}</CardTitle>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{recipe.category}</span>
                  <span>{recipe.prepTime}</span>
                  <span>{recipe.difficulty}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Ingrédients:</h3>
                  <ul className="list-disc pl-5">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-sm">{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Instructions:</h3>
                  <ol className="list-decimal pl-5">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="text-sm mb-1">{step}</li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeBlog;
