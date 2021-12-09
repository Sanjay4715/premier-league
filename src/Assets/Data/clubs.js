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
  },
  {
    name: "Barnsley",
    logo: (
      <img src={Barnsley} alt="Barnsley" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "https://www.barnsleyfcdirect.co.uk/",
    stadium: "Oakwell",
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
  },
  {
    name: "Blackpool",
    logo: (
      <img src={Blackpool} alt="Blackpool" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "http://shop.blackpoolfc.co.uk/",
    stadium: "Bloomfield Road",
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
  },
  {
    name: "AfcBournemouth",
    logo: (
      <img
        src={AfcBournemouth}
        alt="AfcBournemouth"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.afcb.co.uk/",
    stadium: "Vitality Stadium",
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
  },
  {
    name: "Brentford",
    logo: (
      <img src={Brentford} alt="Brentford" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "https://www.brentfordfc.com",
    stadium: "Brentford Community Stadium",
  },
  {
    name: "Brighton and Hove Albion",
    logo: (
      <img
        src={BrightonHoveAlbion}
        alt="BrightonHoveAlbion"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.brightonandhovealbion.com",
    stadium: "Amex Stadium",
  },
  {
    name: "Burnley",
    logo: <img src={Burnley} alt="Burnley" style={{ width: 50, height: 50 }} />,
    siteUrl: "https://www.burnleyfootballclub.com",
    stadium: "Turf Moor",
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
  },
  {
    name: "Chelsea",
    logo: <img src={Chelsea} alt="Chelsea" style={{ width: 50, height: 50 }} />,
    siteUrl: "https://www.chelseafc.com/",
    stadium: "Stamford Bridge",
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
  },
  {
    name: "Everton",
    logo: <img src={Everton} alt="Everton" style={{ width: 50, height: 50 }} />,
    siteUrl: "http://www.evertonfc.com/",
    stadium: "Goodison Park",
  },
  {
    name: "Fulham",
    logo: <img src={Fulham} alt="Fulham" style={{ width: 50, height: 50 }} />,
    siteUrl: "http://www.fulhamfc.com/",
    stadium: "Craven Cottage",
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
  },
  {
    name: "Hull City",
    logo: (
      <img src={HullCity} alt="HullCity" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "http://www.hullcitytigers.com/",
    stadium: "KCOM Stadium",
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
  },
  {
    name: "Liverpool",
    logo: (
      <img src={Liverpool} alt="Liverpool" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "https://www.liverpoolfc.com",
    stadium: "Anfield",
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
  },
  {
    name: "Reading",
    logo: <img src={Reading} alt="Reading" style={{ width: 50, height: 50 }} />,
    siteUrl: "",
    stadium: "Madejski Stadium",
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
  },
  {
    name: "Stoke City",
    logo: (
      <img src={StokeCity} alt="StokeCity" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "https://www.stokecityfc.com",
    stadium: "bet365 Stadium",
  },
  {
    name: "Sunderland",
    logo: (
      <img
        src={Sunderland}
        alt="Sunderland"
        style={{ width: 50, height: 50 }}
      />
    ),
    siteUrl: "https://www.safc.com",
    stadium: "Stadium of Light",
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
  },
  {
    name: "Watford",
    logo: <img src={Watford} alt="Watford" style={{ width: 50, height: 50 }} />,
    siteUrl: "https://www.watfordfc.com",
    stadium: "Vicarage Road",
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
  },
  {
    name: "Wimbledon",
    logo: (
      <img src={Wimbledon} alt="Wimbledon" style={{ width: 50, height: 50 }} />
    ),
    siteUrl: "",
    stadium: "Selhurst Park",
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
  },
];
