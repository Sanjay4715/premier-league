import React from "react";

import Arsenal from "../Logo/Arsenal.svg";
import AstonVilla from "../Logo/AstonVilla.svg";
import Barnsley from "../Logo/Barnsley.svg";
import BirminghamCity from "../Logo/BirminghamCity.svg";
import BlackburnRovers from "../Logo/BlackburnRovers.svg";
import Blackpool from "../Logo/Blackpool.svg";
import BoltonWanderers from "../Logo/BoltonWanderers.svg";
import AfcBournemouth from "../Logo/AfcBournemouth.svg";
import BradfordCity from "../Logo/BradfordCity.svg";
import Brentford from "../Logo/Brentford.svg";
import BrightonHoveAlbion from "../Logo/BrightonHoveAlbion.svg";
import Burnley from "../Logo/Burnley.svg";
import CardiffCity from "../Logo/CardiffCity.svg";
import CharltonAthletic from "../Logo/CharltonAthletic.svg";
import Chelsea from "../Logo/Chelsea.svg";
import CoventryCity from "../Logo/CoventryCity.svg";
import CrystalPalace from "../Logo/CrystalPalace.svg";
import DerbyCounty from "../Logo/DerbyCounty.svg";
import Everton from "../Logo/Everton.svg";
import Fulham from "../Logo/Fulham.svg";
import HuddersfieldTown from "../Logo/HuddersfieldTown.svg";
import HullCity from "../Logo/HullCity.svg";
import IpswichTown from "../Logo/IpswichTown.svg";
import LeedsUnited from "../Logo/LeedsUnited.svg";
import LeicesterCity from "../Logo/LeicesterCity.svg";
import Liverpool from "../Logo/Liverpool.svg";
import ManchesterCity from "../Logo/ManchesterCity.svg";
import ManchesterUnited from "../Logo/ManchesterUnited.svg";
import Middlesbrough from "../Logo/Middlesbrough.svg";
import NewcastleUnited from "../Logo/NewcastleUnited.svg";
import NorwichCity from "../Logo/NorwichCity.svg";
import NottinghamForest from "../Logo/NottinghamForest.svg";
import OldhamAthletic from "../Logo/OldhamAthletic.svg";
import Portsmouth from "../Logo/Portsmouth.svg";
import QueensParkRangers from "../Logo/QueensParkRangers.svg";
import Reading from "../Logo/Reading.svg";
import SheffieldUnited from "../Logo/SheffieldUnited.svg";
import SheffieldWednesday from "../Logo/SheffieldWednesday.svg";
import Southampton from "../Logo/Southampton.svg";
import StokeCity from "../Logo/StokeCity.svg";
import Sunderland from "../Logo/Sunderland.svg";
import SwanseaCity from "../Logo/SwanseaCity.svg";
import SwindonTown from "../Logo/SwindonTown.svg";
import TottenhamHotspur from "../Logo/TottenhamHotspur.svg";
import Watford from "../Logo/Watford.svg";
import WestBromwichAlbion from "../Logo/WestBromwichAlbion.svg";
import WestHamUnited from "../Logo/WestHamUnited.svg";
import WiganAthletic from "../Logo/WiganAthletic.svg";
import Wimbledon from "../Logo/Wimbledon.svg";
import WolverhamptonWanderers from "../Logo/WolverhamptonWanderers.svg";

