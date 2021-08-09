import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import RemoveIcon from '@material-ui/icons/Remove';

import { Darkroom, Canvas, History, Toolbar, FilePicker, CropMenu } from 'react-darkroom';


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

export default function ReactImageEditor(props) {

  const classes = useStyles();

  const selectFile = () => {
    console.log("Select file called");
  }

  const onFileChange = () => {
    console.log("On file change called");
  }

  const onUndo = () => {
    console.log("Undo called");
  }
  
  const onRedo = () => {
    console.log("Redo called");
  }

  const onRotateLeft = () => {
    console.log("Image rotated to left");
  }

  const onRotateRight = () => {
    console.log("Image rotated right");
  }

  const onCropStart = () => {
    console.log("Image crop started");
  }

  const onCropConfirm = () => {
    console.log("Image crop confirmed");
  }

  const onCropCancel = () => {
    console.log("Image crop cancelled");
  }

  const onSave = () => {
    console.log("On save called");
  }



  const [hasFile, setHasFile] = useState(true);
  const [crop, setCrop] = useState(true);
  const [source, setSource] = useState('');
  const [angle, setAngle] = useState(0);

  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  const [step, setStep] = useState(0);
  const [thread, setThread] = useState(1);


  return (
    <div className={classes.root}>
      this is my image editor

      <Darkroom>
        <Toolbar>
          <button onClick={selectFile} data-tipsy="Select Image" className="tipsy tipsy--s">
            <span className="icon icon-image" />
            <input type="file" ref="fileselect" onChange={onFileChange} style={{ display: 'none' }} />
          </button>
          <History step={step} length={thread.length - 1}>
            <button
              action="back"
              onClick={onUndo}
              ifEmpty="disable"
              data-tipsy="Undo"
              className="tipsy tipsy--sw">
              <span className="icon icon-undo2" />
            </button>
            <button
              action="forward"
              onClick={onRedo}
              ifEmpty="disable"
              data-tipsy="Redo"
              className="tipsy tipsy--sw">
              <span className="icon icon-redo2" />
            </button>
          </History>
          <button disabled={!hasFile} onClick={onRotateLeft} data-tipsy="Rotate Left" className="tipsy tipsy--sw">
            <span className="icon icon-undo" />
          </button>
          <button disabled={!hasFile} onClick={onRotateRight} data-tipsy="Rotate Right" className="tipsy tipsy--sw">
            <span className="icon icon-redo" />
          </button>
          <CropMenu isCropping={crop}>
            <button disabled={!hasFile} data-showOnlyWhen='croppingIsOff' onClick={onCropStart} data-tipsy="Crop" className="tipsy tipsy--sw">
              <span className="icon icon-crop" />
            </button>
            <button disabled={!hasFile} data-showOnlyWhen='croppingIsOn' style={{ color: 'cyan' }}>
              <span className="icon icon-crop" />
            </button>
            <button disabled={!hasFile} data-showOnlyWhen='croppingIsOn' onClick={onCropConfirm} style={{ color: 'green' }} data-tipsy="Confirm" className="tipsy tipsy--sw">
              <span className="icon icon-checkmark" />
            </button>
            <button disabled={!hasFile} data-showOnlyWhen='croppingIsOn' onClick={onCropCancel} style={{ color: 'red' }} data-tipsy="Cancel" className="tipsy tipsy--sw">
              <span className="icon icon-cross" />
            </button>
          </CropMenu>
          <button disabled={!hasFile} onClick={onSave} data-tipsy="Save" className="tipsy tipsy--sw">
            <span className="icon icon-floppy-disk" />
          </button>
        </Toolbar>
        <Canvas ref="canvasWrapper" crop={crop} source={source} angle={angle} width={canvasWidth} height={canvasHeight}>
          <FilePicker hasFile={hasFile} onChange={onFileChange} />
        </Canvas>
      </Darkroom>
    </div>
  );
}