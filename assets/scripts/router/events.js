'use strict';

const router = require('./index');
const ui = require('./ui');

const routes = router.rootNode.children.map((route) => {
  return route.name;
});

const registerPaths = () => {
  require('./paths').forEach((path) => {
    $(`a[href="${path}"]`).on('click', (event) => {
      event.preventDefault();

      ui.hideAllContent();
      ui.showContent(path);
    });
  });
};

module.exports = {
  registerPaths,
};