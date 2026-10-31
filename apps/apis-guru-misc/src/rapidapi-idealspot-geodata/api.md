<h1 id="idealspot-geodata">IdealSpot GeoData v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Hyperlocal Demographics, Vehicle Traffic, Economic, Market Signals, and More. Use this API to request IdealSpot hyperlocal geospatial market insight and geometry data. 

## Detailed Description

Use this API as your **local economy microscope** by querying [IdealSpot](https://www.idealspot.com) hyperlocal market insight and geometry data. We offer the most precise, extensive, and frequently-updated local market data in the US. Our data is available across the entire US and can be queried at geographic scales ranging from the micro (Census block) through the macro (nation).

Better data and analysis leads to a better understanding of local market opportunities and risks. Integrate with your commercial real estate and marketing applications, machine learning workflows, and other investment analytics.

Our goal is to offer the most complete snapshot of the geographically distributed consumer and retail economy. We start with the fundamentals of consumers and business establishments. To connect retailers with consumers, we provide mobility data like vehicle traffic and mobile device data. To describe consumer intent, we provide geolocated digital marketing data. 

We believe that accurate capital allocation through reliable local market data is foundational to creating robust, healthy, and livable communities for all. We hope you and your clients find tremendous value in this service.

## Features

Query data and GeoJSON geometries at these scales for any US latitude and longitude:

* Rings (0.5 km+)
* Drive time (1-60 minutes)
* Bike time (3-60 minutes)
* Walk time (5-60 minutes)
* Public transit time (5-60 minutes)
* Administrative region (US, states, core-based statistical areas, counties, Census-designated places, Census tracts, zipcodes, Census block groups, opportunity zones)

| Data Feature | Description |
| ------- | ------------------------------|
| Demographics, Housing, Spending | *Updated Quarterly*.  Current and historical market data including population, spending, and housing. Vendor (PopStats) is relied upon by Walgreens, Ulta Beauty, Blackstone, etc |
| Labor, Business Establishments, Economic Conditions | *Updated Quarterly*.  Traditional market data including workforce, business establishment counts, and economic conditions like local GDP, unemployment rates. Vendor (PopStats) is relied upon by Walgreens, Ulta Beauty, Blackstone, etc |
| Consumer segmentation	| *Updated Annually*. Demographics grouped into narrative-oriented segments. |
| Vehicle Traffic |	*Updated semi-annually*. Gold standard in vehicle traffic data from INRIX. Counts by day of week, time of day and side of street. |
| Rings and Travel time polygons | *Estimate in Real-time*. Rings alongside drive time, walk time, bike time, and public transit time polygons. Request as GeoJSON geometries for mapping or use with data queries |
| Administrative region polygons | *Updated Annually*. GeoJSON administrative regions from US Census Bureau: block groups, tracts, counties, CBSAs, states, opportunity zones, USPS zipcodes |
| Internet Search Volumes | 30 day rolling averages for geolocated advertising potential across 450 business categories from major search engines |
| Social Media Interest	| 30 day rolling average for geolocated advertising potential across 450 business categories from major social networks |

### Coming Soon!

This API powers our local market research platform at [IdealSpot.com](https://www.idealspot.com). The functionality exposed so far is only a portion of our current capabilities. We will be exposing additional API features in time so watch this space!

| Data Feature | Description |
| ------- | ------------------------------|
Mobile device visit counts, points of interest, brands | Fresh point of interest data across 3000+ brands, millions of POI, and historical foot traffic counts using mobile data for those points of interest
Origin/destination trips from mobile devices | Map origins and destinations of devices visiting an arbitrary catchment area
Competition search | Search all major point-of-interest aggregators in one query
Environment/climate | Expected weather patterns like temperature and precipitation
Filter search API | Query data for all counties in state, all tracts in MSA, etc
Road segment tiles | Plot road segments on maps in interactive applications

## Developer Website

For more detail see https://developer.idealspot.com/

Base URLs:

* <a href="https://idealspot-geodata.p.rapidapi.com/api/v1">https://idealspot-geodata.p.rapidapi.com/api/v1</a>

<h1 id="idealspot-geodata-insights-api">Insights API</h1>

# Insights API

To query demographics, spending, and other retail market insights, use the endpoints under the "Geodata" heading. "Insights" can be thought of as a unique dataset you can query. ie., residential population counts, avg. household incomes, home values, mortgage risk, and languages spoken.

To see the full list of Insights currently available to query, visit: https://developer.idealspot.com/data

## Fetch Available Insights

<a id="opIdFetchAvailableInsights"></a>

> Code samples

```bash
curl https://example.com/data/insights \
  -H 'Accept: application/json' \
  -H 'X-RapidAPI-Key: string' \
  -H 'X-RapidAPI-Host: string'
```

`GET /data/insights`

List all insights that the user has access to. This includes population, household income, crime statistics, walking traffic, vehicle traffic counts, employment, and much more,

<h3 id="fetch-available-insights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-RapidAPI-Key|header|string|true|(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata|
|X-RapidAPI-Host|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "description": "Median age and age brackets by gender.",
      "id": "age",
      "name": "Age",
      "version": "v2"
    },
    {
      "description": "Historical and projected population by age bracket",
      "id": "age-trends",
      "name": "Age Over Time",
      "version": "v2"
    },
    {
      "description": "Ancestry",
      "id": "ancestry",
      "name": "Ancestry",
      "version": "v2"
    },
    {
      "description": "Average home value over time.",
      "id": "avg-home-value",
      "name": "Home Value Trends",
      "version": "v1"
    },
    {
      "description": "Crime indicies across several categories",
      "id": "crime",
      "name": "Crime",
      "version": "v1"
    },
    {
      "description": "Conventionally, daytime population is equated to the number of the employees in an area. However, that number does not capture stay-at-home parents, students, and retired or unemployed individuals. This insight provides that detail.",
      "id": "daytime-population",
      "name": "Daytime Population",
      "version": "v2"
    },
    {
      "description": "Current year education levels.",
      "id": "education",
      "name": "Education (Age 25+)",
      "version": "v2"
    },
    {
      "description": "Number of employees by business category",
      "id": "employee-categories",
      "name": "Employee Categories",
      "version": "v2"
    },
    {
      "description": "Quarterly historical total number of employees (often referred to as daytime population).",
      "id": "employees",
      "name": "Daytime Population",
      "version": "v4"
    },
    {
      "description": "Number of businesses by category",
      "id": "establishment-categories",
      "name": "Establishment Categories",
      "version": "v2"
    },
    {
      "description": "Quarterly historical total number of establishments.",
      "id": "establishments",
      "name": "Business Counts",
      "version": "v4"
    },
    {
      "description": "Current year ethnicity proportions.",
      "id": "ethnicity",
      "name": "Ethnicity",
      "version": "v2"
    },
    {
      "description": "Quarterly historical gross domestic product estimates.",
      "id": "gdp",
      "name": "Gross Domestic Product",
      "version": "v3"
    },
    {
      "description": "Current year gender populations.",
      "id": "gender",
      "name": "Gender",
      "version": "v2"
    },
    {
      "description": "Age generations",
      "id": "generations",
      "name": "Generations",
      "version": "v2"
    },
    {
      "description": "Median home value and home value buckets",
      "id": "home-value",
      "name": "Home Value",
      "version": "v2"
    },
    {
      "description": "The total amount all members of a household earn.",
      "id": "household-income",
      "name": "Household Income",
      "version": "v2"
    },
    {
      "description": "Number of people per households",
      "id": "household-size",
      "name": "Household Size",
      "version": "v2"
    },
    {
      "description": "Historical counts and forecasts of number of households in an area.",
      "id": "households",
      "name": "Households",
      "version": "v3"
    },
    {
      "description": "Home renters, owners, and vacancies.",
      "id": "housing-ownership",
      "name": "Housing Ownership",
      "version": "v2"
    },
    {
      "description": "Language",
      "id": "language",
      "name": "Language",
      "version": "v2"
    },
    {
      "description": "Common market overview metrics.",
      "id": "market-context",
      "name": "Market Context",
      "version": "v1"
    },
    {
      "description": "Market gaps by category",
      "id": "market-gap",
      "name": "Market Gap",
      "version": "v1"
    },
    {
      "description": "Number of mortgages and their risks on a 1 to 5 scale.",
      "id": "mortgage-risk",
      "name": "Mortgage Risk",
      "version": "v2"
    },
    {
      "description": "Describes the occupations of residents in the trade area.",
      "id": "occupation",
      "name": "Occupation",
      "version": "v2"
    },
    {
      "description": "Historical, current and forecasted number of people living in houses and apartments within a trade area.",
      "id": "residential-population",
      "name": "Residential Population",
      "version": "v3"
    },
    {
      "description": "Salary/Wage per Employee per Annum",
      "id": "salaries",
      "name": "Salaries",
      "version": "v2"
    },
    {
      "description": "Population residing in a housing unit specifically designated as seasonal housing, like a summer cottage or winter chalet.",
      "id": "seasonal-population",
      "name": "Seasonal Population",
      "version": "v3"
    },
    {
      "description": "Expressed interest on social media within the location's trade area by business category.",
      "id": "social",
      "name": "Social Media Interest",
      "version": "v3"
    },
    {
      "description": "Weekly expenditures per product.",
      "id": "spending",
      "name": "Spending",
      "version": "v2"
    },
    {
      "description": "Population residing in a hotel or RV (Recreational Vehicle) for at least 1 night.",
      "id": "transient-population",
      "name": "Transient Population",
      "version": "v3"
    },
    {
      "description": "Number of vehicles available per household",
      "id": "vehicles-per-hh",
      "name": "Vehicles per Household",
      "version": "v2"
    },
    {
      "description": "Yearly age counts up to 21 by gender",
      "id": "youth-age",
      "name": "Youth Age",
      "version": "v2"
    },
    {
      "description": "Search engine searches within a location's trade area by business category.",
      "id": "search",
      "name": "Search Engine Demand",
      "version": "v3"
    }
  ]
}
```

<h3 id="fetch-available-insights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListAllLocalInsights](#schemalistalllocalinsights)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|Via|string||none|
|200|X-RapidAPI-Region|string||none|
|200|X-RapidAPI-Version|string||none|
|200|access-control-allow-credentials|string||none|
|200|access-control-allow-origin|string||none|
|200|access-control-expose-headers|string||none|
|200|cache-control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch Insight Query Parameters

<a id="opIdFetchInsightQueryParameters"></a>

> Code samples

```bash
curl https://example.com/data/insights/string \
  -H 'Accept: application/json' \
  -H 'X-RapidAPI-Key: string' \
  -H 'X-RapidAPI-Host: string'
