type FacetItem = { count?: number | undefined; item?: string | undefined }
type CarSearchFacets = {
  base_exterior_color?: FacetItem[] | undefined
  base_interior_color?: FacetItem[] | undefined
  body_subtype?: FacetItem[] | undefined
  body_type?: FacetItem[] | undefined
  car_type?: FacetItem[] | undefined
  carfax_1_owner?: FacetItem[] | undefined
  carfax_clean_title?: FacetItem[] | undefined
  city?: FacetItem[] | undefined
  cylinders?: FacetItem[] | undefined
  data_source?: FacetItem[] | undefined
  dealer_id?: FacetItem[] | undefined
  dealer_type?: FacetItem[] | undefined
  doors?: FacetItem[] | undefined
  drivetrain?: FacetItem[] | undefined
  engine?: FacetItem[] | undefined
  engine_aspiration?: FacetItem[] | undefined
  engine_block?: FacetItem[] | undefined
  engine_size?: FacetItem[] | undefined
  exterior_color?: FacetItem[] | undefined
  fuel_type?: FacetItem[] | undefined
  interior_color?: FacetItem[] | undefined
  make?: FacetItem[] | undefined
  model?: FacetItem[] | undefined
  seller_name?: FacetItem[] | undefined
  seller_name_o?: FacetItem[] | undefined
  seller_type?: FacetItem[] | undefined
  source?: FacetItem[] | undefined
  state?: FacetItem[] | undefined
  transmission?: FacetItem[] | undefined
  trim?: FacetItem[] | undefined
  trim_o?: FacetItem[] | undefined
  trim_r?: FacetItem[] | undefined
  vehicle_type?: FacetItem[] | undefined
  year?: FacetItem[] | undefined
}
type Build = {
  antibrake_sys?: string | undefined
  body_subtype?: string | undefined
  body_type?: string | undefined
  city_miles?: string | undefined
  city_mpg?: number | undefined
  cylinders?: number | undefined
  doors?: number | undefined
  drivetrain?: string | undefined
  engine?: string | undefined
  engine_aspiration?: string | undefined
  engine_block?: string | undefined
  engine_measure?: string | undefined
  engine_size?: number | undefined
  fuel_type?: string | undefined
  highway_miles?: string | undefined
  highway_mpg?: number | undefined
  made_in?: string | undefined
  make?: string | undefined
  model?: string | undefined
  opt_seating?: string | undefined
  overall_height?: string | undefined
  overall_length?: string | undefined
  overall_width?: string | undefined
  powertrain_type?: string | undefined
  short_trim?: string | undefined
  std_seating?: string | undefined
  steering_type?: string | undefined
  tank_size?: string | undefined
  transmission?: string | undefined
  trim?: string | undefined
  trim_r?: string | undefined
  vehicle_type?: string | undefined
  year?: number | undefined
}
type NestDealer = {
  city?: string | undefined
  country?: string | undefined
  county?: string | undefined
  dealer_type?: string | undefined
  dealership_group_name?: string | undefined
  id?: number | undefined
  latitude?: string | undefined
  longitude?: string | undefined
  msa_code?: string | undefined
  name?: string | undefined
  phone?: string | undefined
  seller_email?: string | undefined
  state?: string | undefined
  street?: string | undefined
  website?: string | undefined
  zip?: string | undefined
}
type ListingFinance = {
  down_payment?: number | undefined
  down_payment_percentage?: number | undefined
  estimated_monthly_payment?: number | undefined
  loan_apr?: number | undefined
  loan_term?: number | undefined
}
type ListingLease = {
  down_payment?: number | undefined
  estimated_monthly_payment?: number | undefined
  lease_term?: number | undefined
}
type ListingNestMedia = {
  photo_links?: string[] | undefined
  photo_links_cached?: string[] | undefined
}
type BaseListing = {
  base_ext_color?: string | undefined
  base_int_color?: string | undefined
  build?: Build | undefined
  carfax_1_owner?: boolean | undefined
  carfax_clean_title?: boolean | undefined
  data_source?: string | undefined
  dealer?: NestDealer | undefined
  dist?: number | undefined
  dom?: number | undefined
  dom_180?: number | undefined
  dom_active?: number | undefined
  exterior_color?: string | undefined
  financing_options?: ListingFinance[] | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  in_transit?: boolean | undefined
  interior_color?: string | undefined
  inventory_type?: string | undefined
  is_certified?: number | undefined
  is_translated?: boolean | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  leasing_options?: ListingLease[] | undefined
  media?: ListingNestMedia | undefined
  miles?: number | undefined
  model_code?: string | undefined
  msrp?: number | undefined
  price?: number | undefined
  price_change_percent?: number | undefined
  ref_miles?: string | undefined
  ref_miles_dt?: number | undefined
  ref_price?: string | undefined
  ref_price_dt?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  stock_no?: string | undefined
  title_type?: string | undefined
  vdp_url?: string | undefined
  vin?: string | undefined
}
type CarSearchRangeFacets = {
  dom?: { [x: string]: unknown } | undefined
  dom_180?: { [x: string]: unknown } | undefined
  dom_active?: { [x: string]: unknown } | undefined
  finance_down_payment?: { [x: string]: unknown } | undefined
  finance_emp?: { [x: string]: unknown } | undefined
  finance_loan_apr?: { [x: string]: unknown } | undefined
  finance_loan_term?: { [x: string]: unknown } | undefined
  lease_down_payment?: { [x: string]: unknown } | undefined
  lease_emp?: { [x: string]: unknown } | undefined
  lease_term?: { [x: string]: unknown } | undefined
  miles?: { [x: string]: unknown } | undefined
  msrp?: { [x: string]: unknown } | undefined
  price?: { [x: string]: unknown } | undefined
}
type StatsItem = {
  count?: number | undefined
  max?: number | undefined
  mean?: number | undefined
  median?: number | undefined
  min?: number | undefined
  missing?: number | undefined
  stddev?: number | undefined
  sum?: number | undefined
  sum_of_squares?: number | undefined
}
type CarSearchStats = {
  dom?: StatsItem | undefined
  dom_180?: StatsItem | undefined
  dom_active?: StatsItem | undefined
  finance_down_payment?: StatsItem | undefined
  finance_down_payment_per?: StatsItem | undefined
  finance_emp?: StatsItem | undefined
  finance_loan_apr?: StatsItem | undefined
  finance_loan_term?: StatsItem | undefined
  lease_down_payment?: StatsItem | undefined
  lease_emp?: StatsItem | undefined
  lease_term?: StatsItem | undefined
  miles?: StatsItem | undefined
  msrp?: StatsItem | undefined
  price?: StatsItem | undefined
}
type SearchResponse = {
  facets?: CarSearchFacets | undefined
  listings?: BaseListing[] | undefined
  num_found?: number | undefined
  range_facets?: CarSearchRangeFacets | undefined
  stats?: CarSearchStats | undefined
}
type Error = { code?: number | undefined; message?: string | undefined }
type CRMResponse = { for_sale?: string | undefined }
type Dealer = {
  city?: string | undefined
  country?: string | undefined
  data_source?: string | undefined
  dealer_type?: string | undefined
  dealership_group_name?: string | undefined
  distance?: number | undefined
  id?: string | undefined
  inventory_url?: string | undefined
  latitude?: string | undefined
  listing_count?: number | undefined
  location_ll?: string | undefined
  longitude?: string | undefined
  seller_email?: string | undefined
  seller_name?: string | undefined
  seller_phone?: string | undefined
  state?: string | undefined
  status?: string | undefined
  street?: string | undefined
  zip?: string | undefined
}
type DealersResponse = { dealers?: Dealer[] | undefined; num_found?: number | undefined }
type NeoVIN = {
  available_options_details?: { [x: string]: unknown } | undefined
  body_subtype?: string | undefined
  body_type?: string | undefined
  city_mpg?: number | undefined
  combined_msrp?: number | undefined
  created_at?: number | undefined
  created_at_date?: string | undefined
  decode_version?: number | undefined
  delivery_charges?: number | undefined
  doors?: number | undefined
  drivetrain?: string | undefined
  engine?: string | undefined
  exterior_color?: { [x: string]: unknown } | undefined
  features?: { [x: string]: unknown } | undefined
  fuel_type?: string | undefined
  height?: number | undefined
  highway_mpg?: number | undefined
  installed_equipment?: { [x: string]: unknown } | undefined
  installed_options_details?: { [x: string]: unknown } | undefined
  installed_options_msrp?: number | undefined
  interior_color?: { [x: string]: unknown } | undefined
  length?: number | undefined
  listing_confidence?: string | undefined
  make?: string | undefined
  manufacturer_code?: string | undefined
  model?: string | undefined
  msrp?: number | undefined
  options_packages?: string | undefined
  package_code?: string | undefined
  package_description?: string | undefined
  seating_capacity?: number | undefined
  squish_vin?: string | undefined
  transmission?: string | undefined
  transmission_confidence?: string | undefined
  transmission_description?: string | undefined
  trim?: string | undefined
  trim_confidence?: string | undefined
  updated_at?: number | undefined
  updated_at_date?: string | undefined
  version?: string | undefined
  version_confidence?: string | undefined
  vin?: string | undefined
  weight?: number | undefined
  width?: number | undefined
  year?: number | undefined
}
type HistoricalListing = {
  carfax_1_owner?: boolean | undefined
  carfax_clean_title?: boolean | undefined
  city?: string | undefined
  data_source?: string | undefined
  dealer_id?: number | undefined
  dom?: number | undefined
  dom_180?: number | undefined
  dom_active?: number | undefined
  exterior_color?: string | undefined
  financing_options?: ListingFinance[] | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  interior_color?: string | undefined
  inventory_type?: string | undefined
  is_certified?: number | undefined
  is_searchable?: string | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  latitude?: string | undefined
  leasing_options?: ListingLease[] | undefined
  longitude?: string | undefined
  miles?: number | undefined
  msrp?: number | undefined
  price?: number | undefined
  ref_miles?: string | undefined
  ref_miles_dt?: number | undefined
  ref_price?: string | undefined
  ref_price_dt?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_name?: string | undefined
  seller_name_o?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  state?: string | undefined
  status_date?: number | undefined
  stock_no?: string | undefined
  street?: string | undefined
  trim_r?: string | undefined
  vdp_url?: string | undefined
  vin?: string | undefined
  zip?: string | undefined
}
type CacheImageResponse = File
type ListingNestExtraAttributes = {
  dealer_added_f?: string[] | undefined
  electronics_f?: string[] | undefined
  exterior_f?: string[] | undefined
  features?: string[] | undefined
  interior_f?: string[] | undefined
  options?: string[] | undefined
  safety_f?: string[] | undefined
  seller_comments?: string | undefined
  standard_f?: string[] | undefined
  technical_f?: string[] | undefined
}
type Listing = {
  base_ext_color?: string | undefined
  base_int_color?: string | undefined
  build?: Build | undefined
  carfax_1_owner?: boolean | undefined
  carfax_clean_title?: boolean | undefined
  data_source?: string | undefined
  dealer?: NestDealer | undefined
  dom?: number | undefined
  dom_180?: number | undefined
  dom_active?: number | undefined
  exterior_color?: string | undefined
  extra?: ListingNestExtraAttributes | undefined
  financing_options?: ListingFinance[] | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  first_seen_at_mc?: number | undefined
  first_seen_at_mc_date?: string | undefined
  first_seen_at_source?: number | undefined
  first_seen_at_source_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  interior_color?: string | undefined
  inventory_type?: string | undefined
  is_certified?: number | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  leasing_options?: ListingLease[] | undefined
  media?: ListingNestMedia | undefined
  miles?: number | undefined
  msrp?: number | undefined
  price?: number | undefined
  price_change_percent?: number | undefined
  rank?: number | undefined
  ref_miles?: string | undefined
  ref_miles_dt?: number | undefined
  ref_price?: string | undefined
  ref_price_dt?: number | undefined
  score?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  stock_no?: string | undefined
  vdp_url?: string | undefined
  vehicle_registration_mark?: string | undefined
  vin?: string | undefined
}
type ListingExtraAttributes = {
  dealer_added_f?: string[] | undefined
  electronics_f?: string[] | undefined
  exterior_f?: string[] | undefined
  features?: string[] | undefined
  id?: string | undefined
  interior_f?: string[] | undefined
  options?: string[] | undefined
  safety_f?: string[] | undefined
  seller_cmts?: string | undefined
  standard_f?: string[] | undefined
  technical_f?: string[] | undefined
}
type ListingMedia = {
  id?: string | undefined
  photo_links?: string[] | undefined
  photo_url?: string | undefined
}
type RVBuild = {
  area?: string | undefined
  class?: string | undefined
  engine?: string | undefined
  fuel_type?: string | undefined
  gvwr?: string | undefined
  length?: string | undefined
  made_in?: string | undefined
  make?: string | undefined
  model?: string | undefined
  sleeps?: string | undefined
  slideouts?: string | undefined
  transmission?: string | undefined
  year?: number | undefined
}
type HeavyEquipmentsListing = {
  build?: RVBuild | undefined
  dealer?: NestDealer | undefined
  dp_url?: string | undefined
  exterior_color?: string | undefined
  extra?: ListingNestExtraAttributes | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  interior_color?: string | undefined
  inventory_type?: string | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  media?: ListingNestMedia | undefined
  miles?: number | undefined
  msrp?: number | undefined
  price?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  stock_no?: string | undefined
  vin?: string | undefined
}
type MotorcycleBuild = {
  body_type?: string | undefined
  cylinders?: number | undefined
  drivetrain?: string | undefined
  dry_weight?: string | undefined
  engine?: string | undefined
  fuel_type?: string | undefined
  made_in?: string | undefined
  make?: string | undefined
  model?: string | undefined
  transmission?: string | undefined
  trim?: string | undefined
  vehicle_type?: string | undefined
  year?: number | undefined
}
type MotorcycleListing = {
  build?: MotorcycleBuild | undefined
  color?: string | undefined
  dealer?: NestDealer | undefined
  dp_url?: string | undefined
  extra?: ListingNestExtraAttributes | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  inventory_type?: string | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  media?: ListingNestMedia | undefined
  miles?: number | undefined
  msrp?: number | undefined
  price?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  stock_no?: string | undefined
  vin?: string | undefined
}
type RVListing = {
  build?: RVBuild | undefined
  dealer?: NestDealer | undefined
  dp_url?: string | undefined
  exterior_color?: string | undefined
  extra?: ListingNestExtraAttributes | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  interior_color?: string | undefined
  inventory_type?: string | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  media?: ListingNestMedia | undefined
  miles?: number | undefined
  msrp?: number | undefined
  price?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  stock_no?: string | undefined
  vin?: string | undefined
}
type Mds = {
  make?: string | undefined
  mds?: number | undefined
  model?: string | undefined
  sold_vins?: string[] | undefined
  total_active_cars_for_ymmt?: number | undefined
  total_cars_sold_in_last_45_days?: number | undefined
  trim?: string | undefined
  year?: number | undefined
}
type SalesStats = {
  absolute_mean_deviation?: number | undefined
  iqr?: number | undefined
  mean?: number | undefined
  median?: number | undefined
  population_standard_deviation?: number | undefined
  standard_deviation?: number | undefined
  trimmed_mean?: number | undefined
  variance?: number | undefined
  weighted_mean?: number | undefined
}
type BasePopular = {
  city?: string | undefined
  counts?: string | undefined
  dom_stats?: SalesStats | undefined
  inventoryType?: string | undefined
  make?: string | undefined
  miles_stats?: SalesStats | undefined
  model?: string | undefined
  price_stats?: SalesStats | undefined
  state?: string | undefined
}
type PopularCars = { new_top50?: BasePopular[] | undefined; used_top50?: BasePopular[] | undefined }
type PredictedSpecs = {
  base_exterior_color?: string | undefined
  base_interior_color?: string | undefined
  carfax_1_owner?: boolean | undefined
  carfax_clean_title?: boolean | undefined
  city_mpg?: number | undefined
  cylinders?: number | undefined
  doors?: number | undefined
  drivetrain?: string | undefined
  engine_block?: string | undefined
  engine_size?: number | undefined
  highway_mpg?: number | undefined
  is_certified?: boolean | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  make?: string | undefined
  miles?: number | undefined
  model?: string | undefined
  transmission?: string | undefined
  trim?: string | undefined
  year?: number | undefined
}
type PricePrediction = {
  predicted_price?: number | undefined
  price_range?: { lower_bound?: number | undefined; upper_bound?: number | undefined } | undefined
  specs?: PredictedSpecs | undefined
}
type FareValue = {
  avg_days_to_sold_local?: number | undefined
  avg_days_to_sold_national?: number | undefined
  fmv_local?: number | undefined
  fmv_national?: number | undefined
}
type Sales = {
  city?: string | undefined
  counts?: number | undefined
  cpo?: number | undefined
  dom_stats?: SalesStats | undefined
  inventory_type?: string | undefined
  make?: string | undefined
  miles_stats?: SalesStats | undefined
  model?: string | undefined
  'non-cpo'?: number | undefined
  price_stats?: SalesStats | undefined
  state?: string | undefined
  taxonomy_vin?: string | undefined
  trim?: string | undefined
  year?: string | undefined
}
type CarRankRequest = {
  listing_ids?: string[] | undefined
  ranking_criteria?: { [x: string]: unknown } | undefined
}
type CarListingRank = { ranked_listing?: { [x: string]: unknown } | undefined }
type CarRankResponse = {
  num_ranked?: number | undefined
  ranked_listings?: CarListingRank[] | undefined
}
type SearchAutoCompleteResponse = {
  terms?: { count?: number | undefined; item?: string | undefined }[] | undefined
}
type UKCarSearchFacets = {
  base_exterior_color?: FacetItem[] | undefined
  base_interior_color?: FacetItem[] | undefined
  body_subtype?: FacetItem[] | undefined
  body_type?: FacetItem[] | undefined
  car_location_city?: FacetItem[] | undefined
  car_location_county?: FacetItem[] | undefined
  car_location_seller_name?: FacetItem[] | undefined
  car_location_street?: FacetItem[] | undefined
  car_location_zip?: FacetItem[] | undefined
  car_type?: FacetItem[] | undefined
  carfax_1_owner?: FacetItem[] | undefined
  carfax_clean_title?: FacetItem[] | undefined
  city?: FacetItem[] | undefined
  co2_emissions?: FacetItem[] | undefined
  cylinders?: FacetItem[] | undefined
  data_source?: FacetItem[] | undefined
  dealer_id?: FacetItem[] | undefined
  dealer_type?: FacetItem[] | undefined
  dealership_group_name?: FacetItem[] | undefined
  doors?: FacetItem[] | undefined
  drivetrain?: FacetItem[] | undefined
  engine?: FacetItem[] | undefined
  engine_aspiration?: FacetItem[] | undefined
  engine_block?: FacetItem[] | undefined
  engine_size?: FacetItem[] | undefined
  exterior_color?: FacetItem[] | undefined
  fca_status?: FacetItem[] | undefined
  fuel_type?: FacetItem[] | undefined
  in_transit?: FacetItem[] | undefined
  insurance_group?: FacetItem[] | undefined
  interior_color?: FacetItem[] | undefined
  make?: FacetItem[] | undefined
  mas_code?: FacetItem[] | undefined
  model?: FacetItem[] | undefined
  num_owners?: FacetItem[] | undefined
  powertrain_type?: FacetItem[] | undefined
  seating_capacity?: FacetItem[] | undefined
  seller_name?: FacetItem[] | undefined
  seller_type?: FacetItem[] | undefined
  source?: FacetItem[] | undefined
  state?: FacetItem[] | undefined
  transmission?: FacetItem[] | undefined
  trim?: FacetItem[] | undefined
  vehicle_registration_mark?: FacetItem[] | undefined
  vehicle_type?: FacetItem[] | undefined
  vrm?: FacetItem[] | undefined
  year?: FacetItem[] | undefined
}
type CarLocation = {
  city?: string | undefined
  county?: string | undefined
  latitude?: string | undefined
  longitude?: string | undefined
  seller_name?: string | undefined
  street?: string | undefined
  zip?: string | undefined
}
type UKBaseListing = {
  base_ext_color?: string | undefined
  base_int_color?: string | undefined
  build?: Build | undefined
  car_location?: CarLocation | undefined
  carfax_1_owner?: boolean | undefined
  carfax_clean_title?: boolean | undefined
  co2_emissions?: string | undefined
  data_source?: string | undefined
  dealer?: NestDealer | undefined
  dist?: number | undefined
  dom?: number | undefined
  dom_180?: number | undefined
  dom_active?: number | undefined
  exterior_color?: string | undefined
  financing_options?: ListingFinance[] | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  in_transit?: boolean | undefined
  insurance_group?: string | undefined
  interior_color?: string | undefined
  inventory_type?: string | undefined
  is_certified?: number | undefined
  is_translated?: boolean | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  leasing_options?: ListingLease[] | undefined
  media?: ListingNestMedia | undefined
  miles?: number | undefined
  model_code?: string | undefined
  msrp?: number | undefined
  num_owners?: string | undefined
  price?: number | undefined
  price_change_percent?: number | undefined
  ref_miles?: string | undefined
  ref_miles_dt?: number | undefined
  ref_price?: string | undefined
  ref_price_dt?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  stock_no?: string | undefined
  title_type?: string | undefined
  uvc_id?: string | undefined
  vdp_url?: string | undefined
  vehicle_registration_mark?: string | undefined
}
type UKSearchResponse = {
  facets?: UKCarSearchFacets | undefined
  listings?: UKBaseListing[] | undefined
  num_found?: number | undefined
  range_facets?: CarSearchRangeFacets | undefined
  stats?: CarSearchStats | undefined
}
type HeavyEquipmentsBuild = {
  body_type?: string | undefined
  category?: string | undefined
  condition?: string | undefined
  drivetrain?: string | undefined
  engine?: string | undefined
  fuel_type?: string | undefined
  make?: string | undefined
  model?: string | undefined
  sub_category?: string | undefined
  transmission?: string | undefined
  trim?: string | undefined
  year?: number | undefined
}
type HeavyEquipmentsBaseListing = {
  build?: HeavyEquipmentsBuild | undefined
  dealer?: NestDealer | undefined
  dist?: number | undefined
  dp_url?: string | undefined
  exterior_color?: string | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  interior_color?: string | undefined
  inventory_type?: string | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  media?: ListingNestMedia | undefined
  miles?: number | undefined
  msrp?: number | undefined
  price?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  stock_no?: string | undefined
  vin?: string | undefined
}
type HeavyEquipmentsSearchResponse = {
  facets?: { [x: string]: unknown } | undefined
  listings?: HeavyEquipmentsBaseListing[] | undefined
  num_found?: number | undefined
  range_facets?: { [x: string]: unknown } | undefined
  stats?: { [x: string]: unknown } | undefined
}
type MotorcycleBaseListing = {
  build?: MotorcycleBuild | undefined
  color?: string | undefined
  dealer?: NestDealer | undefined
  dist?: number | undefined
  dp_url?: string | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  inventory_type?: string | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  media?: ListingNestMedia | undefined
  miles?: number | undefined
  msrp?: number | undefined
  price?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  stock_no?: string | undefined
  vin?: string | undefined
}
type MotorcycleSearchResponse = {
  facets?: { [x: string]: unknown } | undefined
  listings?: MotorcycleBaseListing[] | undefined
  num_found?: number | undefined
  range_facets?: { [x: string]: unknown } | undefined
  stats?: { [x: string]: unknown } | undefined
}
type RVBaseListing = {
  build?: RVBuild | undefined
  dealer?: NestDealer | undefined
  dist?: number | undefined
  dp_url?: string | undefined
  exterior_color?: string | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  interior_color?: string | undefined
  inventory_type?: string | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  media?: ListingNestMedia | undefined
  miles?: number | undefined
  msrp?: number | undefined
  price?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  stock_no?: string | undefined
  vin?: string | undefined
}
type RVSearchResponse = {
  facets?: { [x: string]: unknown } | undefined
  listings?: RVBaseListing[] | undefined
  num_found?: number | undefined
  range_facets?: { [x: string]: unknown } | undefined
  stats?: { [x: string]: unknown } | undefined
}
type UKRVBuild = {
  area?: string | undefined
  berths?: string | undefined
  category?: string | undefined
  chassis?: string | undefined
  drive_type?: string | undefined
  drivetrain?: string | undefined
  engine?: string | undefined
  engine_size?: string | undefined
  exterior_length?: string | undefined
  floorplan?: string | undefined
  floorplan_layout?: string | undefined
  fuel_type?: string | undefined
  gvwr?: string | undefined
  interior_length?: string | undefined
  inventory_type?: string | undefined
  make?: string | undefined
  model?: string | undefined
  mtplm?: string | undefined
  slideouts?: string | undefined
  steering?: string | undefined
  sub_category?: string | undefined
  transmission?: string | undefined
  width?: string | undefined
  year?: number | undefined
}
type UKRVBaseListing = {
  availability_status?: string | undefined
  build?: UKRVBuild | undefined
  currency_indicator?: string | undefined
  dealer?: NestDealer | undefined
  dist?: number | undefined
  exterior_color?: string | undefined
  first_seen_at?: number | undefined
  first_seen_at_date?: string | undefined
  heading?: string | undefined
  id?: string | undefined
  interior_color?: string | undefined
  inventory_type?: string | undefined
  last_seen_at?: number | undefined
  last_seen_at_date?: string | undefined
  media?: ListingNestMedia | undefined
  miles?: number | undefined
  miles_indicator?: string | undefined
  mot_expires?: string | undefined
  motorhome_build?: string | undefined
  msrp?: number | undefined
  origin?: string | undefined
  price?: number | undefined
  scraped_at?: number | undefined
  scraped_at_date?: string | undefined
  seller_type?: string | undefined
  source?: string | undefined
  stock_no?: string | undefined
  vdp_url?: string | undefined
  vin?: string | undefined
}
type UKRVSearchResponse = {
  facets?: { [x: string]: unknown } | undefined
  listings?: UKRVBaseListing[] | undefined
  num_found?: number | undefined
  range_facets?: { [x: string]: unknown } | undefined
  stats?: { [x: string]: unknown } | undefined
}
type SpecsAutoCompleteResponse = { terms?: string[] | undefined }
type DailyStatsNestedJson = {
  interquartile_range?: number | undefined
  mean?: number | undefined
  median?: number | undefined
  population_standard_deviation?: number | undefined
  standard_deviation?: number | undefined
  trimmed_mean?: number | undefined
  variance?: number | undefined
}
type DailyStats = {
  dom?: DailyStatsNestedJson | undefined
  miles_stats?: DailyStatsNestedJson | undefined
  price_stats?: DailyStatsNestedJson | undefined
  units_for_sale?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/car/dealer/inventory/active': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                dealer_id?: string | undefined
                vin?: string | undefined
                source?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                mm?: string | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                dealer_name?: string | undefined
                dealership_group_name?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                include_relevant_links?: boolean | undefined
                inventory_count_range?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                seating_capacity?: string | undefined
                engine_size_range?: string | undefined
                powertrain_type?: string | undefined
                min_photo_links?: string | undefined
                min_photo_links_cached?: string | undefined
              }
            }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                dealer_id?: string | undefined
                vin?: string | undefined
                source?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                mm?: string | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                dealer_name?: string | undefined
                dealership_group_name?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                include_relevant_links?: boolean | undefined
                inventory_count_range?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                seating_capacity?: string | undefined
                engine_size_range?: string | undefined
                powertrain_type?: string | undefined
                min_photo_links?: string | undefined
                min_photo_links_cached?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/car/recall/:vin': {
      $get:
        | {
            input: { param: { vin: string } } & {
              query: { api_key?: string | undefined; page?: number | undefined }
            }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vin: string } } & {
              query: { api_key?: string | undefined; page?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/client/configure/get': {
      $get: {
        input: { query: { api_key?: string | undefined; country: 'US' | 'CA' | 'UK' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/client/configure/set': {
      $post: {
        input: { query: { api_key?: string | undefined; country: 'US' | 'CA' | 'UK' } } & {
          form: { csvfile: File }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/crm_check/car/:vin': {
      $get:
        | {
            input: { param: { vin: string } } & {
              query: { api_key?: string | undefined; sale_date: string }
            }
            output: CRMResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vin: string } } & {
              query: { api_key?: string | undefined; sale_date: string }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dealer/car/uk/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; provider?: boolean | undefined }
            }
            output: Dealer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; provider?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dealer/car/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; provider?: boolean | undefined }
            }
            output: Dealer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; provider?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dealer/heavy-equipment/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; provider?: boolean | undefined }
            }
            output: Dealer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; provider?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dealer/motorcycle/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; provider?: boolean | undefined }
            }
            output: Dealer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; provider?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dealer/rv/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; provider?: boolean | undefined }
            }
            output: Dealer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; provider?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dealers/car': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                rows?: number | undefined
                start?: number | undefined
                country?:
                  | 'US'
                  | 'CA'
                  | 'us'
                  | 'ca'
                  | 'uk'
                  | 'england'
                  | 'scotland'
                  | 'northan ireland'
                  | 'wales'
                  | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                city?: string | undefined
                state?: string | undefined
                listing_count_range?: string | undefined
                inventory_url?: string | undefined
                zip?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                provider?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
              }
            }
            output: DealersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                rows?: number | undefined
                start?: number | undefined
                country?:
                  | 'US'
                  | 'CA'
                  | 'us'
                  | 'ca'
                  | 'uk'
                  | 'england'
                  | 'scotland'
                  | 'northan ireland'
                  | 'wales'
                  | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                city?: string | undefined
                state?: string | undefined
                listing_count_range?: string | undefined
                inventory_url?: string | undefined
                zip?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                provider?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dealers/car/uk': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                rows?: number | undefined
                start?: number | undefined
                country?:
                  | 'US'
                  | 'CA'
                  | 'us'
                  | 'ca'
                  | 'uk'
                  | 'england'
                  | 'scotland'
                  | 'northan ireland'
                  | 'wales'
                  | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                city?: string | undefined
                county?: string | undefined
                listing_count_range?: string | undefined
                inventory_url?: string | undefined
                postal_code?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                provider?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
              }
            }
            output: DealersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                rows?: number | undefined
                start?: number | undefined
                country?:
                  | 'US'
                  | 'CA'
                  | 'us'
                  | 'ca'
                  | 'uk'
                  | 'england'
                  | 'scotland'
                  | 'northan ireland'
                  | 'wales'
                  | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                city?: string | undefined
                county?: string | undefined
                listing_count_range?: string | undefined
                inventory_url?: string | undefined
                postal_code?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                provider?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dealers/heavy-equipment': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                rows?: number | undefined
                start?: number | undefined
                country?:
                  | 'US'
                  | 'CA'
                  | 'us'
                  | 'ca'
                  | 'uk'
                  | 'england'
                  | 'scotland'
                  | 'northan ireland'
                  | 'wales'
                  | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                city?: string | undefined
                state?: string | undefined
                listing_count_range?: string | undefined
                inventory_url?: string | undefined
                zip?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                provider?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
              }
            }
            output: DealersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                rows?: number | undefined
                start?: number | undefined
                country?:
                  | 'US'
                  | 'CA'
                  | 'us'
                  | 'ca'
                  | 'uk'
                  | 'england'
                  | 'scotland'
                  | 'northan ireland'
                  | 'wales'
                  | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                city?: string | undefined
                state?: string | undefined
                listing_count_range?: string | undefined
                inventory_url?: string | undefined
                zip?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                provider?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dealers/motorcycle': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                rows?: number | undefined
                start?: number | undefined
                country?:
                  | 'US'
                  | 'CA'
                  | 'us'
                  | 'ca'
                  | 'uk'
                  | 'england'
                  | 'scotland'
                  | 'northan ireland'
                  | 'wales'
                  | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                city?: string | undefined
                state?: string | undefined
                listing_count_range?: string | undefined
                inventory_url?: string | undefined
                zip?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                provider?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
              }
            }
            output: DealersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                rows?: number | undefined
                start?: number | undefined
                country?:
                  | 'US'
                  | 'CA'
                  | 'us'
                  | 'ca'
                  | 'uk'
                  | 'england'
                  | 'scotland'
                  | 'northan ireland'
                  | 'wales'
                  | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                city?: string | undefined
                state?: string | undefined
                listing_count_range?: string | undefined
                inventory_url?: string | undefined
                zip?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                provider?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/dealers/rv': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                rows?: number | undefined
                start?: number | undefined
                country?:
                  | 'US'
                  | 'CA'
                  | 'us'
                  | 'ca'
                  | 'uk'
                  | 'england'
                  | 'scotland'
                  | 'northan ireland'
                  | 'wales'
                  | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                city?: string | undefined
                state?: string | undefined
                listing_count_range?: string | undefined
                inventory_url?: string | undefined
                zip?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                provider?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
              }
            }
            output: DealersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                rows?: number | undefined
                start?: number | undefined
                country?:
                  | 'US'
                  | 'CA'
                  | 'us'
                  | 'ca'
                  | 'uk'
                  | 'england'
                  | 'scotland'
                  | 'northan ireland'
                  | 'wales'
                  | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                city?: string | undefined
                state?: string | undefined
                listing_count_range?: string | undefined
                inventory_url?: string | undefined
                zip?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                provider?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/decode/car/epi/:vin/specs': {
      $get:
        | {
            input: { param: { vin: string } } & { query: { api_key?: string | undefined } }
            output: Build
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vin: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/decode/car/neovin/:vin/specs': {
      $get:
        | {
            input: { param: { vin: string } } & {
              query: {
                api_key?: string | undefined
                include_generic?: boolean | undefined
                force_decode?: boolean | undefined
              }
            }
            output: NeoVIN
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vin: string } } & {
              query: {
                api_key?: string | undefined
                include_generic?: boolean | undefined
                force_decode?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/decode/car/:vin/specs': {
      $get:
        | {
            input: { param: { vin: string } } & { query: { api_key?: string | undefined } }
            output: Build
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vin: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/history/car/uk/:vrm': {
      $get:
        | {
            input: { param: { vrm: string } } & {
              query: {
                api_key?: string | undefined
                page?: number | undefined
                include_duplicates?: boolean | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
              }
            }
            output: HistoricalListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vrm: string } } & {
              query: {
                api_key?: string | undefined
                page?: number | undefined
                include_duplicates?: boolean | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/history/car/:vin': {
      $get:
        | {
            input: { param: { vin: string } } & {
              query: {
                api_key?: string | undefined
                fields?: string | undefined
                page?: number | undefined
                include_duplicates?: boolean | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
              }
            }
            output: HistoricalListing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vin: string } } & {
              query: {
                api_key?: string | undefined
                fields?: string | undefined
                page?: number | undefined
                include_duplicates?: boolean | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/image/cache/car/:listingID/:imageID': {
      $get:
        | {
            input: { param: { listingID: string; imageID: string } } & {
              query: { api_key?: string | undefined }
            }
            output: CacheImageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listingID: string; imageID: string } } & {
              query: { api_key?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/auction/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                include_relevant_links?: boolean | undefined
              }
            }
            output: Listing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                include_relevant_links?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/auction/:id/extra': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingExtraAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/auction/:id/media': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            }
            output: ListingMedia
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/fsbo/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                include_relevant_links?: boolean | undefined
              }
            }
            output: Listing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                include_relevant_links?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/fsbo/:id/extra': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingExtraAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/fsbo/:id/media': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            }
            output: ListingMedia
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/uk/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            }
            output: Listing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/uk/:id/extra': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingExtraAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/uk/:id/media': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            }
            output: ListingMedia
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                include_relevant_links?: boolean | undefined
              }
            }
            output: Listing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                include_relevant_links?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/:id/extra': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingExtraAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/car/:id/media': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            }
            output: ListingMedia
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/heavy-equipment/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: HeavyEquipmentsListing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/heavy-equipment/:id/extra': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingExtraAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/heavy-equipment/:id/media': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingMedia
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/motorcycle/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: MotorcycleListing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/motorcycle/:id/extra': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingExtraAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/motorcycle/:id/media': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingMedia
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/rv/uk/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: RVListing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/rv/uk/:id/extra': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingExtraAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/rv/uk/:id/media': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingMedia
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/rv/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: RVListing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/rv/:id/extra': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingExtraAttributes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/listing/rv/:id/media': {
      $get:
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: ListingMedia
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { api_key?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/mds/car': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                vin?: string | undefined
                exact?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                msa_code?: string | undefined
                debug?: boolean | undefined
                include_sold?: boolean | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | undefined
                state?: string | undefined
                city?: string | undefined
                ymmt?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                dealer_id?: string | undefined
                source?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                dealership_group_name?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                engine_size_range?: string | undefined
              }
            }
            output: Mds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                vin?: string | undefined
                exact?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                msa_code?: string | undefined
                debug?: boolean | undefined
                include_sold?: boolean | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | undefined
                state?: string | undefined
                city?: string | undefined
                ymmt?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                dealer_id?: string | undefined
                source?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                dealership_group_name?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                engine_size_range?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/popular/cars': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                state?: string | undefined
                city_state?: string | undefined
                car_type: 'new' | 'used'
                country?: 'us' | 'ca' | 'US' | 'CA' | undefined
              }
            }
            output: PopularCars
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                state?: string | undefined
                city_state?: string | undefined
                car_type: 'new' | 'used'
                country?: 'us' | 'ca' | 'US' | 'CA' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/predict/car/price': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                vin?: string | undefined
                car_type: 'used' | 'new'
                year?: number | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                is_certified?: boolean | undefined
                carfax_1_owner?: boolean | undefined
                carfax_clean_title?: boolean | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                transmission?: 'Manual' | 'Automatic' | undefined
                drivetrain?: '4WD' | 'AWD' | 'FWD' | 'RWD' | undefined
                engine_size?: number | undefined
                engine_block?: 'I' | 'V' | 'H' | undefined
                cylinders?: number | undefined
                doors?: number | undefined
                highway_mpg?: number | undefined
                city_mpg?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                miles?: number | undefined
                zip?: string | undefined
                country?: 'us' | 'ca' | undefined
              }
            }
            output: PricePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                vin?: string | undefined
                car_type: 'used' | 'new'
                year?: number | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                is_certified?: boolean | undefined
                carfax_1_owner?: boolean | undefined
                carfax_clean_title?: boolean | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                transmission?: 'Manual' | 'Automatic' | undefined
                drivetrain?: '4WD' | 'AWD' | 'FWD' | 'RWD' | undefined
                engine_size?: number | undefined
                engine_block?: 'I' | 'V' | 'H' | undefined
                cylinders?: number | undefined
                doors?: number | undefined
                highway_mpg?: number | undefined
                city_mpg?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                miles?: number | undefined
                zip?: string | undefined
                country?: 'us' | 'ca' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/predict/car/uk/fmv': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                vrm?: string | undefined
                year?: number | undefined
                make?: string | undefined
                model?: string | undefined
                variant?: string | undefined
                miles?: number | undefined
                postal_code?: string | undefined
                radius?: number | undefined
              }
            }
            output: FareValue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                vrm?: string | undefined
                year?: number | undefined
                make?: string | undefined
                model?: string | undefined
                variant?: string | undefined
                miles?: number | undefined
                postal_code?: string | undefined
                radius?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/predict/car/uk/price': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                vrm?: string | undefined
                year?: number | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                base_exterior_color?: string | undefined
                transmission?: 'Manual' | 'Automatic' | undefined
                drivetrain?: string | undefined
                engine_size?: number | undefined
                cylinders?: number | undefined
                doors?: number | undefined
                fuel_type?: string | undefined
                highway_mpg?: number | undefined
                city_mpg?: number | undefined
                combined_mpg?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                miles?: number | undefined
                zip?: string | undefined
              }
            }
            output: PricePrediction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                vrm?: string | undefined
                year?: number | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                base_exterior_color?: string | undefined
                transmission?: 'Manual' | 'Automatic' | undefined
                drivetrain?: string | undefined
                engine_size?: number | undefined
                cylinders?: number | undefined
                doors?: number | undefined
                fuel_type?: string | undefined
                highway_mpg?: number | undefined
                city_mpg?: number | undefined
                combined_mpg?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                miles?: number | undefined
                zip?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sales/car': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                car_type?: 'new' | 'used' | undefined
                make?: string | undefined
                mm?: string | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                taxonomy_vin?: string | undefined
                state?: string | undefined
                city_state?: string | undefined
                vin?: string | undefined
                country?: 'us' | 'ca' | 'US' | 'CA' | undefined
              }
            }
            output: Sales
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                car_type?: 'new' | 'used' | undefined
                make?: string | undefined
                mm?: string | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                taxonomy_vin?: string | undefined
                state?: string | undefined
                city_state?: string | undefined
                vin?: string | undefined
                country?: 'us' | 'ca' | 'US' | 'CA' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/car/active': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                mm?: string | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                source?: string | undefined
                state?: string | undefined
                city?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                include_relevant_links?: boolean | undefined
                inventory_count_range?: string | undefined
                dealer_id?: string | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                seating_capacity?: string | undefined
                powertrain_type?: string | undefined
                price_change?: 'positive' | 'negative' | undefined
                price_change_range?: string | undefined
                active_inventory_date_range?: string | undefined
                engine_size_range?: string | undefined
                high_value_features?: string | undefined
                min_photo_links?: string | undefined
                min_photo_links_cached?: string | undefined
              }
            }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                mm?: string | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                source?: string | undefined
                state?: string | undefined
                city?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                include_relevant_links?: boolean | undefined
                inventory_count_range?: string | undefined
                dealer_id?: string | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                seating_capacity?: string | undefined
                powertrain_type?: string | undefined
                price_change?: 'positive' | 'negative' | undefined
                price_change_range?: string | undefined
                active_inventory_date_range?: string | undefined
                engine_size_range?: string | undefined
                high_value_features?: string | undefined
                min_photo_links?: string | undefined
                min_photo_links_cached?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/car/active/rank': {
      $post:
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                page?: number | undefined
              }
            } & { json: CarRankRequest }
            output: CarRankResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                page?: number | undefined
              }
            } & { json: CarRankRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/car/active/rank/listings': {
      $post:
        | {
            input: {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            } & { json: CarRankRequest }
            output: CarRankResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { api_key?: string | undefined; append_api_key?: boolean | undefined }
            } & { json: CarRankRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/car/auction/active': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                mm?: string | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                source?: string | undefined
                dealer_id?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                include_relevant_links?: boolean | undefined
                inventory_count_range?: string | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                title_type?: 'clean' | 'salvage' | undefined
                seating_capacity?: string | undefined
                engine_size_range?: string | undefined
                min_photo_links?: string | undefined
                min_photo_links_cached?: string | undefined
              }
            }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                mm?: string | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                source?: string | undefined
                dealer_id?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                include_relevant_links?: boolean | undefined
                inventory_count_range?: string | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                title_type?: 'clean' | 'salvage' | undefined
                seating_capacity?: string | undefined
                engine_size_range?: string | undefined
                min_photo_links?: string | undefined
                min_photo_links_cached?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/car/auto-complete': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                field:
                  | 'ymm'
                  | 'mm'
                  | 'make'
                  | 'model'
                  | 'trim'
                  | 'body_type'
                  | 'body_subtype'
                  | 'vehicle_type'
                  | 'transmission'
                  | 'drivetrain'
                  | 'fuel_type'
                  | 'exterior_color'
                  | 'interior_color'
                  | 'engine'
                  | 'engine_size'
                  | 'engine_block'
                  | 'state'
                  | 'city'
                input: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_block?: string | undefined
                state?: string | undefined
                city?: string | undefined
                source?: string | undefined
                dealer_id?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | undefined
                car_type?: 'new' | 'used' | undefined
                include_non_vin_listings?: 'true' | 'false' | undefined
                ignore_case?: boolean | undefined
                term_counts?: boolean | undefined
                sort_by?: 'index' | 'count' | undefined
                seller_type?: string | undefined
                radius?: number | undefined
                zip?: string | undefined
                inventory_count_range?: string | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                facet_min_count?: number | undefined
              }
            }
            output: SearchAutoCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                field:
                  | 'ymm'
                  | 'mm'
                  | 'make'
                  | 'model'
                  | 'trim'
                  | 'body_type'
                  | 'body_subtype'
                  | 'vehicle_type'
                  | 'transmission'
                  | 'drivetrain'
                  | 'fuel_type'
                  | 'exterior_color'
                  | 'interior_color'
                  | 'engine'
                  | 'engine_size'
                  | 'engine_block'
                  | 'state'
                  | 'city'
                input: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_block?: string | undefined
                state?: string | undefined
                city?: string | undefined
                source?: string | undefined
                dealer_id?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | undefined
                car_type?: 'new' | 'used' | undefined
                include_non_vin_listings?: 'true' | 'false' | undefined
                ignore_case?: boolean | undefined
                term_counts?: boolean | undefined
                sort_by?: 'index' | 'count' | undefined
                seller_type?: string | undefined
                radius?: number | undefined
                zip?: string | undefined
                inventory_count_range?: string | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                facet_min_count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/car/fsbo/active': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                mm?: string | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                source?: string | undefined
                dealer_id?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                include_relevant_links?: boolean | undefined
                inventory_count_range?: string | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                exclude_dealer_listings?: boolean | undefined
                in_transit?: 'true' | 'false' | undefined
                seating_capacity?: string | undefined
                engine_size_range?: string | undefined
                min_photo_links?: string | undefined
                min_photo_links_cached?: string | undefined
              }
            }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                mm?: string | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                source?: string | undefined
                dealer_id?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                include_relevant_links?: boolean | undefined
                inventory_count_range?: string | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                exclude_dealer_listings?: boolean | undefined
                in_transit?: 'true' | 'false' | undefined
                seating_capacity?: string | undefined
                engine_size_range?: string | undefined
                min_photo_links?: string | undefined
                min_photo_links_cached?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/car/incentive/oem': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                offer_type?: 'lease' | 'finance' | 'cash' | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                msrp?: string | undefined
                apr?: string | undefined
                monthly?: string | undefined
                monthly_per_thousand?: string | undefined
                down_payment?: string | undefined
                due_at_signing?: string | undefined
                security_deposit?: string | undefined
                disposition_fee?: string | undefined
                acquisition_fee?: string | undefined
                duration?: string | undefined
                dealer_contribution?: string | undefined
                mileage_charge?: string | undefined
                mileage_charge_limit?: string | undefined
                cashback_amount?: string | undefined
                cashback_target_group?: string | undefined
                lease_end_purchase_option?: string | undefined
                net_capitalised_cost?: string | undefined
                gross_capitalised_cost?: string | undefined
                total_monthly_payment?: string | undefined
                zip?: string | undefined
                city?: string | undefined
                state?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                search_text?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
              }
            }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                offer_type?: 'lease' | 'finance' | 'cash' | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                msrp?: string | undefined
                apr?: string | undefined
                monthly?: string | undefined
                monthly_per_thousand?: string | undefined
                down_payment?: string | undefined
                due_at_signing?: string | undefined
                security_deposit?: string | undefined
                disposition_fee?: string | undefined
                acquisition_fee?: string | undefined
                duration?: string | undefined
                dealer_contribution?: string | undefined
                mileage_charge?: string | undefined
                mileage_charge_limit?: string | undefined
                cashback_amount?: string | undefined
                cashback_target_group?: string | undefined
                lease_end_purchase_option?: string | undefined
                net_capitalised_cost?: string | undefined
                gross_capitalised_cost?: string | undefined
                total_monthly_payment?: string | undefined
                zip?: string | undefined
                city?: string | undefined
                state?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                search_text?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/car/recents': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                dealer_id?: string | undefined
                vin?: string | undefined
                source?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                msa_code?: string | undefined
                dealer_name?: string | undefined
                dealership_group_name?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                sold?: boolean | undefined
                include_relevant_links?: boolean | undefined
                expired?: 'true' | 'false' | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                seating_capacity?: string | undefined
                active_inventory_date_range?: string | undefined
                engine_size_range?: string | undefined
                price_change_range?: string | undefined
              }
            }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                dealer_id?: string | undefined
                vin?: string | undefined
                source?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'US' | 'CA' | 'us' | 'ca' | 'all' | 'ALL' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                msa_code?: string | undefined
                dealer_name?: string | undefined
                dealership_group_name?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                sold?: boolean | undefined
                include_relevant_links?: boolean | undefined
                expired?: 'true' | 'false' | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                seating_capacity?: string | undefined
                active_inventory_date_range?: string | undefined
                engine_size_range?: string | undefined
                price_change_range?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/car/uk/active': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                postal_code?: string | undefined
                zip?: string | undefined
                car_type?: 'new' | 'used' | undefined
                year?: string | undefined
                year_range?: string | undefined
                make?: string | undefined
                model?: string | undefined
                variant?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                body_type?: string | undefined
                ymmt?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                engine?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'uk' | 'england' | 'scotland' | 'northan ireland' | 'wales' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                county?: string | undefined
                state?: string | undefined
                city?: string | undefined
                fuel_type?: string | undefined
                stock_no?: string | undefined
                dom_range?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                co2_emissions?: string | undefined
                insurance_group?: string | undefined
                vehicle_registration_mark?: string | undefined
                vehicle_registration_date_range?: string | undefined
                num_owners?: string | undefined
                inventory_count_range?: string | undefined
                source?: string | undefined
                dealer_id?: string | undefined
                exclude_sources?: string | undefined
                exclude_dealer_ids?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                include_non_vin_listings?: boolean | undefined
                cylinders?: string | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                write_off_category?: string | undefined
                exclude_write_off_category?: string | undefined
                fca_status?: string | undefined
                seating_capacity?: string | undefined
                vrm?: string | undefined
                powertrain_type?: string | undefined
                client_filters?: true | false | undefined
                boost?: true | false | undefined
                car_location_seller_name?: string | undefined
                car_location_street?: string | undefined
                car_location_city?: string | undefined
                car_location_county?: string | undefined
                car_location_zip?: string | undefined
                car_location_latitude?: number | undefined
                car_location_longitude?: number | undefined
                price_change?: 'positive' | 'negative' | undefined
                price_change_range?: string | undefined
                active_inventory_date_range?: string | undefined
                engine_size?: string | undefined
                engine_size_range?: string | undefined
                uvc_id?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                combined_mpg_range?: string | undefined
                owned?: boolean | undefined
                min_photo_links?: string | undefined
                min_photo_links_cached?: string | undefined
              }
            }
            output: UKSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                postal_code?: string | undefined
                zip?: string | undefined
                car_type?: 'new' | 'used' | undefined
                year?: string | undefined
                year_range?: string | undefined
                make?: string | undefined
                model?: string | undefined
                variant?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                body_type?: string | undefined
                ymmt?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                engine?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                msa_code?: string | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'uk' | 'england' | 'scotland' | 'northan ireland' | 'wales' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                county?: string | undefined
                state?: string | undefined
                city?: string | undefined
                fuel_type?: string | undefined
                stock_no?: string | undefined
                dom_range?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                co2_emissions?: string | undefined
                insurance_group?: string | undefined
                vehicle_registration_mark?: string | undefined
                vehicle_registration_date_range?: string | undefined
                num_owners?: string | undefined
                inventory_count_range?: string | undefined
                source?: string | undefined
                dealer_id?: string | undefined
                exclude_sources?: string | undefined
                exclude_dealer_ids?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                include_non_vin_listings?: boolean | undefined
                cylinders?: string | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                write_off_category?: string | undefined
                exclude_write_off_category?: string | undefined
                fca_status?: string | undefined
                seating_capacity?: string | undefined
                vrm?: string | undefined
                powertrain_type?: string | undefined
                client_filters?: true | false | undefined
                boost?: true | false | undefined
                car_location_seller_name?: string | undefined
                car_location_street?: string | undefined
                car_location_city?: string | undefined
                car_location_county?: string | undefined
                car_location_zip?: string | undefined
                car_location_latitude?: number | undefined
                car_location_longitude?: number | undefined
                price_change?: 'positive' | 'negative' | undefined
                price_change_range?: string | undefined
                active_inventory_date_range?: string | undefined
                engine_size?: string | undefined
                engine_size_range?: string | undefined
                uvc_id?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                combined_mpg_range?: string | undefined
                owned?: boolean | undefined
                min_photo_links?: string | undefined
                min_photo_links_cached?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/car/uk/recents': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                dealer_id?: string | undefined
                vin?: string | undefined
                source?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                combined_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'uk' | 'england' | 'scotland' | 'northan ireland' | 'wales' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                msa_code?: string | undefined
                dealer_name?: string | undefined
                dealership_group_name?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                sold?: boolean | undefined
                include_relevant_links?: boolean | undefined
                expired?: 'true' | 'false' | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                seating_capacity?: string | undefined
                insurance_group?: string | undefined
                vrm?: string | undefined
                num_owners?: string | undefined
                variant?: string | undefined
                postal_code?: string | undefined
                write_off_category?: string | undefined
                fca_status?: string | undefined
                active_inventory_date_range?: string | undefined
                engine_size_range?: string | undefined
                price_change_range?: string | undefined
              }
            }
            output: UKSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                append_api_key?: boolean | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                zip?: string | undefined
                include_lease?: boolean | undefined
                include_finance?: boolean | undefined
                lease_term?: string | undefined
                lease_down_payment?: string | undefined
                lease_emp?: string | undefined
                finance_loan_term?: string | undefined
                finance_loan_apr?: string | undefined
                finance_emp?: string | undefined
                finance_down_payment?: string | undefined
                finance_down_payment_per?: string | undefined
                car_type?: 'new' | 'used' | 'certified' | undefined
                carfax_1_owner?: 'true' | 'false' | undefined
                carfax_clean_title?: 'true' | 'false' | undefined
                year_range?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                dealer_id?: string | undefined
                vin?: string | undefined
                source?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                vins?: string | undefined
                taxonomy_vins?: string | undefined
                ymmt?: string | undefined
                match?: string | undefined
                cylinders?: string | undefined
                transmission?: string | undefined
                doors?: string | undefined
                drivetrain?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_aspiration?: string | undefined
                engine_block?: string | undefined
                highway_mpg_range?: string | undefined
                city_mpg_range?: string | undefined
                combined_mpg_range?: string | undefined
                miles_range?: string | undefined
                price_range?: string | undefined
                msrp_range?: string | undefined
                dom_range?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                first_seen_at_source_range?: string | undefined
                first_seen_at_mc_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                first_seen_at_source_days?: string | undefined
                first_seen_at_mc_days?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                include_non_vin_listings?: boolean | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                country?: 'uk' | 'england' | 'scotland' | 'northan ireland' | 'wales' | undefined
                plot?: boolean | undefined
                nodedup?: boolean | undefined
                dedup?: boolean | undefined
                owned?: boolean | undefined
                state?: string | undefined
                city?: string | undefined
                msa_code?: string | undefined
                dealer_name?: string | undefined
                dealership_group_name?: string | undefined
                trim_o?: string | undefined
                trim_r?: string | undefined
                dom_active_range?: string | undefined
                dom_180_range?: string | undefined
                exclude_certified?: boolean | undefined
                fuel_type?: string | undefined
                dealer_type?: 'franchise' | 'independent' | undefined
                photo_links?: boolean | undefined
                photo_links_cached?: boolean | undefined
                stock_no?: string | undefined
                sold?: boolean | undefined
                include_relevant_links?: boolean | undefined
                expired?: 'true' | 'false' | undefined
                exclude_dealer_ids?: string | undefined
                exclude_sources?: string | undefined
                in_transit?: 'true' | 'false' | undefined
                seating_capacity?: string | undefined
                insurance_group?: string | undefined
                vrm?: string | undefined
                num_owners?: string | undefined
                variant?: string | undefined
                postal_code?: string | undefined
                write_off_category?: string | undefined
                fca_status?: string | undefined
                active_inventory_date_range?: string | undefined
                engine_size_range?: string | undefined
                price_change_range?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/heavy-equipment/active': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                price_range?: string | undefined
                miles_range?: string | undefined
                msrp_range?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                search_text?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                stock_no?: string | undefined
                source?: string | undefined
                dealer_name?: string | undefined
                dealer_id?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                engine?: string | undefined
                fuel_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                body_type?: string | undefined
                category?: string | undefined
                sub_category?: string | undefined
                hours_used_range?: string | undefined
                state?: string | undefined
                city?: string | undefined
                zip?: string | undefined
                msa_code?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
              }
            }
            output: HeavyEquipmentsSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                price_range?: string | undefined
                miles_range?: string | undefined
                msrp_range?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                search_text?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                stock_no?: string | undefined
                source?: string | undefined
                dealer_name?: string | undefined
                dealer_id?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                engine?: string | undefined
                fuel_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                body_type?: string | undefined
                category?: string | undefined
                sub_category?: string | undefined
                hours_used_range?: string | undefined
                state?: string | undefined
                city?: string | undefined
                zip?: string | undefined
                msa_code?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/heavy-equipment/auto-complete': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                field:
                  | 'make'
                  | 'model'
                  | 'trim'
                  | 'body_type'
                  | 'transmission'
                  | 'drivetrain'
                  | 'fuel_type'
                  | 'exterior_color'
                  | 'interior_color'
                  | 'engine'
                  | 'category'
                  | 'sub_category'
                  | 'state'
                  | 'city'
                input: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                color?: string | undefined
                engine?: string | undefined
                state?: string | undefined
                city?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                ignore_case?: boolean | undefined
                term_counts?: boolean | undefined
                sort_by?: 'index' | 'count' | undefined
                seller_type?: string | undefined
                radius?: number | undefined
                zip?: string | undefined
                facet_min_count?: number | undefined
              }
            }
            output: SearchAutoCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                field:
                  | 'make'
                  | 'model'
                  | 'trim'
                  | 'body_type'
                  | 'transmission'
                  | 'drivetrain'
                  | 'fuel_type'
                  | 'exterior_color'
                  | 'interior_color'
                  | 'engine'
                  | 'category'
                  | 'sub_category'
                  | 'state'
                  | 'city'
                input: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                color?: string | undefined
                engine?: string | undefined
                state?: string | undefined
                city?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                ignore_case?: boolean | undefined
                term_counts?: boolean | undefined
                sort_by?: 'index' | 'count' | undefined
                seller_type?: string | undefined
                radius?: number | undefined
                zip?: string | undefined
                facet_min_count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/motorcycle/active': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                price_range?: string | undefined
                miles_range?: string | undefined
                msrp_range?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                search_text?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                taxonomy_vin?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                stock_no?: string | undefined
                source?: string | undefined
                dealer_id?: string | undefined
                color?: string | undefined
                body_type?: string | undefined
                vehicle_type?: string | undefined
                cylinders?: string | undefined
                drivetrain?: string | undefined
                engine?: string | undefined
                fuel_type?: string | undefined
                transmission?: string | undefined
                state?: string | undefined
                city?: string | undefined
                zip?: string | undefined
                msa_code?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
              }
            }
            output: MotorcycleSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                price_range?: string | undefined
                miles_range?: string | undefined
                msrp_range?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                search_text?: string | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                vin?: string | undefined
                taxonomy_vin?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                stock_no?: string | undefined
                source?: string | undefined
                dealer_id?: string | undefined
                color?: string | undefined
                body_type?: string | undefined
                vehicle_type?: string | undefined
                cylinders?: string | undefined
                drivetrain?: string | undefined
                engine?: string | undefined
                fuel_type?: string | undefined
                transmission?: string | undefined
                state?: string | undefined
                city?: string | undefined
                zip?: string | undefined
                msa_code?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/motorcycle/auto-complete': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                field:
                  | 'make'
                  | 'model'
                  | 'trim'
                  | 'body_type'
                  | 'vehicle_type'
                  | 'transmission'
                  | 'drivetrain'
                  | 'fuel_type'
                  | 'color'
                  | 'engine'
                  | 'state'
                  | 'city'
                input: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                color?: string | undefined
                engine?: string | undefined
                state?: string | undefined
                city?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                ignore_case?: boolean | undefined
                term_counts?: boolean | undefined
                sort_by?: 'index' | 'count' | undefined
                seller_type?: string | undefined
                radius?: number | undefined
                zip?: string | undefined
                facet_min_count?: number | undefined
              }
            }
            output: SearchAutoCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                field:
                  | 'make'
                  | 'model'
                  | 'trim'
                  | 'body_type'
                  | 'vehicle_type'
                  | 'transmission'
                  | 'drivetrain'
                  | 'fuel_type'
                  | 'color'
                  | 'engine'
                  | 'state'
                  | 'city'
                input: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                color?: string | undefined
                engine?: string | undefined
                state?: string | undefined
                city?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                ignore_case?: boolean | undefined
                term_counts?: boolean | undefined
                sort_by?: 'index' | 'count' | undefined
                seller_type?: string | undefined
                radius?: number | undefined
                zip?: string | undefined
                facet_min_count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/rv/active': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                price_range?: string | undefined
                miles_range?: string | undefined
                msrp_range?: string | undefined
                year_range?: string | undefined
                search_text?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                model_o?: string | undefined
                vin?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                stock_no?: string | undefined
                source?: string | undefined
                dealer_name?: string | undefined
                dealer_id?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                engine?: string | undefined
                fuel_type?: string | undefined
                transmission?: string | undefined
                class?: string | undefined
                state?: string | undefined
                city?: string | undefined
                zip?: string | undefined
                msa_code?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                slideouts?: string | undefined
                length_range?: string | undefined
                length?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                seating_capacity?: string | undefined
                fresh_water_capacity?: string | undefined
                sleeps?: string | undefined
                cylinders?: string | undefined
                number_of_awnings?: string | undefined
                doors?: string | undefined
                gvwr?: string | undefined
              }
            }
            output: RVSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                price_range?: string | undefined
                miles_range?: string | undefined
                msrp_range?: string | undefined
                year_range?: string | undefined
                search_text?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                model_o?: string | undefined
                vin?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                stock_no?: string | undefined
                source?: string | undefined
                dealer_name?: string | undefined
                dealer_id?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                engine?: string | undefined
                fuel_type?: string | undefined
                transmission?: string | undefined
                class?: string | undefined
                state?: string | undefined
                city?: string | undefined
                zip?: string | undefined
                msa_code?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                slideouts?: string | undefined
                length_range?: string | undefined
                length?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                seating_capacity?: string | undefined
                fresh_water_capacity?: string | undefined
                sleeps?: string | undefined
                cylinders?: string | undefined
                number_of_awnings?: string | undefined
                doors?: string | undefined
                gvwr?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/rv/auto-complete': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                field:
                  | 'make'
                  | 'model'
                  | 'trim'
                  | 'class'
                  | 'transmission'
                  | 'fuel_type'
                  | 'exterior_color'
                  | 'interior_color'
                  | 'engine'
                  | 'state'
                  | 'city'
                input: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                color?: string | undefined
                engine?: string | undefined
                state?: string | undefined
                city?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                ignore_case?: boolean | undefined
                term_counts?: boolean | undefined
                sort_by?: 'index' | 'count' | undefined
                seller_type?: string | undefined
                radius?: number | undefined
                zip?: string | undefined
                facet_min_count?: number | undefined
              }
            }
            output: SearchAutoCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                field:
                  | 'make'
                  | 'model'
                  | 'trim'
                  | 'class'
                  | 'transmission'
                  | 'fuel_type'
                  | 'exterior_color'
                  | 'interior_color'
                  | 'engine'
                  | 'state'
                  | 'city'
                input: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                color?: string | undefined
                engine?: string | undefined
                state?: string | undefined
                city?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                ignore_case?: boolean | undefined
                term_counts?: boolean | undefined
                sort_by?: 'index' | 'count' | undefined
                seller_type?: string | undefined
                radius?: number | undefined
                zip?: string | undefined
                facet_min_count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/rv/uk/active': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                price_range?: string | undefined
                miles_range?: string | undefined
                msrp_range?: string | undefined
                year_range?: string | undefined
                search_text?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                vin?: string | undefined
                source?: string | undefined
                dealer_name?: string | undefined
                dealer_id?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                engine_size?: string | undefined
                fuel_type?: string | undefined
                category?: string | undefined
                state?: string | undefined
                city?: string | undefined
                county?: string | undefined
                postal_code?: string | undefined
                zip?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                seating_capacity?: string | undefined
                cylinders?: string | undefined
                doors?: string | undefined
                mtplm?: string | undefined
                sub_category?: string | undefined
                availability_status?: string | undefined
                berths?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                width_range?: string | undefined
                exterior_length_range?: string | undefined
                interior_length_range?: string | undefined
                drive_type?: string | undefined
                steering?: string | undefined
                chassis?: string | undefined
                transmission?: string | undefined
              }
            }
            output: UKRVSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                price_range?: string | undefined
                miles_range?: string | undefined
                msrp_range?: string | undefined
                year_range?: string | undefined
                search_text?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                vin?: string | undefined
                source?: string | undefined
                dealer_name?: string | undefined
                dealer_id?: string | undefined
                exterior_color?: string | undefined
                interior_color?: string | undefined
                engine_size?: string | undefined
                fuel_type?: string | undefined
                category?: string | undefined
                state?: string | undefined
                city?: string | undefined
                county?: string | undefined
                postal_code?: string | undefined
                zip?: string | undefined
                sort_by?: string | undefined
                sort_order?: 'asc' | 'desc' | 'ASC' | 'DESC' | undefined
                rows?: number | undefined
                start?: number | undefined
                facets?: string | undefined
                range_facets?: string | undefined
                facet_sort?: 'count' | 'index' | undefined
                stats?: string | undefined
                last_seen_range?: string | undefined
                first_seen_range?: string | undefined
                last_seen_days?: string | undefined
                first_seen_days?: string | undefined
                base_exterior_color?: string | undefined
                base_interior_color?: string | undefined
                seating_capacity?: string | undefined
                cylinders?: string | undefined
                doors?: string | undefined
                mtplm?: string | undefined
                sub_category?: string | undefined
                availability_status?: string | undefined
                berths?: string | undefined
                inventory_type?: 'used' | 'new' | undefined
                width_range?: string | undefined
                exterior_length_range?: string | undefined
                interior_length_range?: string | undefined
                drive_type?: string | undefined
                steering?: string | undefined
                chassis?: string | undefined
                transmission?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/specs/car/auto-complete': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                field:
                  | 'make'
                  | 'model'
                  | 'trim'
                  | 'body_type'
                  | 'body_subtype'
                  | 'vehicle_type'
                  | 'transmission'
                  | 'drivetrain'
                  | 'fuel_type'
                  | 'engine'
                  | 'engine_size'
                  | 'engine_block'
                input: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_block?: string | undefined
                ignore_case?: boolean | undefined
                facet_min_count?: number | undefined
              }
            }
            output: SpecsAutoCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                field:
                  | 'make'
                  | 'model'
                  | 'trim'
                  | 'body_type'
                  | 'body_subtype'
                  | 'vehicle_type'
                  | 'transmission'
                  | 'drivetrain'
                  | 'fuel_type'
                  | 'engine'
                  | 'engine_size'
                  | 'engine_block'
                input: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_block?: string | undefined
                ignore_case?: boolean | undefined
                facet_min_count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/specs/car/terms': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                field: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_block?: string | undefined
              }
            }
            output: SpecsAutoCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                field: string
                year?: string | undefined
                make?: string | undefined
                model?: string | undefined
                trim?: string | undefined
                body_type?: string | undefined
                body_subtype?: string | undefined
                vehicle_type?: string | undefined
                transmission?: string | undefined
                drivetrain?: string | undefined
                fuel_type?: string | undefined
                engine?: string | undefined
                engine_size?: string | undefined
                engine_block?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stats/car': {
      $get:
        | {
            input: {
              query: {
                api_key?: string | undefined
                country?: 'us' | 'ca' | undefined
                car_type?: 'new' | 'used' | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                taxonomy_vin?: string | undefined
                vin?: string | undefined
                state?: string | undefined
                city_state?: string | undefined
              }
            }
            output: DailyStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: string | undefined
                country?: 'us' | 'ca' | undefined
                car_type?: 'new' | 'used' | undefined
                ymm?: string | undefined
                ymmt?: string | undefined
                taxonomy_vin?: string | undefined
                vin?: string | undefined
                state?: string | undefined
                city_state?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
