//// Local Storage ////

/// Creating Firebase Project ///
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnyq2GldtNkZfZ3q5-FN9eNxVY0prabWg",
  authDomain: "fir-9-learning-d1c0d.firebaseapp.com",
  projectId: "fir-9-learning-d1c0d",
  storageBucket: "fir-9-learning-d1c0d.appspot.com",
  messagingSenderId: "670423215750",
  appId: "1:670423215750:web:0ab9eb7e204180b2026b07",
};

// init firebas app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, "books");

// queries
// const q = query(colRef, where("author", "==", "denis"), orderBy("createdAt"));
const q = query(colRef, orderBy("createdAt"));

// get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     let books = [];
//     snapshot.docs.forEach((doc) => {
//       books.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(books);
//   })
//   .catch((err) => {
//     console.log(err.mesage);
//   });

// real time collection data
const unsubCol = onSnapshot(q, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

/// Adding and Deleting Documents ///
// adding docs
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp(),
  }).then(() => {
    addBookForm.reset();
  });
});

// deleting docs
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", deleteBookForm.id.value);

  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});

// updating a document
const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let docRef = doc(db, "books", updateForm.id.value);

  updateDoc(docRef, {
    title: "updated title",
  }).then(() => {
    updateForm.reset();
  });
});

/// Get Single Document ///
const docRef = doc(db, "books", "ibv5dN9Jn2fEDCPjnTig");

// getDoc(docRef).then((doc) => {
//   console.log(doc.data(), doc.id);
// });

const unsubDoc = onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
});

/// Firebase Auth Setup ///
// signing users up
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user created:", cred.user);
      signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// logging in and out
const logoutButton = document.querySelector(".logout");
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("user signed out");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user logged in:", cred.user);
      loginForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log("user status changed:", user);
});

// unsubscribing from changes (auth & db)
const unsubButton = document.querySelector(".unsub");
unsubButton.addEventListener("click", () => {
  console.log("unsubscribing... and unsubscribed");
  unsubCol();
  unsubDoc();
  unsubAuth();
});
