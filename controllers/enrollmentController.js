const Enrollment = require('../models/enrollmentModel');

exports.enrollInCourse = async (req, res) => {
  const { courseId } = req.body;
  const enrollment = await Enrollment.create({
    user: req.user._id,
    course: courseId,
  });
  res.status(201).json(enrollment);
};

exports.getEnrolledCourses = async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user._id }).populate('course');
  res.json(enrollments);
};

exports.trackProgress = async (req, res) => {
  const { lessonId } = req.body;
  const enrollment = await Enrollment.findOne({
    user: req.user._id,
    course: req.params.courseId,
  });

  if (enrollment) {
    enrollment.completedLessons.push(lessonId);
    await enrollment.save();
    res.json(enrollment);
  } else {
    res.status(404).json({ message: 'Enrollment not found' });
  }
};
