import type { LucideIcon } from "lucide-react";
import {
  MessageCircle,
  Zap,
  ShoppingCart,
  Briefcase,
  Fish,
  Wrench,
  Barcode,
  UserX,
} from "lucide-react";

export interface Golpe {
  id: string;
  titulo: string;
  resumo: string;
  icone: LucideIcon;
  cor: string;
  sinais: string[];
  prevencao: string[];
  seVitima: string[];
}

export const golpes: Golpe[] = [
  {
    id: "whatsapp",
    titulo: "Golpe do WhatsApp Clonado",
    resumo:
      "O golpista finge ser um familiar ou amigo, usando a foto da pessoa, e pede dinheiro com urgência dizendo que trocou de número.",
    icone: MessageCircle,
    cor: "bg-meadow/15 text-meadow",
    sinais: [
      "Mensagem de um número desconhecido dizendo \"troquei de número, salva aí\".",
      "Pedido de dinheiro ou Pix com muita pressa, sem explicar direito o motivo.",
      "A pessoa evita atender ligações ou fazer chamada de vídeo.",
      "Erros de escrita ou um jeito de falar diferente do habitual.",
    ],
    prevencao: [
      "Ligue para o número antigo da pessoa antes de enviar qualquer dinheiro.",
      "Faça uma pergunta que só a pessoa de verdade saberia responder.",
      "Ative a verificação em duas etapas no seu WhatsApp (Ajustes → Conta).",
      "Nunca compartilhe o código de 6 dígitos que chega por SMS.",
    ],
    seVitima: [
      "Avise imediatamente seus contatos que seu número foi clonado.",
      "Se enviou dinheiro, chame seu banco e peça o bloqueio da transação.",
      "Registre um Boletim de Ocorrência no site da Polícia Civil do Paraná.",
      "Denuncie e bloqueie o número falso dentro do próprio WhatsApp.",
    ],
  },
  {
    id: "pix",
    titulo: "Golpe do Pix",
    resumo:
      "Promessas de dinheiro fácil, comprovantes falsos ou pedidos para \"devolver\" um Pix que você nunca recebeu de verdade.",
    icone: Zap,
    cor: "bg-river/15 text-river",
    sinais: [
      "Promessa de multiplicar seu dinheiro, como o famoso \"bug do Pix\".",
      "Prêmio ou sorteio que exige um pagamento para liberar o valor.",
      "Comprovante enviado por foto, mas o dinheiro não aparece no extrato.",
      "Alguém diz que fez um Pix por engano e pressiona você a devolver.",
    ],
    prevencao: [
      "Desconfie de qualquer promessa de lucro rápido e garantido.",
      "Confirme recebimentos sempre no aplicativo oficial do seu banco, nunca por prints.",
      "Se receber um Pix indevido, devolva pela função \"devolver\" do próprio banco.",
      "Não clique em links de promoções enviados por desconhecidos.",
    ],
    seVitima: [
      "Acione o Mecanismo Especial de Devolução (MED) pelo seu banco em até 80 dias.",
      "Guarde prints, comprovantes e a chave Pix do golpista.",
      "Registre o Boletim de Ocorrência online na Polícia Civil do PR.",
    ],
  },
  {
    id: "compras-online",
    titulo: "Compras Online Falsas",
    resumo:
      "Sites ou perfis que imitam lojas conhecidas, com preços baixos demais, que recebem seu pagamento e nunca entregam o produto.",
    icone: ShoppingCart,
    cor: "bg-honey/15 text-honey",
    sinais: [
      "Preços muito abaixo do normal, como 50% ou 70% de desconto em tudo.",
      "Site com erros de português e endereço estranho (letras trocadas).",
      "Loja que só aceita Pix ou boleto, sem cartão de crédito.",
      "Perfil de loja no Instagram criado há poucos dias e sem avaliações.",
    ],
    prevencao: [
      "Pesquise o nome da loja junto com a palavra \"reclamação\" antes de comprar.",
      "Prefira pagar com cartão de crédito, que permite contestar a compra.",
      "Digite o endereço do site você mesmo em vez de clicar em links de anúncios.",
      "Verifique o CNPJ da loja no rodapé do site.",
    ],
    seVitima: [
      "Se pagou no cartão, conteste a compra (chargeback) no seu banco.",
      "Se pagou via Pix, acione o MED pelo aplicativo do banco.",
      "Reúna prints do anúncio, do site e dos comprovantes.",
      "Registre o B.O. e denuncie o site no Procon-PR.",
    ],
  },
  {
    id: "falso-emprego",
    titulo: "Falso Emprego",
    resumo:
      "Vagas de trabalho inventadas que pedem pagamento de \"taxa de inscrição\", \"curso obrigatório\" ou seus documentos pessoais.",
    icone: Briefcase,
    cor: "bg-sky/15 text-sky",
    sinais: [
      "Salário alto demais para pouco trabalho, sem exigir experiência.",
      "Pedido de pagamento de taxa para participar do processo seletivo.",
      "Entrevista feita apenas por mensagem, sem chamada de vídeo ou reunião.",
      "Empresa que você não encontra em nenhum lugar na internet.",
    ],
    prevencao: [
      "Nenhuma empresa séria cobra dinheiro para contratar você.",
      "Pesquise o CNPJ e o nome da empresa antes de enviar documentos.",
      "Procure vagas em sites oficiais e conhecidos.",
      "Desconfie de propostas que chegam do nada por WhatsApp.",
    ],
    seVitima: [
      "Se enviou documentos, registre um B.O. para se proteger de uso indevido.",
      "Acompanhe seu CPF em serviços como o Registrato do Banco Central.",
      "Se pagou taxa via Pix, acione o MED pelo banco.",
      "Denuncie o anúncio na plataforma onde ele foi publicado.",
    ],
  },
  {
    id: "phishing",
    titulo: "Phishing (Mensagens Falsas)",
    resumo:
      "E-mails, SMS ou mensagens que fingem ser de bancos, Correios ou órgãos do governo para roubar suas senhas e dados.",
    icone: Fish,
    cor: "bg-grape/15 text-grape",
    sinais: [
      "Mensagem urgente dizendo que sua conta será bloqueada ou que há uma dívida.",
      "Link com endereço estranho, cheio de números ou letras trocadas.",
      "Pedido para \"confirmar\" senha, CPF ou dados do cartão.",
      "Remetente com e-mail que não é o oficial da empresa.",
    ],
    prevencao: [
      "Bancos e o governo nunca pedem senha por mensagem.",
      "Em vez de clicar no link, abra o aplicativo oficial ou digite o site você mesmo.",
      "Confira o remetente completo do e-mail, não apenas o nome exibido.",
      "Ative a verificação em duas etapas nas suas contas.",
    ],
    seVitima: [
      "Troque imediatamente a senha da conta que foi exposta.",
      "Se informou dados bancários, avise o banco e bloqueie o cartão.",
      "Fique atento ao extrato nos dias seguintes.",
      "Registre o B.O. online na Polícia Civil do Paraná.",
    ],
  },
  {
    id: "falso-suporte",
    titulo: "Falso Suporte Técnico",
    resumo:
      "Alguém liga ou uma janela aparece na tela dizendo que seu aparelho tem vírus, e pede acesso remoto ou pagamento para \"consertar\".",
    icone: Wrench,
    cor: "bg-clay/15 text-clay",
    sinais: [
      "Ligação dizendo ser da Microsoft, Google ou do seu provedor de internet.",
      "Janela que pisca na tela avisando sobre vírus e pedindo para ligar em um número.",
      "Pedido para instalar programas de acesso remoto, como AnyDesk.",
      "Cobrança para resolver um problema que você nunca percebeu.",
    ],
    prevencao: [
      "Empresas de tecnologia não ligam para avisar sobre vírus. Desligue.",
      "Nunca instale programas que um desconhecido pedir por telefone.",
      "Não passe códigos que aparecem na sua tela para ninguém.",
      "Se uma janela estranha aparecer, feche o navegador.",
    ],
    seVitima: [
      "Desconecte o aparelho da internet imediatamente.",
      "Leve o aparelho a um técnico de confiança para remover o programa instalado.",
      "Troque todas as senhas usando outro aparelho seguro.",
      "Avise o banco e registre o Boletim de Ocorrência.",
    ],
  },
  {
    id: "falso-boleto",
    titulo: "Falso Boleto",
    resumo:
      "Boletos adulterados que chegam por e-mail, WhatsApp ou até pelos correios, com o código de barras alterado para desviar seu pagamento.",
    icone: Barcode,
    cor: "bg-plum/15 text-plum",
    sinais: [
      "Boleto de uma conta que você não esperava ou de valor diferente.",
      "Nome do beneficiário diferente da empresa que deveria receber.",
      "Pressão para pagar rápido e evitar multa ou corte de serviço.",
      "Código de barras com aparência borrada ou alterada.",
    ],
    prevencao: [
      "Antes de pagar, confira o nome de quem recebe na tela de confirmação do banco.",
      "Prefira gerar boletos direto no site ou aplicativo oficial da empresa.",
      "Desconfie de boletos recebidos por WhatsApp ou e-mail sem aviso prévio.",
      "Use o DDA (Débito Direto Autorizado) do seu banco para receber cobranças com segurança.",
    ],
    seVitima: [
      "Leve o comprovante ao banco e conteste o pagamento imediatamente.",
      "Guarde o boleto e a forma como ele chegou até você.",
      "Registre o B.O. online na Polícia Civil do Paraná.",
      "Avise a empresa verdadeira sobre o boleto falso.",
    ],
  },
  {
    id: "perfis-falsos",
    titulo: "Perfis Falsos",
    resumo:
      "Contas falsas em redes sociais que fingem ser pessoas, lojas ou até famosos para enganar, pedir dinheiro ou roubar informações.",
    icone: UserX,
    cor: "bg-rose/15 text-rose",
    sinais: [
      "Perfil recém-criado, com poucas fotos e poucos amigos em comum.",
      "Fotos perfeitas demais, que parecem de revista ou de banco de imagens.",
      "Pedidos de dinheiro, códigos ou fotos íntimas depois de pouco tempo de conversa.",
      "Perfil copiando o nome e as fotos de alguém que você conhece.",
    ],
    prevencao: [
      "Pesquise a foto do perfil no Google Imagens para ver se aparece em outros lugares.",
      "Desconfie de estranhos que criam intimidade muito rápido.",
      "Nunca envie dinheiro ou códigos para pessoas que você só conhece online.",
      "Mantenha seu perfil privado e aceite apenas conhecidos.",
    ],
    seVitima: [
      "Denuncie o perfil falso dentro da própria rede social.",
      "Bloqueie a conta e não responda a novas mensagens.",
      "Se houve pagamento, acione o banco e registre o B.O.",
      "Avise a pessoa que teve as fotos copiadas para que ela também denuncie.",
    ],
  },
];
