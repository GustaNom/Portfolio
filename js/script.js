import textosIngles from "./textos-ingles.js";
import textosPortugues from "./textos-portugues.js";

const botaoCurriculoSpan = document.querySelector('.botao-curriculo');
const botaoCurriculoBtn = document.querySelector('.botao-curriculo-background');
const botaoLinguagem = document.querySelector('.botao-linguagem');
const containerProjetos = document.querySelector('.container-card-projetos');

const tituloBanner = document.getElementById('titulo-banner');
const descricaoBanner = document.getElementById('descricao-banner');
const botaoProjetoBanner = document.getElementById('botao-projeto-banner');
const botaoTecnologiasBanner = document.getElementById('botao-tecnologias-banner');
const tituloTecnologias = document.getElementById('titulo-tecnologias');
const tituloBaterPapo = document.getElementById('titulo-bater-papo');
const descricaoBaterPapo = document.getElementById('descricao-bater-papo');
const botaoBaterPapo = document.getElementById('botao-bater-papo');
const tituloProjetos = document.getElementById('titulo-projetos');
const subtituloProjetos = document.getElementById('subtitulo-projetos');
const tituloFooter = document.getElementById('titulo-footer');
const subtituloFooter = document.getElementById('subtitulo-footer');

function trocarLinguagem(linguagem) {
  const dados = linguagem == 'portugues' ? textosPortugues : textosIngles;

  // atualizar texto do botão (span dentro do botão)
  if (botaoCurriculoSpan) botaoCurriculoSpan.textContent = dados.header.botoes.curriculo;
  tituloBanner.textContent = dados.banner.titulo;
  descricaoBanner.textContent = dados.banner.descricao;
  botaoProjetoBanner.textContent = dados.banner.botoes.projetos;
  botaoTecnologiasBanner.textContent = dados.banner.botoes.tecnologias;
  tituloTecnologias.textContent = dados.tecnologias.titulo;
  tituloBaterPapo.textContent = dados.contato.titulo;
  descricaoBaterPapo.textContent = dados.contato.descricao;
  botaoBaterPapo.textContent = dados.contato.botao;
  tituloProjetos.textContent = dados.projetos.titulo;
  subtituloProjetos.textContent = dados.projetos.subtitulo;
  tituloFooter.textContent = dados.footer.desenvolvedor;
  subtituloFooter.textContent = dados.footer.agradecimento;

  containerProjetos.innerHTML = '';

  dados.projetos.lista.forEach((projeto) => {
    const div = document.createElement('div');
    div.classList.add('card-projeto');
    
    let botoesHTML = '';
    if (projeto.links.repositorio) {
      botoesHTML += `<a href="${projeto.links.repositorio}" target="_blank"><button class="button mr-4">${projeto.botoes.repositorio}</button></a>`;
    } else {
      botoesHTML += `<button class="button mr-4" disabled>${projeto.botoes.repositorio}</button>`;
    }
    
    if (projeto.links.aplicacao) {
      botoesHTML += `<a href="${projeto.links.aplicacao}" target="_blank"><button class="button">${projeto.botoes.aplicacao}</button></a>`;
    } else {
      botoesHTML += `<button class="button" disabled>${projeto.botoes.aplicacao}</button>`;
    }
    
    div.innerHTML = `
      <h6 class="title is-5">${projeto.nome}</h6>
      <p>Tecnologias: <span class="span-linguagens">${projeto.tecnologias}</span></p>
      <p class="mt-5 mb-5">${projeto.descricao}</p>
      <div class="is-flex">
        ${botoesHTML}
      </div>
    `;

    containerProjetos.appendChild(div);
  });
}

// Clique no botão de currículo: tenta baixar o PDF se existir, senão abre LinkedIn
if (botaoCurriculoBtn) {
  botaoCurriculoBtn.addEventListener('click', async function() {
    const pdfPath = './assets/Gustavo_Santos_PT-BR.pdf';
    try {
      const res = await fetch(pdfPath, { method: 'HEAD' });
      if (res.ok) {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'GUSTAVO_SANTOS_PT-BR.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        window.open('https://www.linkedin.com/in/gustavo-dos-santos-silva-596677279/', '_blank');
      }
    } catch (e) {
      window.open('https://www.linkedin.com/in/gustavo-dos-santos-silva-596677279/', '_blank');
    }
  });
}

botaoLinguagem.addEventListener('click', function() {
  const bandeiraLinguagem = document.getElementById('bandeira-linguagem');
  const srcAtual = bandeiraLinguagem.getAttribute('src');

  // Trocar a imagem e idioma
  if (srcAtual.includes('usa')) {
    bandeiraLinguagem.setAttribute('src', './imagens/brasil.png');
    trocarLinguagem('portugues');
  } else {
    bandeiraLinguagem.setAttribute('src', './imagens/usa.png');
    trocarLinguagem('ingles');
  }
});

trocarLinguagem('portugues');