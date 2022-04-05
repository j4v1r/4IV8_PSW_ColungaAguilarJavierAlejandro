<%-- 
    Document   : registroalumno
    Created on : 5/04/2022, 09:20:07 AM
    Author     : Alejandro Colunga
--%>

<%@page contentType="text/html" language="java"
        import="java.sql.*, java.util.*, java.text.*" 
        pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            //aqui ya puedo incorporar java
            Connection con = null;
            Statement set = null;
            ResultSet rs = null;
            
            String username, url, password, driver;
            
            url = "jdbc:mysql://localhost/alumnos";
            username = "Alejandro";
            password = "gl0rfInd3#";
            
            driver = "com.mysql.jdbc.Driver";
            
            try{
                //conectarnos
                Class.forName(driver);
                con = DriverManager.getConnection(url, username, password);
                
                try{
                    String nom, appat, apmat, tel;
                    int bol;
                    
                    nom = request.getParameter("nombre");
                    appat = request.getParameter("appat");
                    apmat = request.getParameter("apmat");
                    tel = request.getParameter("tel");
                    bol = Integer.parseInt(request.getParameter("bol"));
                    
                    set = con.createStatement();
                    
                    String q = "insert into alumnosbatiz values("+bol+", '"+nom+"', '"+appat+"', '"+apmat+"', '"+tel+"')";
                    
                    int registro = set.executeUpdate(q);
                    
                    %>
                    <h1>Registro Exitoso</h1>
                    <%
                
                }catch(SQLException es){
                    System.out.println("Error al registrar en la tabla");
                    System.out.println(es.getMessage());
                    %>
                    <h1>No se pudo registrar en la tabla</h1>
                    <%
                
                }
            }catch(Exception e){
                System.out.println("Error al conecta la BD");
                System.out.println(e.getMessage());
                %>
                <h1>No conecto con la BD T_T</h1>
                <%
            
            }
            
            %>
        
            <a href="index.html">Regresar a Principal</a>
    </body>
</html>
    

