import Publications from './publications.model.js';
import User from '../users/user.model.js';

export const publicationsPost = async (req, res) => {
    const { title, content, author } = req.body;
    const userId = req.user._id;
    const user = await User.findById(userId);

    const publications = new Publications({ title, content, author});

    await publications.save();

    res.status(200).json({
        publications
    });
}

export const publicationsGet = async (req, res) => {
    try {
        const publications = await Publications.find();
        res.status(200).json(publications);
    } catch (e) {
        console.log(e);
        return res.status(500).send("No hay datos en la base de datos"); 
    }
}

export const publicationsDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const publicationsDelete = await Publications.findByIdAndDelete(id);
        if (!publicationsDelete) {
            return res.status(404).json({ message: "Publicacion no encontrada" });
        }

        res.status(200).json({ message: "Publicacion eliminada exitosamente", publicationsDelete });

    } catch (e) {
        console.log(e);
        return res.status(500).send("El ID no existe en la base de datos"); 
    }
}