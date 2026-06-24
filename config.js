/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Mummy & Pappa ❤️",
  photo: "./img/photo.jpeg",       // Place your photo in the img/ folder
  music: "./music/hbd.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
       type: "greeting",
       title: "Happy Anniversary",
       subtitle: "Today we celebrate your beautiful journey together!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Happy Wedding Anniversary, Mummy & Pappa! 💖",
    },
    {
      type: "chatbox",
      message:"Happy Anniversary, Mummy & Pappa! ❤️ Thank you for showing us what true love, care, and togetherness look like. Wishing you many more years of happiness, good health, and beautiful memories together. 💕🥰",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
           "Today isn't just another day...",
    "It's a celebration of your love.",
    "A journey filled with happiness, trust, and togetherness.",
    "Thank you for being the best parents.",
    "May your bond grow stronger every year. ❤️",
      ],
      bigLetters: "LOVE",
    },
    {
      type: "",
      text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
      
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Anniversary ❤️",
      wishText:"Dear Mummy & Pappa,\nThank you for filling our lives with love, care, and endless support. May God bless you with many more years of togetherness, happiness, and good health. We love you both so much! ❤️🥰",

    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "I hope this little surprise brings a smile to your faces. Wishing you both a lifetime of love, laughter, and happiness. Happy Anniversary! ❤️",
      replayText: "Click here to relive the surprise! 🎉", 
    },
  ],
};
