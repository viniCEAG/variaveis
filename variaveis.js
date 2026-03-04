let temperaturaAtual = 28.5;

let climatiConforto = 26;

if (temperaturaAtual > climatiConforto) {
    console.log("Ligando o ar-condicionado...");
} else {
    console.log("Temperatura agradável");
}



export let usuarioCadastro = "vinizz.s";
export let senhaCadastro = "vinzika100";

export function tentarLogin(usuario, senha) {
    return usuario === usuarioCadastro && senha === senhaCadastro;
}