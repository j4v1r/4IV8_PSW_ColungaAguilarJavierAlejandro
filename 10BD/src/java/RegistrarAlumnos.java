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
 * @author Alumno
 */
public class RegistrarAlumnos extends HttpServlet {
    
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
     */
    public void init(ServletConfig scg) throws ServletException
    {
        //Se debe de establecer los elementos para la conexión con BD
        String url = "jdbc:mysql:3306//localhost/alumnos";
                    //controlador:motorBD:puerto//IP//nombreBD4
                    
        //String username = "root";
        //String password = "n0m3l0";
        String username = "Alejandro";
        String password = "gl0rfInd3#";
        
        try{
            //Intentar conectar a la BD
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
            out.println("<title>Registro de Alumnos</title>");            
            out.println("</head>");
            out.println("<link rel=\"stylesheet\" href=\"CSS/style.css\">");
            out.println("<body>");
            try{
                //Obtener los parametros para poder insertarlos en la BD
                String nom, appat, apmat, tel;
                int boleta;
                
                nom = request.getParameter("nombre");
                appat = request.getParameter("appat");
                apmat = request.getParameter("apmat");
                tel = request.getParameter("telefono");
                boleta = Integer.parseInt(request.getParameter("boleta"));
                
                System.out.println(nom);
                System.out.println(appat);
                System.out.println(apmat);
                System.out.println(tel);
                System.out.println(boleta);
                
                
                String q = "insert into alumnosbatiz values("+boleta+",'"+nom+"','"+appat+"','"+apmat+"','"+tel+"')";
                //Se debe ejecutar la sentencia
                
                set.executeUpdate(q);
                out.println("<h1>Alumno Registrado con Exito</h1>");
                System.out.println("Dato registrado");
                
                
            }catch(Exception e){
                
                System.out.println("No se pudo registrar verificar los datos de entrada");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<h1>Alumno no se pudo Registrar, hay un error</h1>");
            }
            
            out.println("<a href='ConsultarAlumnos' >Consultar Alumnos</a>");
            out.println("<br>");
            out.println("<a href='index.html' >Inicio</a>");
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
