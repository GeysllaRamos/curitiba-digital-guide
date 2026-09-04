import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, FileText, KeyRound, Users, FolderOpen, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/cai-em-um-golpe")({
  head: () => ({
    meta: [
      { title: "Caí em um Golpe — O que fazer agora | Guia de Inclusão Digital" },
      {
        name: "description",
        content:
          "Passo a passo de emergência para quem caiu em um golpe digital: avisar o banco, registrar o B.O. na Polícia Civil do PR, trocar senhas e onde buscar ajuda em Curitiba.",
      },
      { property: "og:title", content: "Caí em um Golpe — O que fazer agora" },
      {
        property: "og:description",
        content: "Mantenha a calma e siga estes passos para reduzir os danos de um golpe digital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaiGolpePage,
});

const passos = [
  {
    numero: "01",
    icone: Phone,
    titulo: "Avise seu banco imediatamente",
    texto:
      "Ligue para o SAC oficial do banco (o número está no verso do cartão ou dentro do aplicativo). Peça o bloqueio de cartões e contas envolvidos e informe a transação suspeita. Se foi um Pix, peça a abertura do Mecanismo Especial de Devolução (MED) — o prazo é de até 80 dias.",
  },
  {
    numero: "02",
    icone: FolderOpen,
    titulo: "Guarde todas as provas",
    texto:
      "Tire prints das conversas, salve comprovantes, anote números de telefone, chaves Pix, links e nomes usados pelo golpista. Não apague nada, mesmo que dê vergonha. Essas informações são essenciais para a investigação.",
  },
  {
    numero: "03",
    icone: FileText,
    titulo: "Registre o Boletim de Ocorrência",
    texto:
      "No Paraná, o B.O. pode ser feito pela internet no site da Polícia Civil (Delegacia Eletrônica) ou presencialmente em uma delegacia de Curitiba. O registro é gratuito e necessário para contestar valores junto ao banco.",
  },
  {
    numero: "04",
    icone: KeyRound,
    titulo: "Troque todas as senhas",
    texto:
      "Use um aparelho que você tem certeza que está seguro. Comece pelo e-mail principal, depois banco, WhatsApp e redes sociais. Ative a verificação em duas etapas em todas as contas nesse momento.",
  },
  {
    numero: "05",
    icone: Users,
    titulo: "Avise familiares e amigos",
    texto:
      "Se sua conta foi clonada, os golpistas vão tentar enganar seus contatos em seguida. Um aviso rápido em grupos de família e trabalho evita que outras pessoas percam dinheiro.",
  },
  {
    numero: "06",
    icone: HeartHandshake,
    titulo: "Busque apoio e não se culpe",
    texto:
      "Cair em um golpe não significa que você é ingênuo: os criminosos usam técnicas de pressão psicológica estudadas. Converse com alguém de confiança, procure o Procon-PR para questões de consumo e, se precisar, oriente-se com um advogado.",
  },
];

const contatos = [
  { nome: "Delegacia Eletrônica – Polícia Civil do PR", detalhe: "Registro de B.O. pela internet" },
  { nome: "Procon-PR / Procon Curitiba", detalhe: "Problemas de consumo e compras online" },
  { nome: "SAC do seu banco", detalhe: "Número no verso do cartão ou no aplicativo oficial" },
  { nome: "Polícia Militar – 190", detalhe: "Em caso de ameaça ou risco imediato" },
];

function CaiGolpePage() {
  return (
    <>
      <header className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-4xl animate-reveal px-6 text-center">
          <span className="mb-6 inline-block rounded-full bg-destructive/20 px-4 py-1.5 text-xs font-bold tracking-widest text-destructive uppercase">
            Guia de emergência
          </span>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
            Caí em um golpe.{" "}
            <span className="font-display font-semibold text-primary italic">E agora?</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-background/70 text-pretty">
            Respire fundo. Agir rápido nas primeiras horas faz muita diferença. Siga os seis
            passos abaixo na ordem.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-6">
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
              <p className="text-lg leading-relaxed text-muted-foreground">{p.texto}</p>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-[32px] border border-border bg-muted p-8 md:p-10">
          <h2 className="mb-6 text-2xl font-bold">Onde buscar ajuda em Curitiba</h2>
          <ul className="space-y-4">
            {contatos.map((c) => (
              <li
                key={c.nome}
                className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5"
              >
                <span className="font-bold">{c.nome}</span>
                <span className="text-sm text-muted-foreground">{c.detalhe}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 rounded-[32px] bg-primary/10 p-10 text-center">
          <h2 className="mb-3 text-2xl font-bold">Ainda com dúvidas?</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Escreva para nós. Sua pergunta pode ajudar outras pessoas da comunidade.
          </p>
          <Link
            to="/duvidas"
            className="inline-flex rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95"
          >
            Enviar minha dúvida
          </Link>
        </div>
      </div>
    </>
  );
}
