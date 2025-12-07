// Dados de textos em português
const textosPortugues = {
  header: {
    botoes: {
      curriculo: "Baixar currículo"
    }
  },
  banner: {
    titulo: "Talento Autodidata",
    descricao: "Profissional dedicado e entusiasta da tecnologia, buscando constantemente novos desafios e oportunidades para aplicar e aprimorar minhas habilidades. Estou preparado para contribuir em projetos que demandem expertise em desenvolvimento de sistemas e tecnologias web.",
    botoes: {
      projetos: "Projetos",
      tecnologias: "Tecnologias"
    }
  },
  tecnologias: {
    titulo: "Tecnologias em que eu desenvolvo",
  },
  contato: {
    titulo: "Vamos bater um papo?",
    descricao: "Estou sempre disponível no LinkedIn para discutir os projetos em que estou trabalhando e os processos que estou utilizando no dia a dia. Adoraria trocar uma boa conversa por lá e discutir ideias, tendências da área e oportunidades de colaboração. Aguardo sua mensagem!",
    botao: "Acessar meu perfil do Linkedin"
  },
  projetos: {
    titulo: "Projetos",
    subtitulo: "Projetos que eu mais me orgulho na minha trajetória.",
    lista: [
      {
        nome: "Gaia",
        tecnologias: "html, css, javascript, react, typescript ,node.js",
        descricao: "GAIA é um projeto voltado para a reciclagem, reutilização e redistribuição de produtos, com o objetivo de criar uma rede colaborativa de consumo.",
        botoes: {
          repositorio: "Repositório",
          aplicacao: "Aplicação"
        },
        links: {
          repositorio: "https://github.com/Grupo-03-GAIA",
          aplicacao: ""
        }
      },
      {
        nome: "API de Harry Potter",
        tecnologias: "HTML, CSS, JavaScript, API RESTful",
        descricao: "Este projeto é uma aplicação que consome uma API de Harry Potter para exibir informações sobre personagens, suas casas e patronos. O objetivo é permitir que fãs do universo criado por J.K. Rowling explorem os detalhes do mundo bruxo de forma interativa e organizada.",
        botoes: {
          repositorio: "Repositório",
          aplicacao: "Aplicação"
        },
        links: {
          repositorio: "https://github.com/GustaNom/HarryPottAPI",
          aplicacao: ""
        }
      },
      {
        nome: "Site de Notícias",
        tecnologias: "Html, CSS",
        descricao: "Portal de notícias com gerenciamento dinâmico de conteúdo, apresentando atualizações em tempo real, autenticação de usuários e design responsivo para múltiplos dispositivos.",
        botoes: {
          repositorio: "Repositório",
          aplicacao: "Aplicação"
        },
        links: {
          repositorio: "https://github.com/GustaNom/Site_Noticias",
          aplicacao: ""
        }
      }
    ]
  },
  footer: {
    desenvolvedor: "Desenvolvido por Gustavo Dos Santos Silva 🧑🏻‍💻",
    agradecimento: "Obrigado por acessar!"
  }
};

// Dados de textos em inglês
const textosIngles = {
  header: {
    botoes: {
      curriculo: "Download resume"
    }
  },
  banner: {
    titulo: "Self-taught Talent",
    descricao: "Dedicated professional and technology enthusiast, constantly seeking new challenges and opportunities to apply and improve my skills. I am prepared to contribute to projects that demand expertise in systems development and web technologies.",
    botoes: {
      projetos: "Projects",
      tecnologias: "Technologies"
    }
  },
  tecnologias: {
    titulo: "Technologies I develop with",
  },
  contato: {
    titulo: "Let's have a chat?",
    descricao: "I'm always available on LinkedIn to discuss the projects I'm working on and the processes I'm using on a daily basis. I would love to have a good conversation there and discuss ideas, industry trends and collaboration opportunities. I look forward to your message!",
    botao: "Access my LinkedIn profile"
  },
  projetos: {
    titulo: "Projects",
    subtitulo: "Projects I'm most proud of in my career.",
    lista: [
      {
        nome: "Gaia",
        tecnologias: "HTML, CSS, JavaScript, React, TypeScript, Node.js",
        descricao: "GAIA is a project focused on recycling, reuse and redistribution of products, aiming to create a collaborative consumption network.",
        botoes: {
          repositorio: "Repository",
          aplicacao: "Application"
        },
        links: {
          repositorio: "https://github.com/Grupo-03-GAIA",
          aplicacao: ""
        }
      },
      {
        nome: "Harry Potter API",
        tecnologias: "HTML, CSS, JavaScript, RESTful API",
        descricao: "This project is an application that consumes a Harry Potter API to display information about characters, their houses and patronuses, allowing fans to explore the wizarding world interactively and in an organized way.",
        botoes: {
          repositorio: "Repository",
          aplicacao: "Application"
        },
        links: {
          repositorio: "https://github.com/GustaNom/HarryPottAPI",
          aplicacao: ""
        }
      },
      {
        nome: "News Website",
        tecnologias: "HTML, CSS",
        descricao: "News portal with dynamic content management, featuring real-time updates, user authentication and responsive design for multiple devices.",
        botoes: {
          repositorio: "Repository",
          aplicacao: "Application"
        },
        links: {
          repositorio: "https://github.com/GustaNom/Site_Noticias",
          aplicacao: ""
        }
      }
    ]
  },
  footer: {
    desenvolvedor: "Developed by Gustavo Dos Santos Silva 🧑🏻‍💻",
    agradecimento: "Thank you for visiting!"
  }
};

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

if (botaoLinguagem) {
  botaoLinguagem.addEventListener('click', function() {
    const bandeiraLinguagem = document.getElementById('bandeira-linguagem');
    if (!bandeiraLinguagem) {
      console.error('Elemento bandeira-linguagem não encontrado');
      return;
    }
    
    const srcAtual = bandeiraLinguagem.getAttribute('src');
    console.log('Idioma atual:', srcAtual);

    // Trocar a imagem e idioma
    if (srcAtual.includes('usa')) {
      bandeiraLinguagem.setAttribute('src', './imagens/brasil.png');
      trocarLinguagem('portugues');
      console.log('Alterado para português');
    } else {
      bandeiraLinguagem.setAttribute('src', './imagens/usa.png');
      trocarLinguagem('ingles');
      console.log('Alterado para inglês');
    }
  });
} else {
  console.error('Botão de linguagem não encontrado');
}

trocarLinguagem('portugues');