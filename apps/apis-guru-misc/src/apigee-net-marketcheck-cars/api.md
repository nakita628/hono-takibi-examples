<h1 id="marketcheck-apis">Marketcheck APIs v2.01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

One API serving data spanned across multiple verticals

Base URLs:

* <a href="https://marketcheck-prod.apigee.net/v2">https://marketcheck-prod.apigee.net/v2</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="marketcheck-apis-car-search">Car Search</h1>

## Get dealers active inventory

> Code samples

```bash
curl https://example.com/car/dealer/inventory/active \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /car/dealer/inventory/active`

Get dealers active inventory

<h3 id="get-dealers-active-inventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|include_lease|query|boolean|false|Boolean param to search for listings that include leasing options in them|
|include_finance|query|boolean|false|Boolean param to search for listings that include finance options in them|
|lease_term|query|string|false|Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60|
|lease_down_payment|query|string|false|Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60|
|lease_emp|query|string|false|Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60|
|finance_loan_term|query|string|false|Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60|
|finance_loan_apr|query|string|false|Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60|
|finance_emp|query|string|false|Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60|
|finance_down_payment|query|string|false|Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60|
|finance_down_payment_per|query|string|false|Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60|
|car_type|query|string|false|Car type. Allowed values are - new / used / certified|
|carfax_1_owner|query|string|false|Indicates whether car has had only one owner or not|
|carfax_clean_title|query|string|false|Indicates whether car has clean ownership records|
|year_range|query|string(string)|false|Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|vin|query|string|false|To filter listing on their VIN|
|source|query|string|false|To filter listing on their source|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|vins|query|string|false|Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc|
|taxonomy_vins|query|string|false|Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.|
|mm|query|string|false|Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is|
|ymm|query|string|false|Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is|
|ymmt|query|string|false|Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '\|' character in the form year\|make\|model\|trim. e.g. 2010\|Audi\|A5,2014\|Nissan\|Sentra\|S 6MT,\|Honda\|City\|   You could just provide strings of the form - 'year\|make\|\|' or 'year\|make\|model' or '\|make\|model\|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year\|make\|model\|trim combinations.|
|match|query|string|false|Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match|
|cylinders|query|string|false|To filter listing on their cylinders|
|transmission|query|string|false|To filter listing on their transmission|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_aspiration|query|string|false|Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|
|highway_mpg_range|query|string(string)|false|Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|city_mpg_range|query|string(string)|false|City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|dom_range|query|string(string)|false|Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|include_non_vin_listings|query|boolean|false|To include non vin listings. Default is false|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|country|query|string|false|To filter listing on Country in which they are listed|
|plot|query|boolean|false|If plot has value true results in around 25k coordinates with limited fields to plot respective graph|
|nodedup|query|boolean|false|If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin|
|dedup|query|boolean|false|If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source|
|owned|query|boolean|false|Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|dealer_name|query|string|false|Filter listings on dealer_name|
|dealership_group_name|query|string(string)|false|Name of the dealership group to search for|
|trim_o|query|string|false|Filter listings on web scraped trim|
|trim_r|query|string|false|Filter trim on custom possible matches|
|dom_active_range|query|string(string)|false|Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dom_180_range|query|string(string)|false|Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|exclude_certified|query|boolean|false|Boolean param to exclude certified cars from search results|
|fuel_type|query|string|false|To filter listing on their fuel type|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|photo_links|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them|
|photo_links_cached|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_source_range|query|string(string)|false|First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_mc_range|query|string(string)|false|First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_source_days|query|string(string)|false|First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_mc_days|query|string(string)|false|First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12|
|include_relevant_links|query|boolean|false|To include_relevant_links. Default is true|
|inventory_count_range|query|string(string)|false|Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50|
|in_transit|query|string|false|A boolean to filter in transit vehicles|
|seating_capacity|query|string(string)|false|To filter on vehicle seating capacity|
|engine_size_range|query|string(string)|false|Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2|
|powertrain_type|query|string(string)|false|To filter on powertrain_type|
|min_photo_links|query|string(string)|false|Filter listings based by number of photo links within given range|
|min_photo_links_cached|query|string(string)|false|Filter listings based by number of cached photo links within given range|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|new|
|car_type|used|
|car_type|certified|
|carfax_1_owner|true|
|carfax_1_owner|false|
|carfax_clean_title|true|
|carfax_clean_title|false|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|all|
|country|ALL|
|dealer_type|franchise|
|dealer_type|independent|
|in_transit|true|
|in_transit|false|

> Example responses

> 200 Response

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_r": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "vdp_url": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-dealers-active-inventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all cars listings matching the search & filter criteria|[SearchResponse](#schemasearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing by id

> Code samples

```bash
curl https://example.com/listing/car/auction/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/auction/{id}`

Get a particular auction listing by its id

<h3 id="listing-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|id|path|string(string)|true|Listing id to get all the listing attributes|
|include_relevant_links|query|boolean|false|To include_relevant_links. Default is true|

> Example responses

> 200 Response

```json
{
  "base_ext_color": "string",
  "base_int_color": "string",
  "build": {
    "antibrake_sys": "string",
    "body_subtype": "string",
    "body_type": "string",
    "city_miles": "string",
    "city_mpg": 0,
    "cylinders": 0,
    "doors": 0,
    "drivetrain": "string",
    "engine": "string",
    "engine_aspiration": "string",
    "engine_block": "string",
    "engine_measure": "string",
    "engine_size": 0,
    "fuel_type": "string",
    "highway_miles": "string",
    "highway_mpg": 0,
    "made_in": "string",
    "make": "string",
    "model": "string",
    "opt_seating": "string",
    "overall_height": "string",
    "overall_length": "string",
    "overall_width": "string",
    "powertrain_type": "string",
    "short_trim": "string",
    "std_seating": "string",
    "steering_type": "string",
    "tank_size": "string",
    "transmission": "string",
    "trim": "string",
    "trim_r": "string",
    "vehicle_type": "string",
    "year": 0
  },
  "carfax_1_owner": true,
  "carfax_clean_title": true,
  "data_source": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dom": 0,
  "dom_180": 0,
  "dom_active": 0,
  "exterior_color": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "financing_options": [
    {
      "down_payment": 0,
      "down_payment_percentage": 0,
      "estimated_monthly_payment": 0,
      "loan_apr": 0,
      "loan_term": 0
    }
  ],
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "first_seen_at_mc": 0,
  "first_seen_at_mc_date": "string",
  "first_seen_at_source": 0,
  "first_seen_at_source_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "is_certified": 0,
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "leasing_options": [
    {
      "down_payment": 0,
      "estimated_monthly_payment": 0,
      "lease_term": 0
    }
  ],
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "price_change_percent": 0,
  "rank": 0,
  "ref_miles": "string",
  "ref_miles_dt": 0,
  "ref_price": "string",
  "ref_price_dt": 0,
  "score": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vdp_url": "string",
  "vehicle_registration_mark": "string",
  "vin": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listing for the given id|[Listing](#schemalisting)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Long text Listings attributes for Listing with the given id

> Code samples

```bash
curl https://example.com/listing/car/auction/string/extra \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/auction/{id}/extra`

Get listing options, features, seller comments

