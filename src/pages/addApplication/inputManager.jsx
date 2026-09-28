 import { useState } from "react";

 function useInputManager () {
 const [application, setApplication] = useState({
    betrieb: '',
    ansprechpartner: '',
    telefon: '',
    email: '',
    internet: '',
    strasse: '',
    hausnummer: '',
    plz: '',
    ort: '',
    anwendungen: '',
    beworbenAm: '',
    rueckmeldungAm: '',
    nachgefragtAm: '',
    telefoniertMit: '',
    moeglich: '',
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