import { createRoute, z } from '@hono/zod-openapi'

const AveragesSchema = z
  .object({
    age: z.number().exactOptional().openapi({ description: 'Average age of the car' }),
    dom: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Average Days on Market value for the car based on all listings found in the Marketcheck database for this car',
      }),
    miles: z.number().exactOptional().openapi({ description: 'Mean miles value for the car' }),
    msrp: z.number().exactOptional().openapi({ description: 'Mean msrp value for the car' }),
    price: z.number().exactOptional().openapi({ description: 'Mean price value for the car' }),
    units: z
      .number()
      .exactOptional()
      .openapi({ description: 'No of units for this car on the market' }),
  })
  .openapi({ required: [] })
  .openapi('Averages')

const BuildSchema = z
  .object({
    antibrake_sys: z
      .string()
      .exactOptional()
      .openapi({ description: 'Antibrake system of the car' }),
    body_subtype: z.string().exactOptional().openapi({ description: 'Body subtype of the car' }),
    body_type: z.string().exactOptional().openapi({ description: 'Body type of the car' }),
    city_miles: z.string().exactOptional().openapi({ description: 'City miles of the car' }),
    city_mpg: z.int().exactOptional().openapi({ description: 'City Mileage in MPG' }),
    cylinders: z.int().exactOptional().openapi({ description: 'No of cylinders of the car' }),
    doors: z.int().exactOptional().openapi({ description: 'No of doors of the car' }),
    drivetrain: z.string().exactOptional().openapi({ description: 'Drivetrain of the car' }),
    engine: z.string().exactOptional().openapi({ description: 'Engine of the car' }),
    engine_aspiration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Engine aspiration of the car' }),
    engine_block: z.string().exactOptional().openapi({ description: 'Engine block of the car' }),
    engine_measure: z.string().exactOptional().openapi({ description: 'Engine block of the car' }),
    engine_size: z.float64().exactOptional().openapi({ description: 'Engine size of the car' }),
    fuel_type: z.string().exactOptional().openapi({ description: 'Fuel type of the car' }),
    highway_miles: z.string().exactOptional().openapi({ description: 'Highway miles of the car' }),
    highway_mpg: z.int().exactOptional().openapi({ description: 'Highway Mileage in MPG' }),
    made_in: z.string().exactOptional().openapi({ description: 'Made in of the car' }),
    make: z.string().exactOptional().openapi({ description: 'Car Make' }),
    model: z.string().exactOptional().openapi({ description: 'Car model' }),
    opt_seating: z.string().exactOptional().openapi({ description: 'opt seating of the car' }),
    overall_height: z
      .string()
      .exactOptional()
      .openapi({ description: 'Overall height of the car' }),
    overall_length: z
      .string()
      .exactOptional()
      .openapi({ description: 'Overall length of the car' }),
    overall_width: z.string().exactOptional().openapi({ description: 'Overall width of the car' }),
    powertrain_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'powertrain_type of the car' }),
    short_trim: z.string().exactOptional().openapi({ description: 'Short trim of the car' }),
    std_seating: z.string().exactOptional().openapi({ description: 'Std seating of the car' }),
    steering_type: z.string().exactOptional().openapi({ description: 'Steering type of the car' }),
    tank_size: z.string().exactOptional().openapi({ description: 'Tank size of the car' }),
    transmission: z.string().exactOptional().openapi({ description: 'Transmission of the car' }),
    trim: z.string().exactOptional().openapi({ description: 'Trim of the car' }),
    trim_r: z.string().exactOptional().openapi({ description: 'Trim_r of the car' }),
    vehicle_type: z.string().exactOptional().openapi({ description: 'Vehicle type of the car' }),
    year: z.int().exactOptional().openapi({ description: 'Year of the Car' }),
  })
  .openapi({ description: 'Describes the Car specification', required: [] })
  .openapi('Build')

const NestDealerSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'City of the dealer' }),
    country: z.string().exactOptional().openapi({ description: 'country of the dealer' }),
    county: z.string().exactOptional().openapi({ description: 'county of the dealer' }),
    dealer_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of dealer (franchise/independent)' }),
    dealership_group_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'dealership_group_name of dealer' }),
    id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The unique id associated with the dealer in the Marketcheck database',
      }),
    latitude: z
      .string()
      .exactOptional()
      .openapi({ description: 'Latutide for the dealer location' }),
    longitude: z
      .string()
      .exactOptional()
      .openapi({ description: 'Longitude for the dealer location' }),
    msa_code: z.string().exactOptional().openapi({ description: 'msa_code of the dealer' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the dealer' }),
    phone: z.string().exactOptional().openapi({ description: 'Contact no of the dealer' }),
    seller_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contact email of the dealer' }),
    state: z.string().exactOptional().openapi({ description: 'State of the dealer' }),
    street: z.string().exactOptional().openapi({ description: 'Street of the dealer' }),
    website: z.string().exactOptional().openapi({ description: 'Website of the dealer' }),
    zip: z.string().exactOptional().openapi({ description: 'Zip of the dealer' }),
  })
  .openapi({ required: [] })
  .openapi('NestDealer')

const ListingFinanceSchema = z
  .object({
    down_payment: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Down payment for this finance offer' }),
    down_payment_percentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'down payment percentage for this finance offer' }),
    estimated_monthly_payment: z
      .float64()
      .exactOptional()
      .openapi({ description: 'estimated monthly payment for this finance offer' }),
    loan_apr: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Loan APR for this finance offer' }),
    loan_term: z.int().exactOptional().openapi({ description: 'Loan term for this finance offer' }),
  })
  .openapi({ required: [] })
  .openapi('ListingFinance')

const ListingLeaseSchema = z
  .object({
    down_payment: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Down payment for this lease offer' }),
    estimated_monthly_payment: z
      .float64()
      .exactOptional()
      .openapi({ description: 'estimated monthly payment for this lease offer' }),
    lease_term: z.int().exactOptional().openapi({ description: 'Lease term for this lease offer' }),
  })
  .openapi({ required: [] })
  .openapi('ListingLease')

const ListingNestMediaSchema = z
  .object({
    photo_links: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of photo urls for the car' }),
    photo_links_cached: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of cached photo urls for the car' }),
  })
  .openapi({ required: [] })
  .openapi('ListingNestMedia')

const BaseListingSchema = z
  .object({
    base_ext_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base exterior color of the car' }),
    base_int_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base interior color of the car' }),
    build: BuildSchema.exactOptional(),
    carfax_1_owner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate whether listing is carfax_1_owner' }),
    carfax_clean_title: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate whether listing is carfax_clean_title' }),
    data_source: z.string().exactOptional().openapi({ description: 'Data source of the listing' }),
    dealer: NestDealerSchema.exactOptional(),
    dist: z
      .float64()
      .exactOptional()
      .openapi({ description: "Distance of the car's location from the specified user lcoation" }),
    dom: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car',
      }),
    dom_180: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car',
      }),
    dom_active: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car',
      }),
    exterior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Exterior color of the car' }),
    financing_options: z
      .array(ListingFinanceSchema)
      .exactOptional()
      .openapi({ description: 'Array of all finance offers for this listing' }),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    in_transit: z.boolean().exactOptional().openapi({ description: 'in_transit of the listing' }),
    interior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interior color of the car' }),
    inventory_type: z.string().exactOptional().openapi({ description: 'Inventory type of car' }),
    is_certified: z.int().exactOptional().openapi({ description: 'Certified car' }),
    is_translated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'is_translated of the listing' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    leasing_options: z
      .array(ListingLeaseSchema)
      .exactOptional()
      .openapi({ description: 'Array of all finance offers for this listing' }),
    media: ListingNestMediaSchema.exactOptional(),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the car' }),
    model_code: z.string().exactOptional().openapi({ description: 'model_code of the listing' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the car' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the car' }),
    price_change_percent: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Percentage difference between the cars's current price and ref_price i.e. last reported price",
      }),
    ref_miles: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date',
      }),
    ref_miles_dt: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The date at which the last miles was reported online. This is earlier to last_seen_date',
      }),
    ref_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date',
      }),
    ref_price_dt: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The date at which the last price was reported online. This is earlier to last_seen_date',
      }),
    scraped_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_type: z.string().exactOptional().openapi({ description: 'Seller type for the car' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of car in dealers inventory' }),
    title_type: z.string().exactOptional().openapi({ description: 'title_type of the listing' }),
    vdp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vehicle Details Page url of the specific car' }),
    vin: z.string().exactOptional().openapi({ description: 'VIN for the car' }),
  })
  .openapi({ description: 'Minimal set of attributes describing a listing', required: [] })
  .openapi('BaseListing')

const SalesStatsSchema = z
  .object({
    absolute_mean_deviation: z
      .number()
      .exactOptional()
      .openapi({ description: 'absolute_mean_deviation' }),
    iqr: z.number().exactOptional().openapi({ description: 'iqr' }),
    mean: z.number().exactOptional().openapi({ description: 'mean' }),
    median: z.number().exactOptional().openapi({ description: 'median' }),
    population_standard_deviation: z
      .number()
      .exactOptional()
      .openapi({ description: 'population_standard_deviation' }),
    standard_deviation: z.number().exactOptional().openapi({ description: 'standard_deviation' }),
    trimmed_mean: z.number().exactOptional().openapi({ description: 'trimmed_mean' }),
    variance: z.number().exactOptional().openapi({ description: 'variance' }),
    weighted_mean: z.number().exactOptional().openapi({ description: 'weighted_mean' }),
  })
  .openapi({ description: 'Sales stats response', required: [] })
  .openapi('SalesStats')

const BasePopularSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'City' }),
    counts: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of sold listings of this model' }),
    dom_stats: SalesStatsSchema.exactOptional(),
    inventoryType: z.string().exactOptional().openapi({ description: 'Inventory type' }),
    make: z.string().exactOptional().openapi({ description: 'Make name' }),
    miles_stats: SalesStatsSchema.exactOptional(),
    model: z.string().exactOptional().openapi({ description: 'Model name' }),
    price_stats: SalesStatsSchema.exactOptional(),
    state: z.string().exactOptional().openapi({ description: 'State' }),
  })
  .openapi({ description: 'Single popular car in array', required: [] })
  .openapi('BasePopular')

const CRMResponseSchema = z
  .object({
    for_sale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Boolean to indicate whether given vin has had listing after given date or not',
      }),
  })
  .openapi({ required: [] })
  .openapi('CRMResponse')

const CacheImageResponseSchema = z
  .file()
  .openapi({ type: 'string', format: 'binary', description: 'Cached JPEG image' })
  .openapi('CacheImageResponse')

const CarListingRankSchema = z
  .object({ ranked_listing: z.object({}).exactOptional() })
  .openapi({ description: 'Ranking query response', required: [] })
  .openapi('CarListingRank')

const CarLocationSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'City of the car' }),
    county: z.string().exactOptional().openapi({ description: 'County of the car' }),
    latitude: z
      .string()
      .exactOptional()
      .openapi({ description: 'Latitude component of car location' }),
    longitude: z
      .string()
      .exactOptional()
      .openapi({ description: 'Longitude component of car location' }),
    seller_name: z.string().exactOptional().openapi({ description: 'Seller name of the car' }),
    street: z.string().exactOptional().openapi({ description: 'Street address of the car' }),
    zip: z.string().exactOptional().openapi({ description: 'Zip/Postal code of the car' }),
  })
  .openapi({ required: [] })
  .openapi('CarLocation')

const CarRankCriteriaSchema = z
  .object({
    carfax_1_owner: z
      .number()
      .default(0.9)
      .exactOptional()
      .openapi({
        description:
          'Flag to indicate whether listing is carfax_1_owner.Weight for this is ranking process between 0-1.',
      }),
    carfax_clean_title: z
      .number()
      .default(0.9)
      .exactOptional()
      .openapi({
        description:
          'Flag to indicate whether listing is carfax_clean_title.Weight for this is ranking process between 0-1',
      }),
    dom: z
      .number()
      .default(0.9)
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car.Weight for this is ranking process between 0-1',
      }),
    dom_180: z
      .number()
      .default(0.9)
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car.Weight for this is ranking process between 0-1',
      }),
    dom_active: z
      .number()
      .default(0.9)
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car.Weight for this is ranking process between 0-1',
      }),
    is_certified: z
      .number()
      .default(1)
      .exactOptional()
      .openapi({ description: 'Certified car.Weight for this is ranking process between 0-1' }),
    miles: z
      .number()
      .default(0.9)
      .exactOptional()
      .openapi({
        description:
          'Odometer reading / reported miles usage for the car.Weight for this is ranking process between 0-1',
      }),
    price: z
      .number()
      .default(0.9)
      .exactOptional()
      .openapi({
        description:
          'Asking price for the vehicle. Weight for this is ranking process between 0-1.',
      }),
  })
  .openapi({ description: 'Ranking query request', required: [] })
  .openapi('CarRankCriteria')

const CarRankRequestSchema = z
  .object({
    listing_ids: z
      .array(z.string().openapi({ description: 'MC active listing id' }))
      .exactOptional(),
    ranking_criteria: z.object({}).exactOptional(),
  })
  .openapi({ description: 'Ranking query request', required: [] })
  .openapi('CarRankRequest')

const CarRankResponseSchema = z
  .object({
    num_ranked: z.int().exactOptional().openapi({ description: 'The number of listings ranked' }),
    ranked_listings: z.array(CarListingRankSchema).exactOptional(),
  })
  .openapi({ description: 'Ranking query response', required: [] })
  .openapi('CarRankResponse')

const FacetItemSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'Facet item count' }),
    item: z.string().exactOptional().openapi({ description: 'Facet item' }),
  })
  .openapi({ required: [] })
  .openapi('FacetItem')

const CarSearchFacetsSchema = z
  .object({
    base_exterior_color: z.array(FacetItemSchema).exactOptional(),
    base_interior_color: z.array(FacetItemSchema).exactOptional(),
    body_subtype: z.array(FacetItemSchema).exactOptional(),
    body_type: z.array(FacetItemSchema).exactOptional(),
    car_type: z.array(FacetItemSchema).exactOptional(),
    carfax_1_owner: z.array(FacetItemSchema).exactOptional(),
    carfax_clean_title: z.array(FacetItemSchema).exactOptional(),
    city: z.array(FacetItemSchema).exactOptional(),
    cylinders: z.array(FacetItemSchema).exactOptional(),
    data_source: z.array(FacetItemSchema).exactOptional(),
    dealer_id: z.array(FacetItemSchema).exactOptional(),
    dealer_type: z.array(FacetItemSchema).exactOptional(),
    doors: z.array(FacetItemSchema).exactOptional(),
    drivetrain: z.array(FacetItemSchema).exactOptional(),
    engine: z.array(FacetItemSchema).exactOptional(),
    engine_aspiration: z.array(FacetItemSchema).exactOptional(),
    engine_block: z.array(FacetItemSchema).exactOptional(),
    engine_size: z.array(FacetItemSchema).exactOptional(),
    exterior_color: z.array(FacetItemSchema).exactOptional(),
    fuel_type: z.array(FacetItemSchema).exactOptional(),
    interior_color: z.array(FacetItemSchema).exactOptional(),
    make: z.array(FacetItemSchema).exactOptional(),
    model: z.array(FacetItemSchema).exactOptional(),
    seller_name: z.array(FacetItemSchema).exactOptional(),
    seller_name_o: z.array(FacetItemSchema).exactOptional(),
    seller_type: z.array(FacetItemSchema).exactOptional(),
    source: z.array(FacetItemSchema).exactOptional(),
    state: z.array(FacetItemSchema).exactOptional(),
    transmission: z.array(FacetItemSchema).exactOptional(),
    trim: z.array(FacetItemSchema).exactOptional(),
    trim_o: z.array(FacetItemSchema).exactOptional(),
    trim_r: z.array(FacetItemSchema).exactOptional(),
    vehicle_type: z.array(FacetItemSchema).exactOptional(),
    year: z.array(FacetItemSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CarSearchFacets')

const CarSearchRangeFacetsSchema = z
  .object({
    dom: z.object({}).exactOptional(),
    dom_180: z.object({}).exactOptional(),
    dom_active: z.object({}).exactOptional(),
    finance_down_payment: z.object({}).exactOptional(),
    finance_emp: z.object({}).exactOptional(),
    finance_loan_apr: z.object({}).exactOptional(),
    finance_loan_term: z.object({}).exactOptional(),
    lease_down_payment: z.object({}).exactOptional(),
    lease_emp: z.object({}).exactOptional(),
    lease_term: z.object({}).exactOptional(),
    miles: z.object({}).exactOptional(),
    msrp: z.object({}).exactOptional(),
    price: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CarSearchRangeFacets')

const StatsItemSchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'count' }),
    max: z.int().exactOptional().openapi({ description: 'Maximum value of the field' }),
    mean: z.number().exactOptional().openapi({ description: 'Mean of the field' }),
    median: z.number().exactOptional().openapi({ description: 'median of the field' }),
    min: z.int().exactOptional().openapi({ description: 'Minimum value of the field' }),
    missing: z
      .int()
      .exactOptional()
      .openapi({ description: 'count of listings missing particular field' }),
    stddev: z.number().exactOptional().openapi({ description: 'stddev of the field' }),
    sum: z.int().exactOptional().openapi({ description: 'Summation of all values of the field' }),
    sum_of_squares: z
      .number()
      .exactOptional()
      .openapi({ description: 'sum_of_squares of the field' }),
  })
  .openapi({ required: [] })
  .openapi('StatsItem')

const CarSearchStatsSchema = z
  .object({
    dom: StatsItemSchema.exactOptional(),
    dom_180: StatsItemSchema.exactOptional(),
    dom_active: StatsItemSchema.exactOptional(),
    finance_down_payment: StatsItemSchema.exactOptional(),
    finance_down_payment_per: StatsItemSchema.exactOptional(),
    finance_emp: StatsItemSchema.exactOptional(),
    finance_loan_apr: StatsItemSchema.exactOptional(),
    finance_loan_term: StatsItemSchema.exactOptional(),
    lease_down_payment: StatsItemSchema.exactOptional(),
    lease_emp: StatsItemSchema.exactOptional(),
    lease_term: StatsItemSchema.exactOptional(),
    miles: StatsItemSchema.exactOptional(),
    msrp: StatsItemSchema.exactOptional(),
    price: StatsItemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CarSearchStats')

const ClientFiltersRequestSchema = z
  .object({
    list: z.array(z.string().openapi({ description: 'List of string values for given field' })),
  })
  .openapi({ description: 'A client filters request', required: ['list'] })
  .openapi('ClientFiltersRequest')

const ComparisonPointSchema = z
  .object({
    dealer_indicator: z.string().exactOptional().openapi({ description: 'Deal Indicator' }),
    fair_deal_price: z.number().exactOptional().openapi({ description: 'Fair Deal Price' }),
    similar_vehicles_count: z
      .number()
      .exactOptional()
      .openapi({ description: 'Similar Vehicles Count' }),
    vin_price: z.number().exactOptional().openapi({ description: 'Price for Vin' }),
  })
  .openapi({ required: [] })
  .openapi('ComparisonPoint')

const CompetitorsCarDetailsSchema = z
  .object({
    avg_market_value: z.string().exactOptional().openapi({ description: 'Estimated market value' }),
    miles: z.string().exactOptional().openapi({ description: 'mileage of car' }),
    name: z.string().exactOptional().openapi({ description: 'Current car name' }),
    price: z.string().exactOptional().openapi({ description: 'price of car' }),
  })
  .openapi({ required: [] })
  .openapi('CompetitorsCarDetails')

const CompetitorsSameCarsSchema = z
  .object({
    avg_market_value: z
      .number()
      .exactOptional()
      .openapi({ description: 'Estimated market value of year make model combination' }),
    avg_miles: z
      .number()
      .exactOptional()
      .openapi({ description: 'Mileage of year make model combination' }),
    avg_price: z
      .number()
      .exactOptional()
      .openapi({ description: 'Price of year make model combination' }),
    name: z.string().exactOptional().openapi({ description: 'ymm_comb_name' }),
  })
  .openapi({ required: [] })
  .openapi('CompetitorsSameCars')

const CompetitorsSimilarCarsSchema = z
  .object({
    avg_market_value: z
      .number()
      .exactOptional()
      .openapi({ description: 'Average market value of year make model combination' }),
    avg_miles: z
      .number()
      .exactOptional()
      .openapi({ description: 'Average mileage of year make model combination' }),
    avg_price: z
      .number()
      .exactOptional()
      .openapi({ description: 'Average price of year make model combination' }),
    name: z.string().exactOptional().openapi({ description: 'ymm_comb_name' }),
  })
  .openapi({ required: [] })
  .openapi('CompetitorsSimilarCars')

const CompetitorsPointSchema = z
  .object({
    current_car: CompetitorsCarDetailsSchema.exactOptional(),
    same_car_models: z.array(CompetitorsSameCarsSchema).exactOptional(),
    similar_car_models: z.array(CompetitorsSimilarCarsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompetitorsPoint')

const DailyStatsNestedJsonSchema = z
  .object({
    interquartile_range: z.number().exactOptional().openapi({ description: 'Interquartile range' }),
    mean: z.number().exactOptional().openapi({ description: 'Mean' }),
    median: z.number().exactOptional().openapi({ description: 'Median' }),
    population_standard_deviation: z
      .number()
      .exactOptional()
      .openapi({ description: 'population standard deviation' }),
    standard_deviation: z.number().exactOptional().openapi({ description: 'Standard Deviation' }),
    trimmed_mean: z.number().exactOptional().openapi({ description: 'Trimmed Mean' }),
    variance: z.number().exactOptional().openapi({ description: 'variance' }),
  })
  .openapi({ description: 'All nested JSON of stats', required: [] })
  .openapi('DailyStatsNestedJson')

const DailyStatsSchema = z
  .object({
    dom: DailyStatsNestedJsonSchema.exactOptional(),
    miles_stats: DailyStatsNestedJsonSchema.exactOptional(),
    price_stats: DailyStatsNestedJsonSchema.exactOptional(),
    units_for_sale: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of units of this car for sale on the market' }),
  })
  .openapi({ required: [] })
  .openapi('DailyStats')

const DealerSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'City of the dealer' }),
    country: z.string().exactOptional().openapi({ description: 'country of the dealer' }),
    data_source: z.string().exactOptional().openapi({ description: 'Datasource of the dealer' }),
    dealer_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of dealer (franchise/independent)' }),
    dealership_group_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dealership group name of dealer' }),
    distance: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Distance of dealer from given location' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique id associated with the dealer in the Marketcheck database',
      }),
    inventory_url: z.string().exactOptional().openapi({ description: 'Website of the dealer' }),
    latitude: z
      .string()
      .exactOptional()
      .openapi({ description: 'Latutide for the dealer location' }),
    listing_count: z.int().exactOptional().openapi({ description: 'Listing count of the dealer' }),
    location_ll: z
      .string()
      .exactOptional()
      .openapi({ description: 'location_ll for the dealer location' }),
    longitude: z
      .string()
      .exactOptional()
      .openapi({ description: 'Longitude for the dealer location' }),
    seller_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contact email of the dealer' }),
    seller_name: z.string().exactOptional().openapi({ description: 'Name of the dealer' }),
    seller_phone: z.string().exactOptional().openapi({ description: 'Contact no of the dealer' }),
    state: z.string().exactOptional().openapi({ description: 'State of the dealer' }),
    status: z.string().exactOptional().openapi({ description: 'Status of the dealer' }),
    street: z.string().exactOptional().openapi({ description: 'Street of the dealer' }),
    zip: z.string().exactOptional().openapi({ description: 'Zip of the dealer' }),
  })
  .openapi({ required: [] })
  .openapi('Dealer')

const DealerLandingPageSchema = z
  .object({
    crawled_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'The timestamp indicating the time when the SRP was cached' }),
    html: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTML string for the listing web page' }),
    srp_url: z.string().exactOptional().openapi({ description: 'The URL of the SRP' }),
  })
  .openapi({ description: 'Describes the dealer landing page (SRP) HTML object', required: [] })
  .openapi('DealerLandingPage')

const RatingComponentsSchema = z
  .object({
    actual_rating: z
      .number()
      .exactOptional()
      .openapi({ description: 'rating of car on that condition' }),
    rating_condition: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifices rating condition parameter' }),
  })
  .openapi({ required: [] })
  .openapi('RatingComponents')

const DealerRatingSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'City of the dealer' }),
    latitude: z
      .string()
      .exactOptional()
      .openapi({ description: 'Latutide for the dealer location' }),
    longitude: z
      .string()
      .exactOptional()
      .openapi({ description: 'Longitude for the dealer location' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the dealer' }),
    overall_rating: z
      .number()
      .exactOptional()
      .openapi({ description: 'Overall rating of the dealership on scale 1-5' }),
    rating_components: z.array(RatingComponentsSchema).exactOptional(),
    state: z.string().exactOptional().openapi({ description: 'State of the dealer' }),
    street: z.string().exactOptional().openapi({ description: 'Street of the dealer' }),
    zip: z.string().exactOptional().openapi({ description: 'Zip of the dealer' }),
  })
  .openapi({ required: [] })
  .openapi('DealerRating')

const ReviewComponentsSchema = z
  .object({
    actual_review: z
      .string()
      .exactOptional()
      .openapi({ description: 'review of car given by current user' }),
    user_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of user who has given review' }),
    user_rating: z
      .number()
      .exactOptional()
      .openapi({ description: 'rating for dealer given by user ranging from 1-5' }),
  })
  .openapi({ required: [] })
  .openapi('ReviewComponents')

const DealerReviewSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'City of the dealer' }),
    latitude: z
      .string()
      .exactOptional()
      .openapi({ description: 'Latutide for the dealer location' }),
    longitude: z
      .string()
      .exactOptional()
      .openapi({ description: 'Longitude for the dealer location' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the dealer' }),
    overall_reviews: z
      .number()
      .exactOptional()
      .openapi({ description: 'Overall reviews of the dealership' }),
    review_components: z.array(ReviewComponentsSchema).exactOptional(),
    state: z.string().exactOptional().openapi({ description: 'State of the dealer' }),
    street: z.string().exactOptional().openapi({ description: 'Street of the dealer' }),
    zip: z.string().exactOptional().openapi({ description: 'Zip of the dealer' }),
  })
  .openapi({ required: [] })
  .openapi('DealerReview')

