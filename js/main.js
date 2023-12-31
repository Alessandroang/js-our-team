// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede

// Dati personaggi:

// Wayne Barnett		Founder & CEO			wayne-barnett-founder-ceo.jpg
// Angela Caroll		Chief Editor			angela-caroll-chief-editor.jpg
// Walter Gordon		Office Manager			walter-gordon-office-manager.jpg
// Angela Lopez		Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada		Developer				scott-estrada-developer.jpg
// Barbara Ramos		Graphic Designer		barbara-ramos-graphic-designer.jpg

// Creare l’array di oggetti con le informazioni fornite.

const teamMembers = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

const teamContainer = document.getElementById("team-container");

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  // Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

  console.log("Nome:", member.nome);
  console.log("Ruolo:", member.ruolo);
  console.log("Foto:", member.foto);
  console.log("---"); // Separatore tra i membri del team

  // Crea la card nel DOM
  const cardTemplate = `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="./img/${member.foto}" class="card-img-top" alt="${member.nome}">
        <div class="card-body">
          <h5 class="card-title">${member.nome}</h5>
          <p class="card-text">${member.ruolo}</p>
        </div>
      </div>
    </div>
  `;

  teamContainer.innerHTML += cardTemplate;
}
