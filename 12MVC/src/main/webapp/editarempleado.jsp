<%-- 
    Document   : editarempleado
    Created on : 9/05/2022, 08:21:46 PM
    Author     : Alumno
--%>

<%@page import="modelo.empleados"%>
<%@page import="Controlador.AccionesEmpleado"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <div class="editarempleado">
            <form name="editar" method="post"
                  action="actualizarempleado">
                <table border="2">

                    <tr>
                        <td>ID</td>
                        <td><input type="hidden" name="id2"
                                   value=""> </td>
                            
                        <td>Nombre</td>
                        <td><input type="text" name="nombre2"
                                   value="" </td>
                            
                        <td>Password</td>
                        <td><input type="hidden" name="password2"
                                   value=""> </td>
                            
                        <td>Email</td>
                        <td><input type="hidden" name="email2"
                                   value=""> </td>
                            
                        <td>Pais</td>
                        <td><select name="pais2">
                                        <option>México</option>
                                        <option>India</option>
                                        <option>Por ahí</option>
                                        <option>El que nadie quiere</option>
                                        <option>Dema :)</option>
                                        
                        </select>
                    </tr>
                    <tr>
                        <td> colspan="2" </td>
                    </tr>
                </table>
                    
            </form>
        </div>
    </body>
</html>