<h3 id="long-text-listings-attributes-for-listing-with-the-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "dealer_added_f": [
    "string"
  ],
  "electronics_f": [
    "string"
  ],
  "exterior_f": [
    "string"
  ],
  "features": [
    "string"
  ],
  "id": "string",
  "interior_f": [
    "string"
  ],
  "options": [
    "string"
  ],
  "safety_f": [
    "string"
  ],
  "seller_cmts": "string",
  "standard_f": [
    "string"
  ],
  "technical_f": [
    "string"
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="long-text-listings-attributes-for-listing-with-the-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ListingAttributes for the given listing id|[ListingExtraAttributes](#schemalistingextraattributes)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing media by id

> Code samples

```bash
curl https://example.com/listing/car/auction/string/media \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/auction/{id}/media`

Get listing media (photo, photos) by id

<h3 id="listing-media-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "photo_links": [
    "string"
  ],
  "photo_url": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-media-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ListingMedia for the given listing id|[ListingMedia](#schemalistingmedia)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing by id

> Code samples

```bash
curl https://example.com/listing/car/fsbo/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/fsbo/{id}`

Get a particular private party listing by its id

<h3 id="listing-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|id|path|string(string)|true|Listing id to get all the listing attributes|
|include_relevant_links|query|boolean|false|To include_relevant_links. Default is true|

> Example responses

> 200 Response

```json
{
  "base_ext_color": "string",
  "base_int_color": "string",
  "build": {
    "antibrake_sys": "string",
    "body_subtype": "string",
    "body_type": "string",
    "city_miles": "string",
    "city_mpg": 0,
    "cylinders": 0,
    "doors": 0,
    "drivetrain": "string",
    "engine": "string",
    "engine_aspiration": "string",
    "engine_block": "string",
    "engine_measure": "string",
    "engine_size": 0,
    "fuel_type": "string",
    "highway_miles": "string",
    "highway_mpg": 0,
    "made_in": "string",
    "make": "string",
    "model": "string",
    "opt_seating": "string",
    "overall_height": "string",
    "overall_length": "string",
    "overall_width": "string",
    "powertrain_type": "string",
    "short_trim": "string",
    "std_seating": "string",
    "steering_type": "string",
    "tank_size": "string",
    "transmission": "string",
    "trim": "string",
    "trim_r": "string",
    "vehicle_type": "string",
    "year": 0
  },
  "carfax_1_owner": true,
  "carfax_clean_title": true,
  "data_source": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dom": 0,
  "dom_180": 0,
  "dom_active": 0,
  "exterior_color": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "financing_options": [
    {
      "down_payment": 0,
      "down_payment_percentage": 0,
      "estimated_monthly_payment": 0,
      "loan_apr": 0,
      "loan_term": 0
    }
  ],
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "first_seen_at_mc": 0,
  "first_seen_at_mc_date": "string",
  "first_seen_at_source": 0,
  "first_seen_at_source_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "is_certified": 0,
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "leasing_options": [
    {
      "down_payment": 0,
      "estimated_monthly_payment": 0,
      "lease_term": 0
    }
  ],
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "price_change_percent": 0,
  "rank": 0,
  "ref_miles": "string",
  "ref_miles_dt": 0,
  "ref_price": "string",
  "ref_price_dt": 0,
  "score": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vdp_url": "string",
  "vehicle_registration_mark": "string",
  "vin": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listing for the given id|[Listing](#schemalisting)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Long text Listings attributes for Listing with the given id

> Code samples

```bash
curl https://example.com/listing/car/fsbo/string/extra \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/fsbo/{id}/extra`

Get listing options, features, seller comments

<h3 id="long-text-listings-attributes-for-listing-with-the-given-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "dealer_added_f": [
    "string"
  ],
  "electronics_f": [
    "string"
  ],
  "exterior_f": [
    "string"
  ],
  "features": [
    "string"
  ],
  "id": "string",
  "interior_f": [
    "string"
  ],
  "options": [
    "string"
  ],
  "safety_f": [
    "string"
  ],
  "seller_cmts": "string",
  "standard_f": [
    "string"
  ],
  "technical_f": [
    "string"
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="long-text-listings-attributes-for-listing-with-the-given-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ListingAttributes for the given listing id|[ListingExtraAttributes](#schemalistingextraattributes)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing media by id

> Code samples

```bash
curl https://example.com/listing/car/fsbo/string/media \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/fsbo/{id}/media`

Get listing media (photo, photos) by id

<h3 id="listing-media-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "photo_links": [
    "string"
  ],
  "photo_url": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-media-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ListingMedia for the given listing id|[ListingMedia](#schemalistingmedia)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing by id

> Code samples

```bash
curl https://example.com/listing/car/uk/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/uk/{id}`

Get a particular dealer listing by its id

<h3 id="listing-by-id-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "base_ext_color": "string",
  "base_int_color": "string",
  "build": {
    "antibrake_sys": "string",
    "body_subtype": "string",
    "body_type": "string",
    "city_miles": "string",
    "city_mpg": 0,
    "cylinders": 0,
    "doors": 0,
    "drivetrain": "string",
    "engine": "string",
    "engine_aspiration": "string",
    "engine_block": "string",
    "engine_measure": "string",
    "engine_size": 0,
    "fuel_type": "string",
    "highway_miles": "string",
    "highway_mpg": 0,
    "made_in": "string",
    "make": "string",
    "model": "string",
    "opt_seating": "string",
    "overall_height": "string",
    "overall_length": "string",
    "overall_width": "string",
    "powertrain_type": "string",
    "short_trim": "string",
    "std_seating": "string",
    "steering_type": "string",
    "tank_size": "string",
    "transmission": "string",
    "trim": "string",
    "trim_r": "string",
    "vehicle_type": "string",
    "year": 0
  },
  "carfax_1_owner": true,
  "carfax_clean_title": true,
  "data_source": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dom": 0,
  "dom_180": 0,
  "dom_active": 0,
  "exterior_color": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "financing_options": [
    {
      "down_payment": 0,
      "down_payment_percentage": 0,
      "estimated_monthly_payment": 0,
      "loan_apr": 0,
      "loan_term": 0
    }
  ],
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "first_seen_at_mc": 0,
  "first_seen_at_mc_date": "string",
  "first_seen_at_source": 0,
  "first_seen_at_source_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "is_certified": 0,
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "leasing_options": [
    {
      "down_payment": 0,
      "estimated_monthly_payment": 0,
      "lease_term": 0
    }
  ],
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "price_change_percent": 0,
  "rank": 0,
  "ref_miles": "string",
  "ref_miles_dt": 0,
  "ref_price": "string",
  "ref_price_dt": 0,
  "score": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vdp_url": "string",
  "vehicle_registration_mark": "string",
  "vin": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-by-id-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listing for the given id|[Listing](#schemalisting)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Long text Listings attributes for Listing with the given id

> Code samples

```bash
curl https://example.com/listing/car/uk/string/extra \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/uk/{id}/extra`

Get listing options, features, seller comments

<h3 id="long-text-listings-attributes-for-listing-with-the-given-id-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "dealer_added_f": [
    "string"
  ],
  "electronics_f": [
    "string"
  ],
  "exterior_f": [
    "string"
  ],
  "features": [
    "string"
  ],
  "id": "string",
  "interior_f": [
    "string"
  ],
  "options": [
    "string"
  ],
  "safety_f": [
    "string"
  ],
  "seller_cmts": "string",
  "standard_f": [
    "string"
  ],
  "technical_f": [
    "string"
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="long-text-listings-attributes-for-listing-with-the-given-id-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ListingAttributes for the given listing id|[ListingExtraAttributes](#schemalistingextraattributes)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing media by id

> Code samples

```bash
curl https://example.com/listing/car/uk/string/media \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/uk/{id}/media`

Get listing media (photo, photos) by id

<h3 id="listing-media-by-id-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "photo_links": [
    "string"
  ],
  "photo_url": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-media-by-id-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ListingMedia for the given listing id|[ListingMedia](#schemalistingmedia)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing by id

<a id="opIdgetListing"></a>

> Code samples

```bash
curl https://example.com/listing/car/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/{id}`

Get a particular dealer listing by its id

<h3 id="listing-by-id-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|id|path|string(string)|true|Listing id to get all the listing attributes|
|include_relevant_links|query|boolean|false|To include_relevant_links. Default is true|

> Example responses

> 200 Response

```json
{
  "base_ext_color": "string",
  "base_int_color": "string",
  "build": {
    "antibrake_sys": "string",
    "body_subtype": "string",
    "body_type": "string",
    "city_miles": "string",
    "city_mpg": 0,
    "cylinders": 0,
    "doors": 0,
    "drivetrain": "string",
    "engine": "string",
    "engine_aspiration": "string",
    "engine_block": "string",
    "engine_measure": "string",
    "engine_size": 0,
    "fuel_type": "string",
    "highway_miles": "string",
    "highway_mpg": 0,
    "made_in": "string",
    "make": "string",
    "model": "string",
    "opt_seating": "string",
    "overall_height": "string",
    "overall_length": "string",
    "overall_width": "string",
    "powertrain_type": "string",
    "short_trim": "string",
    "std_seating": "string",
    "steering_type": "string",
    "tank_size": "string",
    "transmission": "string",
    "trim": "string",
    "trim_r": "string",
    "vehicle_type": "string",
    "year": 0
  },
  "carfax_1_owner": true,
  "carfax_clean_title": true,
  "data_source": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dom": 0,
  "dom_180": 0,
  "dom_active": 0,
  "exterior_color": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "financing_options": [
    {
      "down_payment": 0,
      "down_payment_percentage": 0,
      "estimated_monthly_payment": 0,
      "loan_apr": 0,
      "loan_term": 0
    }
  ],
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "first_seen_at_mc": 0,
  "first_seen_at_mc_date": "string",
  "first_seen_at_source": 0,
  "first_seen_at_source_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "is_certified": 0,
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "leasing_options": [
    {
      "down_payment": 0,
      "estimated_monthly_payment": 0,
      "lease_term": 0
    }
  ],
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "price_change_percent": 0,
  "rank": 0,
  "ref_miles": "string",
  "ref_miles_dt": 0,
  "ref_price": "string",
  "ref_price_dt": 0,
  "score": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vdp_url": "string",
  "vehicle_registration_mark": "string",
  "vin": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-by-id-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listing for the given id|[Listing](#schemalisting)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Long text Listings attributes for Listing with the given id

> Code samples

```bash
curl https://example.com/listing/car/string/extra \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/{id}/extra`

Get listing options, features, seller comments

<h3 id="long-text-listings-attributes-for-listing-with-the-given-id-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "dealer_added_f": [
    "string"
  ],
  "electronics_f": [
    "string"
  ],
  "exterior_f": [
    "string"
  ],
  "features": [
    "string"
  ],
  "id": "string",
  "interior_f": [
    "string"
  ],
  "options": [
    "string"
  ],
  "safety_f": [
    "string"
  ],
  "seller_cmts": "string",
  "standard_f": [
    "string"
  ],
  "technical_f": [
    "string"
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="long-text-listings-attributes-for-listing-with-the-given-id-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ListingAttributes for the given listing id|[ListingExtraAttributes](#schemalistingextraattributes)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing media by id

> Code samples

```bash
curl https://example.com/listing/car/string/media \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/car/{id}/media`

Get listing media (photo, photos) by id

<h3 id="listing-media-by-id-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "photo_links": [
    "string"
  ],
  "photo_url": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-media-by-id-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ListingMedia for the given listing id|[ListingMedia](#schemalistingmedia)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Gets active car listings for the given search criteria

> Code samples

```bash
curl https://example.com/search/car/active \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/car/active`

This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
 The search API facilitates the following use cases - 
1. Search Cars around a given geo-point within a given radius 
2. Search cars for a specific year / make / model or combination of these 
3. Search cars matching multiple year, make, model combinatins in the same search request
4. Filter results by most car specification attributes
5. Search for similar cars by VIN or Taxonomy VIN 
6. Filter cars within a given price / miles / days on market (dom) range
7. Specify a sort order for the results on price / miles / dom / listed date 
8. Search cars for a given City / State combination 
9. Get Facets to build the search drill downs 
10. Get Market averages for price/miles/dom for your search

<h3 id="gets-active-car-listings-for-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|include_lease|query|boolean|false|Boolean param to search for listings that include leasing options in them|
|include_finance|query|boolean|false|Boolean param to search for listings that include finance options in them|
|lease_term|query|string|false|Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60|
|lease_down_payment|query|string|false|Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60|
|lease_emp|query|string|false|Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60|
|finance_loan_term|query|string|false|Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60|
|finance_loan_apr|query|string|false|Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60|
|finance_emp|query|string|false|Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60|
|finance_down_payment|query|string|false|Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60|
|finance_down_payment_per|query|string|false|Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60|
|car_type|query|string|false|Car type. Allowed values are - new / used / certified|
|carfax_1_owner|query|string|false|Indicates whether car has had only one owner or not|
|carfax_clean_title|query|string|false|Indicates whether car has clean ownership records|
|year_range|query|string(string)|false|Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|vin|query|string|false|To filter listing on their VIN|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|vins|query|string|false|Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc|
|taxonomy_vins|query|string|false|Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.|
|mm|query|string|false|Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is|
|ymm|query|string|false|Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is|
|ymmt|query|string|false|Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '\|' character in the form year\|make\|model\|trim. e.g. 2010\|Audi\|A5,2014\|Nissan\|Sentra\|S 6MT,\|Honda\|City\|   You could just provide strings of the form - 'year\|make\|\|' or 'year\|make\|model' or '\|make\|model\|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year\|make\|model\|trim combinations.|
|match|query|string|false|Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match|
|cylinders|query|string|false|To filter listing on their cylinders|
|transmission|query|string|false|To filter listing on their transmission|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_aspiration|query|string|false|Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|
|highway_mpg_range|query|string(string)|false|Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|city_mpg_range|query|string(string)|false|City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|dom_range|query|string(string)|false|Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|include_non_vin_listings|query|boolean|false|To include non vin listings. Default is false|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|country|query|string|false|To filter listing on Country in which they are listed|
|plot|query|boolean|false|If plot has value true results in around 25k coordinates with limited fields to plot respective graph|
|nodedup|query|boolean|false|If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin|
|dedup|query|boolean|false|If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source|
|owned|query|boolean|false|Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself|
|source|query|string|false|To filter listing on their source only for widget requests|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|trim_o|query|string|false|Filter listings on web scraped trim|
|trim_r|query|string|false|Filter trim on custom possible matches|
|dom_active_range|query|string(string)|false|Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dom_180_range|query|string(string)|false|Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|exclude_certified|query|boolean|false|Boolean param to exclude certified cars from search results|
|fuel_type|query|string|false|To filter listing on their fuel type|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|photo_links|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them|
|photo_links_cached|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_source_range|query|string(string)|false|First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_mc_range|query|string(string)|false|First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_source_days|query|string(string)|false|First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_mc_days|query|string(string)|false|First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12|
|include_relevant_links|query|boolean|false|To include_relevant_links. Default is true|
|inventory_count_range|query|string(string)|false|Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|exclude_dealer_ids|query|string(string)|false|A list of dealer ids to exclude from result|
|exclude_sources|query|string(string)|false|A list of sources to exclude from result|
|in_transit|query|string|false|A boolean to filter in transit vehicles|
|seating_capacity|query|string(string)|false|To filter on vehicle seating capacity|
|powertrain_type|query|string(string)|false|To filter on powertrain_type|
|price_change|query|string|false|Query to filter listings based on their positive and negative price change|
|price_change_range|query|string(string)|false|Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500|
|active_inventory_date_range|query|string(string)|false|date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|engine_size_range|query|string(string)|false|Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2|
|high_value_features|query|string|false|To filter listings on their high_value_features. Results will be intersection of provided HVFs|
|min_photo_links|query|string(string)|false|Filter listings based by number of photo links within given range|
|min_photo_links_cached|query|string(string)|false|Filter listings based by number of cached photo links within given range|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|new|
|car_type|used|
|car_type|certified|
|carfax_1_owner|true|
|carfax_1_owner|false|
|carfax_clean_title|true|
|carfax_clean_title|false|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|all|
|country|ALL|
|dealer_type|franchise|
|dealer_type|independent|
|in_transit|true|
|in_transit|false|
|price_change|positive|
|price_change|negative|

> Example responses

> 200 Response

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_r": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "vdp_url": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-active-car-listings-for-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all cars listings matching the search & filter criteria|[SearchResponse](#schemasearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Gets active auction car listings for the given search criteria

> Code samples

```bash
curl https://example.com/search/car/auction/active \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/car/auction/active`

This API produces a list of currently active auction cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
 The search API facilitates the following use cases - 
1. Search Cars around a given geo-point within a given radius 
2. Search cars for a specific year / make / model or combination of these 
3. Search cars matching multiple year, make, model combinatins in the same search request
4. Filter results by most car specification attributes
5. Search for similar cars by VIN or Taxonomy VIN 
6. Filter cars within a given price / miles / days on market (dom) range
7. Specify a sort order for the results on price / miles / dom / listed date 
8. Search cars for a given City / State combination 
9. Get Facets to build the search drill downs 
10. Get Market averages for price/miles/dom for your search

<h3 id="gets-active-auction-car-listings-for-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|include_lease|query|boolean|false|Boolean param to search for listings that include leasing options in them|
|include_finance|query|boolean|false|Boolean param to search for listings that include finance options in them|
|lease_term|query|string|false|Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60|
|lease_down_payment|query|string|false|Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60|
|lease_emp|query|string|false|Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60|
|finance_loan_term|query|string|false|Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60|
|finance_loan_apr|query|string|false|Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60|
|finance_emp|query|string|false|Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60|
|finance_down_payment|query|string|false|Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60|
|finance_down_payment_per|query|string|false|Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60|
|car_type|query|string|false|Car type. Allowed values are - new / used / certified|
|carfax_1_owner|query|string|false|Indicates whether car has had only one owner or not|
|carfax_clean_title|query|string|false|Indicates whether car has clean ownership records|
|year_range|query|string(string)|false|Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|vin|query|string|false|To filter listing on their VIN|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|vins|query|string|false|Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc|
|taxonomy_vins|query|string|false|Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.|
|mm|query|string|false|Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is|
|ymm|query|string|false|Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is|
|ymmt|query|string|false|Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '\|' character in the form year\|make\|model\|trim. e.g. 2010\|Audi\|A5,2014\|Nissan\|Sentra\|S 6MT,\|Honda\|City\|   You could just provide strings of the form - 'year\|make\|\|' or 'year\|make\|model' or '\|make\|model\|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year\|make\|model\|trim combinations.|
|match|query|string|false|Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match|
|cylinders|query|string|false|To filter listing on their cylinders|
|transmission|query|string|false|To filter listing on their transmission|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_aspiration|query|string|false|Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|
|highway_mpg_range|query|string(string)|false|Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|city_mpg_range|query|string(string)|false|City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|dom_range|query|string(string)|false|Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|include_non_vin_listings|query|boolean|false|To include non vin listings. Default is false|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|country|query|string|false|To filter listing on Country in which they are listed|
|plot|query|boolean|false|If plot has value true results in around 25k coordinates with limited fields to plot respective graph|
|nodedup|query|boolean|false|If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin|
|dedup|query|boolean|false|If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source|
|owned|query|boolean|false|Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|source|query|string|false|To filter listing on their source only for widget requests|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|trim_o|query|string|false|Filter listings on web scraped trim|
|trim_r|query|string|false|Filter trim on custom possible matches|
|dom_active_range|query|string(string)|false|Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dom_180_range|query|string(string)|false|Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|exclude_certified|query|boolean|false|Boolean param to exclude certified cars from search results|
|fuel_type|query|string|false|To filter listing on their fuel type|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|photo_links|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them|
|photo_links_cached|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_source_range|query|string(string)|false|First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_mc_range|query|string(string)|false|First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_source_days|query|string(string)|false|First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_mc_days|query|string(string)|false|First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12|
|include_relevant_links|query|boolean|false|To include_relevant_links. Default is true|
|inventory_count_range|query|string(string)|false|Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50|
|exclude_dealer_ids|query|string(string)|false|A list of dealer ids to exclude from result|
|exclude_sources|query|string(string)|false|A list of sources to exclude from result|
|in_transit|query|string|false|A boolean to filter in transit vehicles|
|title_type|query|string|false|To filter on title type|
|seating_capacity|query|string(string)|false|To filter on vehicle seating capacity|
|engine_size_range|query|string(string)|false|Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2|
|min_photo_links|query|string(string)|false|Filter listings based by number of photo links within given range|
|min_photo_links_cached|query|string(string)|false|Filter listings based by number of cached photo links within given range|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|new|
|car_type|used|
|car_type|certified|
|carfax_1_owner|true|
|carfax_1_owner|false|
|carfax_clean_title|true|
|carfax_clean_title|false|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|all|
|country|ALL|
|dealer_type|franchise|
|dealer_type|independent|
|in_transit|true|
|in_transit|false|
|title_type|clean|
|title_type|salvage|

> Example responses

> 200 Response

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_r": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "vdp_url": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-active-auction-car-listings-for-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all auction cars listings matching the search & filter criteria|[SearchResponse](#schemasearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## API for auto-completion of inputs

<a id="opIdautoComplete"></a>

> Code samples

```bash
curl 'https://example.com/search/car/auto-complete?field=ymm&input=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/car/auto-complete`

Auto-complete the inputs of your end users

<h3 id="api-for-auto-completion-of-inputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|field|query|string(string)|true|Field name for which you want auto-completion|
|input|query|string(string)|true|Input entered so far|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|transmission|query|string|false|To filter listing on their transmission|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|fuel_type|query|string|false|To filter listing on their fuel type|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|source|query|string|false|To filter listing on their source only for widget requests|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|country|query|string|false|To filter listing on Country in which they are listed|
|car_type|query|string|false|Car type. Allowed values are - new / used|
|include_non_vin_listings|query|string|false|Flag to indicate whether to include non vin listing terms in results or not. Default is false to avoid un-normalised terms from non vin listings out of results|
|ignore_case|query|boolean|false|Boolean variable to indicate ignore case of current input|
|term_counts|query|boolean|false|Boolean variable to indicate wheather to include term counts as well in response|
|sort_by|query|string|false|Sort the response, either by index or count(default)|
|seller_type|query|string|false|seller type for autocomplete|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|inventory_count_range|query|string(string)|false|Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50|
|exclude_dealer_ids|query|string(string)|false|A list of dealer ids to exclude from result|
|exclude_sources|query|string(string)|false|A list of sources to exclude from result|
|in_transit|query|string|false|A boolean to filter in transit vehicles|
|facet_min_count|query|number(number)|false|Provide minimum count value for facets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|ymm|
|field|mm|
|field|make|
|field|model|
|field|trim|
|field|body_type|
|field|body_subtype|
|field|vehicle_type|
|field|transmission|
|field|drivetrain|
|field|fuel_type|
|field|exterior_color|
|field|interior_color|
|field|engine|
|field|engine_size|
|field|engine_block|
|field|state|
|field|city|
|country|US|
|country|CA|
|country|us|
|country|ca|
|car_type|new|
|car_type|used|
|include_non_vin_listings|true|
|include_non_vin_listings|false|
|sort_by|index|
|sort_by|count|
|in_transit|true|
|in_transit|false|

> Example responses

> 200 Response

```json
{
  "terms": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="api-for-auto-completion-of-inputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unique terms available in given field for auto completion|[SearchAutoCompleteResponse](#schemasearchautocompleteresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Gets active private party car listings for the given search criteria

> Code samples

```bash
curl https://example.com/search/car/fsbo/active \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/car/fsbo/active`

This API produces a list of currently active FSBO cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
 The search API facilitates the following use cases - 
1. Search Cars around a given geo-point within a given radius 
2. Search cars for a specific year / make / model or combination of these 
3. Search cars matching multiple year, make, model combinatins in the same search request
4. Filter results by most car specification attributes
5. Search for similar cars by VIN or Taxonomy VIN 
6. Filter cars within a given price / miles / days on market (dom) range
7. Specify a sort order for the results on price / miles / dom / listed date 
8. Search cars for a given City / State combination 
9. Get Facets to build the search drill downs 
10. Get Market averages for price/miles/dom for your search

<h3 id="gets-active-private-party-car-listings-for-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|include_lease|query|boolean|false|Boolean param to search for listings that include leasing options in them|
|include_finance|query|boolean|false|Boolean param to search for listings that include finance options in them|
|lease_term|query|string|false|Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60|
|lease_down_payment|query|string|false|Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60|
|lease_emp|query|string|false|Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60|
|finance_loan_term|query|string|false|Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60|
|finance_loan_apr|query|string|false|Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60|
|finance_emp|query|string|false|Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60|
|finance_down_payment|query|string|false|Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60|
|finance_down_payment_per|query|string|false|Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60|
|car_type|query|string|false|Car type. Allowed values are - new / used / certified|
|carfax_1_owner|query|string|false|Indicates whether car has had only one owner or not|
|carfax_clean_title|query|string|false|Indicates whether car has clean ownership records|
|year_range|query|string(string)|false|Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|vin|query|string|false|To filter listing on their VIN|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|vins|query|string|false|Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc|
|taxonomy_vins|query|string|false|Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.|
|mm|query|string|false|Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is|
|ymm|query|string|false|Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is|
|ymmt|query|string|false|Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '\|' character in the form year\|make\|model\|trim. e.g. 2010\|Audi\|A5,2014\|Nissan\|Sentra\|S 6MT,\|Honda\|City\|   You could just provide strings of the form - 'year\|make\|\|' or 'year\|make\|model' or '\|make\|model\|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year\|make\|model\|trim combinations.|
|match|query|string|false|Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match|
|cylinders|query|string|false|To filter listing on their cylinders|
|transmission|query|string|false|To filter listing on their transmission|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_aspiration|query|string|false|Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|
|highway_mpg_range|query|string(string)|false|Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|city_mpg_range|query|string(string)|false|City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|dom_range|query|string(string)|false|Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|include_non_vin_listings|query|boolean|false|To include non vin listings. Default is false|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|country|query|string|false|To filter listing on Country in which they are listed|
|plot|query|boolean|false|If plot has value true results in around 25k coordinates with limited fields to plot respective graph|
|nodedup|query|boolean|false|If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin|
|dedup|query|boolean|false|If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source|
|owned|query|boolean|false|Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|source|query|string|false|To filter listing on their source only for widget requests|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|trim_o|query|string|false|Filter listings on web scraped trim|
|trim_r|query|string|false|Filter trim on custom possible matches|
|dom_active_range|query|string(string)|false|Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dom_180_range|query|string(string)|false|Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|exclude_certified|query|boolean|false|Boolean param to exclude certified cars from search results|
|fuel_type|query|string|false|To filter listing on their fuel type|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|photo_links|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them|
|photo_links_cached|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_source_range|query|string(string)|false|First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_mc_range|query|string(string)|false|First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_source_days|query|string(string)|false|First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_mc_days|query|string(string)|false|First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12|
|include_relevant_links|query|boolean|false|To include_relevant_links. Default is true|
|inventory_count_range|query|string(string)|false|Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50|
|exclude_dealer_ids|query|string(string)|false|A list of dealer ids to exclude from result|
|exclude_sources|query|string(string)|false|A list of sources to exclude from result|
|exclude_dealer_listings|query|boolean|false|A list of fsbo listings to exclude from result|
|in_transit|query|string|false|A boolean to filter in transit vehicles|
|seating_capacity|query|string(string)|false|To filter on vehicle seating capacity|
|engine_size_range|query|string(string)|false|Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2|
|min_photo_links|query|string(string)|false|Filter listings based by number of photo links within given range|
|min_photo_links_cached|query|string(string)|false|Filter listings based by number of cached photo links within given range|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|new|
|car_type|used|
|car_type|certified|
|carfax_1_owner|true|
|carfax_1_owner|false|
|carfax_clean_title|true|
|carfax_clean_title|false|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|all|
|country|ALL|
|dealer_type|franchise|
|dealer_type|independent|
|in_transit|true|
|in_transit|false|

> Example responses

> 200 Response

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_r": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "vdp_url": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-active-private-party-car-listings-for-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all FSBO cars listings matching the search & filter criteria|[SearchResponse](#schemasearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Gets Recent car listings for the given search criteria

> Code samples

```bash
curl https://example.com/search/car/recents \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/car/recents`

This API produces a list of recently active (past 90 days) cars from the market for the given search criteria

<h3 id="gets-recent-car-listings-for-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|include_lease|query|boolean|false|Boolean param to search for listings that include leasing options in them|
|include_finance|query|boolean|false|Boolean param to search for listings that include finance options in them|
|lease_term|query|string|false|Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60|
|lease_down_payment|query|string|false|Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60|
|lease_emp|query|string|false|Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60|
|finance_loan_term|query|string|false|Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60|
|finance_loan_apr|query|string|false|Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60|
|finance_emp|query|string|false|Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60|
|finance_down_payment|query|string|false|Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60|
|finance_down_payment_per|query|string|false|Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60|
|car_type|query|string|false|Car type. Allowed values are - new / used / certified|
|carfax_1_owner|query|string|false|Indicates whether car has had only one owner or not|
|carfax_clean_title|query|string|false|Indicates whether car has clean ownership records|
|year_range|query|string(string)|false|Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|vin|query|string|false|To filter listing on their VIN|
|source|query|string|false|To filter listing on their source|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|vins|query|string|false|Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc|
|taxonomy_vins|query|string|false|Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.|
|ymmt|query|string|false|Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '\|' character in the form year\|make\|model\|trim. e.g. 2010\|Audi\|A5,2014\|Nissan\|Sentra\|S 6MT,\|Honda\|City\|   You could just provide strings of the form - 'year\|make\|\|' or 'year\|make\|model' or '\|make\|model\|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year\|make\|model\|trim combinations.|
|match|query|string|false|Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match|
|cylinders|query|string|false|To filter listing on their cylinders|
|transmission|query|string|false|To filter listing on their transmission|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_aspiration|query|string|false|Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|
|highway_mpg_range|query|string(string)|false|Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|city_mpg_range|query|string(string)|false|City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|dom_range|query|string(string)|false|Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_source_range|query|string(string)|false|First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_mc_range|query|string(string)|false|First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_source_days|query|string(string)|false|First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_mc_days|query|string(string)|false|First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|include_non_vin_listings|query|boolean|false|To include non vin listings. Default is false|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|country|query|string|false|To filter listing on Country in which they are listed|
|plot|query|boolean|false|If plot has value true results in around 25k coordinates with limited fields to plot respective graph|
|nodedup|query|boolean|false|If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin|
|dedup|query|boolean|false|If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source|
|owned|query|boolean|false|Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|dealer_name|query|string|false|Filter listings on dealer_name|
|dealership_group_name|query|string(string)|false|Name of the dealership group to search for|
|trim_o|query|string|false|Filter listings on web scraped trim|
|trim_r|query|string|false|Filter trim on custom possible matches|
|dom_active_range|query|string(string)|false|Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dom_180_range|query|string(string)|false|Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|exclude_certified|query|boolean|false|Boolean param to exclude certified cars from search results|
|fuel_type|query|string|false|To filter listing on their fuel type|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|photo_links|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them|
|photo_links_cached|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|sold|query|boolean|false|sold parameter to fetch only sold listings|
|include_relevant_links|query|boolean|false|To include_relevant_links. Default is true|
|expired|query|string|false|Boolean falg to either fetch only the expired listings or active ones|
|exclude_dealer_ids|query|string(string)|false|A list of dealer ids to exclude from result|
|exclude_sources|query|string(string)|false|A list of sources to exclude from result|
|in_transit|query|string|false|A boolean to filter in transit vehicles|
|seating_capacity|query|string(string)|false|To filter on vehicle seating capacity|
|active_inventory_date_range|query|string(string)|false|date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|engine_size_range|query|string(string)|false|Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2|
|price_change_range|query|string(string)|false|Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|new|
|car_type|used|
|car_type|certified|
|carfax_1_owner|true|
|carfax_1_owner|false|
|carfax_clean_title|true|
|carfax_clean_title|false|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|all|
|country|ALL|
|dealer_type|franchise|
|dealer_type|independent|
|expired|true|
|expired|false|
|in_transit|true|
|in_transit|false|

> Example responses

> 200 Response

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_r": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "vdp_url": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-recent-car-listings-for-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all cars listings matching the search & filter criteria|[SearchResponse](#schemasearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Gets active car listings in UK for the given search criteria

<a id="opIdsearch"></a>

> Code samples

```bash
curl https://example.com/search/car/uk/active \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/car/uk/active`

Search cars for sale in UK

<h3 id="gets-active-car-listings-in-uk-for-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|postal_code|query|string|false|To filter listing on postal code around which they are listed|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|car_type|query|string|false|Car type. Allowed values are - new / used|
|year|query|string|false|To filter listing on their year|
|year_range|query|string(string)|false|Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|variant|query|string|false|To filter listing on their variant|
|trim|query|string|false|To filter listing on their trim|
|vin|query|string|false|To filter listing on their VIN|
|body_type|query|string|false|To filter listing on their body type|
|ymmt|query|string|false|Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '\|' character in the form year\|make\|model\|trim. e.g. 2010\|Audi\|A5,2014\|Nissan\|Sentra\|S 6MT,\|Honda\|City\|   You could just provide strings of the form - 'year\|make\|\|' or 'year\|make\|model' or '\|make\|model\|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year\|make\|model\|trim combinations.|
|transmission|query|string|false|To filter listing on their transmission|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|country|query|string|false|To filter listing on Country in which they are listed|
|plot|query|boolean|false|If plot has value true results in around 25k coordinates with limited fields to plot respective graph|
|nodedup|query|boolean|false|If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin|
|dedup|query|boolean|false|If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source|
|county|query|string|false|To filter listing on county in which they are listed|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|fuel_type|query|string|false|To filter listing on their fuel type|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|dom_range|query|string(string)|false|Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dom_active_range|query|string(string)|false|Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dom_180_range|query|string(string)|false|Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_source_range|query|string(string)|false|First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_mc_range|query|string(string)|false|First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_source_days|query|string(string)|false|First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_mc_days|query|string(string)|false|First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12|
|co2_emissions|query|string|false|CO2 emissions|
|insurance_group|query|string|false|Insurance Group|
|vehicle_registration_mark|query|string|false|Vehicle Registration Mark|
|vehicle_registration_date_range|query|string(string)|false|Vehicle registration date range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|num_owners|query|string(string)|false|Number of owners. Range to be given in the format - min-max e.g. 1000-5000|
|inventory_count_range|query|string(string)|false|Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50|
|source|query|string|false|To filter listing on their source only for widget requests|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|exclude_sources|query|string(string)|false|A list of sources to exclude from result|
|exclude_dealer_ids|query|string(string)|false|A list of dealer ids to exclude from result|
|in_transit|query|string|false|A boolean to filter in transit vehicles|
|include_non_vin_listings|query|boolean|false|To include non vin listings. Default is false|
|cylinders|query|string|false|To filter listing on their cylinders|
|photo_links|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them|
|photo_links_cached|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|write_off_category|query|string(string)|false|write off category|
|exclude_write_off_category|query|string(string)|false|To exclude write off category|
|fca_status|query|string(string)|false|To filter on fca status|
|seating_capacity|query|string(string)|false|To filter on vehicle seating capacity|
|vrm|query|string(string)|false|To filter on vrm|
|powertrain_type|query|string(string)|false|To filter on powertrain_type|
|client_filters|query|boolean|false|Flag to add explicit filters set on client level in solr|
|boost|query|boolean|false|Flag to sort listings based on client filter score in solr|
|car_location_seller_name|query|string|false|Filter cars on seller name|
|car_location_street|query|string|false|Filter cars on street name|
|car_location_city|query|string|false|Filter cars on city|
|car_location_county|query|string|false|Filter cars on county|
|car_location_zip|query|string|false|To filter listing on car ZIP around which they are listed|
|car_location_latitude|query|number(double)|false|Latitude component of car location|
|car_location_longitude|query|number(double)|false|Longitude component of car location|
|price_change|query|string|false|Query to filter listings based on their positive and negative price change|
|price_change_range|query|string(string)|false|Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500|
|active_inventory_date_range|query|string(string)|false|date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_size_range|query|string(string)|false|Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2|
|uvc_id|query|string(string)|false|To filter on uvc id|
|highway_mpg_range|query|string(string)|false|Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|city_mpg_range|query|string(string)|false|City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|combined_mpg_range|query|string(string)|false|Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|owned|query|boolean|false|Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself|
|min_photo_links|query|string(string)|false|Filter listings based by number of photo links within given range|
|min_photo_links_cached|query|string(string)|false|Filter listings based by number of cached photo links within given range|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|new|
|car_type|used|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|
|country|uk|
|country|england|
|country|scotland|
|country|northan ireland|
|country|wales|
|in_transit|true|
|in_transit|false|
|client_filters|true|
|client_filters|false|
|boost|true|
|boost|false|
|price_change|positive|
|price_change|negative|

> Example responses

> 200 Response

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_county": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_street": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_zip": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "co2_emissions": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealership_group_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fca_status": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "in_transit": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "insurance_group": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "mas_code": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "num_owners": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "powertrain_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seating_capacity": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_registration_mark": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vrm": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "car_location": {
        "city": "string",
        "county": "string",
        "latitude": "string",
        "longitude": "string",
        "seller_name": "string",
        "street": "string",
        "zip": "string"
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "co2_emissions": "string",
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "insurance_group": "string",
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "num_owners": "string",
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "uvc_id": "string",
      "vdp_url": "string",
      "vehicle_registration_mark": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-active-car-listings-in-uk-for-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all cars listings matching the search & filter criteria|[UKSearchResponse](#schemauksearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Gets Recent UK car listings for the given search criteria

> Code samples

```bash
curl https://example.com/search/car/uk/recents \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/car/uk/recents`

This API produces a list of recently active (past 90 days) cars from the market for the given search criteria

<h3 id="gets-recent-uk-car-listings-for-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|include_lease|query|boolean|false|Boolean param to search for listings that include leasing options in them|
|include_finance|query|boolean|false|Boolean param to search for listings that include finance options in them|
|lease_term|query|string|false|Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60|
|lease_down_payment|query|string|false|Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60|
|lease_emp|query|string|false|Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60|
|finance_loan_term|query|string|false|Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60|
|finance_loan_apr|query|string|false|Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60|
|finance_emp|query|string|false|Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60|
|finance_down_payment|query|string|false|Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60|
|finance_down_payment_per|query|string|false|Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60|
|car_type|query|string|false|Car type. Allowed values are - new / used / certified|
|carfax_1_owner|query|string|false|Indicates whether car has had only one owner or not|
|carfax_clean_title|query|string|false|Indicates whether car has clean ownership records|
|year_range|query|string(string)|false|Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|vin|query|string|false|To filter listing on their VIN|
|source|query|string|false|To filter listing on their source|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|vins|query|string|false|Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc|
|taxonomy_vins|query|string|false|Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.|
|ymmt|query|string|false|Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '\|' character in the form year\|make\|model\|trim. e.g. 2010\|Audi\|A5,2014\|Nissan\|Sentra\|S 6MT,\|Honda\|City\|   You could just provide strings of the form - 'year\|make\|\|' or 'year\|make\|model' or '\|make\|model\|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year\|make\|model\|trim combinations.|
|match|query|string|false|Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match|
|cylinders|query|string|false|To filter listing on their cylinders|
|transmission|query|string|false|To filter listing on their transmission|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_aspiration|query|string|false|Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|
|highway_mpg_range|query|string(string)|false|Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|city_mpg_range|query|string(string)|false|City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|combined_mpg_range|query|string(string)|false|Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|dom_range|query|string(string)|false|Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_source_range|query|string(string)|false|First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_mc_range|query|string(string)|false|First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_source_days|query|string(string)|false|First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_mc_days|query|string(string)|false|First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|include_non_vin_listings|query|boolean|false|To include non vin listings. Default is false|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|country|query|string|false|To filter listing on Country in which they are listed|
|plot|query|boolean|false|If plot has value true results in around 25k coordinates with limited fields to plot respective graph|
|nodedup|query|boolean|false|If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin|
|dedup|query|boolean|false|If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source|
|owned|query|boolean|false|Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|dealer_name|query|string|false|Filter listings on dealer_name|
|dealership_group_name|query|string(string)|false|Name of the dealership group to search for|
|trim_o|query|string|false|Filter listings on web scraped trim|
|trim_r|query|string|false|Filter trim on custom possible matches|
|dom_active_range|query|string(string)|false|Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dom_180_range|query|string(string)|false|Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|exclude_certified|query|boolean|false|Boolean param to exclude certified cars from search results|
|fuel_type|query|string|false|To filter listing on their fuel type|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|photo_links|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them|
|photo_links_cached|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|sold|query|boolean|false|sold parameter to fetch only sold listings|
|include_relevant_links|query|boolean|false|To include_relevant_links. Default is true|
|expired|query|string|false|Boolean falg to either fetch only the expired listings or active ones|
|exclude_dealer_ids|query|string(string)|false|A list of dealer ids to exclude from result|
|exclude_sources|query|string(string)|false|A list of sources to exclude from result|
|in_transit|query|string|false|A boolean to filter in transit vehicles|
|seating_capacity|query|string(string)|false|To filter on vehicle seating capacity|
|insurance_group|query|string|false|Insurance Group|
|vrm|query|string(string)|false|To filter on vrm|
|num_owners|query|string(string)|false|Number of owners. Range to be given in the format - min-max e.g. 1000-5000|
|variant|query|string|false|To filter listing on their variant|
|postal_code|query|string|false|To filter listing on postal code around which they are listed|
|write_off_category|query|string(string)|false|write off category|
|fca_status|query|string(string)|false|To filter on fca status|
|active_inventory_date_range|query|string(string)|false|date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|engine_size_range|query|string(string)|false|Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2|
|price_change_range|query|string(string)|false|Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|new|
|car_type|used|
|car_type|certified|
|carfax_1_owner|true|
|carfax_1_owner|false|
|carfax_clean_title|true|
|carfax_clean_title|false|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|
|country|uk|
|country|england|
|country|scotland|
|country|northan ireland|
|country|wales|
|dealer_type|franchise|
|dealer_type|independent|
|expired|true|
|expired|false|
|in_transit|true|
|in_transit|false|

> Example responses

> 200 Response

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_county": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_street": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_zip": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "co2_emissions": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealership_group_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fca_status": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "in_transit": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "insurance_group": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "mas_code": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "num_owners": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "powertrain_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seating_capacity": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_registration_mark": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vrm": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "car_location": {
        "city": "string",
        "county": "string",
        "latitude": "string",
        "longitude": "string",
        "seller_name": "string",
        "street": "string",
        "zip": "string"
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "co2_emissions": "string",
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "insurance_group": "string",
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "num_owners": "string",
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "uvc_id": "string",
      "vdp_url": "string",
      "vehicle_registration_mark": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-recent-uk-car-listings-for-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all cars listings matching the search & filter criteria|[UKSearchResponse](#schemauksearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-recall-search">Recall Search</h1>

## Recall info by vin

<a id="opIdgetRecallHistory"></a>

> Code samples

```bash
curl https://example.com/car/recall/stringstri \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /car/recall/{vin}`

Get a particular recall information for a vin

<h3 id="recall-info-by-vin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vin|path|string(string)|true|The VIN to identify the car. Must be a valid 17 char VIN|
|page|query|number(number)|false|Page number to fetch the results for the given criteria. Default is 1.|

> Example responses

> 200 Response

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_r": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "vdp_url": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="recall-info-by-vin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reacll info for the given vin|[SearchResponse](#schemasearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-client-filters">client filters</h1>

## get client filters

<a id="opIdget"></a>

> Code samples

```bash
curl 'https://example.com/client/configure/get?country=US' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /client/configure/get`

get client filters

<h3 id="get-client-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|country|query|string|true|To filter listing on Country in which they are listed|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|US|
|country|CA|
|country|UK|

> Example responses

> 200 Response

```text
rule_type,field,value,factor
exclude,source,arnoldclark.com,
```

<h3 id="get-client-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully get client filters|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## set client filters

<a id="opIdset"></a>

> Code samples

```bash
curl 'https://example.com/client/configure/set?country=US' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'csvfile=@/path/to/file'
```

`POST /client/configure/set`

set client filters

> Body parameter

```yaml
csvfile: string
```

<h3 id="set-client-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|country|query|string|true|To filter listing on Country in which they are listed|
|body|body|object|true|none|
|» csvfile|body|string(binary)|true|csv file with filters|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|US|
|country|CA|
|country|UK|

<h3 id="set-client-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully set client filters|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-crm-cleanse-api">CRM Cleanse API</h1>

## CRM check of a particular vin

<a id="opIdcrmCheck"></a>

> Code samples

```bash
curl 'https://example.com/crm_check/car/stringstri?sale_date=stringst' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /crm_check/car/{vin}`

Check whether particular vin has had a listing after stipulated date or not

<h3 id="crm-check-of-a-particular-vin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vin|path|string(string)|true|The VIN to identify the car. Must be a valid 17 char VIN|
|sale_date|query|string(string)|true|sale date to check whether after this listing has appeared or not. Must be 8 character long, with YYYYMMDD format|

> Example responses

> 200 Response

```json
{
  "for_sale": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="crm-check-of-a-particular-vin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CRM check for given vin|[CRMResponse](#schemacrmresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-dealer-api">Dealer API</h1>

## Dealer by id

> Code samples

```bash
curl https://example.com/dealer/car/uk/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /dealer/car/uk/{id}`

Get a particular dealer's information by its id

<h3 id="dealer-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Dealer id to get all the dealer info attributes|
|provider|query|boolean|false|boolean param to include site providers name in response|

> Example responses

> 200 Response

```json
{
  "city": "string",
  "country": "string",
  "data_source": "string",
  "dealer_type": "string",
  "dealership_group_name": "string",
  "distance": 0,
  "id": "string",
  "inventory_url": "string",
  "latitude": "string",
  "listing_count": 0,
  "location_ll": "string",
  "longitude": "string",
  "seller_email": "string",
  "seller_name": "string",
  "seller_phone": "string",
  "state": "string",
  "status": "string",
  "street": "string",
  "zip": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="dealer-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dealer for the given id|[Dealer](#schemadealer)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Dealer by id

<a id="opIdgetDealer"></a>

> Code samples

```bash
curl https://example.com/dealer/car/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /dealer/car/{id}`

Get a particular dealer's information by its id

<h3 id="dealer-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Dealer id to get all the dealer info attributes|
|provider|query|boolean|false|boolean param to include site providers name in response|

> Example responses

> 200 Response

```json
{
  "city": "string",
  "country": "string",
  "data_source": "string",
  "dealer_type": "string",
  "dealership_group_name": "string",
  "distance": 0,
  "id": "string",
  "inventory_url": "string",
  "latitude": "string",
  "listing_count": 0,
  "location_ll": "string",
  "longitude": "string",
  "seller_email": "string",
  "seller_name": "string",
  "seller_phone": "string",
  "state": "string",
  "status": "string",
  "street": "string",
  "zip": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="dealer-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dealer for the given id|[Dealer](#schemadealer)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Dealer by id

> Code samples

```bash
curl https://example.com/dealer/heavy-equipment/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /dealer/heavy-equipment/{id}`

Get a particular dealer's information by its id

<h3 id="dealer-by-id-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Dealer id to get all the dealer info attributes|
|provider|query|boolean|false|boolean param to include site providers name in response|

> Example responses

> 200 Response

```json
{
  "city": "string",
  "country": "string",
  "data_source": "string",
  "dealer_type": "string",
  "dealership_group_name": "string",
  "distance": 0,
  "id": "string",
  "inventory_url": "string",
  "latitude": "string",
  "listing_count": 0,
  "location_ll": "string",
  "longitude": "string",
  "seller_email": "string",
  "seller_name": "string",
  "seller_phone": "string",
  "state": "string",
  "status": "string",
  "street": "string",
  "zip": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="dealer-by-id-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dealer for the given id|[Dealer](#schemadealer)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Dealer by id

> Code samples

```bash
curl https://example.com/dealer/motorcycle/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /dealer/motorcycle/{id}`

Get a particular dealer's information by its id

<h3 id="dealer-by-id-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Dealer id to get all the dealer info attributes|
|provider|query|boolean|false|boolean param to include site providers name in response|

> Example responses

> 200 Response

```json
{
  "city": "string",
  "country": "string",
  "data_source": "string",
  "dealer_type": "string",
  "dealership_group_name": "string",
  "distance": 0,
  "id": "string",
  "inventory_url": "string",
  "latitude": "string",
  "listing_count": 0,
  "location_ll": "string",
  "longitude": "string",
  "seller_email": "string",
  "seller_name": "string",
  "seller_phone": "string",
  "state": "string",
  "status": "string",
  "street": "string",
  "zip": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="dealer-by-id-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dealer for the given id|[Dealer](#schemadealer)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Dealer by id

> Code samples

```bash
curl https://example.com/dealer/rv/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /dealer/rv/{id}`

Get a particular dealer's information by its id

<h3 id="dealer-by-id-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Dealer id to get all the dealer info attributes|
|provider|query|boolean|false|boolean param to include site providers name in response|

> Example responses

> 200 Response

```json
{
  "city": "string",
  "country": "string",
  "data_source": "string",
  "dealer_type": "string",
  "dealership_group_name": "string",
  "distance": 0,
  "id": "string",
  "inventory_url": "string",
  "latitude": "string",
  "listing_count": 0,
  "location_ll": "string",
  "longitude": "string",
  "seller_email": "string",
  "seller_name": "string",
  "seller_phone": "string",
  "state": "string",
  "status": "string",
  "street": "string",
  "zip": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="dealer-by-id-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dealer for the given id|[Dealer](#schemadealer)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Find car dealers around

<a id="opIddealerSearch"></a>

> Code samples

```bash
curl https://example.com/dealers/car \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /dealers/car`

The dealers API returns a list of dealers around a given point and radius.

<h3 id="find-car-dealers-around-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|country|query|string|false|To filter listing on Country in which they are listed|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|city|query|string|false|To filter listing on City in which they are listed|
|state|query|string|false|To filter listing on State in which they are listed|
|listing_count_range|query|string(string)|false|To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100|
|inventory_url|query|string(string)|false|inventory_url of dealer to be searched|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|provider|query|boolean|false|boolean param to include site providers name in response|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|uk|
|country|england|
|country|scotland|
|country|northan ireland|
|country|wales|
|dealer_type|franchise|
|dealer_type|independent|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|

> Example responses

> 200 Response

```json
{
  "dealers": [
    {
      "city": "string",
      "country": "string",
      "data_source": "string",
      "dealer_type": "string",
      "dealership_group_name": "string",
      "distance": 0,
      "id": "string",
      "inventory_url": "string",
      "latitude": "string",
      "listing_count": 0,
      "location_ll": "string",
      "longitude": "string",
      "seller_email": "string",
      "seller_name": "string",
      "seller_phone": "string",
      "state": "string",
      "status": "string",
      "street": "string",
      "zip": "string"
    }
  ],
  "num_found": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="find-car-dealers-around-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of dealers for the search|[DealersResponse](#schemadealersresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Find car dealers around

> Code samples

```bash
curl https://example.com/dealers/car/uk \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /dealers/car/uk`

The dealers API returns a list of dealers around a given point and radius.

<h3 id="find-car-dealers-around-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|country|query|string|false|To filter listing on Country in which they are listed|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|city|query|string|false|To filter listing on City in which they are listed|
|county|query|string|false|To filter listing on county in which they are listed|
|listing_count_range|query|string(string)|false|To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100|
|inventory_url|query|string(string)|false|inventory_url of dealer to be searched|
|postal_code|query|string|false|To filter listing on postal code around which they are listed|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|provider|query|boolean|false|boolean param to include site providers name in response|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|uk|
|country|england|
|country|scotland|
|country|northan ireland|
|country|wales|
|dealer_type|franchise|
|dealer_type|independent|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|

> Example responses

> 200 Response

```json
{
  "dealers": [
    {
      "city": "string",
      "country": "string",
      "data_source": "string",
      "dealer_type": "string",
      "dealership_group_name": "string",
      "distance": 0,
      "id": "string",
      "inventory_url": "string",
      "latitude": "string",
      "listing_count": 0,
      "location_ll": "string",
      "longitude": "string",
      "seller_email": "string",
      "seller_name": "string",
      "seller_phone": "string",
      "state": "string",
      "status": "string",
      "street": "string",
      "zip": "string"
    }
  ],
  "num_found": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="find-car-dealers-around-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of dealers for the search|[DealersResponse](#schemadealersresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Find car dealers around

> Code samples

```bash
curl https://example.com/dealers/heavy-equipment \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /dealers/heavy-equipment`

The dealers API returns a list of dealers around a given point and radius.

<h3 id="find-car-dealers-around-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|country|query|string|false|To filter listing on Country in which they are listed|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|city|query|string|false|To filter listing on City in which they are listed|
|state|query|string|false|To filter listing on State in which they are listed|
|listing_count_range|query|string(string)|false|To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100|
|inventory_url|query|string(string)|false|inventory_url of dealer to be searched|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|provider|query|boolean|false|boolean param to include site providers name in response|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|uk|
|country|england|
|country|scotland|
|country|northan ireland|
|country|wales|
|dealer_type|franchise|
|dealer_type|independent|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|

> Example responses

> 200 Response

```json
{
  "dealers": [
    {
      "city": "string",
      "country": "string",
      "data_source": "string",
      "dealer_type": "string",
      "dealership_group_name": "string",
      "distance": 0,
      "id": "string",
      "inventory_url": "string",
      "latitude": "string",
      "listing_count": 0,
      "location_ll": "string",
      "longitude": "string",
      "seller_email": "string",
      "seller_name": "string",
      "seller_phone": "string",
      "state": "string",
      "status": "string",
      "street": "string",
      "zip": "string"
    }
  ],
  "num_found": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="find-car-dealers-around-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of dealers for the search|[DealersResponse](#schemadealersresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Find car dealers around

> Code samples

```bash
curl https://example.com/dealers/motorcycle \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /dealers/motorcycle`

The dealers API returns a list of dealers around a given point and radius.

<h3 id="find-car-dealers-around-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|country|query|string|false|To filter listing on Country in which they are listed|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|city|query|string|false|To filter listing on City in which they are listed|
|state|query|string|false|To filter listing on State in which they are listed|
|listing_count_range|query|string(string)|false|To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100|
|inventory_url|query|string(string)|false|inventory_url of dealer to be searched|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|provider|query|boolean|false|boolean param to include site providers name in response|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|uk|
|country|england|
|country|scotland|
|country|northan ireland|
|country|wales|
|dealer_type|franchise|
|dealer_type|independent|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|

> Example responses

> 200 Response

```json
{
  "dealers": [
    {
      "city": "string",
      "country": "string",
      "data_source": "string",
      "dealer_type": "string",
      "dealership_group_name": "string",
      "distance": 0,
      "id": "string",
      "inventory_url": "string",
      "latitude": "string",
      "listing_count": 0,
      "location_ll": "string",
      "longitude": "string",
      "seller_email": "string",
      "seller_name": "string",
      "seller_phone": "string",
      "state": "string",
      "status": "string",
      "street": "string",
      "zip": "string"
    }
  ],
  "num_found": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="find-car-dealers-around-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of dealers for the search|[DealersResponse](#schemadealersresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Find car dealers around

> Code samples

```bash
curl https://example.com/dealers/rv \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /dealers/rv`

The dealers API returns a list of dealers around a given point and radius.

<h3 id="find-car-dealers-around-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|country|query|string|false|To filter listing on Country in which they are listed|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|city|query|string|false|To filter listing on City in which they are listed|
|state|query|string|false|To filter listing on State in which they are listed|
|listing_count_range|query|string(string)|false|To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100|
|inventory_url|query|string(string)|false|inventory_url of dealer to be searched|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|provider|query|boolean|false|boolean param to include site providers name in response|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|uk|
|country|england|
|country|scotland|
|country|northan ireland|
|country|wales|
|dealer_type|franchise|
|dealer_type|independent|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|

> Example responses

> 200 Response

```json
{
  "dealers": [
    {
      "city": "string",
      "country": "string",
      "data_source": "string",
      "dealer_type": "string",
      "dealership_group_name": "string",
      "distance": 0,
      "id": "string",
      "inventory_url": "string",
      "latitude": "string",
      "listing_count": 0,
      "location_ll": "string",
      "longitude": "string",
      "seller_email": "string",
      "seller_name": "string",
      "seller_phone": "string",
      "state": "string",
      "status": "string",
      "street": "string",
      "zip": "string"
    }
  ],
  "num_found": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="find-car-dealers-around-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of dealers for the search|[DealersResponse](#schemadealersresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-vin-decoder-api">VIN Decoder API</h1>

## EPI VIN Decoder

<a id="opIddecodeViaEPI"></a>

> Code samples

```bash
curl https://example.com/decode/car/epi/stringstri/specs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /decode/car/epi/{vin}/specs`

Get the basic information on specifications for a car identified by a valid VIN from EPI's decoder

<h3 id="epi-vin-decoder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vin|path|string(string)|true|The VIN to identify the car. Must be a valid 17 char VIN|

> Example responses

> 200 Response

```json
{
  "antibrake_sys": "string",
  "body_subtype": "string",
  "body_type": "string",
  "city_miles": "string",
  "city_mpg": 0,
  "cylinders": 0,
  "doors": 0,
  "drivetrain": "string",
  "engine": "string",
  "engine_aspiration": "string",
  "engine_block": "string",
  "engine_measure": "string",
  "engine_size": 0,
  "fuel_type": "string",
  "highway_miles": "string",
  "highway_mpg": 0,
  "made_in": "string",
  "make": "string",
  "model": "string",
  "opt_seating": "string",
  "overall_height": "string",
  "overall_length": "string",
  "overall_width": "string",
  "powertrain_type": "string",
  "short_trim": "string",
  "std_seating": "string",
  "steering_type": "string",
  "tank_size": "string",
  "transmission": "string",
  "trim": "string",
  "trim_r": "string",
  "vehicle_type": "string",
  "year": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="epi-vin-decoder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Basic sepcifications details about the car|[Build](#schemabuild)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## NeoVIN Decoder

<a id="opIddecodeViaNeoVIN"></a>

> Code samples

```bash
curl https://example.com/decode/car/neovin/stringstri/specs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /decode/car/neovin/{vin}/specs`

Get the basic information on specifications for a car identified by a valid VIN from NeoVIN decoder

<h3 id="neovin-decoder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vin|path|string(string)|true|The VIN to identify the car. Must be a valid 17 char VIN|
|include_generic|query|boolean|false|Boolean variable to indicate wheather to include generic data as well in response|
|force_decode|query|boolean|false|Decode VIN on the fly instead of cached response|

> Example responses

> 200 Response

```json
{
  "available_options_details": {},
  "body_subtype": "string",
  "body_type": "string",
  "city_mpg": 0,
  "combined_msrp": 0,
  "created_at": 0,
  "created_at_date": "string",
  "decode_version": 0,
  "delivery_charges": 0,
  "doors": 0,
  "drivetrain": "string",
  "engine": "string",
  "exterior_color": {},
  "features": {},
  "fuel_type": "string",
  "height": 0,
  "highway_mpg": 0,
  "installed_equipment": {},
  "installed_options_details": {},
  "installed_options_msrp": 0,
  "interior_color": {},
  "length": 0,
  "listing_confidence": "string",
  "make": "string",
  "manufacturer_code": "string",
  "model": "string",
  "msrp": 0,
  "options_packages": "string",
  "package_code": "string",
  "package_description": "string",
  "seating_capacity": 0,
  "squish_vin": "string",
  "transmission": "string",
  "transmission_confidence": "string",
  "transmission_description": "string",
  "trim": "string",
  "trim_confidence": "string",
  "updated_at": 0,
  "updated_at_date": "string",
  "version": "string",
  "version_confidence": "string",
  "vin": "string",
  "weight": 0,
  "width": 0,
  "year": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="neovin-decoder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Basic sepcifications details about the car|[NeoVIN](#schemaneovin)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## VIN Decoder

<a id="opIddecode"></a>

> Code samples

```bash
curl https://example.com/decode/car/stringstringstrin/specs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /decode/car/{vin}/specs`

Get the basic information on specifications for a car identified by a valid VIN

<h3 id="vin-decoder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vin|path|string(string)|true|The VIN to identify the car. Must be a valid 17 char VIN|

> Example responses

> 200 Response

```json
{
  "antibrake_sys": "string",
  "body_subtype": "string",
  "body_type": "string",
  "city_miles": "string",
  "city_mpg": 0,
  "cylinders": 0,
  "doors": 0,
  "drivetrain": "string",
  "engine": "string",
  "engine_aspiration": "string",
  "engine_block": "string",
  "engine_measure": "string",
  "engine_size": 0,
  "fuel_type": "string",
  "highway_miles": "string",
  "highway_mpg": 0,
  "made_in": "string",
  "make": "string",
  "model": "string",
  "opt_seating": "string",
  "overall_height": "string",
  "overall_length": "string",
  "overall_width": "string",
  "powertrain_type": "string",
  "short_trim": "string",
  "std_seating": "string",
  "steering_type": "string",
  "tank_size": "string",
  "transmission": "string",
  "trim": "string",
  "trim_r": "string",
  "vehicle_type": "string",
  "year": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="vin-decoder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Basic sepcifications details about the car|[Build](#schemabuild)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## API for auto-completion of inputs based on taxonomy

> Code samples

```bash
curl 'https://example.com/specs/car/auto-complete?field=make&input=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /specs/car/auto-complete`

Auto-complete the inputs of your end users, not from active set but from taxonomy (decoder database)

<h3 id="api-for-auto-completion-of-inputs-based-on-taxonomy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|field|query|string(string)|true|Field name for which you want auto-completion|
|input|query|string(string)|true|Input entered so far|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|transmission|query|string|false|To filter listing on their transmission|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|fuel_type|query|string|false|To filter listing on their fuel type|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|
|ignore_case|query|boolean|false|Boolean variable to indicate ignore case of current input|
|facet_min_count|query|number(number)|false|Provide minimum count value for facets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|make|
|field|model|
|field|trim|
|field|body_type|
|field|body_subtype|
|field|vehicle_type|
|field|transmission|
|field|drivetrain|
|field|fuel_type|
|field|engine|
|field|engine_size|
|field|engine_block|

> Example responses

> 200 Response

```json
{
  "terms": [
    "string"
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="api-for-auto-completion-of-inputs-based-on-taxonomy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unique terms available in given field for auto completion|[SpecsAutoCompleteResponse](#schemaspecsautocompleteresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## API for getting terms from taxonomy

<a id="opIdgetTaxonomyTerms"></a>

> Code samples

```bash
curl 'https://example.com/specs/car/terms?field=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /specs/car/terms`

Facets on taxonomy

<h3 id="api-for-getting-terms-from-taxonomy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|field|query|string(string)|true|Comma separated list of fields to get terms for|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|transmission|query|string|false|To filter listing on their transmission|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|fuel_type|query|string|false|To filter listing on their fuel type|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|

> Example responses

> 200 Response

```json
{
  "terms": [
    "string"
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="api-for-getting-terms-from-taxonomy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of unique terms for specified fields|[SpecsAutoCompleteResponse](#schemaspecsautocompleteresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-cars-history-api">Cars History API</h1>

## Get a cars online listing history

> Code samples

```bash
curl https://example.com/history/car/uk/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /history/car/uk/{vrm}`

The history API returns online listing history for a car identified by its VRM. History listings are sorted in the descending order of the listing date / last seen date

<h3 id="get-a-cars-online-listing-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vrm|path|string(string)|true|The VRM to identify the car.|
|page|query|number(number)|false|Page number to fetch the results for the given criteria. Default is 1.|
|include_duplicates|query|boolean|false|Flag to indicate whether to include duplicate historical records as well in the response|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|

> Example responses

> 200 Response

```json
[
  {
    "carfax_1_owner": true,
    "carfax_clean_title": true,
    "city": "string",
    "data_source": "string",
    "dealer_id": 0,
    "dom": 0,
    "dom_180": 0,
    "dom_active": 0,
    "exterior_color": "string",
    "financing_options": [
      {
        "down_payment": 0,
        "down_payment_percentage": 0,
        "estimated_monthly_payment": 0,
        "loan_apr": 0,
        "loan_term": 0
      }
    ],
    "first_seen_at": 0,
    "first_seen_at_date": "string",
    "heading": "string",
    "id": "string",
    "interior_color": "string",
    "inventory_type": "string",
    "is_certified": 0,
    "is_searchable": "string",
    "last_seen_at": 0,
    "last_seen_at_date": "string",
    "latitude": "string",
    "leasing_options": [
      {
        "down_payment": 0,
        "estimated_monthly_payment": 0,
        "lease_term": 0
      }
    ],
    "longitude": "string",
    "miles": 0,
    "msrp": 0,
    "price": 0,
    "ref_miles": "string",
    "ref_miles_dt": 0,
    "ref_price": "string",
    "ref_price_dt": 0,
    "scraped_at": 0,
    "scraped_at_date": "string",
    "seller_name": "string",
    "seller_name_o": "string",
    "seller_type": "string",
    "source": "string",
    "state": "string",
    "status_date": 0,
    "stock_no": "string",
    "street": "string",
    "trim_r": "string",
    "vdp_url": "string",
    "vin": "string",
    "zip": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-cars-online-listing-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Online listing history for the given vrm|Inline|
|default|Default|Error|[Error](#schemaerror)|

<h3 id="get-a-cars-online-listing-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HistoricalListing](#schemahistoricallisting)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Get a cars online listing history

<a id="opIdgetCarHistory"></a>

> Code samples

```bash
curl https://example.com/history/car/stringstri \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /history/car/{vin}`

The history API returns online listing history for a car identified by its VIN. History listings are sorted in the descending order of the listing date / last seen date

<h3 id="get-a-cars-online-listing-history-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vin|path|string(string)|true|The VIN to identify the car. Must be a valid 17 char VIN|
|fields|query|string(string)|false|List of fields to fetch, in case the default fields list in the response is to be trimmed down|
|page|query|number(number)|false|Page number to fetch the results for the given criteria. Default is 1.|
|include_duplicates|query|boolean|false|Flag to indicate whether to include duplicate historical records as well in the response|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|

> Example responses

> 200 Response

```json
[
  {
    "carfax_1_owner": true,
    "carfax_clean_title": true,
    "city": "string",
    "data_source": "string",
    "dealer_id": 0,
    "dom": 0,
    "dom_180": 0,
    "dom_active": 0,
    "exterior_color": "string",
    "financing_options": [
      {
        "down_payment": 0,
        "down_payment_percentage": 0,
        "estimated_monthly_payment": 0,
        "loan_apr": 0,
        "loan_term": 0
      }
    ],
    "first_seen_at": 0,
    "first_seen_at_date": "string",
    "heading": "string",
    "id": "string",
    "interior_color": "string",
    "inventory_type": "string",
    "is_certified": 0,
    "is_searchable": "string",
    "last_seen_at": 0,
    "last_seen_at_date": "string",
    "latitude": "string",
    "leasing_options": [
      {
        "down_payment": 0,
        "estimated_monthly_payment": 0,
        "lease_term": 0
      }
    ],
    "longitude": "string",
    "miles": 0,
    "msrp": 0,
    "price": 0,
    "ref_miles": "string",
    "ref_miles_dt": 0,
    "ref_price": "string",
    "ref_price_dt": 0,
    "scraped_at": 0,
    "scraped_at_date": "string",
    "seller_name": "string",
    "seller_name_o": "string",
    "seller_type": "string",
    "source": "string",
    "state": "string",
    "status_date": 0,
    "stock_no": "string",
    "street": "string",
    "trim_r": "string",
    "vdp_url": "string",
    "vin": "string",
    "zip": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-cars-online-listing-history-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Online listing history for the given vin|Inline|
|default|Default|Error|[Error](#schemaerror)|

<h3 id="get-a-cars-online-listing-history-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HistoricalListing](#schemahistoricallisting)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-car-cached-image">Car Cached Image</h1>

## Fetch cached image

<a id="opIdgetCachedImage"></a>

> Code samples

```bash
curl https://example.com/image/cache/car/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /image/cache/car/{listingID}/{imageID}`

Fetch the cached car image

<h3 id="fetch-cached-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|listingID|path|string|true|ID of the listing to fetch cached images for|
|imageID|path|string|true|ID of the image to fetch|

> Example responses

> 200 Response

```json
"string"
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="fetch-cached-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cached image of the car|[CacheImageResponse](#schemacacheimageresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-heavy-equipment-search">Heavy Equipment Search</h1>

## Heavy equipment listing by id

> Code samples

```bash
curl https://example.com/listing/heavy-equipment/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/heavy-equipment/{id}`

Get a particular Heavy equipment listing by its id

<h3 id="heavy-equipment-listing-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "build": {
    "area": "string",
    "class": "string",
    "engine": "string",
    "fuel_type": "string",
    "gvwr": "string",
    "length": "string",
    "made_in": "string",
    "make": "string",
    "model": "string",
    "sleeps": "string",
    "slideouts": "string",
    "transmission": "string",
    "year": 0
  },
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dp_url": "string",
  "exterior_color": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vin": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="heavy-equipment-listing-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Heavy equipment listing for the given id|[HeavyEquipmentsListing](#schemaheavyequipmentslisting)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Long text Heavy equipment Listings attributes for Listing with the given id

> Code samples

```bash
curl https://example.com/listing/heavy-equipment/string/extra \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/heavy-equipment/{id}/extra`

Get Heavy equipment listing options, features, seller comments

<h3 id="long-text-heavy-equipment-listings-attributes-for-listing-with-the-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "dealer_added_f": [
    "string"
  ],
  "electronics_f": [
    "string"
  ],
  "exterior_f": [
    "string"
  ],
  "features": [
    "string"
  ],
  "id": "string",
  "interior_f": [
    "string"
  ],
  "options": [
    "string"
  ],
  "safety_f": [
    "string"
  ],
  "seller_cmts": "string",
  "standard_f": [
    "string"
  ],
  "technical_f": [
    "string"
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="long-text-heavy-equipment-listings-attributes-for-listing-with-the-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Heavy equipment ListingAttributes for the given listing id|[ListingExtraAttributes](#schemalistingextraattributes)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing media by id

> Code samples

```bash
curl https://example.com/listing/heavy-equipment/string/media \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/heavy-equipment/{id}/media`

Get listing media (photo, photos) by id

<h3 id="listing-media-by-id-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "photo_links": [
    "string"
  ],
  "photo_url": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-media-by-id-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listing Media for the given listing id|[ListingMedia](#schemalistingmedia)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Gets active heavy equipment listings for the given search criteria

> Code samples

```bash
curl https://example.com/search/heavy-equipment/active \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/heavy-equipment/active`

This endpoint provides search on heavy equipment inventory. This API produces a list of currently active heavy equipments from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
 The search API facilitates the following use cases - 
1. Search heavy equipments around a given geo-point within a given radius 
2. Search heavy equipments for a specific year / make / model or combination of these 
3. Search heavy equipments matching multiple year, make, model combinatins in the same search request
4. Filter results by most heavy equipment specification attributes
5. Filter heavy equipments within a given price / miles range
6. Specify a sort order for the results on price / miles / listed date 
7. Search heavy equipments for a given City / State combination 
8. Get Facets to build the search drill downs 
9. Get Market averages for price/miles for your search

<h3 id="gets-active-heavy-equipment-listings-for-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|search_text|query|string|false|To search a substring across entire document|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|vin|query|string|false|To filter listing on their VIN|
|inventory_type|query|string|false|To filter listing on their condition. Either used or new|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|source|query|string|false|To filter listing on their source|
|dealer_name|query|string|false|Filter listings on dealer_name|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|fuel_type|query|string|false|To filter listing on their fuel type|
|transmission|query|string|false|To filter listing on their transmission|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|body_type|query|string|false|To filter listing on their body type|
|category|query|string|false|To filter heavy equipments on their category|
|sub_category|query|string|false|To filter heavy equipments on their sub-category|
|hours_used_range|query|string(string)|false|Hours used range to filter heavy equipments with the their usage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|

#### Enumerated Values

|Parameter|Value|
|---|---|
|inventory_type|used|
|inventory_type|new|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|

> Example responses

> 200 Response

```json
{
  "facets": {},
  "listings": [
    {
      "build": {
        "body_type": "string",
        "category": "string",
        "condition": "string",
        "drivetrain": "string",
        "engine": "string",
        "fuel_type": "string",
        "make": "string",
        "model": "string",
        "sub_category": "string",
        "transmission": "string",
        "trim": "string",
        "year": 0
      },
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dp_url": "string",
      "exterior_color": "string",
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "interior_color": "string",
      "inventory_type": "string",
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "msrp": 0,
      "price": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {},
  "stats": {}
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-active-heavy-equipment-listings-for-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all heavy equipment listings matching the search & filter criteria|[HeavyEquipmentsSearchResponse](#schemaheavyequipmentssearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## API for auto-completion of inputs

> Code samples

```bash
curl 'https://example.com/search/heavy-equipment/auto-complete?field=make&input=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/heavy-equipment/auto-complete`

Auto-complete the inputs of your end users

<h3 id="api-for-auto-completion-of-inputs-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|field|query|string(string)|true|Field name for which you want auto-completion|
|input|query|string(string)|true|Input entered so far|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|body_type|query|string|false|To filter listing on their body type|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|transmission|query|string|false|To filter listing on their transmission|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|fuel_type|query|string|false|To filter listing on their fuel type|
|color|query|string|false|Color of the vehicle|
|engine|query|string|false|To filter listing on their engine|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|inventory_type|query|string|false|To filter listing on their condition. Either used or new|
|ignore_case|query|boolean|false|Boolean variable to indicate ignore case of current input|
|term_counts|query|boolean|false|Boolean variable to indicate wheather to include term counts as well in response|
|sort_by|query|string|false|Sort the response, either by index or count(default)|
|seller_type|query|string|false|seller type for autocomplete|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|facet_min_count|query|number(number)|false|Provide minimum count value for facets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|make|
|field|model|
|field|trim|
|field|body_type|
|field|transmission|
|field|drivetrain|
|field|fuel_type|
|field|exterior_color|
|field|interior_color|
|field|engine|
|field|category|
|field|sub_category|
|field|state|
|field|city|
|inventory_type|used|
|inventory_type|new|
|sort_by|index|
|sort_by|count|

> Example responses

> 200 Response

```json
{
  "terms": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="api-for-auto-completion-of-inputs-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unique terms available in given field for auto completion|[SearchAutoCompleteResponse](#schemasearchautocompleteresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-motorcycle-search">Motorcycle Search</h1>

## Motorcycle listing by id

> Code samples

```bash
curl https://example.com/listing/motorcycle/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/motorcycle/{id}`

Get a particular Motorcycle listing by its id

<h3 id="motorcycle-listing-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "build": {
    "body_type": "string",
    "cylinders": 0,
    "drivetrain": "string",
    "dry_weight": "string",
    "engine": "string",
    "fuel_type": "string",
    "made_in": "string",
    "make": "string",
    "model": "string",
    "transmission": "string",
    "trim": "string",
    "vehicle_type": "string",
    "year": 0
  },
  "color": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dp_url": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vin": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="motorcycle-listing-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Motorcycle listing for the given id|[MotorcycleListing](#schemamotorcyclelisting)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Long text Motorcycle Listings attributes for Listing with the given id

> Code samples

```bash
curl https://example.com/listing/motorcycle/string/extra \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/motorcycle/{id}/extra`

Get Motorcycle listing options, features, seller comments

<h3 id="long-text-motorcycle-listings-attributes-for-listing-with-the-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "dealer_added_f": [
    "string"
  ],
  "electronics_f": [
    "string"
  ],
  "exterior_f": [
    "string"
  ],
  "features": [
    "string"
  ],
  "id": "string",
  "interior_f": [
    "string"
  ],
  "options": [
    "string"
  ],
  "safety_f": [
    "string"
  ],
  "seller_cmts": "string",
  "standard_f": [
    "string"
  ],
  "technical_f": [
    "string"
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="long-text-motorcycle-listings-attributes-for-listing-with-the-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Motorcycle ListingAttributes for the given listing id|[ListingExtraAttributes](#schemalistingextraattributes)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Motorcycle listing media by id

> Code samples

```bash
curl https://example.com/listing/motorcycle/string/media \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/motorcycle/{id}/media`

Get Motorcycle listing media (photo, photos) by id

<h3 id="motorcycle-listing-media-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "photo_links": [
    "string"
  ],
  "photo_url": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="motorcycle-listing-media-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Motorcycle listing media for the given listing id|[ListingMedia](#schemalistingmedia)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Gets active motorcycle listings for the given search criteria

> Code samples

```bash
curl https://example.com/search/motorcycle/active \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/motorcycle/active`

This endpoint provides search on motorcycle inventory. This API produces a list of currently active motorcycles from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
 The search API facilitates the following use cases - 
1. Search motorcycles around a given geo-point within a given radius 
2. Search motorcycles for a specific year / make / model or combination of these 
3. Search motorcycles matching multiple year, make, model combinatins in the same search request
4. Filter results by most motorcycle specification attributes
5. Search for similar motorcycles by VIN or Taxonomy VIN 
6. Filter motorcycles within a given price / miles range
7. Specify a sort order for the results on price / miles / listed date 
8. Search motorcycles for a given City / State combination 
9. Get Facets to build the search drill downs 
10. Get Market averages for price/miles for your search

<h3 id="gets-active-motorcycle-listings-for-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|search_text|query|string|false|To search a substring across entire document|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|vin|query|string|false|To filter listing on their VIN|
|taxonomy_vin|query|string|false|Taxonomy VIN of the motorcycle|
|inventory_type|query|string|false|To filter listing on their condition. Either used or new|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|source|query|string|false|To filter listing on their source|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|color|query|string|false|Color of the vehicle|
|body_type|query|string|false|To filter listing on their body type|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|cylinders|query|string|false|To filter listing on their cylinders|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|engine|query|string|false|To filter listing on their engine|
|fuel_type|query|string|false|To filter listing on their fuel type|
|transmission|query|string|false|To filter listing on their transmission|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|

#### Enumerated Values

|Parameter|Value|
|---|---|
|inventory_type|used|
|inventory_type|new|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|

> Example responses

> 200 Response

```json
{
  "facets": {},
  "listings": [
    {
      "build": {
        "body_type": "string",
        "cylinders": 0,
        "drivetrain": "string",
        "dry_weight": "string",
        "engine": "string",
        "fuel_type": "string",
        "made_in": "string",
        "make": "string",
        "model": "string",
        "transmission": "string",
        "trim": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "color": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dp_url": "string",
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "inventory_type": "string",
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "msrp": 0,
      "price": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {},
  "stats": {}
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-active-motorcycle-listings-for-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all motorcycles listings matching the search & filter criteria|[MotorcycleSearchResponse](#schemamotorcyclesearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## API for auto-completion of inputs

> Code samples

```bash
curl 'https://example.com/search/motorcycle/auto-complete?field=make&input=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/motorcycle/auto-complete`

Auto-complete the inputs of your end users

<h3 id="api-for-auto-completion-of-inputs-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|field|query|string(string)|true|Field name for which you want auto-completion|
|input|query|string(string)|true|Input entered so far|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|body_type|query|string|false|To filter listing on their body type|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|transmission|query|string|false|To filter listing on their transmission|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|fuel_type|query|string|false|To filter listing on their fuel type|
|color|query|string|false|Color of the vehicle|
|engine|query|string|false|To filter listing on their engine|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|inventory_type|query|string|false|To filter listing on their condition. Either used or new|
|ignore_case|query|boolean|false|Boolean variable to indicate ignore case of current input|
|term_counts|query|boolean|false|Boolean variable to indicate wheather to include term counts as well in response|
|sort_by|query|string|false|Sort the response, either by index or count(default)|
|seller_type|query|string|false|seller type for autocomplete|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|facet_min_count|query|number(number)|false|Provide minimum count value for facets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|make|
|field|model|
|field|trim|
|field|body_type|
|field|vehicle_type|
|field|transmission|
|field|drivetrain|
|field|fuel_type|
|field|color|
|field|engine|
|field|state|
|field|city|
|inventory_type|used|
|inventory_type|new|
|sort_by|index|
|sort_by|count|

> Example responses

> 200 Response

```json
{
  "terms": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="api-for-auto-completion-of-inputs-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unique terms available in given field for auto completion|[SearchAutoCompleteResponse](#schemasearchautocompleteresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-rv-search">RV Search</h1>

## RV listing by id

> Code samples

```bash
curl https://example.com/listing/rv/uk/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/rv/uk/{id}`

Get a particular RV listing by its id

<h3 id="rv-listing-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "build": {
    "area": "string",
    "class": "string",
    "engine": "string",
    "fuel_type": "string",
    "gvwr": "string",
    "length": "string",
    "made_in": "string",
    "make": "string",
    "model": "string",
    "sleeps": "string",
    "slideouts": "string",
    "transmission": "string",
    "year": 0
  },
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dp_url": "string",
  "exterior_color": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vin": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="rv-listing-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|RV listing for the given id|[RVListing](#schemarvlisting)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Long text RV Listings attributes for Listing with the given id

> Code samples

```bash
curl https://example.com/listing/rv/uk/string/extra \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/rv/uk/{id}/extra`

Get RV listing options, features, seller comments

<h3 id="long-text-rv-listings-attributes-for-listing-with-the-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "dealer_added_f": [
    "string"
  ],
  "electronics_f": [
    "string"
  ],
  "exterior_f": [
    "string"
  ],
  "features": [
    "string"
  ],
  "id": "string",
  "interior_f": [
    "string"
  ],
  "options": [
    "string"
  ],
  "safety_f": [
    "string"
  ],
  "seller_cmts": "string",
  "standard_f": [
    "string"
  ],
  "technical_f": [
    "string"
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="long-text-rv-listings-attributes-for-listing-with-the-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|RV ListingAttributes for the given listing id|[ListingExtraAttributes](#schemalistingextraattributes)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing media by id

> Code samples

```bash
curl https://example.com/listing/rv/uk/string/media \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/rv/uk/{id}/media`

Get listing media (photo, photos) by id

<h3 id="listing-media-by-id-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "photo_links": [
    "string"
  ],
  "photo_url": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-media-by-id-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listing Media for the given listing id|[ListingMedia](#schemalistingmedia)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## RV listing by id

> Code samples

```bash
curl https://example.com/listing/rv/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/rv/{id}`

Get a particular RV listing by its id

<h3 id="rv-listing-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "build": {
    "area": "string",
    "class": "string",
    "engine": "string",
    "fuel_type": "string",
    "gvwr": "string",
    "length": "string",
    "made_in": "string",
    "make": "string",
    "model": "string",
    "sleeps": "string",
    "slideouts": "string",
    "transmission": "string",
    "year": 0
  },
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dp_url": "string",
  "exterior_color": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vin": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="rv-listing-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|RV listing for the given id|[RVListing](#schemarvlisting)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Long text RV Listings attributes for Listing with the given id

> Code samples

```bash
curl https://example.com/listing/rv/string/extra \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/rv/{id}/extra`

Get RV listing options, features, seller comments

<h3 id="long-text-rv-listings-attributes-for-listing-with-the-given-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "dealer_added_f": [
    "string"
  ],
  "electronics_f": [
    "string"
  ],
  "exterior_f": [
    "string"
  ],
  "features": [
    "string"
  ],
  "id": "string",
  "interior_f": [
    "string"
  ],
  "options": [
    "string"
  ],
  "safety_f": [
    "string"
  ],
  "seller_cmts": "string",
  "standard_f": [
    "string"
  ],
  "technical_f": [
    "string"
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="long-text-rv-listings-attributes-for-listing-with-the-given-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|RV ListingAttributes for the given listing id|[ListingExtraAttributes](#schemalistingextraattributes)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Listing media by id

> Code samples

```bash
curl https://example.com/listing/rv/string/media \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /listing/rv/{id}/media`

Get listing media (photo, photos) by id

<h3 id="listing-media-by-id-6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|id|path|string(string)|true|Listing id to get all the listing attributes|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "photo_links": [
    "string"
  ],
  "photo_url": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="listing-media-by-id-6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listing Media for the given listing id|[ListingMedia](#schemalistingmedia)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Gets active RV listings for the given search criteria

> Code samples

```bash
curl https://example.com/search/rv/active \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/rv/active`

This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
 The search API facilitates the following use cases - 
1. Search RV around a given geo-point within a given radius 
2. Search RV for a specific year / make / model or combination of these 
3. Search RV matching multiple year, make, model combinatins in the same search request
4. Filter results by most RV specification attributes
5. Filter RV within a given price / miles range
6. Specify a sort order for the results on price / miles / listed date 
7. Search RV for a given City / State combination 
8. Get Facets to build the search drill downs 
9. Get Market averages for price/miles for your search

<h3 id="gets-active-rv-listings-for-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|year_range|query|string(string)|false|Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021|
|search_text|query|string|false|To search a substring across entire document|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|model_o|query|string|false|To filter listings on their model orig (as described on the webpage)|
|vin|query|string|false|To filter listing on their VIN|
|inventory_type|query|string|false|To filter listing on their condition. Either used or new|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|source|query|string|false|To filter listing on their source|
|dealer_name|query|string|false|Filter listings on dealer_name|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|fuel_type|query|string|false|To filter listing on their fuel type|
|transmission|query|string|false|To filter listing on their transmission|
|class|query|string|false|Filter RV listings on class|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|slideouts|query|string|false|Filter RV listings on slideouts|
|length_range|query|string(string)|false|length range to filter listings with the length in the range given. Range to be given in the format - min-max e.g. 50-200|
|length|query|string|false|Filter RV listings on length|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|seating_capacity|query|string(string)|false|To filter on vehicle seating capacity|
|fresh_water_capacity|query|string|false|To filter on fresh water capacity of vehicle|
|sleeps|query|string(string)|false|To filter data based on sleeps|
|cylinders|query|string|false|To filter listing on their cylinders|
|number_of_awnings|query|string(string)|false|To filter on number_of_awnings|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|gvwr|query|string|false|To filter on the maximum total weight of your vehicle|

#### Enumerated Values

|Parameter|Value|
|---|---|
|inventory_type|used|
|inventory_type|new|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|

> Example responses

> 200 Response

```json
{
  "facets": {},
  "listings": [
    {
      "build": {
        "area": "string",
        "class": "string",
        "engine": "string",
        "fuel_type": "string",
        "gvwr": "string",
        "length": "string",
        "made_in": "string",
        "make": "string",
        "model": "string",
        "sleeps": "string",
        "slideouts": "string",
        "transmission": "string",
        "year": 0
      },
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dp_url": "string",
      "exterior_color": "string",
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "interior_color": "string",
      "inventory_type": "string",
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "msrp": 0,
      "price": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {},
  "stats": {}
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-active-rv-listings-for-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all RV listings matching the search & filter criteria|[RVSearchResponse](#schemarvsearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## API for auto-completion of inputs

> Code samples

```bash
curl 'https://example.com/search/rv/auto-complete?field=make&input=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/rv/auto-complete`

Auto-complete the inputs of your end users

<h3 id="api-for-auto-completion-of-inputs-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|field|query|string(string)|true|Field name for which you want auto-completion|
|input|query|string(string)|true|Input entered so far|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|body_type|query|string|false|To filter listing on their body type|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|transmission|query|string|false|To filter listing on their transmission|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|fuel_type|query|string|false|To filter listing on their fuel type|
|color|query|string|false|Color of the vehicle|
|engine|query|string|false|To filter listing on their engine|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|inventory_type|query|string|false|To filter listing on their condition. Either used or new|
|ignore_case|query|boolean|false|Boolean variable to indicate ignore case of current input|
|term_counts|query|boolean|false|Boolean variable to indicate wheather to include term counts as well in response|
|sort_by|query|string|false|Sort the response, either by index or count(default)|
|seller_type|query|string|false|seller type for autocomplete|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|facet_min_count|query|number(number)|false|Provide minimum count value for facets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|make|
|field|model|
|field|trim|
|field|class|
|field|transmission|
|field|fuel_type|
|field|exterior_color|
|field|interior_color|
|field|engine|
|field|state|
|field|city|
|inventory_type|used|
|inventory_type|new|
|sort_by|index|
|sort_by|count|

> Example responses

> 200 Response

```json
{
  "terms": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="api-for-auto-completion-of-inputs-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unique terms available in given field for auto completion|[SearchAutoCompleteResponse](#schemasearchautocompleteresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Gets active RV listings for the given search criteria

> Code samples

```bash
curl https://example.com/search/rv/uk/active \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/rv/uk/active`

This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
 The search API facilitates the following use cases - 
1. Search RV around a given geo-point within a given radius 
2. Search RV for a specific year / make / model or combination of these 
3. Search RV matching multiple year, make, model combinatins in the same search request
4. Filter results by most RV specification attributes
5. Filter RV within a given price / miles range
6. Specify a sort order for the results on price / miles / listed date 
7. Search RV for a given City / State combination 
8. Get Facets to build the search drill downs 
9. Get Market averages for price/miles for your search

<h3 id="gets-active-rv-listings-for-the-given-search-criteria-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|year_range|query|string(string)|false|Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021|
|search_text|query|string|false|To search a substring across entire document|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|vin|query|string|false|To filter listing on their VIN|
|source|query|string|false|To filter listing on their source|
|dealer_name|query|string|false|Filter listings on dealer_name|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|fuel_type|query|string|false|To filter listing on their fuel type|
|category|query|string|false|Filter RV listings on category|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|county|query|string|false|To filter listing on county in which they are listed|
|postal_code|query|string|false|To filter listing on postal code around which they are listed|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|seating_capacity|query|string(string)|false|To filter on vehicle seating capacity|
|cylinders|query|string|false|To filter listing on their cylinders|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|mtplm|query|string|false|To filter rv on mtplm|
|sub_category|query|string|false|To filter rv on their sub-category|
|availability_status|query|string|false|To filter rv on their availability_status|
|berths|query|string|false|To filter rv on their berths|
|inventory_type|query|string|false|To filter listing on their condition. Either used or new|
|width_range|query|string(string)|false|width range to filter listings on width in the range given. Range to be given in the format - min-max e.g. 4-8|
|exterior_length_range|query|string(string)|false|width range to filter listings on exterior_length in the range given. Range to be given in the format - min-max e.g. 4-8|
|interior_length_range|query|string(string)|false|width range to filter listings on interior_length in the range given. Range to be given in the format - min-max e.g. 4-8|
|drive_type|query|string|false|To filter rv on their drive_type|
|steering|query|string|false|To filter rv on their steering|
|chassis|query|string|false|To filter rv on their chassis|
|transmission|query|string|false|To filter listing on their transmission|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|
|inventory_type|used|
|inventory_type|new|

> Example responses

> 200 Response

```json
{
  "facets": {},
  "listings": [
    {
      "availability_status": "string",
      "build": {
        "area": "string",
        "berths": "string",
        "category": "string",
        "chassis": "string",
        "drive_type": "string",
        "drivetrain": "string",
        "engine": "string",
        "engine_size": "string",
        "exterior_length": "string",
        "floorplan": "string",
        "floorplan_layout": "string",
        "fuel_type": "string",
        "gvwr": "string",
        "interior_length": "string",
        "inventory_type": "string",
        "make": "string",
        "model": "string",
        "mtplm": "string",
        "slideouts": "string",
        "steering": "string",
        "sub_category": "string",
        "transmission": "string",
        "width": "string",
        "year": 0
      },
      "currency_indicator": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "exterior_color": "string",
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "interior_color": "string",
      "inventory_type": "string",
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "miles_indicator": "string",
      "mot_expires": "string",
      "motorhome_build": "string",
      "msrp": 0,
      "origin": "string",
      "price": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "vdp_url": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {},
  "stats": {}
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-active-rv-listings-for-the-given-search-criteria-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all RV listings matching the search & filter criteria|[UKRVSearchResponse](#schemaukrvsearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-cars-market-api">Cars Market API</h1>

## Market Days Supply

<a id="opIdgetMDS"></a>

> Code samples

```bash
curl https://example.com/mds/car \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mds/car`

Get the basic information on specifications for a car identified by a valid VIN

<h3 id="market-days-supply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vin|query|string(string)|false|VIN to decode|
|exact|query|boolean|false|Exact parameter|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|debug|query|boolean|false|Debug parameter|
|include_sold|query|boolean|false|To fetch sold vins|
|country|query|string|false|To filter listing on Country in which they are listed|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|ymmt|query|string|false|Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '\|' character in the form year\|make\|model\|trim. e.g. 2010\|Audi\|A5,2014\|Nissan\|Sentra\|S 6MT,\|Honda\|City\|   You could just provide strings of the form - 'year\|make\|\|' or 'year\|make\|model' or '\|make\|model\|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year\|make\|model\|trim combinations.|
|car_type|query|string|false|Car type. Allowed values are - new / used / certified|
|lease_term|query|string|false|Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60|
|lease_down_payment|query|string|false|Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60|
|lease_emp|query|string|false|Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60|
|finance_loan_term|query|string|false|Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60|
|finance_loan_apr|query|string|false|Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60|
|finance_emp|query|string|false|Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60|
|finance_down_payment|query|string|false|Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60|
|finance_down_payment_per|query|string|false|Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60|
|carfax_1_owner|query|string|false|Indicates whether car has had only one owner or not|
|carfax_clean_title|query|string|false|Indicates whether car has clean ownership records|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|dealer_id|query|string(string)|false|Dealer id to filter the listings.|
|source|query|string|false|To filter listing on their source|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|cylinders|query|string|false|To filter listing on their cylinders|
|transmission|query|string|false|To filter listing on their transmission|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_aspiration|query|string|false|Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|
|highway_mpg_range|query|string(string)|false|Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|city_mpg_range|query|string(string)|false|City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|dom_range|query|string(string)|false|Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dealership_group_name|query|string(string)|false|Name of the dealership group to search for|
|dom_active_range|query|string(string)|false|Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dom_180_range|query|string(string)|false|Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|fuel_type|query|string|false|To filter listing on their fuel type|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|engine_size_range|query|string(string)|false|Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|US|
|country|CA|
|country|us|
|country|ca|
|car_type|new|
|car_type|used|
|car_type|certified|
|carfax_1_owner|true|
|carfax_1_owner|false|
|carfax_clean_title|true|
|carfax_clean_title|false|
|dealer_type|franchise|
|dealer_type|independent|

> Example responses

> 200 Response

```json
{
  "make": "string",
  "mds": 0,
  "model": "string",
  "sold_vins": [
    "string"
  ],
  "total_active_cars_for_ymmt": 0,
  "total_cars_sold_in_last_45_days": 0,
  "trim": "string",
  "year": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="market-days-supply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provides Market Days supply for year make model or trim combination|[Mds](#schemamds)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Get make model wise top 50 popular cars on national, state, city level

<a id="opIdgetPopularCars"></a>

> Code samples

```bash
curl 'https://example.com/popular/cars?car_type=new' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /popular/cars`

Get make model wise top 50 popular cars on national, state, city level

<h3 id="get-make-model-wise-top-50-popular-cars-on-national-state-city-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|state|query|string(string)|false|State level sales count|
|city_state|query|string(string)|false|City level sales count, pipe seperated like city_state=jacksonville\|FL|
|car_type|query|string(string)|true|Inventory type for which popular count is to be searched|
|country|query|string|false|Country for which the popular cars are to be searched|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|new|
|car_type|used|
|country|us|
|country|ca|
|country|US|
|country|CA|

> Example responses

> 200 Response

```json
{
  "new_top50": [
    {
      "city": "string",
      "counts": "string",
      "dom_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "inventoryType": "string",
      "make": "string",
      "miles_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "model": "string",
      "price_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "state": "string"
    }
  ],
  "used_top50": [
    {
      "city": "string",
      "counts": "string",
      "dom_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "inventoryType": "string",
      "make": "string",
      "miles_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "model": "string",
      "price_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "state": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-make-model-wise-top-50-popular-cars-on-national-state-city-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of most popular top 50 cars|[PopularCars](#schemapopularcars)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Predict car price based on it's specifications

<a id="opIdpredictCarPrice"></a>

> Code samples

```bash
curl 'https://example.com/predict/car/price?car_type=used' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /predict/car/price`

Predict car price based on it's specifications

<h3 id="predict-car-price-based-on-its-specifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vin|query|string|false|Predict price for a VIN|
|car_type|query|string|true|Car condition|
|year|query|integer|false|Car manufacturing year|
|make|query|string|false|Car's make|
|model|query|string|false|Car's model|
|trim|query|string|false|Car's trim|
|is_certified|query|boolean|false|Boolean to indicate car is certified or not|
|carfax_1_owner|query|boolean|false|Boolean to indicate car is carfax one owner or not|
|carfax_clean_title|query|boolean|false|Boolean to indicate car has clean title or not|
|base_exterior_color|query|string|false|Base exterior color of the car|
|base_interior_color|query|string|false|Base interior color of the car|
|transmission|query|string|false|Transmission on the car|
|drivetrain|query|string|false|Drivetrain on the car|
|engine_size|query|number|false|Engine Size of the car|
|engine_block|query|string|false|Engine Block of the car|
|cylinders|query|integer|false|Number of cylinders in the vehicle|
|doors|query|integer|false|Number of doors in the vehicle|
|highway_mpg|query|integer|false|Highway mileage|
|city_mpg|query|integer|false|City mileage of the car|
|latitude|query|number|false|Latitude component of the location|
|longitude|query|number|false|Longitude component of the location|
|miles|query|integer|false|miles vehicle has driven in total|
|zip|query|string|false|Location zip|
|country|query|string|false|Country for which car price will be predicted|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|used|
|car_type|new|
|transmission|Manual|
|transmission|Automatic|
|drivetrain|4WD|
|drivetrain|AWD|
|drivetrain|FWD|
|drivetrain|RWD|
|engine_block|I|
|engine_block|V|
|engine_block|H|
|country|us|
|country|ca|

> Example responses

> 200 Response

```json
{
  "predicted_price": 37998,
  "price_range": {
    "lower_bound": 32913,
    "upper_bound": 44358
  },
  "specs": {
    "base_exterior_color": "Black",
    "base_interior_color": "Brown",
    "carfax_1_owner": false,
    "carfax_clean_title": false,
    "city_mpg": 18,
    "cylinders": 6,
    "doors": 4,
    "drivetrain": "4WD",
    "engine_block": "V",
    "engine_size": 2.7,
    "highway_mpg": 23,
    "is_certified": false,
    "latitude": 44.71164,
    "longitude": -92.851607,
    "make": "ford",
    "miles": 28741,
    "model": "f-150",
    "transmission": "Automatic",
    "trim": "xlt",
    "year": 2018
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="predict-car-price-based-on-its-specifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Predicted price of the car along with it's specifications|[PricePrediction](#schemapriceprediction)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Predict fare value of car for UK based on YMMT &amp; miles

<a id="opIdfareValue"></a>

> Code samples

```bash
curl https://example.com/predict/car/uk/fmv \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /predict/car/uk/fmv`

Predict fare value of car for UK based on YMMT & miles

<h3 id="predict-fare-value-of-car-for-uk-based-on-ymmt-miles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vrm|query|string|false|Predict price for a VRM|
|year|query|integer|false|Car manufacturing year|
|make|query|string|false|Car's make|
|model|query|string|false|Car's model|
|variant|query|string|false|Car's variant|
|miles|query|integer|false|miles vehicle has driven in total|
|postal_code|query|string|false|Postal code of the car|
|radius|query|integer|false|Radius around postal code|

> Example responses

> 200 Response

```json
{
  "avg_days_to_sold_local": 32,
  "avg_days_to_sold_national": 42,
  "fmv_local": 13854,
  "fmv_national": 13915
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="predict-fare-value-of-car-for-uk-based-on-ymmt-miles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Predict fare value of car for UK based on YMMT & miles|[FareValue](#schemafarevalue)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Predict car price for UK based on it's specifications

<a id="opIdpredictUkCarPrice"></a>

> Code samples

```bash
curl https://example.com/predict/car/uk/price \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /predict/car/uk/price`

Predict car price for UK based on it's specifications

<h3 id="predict-car-price-for-uk-based-on-its-specifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|vrm|query|string|false|Predict price for a VRM|
|year|query|integer|false|Car manufacturing year|
|make|query|string|false|Car's make|
|model|query|string|false|Car's model|
|trim|query|string|false|Car's trim|
|base_exterior_color|query|string|false|Base exterior color of the car|
|transmission|query|string|false|Transmission on the car|
|drivetrain|query|string|false|Drivetrain on the car|
|engine_size|query|number(double)|false|Engine Size of the car|
|cylinders|query|integer|false|Number of cylinders in the vehicle|
|doors|query|integer|false|Number of doors in the vehicle|
|fuel_type|query|string|false|Fuel type of the car|
|highway_mpg|query|number(double)|false|Highway mileage|
|city_mpg|query|number(double)|false|City mileage of the car|
|combined_mpg|query|number(double)|false|Combiined mileage of the car|
|latitude|query|number|false|Latitude component of the location|
|longitude|query|number|false|Longitude component of the location|
|miles|query|integer|false|miles vehicle has driven in total|
|zip|query|string|false|Location zip|

#### Enumerated Values

|Parameter|Value|
|---|---|
|transmission|Manual|
|transmission|Automatic|

> Example responses

> 200 Response

```json
{
  "predicted_price": 37998,
  "price_range": {
    "lower_bound": 32913,
    "upper_bound": 44358
  },
  "specs": {
    "base_exterior_color": "Black",
    "base_interior_color": "Brown",
    "carfax_1_owner": false,
    "carfax_clean_title": false,
    "city_mpg": 18,
    "cylinders": 6,
    "doors": 4,
    "drivetrain": "4WD",
    "engine_block": "V",
    "engine_size": 2.7,
    "highway_mpg": 23,
    "is_certified": false,
    "latitude": 44.71164,
    "longitude": -92.851607,
    "make": "ford",
    "miles": 28741,
    "model": "f-150",
    "transmission": "Automatic",
    "trim": "xlt",
    "year": 2018
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="predict-car-price-for-uk-based-on-its-specifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Predicted price of the car along with it's specifications|[PricePrediction](#schemapriceprediction)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Get sales count by make, model, year, trim or taxonomy vin

<a id="opIdgetSalesCount"></a>

> Code samples

```bash
curl https://example.com/sales/car \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sales/car`

Get a sales count for city, state or national level by make, model, year, trim or taxonomy vin

<h3 id="get-sales-count-by-make-model-year-trim-or-taxonomy-vin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|car_type|query|string(string)|false|Inventory type for which sales count is to be searched, default is used|
|make|query|string(string)|false|Make for which sales count is to be searched|
|mm|query|string(string)|false|Make-Model for which sales count is to be searched, pipe seperated like mm=ford\|f-150|
|ymm|query|string(string)|false|Year-Make-Model for which sales count is to be searched, pipe seperated like ymm=2015\|ford\|f-150|
|ymmt|query|string(string)|false|Year-Make-Model-Trim for which sales count is to be searched, pipe seperated like ymmt=2015\|ford\|f-150\|platinum|
|taxonomy_vin|query|string(string)|false|taxonomy_vin for which sales count is to be searched|
|state|query|string(string)|false|State level sales count|
|city_state|query|string(string)|false|City level sales count, pipe seperated like city_state=jacksonville\|FL|
|vin|query|string(string)|false|VIN that will be transformed to taxonomy_vin|
|country|query|string|false|Country for which the sales records are to be searched|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|new|
|car_type|used|
|country|us|
|country|ca|
|country|US|
|country|CA|

> Example responses

> 200 Response

```json
{
  "city": "string",
  "counts": 0,
  "cpo": 0,
  "dom_stats": {
    "absolute_mean_deviation": 0,
    "iqr": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0,
    "weighted_mean": 0
  },
  "inventory_type": "string",
  "make": "string",
  "miles_stats": {
    "absolute_mean_deviation": 0,
    "iqr": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0,
    "weighted_mean": 0
  },
  "model": "string",
  "non-cpo": 0,
  "price_stats": {
    "absolute_mean_deviation": 0,
    "iqr": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0,
    "weighted_mean": 0
  },
  "state": "string",
  "taxonomy_vin": "string",
  "trim": "string",
  "year": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-sales-count-by-make-model-year-trim-or-taxonomy-vin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sales count for given parameters|[Sales](#schemasales)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Price, Miles and Days on Market stats

<a id="opIdgetDailyStats"></a>

> Code samples

```bash
curl https://example.com/stats/car \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/car`

National, state and city level stats for price, miles and dom

<h3 id="price-miles-and-days-on-market-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|country|query|string(string)|false|Country for which the stats are to be searched|
|car_type|query|string(string)|false|Inventory type for which stats are to be searched, default is used|
|ymm|query|string(string)|false|Year, Make, Model of the car, Separated by pipe e.g. ymm=2015\|ford\|f-150|
|ymmt|query|string(string)|false|Year, Make, Model, Trim of the car, Separated by pipe e.g. ymmt=2015\|ford\|f-150\|platinum|
|taxonomy_vin|query|string(string)|false|Taxonomy vin for referance to find stats of similar cars|
|vin|query|string(string)|false|VIN that will be transformed to taxonomy_vin|
|state|query|string(string)|false|State level stats|
|city_state|query|string(string)|false|City level stats, pipe seperated like city_state=jacksonville\|FL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|us|
|country|ca|
|car_type|new|
|car_type|used|

> Example responses

> 200 Response

```json
{
  "dom": {
    "interquartile_range": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0
  },
  "miles_stats": {
    "interquartile_range": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0
  },
  "price_stats": {
    "interquartile_range": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0
  },
  "units_for_sale": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="price-miles-and-days-on-market-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data with Market averages and stats|[DailyStats](#schemadailystats)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-rank-car-listings">Rank Car Listings</h1>

## Compute relative rank for car listings.

<a id="opIdsearchAndRankCar"></a>

> Code samples

```bash
curl https://example.com/search/car/active/rank \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "listing_ids": [
      "string"
    ],
    "ranking_criteria": {}
  }'
```

`POST /search/car/active/rank`

Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.

> Body parameter

```json
{
  "listing_ids": [
    "string"
  ],
  "ranking_criteria": {}
}
```

<h3 id="compute-relative-rank-for-car-listings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|include_lease|query|boolean|false|Boolean param to search for listings that include leasing options in them|
|include_finance|query|boolean|false|Boolean param to search for listings that include finance options in them|
|lease_term|query|string|false|Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60|
|lease_down_payment|query|string|false|Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60|
|lease_emp|query|string|false|Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60|
|finance_loan_term|query|string|false|Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60|
|finance_loan_apr|query|string|false|Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60|
|finance_emp|query|string|false|Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60|
|finance_down_payment|query|string|false|Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60|
|finance_down_payment_per|query|string|false|Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60|
|car_type|query|string|false|Car type. Allowed values are - new / used / certified|
|carfax_1_owner|query|string|false|Indicates whether car has had only one owner or not|
|carfax_clean_title|query|string|false|Indicates whether car has clean ownership records|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|vin|query|string|false|To filter listing on their VIN|
|body_type|query|string|false|To filter listing on their body type|
|body_subtype|query|string(string)|false|Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated|
|vehicle_type|query|string|false|To filter listing on their vehicle type|
|vins|query|string|false|Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc|
|taxonomy_vins|query|string|false|Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.|
|ymmt|query|string|false|Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '\|' character in the form year\|make\|model\|trim. e.g. 2010\|Audi\|A5,2014\|Nissan\|Sentra\|S 6MT,\|Honda\|City\|   You could just provide strings of the form - 'year\|make\|\|' or 'year\|make\|model' or '\|make\|model\|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year\|make\|model\|trim combinations.|
|match|query|string|false|Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match|
|cylinders|query|string|false|To filter listing on their cylinders|
|transmission|query|string|false|To filter listing on their transmission|
|doors|query|string(string)|false|Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated|
|drivetrain|query|string|false|To filter listing on their drivetrain|
|exterior_color|query|string|false|Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated|
|interior_color|query|string|false|Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated|
|base_exterior_color|query|string|false|Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated|
|base_interior_color|query|string|false|Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated|
|engine|query|string|false|To filter listing on their engine|
|engine_size|query|string|false|Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated|
|engine_aspiration|query|string|false|Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated|
|engine_block|query|string|false|Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated|
|highway_mpg_range|query|string(string)|false|Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|city_mpg_range|query|string(string)|false|City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|miles_range|query|string(string)|false|Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000|
|price_range|query|string(string)|false|Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|msrp_range|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|dom_range|query|string(string)|false|Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|include_non_vin_listings|query|boolean|false|To include non vin listings. Default is false|
|msa_code|query|string|false|To filter listing on msa code in which they are listed|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|
|country|query|string|false|To filter listing on Country in which they are listed|
|plot|query|boolean|false|If plot has value true results in around 25k coordinates with limited fields to plot respective graph|
|nodedup|query|boolean|false|If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin|
|dedup|query|boolean|false|If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source|
|owned|query|boolean|false|Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself|
|state|query|string|false|To filter listing on State in which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|trim_o|query|string|false|Filter listings on web scraped trim|
|trim_r|query|string|false|Filter trim on custom possible matches|
|dom_active_range|query|string(string)|false|Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|dom_180_range|query|string(string)|false|Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50|
|exclude_certified|query|boolean|false|Boolean param to exclude certified cars from search results|
|fuel_type|query|string|false|To filter listing on their fuel type|
|dealer_type|query|string|false|Filter based on dealer type independant or franchise|
|photo_links|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them|
|photo_links_cached|query|boolean|false|A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them|
|stock_no|query|string|false|To filter listing on their stock number on lot|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_source_range|query|string(string)|false|First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_at_mc_range|query|string(string)|false|First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|last_seen_days|query|string(string)|false|Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_days|query|string(string)|false|First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_source_days|query|string(string)|false|First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12|
|first_seen_at_mc_days|query|string(string)|false|First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12|
|inventory_type|query|string|false|To filter listing on their condition. Either used or new|
|page|query|number(number)|false|Page number to fetch the results for the given criteria. Default is 1.|
|body|body|[CarRankRequest](#schemacarrankrequest)|true|Inputs needed for ranking a group of car listings|
|» listing_ids|body|[string]|false|none|
|» ranking_criteria|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|car_type|new|
|car_type|used|
|car_type|certified|
|carfax_1_owner|true|
|carfax_1_owner|false|
|carfax_clean_title|true|
|carfax_clean_title|false|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|
|country|US|
|country|CA|
|country|us|
|country|ca|
|country|all|
|country|ALL|
|dealer_type|franchise|
|dealer_type|independent|
|inventory_type|used|
|inventory_type|new|

> Example responses

> 200 Response

```json
{
  "num_ranked": 0,
  "ranked_listings": [
    {
      "ranked_listing": {}
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="compute-relative-rank-for-car-listings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rank listings based on inputs provided.|[CarRankResponse](#schemacarrankresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

## Compute relative rank for car listings.

<a id="opIdrankCar"></a>

> Code samples

```bash
curl https://example.com/search/car/active/rank/listings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "listing_ids": [
      "string"
    ],
    "ranking_criteria": {}
  }'
```

`POST /search/car/active/rank/listings`

Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.

> Body parameter

```json
{
  "listing_ids": [
    "string"
  ],
  "ranking_criteria": {}
}
```

<h3 id="compute-relative-rank-for-car-listings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|append_api_key|query|boolean|false|Flag on whether to include api_key in response API urls (if any)|
|body|body|[CarRankRequest](#schemacarrankrequest)|true|Inputs needed for ranking a group of car listings|
|» listing_ids|body|[string]|false|none|
|» ranking_criteria|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "num_ranked": 0,
  "ranked_listings": [
    {
      "ranked_listing": {}
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="compute-relative-rank-for-car-listings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rank listings based on inputs provided.|[CarRankResponse](#schemacarrankresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

<h1 id="marketcheck-apis-oem-incentive-search">OEM Incentive Search</h1>

## Gets oem incentive listings for the given search criteria

<a id="opIdoemSearch"></a>

> Code samples

```bash
curl https://example.com/search/car/incentive/oem \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /search/car/incentive/oem`

This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active oem incentive from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
 The search API facilitates the following use cases - 
1. Search Cars around a given geo-point within a given radius 
2. Search cars for a specific year / make / model or combination of these 
3. Search cars matching multiple year, make, model combinatins in the same search request
4. Filter results by most car specification attributes
5. Search for similar cars by VIN or Taxonomy VIN 
6. Filter cars within a given price / miles / days on market (dom) range
7. Specify a sort order for the results on price / miles / dom / listed date 
8. Search cars for a given City / State combination 
9. Get Facets to build the search drill downs 
10. Get Market averages for price/miles/dom for your search

<h3 id="gets-oem-incentive-listings-for-the-given-search-criteria-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|The API Authentication Key. Mandatory with all API calls.|
|offer_type|query|string|false|The type of the incentive|
|year|query|string|false|To filter listing on their year|
|make|query|string|false|To filter listings on their make|
|model|query|string|false|To filter listings on their model|
|trim|query|string|false|To filter listing on their trim|
|msrp|query|string(string)|false|MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|apr|query|string(string)|false|APR range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000|
|monthly|query|string|false|To filter listing on Monthly payment amount, usually populated in Lease offers|
|monthly_per_thousand|query|string|false|To filter listing on monthly amount to be paid by customer for every $1000 financed at the advertised APR rate|
|down_payment|query|string|false|To filter listing on down payment offer on car|
|due_at_signing|query|string|false|To filter listing on total amount due at signing, that usually includes first month payment, down payment, acquisition fee etc|
|security_deposit|query|string|false|To filter listing on security deposit required for the offer|
|disposition_fee|query|string|false|To filter listing on disposition fee of the car|
|acquisition_fee|query|string|false|To filter listing on acquisition fee of the car|
|duration|query|string|false|To filter listing on offer duration in months|
|dealer_contribution|query|string|false|To filter listing on any contribution from dealer's side|
|mileage_charge|query|string(string)|false|Mileage Charge Range range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 100-1000|
|mileage_charge_limit|query|string|false|To filter listing on mileage charge limit the offer is valid up to under the default clauses|
|cashback_amount|query|string|false|To filter listing on cashback amounts listed in offer|
|cashback_target_group|query|string|false|To filter listing on the demographic or any other entity for whom this cashback offer is for. Not all target groups are identified but the most common ones are tagged like Military, Grad students Current owners etc|
|lease_end_purchase_option|query|string|false|To filter listing on amount at the lease end to pay for buying the car|
|net_capitalised_cost|query|string|false|To filter listing on net capitalised cost of the car|
|gross_capitalised_cost|query|string|false|To filter listing on gross capitalised cost of the car|
|total_monthly_payment|query|string|false|To filter listing on gross capitalised cost of the car|
|zip|query|string|false|To filter listing on ZIP around which they are listed|
|city|query|string|false|To filter listing on City in which they are listed|
|state|query|string|false|To filter listing on State in which they are listed|
|country|query|string|false|To filter listing on Country in which they are listed|
|latitude|query|number(double)|false|Latitude component of location|
|longitude|query|number(double)|false|Longitude component of location|
|radius|query|integer(int32)|false|Radius around the search location (Unit - Miles)|
|search_text|query|string|false|To search a substring across entire document|
|last_seen_range|query|string(string)|false|Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|first_seen_range|query|string(string)|false|First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623|
|sort_by|query|string(string)|false|Sort by field. Default sort field is distance from the given point|
|sort_order|query|string(string)|false|Sort order - asc or desc. Default sort order is asc|
|rows|query|integer(int32)|false|Number of results to return. Default is 10. Max is 50|
|start|query|integer(int32)|false|Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows|
|facets|query|string|false|The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.|
|range_facets|query|string|false|The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.|
|facet_sort|query|string|false|Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param|
|stats|query|string|false|The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|offer_type|lease|
|offer_type|finance|
|offer_type|cash|
|country|US|
|country|CA|
|country|us|
|country|ca|
|sort_order|asc|
|sort_order|desc|
|sort_order|ASC|
|sort_order|DESC|
|facet_sort|count|
|facet_sort|index|

> Example responses

> 200 Response

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_r": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "vdp_url": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="gets-oem-incentive-listings-for-the-given-search-criteria-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all oem incentive listings matching the search & filter criteria|[SearchResponse](#schemasearchresponse)|
|default|Default|Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authorizeEndpoint
</aside>

# Schemas

<h2 id="tocS_Averages">Averages</h2>
<!-- backwards compatibility -->
<a id="schemaaverages"></a>
<a id="schema_Averages"></a>
<a id="tocSaverages"></a>
<a id="tocsaverages"></a>

```json
{
  "age": 0,
  "dom": 0,
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "units": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|age|number|false|none|Average age of the car|
|dom|number|false|none|Average Days on Market value for the car based on all listings found in the Marketcheck database for this car|
|miles|number|false|none|Mean miles value for the car|
|msrp|number|false|none|Mean msrp value for the car|
|price|number|false|none|Mean price value for the car|
|units|number|false|none|No of units for this car on the market|

<h2 id="tocS_BaseListing">BaseListing</h2>
<!-- backwards compatibility -->
<a id="schemabaselisting"></a>
<a id="schema_BaseListing"></a>
<a id="tocSbaselisting"></a>
<a id="tocsbaselisting"></a>

```json
{
  "base_ext_color": "string",
  "base_int_color": "string",
  "build": {
    "antibrake_sys": "string",
    "body_subtype": "string",
    "body_type": "string",
    "city_miles": "string",
    "city_mpg": 0,
    "cylinders": 0,
    "doors": 0,
    "drivetrain": "string",
    "engine": "string",
    "engine_aspiration": "string",
    "engine_block": "string",
    "engine_measure": "string",
    "engine_size": 0,
    "fuel_type": "string",
    "highway_miles": "string",
    "highway_mpg": 0,
    "made_in": "string",
    "make": "string",
    "model": "string",
    "opt_seating": "string",
    "overall_height": "string",
    "overall_length": "string",
    "overall_width": "string",
    "powertrain_type": "string",
    "short_trim": "string",
    "std_seating": "string",
    "steering_type": "string",
    "tank_size": "string",
    "transmission": "string",
    "trim": "string",
    "trim_r": "string",
    "vehicle_type": "string",
    "year": 0
  },
  "carfax_1_owner": true,
  "carfax_clean_title": true,
  "data_source": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dist": 0,
  "dom": 0,
  "dom_180": 0,
  "dom_active": 0,
  "exterior_color": "string",
  "financing_options": [
    {
      "down_payment": 0,
      "down_payment_percentage": 0,
      "estimated_monthly_payment": 0,
      "loan_apr": 0,
      "loan_term": 0
    }
  ],
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "in_transit": true,
  "interior_color": "string",
  "inventory_type": "string",
  "is_certified": 0,
  "is_translated": true,
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "leasing_options": [
    {
      "down_payment": 0,
      "estimated_monthly_payment": 0,
      "lease_term": 0
    }
  ],
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "model_code": "string",
  "msrp": 0,
  "price": 0,
  "price_change_percent": 0,
  "ref_miles": "string",
  "ref_miles_dt": 0,
  "ref_price": "string",
  "ref_price_dt": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "title_type": "string",
  "vdp_url": "string",
  "vin": "string"
}
```

Minimal set of attributes describing a listing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_ext_color|string|false|none|Base exterior color of the car|
|base_int_color|string|false|none|Base interior color of the car|
|build|[Build](#schemabuild)|false|none|Describes the Car specification|
|carfax_1_owner|boolean|false|none|Flag to indicate whether listing is carfax_1_owner|
|carfax_clean_title|boolean|false|none|Flag to indicate whether listing is carfax_clean_title|
|data_source|string|false|none|Data source of the listing|
|dealer|[NestDealer](#schemanestdealer)|false|none|none|
|dist|number(double)|false|none|Distance of the car's location from the specified user lcoation|
|dom|integer|false|none|Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car|
|dom_180|integer|false|none|Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car|
|dom_active|integer|false|none|Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car|
|exterior_color|string|false|none|Exterior color of the car|
|financing_options|[[ListingFinance](#schemalistingfinance)]|false|none|Array of all finance offers for this listing|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|in_transit|boolean|false|none|in_transit of the listing|
|interior_color|string|false|none|Interior color of the car|
|inventory_type|string|false|none|Inventory type of car|
|is_certified|integer|false|none|Certified car|
|is_translated|boolean|false|none|is_translated of the listing|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|leasing_options|[[ListingLease](#schemalistinglease)]|false|none|Array of all finance offers for this listing|
|media|[ListingNestMedia](#schemalistingnestmedia)|false|none|none|
|miles|integer|false|none|Odometer reading / reported miles usage for the car|
|model_code|string|false|none|model_code of the listing|
|msrp|integer|false|none|MSRP for the car|
|price|integer|false|none|Asking price for the car|
|price_change_percent|number(double)|false|none|Percentage difference between the cars's current price and ref_price i.e. last reported price|
|ref_miles|string|false|none|Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date|
|ref_miles_dt|integer|false|none|The date at which the last miles was reported online. This is earlier to last_seen_date|
|ref_price|string|false|none|Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date|
|ref_price_dt|integer|false|none|The date at which the last price was reported online. This is earlier to last_seen_date|
|scraped_at|number(integer)|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_type|string|false|none|Seller type for the car|
|source|string|false|none|Source domain of the listing|
|stock_no|string|false|none|Stock number of car in dealers inventory|
|title_type|string|false|none|title_type of the listing|
|vdp_url|string|false|none|Vehicle Details Page url of the specific car|
|vin|string|false|none|VIN for the car|

<h2 id="tocS_BasePopular">BasePopular</h2>
<!-- backwards compatibility -->
<a id="schemabasepopular"></a>
<a id="schema_BasePopular"></a>
<a id="tocSbasepopular"></a>
<a id="tocsbasepopular"></a>

```json
{
  "city": "string",
  "counts": "string",
  "dom_stats": {
    "absolute_mean_deviation": 0,
    "iqr": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0,
    "weighted_mean": 0
  },
  "inventoryType": "string",
  "make": "string",
  "miles_stats": {
    "absolute_mean_deviation": 0,
    "iqr": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0,
    "weighted_mean": 0
  },
  "model": "string",
  "price_stats": {
    "absolute_mean_deviation": 0,
    "iqr": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0,
    "weighted_mean": 0
  },
  "state": "string"
}
```

Single popular car in array

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City|
|counts|string|false|none|Number of sold listings of this model|
|dom_stats|[SalesStats](#schemasalesstats)|false|none|Sales stats response|
|inventoryType|string|false|none|Inventory type|
|make|string|false|none|Make name|
|miles_stats|[SalesStats](#schemasalesstats)|false|none|Sales stats response|
|model|string|false|none|Model name|
|price_stats|[SalesStats](#schemasalesstats)|false|none|Sales stats response|
|state|string|false|none|State|

<h2 id="tocS_Build">Build</h2>
<!-- backwards compatibility -->
<a id="schemabuild"></a>
<a id="schema_Build"></a>
<a id="tocSbuild"></a>
<a id="tocsbuild"></a>

```json
{
  "antibrake_sys": "string",
  "body_subtype": "string",
  "body_type": "string",
  "city_miles": "string",
  "city_mpg": 0,
  "cylinders": 0,
  "doors": 0,
  "drivetrain": "string",
  "engine": "string",
  "engine_aspiration": "string",
  "engine_block": "string",
  "engine_measure": "string",
  "engine_size": 0,
  "fuel_type": "string",
  "highway_miles": "string",
  "highway_mpg": 0,
  "made_in": "string",
  "make": "string",
  "model": "string",
  "opt_seating": "string",
  "overall_height": "string",
  "overall_length": "string",
  "overall_width": "string",
  "powertrain_type": "string",
  "short_trim": "string",
  "std_seating": "string",
  "steering_type": "string",
  "tank_size": "string",
  "transmission": "string",
  "trim": "string",
  "trim_r": "string",
  "vehicle_type": "string",
  "year": 0
}
```

Describes the Car specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antibrake_sys|string|false|none|Antibrake system of the car|
|body_subtype|string|false|none|Body subtype of the car|
|body_type|string|false|none|Body type of the car|
|city_miles|string|false|none|City miles of the car|
|city_mpg|integer|false|none|City Mileage in MPG|
|cylinders|integer|false|none|No of cylinders of the car|
|doors|integer|false|none|No of doors of the car|
|drivetrain|string|false|none|Drivetrain of the car|
|engine|string|false|none|Engine of the car|
|engine_aspiration|string|false|none|Engine aspiration of the car|
|engine_block|string|false|none|Engine block of the car|
|engine_measure|string|false|none|Engine block of the car|
|engine_size|number(double)|false|none|Engine size of the car|
|fuel_type|string|false|none|Fuel type of the car|
|highway_miles|string|false|none|Highway miles of the car|
|highway_mpg|integer|false|none|Highway Mileage in MPG|
|made_in|string|false|none|Made in of the car|
|make|string|false|none|Car Make|
|model|string|false|none|Car model|
|opt_seating|string|false|none|opt seating of the car|
|overall_height|string|false|none|Overall height of the car|
|overall_length|string|false|none|Overall length of the car|
|overall_width|string|false|none|Overall width of the car|
|powertrain_type|string|false|none|powertrain_type of the car|
|short_trim|string|false|none|Short trim of the car|
|std_seating|string|false|none|Std seating of the car|
|steering_type|string|false|none|Steering type of the car|
|tank_size|string|false|none|Tank size of the car|
|transmission|string|false|none|Transmission of the car|
|trim|string|false|none|Trim of the car|
|trim_r|string|false|none|Trim_r of the car|
|vehicle_type|string|false|none|Vehicle type of the car|
|year|integer|false|none|Year of the Car|

<h2 id="tocS_CRMResponse">CRMResponse</h2>
<!-- backwards compatibility -->
<a id="schemacrmresponse"></a>
<a id="schema_CRMResponse"></a>
<a id="tocScrmresponse"></a>
<a id="tocscrmresponse"></a>

```json
{
  "for_sale": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|for_sale|string|false|none|Boolean to indicate whether given vin has had listing after given date or not|

<h2 id="tocS_CacheImageResponse">CacheImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacacheimageresponse"></a>
<a id="schema_CacheImageResponse"></a>
<a id="tocScacheimageresponse"></a>
<a id="tocscacheimageresponse"></a>

```json
"string"
```

Cached JPEG image

<h2 id="tocS_CarListingRank">CarListingRank</h2>
<!-- backwards compatibility -->
<a id="schemacarlistingrank"></a>
<a id="schema_CarListingRank"></a>
<a id="tocScarlistingrank"></a>
<a id="tocscarlistingrank"></a>

```json
{
  "ranked_listing": {}
}
```

Ranking query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ranked_listing|object|false|none|none|

<h2 id="tocS_CarLocation">CarLocation</h2>
<!-- backwards compatibility -->
<a id="schemacarlocation"></a>
<a id="schema_CarLocation"></a>
<a id="tocScarlocation"></a>
<a id="tocscarlocation"></a>

```json
{
  "city": "string",
  "county": "string",
  "latitude": "string",
  "longitude": "string",
  "seller_name": "string",
  "street": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City of the car|
|county|string|false|none|County of the car|
|latitude|string|false|none|Latitude component of car location|
|longitude|string|false|none|Longitude component of car location|
|seller_name|string|false|none|Seller name of the car|
|street|string|false|none|Street address of the car|
|zip|string|false|none|Zip/Postal code of the car|

<h2 id="tocS_CarRankCriteria">CarRankCriteria</h2>
<!-- backwards compatibility -->
<a id="schemacarrankcriteria"></a>
<a id="schema_CarRankCriteria"></a>
<a id="tocScarrankcriteria"></a>
<a id="tocscarrankcriteria"></a>

```json
{
  "carfax_1_owner": 0.9,
  "carfax_clean_title": 0.9,
  "dom": 0.9,
  "dom_180": 0.9,
  "dom_active": 0.9,
  "is_certified": 1,
  "miles": 0.9,
  "price": 0.9
}
```

Ranking query request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carfax_1_owner|number|false|none|Flag to indicate whether listing is carfax_1_owner.Weight for this is ranking process between 0-1.|
|carfax_clean_title|number|false|none|Flag to indicate whether listing is carfax_clean_title.Weight for this is ranking process between 0-1|
|dom|number|false|none|Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car.Weight for this is ranking process between 0-1|
|dom_180|number|false|none|Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car.Weight for this is ranking process between 0-1|
|dom_active|number|false|none|Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car.Weight for this is ranking process between 0-1|
|is_certified|number|false|none|Certified car.Weight for this is ranking process between 0-1|
|miles|number|false|none|Odometer reading / reported miles usage for the car.Weight for this is ranking process between 0-1|
|price|number|false|none|Asking price for the vehicle. Weight for this is ranking process between 0-1.|

<h2 id="tocS_CarRankRequest">CarRankRequest</h2>
<!-- backwards compatibility -->
<a id="schemacarrankrequest"></a>
<a id="schema_CarRankRequest"></a>
<a id="tocScarrankrequest"></a>
<a id="tocscarrankrequest"></a>

```json
{
  "listing_ids": [
    "string"
  ],
  "ranking_criteria": {}
}
```

Ranking query request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listing_ids|[string]|false|none|none|
|ranking_criteria|object|false|none|none|

<h2 id="tocS_CarRankResponse">CarRankResponse</h2>
<!-- backwards compatibility -->
<a id="schemacarrankresponse"></a>
<a id="schema_CarRankResponse"></a>
<a id="tocScarrankresponse"></a>
<a id="tocscarrankresponse"></a>

```json
{
  "num_ranked": 0,
  "ranked_listings": [
    {
      "ranked_listing": {}
    }
  ]
}
```

Ranking query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_ranked|integer|false|none|The number of listings ranked|
|ranked_listings|[[CarListingRank](#schemacarlistingrank)]|false|none|none|

<h2 id="tocS_CarSearchFacets">CarSearchFacets</h2>
<!-- backwards compatibility -->
<a id="schemacarsearchfacets"></a>
<a id="schema_CarSearchFacets"></a>
<a id="tocScarsearchfacets"></a>
<a id="tocscarsearchfacets"></a>

```json
{
  "base_exterior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "base_interior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "body_subtype": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "body_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "car_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "carfax_1_owner": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "carfax_clean_title": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "city": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "cylinders": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "data_source": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "dealer_id": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "dealer_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "doors": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "drivetrain": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine_aspiration": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine_block": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine_size": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "exterior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "fuel_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "interior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "make": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "model": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "seller_name": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "seller_name_o": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "seller_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "source": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "state": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "transmission": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "trim": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "trim_o": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "trim_r": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "vehicle_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "year": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_exterior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|base_interior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|body_subtype|[[FacetItem](#schemafacetitem)]|false|none|none|
|body_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|car_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|carfax_1_owner|[[FacetItem](#schemafacetitem)]|false|none|none|
|carfax_clean_title|[[FacetItem](#schemafacetitem)]|false|none|none|
|city|[[FacetItem](#schemafacetitem)]|false|none|none|
|cylinders|[[FacetItem](#schemafacetitem)]|false|none|none|
|data_source|[[FacetItem](#schemafacetitem)]|false|none|none|
|dealer_id|[[FacetItem](#schemafacetitem)]|false|none|none|
|dealer_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|doors|[[FacetItem](#schemafacetitem)]|false|none|none|
|drivetrain|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine_aspiration|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine_block|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine_size|[[FacetItem](#schemafacetitem)]|false|none|none|
|exterior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|fuel_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|interior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|make|[[FacetItem](#schemafacetitem)]|false|none|none|
|model|[[FacetItem](#schemafacetitem)]|false|none|none|
|seller_name|[[FacetItem](#schemafacetitem)]|false|none|none|
|seller_name_o|[[FacetItem](#schemafacetitem)]|false|none|none|
|seller_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|source|[[FacetItem](#schemafacetitem)]|false|none|none|
|state|[[FacetItem](#schemafacetitem)]|false|none|none|
|transmission|[[FacetItem](#schemafacetitem)]|false|none|none|
|trim|[[FacetItem](#schemafacetitem)]|false|none|none|
|trim_o|[[FacetItem](#schemafacetitem)]|false|none|none|
|trim_r|[[FacetItem](#schemafacetitem)]|false|none|none|
|vehicle_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|year|[[FacetItem](#schemafacetitem)]|false|none|none|

<h2 id="tocS_CarSearchRangeFacets">CarSearchRangeFacets</h2>
<!-- backwards compatibility -->
<a id="schemacarsearchrangefacets"></a>
<a id="schema_CarSearchRangeFacets"></a>
<a id="tocScarsearchrangefacets"></a>
<a id="tocscarsearchrangefacets"></a>

```json
{
  "dom": {},
  "dom_180": {},
  "dom_active": {},
  "finance_down_payment": {},
  "finance_emp": {},
  "finance_loan_apr": {},
  "finance_loan_term": {},
  "lease_down_payment": {},
  "lease_emp": {},
  "lease_term": {},
  "miles": {},
  "msrp": {},
  "price": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dom|object|false|none|none|
|dom_180|object|false|none|none|
|dom_active|object|false|none|none|
|finance_down_payment|object|false|none|none|
|finance_emp|object|false|none|none|
|finance_loan_apr|object|false|none|none|
|finance_loan_term|object|false|none|none|
|lease_down_payment|object|false|none|none|
|lease_emp|object|false|none|none|
|lease_term|object|false|none|none|
|miles|object|false|none|none|
|msrp|object|false|none|none|
|price|object|false|none|none|

<h2 id="tocS_CarSearchStats">CarSearchStats</h2>
<!-- backwards compatibility -->
<a id="schemacarsearchstats"></a>
<a id="schema_CarSearchStats"></a>
<a id="tocScarsearchstats"></a>
<a id="tocscarsearchstats"></a>

```json
{
  "dom": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "dom_180": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "dom_active": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "finance_down_payment": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "finance_down_payment_per": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "finance_emp": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "finance_loan_apr": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "finance_loan_term": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "lease_down_payment": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "lease_emp": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "lease_term": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "miles": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "msrp": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "price": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dom|[StatsItem](#schemastatsitem)|false|none|none|
|dom_180|[StatsItem](#schemastatsitem)|false|none|none|
|dom_active|[StatsItem](#schemastatsitem)|false|none|none|
|finance_down_payment|[StatsItem](#schemastatsitem)|false|none|none|
|finance_down_payment_per|[StatsItem](#schemastatsitem)|false|none|none|
|finance_emp|[StatsItem](#schemastatsitem)|false|none|none|
|finance_loan_apr|[StatsItem](#schemastatsitem)|false|none|none|
|finance_loan_term|[StatsItem](#schemastatsitem)|false|none|none|
|lease_down_payment|[StatsItem](#schemastatsitem)|false|none|none|
|lease_emp|[StatsItem](#schemastatsitem)|false|none|none|
|lease_term|[StatsItem](#schemastatsitem)|false|none|none|
|miles|[StatsItem](#schemastatsitem)|false|none|none|
|msrp|[StatsItem](#schemastatsitem)|false|none|none|
|price|[StatsItem](#schemastatsitem)|false|none|none|

<h2 id="tocS_ClientFiltersRequest">ClientFiltersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclientfiltersrequest"></a>
<a id="schema_ClientFiltersRequest"></a>
<a id="tocSclientfiltersrequest"></a>
<a id="tocsclientfiltersrequest"></a>

```json
{
  "list": [
    "string"
  ]
}
```

A client filters request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[string]|true|none|none|

<h2 id="tocS_ComparisonPoint">ComparisonPoint</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonpoint"></a>
<a id="schema_ComparisonPoint"></a>
<a id="tocScomparisonpoint"></a>
<a id="tocscomparisonpoint"></a>

```json
{
  "dealer_indicator": "string",
  "fair_deal_price": 0,
  "similar_vehicles_count": 0,
  "vin_price": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealer_indicator|string|false|none|Deal Indicator|
|fair_deal_price|number|false|none|Fair Deal Price|
|similar_vehicles_count|number|false|none|Similar Vehicles Count|
|vin_price|number|false|none|Price for Vin|

<h2 id="tocS_CompetitorsCarDetails">CompetitorsCarDetails</h2>
<!-- backwards compatibility -->
<a id="schemacompetitorscardetails"></a>
<a id="schema_CompetitorsCarDetails"></a>
<a id="tocScompetitorscardetails"></a>
<a id="tocscompetitorscardetails"></a>

```json
{
  "avg_market_value": "string",
  "miles": "string",
  "name": "string",
  "price": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_market_value|string|false|none|Estimated market value|
|miles|string|false|none|mileage of car|
|name|string|false|none|Current car name|
|price|string|false|none|price of car|

<h2 id="tocS_CompetitorsPoint">CompetitorsPoint</h2>
<!-- backwards compatibility -->
<a id="schemacompetitorspoint"></a>
<a id="schema_CompetitorsPoint"></a>
<a id="tocScompetitorspoint"></a>
<a id="tocscompetitorspoint"></a>

```json
{
  "current_car": {
    "avg_market_value": "string",
    "miles": "string",
    "name": "string",
    "price": "string"
  },
  "same_car_models": [
    {
      "avg_market_value": 0,
      "avg_miles": 0,
      "avg_price": 0,
      "name": "string"
    }
  ],
  "similar_car_models": [
    {
      "avg_market_value": 0,
      "avg_miles": 0,
      "avg_price": 0,
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_car|[CompetitorsCarDetails](#schemacompetitorscardetails)|false|none|none|
|same_car_models|[[CompetitorsSameCars](#schemacompetitorssamecars)]|false|none|none|
|similar_car_models|[[CompetitorsSimilarCars](#schemacompetitorssimilarcars)]|false|none|none|

<h2 id="tocS_CompetitorsSameCars">CompetitorsSameCars</h2>
<!-- backwards compatibility -->
<a id="schemacompetitorssamecars"></a>
<a id="schema_CompetitorsSameCars"></a>
<a id="tocScompetitorssamecars"></a>
<a id="tocscompetitorssamecars"></a>

```json
{
  "avg_market_value": 0,
  "avg_miles": 0,
  "avg_price": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_market_value|number|false|none|Estimated market value of year make model combination|
|avg_miles|number|false|none|Mileage of year make model combination|
|avg_price|number|false|none|Price of year make model combination|
|name|string|false|none|ymm_comb_name|

<h2 id="tocS_CompetitorsSimilarCars">CompetitorsSimilarCars</h2>
<!-- backwards compatibility -->
<a id="schemacompetitorssimilarcars"></a>
<a id="schema_CompetitorsSimilarCars"></a>
<a id="tocScompetitorssimilarcars"></a>
<a id="tocscompetitorssimilarcars"></a>

```json
{
  "avg_market_value": 0,
  "avg_miles": 0,
  "avg_price": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_market_value|number|false|none|Average market value of year make model combination|
|avg_miles|number|false|none|Average mileage of year make model combination|
|avg_price|number|false|none|Average price of year make model combination|
|name|string|false|none|ymm_comb_name|

<h2 id="tocS_DailyStats">DailyStats</h2>
<!-- backwards compatibility -->
<a id="schemadailystats"></a>
<a id="schema_DailyStats"></a>
<a id="tocSdailystats"></a>
<a id="tocsdailystats"></a>

```json
{
  "dom": {
    "interquartile_range": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0
  },
  "miles_stats": {
    "interquartile_range": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0
  },
  "price_stats": {
    "interquartile_range": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0
  },
  "units_for_sale": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dom|[DailyStatsNestedJson](#schemadailystatsnestedjson)|false|none|All nested JSON of stats|
|miles_stats|[DailyStatsNestedJson](#schemadailystatsnestedjson)|false|none|All nested JSON of stats|
|price_stats|[DailyStatsNestedJson](#schemadailystatsnestedjson)|false|none|All nested JSON of stats|
|units_for_sale|number|false|none|Number of units of this car for sale on the market|

<h2 id="tocS_DailyStatsNestedJson">DailyStatsNestedJson</h2>
<!-- backwards compatibility -->
<a id="schemadailystatsnestedjson"></a>
<a id="schema_DailyStatsNestedJson"></a>
<a id="tocSdailystatsnestedjson"></a>
<a id="tocsdailystatsnestedjson"></a>

```json
{
  "interquartile_range": 0,
  "mean": 0,
  "median": 0,
  "population_standard_deviation": 0,
  "standard_deviation": 0,
  "trimmed_mean": 0,
  "variance": 0
}
```

All nested JSON of stats

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interquartile_range|number|false|none|Interquartile range|
|mean|number|false|none|Mean|
|median|number|false|none|Median|
|population_standard_deviation|number|false|none|population standard deviation|
|standard_deviation|number|false|none|Standard Deviation|
|trimmed_mean|number|false|none|Trimmed Mean|
|variance|number|false|none|variance|

<h2 id="tocS_Dealer">Dealer</h2>
<!-- backwards compatibility -->
<a id="schemadealer"></a>
<a id="schema_Dealer"></a>
<a id="tocSdealer"></a>
<a id="tocsdealer"></a>

```json
{
  "city": "string",
  "country": "string",
  "data_source": "string",
  "dealer_type": "string",
  "dealership_group_name": "string",
  "distance": 0,
  "id": "string",
  "inventory_url": "string",
  "latitude": "string",
  "listing_count": 0,
  "location_ll": "string",
  "longitude": "string",
  "seller_email": "string",
  "seller_name": "string",
  "seller_phone": "string",
  "state": "string",
  "status": "string",
  "street": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City of the dealer|
|country|string|false|none|country of the dealer|
|data_source|string|false|none|Datasource of the dealer|
|dealer_type|string|false|none|Type of dealer (franchise/independent)|
|dealership_group_name|string|false|none|Dealership group name of dealer|
|distance|number(double)|false|none|Distance of dealer from given location|
|id|string|false|none|The unique id associated with the dealer in the Marketcheck database|
|inventory_url|string|false|none|Website of the dealer|
|latitude|string|false|none|Latutide for the dealer location|
|listing_count|integer|false|none|Listing count of the dealer|
|location_ll|string|false|none|location_ll for the dealer location|
|longitude|string|false|none|Longitude for the dealer location|
|seller_email|string|false|none|Contact email of the dealer|
|seller_name|string|false|none|Name of the dealer|
|seller_phone|string|false|none|Contact no of the dealer|
|state|string|false|none|State of the dealer|
|status|string|false|none|Status of the dealer|
|street|string|false|none|Street of the dealer|
|zip|string|false|none|Zip of the dealer|

<h2 id="tocS_DealerLandingPage">DealerLandingPage</h2>
<!-- backwards compatibility -->
<a id="schemadealerlandingpage"></a>
<a id="schema_DealerLandingPage"></a>
<a id="tocSdealerlandingpage"></a>
<a id="tocsdealerlandingpage"></a>

```json
{
  "crawled_at": 0,
  "html": "string",
  "srp_url": "string"
}
```

Describes the dealer landing page (SRP) HTML object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crawled_at|number|false|none|The timestamp indicating the time when the SRP was cached|
|html|string|false|none|The HTML string for the listing web page|
|srp_url|string|false|none|The URL of the SRP|

<h2 id="tocS_DealerRating">DealerRating</h2>
<!-- backwards compatibility -->
<a id="schemadealerrating"></a>
<a id="schema_DealerRating"></a>
<a id="tocSdealerrating"></a>
<a id="tocsdealerrating"></a>

```json
{
  "city": "string",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "overall_rating": 0,
  "rating_components": [
    {
      "actual_rating": 0,
      "rating_condition": "string"
    }
  ],
  "state": "string",
  "street": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City of the dealer|
|latitude|string|false|none|Latutide for the dealer location|
|longitude|string|false|none|Longitude for the dealer location|
|name|string|false|none|Name of the dealer|
|overall_rating|number|false|none|Overall rating of the dealership on scale 1-5|
|rating_components|[[RatingComponents](#schemaratingcomponents)]|false|none|none|
|state|string|false|none|State of the dealer|
|street|string|false|none|Street of the dealer|
|zip|string|false|none|Zip of the dealer|

<h2 id="tocS_DealerReview">DealerReview</h2>
<!-- backwards compatibility -->
<a id="schemadealerreview"></a>
<a id="schema_DealerReview"></a>
<a id="tocSdealerreview"></a>
<a id="tocsdealerreview"></a>

```json
{
  "city": "string",
  "latitude": "string",
  "longitude": "string",
  "name": "string",
  "overall_reviews": 0,
  "review_components": [
    {
      "actual_review": "string",
      "user_name": "string",
      "user_rating": 0
    }
  ],
  "state": "string",
  "street": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City of the dealer|
|latitude|string|false|none|Latutide for the dealer location|
|longitude|string|false|none|Longitude for the dealer location|
|name|string|false|none|Name of the dealer|
|overall_reviews|number|false|none|Overall reviews of the dealership|
|review_components|[[ReviewComponents](#schemareviewcomponents)]|false|none|none|
|state|string|false|none|State of the dealer|
|street|string|false|none|Street of the dealer|
|zip|string|false|none|Zip of the dealer|

<h2 id="tocS_DealersResponse">DealersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadealersresponse"></a>
<a id="schema_DealersResponse"></a>
<a id="tocSdealersresponse"></a>
<a id="tocsdealersresponse"></a>

```json
{
  "dealers": [
    {
      "city": "string",
      "country": "string",
      "data_source": "string",
      "dealer_type": "string",
      "dealership_group_name": "string",
      "distance": 0,
      "id": "string",
      "inventory_url": "string",
      "latitude": "string",
      "listing_count": 0,
      "location_ll": "string",
      "longitude": "string",
      "seller_email": "string",
      "seller_name": "string",
      "seller_phone": "string",
      "state": "string",
      "status": "string",
      "street": "string",
      "zip": "string"
    }
  ],
  "num_found": 0
}
```

Dealers Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealers|[[Dealer](#schemadealer)]|false|none|none|
|num_found|integer|false|none|number of dealers found|

<h2 id="tocS_DepreciationPoint">DepreciationPoint</h2>
<!-- backwards compatibility -->
<a id="schemadepreciationpoint"></a>
<a id="schema_DepreciationPoint"></a>
<a id="tocSdepreciationpoint"></a>
<a id="tocsdepreciationpoint"></a>

```json
{
  "similar_models": [
    {
      "current_value": 0,
      "five_year_from_now": 0,
      "five_year_from_now_percent": 0,
      "name": "string",
      "one_year_from_now": 0,
      "one_year_from_now_percent": 0,
      "two_year_from_now": 0,
      "two_year_from_now_percent": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|similar_models|[[DepreciationStats](#schemadepreciationstats)]|false|none|none|

<h2 id="tocS_DepreciationStats">DepreciationStats</h2>
<!-- backwards compatibility -->
<a id="schemadepreciationstats"></a>
<a id="schema_DepreciationStats"></a>
<a id="tocSdepreciationstats"></a>
<a id="tocsdepreciationstats"></a>

```json
{
  "current_value": 0,
  "five_year_from_now": 0,
  "five_year_from_now_percent": 0,
  "name": "string",
  "one_year_from_now": 0,
  "one_year_from_now_percent": 0,
  "two_year_from_now": 0,
  "two_year_from_now_percent": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_value|number|false|none|Price of year make model combination|
|five_year_from_now|number|false|none|price after five year from now|
|five_year_from_now_percent|number|false|none|price depreciation percent after five year from now|
|name|string|false|none|ymm_comb_name|
|one_year_from_now|number|false|none|price after one year from now|
|one_year_from_now_percent|number|false|none|price depreciation percent after one year from now|
|two_year_from_now|number|false|none|price after two year from now|
|two_year_from_now_percent|number|false|none|price depreciation percent after two year from now|

<h2 id="tocS_Economy">Economy</h2>
<!-- backwards compatibility -->
<a id="schemaeconomy"></a>
<a id="schema_Economy"></a>
<a id="tocSeconomy"></a>
<a id="tocseconomy"></a>

```json
{
  "ghg_emissions_indicator": "string",
  "ghg_emissions_rating": 0,
  "smog_indicator": "string",
  "smog_rating": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ghg_emissions_indicator|string|false|none|Contains text like bad\|Good\|Very Good\| Excellent|
|ghg_emissions_rating|number|false|none|Show vehicle impact on climate change in terms of greeenhouse gases. This rating will be in the range of 1 - 10|
|smog_indicator|string|false|none|Contains text like bad\|Good\|Very Good\| Excellent|
|smog_rating|number|false|none|Shows vehicle's emissions of pollutants known to cause smog and other forms of air pollution. This rating will be in the range of 1 - 10|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|Error code|
|message|string|false|none|Error message|

<h2 id="tocS_FacetItem">FacetItem</h2>
<!-- backwards compatibility -->
<a id="schemafacetitem"></a>
<a id="schema_FacetItem"></a>
<a id="tocSfacetitem"></a>
<a id="tocsfacetitem"></a>

```json
{
  "count": 0,
  "item": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|Facet item count|
|item|string|false|none|Facet item|

<h2 id="tocS_FareValue">FareValue</h2>
<!-- backwards compatibility -->
<a id="schemafarevalue"></a>
<a id="schema_FareValue"></a>
<a id="tocSfarevalue"></a>
<a id="tocsfarevalue"></a>

```json
{
  "avg_days_to_sold_local": 32,
  "avg_days_to_sold_national": 42,
  "fmv_local": 13854,
  "fmv_national": 13915
}
```

Fare value of a car

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_days_to_sold_local|integer|false|none|Average days to sold of car around given postal code & radius|
|avg_days_to_sold_national|integer|false|none|Average days to sold of car for all available listings|
|fmv_local|integer|false|none|Fare value calculated for all available listing around given postal code & radius|
|fmv_national|integer|false|none|Fare value calculated for all available listing|

<h2 id="tocS_FuelEfficiency">FuelEfficiency</h2>
<!-- backwards compatibility -->
<a id="schemafuelefficiency"></a>
<a id="schema_FuelEfficiency"></a>
<a id="tocSfuelefficiency"></a>
<a id="tocsfuelefficiency"></a>

```json
{
  "annual_miles": 0,
  "city_mileage": "string",
  "combined_mileage": "string",
  "highway_mileage": "string",
  "monthly_fuel_expense": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annual_miles|number|false|none|Annual Miles of Car|
|city_mileage|string|false|none|City Mileage in MPG|
|combined_mileage|string|false|none|Combined Mileage|
|highway_mileage|string|false|none|Highway Mileage in MPG|
|monthly_fuel_expense|number|false|none|Monthly fuel expense|

<h2 id="tocS_GetClientFiltersResponse">GetClientFiltersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetclientfiltersresponse"></a>
<a id="schema_GetClientFiltersResponse"></a>
<a id="tocSgetclientfiltersresponse"></a>
<a id="tocsgetclientfiltersresponse"></a>

```json
{
  "list": "string",
  "status": 0
}
```

A client filters response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|string|false|none|Description of operation|
|status|integer|false|none|status code of operation|

<h2 id="tocS_HeavyEquipmentsBaseListing">HeavyEquipmentsBaseListing</h2>
<!-- backwards compatibility -->
<a id="schemaheavyequipmentsbaselisting"></a>
<a id="schema_HeavyEquipmentsBaseListing"></a>
<a id="tocSheavyequipmentsbaselisting"></a>
<a id="tocsheavyequipmentsbaselisting"></a>

```json
{
  "build": {
    "body_type": "string",
    "category": "string",
    "condition": "string",
    "drivetrain": "string",
    "engine": "string",
    "fuel_type": "string",
    "make": "string",
    "model": "string",
    "sub_category": "string",
    "transmission": "string",
    "trim": "string",
    "year": 0
  },
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dist": 0,
  "dp_url": "string",
  "exterior_color": "string",
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vin": "string"
}
```

Base heavy equipment listing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[HeavyEquipmentsBuild](#schemaheavyequipmentsbuild)|false|none|Describes the Heavy Equipments specification|
|dealer|[NestDealer](#schemanestdealer)|false|none|none|
|dist|number(double)|false|none|Distance of the quipments's location from the specified user lcoation|
|dp_url|string|false|none|Details Page url of the specific heavy equipment|
|exterior_color|string|false|none|Exterior color of the heavy equipment|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|interior_color|string|false|none|Interior color of the heavy equipment|
|inventory_type|string|false|none|Inventory type of heavy equipment|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|media|[ListingNestMedia](#schemalistingnestmedia)|false|none|none|
|miles|integer|false|none|Odometer reading / reported miles usage for the heavy equipment|
|msrp|integer|false|none|MSRP for the heavy equipment|
|price|integer|false|none|Asking price for the heavy equipment|
|scraped_at|number(integer)|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_type|string|false|none|Seller type for the heavy equipment|
|source|string|false|none|Source domain of the listing|
|stock_no|string|false|none|Stock number of heavy equipment in dealers inventory|
|vin|string|false|none|VIN for the heavy equipment|

<h2 id="tocS_HeavyEquipmentsBuild">HeavyEquipmentsBuild</h2>
<!-- backwards compatibility -->
<a id="schemaheavyequipmentsbuild"></a>
<a id="schema_HeavyEquipmentsBuild"></a>
<a id="tocSheavyequipmentsbuild"></a>
<a id="tocsheavyequipmentsbuild"></a>

```json
{
  "body_type": "string",
  "category": "string",
  "condition": "string",
  "drivetrain": "string",
  "engine": "string",
  "fuel_type": "string",
  "make": "string",
  "model": "string",
  "sub_category": "string",
  "transmission": "string",
  "trim": "string",
  "year": 0
}
```

Describes the Heavy Equipments specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body_type|string|false|none|Body type of the heavy equipment|
|category|string|false|none|Heavy equipment category|
|condition|string|false|none|Heavy equipment condition|
|drivetrain|string|false|none|Drivetrain of the heavy equipment|
|engine|string|false|none|Engine of the heavy equipment|
|fuel_type|string|false|none|Fuel type of the heavy equipment|
|make|string|false|none|Heavy equipment Make|
|model|string|false|none|Heavy equipment model|
|sub_category|string|false|none|Heavy equipment sub_category|
|transmission|string|false|none|Transmission of the heavy equipment|
|trim|string|false|none|Trim of the heavy equipment|
|year|integer|false|none|Year of the heavy equipment|

<h2 id="tocS_HeavyEquipmentsListing">HeavyEquipmentsListing</h2>
<!-- backwards compatibility -->
<a id="schemaheavyequipmentslisting"></a>
<a id="schema_HeavyEquipmentsListing"></a>
<a id="tocSheavyequipmentslisting"></a>
<a id="tocsheavyequipmentslisting"></a>

```json
{
  "build": {
    "area": "string",
    "class": "string",
    "engine": "string",
    "fuel_type": "string",
    "gvwr": "string",
    "length": "string",
    "made_in": "string",
    "make": "string",
    "model": "string",
    "sleeps": "string",
    "slideouts": "string",
    "transmission": "string",
    "year": 0
  },
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dp_url": "string",
  "exterior_color": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vin": "string"
}
```

Represents a full list of attributes available with Marketcheck for a car

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[RVBuild](#schemarvbuild)|false|none|Describes the RV specification|
|dealer|[NestDealer](#schemanestdealer)|false|none|none|
|dp_url|string|false|none|Details Page url of the specific heavy equipment|
|exterior_color|string|false|none|Exterior color of the heavy equipment|
|extra|[ListingNestExtraAttributes](#schemalistingnestextraattributes)|false|none|none|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|interior_color|string|false|none|Interior color of the heavy equipment|
|inventory_type|string|false|none|Inventory type of heavy equipment|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|media|[ListingNestMedia](#schemalistingnestmedia)|false|none|none|
|miles|integer|false|none|Odometer reading / reported miles usage for the heavy equipment|
|msrp|integer|false|none|MSRP for the heavy equipment|
|price|integer|false|none|Asking price for the heavy equipment|
|scraped_at|number(integer)|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_type|string|false|none|Seller type for the heavy equipment|
|source|string|false|none|Source domain of the listing|
|stock_no|string|false|none|Stock number of heavy equipment in dealers inventory|
|vin|string|false|none|VIN for the heavy equipment|

<h2 id="tocS_HeavyEquipmentsSearchFacets">HeavyEquipmentsSearchFacets</h2>
<!-- backwards compatibility -->
<a id="schemaheavyequipmentssearchfacets"></a>
<a id="schema_HeavyEquipmentsSearchFacets"></a>
<a id="tocSheavyequipmentssearchfacets"></a>
<a id="tocsheavyequipmentssearchfacets"></a>

```json
{
  "body_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "category": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "city": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "cylinders": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "dealer_id": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "drivetrain": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "exterior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "fuel_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "interior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "inventory_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "make": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "model": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "seller_name": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "source": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "state": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "sub_category": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "transmission": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "trim": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "year": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|category|[[FacetItem](#schemafacetitem)]|false|none|none|
|city|[[FacetItem](#schemafacetitem)]|false|none|none|
|cylinders|[[FacetItem](#schemafacetitem)]|false|none|none|
|dealer_id|[[FacetItem](#schemafacetitem)]|false|none|none|
|drivetrain|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine|[[FacetItem](#schemafacetitem)]|false|none|none|
|exterior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|fuel_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|interior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|inventory_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|make|[[FacetItem](#schemafacetitem)]|false|none|none|
|model|[[FacetItem](#schemafacetitem)]|false|none|none|
|seller_name|[[FacetItem](#schemafacetitem)]|false|none|none|
|source|[[FacetItem](#schemafacetitem)]|false|none|none|
|state|[[FacetItem](#schemafacetitem)]|false|none|none|
|sub_category|[[FacetItem](#schemafacetitem)]|false|none|none|
|transmission|[[FacetItem](#schemafacetitem)]|false|none|none|
|trim|[[FacetItem](#schemafacetitem)]|false|none|none|
|year|[[FacetItem](#schemafacetitem)]|false|none|none|

<h2 id="tocS_HeavyEquipmentsSearchRangeFacets">HeavyEquipmentsSearchRangeFacets</h2>
<!-- backwards compatibility -->
<a id="schemaheavyequipmentssearchrangefacets"></a>
<a id="schema_HeavyEquipmentsSearchRangeFacets"></a>
<a id="tocSheavyequipmentssearchrangefacets"></a>
<a id="tocsheavyequipmentssearchrangefacets"></a>

```json
{
  "hours_used": {},
  "miles": {},
  "price": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours_used|object|false|none|none|
|miles|object|false|none|none|
|price|object|false|none|none|

<h2 id="tocS_HeavyEquipmentsSearchResponse">HeavyEquipmentsSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaheavyequipmentssearchresponse"></a>
<a id="schema_HeavyEquipmentsSearchResponse"></a>
<a id="tocSheavyequipmentssearchresponse"></a>
<a id="tocsheavyequipmentssearchresponse"></a>

```json
{
  "facets": {},
  "listings": [
    {
      "build": {
        "body_type": "string",
        "category": "string",
        "condition": "string",
        "drivetrain": "string",
        "engine": "string",
        "fuel_type": "string",
        "make": "string",
        "model": "string",
        "sub_category": "string",
        "transmission": "string",
        "trim": "string",
        "year": 0
      },
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dp_url": "string",
      "exterior_color": "string",
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "interior_color": "string",
      "inventory_type": "string",
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "msrp": 0,
      "price": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {},
  "stats": {}
}
```

Heavy Equipments search query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|object|false|none|none|
|listings|[[HeavyEquipmentsBaseListing](#schemaheavyequipmentsbaselisting)]|false|none|none|
|num_found|integer|false|none|The number of listings found|
|range_facets|object|false|none|none|
|stats|object|false|none|none|

<h2 id="tocS_HeavyEquipmentsSearchStats">HeavyEquipmentsSearchStats</h2>
<!-- backwards compatibility -->
<a id="schemaheavyequipmentssearchstats"></a>
<a id="schema_HeavyEquipmentsSearchStats"></a>
<a id="tocSheavyequipmentssearchstats"></a>
<a id="tocsheavyequipmentssearchstats"></a>

```json
{
  "hours_used": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "miles": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "price": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours_used|[StatsItem](#schemastatsitem)|false|none|none|
|miles|[StatsItem](#schemastatsitem)|false|none|none|
|price|[StatsItem](#schemastatsitem)|false|none|none|

<h2 id="tocS_HistoricalListing">HistoricalListing</h2>
<!-- backwards compatibility -->
<a id="schemahistoricallisting"></a>
<a id="schema_HistoricalListing"></a>
<a id="tocShistoricallisting"></a>
<a id="tocshistoricallisting"></a>

```json
{
  "carfax_1_owner": true,
  "carfax_clean_title": true,
  "city": "string",
  "data_source": "string",
  "dealer_id": 0,
  "dom": 0,
  "dom_180": 0,
  "dom_active": 0,
  "exterior_color": "string",
  "financing_options": [
    {
      "down_payment": 0,
      "down_payment_percentage": 0,
      "estimated_monthly_payment": 0,
      "loan_apr": 0,
      "loan_term": 0
    }
  ],
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "is_certified": 0,
  "is_searchable": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "latitude": "string",
  "leasing_options": [
    {
      "down_payment": 0,
      "estimated_monthly_payment": 0,
      "lease_term": 0
    }
  ],
  "longitude": "string",
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "ref_miles": "string",
  "ref_miles_dt": 0,
  "ref_price": "string",
  "ref_price_dt": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_name": "string",
  "seller_name_o": "string",
  "seller_type": "string",
  "source": "string",
  "state": "string",
  "status_date": 0,
  "stock_no": "string",
  "street": "string",
  "trim_r": "string",
  "vdp_url": "string",
  "vin": "string",
  "zip": "string"
}
```

Represents a car history entry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carfax_1_owner|boolean|false|none|Flag to indicate whether listing is carfax_1_owner|
|carfax_clean_title|boolean|false|none|Flag to indicate whether listing is carfax_clean_title|
|city|string|false|none|City of the listing|
|data_source|string|false|none|Data source of the listing|
|dealer_id|integer|false|none|Unique MC assigned dealers id for the listing|
|dom|integer|false|none|Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car|
|dom_180|integer|false|none|Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car|
|dom_active|integer|false|none|Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car|
|exterior_color|string|false|none|Exterior color of the car|
|financing_options|[[ListingFinance](#schemalistingfinance)]|false|none|Array of all finance offers for this listing|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|interior_color|string|false|none|Interior color of the car|
|inventory_type|string|false|none|Inventory type of car|
|is_certified|integer|false|none|Certified car|
|is_searchable|string|false|none|Flag to indicate listing is marked searchable or not|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|latitude|string|false|none|Latitude of the listing|
|leasing_options|[[ListingLease](#schemalistinglease)]|false|none|Array of all finance offers for this listing|
|longitude|string|false|none|Longitude of the listing|
|miles|integer|false|none|Odometer reading / reported miles usage for the car|
|msrp|integer|false|none|MSRP for the car|
|price|integer|false|none|Asking price for the car|
|ref_miles|string|false|none|Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date|
|ref_miles_dt|integer|false|none|The date at which the last miles was reported online. This is earlier to last_seen_date|
|ref_price|string|false|none|Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date|
|ref_price_dt|integer|false|none|The date at which the last price was reported online. This is earlier to last_seen_date|
|scraped_at|integer|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_name|string|false|none|Seller name of the listing from the Marketcheck database|
|seller_name_o|string|false|none|Seller name of the listing from the Marketcheck database|
|seller_type|string|false|none|Seller type for the car|
|source|string|false|none|Source domain of the listing|
|state|string|false|none|State of the listing|
|status_date|integer|false|none|Timestamp of status date|
|stock_no|string|false|none|Stock number of car in dealers inventory|
|street|string|false|none|Street of the listing|
|trim_r|string|false|none|Trim of the car|
|vdp_url|string|false|none|Vehicle Details Page url of the specific car|
|vin|string|false|none|VIN for the car|
|zip|string|false|none|Zip of the listing|

<h2 id="tocS_Listing">Listing</h2>
<!-- backwards compatibility -->
<a id="schemalisting"></a>
<a id="schema_Listing"></a>
<a id="tocSlisting"></a>
<a id="tocslisting"></a>

```json
{
  "base_ext_color": "string",
  "base_int_color": "string",
  "build": {
    "antibrake_sys": "string",
    "body_subtype": "string",
    "body_type": "string",
    "city_miles": "string",
    "city_mpg": 0,
    "cylinders": 0,
    "doors": 0,
    "drivetrain": "string",
    "engine": "string",
    "engine_aspiration": "string",
    "engine_block": "string",
    "engine_measure": "string",
    "engine_size": 0,
    "fuel_type": "string",
    "highway_miles": "string",
    "highway_mpg": 0,
    "made_in": "string",
    "make": "string",
    "model": "string",
    "opt_seating": "string",
    "overall_height": "string",
    "overall_length": "string",
    "overall_width": "string",
    "powertrain_type": "string",
    "short_trim": "string",
    "std_seating": "string",
    "steering_type": "string",
    "tank_size": "string",
    "transmission": "string",
    "trim": "string",
    "trim_r": "string",
    "vehicle_type": "string",
    "year": 0
  },
  "carfax_1_owner": true,
  "carfax_clean_title": true,
  "data_source": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dom": 0,
  "dom_180": 0,
  "dom_active": 0,
  "exterior_color": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "financing_options": [
    {
      "down_payment": 0,
      "down_payment_percentage": 0,
      "estimated_monthly_payment": 0,
      "loan_apr": 0,
      "loan_term": 0
    }
  ],
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "first_seen_at_mc": 0,
  "first_seen_at_mc_date": "string",
  "first_seen_at_source": 0,
  "first_seen_at_source_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "is_certified": 0,
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "leasing_options": [
    {
      "down_payment": 0,
      "estimated_monthly_payment": 0,
      "lease_term": 0
    }
  ],
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "price_change_percent": 0,
  "rank": 0,
  "ref_miles": "string",
  "ref_miles_dt": 0,
  "ref_price": "string",
  "ref_price_dt": 0,
  "score": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vdp_url": "string",
  "vehicle_registration_mark": "string",
  "vin": "string"
}
```

Represents a full list of attributes available with Marketcheck for a car

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_ext_color|string|false|none|Base exterior color of the car|
|base_int_color|string|false|none|Base interior color of the car|
|build|[Build](#schemabuild)|false|none|Describes the Car specification|
|carfax_1_owner|boolean|false|none|Flag to indicate whether listing is carfax_1_owner|
|carfax_clean_title|boolean|false|none|Flag to indicate whether listing is carfax_clean_title|
|data_source|string|false|none|Data source of the listing|
|dealer|[NestDealer](#schemanestdealer)|false|none|none|
|dom|integer|false|none|Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car|
|dom_180|integer|false|none|Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car|
|dom_active|integer|false|none|Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car|
|exterior_color|string|false|none|Exterior color of the car|
|extra|[ListingNestExtraAttributes](#schemalistingnestextraattributes)|false|none|none|
|financing_options|[[ListingFinance](#schemalistingfinance)]|false|none|Array of all finance offers for this listing|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|first_seen_at_mc|integer|false|none|Listing first seen at first scraped at MC timestamp|
|first_seen_at_mc_date|string|false|none|Listing first seen at first scraped at MC date|
|first_seen_at_source|integer|false|none|Listing first seen at source relisted timestamp|
|first_seen_at_source_date|string|false|none|Listing first seen at source relisted date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|interior_color|string|false|none|Interior color of the car|
|inventory_type|string|false|none|Inventory type of car|
|is_certified|integer|false|none|Certified car|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|leasing_options|[[ListingLease](#schemalistinglease)]|false|none|Array of all finance offers for this listing|
|media|[ListingNestMedia](#schemalistingnestmedia)|false|none|none|
|miles|integer|false|none|Odometer reading / reported miles usage for the car|
|msrp|integer|false|none|MSRP for the car|
|price|integer|false|none|Asking price for the car|
|price_change_percent|number(double)|false|none|Percentage difference between the cars's current price and ref_price i.e. last reported price|
|rank|integer|false|none|Relative rank of the listing determined by ranking service|
|ref_miles|string|false|none|Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date|
|ref_miles_dt|integer|false|none|The date at which the last miles was reported online. This is earlier to last_seen_date|
|ref_price|string|false|none|Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date|
|ref_price_dt|integer|false|none|The date at which the last price was reported online. This is earlier to last_seen_date|
|score|number(double)|false|none|Score of the ranked listing as per the ranking criteria determined by ranking service|
|scraped_at|integer|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_type|string|false|none|Seller type for the car|
|source|string|false|none|Source domain of the listing|
|stock_no|string|false|none|Stock number of car in dealers inventory|
|vdp_url|string|false|none|Vehicle Details Page url of the specific car|
|vehicle_registration_mark|string|false|none| Vehicle Registration Mark of the car|
|vin|string|false|none|VIN for the car|

<h2 id="tocS_ListingDebugAttributes">ListingDebugAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalistingdebugattributes"></a>
<a id="schema_ListingDebugAttributes"></a>
<a id="tocSlistingdebugattributes"></a>
<a id="tocslistingdebugattributes"></a>

```json
{
  "cycle_id": 0,
  "robot_id": 0,
  "scraped_at": "string",
  "taxonomy_vin": "string",
  "template_id": 0,
  "user_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cycle_id|number|false|none|Cycle id|
|robot_id|number|false|none|Robot id|
|scraped_at|string|false|none|Scraped date and time|
|taxonomy_vin|string|false|none|Taxonomy vin|
|template_id|number|false|none|Template id|
|user_id|number|false|none|User id|

<h2 id="tocS_ListingExtraAttributes">ListingExtraAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalistingextraattributes"></a>
<a id="schema_ListingExtraAttributes"></a>
<a id="tocSlistingextraattributes"></a>
<a id="tocslistingextraattributes"></a>

```json
{
  "dealer_added_f": [
    "string"
  ],
  "electronics_f": [
    "string"
  ],
  "exterior_f": [
    "string"
  ],
  "features": [
    "string"
  ],
  "id": "string",
  "interior_f": [
    "string"
  ],
  "options": [
    "string"
  ],
  "safety_f": [
    "string"
  ],
  "seller_cmts": "string",
  "standard_f": [
    "string"
  ],
  "technical_f": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealer_added_f|[string]|false|none|List of dealer added features available with the car|
|electronics_f|[string]|false|none|List of electronic features available with the car|
|exterior_f|[string]|false|none|List of exterior features available with the car|
|features|[string]|false|none|List of Features available with the car|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|interior_f|[string]|false|none|List of interior features available with the car|
|options|[string]|false|none|Installed Options of the car|
|safety_f|[string]|false|none|List of safety features available with the car|
|seller_cmts|string|false|none|Seller comment for the car|
|standard_f|[string]|false|none|List of standard features available with the car|
|technical_f|[string]|false|none|List of technical features available with the car|

<h2 id="tocS_ListingFinance">ListingFinance</h2>
<!-- backwards compatibility -->
<a id="schemalistingfinance"></a>
<a id="schema_ListingFinance"></a>
<a id="tocSlistingfinance"></a>
<a id="tocslistingfinance"></a>

```json
{
  "down_payment": 0,
  "down_payment_percentage": 0,
  "estimated_monthly_payment": 0,
  "loan_apr": 0,
  "loan_term": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|down_payment|number(double)|false|none|Down payment for this finance offer|
|down_payment_percentage|number(double)|false|none|down payment percentage for this finance offer|
|estimated_monthly_payment|number(double)|false|none|estimated monthly payment for this finance offer|
|loan_apr|number(double)|false|none|Loan APR for this finance offer|
|loan_term|integer|false|none|Loan term for this finance offer|

<h2 id="tocS_ListingLease">ListingLease</h2>
<!-- backwards compatibility -->
<a id="schemalistinglease"></a>
<a id="schema_ListingLease"></a>
<a id="tocSlistinglease"></a>
<a id="tocslistinglease"></a>

```json
{
  "down_payment": 0,
  "estimated_monthly_payment": 0,
  "lease_term": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|down_payment|number(double)|false|none|Down payment for this lease offer|
|estimated_monthly_payment|number(double)|false|none|estimated monthly payment for this lease offer|
|lease_term|integer(integer)|false|none|Lease term for this lease offer|

<h2 id="tocS_ListingMedia">ListingMedia</h2>
<!-- backwards compatibility -->
<a id="schemalistingmedia"></a>
<a id="schema_ListingMedia"></a>
<a id="tocSlistingmedia"></a>
<a id="tocslistingmedia"></a>

```json
{
  "id": "string",
  "photo_links": [
    "string"
  ],
  "photo_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|photo_links|[string]|false|none|A list of photo urls for the car|
|photo_url|string|false|none|Single photo url of the car|

<h2 id="tocS_ListingNestExtraAttributes">ListingNestExtraAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalistingnestextraattributes"></a>
<a id="schema_ListingNestExtraAttributes"></a>
<a id="tocSlistingnestextraattributes"></a>
<a id="tocslistingnestextraattributes"></a>

```json
{
  "dealer_added_f": [
    "string"
  ],
  "electronics_f": [
    "string"
  ],
  "exterior_f": [
    "string"
  ],
  "features": [
    "string"
  ],
  "interior_f": [
    "string"
  ],
  "options": [
    "string"
  ],
  "safety_f": [
    "string"
  ],
  "seller_comments": "string",
  "standard_f": [
    "string"
  ],
  "technical_f": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealer_added_f|[string]|false|none|List of dealer added features available with the car|
|electronics_f|[string]|false|none|List of electronic features available with the car|
|exterior_f|[string]|false|none|List of exterior features available with the car|
|features|[string]|false|none|List of Features available with the car|
|interior_f|[string]|false|none|List of interior features available with the car|
|options|[string]|false|none|Installed Options of the car|
|safety_f|[string]|false|none|List of safety features available with the car|
|seller_comments|string|false|none|Seller comments for the car|
|standard_f|[string]|false|none|List of standard features available with the car|
|technical_f|[string]|false|none|List of technical features available with the car|

<h2 id="tocS_ListingNestMedia">ListingNestMedia</h2>
<!-- backwards compatibility -->
<a id="schemalistingnestmedia"></a>
<a id="schema_ListingNestMedia"></a>
<a id="tocSlistingnestmedia"></a>
<a id="tocslistingnestmedia"></a>

```json
{
  "photo_links": [
    "string"
  ],
  "photo_links_cached": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photo_links|[string]|false|none|A list of photo urls for the car|
|photo_links_cached|[string]|false|none|A list of cached photo urls for the car|

<h2 id="tocS_ListingVDP">ListingVDP</h2>
<!-- backwards compatibility -->
<a id="schemalistingvdp"></a>
<a id="schema_ListingVDP"></a>
<a id="tocSlistingvdp"></a>
<a id="tocslistingvdp"></a>

```json
{
  "crawled_at": 0,
  "html": "string",
  "vdp_url": "string"
}
```

Describes the VDP (Vehicle Details Page) HTML object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crawled_at|number|false|none|The timestamp indicating the time when the VDP was cached|
|html|string|false|none|The HTML string for the listing web page|
|vdp_url|string|false|none|The URL of the VDP|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "city": "string",
  "latitude": 0,
  "longitude": 0,
  "state": "string",
  "zip": "string"
}
```

Represents a location

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City of the listing|
|latitude|number(double)|false|none|Latitude component of the location|
|longitude|number(double)|false|none|Longitude component of the location|
|state|string|false|none|State of the listing|
|zip|string|false|none|Zip of the listing|

<h2 id="tocS_MakeModel">MakeModel</h2>
<!-- backwards compatibility -->
<a id="schemamakemodel"></a>
<a id="schema_MakeModel"></a>
<a id="tocSmakemodel"></a>
<a id="tocsmakemodel"></a>

```json
{
  "make": "string",
  "model": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|make|string|false|none|none|
|model|string|false|none|none|

<h2 id="tocS_Mds">Mds</h2>
<!-- backwards compatibility -->
<a id="schemamds"></a>
<a id="schema_Mds"></a>
<a id="tocSmds"></a>
<a id="tocsmds"></a>

```json
{
  "make": "string",
  "mds": 0,
  "model": "string",
  "sold_vins": [
    "string"
  ],
  "total_active_cars_for_ymmt": 0,
  "total_cars_sold_in_last_45_days": 0,
  "trim": "string",
  "year": 0
}
```

Describes Market days supply results for year make model trim combination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|make|string|false|none|Make of vin provided|
|mds|integer|false|none|Provides Market days supply count|
|model|string|false|none|Model of vin provided|
|sold_vins|[string]|false|none|Sold vins array|
|total_active_cars_for_ymmt|integer|false|none|Active cars for ymmt combination|
|total_cars_sold_in_last_45_days|integer|false|none|Cars sold in last 45 days|
|trim|string|false|none|Trim of vin provided|
|year|integer|false|none|Year of vin provided|

<h2 id="tocS_MotorcycleBaseListing">MotorcycleBaseListing</h2>
<!-- backwards compatibility -->
<a id="schemamotorcyclebaselisting"></a>
<a id="schema_MotorcycleBaseListing"></a>
<a id="tocSmotorcyclebaselisting"></a>
<a id="tocsmotorcyclebaselisting"></a>

```json
{
  "build": {
    "body_type": "string",
    "cylinders": 0,
    "drivetrain": "string",
    "dry_weight": "string",
    "engine": "string",
    "fuel_type": "string",
    "made_in": "string",
    "make": "string",
    "model": "string",
    "transmission": "string",
    "trim": "string",
    "vehicle_type": "string",
    "year": 0
  },
  "color": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dist": 0,
  "dp_url": "string",
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vin": "string"
}
```

Base motorcycle listing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[MotorcycleBuild](#schemamotorcyclebuild)|false|none|Describes the Motorcycle specification|
|color|string|false|none|Color of the motorcycle|
|dealer|[NestDealer](#schemanestdealer)|false|none|none|
|dist|number(double)|false|none|Distance of the motorcycle's location from the specified user lcoation|
|dp_url|string|false|none|Details Page url of the specific motorcycle|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|inventory_type|string|false|none|Inventory type of motorcycle|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|media|[ListingNestMedia](#schemalistingnestmedia)|false|none|none|
|miles|integer|false|none|Odometer reading / reported miles usage for the motorcycle|
|msrp|integer|false|none|MSRP for the motorcycle|
|price|integer|false|none|Asking price for the motorcycle|
|scraped_at|number(integer)|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_type|string|false|none|Seller type for the motorcycle|
|source|string|false|none|Source domain of the listing|
|stock_no|string|false|none|Stock number of motorcycle in dealers inventory|
|vin|string|false|none|VIN for the Motorcycle|

<h2 id="tocS_MotorcycleBuild">MotorcycleBuild</h2>
<!-- backwards compatibility -->
<a id="schemamotorcyclebuild"></a>
<a id="schema_MotorcycleBuild"></a>
<a id="tocSmotorcyclebuild"></a>
<a id="tocsmotorcyclebuild"></a>

```json
{
  "body_type": "string",
  "cylinders": 0,
  "drivetrain": "string",
  "dry_weight": "string",
  "engine": "string",
  "fuel_type": "string",
  "made_in": "string",
  "make": "string",
  "model": "string",
  "transmission": "string",
  "trim": "string",
  "vehicle_type": "string",
  "year": 0
}
```

Describes the Motorcycle specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body_type|string|false|none|Body type of the motorcycle|
|cylinders|integer|false|none|No of cylinders of the motorcycle|
|drivetrain|string|false|none|Drivetrain of the motorcycle|
|dry_weight|string|false|none|Dry weight of motorcycle|
|engine|string|false|none|Engine of the motorcycle|
|fuel_type|string|false|none|Fuel type of the motorcycle|
|made_in|string|false|none|Made in of the motorcycle|
|make|string|false|none|Motorcycle Make|
|model|string|false|none|Motorcycle model|
|transmission|string|false|none|Transmission of the motorcycle|
|trim|string|false|none|Trim of the motorcycle|
|vehicle_type|string|false|none|Vehicle type of the motorcycle|
|year|integer|false|none|Year of the motorcycle|

<h2 id="tocS_MotorcycleListing">MotorcycleListing</h2>
<!-- backwards compatibility -->
<a id="schemamotorcyclelisting"></a>
<a id="schema_MotorcycleListing"></a>
<a id="tocSmotorcyclelisting"></a>
<a id="tocsmotorcyclelisting"></a>

```json
{
  "build": {
    "body_type": "string",
    "cylinders": 0,
    "drivetrain": "string",
    "dry_weight": "string",
    "engine": "string",
    "fuel_type": "string",
    "made_in": "string",
    "make": "string",
    "model": "string",
    "transmission": "string",
    "trim": "string",
    "vehicle_type": "string",
    "year": 0
  },
  "color": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dp_url": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vin": "string"
}
```

Represents a full list of attributes available with Marketcheck for a car

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[MotorcycleBuild](#schemamotorcyclebuild)|false|none|Describes the Motorcycle specification|
|color|string|false|none|Color of the motorcycle|
|dealer|[NestDealer](#schemanestdealer)|false|none|none|
|dp_url|string|false|none|Details Page url of the specific motorcycle|
|extra|[ListingNestExtraAttributes](#schemalistingnestextraattributes)|false|none|none|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|inventory_type|string|false|none|Inventory type of motorcycle|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|media|[ListingNestMedia](#schemalistingnestmedia)|false|none|none|
|miles|integer|false|none|Odometer reading / reported miles usage for the motorcycle|
|msrp|integer|false|none|MSRP for the motorcycle|
|price|integer|false|none|Asking price for the motorcycle|
|scraped_at|number(integer)|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_type|string|false|none|Seller type for the motorcycle|
|source|string|false|none|Source domain of the listing|
|stock_no|string|false|none|Stock number of motorcycle in dealers inventory|
|vin|string|false|none|VIN for the Motorcycle|

<h2 id="tocS_MotorcycleSearchFacets">MotorcycleSearchFacets</h2>
<!-- backwards compatibility -->
<a id="schemamotorcyclesearchfacets"></a>
<a id="schema_MotorcycleSearchFacets"></a>
<a id="tocSmotorcyclesearchfacets"></a>
<a id="tocsmotorcyclesearchfacets"></a>

```json
{
  "body_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "city": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "cylinders": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "dealer_id": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "drivetrain": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "fuel_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "inventory_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "make": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "model": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "seller_name": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "source": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "state": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "transmission": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "trim": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "vehicle_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "year": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|city|[[FacetItem](#schemafacetitem)]|false|none|none|
|color|[[FacetItem](#schemafacetitem)]|false|none|none|
|cylinders|[[FacetItem](#schemafacetitem)]|false|none|none|
|dealer_id|[[FacetItem](#schemafacetitem)]|false|none|none|
|drivetrain|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine|[[FacetItem](#schemafacetitem)]|false|none|none|
|fuel_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|inventory_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|make|[[FacetItem](#schemafacetitem)]|false|none|none|
|model|[[FacetItem](#schemafacetitem)]|false|none|none|
|seller_name|[[FacetItem](#schemafacetitem)]|false|none|none|
|source|[[FacetItem](#schemafacetitem)]|false|none|none|
|state|[[FacetItem](#schemafacetitem)]|false|none|none|
|transmission|[[FacetItem](#schemafacetitem)]|false|none|none|
|trim|[[FacetItem](#schemafacetitem)]|false|none|none|
|vehicle_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|year|[[FacetItem](#schemafacetitem)]|false|none|none|

<h2 id="tocS_MotorcycleSearchRangeFacets">MotorcycleSearchRangeFacets</h2>
<!-- backwards compatibility -->
<a id="schemamotorcyclesearchrangefacets"></a>
<a id="schema_MotorcycleSearchRangeFacets"></a>
<a id="tocSmotorcyclesearchrangefacets"></a>
<a id="tocsmotorcyclesearchrangefacets"></a>

```json
{
  "miles": {},
  "price": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|miles|object|false|none|none|
|price|object|false|none|none|

<h2 id="tocS_MotorcycleSearchResponse">MotorcycleSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemamotorcyclesearchresponse"></a>
<a id="schema_MotorcycleSearchResponse"></a>
<a id="tocSmotorcyclesearchresponse"></a>
<a id="tocsmotorcyclesearchresponse"></a>

```json
{
  "facets": {},
  "listings": [
    {
      "build": {
        "body_type": "string",
        "cylinders": 0,
        "drivetrain": "string",
        "dry_weight": "string",
        "engine": "string",
        "fuel_type": "string",
        "made_in": "string",
        "make": "string",
        "model": "string",
        "transmission": "string",
        "trim": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "color": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dp_url": "string",
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "inventory_type": "string",
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "msrp": 0,
      "price": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {},
  "stats": {}
}
```

Motorcycle search query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|object|false|none|none|
|listings|[[MotorcycleBaseListing](#schemamotorcyclebaselisting)]|false|none|none|
|num_found|integer|false|none|The number of listings found|
|range_facets|object|false|none|none|
|stats|object|false|none|none|

<h2 id="tocS_MotorcycleSearchStats">MotorcycleSearchStats</h2>
<!-- backwards compatibility -->
<a id="schemamotorcyclesearchstats"></a>
<a id="schema_MotorcycleSearchStats"></a>
<a id="tocSmotorcyclesearchstats"></a>
<a id="tocsmotorcyclesearchstats"></a>

```json
{
  "miles": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  },
  "price": {
    "count": 0,
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "missing": 0,
    "stddev": 0,
    "sum": 0,
    "sum_of_squares": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|miles|[StatsItem](#schemastatsitem)|false|none|none|
|price|[StatsItem](#schemastatsitem)|false|none|none|

<h2 id="tocS_NeoVIN">NeoVIN</h2>
<!-- backwards compatibility -->
<a id="schemaneovin"></a>
<a id="schema_NeoVIN"></a>
<a id="tocSneovin"></a>
<a id="tocsneovin"></a>

```json
{
  "available_options_details": {},
  "body_subtype": "string",
  "body_type": "string",
  "city_mpg": 0,
  "combined_msrp": 0,
  "created_at": 0,
  "created_at_date": "string",
  "decode_version": 0,
  "delivery_charges": 0,
  "doors": 0,
  "drivetrain": "string",
  "engine": "string",
  "exterior_color": {},
  "features": {},
  "fuel_type": "string",
  "height": 0,
  "highway_mpg": 0,
  "installed_equipment": {},
  "installed_options_details": {},
  "installed_options_msrp": 0,
  "interior_color": {},
  "length": 0,
  "listing_confidence": "string",
  "make": "string",
  "manufacturer_code": "string",
  "model": "string",
  "msrp": 0,
  "options_packages": "string",
  "package_code": "string",
  "package_description": "string",
  "seating_capacity": 0,
  "squish_vin": "string",
  "transmission": "string",
  "transmission_confidence": "string",
  "transmission_description": "string",
  "trim": "string",
  "trim_confidence": "string",
  "updated_at": 0,
  "updated_at_date": "string",
  "version": "string",
  "version_confidence": "string",
  "vin": "string",
  "weight": 0,
  "width": 0,
  "year": 0
}
```

Describes the NeoVIN specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available_options_details|object|false|none|Listing of all options and packages with detailed equipment identified that could have been installed on the vehicle|
|body_subtype|string|false|none|Body subtype (cab) of the vehicle|
|body_type|string|false|none|Body type of the vehicle|
|city_mpg|number(double)|false|none|City miles per gallon|
|combined_msrp|number(double)|false|none|Calculated combination of base MSRP with the delivery charges and the installed options MSRP|
|created_at|integer|false|none|vin first decoded at timestamp|
|created_at_date|string|false|none|vin first decoded at date|
|decode_version|integer|false|none|This will represent if previous vin decode values are updated|
|delivery_charges|number(double)|false|none|Manufacturer defined delivery charges|
|doors|integer|false|none|Number of doors on the vehicle|
|drivetrain|string|false|none|Identified drivetrain of the vehicle|
|engine|string|false|none|Base identification of the number of cylinders and configuration of the installed engine on the vehicle|
|exterior_color|object|false|none|The manufacturer defined option code and name for the exterior color of the vehicle|
|features|object|false|none|Normalized feature set of equipment identified that have been identified as installed on the vehicle, including whether that item was standard to the version of the vehicle or was added as an installed option|
|fuel_type|string|false|none|Identified Fuel type of the vehicle|
|height|number(double)|false|none|Overall height of the vehicle (in)|
|highway_mpg|number(double)|false|none|Highway miles per gallon|
|installed_equipment|object|false|none|Detailed equipment identified as installed on the vehicle, including whether that item was standard to the version of the vehicle or was added as an installed option|
|installed_options_details|object|false|none|Listing of all options and packages with detailed equipment identified that have been identified as installed on the vehicle|
|installed_options_msrp|number(double)|false|none|Calculated combination of the MSRP for the installed options and packages|
|interior_color|object|false|none|The manufacturer defined option code and name for the interior color of the vehicle|
|length|number(double)|false|none|Overall length of the vehicle (in)|
|listing_confidence|string|false|none|Identification of primary source data used for trim and installed colors and options|
|make|string|false|none|Make of the vehicle|
|manufacturer_code|string|false|none|Manufacturer code of the vehicle|
|model|string|false|none|Model of the vehicle|
|msrp|number(double)|false|none|Base MSRP as defined for the defined version of that vehicle with no options installed|
|options_packages|string|false|none|Option and package codes installed on the vehicle|
|package_code|string|false|none|Extracted manufacturer package code related to selection of the vehicle version (where available / applicable)|
|package_description|string|false|none|Extracted manufacturer package code description (where available / applicable)|
|seating_capacity|number(double)|false|none|Identified seating capacity of the vehicle|
|squish_vin|string|false|none|Vin prefix identification used in the decoding of the vehicle|
|transmission|string|false|none|Identified installed Transmission of the vehicle|
|transmission_confidence|string|false|none|Identification of confidence related to the selection of the installed transmission|
|transmission_description|string|false|none|The description of the installed transmission|
|trim|string|false|none|Trim of the vehicle|
|trim_confidence|string|false|none|Identification of confidence related to the selection of the trim|
|updated_at|integer|false|none|vin last decoded at timestamp|
|updated_at_date|string|false|none|vin last decoded at date|
|version|string|false|none|Version Name of the vehicle|
|version_confidence|string|false|none|Identification of confidence related to the selection of the vehicle version|
|vin|string|false|none|17 char long VIN of the vehicle|
|weight|number(double)|false|none|Gross vehicle weight (lbs)|
|width|number(double)|false|none|Overall width of the vehicle (in)|
|year|integer|false|none|Model Year of the vehicle|

<h2 id="tocS_NestDealer">NestDealer</h2>
<!-- backwards compatibility -->
<a id="schemanestdealer"></a>
<a id="schema_NestDealer"></a>
<a id="tocSnestdealer"></a>
<a id="tocsnestdealer"></a>

```json
{
  "city": "string",
  "country": "string",
  "county": "string",
  "dealer_type": "string",
  "dealership_group_name": "string",
  "id": 0,
  "latitude": "string",
  "longitude": "string",
  "msa_code": "string",
  "name": "string",
  "phone": "string",
  "seller_email": "string",
  "state": "string",
  "street": "string",
  "website": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City of the dealer|
|country|string|false|none|country of the dealer|
|county|string|false|none|county of the dealer|
|dealer_type|string|false|none|Type of dealer (franchise/independent)|
|dealership_group_name|string|false|none|dealership_group_name of dealer|
|id|integer|false|none|The unique id associated with the dealer in the Marketcheck database|
|latitude|string|false|none|Latutide for the dealer location|
|longitude|string|false|none|Longitude for the dealer location|
|msa_code|string|false|none|msa_code of the dealer|
|name|string|false|none|Name of the dealer|
|phone|string|false|none|Contact no of the dealer|
|seller_email|string|false|none|Contact email of the dealer|
|state|string|false|none|State of the dealer|
|street|string|false|none|Street of the dealer|
|website|string|false|none|Website of the dealer|
|zip|string|false|none|Zip of the dealer|

<h2 id="tocS_PlotPoint">PlotPoint</h2>
<!-- backwards compatibility -->
<a id="schemaplotpoint"></a>
<a id="schema_PlotPoint"></a>
<a id="tocSplotpoint"></a>
<a id="tocsplotpoint"></a>

```json
{
  "dom": 0,
  "id": "string",
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "seller_name": "string",
  "vin": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dom|number|false|none|DOM|
|id|string|false|none|Listing id|
|miles|number|false|none|Miles|
|msrp|number|false|none|Msrp|
|price|number|false|none|Price|
|seller_name|string|false|none|Seller name|
|vin|string|false|none|Vin|

<h2 id="tocS_PopularCars">PopularCars</h2>
<!-- backwards compatibility -->
<a id="schemapopularcars"></a>
<a id="schema_PopularCars"></a>
<a id="tocSpopularcars"></a>
<a id="tocspopularcars"></a>

```json
{
  "new_top50": [
    {
      "city": "string",
      "counts": "string",
      "dom_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "inventoryType": "string",
      "make": "string",
      "miles_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "model": "string",
      "price_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "state": "string"
    }
  ],
  "used_top50": [
    {
      "city": "string",
      "counts": "string",
      "dom_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "inventoryType": "string",
      "make": "string",
      "miles_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "model": "string",
      "price_stats": {
        "absolute_mean_deviation": 0,
        "iqr": 0,
        "mean": 0,
        "median": 0,
        "population_standard_deviation": 0,
        "standard_deviation": 0,
        "trimmed_mean": 0,
        "variance": 0,
        "weighted_mean": 0
      },
      "state": "string"
    }
  ]
}
```

Top 50 popular cars

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_top50|[[BasePopular](#schemabasepopular)]|false|none|Array of all new top 50 cars|
|used_top50|[[BasePopular](#schemabasepopular)]|false|none|Array of all used top 50 cars|

<h2 id="tocS_PopularityItem">PopularityItem</h2>
<!-- backwards compatibility -->
<a id="schemapopularityitem"></a>
<a id="schema_PopularityItem"></a>
<a id="tocSpopularityitem"></a>
<a id="tocspopularityitem"></a>

```json
{
  "color": "string",
  "delta_percent": 0,
  "difference": 0,
  "left": 0,
  "right": 0,
  "text": "string",
  "thumbs": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|Color depending upon left and right analysis numbers|
|delta_percent|number|false|none|Delta percent|
|difference|number|false|none|Difference depending upon left and right analysis|
|left|number|false|none|Left side rating for above description (2016 ford F-150 Lariat)|
|right|number|false|none|Right side rating for above description (All Other Cars)|
|text|string|false|none|Description for which popularity should be show eg: 2016 ford F-150 Lariat vs All Other Cars|
|thumbs|string|false|none|Thumbs up/down depending upon left and right analysis numbers|

<h2 id="tocS_PredictedSpecs">PredictedSpecs</h2>
<!-- backwards compatibility -->
<a id="schemapredictedspecs"></a>
<a id="schema_PredictedSpecs"></a>
<a id="tocSpredictedspecs"></a>
<a id="tocspredictedspecs"></a>

```json
{
  "base_exterior_color": "Black",
  "base_interior_color": "Brown",
  "carfax_1_owner": false,
  "carfax_clean_title": false,
  "city_mpg": 18,
  "cylinders": 6,
  "doors": 4,
  "drivetrain": "4WD",
  "engine_block": "V",
  "engine_size": 2.7,
  "highway_mpg": 23,
  "is_certified": false,
  "latitude": 44.71164,
  "longitude": -92.851607,
  "make": "ford",
  "miles": 28741,
  "model": "f-150",
  "transmission": "Automatic",
  "trim": "xlt",
  "year": 2018
}
```

Specs of predicted vehicle

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_exterior_color|string|false|none|Base exterior color of vehicle|
|base_interior_color|string|false|none|base interior color of vehicle|
|carfax_1_owner|boolean|false|none|Indicates whether car has had only one owner or not|
|carfax_clean_title|boolean|false|none|Indicates whether car has clean ownership records|
|city_mpg|number(double)|false|none|City mileage|
|cylinders|integer|false|none|Number of cylinders|
|doors|integer|false|none|Number of doors|
|drivetrain|string|false|none|Drivetrain of the vehicle|
|engine_block|string|false|none|Engine block of the vehicle|
|engine_size|number(double)|false|none|Engine size|
|highway_mpg|number(double)|false|none|Highway mileage|
|is_certified|boolean|false|none|Certified vehicle|
|latitude|number(double)|false|none|Latutide for the vehicle location|
|longitude|number(double)|false|none|Longitude for the vehicle location|
|make|string|false|none|make|
|miles|integer|false|none|Miles|
|model|string|false|none|model|
|transmission|string|false|none|transmission|
|trim|string|false|none|trim|
|year|integer|false|none|year|

<h2 id="tocS_PricePrediction">PricePrediction</h2>
<!-- backwards compatibility -->
<a id="schemapriceprediction"></a>
<a id="schema_PricePrediction"></a>
<a id="tocSpriceprediction"></a>
<a id="tocspriceprediction"></a>

```json
{
  "predicted_price": 37998,
  "price_range": {
    "lower_bound": 32913,
    "upper_bound": 44358
  },
  "specs": {
    "base_exterior_color": "Black",
    "base_interior_color": "Brown",
    "carfax_1_owner": false,
    "carfax_clean_title": false,
    "city_mpg": 18,
    "cylinders": 6,
    "doors": 4,
    "drivetrain": "4WD",
    "engine_block": "V",
    "engine_size": 2.7,
    "highway_mpg": 23,
    "is_certified": false,
    "latitude": 44.71164,
    "longitude": -92.851607,
    "make": "ford",
    "miles": 28741,
    "model": "f-150",
    "transmission": "Automatic",
    "trim": "xlt",
    "year": 2018
  }
}
```

Predicted price of a car

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|predicted_price|integer|false|none|Actual predicted price of a car|
|price_range|object|false|none|Price range around the predicted price, estimating the error in predicted price|
|specs|[PredictedSpecs](#schemapredictedspecs)|false|none|Specs of predicted vehicle|

<h2 id="tocS_RVBaseListing">RVBaseListing</h2>
<!-- backwards compatibility -->
<a id="schemarvbaselisting"></a>
<a id="schema_RVBaseListing"></a>
<a id="tocSrvbaselisting"></a>
<a id="tocsrvbaselisting"></a>

```json
{
  "build": {
    "area": "string",
    "class": "string",
    "engine": "string",
    "fuel_type": "string",
    "gvwr": "string",
    "length": "string",
    "made_in": "string",
    "make": "string",
    "model": "string",
    "sleeps": "string",
    "slideouts": "string",
    "transmission": "string",
    "year": 0
  },
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dist": 0,
  "dp_url": "string",
  "exterior_color": "string",
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vin": "string"
}
```

Base RV listing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[RVBuild](#schemarvbuild)|false|none|Describes the RV specification|
|dealer|[NestDealer](#schemanestdealer)|false|none|none|
|dist|number(double)|false|none|Distance of the RV's location from the specified user lcoation|
|dp_url|string|false|none|Details Page url of the specific RV|
|exterior_color|string|false|none|Exterior color of the RV|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|interior_color|string|false|none|Interior color of the RV|
|inventory_type|string|false|none|Inventory type of RV|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|media|[ListingNestMedia](#schemalistingnestmedia)|false|none|none|
|miles|integer|false|none|Odometer reading / reported miles usage for the RV|
|msrp|integer|false|none|MSRP for the RV|
|price|integer|false|none|Asking price for the RV|
|scraped_at|number(integer)|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_type|string|false|none|Seller type for the RV|
|source|string|false|none|Source domain of the listing|
|stock_no|string|false|none|Stock number of RV in dealers inventory|
|vin|string|false|none|VIN for the RV|

<h2 id="tocS_RVBuild">RVBuild</h2>
<!-- backwards compatibility -->
<a id="schemarvbuild"></a>
<a id="schema_RVBuild"></a>
<a id="tocSrvbuild"></a>
<a id="tocsrvbuild"></a>

```json
{
  "area": "string",
  "class": "string",
  "engine": "string",
  "fuel_type": "string",
  "gvwr": "string",
  "length": "string",
  "made_in": "string",
  "make": "string",
  "model": "string",
  "sleeps": "string",
  "slideouts": "string",
  "transmission": "string",
  "year": 0
}
```

Describes the RV specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|string|false|none|Area of the RV|
|class|string|false|none|Class of the RV|
|engine|string|false|none|Engine of the RV|
|fuel_type|string|false|none|Fuel type of the RV|
|gvwr|string|false|none|Gross Vehicle Weight Ratio of RV|
|length|string|false|none|Length of the RV|
|made_in|string|false|none|Made in of the RV|
|make|string|false|none|RV Make|
|model|string|false|none|RV model|
|sleeps|string|false|none|Sleeps of the RV|
|slideouts|string|false|none|Slideouts of the RV|
|transmission|string|false|none|Transmission of the RV|
|year|integer|false|none|Year of the RV|

<h2 id="tocS_RVListing">RVListing</h2>
<!-- backwards compatibility -->
<a id="schemarvlisting"></a>
<a id="schema_RVListing"></a>
<a id="tocSrvlisting"></a>
<a id="tocsrvlisting"></a>

```json
{
  "build": {
    "area": "string",
    "class": "string",
    "engine": "string",
    "fuel_type": "string",
    "gvwr": "string",
    "length": "string",
    "made_in": "string",
    "make": "string",
    "model": "string",
    "sleeps": "string",
    "slideouts": "string",
    "transmission": "string",
    "year": 0
  },
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dp_url": "string",
  "exterior_color": "string",
  "extra": {
    "dealer_added_f": [
      "string"
    ],
    "electronics_f": [
      "string"
    ],
    "exterior_f": [
      "string"
    ],
    "features": [
      "string"
    ],
    "interior_f": [
      "string"
    ],
    "options": [
      "string"
    ],
    "safety_f": [
      "string"
    ],
    "seller_comments": "string",
    "standard_f": [
      "string"
    ],
    "technical_f": [
      "string"
    ]
  },
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vin": "string"
}
```

Represents a full list of attributes available with Marketcheck for a car

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|build|[RVBuild](#schemarvbuild)|false|none|Describes the RV specification|
|dealer|[NestDealer](#schemanestdealer)|false|none|none|
|dp_url|string|false|none|Details Page url of the specific RV|
|exterior_color|string|false|none|Exterior color of the RV|
|extra|[ListingNestExtraAttributes](#schemalistingnestextraattributes)|false|none|none|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|interior_color|string|false|none|Interior color of the RV|
|inventory_type|string|false|none|Inventory type of RV|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|media|[ListingNestMedia](#schemalistingnestmedia)|false|none|none|
|miles|integer|false|none|Odometer reading / reported miles usage for the RV|
|msrp|integer|false|none|MSRP for the RV|
|price|integer|false|none|Asking price for the RV|
|scraped_at|number(integer)|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_type|string|false|none|Seller type for the RV|
|source|string|false|none|Source domain of the listing|
|stock_no|string|false|none|Stock number of RV in dealers inventory|
|vin|string|false|none|VIN for the RV|

<h2 id="tocS_RVSearchFacets">RVSearchFacets</h2>
<!-- backwards compatibility -->
<a id="schemarvsearchfacets"></a>
<a id="schema_RVSearchFacets"></a>
<a id="tocSrvsearchfacets"></a>
<a id="tocsrvsearchfacets"></a>

```json
{
  "area": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "awnings": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "city": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "class": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "dealer_id": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "exterior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "fuel_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "interior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "inventory_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "length": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "make": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "model": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "seller_name": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "sleeps": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "slideouts": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "source": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "state": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "transmission": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "year": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|[[FacetItem](#schemafacetitem)]|false|none|none|
|awnings|[[FacetItem](#schemafacetitem)]|false|none|none|
|city|[[FacetItem](#schemafacetitem)]|false|none|none|
|class|[[FacetItem](#schemafacetitem)]|false|none|none|
|dealer_id|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine|[[FacetItem](#schemafacetitem)]|false|none|none|
|exterior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|fuel_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|interior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|inventory_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|length|[[FacetItem](#schemafacetitem)]|false|none|none|
|make|[[FacetItem](#schemafacetitem)]|false|none|none|
|model|[[FacetItem](#schemafacetitem)]|false|none|none|
|seller_name|[[FacetItem](#schemafacetitem)]|false|none|none|
|sleeps|[[FacetItem](#schemafacetitem)]|false|none|none|
|slideouts|[[FacetItem](#schemafacetitem)]|false|none|none|
|source|[[FacetItem](#schemafacetitem)]|false|none|none|
|state|[[FacetItem](#schemafacetitem)]|false|none|none|
|transmission|[[FacetItem](#schemafacetitem)]|false|none|none|
|year|[[FacetItem](#schemafacetitem)]|false|none|none|

<h2 id="tocS_RVSearchResponse">RVSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemarvsearchresponse"></a>
<a id="schema_RVSearchResponse"></a>
<a id="tocSrvsearchresponse"></a>
<a id="tocsrvsearchresponse"></a>

```json
{
  "facets": {},
  "listings": [
    {
      "build": {
        "area": "string",
        "class": "string",
        "engine": "string",
        "fuel_type": "string",
        "gvwr": "string",
        "length": "string",
        "made_in": "string",
        "make": "string",
        "model": "string",
        "sleeps": "string",
        "slideouts": "string",
        "transmission": "string",
        "year": 0
      },
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dp_url": "string",
      "exterior_color": "string",
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "interior_color": "string",
      "inventory_type": "string",
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "msrp": 0,
      "price": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {},
  "stats": {}
}
```

RV search query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|object|false|none|none|
|listings|[[RVBaseListing](#schemarvbaselisting)]|false|none|none|
|num_found|integer|false|none|The number of listings found|
|range_facets|object|false|none|none|
|stats|object|false|none|none|

<h2 id="tocS_RangeFacetItem">RangeFacetItem</h2>
<!-- backwards compatibility -->
<a id="schemarangefacetitem"></a>
<a id="schema_RangeFacetItem"></a>
<a id="tocSrangefacetitem"></a>
<a id="tocsrangefacetitem"></a>

```json
{
  "after": 0,
  "before": 0,
  "between": 0,
  "counts": [
    {
      "count": 0,
      "lower_bound": 0,
      "upper_bound": 0
    }
  ],
  "end": 0,
  "gap": 0,
  "start": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|integer|false|none|Number of listings that have field value after range end|
|before|integer|false|none|Number of listings that have field value before range start|
|between|integer|false|none|Number of listings that have field value between range start and range end|
|counts|[object]|false|none|none|
|end|integer|false|none|The end of range|
|gap|integer|false|none|The range gap applied for range faceting|
|start|integer|false|none|The start of range|

<h2 id="tocS_RatingComponents">RatingComponents</h2>
<!-- backwards compatibility -->
<a id="schemaratingcomponents"></a>
<a id="schema_RatingComponents"></a>
<a id="tocSratingcomponents"></a>
<a id="tocsratingcomponents"></a>

```json
{
  "actual_rating": 0,
  "rating_condition": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_rating|number|false|none|rating of car on that condition|
|rating_condition|string|false|none|Specifices rating condition parameter|

<h2 id="tocS_ReviewComponents">ReviewComponents</h2>
<!-- backwards compatibility -->
<a id="schemareviewcomponents"></a>
<a id="schema_ReviewComponents"></a>
<a id="tocSreviewcomponents"></a>
<a id="tocsreviewcomponents"></a>

```json
{
  "actual_review": "string",
  "user_name": "string",
  "user_rating": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_review|string|false|none|review of car given by current user|
|user_name|string|false|none|Name of user who has given review|
|user_rating|number|false|none|rating for dealer given by user ranging from 1-5|

<h2 id="tocS_SafetyRating">SafetyRating</h2>
<!-- backwards compatibility -->
<a id="schemasafetyrating"></a>
<a id="schema_SafetyRating"></a>
<a id="tocSsafetyrating"></a>
<a id="tocssafetyrating"></a>

```json
{
  "driver_front_rating": 0,
  "driver_side_rating": 0,
  "overall_rating": 0,
  "passenger_front_rating": 0,
  "roll_over_rating": 0
}
```

Describes the Safety Ratings of current listing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driver_front_rating|number|false|none|Driver front rating of the Listing on scale 1-5|
|driver_side_rating|number|false|none|Driver Side rating of the Listing on scale 1-5|
|overall_rating|number|false|none|Overall rating of the Listing on scale 1-5|
|passenger_front_rating|number|false|none|Passenger front rating of the Listing on scale 1-5|
|roll_over_rating|number|false|none|Roll Over rating of the Listing on scale 1-5|

<h2 id="tocS_Sales">Sales</h2>
<!-- backwards compatibility -->
<a id="schemasales"></a>
<a id="schema_Sales"></a>
<a id="tocSsales"></a>
<a id="tocssales"></a>

```json
{
  "city": "string",
  "counts": 0,
  "cpo": 0,
  "dom_stats": {
    "absolute_mean_deviation": 0,
    "iqr": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0,
    "weighted_mean": 0
  },
  "inventory_type": "string",
  "make": "string",
  "miles_stats": {
    "absolute_mean_deviation": 0,
    "iqr": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0,
    "weighted_mean": 0
  },
  "model": "string",
  "non-cpo": 0,
  "price_stats": {
    "absolute_mean_deviation": 0,
    "iqr": 0,
    "mean": 0,
    "median": 0,
    "population_standard_deviation": 0,
    "standard_deviation": 0,
    "trimmed_mean": 0,
    "variance": 0,
    "weighted_mean": 0
  },
  "state": "string",
  "taxonomy_vin": "string",
  "trim": "string",
  "year": "string"
}
```

Sales count query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|City|
|counts|integer|false|none|Sales count|
|cpo|integer|false|none|cpo sales count|
|dom_stats|[SalesStats](#schemasalesstats)|false|none|Sales stats response|
|inventory_type|string|false|none|inventory_type|
|make|string|false|none|Make|
|miles_stats|[SalesStats](#schemasalesstats)|false|none|Sales stats response|
|model|string|false|none|model|
|non-cpo|integer|false|none|Non-cpo sales count|
|price_stats|[SalesStats](#schemasalesstats)|false|none|Sales stats response|
|state|string|false|none|State|
|taxonomy_vin|string|false|none|taxonomy_vin|
|trim|string|false|none|trim|
|year|string|false|none|year|

<h2 id="tocS_SalesStats">SalesStats</h2>
<!-- backwards compatibility -->
<a id="schemasalesstats"></a>
<a id="schema_SalesStats"></a>
<a id="tocSsalesstats"></a>
<a id="tocssalesstats"></a>

```json
{
  "absolute_mean_deviation": 0,
  "iqr": 0,
  "mean": 0,
  "median": 0,
  "population_standard_deviation": 0,
  "standard_deviation": 0,
  "trimmed_mean": 0,
  "variance": 0,
  "weighted_mean": 0
}
```

Sales stats response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absolute_mean_deviation|number|false|none|absolute_mean_deviation|
|iqr|number|false|none|iqr|
|mean|number|false|none|mean|
|median|number|false|none|median|
|population_standard_deviation|number|false|none|population_standard_deviation|
|standard_deviation|number|false|none|standard_deviation|
|trimmed_mean|number|false|none|trimmed_mean|
|variance|number|false|none|variance|
|weighted_mean|number|false|none|weighted_mean|

<h2 id="tocS_SearchAutoCompleteResponse">SearchAutoCompleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchautocompleteresponse"></a>
<a id="schema_SearchAutoCompleteResponse"></a>
<a id="tocSsearchautocompleteresponse"></a>
<a id="tocssearchautocompleteresponse"></a>

```json
{
  "terms": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

Search auto complete query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terms|[object]|false|none|none|

<h2 id="tocS_SearchResponse">SearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_SearchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_o": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim_r": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "vdp_url": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

Search query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|[CarSearchFacets](#schemacarsearchfacets)|false|none|none|
|listings|[[BaseListing](#schemabaselisting)]|false|none|none|
|num_found|integer|false|none|The number of listings found|
|range_facets|[CarSearchRangeFacets](#schemacarsearchrangefacets)|false|none|none|
|stats|[CarSearchStats](#schemacarsearchstats)|false|none|none|

<h2 id="tocS_SetClientFiltersResponse">SetClientFiltersResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetclientfiltersresponse"></a>
<a id="schema_SetClientFiltersResponse"></a>
<a id="tocSsetclientfiltersresponse"></a>
<a id="tocssetclientfiltersresponse"></a>

```json
{
  "message": "string",
  "status": 0
}
```

A client filters response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Description of operation|
|status|integer|false|none|status code of operation|

<h2 id="tocS_SpecsAutoCompleteResponse">SpecsAutoCompleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspecsautocompleteresponse"></a>
<a id="schema_SpecsAutoCompleteResponse"></a>
<a id="tocSspecsautocompleteresponse"></a>
<a id="tocsspecsautocompleteresponse"></a>

```json
{
  "terms": [
    "string"
  ]
}
```

Specs auto complete query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|terms|[string]|false|none|none|

<h2 id="tocS_StatsItem">StatsItem</h2>
<!-- backwards compatibility -->
<a id="schemastatsitem"></a>
<a id="schema_StatsItem"></a>
<a id="tocSstatsitem"></a>
<a id="tocsstatsitem"></a>

```json
{
  "count": 0,
  "max": 0,
  "mean": 0,
  "median": 0,
  "min": 0,
  "missing": 0,
  "stddev": 0,
  "sum": 0,
  "sum_of_squares": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|count|
|max|integer|false|none|Maximum value of the field|
|mean|number|false|none|Mean of the field|
|median|number|false|none|median of the field|
|min|integer|false|none|Minimum value of the field|
|missing|integer|false|none|count of listings missing particular field|
|stddev|number|false|none|stddev of the field|
|sum|integer|false|none|Summation of all values of the field|
|sum_of_squares|number|false|none|sum_of_squares of the field|

<h2 id="tocS_TrendPoint">TrendPoint</h2>
<!-- backwards compatibility -->
<a id="schematrendpoint"></a>
<a id="schema_TrendPoint"></a>
<a id="tocStrendpoint"></a>
<a id="tocstrendpoint"></a>

```json
{
  "dom": 0,
  "miles": 0,
  "msrp": 0,
  "price": 0,
  "units": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dom|number|false|none|Days on Market|
|miles|number|false|none|Miles|
|msrp|number|false|none|MSRP|
|price|number|false|none|Price|
|units|number|false|none|Units|

<h2 id="tocS_UKBaseListing">UKBaseListing</h2>
<!-- backwards compatibility -->
<a id="schemaukbaselisting"></a>
<a id="schema_UKBaseListing"></a>
<a id="tocSukbaselisting"></a>
<a id="tocsukbaselisting"></a>

```json
{
  "base_ext_color": "string",
  "base_int_color": "string",
  "build": {
    "antibrake_sys": "string",
    "body_subtype": "string",
    "body_type": "string",
    "city_miles": "string",
    "city_mpg": 0,
    "cylinders": 0,
    "doors": 0,
    "drivetrain": "string",
    "engine": "string",
    "engine_aspiration": "string",
    "engine_block": "string",
    "engine_measure": "string",
    "engine_size": 0,
    "fuel_type": "string",
    "highway_miles": "string",
    "highway_mpg": 0,
    "made_in": "string",
    "make": "string",
    "model": "string",
    "opt_seating": "string",
    "overall_height": "string",
    "overall_length": "string",
    "overall_width": "string",
    "powertrain_type": "string",
    "short_trim": "string",
    "std_seating": "string",
    "steering_type": "string",
    "tank_size": "string",
    "transmission": "string",
    "trim": "string",
    "trim_r": "string",
    "vehicle_type": "string",
    "year": 0
  },
  "car_location": {
    "city": "string",
    "county": "string",
    "latitude": "string",
    "longitude": "string",
    "seller_name": "string",
    "street": "string",
    "zip": "string"
  },
  "carfax_1_owner": true,
  "carfax_clean_title": true,
  "co2_emissions": "string",
  "data_source": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dist": 0,
  "dom": 0,
  "dom_180": 0,
  "dom_active": 0,
  "exterior_color": "string",
  "financing_options": [
    {
      "down_payment": 0,
      "down_payment_percentage": 0,
      "estimated_monthly_payment": 0,
      "loan_apr": 0,
      "loan_term": 0
    }
  ],
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "in_transit": true,
  "insurance_group": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "is_certified": 0,
  "is_translated": true,
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "leasing_options": [
    {
      "down_payment": 0,
      "estimated_monthly_payment": 0,
      "lease_term": 0
    }
  ],
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "model_code": "string",
  "msrp": 0,
  "num_owners": "string",
  "price": 0,
  "price_change_percent": 0,
  "ref_miles": "string",
  "ref_miles_dt": 0,
  "ref_price": "string",
  "ref_price_dt": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "title_type": "string",
  "uvc_id": "string",
  "vdp_url": "string",
  "vehicle_registration_mark": "string"
}
```

Minimal set of attributes describing a listing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_ext_color|string|false|none|Base exterior color of the car|
|base_int_color|string|false|none|Base interior color of the car|
|build|[Build](#schemabuild)|false|none|Describes the Car specification|
|car_location|[CarLocation](#schemacarlocation)|false|none|none|
|carfax_1_owner|boolean|false|none|Flag to indicate whether listing is carfax_1_owner|
|carfax_clean_title|boolean|false|none|Flag to indicate whether listing is carfax_clean_title|
|co2_emissions|string|false|none|CO2 emissions by car|
|data_source|string|false|none|Data source of the listing|
|dealer|[NestDealer](#schemanestdealer)|false|none|none|
|dist|number(double)|false|none|Distance of the car's location from the specified user lcoation|
|dom|integer|false|none|Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car|
|dom_180|integer|false|none|Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car|
|dom_active|integer|false|none|Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car|
|exterior_color|string|false|none|Exterior color of the car|
|financing_options|[[ListingFinance](#schemalistingfinance)]|false|none|Array of all finance offers for this listing|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|in_transit|boolean|false|none|in_transit of the listing|
|insurance_group|string|false|none|Insurance Group of car|
|interior_color|string|false|none|Interior color of the car|
|inventory_type|string|false|none|Inventory type of car|
|is_certified|integer|false|none|Certified car|
|is_translated|boolean|false|none|is_translated of the listing|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|leasing_options|[[ListingLease](#schemalistinglease)]|false|none|Array of all finance offers for this listing|
|media|[ListingNestMedia](#schemalistingnestmedia)|false|none|none|
|miles|integer|false|none|Odometer reading / reported miles usage for the car|
|model_code|string|false|none|model_code of the listing|
|msrp|integer|false|none|MSRP for the car|
|num_owners|string|false|none|Number of owners|
|price|integer|false|none|Asking price for the car|
|price_change_percent|number(double)|false|none|Percentage difference between the cars's current price and ref_price i.e. last reported price|
|ref_miles|string|false|none|Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date|
|ref_miles_dt|integer|false|none|The date at which the last miles was reported online. This is earlier to last_seen_date|
|ref_price|string|false|none|Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date|
|ref_price_dt|integer|false|none|The date at which the last price was reported online. This is earlier to last_seen_date|
|scraped_at|number(integer)|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_type|string|false|none|Seller type for the car|
|source|string|false|none|Source domain of the listing|
|stock_no|string|false|none|Stock number of car in dealers inventory|
|title_type|string|false|none|title_type of the listing|
|uvc_id|string|false|none|UVC ID of the car|
|vdp_url|string|false|none|Vehicle Details Page url of the specific car|
|vehicle_registration_mark|string|false|none| Vehicle Registration Mark of the car|

<h2 id="tocS_UKCarSearchFacets">UKCarSearchFacets</h2>
<!-- backwards compatibility -->
<a id="schemaukcarsearchfacets"></a>
<a id="schema_UKCarSearchFacets"></a>
<a id="tocSukcarsearchfacets"></a>
<a id="tocsukcarsearchfacets"></a>

```json
{
  "base_exterior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "base_interior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "body_subtype": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "body_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "car_location_city": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "car_location_county": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "car_location_seller_name": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "car_location_street": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "car_location_zip": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "car_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "carfax_1_owner": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "carfax_clean_title": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "city": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "co2_emissions": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "cylinders": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "data_source": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "dealer_id": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "dealer_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "dealership_group_name": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "doors": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "drivetrain": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine_aspiration": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine_block": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine_size": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "exterior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "fca_status": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "fuel_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "in_transit": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "insurance_group": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "interior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "make": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "mas_code": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "model": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "num_owners": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "powertrain_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "seating_capacity": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "seller_name": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "seller_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "source": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "state": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "transmission": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "trim": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "vehicle_registration_mark": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "vehicle_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "vrm": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "year": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_exterior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|base_interior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|body_subtype|[[FacetItem](#schemafacetitem)]|false|none|none|
|body_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|car_location_city|[[FacetItem](#schemafacetitem)]|false|none|none|
|car_location_county|[[FacetItem](#schemafacetitem)]|false|none|none|
|car_location_seller_name|[[FacetItem](#schemafacetitem)]|false|none|none|
|car_location_street|[[FacetItem](#schemafacetitem)]|false|none|none|
|car_location_zip|[[FacetItem](#schemafacetitem)]|false|none|none|
|car_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|carfax_1_owner|[[FacetItem](#schemafacetitem)]|false|none|none|
|carfax_clean_title|[[FacetItem](#schemafacetitem)]|false|none|none|
|city|[[FacetItem](#schemafacetitem)]|false|none|none|
|co2_emissions|[[FacetItem](#schemafacetitem)]|false|none|none|
|cylinders|[[FacetItem](#schemafacetitem)]|false|none|none|
|data_source|[[FacetItem](#schemafacetitem)]|false|none|none|
|dealer_id|[[FacetItem](#schemafacetitem)]|false|none|none|
|dealer_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|dealership_group_name|[[FacetItem](#schemafacetitem)]|false|none|none|
|doors|[[FacetItem](#schemafacetitem)]|false|none|none|
|drivetrain|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine_aspiration|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine_block|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine_size|[[FacetItem](#schemafacetitem)]|false|none|none|
|exterior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|fca_status|[[FacetItem](#schemafacetitem)]|false|none|none|
|fuel_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|in_transit|[[FacetItem](#schemafacetitem)]|false|none|none|
|insurance_group|[[FacetItem](#schemafacetitem)]|false|none|none|
|interior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|make|[[FacetItem](#schemafacetitem)]|false|none|none|
|mas_code|[[FacetItem](#schemafacetitem)]|false|none|none|
|model|[[FacetItem](#schemafacetitem)]|false|none|none|
|num_owners|[[FacetItem](#schemafacetitem)]|false|none|none|
|powertrain_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|seating_capacity|[[FacetItem](#schemafacetitem)]|false|none|none|
|seller_name|[[FacetItem](#schemafacetitem)]|false|none|none|
|seller_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|source|[[FacetItem](#schemafacetitem)]|false|none|none|
|state|[[FacetItem](#schemafacetitem)]|false|none|none|
|transmission|[[FacetItem](#schemafacetitem)]|false|none|none|
|trim|[[FacetItem](#schemafacetitem)]|false|none|none|
|vehicle_registration_mark|[[FacetItem](#schemafacetitem)]|false|none|none|
|vehicle_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|vrm|[[FacetItem](#schemafacetitem)]|false|none|none|
|year|[[FacetItem](#schemafacetitem)]|false|none|none|

<h2 id="tocS_UKRVBaseListing">UKRVBaseListing</h2>
<!-- backwards compatibility -->
<a id="schemaukrvbaselisting"></a>
<a id="schema_UKRVBaseListing"></a>
<a id="tocSukrvbaselisting"></a>
<a id="tocsukrvbaselisting"></a>

```json
{
  "availability_status": "string",
  "build": {
    "area": "string",
    "berths": "string",
    "category": "string",
    "chassis": "string",
    "drive_type": "string",
    "drivetrain": "string",
    "engine": "string",
    "engine_size": "string",
    "exterior_length": "string",
    "floorplan": "string",
    "floorplan_layout": "string",
    "fuel_type": "string",
    "gvwr": "string",
    "interior_length": "string",
    "inventory_type": "string",
    "make": "string",
    "model": "string",
    "mtplm": "string",
    "slideouts": "string",
    "steering": "string",
    "sub_category": "string",
    "transmission": "string",
    "width": "string",
    "year": 0
  },
  "currency_indicator": "string",
  "dealer": {
    "city": "string",
    "country": "string",
    "county": "string",
    "dealer_type": "string",
    "dealership_group_name": "string",
    "id": 0,
    "latitude": "string",
    "longitude": "string",
    "msa_code": "string",
    "name": "string",
    "phone": "string",
    "seller_email": "string",
    "state": "string",
    "street": "string",
    "website": "string",
    "zip": "string"
  },
  "dist": 0,
  "exterior_color": "string",
  "first_seen_at": 0,
  "first_seen_at_date": "string",
  "heading": "string",
  "id": "string",
  "interior_color": "string",
  "inventory_type": "string",
  "last_seen_at": 0,
  "last_seen_at_date": "string",
  "media": {
    "photo_links": [
      "string"
    ],
    "photo_links_cached": [
      "string"
    ]
  },
  "miles": 0,
  "miles_indicator": "string",
  "mot_expires": "string",
  "motorhome_build": "string",
  "msrp": 0,
  "origin": "string",
  "price": 0,
  "scraped_at": 0,
  "scraped_at_date": "string",
  "seller_type": "string",
  "source": "string",
  "stock_no": "string",
  "vdp_url": "string",
  "vin": "string"
}
```

Base RV listing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability_status|string|false|none|availability_status of the listing|
|build|[UKRVBuild](#schemaukrvbuild)|false|none|Describes the RV specification|
|currency_indicator|string|false|none|currency_indicator of the listing|
|dealer|[NestDealer](#schemanestdealer)|false|none|none|
|dist|number(double)|false|none|Distance of the RV's location from the specified user lcoation|
|exterior_color|string|false|none|Exterior color of the RV|
|first_seen_at|integer|false|none|Listing first seen at first scraped timestamp|
|first_seen_at_date|string|false|none|Listing first seen at first scraped date|
|heading|string|false|none|Listing title as displayed on the source website|
|id|string|false|none|Unique identifier representing a specific listing from the Marketcheck database|
|interior_color|string|false|none|Interior color of the RV|
|inventory_type|string|false|none|Inventory type of RV|
|last_seen_at|integer|false|none|Listing last seen at (most recent) timestamp|
|last_seen_at_date|string|false|none|Listing last seen at (most recent) date|
|media|[ListingNestMedia](#schemalistingnestmedia)|false|none|none|
|miles|integer|false|none|Odometer reading / reported miles usage for the RV|
|miles_indicator|string|false|none|miles_indicator of the listing|
|mot_expires|string|false|none|mot_expires of the listing|
|motorhome_build|string|false|none|motorhome_build of the listing|
|msrp|integer|false|none|MSRP for the RV|
|origin|string|false|none|origin of the listing|
|price|integer|false|none|Asking price for the RV|
|scraped_at|number(integer)|false|none|Listing last seen at date timestamp|
|scraped_at_date|string|false|none|Listing last seen at date|
|seller_type|string|false|none|Seller type for the RV|
|source|string|false|none|Source domain of the listing|
|stock_no|string|false|none|Stock number of RV in dealers inventory|
|vdp_url|string|false|none|Details Page url of the specific RV|
|vin|string|false|none|VIN for the RV|

<h2 id="tocS_UKRVBuild">UKRVBuild</h2>
<!-- backwards compatibility -->
<a id="schemaukrvbuild"></a>
<a id="schema_UKRVBuild"></a>
<a id="tocSukrvbuild"></a>
<a id="tocsukrvbuild"></a>

```json
{
  "area": "string",
  "berths": "string",
  "category": "string",
  "chassis": "string",
  "drive_type": "string",
  "drivetrain": "string",
  "engine": "string",
  "engine_size": "string",
  "exterior_length": "string",
  "floorplan": "string",
  "floorplan_layout": "string",
  "fuel_type": "string",
  "gvwr": "string",
  "interior_length": "string",
  "inventory_type": "string",
  "make": "string",
  "model": "string",
  "mtplm": "string",
  "slideouts": "string",
  "steering": "string",
  "sub_category": "string",
  "transmission": "string",
  "width": "string",
  "year": 0
}
```

Describes the RV specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|string|false|none|Area of the RV|
|berths|string|false|none|berths of RV|
|category|string|false|none|category of the RV|
|chassis|string|false|none|chassis of RV|
|drive_type|string|false|none|drive_type of RV|
|drivetrain|string|false|none|Drivetrain of the RV|
|engine|string|false|none|Engine of the RV|
|engine_size|string|false|none|engine_size of RV|
|exterior_length|string|false|none|exterior_length of RV|
|floorplan|string|false|none|floorplan of RV|
|floorplan_layout|string|false|none|floorplan_layout of RV|
|fuel_type|string|false|none|Fuel type of the RV|
|gvwr|string|false|none|Gross Vehicle Weight Ratio of RV|
|interior_length|string|false|none|interior_length of RV|
|inventory_type|string|false|none|Inventory type of the RV|
|make|string|false|none|RV Make|
|model|string|false|none|RV model|
|mtplm|string|false|none|mtplm of RV|
|slideouts|string|false|none|Slideouts of the RV|
|steering|string|false|none|steering of RV|
|sub_category|string|false|none|sub_category of the RV|
|transmission|string|false|none|Transmission of the RV|
|width|string|false|none|width of RV|
|year|integer|false|none|Year of the RV|

<h2 id="tocS_UKRVSearchFacets">UKRVSearchFacets</h2>
<!-- backwards compatibility -->
<a id="schemaukrvsearchfacets"></a>
<a id="schema_UKRVSearchFacets"></a>
<a id="tocSukrvsearchfacets"></a>
<a id="tocsukrvsearchfacets"></a>

```json
{
  "berths": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "category": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "chassis": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "city": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "dealer_id": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "drive_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "drivetrain": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "engine": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "exterior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "fuel_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "interior_color": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "inventory_type": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "make": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "model": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "postal_code": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "seller_name": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "source": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "state": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "steering": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "sub_category": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "transmission": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "year": [
    {
      "count": 0,
      "item": "string"
    }
  ],
  "zip": [
    {
      "count": 0,
      "item": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|berths|[[FacetItem](#schemafacetitem)]|false|none|none|
|category|[[FacetItem](#schemafacetitem)]|false|none|none|
|chassis|[[FacetItem](#schemafacetitem)]|false|none|none|
|city|[[FacetItem](#schemafacetitem)]|false|none|none|
|dealer_id|[[FacetItem](#schemafacetitem)]|false|none|none|
|drive_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|drivetrain|[[FacetItem](#schemafacetitem)]|false|none|none|
|engine|[[FacetItem](#schemafacetitem)]|false|none|none|
|exterior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|fuel_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|interior_color|[[FacetItem](#schemafacetitem)]|false|none|none|
|inventory_type|[[FacetItem](#schemafacetitem)]|false|none|none|
|make|[[FacetItem](#schemafacetitem)]|false|none|none|
|model|[[FacetItem](#schemafacetitem)]|false|none|none|
|postal_code|[[FacetItem](#schemafacetitem)]|false|none|none|
|seller_name|[[FacetItem](#schemafacetitem)]|false|none|none|
|source|[[FacetItem](#schemafacetitem)]|false|none|none|
|state|[[FacetItem](#schemafacetitem)]|false|none|none|
|steering|[[FacetItem](#schemafacetitem)]|false|none|none|
|sub_category|[[FacetItem](#schemafacetitem)]|false|none|none|
|transmission|[[FacetItem](#schemafacetitem)]|false|none|none|
|year|[[FacetItem](#schemafacetitem)]|false|none|none|
|zip|[[FacetItem](#schemafacetitem)]|false|none|none|

<h2 id="tocS_UKRVSearchRangeFacets">UKRVSearchRangeFacets</h2>
<!-- backwards compatibility -->
<a id="schemaukrvsearchrangefacets"></a>
<a id="schema_UKRVSearchRangeFacets"></a>
<a id="tocSukrvsearchrangefacets"></a>
<a id="tocsukrvsearchrangefacets"></a>

```json
{
  "exterior_length": {},
  "interior_length": {},
  "miles": {},
  "price": {},
  "width": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exterior_length|object|false|none|none|
|interior_length|object|false|none|none|
|miles|object|false|none|none|
|price|object|false|none|none|
|width|object|false|none|none|

<h2 id="tocS_UKRVSearchResponse">UKRVSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaukrvsearchresponse"></a>
<a id="schema_UKRVSearchResponse"></a>
<a id="tocSukrvsearchresponse"></a>
<a id="tocsukrvsearchresponse"></a>

```json
{
  "facets": {},
  "listings": [
    {
      "availability_status": "string",
      "build": {
        "area": "string",
        "berths": "string",
        "category": "string",
        "chassis": "string",
        "drive_type": "string",
        "drivetrain": "string",
        "engine": "string",
        "engine_size": "string",
        "exterior_length": "string",
        "floorplan": "string",
        "floorplan_layout": "string",
        "fuel_type": "string",
        "gvwr": "string",
        "interior_length": "string",
        "inventory_type": "string",
        "make": "string",
        "model": "string",
        "mtplm": "string",
        "slideouts": "string",
        "steering": "string",
        "sub_category": "string",
        "transmission": "string",
        "width": "string",
        "year": 0
      },
      "currency_indicator": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "exterior_color": "string",
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "interior_color": "string",
      "inventory_type": "string",
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "miles_indicator": "string",
      "mot_expires": "string",
      "motorhome_build": "string",
      "msrp": 0,
      "origin": "string",
      "price": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "vdp_url": "string",
      "vin": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {},
  "stats": {}
}
```

RV search query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|object|false|none|none|
|listings|[[UKRVBaseListing](#schemaukrvbaselisting)]|false|none|none|
|num_found|integer|false|none|The number of listings found|
|range_facets|object|false|none|none|
|stats|object|false|none|none|

<h2 id="tocS_UKSearchResponse">UKSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemauksearchresponse"></a>
<a id="schema_UKSearchResponse"></a>
<a id="tocSuksearchresponse"></a>
<a id="tocsuksearchresponse"></a>

```json
{
  "facets": {
    "base_exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "base_interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_subtype": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "body_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_county": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_street": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_location_zip": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "car_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_1_owner": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "carfax_clean_title": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "city": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "co2_emissions": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "cylinders": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "data_source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_id": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealer_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "dealership_group_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "doors": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "drivetrain": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_aspiration": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_block": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "engine_size": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "exterior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fca_status": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "fuel_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "in_transit": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "insurance_group": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "interior_color": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "make": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "mas_code": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "model": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "num_owners": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "powertrain_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seating_capacity": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_name": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "seller_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "source": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "state": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "transmission": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "trim": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_registration_mark": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vehicle_type": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "vrm": [
      {
        "count": 0,
        "item": "string"
      }
    ],
    "year": [
      {
        "count": 0,
        "item": "string"
      }
    ]
  },
  "listings": [
    {
      "base_ext_color": "string",
      "base_int_color": "string",
      "build": {
        "antibrake_sys": "string",
        "body_subtype": "string",
        "body_type": "string",
        "city_miles": "string",
        "city_mpg": 0,
        "cylinders": 0,
        "doors": 0,
        "drivetrain": "string",
        "engine": "string",
        "engine_aspiration": "string",
        "engine_block": "string",
        "engine_measure": "string",
        "engine_size": 0,
        "fuel_type": "string",
        "highway_miles": "string",
        "highway_mpg": 0,
        "made_in": "string",
        "make": "string",
        "model": "string",
        "opt_seating": "string",
        "overall_height": "string",
        "overall_length": "string",
        "overall_width": "string",
        "powertrain_type": "string",
        "short_trim": "string",
        "std_seating": "string",
        "steering_type": "string",
        "tank_size": "string",
        "transmission": "string",
        "trim": "string",
        "trim_r": "string",
        "vehicle_type": "string",
        "year": 0
      },
      "car_location": {
        "city": "string",
        "county": "string",
        "latitude": "string",
        "longitude": "string",
        "seller_name": "string",
        "street": "string",
        "zip": "string"
      },
      "carfax_1_owner": true,
      "carfax_clean_title": true,
      "co2_emissions": "string",
      "data_source": "string",
      "dealer": {
        "city": "string",
        "country": "string",
        "county": "string",
        "dealer_type": "string",
        "dealership_group_name": "string",
        "id": 0,
        "latitude": "string",
        "longitude": "string",
        "msa_code": "string",
        "name": "string",
        "phone": "string",
        "seller_email": "string",
        "state": "string",
        "street": "string",
        "website": "string",
        "zip": "string"
      },
      "dist": 0,
      "dom": 0,
      "dom_180": 0,
      "dom_active": 0,
      "exterior_color": "string",
      "financing_options": [
        {
          "down_payment": 0,
          "down_payment_percentage": 0,
          "estimated_monthly_payment": 0,
          "loan_apr": 0,
          "loan_term": 0
        }
      ],
      "first_seen_at": 0,
      "first_seen_at_date": "string",
      "heading": "string",
      "id": "string",
      "in_transit": true,
      "insurance_group": "string",
      "interior_color": "string",
      "inventory_type": "string",
      "is_certified": 0,
      "is_translated": true,
      "last_seen_at": 0,
      "last_seen_at_date": "string",
      "leasing_options": [
        {
          "down_payment": 0,
          "estimated_monthly_payment": 0,
          "lease_term": 0
        }
      ],
      "media": {
        "photo_links": [
          "string"
        ],
        "photo_links_cached": [
          "string"
        ]
      },
      "miles": 0,
      "model_code": "string",
      "msrp": 0,
      "num_owners": "string",
      "price": 0,
      "price_change_percent": 0,
      "ref_miles": "string",
      "ref_miles_dt": 0,
      "ref_price": "string",
      "ref_price_dt": 0,
      "scraped_at": 0,
      "scraped_at_date": "string",
      "seller_type": "string",
      "source": "string",
      "stock_no": "string",
      "title_type": "string",
      "uvc_id": "string",
      "vdp_url": "string",
      "vehicle_registration_mark": "string"
    }
  ],
  "num_found": 0,
  "range_facets": {
    "dom": {},
    "dom_180": {},
    "dom_active": {},
    "finance_down_payment": {},
    "finance_emp": {},
    "finance_loan_apr": {},
    "finance_loan_term": {},
    "lease_down_payment": {},
    "lease_emp": {},
    "lease_term": {},
    "miles": {},
    "msrp": {},
    "price": {}
  },
  "stats": {
    "dom": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_180": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "dom_active": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_down_payment_per": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_apr": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "finance_loan_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_down_payment": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_emp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "lease_term": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "miles": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "msrp": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    },
    "price": {
      "count": 0,
      "max": 0,
      "mean": 0,
      "median": 0,
      "min": 0,
      "missing": 0,
      "stddev": 0,
      "sum": 0,
      "sum_of_squares": 0
    }
  }
}
```

Search query response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|[UKCarSearchFacets](#schemaukcarsearchfacets)|false|none|none|
|listings|[[UKBaseListing](#schemaukbaselisting)]|false|none|none|
|num_found|integer|false|none|The number of listings found|
|range_facets|[CarSearchRangeFacets](#schemacarsearchrangefacets)|false|none|none|
|stats|[CarSearchStats](#schemacarsearchstats)|false|none|none|

<h2 id="tocS_VinReport">VinReport</h2>
<!-- backwards compatibility -->
<a id="schemavinreport"></a>
<a id="schema_VinReport"></a>
<a id="tocSvinreport"></a>
<a id="tocsvinreport"></a>

```json
{
  "icon": "string",
  "some_text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icon|string|false|none|icon url|
|some_text|string|false|none|Some descriptional text|
