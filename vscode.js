{
  "nativescript.analytics.enabled": false,
  "atomKeymap.promptV3Features": true,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.formatOnPaste": true,
  "materialTheme.fixIconsRunning": false,
  "workbench.iconTheme": "eq-material-theme-icons-darker",
  "editor.fontSize": 18,
  "editor.letterSpacing": 0,
  "editor.fontLigatures": true,
  // Install Fira Code. @see https://github.com/tonsky/FiraCode
  "editor.fontFamily": "'Fira Code','Operator Mono', Menlo, Monaco, 'Courier New', monospace",
  "editor.wordWrap": "on",
  "editor.renderWhitespace": "none",
  "editor.tabSize": 2,
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 3,
  "editor.colorDecorators": false,
  "editor.fontWeight": "400",
  "editor.scrollBeyondLastLine": false,
  "files.trimTrailingWhitespace": true,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.next": true,
    "**/.idea": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "breadcrumbs.enabled": true,
  "workbench.activityBar.visible": true,
  "workbench.sideBar.location": "left",
  "workbench.startupEditor": "newUntitledFile",
  "gitlens.codeLens.recentChange.enabled": false,
  "gitlens.codeLens.authors.enabled": false,
  "gitlens.hovers.currentLine.over": "line",
  "gitlens.currentLine.enabled": true,
  "gitlens.hovers.currentLine.enabled": false,
  "workbench.colorTheme": "Material Theme Darker High Contrast",
  "cSpell.language": "en,es",
  // These are all my auto-save configs
  "editor.formatOnSave": true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  // Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
  "prettier.disableLanguages": ["javascript", "javascriptreact"],
  "workbench.editor.enablePreviewFromQuickOpen": false,
  // show snippets before any other auto completion
  "editor.snippetSuggestions": "top",
  "php.suggest.basic": false,
  "php-cs-fixer.executablePath": "${extensionPath}/php-cs-fixer.phar",
  "php-cs-fixer.lastDownload": 1535577073578,
  "workbench.statusBar.visible": true,
  "files.associations": {
    "*.js": "javascript"
  },
  "gitlens.mode.active": "review"
}
