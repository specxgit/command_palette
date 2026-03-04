import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CommandReference = () => {
  const [selectedCategory, setSelectedCategory] = useState('flutter');
  const [copiedCommand, setCopiedCommand] = useState(null);

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
          command: 'chmod +x build_distribute_mac_prod_with_comments.sh',
          description: 'Make your Flutter build script executable for Mac production [only 1st time]',
          tags: ['permissions', 'flutter', 'macos']
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
          description: 'Open your Zsh config file in the default text editor',
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
    git: {
      general: [
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
      ],
      remote: [
        {
          command: 'git remote -v',
          description: 'List remote names and their fetch/push URLs',
          tags: ['remote', 'info']
        },
        {
          command: 'git remote rename origin home',
          description: 'Rename remote origin to home (replace names as needed)',
          tags: ['remote', 'advanced']
        },
        {
          command: 'git remote add origin http://180.179.15.226/xeye360/client-mobile-app.git',
          description: 'Add a new remote named origin pointing to the given URL',
          tags: ['remote', 'add']
        },
        {
          command: 'git remote remove origin',
          description: 'Remove the remote named origin',
          tags: ['remote', 'remove']
        },
        {
          command: 'git remote set-url origin <new_url>',
          description: 'Change the URL for remote origin (replace <new_url> with the new repository URL)',
          tags: ['remote', 'config']
        },
        {
          command: 'git push origin branchName',
          description: 'Push the specified branch to origin — replace branchName with the branch you are currently on',
          tags: ['remote', 'push']
        }
      ]
    }
  };

  const categories = {
    flutter: { name: 'Flutter', icon: '🖥️' },
    git: { name: 'Git Commands', icon: '📦' }
  };

  const getCount = (key) => {
    const entry = commands[key];
    if (!entry) return 0;
    if (Array.isArray(entry)) return entry.length;
    // entry is an object of subgroups
    return Object.values(entry).reduce((sum, arr) => sum + (arr?.length || 0), 0);
  };

  const copyToClipboard = (command, index) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(index);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Navigation Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 shadow-sm">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Command Hub</h1>
          <p className="text-sm text-gray-500">Click to copy commands</p>
        </div>
        
        <nav className="px-3">
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                selectedCategory === key
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{categories[key].icon}</span>
              {categories[key].name}
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                selectedCategory === key ? 'bg-blue-600' : 'bg-gray-200'
              }`}>
                {getCount(key)}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto p-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {categories[selectedCategory].name}
          </h2>
          <p className="text-gray-500">Click any command to copy it to your clipboard</p>
        </div>

        {/* Commands Grid */}
        <div className="space-y-6">
          {Array.isArray(commands[selectedCategory]) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
              {commands[selectedCategory].map((cmd, index) => (
                <div
                  key={index}
                  onClick={() => copyToClipboard(cmd.command, index)}
                  className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer group relative"
                >
                  <div className="absolute top-3 right-3">
                    {copiedCommand === index ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    )}
                  </div>

                  <div className="mb-3 pr-8">
                    <code className="text-sm font-mono bg-gray-50 text-gray-800 px-3 py-2 rounded block break-all">
                      {cmd.command}
                    </code>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{cmd.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {cmd.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {copiedCommand === index && (
                    <div className="absolute inset-0 bg-green-50 bg-opacity-90 rounded-lg flex items-center justify-center">
                      <div className="text-green-600 font-semibold flex items-center gap-2">
                        <Check className="w-6 h-6" />
                        Copied!
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            Object.entries(commands[selectedCategory]).map(([sub, list]) => (
              <div key={sub}>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  {sub.charAt(0).toUpperCase() + sub.slice(1)}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                  {list.map((cmd, idx) => {
                    const index = `${sub}-${idx}`;
                    return (
                      <div
                        key={index}
                        onClick={() => copyToClipboard(cmd.command, index)}
                        className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer group relative"
                      >
                        <div className="absolute top-3 right-3">
                          {copiedCommand === index ? (
                            <Check className="w-5 h-5 text-green-500" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                          )}
                        </div>

                        <div className="mb-3 pr-8">
                          <code className="text-sm font-mono bg-gray-50 text-gray-800 px-3 py-2 rounded block break-all">
                            {cmd.command}
                          </code>
                        </div>

                        <p className="text-sm text-gray-600 mb-3">{cmd.description}</p>

                        <div className="flex flex-wrap gap-1">
                          {cmd.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {copiedCommand === index && (
                          <div className="absolute inset-0 bg-green-50 bg-opacity-90 rounded-lg flex items-center justify-center">
                            <div className="text-green-600 font-semibold flex items-center gap-2">
                              <Check className="w-6 h-6" />
                              Copied!
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandReference;