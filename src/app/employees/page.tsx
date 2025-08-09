"use client";

import Sidebar from "@/components/navigation-sidebar/navSidebar";
import Header from "@/components/header/header";
import List from "@/components/list/list";

import styles from "./employees.module.css";

import { Button, Typography } from "@mui/material";
import Plus from "@mui/icons-material/Add";

export default function Home() {
  const handleRowClick = (row: any, key: number) => {
    window.location.href = window.location.href + "/" + key.toString();
  };

  const exampleRows = [
    ["Amelia Garcia", "0793745281", "Product Manager", "11/04/2018"],
    ["Oliver Lopez", "0725896347", "Marketing Specialist", "23/07/2022"],
    ["Emma Williams", "0768435129", "Sales Representative", "05/01/2016"],
    ["James Thomas", "0741592638", "Software Engineer", "18/11/2020"],
    ["Sophia Miller", "0712365478", "Data Analyst", "09/09/2021"],
    ["Noah Wilson", "0789741253", "UX Designer", "02/03/2019"],
    [
      "Charlotte Anderson",
      "0755588899",
      "Human Resources Generalist",
      "29/10/2017",
    ],
    ["Henry Garcia", "0763214587", "Financial Analyst", "15/06/2023"],
    ["Olivia Brown", "0778945612", "Operations Manager", "21/08/2015"],
    ["Lucas Johnson", "0711122233", "Software Engineer", "14/02/2024"],
    [
      "Evelyn Rodriguez",
      "0744477788",
      "Customer Support Specialist",
      "07/12/2019",
    ],
    ["William Smith", "0788899900", "Product Manager", "19/04/2018"],
    ["Mia Davis", "0752535456", "Marketing Specialist", "30/06/2016"],
    ["Benjamin Williams", "0798765432", "Data Analyst", "13/05/2022"],
    ["Liam Hernandez", "0730313233", "UX Designer", "25/11/2020"],
    [
      "Isabella Taylor",
      "0747484950",
      "Human Resources Generalist",
      "08/07/2017",
    ],
    ["Elijah Gonzalez", "0765676869", "Financial Analyst", "16/09/2021"],
    ["Amelia Thomas", "0789878987", "Operations Manager", "03/01/2019"],
    ["James Johnson", "0710111213", "Software Engineer", "28/10/2023"],
    ["Sophia Davis", "0723242526", "Customer Support Specialist", "17/02/2016"],
    ["Noah Martinez", "0756575859", "Product Manager", "22/04/2018"],
    ["Charlotte Brown", "0781828384", "Marketing Specialist", "10/06/2022"],
    ["Henry Rodriguez", "0734353637", "Sales Representative", "04/08/2015"],
    ["Olivia Miller", "0769676564", "Software Engineer", "12/03/2020"],
    ["Lucas Wilson", "0790919293", "Data Analyst", "24/05/2021"],
    ["Evelyn Smith", "0743454647", "UX Designer", "06/11/2019"],
    [
      "William Anderson",
      "0776777879",
      "Human Resources Generalist",
      "01/09/2017",
    ],
    ["Mia Thomas", "0789909192", "Financial Analyst", "26/12/2022"],
    ["Benjamin Hernandez", "0713141516", "Operations Manager", "11/07/2016"],
    ["Liam Davis", "0758596061", "Software Engineer", "14/03/2024"],
    [
      "Isabella Taylor",
      "0793949596",
      "Customer Support Specialist",
      "07/05/2019",
    ],
    ["Elijah Lopez", "0745464748", "Product Manager", "20/09/2021"],
    ["Amelia Williams", "0788998899", "Marketing Specialist", "02/02/2016"],
    ["James Smith", "0720212223", "Sales Representative", "27/11/2020"],
    ["Sophia Gonzalez", "0753545556", "Data Analyst", "18/08/2017"],
    ["Noah Johnson", "0766655544", "UX Designer", "10/10/2022"],
    [
      "Charlotte Martinez",
      "0799887766",
      "Human Resources Generalist",
      "03/04/2018",
    ],
    ["Henry Davis", "0712345678", "Financial Analyst", "24/01/2023"],
    ["Olivia Hernandez", "0787654321", "Operations Manager", "16/09/2015"],
    ["Lucas Thomas", "0755443322", "Software Engineer", "28/11/2022"],
    [
      "Evelyn Miller",
      "0711223344",
      "Customer Support Specialist",
      "09/06/2018",
    ],
    ["William Garcia", "0733445566", "Product Manager", "21/01/2021"],
    ["Mia Wilson", "0766778899", "Marketing Specialist", "13/04/2017"],
    ["Benjamin Brown", "0799001122", "Data Analyst", "05/10/2023"],
    ["Liam Anderson", "0745678910", "UX Designer", "17/12/2015"],
    [
      "Isabella Lopez",
      "0710203040",
      "Human Resources Generalist",
      "30/03/2022",
    ],
    ["Elijah Davis", "0750607080", "Financial Analyst", "23/07/2019"],
    ["Amelia Taylor", "0780901020", "Operations Manager", "08/02/2017"],
    ["James Rodriguez", "0720304050", "Software Engineer", "19/05/2024"],
    [
      "Sophia Johnson",
      "0760708090",
      "Customer Support Specialist",
      "12/09/2020",
    ],
  ];

  return (
    <div className={styles.home_page_container}>
      <Sidebar index={2}></Sidebar>
      <div className={styles.home_content_container}>
        <Header Title="Muqtada Abdulrasool"></Header>
        <div className={styles.content_container}>
          <List
            title="Table of Employees"
            search
            dense
            denseButton
            func={[
              <Button size="medium" variant="contained" endIcon={<Plus />}>
                <Typography
                  variant="h6"
                  color="var(--mui-palette-primary-contrastText)"
                >
                  CREATE
                </Typography>
              </Button>,
            ]}
            onclick={(row, key) => handleRowClick(row, key)}
            columns={["Full Name", "Mobile", "Position", "Date of Employement"]}
            rows={exampleRows}
          ></List>
        </div>
      </div>
    </div>
  );
}
