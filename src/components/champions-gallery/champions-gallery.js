import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import RemoveIcon from '@material-ui/icons/Remove';

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

export default function ChampionsGallery(props) {

  const classes = useStyles();

  const removeFavourite = function (player) {
    parentCallback({
      type: 'remove',
      data: player
    });
  }

  const addFavourite = function (player) {
    parentCallback({
      type: 'add',
      player: player
    });
  }

  const { isFavourite, players, parentCallback } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Players</ListSubheader>
        </GridListTile>
        {players.map((player) => (
          <GridListTile key={player.image_url}>
            <img src={player.current_team.image_url} alt={player.slug} />
            { isFavourite
              ? <GridListTileBar
                title={player.name}
                subtitle={<span>{player.slug}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${player.slug}`} className={classes.icon} onClick={removeFavourite}>
                    <RemoveIcon />
                  </IconButton>
                }
              />
              : <GridListTileBar
                title={player.name}
                subtitle={<span>{player.slug}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${player.slug}`} className={classes.icon} onClick={()=> addFavourite(player)}>
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