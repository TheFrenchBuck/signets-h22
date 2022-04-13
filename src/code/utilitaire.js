/**
 * Fomater une date en francais dans le formats suivants:
 * 5 novembre 2021
 * @param {Number} tsSecondes timestamp en secondes
 * @returns {string} chaine représentant le timesStamp dans le formats spécifié
 */
export function formaterDate(tsSecondes){
    let dateJS = new Date(tsSecondes*1000);
    let nomDeMois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "Août", "septembre", "octobre", "novembre", "décembre"];

    return `${dateJS.getDate()} ${nomDeMois[dateJS.getDate()]} ${dateJS.getFullYear()}` 
}