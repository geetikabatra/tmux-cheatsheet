# Tmux Cheat Sheet

A modern, interactive cheat sheet for Tmux commands. Built with React and Tailwind CSS, this web application provides an easily searchable interface for Tmux commands, shortcuts, and configurations.

![Tmux Cheat Sheet Screenshot]

## Features

- 🔍 Real-time search functionality
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- ⌨️ Keyboard shortcuts
- 📋 One-click copy for commands
- 🗂️ Organized by categories
- 💻 Syntax highlighted code examples

## Live Demo

Visit the live site: [Tmux Cheat Sheet](https://tmux-cheatsheet-c35yfwsl6-geetikabatras-projects.vercel.app)

## Local Development

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/geetikabatra/tmux-cheatsheet.git
cd tmux-cheatsheet
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

### Building for Production

```bash
npm run build
```

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Technology Stack

- React
- Tailwind CSS
- lucide-react (for icons)

## Project Structure

```
tmux-cheatsheet/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── SearchBar.js
│   │   ├── Category.js
│   │   ├── CommandBox.js
│   │   ├── KeyboardShortcut.js
│   │   ├── BackToTop.js
│   │   └── Footer.js
│   ├── data/
│   │   └── tmuxCommands.js
│   ├── App.js
│   └── index.js
└── package.json
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the Tmux community
- Built with React and Tailwind CSS
- Icons provided by Lucide React


Project Link: [https://github.com/geetikabatra/tmux-cheatsheet](https://github.com/geetikabatra/tmux-cheatsheet)