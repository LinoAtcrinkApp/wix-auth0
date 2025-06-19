/**
 * AUTH0 INTEGRATION WITH WIX - FRONTEND CODE
 * 
 * PLACEMENT INSTRUCTIONS:
 * 1. In the Wix Editor, go to 'Add' panel on the left side
 * 2. Select 'Interactive' > 'Custom Element' > 'Code' (or search for 'Code' in the Add panel)
 * 3. Add this code element to your login/signup lightbox or dedicated auth page
 * 4. Open the code element settings and paste this entire file
 * 
 * CONFIGURATION:
 * - Replace 'your-auth0-domain' with your actual Auth0 domain (e.g., 'dev-xyz123.us.auth0.com')
 * - Replace 'YOUR_CLIENT_ID' with your Auth0 application's client ID
 * - Update the redirect_uri to match your Wix site URL and page/lightbox path
 * - Make sure backend/auth0-wix.js is properly set up with the backend functions
 * 
 * NOTE: This code assumes the backend function 'RegisterOrLoginWixMemberNew' exists
 * which handles creating/updating Wix members based on Auth0 user data
 */

import wixLocation from 'wix-location';
import { jwtDecode } from "jwt-decode";
import { RegisterOrLoginWixMemberNew } from "backend/auth0-wix";
import { authentication } from 'wix-members-frontend';

function generateNonce(length = 32) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
}

$w.onReady(function () {
  const hash = wixLocation.url.split('#')[1];
  const params = new URLSearchParams(hash);
  const idToken = params.get('id_token');

  if (!idToken || !authentication.loggedIn) {
    const nonce = generateNonce();
    wixLocation.to(
      "https://your-auth0-domain/authorize?" + 
      "client_id=YOUR_CLIENT_ID" +
      "&redirect_uri=https://your-wix-site.com/callback" +
      "&response_type=token id_token" +
      "&scope=openid profile email" +
      `&nonce=${nonce}`
    );
    return;
  }

  try {
    const userInfo = jwtDecode(idToken);
    RegisterOrLoginWixMemberNew(userInfo)
      .then(result => authentication.applySessionToken(result.sessionToken))
      .then(() => wixLocation.to('/Home'))
      .catch(err => console.error("Login error:", err));
  } catch (e) {
    console.error("Invalid or expired ID token:", e);
  }
});
