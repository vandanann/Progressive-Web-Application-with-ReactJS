# Progressive-Web-Application-with-ReactJS
Building Progressive Web application which is available offline and easier for users to discover. Progressive Web Apps (PWAs) are a hybrid between platform-specific apps and web apps

Create React App with any of the below commands :

npx create-react-app my-app --template cra-template-pwa

The template automatically adds a src/service-worker.js file to your project. This file contains a basic service worker that you can come back to later and customize to your liking.

Or, if you prefer to write your app in TypeScript over JavaScript, here’s how you would create a project that includes a starter src/service-worker.js file:

npx create-react-app my-app --template cra-template-pwa-typescript

Register the service worker
By default, service workers don’t become active and available for use until you register them. To learn more, you can read up on the fundamentals of the service worker life cycle.

Go to the src/index.js file in your project and find the following lines of code:

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

To register the service worker for use, simply modify the last line so that it looks like the following:

serviceWorkerRegistration.register();

The src/service-worker.js file is now registered and ready to play its key role in providing an offline-first experience for your users.

manifest.json
Most of the configuration for our PWA is placed here, which we can see if we open the public/manifest.json file.

The short_name and name fields describe how our application should be identified to users.
The short_name field should be no longer than 12 characters and will be shown underneath the application icon on the user's home screen. For the name field, we can use up to 45 characters. This is the main identifier for our application and can be seen during the process of adding the application to the home screen.
The icon field configures the particular icon users see when they add our application to their home screen.
Finally, using the theme_color and background_color fields, we can set the colors (in HEX format) for the top bar when our application is opened from the home screen on a mobile device

Next , we need to fetch the official Country REST API and pull information from its endpoints. We'll use the fetch API for this. We can retrieve our country data by executing the following command.

curl https://restcountries.com/v3.1/all

Now that we have setup our PWA environment

Serving the PWA
With the configuration of our PWA in place, it's time to see how this will affect the application.
The PWA will only be visible when the build version of our application is open. To do this, execute the following command in the projects' root directory:

npm run build

This will initiate the build process, which minifies our application to a bundle that's stored inside the build directory. Create React App suggest how we should serve this build version:

npm install -g serve

The npm install command installs the serve package, which is used to serve built static sites or, in this case, JavaScript applications. After installing this package, we can use it to deploy the build directory on our server or local machine by running the following:

serve -s build

we'll see that everything looks exactly like the version we're running on http://localhost:3000/. There is one big difference, however: the build version is running as a PWA. This means that if our internet connections fails, the application will still be shown. We can try this out by disconnecting our internet connection or stopping the serve package from the command line.





