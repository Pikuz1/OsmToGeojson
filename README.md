# This is an application for getting map from geojson data converted from OSM format using react hooks


This is a web app containing a single page to get "GeoJSON features" of a location given with the coordinates (as geolocation box).

Following tasks are done in this app:
-[x] Application needs to make a call to open street map api (https://www.openstreetmap.org/api/0.6/map) gather information in "osm" format, convert it to "GeoJSON" and properly display the dataset.
-[x] Converting data using "osmtogeojson".
-[x] Map is visible using react-leaflet.
-[x] Zoom in and out feature is included from react-leaflet.
-[x] User can enter co-ordinates according to wish but osm accepts only for 50000 nodes data.
-[x] Testing is done by using react test library.
-[x] Application is responsive using flexbox and css.
-[x] Reusability of the components is easy using react-hooks.

You can use following commands to start running application:

### `npm install`
This command will install every dependency which is required for running an application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

