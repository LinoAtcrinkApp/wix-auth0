# 🛡️ Custom Authentication in Wix Using Auth0

## 📘 Overview

This documentation explains how to integrate **Auth0** with **Wix** to create a fully custom authentication experience. Instead of using Wix's built-in login popup, we use Auth0’s Universal Login for improved flexibility, security, and control over the user experience.

You’ll learn how to:
- Configure an Auth0 application for Wix
- Replace Wix’s default authentication with Auth0’s Universal Login
- Restrict access to specific Wix pages
- Use backend logic to register and authenticate users in the Wix Members system
- Apply session tokens after successful Auth0 login

---

## ✅ Prerequisites

To follow along with this guide, you’ll need:
- An **Auth0** account
- Basic knowledge of JavaScript and the Wix Editor

---

## 🎯 Goal

By the end of this guide, you will have a custom authentication flow where:
1. Users log in through **Auth0’s Universal Login**
2. Upon successful login, users are added to **Wix Members**
3. Protected pages are only accessible after authentication

This approach gives you full control over your site’s login behavior while benefiting from Auth0’s scalable authentication infrastructure.

---

## 🧭 Steps
1. Redirect the user to auth0 universal login when login is required.
2. Use the **auth0** generated Id token to manually add the user to wix members list.

## Folder's explanation

### backend:
Explains the backend code for implementing the authentication. The code in this folder needs to be placed in the backend of wix site. For this navigate to the backend in wix and then create a new file in any name with the jsw format (wix-auth0.jsw).
        This file will serve with us certain functionalities like fetching the token generated, decoding the token...

### frontend:
This will serve the front end functionalities of the integration, like the redirection to auth0 universal login consol, add the wix members, listen to front end changes and all
