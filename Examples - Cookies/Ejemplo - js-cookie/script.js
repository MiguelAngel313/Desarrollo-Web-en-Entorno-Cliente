import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.mjs";

// Si el usuario no tiene ID, se genera uno único
if (!Cookies.get("visitorId")) {
  const id = crypto.randomUUID();
  Cookies.set("visitorId", id, { expires: 365, path: "/" });
}

// Luego puedes enviarlo en tus propios logs
console.log("Visitor ID:", Cookies.get("visitorId"));
