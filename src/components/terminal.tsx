

import { useAppContext } from "@/contexts/app-context"
import { X } from "lucide-react"
import type React from "react"
import { useEffect, useRef, useState } from "react"

type TerminalLine = {
  text: string
  type: "input" | "output" | "error" | "success"
}

export function Terminal() {
  const { theme, toggleTheme } = useAppContext()

  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: "Welcome to FabioTerminal v1.0", type: "success" },
    { text: "Type 'help' for available commands or 'snake' to play a game!", type: "output" },
  ])
  const [isPlayingSnake, setIsPlayingSnake] = useState(false)
  const [snakeGame, setSnakeGame] = useState({
    snake: [{ x: 10, y: 10 }],
    food: { x: 15, y: 15 },
    direction: { x: 1, y: 0 },
    score: 0,
    gameOver: false,
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null)

  // Listen for Ctrl+Shift+K to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "K") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  // Snake game loop
  useEffect(() => {
    if (isPlayingSnake && !snakeGame.gameOver) {
      gameLoopRef.current = setInterval(() => {
        setSnakeGame((prev) => {
          const head = prev.snake[0]
          const newHead = {
            x: head.x + prev.direction.x,
            y: head.y + prev.direction.y,
          }

          // Check wall collision
          if (newHead.x < 0 || newHead.x >= 30 || newHead.y < 0 || newHead.y >= 20) {
            return { ...prev, gameOver: true }
          }

          // Check self collision
          if (prev.snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
            return { ...prev, gameOver: true }
          }

          const newSnake = [newHead, ...prev.snake]

          // Check food collision
          if (newHead.x === prev.food.x && newHead.y === prev.food.y) {
            const newFood = {
              x: Math.floor(Math.random() * 30),
              y: Math.floor(Math.random() * 20),
            }
            return {
              ...prev,
              snake: newSnake,
              food: newFood,
              score: prev.score + 10,
            }
          } else {
            newSnake.pop()
            return { ...prev, snake: newSnake }
          }
        })
      }, 150)
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current)
      }
    }
  }, [isPlayingSnake, snakeGame.gameOver])

  // Snake game over effect
  useEffect(() => {
    if (snakeGame.gameOver) {
      setLines((prev) => [
        ...prev,
        { text: `Game Over! Final Score: ${snakeGame.score}`, type: "error" },
        { text: "Type 'snake' to play again!", type: "output" },
      ])
      setIsPlayingSnake(false)
    }
  }, [snakeGame.gameOver, snakeGame.score])

  // Handle arrow keys for snake
  useEffect(() => {
    if (!isPlayingSnake) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) return
      e.preventDefault()

      setSnakeGame((prev) => {
        const directions: Record<string, { x: number; y: number }> = {
          ArrowUp: { x: 0, y: -1 },
          ArrowDown: { x: 0, y: 1 },
          ArrowLeft: { x: -1, y: 0 },
          ArrowRight: { x: 1, y: 0 },
        }
        const newDir = directions[e.key]

        // Prevent reversing
        if (newDir.x === -prev.direction.x && newDir.y === -prev.direction.y) {
          return prev
        }

        return { ...prev, direction: newDir }
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isPlayingSnake])

  const commands: Record<string, () => void> = {
    help: () => {
      setLines((prev) => [
        ...prev,
        { text: "$ help", type: "input" },
        { text: "Available commands:", type: "success" },
        { text: "  help     - Show this help message", type: "output" },
        { text: "  about    - Learn more about Fabio", type: "output" },
        { text: "  skills   - List technical skills", type: "output" },
        { text: "  contact  - Get contact information", type: "output" },
        { text: "  snake    - Play Snake game (use arrow keys)", type: "output" },
        { text: "  clear    - Clear terminal", type: "output" },
        { text: "  exit     - Close terminal", type: "output" },
      ])
    },
    about: () => {
      setLines((prev) => [
        ...prev,
        { text: "$ about", type: "input" },
        { text: "Fabio Pinto - Senior Full Stack Software Engineer", type: "success" },
        { text: "Passionate about building scalable, high-performance cloud-native solutions.", type: "output" },
        { text: "Expertise in .NET, Angular, React, Svelte, and modern cloud architectures.", type: "output" },
      ])
    },
    skills: () => {
      setLines((prev) => [
        ...prev,
        { text: "$ skills", type: "input" },
        { text: "Backend: C#, ASP.NET Core, EF Core, NodeJS, PHP, REST APIs", type: "output" },
        { text: "Frontend: Angular, React, Svelte, TypeScript, JavaScript, TailwindCSS", type: "output" },
        { text: "Cloud: Azure, Docker, CI/CD, Azure DevOps", type: "output" },
        { text: "Data: SQL Server, Redis, MongoDB, Solr", type: "output" },
      ])
    },
    contact: () => {
      setLines((prev) => [
        ...prev,
        { text: "$ contact", type: "input" },
        { text: "Email: fabiohvp@hotmail.com", type: "output" },
        { text: "LinkedIn: linkedin.com/in/fabiohvp", type: "output" },
        { text: "GitHub: github.com/fabiohvp", type: "output" },
      ])
    },
    snake: () => {
      setLines((prev) => [
        ...prev,
        { text: "$ snake", type: "input" },
        { text: "Starting Snake game... Use arrow keys to play!", type: "success" },
      ])
      setSnakeGame({
        snake: [{ x: 10, y: 10 }],
        food: { x: 15, y: 15 },
        direction: { x: 1, y: 0 },
        score: 0,
        gameOver: false,
      })
      setIsPlayingSnake(true)
    },
    clear: () => {
      setLines([])
    },
    exit: () => {
      setIsOpen(false)
      setIsPlayingSnake(false)
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()

    if (!cmd) return

    if (commands[cmd]) {
      commands[cmd]()
    } else {
      setLines((prev) => [
        ...prev,
        { text: `$ ${cmd}`, type: "input" },
        { text: `Command not found: ${cmd}. Type "help" for available commands.`, type: "error" },
      ])
    }

    setInput("")
  }

  const renderSnakeGame = () => {
    const grid = Array(20)
      .fill(null)
      .map(() => Array(30).fill("·"))

    snakeGame.snake.forEach((segment, index) => {
      if (segment.y >= 0 && segment.y < 20 && segment.x >= 0 && segment.x < 30) {
        grid[segment.y][segment.x] = index === 0 ? "◉" : "●"
      }
    })

    grid[snakeGame.food.y][snakeGame.food.x] = "◆"

    return (
      <div className="my-2 font-mono text-xs leading-tight">
        <div className="text-primary mb-1">Score: {snakeGame.score}</div>
        {grid.map((row, i) => (
          <div key={i}>{row.join("")}</div>
        ))}
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-3xl rounded-lg border border-primary/30 bg-background shadow-2xl shadow-primary/20">
        <div className="flex items-center justify-between border-b border-primary/30 bg-card px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 font-mono text-sm text-foreground">fabio@terminal:~$</span>
          </div>
          <button
            onClick={() => {
              setIsOpen(false)
              setIsPlayingSnake(false)
            }}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div ref={terminalRef} className="h-96 overflow-y-auto bg-background p-4 font-mono text-sm">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`mb-1 ${
                line.type === "input"
                  ? "text-primary"
                  : line.type === "error"
                    ? "text-red-400"
                    : line.type === "success"
                      ? "text-green-400"
                      : "text-muted-foreground"
              }`}
            >
              {line.text}
            </div>
          ))}

          {isPlayingSnake && renderSnakeGame()}

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-primary">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground"
              disabled={isPlayingSnake}
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>

        <div className="border-t border-primary/30 bg-card px-4 py-2 text-xs text-muted-foreground">
          Press <kbd className="rounded bg-muted px-1.5 py-0.5">Ctrl</kbd> +{" "}
          <kbd className="rounded bg-muted px-1.5 py-0.5">Shift</kbd> +{" "}
          <kbd className="rounded bg-muted px-1.5 py-0.5">K</kbd> to close
        </div>
      </div>
    </div>
  )
}