```

`GET /data/insights/{insight_id:}`

Fetch request/response structure metadata for a given Insight. This provides you the periods of data available as well as any other parameters you may want to query the Insight by. Example Insights include population and market data such as: age, daytime population, avg. home value, crime indexes, foot traffic, employment, income, occupation, etc.  For the full-list see the developer documentation.

<h3 id="fetch-insight-query-parameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|insight_id:|path|string|true|Insight ID. See developer documentation for full list.|
|X-RapidAPI-Key|header|string|true|(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata|
|X-RapidAPI-Host|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "description": "Describes the occupations of residents in the trade area.",
    "groups": [
      "White Collar",
      "Management occupations",
      "Top executives",
      "Advertising, marketing, promotions, public relations, and sales managers",
      "Operations specialties managers",
      "Other management occupations",
      "Business and financial operations occupations",
      "Business operations specialists",
      "Financial specialists",
      "Computer and mathematical science occupations",
      "Computer specialists",
      "Mathematical science occupations",
      "Architecture and engineering occupations",
      "Architects, surveyors, and cartographers",
      "Engineers",
      "Drafters, engineering, and mapping technicians",
      "Life, physical, and social science occupations",
      "Life scientists",
      "Physical scientists",
      "Social scientists and related occupations",
      "Life, physical, and social science technicians",
      "Community and social services occupations",
      "Counselors, social workers, and other community and social service specialists",
      "Religious workers",
      "All other counselors, social, and religious workers",
      "Legal occupations",
      "Lawyers, judges, and related workers",
      "Legal support workers",
      "All other legal and related workers",
      "Education, training, and library occupations",
      "Postsecondary teachers",
      "Primary, secondary, and special education teachers",
      "Other teachers and instructors",
      "Librarians, curators, and archivists",
      "Other education, training, and library occupations",
      "Arts, design, entertainment, sports, and media occupations",
      "Art and design occupations",
      "Entertainers and performers, sports and related occupations",
      "Media and communication occupations",
      "Media and communication equipment occupations",
      "Healthcare practitioners and technical occupations",
      "Health diagnosing and treating practitioners",
      "Health technologists and technicians",
      "Other healthcare practitioners and technical occupations",
      "Healthcare support occupations",
      "Nursing, psychiatric, and home health aides",
      "Occupational and physical therapist assistants and aides",
      "Other healthcare support occupations",
      "Blue Collar",
      "Protective service occupations",
      "First-line supervisors/managers, protective service workers",
      "Fire fighting and prevention workers",
      "Law enforcement workers",
      "Other protective service workers",
      "Food preparation and serving related occupations",
      "Supervisors, food preparation and serving workers",
      "Cooks and food preparation workers",
      "Food and beverage serving workers",
      "Other food preparation and serving related workers",
      "Building and grounds cleaning and maintenance occupations",
      "Supervisors, building and grounds cleaning and maintenance workers",
      "Building cleaning and pest control workers",
      "Grounds maintenance workers",
      "All other building and grounds cleaning and maintenance workers",
      "Personal care and service occupations",
      "Supervisors, personal care and service workers",
      "Animal care and service workers",
      "Entertainment attendants and related workers",
      "Funeral service workers",
      "Personal appearance workers",
      "Transportation, tourism, and lodging attendants",
      "Other personal care and service workers",
      "Sales and related occupations",
      "Supervisors, sales workers",
      "Retail sales workers",
      "Sales representatives, services",
      "Sales representatives, wholesale and manufacturing",
      "Other sales and related workers",
      "Office and administrative support occupations",
      "Supervisors, office and administrative support workers",
      "Communications equipment operators",
      "Financial clerks",
      "Information and record clerks",
      "Material recording, scheduling, dispatching, and distributing occupations",
      "Secretaries and administrative assistants",
      "Other office and administrative support workers",
      "Farming, fishing, and forestry occupations",
      "Supervisors, farming, fishing, and forestry workers",
      "Agricultural workers",
      "Fishing and hunting workers",
      "Forest, conservation, and logging workers",
      "Construction and extraction occupations",
      "Supervisors, construction and extraction workers",
      "Construction trades and related workers",
      "Helpers, construction trades",
      "Other construction and related workers",
      "Extraction workers",
      "Installation, maintenance, and repair occupations",
      "Supervisors of installation, maintenance, and repair workers",
      "Electrical and electronic equipment mechanics, installers, and repairers",
      "And mobile equipment mechanics, installers, and repairers",
      "Other installation, maintenance, and repair occupations",
      "Production occupations",
      "Supervisors, production workers",
      "Assemblers and fabricators",
      "Food processing occupations",
      "Metal workers and plastic workers",
      "Printing occupations",
      "Textile, apparel, and furnishings occupations",
      "Woodworkers",
      "Plant and system operators",
      "Other production occupations",
      "Transportation and material moving occupations",
      "Supervisors, transportation and material moving workers",
      "Air transportation occupations",
      "Motor vehicle operators",
      "Rail transportation occupations",
      "Water transportation occupations",
      "Other transportation workers",
      "Material moving occupations",
      "Military",
      "Unclassified",
      "context.residential-population",
      "context.landarea"
    ],
    "id": "occupation",
    "name": "Occupation",
    "parameters": {
      "category": [
        {
          "description": null,
          "id": 2469,
          "label": "White Collar",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2470,
          "label": "Management occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2471,
          "label": "Top executives",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2472,
          "label": "Advertising, marketing, promotions, public relations, and sales managers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2473,
          "label": "Operations specialties managers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2474,
          "label": "Other management occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2475,
          "label": "Business and financial operations occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2476,
          "label": "Business operations specialists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2477,
          "label": "Financial specialists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2478,
          "label": "Computer and mathematical science occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2479,
          "label": "Computer specialists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2480,
          "label": "Mathematical science occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2481,
          "label": "Architecture and engineering occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2482,
          "label": "Architects, surveyors, and cartographers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2483,
          "label": "Engineers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2484,
          "label": "Drafters, engineering, and mapping technicians",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2485,
          "label": "Life, physical, and social science occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2486,
          "label": "Life scientists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2487,
          "label": "Physical scientists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2488,
          "label": "Social scientists and related occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2489,
          "label": "Life, physical, and social science technicians",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2490,
          "label": "Community and social services occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2491,
          "label": "Counselors, social workers, and other community and social service specialists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2492,
          "label": "Religious workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2493,
          "label": "All other counselors, social, and religious workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2494,
          "label": "Legal occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2495,
          "label": "Lawyers, judges, and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2496,
          "label": "Legal support workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2497,
          "label": "All other legal and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2498,
          "label": "Education, training, and library occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2499,
          "label": "Postsecondary teachers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2500,
          "label": "Primary, secondary, and special education teachers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2501,
          "label": "Other teachers and instructors",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2502,
          "label": "Librarians, curators, and archivists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2503,
          "label": "Other education, training, and library occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2504,
          "label": "Arts, design, entertainment, sports, and media occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2505,
          "label": "Art and design occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2506,
          "label": "Entertainers and performers, sports and related occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2507,
          "label": "Media and communication occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2508,
          "label": "Media and communication equipment occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2509,
          "label": "Healthcare practitioners and technical occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2510,
          "label": "Health diagnosing and treating practitioners",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2511,
          "label": "Health technologists and technicians",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2512,
          "label": "Other healthcare practitioners and technical occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2513,
          "label": "Healthcare support occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2514,
          "label": "Nursing, psychiatric, and home health aides",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2515,
          "label": "Occupational and physical therapist assistants and aides",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2516,
          "label": "Other healthcare support occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2517,
          "label": "Blue Collar",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2518,
          "label": "Protective service occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2519,
          "label": "First-line supervisors/managers, protective service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2520,
          "label": "Fire fighting and prevention workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2521,
          "label": "Law enforcement workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2522,
          "label": "Other protective service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2523,
          "label": "Food preparation and serving related occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2524,
          "label": "Supervisors, food preparation and serving workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2525,
          "label": "Cooks and food preparation workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2526,
          "label": "Food and beverage serving workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2527,
          "label": "Other food preparation and serving related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2528,
          "label": "Building and grounds cleaning and maintenance occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2529,
          "label": "Supervisors, building and grounds cleaning and maintenance workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2530,
          "label": "Building cleaning and pest control workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2531,
          "label": "Grounds maintenance workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2532,
          "label": "All other building and grounds cleaning and maintenance workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2533,
          "label": "Personal care and service occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2534,
          "label": "Supervisors, personal care and service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2535,
          "label": "Animal care and service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2536,
          "label": "Entertainment attendants and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2537,
          "label": "Funeral service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2538,
          "label": "Personal appearance workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2539,
          "label": "Transportation, tourism, and lodging attendants",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2540,
          "label": "Other personal care and service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2541,
          "label": "Sales and related occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2542,
          "label": "Supervisors, sales workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2543,
          "label": "Retail sales workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2544,
          "label": "Sales representatives, services",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2545,
          "label": "Sales representatives, wholesale and manufacturing",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2546,
          "label": "Other sales and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2547,
          "label": "Office and administrative support occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2548,
          "label": "Supervisors, office and administrative support workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2549,
          "label": "Communications equipment operators",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2550,
          "label": "Financial clerks",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2551,
          "label": "Information and record clerks",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2552,
          "label": "Material recording, scheduling, dispatching, and distributing occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2553,
          "label": "Secretaries and administrative assistants",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2554,
          "label": "Other office and administrative support workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2555,
          "label": "Farming, fishing, and forestry occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2556,
          "label": "Supervisors, farming, fishing, and forestry workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2557,
          "label": "Agricultural workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2558,
          "label": "Fishing and hunting workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2559,
          "label": "Forest, conservation, and logging workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2560,
          "label": "Construction and extraction occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2561,
          "label": "Supervisors, construction and extraction workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2562,
          "label": "Construction trades and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2563,
          "label": "Helpers, construction trades",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2564,
          "label": "Other construction and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2565,
          "label": "Extraction workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2566,
          "label": "Installation, maintenance, and repair occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2567,
          "label": "Supervisors of installation, maintenance, and repair workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2568,
          "label": "Electrical and electronic equipment mechanics, installers, and repairers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2569,
          "label": "And mobile equipment mechanics, installers, and repairers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2570,
          "label": "Other installation, maintenance, and repair occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2571,
          "label": "Production occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2572,
          "label": "Supervisors, production workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2573,
          "label": "Assemblers and fabricators",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2574,
          "label": "Food processing occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2575,
          "label": "Metal workers and plastic workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2576,
          "label": "Printing occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2577,
          "label": "Textile, apparel, and furnishings occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2578,
          "label": "Woodworkers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2579,
          "label": "Plant and system operators",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2580,
          "label": "Other production occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2581,
          "label": "Transportation and material moving occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2582,
          "label": "Supervisors, transportation and material moving workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2583,
          "label": "Air transportation occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2584,
          "label": "Motor vehicle operators",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2585,
          "label": "Rail transportation occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2586,
          "label": "Water transportation occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2587,
          "label": "Other transportation workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2588,
          "label": "Material moving occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2589,
          "label": "Military",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2590,
          "label": "Unclassified",
          "parent_id": null
        }
      ]
    },
    "periods": [
      "YR2020Q1"
    ],
    "slug": "occupation",
    "version": "v2"
  }
}
```

<h3 id="fetch-insight-query-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Describe_occupation_Insight](#schemadescribe_occupation_insight)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|Via|string||none|
|200|X-RapidAPI-Region|string||none|
|200|X-RapidAPI-Version|string||none|
|200|access-control-allow-credentials|string||none|
|200|access-control-allow-origin|string||none|
|200|access-control-expose-headers|string||none|
|200|cache-control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Query Insight at Location

<a id="opIdQueryInsightatLocation"></a>

> Code samples

```bash
curl 'https://example.com/data/insights/string/query?version=string&location%5B%5D=string' \
  -H 'Accept: application/json' \
  -H 'X-RapidAPI-Key: string' \
  -H 'X-RapidAPI-Host: string'
```

`GET /data/insights/{insight_id:}/query`

Execute a query for a given insight and location(s). Some Insights may require you to provide required options. ie., when querying `occupation` for White-Collar Workers, you can filter by opt=`{"data":{"category":[2469]}}`

For examples of `locations`, please see [Location API Documentation](https://idealspot.gitlab.io/developer-docs/#location)

<h3 id="query-insight-at-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|version|query|string|true|(Required) Insight version. Insight versions are incremented when a response format changes in any way, including the addition of new groups. Old versions are retained, unmodified, for backwards compatibility.|
|location[]|query|string|true|(Required) Represents a buffer, region, or custom polygon specification. Accepts the `Location` model (as a `Buffer`, `Region`, or `Custom Polygon`) formatted as a JSON string. Multiple `location` query parameters are allowed. NOTE: When requesting multiple locations, you must include brackets(i.e. `?location[]=...&location[]=...`). If not included, only the last location will be used. For more detail, see https://idealspot.gitlab.io/developer-docs/#location|
|insight_id:|path|string|true|Insight ID. See https://developer.idealspot.com/data for full list.|
|X-RapidAPI-Key|header|string|true|(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata|
|X-RapidAPI-Host|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": [
        [
          "string"
        ]
      ],
      "location": {
        "areatype": "ring",
        "latitude": 30.264757,
        "longitude": -97.7356077,
        "radius": 1,
        "type": "buffer",
        "units": "mi"
      },
      "location_index": 0,
      "metadata": {
        "datetime": [
          [
            "string"
          ]
        ],
        "display_groups": [
          [
            "string"
          ]
        ],
        "units": {
          "$100k-125k": "households",
          "$10k-15k": "households",
          "$125k-150k": "households",
          "$150k-175k": "households",
          "$15k-20k": "households",
          "$175k-200k": "households",
          "$200k-250k": "households",
          "$20k-25k": "households",
          "$250k-300k": "households",
          "$25k-30k": "households",
          "$300k-400k": "households",
          "$30k-35k": "households",
          "$35k-40k": "households",
          "$400k-500k": "households",
          "$40k-50k": "households",
          "$500k-750k": "households",
          "$50k-60k": "households",
          "$60k-70k": "households",
          "$70k-80k": "households",
          "$750k-1M": "households",
          "$80k-90k": "households",
          "$90k-100k": "households",
          "Median Home Value": "dollars",
          "Over $1M": "households",
          "Owner Occupied Households": "households",
          "Under $10k": "households",
          "context.households": "households",
          "context.landarea": "square miles"
        }
      }
    }
  ]
}
```

<h3 id="query-insight-at-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Homevalueswithin1mi.radiusofLocation](#schemahomevalueswithin1mi.radiusoflocation)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|Via|string||none|
|200|X-RapidAPI-Region|string||none|
|200|X-RapidAPI-Version|string||none|
|200|access-control-allow-credentials|string||none|
|200|access-control-allow-origin|string||none|
|200|access-control-expose-headers|string||none|
|200|cache-control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="idealspot-geodata-geometries-api">Geometries API</h1>

## Fetch Geometries

<a id="opIdFetchGeometries"></a>

> Code samples

```bash
curl 'https://example.com/geometries/geometry?location%5B%5D=string' \
  -H 'Accept: application/json' \
  -H 'X-RapidAPI-Key: string' \
  -H 'X-RapidAPI-Host: string'
```

`GET /geometries/geometry`

Fetch location GeoJSON

<h3 id="fetch-geometries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location[]|query|string|true|(Required) Represents a buffer, region, or custom polygon specification. Accepts the `Location` model (as a `Buffer`, `Region`, or `Custom Polygon`) formatted as a JSON string. Multiple `location` query parameters are allowed. NOTE: When requesting multiple locations, you must include brackets(i.e. `?location[]=...&location[]=...`). If not included, only the last location will be used.|
|X-RapidAPI-Key|header|string|true|(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata|
|X-RapidAPI-Host|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "features": [
      {
        "geometry": {
          "coordinates": [
            [
              0
            ]
          ],
          "type": "string"
        },
        "properties": {
          "calculated_area_sq_meters": 27447057.07613631,
          "location": {
            "areatype": "drivetime",
            "latitude": 30.264757,
            "longitude": -97.7356077,
            "radius": "5",
            "type": "buffer",
            "units": "minutes"
          },
          "status": 200
        },
        "type": "string"
      }
    ],
    "type": "string"
  }
}
```

<h3 id="fetch-geometries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Describetheregionwithin5minutedrive-timeofageographicpoint](#schemadescribetheregionwithin5minutedrive-timeofageographicpoint)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|Via|string||none|
|200|X-RapidAPI-Region|string||none|
|200|X-RapidAPI-Version|string||none|
|200|access-control-allow-credentials|string||none|
|200|access-control-allow-origin|string||none|
|200|access-control-expose-headers|string||none|
|200|cache-control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch Administrative Regions using Lat/Lng

<a id="opIdFetchAdministrativeRegionsusingLat/Lng"></a>

> Code samples

```bash
curl https://example.com/geometries/regions/intersecting/0/0 \
  -H 'Accept: application/json' \
  -H 'X-RapidAPI-Key: string' \
  -H 'X-RapidAPI-Host: string'
```

