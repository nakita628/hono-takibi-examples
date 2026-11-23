type BodyCreatePrivateAllowlistOfTheUserV1AllowlistPrivatePost = {
  payload: {
    description: string
    name: string
    resource_type: 'UNKNOWN' | 'CIDR' | 'COUNTRY' | 'CONTINENT' | 'AS' | 'DATACENTER' | 'USERAGENT'
    tags: string[]
    ttl?: number | undefined
  }
}
type ValidationError = { loc: (string | number)[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type AclGroupOriginOutput = {
  created_at: number
  origin: string
  self: string
  status: 'INACTIVE' | 'ACTIVE' | 'EXPIRED'
  updated_at: number
}
type AclGroupOriginCollectionOutput = { lists: AclGroupOriginOutput[]; self: string }
type PrivateAclGroupListOutput = {
  content: string
  created_at: number
  description: string
  list_type: 'UNKNOWN' | 'ALLOW' | 'DENY'
  name: string
  origins?: AclGroupOriginCollectionOutput | undefined
  resource_type: 'UNKNOWN' | 'CIDR' | 'COUNTRY' | 'CONTINENT' | 'AS' | 'DATACENTER' | 'USERAGENT'
  self: string
  tags: string[]
  ttl?: number | undefined
  updated_at: number
}
type PrivateAclGroupListCollectionOutput = { lists: PrivateAclGroupListOutput[]; self: string }
type AclListCollectionOutput = {
  asns?: string[] | undefined
  cidrs?: string[] | undefined
  continents?: string[] | undefined
  countries?: string[] | undefined
  datacenters?: string[] | undefined
  reported?: string[] | undefined
  self: string
}
type BodyUpdatePrivateAllowlistOfTheUserV1AllowlistPrivateAllowlistIdPut = {
  description?: string | undefined
  name?: string | undefined
  tags?: string[] | undefined
  ttl?: number | undefined
}
type PrivateAclListCollectionOutput = {
  asns?: number[] | undefined
  cidrs?: (string | string)[] | undefined
  continents?: ('AF' | 'AN' | 'AS' | 'EU' | 'NA' | 'OC' | 'SA')[] | undefined
  countries?:
    | (
        | 'AW'
        | 'AF'
        | 'AO'
        | 'AI'
        | 'AX'
        | 'AL'
        | 'AD'
        | 'AE'
        | 'AR'
        | 'AM'
        | 'AS'
        | 'AQ'
        | 'TF'
        | 'AG'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BI'
        | 'BE'
        | 'BJ'
        | 'BQ'
        | 'BF'
        | 'BD'
        | 'BG'
        | 'BH'
        | 'BS'
        | 'BA'
        | 'BL'
        | 'BY'
        | 'BZ'
        | 'BM'
        | 'BO'
        | 'BR'
        | 'BB'
        | 'BN'
        | 'BT'
        | 'BV'
        | 'BW'
        | 'CF'
        | 'CA'
        | 'CC'
        | 'CH'
        | 'CL'
        | 'CN'
        | 'CI'
        | 'CM'
        | 'CD'
        | 'CG'
        | 'CK'
        | 'CO'
        | 'KM'
        | 'CV'
        | 'CR'
        | 'CU'
        | 'CW'
        | 'CX'
        | 'KY'
        | 'CY'
        | 'CZ'
        | 'DE'
        | 'DJ'
        | 'DM'
        | 'DK'
        | 'DO'
        | 'DZ'
        | 'EC'
        | 'EG'
        | 'ER'
        | 'EH'
        | 'ES'
        | 'EE'
        | 'ET'
        | 'FI'
        | 'FJ'
        | 'FK'
        | 'FR'
        | 'FO'
        | 'FM'
        | 'GA'
        | 'GB'
        | 'GE'
        | 'GG'
        | 'GH'
        | 'GI'
        | 'GN'
        | 'GP'
        | 'GM'
        | 'GW'
        | 'GQ'
        | 'GR'
        | 'GD'
        | 'GL'
        | 'GT'
        | 'GF'
        | 'GU'
        | 'GY'
        | 'HK'
        | 'HM'
        | 'HN'
        | 'HR'
        | 'HT'
        | 'HU'
        | 'ID'
        | 'IM'
        | 'IN'
        | 'IO'
        | 'IE'
        | 'IR'
        | 'IQ'
        | 'IS'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JE'
        | 'JO'
        | 'JP'
        | 'KZ'
        | 'KE'
        | 'KG'
        | 'KH'
        | 'KI'
        | 'KN'
        | 'KR'
        | 'KW'
        | 'LA'
        | 'LB'
        | 'LR'
        | 'LY'
        | 'LC'
        | 'LI'
        | 'LK'
        | 'LS'
        | 'LT'
        | 'LU'
        | 'LV'
        | 'MO'
        | 'MF'
        | 'MA'
        | 'MC'
        | 'MD'
        | 'MG'
        | 'MV'
        | 'MX'
        | 'MH'
        | 'MK'
        | 'ML'
        | 'MT'
        | 'MM'
        | 'ME'
        | 'MN'
        | 'MP'
        | 'MZ'
        | 'MR'
        | 'MS'
        | 'MQ'
        | 'MU'
        | 'MW'
        | 'MY'
        | 'YT'
        | 'NA'
        | 'NC'
        | 'NE'
        | 'NF'
        | 'NG'
        | 'NI'
        | 'NU'
        | 'NL'
        | 'NO'
        | 'NP'
        | 'NR'
        | 'NZ'
        | 'OM'
        | 'PK'
        | 'PA'
        | 'PN'
        | 'PE'
        | 'PH'
        | 'PW'
        | 'PG'
        | 'PL'
        | 'PR'
        | 'KP'
        | 'PT'
        | 'PY'
        | 'PS'
        | 'PF'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SA'
        | 'SD'
        | 'SN'
        | 'SG'
        | 'GS'
        | 'SH'
        | 'SJ'
        | 'SB'
        | 'SL'
        | 'SV'
        | 'SM'
        | 'SO'
        | 'PM'
        | 'RS'
        | 'SS'
        | 'ST'
        | 'SR'
        | 'SK'
        | 'SI'
        | 'SE'
        | 'SZ'
        | 'SX'
        | 'SC'
        | 'SY'
        | 'TC'
        | 'TD'
        | 'TG'
        | 'TH'
        | 'TJ'
        | 'TK'
        | 'TM'
        | 'TL'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TV'
        | 'TW'
        | 'TZ'
        | 'UG'
        | 'UA'
        | 'UM'
        | 'UY'
        | 'US'
        | 'UZ'
        | 'VA'
        | 'VC'
        | 'VE'
        | 'VG'
        | 'VI'
        | 'VN'
        | 'VU'
        | 'WF'
        | 'WS'
        | 'YE'
        | 'ZA'
        | 'ZM'
        | 'ZW'
      )[]
    | undefined
  datacenters?: string[] | undefined
  self: string
  user_agents?: string[] | undefined
}
type BodyUpdatePrivateContentOfTheAllowlistOfTheUserV1AllowlistPrivateAllowlistIdContentPut = {
  append?: string[] | undefined
  remove?: string[] | undefined
}
type BodyChangeStatusOfTheOriginAllowlistV1AllowlistPrivateAllowlistIdOriginPut = {
  origin: string
  status: 'ACTIVE' | 'INACTIVE' | 'DELETED'
}
type PublicAclGroupListOutput = {
  created_at: number
  description: string
  list_type: 'UNKNOWN' | 'ALLOW' | 'DENY'
  name: string
  origins?: AclGroupOriginCollectionOutput | undefined
  resource_type: 'UNKNOWN' | 'CIDR' | 'COUNTRY' | 'CONTINENT' | 'AS' | 'DATACENTER' | 'USERAGENT'
  self: string
  status?: 'INACTIVE' | 'ACTIVE' | 'EXPIRED' | undefined
  tags: string[]
  ttl?: number | undefined
  updated_at: number
}
type PublicAclGroupListCollectionOutput = { lists: PublicAclGroupListOutput[]; self: string }
type BodyChangeStatusOfTheAllowlistV1AllowlistPublicAllowlistIdPut = {
  status: 'ACTIVE' | 'INACTIVE'
}
type BodyChangeStatusOfTheOriginAllowlistV1AllowlistPublicAllowlistIdOriginPut = {
  origin: string
  status: 'ACTIVE' | 'INACTIVE' | 'DELETED'
}
type AutonomousSystemPrefixOutput = {
  asn?: string | undefined
  description: string
  mantainer: string
  object_type: string
  registry_date?: string | undefined
  registry_status?: string | undefined
  risk?: 'UNKNOWN' | 'LOW' | 'MEDIUM' | 'HIGH' | undefined
  score?: number | undefined
  self?: string | undefined
}
type BodyQueryAsnPrefixInformationV1AsnPrefixPost = { prefix: string }
type AutonomousSystemRegistryOutput = { code: string; name: string; self: string }
type AutonomousSystemStatusOutput = { code: string; name: string; self: string }
type AutonomousSystemOutput = {
  country_code:
    | 'AF'
    | 'AP'
    | 'AX'
    | 'AL'
    | 'DZ'
    | 'AS'
    | 'AD'
    | 'AO'
    | 'AI'
    | 'AQ'
    | 'AG'
    | 'AR'
    | 'AM'
    | 'AW'
    | 'AU'
    | 'AT'
    | 'AZ'
    | 'BS'
    | 'BH'
    | 'BD'
    | 'BB'
    | 'BY'
    | 'BE'
    | 'BZ'
    | 'BJ'
    | 'BM'
    | 'BT'
    | 'BO'
    | 'BQ'
    | 'BA'
    | 'BW'
    | 'BV'
    | 'BR'
    | 'IO'
    | 'BN'
    | 'BG'
    | 'BF'
    | 'BI'
    | 'CV'
    | 'KH'
    | 'CM'
    | 'CA'
    | 'KY'
    | 'CF'
    | 'TD'
    | 'CL'
    | 'CN'
    | 'CX'
    | 'CC'
    | 'CO'
    | 'KM'
    | 'CG'
    | 'CD'
    | 'CK'
    | 'CR'
    | 'CI'
    | 'HR'
    | 'CU'
    | 'CW'
    | 'CY'
    | 'CZ'
    | 'DK'
    | 'DJ'
    | 'DM'
    | 'DO'
    | 'EC'
    | 'EG'
    | 'SV'
    | 'GQ'
    | 'ER'
    | 'EE'
    | 'ET'
    | 'FK'
    | 'FO'
    | 'FJ'
    | 'FI'
    | 'FR'
    | 'GF'
    | 'PF'
    | 'TF'
    | 'GA'
    | 'GM'
    | 'GE'
    | 'DE'
    | 'GH'
    | 'GI'
    | 'GR'
    | 'GL'
    | 'GD'
    | 'GP'
    | 'GU'
    | 'GT'
    | 'GG'
    | 'GN'
    | 'GW'
    | 'GY'
    | 'HT'
    | 'HM'
    | 'VA'
    | 'HN'
    | 'HK'
    | 'HU'
    | 'IS'
    | 'IN'
    | 'ID'
    | 'IR'
    | 'IQ'
    | 'IE'
    | 'IM'
    | 'IL'
    | 'IT'
    | 'JM'
    | 'JP'
    | 'JE'
    | 'JO'
    | 'KZ'
    | 'KE'
    | 'KI'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KG'
    | 'LA'
    | 'LV'
    | 'LB'
    | 'LS'
    | 'LR'
    | 'LY'
    | 'LI'
    | 'LT'
    | 'LU'
    | 'MO'
    | 'MK'
    | 'MG'
    | 'MW'
    | 'MY'
    | 'MV'
    | 'ML'
    | 'MT'
    | 'MH'
    | 'MQ'
    | 'MR'
    | 'MU'
    | 'YT'
    | 'MX'
    | 'FM'
    | 'MD'
    | 'MC'
    | 'MN'
    | 'ME'
    | 'MS'
    | 'MA'
    | 'MZ'
    | 'MM'
    | 'NA'
    | 'NR'
    | 'NP'
    | 'NL'
    | 'NC'
    | 'NZ'
    | 'NI'
    | 'NE'
    | 'NG'
    | 'NU'
    | 'NF'
    | 'MP'
    | 'NO'
    | 'OM'
    | 'PK'
    | 'PW'
    | 'PS'
    | 'PA'
    | 'PG'
    | 'PY'
    | 'PE'
    | 'PH'
    | 'PN'
    | 'PL'
    | 'PT'
    | 'PR'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RU'
    | 'RW'
    | 'BL'
    | 'SH'
    | 'KN'
    | 'LC'
    | 'MF'
    | 'PM'
    | 'VC'
    | 'WS'
    | 'SM'
    | 'ST'
    | 'SA'
    | 'SN'
    | 'RS'
    | 'SC'
    | 'SL'
    | 'SG'
    | 'SX'
    | 'SK'
    | 'SI'
    | 'SB'
    | 'SO'
    | 'ZA'
    | 'GS'
    | 'SS'
    | 'ES'
    | 'LK'
    | 'SD'
    | 'SR'
    | 'SJ'
    | 'SZ'
    | 'SE'
    | 'CH'
    | 'SY'
    | 'TW'
    | 'TJ'
    | 'TZ'
    | 'TH'
    | 'TL'
    | 'TG'
    | 'TK'
    | 'TO'
    | 'TT'
    | 'TN'
    | 'TR'
    | 'TM'
    | 'TC'
    | 'TV'
    | 'UG'
    | 'UA'
    | 'AE'
    | 'GB'
    | 'US'
    | 'UM'
    | 'UY'
    | 'UZ'
    | 'VU'
    | 'VE'
    | 'VN'
    | 'VG'
    | 'VI'
    | 'WF'
    | 'EH'
    | 'YE'
    | 'ZM'
    | 'ZW'
    | 'ZZ'
    | 'EU'
    | 'RESERVED BY RFC6793'
  description?: string | undefined
  name: string
  prefixes: string
  registry: string
  registry_date?: string | undefined
  risk?: 'UNKNOWN' | 'LOW' | 'MEDIUM' | 'HIGH' | undefined
  score?: number | undefined
  self?: string | undefined
  status: string
}
type AutonomousSystemPrefixesOutput = {
  asn?: string | undefined
  prefixes_v4: AutonomousSystemPrefixOutput[]
  prefixes_v6: AutonomousSystemPrefixOutput[]
  self: string
}
type IPAssessmentOutput = {
  allowlisted: string
  asn: string
  asn_prefix: string
  datacenter: string
  datacenter_prefix: string
  datasets: string[]
  denylisted: string
  first_appearance: string[]
  last_appearance: string[]
  reason: string
  risk: 'UNKNOWN' | 'LOW' | 'MEDIUM' | 'HIGH'
  score?: number | undefined
  self?: string | undefined
  sources: string[]
}
type IPAssessmentCollectionOutput = { results: IPAssessmentOutput[]; self: string }
type BodyAssessIpSetCsvV1AssessIpCsvPost = { csv_file: File }
type DatacenterPrefixOutput = {
  datacenter: string
  ip_abuse_total?: number | undefined
  max_score?: number | undefined
  min_score?: number | undefined
  risk?: 'UNKNOWN' | 'LOW' | 'MEDIUM' | 'HIGH' | undefined
  score?: number | undefined
  self?: string | undefined
}
type BodyQueryDatacenterPrefixInformationV1DatacenterPrefixPost = { prefix: string }
type DatacenterOutput = {
  asn: string
  description?: string | undefined
  name: string
  prefixes: string
  risk?: 'UNKNOWN' | 'LOW' | 'MEDIUM' | 'HIGH' | undefined
  score?: number | undefined
  self: string
  source: string
  status?: 'disabled' | 'enabled' | undefined
}
type DatacenterPrefixesOutput = {
  prefixes_v4: DatacenterPrefixOutput[]
  prefixes_v6: DatacenterPrefixOutput[]
  self: string
}
type DatasetTypeOutput = {
  description: string
  items: number
  name: string
  self: string
  status: 'ENABLED' | 'DISABLED'
  type: 'ip' | 'domain'
}
type DatasetTypeCollectionOutput = { self: string; types: DatasetTypeOutput[] }
type BodyCreatePrivateDenylistOfTheUserV1DenylistPrivatePost = {
  payload: {
    description: string
    name: string
    resource_type: 'UNKNOWN' | 'CIDR' | 'COUNTRY' | 'CONTINENT' | 'AS' | 'DATACENTER' | 'USERAGENT'
    tags: string[]
    ttl?: number | undefined
  }
}
type BodyUpdatePrivateDenylistOfTheUserV1DenylistPrivateDenylistIdPut = {
  description?: string | undefined
  name?: string | undefined
  tags?: string[] | undefined
  ttl?: number | undefined
}
type BodyUpdatePrivateContentOfTheDenylistOfTheUserV1DenylistPrivateDenylistIdContentPut = {
  append?: string[] | undefined
  remove?: string[] | undefined
}
type BodyChangeStatusOfTheOriginDenylistV1DenylistPrivateDenylistIdOriginPut = {
  origin: string
  status: 'ACTIVE' | 'INACTIVE' | 'DELETED'
}
type BodyChangeStatusOfTheDenylistV1DenylistPublicDenylistIdPut = { status: 'ACTIVE' | 'INACTIVE' }
type BodyChangeStatusOfTheOriginDenylistV1DenylistPublicDenylistIdOriginPut = {
  origin: string
  status: 'ACTIVE' | 'INACTIVE' | 'DELETED'
}
type IPListOutput = {
  dataset: string
  expiry: number
  last_report: number
  protocol: 'ALL' | 'IPV4' | 'IPV6'
  self: string
  tags?: string[] | undefined
  total_reports: number
}
type IPListCollectionOutput = { addresses: IPListOutput[]; self: string }
type GeoIPOutput = {
  accuracy_radius: number
  asn_country_iso_code: string
  city_geoname_code: number
  city_name: string
  continent_code: string
  country_iso_code: string
  hostnames: string[]
  latitude: number
  longitude: number
  postal_code: string
  region_geoname_code: number
  region_name: string
  self?: string | undefined
  time_zone: string
}
type GeoIPCollectionOutput = { results: GeoIPOutput[]; self: string }
type BodyAssessIpSetCsvV1GeoCsvPost = { csv_file: File }
type IPLogOutput = {
  action: 'ADD' | 'DELETE'
  cidr?: string | undefined
  dataset: string
  lapse: '1H' | '6H' | '12H' | '1D' | '7D' | '30D' | '90D' | '180D' | '365D'
  risk: 'UNKNOWN' | 'LOW' | 'MEDIUM' | 'HIGH'
  score?: number | undefined
  self?: string | undefined
  source: string
  timestamp: number
}
type IPLogCollectionOutput = { logs: IPLogOutput[]; self?: string | undefined }
type OriginOutput = {
  actions: string
  addresses: string
  config: { [x: string]: unknown }
  cookies: string
  created_at: number
  logs: string
  origin: string
  scripts: string
  self: string
  status: 'ENABLED' | 'DISABLED'
  token: string
  updated_at: number
}
type BodyUpdateConfigurationOriginV1OriginPut = {
  config?: { [x: string]: unknown } | undefined
  origin: string
}
type OriginAddressStatusOutput = {
  address: string
  created_at?: number | undefined
  expiry?: number | undefined
  log_id?: string | undefined
  status: string
  updated_at?: number | undefined
}
type OriginAddressStatusCollectionOutput = {
  addresses: OriginAddressStatusOutput[]
  page: number
  page_size: number
  self: string
}
type OriginCollectionOutput = { origins: OriginOutput[]; self: string }
type OriginClientAnalysisOutput = {
  client_browser: number
  client_crawler: number
  client_email: number
  client_library: number
  client_mobile_browser: number
  client_multimedia_player: number
  client_offline_browser: number
  client_total: number
  client_ua_anonymizer: number
  client_unrecognized: number
  client_validator: number
  client_wap_browser: number
  crawler_feed_fetcher: number
  crawler_link_checker: number
  crawler_marketing: number
  crawler_screenshot_creator: number
  crawler_search_engine_bot: number
  crawler_site_monitor: number
  crawler_speed_tester: number
  crawler_tool: number
  crawler_total: number
  crawler_uncategorised: number
  crawler_unrecognized: number
  crawler_virus_scanner: number
  crawler_vulnerability_scanner: number
  crawler_web_scraper: number
  timestamp: number
  total: number
}
type OriginClientAnalysisCollectionOutput = {
  data: OriginClientAnalysisOutput[]
  from_timestamp: number
  interval: string
  self: string
  to_timestamp: number
}
type OriginCookieIdStatusOutput = {
  cookie_id: string
  created_at?: number | undefined
  expiry?: number | undefined
  log_id?: string | undefined
  status: string
  updated_at?: number | undefined
}
type OriginCookieIdStatusCollectionOutput = {
  cookie_ids: OriginCookieIdStatusOutput[]
  page: number
  page_size: number
  self: string
}
type OriginScriptsOutput = { detection: string; self: string }
type BodyQueryOriginStatusV1OriginStatusPost = {
  address?: string | string | undefined
  cookie_id?: string | undefined
}
type OriginStatusOutput = {
  address?: OriginAddressStatusOutput | undefined
  cookie_id?: OriginCookieIdStatusOutput | undefined
  self: string
}
type OriginStatusDetailsOutput = {
  cardinality: number
  description: string
  self: string
  status: string
}
type OriginStatusDetailsCollectionOutput = { list: OriginStatusDetailsOutput[]; self: string }
type OriginTrafficAnalysisOutput = {
  asn_risky: number
  bots: number
  datacenters: number
  denylists: number
  network_country_mismatches: number
  score_high: number
  timestamp: number
  total: number
  webdrivers: number
}
type OriginTrafficAnalysisCollectionOutput = {
  data: OriginTrafficAnalysisOutput[]
  from_timestamp: number
  interval: string
  self: string
  to_timestamp: number
}
type BodyDeleteTokenV1OriginTokenDelete = { origin_token_id: string }
type BodyQueryOriginTokenInfoV1OriginTokenPost = { origin_token_id: string }
type OriginTokenOutput = {
  created_at: number
  origin: string
  region_id: string
  self: string
  status: 'ENABLED' | 'DISABLED'
  updated_at: number
}
type OriginTokenCollectionOutput = { self: string; tokens: OriginTokenOutput[] }
type BodyDisableOriginTokenV1OriginTokenDisablePut = { origin_token_id: string }
type BodyEnableOriginTokenV1OriginTokenEnablePut = { origin_token_id: string }
type OriginTokenInput = { origin: string }
type V1ModelsSourceSourceOutput = {
  dataset: string
  description: string
  maximum_risk: 'UNKNOWN' | 'LOW' | 'MEDIUM' | 'HIGH'
  maximum_score: number
  minimum_risk: 'UNKNOWN' | 'LOW' | 'MEDIUM' | 'HIGH'
  minimum_score: number
  name: string
  refresh: '1H' | '6H' | '12H' | '1D' | '7D' | '30D' | '90D' | '180D' | '365D'
  self: string
  source: string
  time_ranges: string[]
  updated_at: number
  url: string
}
type SourceCollectionOutput = { self: string; sources: V1ModelsSourceSourceOutput[] }
type SourceTimeRangeOutput = {
  items: number
  lapse: '1H' | '6H' | '12H' | '1D' | '7D' | '30D' | '90D' | '180D' | '365D'
  risk: 'UNKNOWN' | 'LOW' | 'MEDIUM' | 'HIGH'
  score: number
  self: string
  source: string
  updated_at: number
}
type TokenOutput = {
  created_at: number
  last_minute_bucket_init_value: number
  last_minute_bucket_refill_ratio: number
  last_minute_bucket_refresh: number
  last_minute_bucket_value: number
  last_month_bucket_init_value: number
  last_month_bucket_refresh: number
  last_month_bucket_value: number
  region_id: string
  self: string
  status: 'ENABLED' | 'DISABLED'
  updated_at: number
}
type V1ModelsTokenSourceOutput = {
  address: string
  body: string
  method: string
  status_code: number
  ua_string: string
  uri: string
}
type ActivityOutput = {
  created_at: number
  data: { [x: string]: unknown }
  description: string
  event: string
  self: string
  source: V1ModelsTokenSourceOutput
}
type ActivityCollectionOutput = {
  activities: ActivityOutput[]
  page: number
  page_size: number
  self: string
}
type UAOutput = {
  agent: string
  classification: 'CRAWLER' | 'CLIENT' | 'UNKNOWN'
  device: string
  engine: string
  family: string
  frequent: 'COMMON' | 'RARE' | 'VERY_RARE' | 'UNKNOWN'
  latest: string
  os: string
  self?: string | undefined
  string: string
  type: string
  vendor: string
  version: string
}
type UACollectionOutput = { results: UAOutput[]; self: string }
type BodyParseUserAgentsCsvV1UaCsvPost = { csv_file: File }
type DeviceOutput = { code: string; description: string }
type FamilyOutput = { code: string; description: string }
type OSOutput = { code: string; description: string; family: string; vendor: string }
type TypeOutput = { code: string; description: string; type: 'INTERACTIVE' | 'CRAWLER' | 'UNKNOWN' }
type VendorOutput = { code: string; description: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/allowlist/private': {
      $post:
        | {
            input: { json: BodyCreatePrivateAllowlistOfTheUserV1AllowlistPrivatePost }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BodyCreatePrivateAllowlistOfTheUserV1AllowlistPrivatePost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/allowlist/private/all': {
      $get: {
        input: {}
        output: PrivateAclGroupListCollectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/allowlist/private/all/:resource_type': {
      $get:
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: PrivateAclGroupListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/allowlist/private/ip/:address': {
      $get:
        | {
            input: { param: { address: string | string } }
            output: AclListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string | string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/allowlist/private/:allowlist_id': {
      $delete:
        | {
            input: { param: { allowlist_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { allowlist_id: string } }
            output: PrivateAclGroupListOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { allowlist_id: string } } & {
              json: BodyUpdatePrivateAllowlistOfTheUserV1AllowlistPrivateAllowlistIdPut
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } } & {
              json: BodyUpdatePrivateAllowlistOfTheUserV1AllowlistPrivateAllowlistIdPut
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/allowlist/private/:allowlist_id/content': {
      $delete:
        | {
            input: { param: { allowlist_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { allowlist_id: string } }
            output: PrivateAclListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { allowlist_id: string } } & {
              json: BodyUpdatePrivateContentOfTheAllowlistOfTheUserV1AllowlistPrivateAllowlistIdContentPut
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } } & {
              json: BodyUpdatePrivateContentOfTheAllowlistOfTheUserV1AllowlistPrivateAllowlistIdContentPut
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/allowlist/private/:allowlist_id/origin': {
      $put:
        | {
            input: { param: { allowlist_id: string } } & {
              json: BodyChangeStatusOfTheOriginAllowlistV1AllowlistPrivateAllowlistIdOriginPut
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } } & {
              json: BodyChangeStatusOfTheOriginAllowlistV1AllowlistPrivateAllowlistIdOriginPut
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/allowlist/public/all': {
      $get: {
        input: {}
        output: PublicAclGroupListCollectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/allowlist/public/all/:resource_type': {
      $get:
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: PublicAclGroupListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/allowlist/public/ip/:address': {
      $get:
        | {
            input: { param: { address: string | string } }
            output: AclListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string | string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/allowlist/public/owned': {
      $get: {
        input: {}
        output: PublicAclGroupListCollectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/allowlist/public/owned/:resource_type': {
      $get:
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: PublicAclGroupListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/allowlist/public/:allowlist_id': {
      $delete:
        | {
            input: { param: { allowlist_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { allowlist_id: string } }
            output: PublicAclGroupListOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { allowlist_id: string } } & {
              json: BodyChangeStatusOfTheAllowlistV1AllowlistPublicAllowlistIdPut
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } } & {
              json: BodyChangeStatusOfTheAllowlistV1AllowlistPublicAllowlistIdPut
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/allowlist/public/:allowlist_id/origin': {
      $put:
        | {
            input: { param: { allowlist_id: string } } & {
              json: BodyChangeStatusOfTheOriginAllowlistV1AllowlistPublicAllowlistIdOriginPut
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { allowlist_id: string } } & {
              json: BodyChangeStatusOfTheOriginAllowlistV1AllowlistPublicAllowlistIdOriginPut
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/asn/ip/:ip_address': {
      $get:
        | {
            input: { param: { ip_address: string } }
            output: AutonomousSystemPrefixOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ip_address: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/asn/prefix': {
      $post:
        | {
            input: { json: BodyQueryAsnPrefixInformationV1AsnPrefixPost }
            output: AutonomousSystemPrefixOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BodyQueryAsnPrefixInformationV1AsnPrefixPost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/asn/registry/all': {
      $get: {
        input: {}
        output: AutonomousSystemRegistryOutput[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/asn/registry/:code': {
      $get:
        | {
            input: { param: { code: 'iana' | 'arin' | 'ripencc' | 'afrinic' | 'apnic' | 'lacnic' } }
            output: AutonomousSystemRegistryOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: 'iana' | 'arin' | 'ripencc' | 'afrinic' | 'apnic' | 'lacnic' } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/asn/status/all': {
      $get: { input: {}; output: AutonomousSystemStatusOutput[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/asn/status/:code': {
      $get:
        | {
            input: { param: { code: 'assigned' | 'reserved' | 'available' | 'allocated' } }
            output: AutonomousSystemStatusOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: 'assigned' | 'reserved' | 'available' | 'allocated' } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/asn/:number': {
      $get:
        | {
            input: { param: { number: number } }
            output: AutonomousSystemOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/asn/:number/prefixes': {
      $get:
        | {
            input: { param: { number: number } }
            output: AutonomousSystemPrefixesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { number: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/assess/ip': {
      $post:
        | {
            input: { json: string[] }
            output: IPAssessmentCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: string[] }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/assess/ip/csv': {
      $post:
        | {
            input: { query: { strict_parse?: boolean | undefined } } & {
              form: BodyAssessIpSetCsvV1AssessIpCsvPost
            }
            output: IPAssessmentCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { strict_parse?: boolean | undefined } } & {
              form: BodyAssessIpSetCsvV1AssessIpCsvPost
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/assess/ip/:ip_address': {
      $get:
        | {
            input: { param: { ip_address: string } }
            output: IPAssessmentOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ip_address: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/datacenter/ip/:ip_address': {
      $get:
        | {
            input: { param: { ip_address: string } }
            output: DatacenterPrefixOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ip_address: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/datacenter/prefix': {
      $post:
        | {
            input: { json: BodyQueryDatacenterPrefixInformationV1DatacenterPrefixPost }
            output: DatacenterPrefixOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BodyQueryDatacenterPrefixInformationV1DatacenterPrefixPost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/datacenter/:datacenter_id': {
      $get:
        | {
            input: { param: { datacenter_id: string } }
            output: DatacenterOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datacenter_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/datacenter/:datacenter_id/prefixes': {
      $get:
        | {
            input: { param: { datacenter_id: string } }
            output: DatacenterPrefixesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datacenter_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataset/ip': {
      $get: { input: {}; output: DatasetTypeCollectionOutput; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/dataset/ip/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: DatasetTypeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/private': {
      $post:
        | {
            input: { json: BodyCreatePrivateDenylistOfTheUserV1DenylistPrivatePost }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BodyCreatePrivateDenylistOfTheUserV1DenylistPrivatePost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/private/all': {
      $get: {
        input: {}
        output: PrivateAclGroupListCollectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/denylist/private/all/:resource_type': {
      $get:
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: PrivateAclGroupListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/private/ip/:address': {
      $get:
        | {
            input: { param: { address: string | string } }
            output: AclListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string | string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/private/:denylist_id': {
      $delete:
        | {
            input: { param: { denylist_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { denylist_id: string } }
            output: PrivateAclGroupListOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { denylist_id: string } } & {
              json: BodyUpdatePrivateDenylistOfTheUserV1DenylistPrivateDenylistIdPut
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } } & {
              json: BodyUpdatePrivateDenylistOfTheUserV1DenylistPrivateDenylistIdPut
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/private/:denylist_id/content': {
      $delete:
        | {
            input: { param: { denylist_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { denylist_id: string } }
            output: PrivateAclListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { denylist_id: string } } & {
              json: BodyUpdatePrivateContentOfTheDenylistOfTheUserV1DenylistPrivateDenylistIdContentPut
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } } & {
              json: BodyUpdatePrivateContentOfTheDenylistOfTheUserV1DenylistPrivateDenylistIdContentPut
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/private/:denylist_id/origin': {
      $put:
        | {
            input: { param: { denylist_id: string } } & {
              json: BodyChangeStatusOfTheOriginDenylistV1DenylistPrivateDenylistIdOriginPut
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } } & {
              json: BodyChangeStatusOfTheOriginDenylistV1DenylistPrivateDenylistIdOriginPut
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/public/all': {
      $get: {
        input: {}
        output: PublicAclGroupListCollectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/denylist/public/all/:resource_type': {
      $get:
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: PublicAclGroupListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/public/ip/:address': {
      $get:
        | {
            input: { param: { address: string | string } }
            output: AclListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string | string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/public/owned': {
      $get: {
        input: {}
        output: PublicAclGroupListCollectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/denylist/public/owned/:resource_type': {
      $get:
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: PublicAclGroupListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                resource_type: 'cidr' | 'country' | 'continent' | 'as' | 'datacenter' | 'useragent'
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/public/:denylist_id': {
      $delete:
        | {
            input: { param: { denylist_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { denylist_id: string } }
            output: PublicAclGroupListOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { denylist_id: string } } & {
              json: BodyChangeStatusOfTheDenylistV1DenylistPublicDenylistIdPut
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } } & {
              json: BodyChangeStatusOfTheDenylistV1DenylistPublicDenylistIdPut
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/public/:denylist_id/origin': {
      $put:
        | {
            input: { param: { denylist_id: string } } & {
              json: BodyChangeStatusOfTheOriginDenylistV1DenylistPublicDenylistIdOriginPut
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { denylist_id: string } } & {
              json: BodyChangeStatusOfTheOriginDenylistV1DenylistPublicDenylistIdOriginPut
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/reported/ip': {
      $get:
        | {
            input: {
              query: {
                dataset?: string | undefined
                reported_before?: number | undefined
                reported_after?: number | undefined
                expires_before?: number | undefined
                expires_after?: number | undefined
                greater_than?: number | undefined
                less_than?: number | undefined
                ip_protocol_version?: 'ALL' | 'IPV4' | 'IPV6' | undefined
                output_format?: 'JSON' | 'CSV' | 'AWS-WAF' | undefined
              }
            }
            output: IPListCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dataset?: string | undefined
                reported_before?: number | undefined
                reported_after?: number | undefined
                expires_before?: number | undefined
                expires_after?: number | undefined
                greater_than?: number | undefined
                less_than?: number | undefined
                ip_protocol_version?: 'ALL' | 'IPV4' | 'IPV6' | undefined
                output_format?: 'JSON' | 'CSV' | 'AWS-WAF' | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/denylist/reported/ip/all': {
      $delete: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/denylist/reported/ip/:ip_address': {
      $delete:
        | {
            input: { param: { ip_address: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ip_address: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { ip_address: string } }
            output: IPListOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ip_address: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/geo': {
      $post:
        | {
            input: { json: string[] }
            output: GeoIPCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: string[] }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/geo/csv': {
      $post:
        | {
            input: { query: { strict_parse?: boolean | undefined } } & {
              form: BodyAssessIpSetCsvV1GeoCsvPost
            }
            output: GeoIPCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { strict_parse?: boolean | undefined } } & {
              form: BodyAssessIpSetCsvV1GeoCsvPost
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/geo/:ip_address': {
      $get:
        | {
            input: { param: { ip_address: string } }
            output: GeoIPOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ip_address: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/log/ip/id/:logchange_id': {
      $get:
        | {
            input: { param: { logchange_id: number } }
            output: IPLogOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { logchange_id: number } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/log/ip/:ip_address': {
      $get:
        | {
            input: { param: { ip_address: string } } & {
              query: { dataset?: string | undefined; logged_after?: number | undefined }
            }
            output: IPLogCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ip_address: string } } & {
              query: { dataset?: string | undefined; logged_after?: number | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin': {
      $get:
        | {
            input: { query: { query: string } }
            output: OriginOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { json: BodyUpdateConfigurationOriginV1OriginPut }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BodyUpdateConfigurationOriginV1OriginPut }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin/addresses': {
      $get:
        | {
            input: {
              query: { query: string; page?: number | undefined; page_size?: number | undefined }
            }
            output: OriginAddressStatusCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query: string; page?: number | undefined; page_size?: number | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin/all': {
      $get: { input: {}; output: OriginCollectionOutput; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/origin/client/analysis': {
      $get:
        | {
            input: {
              query: {
                query: string
                interval: 'HOURLY'
                from_timestamp: number
                to_timestamp?: number | undefined
              }
            }
            output: OriginClientAnalysisCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                interval: 'HOURLY'
                from_timestamp: number
                to_timestamp?: number | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin/cookies': {
      $get:
        | {
            input: {
              query: { query: string; page?: number | undefined; page_size?: number | undefined }
            }
            output: OriginCookieIdStatusCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query: string; page?: number | undefined; page_size?: number | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin/scripts': {
      $get:
        | {
            input: { query: { query: string } }
            output: OriginScriptsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin/status': {
      $post:
        | {
            input: { query: { query: string } } & { json: BodyQueryOriginStatusV1OriginStatusPost }
            output: OriginStatusOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string } } & { json: BodyQueryOriginStatusV1OriginStatusPost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin/status/detail/:status_id': {
      $get:
        | {
            input: { param: { status_id: 'pass' | 'block' | 'challenge' | 'bypass' | 'ignore' } }
            output: OriginStatusDetailsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { status_id: 'pass' | 'block' | 'challenge' | 'bypass' | 'ignore' } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin/status/details': {
      $get: {
        input: {}
        output: OriginStatusDetailsCollectionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/origin/traffic/analysis': {
      $get:
        | {
            input: {
              query: {
                query: string
                interval: 'HOURLY'
                from_timestamp: number
                to_timestamp?: number | undefined
              }
            }
            output: OriginTrafficAnalysisCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                interval: 'HOURLY'
                from_timestamp: number
                to_timestamp?: number | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin_token': {
      $delete:
        | {
            input: { json: BodyDeleteTokenV1OriginTokenDelete }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BodyDeleteTokenV1OriginTokenDelete }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: BodyQueryOriginTokenInfoV1OriginTokenPost }
            output: OriginTokenOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BodyQueryOriginTokenInfoV1OriginTokenPost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin_token/all': {
      $get: { input: {}; output: OriginTokenCollectionOutput; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/origin_token/disable': {
      $put:
        | {
            input: { json: BodyDisableOriginTokenV1OriginTokenDisablePut }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BodyDisableOriginTokenV1OriginTokenDisablePut }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin_token/enable': {
      $put:
        | {
            input: { json: BodyEnableOriginTokenV1OriginTokenEnablePut }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BodyEnableOriginTokenV1OriginTokenEnablePut }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/origin_token/new': {
      $post:
        | {
            input: { json: OriginTokenInput }
            output: OriginTokenOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OriginTokenInput }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source/ip': {
      $get: { input: {}; output: SourceCollectionOutput; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/source/ip/:source': {
      $get:
        | {
            input: { param: { source: string } }
            output: V1ModelsSourceSourceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source/ip/:source/range/:time_range': {
      $get:
        | {
            input: {
              param: {
                source: string
                time_range: '1H' | '6H' | '12H' | '1D' | '7D' | '30D' | '90D' | '180D' | '365D'
              }
            }
            output: SourceTimeRangeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                source: string
                time_range: '1H' | '6H' | '12H' | '1D' | '7D' | '30D' | '90D' | '180D' | '365D'
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/token': { $get: { input: {}; output: TokenOutput; outputFormat: 'json'; status: 200 } }
  } & {
    '/v1/token/activity': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: ActivityCollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/ua': {
      $post:
        | {
            input: { json: string[] }
            output: UACollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: string[] }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/ua/csv': {
      $post:
        | {
            input: { form: BodyParseUserAgentsCsvV1UaCsvPost }
            output: UACollectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: BodyParseUserAgentsCsvV1UaCsvPost }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/ua/device/:code': {
      $get:
        | {
            input: { param: { code: string } }
            output: DeviceOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/ua/family/:code': {
      $get:
        | {
            input: { param: { code: string } }
            output: FamilyOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/ua/os/:code': {
      $get:
        | {
            input: { param: { code: string } }
            output: OSOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/ua/type/:code': {
      $get:
        | {
            input: { param: { code: string } }
            output: TypeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/ua/vendor/:code': {
      $get:
        | {
            input: { param: { code: string } }
            output: VendorOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/ua/:user_agent_urlencoded': {
      $get:
        | {
            input: { param: { user_agent_urlencoded: string } }
            output: UAOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_agent_urlencoded: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
