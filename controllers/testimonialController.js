import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
  // validar que todos los campos esten llenos
  const { nombre, email, mensaje } = req.body;
  const errores = [];
  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre esta vacio" });
  }
  if (email.trim() === "") {
    errores.push({ mensaje: "El email esta vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje esta vacio" });
  }
  if (errores.length > 0) {

    // consultar testimoniales existentes
    const testimoniales = await Testimonial.findAll();
    // mostrar la vista con errores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      email,
      mensaje,
      testimoniales
    });
  } else {
    try {
      // almacenar en la base de datos
      await Testimonial.create({
        nombre,
        email,
        mensaje,
      });
      res.redirect("/testimoniales")
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimonial };
