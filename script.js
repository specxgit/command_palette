// Commands data
const commands = {
    shell: [
        {
            command: 'chmod +x filename.sh',
            description: 'Make any .sh file executable (replace filename.sh with your actual file name) [only 1st time]',
            tags: ['permissions', 'shell', 'macos']
        }
    ],
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
    shell: { name: 'Flutter & Shell', icon: '🖥️' },
    git: { name: 'Git Commands', icon: '📦' }
};

// Current selected category
let selectedCategory = 'shell';

// SVG Icons
const copyIconSVG = `<svg class="copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke-width="2"></path></svg>`;

const checkIconSVG = `<svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke-width="2"></polyline></svg>`;

// Render navigation sidebar
function renderNavigation() {
    const nav = document.getElementById('navigation');
    nav.innerHTML = '';
    
    Object.keys(categories).forEach(key => {
        const button = document.createElement('button');
        button.className = `nav-button ${selectedCategory === key ? 'active' : ''}`;
        button.onclick = () => selectCategory(key);
        
        button.innerHTML = `
            <div class="nav-button-left">
                <span class="nav-icon">${categories[key].icon}</span>
                <span>${categories[key].name}</span>
            </div>
            <span class="nav-badge">${commands[key].length}</span>
        `;
        
        nav.appendChild(button);
    });
}

// Render commands grid
function renderCommands() {
    const grid = document.getElementById('commandsGrid');
    const title = document.getElementById('categoryTitle');
    
    title.textContent = categories[selectedCategory].name;
    grid.innerHTML = '';
    
    commands[selectedCategory].forEach((cmd, index) => {
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
}

// Select category
function selectCategory(category) {
    selectedCategory = category;
    renderNavigation();
    renderCommands();
    
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