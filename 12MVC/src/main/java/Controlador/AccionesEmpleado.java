/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import modelo.empleados;

/**
 *ESTA CLASE SON LOS METODOS A LA INFO
 * @author Alumno
 */
public class AccionesEmpleado {
    
    //CRUD
    
    //registro
    public static int registroEmpleado(empleados e){
        
        int estatus = 0;
        
        try{
            //Establecer la conexión
            Connection con = Conexion.getConection();
            String q = "insert into empleados (nombre,password, email, pais)"
                    + "values (?, ?, ?, ?) ";
            
            //Ahora debo de preparar la sentencia
            
            PreparedStatement ps = con.prepareStatement(q);
            
            //Objeto del empleado
            
            ps.setString(1, e.getNombre());
            ps.setString(2, e.getPassword());
            ps.setString(3, e.getEmail());
            ps.setString(4, e.getPais());
            
            //Ejecutar la query
            estatus = ps.executeUpdate();
            
            System.out.println("Registro Exitoso");
            con.close();
            
        }catch(Exception ex){
            
            System.out.println("Error al registrar empleado");
            System.out.println(ex.getMessage());
            
        }
        return estatus;
    }
    
    
    //Consultar todos los empleados
    
    public static List<empleados> getAllEmpleados(){
    
        //Prmero, decalrar el array list
        List<empleados> lista = new ArrayList<empleados>();
        
        try{
            
            //Establecer la conexión
            Connection con = Conexion.getConection();
            
            String q = "select * from empleados";
            
            PreparedStatement ps = con.prepareStatement(q);
            
            ResultSet rs = ps.executeQuery();
            
            while(rs.next()){
                //Donde se crea el objeto del empleado
                empleados e = new empleados();
                e.setId(rs.getInt(1));
                e.setNombre(rs.getString(2));
                e.setPassword(rs.getString(3));
                e.setEmail(rs.getString(4));
                e.setPais(rs.getString(5));
                
                lista.add(e);
            }
            
            System.out.println("Se consulto el empleado");
            con.close();
        }catch(Exception ex){
            System.out.println("No se pudo consultar al empleado");
            System.out.println(ex.getMessage());
        }
        return lista;
        
    }
    

    //Buscar empleados por ID    
    public static empleados buscarEmpleadoID(int id){

        //Donde se crea el objeto del empleado
        empleados e = new empleados();

        try{

                //Establecer la conexión
            Connection con = Conexion.getConection();

            String q = "select * from empleados where id=?";

            PreparedStatement ps = con.prepareStatement(q);

            ps.setInt(1, id);

            ResultSet rs = ps.executeQuery();

            if(rs.next()){

                e.setId(rs.getInt(1));
                e.setNombre(rs.getString(2));
                e.setPassword(rs.getString(3));
                e.setEmail(rs.getString(4));
                e.setPais(rs.getString(5));

            }

                System.out.println("Se consulto el empleado");
                con.close();

            }catch(Exception ex){

                System.out.println("No se pudo consultar al empleado");
                System.out.println(ex.getMessage());

            }
            return e;

   }
    
    
    //Borrar empleado
    public static int eliminarEmpleado(int id){

        //Necesito saber el estado de la query para si se ejecuto o no
        int estatus = 0;
        

        try{

                //Establecer la conexión
            Connection con = Conexion.getConection();

            String q = "delete from empleados where id=?";

            PreparedStatement ps = con.prepareStatement(q);

            ps.setInt(1, id);

            estatus = ps.executeUpdate();


            System.out.println("Se elimino el empleado");
            con.close();

            }catch(Exception ex){

                System.out.println("No se pudo eliminar al empleado");
                System.out.println(ex.getMessage());

            }
            return estatus;

    }
    
    
    //Actualizar empleado
    public static int actualizarEmpleado(empleados e){

        //Necesito saber el estado de la query para si se ejecuto o no
        int estatus = 0;
        

        try{

                //Establecer la conexión
            Connection con = Conexion.getConection();

            String q = "update empleados set nombre = ?,"
                    + "password = ?, email = ?, pais = ?"
                    + "where id = ?";
            
            PreparedStatement ps = con.prepareStatement(q);

            ps.setString(1, e.getNombre());
            ps.setString(2, e.getPassword());
            ps.setString(3, e.getEmail());
            ps.setString(4, e.getPais());
            ps.setInt(5, e.getId());
            
            estatus = ps.executeUpdate();

            System.out.println("Se elimino el empleado");
            con.close();

            }catch(Exception ex){

                System.out.println("No se pudo eliminar al empleado");
                System.out.println(ex.getMessage());

            }
            return estatus;

        }
    
}


