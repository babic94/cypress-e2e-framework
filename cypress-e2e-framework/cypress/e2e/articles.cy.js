// cypress/e2e/newArticle.cy.js

import {
    loadHomepageWithFeed,
    loginUser,
    publishNewArticle,
    updateArticle,
    removeArticle,
    logoutUser
} from '../support/commands';

describe('Create, Edit & Delete Article', () => {
    it('should create, edit and delete an article', () => {
        loadHomepageWithFeed();
        loginUser('antoneli.rasa@proton.me', 'hjmFP2a4zErU6nM');
        publishNewArticle('lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum');
        updateArticle('antoneli.rasa', 'lorem ipsum', 'Jhon Doe', 'Jhon Doe', 'Jhon Doe');
        removeArticle('antoneli.rasa', 'Jhon Doe');
        loadHomepageWithFeed();
        logoutUser('antoneli.rasa');
    });
});
