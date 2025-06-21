export interface tecnologia{
    id: number;
    nome: string;
    descricao: string;
    imagem: string | null;
    destaque: boolean;
}

export const Tecnologias:tecnologia[] = [
    {
        id: 1,
        nome: "React.Js",
        descricao: "reactjs",
        imagem: "/react.png",
        destaque: true
    },
    {
        id: 2,
        nome: "Next.js",
        descricao: "nextjs",
        imagem: null,
        destaque: false
    },
    {
        id: 3,
        nome: "Node.js",
        descricao: "nodejs",
        imagem: "/node.png",
        destaque: true
    },
    {
        id: 4,
        nome: "Typescript",
        descricao: "typescript",
        imagem: "/typescript.png",
        destaque: true
    },
    {
        id: 5,
        nome: "Express",
        descricao: "express",
        imagem: null,
        destaque: false
    },
    {
        id: 6,
        nome: "PrismaORM",
        descricao: "prismaorm",
        imagem: null,
        destaque: false
    },
    {
        id: 7,
        nome: "PostgreSQL",
        descricao: "banco de dados postgresql",
        imagem: null,
        destaque: false
    },
    {
        id: 8,
        nome: "Zod",
        descricao: "zod",
        imagem: null,
        destaque: false
    },
    {
        id: 9,
        nome: "Vitest",
        descricao: "vitest",
        imagem: null,
        destaque: false
    },
    {
        id: 10,
        nome: "Jest",
        descricao: "jest",
        imagem: null,
        destaque: false
    },
    {
        id: 11,
        nome: "Swagger",
        descricao: "swagger",
        imagem: null,
        destaque: false
    },
    {
        id: 12,
        nome: "Docker",
        descricao: "docker",
        imagem: null,
        destaque: false
    },
]