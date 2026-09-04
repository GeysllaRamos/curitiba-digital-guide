import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Golpe } from "../data/golpes";

export function GolpeCard({ golpe, delay = 0 }: { golpe: Golpe; delay?: number }) {
  const Icon = golpe.icone;
  return (
    <article
      className="group animate-reveal rounded-[32px] border border-border bg-card p-8 transition-all hover:border-primary/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`mb-6 flex size-14 items-center justify-center rounded-2xl transition-colors ${golpe.cor}`}
      >
        <Icon className="size-7" aria-hidden />
      </div>
      <h3 className="mb-3 text-2xl font-bold">{golpe.titulo}</h3>
      <p className="mb-6 leading-relaxed text-muted-foreground">{golpe.resumo}</p>
      <div className="space-y-4">
        <div className="rounded-xl border border-warning/20 bg-warning/10 p-4">
          <span className="mb-1 block text-[10px] font-bold tracking-wider text-warning uppercase">
            Sinal de Alerta
          </span>
          <p className="text-sm font-medium">{golpe.sinais[0]}</p>
        </div>
        <Link
          to="/golpes"
          hash={golpe.id}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted py-3 font-bold transition-all group-hover:bg-primary group-hover:text-primary-foreground"
        >
          Saiba como se prevenir
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
