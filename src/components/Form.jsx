import { useState } from "react";

const Home = () => {
  const [step, setStep] = useState(0); // État pour suivre l'étape actuelle
  const [formData, setFormData] = useState({}); // État pour stocker les données du formulaire

  // Fonction pour passer à l'étape suivante
  const nextStep = () => {
    if (validateForm()) {
      // Valider le formulaire avant de passer à l'étape suivante
      setStep(step + 1);
    }
  };

  // Fonction pour retourner à l'étape précédente
  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // Fonction pour valider le formulaire
  const validateForm = () => {
    // Logique de validation ici (vérifier si tous les champs sont remplis, etc.)
    return true; // Remplacer par votre logique de validation réelle
  };

  // Fonction pour gérer les changements d'input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Rendu du formulaire en fonction de l'étape actuelle
  switch (step) {
    case 0:
      return (
        <div>
          <h2>Étape 1: Informations personnelles</h2>
          <label>Nom:</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <button
            onClick={nextStep}
            disabled={!formData.nom || !formData.email}
          >
            Suivant
          </button>
        </div>
      );
    case 1:
      return (
        <div>
          <h2>Étape 2: Informations de voyage</h2>
          <label>Destination:</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="">Sélectionner une destination</option>
            <option value="kinshasa">Kinshasa</option>
            <option value="goma">Goma</option>
            <option value="lubumbashi">Lubumbashi</option>
          </select>
          <label>Dates drrivée et de départ:</label>
          <input
            type="date"
            name="arrivee"
            value={formData.arrivee}
            onChange={handleChange}
          />
          <input
            type="date"
            name="depart"
            value={formData.depart}
            onChange={handleChange}
          />
          <button onClick={prevStep}>Précédent</button>
          <button
            onClick={nextStep}
            disabled={
              !formData.destination || !formData.arrivee || !formData.depart
            }
          >
            Suivant
          </button>
        </div>
      );
    case 2:
      return (
        <div>
          <h2>Étape 3: Informations de réservation</h2>
          <label>Type dhébergement:</label>
          <select
            name="hebergement"
            value={formData.hebergement}
            onChange={handleChange}
          >
            <option value="">Sélectionner un type dhébergement</option>
            <option value="hotel">Hôtel</option>
            <option value="location">Location</option>
          </select>
          <label>Options supplémentaires:</label>
          <input
            type="checkbox"
            name="transfert"
            value={formData.transfert}
            onChange={handleChange}
          />
          <label>Transfert aéroport</label>
          <input
            type="checkbox"
            name="repas"
            value={formData.repas}
            onChange={handleChange}
          />
          <label>Repas inclus</label>
          <button onClick={prevStep}>Précédent</button>
          <button type="submit">Valider le formulaire</button>
        </div>
      );
    default:
      return <div>Formulaire terminé!</div>;
  }
};

export default Home;
