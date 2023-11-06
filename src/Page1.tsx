import React from 'react';
import { useForm, Controller } from 'react-hook-form';
export const Page1=()=>{

    
    interface IFormInputs {
      nom: string;
      prenom: string;
      email: string;
      numero: string;
      adresse: string;
      lieuNaissance: string;
      age: number;
      dateNaissance: string;
      titre: string;
      date: string;
      
      
    }
    
      const { control, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
    
      const isUppercase = (value: string) => /^[A-Z]+$/.test(value);
      const isAlphaNumeric = (value: string) => /^[A-Za-z0-9\s]+$/.test(value);
      const isEmailValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'L\'adresse email n\'est pas valide.';
      const numeroRegex = /^(?:(?:\+|00)33[\s.-]?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
      const adresseRegex = /^[A-Za-z0-9\s\-']+$/;
      const lieuNaissanceRegex = /^[A-Za-z\s]+$/;
      const validateAge = (value: number) => {
        return value >= 18 || 'Vous devez avoir au moins 18 ans.';
      };
      const validateDateNaissance = (value: string) => {
        // Vérifier que la date de naissance est correcte
        const selectedDate = new Date(value);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - selectedDate.getFullYear();
    
        // Vérifier que l'utilisateur a au moins 18 ans
        return age >= 18 || 'Vous devez avoir au moins 18 ans.';
      };
    
      const isAdult = (date: string) => {
        const birthDate = new Date(date);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        return age >= 18;
      };

    
      const onSubmit = (data: IFormInputs) => {
        alert(JSON.stringify(data));
      };

    
      return (
        <div className="body">
        <div className="form">
            
            <center>
                <h1 className="broadway-font">Bienvenue Dans Notre Communauté CV!</h1>
            </center><br></br>
             <h2 style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}> Les informations personnelles:</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

          <div className="espace">
            <label htmlFor="nom">Entrez Votre Nom :</label><br />
            <Controller
              name="nom"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="border border-black rounded mb-2 p-1"
                />
              )}
              rules={{
                required: 'Ce champ est requis',
                validate: {
                  isUppercase: (value) => isUppercase(value) || 'Le nom doit être en majuscules',
                  isAlphaNumeric: (value) => isAlphaNumeric(value) || 'Le nom ne doit pas contenir de caractères spéciaux',
                },
              }}
            />
            {errors.nom && <p style={{ color: 'red' }}>{errors.nom.message}</p>}
          
          </div>
    
          <div className="espace" >
        
            <label htmlFor="prenom">Entrez Votre Prénom :</label><br />
            <Controller
              name="prenom"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="border border-black rounded mb-2 p-1"
                />
              )}
              rules={{
                required: 'Ce champ est requis',
                validate: {
                  isUppercase: (value) => isUppercase(value) || 'Le prénom doit commencer par une majuscule',
                  isAlphaNumeric: (value) => isAlphaNumeric(value) || 'Le prénom ne doit pas contenir de caractères spéciaux',
                },
              }}
            />
            {errors.prenom && <p style={{ color: 'red' }}>{errors.prenom.message}</p>}
          </div>
           
          <div className="espace">
            <label htmlFor="email">Email :</label><br />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="border border-black rounded mb-2 p-1"
                />
              )}
              rules={{
                required: 'Ce champ est requis',
                validate: {
                  isEmailValid,
                },
              }}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
          </div><br />

          <div className="espace">
            <label htmlFor="numero">Numéro de téléphone :</label><br />
            <Controller
              name="numero"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="border border-black rounded mb-2 p-1"
                />
              )}
              rules={{
                required: 'Ce champ est requis',
                pattern: {
                  value: numeroRegex,
                  message: 'Numéro de téléphone non valide',
                },
              }}
            />
            {errors.numero && <p style={{ color: 'red' }}>{errors.numero.message}</p>}
          </div>

          <div className="espace">
            <label htmlFor="adresse">Adresse :</label><br />
            <Controller
              name="adresse"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="border border-black rounded mb-2 p-1"
                />
              )}
              rules={{
                required: 'Ce champ est requis',
                pattern: {
                  value: adresseRegex,
                  message: 'Adresse non valide (caractères alphabétiques, chiffres, espaces, - et \')',
                },
              }}
            />
            {errors.adresse && <p style={{ color: 'red' }}>{errors.adresse.message}</p>}
          </div>

          <div className="espace">
            <label htmlFor="lieuNaissance">Lieu de Naissance :</label><br />
            <Controller
              name="lieuNaissance"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="border border-black rounded mb-2 p-1"
                />
              )}
              rules={{
                required: 'Ce champ est requis',
                pattern: {
                  value: lieuNaissanceRegex,
                  message: 'Lieu de naissance non valide (caractères alphabétiques et espaces)',
                },
              }}
            />
            {errors.lieuNaissance && <p style={{ color: 'red' }}>{errors.lieuNaissance.message}</p>}
          </div><br />

          <div className="espace">
            <label htmlFor="age">Âge :</label><br />
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="border border-black rounded mb-2 p-1"
                />
              )}
              rules={{
                required: 'Ce champ est requis',
                validate: validateAge,
              }}
            />
            {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
          </div>

          <center><div className="espace">
            <label htmlFor="dateNaissance">Date de Naissance :</label><br />
            <Controller
              name="dateNaissance"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className="border border-black rounded mb-2 p-1"
                />
              )}
              rules={{
                required: 'Ce champ est requis',
                validate: validateDateNaissance,
              }}
            />
            {errors.dateNaissance && <p style={{ color: 'red' }}>{errors.dateNaissance.message}</p>}
          </div></center>

          <h2 style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Parcours Pédagogique:</h2>
        <div>
            <label ><h4>Baccalauréat :</h4></label>
            <label>s.maths</label>
            <input className="espace" type="radio"  id="bacMaths" name="bac" />
            <label>s.physiques</label>
            <input className="espace" type="radio"  id="bacPhysiques" name="bac" />
            <label>SVT</label>
            <input className="espace" type="radio" id="bacSVT" name="bac" />
            <label>lettre</label>
            <input className="espace" type="radio" id="bacLettre" name="bac" />
            <label>bac technique</label>
            <input type="radio" id="bacTechnique" name="bac" />
        </div>
        <div>
            <label><h4>Diplômes :</h4></label>
            <select id="diplomes" name="diplomes">
                <option>Diplôme Universitaire de Technologie (DUT)</option>
                <option>Diplôme des Études Universitaires Générales (DEUG)</option>
                <option>Diplôme de Technicien Spécialisé (DTS)</option>
                <option>Brevet de Technicien Supérieur (BTS)</option>
                <option>Master (Masters Universitaires)</option>
                <option>Diplôme d'Ingénieur</option>
                <option>Doctorat</option>
            </select>
        </div><br/>
        <br/>
        <label style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Compétences Techniques :</label><br/>
        <input className="mon-champ" type="text"  placeholder="Entrez vos compétences techniques ici" id="compétencesTechniques" name="compétencesTechniques" /><br/><br/>

        <label style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Compétences Linguistiques :</label><br/>
        <input className="mon-champ"type="text" placeholder="Entrez vos compétences linguistiques ici" id="compétencesLinguistiques" name="compétencesLinguistiques" /><br/><br/>
        
        <label style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Autres (loisirs, Sports, etc) :</label><br/>
        <input className="mon-champ"type="text" placeholder="Entrez vos autres compétences ici" id="autres" name="autres" /><br/><br/>
        
        <label style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Votre Objectif Professionnel :</label><br/>
        <textarea className="mon-champ" id="objectifProfessionnel" name="objectifProfessionnel"  placeholder="Entrez votre objectif professionnel ici" ></textarea><br/><br/>
        
        <label style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Sélectionnez une image :</label>
        <input type="file" id="image" name="image" accept="image/*"/><br/>
        <input type="submit" value="Envoyer"/><br/><br/><br/><br/>
       <center><button type="submit">Submit</button> </center> 
    
          {/* Répétez le même modèle pour d'autres champs de formulaire (titre, date, adresse) */}
          
          <button type="submit">Soumettre</button>
        </form>
        </div>
        </div>
      );
    };

export default Page1;