type ApiKeyParam = string
type LimitParam = number
type PageParam = number
type FilterParam = string
type AddressLongitudeParam = number
type AddressLatitudeParam = number
type PostcodeOutwardParam = string
type PostcodeParam = string
type PostcodeAreaParam = string
type PostcodeSectorParam = string
type PostTownParam = string
type UPRNParam = number
type CountryParam = string
type PostcodeTypeParam = string
type SmallUserParam = string
type BoxParam = string
type BiasPostcodeOutwardParam = string
type BiasPostcodeParam = string
type BiasPostcodeAreaParam = string
type BiasPostcodeSectorParam = string
type BiasPosttownParam = string
type BiasThoroughfareParam = string
type BiasCountryParam = string
type BiasLonLatParam = string
type PafAdministrativeCounty = string
type PafBuildingName = string
type PafBuildingNumber = string
type PafCountry = string
type PafCountryIso = string
type PafCountryIso_2 = string
type PafCounty = string
type PafDataset = string
type PafDeliveryPointSuffix = string
type PafDepartmentName = string
type PafDependantLocality = string
type PafDependantThoroughfare = string
type PafDistrict = string
type PafDoubleDependantLocality = string
type Eastings = string | number
type ID = string
type PafLanguage = string
type Latitude = string | number
type PafLine1 = string
type PafLine2 = string
type PafLine3 = string
type Longitude = string | number
type Northings = string | number
type PafOrganisationName = string
type PafPobox = string
type PafPostTown = string
type PafPostalCounty = string
type PafPostcode = string
type PafPostcodeInward = string
type PafPostcodeOutward = string
type PafPostcodeType = 'S' | 'L'
type PafPremise = string
type PafSuOrganisationIndicator = string
type PafSubBuildingName = string
type PafThoroughfare = string
type PafTraditionalCounty = string
type PafUdprn = number
type PafUmprn = string | number
type PafUprn = string
type PafWard = string
type PafAddress = {
  administrative_county: PafAdministrativeCounty
  building_name: PafBuildingName
  building_number: PafBuildingNumber
  country:
    | 'England'
    | 'Scotland'
    | 'Wales'
    | 'Northern Ireland'
    | 'Jersey'
    | 'Guernsey'
    | 'Isle of Man'
  country_iso: 'GBR' | 'IMN' | 'JEY' | 'GGY'
  country_iso_2: 'GB' | 'IM' | 'JE' | 'GG'
  county: PafCounty
  county_code: string
  dataset: 'paf'
  delivery_point_suffix: PafDeliveryPointSuffix
  department_name: PafDepartmentName
  dependant_locality: PafDependantLocality
  dependant_thoroughfare: PafDependantThoroughfare
  district: PafDistrict
  double_dependant_locality: PafDoubleDependantLocality
  eastings: Eastings
  id: ID
  language: 'en'
  latitude: Latitude
  line_1: PafLine1
  line_2: PafLine2
  line_3: PafLine3
  longitude: Longitude
  northings: Northings
  organisation_name: PafOrganisationName
  po_box: PafPobox
  post_town: PafPostTown
  postal_county: PafPostalCounty
  postcode: PafPostcode
  postcode_inward: PafPostcodeInward
  postcode_outward: PafPostcodeOutward
  postcode_type: PafPostcodeType
  premise: PafPremise
  su_organisation_indicator: PafSuOrganisationIndicator
  sub_building_name: PafSubBuildingName
  thoroughfare: PafThoroughfare
  traditional_county: PafTraditionalCounty
  udprn: PafUdprn
  umprn: PafUmprn
  uprn: PafUprn
  ward: PafWard
}
type MrAddress = {
  administrative_county: PafAdministrativeCounty
  building_name: PafBuildingName
  building_number: PafBuildingNumber
  country:
    | 'England'
    | 'Scotland'
    | 'Wales'
    | 'Northern Ireland'
    | 'Jersey'
    | 'Guernsey'
    | 'Isle of Man'
  country_iso: 'GBR' | 'IMN' | 'JEY' | 'GGY'
  country_iso_2: 'GB' | 'IM' | 'JE' | 'GG'
  county: PafCounty
  county_code: string
  dataset: 'mr'
  delivery_point_suffix: PafDeliveryPointSuffix
  department_name: PafDepartmentName
  dependant_locality: PafDependantLocality
  dependant_thoroughfare: PafDependantThoroughfare
  district: PafDistrict
  double_dependant_locality: PafDoubleDependantLocality
  eastings: Eastings
  id: ID
  language: 'en'
  latitude: Latitude
  line_1: PafLine1
  line_2: PafLine2
  line_3: PafLine3
  longitude: Longitude
  northings: Northings
  organisation_name: PafOrganisationName
  po_box: PafPobox
  post_town: PafPostTown
  postal_county: PafPostalCounty
  postcode: PafPostcode
  postcode_inward: PafPostcodeInward
  postcode_outward: PafPostcodeOutward
  postcode_type: PafPostcodeType
  premise: PafPremise
  su_organisation_indicator: PafSuOrganisationIndicator
  sub_building_name: PafSubBuildingName
  thoroughfare: PafThoroughfare
  traditional_county: PafTraditionalCounty
  udprn: PafUdprn
  umprn: PafUmprn
  uprn: PafUprn
  ward: PafWard
}
type NybAddress = {
  administrative_county: PafAdministrativeCounty
  building_name: PafBuildingName
  building_number: PafBuildingNumber
  country:
    | 'England'
    | 'Scotland'
    | 'Wales'
    | 'Northern Ireland'
    | 'Jersey'
    | 'Guernsey'
    | 'Isle of Man'
  country_iso: 'GBR' | 'IMN' | 'JEY' | 'GGY'
  country_iso_2: 'GB' | 'IM' | 'JE' | 'GG'
  county: PafCounty
  county_code: string
  dataset: 'nyb'
  delivery_point_suffix: PafDeliveryPointSuffix
  department_name: PafDepartmentName
  dependant_locality: PafDependantLocality
  dependant_thoroughfare: PafDependantThoroughfare
  district: PafDistrict
  double_dependant_locality: PafDoubleDependantLocality
  eastings: Eastings
  id: ID
  language: 'en'
  latitude: Latitude
  line_1: PafLine1
  line_2: PafLine2
  line_3: PafLine3
  longitude: Longitude
  northings: Northings
  organisation_name: PafOrganisationName
  po_box: PafPobox
  post_town: PafPostTown
  postal_county: PafPostalCounty
  postcode: PafPostcode
  postcode_inward: PafPostcodeInward
  postcode_outward: PafPostcodeOutward
  postcode_type: PafPostcodeType
  premise: PafPremise
  su_organisation_indicator: PafSuOrganisationIndicator
  sub_building_name: PafSubBuildingName
  thoroughfare: PafThoroughfare
  traditional_county: PafTraditionalCounty
  udprn: PafUdprn
  umprn: PafUmprn
  uprn: PafUprn
  ward: PafWard
}
type WelshPafAddress = {
  administrative_county: PafAdministrativeCounty
  building_name: PafBuildingName
  building_number: PafBuildingNumber
  country: 'Wales'
  country_iso: 'GBR'
  country_iso_2: 'GB'
  county: PafCounty
  county_code: string
  dataset: 'pafw'
  delivery_point_suffix: PafDeliveryPointSuffix
  department_name: PafDepartmentName
  dependant_locality: PafDependantLocality
  dependant_thoroughfare: PafDependantThoroughfare
  district: PafDistrict
  double_dependant_locality: PafDoubleDependantLocality
  eastings: Eastings
  id: ID
  language: 'cy'
  latitude: Latitude
  line_1: PafLine1
  line_2: PafLine2
  line_3: PafLine3
  longitude: Longitude
  northings: Northings
  organisation_name: PafOrganisationName
  po_box: PafPobox
  post_town: PafPostTown
  postal_county: PafPostalCounty
  postcode: PafPostcode
  postcode_inward: PafPostcodeInward
  postcode_outward: PafPostcodeOutward
  postcode_type: PafPostcodeType
  premise: PafPremise
  su_organisation_indicator: PafSuOrganisationIndicator
  sub_building_name: PafSubBuildingName
  thoroughfare: PafThoroughfare
  traditional_county: PafTraditionalCounty
  udprn: PafUdprn
  umprn: PafUmprn
  uprn: PafUprn
  ward: PafWard
}
type PafAliasAddress = {
  administrative_county: PafAdministrativeCounty
  building_name: PafBuildingName
  building_number: PafBuildingNumber
  country:
    | 'England'
    | 'Scotland'
    | 'Wales'
    | 'Northern Ireland'
    | 'Jersey'
    | 'Guernsey'
    | 'Isle of Man'
  country_iso: 'GBR' | 'IMN' | 'JEY' | 'GGY'
  country_iso_2: 'GB' | 'IM' | 'JE' | 'GG'
  county: PafCounty
  county_code: string
  dataset: 'pafa'
  delivery_point_suffix: PafDeliveryPointSuffix
  department_name: PafDepartmentName
  dependant_locality: PafDependantLocality
  dependant_thoroughfare: PafDependantThoroughfare
  district: PafDistrict
  double_dependant_locality: PafDoubleDependantLocality
  eastings: Eastings
  id: ID
  language: 'en'
  latitude: Latitude
  line_1: PafLine1
  line_2: PafLine2
  line_3: PafLine3
  longitude: Longitude
  northings: Northings
  organisation_name: PafOrganisationName
  po_box: PafPobox
  post_town: PafPostTown
  postal_county: PafPostalCounty
  postcode: PafPostcode
  postcode_inward: PafPostcodeInward
  postcode_outward: PafPostcodeOutward
  postcode_type: PafPostcodeType
  premise: PafPremise
  su_organisation_indicator: PafSuOrganisationIndicator
  sub_building_name: PafSubBuildingName
  thoroughfare: PafThoroughfare
  traditional_county: PafTraditionalCounty
  udprn: PafUdprn
  umprn: PafUmprn
  uprn: PafUprn
  ward: PafWard
}
type AddressResponse = {
  code: 2000
  message: 'Success'
  result: {
    hits: (PafAddress | MrAddress | NybAddress | WelshPafAddress | PafAliasAddress)[]
    limit: number
    page: number
    total: number
  }
}
type BadRequestResponse = {
  code: number
  message: string
  errors?: { errorCode?: string | undefined; message: string; path: string }[] | undefined
}
type PostcodeNotFoundResponse = { code: 4040; message: 'Postcode not found'; suggestions: string[] }
type Context = string
type BiasIpParam = 'true'
type AddressSuggestion = { id: ID; suggestion: string; urls: { [x: string]: unknown } }
type UkAddressSuggestion = {
  id: ID
  suggestion: string
  udprn: PafUdprn
  umprn?: number | undefined
  urls: { udprn: string; umprn?: string | undefined }
}
type AutocompleteResponse = {
  code: 2000
  message: 'Success'
  result: { hits: (AddressSuggestion | UkAddressSuggestion)[] }
}
type Country =
  | 'United States'
  | 'Guam'
  | 'Puerto Rico'
  | 'England'
  | 'Scotland'
  | 'Wales'
  | 'Northern Ireland'
  | 'Jersey'
  | 'Guernsey'
  | 'Isle of Man'
  | 'Ireland'
