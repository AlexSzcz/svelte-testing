import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

export function bioToggle(){
	let x = getElementById("Bio");
	if(x.style.display === "none"){
		x.style.display ="block";
	}
	else{
		x.style.display = "none";
	}
}
