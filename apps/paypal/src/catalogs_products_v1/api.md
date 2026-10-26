<h1 id="catalog-products">Catalog Products v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Merchants can use the Catalog Products API to create products, which are goods and services.

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/api/catalog-products/v1/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/subscriptions|Create and manage products|

<h1 id="catalog-products-products">products</h1>

Use `/products` resource to create and manage products.

## List products

<a id="opIdproducts.list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/catalogs/products \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/catalogs/products`

Lists products.

<h3 id="list-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer|false|The number of items to return in the response.|
|page|query|integer|false|A non-zero integer which is the start index of the entire list of items that are returned in the response. So, the combination of `page=1` and `page_size=20` returns the first 20 items. The combination of `page=2` and `page_size=20` returns the next 20 items.|
|total_required|query|boolean|false|Indicates whether to show the total items and total pages in the response.|

> Example responses

> 200 Response

```json
{
  "products": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "create_time": "stringstringstringst",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "total_items": 0,
  "total_pages": 0,
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_PARAMETER_VALUE",
      "description": "The value of a field is invalid."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "You do not have permission to access or perform operations on this resource."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

> default Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="list-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists products with details.|[product_collection](#schemaproduct_collection)|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="list-products-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|You do not have permission to access or perform operations on this resource.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Create product

<a id="opIdproducts.create"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/catalogs/products \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Video Streaming Service",
    "description": "Video streaming service",
    "type": "SERVICE",
    "category": "SOFTWARE",
    "image_url": "https://example.com/streaming.jpg",
    "home_url": "https://example.com/home"
  }'
```

`POST /v1/catalogs/products`

Creates a product.

> Body parameter

```json
{
  "name": "Video Streaming Service",
  "description": "Video streaming service",
  "type": "SERVICE",
  "category": "SOFTWARE",
  "image_url": "https://example.com/streaming.jpg",
  "home_url": "https://example.com/home"
}
```

