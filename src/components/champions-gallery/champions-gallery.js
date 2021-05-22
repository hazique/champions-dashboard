import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import RemoveIcon from '@material-ui/icons/Remove';
import tileData from './titleData';

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

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ChampionsGallery(props) {

  
  const classes = useStyles();

  const removeFavourite = function (event){
    console.log("Favourite removed");
  }

  const addFavourite = function (event){
    console.log("Favourite added");
  }

  const {isFavourite, players} = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            { isFavourite
              ? <GridListTileBar
                title={tile.title}
                subtitle={<span>by: Test author</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={removeFavourite}>
                    <RemoveIcon />
                  </IconButton>
                }
              />
              : <GridListTileBar
                title={tile.title}
                subtitle={<span>by: Test author</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={addFavourite}>
                    <StarIcon />
                  </IconButton>
                }
              />

            }
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}