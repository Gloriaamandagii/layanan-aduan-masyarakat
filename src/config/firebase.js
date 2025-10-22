// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIqIippknMoHR8KjQOJEID54U-2QECPOw",
  authDomain: "devops-project-4a975.firebaseapp.com",
  projectId: "devops-project-4a975",
  storageBucket: "devops-project-4a975.firebasestorage.app",
  messagingSenderId: "587944696107",
  appId: "1:587944696107:web:46c75a52b4e979add90d6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Gunakan URL database dengan region asia-southeast1 agar tidak muncul warning
const database = getDatabase(
  app,
  "https://devops-project-4a975-default-rtdb.asia-southeast1.firebasedatabase.app"
);

/**
 * Login user dari Realtime Database berdasarkan username dan password.
 * Path data: /users/{username}
 */
export async function loginWithRealtimeUsers(username, password) {
  if (!username || !password)
    throw new Error("Username dan password wajib diisi.");

  // Normalisasi username agar cocok dengan key Firebase (tanpa spasi dan huruf kecil)
  const normalizedUsername = username.trim().toLowerCase().replace(/\s+/g, "");

  const dbRef = ref(database);

  try {
    const snapshot = await get(child(dbRef, `users/${normalizedUsername}`));

    if (!snapshot.exists()) {
      throw new Error("Akun tidak ditemukan. Periksa kembali username Anda.");
    }

    const userData = snapshot.val();

    if (
      userData.password &&
      String(userData.password) === String(password)
    ) {
      const { password: _pw, ...safeUser } = userData;
      return safeUser;
    }

    throw new Error("Password salah. Silakan coba lagi.");
  } catch (err) {
    throw err;
  }
}

export { app, database };
