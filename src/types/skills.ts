type SkillID = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16";

type SkillName = "Angular" | "Astro" | "Ionic" | "Django" | "Csharp" | "Java" | "Python" | "Typescript" | "Javascript" | "TailwindCSS" | "Bootstrap" | "CSS" | "HTML5" | "Firebase" | "PostgreSQL" | "Oracle SQL" | "Git";

export interface Skill {
    id: SkillID;
    name: SkillName;
    logo: any;
};