const exercicios = [
    {
        id: 1,
        nome: "Supino Inclinado",
        video: "importar",
        imagem: "importar",
        capa: "importar",
        descricao: "",
        tipo: "Superior",
        categoria: "Peito",
        musculosTrabalhados: [
            {
                id: 1,
                musculo: "Peitoral maior (porção superior)"
            },
            {
                id: 2,
                musculo: "Deltóide anterior (ombros)"
            },
            {
                id: 3,
                musculo: "Tríceps braquial"
            }
        ],
        passoAPasso: [
            {
                id: 1,
                titulo: "Ajuste o banco inclinado",
                descricao1: "Incline o banco entre 30° a 45°. Menos de 30° ativa mais o peitoral inteiro;",
                descricao2: "mais de 45° ativa mais os ombros.",
            },
            {
                id: 2,
                titulo: "Pegue os halteres",
                descricao1: "Use uma carga que você consiga controlar bem.",
                descricao2: "Sente-se com os halteres apoiados sobre as coxas.",
            },
            {
                id: 3,
                titulo: "Deite-se e posicione os halteres",
                descricao1: "Deite-se no banco com os pés bem firmes no chão.",
                descricao2: "Traga os halteres para a linha do peito, com os cotovelos levemente abaixo da linha dos ombros.",
            },
            {
                id: 4,
                titulo: " Empurre os halteres para cima",
                descricao1: "Estenda os braços, levando os halteres para cima até quase encostarem (sem bater).",
                descricao2: "Faça o movimento de forma controlada e sem impulso.",
            },
            {
                id: 5,
                titulo: "Desça lentamente",
                descricao1: "Abaixe os halteres até que fiquem na linha do peito novamente.",
                descricao2: "Mantenha o controle, sem deixar os cotovelos descerem demais.",
            },
            {
                id: 6,
                titulo: "Respiração",
                descricao1: "Inspire ao descer os halteres.",
                descricao2: "Expire ao empurrar os halteres para cima.",
            }


        ],
        erros: [
            {
                id: 1,
                descricao: "Arquear demais a lombar",
            },
            {
                id: 2,
                descricao: "Deixar os cotovelos muito abertos (pode forçar o ombro)",
            },
            {
                id: 3,
                descricao: "Usar peso excessivo e perder a forma",
            },
            {
                id: 4,
                descricao: "Bater os halteres no topo",
            }
        ],
        series: [
            {
                id: 1,
                titulo: "de 3 a 5 series",
                descricao: "de 3 a 5 series",

            },
            {
                id: 2,
                titulo: "de 3 a 5 series",
                descricao: "de 3 a 5 series"
            }
        ]

    }

]

export default exercicios