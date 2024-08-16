import {
    FitnessCenterRounded,
    LocalFireDepartmentRounded,
  } from "@mui/icons-material";
  
  export const counts = [
    {
      name: "Calories Burned",
      icon: (
        <LocalFireDepartmentRounded sx={{ color: "inherit", fontSize: "26px" }} />
      ),
      desc: "Total calories burned today",
      key: "totalCaloriesBurnt",
      unit: "kcal",
      color: "#eb9e34",
      lightColor: "#FDF4EA",
    },
    {
      name: "Workouts",
      icon: <FitnessCenterRounded sx={{ color: "inherit", fontSize: "26px" }} />,
      desc: "Total number of workouts today",
      key: "totalWorkouts",
      unit: "",
      color: "#41C1A6",
      lightColor: "#E8F6F3",
    },
  ];