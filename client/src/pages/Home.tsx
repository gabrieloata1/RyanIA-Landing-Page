import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { APP_TITLE } from "@/const";
import {
  Sparkles,
  MessageSquare,
  Brain,
  Users,
  Zap,
  Shield,
  BarChart3,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const agents = [
  {
    name: "Grazi",
    role: "Assistente Geral",
    description: "Sua assistente versátil para tarefas gerais, criativa e adaptável.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Pesquisador",
    role: "Especialista em Pesquisa",
    description: "Realiza pesquisas profundas e análises detalhadas de qualquer tema.",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Criador",
    role: "Especialista em Criação",
    description: "Gera conteúdo criativo, textos, ideias e projetos inovadores.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Analista",
    role: "Especialista em Análise",
    description: "Analisa dados, identifica padrões e fornece insights valiosos.",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Gerente",
    role: "Coordenador de Grupo",
    description: "Coordena discussões em grupo e sintetiza informações de múltiplos agentes.",
    icon: Users,
    color: "from-indigo-500 to-purple-500",
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "Chat Inteligente",
    description:
      "Converse naturalmente com agentes de IA especializados em diferentes áreas.",
  },
  {
    icon: Users,
    title: "Discussões em Grupo",
    description:
      "Reúna múltiplos agentes para debater e resolver problemas complexos.",
  },
  {
    icon: Brain,
    title: "Memória Persistente",
    description:
      "Os agentes lembram do contexto e aprendem com suas interações anteriores.",
  },
  {
    icon: Zap,
    title: "Processamento de Arquivos",
    description:
      "Envie imagens e documentos para análise e processamento inteligente.",
  },
  {
    icon: Shield,
    title: "Privacidade Garantida",
    description:
      "Seus dados são criptografados e nunca compartilhados com terceiros.",
  },
  {
    icon: Sparkles,
    title: "Respostas Personalizadas",
    description:
      "Customize o tamanho das respostas e o estilo de cada agente conforme necessário.",
  },
];

const benefits = [
  {
    title: "Aumente sua Produtividade",
    description:
      "Automatize tarefas repetitivas e concentre-se no que realmente importa com ajuda de agentes especializados.",
    icon: Zap,
  },
  {
    title: "Tome Decisões Melhores",
    description:
      "Obtenha análises profundas e perspectivas múltiplas para decisões mais informadas.",
    icon: BarChart3,
  },
  {
    title: "Aprenda Continuamente",
    description:
      "Acesse informações atualizadas e aprofunde seu conhecimento em qualquer tópico.",
    icon: Brain,
  },
  {
    title: "Colabore Efetivamente",
    description:
      "Trabalhe com múltiplos agentes que se complementam para resolver problemas complexos.",
    icon: Users,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Powered by Advanced AI
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Chat com Agentes de IA{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Especializados
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Converse com múltiplos agentes de IA especializados em diferentes áreas.
              Obtenha respostas personalizadas, análises profundas e soluções criativas
              para seus desafios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Começar Agora <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-16 pt-16 border-t border-border">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
                <p className="text-sm text-muted-foreground">Agentes Especializados</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  10k+
                </div>
                <p className="text-sm text-muted-foreground">Usuários Ativos</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">99%</div>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Funcionalidades Poderosas
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo que você precisa para potencializar sua produtividade com IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="p-6 hover:border-primary/50 transition-colors">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conheça os Agentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada agente é especializado em uma área específica para melhor atender
              suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {agents.map((agent, idx) => {
              const Icon = agent.icon;
              return (
                <Card
                  key={idx}
                  className="p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${agent.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {agent.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {agent.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por Que Escolher {APP_TITLE}?
            </h2>
            <p className="text-lg text-muted-foreground">
              Transforme a forma como você trabalha com inteligência artificial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground">
              Comece em 3 passos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Crie sua Conta",
                description:
                  "Registre-se gratuitamente e acesse todos os agentes especializados.",
              },
              {
                step: "02",
                title: "Escolha um Agente",
                description:
                  "Selecione o agente mais adequado para sua tarefa ou inicie uma discussão em grupo.",
              },
              {
                step: "03",
                title: "Comece a Conversar",
                description:
                  "Faça suas perguntas e receba respostas personalizadas e inteligentes.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-primary/20 via-purple-500/10 to-pink-500/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para Transformar sua Produtividade?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Junte-se a milhares de usuários que já estão usando {APP_TITLE} para
              potencializar seu trabalho com IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Começar Gratuitamente <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Agendar Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              ✓ Sem cartão de crédito necessário ✓ Acesso imediato ✓ Suporte 24/7
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
