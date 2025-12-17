// cypress/support/commands.js
import {
  MainView,
  LoginView,
  ArticleEditor,
  ArticleView,
  ProfileSettings
} from './selectors';

// =============================
// Navigation & Auth helpers
// =============================

export function loadHomepageWithFeed() {
  cy.intercept('GET', '**/articles*').as('getArticles');
  cy.visit('/');
  cy.wait('@getArticles');
  cy.get(MainView.feed.previewCard, { timeout: 10000 }).should('exist');
}

export function loginUser(email, password) {
  cy.get(MainView.navigation.loginLink, { timeout: 10000 }).click();
  cy.get(LoginView.emailField, { timeout: 10000 })
    .type(email)
    .should('have.value', email);
  cy.get(LoginView.passwordField, { timeout: 10000 })
    .type(password)
    .should('have.value', password);
  cy.get(LoginView.loginBtn, { timeout: 10000 }).click();
  cy.wait(1000);
}

export function logoutUser(profileName) {
  cy.visit(`/profile/${profileName}`);
  cy.url({ timeout: 10000 }).should('include', `/profile/${profileName}`);
  cy.get(ProfileSettings.openSettings, { timeout: 10000 }).click();
  cy.get(LoginView.logoutBtn, { timeout: 10000 }).click();
}

export function openUserProfile(username) {
  cy.get(MainView.navigation.userProfile(username), { timeout: 10000 }).click();
}

// =============================
// Article helpers
// =============================

export function publishNewArticle(title, summary, bodyText, tags) {
  cy.get(ArticleView.createNew, { timeout: 10000 }).click();
  cy.get(ArticleEditor.inputTitle, { timeout: 10000 }).type(title);
  cy.get(ArticleEditor.inputSummary, { timeout: 10000 }).type(summary);
  cy.get(ArticleEditor.inputBody, { timeout: 10000 }).type(bodyText);
  cy.get(ArticleEditor.inputTags, { timeout: 10000 }).type(tags);
  cy.get(ArticleEditor.publishBtn, { timeout: 10000 }).click();
}

export function updateArticle(profile, currentTitle, newTitle, newDesc, newBody) {
  cy.visit(`/profile/${profile}`);
  cy.contains(ProfileSettings.profileArticleTitle, currentTitle, { timeout: 10000 }).click();
  cy.contains(ArticleView.editPost, 'Edit Article', { timeout: 10000 }).click();

  cy.get(ArticleEditor.inputTitle, { timeout: 10000 }).clear().type(newTitle);
  cy.get(ArticleEditor.inputSummary, { timeout: 10000 }).clear().type(newDesc);
  cy.get(ArticleEditor.inputBody, { timeout: 10000 }).clear().type(newBody);
  cy.get(ArticleEditor.publishBtn, { timeout: 10000 }).click();
}

export function removeArticle(profile, articleTitle) {
  cy.visit(`/profile/${profile}`);
  cy.contains(ProfileSettings.profileArticleTitle, articleTitle, { timeout: 10000 }).click();
  cy.contains(ArticleView.removePost, 'Delete Article', { timeout: 10000 }).click();
}

// =============================
// Feed helpers
// =============================

export function switchToUserFeed() {
  cy.intercept('GET', '**/articles/feed*').as('getUserFeed');
  cy.contains(MainView.feed.userFeedTab, 'Your Feed', { timeout: 10000 }).click();
  cy.wait('@getUserFeed');

  cy.get(MainView.feed.previewCard, { timeout: 10000 }).then(cards => {
    if (cards.length) {
      cy.log('Articles available in user feed');
    } else {
      cy.contains('No articles are here... yet.', { timeout: 5000 }).should('be.visible');
    }
  });
}

export function switchToGlobalFeed() {
  cy.intercept('GET', '**/articles?*').as('getGlobalFeed');
  cy.contains(MainView.feed.globalFeedTab, 'Global Feed', { timeout: 10000 }).click();
  cy.wait('@getGlobalFeed');
  cy.get(MainView.feed.previewCard, { timeout: 10000 }).should('exist');
}

