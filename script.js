// Commands data
const commands = {
    flutter: {
        project: [
            {
                command: 'flutter doctor',
                description: 'Check your Flutter setup for any issues',
                tags: ['flutter', 'doctor', 'setup']
            },
            {
                command: 'flutter pub get',
                description: 'Fetch all Dart and Flutter package dependencies',
                tags: ['flutter', 'packages', 'pub']
            },
            {
                command: 'flutter clean',
                description: 'Clean build artifacts to fix weird build issues',
                tags: ['flutter', 'clean', 'build']
            },
            {
                command: 'flutter run',
                description: 'Run the Flutter app on a connected device or emulator',
                tags: ['flutter', 'run', 'dev']
            },
            {
                command: 'flutter build apk --release',
                description: 'Create a release APK for Android',
                tags: ['flutter', 'build', 'android']
            },
            {
                command: 'chmod +x filename.sh',
                description: 'Make any .sh file executable (replace filename.sh with your actual file name) [only 1st time]',
                tags: ['permissions', 'shell', 'macos']
            }
        ],
        zshrc: [
            {
                command: 'nano ~/.zshrc',
                description: 'Open your Zsh config file in the nano editor',
                tags: ['zsh', 'config', 'editor', 'nano']
            },
            {
                command: 'open -e ~/.zshrc',
                description: 'Open your Zsh config file in the default text editor (TextEdit on macOS)',
                tags: ['zsh', 'config', 'editor', 'gui']
            },
            {
                command: 'source ~/.zshrc',
                description: 'Reload your Zsh config so changes take effect',
                tags: ['zsh', 'config', 'reload']
            },
            {
                command: 'export PATH=\"$PATH:$HOME/development/flutter/bin\"',
                description: 'Add Flutter SDK to your PATH inside .zshrc (adjust path as needed)',
                tags: ['zsh', 'config', 'flutter', 'path']
            }
        ]
    },
    git: [
        {
            command: 'git status',
            description: 'Check the status of your repository',
            tags: ['status', 'basic']
        },
        {
            command: 'git add .',
            description: 'Stage all changes for commit',
            tags: ['staging', 'basic']
        },
        {
            command: 'git add <file>',
            description: 'Stage specific file for commit',
            tags: ['staging', 'basic']
        },
        {
            command: 'git commit -m "message"',
            description: 'Commit staged changes with a message',
            tags: ['commit', 'basic']
        },
        {
            command: 'git push',
            description: 'Push commits to remote repository',
            tags: ['remote', 'basic']
        },
        {
            command: 'git add . && git commit -m "message" && git push',
            description: 'Stage, commit, and push all changes in one command (requires remote Git set up)',
            tags: ['staging', 'commit', 'push', 'shortcut']
        },
        {
            command: 'git pull',
            description: 'Pull latest changes from remote',
            tags: ['remote', 'basic']
        },
        {
            command: 'git clone <url>',
            description: 'Clone a repository from URL',
            tags: ['clone', 'basic']
        },
        {
            command: 'git branch',
            description: 'List all local branches',
            tags: ['branch', 'basic']
        },
        {
            command: 'git checkout -b <branch>',
            description: 'Create and switch to new branch',
            tags: ['branch', 'checkout']
        },
        {
            command: 'git merge <branch>',
            description: 'Merge specified branch into current branch',
            tags: ['branch', 'merge']
        },
        {
            command: 'git log',
            description: 'View commit history',
            tags: ['history', 'log']
        },
        {
            command: 'git diff',
            description: 'Show changes between commits/branches',
            tags: ['diff', 'changes']
        },
        {
            command: 'git reset --hard HEAD',
            description: 'Discard all local changes',
            tags: ['reset', 'advanced']
        },
        {
            command: 'git stash',
            description: 'Temporarily save changes',
            tags: ['stash', 'advanced']
        },
        {
            command: 'git stash pop',
            description: 'Apply stashed changes',
            tags: ['stash', 'advanced']
        }
    ]
};

// Categories configuration
const categories = {
    flutter: { name: 'Flutter', icon: '🖥️' },
    git: { name: 'Git Commands', icon: '📦' }
};

// Current selected category and subsection
let selectedCategory = 'flutter';
let selectedSubsection = 'project';

// SVG Icons
const copyIconSVG = `<svg class="copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke-width="2"></path></svg>`;

const checkIconSVG = `<svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke-width="2"></polyline></svg>`;

// Helper to count commands for a category (supports sub-groups)
function getCount(key) {
    const entry = commands[key];
    if (!entry) return 0;
    if (Array.isArray(entry)) return entry.length;
    return Object.values(entry).reduce((sum, arr) => sum + (arr?.length || 0), 0);
}

function getSubsectionLabel(categoryKey, subKey) {
    if (categoryKey === 'flutter' && subKey === 'project') return 'Project';
    if (categoryKey === 'flutter' && subKey === 'zshrc') return '.zshrc';
    // Fallback: capitalize
    return subKey.charAt(0).toUpperCase() + subKey.slice(1);
}

