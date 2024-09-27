import styled from "styled-components";
import DropdownSearch from "./DropdownSearch";
import { useFormContext } from "../context";

const mapToOptions = (arr: string[]) =>
  arr.map((value) => ({
    label: value,
    value: value.toLocaleLowerCase().replace(" ", "_"),
  }));

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-width);
  background-color: yellow;
  grid-area: filters;
  border-radius: var(--radius);
  padding: var(--gap-width);
`;

const movieGenres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Thriller",
  "Fantasy",
  "Science Fiction (Sci-Fi)",
  "Romance",
  "Mystery",
  "Crime",
  "Historical",
  "War",
  "Western",
  "Musical",
  "Animation",
  "Documentary",
  "Family",
  "Biographical (Biopic)",
  "Superhero",
  "Sports",
  "Noir",
  "Psychological",
  "Martial Arts",
  "Slasher",
  "Disaster",
  "Dark Comedy",
  "Coming-of-Age",
  "Epic",
  "Experimental",
];

const movieMoods = [
  "Uplifting",
  "Tense",
  "Heartwarming",
  "Melancholic",
  "Exciting",
  "Romantic",
  "Suspenseful",
  "Chilling",
  "Dark",
  "Inspiring",
  "Comedic",
  "Reflective",
  "Adventurous",
  "Feel-Good",
  "Bittersweet",
  "Gritty",
  "Mysterious",
  "Action-Packed",
  "Nostalgic",
  "Whimsical",
  "Intense",
  "Thought-Provoking",
  "Epic",
  "Somber",
  "Lighthearted",
  "Quirky",
  "Dramatic",
  "Empowering",
  "Atmospheric",
  "Emotional",
];

const movieTypes = [
  "Feature Film",
  "Short Film",
  "Series",
  "Mini-Series",
  "Documentary",
  "Docuseries",
  "Animated Film",
  "Animated Series",
  "TV Movie",
  "Anthology Series",
  "Web Series",
  "Musical",
  "Silent Film",
  "Biopic",
  "Mockumentary",
  "Reboot",
  "Remake",
  "Sequel",
  "Prequel",
  "Spin-Off",
  "Live-Action",
  "Stage Recording",
  "Experimental Film",
  "Made-for-TV Special",
];

const SearchFilters = () => {
  const { register } = useFormContext();

  return (
    <StyledContainer>
      <DropdownSearch
        {...register("genre")}
        options={mapToOptions(movieGenres)}
        idleOption={{ label: "All genres", value: "" }}
      />
      <DropdownSearch
        {...register("mood")}
        options={mapToOptions(movieMoods)}
        idleOption={{ label: "All moods", value: "" }}
      />
      <DropdownSearch
        {...register("type")}
        options={mapToOptions(movieTypes)}
        idleOption={{ label: "All types", value: "" }}
      />
    </StyledContainer>
  );
};

export default SearchFilters;