type CountryISO = 'GBR' | 'IMN' | 'JEY' | 'GGY' | 'USA' | 'PRI' | 'GUM' | 'IRL'
type CountryISO2 = 'GB' | 'IM' | 'JE' | 'GG' | 'US' | 'PR' | 'GU' | 'IE'
type Dataset = 'paf' | 'pafw' | 'pafa' | 'mr' | 'nyb' | 'usps' | 'ecaf' | 'ecad'
type Language = 'en' | 'cy' | 'ga'
type EcadAddress = {
  address_reference: string
  building_group: string
  building_name: string
  building_number: string
  country: 'Ireland'
  country_iso: 'IRL'
  country_iso_2: 'IE'
  dataset: 'ecad'
  department: string
  eircode: string
  id: ID
  language: 'en' | 'ga'
  latitude: Latitude
  line_1: string
  line_2: string
  line_3: string
  line_4: string
  line_5: string
  line_6: string
  line_7: string
  line_8: string
  line_9: string
  longitude: Longitude
  organisation: string
  post_county: string
  primary_locality: string
  primary_thoroughfare: string
  secondary_locality: string
  secondary_thoroughfare: string
  sub_building_name: string
  tertiary_locality: string
  address_point_id?: string | undefined
  address_type?: string | undefined
  building_address_type?: string | undefined
  building_group_address_type?: string | undefined
  building_group_id?: string | undefined
  building_id?: string | undefined
  building_type?: string | undefined
  building_use?: 'R' | 'C' | 'B' | 'U' | undefined
  ded_id?: string | undefined
  ecad_id?: string | undefined
  gaeltacht?: boolean | undefined
  gaeltacht_id?: string | undefined
  holiday_home?: 'N' | 'Y' | '' | undefined
  local_authority?: string | undefined
  nace_category?: string | undefined
  nace_code?: string | undefined
  nua?: boolean | undefined
  org_vacant?: 'Y' | 'N' | '' | undefined
  organisation_id?: string | undefined
  post_county_id?: string | undefined
  post_town?: string | undefined
  post_town_id?: string | undefined
  postaim_presort_152?: string | undefined
  postaim_presort_61?: string | undefined
  primary_locality_address_type?: string | undefined
  primary_locality_id?: string | undefined
  primary_thoroughfare_id?: string | undefined
  publicity_post_zone?: string | undefined
  secondary_locality_address_type?: string | undefined
  secondary_locality_id?: string | undefined
  secondary_thoroughfare_id?: string | undefined
  small_area_id?: string | undefined
  townland_id?: string | undefined
  under_construction?: 'N' | 'Y' | '' | undefined
  vacant?: 'Y' | 'N' | '' | undefined
}
type EcafAddress = {
  address_reference: string
  building_group: string
  building_name: string
  building_number: string
  country: 'Ireland'
  country_iso: 'IRL'
  country_iso_2: 'IE'
  dataset: 'ecaf'
  department: string
  eircode: string
  id: ID
  language: 'en' | 'ga'
  latitude: Latitude
  line_1: string
  line_2: string
  line_3: string
  line_4: string
  line_5: string
  line_6: string
  line_7: string
  line_8: string
  line_9: string
  longitude: Longitude
  organisation: string
  post_county: string
  primary_locality: string
  primary_thoroughfare: string
  secondary_locality: string
  secondary_thoroughfare: string
  sub_building_name: string
  tertiary_locality: string
  ecaf_id?: string | undefined
}
type AddressSecondaryAbbreviation = string
type BaseAlternateCode = 'A' | 'B' | ''
type BuildingOrFirmName = string
type CarrierRouteId = string
type CarrierRouteRateSortation = string
type City = string
type CityAbbreviation = string
type CityStateMailingNameIndicator = string
type CityStateNameFacilityCode = 'B' | 'C' | 'N' | 'P' | 'S' | 'U' | 'Y' | ''
type CongressionalDistrictNumber = string | number
type UspsCountry = 'United States' | 'Guam' | 'Puerto Rico'
type UspsCountryIso = 'USA' | 'PRI' | 'GUM'
type UspsCountryIso_2 = 'US' | 'PR' | 'GU'
type County = string
type CountyNumber = string | number
type UspsDataset = 'usps'
type FinanceNumber = string | number
type GovernmentBuildingIndicator = '' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
type LacsStatusIndicator = '' | 'L'
type UspsLanguage = 'en'
type LastLine = string
type Line_1 = string
type Line_2 = string
type MunicipalityCityStateKey = string
type Plus_4Code = string
type PreferredCity = string
type PreferredLastLineCityStateKey = string
type PrimaryNumber = string
type RecordTypeCode = 'G' | 'H' | 'F' | 'S' | 'P' | 'R' | 'M' | ''
type SecondaryNumber = string
type State = string
type StateAbbreviation = string
type StreetName = string
type StreetPostDirectionalAbbreviation = string
type StreetPreDirectionalAbbreviation = string
type StreetSuffixAbbreviation = string
type UpdateKeyNumber = string
type UrbanizationCityStateKey = string
type ZipClassificationCode = '' | 'M' | 'P' | 'U'
type ZipCode = string
type ZipPlus_4Code = string
type UspsAddress = {
  address_secondary_abbreviation: AddressSecondaryAbbreviation
  base_alternate_code: BaseAlternateCode
  building_or_firm_name: BuildingOrFirmName
  carrier_route_id: CarrierRouteId
  carrier_route_rate_sortation: CarrierRouteRateSortation
  city: City
  city_abbreviation: CityAbbreviation
  city_state_mailing_name_indicator: CityStateMailingNameIndicator
  city_state_name_facility_code: CityStateNameFacilityCode
  congressional_district_number: CongressionalDistrictNumber
  country: UspsCountry
  country_iso: UspsCountryIso
  country_iso_2: UspsCountryIso_2
  county: County
  county_number: CountyNumber
  dataset: UspsDataset
  finance_number: FinanceNumber
  government_building_indicator: GovernmentBuildingIndicator
  id: ID
  lacs_status_indicator: LacsStatusIndicator
  language: UspsLanguage
  last_line: LastLine
  line_1: Line_1
  line_2: Line_2
  municipality_city_state_key: MunicipalityCityStateKey
  plus_4_code: Plus_4Code
  preferred_city: PreferredCity
  preferred_last_line_city_state_key: PreferredLastLineCityStateKey
  primary_number: PrimaryNumber
  record_type_code: RecordTypeCode
  secondary_number: SecondaryNumber
  state: State
  state_abbreviation: StateAbbreviation
  street_name: StreetName
  street_post_directional_abbreviation: StreetPostDirectionalAbbreviation
  street_pre_directional_abbreviation: StreetPreDirectionalAbbreviation
  street_suffix_abbreviation: StreetSuffixAbbreviation
  update_key_number: UpdateKeyNumber
  urbanization_city_state_key: UrbanizationCityStateKey
  zip_classification_code: ZipClassificationCode
  zip_code: ZipCode
  zip_plus_4_code: ZipPlus_4Code
}
type GbrGlobalAddress = {
  administrative_county: ''
  building_name: ''
  building_number: ''
  country: Country
  country_iso: CountryISO
  country_iso_2: CountryISO2
  county: string
  county_code: string
  dataset: Dataset
  delivery_point_suffix: ''
  department_name: ''
  dependant_locality: ''
  dependant_thoroughfare: ''
  district: ''
  double_dependant_locality: ''
  eastings: ''
  id: ID
  language: Language
  latitude: Latitude
  line_1: string
  line_2: string
  line_3: string
  longitude: Longitude
  native: EcadAddress | EcafAddress | UspsAddress
  northings: ''
  organisation_name: ''
  po_box: ''
  post_town: string
  postal_county: ''
  postcode: string
  postcode_inward: ''
  postcode_outward: ''
  postcode_type: ''
  premise: ''
  su_organisation_indicator: ''
  sub_building_name: ''
  thoroughfare: ''
  traditional_county: ''
  udprn: string
  umprn: ''
  uprn: ''
  ward: ''
}
type GbrResolveAddressResponse = {
  code: 2000
  message: 'Success'
  result: PafAddress | MrAddress | WelshPafAddress | PafAliasAddress | NybAddress | GbrGlobalAddress
}
type ErrorResponse = { code: number; message: string }
type UsaGlobalAddress = {
  address_secondary_abbreviation: ''
  base_alternate_code: ''
  building_or_firm_name: ''
  carrier_route_id: ''
  carrier_route_rate_sortation: ''
  city: string
  city_abbreviation: string
  city_state_mailing_name_indicator: ''
  city_state_name_facility_code: ''
  congressional_district_number: ''
  country: Country
  country_iso: CountryISO
  country_iso_2: CountryISO2
  county: string
  county_number: ''
  dataset: Dataset
  finance_number: ''
  government_building_indicator: ''
  id: ID
  lacs_status_indicator: ''
  language: Language
  last_line: ''
  line_1: string
  line_2: string
  municipality_city_state_key: ''
  native:
    | EcadAddress
    | EcafAddress
    | PafAddress
    | MrAddress
    | NybAddress
    | PafAliasAddress
    | WelshPafAddress
  plus_4_code: ''
  preferred_city: ''
  preferred_last_line_city_state_key: ''
  primary_number: ''
  record_type_code: ''
  secondary_number: ''
  state: string
  state_abbreviation: string
  street_name: ''
  street_post_directional_abbreviation: ''
  street_pre_directional_abbreviation: ''
  street_suffix_abbreviation: ''
  update_key_number: ''
  urbanization_city_state_key: ''
  zip_classification_code: ''
  zip_code: string
  zip_plus_4_code: string
}
type UsaResolveAddressResponse = {
  code: 2000
  message: 'Success'
  result: UspsAddress | UsaGlobalAddress
}
type GbrCleanseMatch = {
  confidence: number
  count: number
  fit: number
  locality_match: 'FULL' | 'PARTIAL' | 'INCORRECT' | 'MISSING' | 'NA'
  match: PafAddress | MrAddress | NybAddress | PafAliasAddress | WelshPafAddress
  organisation_match: 'FULL' | 'PARTIAL' | 'INCORRECT' | 'MISSING' | 'NA'
  post_town_match: 'FULL' | 'PARTIAL' | 'INCORRECT' | 'MISSING' | 'NA'
  postcode_match: 'FULL' | 'PARTIAL' | 'INCORRECT' | 'MISSING' | 'NA'
  premise_match: 'FULL' | 'PARTIAL' | 'INCORRECT' | 'MISSING' | 'NA'
  query: string
  thoroughfare_match: 'FULL' | 'PARTIAL' | 'INCORRECT' | 'MISSING' | 'NA'
}
type GbrCleanseNoMatch = {
  confidence: 0
  count: 0
  fit: 0
  locality_match: 'NO_MATCH'
  match: null
  organisation_match: 'NO_MATCH'
  post_town_match: 'NO_MATCH'
  postcode_match: 'NO_MATCH'
  premise_match: 'NO_MATCH'
  query: string
  thoroughfare_match: 'NO_MATCH'
}
type CleanseResponse = {
  code: 2000
  message: 'Success'
  result: GbrCleanseMatch | GbrCleanseNoMatch
}
type UnauthorizedResponse = { code: number; message: string }
type RateLimitedResponse = { code: number; message: string }
type Email = {
  catchall: boolean
  deliverable: boolean
  disposable: boolean
  free: boolean
  result: 'deliverable' | 'not_deliverable'
  role: boolean
}
type UnknownEmail = {
  catchall: null
  deliverable: null
  disposable: null
  free: null
  result: 'unknown'
  role: null
}
type EmailResponse = { code: 2000; message: 'Success'; result: Email | UnknownEmail }
type NoContext = ''
type AvailableContexts = {
  description: string
  emoji: string
  iso_2: string
  iso_3: string
  rgeo: boolean
}[]
type ApiKey = { available: boolean; context: Context | NoContext; contexts: AvailableContexts }
type ApiKeyResponse = { code: 2000; message: 'Success'; result: ApiKey }
type UserTokenParam = string
type Config = { createdAt: string; name: string; payload: string; updatedAt: string }
type ConfigsResponse = { code: 2000; message: 'Success'; result: { configs: Config[] } }
type ConfigNewParam = { name: string; payload: string }
type ConfigResponse = { code: 2000; message: 'Success'; result: Config }
type ConfigParam = string
type NotFoundResponse = { code: number; message: string }
type ConfigUpdateParam = { payload?: string | undefined }
type ApiKeyAutomatedTopup = { enabled: boolean }
type ApiKeyCurrentPurchase = { consumed: number; expires: string; purchased: number }
type ApiKeyDailyLimit = { consumed: number; limit: number }
type ApiKeyDatasets = {
  ecad: boolean
  ecaf: boolean
  herewe?: boolean | undefined
  mr: boolean
  nyb: boolean
  paf: boolean
  pafa: boolean
  pafw: boolean
  usps: boolean
}
type ApiKeyIndividualLimit = { limit: number }
type ApiKeyNotifications = { emails: string[]; enabled: boolean }
type ApiKeyDetails = {
  allowed_urls: string[]
  automated_topups: ApiKeyAutomatedTopup
  current_purchases: ApiKeyCurrentPurchase[]
  daily_limit: ApiKeyDailyLimit
  datasets?: ApiKeyDatasets | undefined
  individual_limit: ApiKeyIndividualLimit
  lookups_remaining: number
  notifications?: ApiKeyNotifications | undefined
}
type ApiKeyDetailsResponse = { code: 2000; message: 'Success'; result: ApiKeyDetails }
type Licensee = {
  address?: string | undefined
  daily: { count: number; updatedAt: string }
  name?: string | undefined
  postcode?: string | undefined
  whitelist?: string[] | undefined
  createdAt: string
  id: string
  key: string
}
type LicenseesResponse = {
  code: 2000
  message: 'Success'
  result: { hasMore?: boolean | undefined; licensees?: Licensee[] | undefined }
}
type LicenseeEditable = {
  address?: string | undefined
  daily?: { limit?: number | undefined } | undefined
  name?: string | undefined
  postcode?: string | undefined
  whitelist?: string[] | undefined
}
type LicenseeResponse = { code: 2000; message: 'Success'; result: Licensee }
type LicenseeParam = string
type StartParam = number
type EndParam = number
type TagsParam = string
type KeyUsageResult = {
  dailyCount: { count: number; date: string }[]
  end: string
  start: string
  total: number
}
type ApiKeyUsageResponse = { code: 2000; message: 'Success'; result: KeyUsageResult }
type Carrier = {
  country: string | null
  name: string | null
  network_code: string | null
  network_type:
    | 'mobile'
    | 'landline'
    | 'landline_premium'
    | 'landline_tollfree'
    | 'virtual'
    | 'unknown'
    | 'pager'
} | null
type PhoneNumber = {
  country: string
  current_carrier: Carrier
  international_format: string
  iso_country: string
  iso_country_2: string
  national_format: string
  original_carrier: Carrier
  valid: true
}
type InvalidPhoneNumber = {
  country: null
  current_carrier?: null | undefined
  international_format: null
  iso_country: null
  iso_country_2: null
  national_format: null
  original_carrier?: null | undefined
  valid: false
}
type PhoneNumberResponse = {
  code: 2000
  message: 'Success'
  result: PhoneNumber | InvalidPhoneNumber
}
type CountryIsoParam = string
type BiasCountryIsoParam = string
type PlaceCountryIso = string
type PlaceDescriptiveName = string
type PlaceId = string
type PlaceName = string
type PlaceSuggestion = {
  country_iso: PlaceCountryIso
  descriptive_name: PlaceDescriptiveName
  id: PlaceId
  name: PlaceName
}
type PlaceResponse = { code: 2000; message: 'Success'; result: { hits: PlaceSuggestion[] } }
type GeonamesPlace = {
  admin1_code?: string | undefined
  admin1_geonameid?: (number | null) | undefined
  admin1_name?: string | undefined
  admin2_code?: string | undefined
  admin2_geonameid?: (number | null) | undefined
  admin2_name?: string | undefined
  admin3_code?: string | undefined
  admin4_code?: string | undefined
  alternatenames?: string[] | undefined
  asciiname?: string | undefined
  cc2?: string[] | undefined
  country_code?: string | undefined
  dataset?: 'geonames' | undefined
  dem?: (number | null) | undefined
  elevation?: (number | null) | undefined
  feature_class?: 'A' | 'H' | 'L' | 'P' | 'R' | 'S' | 'T' | 'U' | 'V' | undefined
  feature_code?: string | undefined
  geonameid?: number | undefined
  id?: string | undefined
  latitude?: Latitude | undefined
  longitude?: Longitude | undefined
  modification_date?: string | undefined
  name?: string | undefined
  population?: string | undefined
  timezone?: string | undefined
}
type Place = {
  country_iso: PlaceCountryIso
  dataset: 'geonames'
  descriptive_name: PlaceDescriptiveName
  id: string
  language: Language
  latitude: Latitude
  longitude: Longitude
  name: PlaceName
  native?: GeonamesPlace | undefined
}
type ResolvePlaceResponse = { code: 2000; message: 'Success'; result: Place }
type PostcodeResponse = {
  code: 2000
  message: 'Success'
  result: (
    | PafAddress
    | MrAddress
    | NybAddress
    | PafAliasAddress
    | WelshPafAddress
    | GbrGlobalAddress
  )[]
}
type UDPRNResponse = { code: 2000; message: 'Success'; result: PafAddress | NybAddress }
type UMPRNResponse = { code: 2000; message: 'Success'; result: MrAddress }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/addresses': {
      $get:
        | {
            input: {
              query: {
                api_key: ApiKeyParam
                query?: string | undefined
                limit?: LimitParam | undefined
                page?: PageParam | undefined
                filter?: FilterParam | undefined
                lon?: AddressLongitudeParam | undefined
                lat?: AddressLatitudeParam | undefined
                postcode_outward?: PostcodeOutwardParam | undefined
                postcode?: PostcodeParam | undefined
                postcode_area?: PostcodeAreaParam | undefined
                postcode_sector?: PostcodeSectorParam | undefined
                post_town?: PostTownParam | undefined
                uprn?: UPRNParam | undefined
                country?: CountryParam | undefined
                postcode_type?: PostcodeTypeParam | undefined
                su_organisation_indicator?: SmallUserParam | undefined
                box?: BoxParam | undefined
                bias_postcode_outward?: BiasPostcodeOutwardParam | undefined
                bias_postcode?: BiasPostcodeParam | undefined
                bias_postcode_area?: BiasPostcodeAreaParam | undefined
                bias_postcode_sector?: BiasPostcodeSectorParam | undefined
                bias_post_town?: BiasPosttownParam | undefined
                bias_thoroughfare?: BiasThoroughfareParam | undefined
                bias_country?: BiasCountryParam | undefined
                bias_lonlat?: BiasLonLatParam | undefined
              }
            }
            output: AddressResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key: ApiKeyParam
                query?: string | undefined
                limit?: LimitParam | undefined
                page?: PageParam | undefined
                filter?: FilterParam | undefined
                lon?: AddressLongitudeParam | undefined
                lat?: AddressLatitudeParam | undefined
                postcode_outward?: PostcodeOutwardParam | undefined
                postcode?: PostcodeParam | undefined
                postcode_area?: PostcodeAreaParam | undefined
                postcode_sector?: PostcodeSectorParam | undefined
                post_town?: PostTownParam | undefined
                uprn?: UPRNParam | undefined
                country?: CountryParam | undefined
                postcode_type?: PostcodeTypeParam | undefined
                su_organisation_indicator?: SmallUserParam | undefined
                box?: BoxParam | undefined
                bias_postcode_outward?: BiasPostcodeOutwardParam | undefined
                bias_postcode?: BiasPostcodeParam | undefined
                bias_postcode_area?: BiasPostcodeAreaParam | undefined
                bias_postcode_sector?: BiasPostcodeSectorParam | undefined
                bias_post_town?: BiasPosttownParam | undefined
                bias_thoroughfare?: BiasThoroughfareParam | undefined
                bias_country?: BiasCountryParam | undefined
                bias_lonlat?: BiasLonLatParam | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                api_key: ApiKeyParam
                query?: string | undefined
                limit?: LimitParam | undefined
                page?: PageParam | undefined
                filter?: FilterParam | undefined
                lon?: AddressLongitudeParam | undefined
                lat?: AddressLatitudeParam | undefined
                postcode_outward?: PostcodeOutwardParam | undefined
                postcode?: PostcodeParam | undefined
                postcode_area?: PostcodeAreaParam | undefined
                postcode_sector?: PostcodeSectorParam | undefined
                post_town?: PostTownParam | undefined
                uprn?: UPRNParam | undefined
                country?: CountryParam | undefined
                postcode_type?: PostcodeTypeParam | undefined
                su_organisation_indicator?: SmallUserParam | undefined
                box?: BoxParam | undefined
                bias_postcode_outward?: BiasPostcodeOutwardParam | undefined
                bias_postcode?: BiasPostcodeParam | undefined
                bias_postcode_area?: BiasPostcodeAreaParam | undefined
                bias_postcode_sector?: BiasPostcodeSectorParam | undefined
                bias_post_town?: BiasPosttownParam | undefined
                bias_thoroughfare?: BiasThoroughfareParam | undefined
                bias_country?: BiasCountryParam | undefined
                bias_lonlat?: BiasLonLatParam | undefined
              }
            }
            output: PostcodeNotFoundResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/autocomplete/addresses': {
      $get:
        | {
            input: {
              query: {
                api_key?: ApiKeyParam | undefined
                query?: string | undefined
                context?: Context | undefined
                limit?: LimitParam | undefined
                postcode_outward?: PostcodeOutwardParam | undefined
                postcode?: PostcodeParam | undefined
                postcode_area?: PostcodeAreaParam | undefined
                postcode_sector?: PostcodeSectorParam | undefined
                post_town?: PostTownParam | undefined
                uprn?: UPRNParam | undefined
                country?: CountryParam | undefined
                postcode_type?: PostcodeTypeParam | undefined
                su_organisation_indicator?: SmallUserParam | undefined
                box?: BoxParam | undefined
                bias_postcode_outward?: BiasPostcodeOutwardParam | undefined
                bias_postcode?: BiasPostcodeParam | undefined
                bias_postcode_area?: BiasPostcodeAreaParam | undefined
                bias_postcode_sector?: BiasPostcodeSectorParam | undefined
                bias_post_town?: BiasPosttownParam | undefined
                bias_thoroughfare?: BiasThoroughfareParam | undefined
                bias_country?: BiasCountryParam | undefined
                bias_lonlat?: BiasLonLatParam | undefined
                bias_ip?: BiasIpParam | undefined
              }
            }
            output: AutocompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key?: ApiKeyParam | undefined
                query?: string | undefined
                context?: Context | undefined
                limit?: LimitParam | undefined
                postcode_outward?: PostcodeOutwardParam | undefined
                postcode?: PostcodeParam | undefined
                postcode_area?: PostcodeAreaParam | undefined
                postcode_sector?: PostcodeSectorParam | undefined
                post_town?: PostTownParam | undefined
                uprn?: UPRNParam | undefined
                country?: CountryParam | undefined
                postcode_type?: PostcodeTypeParam | undefined
                su_organisation_indicator?: SmallUserParam | undefined
                box?: BoxParam | undefined
                bias_postcode_outward?: BiasPostcodeOutwardParam | undefined
                bias_postcode?: BiasPostcodeParam | undefined
                bias_postcode_area?: BiasPostcodeAreaParam | undefined
                bias_postcode_sector?: BiasPostcodeSectorParam | undefined
                bias_post_town?: BiasPosttownParam | undefined
                bias_thoroughfare?: BiasThoroughfareParam | undefined
                bias_country?: BiasCountryParam | undefined
                bias_lonlat?: BiasLonLatParam | undefined
                bias_ip?: BiasIpParam | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/autocomplete/addresses/:address/gbr': {
      $get:
        | {
            input: { param: { address: string } } & { query: { api_key?: ApiKeyParam | undefined } }
            output: GbrResolveAddressResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & { query: { api_key?: ApiKeyParam | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/autocomplete/addresses/:address/usa': {
      $get:
        | {
            input: { param: { address: string } } & { query: { api_key?: ApiKeyParam | undefined } }
            output: UsaResolveAddressResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & { query: { api_key?: ApiKeyParam | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/cleanse/addresses': {
      $post:
        | {
            input: { query: { api_key?: ApiKeyParam | undefined } } & { json: { query: string } }
            output: CleanseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { api_key?: ApiKeyParam | undefined } } & { json: { query: string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { api_key?: ApiKeyParam | undefined } } & { json: { query: string } }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { api_key?: ApiKeyParam | undefined } } & { json: { query: string } }
            output: RateLimitedResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/emails': {
      $get:
        | {
            input: { query: { api_key: ApiKeyParam; query: string } }
            output: EmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { api_key: ApiKeyParam; query: string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/keys/:key': {
      $get:
        | {
            input: { param: { key: ApiKeyParam } }
            output: ApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/keys/:key/configs': {
      $get:
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: ConfigsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: ConfigNewParam }
            output: ConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: ConfigNewParam }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: ConfigNewParam }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/keys/:key/configs/:config': {
      $delete:
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: { code: 2000; message: 'Success'; result: { deleted: number } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } }
            output: ConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: ConfigUpdateParam }
            output: ConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: ConfigUpdateParam }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: ConfigUpdateParam }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: ApiKeyParam; config: ConfigParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: ConfigUpdateParam }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/keys/:key/details': {
      $get:
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: ApiKeyDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/keys/:key/licensees': {
      $get:
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: {
                starting_after?: number | undefined
                user_token?: UserTokenParam | undefined
                limit?: LimitParam | undefined
                query?: string | undefined
              }
            }
            output: LicenseesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: {
                starting_after?: number | undefined
                user_token?: UserTokenParam | undefined
                limit?: LimitParam | undefined
                query?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: LicenseeEditable }
            output: LicenseeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: LicenseeEditable }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/keys/:key/licensees/:licensee': {
      $delete:
        | {
            input: { param: { key: ApiKeyParam; licensee: LicenseeParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: { code: 2000; message: 'Success'; result: { deleted: number } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam; licensee: LicenseeParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { key: ApiKeyParam; licensee: LicenseeParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: LicenseeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam; licensee: LicenseeParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { key: ApiKeyParam; licensee: LicenseeParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: LicenseeEditable }
            output: LicenseeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam; licensee: LicenseeParam } } & {
              query: { user_token?: UserTokenParam | undefined }
            } & { json: LicenseeEditable }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/keys/:key/lookups': {
      $get:
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: {
                start?: StartParam | undefined
                end?: EndParam | undefined
                licensee?: LicenseeParam | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: {
                start?: StartParam | undefined
                end?: EndParam | undefined
                licensee?: LicenseeParam | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/keys/:key/usage': {
      $get:
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: {
                start?: StartParam | undefined
                end?: EndParam | undefined
                tags?: TagsParam | undefined
                licensee?: LicenseeParam | undefined
              }
            }
            output: ApiKeyUsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: ApiKeyParam } } & {
              query: {
                start?: StartParam | undefined
                end?: EndParam | undefined
                tags?: TagsParam | undefined
                licensee?: LicenseeParam | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/phone_numbers': {
      $get:
        | {
            input: { query: { api_key: ApiKeyParam; query: string } }
            output: PhoneNumberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { api_key: ApiKeyParam; query: string } }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/places': {
      $get:
        | {
            input: {
              query: {
                api_key: ApiKeyParam
                query?: string | undefined
                country_iso?: CountryIsoParam | undefined
                bias_country_iso?: BiasCountryIsoParam | undefined
                bias_lonlat?: BiasLonLatParam | undefined
                bias_ip?: BiasIpParam | undefined
              }
            }
            output: PlaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                api_key: ApiKeyParam
                query?: string | undefined
                country_iso?: CountryIsoParam | undefined
                bias_country_iso?: BiasCountryIsoParam | undefined
                bias_lonlat?: BiasLonLatParam | undefined
                bias_ip?: BiasIpParam | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/places/$:place': {
      $get:
        | {
            input: { param: { place: string } } & { query: { api_key?: ApiKeyParam | undefined } }
            output: ResolvePlaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { place: string } } & { query: { api_key?: ApiKeyParam | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/postcodes/:postcode': {
      $get:
        | {
            input: { param: { postcode: PafPostcode } } & {
              query: {
                api_key?: ApiKeyParam | undefined
                filter?: FilterParam | undefined
                page?: PageParam | undefined
              }
            }
            output: PostcodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postcode: PafPostcode } } & {
              query: {
                api_key?: ApiKeyParam | undefined
                filter?: FilterParam | undefined
                page?: PageParam | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postcode: PafPostcode } } & {
              query: {
                api_key?: ApiKeyParam | undefined
                filter?: FilterParam | undefined
                page?: PageParam | undefined
              }
            }
            output: PostcodeNotFoundResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/udprn/:udprn': {
      $get:
        | {
            input: { param: { udprn: string } } & {
              query: { api_key?: ApiKeyParam | undefined; filter?: FilterParam | undefined }
            }
            output: UDPRNResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { udprn: string } } & {
              query: { api_key?: ApiKeyParam | undefined; filter?: FilterParam | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/umprn/:umprn': {
      $get:
        | {
            input: { param: { umprn: string } } & {
              query: { api_key?: ApiKeyParam | undefined; filter?: FilterParam | undefined }
            }
            output: UMPRNResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { umprn: string } } & {
              query: { api_key?: ApiKeyParam | undefined; filter?: FilterParam | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
