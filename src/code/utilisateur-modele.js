import { doc, setDoc } from "@firebase/firestore";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { authFirebase, authGoogle } from "./init";
import { bdFirestore } from "./init";
/**
 * sign in whit google
 */
export function connexion(){
    signInWithPopup(authFirebase,authGoogle)
}
// sign out google
export function deconnexion(){
    authFirebase.signOut()

  }
  export function observerEtatConnexion(mutateurEtatUtilisateur){
    onAuthStateChanged(authFirebase,
            user =>{
            if(user){
                // Sauvegarder Utilisateur
                setDoc(doc(bdFirestore, 'signets', user.uid),
                 {nom: user.displayName, courriel: user.email},
                 {merge:true})
            }

                mutateurEtatUtilisateur(user)
            }
        )
     }