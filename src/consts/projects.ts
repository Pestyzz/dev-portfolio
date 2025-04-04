import type { Project } from "../types/projects";

import AngularIcon from "../assets/icons/Angular.svg";
import FirebaseIcon from "../assets/icons/Firebase.svg";
import DjangoIcon from "../assets/icons/Django.svg";
import IonicIcon from "../assets/icons/Ionic.svg";
import BootstrapIcon from "../assets/icons/Bootstrap.svg";

export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "Rincón Literario",
        type: "College",
        description: "E-commerce of books including auth and dashboard for product, purchase and user management.",
        repository: "https://github.com/pestyzz/Libros_Web",
        image: "/images/RinconLiterario.webp",
        tech: [
            {
                logo: DjangoIcon,
                name: "Django"
            },
            {
                logo: BootstrapIcon,
                name: "Bootstrap"
            }
        ]
    },
    {
        id: "2",
        title: "Masterbikes",
        type: "College",
        description: "E-commerce of bicycles, services and accessories. Includes auth and product tracking.",
        repository: "https://github.com/pestyzz/Masterbikes",
        image: "/images/MasterBikes.webp",
        tech: [
            {
                logo: DjangoIcon,
                name: "Django"
            },
            {
                logo: BootstrapIcon,
                name: "Bootstrap"
            }
        ]
    },
    {
        id: "3",
        title: "TeLlevoAPP",
        type: "College",
        description: "Trip application including authentication and travel system.",
        repository: "https://github.com/pestyzz/TeLlevoAPP",
        image: "/images/TeLlevoAPP.webp",
        tech: [
            {
                logo: IonicIcon,
                name: "Ionic"
            },
            {
                logo: FirebaseIcon,
                name: "Firebase"
            }
        ]
    },
    {
        id: "4",
        title: "Annie's Gallery",
        type: "Personal",
        description: "Artistic platform including authentication and administrative dashboard.",
        repository: "http://github.com/pestyzz/AnniesGallery",
        image: "/images/AnniesGallery.webp",
        tech: [
            {
                logo: AngularIcon,
                name: "Angular"
            },
            {
                logo: FirebaseIcon,
                name: "Firebase"
            }
        ]
    }
]