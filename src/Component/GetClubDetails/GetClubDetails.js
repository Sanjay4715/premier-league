import { clubs } from "../../Assets/Data/clubs";

export const getClubDetails = (clubName) => {
  return clubs.find((data) => data.name === clubName.replace(" FC", ""));
};
