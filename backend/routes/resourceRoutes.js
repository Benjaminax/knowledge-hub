import express from 'express';
import Resource from '../models/Resources.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Upload a resource
router.post('/', upload.single('file'), async (req, res) => {
  const { title } = req.body;
  const fileUrl = req.file.path;

  try {
    const resource = new Resource({ title, fileUrl });
    await resource.save();
    res.status(201).json({ message: 'Resource uploaded successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading resource', error });
  }
});

// Get all resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resources', error });
  }
});

export default router;