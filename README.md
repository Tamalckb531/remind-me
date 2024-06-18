# remind-me

A todo like remind me application. Made it to learn about zod, react-hook-form and typescript.

## Clerk Authentication :

**Building step:**

1. Login into clerk and create a new app.
2. Get the .env and paste them.
3. Paste the middleware.ts code.
4. Wrap layout.tsx html with ClerkProvider.

**Sign-in / Sign-up:**

1. Add the default component by clerk in the sign-in and sign-up catch all folder.
2. Add the env.

<br/>

## Theme Provider and Switcher:

1. Add next-theme
2. Create a ThemeProvider
3. Wrap Everything inside body with ThemeProvider
4. Create a ThemeSwitcher bar on Navbar:
   1. On mount set the mount true and while not mount, return null. This will solve the hydration error.
   2. Get the theme from useTheme of next-theme and set the Theme according to the tab.

<br/>

## Dashboard page welcome:

1. currentUser from clerk give the data of current user.
2. Suspense fallback is used to show skeleton while loading.
