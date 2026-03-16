"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CommandId =
  | "help"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "clear";

type Command = {
  id: CommandId;
  label: string;
  description: string;
  run: () => void;
};

type OutputLine = {
  id: number;
  content: string;
  type?: "info" | "system";
};

const PROMPT = "sahaj@portfolio:~$";

type TerminalAboutProps = {
  onCommandTextChange?: (text: string) => void;
};

export function TerminalAbout({ onCommandTextChange }: TerminalAboutProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [output, setOutput] = useState<OutputLine[]>([
    {
      id: 0,
      type: "system",
      content:
        "Welcome to the Sahaj CLI. Type `help` to see available commands.",
    },
  ]);

  const nextIdRef = useRef(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [output]);

  useEffect(() => {
    const handler = () => inputRef.current?.focus();
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const appendOutput = (lines: string | string[], type: OutputLine["type"] = "info") => {
    const arr = Array.isArray(lines) ? lines : [lines];
    setOutput((prev) => [
      ...prev,
      ...arr.map((content) => ({
        id: nextIdRef.current++,
        content,
        type,
      })),
    ]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const commands: Command[] = useMemo(
    () => [
      {
        id: "help",
        label: "help",
        description: "",
        run: () => {
          appendOutput("Available commands:", "system");
          appendOutput(
            ["  help", "  about", "  skills", "  projects", "  experience", "  contact", "  clear"],
            "system"
          );
        },
      },
      {
        id: "about",
        label: "about",
        description: "",
        run: () => {
          appendOutput([
            "I'm Sahaj, a developer focused on AI-powered products,",
            "developer tooling, and high-leverage web experiences.",
            "",
            "Recently I've been:",
            "- Shipping AI automation products (LLM systems, retrieval, agents)",
            "- Building full-stack web apps with Next.js, TypeScript, and Tailwind",
            "- Designing data and infrastructure that actually scales",
          ]);
        },
      },
      {
        id: "skills",
        label: "skills",
        description: "",
        run: () => {
          appendOutput([
            "Core skills:",
            "- Languages: Python, TypeScript, Java, C++, SQL",
            "- Web: React, Next.js, Tailwind CSS, Node.js, Express",
            "- AI/ML: PyTorch, TensorFlow, Transformers, NLP, LLM systems",
            "- Infra: AWS, Docker, Kubernetes, CI/CD, distributed systems",
          ]);
        },
      },
      {
        id: "projects",
        label: "projects",
        description: "",
        run: () => {
          appendOutput("Opening projects section…", "system");
          scrollToSection("recentprojects");
        },
      },
      {
        id: "experience",
        label: "experience",
        description: "",
        run: () => {
          appendOutput("Opening experience section…", "system");
          scrollToSection("workex");
        },
      },
      {
        id: "contact",
        label: "contact",
        description: "",
        run: () => {
          appendOutput("Opening contact section…", "system");
          scrollToSection("footer");
        },
      },
      {
        id: "clear",
        label: "clear",
        description: "",
        run: () => {
          setOutput([]);
        },
      },
    ],
    []
  );

  const commandMap = useMemo(
    () =>
      commands.reduce<Record<string, Command>>((acc, cmd) => {
        acc[cmd.label] = cmd;
        return acc;
      }, {}),
    [commands]
  );

  const matchingCommands = useMemo(() => {
    if (!input.trim()) return commands;
    const lower = input.toLowerCase();
    return commands.filter(
      (cmd) => cmd.label.toLowerCase().startsWith(lower)
    );
  }, [commands, input]);

  const handleSubmit = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    appendOutput(`${PROMPT} ${trimmed}`, "system");

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(null);
    setInput("");

    if (onCommandTextChange) {
      onCommandTextChange(trimmed);
    }

    const cmd = commandMap[trimmed as keyof typeof commandMap];
    if (!cmd) {
      appendOutput(
        `Command not found: ${trimmed}. Type "help" to see available commands.`,
        "system"
      );
      return;
    }

    cmd.run();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(input);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        if (!history.length) return null;
        if (prev === null) return history.length - 1;
        return Math.max(0, prev - 1);
      });
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        if (!history.length) return null;
        if (prev === null) return null;
        if (prev >= history.length - 1) return null;
        return prev + 1;
      });
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      if (!matchingCommands.length) return;
      setInput(matchingCommands[0].label);
    }
  };

  useEffect(() => {
    if (historyIndex === null) return;
    setInput(history[historyIndex] ?? "");
  }, [historyIndex, history]);

  return (
    <section id="terminal" aria-label="Interactive terminal about section">
      <div className="mb-6 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white-100">
          Interactive
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
          Terminal · About Me
        </h2>
        <p className="mt-2 text-sm text-white-100">
          Type <span className="font-mono text-purple">help</span> and hit
          Enter. Use <span className="font-mono">↑ / ↓</span> for history and{" "}
          <span className="font-mono">Tab</span> to autocomplete.
        </p>
      </div>

      <div
        className="relative mx-auto max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-black/60 to-black/90 shadow-[0_0_0_1px_rgba(148,163,184,0.2)]"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-black/60 px-4 py-2 text-xs text-white-100">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="ml-3 font-mono text-[11px] text-white-100/80">
            sahaj-cli — interactive about
          </span>
        </div>

        <div
          ref={containerRef}
          className="max-h-[320px] overflow-y-auto px-4 py-3 font-mono text-sm text-white"
        >
          <div className="space-y-1">
            {output.map((line) => (
              <div
                key={line.id}
                className={
                  line.type === "system"
                    ? "text-white-100"
                    : "text-white"
                }
              >
                {line.content}
              </div>
            ))}
          </div>

          <div className="mt-2 flex items-center">
            <span className="mr-2 text-purple">{PROMPT}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none caret-purple text-white placeholder:text-white-100/60"
              placeholder="Type a command…"
              aria-label="Terminal input"
            />
          </div>
        </div>

        <AnimatePresence>
          {input && matchingCommands.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="border-t border-white/10 bg-black/80 px-4 py-2 text-xs text-white-100"
            >
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {matchingCommands.map((cmd) => (
                  <div key={cmd.id} className="flex items-center gap-1">
                    <span className="font-mono text-purple">{cmd.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

