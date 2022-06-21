/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

/**
 *
 * @author Alumno
 */

import Control.Conexion;
import java.sql.*;

public class MPersona {
    
    private int persona_id;
    private int alumno_boleta;
    private int empleado_num;
    private String persona_nombre;
    private String persona_appat;
    private String persona_apmat;
    private String persona_sexo;
    private String persona_fechamacimiento;
    private String persona_user;
    private String persona_pass;
    private int grupo_id;
    private int rol_id;
    private int privilegio_id;

    public MPersona() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    public void MPersona(){
        
    }
    
    //AQUÍ VA EL CRUD
    
    //AQUÍ VA UN MÉTODO PARA VERIFICAR AL USUARIO
    
    /*
    select * from mpersona where presona_user=? and persona_pass=?
    */
    
    public MPersona verificarUsuario(String user, String pass){
        //Objeto de la persona
        MPersona persona = null;
        //Objeto de conexión
        Connection con = null;
        //Preparación de la sentencia
        PreparedStatement ps = null;
        //Consultas
        ResultSet rs = null;
        
        try{
            //Establcemos la conexion
            con = Conexion.getConection();
            String q = "select * from mpersona "
                    +"inner join cprivilegio"
                    +"on (mpersona.privilegio_id = cprivilegio" 
                    +"where presona_user=? and persona_pass=?";
            //Preparo la sentencia
            ps.setString(1, user);
            ps.setString(2, pass);
            //Eejcutamos la busqueda
            rs = ps.executeQuery();
            //Buscamos al ususario
            while(rs.next()){
                persona = new MPersona();
                cprivilegio pri = new cprivilegio();
                persona.setPersona_id(rs.getInt("persona_id"));
                persona.setAlumno_boleta(rs.getInt("alumno_boleta"));
                persona.setEmpleado_num(rs.getInt("empleado_num"));
                persona.setPersona_nombre(rs.getString("persona_nombre"));
                persona.setPersona_appat(rs.getString("persona_appat"));
                persona.setPersona_apmat(rs.getString("persona_apmat"));
                persona.setPersona_sexo(rs.getString("persona_sexo"));
                persona.setPersona_fechamacimiento(rs.getString("persona_fechamacimiento"));
                persona.setPersona_user(rs.getString("persona_user"));
                persona.setGrupo_id(rs.getInt("grupo_id"));
                persona.setRol_id(rs.getInt("rol_id"));
                persona.setPrivilegio_id(rs.getInt("privilegio_id"));
                pri.setPrivilegio_tipo(rs.getString("privilegio_tipo"));
                break;
                
                
            }
            
            
        }catch(SQLException sq){
            
            System.out.println("Error al verificar el usuario");
            System.out.println(sq.getMessage());
            
        }finally{
            try{
                rs.close();
                ps.close();
                con.close();
            }catch(Exception ex){
                System.out.println("No se encontro la clase");
                System.out.println(ex.getMessage());
            }
        }
            
         return persona;   
    }
    

    public int getPersona_id() {
        return persona_id;
    }

    public void setPersona_id(int persona_id) {
        this.persona_id = persona_id;
    }

    public int getAlumno_boleta() {
        return alumno_boleta;
    }

    public void setAlumno_boleta(int alumno_boleta) {
        this.alumno_boleta = alumno_boleta;
    }

    public int getEmpleado_num() {
        return empleado_num;
    }

    public void setEmpleado_num(int empleado_num) {
        this.empleado_num = empleado_num;
    }

    public String getPersona_nombre() {
        return persona_nombre;
    }

    public void setPersona_nombre(String persona_nombre) {
        this.persona_nombre = persona_nombre;
    }

    public String getPersona_appat() {
        return persona_appat;
    }

    public void setPersona_appat(String persona_appat) {
        this.persona_appat = persona_appat;
    }

    public String getPersona_apmat() {
        return persona_apmat;
    }

    public void setPersona_apmat(String persona_apmat) {
        this.persona_apmat = persona_apmat;
    }

    public String getPersona_sexo() {
        return persona_sexo;
    }

    public void setPersona_sexo(String persona_sexo) {
        this.persona_sexo = persona_sexo;
    }

    public String getPersona_fechamacimiento() {
        return persona_fechamacimiento;
    }

    public void setPersona_fechamacimiento(String persona_fechamacimiento) {
        this.persona_fechamacimiento = persona_fechamacimiento;
    }

    public String getPersona_user() {
        return persona_user;
    }

    public void setPersona_user(String persona_user) {
        this.persona_user = persona_user;
    }

    public String getPersona_pass() {
        return persona_pass;
    }

    public void setPersona_pass(String persona_pass) {
        this.persona_pass = persona_pass;
    }

    public int getGrupo_id() {
        return grupo_id;
    }

    public void setGrupo_id(int grupo_id) {
        this.grupo_id = grupo_id;
    }

    public int getRol_id() {
        return rol_id;
    }

    public void setRol_id(int rol_id) {
        this.rol_id = rol_id;
    }

    public int getPrivilegio_id() {
        return privilegio_id;
    }

    public void setPrivilegio_id(int privilegio_id) {
        this.privilegio_id = privilegio_id;
    }

    public MPersona(int persona_id, int alumno_boleta, int empleado_num, String persona_nombre, String persona_appat, String persona_apmat, String persona_sexo, String persona_fechamacimiento, String persona_user, String persona_pass, int grupo_id, int rol_id, int privilegio_id) {
        this.persona_id = persona_id;
        this.alumno_boleta = alumno_boleta;
        this.empleado_num = empleado_num;
        this.persona_nombre = persona_nombre;
        this.persona_appat = persona_appat;
        this.persona_apmat = persona_apmat;
        this.persona_sexo = persona_sexo;
        this.persona_fechamacimiento = persona_fechamacimiento;
        this.persona_user = persona_user;
        this.persona_pass = persona_pass;
        this.grupo_id = grupo_id;
        this.rol_id = rol_id;
        this.privilegio_id = privilegio_id;
    }

    public int getPriviliegio_id() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    
    
}
