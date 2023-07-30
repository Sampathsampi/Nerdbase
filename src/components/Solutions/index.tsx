import { solutionsData } from "@/constants/utilities";
import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import GridSolution from './GridSolutions';

const arrow = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M27 9L4.8125 31.25C4.3125 31.75 3.71833 32 3.03 32C2.34167 32 1.74833 31.75 1.25 31.25C0.749999 30.75 0.5 30.1558 0.5 29.4675C0.5 28.7792 0.749999 28.1858 1.25 27.6875L23.5 5.5H4.5C3.79167 5.5 3.1975 5.26 2.7175 4.78C2.2375 4.3 1.99833 3.70667 2 3C2 2.29167 2.24 1.6975 2.72 1.2175C3.2 0.737501 3.79333 0.498334 4.5 0.500001H29.5C30.2083 0.500001 30.8025 0.740001 31.2825 1.22C31.7625 1.7 32.0017 2.29333 32 3V28C32 28.7083 31.76 29.3025 31.28 29.7825C30.8 30.2625 30.2067 30.5017 29.5 30.5C28.7917 30.5 28.1975 30.26 27.7175 29.78C27.2375 29.3 26.9983 28.7067 27 28V9Z" fill="#00051a"/>
</svg>
`;

const 
SolutionsList = () => {
  return (
    <Grid container item xs={11}>
      {solutionsData.map((item, i) => (
       <GridSolution item={item} i={i} key={i}/>
      ))}
    </Grid>
  );
};

export default SolutionsList;
