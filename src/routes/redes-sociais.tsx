import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, Eye, UserCheck, Camera, Flag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/redes-sociais")({
  head: () => ({
    meta: [
      { title: "Redes Sociais com Segurança — Guia de Inclusão Digital" },
      {
        name: "description",
        content:
          "Como usar WhatsApp, Facebook e Instagram com privacidade: ajustes recomendados, o que não publicar e como denunciar perfis falsos.",
      },
      { property: "og:title", content: "Redes Sociais com Segurança — Guia de Inclusão Digital" },
      {
        property: "og:description",
        content: "Ajustes de privacidade e boas práticas para usar redes sociais sem riscos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RedesPage,
});

const topicos = [
  {
    icone: Lock,
    cor: "bg-meadow/15 text-meadow",
    titulo: "Deixe seu perfil privado",
    itens: [
      "No Instagram: Configurações → Privacidade da conta → ative \"Conta privada\".",
      "No Facebook: Configurações → Privacidade → escolha \"Amigos\" em quem pode ver suas publicações.",
      "No WhatsApp: Configurações → Privacidade → limite quem vê sua foto, recado e visto por último.",
      "Com o perfil privado, golpistas têm menos material para criar um perfil falso com sua cara.",
    ],
  },
  {
    icone: Eye,
    cor: "bg-river/15 text-river",
    titulo: "Pense antes de publicar",
    itens: [
      "Evite mostrar documentos, cartões, boletos ou comprovantes com números visíveis.",
      "Não publique fotos de viagem enquanto sua casa está vazia. Poste depois de voltar.",
      "Evite divulgar endereço, telefone e a rotina das crianças.",
      "Lembre-se: o que vai para a internet dificilmente sai por completo.",
    ],
  },
  {
    icone: UserCheck,
    cor: "bg-honey/15 text-honey",
    titulo: "Aceite apenas quem você conhece",
    itens: [
      "Perfis novos, com poucas fotos e poucos amigos em comum, merecem desconfiança.",
      "Se um amigo já seu mandar convite de novo, provavelmente é um perfil clonado.",
      "Confirme por telefone antes de aceitar convites suspeitos.",
      "Não é falta de educação recusar: é cuidado.",
    ],
  },
  {
    icone: Camera,
    cor: "bg-plum/15 text-plum",
    titulo: "Cuidado com conversas privadas",
    itens: [
      "Nunca envie fotos íntimas, nem para pessoas que você acha que conhece bem.",
      "Desconfie de quem cria intimidade muito rápido e logo fala em dinheiro.",
      "Nunca repasse códigos de verificação recebidos por SMS.",
      "Se sentir pressão ou chantagem, guarde as provas e procure ajuda.",
    ],
  },
  {
    icone: Flag,
    cor: "bg-rose/15 text-rose",
    titulo: "Saiba denunciar e bloquear",
    itens: [
      "Toda rede social tem a opção \"Denunciar\" no menu de três pontos do perfil ou da publicação.",
      "Denuncie perfis falsos que usam suas fotos ou as de familiares.",
      "Bloqueie o contato para impedir novas mensagens.",
      "Avise seus amigos quando identificar uma conta clonada.",
    ],
  },
];

function RedesPage() {
  return (
    <>
      <header className="mx-auto max-w-4xl animate-reveal px-6 pt-20 pb-12 text-center">
        <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          Conectado e protegido
        </span>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
          Redes{" "}
          <span className="font-display font-semibold text-primary italic">sociais</span> com
          segurança
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          As redes aproximam a família e os amigos — e também atraem golpistas. Ajuste sua
          privacidade e aproveite com tranquilidade.
        </p>
      </header>

      <div className="mx-auto max-w-4xl space-y-6 px-6 pb-24">
        {topicos.map((t, i) => (
          <article
            key={t.titulo}
            className="animate-reveal rounded-[32px] border border-border bg-card p-8 md:p-10"
            style={{ animationDelay: `${Math.min(i, 4) * 80}ms` }}
          >
            <div className="mb-5 flex items-center gap-4">
              <div className={`flex size-12 items-center justify-center rounded-2xl ${t.cor}`}>
                <t.icone className="size-6" aria-hidden />
              </div>
              <h2 className="text-2xl font-bold">{t.titulo}</h2>
            </div>
            <ul className="space-y-3">
              {t.itens.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <div className="flex flex-col items-center justify-between gap-6 rounded-[32px] bg-primary/10 p-10 md:flex-row">
          <div>
            <h2 className="mb-2 text-2xl font-bold">Recebeu uma mensagem suspeita?</h2>
            <p className="max-w-lg text-muted-foreground">
              Veja como funcionam os perfis falsos e os golpes mais comuns nas redes sociais.
            </p>
          </div>
          <Link
            to="/golpes"
            hash="perfis-falsos"
            className="flex shrink-0 items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95"
          >
            Ver perfis falsos
            <ArrowRight className="size-5" aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
}