`GET /geometries/regions/intersecting/{latitude}/{longitude}`

For given latitude and longitude, find intersecting administrative regions. Region polygons are simplified for web mapping.

<h3 id="fetch-administrative-regions-using-latlng-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|path|number(double)|true|(Required) Search coordinate latitude|
|longitude|path|number(double)|true|(Required) Search coordinate longitude|
|X-RapidAPI-Key|header|string|true|(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata|
|X-RapidAPI-Host|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "geometry": {
        "coordinates": [
          [
            0
          ]
        ],
        "type": "string"
      },
      "properties": {
        "_properties": {
          "AFFGEOID": "1400000US48453000902",
          "ALAND": 3041429,
          "AWATER": 0,
          "COUNTYFP": "453",
          "GEOID": "48453000902",
          "LSAD": "CT",
          "NAME": "9.02",
          "STATEFP": "48",
          "TRACTCE": "000902"
        },
        "altname": "9.02",
        "autocomplete": {
          "input": [
            "48453000902",
            "9.02"
          ]
        },
        "calculated_area_sq_meters": 4105150.414024012,
        "name": "48453000902",
        "region_id": "48453000902",
        "regiontype": "tract",
        "state_code": "TX",
        "timestamp": "2018-04-09T20:54:47.264495"
      },
      "type": "string"
    }
  ]
}
```

<h3 id="fetch-administrative-regions-using-latlng-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FetchAdministrativeRegionsusingLat_Lng](#schemafetchadministrativeregionsusinglat_lng)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|Via|string||none|
|200|X-RapidAPI-Region|string||none|
|200|X-RapidAPI-Version|string||none|
|200|access-control-allow-credentials|string||none|
|200|access-control-allow-origin|string||none|
|200|access-control-expose-headers|string||none|
|200|cache-control|string||none|
|200|transfer-encoding|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="idealspot-geodata-traffic-count-api">Traffic Count API</h1>

## Vehicle Traffic Counts for Road Segment

<a id="opIdVehicleTrafficCountsforRoadSegment"></a>

> Code samples

```bash
curl https://example.com/traffic/counts/0 \
  -H 'Accept: application/json' \
  -H 'X-RapidAPI-Key: string' \
  -H 'X-RapidAPI-Host: string'
```

`GET /traffic/counts/{segment_id}`

Time of day, day of week, and side of street vehicle traffic counts.

<h3 id="vehicle-traffic-counts-for-road-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|segment_id|path|integer(int32)|true|(Required) Road segment ID. Fetched from Search Road Segments|
|X-RapidAPI-Key|header|string|true|(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata|
|X-RapidAPI-Host|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "data": [
        [
          81,
          56,
          35,
          26,
          28,
          48,
          86,
          130,
          182,
          240,
          292,
          334,
          360,
          360,
          357,
          353,
          339,
          307,
          266,
          222,
          188,
          158,
          125,
          102
        ],
        [
          34,
          35,
          30,
          33,
          55,
          153,
          371,
          494,
          402,
          327,
          336,
          369,
          390,
          386,
          402,
          423,
          419,
          379,
          303,
          243,
          200,
          163,
          118,
          69
        ],
        [
          34,
          35,
          30,
          33,
          55,
          153,
          371,
          494,
          402,
          327,
          336,
          369,
          390,
          386,
          402,
          423,
          419,
          379,
          303,
          243,
          200,
          163,
          118,
          69
        ],
        [
          34,
          35,
          30,
          33,
          55,
          153,
          371,
          494,
          402,
          327,
          336,
          369,
          390,
          386,
          402,
          423,
          419,
          379,
          303,
          243,
          200,
          163,
          118,
          69
        ],
        [
          34,
          35,
          30,
          33,
          55,
          153,
          371,
          494,
          402,
          327,
          336,
          369,
          390,
          386,
          402,
          423,
          419,
          379,
          303,
          243,
          200,
          163,
          118,
          69
        ],
        [
          37,
          37,
          32,
          35,
          59,
          160,
          388,
          518,
          421,
          343,
          352,
          387,
          409,
          406,
          422,
          443,
          439,
          396,
          318,
          255,
          210,
          171,
          122,
          73
        ],
        [
          91,
          62,
          40,
          28,
          31,
          55,
          98,
          146,
          204,
          271,
          330,
          377,
          404,
          404,
          404,
          398,
          381,
          346,
          298,
          250,
          212,
          178,
          141,
          114
        ]
      ],
      "metadata": {
        "bearing": "W",
        "columns": [
          "12:00am",
          "01:00am",
          "02:00am",
          "03:00am",
          "04:00am",
          "05:00am",
          "06:00am",
          "07:00am",
          "08:00am",
          "09:00am",
          "10:00am",
          "11:00am",
          "12:00pm",
          "01:00pm",
          "02:00pm",
          "03:00pm",
          "04:00pm",
          "05:00pm",
          "06:00pm",
          "07:00pm",
          "08:00pm",
          "09:00pm",
          "10:00pm",
          "11:00pm"
        ],
        "name": "East 6th Street",
        "rows": [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ],
        "segment_id": "1595369397",
        "state": "Texas"
      },
      "roadsegment": {
        "coordinates": [
          [
            -97.734165,
            30.265642000000014
          ],
          [
            -97.734314,
            30.265693999999996
          ],
          [
            -97.734409,
            30.265727999999996
          ],
          [
            -97.7345332,
            30.265769000000006
          ],
          [
            -97.7346688,
            30.265802199999996
          ],
          [
            -97.7349238,
            30.2658816
          ],
          [
            -97.7350156,
            30.265904199999994
          ]
        ],
        "type": "LineString"
      },
      "stats": {
        "aadt": 5843
      }
    },
    {
      "data": [
        [
          116,
          80,
          51,
          36,
          41,
          69,
          124,
          185,
          259,
          343,
          416,
          476,
          512,
          512,
          509,
          502,
          482,
          437,
          379,
          317,
          267,
          226,
          178,
          145
        ],
        [
          71,
          43,
          34,
          37,
          69,
          173,
          364,
          485,
          464,
          438,
          469,
          520,
          548,
          561,
          610,
          666,
          677,
          625,
          503,
          413,
          346,
          279,
          203,
          134
        ],
        [
          71,
          43,
          34,
          37,
          69,
          173,
          364,
          485,
          464,
          438,
          469,
          520,
          548,
          561,
          610,
          666,
          677,
          625,
          503,
          413,
          346,
          279,
          203,
          134
        ],
        [
          71,
          43,
          34,
          37,
          69,
          173,
          364,
          485,
          464,
          438,
          469,
          520,
          548,
          561,
          610,
          666,
          677,
          625,
          503,
          413,
          346,
          279,
          203,
          134
        ],
        [
          71,
          43,
          34,
          37,
          69,
          173,
          364,
          485,
          464,
          438,
          469,
          520,
          548,
          561,
          610,
          666,
          677,
          625,
          503,
          413,
          346,
          279,
          203,
          134
        ],
        [
          74,
          46,
          34,
          38,
          73,
          180,
          382,
          509,
          487,
          458,
          491,
          545,
          576,
          587,
          640,
          698,
          710,
          654,
          528,
          433,
          362,
          292,
          213,
          141
        ],
        [
          130,
          88,
          57,
          40,
          45,
          78,
          138,
          207,
          291,
          386,
          469,
          536,
          576,
          576,
          573,
          566,
          542,
          493,
          426,
          356,
          299,
          253,
          201,
          163
        ]
      ],
      "metadata": {
        "bearing": "E",
        "columns": [
          "12:00am",
          "01:00am",
          "02:00am",
          "03:00am",
          "04:00am",
          "05:00am",
          "06:00am",
          "07:00am",
          "08:00am",
          "09:00am",
          "10:00am",
          "11:00am",
          "12:00pm",
          "01:00pm",
          "02:00pm",
          "03:00pm",
          "04:00pm",
          "05:00pm",
          "06:00pm",
          "07:00pm",
          "08:00pm",
          "09:00pm",
          "10:00pm",
          "11:00pm"
        ],
        "name": "East 6th Street",
        "rows": [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ],
        "segment_id": "1595369411",
        "state": "Texas"
      },
      "roadsegment": {
        "coordinates": [
          [
            -97.7350156,
            30.265904199999994
          ],
          [
            -97.7349238,
            30.2658816
          ],
          [
            -97.7346688,
            30.265802199999996
          ],
          [
            -97.7345332,
            30.265769000000006
          ],
          [
            -97.734409,
            30.265727999999996
          ],
          [
            -97.734314,
            30.265693999999996
          ],
          [
            -97.734165,
            30.265642000000014
          ]
        ],
        "type": "LineString"
      },
      "stats": {
        "aadt": 8318
      }
    }
  ]
}
```

<h3 id="vehicle-traffic-counts-for-road-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[VehicleTrafficCountsforRoadSegment](#schemavehicletrafficcountsforroadsegment)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|Via|string||none|
|200|X-RapidAPI-Region|string||none|
|200|X-RapidAPI-Version|string||none|
|200|access-control-allow-credentials|string||none|
|200|access-control-allow-origin|string||none|
|200|access-control-expose-headers|string||none|
|200|cache-control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch Nearest Road Segments

<a id="opIdFetchNearestRoadSegments"></a>

> Code samples

```bash
curl 'https://example.com/traffic/roads/nearest/0/0?n=0' \
  -H 'Accept: application/json' \
  -H 'X-RapidAPI-Key: string' \
  -H 'X-RapidAPI-Host: string'
```

`GET /traffic/roads/nearest/{latitude}/{longitude}`

For given latitude and longitude, find `n` nearest road segments

