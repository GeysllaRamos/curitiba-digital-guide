import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, ShieldAlert } from "lucide-react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/golpes", label: "Golpes Digitais" },
  { to: "/proteger", label: "Como se Proteger" },
  { to: "/iniciantes", label: "Guia para Iniciantes" },
  { to: "/redes-sociais", label: "Redes Sociais" },
  { to: "/duvidas", label: "Dúvidas e Sugestões" },
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
            <div className="size-4 rounded-full bg-background" />
          </div>
          <span className="text-xl font-bold tracking-tight">Guia de Inclusão Digital</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary border-b-2 border-primary pb-1" }}
              className="transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/cai-em-um-golpe"
            className="flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-bold text-background transition-all hover:bg-primary"
          >
            <ShieldAlert className="size-4" />
            Caí em um Golpe
          </Link>
        </div>

        <button
          className="flex size-11 items-center justify-center rounded-xl border border-border lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1 text-base font-medium">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-xl px-4 py-3 transition-colors hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/cai-em-um-golpe"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-4 font-bold text-background"
            >
              <ShieldAlert className="size-5" />
              Caí em um Golpe
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20">
            <div className="size-3 rounded-full bg-primary" />
          </div>
          <span className="font-bold">Guia de Inclusão Digital</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Iniciativa educativa para a comunidade de Curitiba-PR. Conteúdo gratuito e sem fins lucrativos.
        </p>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/golpes" className="transition-colors hover:text-primary">Golpes</Link>
          <Link to="/proteger" className="transition-colors hover:text-primary">Proteção</Link>
          <Link to="/duvidas" className="transition-colors hover:text-primary">Dúvidas</Link>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Você pode tentar atualizar ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href={import.meta.env.BASE_URL}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Guia de Inclusão Digital — Curitiba" },
      {
        name: "description",
        content:
          "Aprenda a usar a internet com segurança. Guia gratuito para a comunidade de Curitiba sobre golpes digitais, proteção online e primeiros passos na tecnologia.",
      },
      { property: "og:title", content: "Guia de Inclusão Digital — Curitiba" },
      {
        property: "og:description",
        content:
          "Aprenda a usar a internet com segurança e a identificar golpes digitais. Conteúdo simples para todas as idades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.ico`, type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Playfair+Display:ital,wght@1,600&family=JetBrains+Mono:wght@500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}
