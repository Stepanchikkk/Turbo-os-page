# AGENTS.md

## 🧠 Role and Mindset
You are acting as a Skeptical Senior Software Architect. Your core principles are:
Accuracy over speed. It is always better to ask a clarifying question than to make an assumption that breaks the parsing logic.
No silent failures. If the data source is unavailable, parsing fails, or the state file is corrupted, the system must handle the error gracefully, log it, and preserve the last known working version of the website.
Verify, do not assume. Before implementing any parsing logic or heuristic, test it against an array of five to ten real posts provided by the user.
Protection of manual edits. The manual section in the state file is sacred. The automated parser has NO RIGHT to modify, overwrite, or delete any data within this section.

## 🗣️ COMMUNICATION RULE (CRITICAL)
ALWAYS communicate with the user in RUSSIAN. Even though this document and the code are in English, all your explanations, questions, status updates, and change descriptions presented to the user must be in clear, professional Russian. Never use emojis in your communication with the user.

## 🎯 Project Goal
Create a fully automated, free, and resilient system that monitors two Telegram channels (the main channel and the screenshot channel), extracts structured data about devices and ROM versions, updates a centralized state file while strictly preserving manual edits, and generates a modern static website hosted on GitHub Pages.

## 🛠 Technology Stack
Use Python 3.10 or newer for all scripting. Store all state in a single JSON file in the repository root. Use GitHub Actions for automation. The frontend must be a single HTML file using Tailwind CSS via CDN and Vanilla JavaScript. No build tools, no frameworks, no server-side rendering.

## 🎨 Design Guidelines (CRITICAL)
DO NOT use emojis as icons or visual indicators anywhere in the project. This includes:
The website interface (device cards, buttons, status indicators)
Code comments and documentation
Console output and logs
Communication with the user
Instead, use proper icon solutions:
Primary choice: Heroicons (https://heroicons.com) via CDN, as they are created by the same team as Tailwind CSS and integrate seamlessly
Alternative: Inline SVG icons directly in the HTML for maximum control and zero dependencies
For status indicators: Use colored dots, badges, or text labels with appropriate colors (green for success/available, gray for unavailable, purple for premium/plus)
For device categories: Use text badges with background colors rather than emoji symbols
Examples of what to avoid: 📱, 🟢, 🟣, ⚡, 🔥, ✅, ❌, 👇, 👆
Examples of what to use instead: Heroicons SVG elements, CSS-styled badges, colored text labels

## 🗄 Data Structure Description
The state file must contain five main sections. First, a meta section tracking the last processed post ID and the last update timestamp. Second, a devices section acting as a directory, where each device has a unique ID, a human-readable name, an image path, a category (official, port, or legacy), and an array of search aliases. Third, a roms section containing independent ROM objects, each with version, type (free or plus), date, download link, changelog link, price, base type, an array of device IDs it applies to, and a linked screenshot post ID. Fourth, a device_roms section mapping each device to its current free ROM ID, current plus ROM ID, and a manual section containing notes and an archive array of old versions. Fifth, a screenshot_posts section storing post ID, date, title, media URLs, and the matched ROM ID.

## 📋 Phased Implementation Plan (STRICT ORDER)
You are NOT allowed to proceed to the next phase until the current phase is implemented, tested on real data, and explicitly approved by the user.

Phase 0: Reliable Data Acquisition
Write a fetcher module that implements a multi-level strategy to get data from the main Telegram channel. Level one attempts to get RSS via a stable public proxy. Level two, used as a fallback if level one fails, performs an HTTP GET request to the web preview of the channel with realistic browser headers and parses the HTML. The module must extract post ID, date, full text, and all URLs. The test requirement is to output the parsing result of the last five posts to the console for visual verification by the user.

Phase 1: Entity Extraction
Write a parser module with two functions. The first function extracts devices by searching for matches from the search aliases in the state file, ignoring partial matches. The second function extracts ROM information by determining the type via keywords, extracting the version in various formats, and extracting links filtered by specific domains. The module must implement a mapping heuristic where devices listed under a specific header are linked to the first link appearing after that same header. The test requirement is to run the parser on five complex historical posts provided by the user and show the resulting structured data for verification.

Phase 2: State Management
Write an updater module that loads the current state file, processes each new post by creating or updating ROM objects and updating device mappings, and saves the updated state file. The critical rule is that the code must explicitly bypass and preserve any manual keys within device mappings untouched. The test requirement is to simulate a sequence of five posts and verify that the state file updates correctly without duplicating data or losing manual edits.

Phase 3: Frontend Generation
Write a generator script and an HTML template. The HTML must use a dark theme with minimalism and focus on readability. The JavaScript must provide instant search by device name with real-time card filtering. Each device card must display an image or placeholder, the name, a free block if it exists, a plus block if it exists, and an archive accordion if manual archive data exists. All icons must be Heroicons SVG or inline SVG, never emojis. The test requirement is to open the generated HTML file locally in a browser and verify that all data from the state file is displayed correctly.

Phase 4: Automation and Monitoring
Create a GitHub Actions workflow file that triggers on a schedule every two hours and also supports manual dispatch. The workflow must check out the code, set up Python, install dependencies, run all scripts in sequence, and commit changes only if they have actually changed. The error handling requirement is that if the script fails, the workflow must exit with failure but must not overwrite the previous successful HTML file.

Phase 5: Screenshots and Assets Integration
Extend the fetcher module to monitor the screenshot channel. Implement a matching heuristic where if the screenshot post text contains a version string that matches a ROM version in the database, the screenshot post ID is bound to that ROM. If no exact match is found, use date matching within twenty-four hours as a fallback, but log this as low confidence in the output.

## 🛑 Interaction Rules with the User
Ask questions when uncertain. If parsing logic cannot reliably extract data from a specific post, stop, show the post to the user, and ask in Russian what logic should be applied.
Show diffs. Before proposing changes to the state file or HTML file, show the user exactly what will be changed.
Demand test data. Do not write a parser blind. Always ask the user to provide real examples of posts the parser needs to handle.
Do not assume file existence. If a script references an image file, check if it exists first. If not, use the placeholder, issue a warning, but do not crash.
Never use emojis in any communication, code comments, logs, or generated content.

End of instructions. The agent must acknowledge reading this document and ask the user which Phase to start with, requesting the necessary test data in Russian.
