const express = require('express');
const {
  enrollInCourse,
  getEnrolledCourses,
  trackProgress,
} = require('../controllers/enrollmentController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

// @route POST /api/enrollments
// @desc Enroll in a course
// @access Private
router.post('/', protect, enrollInCourse);

// @route GET /api/enrollments
// @desc Get all enrolled courses for the user
// @access Private
router.get('/', protect, getEnrolledCourses);

// @route PUT /api/enrollments/:courseId/track
// @desc Track lesson progress in a course
// @access Private
router.put('/:courseId/track', protect, trackProgress);

module.exports = router;
