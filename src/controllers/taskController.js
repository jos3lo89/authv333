import taskModel from "../models/taskModel.js";

export const createTask = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;

    const newTask = new taskModel({
      titulo,
      descripcion,
    });

    const savetask = await newTask.save();

    res.status(201).json(savetask);
  } catch (error) {
    res.status(500).json({ mensaje: [error.message] });
    console.log(error.message);
  }
};

export const foundTasks = async (req, res) => {
  try {
    const rows = await taskModel.find();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ mensaje: [error.message] });
    console.log(error.message);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await taskModel.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ mensaje: [error.message] });
    console.log(error.message);
  }
};
