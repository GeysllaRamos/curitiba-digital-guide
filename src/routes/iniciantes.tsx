import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Search, Mail, Download, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/iniciantes")({
  head: () => ({
    meta: [
      { title: "Guia para Iniciantes — Guia de Inclusão Digital" },
      {
        name: "description",
        content:
          "Primeiros passos na internet: o que é navegador, como pesquisar, usar e-mail e baixar aplicativos com segurança. Linguagem simples para começar do zero.",
      },
      { property: "og:title", content: "Guia para Iniciantes — Guia de Inclusão Digital" },
      {
        property: "og:description",
        content: "Aprenda os primeiros passos na internet, com calma e sem complicação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IniciantesPage,
});

const passos = [
  {
    numero: "01",
    icone: Globe,
    titulo: "O que é a internet e o navegador",
    texto:
      "A internet é como uma enorme cidade cheia de ruas e lojas. O navegador (Chrome, Safari, Edge) é o carro que leva você até esses lugares. O endereço do site funciona como o endereço de uma casa: digite-o no campo no topo da tela.",
    dica: "Guarde como favoritos os sites que você mais usa, como o do seu banco, para não precisar digitá-los toda vez.",
  },
  {
    numero: "02",
    icone: Search,
    titulo: "Como pesquisar no Google",
    texto:
      "Escreva a sua dúvida como se estivesse conversando: \"receita de bolo de fubá\" ou \"horário do ônibus 203 Curitiba\". Não precisa de palavras difíceis. Os primeiros resultados marcados como \"Patrocinado\" são anúncios — role um pouco para ver os resultados comuns.",
    dica: "Se a resposta parecer estranha, pesquise a mesma coisa de outro jeito e compare os resultados.",
  },
  {
    numero: "03",
    icone: Mail,
    titulo: "Usando o e-mail",
    texto:
      "O e-mail é a sua caixa de correio digital. Você precisa dele para criar contas em quase todos os serviços. Crie um e-mail gratuito no Gmail ou Outlook, anote a senha em um caderno seguro em casa e abra sua caixa de entrada com frequência.",
    dica: "Desconfie de e-mails que pedem senhas ou dados bancários. Empresas sérias nunca fazem isso.",
  },
  {
    numero: "04",
    icone: MessageCircle,
    titulo: "Mensagens e chamadas de vídeo",
    texto:
      "Aplicativos como o WhatsApp permitem conversar por texto, voz e vídeo de graça, usando a internet. A chamada de vídeo é uma ótima forma de matar a saudade — e também de confirmar se é mesmo aquela pessoa falando com você.",
    dica: "Se um familiar pedir dinheiro por mensagem, faça uma chamada de vídeo antes de qualquer coisa.",
  },
  {
    numero: "05",
    icone: Download,
    titulo: "Baixando aplicativos com segurança",
    texto:
      "Baixe aplicativos apenas nas lojas oficiais: Play Store (Android) ou App Store (iPhone). Antes de instalar, veja o número de downloads e as avaliações. Desconfie de aplicativos desconhecidos com poucas avaliações.",
    dica: "Nunca instale aplicativos enviados por link no WhatsApp ou por SMS, mesmo que pareçam do banco.",
  },
];

function IniciantesPage() {
  return (
    <>
      <header className="mx-auto max-w-4xl animate-reveal px-6 pt-20 pb-12 text-center">
        <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          Todo mundo já foi iniciante
        </span>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
          Guia para{" "}
          <span className="font-display font-semibold text-primary italic">iniciantes</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Cinco passos para começar a usar a internet com confiança. Sem pressa, sem palavras
          difíceis e sem julgamentos.
        </p>
      </header>

      <div className="mx-auto max-w-3xl space-y-8 px-6 pb-24">
        {passos.map((p, i) => (
          <article
            key={p.numero}
            className="animate-reveal rounded-[32px] border border-border bg-card p-8 md:p-10"
            style={{ animationDelay: `${Math.min(i, 4) * 80}ms` }}
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="font-mono text-3xl font-bold text-primary opacity-50">
                {p.numero}
              </span>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <p.icone className="size-6" aria-hidden />
              </div>
            </div>
            <h2 className="mb-3 text-2xl font-bold">{p.titulo}</h2>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">{p.texto}</p>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <span className="mb-1 block text-[10px] font-bold tracking-wider text-primary uppercase">
                Dica prática
              </span>
              <p className="text-sm font-medium">{p.dica}</p>
            </div>
          </article>
        ))}

        <div className="flex flex-col items-center justify-between gap-6 rounded-[32px] bg-foreground p-10 text-background md:flex-row">
          <div>
            <h2 className="mb-2 text-2xl font-bold">Próximo passo: segurança</h2>
            <p className="max-w-lg text-background/70">
              Agora que você conhece o básico, aprenda os hábitos que mantêm você protegido todos
              os dias.
            </p>
          </div>
          <Link
            to="/proteger"
            className="flex shrink-0 items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95"
          >
            Como se proteger
            <ArrowRight className="size-5" aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
}
