import Skills from '../pages/Skills/Skills';
import Experiences from '../pages/experiences/Experiences';
import Educations from '../pages/educations/Educations';
import {  Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <>

    <Routes>
      <Route path="/skills" element={<Skills/>} />
      <Route path="/experiences" element={<Experiences/>} />
      <Route path="/educations" element={<Educations/>} />
    </Routes>
    </>
  )
}

export default Routing