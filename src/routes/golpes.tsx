import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";
import { golpes } from "../data/golpes";

export const Route = createFileRoute("/golpes")({
  head: () => ({
    meta: [
      { title: "Golpes Digitais — Guia de Inclusão Digital" },
      {
        name: "description",
        content:
          "Conheça os 8 golpes digitais mais comuns — WhatsApp, Pix, compras online, falso emprego, phishing e mais — com sinais de alerta e formas de prevenção.",
      },
      { property: "og:title", content: "Golpes Digitais — Guia de Inclusão Digital" },
      {
        property: "og:description",
        content: "Aprenda a identificar e evitar os golpes digitais mais comuns.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GolpesPage,
});

function GolpesPage() {
  return (
    <>
      <header className="mx-auto max-w-4xl animate-reveal px-6 pt-20 pb-12 text-center">
        <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          Conhecimento é proteção
        </span>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
          Golpes{" "}
          <span className="font-display font-semibold text-primary italic">digitais</span> mais
          comuns
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Cada card abaixo explica como o golpe funciona, quais são os sinais de alerta, como se
          prevenir e o que fazer se você for vítima. Leia com calma e compartilhe com quem você
          ama.
        </p>
      </header>

      <div className="mx-auto max-w-4xl space-y-8 px-6 pb-24">
        {golpes.map((g, i) => {
          const Icon = g.icone;
          return (
            <article
              key={g.id}
              id={g.id}
              className="animate-reveal scroll-mt-28 rounded-[32px] border border-border bg-card p-8 md:p-10"
              style={{ animationDelay: `${Math.min(i, 3) * 80}ms` }}
            >
              <div className="mb-6 flex items-center gap-4">
                <div
                  className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${g.cor}`}
                >
                  <Icon className="size-7" aria-hidden />
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">{g.titulo}</h2>
              </div>

              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{g.resumo}</p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-warning/20 bg-warning/10 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-wider text-warning uppercase">
                    <AlertTriangle className="size-4" aria-hidden />
                    Sinais de alerta
                  </h3>
                  <ul className="space-y-3">
                    {g.sinais.map((s) => (
                      <li key={s} className="flex gap-3 text-sm leading-relaxed font-medium">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-warning" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-wider text-primary uppercase">
                    <CheckCircle2 className="size-4" aria-hidden />
                    Como se prevenir
                  </h3>
                  <ul className="space-y-3">
                    {g.prevencao.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed font-medium">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <details className="group mt-6 rounded-2xl border border-border bg-muted/50">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-bold select-none">
                  <span className="flex items-center gap-2">
                    <ShieldAlert className="size-5 text-destructive" aria-hidden />
                    Fui vítima deste golpe. O que fazer?
                  </span>
                  <span className="text-xl transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <ol className="space-y-3 px-5 pb-5">
                  {g.seVitima.map((v, idx) => (
                    <li key={v} className="flex gap-3 text-sm leading-relaxed">
                      <span className="font-mono font-bold text-primary">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {v}
                    </li>
                  ))}
                </ol>
              </details>
            </article>
          );
        })}

        <div className="rounded-[32px] bg-foreground p-10 text-center text-background">
          <h2 className="mb-3 text-2xl font-bold">Caiu em algum desses golpes?</h2>
          <p className="mx-auto mb-8 max-w-xl text-background/70">
            Não se culpe: os golpistas são profissionais do engano. Veja o passo a passo completo
            do que fazer agora.
          </p>
          <Link
            to="/cai-em-um-golpe"
            className="inline-flex rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95"
          >
            Ir para o guia de emergência
          </Link>
        </div>
      </div>
    </>
  );
}
