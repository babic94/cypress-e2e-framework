// cypress/e2e/login.cy.js

import {
    loadHomepageWithFeed,
    loginUser,
    logoutUser
} from '../support/commands';

describe('User Login and Logout Flow', () => {
    it('logs in and logs out successfully', () => {
        loadHomepageWithFeed();
        loginUser('antoneli.rasa@proton.me', 'hjmFP2a4zErU6nM');
        loadHomepageWithFeed();
        logoutUser('antoneli.rasa');
    });
});
