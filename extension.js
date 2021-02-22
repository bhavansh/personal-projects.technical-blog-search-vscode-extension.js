const vscode = require("vscode");

const BlogList = [
    {
        label: "hackr.io",
        detail: "https://hackr.io/blog",
        link: "https://hackr.io/blog",
    },
    {
        label: "dev.to",
        detail: "https://dev.to/",
        link: "https://dev.to/",
    },
    {
        label: "hackernoon.com",
        detail: "https://hackernoon.com/",
        link: "https://hackernoon.com/",
    },
    {
        label: "livecodestream.dev",
        detail: "https://livecodestream.dev/",
        link: "https://livecodestream.dev/",
    },
    {
        label: "www.thedroidsonroids.com",
        detail: "https://www.thedroidsonroids.com/blog",
        link: "https://www.thedroidsonroids.com/blog",
    },
    {
        label: "davidwalsh.name",
        detail: "https://davidwalsh.name/",
        link: "https://davidwalsh.name/",
    },
    {
        label: "realpython.com",
        detail: "https://realpython.com/",
        link: "https://realpython.com/",
    },
    {
        label: "www.golangprograms.com",
        detail: "https://www.golangprograms.com/",
        link: "https://www.golangprograms.com/",
    },
    {
        label: "stackabuse.com",
        detail: "https://stackabuse.com/",
        link: "https://stackabuse.com/",
    },
    {
        label: "towardsdatascience.com",
        detail: "https://towardsdatascience.com/",
        link: "https://towardsdatascience.com/",
    },
    {
        label: "www.freecodecamp.org",
        detail: "https://www.freecodecamp.org/news/",
        link: "https://www.freecodecamp.org/news/",
    },
    {
        label: "blog.angular.io",
        detail: "https://blog.angular.io/",
        link: "https://blog.angular.io/",
    },
    {
        label: "codeburst.io",
        detail: "https://codeburst.io/",
        link: "https://codeburst.io/",
    },
    {
        label: "levelup.gitconnected.com",
        detail: "https://levelup.gitconnected.com/",
        link: "https://levelup.gitconnected.com/",
    },
    {
        label: "code.likeagirl.io",
        detail: "https://code.likeagirl.io/",
        link: "https://code.likeagirl.io/",
    },
    {
        label: "proandroiddev.com",
        detail: "https://proandroiddev.com/",
        link: "https://proandroiddev.com/",
    },
    {
        label: "itnext.io",
        detail: "https://itnext.io/",
        link: "https://itnext.io/",
    },
    {
        label: "js.plainenglish.io",
        detail: "https://js.plainenglish.io/",
        link: "https://js.plainenglish.io/",
    },
    {
        label: "bit.dev",
        detail: "https://bit.dev/",
        link: "https://bit.dev/",
    },
    {
        label: "tutorials.botsfloor.com",
        detail: "https://tutorials.botsfloor.com/",
        link: "https://tutorials.botsfloor.com/",
    },
    {
        label: "uxdesign.cc",
        detail: "https://uxdesign.cc/",
        link: "https://uxdesign.cc/",
    },
    {
        label: "front-end-weekly",
        detail: "https://medium.com/front-end-weekly",
        link: "https://medium.com/front-end-weekly",
    },
    {
        label: "quick-code",
        detail: "https://medium.com/quick-code",
        link: "https://medium.com/quick-code",
    },
    {
        label: "daily-now",
        detail: "https://medium.com/daily-now",
        link: "https://medium.com/daily-now",
    },
    {
        label: "the-startup",
        detail: "https://medium.com/swlh",
        link: "https://medium.com/swlh",
    },
    {
        label: "dailyjs",
        detail: "https://medium.com/dailyjs",
        link: "https://medium.com/dailyjs",
    },
    {
        label: "androiddevelopers",
        detail: "https://medium.com/androiddevelopers",
        link: "https://medium.com/androiddevelopers",
    },
    {
        label: "flutter",
        detail: "https://medium.com/flutter",
        link: "https://medium.com/flutter",
    },
    {
        label: "javascript-scene",
        detail: "https://medium.com/javascript-scene",
        link: "https://medium.com/javascript-scene",
    },
    {
        label: "coding-in-simple-english",
        detail: "https://medium.com/coding-in-simple-english",
        link: "https://medium.com/coding-in-simple-english",
    },
    {
        label: "better-programming",
        detail: "https://medium.com/better-programming",
        link: "https://medium.com/better-programming",
    },
];

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand(
        "technical-blog-search.searchTechBlog",
        async function () {
            const blog = await vscode.window.showQuickPick(BlogList, {
                matchOnDetail: true,
            });

            if (blog == null) return;

            vscode.window.showInformationMessage(
                `Opening ${blog.label} in your default browser `
            );

            vscode.env.openExternal(blog.link);
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
