let respecConfig = {
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
  shortName: "ori",
 
  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-types
  specType: "IM",
 
  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-statussen
  specStatus: "BASIS",
  publishDate: "2024-02-20",
  publishVersion: "2.0.1",
  
  // Zie 'localizationStrings/nl' voor de lijst met toegestane maturities
  previousMaturity: "DEF",
  previousPublishDate: "2023-12-13",
  previousPublishVersion: "2.0.0",

  title: "Open Raads- en Stateninformatie",
  content: {"ch01": "informative", "ch02": "", "mermaid": ""},
  editors:
    [
      {
        name: "Robert Melskens",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      },
    ],
  authors:
    [
      {
        name: "Johan Boer",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      },
      {
        name: "Henri Korver",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      }
    ],
  github: "https://github.com/VNG-Realisatie/Respec-test",
//  github: 
//    {
//      repoURL: "VNG-Realisatie/Respec-test",
//      branch: "development",
//    },
//  maxTocLevel: 2,
    localBiblio: {
        "xxxxx": {
            href: "https://xxxx.xxx",
            title: "Xxxxxxxxxxx",
            authors: [
              {
                "A. Bcdefg",
              },
              {
                "B. Cdefgh",
              }
            ],
            date: "June 2023"
        },
    },

  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "cim-ori-2.0.0.pdf",
      },
  ],
};