const DealersResponseSchema = z
  .object({
    dealers: z.array(DealerSchema).exactOptional(),
    num_found: z.int().exactOptional().openapi({ description: 'number of dealers found' }),
  })
  .openapi({ description: 'Dealers Response', required: [] })
  .openapi('DealersResponse')

const DepreciationStatsSchema = z
  .object({
    current_value: z
      .number()
      .exactOptional()
      .openapi({ description: 'Price of year make model combination' }),
    five_year_from_now: z
      .number()
      .exactOptional()
      .openapi({ description: 'price after five year from now' }),
    five_year_from_now_percent: z
      .number()
      .exactOptional()
      .openapi({ description: 'price depreciation percent after five year from now' }),
    name: z.string().exactOptional().openapi({ description: 'ymm_comb_name' }),
    one_year_from_now: z
      .number()
      .exactOptional()
      .openapi({ description: 'price after one year from now' }),
    one_year_from_now_percent: z
      .number()
      .exactOptional()
      .openapi({ description: 'price depreciation percent after one year from now' }),
    two_year_from_now: z
      .number()
      .exactOptional()
      .openapi({ description: 'price after two year from now' }),
    two_year_from_now_percent: z
      .number()
      .exactOptional()
      .openapi({ description: 'price depreciation percent after two year from now' }),
  })
  .openapi({ required: [] })
  .openapi('DepreciationStats')

const DepreciationPointSchema = z
  .object({ similar_models: z.array(DepreciationStatsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DepreciationPoint')

const EconomySchema = z
  .object({
    ghg_emissions_indicator: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contains text like bad|Good|Very Good| Excellent' }),
    ghg_emissions_rating: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Show vehicle impact on climate change in terms of greeenhouse gases. This rating will be in the range of 1 - 10',
      }),
    smog_indicator: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contains text like bad|Good|Very Good| Excellent' }),
    smog_rating: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "Shows vehicle's emissions of pollutants known to cause smog and other forms of air pollution. This rating will be in the range of 1 - 10",
      }),
  })
  .openapi({ required: [] })
  .openapi('Economy')

const ErrorSchema = z
  .object({
    code: z.int().exactOptional().openapi({ description: 'Error code' }),
    message: z.string().exactOptional().openapi({ description: 'Error message' }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const FareValueSchema = z
  .object({
    avg_days_to_sold_local: z
      .int()
      .exactOptional()
      .openapi({ description: 'Average days to sold of car around given postal code & radius' }),
    avg_days_to_sold_national: z
      .int()
      .exactOptional()
      .openapi({ description: 'Average days to sold of car for all available listings' }),
    fmv_local: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Fare value calculated for all available listing around given postal code & radius',
      }),
    fmv_national: z
      .int()
      .exactOptional()
      .openapi({ description: 'Fare value calculated for all available listing' }),
  })
  .openapi({
    description: 'Fare value of a car',
    example: {
      avg_days_to_sold_local: 32,
      avg_days_to_sold_national: 42,
      fmv_local: 13854,
      fmv_national: 13915,
    },
    required: [],
  })
  .openapi('FareValue')

const FuelEfficiencySchema = z
  .object({
    annual_miles: z.number().exactOptional().openapi({ description: 'Annual Miles of Car' }),
    city_mileage: z.string().exactOptional().openapi({ description: 'City Mileage in MPG' }),
    combined_mileage: z.string().exactOptional().openapi({ description: 'Combined Mileage' }),
    highway_mileage: z.string().exactOptional().openapi({ description: 'Highway Mileage in MPG' }),
    monthly_fuel_expense: z
      .number()
      .exactOptional()
      .openapi({ description: 'Monthly fuel expense' }),
  })
  .openapi({ required: [] })
  .openapi('FuelEfficiency')

const GetClientFiltersResponseSchema = z
  .object({
    list: z.string().exactOptional().openapi({ description: 'Description of operation' }),
    status: z.int().exactOptional().openapi({ description: 'status code of operation' }),
  })
  .openapi({ description: 'A client filters response', required: [] })
  .openapi('GetClientFiltersResponse')

const HeavyEquipmentsBuildSchema = z
  .object({
    body_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Body type of the heavy equipment' }),
    category: z.string().exactOptional().openapi({ description: 'Heavy equipment category' }),
    condition: z.string().exactOptional().openapi({ description: 'Heavy equipment condition' }),
    drivetrain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Drivetrain of the heavy equipment' }),
    engine: z.string().exactOptional().openapi({ description: 'Engine of the heavy equipment' }),
    fuel_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fuel type of the heavy equipment' }),
    make: z.string().exactOptional().openapi({ description: 'Heavy equipment Make' }),
    model: z.string().exactOptional().openapi({ description: 'Heavy equipment model' }),
    sub_category: z
      .string()
      .exactOptional()
      .openapi({ description: 'Heavy equipment sub_category' }),
    transmission: z
      .string()
      .exactOptional()
      .openapi({ description: 'Transmission of the heavy equipment' }),
    trim: z.string().exactOptional().openapi({ description: 'Trim of the heavy equipment' }),
    year: z.int().exactOptional().openapi({ description: 'Year of the heavy equipment' }),
  })
  .openapi({ description: 'Describes the Heavy Equipments specification', required: [] })
  .openapi('HeavyEquipmentsBuild')

const HeavyEquipmentsBaseListingSchema = z
  .object({
    build: HeavyEquipmentsBuildSchema.exactOptional(),
    dealer: NestDealerSchema.exactOptional(),
    dist: z
      .float64()
      .exactOptional()
      .openapi({
        description: "Distance of the quipments's location from the specified user lcoation",
      }),
    dp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details Page url of the specific heavy equipment' }),
    exterior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Exterior color of the heavy equipment' }),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    interior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interior color of the heavy equipment' }),
    inventory_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Inventory type of heavy equipment' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    media: ListingNestMediaSchema.exactOptional(),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the heavy equipment' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the heavy equipment' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the heavy equipment' }),
    scraped_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Seller type for the heavy equipment' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of heavy equipment in dealers inventory' }),
    vin: z.string().exactOptional().openapi({ description: 'VIN for the heavy equipment' }),
  })
  .openapi({ description: 'Base heavy equipment listing', required: [] })
  .openapi('HeavyEquipmentsBaseListing')

const RVBuildSchema = z
  .object({
    area: z.string().exactOptional().openapi({ description: 'Area of the RV' }),
    class: z.string().exactOptional().openapi({ description: 'Class of the RV' }),
    engine: z.string().exactOptional().openapi({ description: 'Engine of the RV' }),
    fuel_type: z.string().exactOptional().openapi({ description: 'Fuel type of the RV' }),
    gvwr: z.string().exactOptional().openapi({ description: 'Gross Vehicle Weight Ratio of RV' }),
    length: z.string().exactOptional().openapi({ description: 'Length of the RV' }),
    made_in: z.string().exactOptional().openapi({ description: 'Made in of the RV' }),
    make: z.string().exactOptional().openapi({ description: 'RV Make' }),
    model: z.string().exactOptional().openapi({ description: 'RV model' }),
    sleeps: z.string().exactOptional().openapi({ description: 'Sleeps of the RV' }),
    slideouts: z.string().exactOptional().openapi({ description: 'Slideouts of the RV' }),
    transmission: z.string().exactOptional().openapi({ description: 'Transmission of the RV' }),
    year: z.int().exactOptional().openapi({ description: 'Year of the RV' }),
  })
  .openapi({ description: 'Describes the RV specification', required: [] })
  .openapi('RVBuild')

const ListingNestExtraAttributesSchema = z
  .object({
    dealer_added_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of dealer added features available with the car' }),
    electronics_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of electronic features available with the car' }),
    exterior_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of exterior features available with the car' }),
    features: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of Features available with the car' }),
    interior_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of interior features available with the car' }),
    options: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Installed Options of the car' }),
    safety_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of safety features available with the car' }),
    seller_comments: z
      .string()
      .exactOptional()
      .openapi({ description: 'Seller comments for the car' }),
    standard_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of standard features available with the car' }),
    technical_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of technical features available with the car' }),
  })
  .openapi({ required: [] })
  .openapi('ListingNestExtraAttributes')

const HeavyEquipmentsListingSchema = z
  .object({
    build: RVBuildSchema.exactOptional(),
    dealer: NestDealerSchema.exactOptional(),
    dp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details Page url of the specific heavy equipment' }),
    exterior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Exterior color of the heavy equipment' }),
    extra: ListingNestExtraAttributesSchema.exactOptional(),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    interior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interior color of the heavy equipment' }),
    inventory_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Inventory type of heavy equipment' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    media: ListingNestMediaSchema.exactOptional(),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the heavy equipment' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the heavy equipment' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the heavy equipment' }),
    scraped_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Seller type for the heavy equipment' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of heavy equipment in dealers inventory' }),
    vin: z.string().exactOptional().openapi({ description: 'VIN for the heavy equipment' }),
  })
  .openapi({
    description: 'Represents a full list of attributes available with Marketcheck for a car',
    required: [],
  })
  .openapi('HeavyEquipmentsListing')

const HeavyEquipmentsSearchFacetsSchema = z
  .object({
    body_type: z.array(FacetItemSchema).exactOptional(),
    category: z.array(FacetItemSchema).exactOptional(),
    city: z.array(FacetItemSchema).exactOptional(),
    cylinders: z.array(FacetItemSchema).exactOptional(),
    dealer_id: z.array(FacetItemSchema).exactOptional(),
    drivetrain: z.array(FacetItemSchema).exactOptional(),
    engine: z.array(FacetItemSchema).exactOptional(),
    exterior_color: z.array(FacetItemSchema).exactOptional(),
    fuel_type: z.array(FacetItemSchema).exactOptional(),
    interior_color: z.array(FacetItemSchema).exactOptional(),
    inventory_type: z.array(FacetItemSchema).exactOptional(),
    make: z.array(FacetItemSchema).exactOptional(),
    model: z.array(FacetItemSchema).exactOptional(),
    seller_name: z.array(FacetItemSchema).exactOptional(),
    source: z.array(FacetItemSchema).exactOptional(),
    state: z.array(FacetItemSchema).exactOptional(),
    sub_category: z.array(FacetItemSchema).exactOptional(),
    transmission: z.array(FacetItemSchema).exactOptional(),
    trim: z.array(FacetItemSchema).exactOptional(),
    year: z.array(FacetItemSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HeavyEquipmentsSearchFacets')

const HeavyEquipmentsSearchRangeFacetsSchema = z
  .object({
    hours_used: z.object({}).exactOptional(),
    miles: z.object({}).exactOptional(),
    price: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HeavyEquipmentsSearchRangeFacets')

const HeavyEquipmentsSearchResponseSchema = z
  .object({
    facets: z.object({}).exactOptional(),
    listings: z.array(HeavyEquipmentsBaseListingSchema).exactOptional(),
    num_found: z.int().exactOptional().openapi({ description: 'The number of listings found' }),
    range_facets: z.object({}).exactOptional(),
    stats: z.object({}).exactOptional(),
  })
  .openapi({ description: 'Heavy Equipments search query response', required: [] })
  .openapi('HeavyEquipmentsSearchResponse')

const HeavyEquipmentsSearchStatsSchema = z
  .object({
    hours_used: StatsItemSchema.exactOptional(),
    miles: StatsItemSchema.exactOptional(),
    price: StatsItemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HeavyEquipmentsSearchStats')

const HistoricalListingSchema = z
  .object({
    carfax_1_owner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate whether listing is carfax_1_owner' }),
    carfax_clean_title: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate whether listing is carfax_clean_title' }),
    city: z.string().exactOptional().openapi({ description: 'City of the listing' }),
    data_source: z.string().exactOptional().openapi({ description: 'Data source of the listing' }),
    dealer_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique MC assigned dealers id for the listing' }),
    dom: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car',
      }),
    dom_180: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car',
      }),
    dom_active: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car',
      }),
    exterior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Exterior color of the car' }),
    financing_options: z
      .array(ListingFinanceSchema)
      .exactOptional()
      .openapi({ description: 'Array of all finance offers for this listing' }),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    interior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interior color of the car' }),
    inventory_type: z.string().exactOptional().openapi({ description: 'Inventory type of car' }),
    is_certified: z.int().exactOptional().openapi({ description: 'Certified car' }),
    is_searchable: z
      .string()
      .exactOptional()
      .openapi({ description: 'Flag to indicate listing is marked searchable or not' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    latitude: z.string().exactOptional().openapi({ description: 'Latitude of the listing' }),
    leasing_options: z
      .array(ListingLeaseSchema)
      .exactOptional()
      .openapi({ description: 'Array of all finance offers for this listing' }),
    longitude: z.string().exactOptional().openapi({ description: 'Longitude of the listing' }),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the car' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the car' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the car' }),
    ref_miles: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date',
      }),
    ref_miles_dt: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The date at which the last miles was reported online. This is earlier to last_seen_date',
      }),
    ref_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date',
      }),
    ref_price_dt: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The date at which the last price was reported online. This is earlier to last_seen_date',
      }),
    scraped_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Seller name of the listing from the Marketcheck database' }),
    seller_name_o: z
      .string()
      .exactOptional()
      .openapi({ description: 'Seller name of the listing from the Marketcheck database' }),
    seller_type: z.string().exactOptional().openapi({ description: 'Seller type for the car' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    state: z.string().exactOptional().openapi({ description: 'State of the listing' }),
    status_date: z.int().exactOptional().openapi({ description: 'Timestamp of status date' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of car in dealers inventory' }),
    street: z.string().exactOptional().openapi({ description: 'Street of the listing' }),
    trim_r: z.string().exactOptional().openapi({ description: 'Trim of the car' }),
    vdp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vehicle Details Page url of the specific car' }),
    vin: z.string().exactOptional().openapi({ description: 'VIN for the car' }),
    zip: z.string().exactOptional().openapi({ description: 'Zip of the listing' }),
  })
  .openapi({ description: 'Represents a car history entry', required: [] })
  .openapi('HistoricalListing')

const ListingSchema = z
  .object({
    base_ext_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base exterior color of the car' }),
    base_int_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base interior color of the car' }),
    build: BuildSchema.exactOptional(),
    carfax_1_owner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate whether listing is carfax_1_owner' }),
    carfax_clean_title: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate whether listing is carfax_clean_title' }),
    data_source: z.string().exactOptional().openapi({ description: 'Data source of the listing' }),
    dealer: NestDealerSchema.exactOptional(),
    dom: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car',
      }),
    dom_180: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car',
      }),
    dom_active: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car',
      }),
    exterior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Exterior color of the car' }),
    extra: ListingNestExtraAttributesSchema.exactOptional(),
    financing_options: z
      .array(ListingFinanceSchema)
      .exactOptional()
      .openapi({ description: 'Array of all finance offers for this listing' }),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    first_seen_at_mc: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped at MC timestamp' }),
    first_seen_at_mc_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped at MC date' }),
    first_seen_at_source: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at source relisted timestamp' }),
    first_seen_at_source_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at source relisted date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    interior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interior color of the car' }),
    inventory_type: z.string().exactOptional().openapi({ description: 'Inventory type of car' }),
    is_certified: z.int().exactOptional().openapi({ description: 'Certified car' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    leasing_options: z
      .array(ListingLeaseSchema)
      .exactOptional()
      .openapi({ description: 'Array of all finance offers for this listing' }),
    media: ListingNestMediaSchema.exactOptional(),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the car' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the car' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the car' }),
    price_change_percent: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Percentage difference between the cars's current price and ref_price i.e. last reported price",
      }),
    rank: z
      .int()
      .exactOptional()
      .openapi({ description: 'Relative rank of the listing determined by ranking service' }),
    ref_miles: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date',
      }),
    ref_miles_dt: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The date at which the last miles was reported online. This is earlier to last_seen_date',
      }),
    ref_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date',
      }),
    ref_price_dt: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The date at which the last price was reported online. This is earlier to last_seen_date',
      }),
    score: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Score of the ranked listing as per the ranking criteria determined by ranking service',
      }),
    scraped_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_type: z.string().exactOptional().openapi({ description: 'Seller type for the car' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of car in dealers inventory' }),
    vdp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vehicle Details Page url of the specific car' }),
    vehicle_registration_mark: z
      .string()
      .exactOptional()
      .openapi({ description: ' Vehicle Registration Mark of the car' }),
    vin: z.string().exactOptional().openapi({ description: 'VIN for the car' }),
  })
  .openapi({
    description: 'Represents a full list of attributes available with Marketcheck for a car',
    required: [],
  })
  .openapi('Listing')

const ListingDebugAttributesSchema = z
  .object({
    cycle_id: z.number().exactOptional().openapi({ description: 'Cycle id' }),
    robot_id: z.number().exactOptional().openapi({ description: 'Robot id' }),
    scraped_at: z.string().exactOptional().openapi({ description: 'Scraped date and time' }),
    taxonomy_vin: z.string().exactOptional().openapi({ description: 'Taxonomy vin' }),
    template_id: z.number().exactOptional().openapi({ description: 'Template id' }),
    user_id: z.number().exactOptional().openapi({ description: 'User id' }),
  })
  .openapi({ required: [] })
  .openapi('ListingDebugAttributes')

const ListingExtraAttributesSchema = z
  .object({
    dealer_added_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of dealer added features available with the car' }),
    electronics_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of electronic features available with the car' }),
    exterior_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of exterior features available with the car' }),
    features: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of Features available with the car' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    interior_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of interior features available with the car' }),
    options: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Installed Options of the car' }),
    safety_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of safety features available with the car' }),
    seller_cmts: z.string().exactOptional().openapi({ description: 'Seller comment for the car' }),
    standard_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of standard features available with the car' }),
    technical_f: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of technical features available with the car' }),
  })
  .openapi({ required: [] })
  .openapi('ListingExtraAttributes')

const ListingMediaSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    photo_links: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of photo urls for the car' }),
    photo_url: z.string().exactOptional().openapi({ description: 'Single photo url of the car' }),
  })
  .openapi({ required: [] })
  .openapi('ListingMedia')

const ListingVDPSchema = z
  .object({
    crawled_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'The timestamp indicating the time when the VDP was cached' }),
    html: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTML string for the listing web page' }),
    vdp_url: z.string().exactOptional().openapi({ description: 'The URL of the VDP' }),
  })
  .openapi({ description: 'Describes the VDP (Vehicle Details Page) HTML object', required: [] })
  .openapi('ListingVDP')

const LocationSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'City of the listing' }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Latitude component of the location' }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Longitude component of the location' }),
    state: z.string().exactOptional().openapi({ description: 'State of the listing' }),
    zip: z.string().exactOptional().openapi({ description: 'Zip of the listing' }),
  })
  .openapi({ description: 'Represents a location', required: [] })
  .openapi('Location')

const MakeModelSchema = z
  .object({ make: z.string().exactOptional(), model: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('MakeModel')

const MdsSchema = z
  .object({
    make: z.string().exactOptional().openapi({ description: 'Make of vin provided' }),
    mds: z.int().exactOptional().openapi({ description: 'Provides Market days supply count' }),
    model: z.string().exactOptional().openapi({ description: 'Model of vin provided' }),
    sold_vins: z
      .array(z.string().openapi({ description: 'Sold vins array' }))
      .exactOptional()
      .openapi({ description: 'Sold vins array' }),
    total_active_cars_for_ymmt: z
      .int()
      .exactOptional()
      .openapi({ description: 'Active cars for ymmt combination' }),
    total_cars_sold_in_last_45_days: z
      .int()
      .exactOptional()
      .openapi({ description: 'Cars sold in last 45 days' }),
    trim: z.string().exactOptional().openapi({ description: 'Trim of vin provided' }),
    year: z.int().exactOptional().openapi({ description: 'Year of vin provided' }),
  })
  .openapi({
    description: 'Describes Market days supply results for year make model trim combination',
    required: [],
  })
  .openapi('Mds')

const MotorcycleBuildSchema = z
  .object({
    body_type: z.string().exactOptional().openapi({ description: 'Body type of the motorcycle' }),
    cylinders: z
      .int()
      .exactOptional()
      .openapi({ description: 'No of cylinders of the motorcycle' }),
    drivetrain: z.string().exactOptional().openapi({ description: 'Drivetrain of the motorcycle' }),
    dry_weight: z.string().exactOptional().openapi({ description: 'Dry weight of motorcycle' }),
    engine: z.string().exactOptional().openapi({ description: 'Engine of the motorcycle' }),
    fuel_type: z.string().exactOptional().openapi({ description: 'Fuel type of the motorcycle' }),
    made_in: z.string().exactOptional().openapi({ description: 'Made in of the motorcycle' }),
    make: z.string().exactOptional().openapi({ description: 'Motorcycle Make' }),
    model: z.string().exactOptional().openapi({ description: 'Motorcycle model' }),
    transmission: z
      .string()
      .exactOptional()
      .openapi({ description: 'Transmission of the motorcycle' }),
    trim: z.string().exactOptional().openapi({ description: 'Trim of the motorcycle' }),
    vehicle_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vehicle type of the motorcycle' }),
    year: z.int().exactOptional().openapi({ description: 'Year of the motorcycle' }),
  })
  .openapi({ description: 'Describes the Motorcycle specification', required: [] })
  .openapi('MotorcycleBuild')

const MotorcycleBaseListingSchema = z
  .object({
    build: MotorcycleBuildSchema.exactOptional(),
    color: z.string().exactOptional().openapi({ description: 'Color of the motorcycle' }),
    dealer: NestDealerSchema.exactOptional(),
    dist: z
      .float64()
      .exactOptional()
      .openapi({
        description: "Distance of the motorcycle's location from the specified user lcoation",
      }),
    dp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details Page url of the specific motorcycle' }),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    inventory_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Inventory type of motorcycle' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    media: ListingNestMediaSchema.exactOptional(),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the motorcycle' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the motorcycle' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the motorcycle' }),
    scraped_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Seller type for the motorcycle' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of motorcycle in dealers inventory' }),
    vin: z.string().exactOptional().openapi({ description: 'VIN for the Motorcycle' }),
  })
  .openapi({ description: 'Base motorcycle listing', required: [] })
  .openapi('MotorcycleBaseListing')

const MotorcycleListingSchema = z
  .object({
    build: MotorcycleBuildSchema.exactOptional(),
    color: z.string().exactOptional().openapi({ description: 'Color of the motorcycle' }),
    dealer: NestDealerSchema.exactOptional(),
    dp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details Page url of the specific motorcycle' }),
    extra: ListingNestExtraAttributesSchema.exactOptional(),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    inventory_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Inventory type of motorcycle' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    media: ListingNestMediaSchema.exactOptional(),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the motorcycle' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the motorcycle' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the motorcycle' }),
    scraped_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Seller type for the motorcycle' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of motorcycle in dealers inventory' }),
    vin: z.string().exactOptional().openapi({ description: 'VIN for the Motorcycle' }),
  })
  .openapi({
    description: 'Represents a full list of attributes available with Marketcheck for a car',
    required: [],
  })
  .openapi('MotorcycleListing')

const MotorcycleSearchFacetsSchema = z
  .object({
    body_type: z.array(FacetItemSchema).exactOptional(),
    city: z.array(FacetItemSchema).exactOptional(),
    color: z.array(FacetItemSchema).exactOptional(),
    cylinders: z.array(FacetItemSchema).exactOptional(),
    dealer_id: z.array(FacetItemSchema).exactOptional(),
    drivetrain: z.array(FacetItemSchema).exactOptional(),
    engine: z.array(FacetItemSchema).exactOptional(),
    fuel_type: z.array(FacetItemSchema).exactOptional(),
    inventory_type: z.array(FacetItemSchema).exactOptional(),
    make: z.array(FacetItemSchema).exactOptional(),
    model: z.array(FacetItemSchema).exactOptional(),
    seller_name: z.array(FacetItemSchema).exactOptional(),
    source: z.array(FacetItemSchema).exactOptional(),
    state: z.array(FacetItemSchema).exactOptional(),
    transmission: z.array(FacetItemSchema).exactOptional(),
    trim: z.array(FacetItemSchema).exactOptional(),
    vehicle_type: z.array(FacetItemSchema).exactOptional(),
    year: z.array(FacetItemSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MotorcycleSearchFacets')

const MotorcycleSearchRangeFacetsSchema = z
  .object({ miles: z.object({}).exactOptional(), price: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('MotorcycleSearchRangeFacets')

const MotorcycleSearchResponseSchema = z
  .object({
    facets: z.object({}).exactOptional(),
    listings: z.array(MotorcycleBaseListingSchema).exactOptional(),
    num_found: z.int().exactOptional().openapi({ description: 'The number of listings found' }),
    range_facets: z.object({}).exactOptional(),
    stats: z.object({}).exactOptional(),
  })
  .openapi({ description: 'Motorcycle search query response', required: [] })
  .openapi('MotorcycleSearchResponse')

const MotorcycleSearchStatsSchema = z
  .object({ miles: StatsItemSchema.exactOptional(), price: StatsItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('MotorcycleSearchStats')

const NeoVINSchema = z
  .object({
    available_options_details: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Listing of all options and packages with detailed equipment identified that could have been installed on the vehicle',
      }),
    body_subtype: z
      .string()
      .exactOptional()
      .openapi({ description: 'Body subtype (cab) of the vehicle' }),
    body_type: z.string().exactOptional().openapi({ description: 'Body type of the vehicle' }),
    city_mpg: z.float64().exactOptional().openapi({ description: 'City miles per gallon' }),
    combined_msrp: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Calculated combination of base MSRP with the delivery charges and the installed options MSRP',
      }),
    created_at: z.int().exactOptional().openapi({ description: 'vin first decoded at timestamp' }),
    created_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'vin first decoded at date' }),
    decode_version: z
      .int()
      .exactOptional()
      .openapi({ description: 'This will represent if previous vin decode values are updated' }),
    delivery_charges: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Manufacturer defined delivery charges' }),
    doors: z.int().exactOptional().openapi({ description: 'Number of doors on the vehicle' }),
    drivetrain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identified drivetrain of the vehicle' }),
    engine: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Base identification of the number of cylinders and configuration of the installed engine on the vehicle',
      }),
    exterior_color: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The manufacturer defined option code and name for the exterior color of the vehicle',
      }),
    features: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Normalized feature set of equipment identified that have been identified as installed on the vehicle, including whether that item was standard to the version of the vehicle or was added as an installed option',
      }),
    fuel_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identified Fuel type of the vehicle' }),
    height: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Overall height of the vehicle (in)' }),
    highway_mpg: z.float64().exactOptional().openapi({ description: 'Highway miles per gallon' }),
    installed_equipment: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Detailed equipment identified as installed on the vehicle, including whether that item was standard to the version of the vehicle or was added as an installed option',
      }),
    installed_options_details: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Listing of all options and packages with detailed equipment identified that have been identified as installed on the vehicle',
      }),
    installed_options_msrp: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Calculated combination of the MSRP for the installed options and packages',
      }),
    interior_color: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The manufacturer defined option code and name for the interior color of the vehicle',
      }),
    length: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Overall length of the vehicle (in)' }),
    listing_confidence: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identification of primary source data used for trim and installed colors and options',
      }),
    make: z.string().exactOptional().openapi({ description: 'Make of the vehicle' }),
    manufacturer_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Manufacturer code of the vehicle' }),
    model: z.string().exactOptional().openapi({ description: 'Model of the vehicle' }),
    msrp: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Base MSRP as defined for the defined version of that vehicle with no options installed',
      }),
    options_packages: z
      .string()
      .exactOptional()
      .openapi({ description: 'Option and package codes installed on the vehicle' }),
    package_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Extracted manufacturer package code related to selection of the vehicle version (where available / applicable)',
      }),
    package_description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Extracted manufacturer package code description (where available / applicable)',
      }),
    seating_capacity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Identified seating capacity of the vehicle' }),
    squish_vin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vin prefix identification used in the decoding of the vehicle' }),
    transmission: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identified installed Transmission of the vehicle' }),
    transmission_confidence: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identification of confidence related to the selection of the installed transmission',
      }),
    transmission_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the installed transmission' }),
    trim: z.string().exactOptional().openapi({ description: 'Trim of the vehicle' }),
    trim_confidence: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identification of confidence related to the selection of the trim',
      }),
    updated_at: z.int().exactOptional().openapi({ description: 'vin last decoded at timestamp' }),
    updated_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'vin last decoded at date' }),
    version: z.string().exactOptional().openapi({ description: 'Version Name of the vehicle' }),
    version_confidence: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identification of confidence related to the selection of the vehicle version',
      }),
    vin: z.string().exactOptional().openapi({ description: '17 char long VIN of the vehicle' }),
    weight: z.float64().exactOptional().openapi({ description: 'Gross vehicle weight (lbs)' }),
    width: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Overall width of the vehicle (in)' }),
    year: z.int().exactOptional().openapi({ description: 'Model Year of the vehicle' }),
  })
  .openapi({ description: 'Describes the NeoVIN specification', required: [] })
  .openapi('NeoVIN')

