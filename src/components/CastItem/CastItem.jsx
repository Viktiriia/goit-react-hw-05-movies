import { Card, Title, Character } from './CastItem.styled';
const CastItem = ({ profile_path, name, character }) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const defaultImg =
    'https://icons.veryicon.com/png/o/miscellaneous/forestry-in-yiliang/group-people.png';
  return (
    <Card>
      <img
        src={profile_path ? `${BASE_IMG_URL}${profile_path}` : defaultImg}
        width={200}
        height={300}
        alt={character}
      />

      <Title>{name}</Title>
      <Character>{character}</Character>
    </Card>
  );
};
export default CastItem;
