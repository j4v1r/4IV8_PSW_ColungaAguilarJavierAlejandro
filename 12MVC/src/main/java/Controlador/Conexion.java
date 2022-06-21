/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;

/**
 *
 * @author Alumno
 */

import java.sql.*;


public class Conexion {
    
    public static Connection getConection(){
        String url, username, password;

        url="jdbc:mysql://localhost/empresa";
        username="Alejandro";
        password="gl0rfInd3#";
        
        Connection con=null;
        
        try{
            Class.forName("com.mysql.jdbc.Driver");
            con=DriverManager.getConnection(url, username, password);
            System.out.println("Se conecto con la BD");
            
            
            
            
        }catch(Exception e){
            System.out.println("No se conecto con la BD T_T");
            System.out.println(e.getMessage());
        }
     return con;   
    }
    
}
