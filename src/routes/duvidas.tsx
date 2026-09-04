import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/duvidas")({
  head: () => ({
    meta: [
      { title: "Dúvidas e Sugestões — Guia de Inclusão Digital" },
      {
        name: "description",
        content:
          "Envie sua dúvida sobre segurança na internet ou sugira um novo tema para o Guia de Inclusão Digital de Curitiba.",
      },
      { property: "og:title", content: "Dúvidas e Sugestões — Guia de Inclusão Digital" },
      {
        property: "og:description",
        content: "Fale com a gente: tire dúvidas sobre golpes e sugira novos conteúdos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DuvidasPage,
});

const contatoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, { message: "Escreva seu nome (mínimo 2 letras)." })
    .max(100, { message: "O nome deve ter no máximo 100 caracteres." }),
  email: z
    .string()
    .trim()
    .email({ message: "Digite um e-mail válido, como maria@email.com." })
    .max(255, { message: "O e-mail deve ter no máximo 255 caracteres." }),
  assunto: z
    .string()
    .trim()
    .min(3, { message: "Escreva o assunto da sua mensagem." })
    .max(150, { message: "O assunto deve ter no máximo 150 caracteres." }),
  mensagem: z
    .string()
    .trim()
    .min(10, { message: "Conte um pouco mais: escreva ao menos 10 caracteres." })
    .max(1000, { message: "A mensagem deve ter no máximo 1000 caracteres." }),
});

type Campos = z.infer<typeof contatoSchema>;
const vazio: Campos = { nome: "", email: "", assunto: "", mensagem: "" };

const perguntas = [
  {
    q: "Recebi uma mensagem estranha. Como sei se é golpe?",
    a: "Desconfie sempre que a mensagem criar urgência, prometer vantagem fácil ou pedir dados e senhas. Na dúvida, não clique em nada e confirme por outro canal, ligando para a pessoa ou empresa em um número que você já conhece.",
  },
  {
    q: "É seguro usar o aplicativo do banco no celular?",
    a: "Sim, é uma das formas mais seguras, desde que o aplicativo tenha sido baixado da loja oficial, seu celular esteja atualizado e você use senha ou biometria para desbloquear o aparelho.",
  },
  {
    q: "Preciso instalar antivírus no celular?",
    a: "No celular, o mais importante é baixar aplicativos só de lojas oficiais e manter o sistema atualizado. Antivírus é mais relevante em computadores com Windows.",
  },
  {
    q: "Alguém da minha família caiu em um golpe. Como ajudo?",
    a: "Acolha sem julgar, ajude a avisar o banco, guarde as provas e registre o Boletim de Ocorrência junto. A vergonha faz muita gente demorar a pedir ajuda, e o tempo é decisivo.",
  },
];

function DuvidasPage() {
  const [valores, setValores] = useState<Campos>(vazio);
  const [erros, setErros] = useState<Partial<Record<keyof Campos, string>>>({});

  function atualizar(campo: keyof Campos, valor: string) {
    setValores((v) => ({ ...v, [campo]: valor }));
    setErros((e) => ({ ...e, [campo]: undefined }));
  }

  function enviar(e: FormEvent) {
    e.preventDefault();
    const resultado = contatoSchema.safeParse(valores);
    if (!resultado.success) {
      const novos: Partial<Record<keyof Campos, string>> = {};
      for (const issue of resultado.error.issues) {
        const campo = issue.path[0] as keyof Campos;
        if (!novos[campo]) novos[campo] = issue.message;
      }
      setErros(novos);
      toast.error("Confira os campos destacados antes de enviar.");
      return;
    }
    setValores(vazio);
    setErros({});
    toast.success("Mensagem recebida! Obrigado por escrever para o Guia.");
  }

  const campoBase =
    "w-full rounded-2xl border bg-card px-5 py-4 text-base outline-none transition-all focus:ring-2 focus:ring-ring";

  return (
    <>
      <header className="mx-auto max-w-4xl animate-reveal px-6 pt-20 pb-12 text-center">
        <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          Estamos aqui para ouvir
        </span>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
          Dúvidas e{" "}
          <span className="font-display font-semibold text-primary italic">sugestões</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Não existe pergunta boba. Escreva a sua dúvida sobre internet e segurança ou sugira um
          tema que você gostaria de ver por aqui.
        </p>
      </header>

      <section className="mx-auto max-w-2xl px-6 pb-16" aria-labelledby="formulario">
        <h2 id="formulario" className="sr-only">
          Formulário de contato
        </h2>
        <form onSubmit={enviar} noValidate className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="nome" className="ml-1 block text-sm font-bold">
                Seu nome
              </label>
              <input
                id="nome"
                type="text"
                value={valores.nome}
                maxLength={100}
                onChange={(e) => atualizar("nome", e.target.value)}
                aria-invalid={!!erros.nome}
                aria-describedby={erros.nome ? "erro-nome" : undefined}
                placeholder="Ex.: Maria Silva"
                className={`${campoBase} ${erros.nome ? "border-destructive" : "border-border focus:border-primary"}`}
              />
              {erros.nome && (
                <p id="erro-nome" className="ml-1 text-sm font-medium text-destructive">
                  {erros.nome}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="ml-1 block text-sm font-bold">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={valores.email}
                maxLength={255}
                onChange={(e) => atualizar("email", e.target.value)}
                aria-invalid={!!erros.email}
                aria-describedby={erros.email ? "erro-email" : undefined}
                placeholder="maria@email.com"
                className={`${campoBase} ${erros.email ? "border-destructive" : "border-border focus:border-primary"}`}
              />
              {erros.email && (
                <p id="erro-email" className="ml-1 text-sm font-medium text-destructive">
                  {erros.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="assunto" className="ml-1 block text-sm font-bold">
              Assunto
            </label>
            <input
              id="assunto"
              type="text"
              value={valores.assunto}
              maxLength={150}
              onChange={(e) => atualizar("assunto", e.target.value)}
              aria-invalid={!!erros.assunto}
              aria-describedby={erros.assunto ? "erro-assunto" : undefined}
              placeholder="Sobre o que você quer falar?"
              className={`${campoBase} ${erros.assunto ? "border-destructive" : "border-border focus:border-primary"}`}
            />
            {erros.assunto && (
              <p id="erro-assunto" className="ml-1 text-sm font-medium text-destructive">
                {erros.assunto}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="mensagem" className="ml-1 block text-sm font-bold">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              rows={5}
              value={valores.mensagem}
              maxLength={1000}
              onChange={(e) => atualizar("mensagem", e.target.value)}
              aria-invalid={!!erros.mensagem}
              aria-describedby={erros.mensagem ? "erro-mensagem" : undefined}
              placeholder="Escreva aqui a sua dúvida ou sugestão."
              className={`${campoBase} resize-none ${erros.mensagem ? "border-destructive" : "border-border focus:border-primary"}`}
            />
            {erros.mensagem && (
              <p id="erro-mensagem" className="ml-1 text-sm font-medium text-destructive">
                {erros.mensagem}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-primary py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-[1.01] active:scale-95"
          >
            Enviar mensagem
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Nunca envie senhas, números de cartão ou documentos por este formulário.
          </p>
        </form>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24" aria-labelledby="faq">
        <h2 id="faq" className="mb-8 text-center text-3xl font-bold tracking-tight">
          Perguntas frequentes
        </h2>
        <div className="space-y-4">
          {perguntas.map((p) => (
            <details
              key={p.q}
              className="group rounded-[24px] border border-border bg-card p-6"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold select-none">
                {p.q}
                <span className="text-2xl transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
