 import { useState } from "react";

 function useInputManager () {
 const [application, setApplication] = useState({
    betrieb: '',
    ansprechpartner: '',
    telefon: '',
    email: '',
    website: '',
    strasse: '',
    hausnummer: '',
    postleitzahl: '',
    ort: '',
    techStack: '',
    beworbenAm: '',
    rueckmeldungAm: '',
    nachgefragtAm: '',
    telefoniertMit: '',
    praktikumMoeglich: '',
    praktikumAb: '',
    entfernung: '',
    fahrtzeit: ''
  })
  
  function handleChange(event){
      const {name, value} = event.target;

      setApplication((currentApplication) => ({
        ...currentApplication,
        [name]:value,
      }))
    }

    return {
        application, 
        handleChange}
}

export default useInputManager;