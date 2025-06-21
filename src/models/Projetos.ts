export interface projeto {
    id: number;
    nome: string;
    descricao: string;
    imagens: string[];
    tipo: string;
    nivel: number;
    repositorio: string;
    destaque: boolean;
}

export const Projetos:projeto[] = [
    {
        id: 1,
        nome: "Sistema de Fila",
        descricao: "Aplicação que organiza clientes em filas de atendimento, gerencia múltiplas filas, prioriza atendimentos, envia notificações e fornece consulta dos clientes.",
        imagens: ["/projeto1.png"],
        tipo: "backend",
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/sistema-de-fila-backend",
        destaque: true,

    },
    {
        id: 2,
        nome: "Sistema de Pontos",
        descricao: "Aplicação onde funcionários podem registrar seus horários de entrada e saída, e administradores podem acompanhar e gerenciar esses registros.",
        tipo: "backend",
        imagens: ["/projeto2.png"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/sistema-de-pontos-backend",
        destaque: true,

    },
    {
        id: 3,
        nome: "Tickets",
        descricao: "Aplicação que permite aos usuários criar e gerenciar tickets, com funcionalidades como criação, edição, exclusão e consulta de tickets.",
        tipo: "backend",
        imagens: ["/projeto3.png"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/tickets-level-up-for-juniors-1",
        destaque: true,

    },
    {
        id: 4,
        nome: "Enquetes",
        descricao: "Aplicação para gerenciamento de enquetes.",
        tipo: "backend",
        imagens: ["/projeto4.png"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/back-dev-challenge",
        destaque: false,

    },
    {
        id: 5,
        nome: "Find a Friend (Back end)",
        descricao: "Aplicação para adoção de cachorros.",
        tipo: "backend",
        imagens: ["/projeto5.png"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/findafriend-api",
        destaque: true,

    },
    {
        id: 6,
        nome: "Find a Friend (Front end)",
        descricao: "Aplicação para adoção de cachorros.",
        tipo: "frontend",
        imagens: ["/projeto6.png"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/findafriend-frontend",
        destaque: true,

    },
    {
        id: 7,
        nome: "Trato Tech",
        descricao: "E-comerce simples desenvolvido em React, com carrinho de vendas e busca.",
        tipo: "frontend",
        imagens: ["/projeto7.png"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/trato-tech",
        destaque: false,

    },
    {
        id: 8,
        nome: "PDR Barber",
        descricao: "Sistema de reservas de barbearias, onde o usuário poderá pesquisar por barbearias e marcar e seus serviços.",
        tipo: "frontend",
        imagens: ["/projeto8.png"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/pdro-barber",
        destaque: true,

    },
    {
        id: 9,
        nome: "Car Hub",
        descricao: "Plataforma moderna e simples de showcase de carros.",
        tipo: "frontend",
        imagens: ["/projeto9.jpg"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/jpg",
        destaque: false,

    },
    {
        id: 10,
        nome: "OneBitFlix",
        descricao: "Aplicação EAD de cursos inspirado no netflix.",
        tipo: "frontend",
        imagens: ["/projeto10.png"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/onebitflix-front-end",
        destaque: true,

    },
    {
        id: 11,
        nome: "OneBitFlix",
        descricao: "Aplicação EAD de cursos inspirado no netflix.",
        tipo: "backend",
        imagens: ["/projeto11.png"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/onebitflix-back-end",
        destaque: true,

    },
    {
        id: 12,
        nome: "Cachorro",
        descricao: "Site para ajudar um petshop fictício.",
        tipo: "frontend",
        imagens: ["/projeto12.jpg"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/cachorro",
        destaque: false,

    },
    {
        id: 13,
        nome: "Pearson Hardman",
        descricao: "Site para ajudar um escritório de advocacia fictício.",
        tipo: "frontend",
        imagens: ["/projeto13.jpg"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/pearsonhardman-",
        destaque: false,

    },
    {
        id: 14,
        nome: "DoctorCare",
        descricao: "Site para ajudar um consultório médico fictício.",
        tipo: "frontend",
        imagens: ["/projeto14.jpg"],
        nivel: 2,
        repositorio: "https://github.com/pdro-h0/doctorcare",
        destaque: true,

    },
]