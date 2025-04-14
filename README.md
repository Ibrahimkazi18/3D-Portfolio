# 3D Portfolio

A visually engaging 3D portfolio website built to explore the capabilities of Three.js and GSAP animations. This project serves as a sandbox for experimenting with interactive 3D elements, smooth animations, and responsive UI design using modern frontend technologies.

![3D Portfolio Screenshot](./public/screenshot.png) <!-- Replace with an actual screenshot if available -->

## 🚀 Features

- **Three.js Integration**:Render interactive 3D models directly in the browser
- **GSAP Animations**:Implement smooth and performant animations for UI elements and 3D objects
- **Responsive Design**:Ensure the portfolio looks great on all devices using Tailwind CSS
- **Email Functionality**:Allow users to send messages directly through the site using EmailJS
- **Modern Frontend Stack**:Built with React.js and Vite for a fast and efficient development experience

## 🛠️ Technologies Used

- **[React.js](https://reactjs.org/)** JavaScript library for building user interface.
- **[Vite](https://vitejs.dev/)** Next-generation frontend tooling for rapid developmen.
- **[Three.js](https://threejs.org/)** JavaScript 3D library for creating 3D content in the browse.
- **[GSAP](https://greensock.com/gsap/)** Robust animation library for high-performance animation.
- **[Tailwind CSS](https://tailwindcss.com/)** Utility-first CSS framework for rapid UI developmen.
- **[EmailJS](https://www.emailjs.com/)** Service to send emails directly from JavaScript without server-side cod.

## 📁 Project Structure

```bash
3D-Portfolio/
├── public/
│   ├── images/             # Static assets like images and 3D models
│   └── models/             
├── src/
│   ├── components/         # Reusable React components
│   ├── sections/           # Different sections of the portfolio (e.g., About, Projects)
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point of the React application
│   └── index.css           # Global CSS styles
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```


1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ibrahimkazi18/3D-Portfolio.git
   cd 3D-Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**

   ```
   http://localhost:5173
   ```

## 📬 Contact Form Seup

To enable the contact form functionality using EmalJS:

1. **Create an EmailJS accoun:** [EmailJS](https://www.emailjs.om/)
2. **Create a new email service and template.**
3. **Obtain your User ID, Service ID, and Template ID.**
4. **Create a `.env` file in the root directory and add:**

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

5. **Ensure your application uses these environment variables to send emails.**

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Acknowledgements

- [Three.js](https://threejs.org/) – for making 3D in the browser accessible.
- [GSAP](https://greensock.com/gsap/) – for powerful animation capabilities.
- [Tailwind CSS](https://tailwindcss.com/) – for utility-first CSS styling.
- [EmailJS](https://www.emailjs.com/) – for simplifying email integration.