export function checkArticleInFeed(articleTitle) {
  cy.intercept('GET', '**/articles?*').as('getGlobalFeed');
  cy.contains(MainView.feed.globalFeedTab, 'Global Feed', { timeout: 10000 }).click();
  cy.wait('@getGlobalFeed');

  cy.get(MainView.feed.previewCard, { timeout: 10000 }).should('exist');
  cy.contains(MainView.feed.topArticleTitle, articleTitle, { timeout: 10000 }).should('be.visible');
}

// =============================
// Settings helpers
// =============================

export function openProfileSettings() {
  cy.get(MainView.navigation.userSettings, { timeout: 10000 }).click();
  cy.get(ProfileSettings.profileImageInput, { timeout: 10000 }).should('be.visible');
  cy.get(ProfileSettings.changeUsername, { timeout: 10000 }).should('be.visible');
}

export function validateSettingsForm() {
  cy.get(ProfileSettings.profileImageInput, { timeout: 10000 })
    .should('have.attr', 'placeholder', 'URL of profile picture');

  cy.get(ProfileSettings.changeUsername, { timeout: 10000 })
    .should('have.attr', 'placeholder', 'Username');

  cy.get(ProfileSettings.bioField, { timeout: 10000 })
    .should('have.attr', 'placeholder', 'Short bio about you');

  cy.get(ProfileSettings.changeEmail, { timeout: 10000 })
    .should('have.attr', 'placeholder', 'Email');

  cy.get(ProfileSettings.newPassword, { timeout: 10000 })
    .should('have.attr', 'placeholder', 'New Password');

  cy.get(ProfileSettings.saveChanges, { timeout: 10000 })
    .should('have.class', 'btn-primary')
    .and('have.css', 'background-color', 'rgb(92, 184, 92)');
}

export function saveBioUpdate(bioText) {
  cy.get(ProfileSettings.bioField, { timeout: 10000 })
    .clear()
    .type(bioText)
    .should('have.value', bioText);

  cy.get(ProfileSettings.saveChanges, { timeout: 10000 }).click();
  cy.contains('p', bioText, { timeout: 10000 }).should('be.visible');
}

// =============================
// Utilities
// =============================

export function reloadApp() {
  cy.reload();
  cy.contains('a.nav-link', 'Home', { timeout: 10000 }).should('be.visible');
}

export function filterByTags(tags) {
  const validTags = (Array.isArray(tags) ? tags : [tags])
    .map(t => typeof t === 'string' ? t.trim() : '')
    .filter(Boolean);

  if (!validTags.length) throw new Error('Invalid tag list provided.');

  cy.visit('/');
  cy.get(MainView.feed.tagSection, { timeout: 10000 }).should('be.visible');

  validTags.forEach(tag => {
    cy.get(MainView.feed.tagSection)
      .contains(MainView.feed.tagItem, tag, { timeout: 10000 })
      .click();

    cy.contains(MainView.feed.tagItem, tag)
      .should('have.class', 'tag-pill');

    cy.get(MainView.feed.previewCard, { timeout: 10000 }).should('exist');

    cy.get(MainView.feed.previewCard).first().within(() => {
      cy.get('ul.tag-list li.tag-pill', { timeout: 10000 })
        .should('contain.text', tag);
    });

    cy.get(MainView.feed.activeTagTab, { timeout: 10000 })
      .should('contain.text', tag)
      .and('have.class', 'active');
  });
}

export function likeArticleAt(index) {
  const idx = index - 1;
  cy.get(MainView.feed.previewCard, { timeout: 10000 })
    .should('have.length.greaterThan', idx);

  cy.get(MainView.navigation.favoriteBtn, { timeout: 10000 })
    .eq(idx)
    .click();
}
