import type { Project } from "../types/projects";

import AngularIcon from "../assets/icons/Angular.svg";
import FirebaseIcon from "../assets/icons/Firebase.svg";
import DjangoIcon from "../assets/icons/Django.svg";
import IonicIcon from "../assets/icons/Ionic.svg";
import BootstrapIcon from "../assets/icons/Bootstrap.svg";

export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "Ecommerce Books",
        description: "Ecommerce for books. Small project for college.",
        repository: "https://github.com/pestyzz/Libros_Web",
        image: "https://placehold.co/400",
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
        description: "Ecommerce for bicycles. Small project for college.",
        repository: "https://github.com/pestyzz/Masterbikes",
        image: "https://placehold.co/400",
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
    },
    {
        id: "3",
        title: "TeLlevoAPP",
        description: "Ecommerce for bicycles. Small project for college.",
        repository: "https://github.com/pestyzz/TeLlevoAPP",
        image: "https://placehold.co/400",
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
        description: "Gallery art for Annie. Personal project.",
        repository: "http://github.com/pestyzz/AnniesGallery",
        image: "https://placehold.co/400",
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