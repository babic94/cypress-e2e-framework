

export const MainView = {
    navigation: {
        loginLink: '[routerlink="/login"]',
        homepageLink: 'a.nav-link[href="/"]',
        userSettings: 'a.nav-link[href="/settings"]',
        userProfile: username => `a.nav-link[href^="/profile/${username}"]`,
        favoriteBtn: 'button.btn.btn-sm.btn-outline-primary',
    },
    feed: {
        userFeedTab: 'a.nav-link',
        globalFeedTab: 'a.nav-link',
        previewCard: '.article-preview',
        topArticleTitle: '.article-preview h1',
        tagSection: '.sidebar .tag-list',
        tagItem: 'a.tag-pill',
        activeTagTab: 'a.nav-link.active',
        articleTagList: '.article-preview .tag-list',
    },
};

export const LoginView = {
    emailField: '[formcontrolname="email"]',
    passwordField: '[formcontrolname="password"]',
    loginBtn: '.btn.btn-lg.btn-primary.pull-xs-right',
    logoutBtn: '.btn.btn-outline-danger',
};

export const ArticleEditor = {
    inputTitle: '[formcontrolname="title"]',
    inputSummary: '[formcontrolname="description"]',
    inputBody: '[formcontrolname="body"]',
    inputTags: 'input[placeholder="Enter tags"]',
    publishBtn: 'button.btn.btn-lg.pull-xs-right.btn-primary',
};

export const ArticleView = {
    createNew: '[routerlink="/editor"]',
    editPost: 'a.btn',
    removePost: 'button.btn-outline-danger',
    likePostByIndex: index => `button.btn.btn-sm.btn-outline-primary:eq(${index})`,
};

export const ProfileSettings = {
    openSettings: '.btn-outline-secondary.action-btn',
    bioField: '[formcontrolname="bio"]',
    saveChanges: 'button[type="submit"]',
    profileArticleTitle: 'a.preview-link h1',
    profileImageInput: '[formcontrolname="image"]',
    changeUsername: '[formcontrolname="username"]',
    changeEmail: 'input[formcontrolname="email"]',
    newPassword: 'input[formcontrolname="password"]',
};
