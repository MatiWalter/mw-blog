---
  title: 'Autenticación Firebase en Js'
  date: '2021-08-22'
---

Lo primero que necesitamos es instalar firebase en nuestro proyecto.
Para eso ejecutaremos el siguiente comando npm en la raiz de nuestro proyecto:

```js
  npm install firebase
```

Luego crearemos un archivo de configuración donde configuraremos firebase.
En este archivo tendremos que importar las siguientes librerias:

Firebase/auth nos provee distintos métodos de autenticación con auth0, es decir, sin esta importación sólo podriamos configurar una autenticación por email y contraseña, mientras que con firebase/auth podremos usar autenticación de google, facebook, twitter, entre otras.

```js
  import firebase from 'firebase/app';
  import 'firebase/auth';
```

Vamos a crear un objeto con los datos de nuestra aplicación ya creada en la consola de firebase. (No visto en este artículo).

```js
  const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "..."
  };
```

Usaremos el método initializeApp de firebase dandole como parámetro nuestro objeto de configuración.

Luego podemos crear un Provider si queremos, por ejemplo en este caso, que el usuario pueda autenticarse con Google.
El metodo setCustomParameters nos permite configurar ciertos parametros de nuestro Provider, en este caso, con la propiedad ``prompt: 'select_account'`` le estamos diciendo a nuestro Provider que nos permita seleccionar una cuenta cada vez que nos autentiquemos, en lugar de guardarse la ultima cuenta utilizada.

```js
  firebase.initializeApp(firebaseConfig);

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
  });
```

Por ultimo exportamos nuestro Provider y nuestra aplicacion firebase.

```js
  export {
    googleAuthProvider,
    firebase
  }
```

La api de firebase nos provee diferentes métodos para poder autenticarnos, entre los cuales podemos utilizar:

```js
  firebase.auth().signInWithEmailAndPassword(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password);
  firebase.auth().signInWithPopup(googleAuthProvider);
```

Cabe destacar que todos estos métodos devuelven una Promesa.
