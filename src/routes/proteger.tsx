import { createFileRoute, Link } from "@tanstack/react-router";
import {
  KeyRound,
  ShieldCheck,
  RefreshCw,
  Link2,
  Wifi,
  HardDrive,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/proteger")({
  head: () => ({
    meta: [
      { title: "Como se Proteger — Guia de Inclusão Digital" },
      {
        name: "description",
        content:
          "Senhas fortes, verificação em duas etapas, atualizações e mais hábitos simples para navegar com segurança na internet.",
      },
      { property: "og:title", content: "Como se Proteger — Guia de Inclusão Digital" },
      {
        property: "og:description",
        content: "Hábitos simples que protegem seu dinheiro e seus dados na internet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProtegerPage,
});

const habitos = [
  {
    icone: KeyRound,
    titulo: "Crie senhas fortes",
    cor: "bg-meadow/15 text-meadow",
    pontos: [
      "Use senhas diferentes para cada conta importante, principalmente e-mail e banco.",
      "Combine palavras sem relação entre si, como \"caderno-rio-janela-42\", em vez de datas de aniversário.",
      "Nunca anote a senha em papel colado no computador ou em mensagem para você mesmo.",
      "Se for difícil lembrar, considere um gerenciador de senhas confiável.",
    ],
  },
  {
    icone: ShieldCheck,
    titulo: "Ative a verificação em duas etapas",
    cor: "bg-river/15 text-river",
    pontos: [
      "É uma camada extra: além da senha, o aplicativo pede um código enviado para o seu celular.",
      "Ative no WhatsApp (Ajustes → Conta → Verificação em duas etapas), no e-mail e nas redes sociais.",
      "Mesmo que alguém descubra sua senha, não conseguirá entrar sem o código.",
      "Nunca compartilhe esses códigos com ninguém, nem com quem diz ser do suporte.",
    ],
  },
  {
    icone: RefreshCw,
    titulo: "Mantenha tudo atualizado",
    cor: "bg-honey/15 text-honey",
    pontos: [
      "As atualizações do celular e dos aplicativos corrigem falhas de segurança.",
      "Ative as atualizações automáticas na loja de aplicativos.",
      "Desconfie de aparelhos muito antigos que não recebem mais atualizações.",
      "Atualize também o aplicativo do seu banco.",
    ],
  },
  {
    icone: Link2,
    titulo: "Desconfie de links",
    cor: "bg-plum/15 text-plum",
    pontos: [
      "Não clique em links enviados por desconhecidos ou em correntes de WhatsApp.",
      "Passe o dedo pressionado sobre o link para ver o endereço real antes de abrir.",
      "Prefira digitar o endereço do site ou abrir o aplicativo oficial.",
      "Promoção boa demais, prêmio inesperado e urgência são sinais clássicos de golpe.",
    ],
  },
  {
    icone: Wifi,
    titulo: "Cuidado com Wi-Fi público",
    cor: "bg-clay/15 text-clay",
    pontos: [
      "Evite acessar o banco ou fazer compras em redes abertas de praças e ônibus.",
      "Prefira usar os dados móveis do seu celular para assuntos de dinheiro.",
      "Desligue a opção de conectar automaticamente a redes abertas.",
      "Em redes públicas, evite digitar senhas importantes.",
    ],
  },
  {
    icone: HardDrive,
    titulo: "Guarde cópias das suas fotos e documentos",
    cor: "bg-rose/15 text-rose",
    pontos: [
      "Faça cópias (backup) das fotos e documentos importantes em um serviço de nuvem ou pendrive.",
      "Assim, se o aparelho quebrar, for roubado ou bloqueado, você não perde suas memórias.",
      "O Google Fotos e o Google Drive oferecem espaço gratuito para começar.",
      "Peça ajuda a alguém de confiança para configurar o backup automático uma única vez.",
    ],
  },
];

function ProtegerPage() {
  return (
    <>
      <header className="mx-auto max-w-4xl animate-reveal px-6 pt-20 pb-12 text-center">
        <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          Prevenção é o melhor remédio
        </span>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
          Como se{" "}
          <span className="font-display font-semibold text-primary italic">proteger</span> na
          internet
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Seis hábitos simples que protegem seu dinheiro, suas fotos e suas conversas. Você não
          precisa ser expert em tecnologia para colocá-los em prática.
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {habitos.map((h, i) => (
            <article
              key={h.titulo}
              className="animate-reveal rounded-[32px] border border-border bg-card p-8"
              style={{ animationDelay: `${Math.min(i, 4) * 80}ms` }}
            >
              <div
                className={`mb-5 flex size-12 items-center justify-center rounded-2xl ${h.cor}`}
              >
                <h.icone className="size-6" aria-hidden />
              </div>
              <h2 className="mb-4 text-2xl font-bold">{h.titulo}</h2>
              <ul className="space-y-3">
                {h.pontos.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[32px] bg-primary/10 p-10 md:flex-row">
          <div>
            <h2 className="mb-2 text-2xl font-bold">Está começando agora?</h2>
            <p className="max-w-lg text-muted-foreground">
              Veja nosso guia para iniciantes e aprenda o passo a passo para usar o celular e a
              internet sem medo.
            </p>
          </div>
          <Link
            to="/iniciantes"
            className="flex shrink-0 items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95"
          >
            Guia para iniciantes
            <ArrowRight className="size-5" aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
}
