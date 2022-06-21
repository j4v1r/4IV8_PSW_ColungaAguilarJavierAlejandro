/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Control;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Alumno
 */
public class Conexion {
    
    public static Connection getConection(){
        
        try{
            
            String url, name, pass;
            Class.forName("com.mysql.jdbc.Driver");
            url="jdbc:mysql://localhost/maquinasbatiz";
            name="root";
            pass="n0m3l0";
            
            return DriverManager.getConnection(url, name, pass);
                    
        }catch(SQLException sq){
            
            System.out.println("Error al conectar la BD");
            System.out.println(sq.getMessage());
            
        }catch(Exception ex){
            
            System.out.println("Error al no encontrar la clase");
            System.out.println(ex.getMessage());
            
        }
        return null;
    }
    
}
