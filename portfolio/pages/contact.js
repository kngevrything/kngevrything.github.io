import { AiFillLinkedin, AiFillGithub  } from "react-icons/ai"; // Import LinkedIn logo

export default function Contact() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600 text-white">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-4 text-lg">Feel free to reach out at:</p>
        <a
          href="mailto:kevind.liedtke@gmail.com"
          className="mt-2 text-blue-400 underline"
        >
          kevindliedtke@gmail.com
        </a>

        <div className="flex space-x-1">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/kevin-liedtke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-4xl"
          >
            <AiFillLinkedin />
          </a>
          {/* GitHub Icon */}
          <a
            href="https://github.com/kngevrything"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-4xl"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    );
  }
  