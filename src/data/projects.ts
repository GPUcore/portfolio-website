export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com"
  },
  {
    id: "2",
    title: "Python Game",
    description: "A text based game made in python",
    image: "/projects/game.png",
    technologies: ["Python"],
    githubUrl: "https://github.com/JimmyMoist/Project0Starter-12th-Grade"
  }
  // Add more projects here
]; 