import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, ShieldCheck, Smartphone } from "lucide-react";
import { GolpeCard } from "../components/GolpeCard";
import { golpes } from "../data/golpes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia de Inclusão Digital — Internet segura para Curitiba" },
      {
        name: "description",
        content:
          "Aprenda com calma a usar a internet com segurança. Guia gratuito para jovens, adultos e idosos de Curitiba: golpes digitais, proteção e primeiros passos.",
      },
      { property: "og:title", content: "Guia de Inclusão Digital — Internet segura para Curitiba" },
      {
        property: "og:description",
        content: "Um guia simples para curitibanos de todas as idades navegarem sem medo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const destaques = [
  {
    icone: ShieldCheck,
    titulo: "Aprenda a se proteger",
    texto: "Dicas práticas de senhas, verificação em duas etapas e navegação segura.",
    to: "/proteger",
  },
  {
    icone: Smartphone,
    titulo: "Comece do zero",
    texto: "Um guia para quem está dando os primeiros passos no celular e no computador.",
    to: "/iniciantes",
  },
  {
    icone: HeartHandshake,
    titulo: "Ajuda quando precisar",
    texto: "Passo a passo claro do que fazer se você ou alguém da família cair em um golpe.",
    to: "/cai-em-um-golpe",
  },
] as const;

function HomePage() {
  const featured = golpes.slice(0, 3);

  return (
    <>
      <header className="mx-auto max-w-4xl animate-reveal px-6 pt-24 pb-16 text-center">
        <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase">
          Promovendo a Inclusão Digital e a Segurança na Internet
        </span>
        <h1 className="mb-8 text-5xl leading-[1.1] font-extrabold tracking-tight text-balance md:text-7xl">
          A internet pode ser um{" "}
          <span className="font-display font-semibold text-primary italic">lugar seguro</span>{" "}
          para você.
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty">
          Um guia simples, feito para curitibanos de todas as idades, para navegar no mundo
          digital sem medo e com total proteção.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/iniciantes"
            className="w-full rounded-2xl bg-primary px-8 py-4 text-center text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 sm:w-auto"
          >
            Começar agora
          </Link>
          <Link
            to="/golpes"
            className="w-full rounded-2xl border border-border bg-card px-8 py-4 text-center text-lg font-bold transition-all hover:bg-muted sm:w-auto"
          >
            Ver tipos de golpes
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12" aria-label="O que você encontra aqui">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {destaques.map((d) => (
            <Link
              key={d.to}
              to={d.to}
              className="group rounded-[32px] border border-border bg-card p-8 transition-all hover:border-primary/30"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <d.icone className="size-6" aria-hidden />
              </div>
              <h2 className="mb-2 text-xl font-bold">{d.titulo}</h2>
              <p className="leading-relaxed text-muted-foreground">{d.texto}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="golpes-comuns">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <h2 id="golpes-comuns" className="mb-4 text-3xl font-bold tracking-tight">
              Golpes Digitais Comuns
            </h2>
            <p className="text-muted-foreground">
              Conheça as armadilhas mais frequentes e aprenda a identificá-las antes de qualquer
              risco.
            </p>
          </div>
          <Link
            to="/golpes"
            className="flex items-center gap-2 font-bold text-primary hover:underline"
          >
            Ver todos os 8 golpes principais
            <ArrowRight className="size-5" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((g, i) => (
            <GolpeCard key={g.id} golpe={g} delay={(i + 1) * 100} />
          ))}
        </div>
      </section>

      <section className="bg-foreground py-24 text-background" aria-labelledby="emergencia">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 id="emergencia" className="mb-4 text-4xl font-bold">
              Caí em um golpe. E agora?
            </h2>
            <p className="text-lg text-background/60">
              Mantenha a calma. Siga estes passos imediatamente para minimizar o dano.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex items-start gap-8">
              <span className="font-mono text-4xl font-bold text-primary opacity-50">01</span>
              <div>
                <h3 className="mb-2 text-xl font-bold">Avise seu banco</h3>
                <p className="leading-relaxed text-background/70">
                  Ligue imediatamente para o SAC do seu banco e peça o bloqueio de contas ou
                  cartões envolvidos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <span className="font-mono text-4xl font-bold text-primary opacity-50">02</span>
              <div>
                <h3 className="mb-2 text-xl font-bold">Registre um B.O. digital</h3>
                <p className="leading-relaxed text-background/70">
                  Acesse o site da Polícia Civil do Paraná e faça o Boletim de Ocorrência online.
                  É rápido e essencial.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <span className="font-mono text-4xl font-bold text-primary opacity-50">03</span>
              <div>
                <h3 className="mb-2 text-xl font-bold">Troque suas senhas</h3>
                <p className="leading-relaxed text-background/70">
                  Mude as senhas de e-mails e redes sociais a partir de um aparelho que você sabe
                  que está seguro.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/cai-em-um-golpe"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95"
            >
              Ver o guia completo de emergência
              <ArrowRight className="size-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
