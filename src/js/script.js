// Classe para criar objetos vinho
    class Vinho {
    constructor(nome, tipo, safra, estoque) {
        this.nome = nome;
        this.tipo = tipo;
        this.safra = safra;
        this.estoque = estoque;
    }
    }

    // Array que guarda os vinhos da vinícola
    const vinhos = [];

    // Função para incluir um novo vinho no estoque
    function inserirVinho(nome, tipo, safra, estoque) {
    const vinho = new Vinho(nome, tipo, safra, estoque);
    vinhos.push(vinho);
    }

    // Inserção dos vinhos inicial, já cadastrados
    inserirVinho("Vinho Tinto", "tinto", 2017, 4);
    inserirVinho("Vinho Branco", "branco", 2019, 7);
    inserirVinho("Vinho Rosé", "rosé", 2020, 2);
    inserirVinho("Vinho Especial", "tinto", 2018, 10);
    inserirVinho("Vinho Reserva", "branco", 2015, 3);

    // Calcula o total do estoque somando os estoques individuais
    function totalEstoque() {
    return vinhos.reduce((soma, vinho) => soma + vinho.estoque, 0);
    }

    // Retorna lista de vinhos com estoque abaixo de 5
    function vinhosEstoqueBaixo() {
    return vinhos.filter(vinho => vinho.estoque < 5);
    }

    // Retorna nomes dos vinhos em maiúsculas
    function nomesMaiusculos() {
    return vinhos.map(vinho => vinho.nome.toUpperCase());
    }

    // Lista todos os vinhos com seus detalhes no console
    function listarTodos() {
    vinhos.forEach((vinho, i) => {
        console.log(`---- Vinho ${i + 1} ----`);
        console.log(`Nome: ${vinho.nome}`);
        console.log(`Tipo: ${vinho.tipo}`);
        console.log(`Safra: ${vinho.safra}`);
        console.log(`Estoque: ${vinho.estoque}`);
        console.log("");
    });
    }

    // Exibe os dados finais, como pedido, usando console.log e alert
    function mostrarRelatorio() {
    console.log("=== Lista Completa de Vinhos ===");
    listarTodos();

    const baixos = vinhosEstoqueBaixo();
    if (baixos.length > 0) {
        console.log("=== Vinhos com Estoque Baixo (<5) ===");
        baixos.forEach(v => console.log(`- ${v.nome}`));
    } else {
        console.log("Nenhum vinho com estoque baixo.");
    }

    console.log(`=== Estoque Total: ${totalEstoque()} ===`);

    console.log("=== Nomes em Caixa Alta ===");
    nomesMaiusculos().forEach(nome => console.log(nome));

    alert(
        `Relatório final:\n` +
        `- Vinhos cadastrados: ${vinhos.length}\n` +
        `- Estoque total: ${totalEstoque()}\n` +
        `- Vinhos com estoque baixo (${baixos.length}): ${baixos.map(v => v.nome).join(", ")}\n` +
        `Confira os detalhes no console.`
    );

    alert(`Nomes dos vinhos em caixa alta:\n${nomesMaiusculos().join("\n")}`);
    }

    // Executa a exibição do relatório ao final
    mostrarRelatorio();