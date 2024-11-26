// Vetores de Bolos e Massas
const Bolos = ["Farinha", "Ovos", "Açúcar", "Leite", "Calda"];
const Massas = ["Farinha", "Sal", "Molho", "Verduras", "Ovos",];

// Função para calcular a união
function calcularUniao(bolos, massas) {
  let uniao = [];

  // Adiciona elementos de Bolos na união
  for (let i = 0; i < bolos.length; i++) {
    let elemento = bolos[i];
    let jaExiste = false;

    for (let j = 0; j < uniao.length; j++) {
      if (uniao[j] === elemento) {
        jaExiste = true;
        break;
      }
    }

    if (!jaExiste) {
      uniao.push(elemento);
    }
  }

  // Adiciona elementos de Massas na união
  for (let i = 0; i < massas.length; i++) {
    let elemento = massas[i];
    let jaExiste = false;

    for (let j = 0; j < uniao.length; j++) {
      if (uniao[j] === elemento) {
        jaExiste = true;
        break;
      }
    }

    if (!jaExiste) {
      uniao.push(elemento);
    }
  }

  return uniao;
}

// Função para calcular a diferença
function calcularDiferenca(bolos, massas) {
  let diferenca = [];

  // Adiciona elementos de Bolos que não estão em Massas
  for (let i = 0; i < bolos.length; i++) {
    let elemento = bolos[i];
    let existeEmMassas = false;

    for (let j = 0; j < massas.length; j++) {
      if (elemento === massas[j]) {
        existeEmMassas = true;
        break;
      }
    }

    if (!existeEmMassas) {
      diferenca.push(elemento);
    }
  }

  return diferenca;
}

// Função para calcular a interseção
function calcularInterseccao(bolos, massas) {
  let interseccao = [];

  // Adiciona elementos que estão nos dois vetores
  for (let i = 0; i < bolos.length; i++) {
    let elemento = bolos[i];
    let existeEmMassas = false;

    for (let j = 0; j < massas.length; j++) {
      if (elemento === massas[j]) {
        existeEmMassas = true;
        break;
      }
    }

    let jaAdicionado = false;
    for (let k = 0; k < interseccao.length; k++) {
      if (elemento === interseccao[k]) {
        jaAdicionado = true;
        break;
      }
    }

    if (existeEmMassas && !jaAdicionado) {
      interseccao.push(elemento);
    }
  }

  return interseccao;
}

// Função para calcular receitas possíveis de bolo
function calcularReceitasBolo(quantidades) {
  let receitas = Infinity;

  // Ingredientes necessários por receita
  const consumo = {
    Farinha: 150,
    Ovos: 1,
    Açúcar: 75,
    Leite: 100,
    Calda: 50,
  };

  // Calcula o número de receitas possíveis para cada ingrediente
  for (let ingrediente in consumo) {
    let maxReceitas = Math.floor(quantidades[ingrediente] / consumo[ingrediente]);
    if (maxReceitas < receitas) {
      receitas = maxReceitas;
    }
  }

  return receitas;
}

// Função para calcular receitas possíveis de massa
function calcularReceitasMassa(quantidades) {
  let receitas = Infinity;

  // Ingredientes necessários por receita
  const consumo = {
    Farinha: 75,
    Sal: 3,
    Molho: 60,
    Verduras: 30,
    Ovos: 1,
  };

  // Calcula o número de receitas possíveis para cada ingrediente
  for (let ingrediente in consumo) {
    let maxReceitas = Math.floor(quantidades[ingrediente] / consumo[ingrediente]);
    if (maxReceitas < receitas) {
      receitas = maxReceitas;
    }
  }

  return receitas;
}

// Quantidades disponíveis
const BolosQ = { Farinha: 500, Ovos: 4, Açúcar: 250, Leite: 400, Calda: 200 };
const MassasQ = { Farinha: 300, Sal: 15, Molho: 180, Verduras: 100, Ovos: 3 };

// Calculando e exibindo os resultados
console.log("União:", calcularUniao(Bolos, Massas));
console.log("Diferença:", calcularDiferenca(Bolos, Massas));
console.log("Interseção:", calcularInterseccao(Bolos, Massas));

const receitasBolo = calcularReceitasBolo(BolosQ);
console.log(`É possível fazer ${receitasBolo} receitas de bolo com a quantidade de ingredientes.`);

const receitasMassa = calcularReceitasMassa(MassasQ);
console.log(`É possível fazer ${receitasMassa} receitas de massa com a quantidade de ingredientes.`);