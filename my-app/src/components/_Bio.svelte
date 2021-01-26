<script>
	import person from 'images/person.png';
</script>
<style>
    #container{
		width:1500px;
		margin: 0 auto;
	}
	#columns{
		padding: 2px 15px;
		border-radius: 4px;
		width:400px;
		margin-left: 5px;
		margin-bottom: 10px;
		display: inline-block;
		
	}
	#button{
		padding: 5px;
	}
	#rowMain{
		display: inline-block;
		position: relative;
		margin: 0 auto;
		margin-left: 200px;
	}

</style>

<div id = "container">
	<row id="rowMain">
		<div class="col-md-4" id = "columns">
				<img alt="Person" src="{person}">
				<button id="button" onclick="ShowHideBio()" type = "button" class="btn btn-light">Click me</button>
				 <p id = "bio" >Show Bio</p>
		</div>
		<div class="col-md-4" id = "columns">
				<img alt="Person" src="{person}">
				<button id="button" onclick="ShowHideBio()" type = "button" class="btn btn-light">Click me</button>
				<p id = "bio" >Show Bio</p>
		</div>
		<div class="col-md-4" id = "columns">
                <img alt="Person" src="{person}">
				<button id="button" onclick="ShowHideBio()" type = "button" class="btn btn-light">Click me</button>
				<p id = "bio" >Show Bio</p>
		</div>
	</row>
	<script>
		let count = 0;
		function ShowHideBio(){
			count++;
			if (count%2==0) {
				document.getElementById("button").innerHTML = "Show Bio";
				document.getElementById("bio").innerHTML="";
			}
			else{
				document.getElementById("button").innerHTML = "Hide Bio";
				document.getElementById("bio").innerHTML = "Lorem";
			}
		}
	</script>
</div>