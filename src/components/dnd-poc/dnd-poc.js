import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../dnd-poc.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function DndPOC(props) {

  const demoTasks = [{ name: "Learn Angular", category: "wip", bgcolor: "yellow" },
  { name: "React", category: "wip", bgcolor: "pink" },
  { name: "Vue", category: "complete", bgcolor: "skyblue" }
  ];

  const [tasks, setTasks] = useState(demoTasks);

  let categorisedTasks = {
    wip: [],
    complete: []
  }

  tasks.forEach((t) => {
    categorisedTasks[t.category].push(
      <div key={t.name}
        onDragStart={(e) => onDragStart(e, t.name)}
        onTouchStart={(e) => onDragStart(e, t.name)}
        draggable
        className="draggable"
        style={{ backgroundColor: t.bgcolor }}
      >
        {t.name}
      </div>
    );
  });

  const classes = useStyles();

  const onDragStart = (ev, id) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData("id", id);
  }

  const onDragOver = (ev) => {
    ev.preventDefault();
  }

  const onDrop = (ev, cat) => {
    const id = ev.dataTransfer.getData("id");

    const recategorisedTasks = tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    setTasks(recategorisedTasks);
  }

  return (
    <div className={classes.root} >
      <div className="container-drag">
        <h2 className="header">DRAG & DROP DEMO</h2>
        <div className="wip" onDragOver={(e) => onDragOver(e)}
          onTouchMove={(e) => onDragOver(e)}
          onDrop={(e) => { onDrop(e, "wip") }}
          onTouchEnd={(e) => { onDrop(e, "wip") }}
        >
          <span className="task-header">WIP</span>
          {categorisedTasks.wip}
        </div>
        <div className="droppable" onDragOver={(e) => onDragOver(e)}
          onDragMove={(e) => onDragOver(e)} 
          onDrop={(e) => onDrop(e, "complete")}
          onTouchEnd={(e) => onDrop(e, "complete")}
        >
          <span className="task-header">COMPLETED</span>
          {categorisedTasks.complete}
        </div>
      </div>
    </div>
  );

}