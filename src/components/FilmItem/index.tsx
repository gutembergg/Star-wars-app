import React, { HTMLAttributes } from "react";

import { Item } from "./styles";

interface IProps extends HTMLAttributes<HTMLIonItemElement> {
  title: string;
  url: string;
}

const FilmItem: React.FC<IProps> = ({ title, url, ...rest }) => {
  const urlSplited = url.split("/");
  const filmId = urlSplited[urlSplited.length - 2];
  return (
    <Item button {...rest} routerLink={`/film/${filmId}`}>
      {title}
    </Item>
  );
};

export default FilmItem;
