<script>
    import person from 'images/person.png';
</script>
<style>
    #container{
		width:100%;
	}
	#columns{
		width: 33%;
		float: left;
		padding: 5px;
		border: 1px solid red;
	}
	#Bio{
        
	}
</style>
<div id = "container">
	<row>
		<div class="col-md-4" id = "columns">
				<img alt="Person" src="{person}">
				<button onclick="bioToggle()">Click me</button>
		</div>
		<div class="col-md-4" id = "columns">
                <img alt="Person" src="{person}">
                <button onclick="bioToggle()">Click me</button>
		</div>
		<div class="col-md-4" id = "columns">
                <img alt="Person" src="{person}">
                <button onclick="bioToggle()">Click me</button>
		</div>
	</row>
</div>