<%
String usuario = "";
HttpSession sesionusu = request.getSession();
if(sesionusu.getAttribute("usuario")==nul){

}
%>

<jsp:forward page="index.html">
	<jsp:param name="error" 
	value="Es obligatorio tener una sesion activa"/><jsp:param>
</jsp:forward>

<%

}else{
	//Si hay sesión
usuario = (String)sesionusu.getAttribute("usuario");
}

%>



<body>

<%
//Si privilegio==1
%>

<%
//Si privilegio==2
%>

<%
//Si privilegio==3
%>