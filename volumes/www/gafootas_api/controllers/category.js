'use strict'

var Category = require('../models/category')

function getCategoryList(req, res) {
    Category.find({}, (err, categories) => {
        if (err) {
            res.status(500).send(
                {
                    messaje: "Error al obtener las categorias"
                }
            );
        }else{
            if(!categories){
                res.status(404).send(
                    {
                        messaje: "No existen categorias"
                    }
                )
            }else{
                res.status(200).send(
                    {
                        categories
                    }
                );
            }
        }
    });
}

function getCategory(req, res) {
    var id = req.params.id;
    
    if (id) {
        Category.findById(id, (err, category) => {
            if (err) {
                res.status(500).send(
                    {
                        messaje: "Error al obtener la categoria"
                    }
                );
            }else{
                if(!category){
                    res.status(404).send(
                        {
                            messaje: "No existe la categoria"
                        }
                    )
                }else{
                    res.status(200).send(
                        {
                            category
                        }
                    );
                }
            }
        });
    }else{
        res.status(500).send(
            {
                messaje: "No se ha enviado datos"
            }
        );
    }
}

function saveCategory(req, res) {
    var category = new Category;
    var data = req.body;
    
    if (data) {
        category.name = data.name;
        category.description = data.description;
        category.parent = data.parent;

        category.save((err, categoryStored) => {
            if (err) {
                res.status(500).send(
                    {
                        messaje: "Error al guardar la categoria"
                    }
                );
            }else{
                res.status(200).send(
                    {
                        category: categoryStored
                    }
                )
            }
        });
    }else{
        res.status(500).send(
            {
                messaje: "No se ha enviado datos"
            }
        );
    }
}

function updateCategory(req, res) {
    var id = req.params.id;
    var data = req.body;

    if (id && data) {
        Category.findByIdAndUpdate(id, data, (err, category) => {
            if (err) {
                res.status(500).send(
                    {
                        messaje: "Error al actualizar la categoria"
                    }
                );
                throw err;
            }else{
                res.status(200).send(
                    {
                        category: category
                    }
                )
            }
        });
    }
}

function deleteCategory(req, res) {
    var id = req.params.id;

    if (id) {
        Category.findById(id, (err, category) => {
            if (err) {
                res.status(500).send(
                    {
                        messaje: "Error al actualizar la categoria"
                    }
                );
                throw err;
            }else{
                category.remove(err => {
                    if (err) {
                        res.status(500).send(
                            {
                                messaje: "Error al borrar la categoria"
                            }
                        );
                    }else{
                        res.status(200).send(
                            {
                                messaje: "Categoria borrada"
                            }
                        );
                    }
                });
            }
        });
    }
}

module.exports = {
    getCategoryList,
    getCategory,
    saveCategory,
    updateCategory,
    deleteCategory
}