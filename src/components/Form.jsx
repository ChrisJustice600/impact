import axios from "axios";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import Editor from "./Editor";
import Loader from "./Loader";

const Form = () => {
  const [step, setStep] = useState(0);
  const [titre, setTitre] = useState("");
  const [categorie, setCategorie] = useState("");
  const [content, setContent] = useState("");
  const [objectif, setObjectif] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Initially not loading
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const addComma = (value) => {
    // Remplacer toutes les virgules existantes pour gérer les cas de mise à jour de la valeur
    const sanitizedValue = value.replace(/,/g, "");

    // Ajouter une virgule après chaque groupe de trois chiffres
    const parts = sanitizedValue.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Rejoindre les parties avec le point décimal
    return parts.join(".");
  };

  const handleChangeInput = (event) => {
    const inputValue = event.target.value;
    const formattedValue = addComma(inputValue);
    setObjectif(formattedValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); 

    const formData = new FormData();
    formData.append("objectif", objectif);
    formData.append("categorie", categorie);
    formData.append("titre", titre);
    formData.append("content", content);
    formData.append("file", selectedFile); 
    console.log(formData);
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/users/create/project", 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
          withCredentials: true, 
        }
      );
      console.log("Form submitted successfully:", response.data);
      setRedirect(true);

    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.message); // Display error message to user
    } finally {
      setIsLoading(false); // Set loading state to false after fetching or error
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  if (redirect) {
    return <Navigate to={"/home"} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-[500px] border rounded-md border-blue-200 p-5 text-[#969696] max-h-max"
    >
      {step === 0 && (
        <div>
          <h2 className="text-4xl font-bold">Étape 1</h2>
          
          <h2 className="text-md font-bold">
            Quelle somme souhaiteriez-vous réunir ?
          </h2>
          <input
            type="text"
            name="objectif"
            placeholder="Votre montant à atteindre"
            value={objectif}
            onChange={handleChangeInput}
            className="w-full px-8 py-2 my-8 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={nextStep}
            // disabled={!objectif}
            className="border rounded-md py-2 px-3 text-white bg-[#fe7f6d] float-right"
          >
            Continuer
          </button>
        </div>
      )}
      {step === 1 && (
        <div>
          <h2 className="text-4xl font-bold">Étape 2</h2>
          <label className=" text-md font-bold ">
            Ajouter une photo de présentation
          </label>
          <input type="file" name="file" onChange={handleChange} />
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={prevStep}
              className="border rounded-md py-2 px-3 text-white bg-[#fe7f6d]"
            >
              Précédent
            </button>
            <button
              onClick={nextStep}
              disabled={!selectedFile}
              className="border rounded-md py-2 px-3 text-white bg-[#fe7f6d]"
            >
              Suivant
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-4xl font-bold">Étape 3</h2>
          <label className="text-md font-bold">
            Donnez un titre à la cagnotte
          </label>
          <input
            type="text"
            name="titre"
            value={titre}
            onChange={(ev) => setTitre(ev.target.value)}
            placeholder="Titre de la cagnotte"
            className="w-full px-4 py-2 my-4 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="select-container">
            <label className="text-md font-bold">
              Choisissez une catégorie
            </label>
            <select
              name="categorie"
              value={categorie}
              onChange={(ev) => setCategorie(ev.target.value)}
              className="select-input w-full px-4 py-2 my-4"
            >
              <option value="Solidarité">Solidarité</option>
              <option value="Santé">Santé</option>
              <option value="Éducation">Éducation</option>
              <option value="Humanitaire">Humanitaire</option>
              <option value="Bénévolat">Bénévolat</option>
              <option value="Communauté">Communauté</option>
              <option value="Urgences">Urgences</option>
            </select>
          </div>
          <Editor value={content} onChange={setContent} />
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={prevStep}
              className="border rounded-md py-2 px-3 text-white bg-[#fe7f6d]"
            >
              Précédent
            </button>

            {isLoading ? (
              <button className="border border-[#fe7f6d] rounded-md py-2 px-[60px] text-[#fe7f6d] bg-[#ffffff]">
              {" "}
              <Loader />
            </button>
            ) : (
              <button
                type="submit"
                disabled={!titre || !categorie || !content}
                className="border rounded-md py-2 px-3 text-white bg-[#fe7f6d]"
              >
                Valider le formulaire
              </button>
            )}
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      )}
    </form>
  );
};

export default Form;
