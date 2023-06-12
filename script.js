var page = 1;

function buscar_produtos_iniciais(parametro) {
  const json_do_js = [];
  const numerodapag = document.getElementById("Numpag");
  numerodapag.innerHTML = page

  fetch(`https://diwserver.vps.webdock.cloud/products?${parametro}`)
    .then(response => response.json())
    .then(data => {
      const produtos = data.products

      produtos.forEach(element => {
        const produtos_do_for = {
          id: element.id,
          title: element.title,
          price: element.price,
          description: element.description,
          image: element.image,
          brandName: element.brandName,
          season: element.season,
          usage: element.usage,
          gender: element.gender,
          articleNumber: element.articleNumber,
          baseColour: element.baseColour,
          year: element.year,
          articleType: element.articleType,
          displayCategories: element.displayCategories,
          category: element.category
        };
        json_do_js.push(produtos_do_for);
      });
      adicionar_dom(json_do_js)
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
}

function buscar_produtos_iniciais2(parametro) {
  const json_do_js = [];
  page = 1;
  const numerodapag = document.getElementById("Numpag");
  numerodapag.innerHTML = page

  fetch(`https://diwserver.vps.webdock.cloud/products?${parametro}`)
    .then(response => response.json())
    .then(data => {
      const produtos = data.products

      produtos.forEach(element => {
        const produtos_do_for = {
          id: element.id,
          title: element.title,
          price: element.price,
          description: element.description,
          image: element.image,
          brandName: element.brandName,
          season: element.season,
          usage: element.usage,
          gender: element.gender,
          articleNumber: element.articleNumber,
          baseColour: element.baseColour,
          year: element.year,
          articleType: element.articleType,
          displayCategories: element.displayCategories,
          category: element.category
        };
        json_do_js.push(produtos_do_for);
      });
      adicionar_dom(json_do_js)
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
}

function buscar_produtos_iniciais3(parametro) {
  const json_do_js = [];
  page = 1;
  const numerodapag = document.getElementById("Numpag");
  numerodapag.innerHTML = page

  fetch(`https://diwserver.vps.webdock.cloud/products/${parametro}`)
    .then(response => response.json())
    .then(data => {
      const produtos_do_for = {
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.image,
        brandName: data.brandName,
        season: data.season,
        usage: data.usage,
        gender: data.gender,
        articleNumber: data.articleNumber,
        baseColour: data.baseColour,
        year: data.year,
        articleType: data.articleType,
        displayCategories: data.displayCategories,
        category: data.category
      };
      json_do_js.push(produtos_do_for);
      adicionar_dom(json_do_js)
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
}

function adicionar_dom(Produtos) {

  const pagina = document.getElementById("prods")
  pagina.innerHTML = '';

  Produtos.forEach(element => {
    const CardProduto = document.createElement("div")
    CardProduto.classList.add("card");

    const titulo = document.createElement("h1")
    titulo.textContent = element.title;

    const id = document.createElement("p")
    id.innerHTML = `ID: <strong> ${element.id}</strong>`;

    const preço = document.createElement("p")
    preço.innerHTML = `<strong>R$</strong> ${element.price},00`;

    const imagem = document.createElement("img")
    imagem.src = element.image;
    imagem.classList.add('img-cards')

    const uso = document.createElement("usage")
    uso.innerHTML = `<strong>${element.usage}</strong>`

    const marca = document.createElement("p");
    marca.innerHTML = `Marca: <strong>${element.brandName}</strong>`
    CardProduto.appendChild(imagem);
    CardProduto.appendChild(titulo);
    CardProduto.appendChild(uso);
    CardProduto.appendChild(marca);
    CardProduto.appendChild(preço);

    CardProduto.addEventListener('click', () => {

      window.location.href = `descricao_produtos.html?id=${element.id}`;
    });
    pagina.appendChild(CardProduto)

  })

}

function Direita() {
  page += 1;
  console.log(page)

  buscar_produtos_iniciais(`page=${page}`)
  const numerodapag = document.getElementById("Numpag");
  numerodapag.innerHTML = page

}

function Esquerda() {
  if (page <= 1) {
    alert("Já está na pagina inicial");
  }
  else {
    page -= 1;
    console.log(page)

    buscar_produtos_iniciais(`page=${page}`)
    const numerodapag = document.getElementById("Numpag");
    numerodapag.innerHTML = page
  }
}

function pesquisaid() {
  const numero_do_id = document.getElementById("iddapesquisa").value;
  console.log(numero_do_id)

  buscar_produtos_iniciais3(numero_do_id)
}
function BuscarCategory() {
  const category = document.getElementById("Seleção").value
  const limparTela = document.getElementById("prods");
  limparTela.innerHTML = '';

  fetch(`https://diwserver.vps.webdock.cloud/products/category/${category}`)
    .then(response => response.json())
    .then(data => {
      const produtos_Category = data.products

      produtos_Category.forEach(VariavelDoForEach => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const titleElement = document.createElement('h3');
        titleElement.textContent = VariavelDoForEach.title;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${VariavelDoForEach.price}`;

        const imageElement = document.createElement('img');
        imageElement.src = VariavelDoForEach.image;
        imageElement.classList.add('img-cards');

        const idElement = document.createElement('p');
        idElement.textContent = `ID: ${VariavelDoForEach.id}`;
        idElement.classList.add('Id-card');

        const uso = document.createElement("usage")
        uso.innerHTML = `<strong>${VariavelDoForEach.usage}</strong>`

        const marca = document.createElement("p");
        marca.innerHTML = `Marca: <strong>${VariavelDoForEach.brandName}</strong>`
        cardElement.appendChild(imageElement);
        cardElement.appendChild(titleElement);
        cardElement.appendChild(uso);
        cardElement.appendChild(marca);
        cardElement.appendChild(priceElement);
        cardElement.addEventListener('click', () => {

          window.location.href = `descricao_produtos.html?id=${VariavelDoForEach.id}`;
        });
        limparTela.appendChild(cardElement);
      });

    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });

}