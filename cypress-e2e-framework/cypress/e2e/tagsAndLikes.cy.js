// cypress/e2e/tagsAndLike.cy.js

import {
    loadHomepageWithFeed,
    loginUser,
    logoutUser,
    filterByTags,
    verifyGlobalFeed,
    likeArticleAt,
} from '../support/commands';

describe('Search articles by tags and like them', () => {
    it('filters articles by tag and likes one', () => {
        loadHomepageWithFeed();
        loginUser('antoneli.rasa@proton.me', 'hjmFP2a4zErU6nM');
        filterByTags('Zoom');
        verifyGlobalFeed();
        likeArticleAt(1);
        logoutUser('antoneli.rasa');
    });
});
