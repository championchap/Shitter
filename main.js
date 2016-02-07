var shitter = {

    timelineWidth : 590,

    saveData : function(name, data) {
        localStorage.setItem("shitter_" + name, data);
    },

    getData : function(name) {
        return localStorage.getItem("shitter_" + name);
    },

    hideElement : function(selector) {
        var selected = document.querySelectorAll(selector);
        selected[0].style.display = 'none';
    },

    hideMoments : function() {
        shitter.hideElement('.moments');
    },

    hideSidebar : function() {
        shitter.hideElement('.dashboard-right');
    },

    hideFollowSuggestions : function() {
        shitter.hideElement('.flex-module');
    },

    hideTrends : function() {
        shitter.hideElement('.trends');
    },

    hideProfileCard : function() {
        shitter.hideElement('.DashboardProfileCard');
    },

    hideImportPrompt : function() {
        shitter.hideElement('.import-prompt');
    },

    hideFooter : function() {
        shitter.hideElement('.Footer');
    },

    hideDashboard : function() {
        shitter.hideElement('.dashboard-left');
    },

    hideProfileSidebarLeft : function() {
        shitter.hideElement('.ProfileSidebar');
    },

    hideProfileSidebarRight : function() {
        shitter.hideElement('.ProfileSidebar--withRightAlignment');
    },

    selectElement : function(selector) {
        return document.querySelectorAll(selector)[0];
    },

    centerTimeline : function() {
        var pageContainer = shitter.selectElement('#page-container');
        var contentMain = shitter.selectElement('.content-main');
        var pageWidth = pageContainer.offsetWidth;

        contentMain.style.float = 'left';
        contentMain.style.marginLeft = (((pageWidth - this.timelineWidth) / 2) - (36 / 2)) + 'px';
    },

    centerProfileTimeline : function() {
        var pageContainer = shitter.selectElement('.AppContent-main');
        var pageWidth = pageContainer.offsetWidth;
        var timeline = shitter.selectElement('.ProfileHeading').parentNode;

        timeline.style.float = 'left';
        timeline.style.marginLeft = (((pageWidth - this.timelineWidth) / 2) - (36 / 2)) + 'px';
        timeline.width = '800px';
    },

    delayedRun : function(time) {
        window.setTimeout(shitter.run, time);
    },

    applyClickEvents : function() {
        var home = shitter.selectElement('#global-nav-home');
        var notifications = shitter.selectElement('.notifications');
        var profile = shitter.selectElement('.account-group');
        var _this = shitter;

        var applyEvent = function(el) {
            el.onclick = function() {
                _this.delayedRun(2000);
            };
        };

        applyEvent(home);
        applyEvent(notifications);
        applyEvent(profile);
    },

    resize : function(e) {
        shitter.centerTimeline();
    },

    hideElements : function() {
        var funcs = [
            shitter.hideProfileSidebarLeft,
            shitter.hideProfileSidebarRight,
            shitter.hideMoments,
            shitter.hideSidebar,
            shitter.hideTrends,
            shitter.hideProfileCard,
            shitter.hideFollowSuggestions,
            shitter.hideImportPrompt,
            shitter.hideFooter,
            shitter.hideDashboard,
        ];

        funcs.forEach(
            function(callback) {
                try {
                    callback();
                } catch(e) {
                    console.log('Problem.');
                }

            }
        );
    },

    run : function() {
        shitter.applyClickEvents();
        shitter.hideElements();
        shitter.centerTimeline();
        shitter.centerProfileTimeline();

        console.log("Running Again");
    },
};

window.onload = function(e) {
    shitter.delayedRun(2000);
};

window.onresize = function(e) {
    shitter.resize();
};