import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import AdmitPatient from "./pages/AdmitPatient";
import PatientList from "./pages/PatientList";
import EditPatient from "./pages/EditPatient";
import managePatient from "./components/PatientServices/managePatient";
import ChargeCalculate from "./pages/ChargeCalculate";
import ViewCharge from "./pages/viewCharge";


function App() {
  return (
    <Router>
 
    <Navbar />
      <br/>
      <Route path='/managePatient' component={managePatient} />
      <Route path="/admitPatient" component={AdmitPatient} />
      <Route path="/patientList" exact component={PatientList} />
      <Route path="/edit/:id" component={EditPatient} />
      <Route path="/chargeCalculate" component={ChargeCalculate} />
      <Route path='/viewCharge' component={ViewCharge} />
      
    </Router>
  );
}

export default App;
