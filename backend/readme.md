# Auth0 Integration with Wix - Backend Instructions

Refer backend.png for visual understanding.

The code in `wix-auth0.jsw` is to be placed in the Wix site's backend code section to handle authentication logic between Auth0 and Wix Members.

## How to implement the code

1. In your Wix Dashboard, go to the Dev Mode section
2. Navigate to "Backend" in the left sidebar
3. Create a new `.jsw` file named `wix-auth0.jsw` (or use the existing file if already created)
4. Paste the entire code from `wix-auth0.jsw` into the file

## Functions Overview

This backend module provides the following functions:

- `RegisterOrLoginWixMemberNew(userInfo)`: Main function to register or log in a Wix member using Auth0 user information
- `getSessionToken(email)`: Utility function to generate a Wix session token for a given email
- `loginWixMember(userInfo)`: Simplified login function that uses Auth0 user info to authenticate with Wix

## Integration Notes

- The backend code uses the `wix-members-backend` module to interact with the Wix Members API
- This code expects to receive user information from Auth0 through the frontend code
- Auth0's `sub` field is used as a password equivalent for Wix registration/login (secure and stable identifier)
- Comprehensive error handling and logging are implemented for easy troubleshooting
