import React from "react";
import Card from "./Card.jsx";
import './App.css'; // Import CSS file for styling

const languages = [
  {
    name: "JavaScript",
    description: "A versatile language used mainly for web development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Python",
    description: "A high-level language known for its readability and simplicity.",
    link: "https://docs.python.org/3/",
  },
  {
    name: "Rust",
    description: "A systems programming language that focuses on safety and performance.",
    link: "https://doc.rust-lang.org/",
  },
  {
    name: "C++",
    description: "A powerful language used for systems programming and applications requiring high performance.",
    link: "https://en.cppreference.com/w/cpp",
  },
  {
    name: "Java",
    description: "A class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
    link: "https://docs.oracle.com/en/java/",
  },
  {
    name: "Ruby",
    description: "A dynamic, open-source programming language focused on simplicity and productivity.",
    link: "https://www.ruby-lang.org/en/documentation/",
  },
  {
    name: "Go",
    description: "A statically typed, compiled language designed for system programming and scalability.",
    link: "https://golang.org/doc/",
  },
  {
    name: "Swift",
    description: "A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS.",
    link: "https://developer.apple.com/swift/",
  },
  {
    name: "PHP",
    description: "A general-purpose scripting language especially suited to web development.",
    link: "https://www.php.net/docs.php",
  },
  {
    name: "Kotlin",
    description: "A modern, statically-typed language used for JVM and Android development.",
    link: "https://kotlinlang.org/docs/home.html",
  },
  {
    name: "TypeScript",
    description: "A superset of JavaScript that adds static typing and modern features.",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "C#",
    description: "A modern, object-oriented programming language developed by Microsoft for building a variety of applications.",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "R",
    description: "A language and environment for statistical computing and graphics.",
    link: "https://www.r-project.org/",
  },
  {
    name: "Scala",
    description: "A general-purpose programming language that provides support for both object-oriented and functional programming.",
    link: "https://docs.scala-lang.org/",
  },
  {
    name: "Shell Scripting (Bash)",
    description: "A Unix shell and command language used for automating tasks and managing system processes.",
    link: "https://www.gnu.org/software/bash/manual/",
  },
];

const App = () => {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to the Programming Docs Board!</h1>
        <p>Explore official documentation for 15 of the most popular programming languages.</p>
      </section>

      <div className="board">
        {languages.map((language, index) => (
          <Card
            key={index}
            name={language.name}
            description={language.description}
            link={language.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