export const clubs = [
  {
    name: "Arsenal",
    logo: <img src={Arsenal} alt="Arsenal" style={{ width: 50, height: 50 }} />,
    siteUrl: "https://www.arsenal.com",
    stadium: "Emirates Stadium",
    clubColor: "#bd0c37",
    textColor: "#fff",
  },
  {
    name: "Aston Villa",
    logo: (
      <img
        src={AstonVilla}
        alt="AstonVilla"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.avfc.co.uk",
    stadium: "Villa Park",
    clubColor: "#94bee6",
    textColor: "#181818",
  },
  {
    name: "Barnsley",
    logo: (
      <img src={Barnsley} alt="Barnsley" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "https://www.barnsleyfcdirect.co.uk/",
    stadium: "Oakwell",
    clubColor: "#dedddf",
    textColor: "#181818",
  },
  {
    name: "Birmingham City",
    logo: (
      <img
        src={BirminghamCity}
        alt="BirminghamCity"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.bluesonlinestore.co.uk/",
    stadium: "St.Andrew's Trillion Trophy Stadium",
    clubColor: "#357abe",
    textColor: "#fff",
  },
  {
    name: "Blackburn Rovers",
    logo: (
      <img
        src={BlackburnRovers}
        alt="BlackburnRovers"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "http://www.roverstore.co.uk/",
    stadium: "Ewood Park",
    clubColor: "#0a758d",
    textColor: "#fff",
  },
  {
    name: "Blackpool",
    logo: (
      <img src={Blackpool} alt="Blackpool" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "http://shop.blackpoolfc.co.uk/",
    stadium: "Bloomfield Road",
    clubColor: "#f7aa75",
    textColor: "#181818",
  },
  {
    name: "BoltonWanderers",
    logo: (
      <img
        src={BoltonWanderers}
        alt="BoltonWanderers"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "http://www.bwfcdirect.co.uk/",
    stadium: "University of Bolton Stadium",
    clubColor: "#05386f",
    textColor: "#fff",
  },
  {
    name: "AFC Bournemouth",
    logo: (
      <img
        src={AfcBournemouth}
        alt="AfcBournemouth"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.afcb.co.uk/",
    stadium: "Vitality Stadium",
    clubColor: "#c6090e",
    textColor: "#fff",
  },
  {
    name: "BradfordCity",
    logo: (
      <img
        src={BradfordCity}
        alt="BradfordCity"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "http://bantams.clubstore.co.uk/",
    stadium: "Valley Parade",
    clubColor: "#db9f65",
    textColor: "#181818",
  },
  {
    name: "Brentford",
    logo: (
      <img src={Brentford} alt="Brentford" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "https://www.brentfordfc.com",
    stadium: "Brentford Community Stadium",
    clubColor: "#d20001",
    textColor: "#fff",
  },
  {
    name: "Brighton & Hove Albion",
    logo: (
      <img
        src={BrightonHoveAlbion}
        alt="BrightonHoveAlbion"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.brightonandhovealbion.com",
    stadium: "Amex Stadium",
    clubColor: "#054a5",
    textColor: "#181818",
  },
  {
    name: "Burnley",
    logo: <img src={Burnley} alt="Burnley" style={{ width: 50, height: 50 }} />,
    siteUrl: "https://www.burnleyfootballclub.com",
    stadium: "Turf Moor",
    clubColor: "#8dd3f5",
    textColor: "#181818",
  },
  {
    name: "Cardiff City",
    logo: (
      <img
        src={CardiffCity}
        alt="CardiffCity"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.cardiffcityfc.co.uk",
    stadium: "Cardiff City Stadium",
    clubColor: "#075a9f",
    textColor: "#fff",
  },
  {
    name: "CharltonAthletic",
    logo: (
      <img
        src={CharltonAthletic}
        alt="CharltonAthletic"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "http://addicks.clubstore.co.uk/",
    stadium: "The Valley",
    clubColor: "#df2528",
    textColor: "#181818",
  },
  {
    name: "Chelsea",
    logo: <img src={Chelsea} alt="Chelsea" style={{ width: 50, height: 50 }} />,
    siteUrl: "https://www.chelseafc.com/",
    stadium: "Stamford Bridge",
    clubColor: "#173d86",
    textColor: "#fff",
  },
  {
    name: "CoventryCity",
    logo: (
      <img
        src={CoventryCity}
        alt="CoventryCity"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "",
    stadium: "Highfield Road",
    clubColor: "#2580a4",
    textColor: "#181818",
  },
  {
    name: "Crystal Palace",
    logo: (
      <img
        src={CrystalPalace}
        alt="CrystalPalace"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.cpfc.co.uk",
    stadium: "Selhurst Park",
    clubColor: "#1b3161",
    textColor: "#fff",
  },
  {
    name: "DerbyCounty",
    logo: (
      <img
        src={DerbyCounty}
        alt="DerbyCounty"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "http://www.dcfcmegastore.co.uk/",
    stadium: "Pride Park Stadium",
    clubColor: "#fff",
    textColor: "#181818",
  },
  {
    name: "Everton",
    logo: <img src={Everton} alt="Everton" style={{ width: 50, height: 50 }} />,
    siteUrl: "http://www.evertonfc.com/",
    stadium: "Goodison Park",
    clubColor: "#024593",
    textColor: "#fff",
  },
  {
    name: "Fulham",
    logo: <img src={Fulham} alt="Fulham" style={{ width: 50, height: 50 }} />,
    siteUrl: "http://www.fulhamfc.com/",
    stadium: "Craven Cottage",
    clubColor: "#a23e38",
    textColor: "#fff",
  },
  {
    name: "Huddersfield Town",
    logo: (
      <img
        src={HuddersfieldTown}
        alt="HuddersfieldTown"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "http://www.ftafc.com/",
    stadium: "John Smith's Stadium",
    clubColor: "#0c497a",
    textColor: "#fff",
  },
  {
    name: "Hull City AFC",
    logo: (
      <img src={HullCity} alt="HullCity" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "http://www.hullcitytigers.com/",
    stadium: "KCOM Stadium",
    clubColor: "#f5a22e",
    textColor: "#181818",
  },
  {
    name: "Ipswich Town",
    logo: (
      <img
        src={IpswichTown}
        alt="IpswichTown"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "",
    stadium: "Portman Road",
    clubColor: "#0b3e91",
    textColor: "#181818",
  },
  {
    name: "Leeds United",
    logo: (
      <img
        src={LeedsUnited}
        alt="LeedsUnited"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.leedsunited.com",
    stadium: "Elland Road",
    clubColor: "#fddf13",
    textColor: "#181818",
  },
  {
    name: "Leicester City",
    logo: (
      <img
        src={LeicesterCity}
        alt="LeicesterCity"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.lcfc.com",
    stadium: "King Powder Stadium",
    clubColor: "#9bb1d9",
    textColor: "#181818",
  },
  {
    name: "Liverpool",
    logo: (
      <img src={Liverpool} alt="Liverpool" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "https://www.liverpoolfc.com",
    stadium: "Anfield",
    clubColor: "#1d8b7b",
    textColor: "#fff",
  },
  {
    name: "Manchester City",
    logo: (
      <img
        src={ManchesterCity}
        alt="ManchesterCity"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.mancity.com",
    stadium: "Eithad Stadium",
    clubColor: "#7fb1dc",
    textColor: "#181818",
  },
  {
    name: "Manchester United",
    logo: (
      <img
        src={ManchesterUnited}
        alt="ManchesterUnited"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.manutd.com",
    stadium: "Old Trafford",
    clubColor: "#d0030c",
    textColor: "#fff",
  },
  {
    name: "Middlesbrough",
    logo: (
      <img
        src={Middlesbrough}
        alt="Middlesbrough"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.mfc.co.uk",
    stadium: "Riverside Stadium",
    clubColor: "#da1d23",
    textColor: "#fff",
  },
  {
    name: "Newcastle United",
    logo: (
      <img
        src={NewcastleUnited}
        alt="NewcastleUnited"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.nufc.co.uk",
    stadium: "St. James' Park",
    clubColor: "#918f90",
    textColor: "#181818",
  },
  {
    name: "Norwich City",
    logo: (
      <img
        src={NorwichCity}
        alt="NorwichCity"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.canaries.co.uk",
    stadium: "Carrow Road",
    clubColor: "#00a650",
    textColor: "#181818",
  },
  {
    name: "Nottingham Forest",
    logo: (
      <img
        src={NottinghamForest}
        alt="NottinghamForest"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "",
    stadium: "City Ground",
    clubColor: "#ff6e7b",
    textColor: "#181818",
  },
  {
    name: "Oldham Athletic",
    logo: (
      <img
        src={OldhamAthletic}
        alt="OldhamAthletic"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "",
    stadium: "Boundary Park",
    clubColor: "#babcc0",
    textColor: "#181818",
  },
  {
    name: "Portsmouth",
    logo: (
      <img
        src={Portsmouth}
        alt="Portsmouth"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "",
    stadium: "Fratton Park",
    clubColor: "#001485",
    textColor: "#fff",
  },
  {
    name: "Queens Park Rangers",
    logo: (
      <img
        src={QueensParkRangers}
        alt="QueensParkRangers"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "",
    stadium: "Loftus Road",
    clubColor: "#95b3cf",
    textColor: "#181818",
  },
  {
    name: "Reading",
    logo: <img src={Reading} alt="Reading" style={{ width: 50, height: 50 }} />,
    siteUrl: "",
    stadium: "Madejski Stadium",
    clubColor: "#82c28",
    textColor: "#181818",
  },
  {
    name: "Sheffield United",
    logo: (
      <img
        src={SheffieldUnited}
        alt="SheffieldUnited"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www/sufc.co.uk",
    stadium: "Bramall Lane",
    clubColor: "#ec1d26",
    textColor: "#fff",
  },
  {
    name: "Sheffield Wednesday",
    logo: (
      <img
        src={SheffieldWednesday}
        alt="SheffieldWednesday"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "",
    stadium: "Hillsborough",
    clubColor: "#4681cf",
    textColor: "#181818",
  },
  {
    name: "Southampton",
    logo: (
      <img
        src={Southampton}
        alt="Southampton"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.southamptonfc.com",
    stadium: "St. Mary's Stadium",
    clubColor: "#bb0d13",
    textColor: "#fff",
  },
  {
    name: "Stoke City",
    logo: (
      <img src={StokeCity} alt="StokeCity" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "https://www.stokecityfc.com",
    stadium: "bet365 Stadium",
    clubColor: "#cf1a32",
    textColor: "#fff",
  },
  {
    name: "Sunderland AFC",
    logo: (
      <img
        src={Sunderland}
        alt="Sunderland"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.safc.com",
    stadium: "Stadium of Light",
    clubColor: "#ab270a",
    textColor: "#fff",
  },
  {
    name: "Swansea City",
    logo: (
      <img
        src={SwanseaCity}
        alt="Southampton"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.swanseacity.com",
    stadium: "Liberty Stadium",
    clubColor: "#1c1c1a",
    textColor: "#fff",
  },
  {
    name: "Swindon Town",
    logo: (
      <img
        src={SwindonTown}
        alt="SwindonTown"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "",
    stadium: "County Ground",
    clubColor: "#dd3b2b",
    textColor: "#181818",
  },
  {
    name: "Tottenham Hotspur",
    logo: (
      <img
        src={TottenhamHotspur}
        alt="TottenhamHotspur"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.tottenhamhotspur.com",
    stadium: "Tottenham Hotspur Stadium",
    clubColor: "#3d497a",
    textColor: "#fff",
  },
  {
    name: "Watford",
    logo: <img src={Watford} alt="Watford" style={{ width: 50, height: 50 }} />,
    siteUrl: "https://www.watfordfc.com",
    stadium: "Vicarage Road",
    clubColor: "#ffea00",
    textColor: "#181818",
  },
  {
    name: "West Bromwich Albion",
    logo: (
      <img
        src={WestBromwichAlbion}
        alt="WestBromwichAlbion"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.wba.co.uk",
    stadium: "The Hawthorns",
    clubColor: "#112d66",
    textColor: "#fff",
  },
  {
    name: "West Ham United",
    logo: (
      <img
        src={WestHamUnited}
        alt="WestHamUnited"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.whufc.com",
    stadium: "London Stadium",
    clubColor: "#7d2c3b",
    textColor: "#fff",
  },
  {
    name: "Wigan Athletic",
    logo: (
      <img
        src={WiganAthletic}
        alt="WiganAthletic"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "",
    stadium: "DW Stadium",
    clubColor: "#005ca7",
    textColor: "#fff",
  },
  {
    name: "Wimbledon",
    logo: (
      <img src={Wimbledon} alt="Wimbledon" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "",
    stadium: "Selhurst Park",
    clubColor: "#ca961f",
    textColor: "#181818",
  },
  {
    name: "Wolverhampton Wanderers",
    logo: (
      <img
        src={WolverhamptonWanderers}
        alt="WolverhamptonWanderers"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.wolves.co.uk",
    stadium: "Molineux Stadium",
    clubColor: "#f8a019",
    textColor: "#181818",
  },
];
