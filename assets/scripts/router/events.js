'use strict';

const ui = require('./ui');

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