Atom configuration file

```cson
"*":
  _dart:
    _firstRun: true
    _version: "1.0.1"
  "atom-beautify":
    general:
      _analyticsUserId: "6e51e8da-984d-4436-b49c-1d26d39e7c39"
  "atom-material-ui":
    colors: {}
    ui:
      panelContrast: true
  "autocomplete-plus":
    autoActivationDelay: 500
  core:
    followSymlinks: false
    telemetryConsent: "limited"
    themes: [
      "atom-material-ui"
      "atom-material-syntax-dark"
    ]
  editor:
    fontSize: 20
    preferredLineLength: 100
    showIndentGuide: true
    softWrap: true
    softWrapAtPreferredLineLength: true
    tabType: "soft"
    zoomFontWhenCtrlScrolling: true
  "exception-reporting":
    userId: "c5a1ceaa-4b5c-462b-b5d0-77bc4b56d06b"
  fonts:
    fontFamily: "FiraCode"
  github:
    automaticCommitMessageWrapping: false
  "language-babel":
    autoIndentJSX: true
    emmetCSSAutocomplete: true
  "linter-eslint":
    globalNodePath: "/Users/johanquiroga/.nvm/versions/node/v8.11.2"
    useGlobalEslint: true
  "linter-ui-default":
    panelHeight: 116
  "markdown-preview": {}
  welcome:
    showOnStartup: false
".js.jsx.source":
  editor:
    softWrapHangingIndent: 0
```

Atom custom stylesheet
```less
/*
 * Your Stylesheet
 *
 * This stylesheet is loaded when Atom starts up and is reloaded automatically
 * when it is changed and saved.
 *
 * Add your own CSS or Less to fully customize Atom.
 * If you are unfamiliar with Less, you can read more about it here:
 * http://lesscss.org
 */


/*
 * Examples
 * (To see them, uncomment and save)
 */

// style the background color of the tree view
.tree-view {
  // background-color: whitesmoke;
}

// style the background and foreground colors on the atom-text-editor-element itself
atom-text-editor {
  // color: white;
  // background-color: hsl(180, 24%, 12%);
  text-rendering: optimizeLegibility;
}

// style UI elements inside atom-text-editor
atom-text-editor .cursor {
  // border-color: red;
}

atom-text-editor.editor .syntax--string.syntax--quoted,
atom-text-editor.editor .syntax--string.syntax--regexp {
  -webkit-font-feature-settings: "liga" off, "calt" off;
}
```