// Render navigation sidebar (with subsections under Flutter)
function renderNavigation() {
    const nav = document.getElementById('navigation');
    nav.innerHTML = '';

    Object.keys(categories).forEach(key => {
        const entry = commands[key];

        // Section title (Flutter / Git Commands)
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'nav-section-title';
        sectionTitle.innerHTML = `
            <span class="nav-icon">${categories[key].icon}</span>
            <span>${categories[key].name}</span>
        `;
        nav.appendChild(sectionTitle);

        // If this category has sub-groups (like Flutter)
        if (!Array.isArray(entry)) {
            Object.entries(entry).forEach(([subKey, list]) => {
                const isActive = selectedCategory === key && selectedSubsection === subKey;
                const button = document.createElement('button');
                button.className = `nav-button nav-sub-button ${isActive ? 'active' : ''}`;
                button.onclick = () => selectCategory(key, subKey);

                button.innerHTML = `
                    <div class="nav-button-left">
                        <span>${getSubsectionLabel(key, subKey)}</span>
                    </div>
                    <span class="nav-badge">${list.length || 0}</span>
                `;

                nav.appendChild(button);
            });
        } else {
            // Flat category (like Git)
            const isActive = selectedCategory === key;
            const button = document.createElement('button');
            button.className = `nav-button ${isActive ? 'active' : ''}`;
            button.onclick = () => selectCategory(key, null);

            button.innerHTML = `
                <div class="nav-button-left">
                    <span>${categories[key].name}</span>
                </div>
                <span class="nav-badge">${entry.length}</span>
            `;

            nav.appendChild(button);
        }
    });
}

// Render commands grid
function renderCommands() {
    const grid = document.getElementById('commandsGrid');
    const title = document.getElementById('categoryTitle');
    
    title.textContent = categories[selectedCategory].name;
    grid.innerHTML = '';

    const entry = commands[selectedCategory];

    // Flat category (Git)
    if (Array.isArray(entry)) {
        entry.forEach(cmd => {
            const card = document.createElement('div');
            card.className = 'command-card';
            card.onclick = () => copyCommand(cmd.command, card);

            const tagsHTML = cmd.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            card.innerHTML = `
                ${copyIconSVG}
                <div class="command-code">${cmd.command}</div>
                <div class="command-description">${cmd.description}</div>
                <div class="command-tags">${tagsHTML}</div>
                <div class="copied-overlay">
                    ${checkIconSVG}
                    <span>Copied!</span>
                </div>
            `;

            grid.appendChild(card);
        });
        return;
    }

    // Category with sub-groups (Flutter) – show only selected subsection
    const list = selectedSubsection && entry[selectedSubsection] ? entry[selectedSubsection] : [];

    const section = document.createElement('div');

    const heading = document.createElement('h3');
    heading.className = 'subsection-title';
    heading.textContent = getSubsectionLabel(selectedCategory, selectedSubsection || '');
    section.appendChild(heading);

    const sectionGrid = document.createElement('div');
    sectionGrid.className = 'commands-grid';

    list.forEach(cmd => {
        const card = document.createElement('div');
        card.className = 'command-card';
        card.onclick = () => copyCommand(cmd.command, card);

        const tagsHTML = cmd.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            ${copyIconSVG}
            <div class="command-code">${cmd.command}</div>
            <div class="command-description">${cmd.description}</div>
            <div class="command-tags">${tagsHTML}</div>
            <div class="copied-overlay">
                ${checkIconSVG}
                <span>Copied!</span>
            </div>
        `;

        sectionGrid.appendChild(card);
    });

    section.appendChild(sectionGrid);
    grid.appendChild(section);
}

// Select category + optional subsection
function selectCategory(category, subsection) {
    selectedCategory = category;

    const entry = commands[category];
    if (!Array.isArray(entry)) {
        // Category with sub-groups – default to first if none provided
        const keys = Object.keys(entry);
        selectedSubsection = subsection || keys[0];
    } else {
        selectedSubsection = null;
    }

    renderNavigation();
    renderCommands();

    // Update mobile header title
    const mobileHeaderTitle = document.getElementById('mobileHeaderTitle');
    if (mobileHeaderTitle) {
        mobileHeaderTitle.textContent = categories[category].name;
    }

    // Close mobile menu when category is selected
    if (window.innerWidth <= 768) {
        closeMobileMenu();
    }
}

// Copy command to clipboard
function copyCommand(command, cardElement) {
    navigator.clipboard.writeText(command).then(() => {
        const overlay = cardElement.querySelector('.copied-overlay');
        overlay.classList.add('show');
        
        setTimeout(() => {
            overlay.classList.remove('show');
        }, 2000);
    });
}

// Mobile menu functions
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobileOverlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobileOverlay');
    
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
}

// Initialize the app
renderNavigation();
renderCommands();