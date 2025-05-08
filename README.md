# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS. This portfolio is designed to be easily customizable and perfect for students to showcase their projects and skills.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🚀 Fast and optimized
- 📝 Easy to customize
- 🎯 Project showcase
- 📬 Contact form
- 🛠️ Skills section
- 📄 About section

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding Projects

To add a new project, edit the `src/data/projects.ts` file. Each project should follow this structure:

```typescript
{
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}
```

### Personal Information

1. Update your name in `src/components/Layout.tsx`
2. Modify the About section in `src/app/page.tsx`
3. Update the skills list in the Skills section
4. Add your social media links in the footer

### Styling

The website uses Tailwind CSS for styling. You can customize the colors, spacing, and other design elements by modifying the Tailwind classes in the components.

## Deployment

This portfolio can be easily deployed to Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy!

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
