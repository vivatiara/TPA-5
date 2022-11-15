const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schema/todo");
const verifyToken = require("../verifyToken/verifyToken");

// Membuat todo baru
router.post("/createTodo", verifyToken, async(req, res) => {
    const { judulTodo, detailTodo } = req.body;

    try {
        const data = await todoSchema.create({
            todo: judulTodo,
            detail: detailTodo,
        });

        if (data) {
            res.status(200).json({
                data: data,
                message: 'successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Todo is not found.'
            })
        }
    } catch (error) {
        res.send(error);
    }
});

// Mengubah todo
router.post("/updateTodo", async(req, res) => {
    const { judulTodo, detailTodo } = req.body;
    try {
        const data = await todoSchema.findOne({ _id : req.query.idTodo});

        if(data){
            data.todo = judulTodo,
            data.detail = detailTodo
            const updateTodo = await data.save();
            res.status(200).json({
                data: updateTodo,
                message: 'updated successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Todo is not found.'
            })
        }
    } catch (error) {
        res.send(error);
    }
});

// Menghapus todo
router.delete("/deleteTodo", async(req, res) => {
    const { judulTodo, detailTodo } = req.body;
    try {
        const data = await todoSchema.findOne({ _id : req.query.idTodo});
        
        if(data){
            await data.remove();
            res.status(200).json({
                success: true,
                data: data,
                message: 'deleted successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Todo is not found.'
            })
        }
    } catch (error) {
        res.send(error);
    }
});

// Menghapus semua todo
router.delete("/deleteAllTodo", async(req, res) => {
    try {
        const data = await todoSchema.deleteMany();
        if(data){
            res.status(200).json({
                success: true,
                data: data,
                message: 'deleted successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Todo is not found.'
            })
        }
    } catch (error) {
        res.send(error);
    }
});

// Melihat detail todo
router.get("/getDetailTodo", async(req, res) => {
    try {
        const data = await todoSchema.findOne({ _id : req.query.idTodo});
        if(data){
            res.status(200).json({
                success: true,
                data: data,
                message: 'Detail Todo successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Todo is not found.'
            })
        }
    } catch (error) {
        res.send(error);
    }
});

// Melihat semua todo
router.get("/getAllTodo", async(req, res) => {
    try {
        const data = await todoSchema.find({ });
        if(data){
            res.status(200).json({
                success: true,
                data: data,
                message: 'Todo is get successfully'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'Todo is not found.'
            })
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;