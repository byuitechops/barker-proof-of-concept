var links = [
    {
        selector: "map",
        description: "this be the map",
        image: "testIcon.jpg",
        filePath: "-Campus.2017.Spring.SandboxCourses-Template/Entrance%20Hall.html"
    },
    {
        selector: "workspace1",
        description: "this be the workspace",
        image: "testIcon.jpg"
    },
    {
        selector: "room1",
        description: "this be the entrance hall",
        image: "testIcon.jpg"
    },
    {
        selector: "room2",
        description: "this be the scholar leader",
        image: "testIcon.jpg"
    },
    {
        selector: "room3",
        description: "this be room 3",
        image: "testIcon.jpg"
    },
    {
        selector: "room4",
        description: "this be room 4",
        image: "testIcon.jpg"
    }
];



$(document).ready(function () {
    console.log(window.location);
    var ou = window.location.pathname.match(/(?:enforced|home)\/(\d+)/);
    if (ou != null) {
        ou = ou[1];
    }

    function buildHTML(link) {
        var htmlStr = "";

        htmlStr += "<a href='https://byui.brightspace.com/content/enforced/" + ou + link.filePath + "' target='_parent'>";
        htmlStr += "<img class='popupImage' src='" + link.image + "' style='height:150px'>";
        htmlStr += "<p>" + link.description + "</p></a>";

        return htmlStr;
    }

    links.forEach(function (link) {
        $('.' + link.selector).tooltipster({
            content: buildHTML(link),
            interactive: true,
            contentAsHTML: true,
            theme: ['tooltipster-shadow', 'tooltipster-shadow-customized']
        });
    });
});
