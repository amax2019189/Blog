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