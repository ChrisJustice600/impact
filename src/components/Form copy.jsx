import axios from "axios";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Editor from "./Editor";

const Form = () => {
  const [step, setStep] = useState(0);
  const [titre, setTitre] = useState("");
  const [objectif, setObjectif] = useState("");
  const [categorie, setCategorie] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setFiles(event.target.files[0]);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setErrorMessage(""); // Clear previous error message
    try {
      const formData = new FormData();
      formData.append("objectif", objectif);
      formData.append("titre", titre);
      formData.append("categorie", categorie);
      formData.append("content", content);
      formData.append("files", files);

      const response = await axios.post(
        "http://localhost:3001/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log("Form submitted successfully:", response.data);
      setStep(step + 1); // Move to the next step upon successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form. Please try again.");
    }
  };

  const nextStep = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const validateForm = () => {
    // Validation logic here
    return true; // For now, return true to always allow progression
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-[500px] border rounded-md border-blue-200 p-5 text-[#969696] max-h-max">
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
            onChange={(ev) => setObjectif(ev.target.value)}
            className="w-full px-8 py-2 my-8 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={nextStep}
            disabled={!objectif}
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
              disabled={!files}
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
            <button
              type="submit"
              disabled={!titre || !categorie || !content}
              className="border rounded-md py-2 px-3 text-white bg-[#fe7f6d]"
            >
              Valider le formulaire
            </button>
          </div>
        </div>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default Form;
