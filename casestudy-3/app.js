function reload() {

	var html = document.getElementById("ht");
	var css = document.getElementById("cs");
	var js = document.getElementById("js");
	var code = document.getElementById("fm").contentWindow.document;

	 document.body.onkeyup = function(){
	    code.open();
		code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
		code.close();
      };
    };

reload();
