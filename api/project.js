const express = require('express');
const router = express.Router();
const db = require("../data/dbConfig.js");



router.get('/resources', (req, res) => {
  db('resources')
    .then(posts => {
		res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json(error);
    });

});
router.post('/resources', (req, res) => {
  db('resources').insert(req.body)
    .then(posts => {
		res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json(error);
    });

});
router.post('/projects', (req, res) => {
  db('projects').insert(req.body)
    .then(posts => {
		res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json(error);
    });

});


router.get('/projects', (req, res) => {
  db('projects')
    .then(posts => {
		res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

router.post('/tasks', (req, res) => {
  db('tasks').insert(req.body)
    .then(posts => {
		res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

// work on 
router.get("/tasks", (req, res) => {
      getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting tasks" });
    });
});

function getTasks(){
  return db('tasks')
    .select('projects.project_name ', 'projects.description ', 'tasks.description','tasks.task_name', 'notes ', 'tasks.completed')
      .join('projects', {'projects.id':'tasks.project_id'})

    .then(tasks => {
      return tasks.map(item => {
        return {...item, completed: item.completed ? true : false}
      })
    })
}





module.exports = router;