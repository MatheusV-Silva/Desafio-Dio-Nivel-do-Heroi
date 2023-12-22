let nomeDoHeroi="Heroi_1"
let xpHeroi=10001
let nivelDoHeroi=''

if (xpHeroi<=1000){
    nivelDoHeroi='Ferro'
    console.log("O Herói de nome "+nomeDoHeroi+" está no nível de "+ nivelDoHeroi);
  } else if (xpHeroi>1000 && xpHeroi<=2000 ) { 
    nivelDoHeroi='Bronze'
    console.log("O Herói de nome "+nomeDoHeroi+" está no nível de "+nivelDoHeroi);
  } else if (xpHeroi>2000 && xpHeroi<=5000 ) { 
    nivelDoHeroi='Prata'
    console.log("O Herói de nome "+nomeDoHeroi+" está no nível de "+nivelDoHeroi);
  } else if (xpHeroi>5000 && xpHeroi<=7000 ) { 
    nivelDoHeroi='Ouro'
    console.log("O Herói de nome "+nomeDoHeroi+" está no nível de "+nivelDoHeroi);
  } else if (xpHeroi>7000 && xpHeroi<=8000 ) { 
    nivelDoHeroi='Platina'
    console.log("O Herói de nome "+nomeDoHeroi+" está no nível de "+nivelDoHeroi);
  }else if (xpHeroi>8000 && xpHeroi<=9000 ) { 
    nivelDoHeroi='Ascendente'
    console.log("O Herói de nome "+nomeDoHeroi+" está no nível de "+nivelDoHeroi);
  }else if (xpHeroi>9000 && xpHeroi<=10000 ) { 
    nivelDoHeroi='Imortal'
    console.log("O Herói de nome "+nomeDoHeroi+" está no nível de "+nivelDoHeroi);
  } else {
    nivelDoHeroi='Radiante'
    console.log("O Herói de nome "+nomeDoHeroi+" está no nível de "+nivelDoHeroi);
  }