chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
	var link = tabs[0].url;

	if (link.includes("https://www.youtube.com/watch?v=")) {
		var videoId = link.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();

		if (videoId.length == 11) {
			document.getElementById("name").textContent = tabs[0].title.replace("- YouTube", "");

			document.getElementById("id").textContent = videoId;

			var thumbnailContainer = document.createElement("a");
			thumbnailContainer.href = "http://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
			thumbnailContainer.setAttribute("target", "_blank");

			var thumbnail = document.createElement("img");
			thumbnail.setAttribute("src", "http://img.youtube.com/vi/" + videoId + "/mqdefault.jpg");

			thumbnailContainer.append(thumbnail);

			document.body.append(thumbnailContainer);
		}
	} else {
		document.getElementById("name").textContent = "You are not currently watching a YouTube video!";
	}
});
