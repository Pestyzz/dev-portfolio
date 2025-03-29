type ProjectId = "1" | "2" | "3" | "4";

type ProjectName = "Ecommerce Books" | "Masterbikes" | "TeLlevoAPP" | "Annie's Gallery";

export interface Project {
    id: ProjectId;
    title: ProjectName;
    description: string;
    repository: string;
    image: string;
    tech: {
        logo: any;
        name: string;
    }[];
}