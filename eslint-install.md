Commands to install ESLint configs globally using [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and some extra plugins.

```bash
npx install-peerdeps -g eslint-config-airbnb
npm i -g eslint-plugin-html eslint-plugin-markdown
touch ~/.eslintrc && curl https://raw.githubusercontent.com/johanquiroga/dotfiles/master/.eslintrc.default >> ~/.eslintrc
```

After executing the commands, copy the content of the [ESLint global config file](./.eslintrc.default) and paste it in the file created previously `~/.eslintrc`