// Lista dos trabalhos/alunos a serem avaliados.
// Para corrigir, adicionar ou remover um nome, edite este array e suba
// o arquivo atualizado - a mudanca vale para as duas paginas (votacao
// e painel do professor) automaticamente.
const STUDENTS = [
  "Caue",
  "Davi",
  "Edgar",
  "Felipe",
  "Filippo",
  "Gabriel",
  "Guilherme",
  "Gustavo",
  "Henrique",
  "Joao Fellipe",
  "Manuela",
  "Matheus",
  "Saulo",
];

// Gera um identificador estavel (sem espacos/acentos) a partir do nome.
// E esse identificador que vira o "slug" salvo no banco de dados.
function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9]/g, "");
}

const STUDENT_SLUGS = STUDENTS.map(slugify);

// Mapa slug -> nome de exibicao
const SLUG_TO_NAME = Object.fromEntries(
  STUDENTS.map((name) => [slugify(name), name])
);
