var num = Math.floor(Math.random() * 100) + 1;
var NbEssais = 0;
function Try() {

    var input = document.form.find.value;
    NbEssais++;
    status = "Nombre d'essais : " + NbEssais;

    if (input < num) 
        document.form.indice.value = "Le nombre est plus grand";

    if (input > num)
        document.form.indice.value = "Le nombre est plus petit";
        
    if (input == num) {
        window.alert("Bien joué! Vous avez trouvé en " + NbEssais + "essais");
        location.reload();
    }

    if (NbEssais == 10) {
        window.alert("Perdu! Le nombre correct était : " + num);
        location.reload();
    }
}