const PlotPointSchema = z
  .object({
    dom: z.number().exactOptional().openapi({ description: 'DOM' }),
    id: z.string().exactOptional().openapi({ description: 'Listing id' }),
    miles: z.number().exactOptional().openapi({ description: 'Miles' }),
    msrp: z.number().exactOptional().openapi({ description: 'Msrp' }),
    price: z.number().exactOptional().openapi({ description: 'Price' }),
    seller_name: z.string().exactOptional().openapi({ description: 'Seller name' }),
    vin: z.string().exactOptional().openapi({ description: 'Vin' }),
  })
  .openapi({ required: [] })
  .openapi('PlotPoint')

const PopularCarsSchema = z
  .object({
    new_top50: z
      .array(BasePopularSchema)
      .exactOptional()
      .openapi({ description: 'Array of all new top 50 cars' }),
    used_top50: z
      .array(BasePopularSchema)
      .exactOptional()
      .openapi({ description: 'Array of all used top 50 cars' }),
  })
  .openapi({ description: 'Top 50 popular cars', required: [] })
  .openapi('PopularCars')

const PopularityItemSchema = z
  .object({
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Color depending upon left and right analysis numbers' }),
    delta_percent: z.number().exactOptional().openapi({ description: 'Delta percent' }),
    difference: z
      .number()
      .exactOptional()
      .openapi({ description: 'Difference depending upon left and right analysis' }),
    left: z
      .number()
      .exactOptional()
      .openapi({ description: 'Left side rating for above description (2016 ford F-150 Lariat)' }),
    right: z
      .number()
      .exactOptional()
      .openapi({ description: 'Right side rating for above description (All Other Cars)' }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description for which popularity should be show eg: 2016 ford F-150 Lariat vs All Other Cars',
      }),
    thumbs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Thumbs up/down depending upon left and right analysis numbers' }),
  })
  .openapi({ required: [] })
  .openapi('PopularityItem')

const PredictedSpecsSchema = z
  .object({
    base_exterior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base exterior color of vehicle' }),
    base_interior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'base interior color of vehicle' }),
    carfax_1_owner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether car has had only one owner or not' }),
    carfax_clean_title: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether car has clean ownership records' }),
    city_mpg: z.float64().exactOptional().openapi({ description: 'City mileage' }),
    cylinders: z.int().exactOptional().openapi({ description: 'Number of cylinders' }),
    doors: z.int().exactOptional().openapi({ description: 'Number of doors' }),
    drivetrain: z.string().exactOptional().openapi({ description: 'Drivetrain of the vehicle' }),
    engine_block: z
      .string()
      .exactOptional()
      .openapi({ description: 'Engine block of the vehicle' }),
    engine_size: z.float64().exactOptional().openapi({ description: 'Engine size' }),
    highway_mpg: z.float64().exactOptional().openapi({ description: 'Highway mileage' }),
    is_certified: z.boolean().exactOptional().openapi({ description: 'Certified vehicle' }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Latutide for the vehicle location' }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Longitude for the vehicle location' }),
    make: z.string().exactOptional().openapi({ description: 'make' }),
    miles: z.int().exactOptional().openapi({ description: 'Miles' }),
    model: z.string().exactOptional().openapi({ description: 'model' }),
    transmission: z.string().exactOptional().openapi({ description: 'transmission' }),
    trim: z.string().exactOptional().openapi({ description: 'trim' }),
    year: z.int().exactOptional().openapi({ description: 'year' }),
  })
  .openapi({
    description: 'Specs of predicted vehicle',
    example: {
      base_exterior_color: 'Black',
      base_interior_color: 'Brown',
      carfax_1_owner: false,
      carfax_clean_title: false,
      city_mpg: 18,
      cylinders: 6,
      doors: 4,
      drivetrain: '4WD',
      engine_block: 'V',
      engine_size: 2.7,
      highway_mpg: 23,
      is_certified: false,
      latitude: 44.71164,
      longitude: -92.851607,
      make: 'ford',
      miles: 28741,
      model: 'f-150',
      transmission: 'Automatic',
      trim: 'xlt',
      year: 2018,
    },
    required: [],
  })
  .openapi('PredictedSpecs')

const PricePredictionSchema = z
  .object({
    predicted_price: z
      .int()
      .exactOptional()
      .openapi({ description: 'Actual predicted price of a car' }),
    price_range: z
      .object({
        lower_bound: z.int().exactOptional().openapi({ description: 'Lower bound' }),
        upper_bound: z.int().exactOptional().openapi({ description: 'Upper bound' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Price range around the predicted price, estimating the error in predicted price',
        required: [],
      }),
    specs: PredictedSpecsSchema.exactOptional(),
  })
  .openapi({
    description: 'Predicted price of a car',
    example: {
      predicted_price: 37998,
      price_range: { lower_bound: 32913, upper_bound: 44358 },
      specs: {
        base_exterior_color: 'Black',
        base_interior_color: 'Brown',
        carfax_1_owner: false,
        carfax_clean_title: false,
        city_mpg: 18,
        cylinders: 6,
        doors: 4,
        drivetrain: '4WD',
        engine_block: 'V',
        engine_size: 2.7,
        highway_mpg: 23,
        is_certified: false,
        latitude: 44.71164,
        longitude: -92.851607,
        make: 'ford',
        miles: 28741,
        model: 'f-150',
        transmission: 'Automatic',
        trim: 'xlt',
        year: 2018,
      },
    },
    required: [],
  })
  .openapi('PricePrediction')

const RVBaseListingSchema = z
  .object({
    build: RVBuildSchema.exactOptional(),
    dealer: NestDealerSchema.exactOptional(),
    dist: z
      .float64()
      .exactOptional()
      .openapi({ description: "Distance of the RV's location from the specified user lcoation" }),
    dp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details Page url of the specific RV' }),
    exterior_color: z.string().exactOptional().openapi({ description: 'Exterior color of the RV' }),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    interior_color: z.string().exactOptional().openapi({ description: 'Interior color of the RV' }),
    inventory_type: z.string().exactOptional().openapi({ description: 'Inventory type of RV' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    media: ListingNestMediaSchema.exactOptional(),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the RV' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the RV' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the RV' }),
    scraped_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_type: z.string().exactOptional().openapi({ description: 'Seller type for the RV' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of RV in dealers inventory' }),
    vin: z.string().exactOptional().openapi({ description: 'VIN for the RV' }),
  })
  .openapi({ description: 'Base RV listing', required: [] })
  .openapi('RVBaseListing')

const RVListingSchema = z
  .object({
    build: RVBuildSchema.exactOptional(),
    dealer: NestDealerSchema.exactOptional(),
    dp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details Page url of the specific RV' }),
    exterior_color: z.string().exactOptional().openapi({ description: 'Exterior color of the RV' }),
    extra: ListingNestExtraAttributesSchema.exactOptional(),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    interior_color: z.string().exactOptional().openapi({ description: 'Interior color of the RV' }),
    inventory_type: z.string().exactOptional().openapi({ description: 'Inventory type of RV' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    media: ListingNestMediaSchema.exactOptional(),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the RV' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the RV' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the RV' }),
    scraped_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_type: z.string().exactOptional().openapi({ description: 'Seller type for the RV' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of RV in dealers inventory' }),
    vin: z.string().exactOptional().openapi({ description: 'VIN for the RV' }),
  })
  .openapi({
    description: 'Represents a full list of attributes available with Marketcheck for a car',
    required: [],
  })
  .openapi('RVListing')

const RVSearchFacetsSchema = z
  .object({
    area: z.array(FacetItemSchema).exactOptional(),
    awnings: z.array(FacetItemSchema).exactOptional(),
    city: z.array(FacetItemSchema).exactOptional(),
    class: z.array(FacetItemSchema).exactOptional(),
    dealer_id: z.array(FacetItemSchema).exactOptional(),
    engine: z.array(FacetItemSchema).exactOptional(),
    exterior_color: z.array(FacetItemSchema).exactOptional(),
    fuel_type: z.array(FacetItemSchema).exactOptional(),
    interior_color: z.array(FacetItemSchema).exactOptional(),
    inventory_type: z.array(FacetItemSchema).exactOptional(),
    length: z.array(FacetItemSchema).exactOptional(),
    make: z.array(FacetItemSchema).exactOptional(),
    model: z.array(FacetItemSchema).exactOptional(),
    seller_name: z.array(FacetItemSchema).exactOptional(),
    sleeps: z.array(FacetItemSchema).exactOptional(),
    slideouts: z.array(FacetItemSchema).exactOptional(),
    source: z.array(FacetItemSchema).exactOptional(),
    state: z.array(FacetItemSchema).exactOptional(),
    transmission: z.array(FacetItemSchema).exactOptional(),
    year: z.array(FacetItemSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RVSearchFacets')

const RVSearchResponseSchema = z
  .object({
    facets: z.object({}).exactOptional(),
    listings: z.array(RVBaseListingSchema).exactOptional(),
    num_found: z.int().exactOptional().openapi({ description: 'The number of listings found' }),
    range_facets: z.object({}).exactOptional(),
    stats: z.object({}).exactOptional(),
  })
  .openapi({ description: 'RV search query response', required: [] })
  .openapi('RVSearchResponse')

const RangeFacetItemSchema = z
  .object({
    after: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of listings that have field value after range end' }),
    before: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of listings that have field value before range start' }),
    between: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of listings that have field value between range start and range end',
      }),
    counts: z
      .array(
        z
          .object({
            count: z.int().exactOptional(),
            lower_bound: z.int().exactOptional(),
            upper_bound: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    end: z.int().exactOptional().openapi({ description: 'The end of range' }),
    gap: z
      .int()
      .exactOptional()
      .openapi({ description: 'The range gap applied for range faceting' }),
    start: z.int().exactOptional().openapi({ description: 'The start of range' }),
  })
  .openapi({ required: [] })
  .openapi('RangeFacetItem')

const SafetyRatingSchema = z
  .object({
    driver_front_rating: z
      .number()
      .exactOptional()
      .openapi({ description: 'Driver front rating of the Listing on scale 1-5' }),
    driver_side_rating: z
      .number()
      .exactOptional()
      .openapi({ description: 'Driver Side rating of the Listing on scale 1-5' }),
    overall_rating: z
      .number()
      .exactOptional()
      .openapi({ description: 'Overall rating of the Listing on scale 1-5' }),
    passenger_front_rating: z
      .number()
      .exactOptional()
      .openapi({ description: 'Passenger front rating of the Listing on scale 1-5' }),
    roll_over_rating: z
      .number()
      .exactOptional()
      .openapi({ description: 'Roll Over rating of the Listing on scale 1-5' }),
  })
  .openapi({ description: 'Describes the Safety Ratings of current listing', required: [] })
  .openapi('SafetyRating')

const SalesSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'City' }),
    counts: z.int().exactOptional().openapi({ description: 'Sales count' }),
    cpo: z.int().exactOptional().openapi({ description: 'cpo sales count' }),
    dom_stats: SalesStatsSchema.exactOptional(),
    inventory_type: z.string().exactOptional().openapi({ description: 'inventory_type' }),
    make: z.string().exactOptional().openapi({ description: 'Make' }),
    miles_stats: SalesStatsSchema.exactOptional(),
    model: z.string().exactOptional().openapi({ description: 'model' }),
    'non-cpo': z.int().exactOptional().openapi({ description: 'Non-cpo sales count' }),
    price_stats: SalesStatsSchema.exactOptional(),
    state: z.string().exactOptional().openapi({ description: 'State' }),
    taxonomy_vin: z.string().exactOptional().openapi({ description: 'taxonomy_vin' }),
    trim: z.string().exactOptional().openapi({ description: 'trim' }),
    year: z.string().exactOptional().openapi({ description: 'year' }),
  })
  .openapi({ description: 'Sales count query response', required: [] })
  .openapi('Sales')

const SearchAutoCompleteResponseSchema = z
  .object({
    terms: z
      .array(
        z
          .object({
            count: z
              .int()
              .exactOptional()
              .openapi({
                description: 'The number of listings with item as value for given field',
              }),
            item: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The actual term that either has prefix or contains given input',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Search auto complete query response', required: [] })
  .openapi('SearchAutoCompleteResponse')

const SearchResponseSchema = z
  .object({
    facets: CarSearchFacetsSchema.exactOptional(),
    listings: z.array(BaseListingSchema).exactOptional(),
    num_found: z.int().exactOptional().openapi({ description: 'The number of listings found' }),
    range_facets: CarSearchRangeFacetsSchema.exactOptional(),
    stats: CarSearchStatsSchema.exactOptional(),
  })
  .openapi({ description: 'Search query response', required: [] })
  .openapi('SearchResponse')

const SetClientFiltersResponseSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'Description of operation' }),
    status: z.int().exactOptional().openapi({ description: 'status code of operation' }),
  })
  .openapi({ description: 'A client filters response', required: [] })
  .openapi('SetClientFiltersResponse')

const SpecsAutoCompleteResponseSchema = z
  .object({
    terms: z
      .array(
        z
          .string()
          .openapi({
            description: 'The actual term that either has prefix or contains given input',
          }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Specs auto complete query response', required: [] })
  .openapi('SpecsAutoCompleteResponse')

const TrendPointSchema = z
  .object({
    dom: z.number().exactOptional().openapi({ description: 'Days on Market' }),
    miles: z.number().exactOptional().openapi({ description: 'Miles' }),
    msrp: z.number().exactOptional().openapi({ description: 'MSRP' }),
    price: z.number().exactOptional().openapi({ description: 'Price' }),
    units: z.number().exactOptional().openapi({ description: 'Units' }),
  })
  .openapi({ required: [] })
  .openapi('TrendPoint')

const UKBaseListingSchema = z
  .object({
    base_ext_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base exterior color of the car' }),
    base_int_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base interior color of the car' }),
    build: BuildSchema.exactOptional(),
    car_location: CarLocationSchema.exactOptional(),
    carfax_1_owner: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate whether listing is carfax_1_owner' }),
    carfax_clean_title: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate whether listing is carfax_clean_title' }),
    co2_emissions: z.string().exactOptional().openapi({ description: 'CO2 emissions by car' }),
    data_source: z.string().exactOptional().openapi({ description: 'Data source of the listing' }),
    dealer: NestDealerSchema.exactOptional(),
    dist: z
      .float64()
      .exactOptional()
      .openapi({ description: "Distance of the car's location from the specified user lcoation" }),
    dom: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car',
      }),
    dom_180: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car',
      }),
    dom_active: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car',
      }),
    exterior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Exterior color of the car' }),
    financing_options: z
      .array(ListingFinanceSchema)
      .exactOptional()
      .openapi({ description: 'Array of all finance offers for this listing' }),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    in_transit: z.boolean().exactOptional().openapi({ description: 'in_transit of the listing' }),
    insurance_group: z.string().exactOptional().openapi({ description: 'Insurance Group of car' }),
    interior_color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interior color of the car' }),
    inventory_type: z.string().exactOptional().openapi({ description: 'Inventory type of car' }),
    is_certified: z.int().exactOptional().openapi({ description: 'Certified car' }),
    is_translated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'is_translated of the listing' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    leasing_options: z
      .array(ListingLeaseSchema)
      .exactOptional()
      .openapi({ description: 'Array of all finance offers for this listing' }),
    media: ListingNestMediaSchema.exactOptional(),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the car' }),
    model_code: z.string().exactOptional().openapi({ description: 'model_code of the listing' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the car' }),
    num_owners: z.string().exactOptional().openapi({ description: 'Number of owners' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the car' }),
    price_change_percent: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Percentage difference between the cars's current price and ref_price i.e. last reported price",
      }),
    ref_miles: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date',
      }),
    ref_miles_dt: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The date at which the last miles was reported online. This is earlier to last_seen_date',
      }),
    ref_price: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date',
      }),
    ref_price_dt: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The date at which the last price was reported online. This is earlier to last_seen_date',
      }),
    scraped_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_type: z.string().exactOptional().openapi({ description: 'Seller type for the car' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of car in dealers inventory' }),
    title_type: z.string().exactOptional().openapi({ description: 'title_type of the listing' }),
    uvc_id: z.string().exactOptional().openapi({ description: 'UVC ID of the car' }),
    vdp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vehicle Details Page url of the specific car' }),
    vehicle_registration_mark: z
      .string()
      .exactOptional()
      .openapi({ description: ' Vehicle Registration Mark of the car' }),
  })
  .openapi({ description: 'Minimal set of attributes describing a listing', required: [] })
  .openapi('UKBaseListing')

const UKCarSearchFacetsSchema = z
  .object({
    base_exterior_color: z.array(FacetItemSchema).exactOptional(),
    base_interior_color: z.array(FacetItemSchema).exactOptional(),
    body_subtype: z.array(FacetItemSchema).exactOptional(),
    body_type: z.array(FacetItemSchema).exactOptional(),
    car_location_city: z.array(FacetItemSchema).exactOptional(),
    car_location_county: z.array(FacetItemSchema).exactOptional(),
    car_location_seller_name: z.array(FacetItemSchema).exactOptional(),
    car_location_street: z.array(FacetItemSchema).exactOptional(),
    car_location_zip: z.array(FacetItemSchema).exactOptional(),
    car_type: z.array(FacetItemSchema).exactOptional(),
    carfax_1_owner: z.array(FacetItemSchema).exactOptional(),
    carfax_clean_title: z.array(FacetItemSchema).exactOptional(),
    city: z.array(FacetItemSchema).exactOptional(),
    co2_emissions: z.array(FacetItemSchema).exactOptional(),
    cylinders: z.array(FacetItemSchema).exactOptional(),
    data_source: z.array(FacetItemSchema).exactOptional(),
    dealer_id: z.array(FacetItemSchema).exactOptional(),
    dealer_type: z.array(FacetItemSchema).exactOptional(),
    dealership_group_name: z.array(FacetItemSchema).exactOptional(),
    doors: z.array(FacetItemSchema).exactOptional(),
    drivetrain: z.array(FacetItemSchema).exactOptional(),
    engine: z.array(FacetItemSchema).exactOptional(),
    engine_aspiration: z.array(FacetItemSchema).exactOptional(),
    engine_block: z.array(FacetItemSchema).exactOptional(),
    engine_size: z.array(FacetItemSchema).exactOptional(),
    exterior_color: z.array(FacetItemSchema).exactOptional(),
    fca_status: z.array(FacetItemSchema).exactOptional(),
    fuel_type: z.array(FacetItemSchema).exactOptional(),
    in_transit: z.array(FacetItemSchema).exactOptional(),
    insurance_group: z.array(FacetItemSchema).exactOptional(),
    interior_color: z.array(FacetItemSchema).exactOptional(),
    make: z.array(FacetItemSchema).exactOptional(),
    mas_code: z.array(FacetItemSchema).exactOptional(),
    model: z.array(FacetItemSchema).exactOptional(),
    num_owners: z.array(FacetItemSchema).exactOptional(),
    powertrain_type: z.array(FacetItemSchema).exactOptional(),
    seating_capacity: z.array(FacetItemSchema).exactOptional(),
    seller_name: z.array(FacetItemSchema).exactOptional(),
    seller_type: z.array(FacetItemSchema).exactOptional(),
    source: z.array(FacetItemSchema).exactOptional(),
    state: z.array(FacetItemSchema).exactOptional(),
    transmission: z.array(FacetItemSchema).exactOptional(),
    trim: z.array(FacetItemSchema).exactOptional(),
    vehicle_registration_mark: z.array(FacetItemSchema).exactOptional(),
    vehicle_type: z.array(FacetItemSchema).exactOptional(),
    vrm: z.array(FacetItemSchema).exactOptional(),
    year: z.array(FacetItemSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UKCarSearchFacets')

const UKRVBuildSchema = z
  .object({
    area: z.string().exactOptional().openapi({ description: 'Area of the RV' }),
    berths: z.string().exactOptional().openapi({ description: 'berths of RV' }),
    category: z.string().exactOptional().openapi({ description: 'category of the RV' }),
    chassis: z.string().exactOptional().openapi({ description: 'chassis of RV' }),
    drive_type: z.string().exactOptional().openapi({ description: 'drive_type of RV' }),
    drivetrain: z.string().exactOptional().openapi({ description: 'Drivetrain of the RV' }),
    engine: z.string().exactOptional().openapi({ description: 'Engine of the RV' }),
    engine_size: z.string().exactOptional().openapi({ description: 'engine_size of RV' }),
    exterior_length: z.string().exactOptional().openapi({ description: 'exterior_length of RV' }),
    floorplan: z.string().exactOptional().openapi({ description: 'floorplan of RV' }),
    floorplan_layout: z.string().exactOptional().openapi({ description: 'floorplan_layout of RV' }),
    fuel_type: z.string().exactOptional().openapi({ description: 'Fuel type of the RV' }),
    gvwr: z.string().exactOptional().openapi({ description: 'Gross Vehicle Weight Ratio of RV' }),
    interior_length: z.string().exactOptional().openapi({ description: 'interior_length of RV' }),
    inventory_type: z.string().exactOptional().openapi({ description: 'Inventory type of the RV' }),
    make: z.string().exactOptional().openapi({ description: 'RV Make' }),
    model: z.string().exactOptional().openapi({ description: 'RV model' }),
    mtplm: z.string().exactOptional().openapi({ description: 'mtplm of RV' }),
    slideouts: z.string().exactOptional().openapi({ description: 'Slideouts of the RV' }),
    steering: z.string().exactOptional().openapi({ description: 'steering of RV' }),
    sub_category: z.string().exactOptional().openapi({ description: 'sub_category of the RV' }),
    transmission: z.string().exactOptional().openapi({ description: 'Transmission of the RV' }),
    width: z.string().exactOptional().openapi({ description: 'width of RV' }),
    year: z.int().exactOptional().openapi({ description: 'Year of the RV' }),
  })
  .openapi({ description: 'Describes the RV specification', required: [] })
  .openapi('UKRVBuild')

const UKRVBaseListingSchema = z
  .object({
    availability_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'availability_status of the listing' }),
    build: UKRVBuildSchema.exactOptional(),
    currency_indicator: z
      .string()
      .exactOptional()
      .openapi({ description: 'currency_indicator of the listing' }),
    dealer: NestDealerSchema.exactOptional(),
    dist: z
      .float64()
      .exactOptional()
      .openapi({ description: "Distance of the RV's location from the specified user lcoation" }),
    exterior_color: z.string().exactOptional().openapi({ description: 'Exterior color of the RV' }),
    first_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped timestamp' }),
    first_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing first seen at first scraped date' }),
    heading: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing title as displayed on the source website' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific listing from the Marketcheck database',
      }),
    interior_color: z.string().exactOptional().openapi({ description: 'Interior color of the RV' }),
    inventory_type: z.string().exactOptional().openapi({ description: 'Inventory type of RV' }),
    last_seen_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) timestamp' }),
    last_seen_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at (most recent) date' }),
    media: ListingNestMediaSchema.exactOptional(),
    miles: z
      .int()
      .exactOptional()
      .openapi({ description: 'Odometer reading / reported miles usage for the RV' }),
    miles_indicator: z
      .string()
      .exactOptional()
      .openapi({ description: 'miles_indicator of the listing' }),
    mot_expires: z.string().exactOptional().openapi({ description: 'mot_expires of the listing' }),
    motorhome_build: z
      .string()
      .exactOptional()
      .openapi({ description: 'motorhome_build of the listing' }),
    msrp: z.int().exactOptional().openapi({ description: 'MSRP for the RV' }),
    origin: z.string().exactOptional().openapi({ description: 'origin of the listing' }),
    price: z.int().exactOptional().openapi({ description: 'Asking price for the RV' }),
    scraped_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date timestamp' }),
    scraped_at_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Listing last seen at date' }),
    seller_type: z.string().exactOptional().openapi({ description: 'Seller type for the RV' }),
    source: z.string().exactOptional().openapi({ description: 'Source domain of the listing' }),
    stock_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock number of RV in dealers inventory' }),
    vdp_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details Page url of the specific RV' }),
    vin: z.string().exactOptional().openapi({ description: 'VIN for the RV' }),
  })
  .openapi({ description: 'Base RV listing', required: [] })
  .openapi('UKRVBaseListing')

const UKRVSearchFacetsSchema = z
  .object({
    berths: z.array(FacetItemSchema).exactOptional(),
    category: z.array(FacetItemSchema).exactOptional(),
    chassis: z.array(FacetItemSchema).exactOptional(),
    city: z.array(FacetItemSchema).exactOptional(),
    dealer_id: z.array(FacetItemSchema).exactOptional(),
    drive_type: z.array(FacetItemSchema).exactOptional(),
    drivetrain: z.array(FacetItemSchema).exactOptional(),
    engine: z.array(FacetItemSchema).exactOptional(),
    exterior_color: z.array(FacetItemSchema).exactOptional(),
    fuel_type: z.array(FacetItemSchema).exactOptional(),
    interior_color: z.array(FacetItemSchema).exactOptional(),
    inventory_type: z.array(FacetItemSchema).exactOptional(),
    make: z.array(FacetItemSchema).exactOptional(),
    model: z.array(FacetItemSchema).exactOptional(),
    postal_code: z.array(FacetItemSchema).exactOptional(),
    seller_name: z.array(FacetItemSchema).exactOptional(),
    source: z.array(FacetItemSchema).exactOptional(),
    state: z.array(FacetItemSchema).exactOptional(),
    steering: z.array(FacetItemSchema).exactOptional(),
    sub_category: z.array(FacetItemSchema).exactOptional(),
    transmission: z.array(FacetItemSchema).exactOptional(),
    year: z.array(FacetItemSchema).exactOptional(),
    zip: z.array(FacetItemSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UKRVSearchFacets')

const UKRVSearchRangeFacetsSchema = z
  .object({
    exterior_length: z.object({}).exactOptional(),
    interior_length: z.object({}).exactOptional(),
    miles: z.object({}).exactOptional(),
    price: z.object({}).exactOptional(),
    width: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UKRVSearchRangeFacets')

const UKRVSearchResponseSchema = z
  .object({
    facets: z.object({}).exactOptional(),
    listings: z.array(UKRVBaseListingSchema).exactOptional(),
    num_found: z.int().exactOptional().openapi({ description: 'The number of listings found' }),
    range_facets: z.object({}).exactOptional(),
    stats: z.object({}).exactOptional(),
  })
  .openapi({ description: 'RV search query response', required: [] })
  .openapi('UKRVSearchResponse')

const UKSearchResponseSchema = z
  .object({
    facets: UKCarSearchFacetsSchema.exactOptional(),
    listings: z.array(UKBaseListingSchema).exactOptional(),
    num_found: z.int().exactOptional().openapi({ description: 'The number of listings found' }),
    range_facets: CarSearchRangeFacetsSchema.exactOptional(),
    stats: CarSearchStatsSchema.exactOptional(),
  })
  .openapi({ description: 'Search query response', required: [] })
  .openapi('UKSearchResponse')

const VinReportSchema = z
  .object({
    icon: z.string().exactOptional().openapi({ description: 'icon url' }),
    some_text: z.string().exactOptional().openapi({ description: 'Some descriptional text' }),
  })
  .openapi({ required: [] })
  .openapi('VinReport')

const ActiveInventoryDateRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623',
      in: 'query',
      name: 'active_inventory_date_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        transformConstraints: [{ transformer: 'parseDate', type: 'date' }],
      },
    },
  })

const ApiKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The API Authentication Key. Mandatory with all API calls.',
      in: 'query',
      name: 'api_key',
      schema: { type: 'string' },
      required: false,
    },
  })

const AppendApiKeyParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description: 'Flag on whether to include api_key in response API urls (if any)',
      in: 'query',
      name: 'append_api_key',
      schema: { default: true, type: 'boolean' },
      required: false,
    },
  })

const BaseExteriorColorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated',
      in: 'query',
      name: 'base_exterior_color',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'base_exterior_color',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const BaseInteriorColorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated',
      in: 'query',
      name: 'base_interior_color',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'base_interior_color',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const BodySubtypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated',
      in: 'query',
      name: 'body_subtype',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'body_subtype',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const BodyTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their body type',
      in: 'query',
      name: 'body_type',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'body_type',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const BoostParamsSchema = z
  .stringbool()
  .pipe(z.union([z.literal(true), z.literal(false)]))
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description: 'Flag to sort listings based on client filter score in solr',
      in: 'query',
      name: 'boost',
      required: false,
      schema: { default: true, enum: [true, false], type: 'boolean' },
    },
  })

const CarCarTypeParamsSchema = z
  .enum(['new', 'used', 'certified'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Car type. Allowed values are - new / used / certified',
      in: 'query',
      name: 'car_type',
      required: false,
      schema: { enum: ['new', 'used', 'certified'], type: 'string' },
    },
  })

const CarCountryParamsSchema = z
  .enum(['US', 'CA', 'us', 'ca', 'all', 'ALL'])
  .default('US')
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on Country in which they are listed',
      in: 'query',
      name: 'country',
      schema: { default: 'US', enum: ['US', 'CA', 'us', 'ca', 'all', 'ALL'], type: 'string' },
      required: false,
    },
  })

const CarDealerIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Dealer id to filter the listings.',
      in: 'query',
      name: 'dealer_id',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'seed_id',
        transformConstraints: [{ transformer: 'parseInt', type: 'integer' }],
        widgetExclusive: true,
      },
    },
  })

const CarDedupParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source',
      in: 'query',
      name: 'dedup',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const CarIncludeFinanceParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Boolean param to search for listings that include finance options in them',
      in: 'query',
      name: 'include_finance',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const CarIncludeLeaseParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Boolean param to search for listings that include leasing options in them',
      in: 'query',
      name: 'include_lease',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const CarLocationCityParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter cars on city',
      in: 'query',
      name: 'car_location_city',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'car_city_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const CarLocationCountyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter cars on county',
      in: 'query',
      name: 'car_location_county',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'car_county_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const CarLocationLatitudeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float64(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Latitude component of car location',
      in: 'query',
      name: 'car_location_latitude',
      schema: { format: 'double', type: 'number' },
      required: false,
    },
  })

const CarLocationLongitudeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float64(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Longitude component of car location',
      in: 'query',
      name: 'car_location_longitude',
      schema: { format: 'double', type: 'number' },
      required: false,
    },
  })

const CarLocationSellerNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter cars on seller name',
      in: 'query',
      name: 'car_location_seller_name',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'car_dealership_name_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const CarLocationStreetParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter cars on street name',
      in: 'query',
      name: 'car_location_street',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'car_street_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const CarLocationZipParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on car ZIP around which they are listed',
      in: 'query',
      name: 'car_location_zip',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'car_zip_ss',
        transformConstraints: [
          { regex: '\\s', replace: '', transformer: 'regexReplace' },
          { transformer: 'caseTransformer', type: 'string' },
        ],
      },
      required: false,
    },
  })

const CarNodedupParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin',
      in: 'query',
      name: 'nodedup',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const CarPlotParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If plot has value true results in around 25k coordinates with limited fields to plot respective graph',
      in: 'query',
      name: 'plot',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const CarSellerTypeParamsSchema = z
  .string()
  .default('dealer')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Seller type to filter cars on. Valid filter values are those that our Search facets API returns for unique seller types. You can pass in multiple seller type values comma separated.',
      in: 'query',
      name: 'seller_type',
      required: false,
      schema: { default: 'dealer', format: 'string', type: 'string' },
    },
  })

const CarSourceParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their source only for widget requests',
      in: 'query',
      name: 'source',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'source',
        transformConstraints: [{ transformer: 'urlTransformer', type: 'string' }],
        widgetExclusive: true,
      },
      required: false,
    },
  })

const CarTaxonomyVinsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.',
      in: 'query',
      name: 'taxonomy_vins',
      required: false,
      schema: { type: 'string' },
    },
  })

const CarTypeParamsSchema = z
  .enum(['new', 'used'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Car type. Allowed values are - new / used',
      in: 'query',
      name: 'car_type',
      required: false,
      schema: { enum: ['new', 'used'], type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'in',
        targetAlias: 'inventory_type',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const CarUkCountryParamsSchema = z
  .enum(['uk', 'england', 'scotland', 'northan ireland', 'wales'])
  .default('uk')
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on Country in which they are listed',
      in: 'query',
      name: 'country',
      schema: {
        default: 'uk',
        enum: ['uk', 'england', 'scotland', 'northan ireland', 'wales'],
        type: 'string',
      },
      required: false,
    },
  })

const CarVinsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc',
      in: 'query',
      name: 'vins',
      required: false,
      schema: { type: 'string' },
    },
  })

const Carfax_1OwnerParamsSchema = z
  .enum(['true', 'false'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Indicates whether car has had only one owner or not',
      in: 'query',
      name: 'carfax_1_owner',
      required: false,
      schema: { enum: ['true', 'false'], type: 'string' },
    },
  })

const CarfaxCleanTitleParamsSchema = z
  .enum(['true', 'false'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Indicates whether car has clean ownership records',
      in: 'query',
      name: 'carfax_clean_title',
      required: false,
      schema: { enum: ['true', 'false'], type: 'string' },
    },
  })

const CityParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on City in which they are listed',
      in: 'query',
      name: 'city',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'city',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const CityMpgRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'city_mpg_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'city_mpg',
        transformConstraints: [
          { defaultMax: 1000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const ClientFiltersParamsSchema = z
  .stringbool()
  .pipe(z.union([z.literal(true), z.literal(false)]))
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description: 'Flag to add explicit filters set on client level in solr',
      in: 'query',
      name: 'client_filters',
      required: false,
      schema: { default: true, enum: [true, false], type: 'boolean' },
    },
  })

const ColorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Color of the vehicle',
      in: 'query',
      name: 'color',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'color',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const CountryParamsSchema = z
  .enum(['US', 'CA', 'us', 'ca'])
  .default('US')
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on Country in which they are listed',
      in: 'query',
      name: 'country',
      schema: { default: 'US', enum: ['US', 'CA', 'us', 'ca'], type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'country',
        transformConstraints: [{ maxLength: 2, transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const CountyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on county in which they are listed',
      in: 'query',
      name: 'county',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'county',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const CylindersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their cylinders',
      in: 'query',
      name: 'cylinders',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'cylinders',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const DealerIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Dealer id to filter the listings.',
      in: 'query',
      name: 'dealer_id',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'seed_id',
        transformConstraints: [{ transformer: 'parseInt', type: 'integer' }],
      },
    },
  })

const DealerNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter listings on dealer_name',
      in: 'query',
      name: 'dealer_name',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'seller_name',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const DealerTypeParamsSchema = z
  .enum(['franchise', 'independent'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter based on dealer type independant or franchise',
      in: 'query',
      name: 'dealer_type',
      required: false,
      schema: { enum: ['franchise', 'independent'], type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'in',
        separator: ',',
        targetAlias: 'dealer_type',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const DealershipGroupNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Name of the dealership group to search for',
      in: 'query',
      name: 'dealership_group_name',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'dealership_group_name_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const Dom_180RangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50',
      in: 'query',
      name: 'dom_180_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'dom_180_is',
        transformConstraints: [
          { defaultMax: 30, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const DomActiveRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50',
      in: 'query',
      name: 'dom_active_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'dom_active_is',
        transformConstraints: [
          { defaultMax: 30, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const DomRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50',
      in: 'query',
      name: 'dom_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'dom_is',
        transformConstraints: [
          { defaultMax: 30, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const DoorsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated',
      in: 'query',
      name: 'doors',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'doors_is',
        transformConstraints: [{ min: 1, transformer: 'parseInt', type: 'integer' }],
      },
    },
  })

const DrivetrainParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their drivetrain',
      in: 'query',
      name: 'drivetrain',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'drivetrain',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const EngineParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their engine',
      in: 'query',
      name: 'engine',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'engine',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const EngineAspirationParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated',
      in: 'query',
      name: 'engine_aspiration',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'engine_aspiration',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const EngineBlockParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated',
      in: 'query',
      name: 'engine_block',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'engine_block_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const EngineSizeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated',
      in: 'query',
      name: 'engine_size',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'engine_size',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const EngineSizeRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2',
      in: 'query',
      name: 'engine_size_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'engine_size_ss',
        transformConstraints: [
          { defaultMax: 100, defaultMin: 0, transformer: 'parseFloat', type: 'integer' },
        ],
      },
    },
  })

const ExcludeCertifiedParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Boolean param to exclude certified cars from search results',
      in: 'query',
      name: 'exclude_certified',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const ExcludeDealerIdsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A list of dealer ids to exclude from result',
      in: 'query',
      name: 'exclude_dealer_ids',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        targetAlias: 'seed_id',
        transformConstraints: [{ transformer: 'parseInt', type: 'integer' }],
      },
    },
  })

const ExcludeDealerListingsParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'A list of fsbo listings to exclude from result',
      in: 'query',
      name: 'exclude_dealer_listings',
      required: false,
      schema: { type: 'boolean' },
      'x-field-config': {
        isConfigurable: true,
        operator: 'equals',
        targetAlias: 'exclude_dealer_listings_is',
        transformConstraints: [{ transformer: 'boolToFlag', type: 'string' }],
      },
    },
  })

const ExcludeSourcesParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A list of sources to exclude from result',
      in: 'query',
      name: 'exclude_sources',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        targetAlias: 'source',
        transformConstraints: [{ transformer: 'urlTransformer', type: 'string' }],
      },
    },
  })

const ExcludeWriteOffCategoryParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To exclude write off category',
      in: 'query',
      name: 'exclude_write_off_category',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: '-write_off_category_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
        widgetExclusive: true,
      },
    },
  })

const ExpiredParamsSchema = z
  .enum(['true', 'false'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Boolean falg to either fetch only the expired listings or active ones',
      in: 'query',
      name: 'expired',
      required: false,
      schema: { enum: ['true', 'false'], type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'in',
        targetAlias: 'is_expired_listing',
        transformConstraints: [{ transformer: 'boolToFlag', type: 'string' }],
      },
    },
  })

const ExteriorColorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated',
      in: 'query',
      name: 'exterior_color',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'exterior_color',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const FacetMinCountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      description: 'Provide minimum count value for facets',
      in: 'query',
      name: 'facet_min_count',
      required: false,
      schema: { default: 1, format: 'number', type: 'number' },
    },
  })

const FacetSortParamsSchema = z
  .enum(['count', 'index'])
  .default('count')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param',
      in: 'query',
      name: 'facet_sort',
      required: false,
      schema: { default: 'count', enum: ['count', 'index'], type: 'string' },
    },
  })

const FacetsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.',
      in: 'query',
      name: 'facets',
      required: false,
      schema: { type: 'string' },
    },
  })

const FcaStatusParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter on fca status',
      in: 'query',
      name: 'fca_status',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'fca_status_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
        widgetExclusive: true,
      },
    },
  })

const FinanceDownPaymentParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60',
      in: 'query',
      name: 'finance_down_payment',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        separator: '-',
        targetAlias: 'f_down_pay_fs',
        transformConstraints: [
          { defaultMax: 10000, defaultMin: 1000, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const FinanceDownPaymentPerParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60',
      in: 'query',
      name: 'finance_down_payment_per',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        separator: '-',
        targetAlias: 'f_down_pay_per_fs',
        transformConstraints: [
          { defaultMax: 20, defaultMin: 1, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const FinanceEmpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60',
      in: 'query',
      name: 'finance_emp',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        separator: '-',
        targetAlias: 'f_emi_fs',
        transformConstraints: [
          { defaultMax: 3000, defaultMin: 10, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const FinanceLoanAprParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60',
      in: 'query',
      name: 'finance_loan_apr',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        separator: '-',
        targetAlias: 'loan_apr_fs',
        transformConstraints: [
          { defaultMax: 12, defaultMin: 1, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const FinanceLoanTermParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60',
      in: 'query',
      name: 'finance_loan_term',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        separator: '-',
        targetAlias: 'loan_term_is',
        transformConstraints: [
          { defaultMax: 48, defaultMin: 12, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const FirstSeenAtMcDaysParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12',
      in: 'query',
      name: 'first_seen_at_mc_days',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'first_scraped_at_dts',
        transformConstraints: [{ nowBound: true, transformer: 'parseDate', type: 'date' }],
      },
    },
  })

const FirstSeenAtMcRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623',
      in: 'query',
      name: 'first_seen_at_mc_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'first_scraped_at_dts',
        transformConstraints: [{ transformer: 'parseDate', type: 'date' }],
      },
    },
  })

const FirstSeenAtSourceDaysParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12',
      in: 'query',
      name: 'first_seen_at_source_days',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'relisted_at_date_dts',
        transformConstraints: [{ nowBound: true, transformer: 'parseDate', type: 'date' }],
      },
    },
  })

const FirstSeenAtSourceRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623',
      in: 'query',
      name: 'first_seen_at_source_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'relisted_at_date_dts',
        transformConstraints: [{ transformer: 'parseDate', type: 'date' }],
      },
    },
  })

const FirstSeenDaysParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12',
      in: 'query',
      name: 'first_seen_days',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'scraped_at',
        transformConstraints: [{ nowBound: true, transformer: 'parseDate', type: 'date' }],
      },
    },
  })

const FirstSeenRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623',
      in: 'query',
      name: 'first_seen_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'scraped_at',
        transformConstraints: [{ transformer: 'parseDate', type: 'date' }],
      },
    },
  })

const FreshWaterCapacityParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter on fresh water capacity of vehicle',
      in: 'query',
      name: 'fresh_water_capacity',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        separator: '-',
        targetAlias: 'fresh_water_capacity_fs',
        transformConstraints: [
          { defaultMax: 100000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const FuelTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their fuel type',
      in: 'query',
      name: 'fuel_type',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'fuel_type',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const GvwrParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter on the maximum total weight of your vehicle',
      in: 'query',
      name: 'gvwr',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        separator: '-',
        targetAlias: 'gvwr_fs',
        transformConstraints: [
          { defaultMax: 1000000, defaultMin: 100, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const HighValueFeaturesParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'To filter listings on their high_value_features. Results will be intersection of provided HVFs',
      in: 'query',
      name: 'high_value_features',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'multi-in',
        separator: ',',
        targetAlias: 'high_value_features_mv',
        transformConstraints: [
          {
            caseSelector: 2,
            isSolrMultivalued: true,
            transformer: 'caseTransformer',
            type: 'string',
          },
        ],
      },
      required: false,
    },
  })

const HighwayMpgRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'highway_mpg_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'highway_mpg',
        transformConstraints: [
          { defaultMax: 1000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Listing id to get all the listing attributes',
      in: 'path',
      name: 'id',
      required: true,
      schema: { format: 'string', type: 'string' },
    },
  })

const InTransitParamsSchema = z
  .enum(['true', 'false'])
  .exactOptional()
  .openapi({
    param: {
      description: 'A boolean to filter in transit vehicles',
      in: 'query',
      name: 'in_transit',
      required: false,
      schema: { enum: ['true', 'false'], type: 'string' },
      'x-field-config': {
        isConfigurable: false,
        isMultiValued: false,
        operator: 'equals',
        targetAlias: 'in_transit_ss',
        transformConstraints: [{ transformer: 'boolToFlag', type: 'string' }],
      },
    },
  })

const IncludeNonVinListingsParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'To include non vin listings. Default is false',
      in: 'query',
      name: 'include_non_vin_listings',
      required: false,
      schema: { default: false, type: 'boolean' },
    },
  })

const IncludeRelevantLinksParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'To include_relevant_links. Default is true',
      in: 'query',
      name: 'include_relevant_links',
      required: false,
      schema: { default: false, type: 'boolean' },
    },
  })

const InpathFullVinParamsSchema = z
  .string()
  .min(10)
  .openapi({
    param: {
      description: 'The VIN to identify the car. Must be a valid 17 char VIN',
      in: 'path',
      name: 'vin',
      required: true,
      schema: { format: 'string', minLength: 10, type: 'string' },
    },
  })

const InpathVrmParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The VRM to identify the car.',
      in: 'path',
      name: 'vrm',
      required: true,
      schema: { format: 'string', type: 'string' },
    },
  })

const InsuranceGroupParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Insurance Group',
      in: 'query',
      name: 'insurance_group',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'insurance_group',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const InteriorColorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated',
      in: 'query',
      name: 'interior_color',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'interior_color',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const InventoryCountRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50',
      in: 'query',
      name: 'inventory_count_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'inventory_count_is',
        transformConstraints: [
          { defaultMax: 100000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const InventoryTypeParamsSchema = z
  .enum(['used', 'new'])
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their condition. Either used or new',
      in: 'query',
      name: 'inventory_type',
      schema: { enum: ['used', 'new'], type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'in',
        targetAlias: 'inventory_type',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const InventoryUrlParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'inventory_url of dealer to be searched',
      in: 'query',
      name: 'inventory_url',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'website',
        transformConstraints: [{ transformer: 'urlTransformer', type: 'string' }],
      },
    },
  })

const LastSeenDaysParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12',
      in: 'query',
      name: 'last_seen_days',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'status_date',
        transformConstraints: [{ nowBound: true, transformer: 'parseDate', type: 'date' }],
      },
    },
  })

const LastSeenRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623',
      in: 'query',
      name: 'last_seen_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'status_date',
        transformConstraints: [{ transformer: 'parseDate', type: 'date' }],
      },
    },
  })

const LatitudeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float64(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Latitude component of location',
      in: 'query',
      name: 'latitude',
      schema: { format: 'double', type: 'number' },
      required: false,
    },
  })

const LeaseDownPaymentParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60',
      in: 'query',
      name: 'lease_down_payment',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        separator: '-',
        targetAlias: 'l_down_pay_fs',
        transformConstraints: [
          { defaultMax: 5000, defaultMin: 100, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const LeaseEmpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60',
      in: 'query',
      name: 'lease_emp',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        separator: '-',
        targetAlias: 'l_emi_fs',
        transformConstraints: [
          { defaultMax: 1000, defaultMin: 100, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const LeaseTermParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60',
      in: 'query',
      name: 'lease_term',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        separator: '-',
        targetAlias: 'lease_term_is',
        transformConstraints: [
          { defaultMax: 48, defaultMin: 12, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const ListingCountRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100',
      in: 'query',
      name: 'listing_count_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'listing_count',
        transformConstraints: [
          { defaultMax: 500, defaultMin: 10, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const LongitudeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float64(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Longitude component of location',
      in: 'query',
      name: 'longitude',
      schema: { format: 'double', type: 'number' },
      required: false,
    },
  })

const MakeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listings on their make',
      in: 'query',
      name: 'make',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'make',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const MatchParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match',
      in: 'query',
      name: 'match',
      required: false,
      schema: { type: 'string' },
    },
  })

const MilesRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'miles_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'miles',
        transformConstraints: [
          { defaultMax: 100000, defaultMin: 1000, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const MinPhotoLinksParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter listings based by number of photo links within given range',
      in: 'query',
      name: 'min_photo_links',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'photo_links_count_is',
        transformConstraints: [
          { defaultMax: 1000, defaultMin: 0, transformer: 'parseFloat', type: 'integer' },
        ],
      },
    },
  })

const MinPhotoLinksCachedParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter listings based by number of cached photo links within given range',
      in: 'query',
      name: 'min_photo_links_cached',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'cached_photo_links_count_is',
        transformConstraints: [
          { defaultMax: 1000, defaultMin: 0, transformer: 'parseFloat', type: 'integer' },
        ],
      },
    },
  })

const MmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is',
      in: 'query',
      name: 'mm',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'equals',
        targetAlias: 'mm',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const ModelParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listings on their model',
      in: 'query',
      name: 'model',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'model',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const ModelOParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listings on their model orig (as described on the webpage)',
      in: 'query',
      name: 'model_o',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'model_o',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const MsaCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on msa code in which they are listed',
      in: 'query',
      name: 'msa_code',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'msa_code',
      },
    },
  })

const MsrpRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'msrp_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'msrp',
        transformConstraints: [
          { defaultMax: 100000, defaultMin: 1000, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const NhtsaRecallNumberParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'nhtsa_recall_number to match. You can pass in multiple nhtsa_recall_number values comma separated',
      in: 'query',
      name: 'nhtsa_recall_number',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'nhtsa_recall_number',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const NonDefaultCountryParamsSchema = z
  .enum(['US', 'CA', 'us', 'ca', 'uk', 'england', 'scotland', 'northan ireland', 'wales'])
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on Country in which they are listed',
      in: 'query',
      name: 'country',
      schema: {
        enum: ['US', 'CA', 'us', 'ca', 'uk', 'england', 'scotland', 'northan ireland', 'wales'],
        type: 'string',
      },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'country',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const NumOwnersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of owners. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'num_owners',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'num_owners',
        transformConstraints: [
          { defaultMax: 5, defaultMin: 1, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const NumberOfAwningsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter on number_of_awnings',
      in: 'query',
      name: 'number_of_awnings',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'number_of_awnings_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const OwnedParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself',
      in: 'query',
      name: 'owned',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const PhotoLinksParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        "A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them",
      in: 'query',
      name: 'photo_links',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const PhotoLinksCachedParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        "A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them",
      in: 'query',
      name: 'photo_links_cached',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const PostalCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on postal code around which they are listed',
      in: 'query',
      name: 'postal_code',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'postal_code',
        transformConstraints: [
          { regex: '\\s', replace: '', transformer: 'regexReplace' },
          { transformer: 'caseTransformer', type: 'string' },
        ],
      },
      required: false,
    },
  })

const PowertrainTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter on powertrain_type',
      in: 'query',
      name: 'powertrain_type',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'powertrain_type_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const PriceChangeParamsSchema = z
  .enum(['positive', 'negative'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Query to filter listings based on their positive and negative price change',
      in: 'query',
      name: 'price_change',
      required: false,
      schema: { enum: ['positive', 'negative'], type: 'string' },
    },
  })

const PriceChangeRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500',
      in: 'query',
      name: 'price_change_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '|',
        targetAlias: 'price_change_fs',
        transformConstraints: [
          {
            defaultMax: 100000000,
            defaultMin: -100000000,
            transformer: 'parseInt',
            type: 'integer',
          },
        ],
      },
    },
  })

const PriceRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'price_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'price',
        transformConstraints: [
          { defaultMax: 100000, defaultMin: 1000, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const RadiusParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0).max(7000),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Radius around the search location (Unit - Miles)',
      in: 'query',
      name: 'radius',
      schema: { format: 'int32', maximum: 7000, minimum: 0, type: 'integer' },
      required: false,
    },
  })

const RangeFacetsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.',
      in: 'query',
      name: 'range_facets',
      required: false,
      schema: { type: 'string' },
    },
  })

const RankMilesRangeParamsSchema = z
  .string()
  .default('1-')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'miles_range',
      required: false,
      schema: { default: '1-', format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'miles',
        transformConstraints: [
          { defaultMax: 100000, defaultMin: 1000, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const RankPriceRangeParamsSchema = z
  .string()
  .default('1-')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'price_range',
      required: false,
      schema: { default: '1-', format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'price',
        transformConstraints: [
          { defaultMax: 100000, defaultMin: 1000, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const RowsParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of results to return. Default is 10. Max is 50',
      in: 'query',
      name: 'rows',
      required: false,
      schema: { default: 10, format: 'int32', minimum: 0, type: 'integer' },
    },
  })

const SearchTextParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To search a substring across entire document',
      in: 'query',
      name: 'search_text',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'equals',
        targetAlias: 'long_text_copy_field',
      },
      required: false,
    },
  })

const SeatingCapacityParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter on vehicle seating capacity',
      in: 'query',
      name: 'seating_capacity',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'std_seating_capacity_ss',
        transformConstraints: [{ transformer: 'parseInt', type: 'integer' }],
      },
    },
  })

const SleepsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter data based on sleeps',
      in: 'query',
      name: 'sleeps',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'sleeps_is',
        transformConstraints: [
          { defaultMax: 300, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const SortByParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort by field. Default sort field is distance from the given point',
      in: 'query',
      name: 'sort_by',
      required: false,
      schema: { format: 'string', type: 'string' },
    },
  })

const SortOrderParamsSchema = z
  .enum(['asc', 'desc', 'ASC', 'DESC'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort order - asc or desc. Default sort order is asc',
      in: 'query',
      name: 'sort_order',
      required: false,
      schema: { enum: ['asc', 'desc', 'ASC', 'DESC'], format: 'string', type: 'string' },
    },
  })

const SourceParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their source',
      in: 'query',
      name: 'source',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'source',
        transformConstraints: [{ transformer: 'urlTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const StartParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows',
      in: 'query',
      name: 'start',
      required: false,
      schema: { default: 0, format: 'int32', minimum: 0, type: 'integer' },
    },
  })

const StateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on State in which they are listed',
      in: 'query',
      name: 'state',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'state',
        transformConstraints: [{ maxLength: 2, transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const StatsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.',
      in: 'query',
      name: 'stats',
      required: false,
      schema: { type: 'string' },
    },
  })

const StockNoParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their stock number on lot',
      in: 'query',
      name: 'stock_no',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'stock_no',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const TransmissionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their transmission',
      in: 'query',
      name: 'transmission',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'transmission',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const TrimParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their trim',
      in: 'query',
      name: 'trim',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'trim',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const TrimOParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter listings on web scraped trim',
      in: 'query',
      name: 'trim_o',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'trim_orig',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const TrimRParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter trim on custom possible matches',
      in: 'query',
      name: 'trim_r',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'trim_r_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const UkCityMpgRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'city_mpg_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'city_mpg',
        transformConstraints: [
          { defaultMax: 1000, defaultMin: 0, transformer: 'parseFloat', type: 'integer' },
        ],
      },
    },
  })

const UkCombinedMpgRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'combined_mpg_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'combined_mpg',
        transformConstraints: [
          { defaultMax: 1000, defaultMin: 0, transformer: 'parseFloat', type: 'integer' },
        ],
      },
    },
  })

const UkHighwayMpgRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000',
      in: 'query',
      name: 'highway_mpg_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'highway_mpg',
        transformConstraints: [
          { defaultMax: 1000, defaultMin: 0, transformer: 'parseFloat', type: 'integer' },
        ],
      },
    },
  })

const UvcIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter on uvc id',
      in: 'query',
      name: 'uvc_id',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'uvc_id_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const VariantParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their variant',
      in: 'query',
      name: 'variant',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'variant',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const VehicleTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their vehicle type',
      in: 'query',
      name: 'vehicle_type',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'vehicle_type',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const VinParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their VIN',
      in: 'query',
      name: 'vin',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'vin',
        transformConstraints: [{ maxLength: 17, transformer: 'caseTransformer', type: 'string' }],
      },
      required: false,
    },
  })

const VrmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter on vrm',
      in: 'query',
      name: 'vrm',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'vehicle_registration_mark_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const WriteOffCategoryParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'write off category',
      in: 'query',
      name: 'write_off_category',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'write_off_category_ss',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
        widgetExclusive: true,
      },
    },
  })

const YearParamsSchema = z
  .string()
  .min(4)
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on their year',
      in: 'query',
      name: 'year',
      schema: { minLength: 4, type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'year',
        transformConstraints: [{ max: 2121, min: 1800, transformer: 'parseInt', type: 'integer' }],
      },
      required: false,
    },
  })

const YearRangeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021',
      in: 'query',
      name: 'year_range',
      required: false,
      schema: { format: 'string', type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'between',
        separator: '-',
        targetAlias: 'year',
        transformConstraints: [
          { defaultMax: 2100, defaultMin: 1900, transformer: 'parseInt', type: 'integer' },
        ],
      },
    },
  })

const YmmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is',
      in: 'query',
      name: 'ymm',
      required: false,
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: false,
        operator: 'equals',
        targetAlias: 'ymm',
        transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
      },
    },
  })

const YmmtParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '|' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - 'year|make||' or 'year|make|model' or '|make|model|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year|make|model|trim combinations.",
      in: 'query',
      name: 'ymmt',
      required: false,
      schema: { type: 'string' },
    },
  })

const ZipParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'To filter listing on ZIP around which they are listed',
      in: 'query',
      name: 'zip',
      schema: { type: 'string' },
      'x-field-config': {
        isConfigurable: true,
        isMultiValued: true,
        operator: 'in',
        separator: ',',
        targetAlias: 'zip',
        transformConstraints: [
          { regex: '\\s', replace: '', transformer: 'regexReplace' },
          { transformer: 'caseTransformer', type: 'string' },
        ],
      },
      required: false,
    },
  })

const CarRankRequestRequestBody = {
  description: 'Inputs needed for ranking a group of car listings',
  content: { 'application/json': { schema: CarRankRequestSchema } },
  required: true,
}

const AuthorizeEndpointSecurityScheme = { scheme: 'basic', type: 'http' }