<h3 id="create-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Prefer|header|string|false|The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>|
|PayPal-Request-Id|header|string|false|The server stores keys for 72 hours.|
|body|body|[product_request_POST](#schemaproduct_request_post)|false|none|
|» id|body|string|false|The ID of the product. You can specify the SKU for the product. If you omit the ID, the system generates it. System-generated IDs have the `PROD-` prefix.|
|» name|body|string|true|The product name.|
|» description|body|string|false|The product description.|
|» type|body|string|true|The product type. Indicates whether the product is physical or digital goods, or a service.|
|» category|body|[product_category](#schemaproduct_category)|false|The product category.|
|» image_url|body|string(uri)|false|The image URL for the product.|
|» home_url|body|string(uri)|false|The home page URL for the product.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|PHYSICAL|
|» type|DIGITAL|
|» type|SERVICE|
|» category|AC_REFRIGERATION_REPAIR|
|» category|ACADEMIC_SOFTWARE|
|» category|ACCESSORIES|
|» category|ACCOUNTING|
|» category|ADULT|
|» category|ADVERTISING|
|» category|AFFILIATED_AUTO_RENTAL|
|» category|AGENCIES|
|» category|AGGREGATORS|
|» category|AGRICULTURAL_COOPERATIVE_FOR_MAIL_ORDER|
|» category|AIR_CARRIERS_AIRLINES|
|» category|AIRLINES|
|» category|AIRPORTS_FLYING_FIELDS|
|» category|ALCOHOLIC_BEVERAGES|
|» category|AMUSEMENT_PARKS_CARNIVALS|
|» category|ANIMATION|
|» category|ANTIQUES|
|» category|APPLIANCES|
|» category|AQUARIAMS_SEAQUARIUMS_DOLPHINARIUMS|
|» category|ARCHITECTURAL_ENGINEERING_AND_SURVEYING_SERVICES|
|» category|ART_AND_CRAFT_SUPPLIES|
|» category|ART_DEALERS_AND_GALLERIES|
|» category|ARTIFACTS_GRAVE_RELATED_AND_NATIVE_AMERICAN_CRAFTS|
|» category|ARTS_AND_CRAFTS|
|» category|ARTS_CRAFTS_AND_COLLECTIBLES|
|» category|AUDIO_BOOKS|
|» category|AUTO_ASSOCIATIONS_CLUBS|
|» category|AUTO_DEALER_USED_ONLY|
|» category|AUTO_RENTALS|
|» category|AUTO_SERVICE|
|» category|AUTOMATED_FUEL_DISPENSERS|
|» category|AUTOMOBILE_ASSOCIATIONS|
|» category|AUTOMOTIVE|
|» category|AUTOMOTIVE_REPAIR_SHOPS_NON_DEALER|
|» category|AUTOMOTIVE_TOP_AND_BODY_SHOPS|
|» category|AVIATION|
|» category|BABIES_CLOTHING_AND_SUPPLIES|
|» category|BABY|
|» category|BANDS_ORCHESTRAS_ENTERTAINERS|
|» category|BARBIES|
|» category|BATH_AND_BODY|
|» category|BATTERIES|
|» category|BEAN_BABIES|
|» category|BEAUTY|
|» category|BEAUTY_AND_FRAGRANCES|
|» category|BED_AND_BATH|
|» category|BICYCLE_SHOPS_SALES_AND_SERVICE|
|» category|BICYCLES_AND_ACCESSORIES|
|» category|BILLIARD_POOL_ESTABLISHMENTS|
|» category|BOAT_DEALERS|
|» category|BOAT_RENTALS_AND_LEASING|
|» category|BOATING_SAILING_AND_ACCESSORIES|
|» category|BOOKS|
|» category|BOOKS_AND_MAGAZINES|
|» category|BOOKS_MANUSCRIPTS|
|» category|BOOKS_PERIODICALS_AND_NEWSPAPERS|
|» category|BOWLING_ALLEYS|
|» category|BULLETIN_BOARD|
|» category|BUS_LINE|
|» category|BUS_LINES_CHARTERS_TOUR_BUSES|
|» category|BUSINESS|
|» category|BUSINESS_AND_SECRETARIAL_SCHOOLS|
|» category|BUYING_AND_SHOPPING_SERVICES_AND_CLUBS|
|» category|CABLE_SATELLITE_AND_OTHER_PAY_TELEVISION_AND_RADIO_SERVICES|
|» category|CABLE_SATELLITE_AND_OTHER_PAY_TV_AND_RADIO|
|» category|CAMERA_AND_PHOTOGRAPHIC_SUPPLIES|
|» category|CAMERAS|
|» category|CAMERAS_AND_PHOTOGRAPHY|
|» category|CAMPER_RECREATIONAL_AND_UTILITY_TRAILER_DEALERS|
|» category|CAMPING_AND_OUTDOORS|
|» category|CAMPING_AND_SURVIVAL|
|» category|CAR_AND_TRUCK_DEALERS|
|» category|CAR_AND_TRUCK_DEALERS_USED_ONLY|
|» category|CAR_AUDIO_AND_ELECTRONICS|
|» category|CAR_RENTAL_AGENCY|
|» category|CATALOG_MERCHANT|
|» category|CATALOG_RETAIL_MERCHANT|
|» category|CATERING_SERVICES|
|» category|CHARITY|
|» category|CHECK_CASHIER|
|» category|CHILD_CARE_SERVICES|
|» category|CHILDREN_BOOKS|
|» category|CHIROPODISTS_PODIATRISTS|
|» category|CHIROPRACTORS|
|» category|CIGAR_STORES_AND_STANDS|
|» category|CIVIC_SOCIAL_FRATERNAL_ASSOCIATIONS|
|» category|CIVIL_SOCIAL_FRAT_ASSOCIATIONS|
|» category|CLOTHING|
|» category|CLOTHING_ACCESSORIES_AND_SHOES|
|» category|CLOTHING_RENTAL|
|» category|COFFEE_AND_TEA|
|» category|COIN_OPERATED_BANKS_AND_CASINOS|
|» category|COLLECTIBLES|
|» category|COLLECTION_AGENCY|
|» category|COLLEGES_AND_UNIVERSITIES|
|» category|COMMERCIAL_EQUIPMENT|
|» category|COMMERCIAL_FOOTWEAR|
|» category|COMMERCIAL_PHOTOGRAPHY|
|» category|COMMERCIAL_PHOTOGRAPHY_ART_AND_GRAPHICS|
|» category|COMMERCIAL_SPORTS_PROFESSIONA|
|» category|COMMODITIES_AND_FUTURES_EXCHANGE|
|» category|COMPUTER_AND_DATA_PROCESSING_SERVICES|
|» category|COMPUTER_HARDWARE_AND_SOFTWARE|
|» category|COMPUTER_MAINTENANCE_REPAIR_AND_SERVICES_NOT_ELSEWHERE_CLAS|
|» category|CONSTRUCTION|
|» category|CONSTRUCTION_MATERIALS_NOT_ELSEWHERE_CLASSIFIED|
|» category|CONSULTING_SERVICES|
|» category|CONSUMER_CREDIT_REPORTING_AGENCIES|
|» category|CONVALESCENT_HOMES|
|» category|COSMETIC_STORES|
|» category|COUNSELING_SERVICES_DEBT_MARRIAGE_PERSONAL|
|» category|COUNTERFEIT_CURRENCY_AND_STAMPS|
|» category|COUNTERFEIT_ITEMS|
|» category|COUNTRY_CLUBS|
|» category|COURIER_SERVICES|
|» category|COURIER_SERVICES_AIR_AND_GROUND_AND_FREIGHT_FORWARDERS|
|» category|COURT_COSTS_ALIMNY_CHILD_SUPT|
|» category|COURT_COSTS_INCLUDING_ALIMONY_AND_CHILD_SUPPORT_COURTS_OF_LAW|
|» category|CREDIT_CARDS|
|» category|CREDIT_UNION|
|» category|CULTURE_AND_RELIGION|
|» category|DAIRY_PRODUCTS_STORES|
|» category|DANCE_HALLS_STUDIOS_AND_SCHOOLS|
|» category|DECORATIVE|
|» category|DENTAL|
|» category|DENTISTS_AND_ORTHODONTISTS|
|» category|DEPARTMENT_STORES|
|» category|DESKTOP_PCS|
|» category|DEVICES|
|» category|DIECAST_TOYS_VEHICLES|
|» category|DIGITAL_GAMES|
|» category|DIGITAL_MEDIA_BOOKS_MOVIES_MUSIC|
|» category|DIRECT_MARKETING|
|» category|DIRECT_MARKETING_CATALOG_MERCHANT|
|» category|DIRECT_MARKETING_INBOUND_TELE|
|» category|DIRECT_MARKETING_OUTBOUND_TELE|
|» category|DIRECT_MARKETING_SUBSCRIPTION|
|» category|DISCOUNT_STORES|
|» category|DOOR_TO_DOOR_SALES|
|» category|DRAPERY_WINDOW_COVERING_AND_UPHOLSTERY|
|» category|DRINKING_PLACES|
|» category|DRUGSTORE|
|» category|DURABLE_GOODS|
|» category|ECOMMERCE_DEVELOPMENT|
|» category|ECOMMERCE_SERVICES|
|» category|EDUCATIONAL_AND_TEXTBOOKS|
|» category|ELECTRIC_RAZOR_STORES|
|» category|ELECTRICAL_AND_SMALL_APPLIANCE_REPAIR|
|» category|ELECTRICAL_CONTRACTORS|
|» category|ELECTRICAL_PARTS_AND_EQUIPMENT|
|» category|ELECTRONIC_CASH|
|» category|ELEMENTARY_AND_SECONDARY_SCHOOLS|
|» category|EMPLOYMENT|
|» category|ENTERTAINERS|
|» category|ENTERTAINMENT_AND_MEDIA|
|» category|EQUIP_TOOL_FURNITURE_AND_APPLIANCE_RENTAL_AND_LEASING|
|» category|ESCROW|
|» category|EVENT_AND_WEDDING_PLANNING|
|» category|EXERCISE_AND_FITNESS|
|» category|EXERCISE_EQUIPMENT|
|» category|EXTERMINATING_AND_DISINFECTING_SERVICES|
|» category|FABRICS_AND_SEWING|
|» category|FAMILY_CLOTHING_STORES|
|» category|FASHION_JEWELRY|
|» category|FAST_FOOD_RESTAURANTS|
|» category|FICTION_AND_NONFICTION|
|» category|FINANCE_COMPANY|
|» category|FINANCIAL_AND_INVESTMENT_ADVICE|
|» category|FINANCIAL_INSTITUTIONS_MERCHANDISE_AND_SERVICES|
|» category|FIREARM_ACCESSORIES|
|» category|FIREARMS_WEAPONS_AND_KNIVES|
|» category|FIREPLACE_AND_FIREPLACE_SCREENS|
|» category|FIREWORKS|
|» category|FISHING|
|» category|FLORISTS|
|» category|FLOWERS|
|» category|FOOD_DRINK_AND_NUTRITION|
|» category|FOOD_PRODUCTS|
|» category|FOOD_RETAIL_AND_SERVICE|
|» category|FRAGRANCES_AND_PERFUMES|
|» category|FREEZER_AND_LOCKER_MEAT_PROVISIONERS|
|» category|FUEL_DEALERS_FUEL_OIL_WOOD_AND_COAL|
|» category|FUEL_DEALERS_NON_AUTOMOTIVE|
|» category|FUNERAL_SERVICES_AND_CREMATORIES|
|» category|FURNISHING_AND_DECORATING|
|» category|FURNITURE|
|» category|FURRIERS_AND_FUR_SHOPS|
|» category|GADGETS_AND_OTHER_ELECTRONICS|
|» category|GAMBLING|
|» category|GAME_SOFTWARE|
|» category|GAMES|
|» category|GARDEN_SUPPLIES|
|» category|GENERAL|
|» category|GENERAL_CONTRACTORS|
|» category|GENERAL_GOVERNMENT|
|» category|GENERAL_SOFTWARE|
|» category|GENERAL_TELECOM|
|» category|GIFTS_AND_FLOWERS|
|» category|GLASS_PAINT_AND_WALLPAPER_STORES|
|» category|GLASSWARE_CRYSTAL_STORES|
|» category|GOVERNMENT|
|» category|GOVERNMENT_IDS_AND_LICENSES|
|» category|GOVERNMENT_LICENSED_ON_LINE_CASINOS_ON_LINE_GAMBLING|
|» category|GOVERNMENT_OWNED_LOTTERIES|
|» category|GOVERNMENT_SERVICES|
|» category|GRAPHIC_AND_COMMERCIAL_DESIGN|
|» category|GREETING_CARDS|
|» category|GROCERY_STORES_AND_SUPERMARKETS|
|» category|HARDWARE_AND_TOOLS|
|» category|HARDWARE_EQUIPMENT_AND_SUPPLIES|
|» category|HAZARDOUS_RESTRICTED_AND_PERISHABLE_ITEMS|
|» category|HEALTH_AND_BEAUTY_SPAS|
|» category|HEALTH_AND_NUTRITION|
|» category|HEALTH_AND_PERSONAL_CARE|
|» category|HEARING_AIDS_SALES_AND_SUPPLIES|
|» category|HEATING_PLUMBING_AC|
|» category|HIGH_RISK_MERCHANT|
|» category|HIRING_SERVICES|
|» category|HOBBIES_TOYS_AND_GAMES|
|» category|HOME_AND_GARDEN|
|» category|HOME_AUDIO|
|» category|HOME_DECOR|
|» category|HOME_ELECTRONICS|
|» category|HOSPITALS|
|» category|HOTELS_MOTELS_INNS_RESORTS|
|» category|HOUSEWARES|
|» category|HUMAN_PARTS_AND_REMAINS|
|» category|HUMOROUS_GIFTS_AND_NOVELTIES|
|» category|HUNTING|
|» category|IDS_LICENSES_AND_PASSPORTS|
|» category|ILLEGAL_DRUGS_AND_PARAPHERNALIA|
|» category|INDUSTRIAL|
|» category|INDUSTRIAL_AND_MANUFACTURING_SUPPLIES|
|» category|INSURANCE_AUTO_AND_HOME|
|» category|INSURANCE_DIRECT|
|» category|INSURANCE_LIFE_AND_ANNUITY|
|» category|INSURANCE_SALES_UNDERWRITING|
|» category|INSURANCE_UNDERWRITING_PREMIUMS|
|» category|INTERNET_AND_NETWORK_SERVICES|
|» category|INTRA_COMPANY_PURCHASES|
|» category|LABORATORIES_DENTAL_MEDICAL|
|» category|LANDSCAPING|
|» category|LANDSCAPING_AND_HORTICULTURAL_SERVICES|
|» category|LAUNDRY_CLEANING_SERVICES|
|» category|LEGAL|
|» category|LEGAL_SERVICES_AND_ATTORNEYS|
|» category|LOCAL_DELIVERY_SERVICE|
|» category|LOCKSMITH|
|» category|LODGING_AND_ACCOMMODATIONS|
|» category|LOTTERY_AND_CONTESTS|
|» category|LUGGAGE_AND_LEATHER_GOODS|
|» category|LUMBER_AND_BUILDING_MATERIALS|
|» category|MAGAZINES|
|» category|MAINTENANCE_AND_REPAIR_SERVICES|
|» category|MAKEUP_AND_COSMETICS|
|» category|MANUAL_CASH_DISBURSEMENTS|
|» category|MASSAGE_PARLORS|
|» category|MEDICAL|
|» category|MEDICAL_AND_PHARMACEUTICAL|
|» category|MEDICAL_CARE|
|» category|MEDICAL_EQUIPMENT_AND_SUPPLIES|
|» category|MEDICAL_SERVICES|
|» category|MEETING_PLANNERS|
|» category|MEMBERSHIP_CLUBS_AND_ORGANIZATIONS|
|» category|MEMBERSHIP_COUNTRY_CLUBS_GOLF|
|» category|MEMORABILIA|
|» category|MEN_AND_BOY_CLOTHING_AND_ACCESSORY_STORES|
|» category|MEN_CLOTHING|
|» category|MERCHANDISE|
|» category|METAPHYSICAL|
|» category|MILITARIA|
|» category|MILITARY_AND_CIVIL_SERVICE_UNIFORMS|
|» category|MISC._AUTOMOTIVE_AIRCRAFT_AND_FARM_EQUIPMENT_DEALERS|
|» category|MISC._GENERAL_MERCHANDISE|
|» category|MISCELLANEOUS_GENERAL_SERVICES|
|» category|MISCELLANEOUS_REPAIR_SHOPS_AND_RELATED_SERVICES|
|» category|MODEL_KITS|
|» category|MONEY_TRANSFER_MEMBER_FINANCIAL_INSTITUTION|
|» category|MONEY_TRANSFER_MERCHANT|
|» category|MOTION_PICTURE_THEATERS|
|» category|MOTOR_FREIGHT_CARRIERS_AND_TRUCKING|
|» category|MOTOR_HOME_AND_RECREATIONAL_VEHICLE_RENTAL|
|» category|MOTOR_HOMES_DEALERS|
|» category|MOTOR_VEHICLE_SUPPLIES_AND_NEW_PARTS|
|» category|MOTORCYCLE_DEALERS|
|» category|MOTORCYCLES|
|» category|MOVIE|
|» category|MOVIE_TICKETS|
|» category|MOVING_AND_STORAGE|
|» category|MULTI_LEVEL_MARKETING|
|» category|MUSIC_CDS_CASSETTES_AND_ALBUMS|
|» category|MUSIC_STORE_INSTRUMENTS_AND_SHEET_MUSIC|
|» category|NETWORKING|
|» category|NEW_AGE|
|» category|NEW_PARTS_AND_SUPPLIES_MOTOR_VEHICLE|
|» category|NEWS_DEALERS_AND_NEWSTANDS|
|» category|NON_DURABLE_GOODS|
|» category|NON_FICTION|
|» category|NON_PROFIT_POLITICAL_AND_RELIGION|
|» category|NONPROFIT|
|» category|NOVELTIES|
|» category|OEM_SOFTWARE|
|» category|OFFICE_SUPPLIES_AND_EQUIPMENT|
|» category|ONLINE_DATING|
|» category|ONLINE_GAMING|
|» category|ONLINE_GAMING_CURRENCY|
|» category|ONLINE_SERVICES|
|» category|OOUTBOUND_TELEMARKETING_MERCH|
|» category|OPHTHALMOLOGISTS_OPTOMETRIST|
|» category|OPTICIANS_AND_DISPENSING|
|» category|ORTHOPEDIC_GOODS_PROSTHETICS|
|» category|OSTEOPATHS|
|» category|OTHER|
|» category|PACKAGE_TOUR_OPERATORS|
|» category|PAINTBALL|
|» category|PAINTS_VARNISHES_AND_SUPPLIES|
|» category|PARKING_LOTS_AND_GARAGES|
|» category|PARTS_AND_ACCESSORIES|
|» category|PAWN_SHOPS|
|» category|PAYCHECK_LENDER_OR_CASH_ADVANCE|
|» category|PERIPHERALS|
|» category|PERSONALIZED_GIFTS|
|» category|PET_SHOPS_PET_FOOD_AND_SUPPLIES|
|» category|PETROLEUM_AND_PETROLEUM_PRODUCTS|
|» category|PETS_AND_ANIMALS|
|» category|PHOTOFINISHING_LABORATORIES_PHOTO_DEVELOPING|
|» category|PHOTOGRAPHIC_STUDIOS_PORTRAITS|
|» category|PHOTOGRAPHY|
|» category|PHYSICAL_GOOD|
|» category|PICTURE_VIDEO_PRODUCTION|
|» category|PIECE_GOODS_NOTIONS_AND_OTHER_DRY_GOODS|
|» category|PLANTS_AND_SEEDS|
|» category|PLUMBING_AND_HEATING_EQUIPMENTS_AND_SUPPLIES|
|» category|POLICE_RELATED_ITEMS|
|» category|POLITICAL_ORGANIZATIONS|
|» category|POSTAL_SERVICES_GOVERNMENT_ONLY|
|» category|POSTERS|
|» category|PREPAID_AND_STORED_VALUE_CARDS|
|» category|PRESCRIPTION_DRUGS|
|» category|PROMOTIONAL_ITEMS|
|» category|PUBLIC_WAREHOUSING_AND_STORAGE|
|» category|PUBLISHING_AND_PRINTING|
|» category|PUBLISHING_SERVICES|
|» category|RADAR_DECTORS|
|» category|RADIO_TELEVISION_AND_STEREO_REPAIR|
|» category|REAL_ESTATE|
|» category|REAL_ESTATE_AGENT|
|» category|REAL_ESTATE_AGENTS_AND_MANAGERS_RENTALS|
|» category|RELIGION_AND_SPIRITUALITY_FOR_PROFIT|
|» category|RELIGIOUS|
|» category|RELIGIOUS_ORGANIZATIONS|
|» category|REMITTANCE|
|» category|RENTAL_PROPERTY_MANAGEMENT|
|» category|RESIDENTIAL|
|» category|RETAIL|
|» category|RETAIL_FINE_JEWELRY_AND_WATCHES|
|» category|REUPHOLSTERY_AND_FURNITURE_REPAIR|
|» category|RINGS|
|» category|ROOFING_SIDING_SHEET_METAL|
|» category|RUGS_AND_CARPETS|
|» category|SCHOOLS_AND_COLLEGES|
|» category|SCIENCE_FICTION|
|» category|SCRAPBOOKING|
|» category|SCULPTURES|
|» category|SECURITIES_BROKERS_AND_DEALERS|
|» category|SECURITY_AND_SURVEILLANCE|
|» category|SECURITY_AND_SURVEILLANCE_EQUIPMENT|
|» category|SECURITY_BROKERS_AND_DEALERS|
|» category|SEMINARS|
|» category|SERVICE_STATIONS|
|» category|SERVICES|
|» category|SEWING_NEEDLEWORK_FABRIC_AND_PIECE_GOODS_STORES|
|» category|SHIPPING_AND_PACKING|
|» category|SHOE_REPAIR_HAT_CLEANING|
|» category|SHOE_STORES|
|» category|SHOES|
|» category|SNOWMOBILE_DEALERS|
|» category|SOFTWARE|
|» category|SPECIALTY_AND_MISC._FOOD_STORES|
|» category|SPECIALTY_CLEANING_POLISHING_AND_SANITATION_PREPARATIONS|
|» category|SPECIALTY_OR_RARE_PETS|
|» category|SPORT_GAMES_AND_TOYS|
|» category|SPORTING_AND_RECREATIONAL_CAMPS|
|» category|SPORTING_GOODS|
|» category|SPORTS_AND_OUTDOORS|
|» category|SPORTS_AND_RECREATION|
|» category|STAMP_AND_COIN|
|» category|STATIONARY_PRINTING_AND_WRITING_PAPER|
|» category|STENOGRAPHIC_AND_SECRETARIAL_SUPPORT_SERVICES|
|» category|STOCKS_BONDS_SECURITIES_AND_RELATED_CERTIFICATES|
|» category|STORED_VALUE_CARDS|
|» category|SUPPLIES|
|» category|SUPPLIES_AND_TOYS|
|» category|SURVEILLANCE_EQUIPMENT|
|» category|SWIMMING_POOLS_AND_SPAS|
|» category|SWIMMING_POOLS_SALES_SUPPLIES_SERVICES|
|» category|TAILORS_AND_ALTERATIONS|
|» category|TAX_PAYMENTS|
|» category|TAX_PAYMENTS_GOVERNMENT_AGENCIES|
|» category|TAXICABS_AND_LIMOUSINES|
|» category|TELECOMMUNICATION_SERVICES|
|» category|TELEPHONE_CARDS|
|» category|TELEPHONE_EQUIPMENT|
|» category|TELEPHONE_SERVICES|
|» category|THEATER|
|» category|TIRE_RETREADING_AND_REPAIR|
|» category|TOLL_OR_BRIDGE_FEES|
|» category|TOOLS_AND_EQUIPMENT|
|» category|TOURIST_ATTRACTIONS_AND_EXHIBITS|
|» category|TOWING_SERVICE|
|» category|TOYS_AND_GAMES|
|» category|TRADE_AND_VOCATIONAL_SCHOOLS|
|» category|TRADEMARK_INFRINGEMENT|
|» category|TRAILER_PARKS_AND_CAMPGROUNDS|
|» category|TRAINING_SERVICES|
|» category|TRANSPORTATION_SERVICES|
|» category|TRAVEL|
|» category|TRUCK_AND_UTILITY_TRAILER_RENTALS|
|» category|TRUCK_STOP|
|» category|TYPESETTING_PLATE_MAKING_AND_RELATED_SERVICES|
|» category|USED_MERCHANDISE_AND_SECONDHAND_STORES|
|» category|USED_PARTS_MOTOR_VEHICLE|
|» category|UTILITIES|
|» category|UTILITIES_ELECTRIC_GAS_WATER_SANITARY|
|» category|VARIETY_STORES|
|» category|VEHICLE_SALES|
|» category|VEHICLE_SERVICE_AND_ACCESSORIES|
|» category|VIDEO_EQUIPMENT|
|» category|VIDEO_GAME_ARCADES_ESTABLISH|
|» category|VIDEO_GAMES_AND_SYSTEMS|
|» category|VIDEO_TAPE_RENTAL_STORES|
|» category|VINTAGE_AND_COLLECTIBLE_VEHICLES|
|» category|VINTAGE_AND_COLLECTIBLES|
|» category|VITAMINS_AND_SUPPLEMENTS|
|» category|VOCATIONAL_AND_TRADE_SCHOOLS|
|» category|WATCH_CLOCK_AND_JEWELRY_REPAIR|
|» category|WEB_HOSTING_AND_DESIGN|
|» category|WELDING_REPAIR|
|» category|WHOLESALE_CLUBS|
|» category|WHOLESALE_FLORIST_SUPPLIERS|
|» category|WHOLESALE_PRESCRIPTION_DRUGS|
|» category|WILDLIFE_PRODUCTS|
|» category|WIRE_TRANSFER|
|» category|WIRE_TRANSFER_AND_MONEY_ORDER|
|» category|WOMEN_ACCESSORY_SPECIALITY|
|» category|WOMEN_CLOTHING|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "type": "PHYSICAL",
  "category": "AC_REFRIGERATION_REPAIR",
  "image_url": "http://example.com",
  "home_url": "http://example.com",
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "type": "PHYSICAL",
  "category": "AC_REFRIGERATION_REPAIR",
  "image_url": "http://example.com",
  "home_url": "http://example.com",
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_PARAMETER_SYNTAX",
      "description": "Input identifier must not use system prefix(PROD-)."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "You do not have permission to access or perform operations on this resource."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

> default Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="create-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows product details.|[product](#schemaproduct)|
|201|Created|A successful request returns the HTTP `201 Created` status code and a JSON response body that shows product details.|[product](#schemaproduct)|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="create-product-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Input identifier must not use system prefix(PROD-).|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|The value of a field does not conform to the expected format.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|A required field is missing.|
|» issue|INVALID_STRING_MIN_LENGTH|
|» description|The value of a field is too short.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|The value of a field is too long.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|DUPLICATE_RESOURCE_IDENTIFIER|
|» description|Identifier must be unique.|
|» issue|COUNTRY_NOT_SUPPORTED|
|» description|This merchant country is not currently supported.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Show product details

<a id="opIdproducts.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/catalogs/products/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/catalogs/products/{product_id}`

Shows details for a product, by ID.

<h3 id="show-product-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|path|string|true|The product ID.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "type": "PHYSICAL",
  "category": "AC_REFRIGERATION_REPAIR",
  "image_url": "http://example.com",
  "home_url": "http://example.com",
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "You do not have permission to access or perform operations on this resource."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 404 Response

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "message": "The specified resource does not exist.",
  "details": [
    {
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

> default Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="show-product-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows product details.|[product](#schemaproduct)|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="show-product-details-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Update product

<a id="opIdproducts.patch"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/catalogs/products/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "op": "replace",
      "path": "/description",
      "value": "Premium video streaming service"
    }
  ]'
```

`PATCH /v1/catalogs/products/{product_id}`

Updates a product, by ID. You can patch these attributes and objects:<table><thead><tr><th>Attribute or object</th><th>Operations</th></tr></thead><tbody><tr><td><code>description</code></td><td>add, replace, remove</td></tr><tr><td><code>category</code></td><td>add, replace, remove</td></tr><tr><td><code>image_url</code></td><td>add, replace, remove</td></tr><tr><td><code>home_url</code></td><td>add, replace, remove</td></tr></tbody></table>

> Body parameter

```json
[
  {
    "op": "replace",
    "path": "/description",
    "value": "Premium video streaming service"
  }
]
```

<h3 id="update-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|path|string|true|The product ID.|
|body|body|[patch_request](#schemapatch_request)|false|none|

> Example responses

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "MISSING_REQUIRED_PARAMETER",
      "description": "A required field is missing."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "You do not have permission to access or perform operations on this resource."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 404 Response

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "message": "The specified resource does not exist.",
  "details": [
    {
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

> default Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="update-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="update-product-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|A required field is missing.|
|» issue|UNSUPPORTED_PATCH_OPERATION|
|» description|The specified patch operation not supported for this field.|
|» issue|INVALID_PATCH_PATH|
|» description|The specified field cannot be patched.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|The value of a field does not conform to the expected format.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|DUPLICATE_RESOURCE_IDENTIFIER|
|» description|Identifier must be unique.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

# Schemas

<h2 id="tocS_400">400</h2>
<!-- backwards compatibility -->
<a id="schema400"></a>
<a id="schema_400"></a>
<a id="tocS400"></a>
<a id="tocs400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_PARAMETER_VALUE",
      "description": "The value of a field is invalid."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_401">401</h2>
<!-- backwards compatibility -->
<a id="schema401"></a>
<a id="schema_401"></a>
<a id="tocS401"></a>
<a id="tocs401"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_403">403</h2>
<!-- backwards compatibility -->
<a id="schema403"></a>
<a id="schema_403"></a>
<a id="tocS403"></a>
<a id="tocs403"></a>

```json
{
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "You do not have permission to access or perform operations on this resource."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_404">404</h2>
<!-- backwards compatibility -->
<a id="schema404"></a>
<a id="schema_404"></a>
<a id="tocS404"></a>
<a id="tocs404"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_422">422</h2>
<!-- backwards compatibility -->
<a id="schema422"></a>
<a id="schema_422"></a>
<a id="tocS422"></a>
<a id="tocs422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_date_time">date_time</h2>
<!-- backwards compatibility -->
<a id="schemadate_time"></a>
<a id="schema_date_time"></a>
<a id="tocSdate_time"></a>
<a id="tocsdate_time"></a>

```json
"stringstringstringst"
```

The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>

<h2 id="tocS_error_400">error_400</h2>
<!-- backwards compatibility -->
<a id="schemaerror_400"></a>
<a id="schema_error_400"></a>
<a id="tocSerror_400"></a>
<a id="tocserror_400"></a>

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Request is not well-formed, syntactically incorrect, or violates schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|

<h2 id="tocS_error_401">error_401</h2>
<!-- backwards compatibility -->
<a id="schemaerror_401"></a>
<a id="schema_error_401"></a>
<a id="tocSerror_401"></a>
<a id="tocserror_401"></a>

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Authentication failed due to missing Authorization header, or invalid authentication credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|

<h2 id="tocS_error_403">error_403</h2>
<!-- backwards compatibility -->
<a id="schemaerror_403"></a>
<a id="schema_error_403"></a>
<a id="tocSerror_403"></a>
<a id="tocserror_403"></a>

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The client is not authorized to access this resource, although it may have valid credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|

<h2 id="tocS_error_404">error_404</h2>
<!-- backwards compatibility -->
<a id="schemaerror_404"></a>
<a id="schema_error_404"></a>
<a id="tocSerror_404"></a>
<a id="tocserror_404"></a>

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "message": "The specified resource does not exist.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|

<h2 id="tocS_error_409">error_409</h2>
<!-- backwards compatibility -->
<a id="schemaerror_409"></a>
<a id="schema_error_409"></a>
<a id="tocSerror_409"></a>
<a id="tocserror_409"></a>

```json
{
  "name": "RESOURCE_CONFLICT",
  "message": "The server has detected a conflict while processing this request.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has detected a conflict while processing this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_CONFLICT|
|message|The server has detected a conflict while processing this request.|

<h2 id="tocS_error_415">error_415</h2>
<!-- backwards compatibility -->
<a id="schemaerror_415"></a>
<a id="schema_error_415"></a>
<a id="tocSerror_415"></a>
<a id="tocserror_415"></a>

```json
{
  "name": "UNSUPPORTED_MEDIA_TYPE",
  "message": "The server does not support the request payload's media type.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server does not support the request payload's media type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNSUPPORTED_MEDIA_TYPE|
|message|The server does not support the request payload's media type.|

<h2 id="tocS_error_422">error_422</h2>
<!-- backwards compatibility -->
<a id="schemaerror_422"></a>
<a id="schema_error_422"></a>
<a id="tocSerror_422"></a>
<a id="tocserror_422"></a>

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|

<h2 id="tocS_error_500">error_500</h2>
<!-- backwards compatibility -->
<a id="schemaerror_500"></a>
<a id="schema_error_500"></a>
<a id="tocSerror_500"></a>
<a id="tocserror_500"></a>

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INTERNAL_SERVER_ERROR|
|message|An internal server error occurred.|

<h2 id="tocS_error_503">error_503</h2>
<!-- backwards compatibility -->
<a id="schemaerror_503"></a>
<a id="schema_error_503"></a>
<a id="tocSerror_503"></a>
<a id="tocserror_503"></a>

```json
{
  "name": "SERVICE_UNAVAILABLE",
  "message": "Service Unavailable.",
  "debug_id": "90957fca61718",
  "information_link": "https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE"
}
```

The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|SERVICE_UNAVAILABLE|
|message|Service Unavailable.|

<h2 id="tocS_error_default">error_default</h2>
<!-- backwards compatibility -->
<a id="schemaerror_default"></a>
<a id="schema_error_default"></a>
<a id="tocSerror_default"></a>
<a id="tocserror_default"></a>

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The default error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_400](#schemaerror_400)|false|none|Request is not well-formed, syntactically incorrect, or violates schema.|
|*oneOf*|[error_401](#schemaerror_401)|false|none|Authentication failed due to missing Authorization header, or invalid authentication credentials.|
|*oneOf*|[error_403](#schemaerror_403)|false|none|The client is not authorized to access this resource, although it may have valid credentials. |
|*oneOf*|[error_404](#schemaerror_404)|false|none|The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.|
|*oneOf*|[error_409](#schemaerror_409)|false|none|The server has detected a conflict while processing this request.|
|*oneOf*|[error_415](#schemaerror_415)|false|none|The server does not support the request payload's media type.|
|*oneOf*|[error_422](#schemaerror_422)|false|none|The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.|
|*oneOf*|[error_500](#schemaerror_500)|false|none|This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.|
|*oneOf*|[error_503](#schemaerror_503)|false|none|The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.|

<h2 id="tocS_error_details">error_details</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details"></a>
<a id="schema_error_details"></a>
<a id="tocSerror_details"></a>
<a id="tocserror_details"></a>

```json
{
  "field": "string",
  "value": "string",
  "location": "body",
  "issue": "string",
  "description": "string"
}
```

The error details. Required for client-side `4XX` errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.|
|value|string|false|none|The value of the field that caused the error.|
|location|[error_location](#schemaerror_location)|false|none|The location of the field that caused the error. Value is `body`, `path`, or `query`.|
|issue|string|true|none|The unique, fine-grained application-level error code.|
|description|string|false|none|The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.|

#### Enumerated Values

|Property|Value|
|---|---|
|location|body|
|location|path|
|location|query|

<h2 id="tocS_error_link_description">error_link_description</h2>
<!-- backwards compatibility -->
<a id="schemaerror_link_description"></a>
<a id="schema_error_link_description"></a>
<a id="tocSerror_link_description"></a>
<a id="tocserror_link_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|PATCH|

<h2 id="tocS_error_location">error_location</h2>
<!-- backwards compatibility -->
<a id="schemaerror_location"></a>
<a id="schema_error_location"></a>
<a id="tocSerror_location"></a>
<a id="tocserror_location"></a>

```json
"body"
```

The location of the field that caused the error. Value is `body`, `path`, or `query`.

<h2 id="tocS_link_description">link_description</h2>
<!-- backwards compatibility -->
<a id="schemalink_description"></a>
<a id="schema_link_description"></a>
<a id="tocSlink_description"></a>
<a id="tocslink_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|HEAD|
|method|CONNECT|
|method|OPTIONS|
|method|PATCH|

<h2 id="tocS_link_description_list">link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemalink_description_list"></a>
<a id="schema_link_description_list"></a>
<a id="tocSlink_description_list"></a>
<a id="tocslink_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).

<h2 id="tocS_patch">patch</h2>
<!-- backwards compatibility -->
<a id="schemapatch"></a>
<a id="schema_patch"></a>
<a id="tocSpatch"></a>
<a id="tocspatch"></a>

```json
{
  "op": "add",
  "path": "string",
  "value": 0,
  "from": "string"
}
```

The JSON patch object to apply partial updates to resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|op|string|true|none|The operation.|
|path|string|false|none|The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location at which to complete the operation.|
|value|number \| integer \| string \| boolean \| null \| array \| object|false|none|The value to apply. The <code>remove</code> operation does not require a value.|
|from|string|false|none|The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location from which to move the value. Required for the <code>move</code> operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|op|add|
|op|remove|
|op|replace|
|op|move|
|op|copy|
|op|test|

<h2 id="tocS_patch_request">patch_request</h2>
<!-- backwards compatibility -->
<a id="schemapatch_request"></a>
<a id="schema_patch_request"></a>
<a id="tocSpatch_request"></a>
<a id="tocspatch_request"></a>

```json
[
  {
    "op": "add",
    "path": "string",
    "value": 0,
    "from": "string"
  }
]
```

An array of JSON patch objects to apply partial updates to resources.

<h2 id="tocS_product">product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "type": "PHYSICAL",
  "category": "AC_REFRIGERATION_REPAIR",
  "image_url": "http://example.com",
  "home_url": "http://example.com",
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The product details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the product.|
|name|string|false|none|The product name.|
|description|string|false|none|The product description.|
|type|string|false|none|The product type. Indicates whether the product is physical or digital goods, or a service.|
|category|[product_category](#schemaproduct_category)|false|none|The product category.|
|image_url|string(uri)|false|none|The image URL for the product.|
|home_url|string(uri)|false|none|The home page URL for the product.|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when the product was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|update_time|[date_time](#schemadate_time)|false|none|The date and time when the product was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PHYSICAL|
|type|DIGITAL|
|type|SERVICE|
|category|AC_REFRIGERATION_REPAIR|
|category|ACADEMIC_SOFTWARE|
|category|ACCESSORIES|
|category|ACCOUNTING|
|category|ADULT|
|category|ADVERTISING|
|category|AFFILIATED_AUTO_RENTAL|
|category|AGENCIES|
|category|AGGREGATORS|
|category|AGRICULTURAL_COOPERATIVE_FOR_MAIL_ORDER|
|category|AIR_CARRIERS_AIRLINES|
|category|AIRLINES|
|category|AIRPORTS_FLYING_FIELDS|
|category|ALCOHOLIC_BEVERAGES|
|category|AMUSEMENT_PARKS_CARNIVALS|
|category|ANIMATION|
|category|ANTIQUES|
|category|APPLIANCES|
|category|AQUARIAMS_SEAQUARIUMS_DOLPHINARIUMS|
|category|ARCHITECTURAL_ENGINEERING_AND_SURVEYING_SERVICES|
|category|ART_AND_CRAFT_SUPPLIES|
|category|ART_DEALERS_AND_GALLERIES|
|category|ARTIFACTS_GRAVE_RELATED_AND_NATIVE_AMERICAN_CRAFTS|
|category|ARTS_AND_CRAFTS|
|category|ARTS_CRAFTS_AND_COLLECTIBLES|
|category|AUDIO_BOOKS|
|category|AUTO_ASSOCIATIONS_CLUBS|
|category|AUTO_DEALER_USED_ONLY|
|category|AUTO_RENTALS|
|category|AUTO_SERVICE|
|category|AUTOMATED_FUEL_DISPENSERS|
|category|AUTOMOBILE_ASSOCIATIONS|
|category|AUTOMOTIVE|
|category|AUTOMOTIVE_REPAIR_SHOPS_NON_DEALER|
|category|AUTOMOTIVE_TOP_AND_BODY_SHOPS|
|category|AVIATION|
|category|BABIES_CLOTHING_AND_SUPPLIES|
|category|BABY|
|category|BANDS_ORCHESTRAS_ENTERTAINERS|
|category|BARBIES|
|category|BATH_AND_BODY|
|category|BATTERIES|
|category|BEAN_BABIES|
|category|BEAUTY|
|category|BEAUTY_AND_FRAGRANCES|
|category|BED_AND_BATH|
|category|BICYCLE_SHOPS_SALES_AND_SERVICE|
|category|BICYCLES_AND_ACCESSORIES|
|category|BILLIARD_POOL_ESTABLISHMENTS|
|category|BOAT_DEALERS|
|category|BOAT_RENTALS_AND_LEASING|
|category|BOATING_SAILING_AND_ACCESSORIES|
|category|BOOKS|
|category|BOOKS_AND_MAGAZINES|
|category|BOOKS_MANUSCRIPTS|
|category|BOOKS_PERIODICALS_AND_NEWSPAPERS|
|category|BOWLING_ALLEYS|
|category|BULLETIN_BOARD|
|category|BUS_LINE|
|category|BUS_LINES_CHARTERS_TOUR_BUSES|
|category|BUSINESS|
|category|BUSINESS_AND_SECRETARIAL_SCHOOLS|
|category|BUYING_AND_SHOPPING_SERVICES_AND_CLUBS|
|category|CABLE_SATELLITE_AND_OTHER_PAY_TELEVISION_AND_RADIO_SERVICES|
|category|CABLE_SATELLITE_AND_OTHER_PAY_TV_AND_RADIO|
|category|CAMERA_AND_PHOTOGRAPHIC_SUPPLIES|
|category|CAMERAS|
|category|CAMERAS_AND_PHOTOGRAPHY|
|category|CAMPER_RECREATIONAL_AND_UTILITY_TRAILER_DEALERS|
|category|CAMPING_AND_OUTDOORS|
|category|CAMPING_AND_SURVIVAL|
|category|CAR_AND_TRUCK_DEALERS|
|category|CAR_AND_TRUCK_DEALERS_USED_ONLY|
|category|CAR_AUDIO_AND_ELECTRONICS|
|category|CAR_RENTAL_AGENCY|
|category|CATALOG_MERCHANT|
|category|CATALOG_RETAIL_MERCHANT|
|category|CATERING_SERVICES|
|category|CHARITY|
|category|CHECK_CASHIER|
|category|CHILD_CARE_SERVICES|
|category|CHILDREN_BOOKS|
|category|CHIROPODISTS_PODIATRISTS|
|category|CHIROPRACTORS|
|category|CIGAR_STORES_AND_STANDS|
|category|CIVIC_SOCIAL_FRATERNAL_ASSOCIATIONS|
|category|CIVIL_SOCIAL_FRAT_ASSOCIATIONS|
|category|CLOTHING|
|category|CLOTHING_ACCESSORIES_AND_SHOES|
|category|CLOTHING_RENTAL|
|category|COFFEE_AND_TEA|
|category|COIN_OPERATED_BANKS_AND_CASINOS|
|category|COLLECTIBLES|
|category|COLLECTION_AGENCY|
|category|COLLEGES_AND_UNIVERSITIES|
|category|COMMERCIAL_EQUIPMENT|
|category|COMMERCIAL_FOOTWEAR|
|category|COMMERCIAL_PHOTOGRAPHY|
|category|COMMERCIAL_PHOTOGRAPHY_ART_AND_GRAPHICS|
|category|COMMERCIAL_SPORTS_PROFESSIONA|
|category|COMMODITIES_AND_FUTURES_EXCHANGE|
|category|COMPUTER_AND_DATA_PROCESSING_SERVICES|
|category|COMPUTER_HARDWARE_AND_SOFTWARE|
|category|COMPUTER_MAINTENANCE_REPAIR_AND_SERVICES_NOT_ELSEWHERE_CLAS|
|category|CONSTRUCTION|
|category|CONSTRUCTION_MATERIALS_NOT_ELSEWHERE_CLASSIFIED|
|category|CONSULTING_SERVICES|
|category|CONSUMER_CREDIT_REPORTING_AGENCIES|
|category|CONVALESCENT_HOMES|
|category|COSMETIC_STORES|
|category|COUNSELING_SERVICES_DEBT_MARRIAGE_PERSONAL|
|category|COUNTERFEIT_CURRENCY_AND_STAMPS|
|category|COUNTERFEIT_ITEMS|
|category|COUNTRY_CLUBS|
|category|COURIER_SERVICES|
|category|COURIER_SERVICES_AIR_AND_GROUND_AND_FREIGHT_FORWARDERS|
|category|COURT_COSTS_ALIMNY_CHILD_SUPT|
|category|COURT_COSTS_INCLUDING_ALIMONY_AND_CHILD_SUPPORT_COURTS_OF_LAW|
|category|CREDIT_CARDS|
|category|CREDIT_UNION|
|category|CULTURE_AND_RELIGION|
|category|DAIRY_PRODUCTS_STORES|
|category|DANCE_HALLS_STUDIOS_AND_SCHOOLS|
|category|DECORATIVE|
|category|DENTAL|
|category|DENTISTS_AND_ORTHODONTISTS|
|category|DEPARTMENT_STORES|
|category|DESKTOP_PCS|
|category|DEVICES|
|category|DIECAST_TOYS_VEHICLES|
|category|DIGITAL_GAMES|
|category|DIGITAL_MEDIA_BOOKS_MOVIES_MUSIC|
|category|DIRECT_MARKETING|
|category|DIRECT_MARKETING_CATALOG_MERCHANT|
|category|DIRECT_MARKETING_INBOUND_TELE|
|category|DIRECT_MARKETING_OUTBOUND_TELE|
|category|DIRECT_MARKETING_SUBSCRIPTION|
|category|DISCOUNT_STORES|
|category|DOOR_TO_DOOR_SALES|
|category|DRAPERY_WINDOW_COVERING_AND_UPHOLSTERY|
|category|DRINKING_PLACES|
|category|DRUGSTORE|
|category|DURABLE_GOODS|
|category|ECOMMERCE_DEVELOPMENT|
|category|ECOMMERCE_SERVICES|
|category|EDUCATIONAL_AND_TEXTBOOKS|
|category|ELECTRIC_RAZOR_STORES|
|category|ELECTRICAL_AND_SMALL_APPLIANCE_REPAIR|
|category|ELECTRICAL_CONTRACTORS|
|category|ELECTRICAL_PARTS_AND_EQUIPMENT|
|category|ELECTRONIC_CASH|
|category|ELEMENTARY_AND_SECONDARY_SCHOOLS|
|category|EMPLOYMENT|
|category|ENTERTAINERS|
|category|ENTERTAINMENT_AND_MEDIA|
|category|EQUIP_TOOL_FURNITURE_AND_APPLIANCE_RENTAL_AND_LEASING|
|category|ESCROW|
|category|EVENT_AND_WEDDING_PLANNING|
|category|EXERCISE_AND_FITNESS|
|category|EXERCISE_EQUIPMENT|
|category|EXTERMINATING_AND_DISINFECTING_SERVICES|
|category|FABRICS_AND_SEWING|
|category|FAMILY_CLOTHING_STORES|
|category|FASHION_JEWELRY|
|category|FAST_FOOD_RESTAURANTS|
|category|FICTION_AND_NONFICTION|
|category|FINANCE_COMPANY|
|category|FINANCIAL_AND_INVESTMENT_ADVICE|
|category|FINANCIAL_INSTITUTIONS_MERCHANDISE_AND_SERVICES|
|category|FIREARM_ACCESSORIES|
|category|FIREARMS_WEAPONS_AND_KNIVES|
|category|FIREPLACE_AND_FIREPLACE_SCREENS|
|category|FIREWORKS|
|category|FISHING|
|category|FLORISTS|
|category|FLOWERS|
|category|FOOD_DRINK_AND_NUTRITION|
|category|FOOD_PRODUCTS|
|category|FOOD_RETAIL_AND_SERVICE|
|category|FRAGRANCES_AND_PERFUMES|
|category|FREEZER_AND_LOCKER_MEAT_PROVISIONERS|
|category|FUEL_DEALERS_FUEL_OIL_WOOD_AND_COAL|
|category|FUEL_DEALERS_NON_AUTOMOTIVE|
|category|FUNERAL_SERVICES_AND_CREMATORIES|
|category|FURNISHING_AND_DECORATING|
|category|FURNITURE|
|category|FURRIERS_AND_FUR_SHOPS|
|category|GADGETS_AND_OTHER_ELECTRONICS|
|category|GAMBLING|
|category|GAME_SOFTWARE|
|category|GAMES|
|category|GARDEN_SUPPLIES|
|category|GENERAL|
|category|GENERAL_CONTRACTORS|
|category|GENERAL_GOVERNMENT|
|category|GENERAL_SOFTWARE|
|category|GENERAL_TELECOM|
|category|GIFTS_AND_FLOWERS|
|category|GLASS_PAINT_AND_WALLPAPER_STORES|
|category|GLASSWARE_CRYSTAL_STORES|
|category|GOVERNMENT|
|category|GOVERNMENT_IDS_AND_LICENSES|
|category|GOVERNMENT_LICENSED_ON_LINE_CASINOS_ON_LINE_GAMBLING|
|category|GOVERNMENT_OWNED_LOTTERIES|
|category|GOVERNMENT_SERVICES|
|category|GRAPHIC_AND_COMMERCIAL_DESIGN|
|category|GREETING_CARDS|
|category|GROCERY_STORES_AND_SUPERMARKETS|
|category|HARDWARE_AND_TOOLS|
|category|HARDWARE_EQUIPMENT_AND_SUPPLIES|
|category|HAZARDOUS_RESTRICTED_AND_PERISHABLE_ITEMS|
|category|HEALTH_AND_BEAUTY_SPAS|
|category|HEALTH_AND_NUTRITION|
|category|HEALTH_AND_PERSONAL_CARE|
|category|HEARING_AIDS_SALES_AND_SUPPLIES|
|category|HEATING_PLUMBING_AC|
|category|HIGH_RISK_MERCHANT|
|category|HIRING_SERVICES|
|category|HOBBIES_TOYS_AND_GAMES|
|category|HOME_AND_GARDEN|
|category|HOME_AUDIO|
|category|HOME_DECOR|
|category|HOME_ELECTRONICS|
|category|HOSPITALS|
|category|HOTELS_MOTELS_INNS_RESORTS|
|category|HOUSEWARES|
|category|HUMAN_PARTS_AND_REMAINS|
|category|HUMOROUS_GIFTS_AND_NOVELTIES|
|category|HUNTING|
|category|IDS_LICENSES_AND_PASSPORTS|
|category|ILLEGAL_DRUGS_AND_PARAPHERNALIA|
|category|INDUSTRIAL|
|category|INDUSTRIAL_AND_MANUFACTURING_SUPPLIES|
|category|INSURANCE_AUTO_AND_HOME|
|category|INSURANCE_DIRECT|
|category|INSURANCE_LIFE_AND_ANNUITY|
|category|INSURANCE_SALES_UNDERWRITING|
|category|INSURANCE_UNDERWRITING_PREMIUMS|
|category|INTERNET_AND_NETWORK_SERVICES|
|category|INTRA_COMPANY_PURCHASES|
|category|LABORATORIES_DENTAL_MEDICAL|
|category|LANDSCAPING|
|category|LANDSCAPING_AND_HORTICULTURAL_SERVICES|
|category|LAUNDRY_CLEANING_SERVICES|
|category|LEGAL|
|category|LEGAL_SERVICES_AND_ATTORNEYS|
|category|LOCAL_DELIVERY_SERVICE|
|category|LOCKSMITH|
|category|LODGING_AND_ACCOMMODATIONS|
|category|LOTTERY_AND_CONTESTS|
|category|LUGGAGE_AND_LEATHER_GOODS|
|category|LUMBER_AND_BUILDING_MATERIALS|
|category|MAGAZINES|
|category|MAINTENANCE_AND_REPAIR_SERVICES|
|category|MAKEUP_AND_COSMETICS|
|category|MANUAL_CASH_DISBURSEMENTS|
|category|MASSAGE_PARLORS|
|category|MEDICAL|
|category|MEDICAL_AND_PHARMACEUTICAL|
|category|MEDICAL_CARE|
|category|MEDICAL_EQUIPMENT_AND_SUPPLIES|
|category|MEDICAL_SERVICES|
|category|MEETING_PLANNERS|
|category|MEMBERSHIP_CLUBS_AND_ORGANIZATIONS|
|category|MEMBERSHIP_COUNTRY_CLUBS_GOLF|
|category|MEMORABILIA|
|category|MEN_AND_BOY_CLOTHING_AND_ACCESSORY_STORES|
|category|MEN_CLOTHING|
|category|MERCHANDISE|
|category|METAPHYSICAL|
|category|MILITARIA|
|category|MILITARY_AND_CIVIL_SERVICE_UNIFORMS|
|category|MISC._AUTOMOTIVE_AIRCRAFT_AND_FARM_EQUIPMENT_DEALERS|
|category|MISC._GENERAL_MERCHANDISE|
|category|MISCELLANEOUS_GENERAL_SERVICES|
|category|MISCELLANEOUS_REPAIR_SHOPS_AND_RELATED_SERVICES|
|category|MODEL_KITS|
|category|MONEY_TRANSFER_MEMBER_FINANCIAL_INSTITUTION|
|category|MONEY_TRANSFER_MERCHANT|
|category|MOTION_PICTURE_THEATERS|
|category|MOTOR_FREIGHT_CARRIERS_AND_TRUCKING|
|category|MOTOR_HOME_AND_RECREATIONAL_VEHICLE_RENTAL|
|category|MOTOR_HOMES_DEALERS|
|category|MOTOR_VEHICLE_SUPPLIES_AND_NEW_PARTS|
|category|MOTORCYCLE_DEALERS|
|category|MOTORCYCLES|
|category|MOVIE|
|category|MOVIE_TICKETS|
|category|MOVING_AND_STORAGE|
|category|MULTI_LEVEL_MARKETING|
|category|MUSIC_CDS_CASSETTES_AND_ALBUMS|
|category|MUSIC_STORE_INSTRUMENTS_AND_SHEET_MUSIC|
|category|NETWORKING|
|category|NEW_AGE|
|category|NEW_PARTS_AND_SUPPLIES_MOTOR_VEHICLE|
|category|NEWS_DEALERS_AND_NEWSTANDS|
|category|NON_DURABLE_GOODS|
|category|NON_FICTION|
|category|NON_PROFIT_POLITICAL_AND_RELIGION|
|category|NONPROFIT|
|category|NOVELTIES|
|category|OEM_SOFTWARE|
|category|OFFICE_SUPPLIES_AND_EQUIPMENT|
|category|ONLINE_DATING|
|category|ONLINE_GAMING|
|category|ONLINE_GAMING_CURRENCY|
|category|ONLINE_SERVICES|
|category|OOUTBOUND_TELEMARKETING_MERCH|
|category|OPHTHALMOLOGISTS_OPTOMETRIST|
|category|OPTICIANS_AND_DISPENSING|
|category|ORTHOPEDIC_GOODS_PROSTHETICS|
|category|OSTEOPATHS|
|category|OTHER|
|category|PACKAGE_TOUR_OPERATORS|
|category|PAINTBALL|
|category|PAINTS_VARNISHES_AND_SUPPLIES|
|category|PARKING_LOTS_AND_GARAGES|
|category|PARTS_AND_ACCESSORIES|
|category|PAWN_SHOPS|
|category|PAYCHECK_LENDER_OR_CASH_ADVANCE|
|category|PERIPHERALS|
|category|PERSONALIZED_GIFTS|
|category|PET_SHOPS_PET_FOOD_AND_SUPPLIES|
|category|PETROLEUM_AND_PETROLEUM_PRODUCTS|
|category|PETS_AND_ANIMALS|
|category|PHOTOFINISHING_LABORATORIES_PHOTO_DEVELOPING|
|category|PHOTOGRAPHIC_STUDIOS_PORTRAITS|
|category|PHOTOGRAPHY|
|category|PHYSICAL_GOOD|
|category|PICTURE_VIDEO_PRODUCTION|
|category|PIECE_GOODS_NOTIONS_AND_OTHER_DRY_GOODS|
|category|PLANTS_AND_SEEDS|
|category|PLUMBING_AND_HEATING_EQUIPMENTS_AND_SUPPLIES|
|category|POLICE_RELATED_ITEMS|
|category|POLITICAL_ORGANIZATIONS|
|category|POSTAL_SERVICES_GOVERNMENT_ONLY|
|category|POSTERS|
|category|PREPAID_AND_STORED_VALUE_CARDS|
|category|PRESCRIPTION_DRUGS|
|category|PROMOTIONAL_ITEMS|
|category|PUBLIC_WAREHOUSING_AND_STORAGE|
|category|PUBLISHING_AND_PRINTING|
|category|PUBLISHING_SERVICES|
|category|RADAR_DECTORS|
|category|RADIO_TELEVISION_AND_STEREO_REPAIR|
|category|REAL_ESTATE|
|category|REAL_ESTATE_AGENT|
|category|REAL_ESTATE_AGENTS_AND_MANAGERS_RENTALS|
|category|RELIGION_AND_SPIRITUALITY_FOR_PROFIT|
|category|RELIGIOUS|
|category|RELIGIOUS_ORGANIZATIONS|
|category|REMITTANCE|
|category|RENTAL_PROPERTY_MANAGEMENT|
|category|RESIDENTIAL|
|category|RETAIL|
|category|RETAIL_FINE_JEWELRY_AND_WATCHES|
|category|REUPHOLSTERY_AND_FURNITURE_REPAIR|
|category|RINGS|
|category|ROOFING_SIDING_SHEET_METAL|
|category|RUGS_AND_CARPETS|
|category|SCHOOLS_AND_COLLEGES|
|category|SCIENCE_FICTION|
|category|SCRAPBOOKING|
|category|SCULPTURES|
|category|SECURITIES_BROKERS_AND_DEALERS|
|category|SECURITY_AND_SURVEILLANCE|
|category|SECURITY_AND_SURVEILLANCE_EQUIPMENT|
|category|SECURITY_BROKERS_AND_DEALERS|
|category|SEMINARS|
|category|SERVICE_STATIONS|
|category|SERVICES|
|category|SEWING_NEEDLEWORK_FABRIC_AND_PIECE_GOODS_STORES|
|category|SHIPPING_AND_PACKING|
|category|SHOE_REPAIR_HAT_CLEANING|
|category|SHOE_STORES|
|category|SHOES|
|category|SNOWMOBILE_DEALERS|
|category|SOFTWARE|
|category|SPECIALTY_AND_MISC._FOOD_STORES|
|category|SPECIALTY_CLEANING_POLISHING_AND_SANITATION_PREPARATIONS|
|category|SPECIALTY_OR_RARE_PETS|
|category|SPORT_GAMES_AND_TOYS|
|category|SPORTING_AND_RECREATIONAL_CAMPS|
|category|SPORTING_GOODS|
|category|SPORTS_AND_OUTDOORS|
|category|SPORTS_AND_RECREATION|
|category|STAMP_AND_COIN|
|category|STATIONARY_PRINTING_AND_WRITING_PAPER|
|category|STENOGRAPHIC_AND_SECRETARIAL_SUPPORT_SERVICES|
|category|STOCKS_BONDS_SECURITIES_AND_RELATED_CERTIFICATES|
|category|STORED_VALUE_CARDS|
|category|SUPPLIES|
|category|SUPPLIES_AND_TOYS|
|category|SURVEILLANCE_EQUIPMENT|
|category|SWIMMING_POOLS_AND_SPAS|
|category|SWIMMING_POOLS_SALES_SUPPLIES_SERVICES|
|category|TAILORS_AND_ALTERATIONS|
|category|TAX_PAYMENTS|
|category|TAX_PAYMENTS_GOVERNMENT_AGENCIES|
|category|TAXICABS_AND_LIMOUSINES|
|category|TELECOMMUNICATION_SERVICES|
|category|TELEPHONE_CARDS|
|category|TELEPHONE_EQUIPMENT|
|category|TELEPHONE_SERVICES|
|category|THEATER|
|category|TIRE_RETREADING_AND_REPAIR|
|category|TOLL_OR_BRIDGE_FEES|
|category|TOOLS_AND_EQUIPMENT|
|category|TOURIST_ATTRACTIONS_AND_EXHIBITS|
|category|TOWING_SERVICE|
|category|TOYS_AND_GAMES|
|category|TRADE_AND_VOCATIONAL_SCHOOLS|
|category|TRADEMARK_INFRINGEMENT|
|category|TRAILER_PARKS_AND_CAMPGROUNDS|
|category|TRAINING_SERVICES|
|category|TRANSPORTATION_SERVICES|
|category|TRAVEL|
|category|TRUCK_AND_UTILITY_TRAILER_RENTALS|
|category|TRUCK_STOP|
|category|TYPESETTING_PLATE_MAKING_AND_RELATED_SERVICES|
|category|USED_MERCHANDISE_AND_SECONDHAND_STORES|
|category|USED_PARTS_MOTOR_VEHICLE|
|category|UTILITIES|
|category|UTILITIES_ELECTRIC_GAS_WATER_SANITARY|
|category|VARIETY_STORES|
|category|VEHICLE_SALES|
|category|VEHICLE_SERVICE_AND_ACCESSORIES|
|category|VIDEO_EQUIPMENT|
|category|VIDEO_GAME_ARCADES_ESTABLISH|
|category|VIDEO_GAMES_AND_SYSTEMS|
|category|VIDEO_TAPE_RENTAL_STORES|
|category|VINTAGE_AND_COLLECTIBLE_VEHICLES|
|category|VINTAGE_AND_COLLECTIBLES|
|category|VITAMINS_AND_SUPPLEMENTS|
|category|VOCATIONAL_AND_TRADE_SCHOOLS|
|category|WATCH_CLOCK_AND_JEWELRY_REPAIR|
|category|WEB_HOSTING_AND_DESIGN|
|category|WELDING_REPAIR|
|category|WHOLESALE_CLUBS|
|category|WHOLESALE_FLORIST_SUPPLIERS|
|category|WHOLESALE_PRESCRIPTION_DRUGS|
|category|WILDLIFE_PRODUCTS|
|category|WIRE_TRANSFER|
|category|WIRE_TRANSFER_AND_MONEY_ORDER|
|category|WOMEN_ACCESSORY_SPECIALITY|
|category|WOMEN_CLOTHING|

<h2 id="tocS_product_category">product_category</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_category"></a>
<a id="schema_product_category"></a>
<a id="tocSproduct_category"></a>
<a id="tocsproduct_category"></a>

```json
"AC_REFRIGERATION_REPAIR"
```

The product category.

<h2 id="tocS_product_collection">product_collection</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_collection"></a>
<a id="schema_product_collection"></a>
<a id="tocSproduct_collection"></a>
<a id="tocsproduct_collection"></a>

```json
{
  "products": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "create_time": "stringstringstringst",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "total_items": 0,
  "total_pages": 0,
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The list of products, with details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|products|[product_collection_element_list](#schemaproduct_collection_element_list)|false|none|An array of products.|
|total_items|integer|false|none|The total number of items.|
|total_pages|integer|false|none|The total number of pages.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).|

<h2 id="tocS_product_collection_element">product_collection_element</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_collection_element"></a>
<a id="schema_product_collection_element"></a>
<a id="tocSproduct_collection_element"></a>
<a id="tocsproduct_collection_element"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "create_time": "stringstringstringst",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The details for a product in the collection response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The ID of the product.|
|name|string|false|none|The product name.|
|description|string|false|none|The product description.|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when the product was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/overview/#hateoas-links).|

<h2 id="tocS_product_collection_element_list">product_collection_element_list</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_collection_element_list"></a>
<a id="schema_product_collection_element_list"></a>
<a id="tocSproduct_collection_element_list"></a>
<a id="tocsproduct_collection_element_list"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "create_time": "stringstringstringst",
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
]
```

An array of products.

<h2 id="tocS_product_request_POST">product_request_POST</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_request_post"></a>
<a id="schema_product_request_POST"></a>
<a id="tocSproduct_request_post"></a>
<a id="tocsproduct_request_post"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "type": "PHYSICAL",
  "category": "AC_REFRIGERATION_REPAIR",
  "image_url": "http://example.com",
  "home_url": "http://example.com"
}
```

The create product request details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the product. You can specify the SKU for the product. If you omit the ID, the system generates it. System-generated IDs have the `PROD-` prefix.|
|name|string|true|none|The product name.|
|description|string|false|none|The product description.|
|type|string|true|none|The product type. Indicates whether the product is physical or digital goods, or a service.|
|category|[product_category](#schemaproduct_category)|false|none|The product category.|
|image_url|string(uri)|false|none|The image URL for the product.|
|home_url|string(uri)|false|none|The home page URL for the product.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PHYSICAL|
|type|DIGITAL|
|type|SERVICE|
|category|AC_REFRIGERATION_REPAIR|
|category|ACADEMIC_SOFTWARE|
|category|ACCESSORIES|
|category|ACCOUNTING|
|category|ADULT|
|category|ADVERTISING|
|category|AFFILIATED_AUTO_RENTAL|
|category|AGENCIES|
|category|AGGREGATORS|
|category|AGRICULTURAL_COOPERATIVE_FOR_MAIL_ORDER|
|category|AIR_CARRIERS_AIRLINES|
|category|AIRLINES|
|category|AIRPORTS_FLYING_FIELDS|
|category|ALCOHOLIC_BEVERAGES|
|category|AMUSEMENT_PARKS_CARNIVALS|
|category|ANIMATION|
|category|ANTIQUES|
|category|APPLIANCES|
|category|AQUARIAMS_SEAQUARIUMS_DOLPHINARIUMS|
|category|ARCHITECTURAL_ENGINEERING_AND_SURVEYING_SERVICES|
|category|ART_AND_CRAFT_SUPPLIES|
|category|ART_DEALERS_AND_GALLERIES|
|category|ARTIFACTS_GRAVE_RELATED_AND_NATIVE_AMERICAN_CRAFTS|
|category|ARTS_AND_CRAFTS|
|category|ARTS_CRAFTS_AND_COLLECTIBLES|
|category|AUDIO_BOOKS|
|category|AUTO_ASSOCIATIONS_CLUBS|
|category|AUTO_DEALER_USED_ONLY|
|category|AUTO_RENTALS|
|category|AUTO_SERVICE|
|category|AUTOMATED_FUEL_DISPENSERS|
|category|AUTOMOBILE_ASSOCIATIONS|
|category|AUTOMOTIVE|
|category|AUTOMOTIVE_REPAIR_SHOPS_NON_DEALER|
|category|AUTOMOTIVE_TOP_AND_BODY_SHOPS|
|category|AVIATION|
|category|BABIES_CLOTHING_AND_SUPPLIES|
|category|BABY|
|category|BANDS_ORCHESTRAS_ENTERTAINERS|
|category|BARBIES|
|category|BATH_AND_BODY|
|category|BATTERIES|
|category|BEAN_BABIES|
|category|BEAUTY|
|category|BEAUTY_AND_FRAGRANCES|
|category|BED_AND_BATH|
|category|BICYCLE_SHOPS_SALES_AND_SERVICE|
|category|BICYCLES_AND_ACCESSORIES|
|category|BILLIARD_POOL_ESTABLISHMENTS|
|category|BOAT_DEALERS|
|category|BOAT_RENTALS_AND_LEASING|
|category|BOATING_SAILING_AND_ACCESSORIES|
|category|BOOKS|
|category|BOOKS_AND_MAGAZINES|
|category|BOOKS_MANUSCRIPTS|
|category|BOOKS_PERIODICALS_AND_NEWSPAPERS|
|category|BOWLING_ALLEYS|
|category|BULLETIN_BOARD|
|category|BUS_LINE|
|category|BUS_LINES_CHARTERS_TOUR_BUSES|
|category|BUSINESS|
|category|BUSINESS_AND_SECRETARIAL_SCHOOLS|
|category|BUYING_AND_SHOPPING_SERVICES_AND_CLUBS|
|category|CABLE_SATELLITE_AND_OTHER_PAY_TELEVISION_AND_RADIO_SERVICES|
|category|CABLE_SATELLITE_AND_OTHER_PAY_TV_AND_RADIO|
|category|CAMERA_AND_PHOTOGRAPHIC_SUPPLIES|
|category|CAMERAS|
|category|CAMERAS_AND_PHOTOGRAPHY|
|category|CAMPER_RECREATIONAL_AND_UTILITY_TRAILER_DEALERS|
|category|CAMPING_AND_OUTDOORS|
|category|CAMPING_AND_SURVIVAL|
|category|CAR_AND_TRUCK_DEALERS|
|category|CAR_AND_TRUCK_DEALERS_USED_ONLY|
|category|CAR_AUDIO_AND_ELECTRONICS|
|category|CAR_RENTAL_AGENCY|
|category|CATALOG_MERCHANT|
|category|CATALOG_RETAIL_MERCHANT|
|category|CATERING_SERVICES|
|category|CHARITY|
|category|CHECK_CASHIER|
|category|CHILD_CARE_SERVICES|
|category|CHILDREN_BOOKS|
|category|CHIROPODISTS_PODIATRISTS|
|category|CHIROPRACTORS|
|category|CIGAR_STORES_AND_STANDS|
|category|CIVIC_SOCIAL_FRATERNAL_ASSOCIATIONS|
|category|CIVIL_SOCIAL_FRAT_ASSOCIATIONS|
|category|CLOTHING|
|category|CLOTHING_ACCESSORIES_AND_SHOES|
|category|CLOTHING_RENTAL|
|category|COFFEE_AND_TEA|
|category|COIN_OPERATED_BANKS_AND_CASINOS|
|category|COLLECTIBLES|
|category|COLLECTION_AGENCY|
|category|COLLEGES_AND_UNIVERSITIES|
|category|COMMERCIAL_EQUIPMENT|
|category|COMMERCIAL_FOOTWEAR|
|category|COMMERCIAL_PHOTOGRAPHY|
|category|COMMERCIAL_PHOTOGRAPHY_ART_AND_GRAPHICS|
|category|COMMERCIAL_SPORTS_PROFESSIONA|
|category|COMMODITIES_AND_FUTURES_EXCHANGE|
|category|COMPUTER_AND_DATA_PROCESSING_SERVICES|
|category|COMPUTER_HARDWARE_AND_SOFTWARE|
|category|COMPUTER_MAINTENANCE_REPAIR_AND_SERVICES_NOT_ELSEWHERE_CLAS|
|category|CONSTRUCTION|
|category|CONSTRUCTION_MATERIALS_NOT_ELSEWHERE_CLASSIFIED|
|category|CONSULTING_SERVICES|
|category|CONSUMER_CREDIT_REPORTING_AGENCIES|
|category|CONVALESCENT_HOMES|
|category|COSMETIC_STORES|
|category|COUNSELING_SERVICES_DEBT_MARRIAGE_PERSONAL|
|category|COUNTERFEIT_CURRENCY_AND_STAMPS|
|category|COUNTERFEIT_ITEMS|
|category|COUNTRY_CLUBS|
|category|COURIER_SERVICES|
|category|COURIER_SERVICES_AIR_AND_GROUND_AND_FREIGHT_FORWARDERS|
|category|COURT_COSTS_ALIMNY_CHILD_SUPT|
|category|COURT_COSTS_INCLUDING_ALIMONY_AND_CHILD_SUPPORT_COURTS_OF_LAW|
|category|CREDIT_CARDS|
|category|CREDIT_UNION|
|category|CULTURE_AND_RELIGION|
|category|DAIRY_PRODUCTS_STORES|
|category|DANCE_HALLS_STUDIOS_AND_SCHOOLS|
|category|DECORATIVE|
|category|DENTAL|
|category|DENTISTS_AND_ORTHODONTISTS|
|category|DEPARTMENT_STORES|
|category|DESKTOP_PCS|
|category|DEVICES|
|category|DIECAST_TOYS_VEHICLES|
|category|DIGITAL_GAMES|
|category|DIGITAL_MEDIA_BOOKS_MOVIES_MUSIC|
|category|DIRECT_MARKETING|
|category|DIRECT_MARKETING_CATALOG_MERCHANT|
|category|DIRECT_MARKETING_INBOUND_TELE|
|category|DIRECT_MARKETING_OUTBOUND_TELE|
|category|DIRECT_MARKETING_SUBSCRIPTION|
|category|DISCOUNT_STORES|
|category|DOOR_TO_DOOR_SALES|
|category|DRAPERY_WINDOW_COVERING_AND_UPHOLSTERY|
|category|DRINKING_PLACES|
|category|DRUGSTORE|
|category|DURABLE_GOODS|
|category|ECOMMERCE_DEVELOPMENT|
|category|ECOMMERCE_SERVICES|
|category|EDUCATIONAL_AND_TEXTBOOKS|
|category|ELECTRIC_RAZOR_STORES|
|category|ELECTRICAL_AND_SMALL_APPLIANCE_REPAIR|
|category|ELECTRICAL_CONTRACTORS|
|category|ELECTRICAL_PARTS_AND_EQUIPMENT|
|category|ELECTRONIC_CASH|
|category|ELEMENTARY_AND_SECONDARY_SCHOOLS|
|category|EMPLOYMENT|
|category|ENTERTAINERS|
|category|ENTERTAINMENT_AND_MEDIA|
|category|EQUIP_TOOL_FURNITURE_AND_APPLIANCE_RENTAL_AND_LEASING|
|category|ESCROW|
|category|EVENT_AND_WEDDING_PLANNING|
|category|EXERCISE_AND_FITNESS|
|category|EXERCISE_EQUIPMENT|
|category|EXTERMINATING_AND_DISINFECTING_SERVICES|
|category|FABRICS_AND_SEWING|
|category|FAMILY_CLOTHING_STORES|
|category|FASHION_JEWELRY|
|category|FAST_FOOD_RESTAURANTS|
|category|FICTION_AND_NONFICTION|
|category|FINANCE_COMPANY|
|category|FINANCIAL_AND_INVESTMENT_ADVICE|
|category|FINANCIAL_INSTITUTIONS_MERCHANDISE_AND_SERVICES|
|category|FIREARM_ACCESSORIES|
|category|FIREARMS_WEAPONS_AND_KNIVES|
|category|FIREPLACE_AND_FIREPLACE_SCREENS|
|category|FIREWORKS|
|category|FISHING|
|category|FLORISTS|
|category|FLOWERS|
|category|FOOD_DRINK_AND_NUTRITION|
|category|FOOD_PRODUCTS|
|category|FOOD_RETAIL_AND_SERVICE|
|category|FRAGRANCES_AND_PERFUMES|
|category|FREEZER_AND_LOCKER_MEAT_PROVISIONERS|
|category|FUEL_DEALERS_FUEL_OIL_WOOD_AND_COAL|
|category|FUEL_DEALERS_NON_AUTOMOTIVE|
|category|FUNERAL_SERVICES_AND_CREMATORIES|
|category|FURNISHING_AND_DECORATING|
|category|FURNITURE|
|category|FURRIERS_AND_FUR_SHOPS|
|category|GADGETS_AND_OTHER_ELECTRONICS|
|category|GAMBLING|
|category|GAME_SOFTWARE|
|category|GAMES|
|category|GARDEN_SUPPLIES|
|category|GENERAL|
|category|GENERAL_CONTRACTORS|
|category|GENERAL_GOVERNMENT|
|category|GENERAL_SOFTWARE|
|category|GENERAL_TELECOM|
|category|GIFTS_AND_FLOWERS|
|category|GLASS_PAINT_AND_WALLPAPER_STORES|
|category|GLASSWARE_CRYSTAL_STORES|
|category|GOVERNMENT|
|category|GOVERNMENT_IDS_AND_LICENSES|
|category|GOVERNMENT_LICENSED_ON_LINE_CASINOS_ON_LINE_GAMBLING|
|category|GOVERNMENT_OWNED_LOTTERIES|
|category|GOVERNMENT_SERVICES|
|category|GRAPHIC_AND_COMMERCIAL_DESIGN|
|category|GREETING_CARDS|
|category|GROCERY_STORES_AND_SUPERMARKETS|
|category|HARDWARE_AND_TOOLS|
|category|HARDWARE_EQUIPMENT_AND_SUPPLIES|
|category|HAZARDOUS_RESTRICTED_AND_PERISHABLE_ITEMS|
|category|HEALTH_AND_BEAUTY_SPAS|
|category|HEALTH_AND_NUTRITION|
|category|HEALTH_AND_PERSONAL_CARE|
|category|HEARING_AIDS_SALES_AND_SUPPLIES|
|category|HEATING_PLUMBING_AC|
|category|HIGH_RISK_MERCHANT|
|category|HIRING_SERVICES|
|category|HOBBIES_TOYS_AND_GAMES|
|category|HOME_AND_GARDEN|
|category|HOME_AUDIO|
|category|HOME_DECOR|
|category|HOME_ELECTRONICS|
|category|HOSPITALS|
|category|HOTELS_MOTELS_INNS_RESORTS|
|category|HOUSEWARES|
|category|HUMAN_PARTS_AND_REMAINS|
|category|HUMOROUS_GIFTS_AND_NOVELTIES|
|category|HUNTING|
|category|IDS_LICENSES_AND_PASSPORTS|
|category|ILLEGAL_DRUGS_AND_PARAPHERNALIA|
|category|INDUSTRIAL|
|category|INDUSTRIAL_AND_MANUFACTURING_SUPPLIES|
|category|INSURANCE_AUTO_AND_HOME|
|category|INSURANCE_DIRECT|
|category|INSURANCE_LIFE_AND_ANNUITY|
|category|INSURANCE_SALES_UNDERWRITING|
|category|INSURANCE_UNDERWRITING_PREMIUMS|
|category|INTERNET_AND_NETWORK_SERVICES|
|category|INTRA_COMPANY_PURCHASES|
|category|LABORATORIES_DENTAL_MEDICAL|
|category|LANDSCAPING|
|category|LANDSCAPING_AND_HORTICULTURAL_SERVICES|
|category|LAUNDRY_CLEANING_SERVICES|
|category|LEGAL|
|category|LEGAL_SERVICES_AND_ATTORNEYS|
|category|LOCAL_DELIVERY_SERVICE|
|category|LOCKSMITH|
|category|LODGING_AND_ACCOMMODATIONS|
|category|LOTTERY_AND_CONTESTS|
|category|LUGGAGE_AND_LEATHER_GOODS|
|category|LUMBER_AND_BUILDING_MATERIALS|
|category|MAGAZINES|
|category|MAINTENANCE_AND_REPAIR_SERVICES|
|category|MAKEUP_AND_COSMETICS|
|category|MANUAL_CASH_DISBURSEMENTS|
|category|MASSAGE_PARLORS|
|category|MEDICAL|
|category|MEDICAL_AND_PHARMACEUTICAL|
|category|MEDICAL_CARE|
|category|MEDICAL_EQUIPMENT_AND_SUPPLIES|
|category|MEDICAL_SERVICES|
|category|MEETING_PLANNERS|
|category|MEMBERSHIP_CLUBS_AND_ORGANIZATIONS|
|category|MEMBERSHIP_COUNTRY_CLUBS_GOLF|
|category|MEMORABILIA|
|category|MEN_AND_BOY_CLOTHING_AND_ACCESSORY_STORES|
|category|MEN_CLOTHING|
|category|MERCHANDISE|
|category|METAPHYSICAL|
|category|MILITARIA|
|category|MILITARY_AND_CIVIL_SERVICE_UNIFORMS|
|category|MISC._AUTOMOTIVE_AIRCRAFT_AND_FARM_EQUIPMENT_DEALERS|
|category|MISC._GENERAL_MERCHANDISE|
|category|MISCELLANEOUS_GENERAL_SERVICES|
|category|MISCELLANEOUS_REPAIR_SHOPS_AND_RELATED_SERVICES|
|category|MODEL_KITS|
|category|MONEY_TRANSFER_MEMBER_FINANCIAL_INSTITUTION|
|category|MONEY_TRANSFER_MERCHANT|
|category|MOTION_PICTURE_THEATERS|
|category|MOTOR_FREIGHT_CARRIERS_AND_TRUCKING|
|category|MOTOR_HOME_AND_RECREATIONAL_VEHICLE_RENTAL|
|category|MOTOR_HOMES_DEALERS|
|category|MOTOR_VEHICLE_SUPPLIES_AND_NEW_PARTS|
|category|MOTORCYCLE_DEALERS|
|category|MOTORCYCLES|
|category|MOVIE|
|category|MOVIE_TICKETS|
|category|MOVING_AND_STORAGE|
|category|MULTI_LEVEL_MARKETING|
|category|MUSIC_CDS_CASSETTES_AND_ALBUMS|
|category|MUSIC_STORE_INSTRUMENTS_AND_SHEET_MUSIC|
|category|NETWORKING|
|category|NEW_AGE|
|category|NEW_PARTS_AND_SUPPLIES_MOTOR_VEHICLE|
|category|NEWS_DEALERS_AND_NEWSTANDS|
|category|NON_DURABLE_GOODS|
|category|NON_FICTION|
|category|NON_PROFIT_POLITICAL_AND_RELIGION|
|category|NONPROFIT|
|category|NOVELTIES|
|category|OEM_SOFTWARE|
|category|OFFICE_SUPPLIES_AND_EQUIPMENT|
|category|ONLINE_DATING|
|category|ONLINE_GAMING|
|category|ONLINE_GAMING_CURRENCY|
|category|ONLINE_SERVICES|
|category|OOUTBOUND_TELEMARKETING_MERCH|
|category|OPHTHALMOLOGISTS_OPTOMETRIST|
|category|OPTICIANS_AND_DISPENSING|
|category|ORTHOPEDIC_GOODS_PROSTHETICS|
|category|OSTEOPATHS|
|category|OTHER|
|category|PACKAGE_TOUR_OPERATORS|
|category|PAINTBALL|
|category|PAINTS_VARNISHES_AND_SUPPLIES|
|category|PARKING_LOTS_AND_GARAGES|
|category|PARTS_AND_ACCESSORIES|
|category|PAWN_SHOPS|
|category|PAYCHECK_LENDER_OR_CASH_ADVANCE|
|category|PERIPHERALS|
|category|PERSONALIZED_GIFTS|
|category|PET_SHOPS_PET_FOOD_AND_SUPPLIES|
|category|PETROLEUM_AND_PETROLEUM_PRODUCTS|
|category|PETS_AND_ANIMALS|
|category|PHOTOFINISHING_LABORATORIES_PHOTO_DEVELOPING|
|category|PHOTOGRAPHIC_STUDIOS_PORTRAITS|
|category|PHOTOGRAPHY|
|category|PHYSICAL_GOOD|
|category|PICTURE_VIDEO_PRODUCTION|
|category|PIECE_GOODS_NOTIONS_AND_OTHER_DRY_GOODS|
|category|PLANTS_AND_SEEDS|
|category|PLUMBING_AND_HEATING_EQUIPMENTS_AND_SUPPLIES|
|category|POLICE_RELATED_ITEMS|
|category|POLITICAL_ORGANIZATIONS|
|category|POSTAL_SERVICES_GOVERNMENT_ONLY|
|category|POSTERS|
|category|PREPAID_AND_STORED_VALUE_CARDS|
|category|PRESCRIPTION_DRUGS|
|category|PROMOTIONAL_ITEMS|
|category|PUBLIC_WAREHOUSING_AND_STORAGE|
|category|PUBLISHING_AND_PRINTING|
|category|PUBLISHING_SERVICES|
|category|RADAR_DECTORS|
|category|RADIO_TELEVISION_AND_STEREO_REPAIR|
|category|REAL_ESTATE|
|category|REAL_ESTATE_AGENT|
|category|REAL_ESTATE_AGENTS_AND_MANAGERS_RENTALS|
|category|RELIGION_AND_SPIRITUALITY_FOR_PROFIT|
|category|RELIGIOUS|
|category|RELIGIOUS_ORGANIZATIONS|
|category|REMITTANCE|
|category|RENTAL_PROPERTY_MANAGEMENT|
|category|RESIDENTIAL|
|category|RETAIL|
|category|RETAIL_FINE_JEWELRY_AND_WATCHES|
|category|REUPHOLSTERY_AND_FURNITURE_REPAIR|
|category|RINGS|
|category|ROOFING_SIDING_SHEET_METAL|
|category|RUGS_AND_CARPETS|
|category|SCHOOLS_AND_COLLEGES|
|category|SCIENCE_FICTION|
|category|SCRAPBOOKING|
|category|SCULPTURES|
|category|SECURITIES_BROKERS_AND_DEALERS|
|category|SECURITY_AND_SURVEILLANCE|
|category|SECURITY_AND_SURVEILLANCE_EQUIPMENT|
|category|SECURITY_BROKERS_AND_DEALERS|
|category|SEMINARS|
|category|SERVICE_STATIONS|
|category|SERVICES|
|category|SEWING_NEEDLEWORK_FABRIC_AND_PIECE_GOODS_STORES|
|category|SHIPPING_AND_PACKING|
|category|SHOE_REPAIR_HAT_CLEANING|
|category|SHOE_STORES|
|category|SHOES|
|category|SNOWMOBILE_DEALERS|
|category|SOFTWARE|
|category|SPECIALTY_AND_MISC._FOOD_STORES|
|category|SPECIALTY_CLEANING_POLISHING_AND_SANITATION_PREPARATIONS|
|category|SPECIALTY_OR_RARE_PETS|
|category|SPORT_GAMES_AND_TOYS|
|category|SPORTING_AND_RECREATIONAL_CAMPS|
|category|SPORTING_GOODS|
|category|SPORTS_AND_OUTDOORS|
|category|SPORTS_AND_RECREATION|
|category|STAMP_AND_COIN|
|category|STATIONARY_PRINTING_AND_WRITING_PAPER|
|category|STENOGRAPHIC_AND_SECRETARIAL_SUPPORT_SERVICES|
|category|STOCKS_BONDS_SECURITIES_AND_RELATED_CERTIFICATES|
|category|STORED_VALUE_CARDS|
|category|SUPPLIES|
|category|SUPPLIES_AND_TOYS|
|category|SURVEILLANCE_EQUIPMENT|
|category|SWIMMING_POOLS_AND_SPAS|
|category|SWIMMING_POOLS_SALES_SUPPLIES_SERVICES|
|category|TAILORS_AND_ALTERATIONS|
|category|TAX_PAYMENTS|
|category|TAX_PAYMENTS_GOVERNMENT_AGENCIES|
|category|TAXICABS_AND_LIMOUSINES|
|category|TELECOMMUNICATION_SERVICES|
|category|TELEPHONE_CARDS|
|category|TELEPHONE_EQUIPMENT|
|category|TELEPHONE_SERVICES|
|category|THEATER|
|category|TIRE_RETREADING_AND_REPAIR|
|category|TOLL_OR_BRIDGE_FEES|
|category|TOOLS_AND_EQUIPMENT|
|category|TOURIST_ATTRACTIONS_AND_EXHIBITS|
|category|TOWING_SERVICE|
|category|TOYS_AND_GAMES|
|category|TRADE_AND_VOCATIONAL_SCHOOLS|
|category|TRADEMARK_INFRINGEMENT|
|category|TRAILER_PARKS_AND_CAMPGROUNDS|
|category|TRAINING_SERVICES|
|category|TRANSPORTATION_SERVICES|
|category|TRAVEL|
|category|TRUCK_AND_UTILITY_TRAILER_RENTALS|
|category|TRUCK_STOP|
|category|TYPESETTING_PLATE_MAKING_AND_RELATED_SERVICES|
|category|USED_MERCHANDISE_AND_SECONDHAND_STORES|
|category|USED_PARTS_MOTOR_VEHICLE|
|category|UTILITIES|
|category|UTILITIES_ELECTRIC_GAS_WATER_SANITARY|
|category|VARIETY_STORES|
|category|VEHICLE_SALES|
|category|VEHICLE_SERVICE_AND_ACCESSORIES|
|category|VIDEO_EQUIPMENT|
|category|VIDEO_GAME_ARCADES_ESTABLISH|
|category|VIDEO_GAMES_AND_SYSTEMS|
|category|VIDEO_TAPE_RENTAL_STORES|
|category|VINTAGE_AND_COLLECTIBLE_VEHICLES|
|category|VINTAGE_AND_COLLECTIBLES|
|category|VITAMINS_AND_SUPPLEMENTS|
|category|VOCATIONAL_AND_TRADE_SCHOOLS|
|category|WATCH_CLOCK_AND_JEWELRY_REPAIR|
|category|WEB_HOSTING_AND_DESIGN|
|category|WELDING_REPAIR|
|category|WHOLESALE_CLUBS|
|category|WHOLESALE_FLORIST_SUPPLIERS|
|category|WHOLESALE_PRESCRIPTION_DRUGS|
|category|WILDLIFE_PRODUCTS|
|category|WIRE_TRANSFER|
|category|WIRE_TRANSFER_AND_MONEY_ORDER|
|category|WOMEN_ACCESSORY_SPECIALITY|
|category|WOMEN_CLOTHING|

<h2 id="tocS_products.create-400">products.create-400</h2>
<!-- backwards compatibility -->
<a id="schemaproducts.create-400"></a>
<a id="schema_products.create-400"></a>
<a id="tocSproducts.create-400"></a>
<a id="tocsproducts.create-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_PARAMETER_SYNTAX",
      "description": "Input identifier must not use system prefix(PROD-)."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_products.patch-400">products.patch-400</h2>
<!-- backwards compatibility -->
<a id="schemaproducts.patch-400"></a>
<a id="schema_products.patch-400"></a>
<a id="tocSproducts.patch-400"></a>
<a id="tocsproducts.patch-400"></a>

```json
{
  "details": [
    {
      "issue": "MISSING_REQUIRED_PARAMETER",
      "description": "A required field is missing."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_products.patch-422">products.patch-422</h2>
<!-- backwards compatibility -->
<a id="schemaproducts.patch-422"></a>
<a id="schema_products.patch-422"></a>
<a id="tocSproducts.patch-422"></a>
<a id="tocsproducts.patch-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|
