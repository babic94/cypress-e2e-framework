// cypress/e2e/checkFeed.cy.js

import {
    loadHomepageWithFeed,
    loginUser,
    logoutUser,
    publishNewArticle,
    verifyUserFeed,
    verifyGlobalFeed,
    confirmArticleInGlobalFeed,
    removeArticle
} from '../support/commands';

describe('Feed Verification Flow', () => {
    it('should check Your Feed and Global Feed with a created article', () => {
        loadHomepageWithFeed();
        loginUser('antoneli.rasa@proton.me', 'hjmFP2a4zErU6nM');

        publishNewArticle(
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.',
            'dummyTxt'
        );

        loadHomepageWithFeed();
        verifyUserFeed();
        verifyGlobalFeed();
        confirmArticleInGlobalFeed('Lorem Ipsum');
        removeArticle('antoneli.rasa', 'Lorem Ipsum');
        logoutUser('antoneli.rasa');
    });
});