export const getCarDealerInventoryActiveRoute = createRoute({
  method: 'get',
  path: '/car/dealer/inventory/active',
  tags: ['Car Search'],
  summary: 'Get dealers active inventory',
  description: 'Get dealers active inventory',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      append_api_key: AppendApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      zip: ZipParamsSchema,
      include_lease: CarIncludeLeaseParamsSchema,
      include_finance: CarIncludeFinanceParamsSchema,
      lease_term: LeaseTermParamsSchema,
      lease_down_payment: LeaseDownPaymentParamsSchema,
      lease_emp: LeaseEmpParamsSchema,
      finance_loan_term: FinanceLoanTermParamsSchema,
      finance_loan_apr: FinanceLoanAprParamsSchema,
      finance_emp: FinanceEmpParamsSchema,
      finance_down_payment: FinanceDownPaymentParamsSchema,
      finance_down_payment_per: FinanceDownPaymentPerParamsSchema,
      car_type: CarCarTypeParamsSchema,
      carfax_1_owner: Carfax_1OwnerParamsSchema,
      carfax_clean_title: CarfaxCleanTitleParamsSchema,
      year_range: YearRangeParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      dealer_id: DealerIdParamsSchema,
      vin: VinParamsSchema,
      source: SourceParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      vins: CarVinsParamsSchema,
      taxonomy_vins: CarTaxonomyVinsParamsSchema,
      mm: MmParamsSchema,
      ymm: YmmParamsSchema,
      ymmt: YmmtParamsSchema,
      match: MatchParamsSchema,
      cylinders: CylindersParamsSchema,
      transmission: TransmissionParamsSchema,
      doors: DoorsParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_aspiration: EngineAspirationParamsSchema,
      engine_block: EngineBlockParamsSchema,
      highway_mpg_range: HighwayMpgRangeParamsSchema,
      city_mpg_range: CityMpgRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      price_range: PriceRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      dom_range: DomRangeParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      include_non_vin_listings: IncludeNonVinListingsParamsSchema,
      msa_code: MsaCodeParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      country: CarCountryParamsSchema,
      plot: CarPlotParamsSchema,
      nodedup: CarNodedupParamsSchema,
      dedup: CarDedupParamsSchema,
      owned: OwnedParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      dealer_name: DealerNameParamsSchema,
      dealership_group_name: DealershipGroupNameParamsSchema,
      trim_o: TrimOParamsSchema,
      trim_r: TrimRParamsSchema,
      dom_active_range: DomActiveRangeParamsSchema,
      dom_180_range: Dom_180RangeParamsSchema,
      exclude_certified: ExcludeCertifiedParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      photo_links: PhotoLinksParamsSchema,
      photo_links_cached: PhotoLinksCachedParamsSchema,
      stock_no: StockNoParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      first_seen_at_source_range: FirstSeenAtSourceRangeParamsSchema,
      first_seen_at_mc_range: FirstSeenAtMcRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
      first_seen_at_source_days: FirstSeenAtSourceDaysParamsSchema,
      first_seen_at_mc_days: FirstSeenAtMcDaysParamsSchema,
      include_relevant_links: IncludeRelevantLinksParamsSchema,
      inventory_count_range: InventoryCountRangeParamsSchema,
      in_transit: InTransitParamsSchema,
      seating_capacity: SeatingCapacityParamsSchema,
      engine_size_range: EngineSizeRangeParamsSchema,
      powertrain_type: PowertrainTypeParamsSchema,
      min_photo_links: MinPhotoLinksParamsSchema,
      min_photo_links_cached: MinPhotoLinksCachedParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all cars listings matching the search & filter criteria',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getCarRecallVinRoute = createRoute({
  method: 'get',
  path: '/car/recall/{vin}',
  tags: ['Recall Search'],
  summary: 'Recall info by vin',
  description: 'Get a particular recall information for a vin',
  operationId: 'getRecallHistory',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number to fetch the results for the given criteria. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'number', type: 'number' },
          },
        }),
    }),
    params: z.object({ vin: InpathFullVinParamsSchema }),
  },
  responses: {
    200: {
      description: 'Reacll info for the given vin',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getClientConfigureGetRoute = createRoute({
  method: 'get',
  path: '/client/configure/get',
  tags: ['client filters'],
  summary: 'get client filters',
  description: 'get client filters',
  operationId: 'get',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      country: z
        .enum(['US', 'CA', 'UK'])
        .openapi({
          param: {
            description: 'To filter listing on Country in which they are listed',
            in: 'query',
            name: 'country',
            required: true,
            schema: { enum: ['US', 'CA', 'UK'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successfully get client filters', content: {} } },
})

export const postClientConfigureSetRoute = createRoute({
  method: 'post',
  path: '/client/configure/set',
  tags: ['client filters'],
  summary: 'set client filters',
  description: 'set client filters',
  operationId: 'set',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      country: z
        .enum(['US', 'CA', 'UK'])
        .openapi({
          param: {
            description: 'To filter listing on Country in which they are listed',
            in: 'query',
            name: 'country',
            required: true,
            schema: { enum: ['US', 'CA', 'UK'], type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              csvfile: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'csv file with filters',
                  'x-mimetype': 'text/csv',
                }),
            })
            .openapi({ required: ['csvfile'] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'Successfully set client filters' } },
})

export const getCrmCheckCarVinRoute = createRoute({
  method: 'get',
  path: '/crm_check/car/{vin}',
  tags: ['CRM Cleanse API'],
  summary: 'CRM check of a particular vin',
  description: 'Check whether particular vin has had a listing after stipulated date or not',
  operationId: 'crmCheck',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      sale_date: z
        .string()
        .min(8)
        .openapi({
          param: {
            description:
              'sale date to check whether after this listing has appeared or not. Must be 8 character long, with YYYYMMDD format',
            in: 'query',
            name: 'sale_date',
            required: true,
            schema: { format: 'string', minLength: 8, type: 'string' },
          },
        }),
    }),
    params: z.object({ vin: InpathFullVinParamsSchema }),
  },
  responses: {
    200: {
      description: 'CRM check for given vin',
      content: { 'application/json': { schema: CRMResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDealerCarUkIdRoute = createRoute({
  method: 'get',
  path: '/dealer/car/uk/{id}',
  tags: ['Dealer API'],
  summary: 'Dealer by id',
  description: "Get a particular dealer's information by its id",
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      provider: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'boolean param to include site providers name in response',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Dealer id to get all the dealer info attributes',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dealer for the given id',
      content: { 'application/json': { schema: DealerSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDealerCarIdRoute = createRoute({
  method: 'get',
  path: '/dealer/car/{id}',
  tags: ['Dealer API'],
  summary: 'Dealer by id',
  description: "Get a particular dealer's information by its id",
  operationId: 'getDealer',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      provider: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'boolean param to include site providers name in response',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Dealer id to get all the dealer info attributes',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dealer for the given id',
      content: { 'application/json': { schema: DealerSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDealerHeavyEquipmentIdRoute = createRoute({
  method: 'get',
  path: '/dealer/heavy-equipment/{id}',
  tags: ['Dealer API'],
  summary: 'Dealer by id',
  description: "Get a particular dealer's information by its id",
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      provider: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'boolean param to include site providers name in response',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Dealer id to get all the dealer info attributes',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dealer for the given id',
      content: { 'application/json': { schema: DealerSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDealerMotorcycleIdRoute = createRoute({
  method: 'get',
  path: '/dealer/motorcycle/{id}',
  tags: ['Dealer API'],
  summary: 'Dealer by id',
  description: "Get a particular dealer's information by its id",
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      provider: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'boolean param to include site providers name in response',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Dealer id to get all the dealer info attributes',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dealer for the given id',
      content: { 'application/json': { schema: DealerSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDealerRvIdRoute = createRoute({
  method: 'get',
  path: '/dealer/rv/{id}',
  tags: ['Dealer API'],
  summary: 'Dealer by id',
  description: "Get a particular dealer's information by its id",
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      provider: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'boolean param to include site providers name in response',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Dealer id to get all the dealer info attributes',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dealer for the given id',
      content: { 'application/json': { schema: DealerSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDealersCarRoute = createRoute({
  method: 'get',
  path: '/dealers/car',
  tags: ['Dealer API'],
  summary: 'Find car dealers around',
  description: 'The dealers API returns a list of dealers around a given point and radius.',
  operationId: 'dealerSearch',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      country: NonDefaultCountryParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      city: CityParamsSchema,
      state: StateParamsSchema,
      listing_count_range: ListingCountRangeParamsSchema,
      inventory_url: InventoryUrlParamsSchema,
      zip: ZipParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      provider: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'boolean param to include site providers name in response',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of dealers for the search',
      content: { 'application/json': { schema: DealersResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDealersCarUkRoute = createRoute({
  method: 'get',
  path: '/dealers/car/uk',
  tags: ['Dealer API'],
  summary: 'Find car dealers around',
  description: 'The dealers API returns a list of dealers around a given point and radius.',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      country: NonDefaultCountryParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      city: CityParamsSchema,
      county: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on county in which they are listed',
            in: 'query',
            name: 'county',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'state',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      listing_count_range: ListingCountRangeParamsSchema,
      inventory_url: InventoryUrlParamsSchema,
      postal_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on postal code around which they are listed',
            in: 'query',
            name: 'postal_code',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'zip',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      provider: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'boolean param to include site providers name in response',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of dealers for the search',
      content: { 'application/json': { schema: DealersResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDealersHeavyEquipmentRoute = createRoute({
  method: 'get',
  path: '/dealers/heavy-equipment',
  tags: ['Dealer API'],
  summary: 'Find car dealers around',
  description: 'The dealers API returns a list of dealers around a given point and radius.',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      country: NonDefaultCountryParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      city: CityParamsSchema,
      state: StateParamsSchema,
      listing_count_range: ListingCountRangeParamsSchema,
      inventory_url: InventoryUrlParamsSchema,
      zip: ZipParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      provider: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'boolean param to include site providers name in response',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of dealers for the search',
      content: { 'application/json': { schema: DealersResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDealersMotorcycleRoute = createRoute({
  method: 'get',
  path: '/dealers/motorcycle',
  tags: ['Dealer API'],
  summary: 'Find car dealers around',
  description: 'The dealers API returns a list of dealers around a given point and radius.',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      country: NonDefaultCountryParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      city: CityParamsSchema,
      state: StateParamsSchema,
      listing_count_range: ListingCountRangeParamsSchema,
      inventory_url: InventoryUrlParamsSchema,
      zip: ZipParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      provider: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'boolean param to include site providers name in response',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of dealers for the search',
      content: { 'application/json': { schema: DealersResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDealersRvRoute = createRoute({
  method: 'get',
  path: '/dealers/rv',
  tags: ['Dealer API'],
  summary: 'Find car dealers around',
  description: 'The dealers API returns a list of dealers around a given point and radius.',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      country: NonDefaultCountryParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      city: CityParamsSchema,
      state: StateParamsSchema,
      listing_count_range: ListingCountRangeParamsSchema,
      inventory_url: InventoryUrlParamsSchema,
      zip: ZipParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      provider: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'boolean param to include site providers name in response',
            in: 'query',
            name: 'provider',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of dealers for the search',
      content: { 'application/json': { schema: DealersResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDecodeCarEpiVinSpecsRoute = createRoute({
  method: 'get',
  path: '/decode/car/epi/{vin}/specs',
  tags: ['VIN Decoder API'],
  summary: 'EPI VIN Decoder',
  description:
    "Get the basic information on specifications for a car identified by a valid VIN from EPI's decoder",
  operationId: 'decodeViaEPI',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ vin: InpathFullVinParamsSchema }),
  },
  responses: {
    200: {
      description: 'Basic sepcifications details about the car',
      content: { 'application/json': { schema: BuildSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDecodeCarNeovinVinSpecsRoute = createRoute({
  method: 'get',
  path: '/decode/car/neovin/{vin}/specs',
  tags: ['VIN Decoder API'],
  summary: 'NeoVIN Decoder',
  description:
    'Get the basic information on specifications for a car identified by a valid VIN from NeoVIN decoder',
  operationId: 'decodeViaNeoVIN',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      include_generic: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Boolean variable to indicate wheather to include generic data as well in response',
            in: 'query',
            name: 'include_generic',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      force_decode: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Decode VIN on the fly instead of cached response',
            in: 'query',
            name: 'force_decode',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
    params: z.object({ vin: InpathFullVinParamsSchema }),
  },
  responses: {
    200: {
      description: 'Basic sepcifications details about the car',
      content: { 'application/json': { schema: NeoVINSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getDecodeCarVinSpecsRoute = createRoute({
  method: 'get',
  path: '/decode/car/{vin}/specs',
  tags: ['VIN Decoder API'],
  summary: 'VIN Decoder',
  description: 'Get the basic information on specifications for a car identified by a valid VIN',
  operationId: 'decode',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({
      vin: z
        .string()
        .min(17)
        .openapi({
          param: {
            description: 'The VIN to identify the car. Must be a valid 17 char VIN',
            in: 'path',
            name: 'vin',
            required: true,
            schema: { format: 'string', minLength: 17, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Basic sepcifications details about the car',
      content: { 'application/json': { schema: BuildSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getHistoryCarUkVrmRoute = createRoute({
  method: 'get',
  path: '/history/car/uk/{vrm}',
  tags: ['Cars History API'],
  summary: 'Get a cars online listing history',
  description:
    'The history API returns online listing history for a car identified by its VRM. History listings are sorted in the descending order of the listing date / last seen date',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number to fetch the results for the given criteria. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'number', type: 'number' },
          },
        }),
      include_duplicates: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to indicate whether to include duplicate historical records as well in the response',
            in: 'query',
            name: 'include_duplicates',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sort_order: SortOrderParamsSchema,
    }),
    params: z.object({ vrm: InpathVrmParamsSchema }),
  },
  responses: {
    200: {
      description: 'Online listing history for the given vrm',
      content: { 'application/json': { schema: z.array(HistoricalListingSchema) } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getHistoryCarVinRoute = createRoute({
  method: 'get',
  path: '/history/car/{vin}',
  tags: ['Cars History API'],
  summary: 'Get a cars online listing history',
  description:
    'The history API returns online listing history for a car identified by its VIN. History listings are sorted in the descending order of the listing date / last seen date',
  operationId: 'getCarHistory',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of fields to fetch, in case the default fields list in the response is to be trimmed down',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number to fetch the results for the given criteria. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'number', type: 'number' },
          },
        }),
      include_duplicates: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to indicate whether to include duplicate historical records as well in the response',
            in: 'query',
            name: 'include_duplicates',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sort_order: SortOrderParamsSchema,
    }),
    params: z.object({ vin: InpathFullVinParamsSchema }),
  },
  responses: {
    200: {
      description: 'Online listing history for the given vin',
      content: { 'application/json': { schema: z.array(HistoricalListingSchema) } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getImageCacheCarListingIDImageIDRoute = createRoute({
  method: 'get',
  path: '/image/cache/car/{listingID}/{imageID}',
  tags: ['Car Cached Image'],
  summary: 'Fetch cached image',
  description: 'Fetch the cached car image',
  operationId: 'getCachedImage',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({
      listingID: z
        .string()
        .openapi({
          param: {
            description: 'ID of the listing to fetch cached images for',
            in: 'path',
            name: 'listingID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      imageID: z
        .string()
        .openapi({
          param: {
            description: 'ID of the image to fetch',
            in: 'path',
            name: 'imageID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Cached image of the car',
      content: { 'application/json': { schema: CacheImageResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarAuctionIdRoute = createRoute({
  method: 'get',
  path: '/listing/car/auction/{id}',
  tags: ['Car Search'],
  summary: 'Listing by id',
  description: 'Get a particular auction listing by its id',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      append_api_key: AppendApiKeyParamsSchema,
      include_relevant_links: IncludeRelevantLinksParamsSchema,
    }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Listing for the given id',
      content: { 'application/json': { schema: ListingSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarAuctionIdExtraRoute = createRoute({
  method: 'get',
  path: '/listing/car/auction/{id}/extra',
  tags: ['Car Search'],
  summary: 'Long text Listings attributes for Listing with the given id',
  description: 'Get listing options, features, seller comments',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'ListingAttributes for the given listing id',
      content: { 'application/json': { schema: ListingExtraAttributesSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarAuctionIdMediaRoute = createRoute({
  method: 'get',
  path: '/listing/car/auction/{id}/media',
  tags: ['Car Search'],
  summary: 'Listing media by id',
  description: 'Get listing media (photo, photos) by id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema, append_api_key: AppendApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'ListingMedia for the given listing id',
      content: { 'application/json': { schema: ListingMediaSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarFsboIdRoute = createRoute({
  method: 'get',
  path: '/listing/car/fsbo/{id}',
  tags: ['Car Search'],
  summary: 'Listing by id',
  description: 'Get a particular private party listing by its id',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      append_api_key: AppendApiKeyParamsSchema,
      include_relevant_links: IncludeRelevantLinksParamsSchema,
    }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Listing for the given id',
      content: { 'application/json': { schema: ListingSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarFsboIdExtraRoute = createRoute({
  method: 'get',
  path: '/listing/car/fsbo/{id}/extra',
  tags: ['Car Search'],
  summary: 'Long text Listings attributes for Listing with the given id',
  description: 'Get listing options, features, seller comments',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'ListingAttributes for the given listing id',
      content: { 'application/json': { schema: ListingExtraAttributesSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarFsboIdMediaRoute = createRoute({
  method: 'get',
  path: '/listing/car/fsbo/{id}/media',
  tags: ['Car Search'],
  summary: 'Listing media by id',
  description: 'Get listing media (photo, photos) by id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema, append_api_key: AppendApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'ListingMedia for the given listing id',
      content: { 'application/json': { schema: ListingMediaSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarUkIdRoute = createRoute({
  method: 'get',
  path: '/listing/car/uk/{id}',
  tags: ['Car Search'],
  summary: 'Listing by id',
  description: 'Get a particular dealer listing by its id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema, append_api_key: AppendApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Listing for the given id',
      content: { 'application/json': { schema: ListingSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarUkIdExtraRoute = createRoute({
  method: 'get',
  path: '/listing/car/uk/{id}/extra',
  tags: ['Car Search'],
  summary: 'Long text Listings attributes for Listing with the given id',
  description: 'Get listing options, features, seller comments',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'ListingAttributes for the given listing id',
      content: { 'application/json': { schema: ListingExtraAttributesSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarUkIdMediaRoute = createRoute({
  method: 'get',
  path: '/listing/car/uk/{id}/media',
  tags: ['Car Search'],
  summary: 'Listing media by id',
  description: 'Get listing media (photo, photos) by id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema, append_api_key: AppendApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'ListingMedia for the given listing id',
      content: { 'application/json': { schema: ListingMediaSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarIdRoute = createRoute({
  method: 'get',
  path: '/listing/car/{id}',
  tags: ['Car Search'],
  summary: 'Listing by id',
  description: 'Get a particular dealer listing by its id',
  operationId: 'getListing',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      append_api_key: AppendApiKeyParamsSchema,
      include_relevant_links: IncludeRelevantLinksParamsSchema,
    }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Listing for the given id',
      content: { 'application/json': { schema: ListingSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarIdExtraRoute = createRoute({
  method: 'get',
  path: '/listing/car/{id}/extra',
  tags: ['Car Search'],
  summary: 'Long text Listings attributes for Listing with the given id',
  description: 'Get listing options, features, seller comments',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'ListingAttributes for the given listing id',
      content: { 'application/json': { schema: ListingExtraAttributesSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingCarIdMediaRoute = createRoute({
  method: 'get',
  path: '/listing/car/{id}/media',
  tags: ['Car Search'],
  summary: 'Listing media by id',
  description: 'Get listing media (photo, photos) by id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema, append_api_key: AppendApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'ListingMedia for the given listing id',
      content: { 'application/json': { schema: ListingMediaSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingHeavyEquipmentIdRoute = createRoute({
  method: 'get',
  path: '/listing/heavy-equipment/{id}',
  tags: ['Heavy Equipment Search'],
  summary: 'Heavy equipment listing by id',
  description: 'Get a particular Heavy equipment listing by its id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Heavy equipment listing for the given id',
      content: { 'application/json': { schema: HeavyEquipmentsListingSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingHeavyEquipmentIdExtraRoute = createRoute({
  method: 'get',
  path: '/listing/heavy-equipment/{id}/extra',
  tags: ['Heavy Equipment Search'],
  summary: 'Long text Heavy equipment Listings attributes for Listing with the given id',
  description: 'Get Heavy equipment listing options, features, seller comments',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Heavy equipment ListingAttributes for the given listing id',
      content: { 'application/json': { schema: ListingExtraAttributesSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingHeavyEquipmentIdMediaRoute = createRoute({
  method: 'get',
  path: '/listing/heavy-equipment/{id}/media',
  tags: ['Heavy Equipment Search'],
  summary: 'Listing media by id',
  description: 'Get listing media (photo, photos) by id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Listing Media for the given listing id',
      content: { 'application/json': { schema: ListingMediaSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingMotorcycleIdRoute = createRoute({
  method: 'get',
  path: '/listing/motorcycle/{id}',
  tags: ['Motorcycle Search'],
  summary: 'Motorcycle listing by id',
  description: 'Get a particular Motorcycle listing by its id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Motorcycle listing for the given id',
      content: { 'application/json': { schema: MotorcycleListingSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingMotorcycleIdExtraRoute = createRoute({
  method: 'get',
  path: '/listing/motorcycle/{id}/extra',
  tags: ['Motorcycle Search'],
  summary: 'Long text Motorcycle Listings attributes for Listing with the given id',
  description: 'Get Motorcycle listing options, features, seller comments',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Motorcycle ListingAttributes for the given listing id',
      content: { 'application/json': { schema: ListingExtraAttributesSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingMotorcycleIdMediaRoute = createRoute({
  method: 'get',
  path: '/listing/motorcycle/{id}/media',
  tags: ['Motorcycle Search'],
  summary: 'Motorcycle listing media by id',
  description: 'Get Motorcycle listing media (photo, photos) by id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Motorcycle listing media for the given listing id',
      content: { 'application/json': { schema: ListingMediaSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingRvUkIdRoute = createRoute({
  method: 'get',
  path: '/listing/rv/uk/{id}',
  tags: ['RV Search'],
  summary: 'RV listing by id',
  description: 'Get a particular RV listing by its id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'RV listing for the given id',
      content: { 'application/json': { schema: RVListingSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingRvUkIdExtraRoute = createRoute({
  method: 'get',
  path: '/listing/rv/uk/{id}/extra',
  tags: ['RV Search'],
  summary: 'Long text RV Listings attributes for Listing with the given id',
  description: 'Get RV listing options, features, seller comments',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'RV ListingAttributes for the given listing id',
      content: { 'application/json': { schema: ListingExtraAttributesSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingRvUkIdMediaRoute = createRoute({
  method: 'get',
  path: '/listing/rv/uk/{id}/media',
  tags: ['RV Search'],
  summary: 'Listing media by id',
  description: 'Get listing media (photo, photos) by id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Listing Media for the given listing id',
      content: { 'application/json': { schema: ListingMediaSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingRvIdRoute = createRoute({
  method: 'get',
  path: '/listing/rv/{id}',
  tags: ['RV Search'],
  summary: 'RV listing by id',
  description: 'Get a particular RV listing by its id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'RV listing for the given id',
      content: { 'application/json': { schema: RVListingSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingRvIdExtraRoute = createRoute({
  method: 'get',
  path: '/listing/rv/{id}/extra',
  tags: ['RV Search'],
  summary: 'Long text RV Listings attributes for Listing with the given id',
  description: 'Get RV listing options, features, seller comments',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'RV ListingAttributes for the given listing id',
      content: { 'application/json': { schema: ListingExtraAttributesSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getListingRvIdMediaRoute = createRoute({
  method: 'get',
  path: '/listing/rv/{id}/media',
  tags: ['RV Search'],
  summary: 'Listing media by id',
  description: 'Get listing media (photo, photos) by id',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Listing Media for the given listing id',
      content: { 'application/json': { schema: ListingMediaSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getMdsCarRoute = createRoute({
  method: 'get',
  path: '/mds/car',
  tags: ['Cars Market API'],
  summary: 'Market Days Supply',
  description: 'Get the basic information on specifications for a car identified by a valid VIN',
  operationId: 'getMDS',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      vin: z
        .string()
        .min(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'VIN to decode',
            in: 'query',
            name: 'vin',
            required: false,
            schema: { format: 'string', minLength: 10, type: 'string' },
          },
        }),
      exact: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Exact parameter',
            in: 'query',
            name: 'exact',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Radius around the search location (Unit - Miles)',
            in: 'query',
            name: 'radius',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      zip: ZipParamsSchema,
      msa_code: MsaCodeParamsSchema,
      debug: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Debug parameter',
            in: 'query',
            name: 'debug',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      include_sold: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'To fetch sold vins',
            in: 'query',
            name: 'include_sold',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      country: CountryParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      ymmt: YmmtParamsSchema,
      car_type: CarCarTypeParamsSchema,
      lease_term: LeaseTermParamsSchema,
      lease_down_payment: LeaseDownPaymentParamsSchema,
      lease_emp: LeaseEmpParamsSchema,
      finance_loan_term: FinanceLoanTermParamsSchema,
      finance_loan_apr: FinanceLoanAprParamsSchema,
      finance_emp: FinanceEmpParamsSchema,
      finance_down_payment: FinanceDownPaymentParamsSchema,
      finance_down_payment_per: FinanceDownPaymentPerParamsSchema,
      carfax_1_owner: Carfax_1OwnerParamsSchema,
      carfax_clean_title: CarfaxCleanTitleParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      dealer_id: DealerIdParamsSchema,
      source: SourceParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      cylinders: CylindersParamsSchema,
      transmission: TransmissionParamsSchema,
      doors: DoorsParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_aspiration: EngineAspirationParamsSchema,
      engine_block: EngineBlockParamsSchema,
      highway_mpg_range: HighwayMpgRangeParamsSchema,
      city_mpg_range: CityMpgRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      price_range: PriceRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      dom_range: DomRangeParamsSchema,
      dealership_group_name: DealershipGroupNameParamsSchema,
      dom_active_range: DomActiveRangeParamsSchema,
      dom_180_range: Dom_180RangeParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      engine_size_range: EngineSizeRangeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Provides Market Days supply for year make model or trim combination',
      content: { 'application/json': { schema: MdsSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getPopularCarsRoute = createRoute({
  method: 'get',
  path: '/popular/cars',
  tags: ['Cars Market API'],
  summary: 'Get make model wise top 50 popular cars on national, state, city level',
  description: 'Get make model wise top 50 popular cars on national, state, city level',
  operationId: 'getPopularCars',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'State level sales count',
            in: 'query',
            name: 'state',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      city_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'City level sales count, pipe seperated like city_state=jacksonville|FL',
            in: 'query',
            name: 'city_state',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      car_type: z
        .enum(['new', 'used'])
        .openapi({
          param: {
            description: 'Inventory type for which popular count is to be searched',
            in: 'query',
            name: 'car_type',
            required: true,
            schema: { enum: ['new', 'used'], format: 'string', type: 'string' },
          },
        }),
      country: z
        .enum(['us', 'ca', 'US', 'CA'])
        .default('us')
        .exactOptional()
        .openapi({
          param: {
            description: 'Country for which the popular cars are to be searched',
            in: 'query',
            name: 'country',
            required: false,
            schema: { default: 'us', enum: ['us', 'ca', 'US', 'CA'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of most popular top 50 cars',
      content: { 'application/json': { schema: PopularCarsSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getPredictCarPriceRoute = createRoute({
  method: 'get',
  path: '/predict/car/price',
  tags: ['Cars Market API'],
  summary: "Predict car price based on it's specifications",
  description: "Predict car price based on it's specifications",
  operationId: 'predictCarPrice',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      vin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Predict price for a VIN',
            in: 'query',
            name: 'vin',
            schema: { type: 'string' },
            required: false,
          },
        }),
      car_type: z
        .enum(['used', 'new'])
        .openapi({
          param: {
            description: 'Car condition',
            in: 'query',
            name: 'car_type',
            required: true,
            schema: { enum: ['used', 'new'], type: 'string' },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Car manufacturing year',
            in: 'query',
            name: 'year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      make: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Car's make",
            in: 'query',
            name: 'make',
            schema: { type: 'string' },
            required: false,
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Car's model",
            in: 'query',
            name: 'model',
            schema: { type: 'string' },
            required: false,
          },
        }),
      trim: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Car's trim",
            in: 'query',
            name: 'trim',
            schema: { type: 'string' },
            required: false,
          },
        }),
      is_certified: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean to indicate car is certified or not',
            in: 'query',
            name: 'is_certified',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      carfax_1_owner: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean to indicate car is carfax one owner or not',
            in: 'query',
            name: 'carfax_1_owner',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      carfax_clean_title: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean to indicate car has clean title or not',
            in: 'query',
            name: 'carfax_clean_title',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      base_exterior_color: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Base exterior color of the car',
            in: 'query',
            name: 'base_exterior_color',
            required: false,
            schema: { type: 'string' },
          },
        }),
      base_interior_color: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Base interior color of the car',
            in: 'query',
            name: 'base_interior_color',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transmission: z
        .enum(['Manual', 'Automatic'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Transmission on the car',
            in: 'query',
            name: 'transmission',
            schema: { enum: ['Manual', 'Automatic'], type: 'string' },
            required: false,
          },
        }),
      drivetrain: z
        .enum(['4WD', 'AWD', 'FWD', 'RWD'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Drivetrain on the car',
            in: 'query',
            name: 'drivetrain',
            schema: { enum: ['4WD', 'AWD', 'FWD', 'RWD'], type: 'string' },
            required: false,
          },
        }),
      engine_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Engine Size of the car',
            in: 'query',
            name: 'engine_size',
            required: false,
            schema: { type: 'number' },
          },
        }),
      engine_block: z
        .enum(['I', 'V', 'H'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Engine Block of the car',
            in: 'query',
            name: 'engine_block',
            required: false,
            schema: { enum: ['I', 'V', 'H'], type: 'string' },
          },
        }),
      cylinders: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of cylinders in the vehicle',
            in: 'query',
            name: 'cylinders',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      doors: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of doors in the vehicle',
            in: 'query',
            name: 'doors',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      highway_mpg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Highway mileage',
            in: 'query',
            name: 'highway_mpg',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      city_mpg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'City mileage of the car',
            in: 'query',
            name: 'city_mpg',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Latitude component of the location',
            in: 'query',
            name: 'latitude',
            schema: { type: 'number' },
            required: false,
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Longitude component of the location',
            in: 'query',
            name: 'longitude',
            schema: { type: 'number' },
            required: false,
          },
        }),
      miles: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'miles vehicle has driven in total',
            in: 'query',
            name: 'miles',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location zip',
            in: 'query',
            name: 'zip',
            schema: { type: 'string' },
            required: false,
          },
        }),
      country: z
        .enum(['us', 'ca'])
        .default('us')
        .exactOptional()
        .openapi({
          param: {
            description: 'Country for which car price will be predicted',
            in: 'query',
            name: 'country',
            schema: { default: 'us', enum: ['us', 'ca'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Predicted price of the car along with it's specifications",
      content: { 'application/json': { schema: PricePredictionSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getPredictCarUkFmvRoute = createRoute({
  method: 'get',
  path: '/predict/car/uk/fmv',
  tags: ['Cars Market API'],
  summary: 'Predict fare value of car for UK based on YMMT & miles',
  description: 'Predict fare value of car for UK based on YMMT & miles',
  operationId: 'fareValue',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      vrm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Predict price for a VRM',
            in: 'query',
            name: 'vrm',
            schema: { type: 'string' },
            required: false,
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Car manufacturing year',
            in: 'query',
            name: 'year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      make: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Car's make",
            in: 'query',
            name: 'make',
            schema: { type: 'string' },
            required: false,
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Car's model",
            in: 'query',
            name: 'model',
            schema: { type: 'string' },
            required: false,
          },
        }),
      variant: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Car's variant",
            in: 'query',
            name: 'variant',
            schema: { type: 'string' },
            required: false,
          },
        }),
      miles: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'miles vehicle has driven in total',
            in: 'query',
            name: 'miles',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      postal_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Postal code of the car',
            in: 'query',
            name: 'postal_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Radius around postal code',
            in: 'query',
            name: 'radius',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Predict fare value of car for UK based on YMMT & miles',
      content: { 'application/json': { schema: FareValueSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getPredictCarUkPriceRoute = createRoute({
  method: 'get',
  path: '/predict/car/uk/price',
  tags: ['Cars Market API'],
  summary: "Predict car price for UK based on it's specifications",
  description: "Predict car price for UK based on it's specifications",
  operationId: 'predictUkCarPrice',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      vrm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Predict price for a VRM',
            in: 'query',
            name: 'vrm',
            schema: { type: 'string' },
            required: false,
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Car manufacturing year',
            in: 'query',
            name: 'year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      make: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Car's make",
            in: 'query',
            name: 'make',
            schema: { type: 'string' },
            required: false,
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Car's model",
            in: 'query',
            name: 'model',
            schema: { type: 'string' },
            required: false,
          },
        }),
      trim: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Car's trim",
            in: 'query',
            name: 'trim',
            schema: { type: 'string' },
            required: false,
          },
        }),
      base_exterior_color: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Base exterior color of the car',
            in: 'query',
            name: 'base_exterior_color',
            required: false,
            schema: { type: 'string' },
          },
        }),
      transmission: z
        .enum(['Manual', 'Automatic'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Transmission on the car',
            in: 'query',
            name: 'transmission',
            schema: { enum: ['Manual', 'Automatic'], type: 'string' },
            required: false,
          },
        }),
      drivetrain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Drivetrain on the car',
            in: 'query',
            name: 'drivetrain',
            schema: { type: 'string' },
            required: false,
          },
        }),
      engine_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Engine Size of the car',
            in: 'query',
            name: 'engine_size',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      cylinders: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of cylinders in the vehicle',
            in: 'query',
            name: 'cylinders',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      doors: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of doors in the vehicle',
            in: 'query',
            name: 'doors',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      fuel_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Fuel type of the car',
            in: 'query',
            name: 'fuel_type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      highway_mpg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Highway mileage',
            in: 'query',
            name: 'highway_mpg',
            schema: { format: 'double', type: 'number' },
            required: false,
          },
        }),
      city_mpg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'City mileage of the car',
            in: 'query',
            name: 'city_mpg',
            schema: { format: 'double', type: 'number' },
            required: false,
          },
        }),
      combined_mpg: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Combiined mileage of the car',
            in: 'query',
            name: 'combined_mpg',
            schema: { format: 'double', type: 'number' },
            required: false,
          },
        }),
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Latitude component of the location',
            in: 'query',
            name: 'latitude',
            schema: { type: 'number' },
            required: false,
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Longitude component of the location',
            in: 'query',
            name: 'longitude',
            schema: { type: 'number' },
            required: false,
          },
        }),
      miles: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'miles vehicle has driven in total',
            in: 'query',
            name: 'miles',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Location zip',
            in: 'query',
            name: 'zip',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Predicted price of the car along with it's specifications",
      content: { 'application/json': { schema: PricePredictionSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSalesCarRoute = createRoute({
  method: 'get',
  path: '/sales/car',
  tags: ['Cars Market API'],
  summary: 'Get sales count by make, model, year, trim or taxonomy vin',
  description:
    'Get a sales count for city, state or national level by make, model, year, trim or taxonomy vin',
  operationId: 'getSalesCount',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      car_type: z
        .enum(['new', 'used'])
        .default('used')
        .exactOptional()
        .openapi({
          param: {
            description: 'Inventory type for which sales count is to be searched, default is used',
            in: 'query',
            name: 'car_type',
            required: false,
            schema: { default: 'used', enum: ['new', 'used'], format: 'string', type: 'string' },
          },
        }),
      make: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Make for which sales count is to be searched',
            in: 'query',
            name: 'make',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      mm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Make-Model for which sales count is to be searched, pipe seperated like mm=ford|f-150',
            in: 'query',
            name: 'mm',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      ymm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Year-Make-Model for which sales count is to be searched, pipe seperated like ymm=2015|ford|f-150',
            in: 'query',
            name: 'ymm',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      ymmt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Year-Make-Model-Trim for which sales count is to be searched, pipe seperated like ymmt=2015|ford|f-150|platinum',
            in: 'query',
            name: 'ymmt',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      taxonomy_vin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'taxonomy_vin for which sales count is to be searched',
            in: 'query',
            name: 'taxonomy_vin',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'State level sales count',
            in: 'query',
            name: 'state',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      city_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'City level sales count, pipe seperated like city_state=jacksonville|FL',
            in: 'query',
            name: 'city_state',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      vin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'VIN that will be transformed to taxonomy_vin',
            in: 'query',
            name: 'vin',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      country: z
        .enum(['us', 'ca', 'US', 'CA'])
        .default('us')
        .exactOptional()
        .openapi({
          param: {
            description: 'Country for which the sales records are to be searched',
            in: 'query',
            name: 'country',
            required: false,
            schema: { default: 'us', enum: ['us', 'ca', 'US', 'CA'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sales count for given parameters',
      content: { 'application/json': { schema: SalesSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchCarActiveRoute = createRoute({
  method: 'get',
  path: '/search/car/active',
  tags: ['Car Search'],
  summary: 'Gets active car listings for the given search criteria',
  description:
    'This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. \n The search API facilitates the following use cases - \n1. Search Cars around a given geo-point within a given radius \n2. Search cars for a specific year / make / model or combination of these \n3. Search cars matching multiple year, make, model combinatins in the same search request\n4. Filter results by most car specification attributes\n5. Search for similar cars by VIN or Taxonomy VIN \n6. Filter cars within a given price / miles / days on market (dom) range\n7. Specify a sort order for the results on price / miles / dom / listed date \n8. Search cars for a given City / State combination \n9. Get Facets to build the search drill downs \n10. Get Market averages for price/miles/dom for your search',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      append_api_key: AppendApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      zip: ZipParamsSchema,
      include_lease: CarIncludeLeaseParamsSchema,
      include_finance: CarIncludeFinanceParamsSchema,
      lease_term: LeaseTermParamsSchema,
      lease_down_payment: LeaseDownPaymentParamsSchema,
      lease_emp: LeaseEmpParamsSchema,
      finance_loan_term: FinanceLoanTermParamsSchema,
      finance_loan_apr: FinanceLoanAprParamsSchema,
      finance_emp: FinanceEmpParamsSchema,
      finance_down_payment: FinanceDownPaymentParamsSchema,
      finance_down_payment_per: FinanceDownPaymentPerParamsSchema,
      car_type: CarCarTypeParamsSchema,
      carfax_1_owner: Carfax_1OwnerParamsSchema,
      carfax_clean_title: CarfaxCleanTitleParamsSchema,
      year_range: YearRangeParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      vin: VinParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      vins: CarVinsParamsSchema,
      taxonomy_vins: CarTaxonomyVinsParamsSchema,
      mm: MmParamsSchema,
      ymm: YmmParamsSchema,
      ymmt: YmmtParamsSchema,
      match: MatchParamsSchema,
      cylinders: CylindersParamsSchema,
      transmission: TransmissionParamsSchema,
      doors: DoorsParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_aspiration: EngineAspirationParamsSchema,
      engine_block: EngineBlockParamsSchema,
      highway_mpg_range: HighwayMpgRangeParamsSchema,
      city_mpg_range: CityMpgRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      price_range: PriceRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      dom_range: DomRangeParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      include_non_vin_listings: IncludeNonVinListingsParamsSchema,
      msa_code: MsaCodeParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      country: CarCountryParamsSchema,
      plot: CarPlotParamsSchema,
      nodedup: CarNodedupParamsSchema,
      dedup: CarDedupParamsSchema,
      owned: OwnedParamsSchema,
      source: CarSourceParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      trim_o: TrimOParamsSchema,
      trim_r: TrimRParamsSchema,
      dom_active_range: DomActiveRangeParamsSchema,
      dom_180_range: Dom_180RangeParamsSchema,
      exclude_certified: ExcludeCertifiedParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      photo_links: PhotoLinksParamsSchema,
      photo_links_cached: PhotoLinksCachedParamsSchema,
      stock_no: StockNoParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      first_seen_at_source_range: FirstSeenAtSourceRangeParamsSchema,
      first_seen_at_mc_range: FirstSeenAtMcRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
      first_seen_at_source_days: FirstSeenAtSourceDaysParamsSchema,
      first_seen_at_mc_days: FirstSeenAtMcDaysParamsSchema,
      include_relevant_links: IncludeRelevantLinksParamsSchema,
      inventory_count_range: InventoryCountRangeParamsSchema,
      dealer_id: CarDealerIdParamsSchema,
      exclude_dealer_ids: ExcludeDealerIdsParamsSchema,
      exclude_sources: ExcludeSourcesParamsSchema,
      in_transit: InTransitParamsSchema,
      seating_capacity: SeatingCapacityParamsSchema,
      powertrain_type: PowertrainTypeParamsSchema,
      price_change: PriceChangeParamsSchema,
      price_change_range: PriceChangeRangeParamsSchema,
      active_inventory_date_range: ActiveInventoryDateRangeParamsSchema,
      engine_size_range: EngineSizeRangeParamsSchema,
      high_value_features: HighValueFeaturesParamsSchema,
      min_photo_links: MinPhotoLinksParamsSchema,
      min_photo_links_cached: MinPhotoLinksCachedParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all cars listings matching the search & filter criteria',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postSearchCarActiveRankRoute = createRoute({
  method: 'post',
  path: '/search/car/active/rank',
  tags: ['Rank Car Listings'],
  summary: 'Compute relative rank for car listings.',
  description:
    'Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.',
  operationId: 'searchAndRankCar',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      append_api_key: AppendApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      zip: ZipParamsSchema,
      include_lease: CarIncludeLeaseParamsSchema,
      include_finance: CarIncludeFinanceParamsSchema,
      lease_term: LeaseTermParamsSchema,
      lease_down_payment: LeaseDownPaymentParamsSchema,
      lease_emp: LeaseEmpParamsSchema,
      finance_loan_term: FinanceLoanTermParamsSchema,
      finance_loan_apr: FinanceLoanAprParamsSchema,
      finance_emp: FinanceEmpParamsSchema,
      finance_down_payment: FinanceDownPaymentParamsSchema,
      finance_down_payment_per: FinanceDownPaymentPerParamsSchema,
      car_type: CarCarTypeParamsSchema,
      carfax_1_owner: Carfax_1OwnerParamsSchema,
      carfax_clean_title: CarfaxCleanTitleParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      vin: VinParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      vins: CarVinsParamsSchema,
      taxonomy_vins: CarTaxonomyVinsParamsSchema,
      ymmt: YmmtParamsSchema,
      match: MatchParamsSchema,
      cylinders: CylindersParamsSchema,
      transmission: TransmissionParamsSchema,
      doors: DoorsParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_aspiration: EngineAspirationParamsSchema,
      engine_block: EngineBlockParamsSchema,
      highway_mpg_range: HighwayMpgRangeParamsSchema,
      city_mpg_range: CityMpgRangeParamsSchema,
      miles_range: RankMilesRangeParamsSchema,
      price_range: RankPriceRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      dom_range: DomRangeParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      include_non_vin_listings: IncludeNonVinListingsParamsSchema,
      msa_code: MsaCodeParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      country: CarCountryParamsSchema,
      plot: CarPlotParamsSchema,
      nodedup: CarNodedupParamsSchema,
      dedup: CarDedupParamsSchema,
      owned: OwnedParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      trim_o: TrimOParamsSchema,
      trim_r: TrimRParamsSchema,
      dom_active_range: DomActiveRangeParamsSchema,
      dom_180_range: Dom_180RangeParamsSchema,
      exclude_certified: ExcludeCertifiedParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      photo_links: PhotoLinksParamsSchema,
      photo_links_cached: PhotoLinksCachedParamsSchema,
      stock_no: StockNoParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      first_seen_at_source_range: FirstSeenAtSourceRangeParamsSchema,
      first_seen_at_mc_range: FirstSeenAtMcRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
      first_seen_at_source_days: FirstSeenAtSourceDaysParamsSchema,
      first_seen_at_mc_days: FirstSeenAtMcDaysParamsSchema,
      inventory_type: InventoryTypeParamsSchema,
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number to fetch the results for the given criteria. Default is 1.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'number', type: 'number' },
          },
        }),
    }),
    body: CarRankRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Rank listings based on inputs provided.',
      content: { 'application/json': { schema: CarRankResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postSearchCarActiveRankListingsRoute = createRoute({
  method: 'post',
  path: '/search/car/active/rank/listings',
  tags: ['Rank Car Listings'],
  summary: 'Compute relative rank for car listings.',
  description:
    'Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.',
  operationId: 'rankCar',
  request: {
    query: z.object({ api_key: ApiKeyParamsSchema, append_api_key: AppendApiKeyParamsSchema }),
    body: CarRankRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Rank listings based on inputs provided.',
      content: { 'application/json': { schema: CarRankResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchCarAuctionActiveRoute = createRoute({
  method: 'get',
  path: '/search/car/auction/active',
  tags: ['Car Search'],
  summary: 'Gets active auction car listings for the given search criteria',
  description:
    'This API produces a list of currently active auction cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. \n The search API facilitates the following use cases - \n1. Search Cars around a given geo-point within a given radius \n2. Search cars for a specific year / make / model or combination of these \n3. Search cars matching multiple year, make, model combinatins in the same search request\n4. Filter results by most car specification attributes\n5. Search for similar cars by VIN or Taxonomy VIN \n6. Filter cars within a given price / miles / days on market (dom) range\n7. Specify a sort order for the results on price / miles / dom / listed date \n8. Search cars for a given City / State combination \n9. Get Facets to build the search drill downs \n10. Get Market averages for price/miles/dom for your search',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      append_api_key: AppendApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      zip: ZipParamsSchema,
      include_lease: CarIncludeLeaseParamsSchema,
      include_finance: CarIncludeFinanceParamsSchema,
      lease_term: LeaseTermParamsSchema,
      lease_down_payment: LeaseDownPaymentParamsSchema,
      lease_emp: LeaseEmpParamsSchema,
      finance_loan_term: FinanceLoanTermParamsSchema,
      finance_loan_apr: FinanceLoanAprParamsSchema,
      finance_emp: FinanceEmpParamsSchema,
      finance_down_payment: FinanceDownPaymentParamsSchema,
      finance_down_payment_per: FinanceDownPaymentPerParamsSchema,
      car_type: CarCarTypeParamsSchema,
      carfax_1_owner: Carfax_1OwnerParamsSchema,
      carfax_clean_title: CarfaxCleanTitleParamsSchema,
      year_range: YearRangeParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      vin: VinParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      vins: CarVinsParamsSchema,
      taxonomy_vins: CarTaxonomyVinsParamsSchema,
      mm: MmParamsSchema,
      ymm: YmmParamsSchema,
      ymmt: YmmtParamsSchema,
      match: MatchParamsSchema,
      cylinders: CylindersParamsSchema,
      transmission: TransmissionParamsSchema,
      doors: DoorsParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_aspiration: EngineAspirationParamsSchema,
      engine_block: EngineBlockParamsSchema,
      highway_mpg_range: HighwayMpgRangeParamsSchema,
      city_mpg_range: CityMpgRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      price_range: PriceRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      dom_range: DomRangeParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      include_non_vin_listings: IncludeNonVinListingsParamsSchema,
      msa_code: MsaCodeParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      country: CarCountryParamsSchema,
      plot: CarPlotParamsSchema,
      nodedup: CarNodedupParamsSchema,
      dedup: CarDedupParamsSchema,
      owned: OwnedParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      source: CarSourceParamsSchema,
      dealer_id: CarDealerIdParamsSchema,
      trim_o: TrimOParamsSchema,
      trim_r: TrimRParamsSchema,
      dom_active_range: DomActiveRangeParamsSchema,
      dom_180_range: Dom_180RangeParamsSchema,
      exclude_certified: ExcludeCertifiedParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      photo_links: PhotoLinksParamsSchema,
      photo_links_cached: PhotoLinksCachedParamsSchema,
      stock_no: StockNoParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      first_seen_at_source_range: FirstSeenAtSourceRangeParamsSchema,
      first_seen_at_mc_range: FirstSeenAtMcRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
      first_seen_at_source_days: FirstSeenAtSourceDaysParamsSchema,
      first_seen_at_mc_days: FirstSeenAtMcDaysParamsSchema,
      include_relevant_links: IncludeRelevantLinksParamsSchema,
      inventory_count_range: InventoryCountRangeParamsSchema,
      exclude_dealer_ids: ExcludeDealerIdsParamsSchema,
      exclude_sources: ExcludeSourcesParamsSchema,
      in_transit: InTransitParamsSchema,
      title_type: z
        .enum(['clean', 'salvage'])
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter on title type',
            in: 'query',
            name: 'title_type',
            required: false,
            schema: { enum: ['clean', 'salvage'], type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              operator: 'in',
              targetAlias: 'title_type_ss',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
          },
        }),
      seating_capacity: SeatingCapacityParamsSchema,
      engine_size_range: EngineSizeRangeParamsSchema,
      min_photo_links: MinPhotoLinksParamsSchema,
      min_photo_links_cached: MinPhotoLinksCachedParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all auction cars listings matching the search & filter criteria',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchCarAutoCompleteRoute = createRoute({
  method: 'get',
  path: '/search/car/auto-complete',
  tags: ['Car Search'],
  summary: 'API for auto-completion of inputs',
  description: 'Auto-complete the inputs of your end users',
  operationId: 'autoComplete',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      field: z
        .enum([
          'ymm',
          'mm',
          'make',
          'model',
          'trim',
          'body_type',
          'body_subtype',
          'vehicle_type',
          'transmission',
          'drivetrain',
          'fuel_type',
          'exterior_color',
          'interior_color',
          'engine',
          'engine_size',
          'engine_block',
          'state',
          'city',
        ])
        .openapi({
          param: {
            description: 'Field name for which you want auto-completion',
            in: 'query',
            name: 'field',
            required: true,
            schema: {
              enum: [
                'ymm',
                'mm',
                'make',
                'model',
                'trim',
                'body_type',
                'body_subtype',
                'vehicle_type',
                'transmission',
                'drivetrain',
                'fuel_type',
                'exterior_color',
                'interior_color',
                'engine',
                'engine_size',
                'engine_block',
                'state',
                'city',
              ],
              format: 'string',
              type: 'string',
            },
          },
        }),
      input: z
        .string()
        .openapi({
          param: {
            description: 'Input entered so far',
            in: 'query',
            name: 'input',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      transmission: TransmissionParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_block: EngineBlockParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      source: CarSourceParamsSchema,
      dealer_id: CarDealerIdParamsSchema,
      country: CountryParamsSchema,
      car_type: CarTypeParamsSchema,
      include_non_vin_listings: z
        .enum(['true', 'false'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to indicate whether to include non vin listing terms in results or not. Default is false to avoid un-normalised terms from non vin listings out of results',
            in: 'query',
            name: 'include_non_vin_listings',
            required: false,
            schema: { default: 'false', enum: ['true', 'false'], type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              operator: 'equals',
              targetAlias: 'is_non_vin_listing_is',
              transformConstraints: [{ transformer: 'boolToFlag', type: 'string' }],
            },
          },
        }),
      ignore_case: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean variable to indicate ignore case of current input',
            in: 'query',
            name: 'ignore_case',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      term_counts: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Boolean variable to indicate wheather to include term counts as well in response',
            in: 'query',
            name: 'term_counts',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      sort_by: z
        .enum(['index', 'count'])
        .default('index')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort the response, either by index or count(default)',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'index', enum: ['index', 'count'], type: 'string' },
          },
        }),
      seller_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'seller type for autocomplete',
            in: 'query',
            name: 'seller_type',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'seller_type',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
          },
        }),
      radius: RadiusParamsSchema,
      zip: ZipParamsSchema,
      inventory_count_range: InventoryCountRangeParamsSchema,
      exclude_dealer_ids: ExcludeDealerIdsParamsSchema,
      exclude_sources: ExcludeSourcesParamsSchema,
      in_transit: InTransitParamsSchema,
      facet_min_count: FacetMinCountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Unique terms available in given field for auto completion',
      content: { 'application/json': { schema: SearchAutoCompleteResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchCarFsboActiveRoute = createRoute({
  method: 'get',
  path: '/search/car/fsbo/active',
  tags: ['Car Search'],
  summary: 'Gets active private party car listings for the given search criteria',
  description:
    'This API produces a list of currently active FSBO cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. \n The search API facilitates the following use cases - \n1. Search Cars around a given geo-point within a given radius \n2. Search cars for a specific year / make / model or combination of these \n3. Search cars matching multiple year, make, model combinatins in the same search request\n4. Filter results by most car specification attributes\n5. Search for similar cars by VIN or Taxonomy VIN \n6. Filter cars within a given price / miles / days on market (dom) range\n7. Specify a sort order for the results on price / miles / dom / listed date \n8. Search cars for a given City / State combination \n9. Get Facets to build the search drill downs \n10. Get Market averages for price/miles/dom for your search',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      append_api_key: AppendApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      zip: ZipParamsSchema,
      include_lease: CarIncludeLeaseParamsSchema,
      include_finance: CarIncludeFinanceParamsSchema,
      lease_term: LeaseTermParamsSchema,
      lease_down_payment: LeaseDownPaymentParamsSchema,
      lease_emp: LeaseEmpParamsSchema,
      finance_loan_term: FinanceLoanTermParamsSchema,
      finance_loan_apr: FinanceLoanAprParamsSchema,
      finance_emp: FinanceEmpParamsSchema,
      finance_down_payment: FinanceDownPaymentParamsSchema,
      finance_down_payment_per: FinanceDownPaymentPerParamsSchema,
      car_type: CarCarTypeParamsSchema,
      carfax_1_owner: Carfax_1OwnerParamsSchema,
      carfax_clean_title: CarfaxCleanTitleParamsSchema,
      year_range: YearRangeParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      vin: VinParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      vins: CarVinsParamsSchema,
      taxonomy_vins: CarTaxonomyVinsParamsSchema,
      mm: MmParamsSchema,
      ymm: YmmParamsSchema,
      ymmt: YmmtParamsSchema,
      match: MatchParamsSchema,
      cylinders: CylindersParamsSchema,
      transmission: TransmissionParamsSchema,
      doors: DoorsParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_aspiration: EngineAspirationParamsSchema,
      engine_block: EngineBlockParamsSchema,
      highway_mpg_range: HighwayMpgRangeParamsSchema,
      city_mpg_range: CityMpgRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      price_range: PriceRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      dom_range: DomRangeParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      include_non_vin_listings: IncludeNonVinListingsParamsSchema,
      msa_code: MsaCodeParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      country: CarCountryParamsSchema,
      plot: CarPlotParamsSchema,
      nodedup: CarNodedupParamsSchema,
      dedup: CarDedupParamsSchema,
      owned: OwnedParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      source: CarSourceParamsSchema,
      dealer_id: CarDealerIdParamsSchema,
      trim_o: TrimOParamsSchema,
      trim_r: TrimRParamsSchema,
      dom_active_range: DomActiveRangeParamsSchema,
      dom_180_range: Dom_180RangeParamsSchema,
      exclude_certified: ExcludeCertifiedParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      photo_links: PhotoLinksParamsSchema,
      photo_links_cached: PhotoLinksCachedParamsSchema,
      stock_no: StockNoParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      first_seen_at_source_range: FirstSeenAtSourceRangeParamsSchema,
      first_seen_at_mc_range: FirstSeenAtMcRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
      first_seen_at_source_days: FirstSeenAtSourceDaysParamsSchema,
      first_seen_at_mc_days: FirstSeenAtMcDaysParamsSchema,
      include_relevant_links: IncludeRelevantLinksParamsSchema,
      inventory_count_range: InventoryCountRangeParamsSchema,
      exclude_dealer_ids: ExcludeDealerIdsParamsSchema,
      exclude_sources: ExcludeSourcesParamsSchema,
      exclude_dealer_listings: ExcludeDealerListingsParamsSchema,
      in_transit: InTransitParamsSchema,
      seating_capacity: SeatingCapacityParamsSchema,
      engine_size_range: EngineSizeRangeParamsSchema,
      min_photo_links: MinPhotoLinksParamsSchema,
      min_photo_links_cached: MinPhotoLinksCachedParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all FSBO cars listings matching the search & filter criteria',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchCarIncentiveOemRoute = createRoute({
  method: 'get',
  path: '/search/car/incentive/oem',
  tags: ['OEM Incentive Search'],
  summary: 'Gets oem incentive listings for the given search criteria',
  description:
    'This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active oem incentive from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. \n The search API facilitates the following use cases - \n1. Search Cars around a given geo-point within a given radius \n2. Search cars for a specific year / make / model or combination of these \n3. Search cars matching multiple year, make, model combinatins in the same search request\n4. Filter results by most car specification attributes\n5. Search for similar cars by VIN or Taxonomy VIN \n6. Filter cars within a given price / miles / days on market (dom) range\n7. Specify a sort order for the results on price / miles / dom / listed date \n8. Search cars for a given City / State combination \n9. Get Facets to build the search drill downs \n10. Get Market averages for price/miles/dom for your search',
  operationId: 'oemSearch',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      offer_type: z
        .enum(['lease', 'finance', 'cash'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of the incentive',
            in: 'query',
            name: 'offer_type',
            required: false,
            schema: { enum: ['lease', 'finance', 'cash'], type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              operator: 'in',
              targetAlias: 'offer_type',
            },
          },
        }),
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      msrp: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000',
            in: 'query',
            name: 'msrp',
            required: false,
            schema: { format: 'string', type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'msrp',
              transformConstraints: [
                { defaultMax: 1000000, defaultMin: 500, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      apr: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'APR range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000',
            in: 'query',
            name: 'apr',
            required: false,
            schema: { format: 'string', type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'apr',
              transformConstraints: [
                { defaultMax: 20, defaultMin: 0, transformer: 'parseFloat', type: 'integer' },
              ],
            },
          },
        }),
      monthly: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'To filter listing on Monthly payment amount, usually populated in Lease offers',
            in: 'query',
            name: 'monthly',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'monthly',
              transformConstraints: [
                { defaultMax: 500, defaultMin: 100, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      monthly_per_thousand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'To filter listing on monthly amount to be paid by customer for every $1000 financed at the advertised APR rate',
            in: 'query',
            name: 'monthly_per_thousand',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'monthly_per_thousand',
              transformConstraints: [
                { defaultMax: 1000, defaultMin: 100, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      down_payment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on down payment offer on car',
            in: 'query',
            name: 'down_payment',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'down_payment',
              transformConstraints: [
                { defaultMax: 2000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      due_at_signing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'To filter listing on total amount due at signing, that usually includes first month payment, down payment, acquisition fee etc',
            in: 'query',
            name: 'due_at_signing',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'due_at_signing',
              transformConstraints: [
                { defaultMax: 2000, defaultMin: 500, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      security_deposit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on security deposit required for the offer',
            in: 'query',
            name: 'security_deposit',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              operator: 'in',
              separator: '-',
              targetAlias: 'security_deposit',
              transformConstraints: [
                { defaultMax: 1000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      disposition_fee: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on disposition fee of the car',
            in: 'query',
            name: 'disposition_fee',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'disposition_fee',
              transformConstraints: [
                { defaultMax: 500, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      acquisition_fee: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on acquisition fee of the car',
            in: 'query',
            name: 'acquisition_fee',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'acquisition_fee',
              transformConstraints: [
                { defaultMax: 3000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      duration: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on offer duration in months',
            in: 'query',
            name: 'duration',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'duration',
              transformConstraints: [
                { defaultMax: 100, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      dealer_contribution: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "To filter listing on any contribution from dealer's side",
            in: 'query',
            name: 'dealer_contribution',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'dealer_contribution',
              transformConstraints: [
                { defaultMax: 1000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      mileage_charge: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mileage Charge Range range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 100-1000',
            in: 'query',
            name: 'mileage_charge',
            required: false,
            schema: { format: 'string', type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'mileage_charge',
              transformConstraints: [
                { defaultMax: 1000, defaultMin: 0, transformer: 'parseFloat', type: 'integer' },
              ],
            },
          },
        }),
      mileage_charge_limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'To filter listing on mileage charge limit the offer is valid up to under the default clauses',
            in: 'query',
            name: 'mileage_charge_limit',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'mileage_charge_limit',
              transformConstraints: [
                { defaultMax: 3000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      cashback_amount: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on cashback amounts listed in offer',
            in: 'query',
            name: 'cashback_amount',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'cashback_amount',
              transformConstraints: [
                { defaultMax: 3000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      cashback_target_group: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'To filter listing on the demographic or any other entity for whom this cashback offer is for. Not all target groups are identified but the most common ones are tagged like Military, Grad students Current owners etc',
            in: 'query',
            name: 'cashback_target_group',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'cashback_target_group',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
          },
        }),
      lease_end_purchase_option: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on amount at the lease end to pay for buying the car',
            in: 'query',
            name: 'lease_end_purchase_option',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'lease_end_purchase_option',
              transformConstraints: [
                { defaultMax: 3000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      net_capitalised_cost: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on net capitalised cost of the car',
            in: 'query',
            name: 'net_capitalised_cost',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'net_capitalised_cost',
              transformConstraints: [
                { defaultMax: 3000, defaultMin: 0, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      gross_capitalised_cost: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on gross capitalised cost of the car',
            in: 'query',
            name: 'gross_capitalised_cost',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'gross_capitalised_cost',
              transformConstraints: [
                { defaultMax: 12, defaultMin: 1, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      total_monthly_payment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on gross capitalised cost of the car',
            in: 'query',
            name: 'total_monthly_payment',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              separator: '-',
              targetAlias: 'total_monthly_payment',
              transformConstraints: [
                { defaultMax: 12, defaultMin: 1, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      zip: ZipParamsSchema,
      city: CityParamsSchema,
      state: StateParamsSchema,
      country: CountryParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      search_text: SearchTextParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all oem incentive listings matching the search & filter criteria',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchCarRecentsRoute = createRoute({
  method: 'get',
  path: '/search/car/recents',
  tags: ['Car Search'],
  summary: 'Gets Recent car listings for the given search criteria',
  description:
    'This API produces a list of recently active (past 90 days) cars from the market for the given search criteria',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      append_api_key: AppendApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Radius around the search location (Unit - Miles)',
            in: 'query',
            name: 'radius',
            schema: { format: 'int32', maximum: 100, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      zip: ZipParamsSchema,
      include_lease: CarIncludeLeaseParamsSchema,
      include_finance: CarIncludeFinanceParamsSchema,
      lease_term: LeaseTermParamsSchema,
      lease_down_payment: LeaseDownPaymentParamsSchema,
      lease_emp: LeaseEmpParamsSchema,
      finance_loan_term: FinanceLoanTermParamsSchema,
      finance_loan_apr: FinanceLoanAprParamsSchema,
      finance_emp: FinanceEmpParamsSchema,
      finance_down_payment: FinanceDownPaymentParamsSchema,
      finance_down_payment_per: FinanceDownPaymentPerParamsSchema,
      car_type: CarCarTypeParamsSchema,
      carfax_1_owner: Carfax_1OwnerParamsSchema,
      carfax_clean_title: CarfaxCleanTitleParamsSchema,
      year_range: YearRangeParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      dealer_id: DealerIdParamsSchema,
      vin: VinParamsSchema,
      source: SourceParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      vins: CarVinsParamsSchema,
      taxonomy_vins: CarTaxonomyVinsParamsSchema,
      ymmt: YmmtParamsSchema,
      match: MatchParamsSchema,
      cylinders: CylindersParamsSchema,
      transmission: TransmissionParamsSchema,
      doors: DoorsParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_aspiration: EngineAspirationParamsSchema,
      engine_block: EngineBlockParamsSchema,
      highway_mpg_range: HighwayMpgRangeParamsSchema,
      city_mpg_range: CityMpgRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      price_range: PriceRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      dom_range: DomRangeParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      first_seen_at_source_range: FirstSeenAtSourceRangeParamsSchema,
      first_seen_at_mc_range: FirstSeenAtMcRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
      first_seen_at_source_days: FirstSeenAtSourceDaysParamsSchema,
      first_seen_at_mc_days: FirstSeenAtMcDaysParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      include_non_vin_listings: IncludeNonVinListingsParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      country: CarCountryParamsSchema,
      plot: CarPlotParamsSchema,
      nodedup: CarNodedupParamsSchema,
      dedup: CarDedupParamsSchema,
      owned: OwnedParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      msa_code: MsaCodeParamsSchema,
      dealer_name: DealerNameParamsSchema,
      dealership_group_name: DealershipGroupNameParamsSchema,
      trim_o: TrimOParamsSchema,
      trim_r: TrimRParamsSchema,
      dom_active_range: DomActiveRangeParamsSchema,
      dom_180_range: Dom_180RangeParamsSchema,
      exclude_certified: ExcludeCertifiedParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      photo_links: PhotoLinksParamsSchema,
      photo_links_cached: PhotoLinksCachedParamsSchema,
      stock_no: StockNoParamsSchema,
      sold: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'sold parameter to fetch only sold listings',
            in: 'query',
            name: 'sold',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      include_relevant_links: IncludeRelevantLinksParamsSchema,
      expired: ExpiredParamsSchema,
      exclude_dealer_ids: ExcludeDealerIdsParamsSchema,
      exclude_sources: ExcludeSourcesParamsSchema,
      in_transit: InTransitParamsSchema,
      seating_capacity: SeatingCapacityParamsSchema,
      active_inventory_date_range: ActiveInventoryDateRangeParamsSchema,
      engine_size_range: EngineSizeRangeParamsSchema,
      price_change_range: PriceChangeRangeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all cars listings matching the search & filter criteria',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchCarUkActiveRoute = createRoute({
  method: 'get',
  path: '/search/car/uk/active',
  tags: ['Car Search'],
  summary: 'Gets active car listings in UK for the given search criteria',
  description: 'Search cars for sale in UK',
  operationId: 'search',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      postal_code: PostalCodeParamsSchema,
      zip: ZipParamsSchema,
      car_type: CarTypeParamsSchema,
      year: YearParamsSchema,
      year_range: YearRangeParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      variant: VariantParamsSchema,
      trim: TrimParamsSchema,
      vin: VinParamsSchema,
      body_type: BodyTypeParamsSchema,
      ymmt: YmmtParamsSchema,
      transmission: TransmissionParamsSchema,
      doors: DoorsParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      engine: EngineParamsSchema,
      miles_range: MilesRangeParamsSchema,
      price_range: PriceRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      msa_code: MsaCodeParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      country: CarUkCountryParamsSchema,
      plot: CarPlotParamsSchema,
      nodedup: CarNodedupParamsSchema,
      dedup: CarDedupParamsSchema,
      county: CountyParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      stock_no: StockNoParamsSchema,
      dom_range: DomRangeParamsSchema,
      dom_active_range: DomActiveRangeParamsSchema,
      dom_180_range: Dom_180RangeParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      first_seen_at_source_range: FirstSeenAtSourceRangeParamsSchema,
      first_seen_at_mc_range: FirstSeenAtMcRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
      first_seen_at_source_days: FirstSeenAtSourceDaysParamsSchema,
      first_seen_at_mc_days: FirstSeenAtMcDaysParamsSchema,
      co2_emissions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'CO2 emissions',
            in: 'query',
            name: 'co2_emissions',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'co2_emissions',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      insurance_group: InsuranceGroupParamsSchema,
      vehicle_registration_mark: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Vehicle Registration Mark',
            in: 'query',
            name: 'vehicle_registration_mark',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'vehicle_registration_mark',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      vehicle_registration_date_range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Vehicle registration date range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623',
            in: 'query',
            name: 'vehicle_registration_date_range',
            required: false,
            schema: { format: 'string', type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              operator: 'between',
              separator: '-',
              targetAlias: 'vehicle_registration_date_range',
              transformConstraints: [{ transformer: 'parseDate', type: 'date' }],
            },
          },
        }),
      num_owners: NumOwnersParamsSchema,
      inventory_count_range: InventoryCountRangeParamsSchema,
      source: CarSourceParamsSchema,
      dealer_id: CarDealerIdParamsSchema,
      exclude_sources: ExcludeSourcesParamsSchema,
      exclude_dealer_ids: ExcludeDealerIdsParamsSchema,
      in_transit: InTransitParamsSchema,
      include_non_vin_listings: IncludeNonVinListingsParamsSchema,
      cylinders: CylindersParamsSchema,
      photo_links: PhotoLinksParamsSchema,
      photo_links_cached: PhotoLinksCachedParamsSchema,
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      write_off_category: WriteOffCategoryParamsSchema,
      exclude_write_off_category: ExcludeWriteOffCategoryParamsSchema,
      fca_status: FcaStatusParamsSchema,
      seating_capacity: SeatingCapacityParamsSchema,
      vrm: VrmParamsSchema,
      powertrain_type: PowertrainTypeParamsSchema,
      client_filters: ClientFiltersParamsSchema,
      boost: BoostParamsSchema,
      car_location_seller_name: CarLocationSellerNameParamsSchema,
      car_location_street: CarLocationStreetParamsSchema,
      car_location_city: CarLocationCityParamsSchema,
      car_location_county: CarLocationCountyParamsSchema,
      car_location_zip: CarLocationZipParamsSchema,
      car_location_latitude: CarLocationLatitudeParamsSchema,
      car_location_longitude: CarLocationLongitudeParamsSchema,
      price_change: PriceChangeParamsSchema,
      price_change_range: PriceChangeRangeParamsSchema,
      active_inventory_date_range: ActiveInventoryDateRangeParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_size_range: EngineSizeRangeParamsSchema,
      uvc_id: UvcIdParamsSchema,
      highway_mpg_range: UkHighwayMpgRangeParamsSchema,
      city_mpg_range: UkCityMpgRangeParamsSchema,
      combined_mpg_range: UkCombinedMpgRangeParamsSchema,
      owned: OwnedParamsSchema,
      min_photo_links: MinPhotoLinksParamsSchema,
      min_photo_links_cached: MinPhotoLinksCachedParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all cars listings matching the search & filter criteria',
      content: { 'application/json': { schema: UKSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchCarUkRecentsRoute = createRoute({
  method: 'get',
  path: '/search/car/uk/recents',
  tags: ['Car Search'],
  summary: 'Gets Recent UK car listings for the given search criteria',
  description:
    'This API produces a list of recently active (past 90 days) cars from the market for the given search criteria',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      append_api_key: AppendApiKeyParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Radius around the search location (Unit - Miles)',
            in: 'query',
            name: 'radius',
            schema: { format: 'int32', maximum: 100, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      zip: ZipParamsSchema,
      include_lease: CarIncludeLeaseParamsSchema,
      include_finance: CarIncludeFinanceParamsSchema,
      lease_term: LeaseTermParamsSchema,
      lease_down_payment: LeaseDownPaymentParamsSchema,
      lease_emp: LeaseEmpParamsSchema,
      finance_loan_term: FinanceLoanTermParamsSchema,
      finance_loan_apr: FinanceLoanAprParamsSchema,
      finance_emp: FinanceEmpParamsSchema,
      finance_down_payment: FinanceDownPaymentParamsSchema,
      finance_down_payment_per: FinanceDownPaymentPerParamsSchema,
      car_type: CarCarTypeParamsSchema,
      carfax_1_owner: Carfax_1OwnerParamsSchema,
      carfax_clean_title: CarfaxCleanTitleParamsSchema,
      year_range: YearRangeParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      dealer_id: DealerIdParamsSchema,
      vin: VinParamsSchema,
      source: SourceParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      vins: CarVinsParamsSchema,
      taxonomy_vins: CarTaxonomyVinsParamsSchema,
      ymmt: YmmtParamsSchema,
      match: MatchParamsSchema,
      cylinders: CylindersParamsSchema,
      transmission: TransmissionParamsSchema,
      doors: DoorsParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_aspiration: EngineAspirationParamsSchema,
      engine_block: EngineBlockParamsSchema,
      highway_mpg_range: UkHighwayMpgRangeParamsSchema,
      city_mpg_range: UkCityMpgRangeParamsSchema,
      combined_mpg_range: UkCombinedMpgRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      price_range: PriceRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      dom_range: DomRangeParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      first_seen_at_source_range: FirstSeenAtSourceRangeParamsSchema,
      first_seen_at_mc_range: FirstSeenAtMcRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
      first_seen_at_source_days: FirstSeenAtSourceDaysParamsSchema,
      first_seen_at_mc_days: FirstSeenAtMcDaysParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      include_non_vin_listings: IncludeNonVinListingsParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      country: CarUkCountryParamsSchema,
      plot: CarPlotParamsSchema,
      nodedup: CarNodedupParamsSchema,
      dedup: CarDedupParamsSchema,
      owned: OwnedParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      msa_code: MsaCodeParamsSchema,
      dealer_name: DealerNameParamsSchema,
      dealership_group_name: DealershipGroupNameParamsSchema,
      trim_o: TrimOParamsSchema,
      trim_r: TrimRParamsSchema,
      dom_active_range: DomActiveRangeParamsSchema,
      dom_180_range: Dom_180RangeParamsSchema,
      exclude_certified: ExcludeCertifiedParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      dealer_type: DealerTypeParamsSchema,
      photo_links: PhotoLinksParamsSchema,
      photo_links_cached: PhotoLinksCachedParamsSchema,
      stock_no: StockNoParamsSchema,
      sold: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'sold parameter to fetch only sold listings',
            in: 'query',
            name: 'sold',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      include_relevant_links: IncludeRelevantLinksParamsSchema,
      expired: ExpiredParamsSchema,
      exclude_dealer_ids: ExcludeDealerIdsParamsSchema,
      exclude_sources: ExcludeSourcesParamsSchema,
      in_transit: InTransitParamsSchema,
      seating_capacity: SeatingCapacityParamsSchema,
      insurance_group: InsuranceGroupParamsSchema,
      vrm: VrmParamsSchema,
      num_owners: NumOwnersParamsSchema,
      variant: VariantParamsSchema,
      postal_code: PostalCodeParamsSchema,
      write_off_category: WriteOffCategoryParamsSchema,
      fca_status: FcaStatusParamsSchema,
      active_inventory_date_range: ActiveInventoryDateRangeParamsSchema,
      engine_size_range: EngineSizeRangeParamsSchema,
      price_change_range: PriceChangeRangeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all cars listings matching the search & filter criteria',
      content: { 'application/json': { schema: UKSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchHeavyEquipmentActiveRoute = createRoute({
  method: 'get',
  path: '/search/heavy-equipment/active',
  tags: ['Heavy Equipment Search'],
  summary: 'Gets active heavy equipment listings for the given search criteria',
  description:
    'This endpoint provides search on heavy equipment inventory. This API produces a list of currently active heavy equipments from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. \n The search API facilitates the following use cases - \n1. Search heavy equipments around a given geo-point within a given radius \n2. Search heavy equipments for a specific year / make / model or combination of these \n3. Search heavy equipments matching multiple year, make, model combinatins in the same search request\n4. Filter results by most heavy equipment specification attributes\n5. Filter heavy equipments within a given price / miles range\n6. Specify a sort order for the results on price / miles / listed date \n7. Search heavy equipments for a given City / State combination \n8. Get Facets to build the search drill downs \n9. Get Market averages for price/miles for your search',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      price_range: PriceRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      search_text: SearchTextParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      vin: VinParamsSchema,
      inventory_type: InventoryTypeParamsSchema,
      stock_no: StockNoParamsSchema,
      source: SourceParamsSchema,
      dealer_name: DealerNameParamsSchema,
      dealer_id: DealerIdParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      engine: EngineParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      transmission: TransmissionParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      body_type: BodyTypeParamsSchema,
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter heavy equipments on their category',
            in: 'query',
            name: 'category',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'category',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      sub_category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter heavy equipments on their sub-category',
            in: 'query',
            name: 'sub_category',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'sub_category',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      hours_used_range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Hours used range to filter heavy equipments with the their usage in the range given. Range to be given in the format - min-max e.g. 1000-5000',
            in: 'query',
            name: 'hours_used_range',
            required: false,
            schema: { format: 'string', type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              operator: 'between',
              separator: '-',
              targetAlias: 'hours_used',
              transformConstraints: [
                { defaultMax: 5000, defaultMin: 100, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      state: StateParamsSchema,
      city: CityParamsSchema,
      zip: ZipParamsSchema,
      msa_code: MsaCodeParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all heavy equipment listings matching the search & filter criteria',
      content: { 'application/json': { schema: HeavyEquipmentsSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchHeavyEquipmentAutoCompleteRoute = createRoute({
  method: 'get',
  path: '/search/heavy-equipment/auto-complete',
  tags: ['Heavy Equipment Search'],
  summary: 'API for auto-completion of inputs',
  description: 'Auto-complete the inputs of your end users',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      field: z
        .enum([
          'make',
          'model',
          'trim',
          'body_type',
          'transmission',
          'drivetrain',
          'fuel_type',
          'exterior_color',
          'interior_color',
          'engine',
          'category',
          'sub_category',
          'state',
          'city',
        ])
        .openapi({
          param: {
            description: 'Field name for which you want auto-completion',
            in: 'query',
            name: 'field',
            required: true,
            schema: {
              enum: [
                'make',
                'model',
                'trim',
                'body_type',
                'transmission',
                'drivetrain',
                'fuel_type',
                'exterior_color',
                'interior_color',
                'engine',
                'category',
                'sub_category',
                'state',
                'city',
              ],
              format: 'string',
              type: 'string',
            },
          },
        }),
      input: z
        .string()
        .openapi({
          param: {
            description: 'Input entered so far',
            in: 'query',
            name: 'input',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      body_type: BodyTypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      transmission: TransmissionParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      color: ColorParamsSchema,
      engine: EngineParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      inventory_type: InventoryTypeParamsSchema,
      ignore_case: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean variable to indicate ignore case of current input',
            in: 'query',
            name: 'ignore_case',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      term_counts: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Boolean variable to indicate wheather to include term counts as well in response',
            in: 'query',
            name: 'term_counts',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      sort_by: z
        .enum(['index', 'count'])
        .default('index')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort the response, either by index or count(default)',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'index', enum: ['index', 'count'], type: 'string' },
          },
        }),
      seller_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'seller type for autocomplete',
            in: 'query',
            name: 'seller_type',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'seller_type',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
          },
        }),
      radius: RadiusParamsSchema,
      zip: ZipParamsSchema,
      facet_min_count: FacetMinCountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Unique terms available in given field for auto completion',
      content: { 'application/json': { schema: SearchAutoCompleteResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchMotorcycleActiveRoute = createRoute({
  method: 'get',
  path: '/search/motorcycle/active',
  tags: ['Motorcycle Search'],
  summary: 'Gets active motorcycle listings for the given search criteria',
  description:
    'This endpoint provides search on motorcycle inventory. This API produces a list of currently active motorcycles from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. \n The search API facilitates the following use cases - \n1. Search motorcycles around a given geo-point within a given radius \n2. Search motorcycles for a specific year / make / model or combination of these \n3. Search motorcycles matching multiple year, make, model combinatins in the same search request\n4. Filter results by most motorcycle specification attributes\n5. Search for similar motorcycles by VIN or Taxonomy VIN \n6. Filter motorcycles within a given price / miles range\n7. Specify a sort order for the results on price / miles / listed date \n8. Search motorcycles for a given City / State combination \n9. Get Facets to build the search drill downs \n10. Get Market averages for price/miles for your search',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      price_range: PriceRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      search_text: SearchTextParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      vin: VinParamsSchema,
      taxonomy_vin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Taxonomy VIN of the motorcycle',
            in: 'query',
            name: 'taxonomy_vin',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'taxonomy_vin',
              transformConstraints: [
                { maxLength: 10, transformer: 'caseTransformer', type: 'string' },
              ],
            },
            required: false,
          },
        }),
      inventory_type: InventoryTypeParamsSchema,
      stock_no: StockNoParamsSchema,
      source: SourceParamsSchema,
      dealer_id: DealerIdParamsSchema,
      color: ColorParamsSchema,
      body_type: BodyTypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      cylinders: CylindersParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      engine: EngineParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      transmission: TransmissionParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      zip: ZipParamsSchema,
      msa_code: MsaCodeParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all motorcycles listings matching the search & filter criteria',
      content: { 'application/json': { schema: MotorcycleSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchMotorcycleAutoCompleteRoute = createRoute({
  method: 'get',
  path: '/search/motorcycle/auto-complete',
  tags: ['Motorcycle Search'],
  summary: 'API for auto-completion of inputs',
  description: 'Auto-complete the inputs of your end users',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      field: z
        .enum([
          'make',
          'model',
          'trim',
          'body_type',
          'vehicle_type',
          'transmission',
          'drivetrain',
          'fuel_type',
          'color',
          'engine',
          'state',
          'city',
        ])
        .openapi({
          param: {
            description: 'Field name for which you want auto-completion',
            in: 'query',
            name: 'field',
            required: true,
            schema: {
              enum: [
                'make',
                'model',
                'trim',
                'body_type',
                'vehicle_type',
                'transmission',
                'drivetrain',
                'fuel_type',
                'color',
                'engine',
                'state',
                'city',
              ],
              format: 'string',
              type: 'string',
            },
          },
        }),
      input: z
        .string()
        .openapi({
          param: {
            description: 'Input entered so far',
            in: 'query',
            name: 'input',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      body_type: BodyTypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      transmission: TransmissionParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      color: ColorParamsSchema,
      engine: EngineParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      inventory_type: InventoryTypeParamsSchema,
      ignore_case: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean variable to indicate ignore case of current input',
            in: 'query',
            name: 'ignore_case',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      term_counts: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Boolean variable to indicate wheather to include term counts as well in response',
            in: 'query',
            name: 'term_counts',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      sort_by: z
        .enum(['index', 'count'])
        .default('index')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort the response, either by index or count(default)',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'index', enum: ['index', 'count'], type: 'string' },
          },
        }),
      seller_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'seller type for autocomplete',
            in: 'query',
            name: 'seller_type',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'seller_type',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
          },
        }),
      radius: RadiusParamsSchema,
      zip: ZipParamsSchema,
      facet_min_count: FacetMinCountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Unique terms available in given field for auto completion',
      content: { 'application/json': { schema: SearchAutoCompleteResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchRvActiveRoute = createRoute({
  method: 'get',
  path: '/search/rv/active',
  tags: ['RV Search'],
  summary: 'Gets active RV listings for the given search criteria',
  description:
    'This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. \n The search API facilitates the following use cases - \n1. Search RV around a given geo-point within a given radius \n2. Search RV for a specific year / make / model or combination of these \n3. Search RV matching multiple year, make, model combinatins in the same search request\n4. Filter results by most RV specification attributes\n5. Filter RV within a given price / miles range\n6. Specify a sort order for the results on price / miles / listed date \n7. Search RV for a given City / State combination \n8. Get Facets to build the search drill downs \n9. Get Market averages for price/miles for your search',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      price_range: PriceRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      year_range: YearRangeParamsSchema,
      search_text: SearchTextParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      model_o: ModelOParamsSchema,
      vin: VinParamsSchema,
      inventory_type: InventoryTypeParamsSchema,
      stock_no: StockNoParamsSchema,
      source: SourceParamsSchema,
      dealer_name: DealerNameParamsSchema,
      dealer_id: DealerIdParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      engine: EngineParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      transmission: TransmissionParamsSchema,
      class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter RV listings on class',
            in: 'query',
            name: 'class',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'class',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
          },
        }),
      state: StateParamsSchema,
      city: CityParamsSchema,
      zip: ZipParamsSchema,
      msa_code: MsaCodeParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
      slideouts: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter RV listings on slideouts',
            in: 'query',
            name: 'slideouts',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'slideouts',
              transformConstraints: [{ transformer: 'parseInt', type: 'integer' }],
            },
          },
        }),
      length_range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'length range to filter listings with the length in the range given. Range to be given in the format - min-max e.g. 50-200',
            in: 'query',
            name: 'length_range',
            required: false,
            schema: { format: 'string', type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              operator: 'between',
              separator: '-',
              targetAlias: 'length_fs',
              transformConstraints: [
                { defaultMax: 200, defaultMin: 1, transformer: 'parseInt', type: 'integer' },
              ],
            },
          },
        }),
      length: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter RV listings on length',
            in: 'query',
            name: 'length',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'length',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
          },
        }),
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      seating_capacity: SeatingCapacityParamsSchema,
      fresh_water_capacity: FreshWaterCapacityParamsSchema,
      sleeps: SleepsParamsSchema,
      cylinders: CylindersParamsSchema,
      number_of_awnings: NumberOfAwningsParamsSchema,
      doors: DoorsParamsSchema,
      gvwr: GvwrParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all RV listings matching the search & filter criteria',
      content: { 'application/json': { schema: RVSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchRvAutoCompleteRoute = createRoute({
  method: 'get',
  path: '/search/rv/auto-complete',
  tags: ['RV Search'],
  summary: 'API for auto-completion of inputs',
  description: 'Auto-complete the inputs of your end users',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      field: z
        .enum([
          'make',
          'model',
          'trim',
          'class',
          'transmission',
          'fuel_type',
          'exterior_color',
          'interior_color',
          'engine',
          'state',
          'city',
        ])
        .openapi({
          param: {
            description: 'Field name for which you want auto-completion',
            in: 'query',
            name: 'field',
            required: true,
            schema: {
              enum: [
                'make',
                'model',
                'trim',
                'class',
                'transmission',
                'fuel_type',
                'exterior_color',
                'interior_color',
                'engine',
                'state',
                'city',
              ],
              format: 'string',
              type: 'string',
            },
          },
        }),
      input: z
        .string()
        .openapi({
          param: {
            description: 'Input entered so far',
            in: 'query',
            name: 'input',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      body_type: BodyTypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      transmission: TransmissionParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      color: ColorParamsSchema,
      engine: EngineParamsSchema,
      state: StateParamsSchema,
      city: CityParamsSchema,
      inventory_type: InventoryTypeParamsSchema,
      ignore_case: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean variable to indicate ignore case of current input',
            in: 'query',
            name: 'ignore_case',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      term_counts: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Boolean variable to indicate wheather to include term counts as well in response',
            in: 'query',
            name: 'term_counts',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      sort_by: z
        .enum(['index', 'count'])
        .default('index')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort the response, either by index or count(default)',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'index', enum: ['index', 'count'], type: 'string' },
          },
        }),
      seller_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'seller type for autocomplete',
            in: 'query',
            name: 'seller_type',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'seller_type',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
          },
        }),
      radius: RadiusParamsSchema,
      zip: ZipParamsSchema,
      facet_min_count: FacetMinCountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Unique terms available in given field for auto completion',
      content: { 'application/json': { schema: SearchAutoCompleteResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSearchRvUkActiveRoute = createRoute({
  method: 'get',
  path: '/search/rv/uk/active',
  tags: ['RV Search'],
  summary: 'Gets active RV listings for the given search criteria',
  description:
    'This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. \n The search API facilitates the following use cases - \n1. Search RV around a given geo-point within a given radius \n2. Search RV for a specific year / make / model or combination of these \n3. Search RV matching multiple year, make, model combinatins in the same search request\n4. Filter results by most RV specification attributes\n5. Filter RV within a given price / miles range\n6. Specify a sort order for the results on price / miles / listed date \n7. Search RV for a given City / State combination \n8. Get Facets to build the search drill downs \n9. Get Market averages for price/miles for your search',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      price_range: PriceRangeParamsSchema,
      miles_range: MilesRangeParamsSchema,
      msrp_range: MsrpRangeParamsSchema,
      year_range: YearRangeParamsSchema,
      search_text: SearchTextParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      radius: RadiusParamsSchema,
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      vin: VinParamsSchema,
      source: SourceParamsSchema,
      dealer_name: DealerNameParamsSchema,
      dealer_id: DealerIdParamsSchema,
      exterior_color: ExteriorColorParamsSchema,
      interior_color: InteriorColorParamsSchema,
      engine_size: EngineSizeParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter RV listings on category',
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'category_ss',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
          },
        }),
      state: StateParamsSchema,
      city: CityParamsSchema,
      county: CountyParamsSchema,
      postal_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter listing on postal code around which they are listed',
            in: 'query',
            name: 'postal_code',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'zip',
              transformConstraints: [
                { regex: '\\s', replace: '', transformer: 'regexReplace' },
                { transformer: 'caseTransformer', type: 'string' },
              ],
            },
            required: false,
          },
        }),
      zip: ZipParamsSchema,
      sort_by: SortByParamsSchema,
      sort_order: SortOrderParamsSchema,
      rows: RowsParamsSchema,
      start: StartParamsSchema,
      facets: FacetsParamsSchema,
      range_facets: RangeFacetsParamsSchema,
      facet_sort: FacetSortParamsSchema,
      stats: StatsParamsSchema,
      last_seen_range: LastSeenRangeParamsSchema,
      first_seen_range: FirstSeenRangeParamsSchema,
      last_seen_days: LastSeenDaysParamsSchema,
      first_seen_days: FirstSeenDaysParamsSchema,
      base_exterior_color: BaseExteriorColorParamsSchema,
      base_interior_color: BaseInteriorColorParamsSchema,
      seating_capacity: SeatingCapacityParamsSchema,
      cylinders: CylindersParamsSchema,
      doors: DoorsParamsSchema,
      mtplm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter rv on mtplm',
            in: 'query',
            name: 'mtplm',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'mtplm_ss',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      sub_category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter rv on their sub-category',
            in: 'query',
            name: 'sub_category',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'subcategory_ss',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      availability_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter rv on their availability_status',
            in: 'query',
            name: 'availability_status',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'availability_status_ss',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      berths: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter rv on their berths',
            in: 'query',
            name: 'berths',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'berth_is',
              transformConstraints: [{ transformer: 'parseInt', type: 'integer' }],
            },
            required: false,
          },
        }),
      inventory_type: InventoryTypeParamsSchema,
      width_range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'width range to filter listings on width in the range given. Range to be given in the format - min-max e.g. 4-8',
            in: 'query',
            name: 'width_range',
            required: false,
            schema: { format: 'string', type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              operator: 'between',
              separator: '-',
              targetAlias: 'width_fs',
              transformConstraints: [
                { defaultMax: 100, defaultMin: 1, transformer: 'parseFloat', type: 'integer' },
              ],
            },
          },
        }),
      exterior_length_range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'width range to filter listings on exterior_length in the range given. Range to be given in the format - min-max e.g. 4-8',
            in: 'query',
            name: 'exterior_length_range',
            required: false,
            schema: { format: 'string', type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              operator: 'between',
              separator: '-',
              targetAlias: 'exterior_length_fs',
              transformConstraints: [
                { defaultMax: 1000000, defaultMin: 1, transformer: 'parseFloat', type: 'integer' },
              ],
            },
          },
        }),
      interior_length_range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'width range to filter listings on interior_length in the range given. Range to be given in the format - min-max e.g. 4-8',
            in: 'query',
            name: 'interior_length_range',
            required: false,
            schema: { format: 'string', type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: false,
              operator: 'between',
              separator: '-',
              targetAlias: 'interior_length_fs',
              transformConstraints: [
                { defaultMax: 1000000, defaultMin: 1, transformer: 'parseFloat', type: 'integer' },
              ],
            },
          },
        }),
      drive_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter rv on their drive_type',
            in: 'query',
            name: 'drive_type',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'drive_type_ss',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      steering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter rv on their steering',
            in: 'query',
            name: 'steering',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'steering_ss',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      chassis: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To filter rv on their chassis',
            in: 'query',
            name: 'chassis',
            schema: { type: 'string' },
            'x-field-config': {
              isConfigurable: true,
              isMultiValued: true,
              operator: 'in',
              separator: ',',
              targetAlias: 'chassis_ss',
              transformConstraints: [{ transformer: 'caseTransformer', type: 'string' }],
            },
            required: false,
          },
        }),
      transmission: TransmissionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of all RV listings matching the search & filter criteria',
      content: { 'application/json': { schema: UKRVSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSpecsCarAutoCompleteRoute = createRoute({
  method: 'get',
  path: '/specs/car/auto-complete',
  tags: ['VIN Decoder API'],
  summary: 'API for auto-completion of inputs based on taxonomy',
  description:
    'Auto-complete the inputs of your end users, not from active set but from taxonomy (decoder database)',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      field: z
        .enum([
          'make',
          'model',
          'trim',
          'body_type',
          'body_subtype',
          'vehicle_type',
          'transmission',
          'drivetrain',
          'fuel_type',
          'engine',
          'engine_size',
          'engine_block',
        ])
        .openapi({
          param: {
            description: 'Field name for which you want auto-completion',
            in: 'query',
            name: 'field',
            required: true,
            schema: {
              enum: [
                'make',
                'model',
                'trim',
                'body_type',
                'body_subtype',
                'vehicle_type',
                'transmission',
                'drivetrain',
                'fuel_type',
                'engine',
                'engine_size',
                'engine_block',
              ],
              format: 'string',
              type: 'string',
            },
          },
        }),
      input: z
        .string()
        .openapi({
          param: {
            description: 'Input entered so far',
            in: 'query',
            name: 'input',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      transmission: TransmissionParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_block: EngineBlockParamsSchema,
      ignore_case: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean variable to indicate ignore case of current input',
            in: 'query',
            name: 'ignore_case',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      facet_min_count: FacetMinCountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Unique terms available in given field for auto completion',
      content: { 'application/json': { schema: SpecsAutoCompleteResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getSpecsCarTermsRoute = createRoute({
  method: 'get',
  path: '/specs/car/terms',
  tags: ['VIN Decoder API'],
  summary: 'API for getting terms from taxonomy',
  description: 'Facets on taxonomy',
  operationId: 'getTaxonomyTerms',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      field: z
        .string()
        .openapi({
          param: {
            description: 'Comma separated list of fields to get terms for',
            in: 'query',
            name: 'field',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      year: YearParamsSchema,
      make: MakeParamsSchema,
      model: ModelParamsSchema,
      trim: TrimParamsSchema,
      body_type: BodyTypeParamsSchema,
      body_subtype: BodySubtypeParamsSchema,
      vehicle_type: VehicleTypeParamsSchema,
      transmission: TransmissionParamsSchema,
      drivetrain: DrivetrainParamsSchema,
      fuel_type: FuelTypeParamsSchema,
      engine: EngineParamsSchema,
      engine_size: EngineSizeParamsSchema,
      engine_block: EngineBlockParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of unique terms for specified fields',
      content: { 'application/json': { schema: SpecsAutoCompleteResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getStatsCarRoute = createRoute({
  method: 'get',
  path: '/stats/car',
  tags: ['Cars Market API'],
  summary: 'Price, Miles and Days on Market stats',
  description: 'National, state and city level stats for price, miles and dom',
  operationId: 'getDailyStats',
  request: {
    query: z.object({
      api_key: ApiKeyParamsSchema,
      country: z
        .enum(['us', 'ca'])
        .default('us')
        .exactOptional()
        .openapi({
          param: {
            description: 'Country for which the stats are to be searched',
            in: 'query',
            name: 'country',
            required: false,
            schema: { default: 'us', enum: ['us', 'ca'], format: 'string', type: 'string' },
          },
        }),
      car_type: z
        .enum(['new', 'used'])
        .default('used')
        .exactOptional()
        .openapi({
          param: {
            description: 'Inventory type for which stats are to be searched, default is used',
            in: 'query',
            name: 'car_type',
            required: false,
            schema: { default: 'used', enum: ['new', 'used'], format: 'string', type: 'string' },
          },
        }),
      ymm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Year, Make, Model of the car, Separated by pipe e.g. ymm=2015|ford|f-150',
            in: 'query',
            name: 'ymm',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      ymmt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Year, Make, Model, Trim of the car, Separated by pipe e.g. ymmt=2015|ford|f-150|platinum',
            in: 'query',
            name: 'ymmt',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      taxonomy_vin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Taxonomy vin for referance to find stats of similar cars',
            in: 'query',
            name: 'taxonomy_vin',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      vin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'VIN that will be transformed to taxonomy_vin',
            in: 'query',
            name: 'vin',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'State level stats',
            in: 'query',
            name: 'state',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      city_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'City level stats, pipe seperated like city_state=jacksonville|FL',
            in: 'query',
            name: 'city_state',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Data with Market averages and stats',
      content: { 'application/json': { schema: DailyStatsSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})
