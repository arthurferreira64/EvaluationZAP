describe("Search Test", () => {
  it("should visit http://151.80.32.16:8965/, test register and register failed", () => {
    cy.visit("http://151.80.32.16:8965");

    // Clique sur le bouton "ouvrir mon compte"
    cy.contains("a.nav-link", "Ouvrir mon compte").click();

    //Vérification qu'on est bien sur la bonne page
    cy.url().should("include", "#openaccount");

    //nom
    cy.get('#openaccount input[name="lastname"]').type("Dupont");
    //prenom
    cy.get('#openaccount input[name="firstname"]').type("Jean");
    //Date naissance
    cy.get('#openaccount input[name="born"]').type("1980-01-01");
    //adresse
    cy.get('#openaccount input[name="adre"]').type("123 Rue Exemple");
    //Code postal
    cy.get('#openaccount input[name="pcode"]').type("75000");

    //Email
    cy.get('#openaccount input[name="mail"]').type("jeandupont@example.com");

    //Mot de passe et vérification du mot de passe
    cy.get('#openaccount input[name="pass"]').type("password123");
    cy.get('#openaccount input[name="passverif"]').type("password123");

    //Ajouter piece identité
    cy.get('#openaccount input[name="pi"]').attachFile("carte_identite.png");

    //Cocher les CGU
    cy.get('#openaccount input[name="cguvalid"]').check();

    // Soumettre le formulaire
    cy.get("#openaccount .submit-button").click({ timeout: 2000 });
  });
});
