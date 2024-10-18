const Course = require('../models/courseModel');

exports.getCourses = async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
};

exports.getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
};

exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  const course = new Course({ title, description });
  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
};

exports.updateCourse = async (req, res) => {
  const { title, description } = req.body;
  const course = await Course.findById(req.params.id);

  if (course) {
    course.title = title || course.title;
    course.description = description || course.description;
    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
};

exports.deleteCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    await course.remove();
    res.json({ message: 'Course removed' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
};
