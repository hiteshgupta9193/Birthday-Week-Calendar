import { days } from "./constants";

export const data = [
  {
    name: "abs bss",
    birthday: "12/22/2004"
  },
  {
    name: "bas cas",
    birthday: "11/25/2004"
  },
  {
    name: "cas dsqa",
    birthday: "12/21/2004"
  },
  {
    name: "dasem efsd",
    birthday: "10/09/2004"
  },
  {
    name: "efas fasd",
    birthday: "11/10/2005"
  },
  {
    name: "gasjd hassa",
    birthday: "01/07/2005"
  },
  {
    name: "hajsdh iasd",
    birthday: "12/09/2005"
  },
  {
    name: "jaksjd kalsk",
    birthday: "01/10/2005"
  },
  {
    name: "kalsd lasda",
    birthday: "02/05/2005"
  },
  {
    name: "lasd masd",
    birthday: "03/07/2005"
  },
  {
    name: "iasdas jasdas",
    birthday: "04/12/2005"
  },
  {
    name: "masdas nasdas",
    birthday: "05/09/2005"
  },
  {
    name: "nasd oasd",
    birthday: "06/25/2005"
  },
  {
    name: "oasd padg",
    birthday: "07/15/2005"
  },
  {
    name: "pasdf qsdf",
    birthday: "08/18/2005"
  },
  {
    name: "qsdf rasdf",
    birthday: "09/10/2005"
  },
  {
    name: "rasd sadsd",
    birthday: "10/17/2005"
  },
  {
    name: "sasd tasf",
    birthday: "11/19/2004"
  },
  {
    name: "tasdf uasdas",
    birthday: "12/02/2004"
  },
  {
    name: "uasd vklk",
    birthday: "01/08/2004"
  },
  {
    name: "vasf wasda",
    birthday: "02/04/2004"
  },
  {
    name: "waxc xasd",
    birthday: "03/06/2004"
  },
  {
    name: "xzxd ysdf",
    birthday: "06/12/2004"
  },
  {
    name: "yasf zasd",
    birthday: "08/18/2004"
  },
  {
    name: "fasd gasd",
    birthday: "09/15/2004"
  }
];

const parseDate = date => {
  return new Date(Date.parse(date));
};

const getDayInYear = (dateObj, currentYear) => {
  const updatedDate = new Date(dateObj);
  updatedDate.setFullYear(currentYear);
  return updatedDate.getDay();
};

export const convertData = (data, year) => {
  const daysHash = {
    MON: [],
    TUE: [],
    WED: [],
    THU: [],
    FRI: [],
    SAT: [],
    SUN: []
  };
  data.forEach(({ name, birthday }) => {
    const dateObj = parseDate(birthday);
    if (year < dateObj.getFullYear()) {
      return;
    }
    const day = days[getDayInYear(dateObj, year)];
    const [fName, lName] = name.split(" ");
    const initials = `${fName[0].toUpperCase()}${(lName
      ? lName[0]
      : fName[1]
    ).toUpperCase()}`;
    daysHash[day].push({
      initials,
      birthday,
      dateObj
    });
  });
  return daysHash;
};
