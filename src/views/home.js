import React from 'react';

import Card from './card';
import {
  TRISS_BLUE,
  TRISS_DARK_BLUE,
  TRISS_GOLD,
  TRISS_RED,
} from '../config/colors';

const Home = () => (
  <div style={container}>
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Yennefer"
      subtitle="The most powerful and the most interesting sorceress in the universe."
      imageUrl="https://pre00.deviantart.net/e0cb/th/pre/f/2015/255/0/e/yennefer_by_urumiccina-d99ca3g.jpg"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Triss"
      subtitle="She's such a sweetheart! Not really."
      imageUrl="https://i.imgur.com/QHl1YTk.jpg"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Keira"
      subtitle="A girly and manipulative witch, she ends up with Lambert, of all people."
      imageUrl="https://vignette.wikia.nocookie.net/witcher/images/6/6f/Tw3_journal_keira.png"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Shani"
      subtitle="No matter who you are, Shani will heal your wounds... and your heart."
      imageUrl="https://vignette.wikia.nocookie.net/vedmak/images/4/4a/Shani.jpg"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Yennefer"
      subtitle="The most powerful and the most interesting sorceress in the universe."
      imageUrl="https://pre00.deviantart.net/e0cb/th/pre/f/2015/255/0/e/yennefer_by_urumiccina-d99ca3g.jpg"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Triss"
      subtitle="She's such a sweetheart! Not really."
      imageUrl="https://i.imgur.com/QHl1YTk.jpg"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Keira"
      subtitle="A girly and manipulative witch, she ends up with Lambert, of all people."
      imageUrl="https://vignette.wikia.nocookie.net/witcher/images/6/6f/Tw3_journal_keira.png"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Shani"
      subtitle="No matter who you are, Shani will heal your wounds... and your heart."
      imageUrl="https://vignette.wikia.nocookie.net/vedmak/images/4/4a/Shani.jpg"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Yennefer"
      subtitle="The most powerful and the most interesting sorceress in the universe."
      imageUrl="https://pre00.deviantart.net/e0cb/th/pre/f/2015/255/0/e/yennefer_by_urumiccina-d99ca3g.jpg"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Triss"
      subtitle="She's such a sweetheart! Not really."
      imageUrl="https://i.imgur.com/QHl1YTk.jpg"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Keira"
      subtitle="A girly and manipulative witch, she ends up with Lambert, of all people."
      imageUrl="https://vignette.wikia.nocookie.net/witcher/images/6/6f/Tw3_journal_keira.png"
    />
    <Card
      color={TRISS_GOLD}
      hoverColor={TRISS_RED}
      border={TRISS_DARK_BLUE}
      title="Shani"
      subtitle="No matter who you are, Shani will heal your wounds... and your heart."
      imageUrl="https://vignette.wikia.nocookie.net/vedmak/images/4/4a/Shani.jpg"
    />
  </div>
);

export default Home;

const container = {
  backgroundColor: TRISS_BLUE,
  maxWidth: 940,
  display: 'flex',
  flexWrap: 'wrap',
  margin: 'auto',
  justifyContent: 'center',
};
