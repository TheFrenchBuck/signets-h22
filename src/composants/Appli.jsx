// Fichier CSS
import './Appli.scss';
// Les sous-composantes
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import AjoutDossier from './AjoutDossier';
import Accueil from './Accueil';

//Les composantes externes
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// Les fonctionnalité requise
import { useState, useEffect } from 'react';
// Remarquer les deux façons différentes d'importer des fonctionnalités
import { observerEtatConnexion } from '../code/utilisateur-modele';
import * as dossierModele from '../code/dossier-modele';

//import { onAuthStateChanged } from '@firebase/auth';
export default function Appli() {
  //état utilisateur
  const[utilisateur, setUtilisateur] = useState(null);
  // état des dossier
  const [dossiers, setDossiers] = useState([]);
  // état du formulaire d'ajour du dossier 
  const [ouvert, setOuvert] = useState(false);
  //gerer lajout d'un dossier
  function gererAjoutDossier(titre, couverture, couleur){
    //code firestore
    dossierModele.creer(utilisateur.uid,{
      titre: titre,
      couverture: couverture,
      couleur: couleur
    }).then(
      // On augmente les dossiers avec le nouveau document que nous 
      // venons d'ajouter dans Firestore
      // Remarquez que le document reçu est un objet complexe Firestore, et 
      // on doit construire l'objet simple avec le quel nous travaillons qui
      // contient uniquement les propriétés 'id' et 'titre', 'couleur', 
      // 'couverture', 'dateModif'
      doc => setDossiers([{id: doc.id, ...doc.data()}, ...dossiers])
    );
  }
  // surveiller l'état de la connexion
  useEffect(() => observerEtatConnexion(setUtilisateur),[]);


  return (
    utilisateur ?
      <div className="Appli">
          <Entete utilisateur={utilisateur} />
          <section className="contenu-principal">
            <ListeDossiers utilisateur={utilisateur} dossiers={dossiers} setDossiers={setDossiers}  />
            {/* Ajouter un composant FormDialog de MUI */}
              <AjoutDossier ouvert={ouvert} setOuvert={setOuvert} gererAjoutDossier={gererAjoutDossier} />
            <Fab onClick={()=>setOuvert(true)} size="large" className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
              <AddIcon />
            </Fab>
          </section>
      </div>
    :
      <Accueil />

);
}
