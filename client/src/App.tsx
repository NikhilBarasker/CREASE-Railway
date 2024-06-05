// import { useEffect, useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';

// import Loader from './common/Loader';
// import PageTitle from './components/PageTitle';
// import SignIn from './pages/Authentication/SignIn';
// import SignUp from './pages/Authentication/SignUp';
// import Chart from './pages/Chart';
// import ECommerce from './pages/Dashboard/ECommerce';
// import FormElements from './pages/Form/FormElements';
// import FormLayout from './pages/Form/FormLayout';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Tables from './pages/Tables';
// import Login from './pages/Login'
// import Alerts from './pages/UiElements/Alerts';
// import Buttons from './pages/UiElements/Buttons';
// import PrivateRoutes from './components/PrivateRoutes';
// import AddContractor from './pages/Form/AddContractor';
// import AddSeller from './pages/Form/AddSeller';
// import EditInvigilator from './pages/Form/EditInvigilator';
// import TableTwo from './components/Tables/TableTwo';
// import Admin from './pages/Form/Admin';
// import ContractorDetails from './pages/Form/ContractorDetails'

// function App() {
//   const [loading, setLoading] = useState<boolean>(true);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return loading ? (
//     <Loader />
//   ) : (
//     <>
//       <Routes>
//         <Route
//           index
//           element={
//             <>
//             <PrivateRoutes><PageTitle title="Railway Dashboard" /> </PrivateRoutes>   
//              <PrivateRoutes> <ECommerce /> </PrivateRoutes> 
            
//             </>
//           }
//         />
//           <Route
//             // index
//         path="/login"
//           element={
//             <>
//               {/* <PageTitle title="/" /> */}
//               <Login />
//             </>
//           }
//         />
//           <Route
//             // index
//         path="/dashboard"
//           element={
//             <>
//               {/* <PageTitle title="/" /> */}
//               <ECommerce />
//             </>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <>
//               <PageTitle title="Profile" />
//               <Profile />
//             </>
//           }
//         />
        
//         <Route
//           path="/AddInvigilator"
//           element={
//             <>
//               <PageTitle title="Form Layout" />
//               <FormLayout />
//             </>
//           }
//         />
//         <Route
//           path="/EditInvigilator"
//           element={
//             <>
//               <PageTitle title="Form Layout" />
//               <EditInvigilator />
//             </>
//           }
//         />

//         <Route
//           path="/AddContractors"
//           element={
//             <>
//               <PageTitle title="Form Layout" />
//               <AddContractor />
//             </>
//           }
//           />
//         <Route
//           path="/admin"
//           element={
//             <>
//               <PageTitle title="Form Layout" />
//               <Admin />
//             </>
//           }
//           />
//           <Route
//           path="/AddSeller"
//           element={
//             <>
//               <PageTitle title="Form Layout" />
//               <AddSeller />
//             </>
//           }
//         />
//         <Route
//           path="/tables"
//           element={
//             <>
//               <PageTitle title="Tables" />
//               <Tables />
//             </>
//           }
//         />
//         <Route
//           path="/tabletwo"
//           element={
//             <>
//               <PageTitle title="TableTwo" />
//               <TableTwo />
//             </>
//           }
//         />
//         <Route
//           path="/settings"
//           element={
//             <>
//               <PageTitle title="Settings" />
//               <Settings />
//             </>
//           }
//         />
//         <Route
//           path="/auth/signin"
//           element={
//             <>
//               <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <SignIn />
//             </>
//           }
//         />
//         <Route
//           path="/auth/signup"
//           element={
//             <>
//               <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
//               <SignUp />
//             </>
//           }
//         />
//         <Route
//           path="/contractorDetails/:qrcode"
//           element={
//             <>
//               <ContractorDetails/>
//             </>
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;



import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Login from './pages/Login'
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import PrivateRoutes from './components/PrivateRoutes';
import AddContractor from './pages/Form/AddContractor';
import AddSeller from './pages/Form/AddSeller';
import EditInvigilator from './pages/Form/EditInvigilator';
import TableTwo from './components/Tables/TableTwo';
import Admin from './pages/Form/Admin';
import ContractorDetails from './pages/Form/ContractorDetails';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Routes>
        <Route
          index
          element={
            <>
              <PrivateRoutes><PageTitle title="Railway Dashboard" /></PrivateRoutes>   
              <PrivateRoutes><ECommerce /></PrivateRoutes> 
            </>
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/dashboard"
          element={<ECommerce />}
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        />
        <Route
          path="/AddInvigilator"
          element={
            <>
              <PageTitle title="Form Layout" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/EditInvigilator"
          element={
            <>
              <PageTitle title="Form Layout" />
              <EditInvigilator />
            </>
          }
        />
        <Route
          path="/AddContractors"
          element={
            <>
              <PageTitle title="Form Layout" />
              <AddContractor />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <PageTitle title="Form Layout" />
              <Admin />
            </>
          }
        />
        <Route
          path="/AddSeller"
          element={
            <>
              <PageTitle title="Form Layout" />
              <AddSeller />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables" />
              <Tables />
            </>
          }
        />
        <Route
          path="/tabletwo"
          element={
            <>
              <PageTitle title="TableTwo" />
              <TableTwo />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/contractorDetails/:qrcode"
          element={<ContractorDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;

