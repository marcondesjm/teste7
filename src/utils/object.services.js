import capa_manutencao from '../images/img-services/manutencao.webp';
import capa_remodelacao from '../images/img-services/remodelacao.webp';
import capa_eletrica from '../images/img-services/eletrica.webp';
import capa_hidraulica from '../images/img-services/hidraulica.webp';
import capa_pintura from '../images/img-services/pintura.webp';
import capa_drywall from '../images/img-services/drywall.webp';
import capa_arcond from '../images/img-services/arcond.webp';

import icon_manu from '../images/img-icon-service/manutencao.webp';
import icon_remo from '../images/img-icon-service/remodelacao.webp';
import icon_ele from '../images/img-icon-service/eletrica.webp';
import icon_hidra from '../images/img-icon-service/hidraulica.webp';
import icon_pint from '../images/img-icon-service/pintura.webp';
import icon_dry from '../images/img-icon-service/drywall.webp';
import icon_arcond from '../images/img-icon-service/arcond.webp';

const arcond = require.context('../images/img-services/arcond', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const drywall = require.context('../images/img-services/drywall', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const eletrica = require.context('../images/img-services/eletrica', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const hidraulica = require.context('../images/img-services/hidraulica', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const manutencao = require.context('../images/img-services/manutencao', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const pintura = require.context('../images/img-services/pintura', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const remodelacao = require.context('../images/img-services/remodelacao', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);

const services = [
  {
    id: 0,
    pathName: 'tabalhos-em-altura',
    icon: icon_manu,
    cover: capa_manutencao,
    title: 'Assistência Celulares',
    resumo: 'Problemas Comuns em Celulares e Quando é Hora de Procurar Assistência Técnica',
    text: 'Quedas frequentes podem resultar em rachaduras na tela, A vida útil da bateria diminui ao longo do tempo, mas se a descarga estiver muito rápida, pode indicar um problema. Se o celular está ficando lento e travando com frequência, pode ser devido a problemas de software ou falta de espaço.Antes de iniciar o serviço, é realizada uma análise. ',
    servicos: [],
    images: manutencao,
  },
  {
    id: 1,
    pathName: 'remodelacao',
    icon: icon_remo,
    cover: capa_remodelacao,
    title: 'Conserto de Notebook ',
    resumo: 'Você está pesquisando por uma assistência técnica conserto de Notebook em Palhoça, São José, Biguaçu e Florianópolis?',
    text: 'A HomeTech oferece serviços na sua casa ou escritório. Ao longo do tempo, a bateria do notebook pode apresentar desgaste e redução na capacidade de armazenamento de carga. Assim como nos smartphones, a tela do notebook  pode sofrer danos em caso de quedas ou impactos. O teclado é uma das partes mais utilizadas do notebook Acer, Mac, Dell, Positivo e Asus e, portanto, está sujeito ao desgaste ao longo do tempo. Em alguns casos, o desempenho do notebook Acer, Mac, Dell, Positivo e Asus pode ser melhorado por meio de atualizações de hardware. Isso inclui a adição de mais memória RAM, a troca do disco rígido por um SSD ou a substituição de componentes internos, como o processador ou a placa de vídeo. Além da limpeza interna, a assistência técnica também pode realizar a limpeza externa do notebook Acer.Nossa equipe altamente qualificada. Além disso, garantimos a máxima precisão, eficiência e atenção aos detalhes em cada trabalho que realizamos. Não hesite em entrar em contato com a HomeTech.',
    servicos: [],
    images: remodelacao,
  },
  {
    id: 2,
    pathName: 'eletrica',
    icon: icon_ele,
    cover: capa_eletrica,
    title: 'Conserto de Video Game',
    resumo: 'Assistência técnica conserto de videogame XBox e PlayStation',
    text: 'Se você precisa de uma "assistência técnica Xbox One perto de mim" em São José, Palhoça, Biguaçu e Florianópolis a Hometech pode ajudá-lo a consertar o seu videogame de forma profissional e eficiente. Se o seu Xbox simplesmente não liga, isso pode ser um indício de problemas com a fonte de energia ou até mesmo com o botão de energia do console.',
    servicos: [
     
    ],
    images: eletrica,
  },
  {
    id: 3,
    pathName: 'hidraulica',
    icon: icon_hidra,
    cover: capa_hidraulica,
    title: 'Conserto de Televisores',
    resumo: 'Troca de LED, reparo em botões, troca e reparo em placas e reparos em geral.',
    text: 'Esse problema normalmente está relacionado a algum defeito nos componentes responsáveis pela exibição da imagem na TV. A assistência técnica em São José, Palhoça, Biguaçu e Florianópolis pode realizar testes e diagnósticos para identificar qual componente está com defeito e realizar a substituição, se necessário. ',
    servicos: [
      
    ],
    images: hidraulica,
  },
  {
    id: 4,
    pathName: 'pintura',
    icon: icon_pint,
    cover: capa_pintura,
    title: 'Assistência Drone',
    resumo: ' PEÇAS ORIGINAIS Todas as peças novas e originais para manter a qualidade em seu drone.',
    text: 'Oferecemos soluções de alta qualidade. Buscamos e levamos seu equipamento no conforto da sua residência ou trabalho.Efetuamos a coleta GRATUITAMENTE até 15 km do nosso laboratório em  São José - SC. Se você estiver fora do nosso alcance o valor será cobrado no término do serviço. ',
    servicos: [
    ],
    images: pintura,
  },
  {
    id: 5,
    pathName: 'drywall',
    icon: icon_dry,
    cover: capa_drywall,
    title: 'Manutenção de Impressoras',
    resumo: 'Sua impressora sofre um desgaste natural pelo uso. A manutenção periódica de seu aparelho é uma medida econômica que pode salvar suas peças e poupar custos!',
    text: 'Ao deixar sua impressora para manutenção saiba que ela será entregue em ótimas condições de funcionamento com a mais perfeita qualidade de impressão. Todos os equipamentos são revisados e higienizados, pois para o bom funcionamento dos cartucho e toners isso é primordial. Dessa forma, tenham o máximo de desempenho.',
    servicos: [],
    images: drywall,
  },
  {
    id: 6,
    pathName: 'arcondicionado',
    icon: icon_arcond,
    cover: capa_arcond,
    title: 'Computadores Gamer',
    resumo: 'Manutenção de Computadores e Computadores Gamer',
    text: 'Garantir o bom funcionamento e prolongar a vida útil do equipamento.',
    servicos: [
      "TODOS serviços de Hardware e Software em Geral;",
      "Limpeza dos componentes internos",
      "Verificação do funcionamento geral do aparelho",
      "Troca de peças e upgrade",
      
    ],
    images: arcond,
  },
];

export default services;
