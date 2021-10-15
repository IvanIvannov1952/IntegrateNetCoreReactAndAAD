import { MsalAuthProvider, LoginType } from "react-aad-msal";
import { Logger, LogLevel } from "msal";


export const authProvider = new MsalAuthProvider(
  {
    auth: {
      authority: "https://login.microsoftonline.com/24730b35-8dd2-4342-837c-e424a8a9d3d7",//tenantId
      clientId: "e6b7cf17-c2a5-4026-a68a-ff81c64e4eab",
       postLogoutRedirectUri: window.location.origin,
       redirectUri: window.location.origin,
      // redirectUri: "https://localhost:5001/",
       validateAuthority: true,
       navigateToLoginRequestUrl: true,
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: true,
    },
  },
  {
    scopes: ['api://f62fd0d9-b8d0-4667-8c02-d1f9cdb19a9e/Read'],
   
  },
  {
    loginType: LoginType.Redirect,
    tokenRefreshUri: window.location.origin
  }
);