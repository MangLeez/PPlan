import * as firebase from 'firebase';

const firebaseConfig = {
     apiKey: 'AIzaSyAx_oCEIQdWvArVE2mZ7Sfv1kfY8wyLL00',
     authDomain: 'pplan-1e7ec.firebaseapp.com',
     projectId: 'pplan-1e7ec',
     storageBucket: 'pplan-1e7ec.appspot.com',
     messagingSenderId: '169989652986',
     appId: '1:169989652986:web:c1746626fdaf2326306443',
     measurementId: 'G-178ZX0C0XF',
};

if (firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
}

export default firebase;
