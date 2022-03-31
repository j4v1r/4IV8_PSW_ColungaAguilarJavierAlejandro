/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Rogelio Colunga R
 */
public class ActualizarAlumno extends HttpServlet {
    
    private Connection con;
    private Statement set;
    private ResultSet rs;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     *
     */
    
    public void init(ServletConfig scg) throws ServletException{
        //se dene de establecer los elementos para la conexion con bd
        String url = "jdbc:mysql:3306//localhost/alumnos";
                   //controlador:motorBD:puerto//IP/nombreBD
        String username = "Alejandro";
        String password = "gl0rfInd3#";
        //String username = "root";
        //String password = "n0m3l0";
        
        try{
            //internat conectar a la bd
            Class.forName("com.mysql.jdbc.Driver");
            url = "jdbc:mysql://localhost/alumnos";
            con = DriverManager.getConnection(url, username, password);
            set = con.createStatement();
            
            System.out.println("Si conecto a la BD :3 *w* ");
            
        }catch(Exception e){
            System.out.println("No conecto, solo juguito contigo uwu");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        
        }
    }
    
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Actualización de Alumnos</title>");            
            out.println("</head>");
            out.println("<body>");
            try{
                String nom;
                
                int opcion = Integer.parseInt(request.getParameter("dato"));
                int boleta = Integer.parseInt(request.getParameter("boleta"));
                
                nom = request.getParameter("nombre"); 
                
                
                if(opcion==1){
                    String q = "update alumnosbatiz set nombre='"+nom+"'where boleta="+boleta;
                    set.executeUpdate(q);
                }else if(opcion==2){
                    String q = "update alumnosbatiz set appat='"+nom+"'where boleta="+boleta;
                    set.executeUpdate(q);
                }else if(opcion==3){
                    String q = "update alumnosbatiz set apmat='"+nom+"'where boleta="+boleta;
                    set.executeUpdate(q);
                }else if (opcion==4){
                    String q = "update alumnosbatiz set boleta='"+nom+"'where boleta="+boleta;
                    set.executeUpdate(q);
                }else if(opcion==5){
                    String q = "update alumnosbatiz set telefono='"+nom+"'where boleta="+boleta;
                    set.executeUpdate(q);
                }else{
                    out.println("<h1>Error no se pudo editar</h1>");
                }
                

                String q = "update alumnosbatiz set nombre='"+nom+"'where boleta="+boleta;
                
                set.executeUpdate(q);
                out.println("<h1>Alumno Actualizado</h1>");
                System.out.println("Dato actualizado");
                
                
            }catch(Exception e){
                System.out.println("Error no se puede editar");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<h1>Error no se pudo editar</h1>");
                
            }
            //out.println("<h1>Servlet ActualizarAlumno at " + request.getContextPath() + "</h1>");
            out.println("<a href='ConsultarAlumnos' >Consultar Alumnos</a>");
            out.println("<br>");
            out.println("<br>");
            out.println("<a href='index.html' >Volver a Actualizar</a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }


}
