import { response, request } from "express";
import Comments from "./comments.model.js";
import Publications from "../publications/publications.model.js";
import User from "../users/user.model.js";

export const commentsPost = async (req, res) => {
    try {
        const { title, comments, publicationsId } = req.body;
        const userId = req._id;
        const user = await User.findById(userId);

        const publications = await Publications.findById(publicationsId);

        res.status(200).json({
            publications
        })

        const comment = new Comments({ title, comments, publicationsId, userId });
        await comment.save();

        res.status(200).json({
            publications
        })

    } catch (e) {
        console.log("Probably you don't enter a required field");
        console.log(e);
    }
}

export const commentsGet = async (req, res) => {
    try {
        const commetns = await Comments.find();
        res.status(200).json(commetns);
    } catch (e) {
        console.log(e);
        return res.status(500).send("No hay datos en la base de datos"); 
    }
}

export const commentsDelete = async (req, res) => {
    try {
        const userId = req.user._id;
        const commentsId = req.params.id;
        const comments = await Comments.findByIdAndDelete(commentsId);

        if (!comments) {
            return res.status(404).json({
                msg: 'Comment not found'
            });
        }
        
        res.status(200).json({
            msg: "Comment deleted successfully"
        })

    } catch (e) {
        console.error(e),
            res.status(500).json({
                msg: "Error processing request"
            });
    }
}