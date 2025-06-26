import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {GoogleOAuthProvider} from "@react-oauth/google"

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId='443584291705-8eu3j8lea2fskhneggav24pgkgali9pl.apps.googleusercontent.com'>
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>
);