<h3 id="fetch-nearest-road-segments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|query|integer(int32)|true|Number of road segments to return (between 1 and 20)|
|latitude|path|number(double)|true|(Required) Search coordinate latitude|
|longitude|path|number(double)|true|(Required) Search coordinate longitude|
|X-RapidAPI-Key|header|string|true|(Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata|
|X-RapidAPI-Host|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "crs": {
      "properties": {
        "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
      },
      "type": "name"
    },
    "features": [
      {
        "geometry": {
          "coordinates": [
            [
              -97.735557,
              30.261986
            ],
            [
              -97.735196,
              30.26292
            ],
            [
              -97.735011,
              30.263339
            ],
            [
              -97.734814,
              30.263796
            ],
            [
              -97.7347722,
              30.2638848
            ],
            [
              -97.734748,
              30.263936
            ],
            [
              -97.734723,
              30.264008
            ],
            [
              -97.734617,
              30.26428
            ],
            [
              -97.734489,
              30.264667
            ],
            [
              -97.734447,
              30.2648
            ],
            [
              -97.734362,
              30.26507
            ],
            [
              -97.734288,
              30.265273
            ],
            [
              -97.734177,
              30.265612
            ],
            [
              -97.734165,
              30.265642
            ]
          ],
          "type": "LineString"
        },
        "properties": {
          "bearing": "N",
          "roadname": "North Interstate Highway 35 Service Road",
          "segment_id": "1595171804",
          "state": "Texas"
        },
        "type": "Feature"
      }
    ],
    "type": "FeatureCollection"
  }
}
```

<h3 id="fetch-nearest-road-segments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SearchRoadSegments](#schemasearchroadsegments)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Connection|string||none|
|200|Content-Encoding|string||none|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Server|string||none|
|200|Vary|string||none|
|200|Via|string||none|
|200|X-RapidAPI-Region|string||none|
|200|X-RapidAPI-Version|string||none|
|200|access-control-allow-credentials|string||none|
|200|access-control-allow-origin|string||none|
|200|access-control-expose-headers|string||none|
|200|cache-control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Autocomplete">Autocomplete</h2>
<!-- backwards compatibility -->
<a id="schemaautocomplete"></a>
<a id="schema_Autocomplete"></a>
<a id="tocSautocomplete"></a>
<a id="tocsautocomplete"></a>

```json
{
  "input": [
    "48453000902",
    "9.02"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[string]|true|none|none|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "description": null,
  "id": 2469,
  "label": "White Collar",
  "parent_id": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|id|integer(int32)|true|none|none|
|label|string|true|none|none|
|parent_id|string|true|none|none|

<h2 id="tocS_Crs">Crs</h2>
<!-- backwards compatibility -->
<a id="schemacrs"></a>
<a id="schema_Crs"></a>
<a id="tocScrs"></a>
<a id="tocscrs"></a>

```json
{
  "properties": {
    "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
  },
  "type": "name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[Properties4](#schemaproperties4)|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Data">Data</h2>
<!-- backwards compatibility -->
<a id="schemadata"></a>
<a id="schema_Data"></a>
<a id="tocSdata"></a>
<a id="tocsdata"></a>

```json
{
  "description": "Describes the occupations of residents in the trade area.",
  "groups": [
    "White Collar",
    "Management occupations",
    "Top executives",
    "Advertising, marketing, promotions, public relations, and sales managers",
    "Operations specialties managers",
    "Other management occupations",
    "Business and financial operations occupations",
    "Business operations specialists",
    "Financial specialists",
    "Computer and mathematical science occupations",
    "Computer specialists",
    "Mathematical science occupations",
    "Architecture and engineering occupations",
    "Architects, surveyors, and cartographers",
    "Engineers",
    "Drafters, engineering, and mapping technicians",
    "Life, physical, and social science occupations",
    "Life scientists",
    "Physical scientists",
    "Social scientists and related occupations",
    "Life, physical, and social science technicians",
    "Community and social services occupations",
    "Counselors, social workers, and other community and social service specialists",
    "Religious workers",
    "All other counselors, social, and religious workers",
    "Legal occupations",
    "Lawyers, judges, and related workers",
    "Legal support workers",
    "All other legal and related workers",
    "Education, training, and library occupations",
    "Postsecondary teachers",
    "Primary, secondary, and special education teachers",
    "Other teachers and instructors",
    "Librarians, curators, and archivists",
    "Other education, training, and library occupations",
    "Arts, design, entertainment, sports, and media occupations",
    "Art and design occupations",
    "Entertainers and performers, sports and related occupations",
    "Media and communication occupations",
    "Media and communication equipment occupations",
    "Healthcare practitioners and technical occupations",
    "Health diagnosing and treating practitioners",
    "Health technologists and technicians",
    "Other healthcare practitioners and technical occupations",
    "Healthcare support occupations",
    "Nursing, psychiatric, and home health aides",
    "Occupational and physical therapist assistants and aides",
    "Other healthcare support occupations",
    "Blue Collar",
    "Protective service occupations",
    "First-line supervisors/managers, protective service workers",
    "Fire fighting and prevention workers",
    "Law enforcement workers",
    "Other protective service workers",
    "Food preparation and serving related occupations",
    "Supervisors, food preparation and serving workers",
    "Cooks and food preparation workers",
    "Food and beverage serving workers",
    "Other food preparation and serving related workers",
    "Building and grounds cleaning and maintenance occupations",
    "Supervisors, building and grounds cleaning and maintenance workers",
    "Building cleaning and pest control workers",
    "Grounds maintenance workers",
    "All other building and grounds cleaning and maintenance workers",
    "Personal care and service occupations",
    "Supervisors, personal care and service workers",
    "Animal care and service workers",
    "Entertainment attendants and related workers",
    "Funeral service workers",
    "Personal appearance workers",
    "Transportation, tourism, and lodging attendants",
    "Other personal care and service workers",
    "Sales and related occupations",
    "Supervisors, sales workers",
    "Retail sales workers",
    "Sales representatives, services",
    "Sales representatives, wholesale and manufacturing",
    "Other sales and related workers",
    "Office and administrative support occupations",
    "Supervisors, office and administrative support workers",
    "Communications equipment operators",
    "Financial clerks",
    "Information and record clerks",
    "Material recording, scheduling, dispatching, and distributing occupations",
    "Secretaries and administrative assistants",
    "Other office and administrative support workers",
    "Farming, fishing, and forestry occupations",
    "Supervisors, farming, fishing, and forestry workers",
    "Agricultural workers",
    "Fishing and hunting workers",
    "Forest, conservation, and logging workers",
    "Construction and extraction occupations",
    "Supervisors, construction and extraction workers",
    "Construction trades and related workers",
    "Helpers, construction trades",
    "Other construction and related workers",
    "Extraction workers",
    "Installation, maintenance, and repair occupations",
    "Supervisors of installation, maintenance, and repair workers",
    "Electrical and electronic equipment mechanics, installers, and repairers",
    "And mobile equipment mechanics, installers, and repairers",
    "Other installation, maintenance, and repair occupations",
    "Production occupations",
    "Supervisors, production workers",
    "Assemblers and fabricators",
    "Food processing occupations",
    "Metal workers and plastic workers",
    "Printing occupations",
    "Textile, apparel, and furnishings occupations",
    "Woodworkers",
    "Plant and system operators",
    "Other production occupations",
    "Transportation and material moving occupations",
    "Supervisors, transportation and material moving workers",
    "Air transportation occupations",
    "Motor vehicle operators",
    "Rail transportation occupations",
    "Water transportation occupations",
    "Other transportation workers",
    "Material moving occupations",
    "Military",
    "Unclassified",
    "context.residential-population",
    "context.landarea"
  ],
  "id": "occupation",
  "name": "Occupation",
  "parameters": {
    "category": [
      {
        "description": null,
        "id": 2469,
        "label": "White Collar",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2470,
        "label": "Management occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2471,
        "label": "Top executives",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2472,
        "label": "Advertising, marketing, promotions, public relations, and sales managers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2473,
        "label": "Operations specialties managers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2474,
        "label": "Other management occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2475,
        "label": "Business and financial operations occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2476,
        "label": "Business operations specialists",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2477,
        "label": "Financial specialists",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2478,
        "label": "Computer and mathematical science occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2479,
        "label": "Computer specialists",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2480,
        "label": "Mathematical science occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2481,
        "label": "Architecture and engineering occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2482,
        "label": "Architects, surveyors, and cartographers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2483,
        "label": "Engineers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2484,
        "label": "Drafters, engineering, and mapping technicians",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2485,
        "label": "Life, physical, and social science occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2486,
        "label": "Life scientists",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2487,
        "label": "Physical scientists",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2488,
        "label": "Social scientists and related occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2489,
        "label": "Life, physical, and social science technicians",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2490,
        "label": "Community and social services occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2491,
        "label": "Counselors, social workers, and other community and social service specialists",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2492,
        "label": "Religious workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2493,
        "label": "All other counselors, social, and religious workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2494,
        "label": "Legal occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2495,
        "label": "Lawyers, judges, and related workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2496,
        "label": "Legal support workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2497,
        "label": "All other legal and related workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2498,
        "label": "Education, training, and library occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2499,
        "label": "Postsecondary teachers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2500,
        "label": "Primary, secondary, and special education teachers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2501,
        "label": "Other teachers and instructors",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2502,
        "label": "Librarians, curators, and archivists",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2503,
        "label": "Other education, training, and library occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2504,
        "label": "Arts, design, entertainment, sports, and media occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2505,
        "label": "Art and design occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2506,
        "label": "Entertainers and performers, sports and related occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2507,
        "label": "Media and communication occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2508,
        "label": "Media and communication equipment occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2509,
        "label": "Healthcare practitioners and technical occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2510,
        "label": "Health diagnosing and treating practitioners",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2511,
        "label": "Health technologists and technicians",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2512,
        "label": "Other healthcare practitioners and technical occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2513,
        "label": "Healthcare support occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2514,
        "label": "Nursing, psychiatric, and home health aides",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2515,
        "label": "Occupational and physical therapist assistants and aides",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2516,
        "label": "Other healthcare support occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2517,
        "label": "Blue Collar",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2518,
        "label": "Protective service occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2519,
        "label": "First-line supervisors/managers, protective service workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2520,
        "label": "Fire fighting and prevention workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2521,
        "label": "Law enforcement workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2522,
        "label": "Other protective service workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2523,
        "label": "Food preparation and serving related occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2524,
        "label": "Supervisors, food preparation and serving workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2525,
        "label": "Cooks and food preparation workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2526,
        "label": "Food and beverage serving workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2527,
        "label": "Other food preparation and serving related workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2528,
        "label": "Building and grounds cleaning and maintenance occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2529,
        "label": "Supervisors, building and grounds cleaning and maintenance workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2530,
        "label": "Building cleaning and pest control workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2531,
        "label": "Grounds maintenance workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2532,
        "label": "All other building and grounds cleaning and maintenance workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2533,
        "label": "Personal care and service occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2534,
        "label": "Supervisors, personal care and service workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2535,
        "label": "Animal care and service workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2536,
        "label": "Entertainment attendants and related workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2537,
        "label": "Funeral service workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2538,
        "label": "Personal appearance workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2539,
        "label": "Transportation, tourism, and lodging attendants",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2540,
        "label": "Other personal care and service workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2541,
        "label": "Sales and related occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2542,
        "label": "Supervisors, sales workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2543,
        "label": "Retail sales workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2544,
        "label": "Sales representatives, services",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2545,
        "label": "Sales representatives, wholesale and manufacturing",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2546,
        "label": "Other sales and related workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2547,
        "label": "Office and administrative support occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2548,
        "label": "Supervisors, office and administrative support workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2549,
        "label": "Communications equipment operators",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2550,
        "label": "Financial clerks",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2551,
        "label": "Information and record clerks",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2552,
        "label": "Material recording, scheduling, dispatching, and distributing occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2553,
        "label": "Secretaries and administrative assistants",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2554,
        "label": "Other office and administrative support workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2555,
        "label": "Farming, fishing, and forestry occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2556,
        "label": "Supervisors, farming, fishing, and forestry workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2557,
        "label": "Agricultural workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2558,
        "label": "Fishing and hunting workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2559,
        "label": "Forest, conservation, and logging workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2560,
        "label": "Construction and extraction occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2561,
        "label": "Supervisors, construction and extraction workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2562,
        "label": "Construction trades and related workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2563,
        "label": "Helpers, construction trades",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2564,
        "label": "Other construction and related workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2565,
        "label": "Extraction workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2566,
        "label": "Installation, maintenance, and repair occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2567,
        "label": "Supervisors of installation, maintenance, and repair workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2568,
        "label": "Electrical and electronic equipment mechanics, installers, and repairers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2569,
        "label": "And mobile equipment mechanics, installers, and repairers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2570,
        "label": "Other installation, maintenance, and repair occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2571,
        "label": "Production occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2572,
        "label": "Supervisors, production workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2573,
        "label": "Assemblers and fabricators",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2574,
        "label": "Food processing occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2575,
        "label": "Metal workers and plastic workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2576,
        "label": "Printing occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2577,
        "label": "Textile, apparel, and furnishings occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2578,
        "label": "Woodworkers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2579,
        "label": "Plant and system operators",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2580,
        "label": "Other production occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2581,
        "label": "Transportation and material moving occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2582,
        "label": "Supervisors, transportation and material moving workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2583,
        "label": "Air transportation occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2584,
        "label": "Motor vehicle operators",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2585,
        "label": "Rail transportation occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2586,
        "label": "Water transportation occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2587,
        "label": "Other transportation workers",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2588,
        "label": "Material moving occupations",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2589,
        "label": "Military",
        "parent_id": null
      },
      {
        "description": null,
        "id": 2590,
        "label": "Unclassified",
        "parent_id": null
      }
    ]
  },
  "periods": [
    "YR2020Q1"
  ],
  "slug": "occupation",
  "version": "v2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|groups|[string]|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|parameters|[Parameters](#schemaparameters)|true|none|none|
|periods|[string]|true|none|none|
|slug|string|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_Data1">Data1</h2>
<!-- backwards compatibility -->
<a id="schemadata1"></a>
<a id="schema_Data1"></a>
<a id="tocSdata1"></a>
<a id="tocsdata1"></a>

```json
{
  "data": [
    [
      "string"
    ]
  ],
  "location": {
    "areatype": "ring",
    "latitude": 30.264757,
    "longitude": -97.7356077,
    "radius": 1,
    "type": "buffer",
    "units": "mi"
  },
  "location_index": 0,
  "metadata": {
    "datetime": [
      [
        "string"
      ]
    ],
    "display_groups": [
      [
        "string"
      ]
    ],
    "units": {
      "$100k-125k": "households",
      "$10k-15k": "households",
      "$125k-150k": "households",
      "$150k-175k": "households",
      "$15k-20k": "households",
      "$175k-200k": "households",
      "$200k-250k": "households",
      "$20k-25k": "households",
      "$250k-300k": "households",
      "$25k-30k": "households",
      "$300k-400k": "households",
      "$30k-35k": "households",
      "$35k-40k": "households",
      "$400k-500k": "households",
      "$40k-50k": "households",
      "$500k-750k": "households",
      "$50k-60k": "households",
      "$60k-70k": "households",
      "$70k-80k": "households",
      "$750k-1M": "households",
      "$80k-90k": "households",
      "$90k-100k": "households",
      "Median Home Value": "dollars",
      "Over $1M": "households",
      "Owner Occupied Households": "households",
      "Under $10k": "households",
      "context.households": "households",
      "context.landarea": "square miles"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[string]]|true|none|none|
|location|[Location1](#schemalocation1)|true|none|none|
|location_index|integer(int32)|true|none|none|
|metadata|[Metadata](#schemametadata)|true|none|none|

<h2 id="tocS_Data2">Data2</h2>
<!-- backwards compatibility -->
<a id="schemadata2"></a>
<a id="schema_Data2"></a>
<a id="tocSdata2"></a>
<a id="tocsdata2"></a>

```json
{
  "geometry": {
    "coordinates": [
      [
        0
      ]
    ],
    "type": "string"
  },
  "properties": {
    "_properties": {
      "AFFGEOID": "1400000US48453000902",
      "ALAND": 3041429,
      "AWATER": 0,
      "COUNTYFP": "453",
      "GEOID": "48453000902",
      "LSAD": "CT",
      "NAME": "9.02",
      "STATEFP": "48",
      "TRACTCE": "000902"
    },
    "altname": "9.02",
    "autocomplete": {
      "input": [
        "48453000902",
        "9.02"
      ]
    },
    "calculated_area_sq_meters": 4105150.414024012,
    "name": "48453000902",
    "region_id": "48453000902",
    "regiontype": "tract",
    "state_code": "TX",
    "timestamp": "2018-04-09T20:54:47.264495"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geometry|[Geometry](#schemageometry)|true|none|none|
|properties|[Properties](#schemaproperties)|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Data3">Data3</h2>
<!-- backwards compatibility -->
<a id="schemadata3"></a>
<a id="schema_Data3"></a>
<a id="tocSdata3"></a>
<a id="tocsdata3"></a>

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [
          [
            0
          ]
        ],
        "type": "string"
      },
      "properties": {
        "calculated_area_sq_meters": 27447057.07613631,
        "location": {
          "areatype": "drivetime",
          "latitude": 30.264757,
          "longitude": -97.7356077,
          "radius": "5",
          "type": "buffer",
          "units": "minutes"
        },
        "status": 200
      },
      "type": "string"
    }
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[[Feature](#schemafeature)]|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Data4">Data4</h2>
<!-- backwards compatibility -->
<a id="schemadata4"></a>
<a id="schema_Data4"></a>
<a id="tocSdata4"></a>
<a id="tocsdata4"></a>

```json
{
  "crs": {
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    },
    "type": "name"
  },
  "features": [
    {
      "geometry": {
        "coordinates": [
          [
            -97.735557,
            30.261986
          ],
          [
            -97.735196,
            30.26292
          ],
          [
            -97.735011,
            30.263339
          ],
          [
            -97.734814,
            30.263796
          ],
          [
            -97.7347722,
            30.2638848
          ],
          [
            -97.734748,
            30.263936
          ],
          [
            -97.734723,
            30.264008
          ],
          [
            -97.734617,
            30.26428
          ],
          [
            -97.734489,
            30.264667
          ],
          [
            -97.734447,
            30.2648
          ],
          [
            -97.734362,
            30.26507
          ],
          [
            -97.734288,
            30.265273
          ],
          [
            -97.734177,
            30.265612
          ],
          [
            -97.734165,
            30.265642
          ]
        ],
        "type": "LineString"
      },
      "properties": {
        "bearing": "N",
        "roadname": "North Interstate Highway 35 Service Road",
        "segment_id": "1595171804",
        "state": "Texas"
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crs|[Crs](#schemacrs)|true|none|none|
|features|[[Feature1](#schemafeature1)]|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Data5">Data5</h2>
<!-- backwards compatibility -->
<a id="schemadata5"></a>
<a id="schema_Data5"></a>
<a id="tocSdata5"></a>
<a id="tocsdata5"></a>

```json
{
  "data": [
    [
      81,
      56,
      35,
      26,
      28,
      48,
      86,
      130,
      182,
      240,
      292,
      334,
      360,
      360,
      357,
      353,
      339,
      307,
      266,
      222,
      188,
      158,
      125,
      102
    ],
    [
      34,
      35,
      30,
      33,
      55,
      153,
      371,
      494,
      402,
      327,
      336,
      369,
      390,
      386,
      402,
      423,
      419,
      379,
      303,
      243,
      200,
      163,
      118,
      69
    ],
    [
      34,
      35,
      30,
      33,
      55,
      153,
      371,
      494,
      402,
      327,
      336,
      369,
      390,
      386,
      402,
      423,
      419,
      379,
      303,
      243,
      200,
      163,
      118,
      69
    ],
    [
      34,
      35,
      30,
      33,
      55,
      153,
      371,
      494,
      402,
      327,
      336,
      369,
      390,
      386,
      402,
      423,
      419,
      379,
      303,
      243,
      200,
      163,
      118,
      69
    ],
    [
      34,
      35,
      30,
      33,
      55,
      153,
      371,
      494,
      402,
      327,
      336,
      369,
      390,
      386,
      402,
      423,
      419,
      379,
      303,
      243,
      200,
      163,
      118,
      69
    ],
    [
      37,
      37,
      32,
      35,
      59,
      160,
      388,
      518,
      421,
      343,
      352,
      387,
      409,
      406,
      422,
      443,
      439,
      396,
      318,
      255,
      210,
      171,
      122,
      73
    ],
    [
      91,
      62,
      40,
      28,
      31,
      55,
      98,
      146,
      204,
      271,
      330,
      377,
      404,
      404,
      404,
      398,
      381,
      346,
      298,
      250,
      212,
      178,
      141,
      114
    ]
  ],
  "metadata": {
    "bearing": "W",
    "columns": [
      "12:00am",
      "01:00am",
      "02:00am",
      "03:00am",
      "04:00am",
      "05:00am",
      "06:00am",
      "07:00am",
      "08:00am",
      "09:00am",
      "10:00am",
      "11:00am",
      "12:00pm",
      "01:00pm",
      "02:00pm",
      "03:00pm",
      "04:00pm",
      "05:00pm",
      "06:00pm",
      "07:00pm",
      "08:00pm",
      "09:00pm",
      "10:00pm",
      "11:00pm"
    ],
    "name": "East 6th Street",
    "rows": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "segment_id": "1595369397",
    "state": "Texas"
  },
  "roadsegment": {
    "coordinates": [
      [
        -97.734165,
        30.265642000000014
      ],
      [
        -97.734314,
        30.265693999999996
      ],
      [
        -97.734409,
        30.265727999999996
      ],
      [
        -97.7345332,
        30.265769000000006
      ],
      [
        -97.7346688,
        30.265802199999996
      ],
      [
        -97.7349238,
        30.2658816
      ],
      [
        -97.7350156,
        30.265904199999994
      ]
    ],
    "type": "LineString"
  },
  "stats": {
    "aadt": 5843
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[integer(int32)]]|true|none|none|
|metadata|[Metadata1](#schemametadata1)|true|none|none|
|roadsegment|[Roadsegment](#schemaroadsegment)|true|none|none|
|stats|[Stats](#schemastats)|true|none|none|

<h2 id="tocS_Datum">Datum</h2>
<!-- backwards compatibility -->
<a id="schemadatum"></a>
<a id="schema_Datum"></a>
<a id="tocSdatum"></a>
<a id="tocsdatum"></a>

```json
{
  "description": "Median age and age brackets by gender.",
  "id": "age",
  "name": "Age",
  "version": "v2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_Describe_occupation_Insight">Describe_occupation_Insight</h2>
<!-- backwards compatibility -->
<a id="schemadescribe_occupation_insight"></a>
<a id="schema_Describe_occupation_Insight"></a>
<a id="tocSdescribe_occupation_insight"></a>
<a id="tocsdescribe_occupation_insight"></a>

```json
{
  "data": {
    "description": "Describes the occupations of residents in the trade area.",
    "groups": [
      "White Collar",
      "Management occupations",
      "Top executives",
      "Advertising, marketing, promotions, public relations, and sales managers",
      "Operations specialties managers",
      "Other management occupations",
      "Business and financial operations occupations",
      "Business operations specialists",
      "Financial specialists",
      "Computer and mathematical science occupations",
      "Computer specialists",
      "Mathematical science occupations",
      "Architecture and engineering occupations",
      "Architects, surveyors, and cartographers",
      "Engineers",
      "Drafters, engineering, and mapping technicians",
      "Life, physical, and social science occupations",
      "Life scientists",
      "Physical scientists",
      "Social scientists and related occupations",
      "Life, physical, and social science technicians",
      "Community and social services occupations",
      "Counselors, social workers, and other community and social service specialists",
      "Religious workers",
      "All other counselors, social, and religious workers",
      "Legal occupations",
      "Lawyers, judges, and related workers",
      "Legal support workers",
      "All other legal and related workers",
      "Education, training, and library occupations",
      "Postsecondary teachers",
      "Primary, secondary, and special education teachers",
      "Other teachers and instructors",
      "Librarians, curators, and archivists",
      "Other education, training, and library occupations",
      "Arts, design, entertainment, sports, and media occupations",
      "Art and design occupations",
      "Entertainers and performers, sports and related occupations",
      "Media and communication occupations",
      "Media and communication equipment occupations",
      "Healthcare practitioners and technical occupations",
      "Health diagnosing and treating practitioners",
      "Health technologists and technicians",
      "Other healthcare practitioners and technical occupations",
      "Healthcare support occupations",
      "Nursing, psychiatric, and home health aides",
      "Occupational and physical therapist assistants and aides",
      "Other healthcare support occupations",
      "Blue Collar",
      "Protective service occupations",
      "First-line supervisors/managers, protective service workers",
      "Fire fighting and prevention workers",
      "Law enforcement workers",
      "Other protective service workers",
      "Food preparation and serving related occupations",
      "Supervisors, food preparation and serving workers",
      "Cooks and food preparation workers",
      "Food and beverage serving workers",
      "Other food preparation and serving related workers",
      "Building and grounds cleaning and maintenance occupations",
      "Supervisors, building and grounds cleaning and maintenance workers",
      "Building cleaning and pest control workers",
      "Grounds maintenance workers",
      "All other building and grounds cleaning and maintenance workers",
      "Personal care and service occupations",
      "Supervisors, personal care and service workers",
      "Animal care and service workers",
      "Entertainment attendants and related workers",
      "Funeral service workers",
      "Personal appearance workers",
      "Transportation, tourism, and lodging attendants",
      "Other personal care and service workers",
      "Sales and related occupations",
      "Supervisors, sales workers",
      "Retail sales workers",
      "Sales representatives, services",
      "Sales representatives, wholesale and manufacturing",
      "Other sales and related workers",
      "Office and administrative support occupations",
      "Supervisors, office and administrative support workers",
      "Communications equipment operators",
      "Financial clerks",
      "Information and record clerks",
      "Material recording, scheduling, dispatching, and distributing occupations",
      "Secretaries and administrative assistants",
      "Other office and administrative support workers",
      "Farming, fishing, and forestry occupations",
      "Supervisors, farming, fishing, and forestry workers",
      "Agricultural workers",
      "Fishing and hunting workers",
      "Forest, conservation, and logging workers",
      "Construction and extraction occupations",
      "Supervisors, construction and extraction workers",
      "Construction trades and related workers",
      "Helpers, construction trades",
      "Other construction and related workers",
      "Extraction workers",
      "Installation, maintenance, and repair occupations",
      "Supervisors of installation, maintenance, and repair workers",
      "Electrical and electronic equipment mechanics, installers, and repairers",
      "And mobile equipment mechanics, installers, and repairers",
      "Other installation, maintenance, and repair occupations",
      "Production occupations",
      "Supervisors, production workers",
      "Assemblers and fabricators",
      "Food processing occupations",
      "Metal workers and plastic workers",
      "Printing occupations",
      "Textile, apparel, and furnishings occupations",
      "Woodworkers",
      "Plant and system operators",
      "Other production occupations",
      "Transportation and material moving occupations",
      "Supervisors, transportation and material moving workers",
      "Air transportation occupations",
      "Motor vehicle operators",
      "Rail transportation occupations",
      "Water transportation occupations",
      "Other transportation workers",
      "Material moving occupations",
      "Military",
      "Unclassified",
      "context.residential-population",
      "context.landarea"
    ],
    "id": "occupation",
    "name": "Occupation",
    "parameters": {
      "category": [
        {
          "description": null,
          "id": 2469,
          "label": "White Collar",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2470,
          "label": "Management occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2471,
          "label": "Top executives",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2472,
          "label": "Advertising, marketing, promotions, public relations, and sales managers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2473,
          "label": "Operations specialties managers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2474,
          "label": "Other management occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2475,
          "label": "Business and financial operations occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2476,
          "label": "Business operations specialists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2477,
          "label": "Financial specialists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2478,
          "label": "Computer and mathematical science occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2479,
          "label": "Computer specialists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2480,
          "label": "Mathematical science occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2481,
          "label": "Architecture and engineering occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2482,
          "label": "Architects, surveyors, and cartographers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2483,
          "label": "Engineers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2484,
          "label": "Drafters, engineering, and mapping technicians",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2485,
          "label": "Life, physical, and social science occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2486,
          "label": "Life scientists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2487,
          "label": "Physical scientists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2488,
          "label": "Social scientists and related occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2489,
          "label": "Life, physical, and social science technicians",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2490,
          "label": "Community and social services occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2491,
          "label": "Counselors, social workers, and other community and social service specialists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2492,
          "label": "Religious workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2493,
          "label": "All other counselors, social, and religious workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2494,
          "label": "Legal occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2495,
          "label": "Lawyers, judges, and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2496,
          "label": "Legal support workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2497,
          "label": "All other legal and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2498,
          "label": "Education, training, and library occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2499,
          "label": "Postsecondary teachers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2500,
          "label": "Primary, secondary, and special education teachers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2501,
          "label": "Other teachers and instructors",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2502,
          "label": "Librarians, curators, and archivists",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2503,
          "label": "Other education, training, and library occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2504,
          "label": "Arts, design, entertainment, sports, and media occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2505,
          "label": "Art and design occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2506,
          "label": "Entertainers and performers, sports and related occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2507,
          "label": "Media and communication occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2508,
          "label": "Media and communication equipment occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2509,
          "label": "Healthcare practitioners and technical occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2510,
          "label": "Health diagnosing and treating practitioners",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2511,
          "label": "Health technologists and technicians",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2512,
          "label": "Other healthcare practitioners and technical occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2513,
          "label": "Healthcare support occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2514,
          "label": "Nursing, psychiatric, and home health aides",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2515,
          "label": "Occupational and physical therapist assistants and aides",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2516,
          "label": "Other healthcare support occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2517,
          "label": "Blue Collar",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2518,
          "label": "Protective service occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2519,
          "label": "First-line supervisors/managers, protective service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2520,
          "label": "Fire fighting and prevention workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2521,
          "label": "Law enforcement workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2522,
          "label": "Other protective service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2523,
          "label": "Food preparation and serving related occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2524,
          "label": "Supervisors, food preparation and serving workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2525,
          "label": "Cooks and food preparation workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2526,
          "label": "Food and beverage serving workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2527,
          "label": "Other food preparation and serving related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2528,
          "label": "Building and grounds cleaning and maintenance occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2529,
          "label": "Supervisors, building and grounds cleaning and maintenance workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2530,
          "label": "Building cleaning and pest control workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2531,
          "label": "Grounds maintenance workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2532,
          "label": "All other building and grounds cleaning and maintenance workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2533,
          "label": "Personal care and service occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2534,
          "label": "Supervisors, personal care and service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2535,
          "label": "Animal care and service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2536,
          "label": "Entertainment attendants and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2537,
          "label": "Funeral service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2538,
          "label": "Personal appearance workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2539,
          "label": "Transportation, tourism, and lodging attendants",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2540,
          "label": "Other personal care and service workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2541,
          "label": "Sales and related occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2542,
          "label": "Supervisors, sales workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2543,
          "label": "Retail sales workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2544,
          "label": "Sales representatives, services",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2545,
          "label": "Sales representatives, wholesale and manufacturing",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2546,
          "label": "Other sales and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2547,
          "label": "Office and administrative support occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2548,
          "label": "Supervisors, office and administrative support workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2549,
          "label": "Communications equipment operators",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2550,
          "label": "Financial clerks",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2551,
          "label": "Information and record clerks",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2552,
          "label": "Material recording, scheduling, dispatching, and distributing occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2553,
          "label": "Secretaries and administrative assistants",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2554,
          "label": "Other office and administrative support workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2555,
          "label": "Farming, fishing, and forestry occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2556,
          "label": "Supervisors, farming, fishing, and forestry workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2557,
          "label": "Agricultural workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2558,
          "label": "Fishing and hunting workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2559,
          "label": "Forest, conservation, and logging workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2560,
          "label": "Construction and extraction occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2561,
          "label": "Supervisors, construction and extraction workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2562,
          "label": "Construction trades and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2563,
          "label": "Helpers, construction trades",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2564,
          "label": "Other construction and related workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2565,
          "label": "Extraction workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2566,
          "label": "Installation, maintenance, and repair occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2567,
          "label": "Supervisors of installation, maintenance, and repair workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2568,
          "label": "Electrical and electronic equipment mechanics, installers, and repairers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2569,
          "label": "And mobile equipment mechanics, installers, and repairers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2570,
          "label": "Other installation, maintenance, and repair occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2571,
          "label": "Production occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2572,
          "label": "Supervisors, production workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2573,
          "label": "Assemblers and fabricators",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2574,
          "label": "Food processing occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2575,
          "label": "Metal workers and plastic workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2576,
          "label": "Printing occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2577,
          "label": "Textile, apparel, and furnishings occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2578,
          "label": "Woodworkers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2579,
          "label": "Plant and system operators",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2580,
          "label": "Other production occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2581,
          "label": "Transportation and material moving occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2582,
          "label": "Supervisors, transportation and material moving workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2583,
          "label": "Air transportation occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2584,
          "label": "Motor vehicle operators",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2585,
          "label": "Rail transportation occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2586,
          "label": "Water transportation occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2587,
          "label": "Other transportation workers",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2588,
          "label": "Material moving occupations",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2589,
          "label": "Military",
          "parent_id": null
        },
        {
          "description": null,
          "id": 2590,
          "label": "Unclassified",
          "parent_id": null
        }
      ]
    },
    "periods": [
      "YR2020Q1"
    ],
    "slug": "occupation",
    "version": "v2"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data](#schemadata)|true|none|none|

<h2 id="tocS_Describetheregionwithin5minutedrive-timeofageographicpoint">Describetheregionwithin5minutedrive-timeofageographicpoint</h2>
<!-- backwards compatibility -->
<a id="schemadescribetheregionwithin5minutedrive-timeofageographicpoint"></a>
<a id="schema_Describetheregionwithin5minutedrive-timeofageographicpoint"></a>
<a id="tocSdescribetheregionwithin5minutedrive-timeofageographicpoint"></a>
<a id="tocsdescribetheregionwithin5minutedrive-timeofageographicpoint"></a>

```json
{
  "data": {
    "features": [
      {
        "geometry": {
          "coordinates": [
            [
              0
            ]
          ],
          "type": "string"
        },
        "properties": {
          "calculated_area_sq_meters": 27447057.07613631,
          "location": {
            "areatype": "drivetime",
            "latitude": 30.264757,
            "longitude": -97.7356077,
            "radius": "5",
            "type": "buffer",
            "units": "minutes"
          },
          "status": 200
        },
        "type": "string"
      }
    ],
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data3](#schemadata3)|true|none|none|

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "geometry": {
    "coordinates": [
      [
        0
      ]
    ],
    "type": "string"
  },
  "properties": {
    "calculated_area_sq_meters": 27447057.07613631,
    "location": {
      "areatype": "drivetime",
      "latitude": 30.264757,
      "longitude": -97.7356077,
      "radius": "5",
      "type": "buffer",
      "units": "minutes"
    },
    "status": 200
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geometry|[Geometry](#schemageometry)|true|none|none|
|properties|[Properties2](#schemaproperties2)|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Feature1">Feature1</h2>
<!-- backwards compatibility -->
<a id="schemafeature1"></a>
<a id="schema_Feature1"></a>
<a id="tocSfeature1"></a>
<a id="tocsfeature1"></a>

```json
{
  "geometry": {
    "coordinates": [
      [
        -97.735557,
        30.261986
      ],
      [
        -97.735196,
        30.26292
      ],
      [
        -97.735011,
        30.263339
      ],
      [
        -97.734814,
        30.263796
      ],
      [
        -97.7347722,
        30.2638848
      ],
      [
        -97.734748,
        30.263936
      ],
      [
        -97.734723,
        30.264008
      ],
      [
        -97.734617,
        30.26428
      ],
      [
        -97.734489,
        30.264667
      ],
      [
        -97.734447,
        30.2648
      ],
      [
        -97.734362,
        30.26507
      ],
      [
        -97.734288,
        30.265273
      ],
      [
        -97.734177,
        30.265612
      ],
      [
        -97.734165,
        30.265642
      ]
    ],
    "type": "LineString"
  },
  "properties": {
    "bearing": "N",
    "roadname": "North Interstate Highway 35 Service Road",
    "segment_id": "1595171804",
    "state": "Texas"
  },
  "type": "Feature"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geometry|[Geometry](#schemageometry)|true|none|none|
|properties|[Properties3](#schemaproperties3)|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_FetchAdministrativeRegionsusingLat_Lng">FetchAdministrativeRegionsusingLat_Lng</h2>
<!-- backwards compatibility -->
<a id="schemafetchadministrativeregionsusinglat_lng"></a>
<a id="schema_FetchAdministrativeRegionsusingLat_Lng"></a>
<a id="tocSfetchadministrativeregionsusinglat_lng"></a>
<a id="tocsfetchadministrativeregionsusinglat_lng"></a>

```json
{
  "data": [
    {
      "geometry": {
        "coordinates": [
          [
            0
          ]
        ],
        "type": "string"
      },
      "properties": {
        "_properties": {
          "AFFGEOID": "1400000US48453000902",
          "ALAND": 3041429,
          "AWATER": 0,
          "COUNTYFP": "453",
          "GEOID": "48453000902",
          "LSAD": "CT",
          "NAME": "9.02",
          "STATEFP": "48",
          "TRACTCE": "000902"
        },
        "altname": "9.02",
        "autocomplete": {
          "input": [
            "48453000902",
            "9.02"
          ]
        },
        "calculated_area_sq_meters": 4105150.414024012,
        "name": "48453000902",
        "region_id": "48453000902",
        "regiontype": "tract",
        "state_code": "TX",
        "timestamp": "2018-04-09T20:54:47.264495"
      },
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Data2](#schemadata2)]|true|none|none|

<h2 id="tocS_Geometry">Geometry</h2>
<!-- backwards compatibility -->
<a id="schemageometry"></a>
<a id="schema_Geometry"></a>
<a id="tocSgeometry"></a>
<a id="tocsgeometry"></a>

```json
{
  "coordinates": [
    [
      0
    ]
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[[number(double)]]|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Homevalueswithin1mi.radiusofLocation">Homevalueswithin1mi.radiusofLocation</h2>
<!-- backwards compatibility -->
<a id="schemahomevalueswithin1mi.radiusoflocation"></a>
<a id="schema_Homevalueswithin1mi.radiusofLocation"></a>
<a id="tocShomevalueswithin1mi.radiusoflocation"></a>
<a id="tocshomevalueswithin1mi.radiusoflocation"></a>

```json
{
  "data": [
    {
      "data": [
        [
          "string"
        ]
      ],
      "location": {
        "areatype": "ring",
        "latitude": 30.264757,
        "longitude": -97.7356077,
        "radius": 1,
        "type": "buffer",
        "units": "mi"
      },
      "location_index": 0,
      "metadata": {
        "datetime": [
          [
            "string"
          ]
        ],
        "display_groups": [
          [
            "string"
          ]
        ],
        "units": {
          "$100k-125k": "households",
          "$10k-15k": "households",
          "$125k-150k": "households",
          "$150k-175k": "households",
          "$15k-20k": "households",
          "$175k-200k": "households",
          "$200k-250k": "households",
          "$20k-25k": "households",
          "$250k-300k": "households",
          "$25k-30k": "households",
          "$300k-400k": "households",
          "$30k-35k": "households",
          "$35k-40k": "households",
          "$400k-500k": "households",
          "$40k-50k": "households",
          "$500k-750k": "households",
          "$50k-60k": "households",
          "$60k-70k": "households",
          "$70k-80k": "households",
          "$750k-1M": "households",
          "$80k-90k": "households",
          "$90k-100k": "households",
          "Median Home Value": "dollars",
          "Over $1M": "households",
          "Owner Occupied Households": "households",
          "Under $10k": "households",
          "context.households": "households",
          "context.landarea": "square miles"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Data1](#schemadata1)]|true|none|none|

<h2 id="tocS_ListAllLocalInsights">ListAllLocalInsights</h2>
<!-- backwards compatibility -->
<a id="schemalistalllocalinsights"></a>
<a id="schema_ListAllLocalInsights"></a>
<a id="tocSlistalllocalinsights"></a>
<a id="tocslistalllocalinsights"></a>

```json
{
  "data": [
    {
      "description": "Median age and age brackets by gender.",
      "id": "age",
      "name": "Age",
      "version": "v2"
    },
    {
      "description": "Historical and projected population by age bracket",
      "id": "age-trends",
      "name": "Age Over Time",
      "version": "v2"
    },
    {
      "description": "Ancestry",
      "id": "ancestry",
      "name": "Ancestry",
      "version": "v2"
    },
    {
      "description": "Average home value over time.",
      "id": "avg-home-value",
      "name": "Home Value Trends",
      "version": "v1"
    },
    {
      "description": "Crime indicies across several categories",
      "id": "crime",
      "name": "Crime",
      "version": "v1"
    },
    {
      "description": "Conventionally, daytime population is equated to the number of the employees in an area. However, that number does not capture stay-at-home parents, students, and retired or unemployed individuals. This insight provides that detail.",
      "id": "daytime-population",
      "name": "Daytime Population",
      "version": "v2"
    },
    {
      "description": "Current year education levels.",
      "id": "education",
      "name": "Education (Age 25+)",
      "version": "v2"
    },
    {
      "description": "Number of employees by business category",
      "id": "employee-categories",
      "name": "Employee Categories",
      "version": "v2"
    },
    {
      "description": "Quarterly historical total number of employees (often referred to as daytime population).",
      "id": "employees",
      "name": "Daytime Population",
      "version": "v4"
    },
    {
      "description": "Number of businesses by category",
      "id": "establishment-categories",
      "name": "Establishment Categories",
      "version": "v2"
    },
    {
      "description": "Quarterly historical total number of establishments.",
      "id": "establishments",
      "name": "Business Counts",
      "version": "v4"
    },
    {
      "description": "Current year ethnicity proportions.",
      "id": "ethnicity",
      "name": "Ethnicity",
      "version": "v2"
    },
    {
      "description": "Quarterly historical gross domestic product estimates.",
      "id": "gdp",
      "name": "Gross Domestic Product",
      "version": "v3"
    },
    {
      "description": "Current year gender populations.",
      "id": "gender",
      "name": "Gender",
      "version": "v2"
    },
    {
      "description": "Age generations",
      "id": "generations",
      "name": "Generations",
      "version": "v2"
    },
    {
      "description": "Median home value and home value buckets",
      "id": "home-value",
      "name": "Home Value",
      "version": "v2"
    },
    {
      "description": "The total amount all members of a household earn.",
      "id": "household-income",
      "name": "Household Income",
      "version": "v2"
    },
    {
      "description": "Number of people per households",
      "id": "household-size",
      "name": "Household Size",
      "version": "v2"
    },
    {
      "description": "Historical counts and forecasts of number of households in an area.",
      "id": "households",
      "name": "Households",
      "version": "v3"
    },
    {
      "description": "Home renters, owners, and vacancies.",
      "id": "housing-ownership",
      "name": "Housing Ownership",
      "version": "v2"
    },
    {
      "description": "Language",
      "id": "language",
      "name": "Language",
      "version": "v2"
    },
    {
      "description": "Common market overview metrics.",
      "id": "market-context",
      "name": "Market Context",
      "version": "v1"
    },
    {
      "description": "Market gaps by category",
      "id": "market-gap",
      "name": "Market Gap",
      "version": "v1"
    },
    {
      "description": "Number of mortgages and their risks on a 1 to 5 scale.",
      "id": "mortgage-risk",
      "name": "Mortgage Risk",
      "version": "v2"
    },
    {
      "description": "Describes the occupations of residents in the trade area.",
      "id": "occupation",
      "name": "Occupation",
      "version": "v2"
    },
    {
      "description": "Historical, current and forecasted number of people living in houses and apartments within a trade area.",
      "id": "residential-population",
      "name": "Residential Population",
      "version": "v3"
    },
    {
      "description": "Salary/Wage per Employee per Annum",
      "id": "salaries",
      "name": "Salaries",
      "version": "v2"
    },
    {
      "description": "Population residing in a housing unit specifically designated as seasonal housing, like a summer cottage or winter chalet.",
      "id": "seasonal-population",
      "name": "Seasonal Population",
      "version": "v3"
    },
    {
      "description": "Expressed interest on social media within the location's trade area by business category.",
      "id": "social",
      "name": "Social Media Interest",
      "version": "v3"
    },
    {
      "description": "Weekly expenditures per product.",
      "id": "spending",
      "name": "Spending",
      "version": "v2"
    },
    {
      "description": "Population residing in a hotel or RV (Recreational Vehicle) for at least 1 night.",
      "id": "transient-population",
      "name": "Transient Population",
      "version": "v3"
    },
    {
      "description": "Number of vehicles available per household",
      "id": "vehicles-per-hh",
      "name": "Vehicles per Household",
      "version": "v2"
    },
    {
      "description": "Yearly age counts up to 21 by gender",
      "id": "youth-age",
      "name": "Youth Age",
      "version": "v2"
    },
    {
      "description": "Search engine searches within a location's trade area by business category.",
      "id": "search",
      "name": "Search Engine Demand",
      "version": "v3"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Datum](#schemadatum)]|true|none|none|

<h2 id="tocS_Location1">Location1</h2>
<!-- backwards compatibility -->
<a id="schemalocation1"></a>
<a id="schema_Location1"></a>
<a id="tocSlocation1"></a>
<a id="tocslocation1"></a>

```json
{
  "areatype": "ring",
  "latitude": 30.264757,
  "longitude": -97.7356077,
  "radius": 1,
  "type": "buffer",
  "units": "mi"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areatype|string|true|none|none|
|latitude|number(double)|true|none|none|
|longitude|number(double)|true|none|none|
|radius|integer(int32)|true|none|none|
|type|string|true|none|none|
|units|string|true|none|none|

<h2 id="tocS_Location3">Location3</h2>
<!-- backwards compatibility -->
<a id="schemalocation3"></a>
<a id="schema_Location3"></a>
<a id="tocSlocation3"></a>
<a id="tocslocation3"></a>

```json
{
  "areatype": "drivetime",
  "latitude": 30.264757,
  "longitude": -97.7356077,
  "radius": "5",
  "type": "buffer",
  "units": "minutes"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areatype|string|true|none|none|
|latitude|number(double)|true|none|none|
|longitude|number(double)|true|none|none|
|radius|string|true|none|none|
|type|string|true|none|none|
|units|string|true|none|none|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "datetime": [
    [
      "string"
    ]
  ],
  "display_groups": [
    [
      "string"
    ]
  ],
  "units": {
    "$100k-125k": "households",
    "$10k-15k": "households",
    "$125k-150k": "households",
    "$150k-175k": "households",
    "$15k-20k": "households",
    "$175k-200k": "households",
    "$200k-250k": "households",
    "$20k-25k": "households",
    "$250k-300k": "households",
    "$25k-30k": "households",
    "$300k-400k": "households",
    "$30k-35k": "households",
    "$35k-40k": "households",
    "$400k-500k": "households",
    "$40k-50k": "households",
    "$500k-750k": "households",
    "$50k-60k": "households",
    "$60k-70k": "households",
    "$70k-80k": "households",
    "$750k-1M": "households",
    "$80k-90k": "households",
    "$90k-100k": "households",
    "Median Home Value": "dollars",
    "Over $1M": "households",
    "Owner Occupied Households": "households",
    "Under $10k": "households",
    "context.households": "households",
    "context.landarea": "square miles"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datetime|[[string]]|true|none|none|
|display_groups|[[string]]|true|none|none|
|units|[Units](#schemaunits)|true|none|none|

<h2 id="tocS_Metadata1">Metadata1</h2>
<!-- backwards compatibility -->
<a id="schemametadata1"></a>
<a id="schema_Metadata1"></a>
<a id="tocSmetadata1"></a>
<a id="tocsmetadata1"></a>

```json
{
  "bearing": "W",
  "columns": [
    "12:00am",
    "01:00am",
    "02:00am",
    "03:00am",
    "04:00am",
    "05:00am",
    "06:00am",
    "07:00am",
    "08:00am",
    "09:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "01:00pm",
    "02:00pm",
    "03:00pm",
    "04:00pm",
    "05:00pm",
    "06:00pm",
    "07:00pm",
    "08:00pm",
    "09:00pm",
    "10:00pm",
    "11:00pm"
  ],
  "name": "East 6th Street",
  "rows": [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ],
  "segment_id": "1595369397",
  "state": "Texas"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bearing|string|true|none|none|
|columns|[string]|true|none|none|
|name|string|true|none|none|
|rows|[string]|true|none|none|
|segment_id|string|true|none|none|
|state|string|true|none|none|

<h2 id="tocS_Parameters">Parameters</h2>
<!-- backwards compatibility -->
<a id="schemaparameters"></a>
<a id="schema_Parameters"></a>
<a id="tocSparameters"></a>
<a id="tocsparameters"></a>

```json
{
  "category": [
    {
      "description": null,
      "id": 2469,
      "label": "White Collar",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2470,
      "label": "Management occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2471,
      "label": "Top executives",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2472,
      "label": "Advertising, marketing, promotions, public relations, and sales managers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2473,
      "label": "Operations specialties managers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2474,
      "label": "Other management occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2475,
      "label": "Business and financial operations occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2476,
      "label": "Business operations specialists",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2477,
      "label": "Financial specialists",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2478,
      "label": "Computer and mathematical science occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2479,
      "label": "Computer specialists",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2480,
      "label": "Mathematical science occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2481,
      "label": "Architecture and engineering occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2482,
      "label": "Architects, surveyors, and cartographers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2483,
      "label": "Engineers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2484,
      "label": "Drafters, engineering, and mapping technicians",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2485,
      "label": "Life, physical, and social science occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2486,
      "label": "Life scientists",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2487,
      "label": "Physical scientists",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2488,
      "label": "Social scientists and related occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2489,
      "label": "Life, physical, and social science technicians",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2490,
      "label": "Community and social services occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2491,
      "label": "Counselors, social workers, and other community and social service specialists",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2492,
      "label": "Religious workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2493,
      "label": "All other counselors, social, and religious workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2494,
      "label": "Legal occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2495,
      "label": "Lawyers, judges, and related workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2496,
      "label": "Legal support workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2497,
      "label": "All other legal and related workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2498,
      "label": "Education, training, and library occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2499,
      "label": "Postsecondary teachers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2500,
      "label": "Primary, secondary, and special education teachers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2501,
      "label": "Other teachers and instructors",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2502,
      "label": "Librarians, curators, and archivists",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2503,
      "label": "Other education, training, and library occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2504,
      "label": "Arts, design, entertainment, sports, and media occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2505,
      "label": "Art and design occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2506,
      "label": "Entertainers and performers, sports and related occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2507,
      "label": "Media and communication occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2508,
      "label": "Media and communication equipment occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2509,
      "label": "Healthcare practitioners and technical occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2510,
      "label": "Health diagnosing and treating practitioners",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2511,
      "label": "Health technologists and technicians",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2512,
      "label": "Other healthcare practitioners and technical occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2513,
      "label": "Healthcare support occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2514,
      "label": "Nursing, psychiatric, and home health aides",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2515,
      "label": "Occupational and physical therapist assistants and aides",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2516,
      "label": "Other healthcare support occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2517,
      "label": "Blue Collar",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2518,
      "label": "Protective service occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2519,
      "label": "First-line supervisors/managers, protective service workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2520,
      "label": "Fire fighting and prevention workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2521,
      "label": "Law enforcement workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2522,
      "label": "Other protective service workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2523,
      "label": "Food preparation and serving related occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2524,
      "label": "Supervisors, food preparation and serving workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2525,
      "label": "Cooks and food preparation workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2526,
      "label": "Food and beverage serving workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2527,
      "label": "Other food preparation and serving related workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2528,
      "label": "Building and grounds cleaning and maintenance occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2529,
      "label": "Supervisors, building and grounds cleaning and maintenance workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2530,
      "label": "Building cleaning and pest control workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2531,
      "label": "Grounds maintenance workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2532,
      "label": "All other building and grounds cleaning and maintenance workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2533,
      "label": "Personal care and service occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2534,
      "label": "Supervisors, personal care and service workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2535,
      "label": "Animal care and service workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2536,
      "label": "Entertainment attendants and related workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2537,
      "label": "Funeral service workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2538,
      "label": "Personal appearance workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2539,
      "label": "Transportation, tourism, and lodging attendants",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2540,
      "label": "Other personal care and service workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2541,
      "label": "Sales and related occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2542,
      "label": "Supervisors, sales workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2543,
      "label": "Retail sales workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2544,
      "label": "Sales representatives, services",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2545,
      "label": "Sales representatives, wholesale and manufacturing",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2546,
      "label": "Other sales and related workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2547,
      "label": "Office and administrative support occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2548,
      "label": "Supervisors, office and administrative support workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2549,
      "label": "Communications equipment operators",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2550,
      "label": "Financial clerks",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2551,
      "label": "Information and record clerks",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2552,
      "label": "Material recording, scheduling, dispatching, and distributing occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2553,
      "label": "Secretaries and administrative assistants",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2554,
      "label": "Other office and administrative support workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2555,
      "label": "Farming, fishing, and forestry occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2556,
      "label": "Supervisors, farming, fishing, and forestry workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2557,
      "label": "Agricultural workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2558,
      "label": "Fishing and hunting workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2559,
      "label": "Forest, conservation, and logging workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2560,
      "label": "Construction and extraction occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2561,
      "label": "Supervisors, construction and extraction workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2562,
      "label": "Construction trades and related workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2563,
      "label": "Helpers, construction trades",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2564,
      "label": "Other construction and related workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2565,
      "label": "Extraction workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2566,
      "label": "Installation, maintenance, and repair occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2567,
      "label": "Supervisors of installation, maintenance, and repair workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2568,
      "label": "Electrical and electronic equipment mechanics, installers, and repairers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2569,
      "label": "And mobile equipment mechanics, installers, and repairers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2570,
      "label": "Other installation, maintenance, and repair occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2571,
      "label": "Production occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2572,
      "label": "Supervisors, production workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2573,
      "label": "Assemblers and fabricators",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2574,
      "label": "Food processing occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2575,
      "label": "Metal workers and plastic workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2576,
      "label": "Printing occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2577,
      "label": "Textile, apparel, and furnishings occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2578,
      "label": "Woodworkers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2579,
      "label": "Plant and system operators",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2580,
      "label": "Other production occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2581,
      "label": "Transportation and material moving occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2582,
      "label": "Supervisors, transportation and material moving workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2583,
      "label": "Air transportation occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2584,
      "label": "Motor vehicle operators",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2585,
      "label": "Rail transportation occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2586,
      "label": "Water transportation occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2587,
      "label": "Other transportation workers",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2588,
      "label": "Material moving occupations",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2589,
      "label": "Military",
      "parent_id": null
    },
    {
      "description": null,
      "id": 2590,
      "label": "Unclassified",
      "parent_id": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[[Category](#schemacategory)]|true|none|none|

<h2 id="tocS_Properties">Properties</h2>
<!-- backwards compatibility -->
<a id="schemaproperties"></a>
<a id="schema_Properties"></a>
<a id="tocSproperties"></a>
<a id="tocsproperties"></a>

```json
{
  "_properties": {
    "AFFGEOID": "1400000US48453000902",
    "ALAND": 3041429,
    "AWATER": 0,
    "COUNTYFP": "453",
    "GEOID": "48453000902",
    "LSAD": "CT",
    "NAME": "9.02",
    "STATEFP": "48",
    "TRACTCE": "000902"
  },
  "altname": "9.02",
  "autocomplete": {
    "input": [
      "48453000902",
      "9.02"
    ]
  },
  "calculated_area_sq_meters": 4105150.414024012,
  "name": "48453000902",
  "region_id": "48453000902",
  "regiontype": "tract",
  "state_code": "TX",
  "timestamp": "2018-04-09T20:54:47.264495"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_properties|[Properties1](#schemaproperties1)|true|none|none|
|altname|string|true|none|none|
|autocomplete|[Autocomplete](#schemaautocomplete)|true|none|none|
|calculated_area_sq_meters|number(double)|true|none|none|
|name|string|true|none|none|
|region_id|string|true|none|none|
|regiontype|string|true|none|none|
|state_code|string|true|none|none|
|timestamp|string|true|none|none|

<h2 id="tocS_Properties1">Properties1</h2>
<!-- backwards compatibility -->
<a id="schemaproperties1"></a>
<a id="schema_Properties1"></a>
<a id="tocSproperties1"></a>
<a id="tocsproperties1"></a>

```json
{
  "AFFGEOID": "1400000US48453000902",
  "ALAND": 3041429,
  "AWATER": 0,
  "COUNTYFP": "453",
  "GEOID": "48453000902",
  "LSAD": "CT",
  "NAME": "9.02",
  "STATEFP": "48",
  "TRACTCE": "000902"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AFFGEOID|string|false|none|none|
|ALAND|integer(int32)|true|none|none|
|AWATER|integer(int32)|false|none|none|
|BLKGRPCE|string|false|none|none|
|CBSAFP|string|false|none|none|
|CLASSFP|string|false|none|none|
|COUNTYFP|string|false|none|none|
|COUNTYNS|string|false|none|none|
|CSAFP|string|false|none|none|
|DIVISION|string|false|none|none|
|FUNCSTAT|string|false|none|none|
|GEOID|string|false|none|none|
|INTPTLAT|string|false|none|none|
|INTPTLON|string|false|none|none|
|LSAD|string|false|none|none|
|MEMI|string|false|none|none|
|METDIVFP|string|false|none|none|
|MTFCC|string|false|none|none|
|NAME|string|false|none|none|
|NAMELSAD|string|false|none|none|
|PCICBSA|string|false|none|none|
|PCINECTA|string|false|none|none|
|PLACEFP|string|false|none|none|
|PLACENS|string|false|none|none|
|POPULATION|integer(int32)|false|none|none|
|POP_SQMI|number(double)|false|none|none|
|PO_NAME|string|false|none|none|
|REGION|string|false|none|none|
|SQMI|number(double)|false|none|none|
|STATE|string|false|none|none|
|STATEFP|string|false|none|none|
|STATENS|string|false|none|none|
|STUSPS|string|false|none|none|
|Shape_Area|number(double)|false|none|none|
|Shape_Leng|number(double)|false|none|none|
|TRACTCE|string|false|none|none|
|ZIP_CODE|string|false|none|none|

<h2 id="tocS_Properties2">Properties2</h2>
<!-- backwards compatibility -->
<a id="schemaproperties2"></a>
<a id="schema_Properties2"></a>
<a id="tocSproperties2"></a>
<a id="tocsproperties2"></a>

```json
{
  "calculated_area_sq_meters": 27447057.07613631,
  "location": {
    "areatype": "drivetime",
    "latitude": 30.264757,
    "longitude": -97.7356077,
    "radius": "5",
    "type": "buffer",
    "units": "minutes"
  },
  "status": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculated_area_sq_meters|number(double)|true|none|none|
|location|[Location3](#schemalocation3)|true|none|none|
|status|integer(int32)|true|none|none|

<h2 id="tocS_Properties3">Properties3</h2>
<!-- backwards compatibility -->
<a id="schemaproperties3"></a>
<a id="schema_Properties3"></a>
<a id="tocSproperties3"></a>
<a id="tocsproperties3"></a>

```json
{
  "bearing": "N",
  "roadname": "North Interstate Highway 35 Service Road",
  "segment_id": "1595171804",
  "state": "Texas"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bearing|string|true|none|none|
|roadname|string|true|none|none|
|segment_id|string|true|none|none|
|state|string|true|none|none|

<h2 id="tocS_Properties4">Properties4</h2>
<!-- backwards compatibility -->
<a id="schemaproperties4"></a>
<a id="schema_Properties4"></a>
<a id="tocSproperties4"></a>
<a id="tocsproperties4"></a>

```json
{
  "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_Roadsegment">Roadsegment</h2>
<!-- backwards compatibility -->
<a id="schemaroadsegment"></a>
<a id="schema_Roadsegment"></a>
<a id="tocSroadsegment"></a>
<a id="tocsroadsegment"></a>

```json
{
  "coordinates": [
    [
      -97.734165,
      30.265642000000014
    ],
    [
      -97.734314,
      30.265693999999996
    ],
    [
      -97.734409,
      30.265727999999996
    ],
    [
      -97.7345332,
      30.265769000000006
    ],
    [
      -97.7346688,
      30.265802199999996
    ],
    [
      -97.7349238,
      30.2658816
    ],
    [
      -97.7350156,
      30.265904199999994
    ]
  ],
  "type": "LineString"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[[number(double)]]|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_SearchRoadSegments">SearchRoadSegments</h2>
<!-- backwards compatibility -->
<a id="schemasearchroadsegments"></a>
<a id="schema_SearchRoadSegments"></a>
<a id="tocSsearchroadsegments"></a>
<a id="tocssearchroadsegments"></a>

```json
{
  "data": {
    "crs": {
      "properties": {
        "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
      },
      "type": "name"
    },
    "features": [
      {
        "geometry": {
          "coordinates": [
            [
              -97.735557,
              30.261986
            ],
            [
              -97.735196,
              30.26292
            ],
            [
              -97.735011,
              30.263339
            ],
            [
              -97.734814,
              30.263796
            ],
            [
              -97.7347722,
              30.2638848
            ],
            [
              -97.734748,
              30.263936
            ],
            [
              -97.734723,
              30.264008
            ],
            [
              -97.734617,
              30.26428
            ],
            [
              -97.734489,
              30.264667
            ],
            [
              -97.734447,
              30.2648
            ],
            [
              -97.734362,
              30.26507
            ],
            [
              -97.734288,
              30.265273
            ],
            [
              -97.734177,
              30.265612
            ],
            [
              -97.734165,
              30.265642
            ]
          ],
          "type": "LineString"
        },
        "properties": {
          "bearing": "N",
          "roadname": "North Interstate Highway 35 Service Road",
          "segment_id": "1595171804",
          "state": "Texas"
        },
        "type": "Feature"
      }
    ],
    "type": "FeatureCollection"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data4](#schemadata4)|true|none|none|

<h2 id="tocS_Stats">Stats</h2>
<!-- backwards compatibility -->
<a id="schemastats"></a>
<a id="schema_Stats"></a>
<a id="tocSstats"></a>
<a id="tocsstats"></a>

```json
{
  "aadt": 5843
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aadt|integer(int32)|true|none|none|

<h2 id="tocS_Units">Units</h2>
<!-- backwards compatibility -->
<a id="schemaunits"></a>
<a id="schema_Units"></a>
<a id="tocSunits"></a>
<a id="tocsunits"></a>

```json
{
  "$100k-125k": "households",
  "$10k-15k": "households",
  "$125k-150k": "households",
  "$150k-175k": "households",
  "$15k-20k": "households",
  "$175k-200k": "households",
  "$200k-250k": "households",
  "$20k-25k": "households",
  "$250k-300k": "households",
  "$25k-30k": "households",
  "$300k-400k": "households",
  "$30k-35k": "households",
  "$35k-40k": "households",
  "$400k-500k": "households",
  "$40k-50k": "households",
  "$500k-750k": "households",
  "$50k-60k": "households",
  "$60k-70k": "households",
  "$70k-80k": "households",
  "$750k-1M": "households",
  "$80k-90k": "households",
  "$90k-100k": "households",
  "Median Home Value": "dollars",
  "Over $1M": "households",
  "Owner Occupied Households": "households",
  "Under $10k": "households",
  "context.households": "households",
  "context.landarea": "square miles"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$100k-125k|string|true|none|none|
|$10k-15k|string|true|none|none|
|$125k-150k|string|true|none|none|
|$150k-175k|string|true|none|none|
|$15k-20k|string|true|none|none|
|$175k-200k|string|true|none|none|
|$200k-250k|string|true|none|none|
|$20k-25k|string|true|none|none|
|$250k-300k|string|true|none|none|
|$25k-30k|string|true|none|none|
|$300k-400k|string|true|none|none|
|$30k-35k|string|true|none|none|
|$35k-40k|string|true|none|none|
|$400k-500k|string|true|none|none|
|$40k-50k|string|true|none|none|
|$500k-750k|string|true|none|none|
|$50k-60k|string|true|none|none|
|$60k-70k|string|true|none|none|
|$70k-80k|string|true|none|none|
|$750k-1M|string|true|none|none|
|$80k-90k|string|true|none|none|
|$90k-100k|string|true|none|none|
|Median Home Value|string|true|none|none|
|Over $1M|string|true|none|none|
|Owner Occupied Households|string|true|none|none|
|Under $10k|string|true|none|none|
|context.households|string|true|none|none|
|context.landarea|string|true|none|none|

<h2 id="tocS_VehicleTrafficCountsforRoadSegment">VehicleTrafficCountsforRoadSegment</h2>
<!-- backwards compatibility -->
<a id="schemavehicletrafficcountsforroadsegment"></a>
<a id="schema_VehicleTrafficCountsforRoadSegment"></a>
<a id="tocSvehicletrafficcountsforroadsegment"></a>
<a id="tocsvehicletrafficcountsforroadsegment"></a>

```json
{
  "data": [
    {
      "data": [
        [
          81,
          56,
          35,
          26,
          28,
          48,
          86,
          130,
          182,
          240,
          292,
          334,
          360,
          360,
          357,
          353,
          339,
          307,
          266,
          222,
          188,
          158,
          125,
          102
        ],
        [
          34,
          35,
          30,
          33,
          55,
          153,
          371,
          494,
          402,
          327,
          336,
          369,
          390,
          386,
          402,
          423,
          419,
          379,
          303,
          243,
          200,
          163,
          118,
          69
        ],
        [
          34,
          35,
          30,
          33,
          55,
          153,
          371,
          494,
          402,
          327,
          336,
          369,
          390,
          386,
          402,
          423,
          419,
          379,
          303,
          243,
          200,
          163,
          118,
          69
        ],
        [
          34,
          35,
          30,
          33,
          55,
          153,
          371,
          494,
          402,
          327,
          336,
          369,
          390,
          386,
          402,
          423,
          419,
          379,
          303,
          243,
          200,
          163,
          118,
          69
        ],
        [
          34,
          35,
          30,
          33,
          55,
          153,
          371,
          494,
          402,
          327,
          336,
          369,
          390,
          386,
          402,
          423,
          419,
          379,
          303,
          243,
          200,
          163,
          118,
          69
        ],
        [
          37,
          37,
          32,
          35,
          59,
          160,
          388,
          518,
          421,
          343,
          352,
          387,
          409,
          406,
          422,
          443,
          439,
          396,
          318,
          255,
          210,
          171,
          122,
          73
        ],
        [
          91,
          62,
          40,
          28,
          31,
          55,
          98,
          146,
          204,
          271,
          330,
          377,
          404,
          404,
          404,
          398,
          381,
          346,
          298,
          250,
          212,
          178,
          141,
          114
        ]
      ],
      "metadata": {
        "bearing": "W",
        "columns": [
          "12:00am",
          "01:00am",
          "02:00am",
          "03:00am",
          "04:00am",
          "05:00am",
          "06:00am",
          "07:00am",
          "08:00am",
          "09:00am",
          "10:00am",
          "11:00am",
          "12:00pm",
          "01:00pm",
          "02:00pm",
          "03:00pm",
          "04:00pm",
          "05:00pm",
          "06:00pm",
          "07:00pm",
          "08:00pm",
          "09:00pm",
          "10:00pm",
          "11:00pm"
        ],
        "name": "East 6th Street",
        "rows": [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ],
        "segment_id": "1595369397",
        "state": "Texas"
      },
      "roadsegment": {
        "coordinates": [
          [
            -97.734165,
            30.265642000000014
          ],
          [
            -97.734314,
            30.265693999999996
          ],
          [
            -97.734409,
            30.265727999999996
          ],
          [
            -97.7345332,
            30.265769000000006
          ],
          [
            -97.7346688,
            30.265802199999996
          ],
          [
            -97.7349238,
            30.2658816
          ],
          [
            -97.7350156,
            30.265904199999994
          ]
        ],
        "type": "LineString"
      },
      "stats": {
        "aadt": 5843
      }
    },
    {
      "data": [
        [
          116,
          80,
          51,
          36,
          41,
          69,
          124,
          185,
          259,
          343,
          416,
          476,
          512,
          512,
          509,
          502,
          482,
          437,
          379,
          317,
          267,
          226,
          178,
          145
        ],
        [
          71,
          43,
          34,
          37,
          69,
          173,
          364,
          485,
          464,
          438,
          469,
          520,
          548,
          561,
          610,
          666,
          677,
          625,
          503,
          413,
          346,
          279,
          203,
          134
        ],
        [
          71,
          43,
          34,
          37,
          69,
          173,
          364,
          485,
          464,
          438,
          469,
          520,
          548,
          561,
          610,
          666,
          677,
          625,
          503,
          413,
          346,
          279,
          203,
          134
        ],
        [
          71,
          43,
          34,
          37,
          69,
          173,
          364,
          485,
          464,
          438,
          469,
          520,
          548,
          561,
          610,
          666,
          677,
          625,
          503,
          413,
          346,
          279,
          203,
          134
        ],
        [
          71,
          43,
          34,
          37,
          69,
          173,
          364,
          485,
          464,
          438,
          469,
          520,
          548,
          561,
          610,
          666,
          677,
          625,
          503,
          413,
          346,
          279,
          203,
          134
        ],
        [
          74,
          46,
          34,
          38,
          73,
          180,
          382,
          509,
          487,
          458,
          491,
          545,
          576,
          587,
          640,
          698,
          710,
          654,
          528,
          433,
          362,
          292,
          213,
          141
        ],
        [
          130,
          88,
          57,
          40,
          45,
          78,
          138,
          207,
          291,
          386,
          469,
          536,
          576,
          576,
          573,
          566,
          542,
          493,
          426,
          356,
          299,
          253,
          201,
          163
        ]
      ],
      "metadata": {
        "bearing": "E",
        "columns": [
          "12:00am",
          "01:00am",
          "02:00am",
          "03:00am",
          "04:00am",
          "05:00am",
          "06:00am",
          "07:00am",
          "08:00am",
          "09:00am",
          "10:00am",
          "11:00am",
          "12:00pm",
          "01:00pm",
          "02:00pm",
          "03:00pm",
          "04:00pm",
          "05:00pm",
          "06:00pm",
          "07:00pm",
          "08:00pm",
          "09:00pm",
          "10:00pm",
          "11:00pm"
        ],
        "name": "East 6th Street",
        "rows": [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ],
        "segment_id": "1595369411",
        "state": "Texas"
      },
      "roadsegment": {
        "coordinates": [
          [
            -97.7350156,
            30.265904199999994
          ],
          [
            -97.7349238,
            30.2658816
          ],
          [
            -97.7346688,
            30.265802199999996
          ],
          [
            -97.7345332,
            30.265769000000006
          ],
          [
            -97.734409,
            30.265727999999996
          ],
          [
            -97.734314,
            30.265693999999996
          ],
          [
            -97.734165,
            30.265642000000014
          ]
        ],
        "type": "LineString"
      },
      "stats": {
        "aadt": 8318
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Data5](#schemadata5)]|true|none|none|

<h2 id="tocS_locationArray">locationArray</h2>
<!-- backwards compatibility -->
<a id="schemalocationarray"></a>
<a id="schema_locationArray"></a>
<a id="tocSlocationarray"></a>
<a id="tocslocationarray"></a>

```json
{
  "areatype": "ring",
  "latitude": 30.264757,
  "longitude": -97.7356077,
  "radius": "1",
  "type": "buffer",
  "units": "mi"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areatype|string|true|none|none|
|latitude|number(double)|true|none|none|
|longitude|number(double)|true|none|none|
|radius|string|true|none|none|
|type|string|true|none|none|
|units|string|true|none|none|

<h2 id="tocS_locationArray2">locationArray2</h2>
<!-- backwards compatibility -->
<a id="schemalocationarray2"></a>
<a id="schema_locationArray2"></a>
<a id="tocSlocationarray2"></a>
<a id="tocslocationarray2"></a>

```json
{
  "region_id": "78702",
  "regiontype": "zipcode",
  "type": "region"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region_id|string|true|none|none|
|regiontype|string|true|none|none|
|type|string|true|none|none|
