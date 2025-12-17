// cypress/e2e/updateSettings.cy.js

import {
    loadHomepageWithFeed,
    loginUser,
    logoutUser,
    navigateToSettings,
    confirmSettingsPageLoaded,
    modifyUserSettings,
    reloadCurrentPage
} from '../support/commands';

describe('Update Settings Flow', () => {
    it('should update user profile and settings', () => {
        loadHomepageWithFeed();
        loginUser('antoneli.rasa@proton.me', 'hjmFP2a4zErU6nM');
        navigateToSettings();
        confirmSettingsPageLoaded();
        modifyUserSettings('Lorem Ipsum');
        reloadCurrentPage();
        loadHomepageWithFeed();
        logoutUser('antoneli.rasa');
    });
});
