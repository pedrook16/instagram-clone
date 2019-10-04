import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import foto from "../../assets/foto.jpg";

import api from "../../services/api";
import { token } from "../../utils/utils";

const useStyles = makeStyles(theme => ({
  card: {
    width: 600,
    maxWidth: 600
  },
  media: {
    width: 600,
    height: 400,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },

  content: {
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 30
  }
}));

export default function CardUser() {
  const classes = useStyles();

  const [publi, setPubli] = useState([]);

  useEffect(() => {
    async function loadPubli() {
      const response = await api.get("/publication", {
        headers: token()
      });
      setPubli(response.data);
    }
    loadPubli();
  }, []);

  return (
    <>
      {publi.map(pu => (
        <Card className={classes.card} style={{ marginBottom: 50 }}>
          {pu.author.map(au => (
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <img style={{ height: 50 }} src={au.avatar} alt="" srcset="" />
                </Avatar>
              }
              title={au.username}
            />
          ))}
          <CardMedia
            className={classes.media}
            image={pu.photo_url}
            title="public"
          />
          <CardContent className={classes.content}>            
              {pu.description}           
          </CardContent>
        </Card>
      ))}
    </>
  );
}
