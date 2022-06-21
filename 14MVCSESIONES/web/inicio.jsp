<%-- 
    Document   : inicio
    Created on : 17/05/2022, 04:15:56 PM
    Author     : Alumno
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
String usuario = "";
HttpSession sesionusu = request.getSession();
if(sesionusu.getAttribute("usuario")==null){


%>
<jsp:forward page="index.html">
	<jsp:param name="error" 
	value="Es obligatorio tener una sesion activa"></jsp:param>
</jsp:forward>

<%

}else{
	//Si hay sesión
usuario = (String)sesionusu.getAttribute("usuario");
}

%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        encabezado
        <h1>Si existe</h1>
        body
        <% 
            //si privilegio == 1
        %>
        
        <% 
            //si privilegio == 2
        %>
        
        <% 
            //si privilegio == 3
        %>
        
        <h1>Hello World!</h1>
    </body>
</html>
