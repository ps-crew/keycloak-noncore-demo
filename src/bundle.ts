import Keycloak from "keycloak-js";

const keycloak = Keycloak({
  url: "https://accounts2.heig-vd.ch/auth",
  realm: "HEIG-VD",
  clientId: "test-client",
});

(async () => {
  await keycloak.init({ onLoad: "login-required" });

  const { firstName, lastName, email, username } =
    await keycloak.loadUserProfile();

  document.querySelector(
    "[data-value=name]"
  ).innerHTML = `${firstName} ${lastName}`;
  document.querySelector("[data-value=email]").innerHTML = email;
  document.querySelector("[data-value=username]").innerHTML = username;
  (document.querySelector(".card") as HTMLElement).style.display = "block";
})();
