const express = require('express');
const {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');
const protect = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');
const router = express.Router();

// @route GET /api/courses
// @desc Get all courses
// @access Public
router.get('/getcourses', getCourses);

// @route GET /api/courses/:id
// @desc Get a course by ID
// @access Public
router.get('/:id', getCourseById);

// @route POST /api/courses
// @desc Create a new course
// @access Private/Admin
router.post('/create', protect, admin, createCourse);

// @route PUT /api/courses/:id
// @desc Update a course by ID
// @access Private/Admin
router.put('/:id', protect, admin, updateCourse);

// @route DELETE /api/courses/:id
// @desc Delete a course by ID
// @access Private/Admin
router.delete('/:id', protect, admin, deleteCourse);

module.exports = router;
