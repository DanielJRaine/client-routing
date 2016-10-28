'use strict';

const router = require('./index');

const routes = router.rootNode.children.map((route) => {
  return route.name;
});

const registerPaths = () => {
  routes.forEach((path) => {
    $(`a[href="${path}"]`).on('click', (event) => {
      event.preventDefault();
      router.navigate
    });
  });
};

module.exports = {
  registerPaths,
};