type ProjectId = "1" | "2" | "3" | "4";

type ProjectName = "Rincón Literario" | "Masterbikes" | "TeLlevoAPP" | "Annie's Gallery";

type ProjectType = "College" | "Personal";

export interface Project {
    id: ProjectId;
    title: ProjectName;
    type: ProjectType;
    description: string;
    repository: string;
    image: string;
    tech: {
        logo: any;
        name: string;
    }[];
};