type DateFilter = { [x: string]: string }
type Metadata = { [x: string]: string }
type Object = string
type Count = number
type DateCreated = string
type DateModified = string
type Deleted = boolean
type AdrId = string
type ResourceDescription = string | null
type AddressUs = {
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
  object: 'address'
  id: AdrId
  description?: ResourceDescription | undefined
  name?: (string | null) | undefined
  company?: (string | null) | undefined
  phone?: (string | null) | undefined
  email?: (string | null) | undefined
  address_line1: string
  address_line2?: (string | null) | undefined
  address_city: string
  address_state: string
  address_zip: string
  address_country?: 'UNITED STATES' | undefined
  metadata?: Metadata | undefined
  recipient_moved?: (boolean | null) | undefined
}
type Company = string | null
type AddressIntl = {
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
  object: 'address'
  id: AdrId
  description?: ResourceDescription | undefined
  name?: (string | null) | undefined
  company?: Company | undefined
  phone?: (string | null) | undefined
  email?: (string | null) | undefined
  metadata?: Metadata | undefined
  address_line1: string
  address_line2?: (string | null) | undefined
  address_city?: (string | null) | undefined
  address_state?: (string | null) | undefined
  address_zip?: (string | null) | undefined
  address_country:
    | 'AFGHANISTAN'
    | 'ALBANIA'
    | 'ALGERIA'
    | 'AMERICAN SAMOA'
    | 'ANDORRA'
    | 'ANGOLA'
    | 'ANGUILLA'
    | 'ANTARCTICA'
    | 'ANTIGUA AND BARBUDA'
    | 'ARGENTINA'
    | 'ARUBA'
    | 'AUSTRALIA'
    | 'AUSTRIA'
    | 'AZERBAIJAN'
    | 'BAHRAIN'
    | 'BANGLADESH'
    | 'BARBADOS'
    | 'BELARUS'
    | 'BELGIUM'
    | 'BELIZE'
    | 'BENIN'
    | 'BERMUDA'
    | 'BHUTAN'
    | 'BOLIVIA (PLURINATIONAL STATE OF)'
    | 'BONAIRE, SAINT EUSTATIUS AND SABA'
    | 'BOSNIA AND HERZEGOVINA'
    | 'BOTSWANA'
    | 'BRAZIL'
    | 'BRITISH INDIAN OCEAN TERRITORY'
    | 'BRITISH VIRGIN ISLANDS'
    | 'BRUNEI DARUSSALAM'
    | 'BULGARIA'
    | 'BURKINA FASO'
    | 'BURUNDI'
    | 'CABO VERDE'
    | 'CAMBODIA'
    | 'CAMEROON'
    | 'CANADA'
    | 'CAYMAN ISLANDS'
    | 'CENTRAL AFRICAN REPUBLIC'
    | 'CHAD'
    | 'CHILE'
    | 'CHINA'
    | 'COLOMBIA'
    | 'COMOROS'
    | 'CONGO'
    | 'CONGO, DEMOCRATIC REPUBLIC OF THE'
    | 'COOK ISLANDS'
    | 'COSTA RICA'
    | "CÔTE D'IVOIRE"
    | 'CROATIA'
    | 'CUBA'
    | 'CURAÇAO'
    | 'CYPRUS'
    | 'CZECH REPUBLIC'
    | 'DENMARK'
    | 'DJIBOUTI'
    | 'DOMINICA'
    | 'DOMINICAN REPUBLIC'
    | 'ECUADOR'
    | 'EGYPT'
    | 'EL SALVADOR'
    | 'EQUATORIAL GUINEA'
    | 'ERITREA'
    | 'ESTONIA'
    | 'ESWATINI'
    | 'ETHIOPIA'
    | 'FALKLAND ISLANDS (MALVINAS)'
    | 'FAROE ISLANDS'
    | 'FIJI'
    | 'FINLAND'
    | 'FRANCE'
    | 'GABON'
    | 'GAMBIA'
    | 'GEORGIA'
    | 'GERMANY'
    | 'GHANA'
    | 'GIBRALTAR'
    | 'GREECE'
    | 'GREENLAND'
    | 'GRENADA'
    | 'GUATEMALA'
    | 'GUINEA'
    | 'GUINEA-BISSAU'
    | 'GUYANA'
    | 'HAITI'
    | 'HOLY SEE'
    | 'HONDURAS'
    | 'HONG KONG'
    | 'HUNGARY'
    | 'ICELAND'
    | 'INDIA'
    | 'INDONESIA'
    | 'IRAN (ISLAMIC REPUBLIC OF)'
    | 'IRAQ'
    | 'IRELAND'
    | 'ISRAEL'
    | 'ITALY'
    | 'JAMAICA'
    | 'JAPAN'
    | 'JORDAN'
    | 'KAZAKHSTAN'
    | 'KENYA'
    | 'KIRIBATI'
    | 'KOREA (DEMOCRATIC PEOPLE’S REPUBLIC OF)'
    | 'KOREA, REPUBLIC OF'
    | 'KUWAIT'
    | 'KYRGYZSTAN'
    | 'LAO PEOPLE’S DEMOCRATIC REPUBLIC'
    | 'LATVIA'
    | 'LEBANON'
    | 'LESOTHO'
    | 'LIBERIA'
    | 'LIBYA'
    | 'LIECHTENSTEIN'
    | 'LITHUANIA'
    | 'LUXEMBOURG'
    | 'MACAO'
    | 'MACEDONIA'
    | 'MADAGASCAR'
    | 'MALAWI'
    | 'MALAYSIA'
    | 'MALDIVES'
    | 'MALI'
    | 'MALTA'
    | 'MAURITANIA'
    | 'MAURITIUS'
    | 'MEXICO'
    | 'MOLDOVA, REPUBLIC OF'
    | 'MONACO'
    | 'MONGOLIA'
    | 'MONTENEGRO'
    | 'MONTSERRAT'
    | 'MOROCCO'
    | 'MOZAMBIQUE'
    | 'MYANMAR'
    | 'NAMIBIA'
    | 'NAURU'
    | 'NEPAL'
    | 'NETHERLAND ANTILLES'
    | 'NETHERLANDS'
    | 'NEW ZEALAND'
    | 'NICARAGUA'
    | 'NIGER'
    | 'NIGERIA'
    | 'NIUE'
    | 'NORFOLK ISLAND'
    | 'NORWAY'
    | 'OMAN'
    | 'PAKISTAN'
    | 'PANAMA'
    | 'PAPUA NEW GUINEA'
    | 'PARAGUAY'
    | 'PERU'
    | 'PHILIPPINES'
    | 'PITCAIRN'
    | 'POLAND'
    | 'PORTUGAL'
    | 'QATAR'
    | 'ROMANIA'
    | 'RUSSIAN FEDERATION'
    | 'RWANDA'
    | 'SAINT HELENA'
    | 'SAINT KITTS AND NEVIS'
    | 'SAINT LUCIA'
    | 'SAINT VINCENT AND THE GRENADINES'
    | 'SAMOA'
    | 'SAN MARINO'
    | 'SAO TOME AND PRINCIPE'
    | 'SAUDI ARABIA'
    | 'SENEGAL'
    | 'SERBIA'
    | 'SEYCHELLES'
    | 'SIERRA LEONE'
    | 'SINGAPORE'
    | 'SINT MAARTEN'
    | 'SLOVAKIA'
    | 'SLOVENIA'
    | 'SOLOMON ISLANDS'
    | 'SOMALIA'
    | 'SOUTH AFRICA'
    | 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS'
    | 'SOUTH SUDAN'
    | 'SPAIN'
    | 'SRI LANKA'
    | 'SUDAN'
    | 'SURINAME'
    | 'SWEDEN'
    | 'SWITZERLAND'
    | 'SYRIAN ARAB REPUBLIC'
    | 'TAIWAN'
    | 'TAJIKISTAN'
    | 'TANZANIA'
    | 'THAILAND'
    | 'THE BAHAMAS'
    | 'TIMOR-LESTE'
    | 'TOGO'
    | 'TOKELAU'
    | 'TONGA'
    | 'TRINIDAD AND TOBAGO'
    | 'TUNISIA'
    | 'TURKEY'
    | 'TURKMENISTAN'
    | 'TURKS AND CAICOS ISLANDS'
    | 'TUVALU'
    | 'UGANDA'
    | 'UKRAINE'
    | 'UNITED ARAB EMIRATES'
    | 'UNITED KINGDOM'
    | 'URUGUAY'
    | 'UZBEKISTAN'
    | 'VANUATU'
    | 'VENEZUELA'
    | 'VIET NAM'
    | 'WESTERN SAHARA'
    | 'YEMEN'
    | 'ZAMBIA'
    | 'ZIMBABWE'
}
type Address = AddressUs | AddressIntl
type FailureStatusCode = 401 | 403 | 404 | 413 | 422 | 429 | 500
type Error = {
  error: {
    message: string
    status_code: FailureStatusCode
    code:
      | 'bad_request'
      | 'conflict'
      | 'feature_limit_reached'
      | 'internal_server_error'
      | 'invalid'
      | 'not_deletable'
      | 'not_found'
      | 'request_timeout'
      | 'service_unavailable'
      | 'unrecognized_endpoint'
      | 'unsupported_lob_version'
      | 'address_length_exceeds_limit'
      | 'bank_account_already_verified'
      | 'bank_error'
      | 'billing_address_required'
      | 'custom_envelope_inventory_depleted'
      | 'deleted_bank_account'
      | 'failed_deliverability_strictness'
      | 'file_pages_below_min'
      | 'file_pages_exceed_max'
      | 'file_size_exceeds_limit'
      | 'foreign_return_address'
      | 'inconsistent_page_dimensions'
      | 'invalid_bank_account'
      | 'invalid_bank_account_verification'
      | 'invalid_check_international'
      | 'invalid_country_covid'
      | 'invalid_file'
      | 'invalid_file_dimensions'
      | 'invalid_file_download_time'
      | 'invalid_file_url'
      | 'invalid_image_dpi'
      | 'invalid_international_feature'
      | 'invalid_perforation_return_envelope'
      | 'invalid_template_html'
      | 'mail_use_type_can_not_be_null'
      | 'merge_variable_required'
      | 'merge_variable_whitespace'
      | 'payment_method_unverified'
      | 'pdf_encrypted'
      | 'special_characters_restricted'
      | 'unembedded_fonts'
      | 'email_required'
      | 'invalid_api_key'
      | 'publishable_key_not_allowed'
      | 'rate_limit_exceeded'
      | 'unauthorized'
      | 'unauthorized_token'
  }
}
type AddressEditableUs = {
  address_line1: string
  address_line2?: (string | null) | undefined
  address_city: string
  address_state: string
  address_zip: string
  description?: ResourceDescription | undefined
  name?: (string | null) | undefined
  company?: Company | undefined
  phone?: (string | null) | undefined
  email?: (string | null) | undefined
  address_country?: 'US' | undefined
  metadata?: Metadata | undefined
}
type CountryExtended =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AN'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CD'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CS'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MG'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PN'
  | 'PT'
  | 'PY'
  | 'QA'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VN'
  | 'VU'
  | 'WS'
  | 'YE'
  | 'ZA'
  | 'ZM'
  | 'ZW'
type AddressEditableIntl = {
  address_line1: string
  address_line2?: (string | null) | undefined
  address_city?: (string | null) | undefined
  address_state?: (string | null) | undefined
  address_zip?: (string | null) | undefined
  description?: ResourceDescription | undefined
  name?: (string | null) | undefined
  company?: Company | undefined
  phone?: (string | null) | undefined
  email?: (string | null) | undefined
  address_country?: CountryExtended | undefined
  metadata?: Metadata | undefined
}
type AddressEditable = AddressEditableUs | AddressEditableIntl
type AddressDeletion = { id?: AdrId | undefined; deleted?: Deleted | undefined }
type BankId = {}
type Cents = number
type BankAccountVerify = { amounts: Cents[] } | { descriptor_code: string }
type BankDeletion = { id?: BankId | undefined; deleted?: Deleted | undefined }
type BankAccount = {
  description?: ResourceDescription | undefined
  routing_number: string
  account_number: string
  account_type: 'company' | 'individual'
  signatory: string
  check_template?: 'common' | 'jpm' | undefined
  fractional_routing_number?: string | undefined
  city?: string | undefined
  state?: string | undefined
  zipcode?: string | undefined
  metadata?: Metadata | undefined
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
  object: 'bank_account'
  id: BankId
  signature_url?: {} | undefined
  bank_name?: string | undefined
  verified?: boolean | undefined
  microdeposit_type?: 'amounts' | 'descriptor_code' | undefined
}
type BankAccountBase = {
  description?: ResourceDescription | undefined
  routing_number: string
  account_number: string
  account_type: 'company' | 'individual'
  signatory: string
  check_template?: 'common' | 'jpm' | undefined
  fractional_routing_number?: string | undefined
  city?: string | undefined
  state?: string | undefined
  zipcode?: string | undefined
  metadata?: Metadata | undefined
}
type BgId = string
type BgDescription = string
type Name = string
type BillingGroupBase = { description?: BgDescription | undefined; name?: Name | undefined }
type BillingGroupEditable = { description?: BgDescription | undefined; name?: Name | undefined }
type BookletId = string
type BookletDeletion = { id?: BookletId | undefined; deleted?: Deleted | undefined }
type SendDate = { [x: string]: unknown } | { [x: string]: unknown }
type MailType = 'usps_first_class' | 'usps_standard'
type CampaignId = string | null
type Status = 'processed' | 'rendered' | 'failed'
type EvntId = string
type TrackingEventNormal = {
  id: EvntId
  time?: string | undefined
  date_created: DateCreated
  date_modified: DateModified
  object: {}
  type: 'normal'
  name:
    | 'Mailed'
    | 'In Transit'
    | 'In Local Area'
    | 'Processed for Delivery'
    | 'Delivered'
    | 'Re-Routed'
    | 'Returned to Sender'
    | 'International Exit'
  details?: null | undefined
  location?: (string | null) | undefined
}
type MergeVariables = { [x: string]: unknown } | null
type SignedLink = string
type Thumbnail = {
  small?: SignedLink | undefined
  medium?: SignedLink | undefined
  large?: SignedLink | undefined
}
type ExpectedDeliveryDate = string
type BookletUseType = 'marketing' | 'operational' | null
type BookletSize = '8.375x5.375'
type BookletPages = number
type BookletSourceMaterial = '60# Gloss Text'
type FailureReasonError = {
  url?: (string | null) | undefined
  host?: (string | null) | undefined
  path?: (string | null) | undefined
  protocol?: (string | null) | undefined
  remediation?: (string | null) | undefined
  error_type?: (string | null) | undefined
  status_code?: (number | null) | undefined
}
type Booklet = {
  tracking_events?: TrackingEventNormal[] | undefined
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
  merge_variables?: MergeVariables | undefined
  send_date?: SendDate | undefined
  mail_type?: MailType | undefined
  to: Address
  carrier: 'USPS'
  thumbnails?: Thumbnail[] | undefined
  expected_delivery_date?: ExpectedDeliveryDate | undefined
  date_created?: DateCreated | undefined
  date_modified?: DateModified | undefined
  deleted?: Deleted | undefined
  from?: Address | undefined
  url?: SignedLink | undefined
  id: BookletId
  template_id?: {} | undefined
  template_version_id?: {} | undefined
  campaign_id?: CampaignId | undefined
  use_type: BookletUseType
  size?: BookletSize | undefined
  pages?: BookletPages | undefined
  fsc?: boolean | undefined
  status?: Status | undefined
  source_material?: BookletSourceMaterial | undefined
  failure_reason?:
    | {
        remediation?: string | undefined
        failure_reason?: string | undefined
        errors?: (FailureReasonError[] | null) | undefined
      }
    | undefined
  object?: 'booklet' | undefined
}
type InlineAddressUs = {
  address_line1: string
  address_line2?: (string | null) | undefined
  address_city: string
  address_state: string
  address_zip: string
  description?: ResourceDescription | undefined
  name?: (string | null) | undefined
  company?: Company | undefined
  phone?: (string | null) | undefined
  email?: (string | null) | undefined
  address_country?: 'US' | undefined
  metadata?: Metadata | undefined
}
type InlineAddressIntl = {
  address_line1: string
  address_line2?: (string | null) | undefined
  address_city?: (string | null) | undefined
  address_state?: (string | null) | undefined
  address_zip?: (string | null) | undefined
  description?: ResourceDescription | undefined
  name?: (string | null) | undefined
  company?: Company | undefined
  phone?: (string | null) | undefined
  email?: (string | null) | undefined
  address_country?: CountryExtended | undefined
  metadata?: Metadata | undefined
}
type InlineAddress = InlineAddressUs | InlineAddressIntl
type PrintSpeed = 'core'
type HtmlString = string
type TmplId = string
type RemoteFileUrl = string
type BookletFile = HtmlString | TmplId | RemoteFileUrl | string
type BillingGroupId = string
type QrCode = {
  position: 'relative'
  top?: number | undefined
  right?: number | undefined
  left?: number | undefined
  bottom?: number | undefined
  redirect_url: string
  width: number
  pages?: string | undefined
  logo?: { url?: string | undefined } | undefined
  style?:
    | { background_color?: string | undefined; foreground_color?: string | undefined }
    | undefined
}
type BookletEditable = {
  to?: AdrId | InlineAddress | undefined
  from?: AdrId | InlineAddress | undefined
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
  mail_type?: MailType | undefined
  merge_variables?: MergeVariables | undefined
  send_date?: SendDate | undefined
  print_speed?: PrintSpeed | undefined
  file: BookletFile
  billing_group_id?: BillingGroupId | undefined
  qr_code?: QrCode | undefined
  use_type: BookletUseType
  fsc?: boolean | undefined
  size: BookletSize
  pages: BookletPages
  source_material?: BookletSourceMaterial | undefined
}
type BuckslipDescription = string | null
type LocalFilePath = string
type BuckslipEditable = {
  description?: BuckslipDescription | undefined
  size?: '8.75x3.75' | undefined
  front: RemoteFileUrl | LocalFilePath
  back?: RemoteFileUrl | LocalFilePath | undefined
}
type BuckslipId = string
type BuckslipUpdatable = {
  description?: BuckslipDescription | undefined
  auto_reorder?: boolean | undefined
  reorder_quantity?: number | undefined
}
type BuckslipDeletion = { id?: BuckslipId | undefined; deleted?: Deleted | undefined }
type BuckslipOrderEditable = { quantity: number }
type Recipient = string | null
type PrimaryLineUs = string
type SecondaryLine = string
type Urbanization = string
type MultipleComponents = {
  recipient?: Recipient | undefined
  primary_line: PrimaryLineUs
  secondary_line?: SecondaryLine | undefined
  urbanization?: Urbanization | undefined
  city?: {} | undefined
  state?: string | undefined
  zip_code?: {} | undefined
}
type MultipleComponentsList = { addresses: MultipleComponents[] }
type UsVerId = string
type PrimaryNumber = string
type StreetName = string
type City = {}
type State = string
type ZipCodeType = 'standard' | 'po_box' | 'unique' | 'military' | ''
type County = string
type CountyFips = string
type UsComponents = {
  primary_number: PrimaryNumber
  street_predirection: 'N' | 'S' | 'E' | 'W' | 'NE' | 'SW' | 'SE' | 'NW' | ''
  street_name: StreetName
  street_suffix: string
  street_postdirection: 'N' | 'S' | 'E' | 'W' | 'NE' | 'SW' | 'SE' | 'NW' | ''
  secondary_designator: string
  secondary_number: string
  pmb_designator: string
  pmb_number: string
  extra_secondary_designator: string
  extra_secondary_number: string
  city: City
  state: State
  zip_code: string
  zip_code_plus_4: {}
  zip_code_type: ZipCodeType
  delivery_point_barcode: string
  address_type: 'residential' | 'commercial' | ''
  record_type: 'street' | 'highrise' | 'firm' | 'po_box' | 'rural_route' | 'general_delivery' | ''
  default_building_address: boolean
  county: County
  county_fips: CountyFips
  carrier_route: string
  carrier_route_type:
    | 'city_delivery'
    | 'rural_route'
    | 'highway_contract'
    | 'po_box'
    | 'general_delivery'
  po_box_only_flag: 'Y' | 'N' | ''
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
}
type DpvFootnote =
  | 'AA'
  | 'A1'
  | 'BB'
  | 'CC'
  | 'N1'
  | 'F1'
  | 'G1'
  | 'U1'
  | 'M1'
  | 'M3'
  | 'P1'
  | 'P3'
  | 'R1'
  | 'R7'
  | 'RR'
type DeliverabilityAnalysis = {
  dpv_confirmation: 'Y' | 'S' | 'D' | 'N' | ''
  dpv_cmra: 'Y' | 'N' | ''
  dpv_vacant: 'Y' | 'N' | ''
  dpv_active: 'Y' | 'N' | ''
  dpv_inactive_reason: '01' | '02' | '03' | '04' | '05' | '06' | ''
  dpv_throwback: 'Y' | 'N' | ''
  dpv_non_delivery_day_flag: 'Y' | 'N' | ''
  dpv_non_delivery_day_values: string
  dpv_no_secure_location: 'Y' | 'N' | ''
  dpv_door_not_accessible: 'Y' | 'N' | ''
  dpv_footnotes: DpvFootnote[]
  ews_match: boolean
  lacs_indicator: 'Y' | 'N' | ''
  lacs_return_code: string
  suite_return_code: 'A' | '00' | ''
}
type LobConfidenceScore = { score: number | null; level: 'high' | 'medium' | 'low' | '' }
type UsVerification = {
  id?: UsVerId | undefined
  recipient?: Recipient | undefined
  primary_line?: PrimaryLineUs | undefined
  secondary_line?: SecondaryLine | undefined
  urbanization?: Urbanization | undefined
  last_line?: string | undefined
  deliverability?:
    | 'deliverable'
    | 'deliverable_unnecessary_unit'
    | 'deliverable_incorrect_unit'
    | 'deliverable_missing_unit'
    | 'undeliverable'
    | undefined
  valid_address?: true | false | undefined
  components?: UsComponents | undefined
  deliverability_analysis?: DeliverabilityAnalysis | undefined
  lob_confidence_score?: LobConfidenceScore | undefined
  object?: 'us_verification' | undefined
}
type UsVerifications = { addresses: (UsVerification | Error)[]; errors: boolean }
type PrimaryLine = string
type PostalCode = string
type MultipleComponentsIntl = {
  recipient?: Recipient | undefined
  primary_line?: PrimaryLine | undefined
  secondary_line?: SecondaryLine | undefined
  city?: City | undefined
  state?: string | undefined
  postal_code?: PostalCode | undefined
  country: CountryExtended
}
type IntlVerificationsPayload = { addresses: MultipleComponentsIntl[] }
type IntlVerId = string
type CountryShort = string
type IntlComponents = {
  primary_number?: PrimaryNumber | undefined
  street_name?: StreetName | undefined
  city?: City | undefined
  state?: State | undefined
  postal_code?: PostalCode | undefined
}
type IntlVerification = {
  recipient?: Recipient | undefined
  primary_line?: PrimaryLine | undefined
  secondary_line?: SecondaryLine | undefined
  id?: IntlVerId | undefined
  last_line?: string | undefined
  country?: CountryShort | undefined
  coverage?: 'SUBBUILDING' | 'HOUSENUMBER/BUILDING' | 'STREET' | 'LOCALITY' | 'SPARSE' | undefined
  deliverability?:
    | 'deliverable'
    | 'deliverable_missing_info'
    | 'undeliverable'
    | 'no_match'
    | undefined
  status?:
    | 'LV4'
    | 'LV3'
    | 'LV2'
    | 'LV1'
    | 'LF4'
    | 'LF3'
    | 'LF2'
    | 'LF1'
    | 'LM4'
    | 'LM3'
    | 'LM2'
    | 'LU1'
    | undefined
  components?: IntlComponents | undefined
  object?: 'intl_verification' | undefined
}
type IntlVerifications = { addresses: (IntlVerification | Error)[]; errors: boolean }
type CmpScheduleType = 'immediate'
type CmpUseType = 'marketing' | 'operational' | null
type CmpId = string
type CrvId = string
type CampaignItem = {
  billing_group_id?: (string | null) | undefined
  name: string
  description?: ResourceDescription | undefined
  schedule_type: CmpScheduleType
  target_delivery_date?: (string | null) | undefined
  send_date?: (string | null) | undefined
  cancel_window_campaign_minutes?: (number | null) | undefined
  metadata?: Metadata | undefined
  use_type: CmpUseType
  auto_cancel_if_ncoa?: boolean | undefined
  print_speed?: PrintSpeed | undefined
  id: CmpId
  is_draft: boolean
  creatives: unknown[]
  uploads: unknown[]
  object: 'campaign'
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
}
type CampaignList = CampaignItem[]
type Creative = {
  date_created: DateCreated
  date_modified: DateModified
  deleted: boolean
  object: 'creative'
  id: CrvId
  template_preview_urls: { [x: string]: unknown }
  template_previews: { [x: string]: unknown }[]
  campaigns: CampaignList
}
type RequiredAddressColumnMapping = {
  name: string | null
  address_line1: string | null
  address_city: string | null
  address_state: string | null
  address_zip: string | null
}
type OptionalAddressColumnMapping = {
  address_line2: string | null
  company: string | null
  address_country: string | null
}
type UploadsMetadata = { columns: string[] }
type MergeVariableColumnMapping = { [x: string]: unknown } | null
type UplId = string
type UploadState =
  | 'Preprocessing'
  | 'Draft'
  | 'Ready for Validation'
  | 'Validating'
  | 'Scheduled'
  | 'Cancelled'
  | 'Errored'
type Upload = {
  campaignId: {}
  requiredAddressColumnMapping?: RequiredAddressColumnMapping | undefined
  optionalAddressColumnMapping?: OptionalAddressColumnMapping | undefined
  metadata?: UploadsMetadata | undefined
  mergeVariableColumnMapping?: MergeVariableColumnMapping | undefined
  id: UplId
  accountId: string
  mode: 'test' | 'live'
  failuresUrl?: string | undefined
  originalFilename?: string | undefined
  state: UploadState
  totalMailpieces: number
  failedMailpieces: number
  validatedMailpieces: number
  bytesProcessed: number
  dateCreated: string
  dateModified: string
}
type Campaign = {
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
  object: 'campaign'
  billing_group_id?: (string | null) | undefined
  name: string
  description?: ResourceDescription | undefined
  schedule_type: CmpScheduleType
  target_delivery_date?: (string | null) | undefined
  send_date?: (string | null) | undefined
  cancel_window_campaign_minutes?: (number | null) | undefined
  metadata?: Metadata | undefined
  use_type: CmpUseType
  auto_cancel_if_ncoa?: boolean | undefined
  print_speed?: PrintSpeed | undefined
  id: CmpId
  is_draft: boolean
  creatives: Creative[]
  uploads: Upload[]
}
type CampaignWritable = {
  billing_group_id?: (string | null) | undefined
  name: string
  description?: ResourceDescription | undefined
  schedule_type: CmpScheduleType
  target_delivery_date?: (string | null) | undefined
  send_date?: (string | null) | undefined
  cancel_window_campaign_minutes?: (number | null) | undefined
  metadata?: Metadata | undefined
  use_type: CmpUseType
  auto_cancel_if_ncoa?: boolean | undefined
  print_speed?: PrintSpeed | undefined
}
type CampaignUpdatable = {
  name?: string | undefined
  description?: ResourceDescription | undefined
  schedule_type?: CmpScheduleType | undefined
  target_delivery_date?: string | undefined
  send_date?: string | undefined
  cancel_window_campaign_minutes?: number | undefined
  metadata?: Metadata | undefined
  is_draft?: boolean | undefined
  use_type?: CmpUseType | undefined
  auto_cancel_if_ncoa?: boolean | undefined
}
type CardDescription = string | null
type CardEditable = {
  description?: CardDescription | undefined
  size?: '3.375x2.125' | '2.125x3.375' | undefined
  front: RemoteFileUrl | LocalFilePath
  back?: RemoteFileUrl | LocalFilePath | undefined
}
type CardId = string
type CardUpdatable = {
  description?: CardDescription | undefined
  auto_reorder?: boolean | undefined
  reorder_quantity?: number | undefined
}
type CardDeletion = { id?: CardId | undefined; deleted?: Deleted | undefined }
type CardOrderEditable = { quantity: number }
type ChkUseType = 'marketing' | 'operational' | null
type ChkId = string
type ToAddressUsChk = {
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
  object: 'address'
  id: AdrId
  description?: ResourceDescription | undefined
  name?: (string | null) | undefined
  company?: (string | null) | undefined
  phone?: (string | null) | undefined
  email?: (string | null) | undefined
  address_line1: string
  address_line2?: (string | null) | undefined
  address_city: string
  address_state: string
  address_zip: string
  address_country?: 'UNITED STATES' | undefined
  metadata?: Metadata | undefined
  recipient_moved?: (boolean | null) | undefined
}
type Check = {
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
  merge_variables?: MergeVariables | undefined
  send_date?: SendDate | undefined
  mail_type?: 'usps_first_class' | undefined
  memo?: (string | null) | undefined
  check_number?: number | undefined
  message?: string | undefined
  use_type: ChkUseType
  from?: AddressUs | undefined
  id: ChkId
  amount: number
  bank_account: BankAccount
  check_bottom_template_id?: {} | undefined
  attachment_template_id?: {} | undefined
  check_bottom_template_version_id?: {} | undefined
  attachment_template_version_id?: {} | undefined
  url: SignedLink
  to: ToAddressUsChk
  carrier: 'USPS'
  thumbnails?: Thumbnail[] | undefined
  expected_delivery_date?: ExpectedDeliveryDate | undefined
  tracking_events?: (TrackingEventNormal[] | null) | undefined
  status?: Status | undefined
  failure_reason?:
    | {
        remediation?: string | undefined
        failure_reason?: string | undefined
        errors?: (FailureReasonError[] | null) | undefined
      }
    | undefined
  object?: 'check' | undefined
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
}
type InlineAddressUsChk = {
  description?: ResourceDescription | undefined
  name?: (string | null) | undefined
  company?: Company | undefined
  address_line1: string
  address_line2?: (string | null) | undefined
  address_city: string
  address_state: string
  address_zip: string
  phone?: (string | null) | undefined
  email?: (string | null) | undefined
  address_country?: 'US' | undefined
  metadata?: Metadata | undefined
}
type CheckBottom = HtmlString | TmplId | RemoteFileUrl | LocalFilePath
type ServiceRequestNumber = string | null
type CheckEditable =
  | {
      description?: ResourceDescription | undefined
      metadata?: Metadata | undefined
      merge_variables?: MergeVariables | undefined
      send_date?: SendDate | undefined
      mail_type?: 'usps_first_class' | undefined
      memo?: (string | null) | undefined
      check_number?: number | undefined
      message?: string | undefined
      use_type: ChkUseType
      to?: AdrId | InlineAddressUsChk | undefined
      from: AdrId | InlineAddressUs
      bank_account: {}
      amount: number
      logo?: string | string | undefined
      check_bottom?: CheckBottom | undefined
      attachment?: HtmlString | TmplId | RemoteFileUrl | LocalFilePath | undefined
      billing_group_id?: BillingGroupId | undefined
      service_request_number?: ServiceRequestNumber | undefined
      print_speed?: PrintSpeed | undefined
    }
  | {
      description?: ResourceDescription | undefined
      metadata?: Metadata | undefined
      merge_variables?: MergeVariables | undefined
      send_date?: SendDate | undefined
      mail_type?: 'usps_first_class' | undefined
      memo?: (string | null) | undefined
      check_number?: number | undefined
      message?: string | undefined
      use_type: ChkUseType
      to?: AdrId | InlineAddressUsChk | undefined
      from: AdrId | InlineAddressUs
      bank_account: {}
      amount: number
      logo?: string | string | undefined
      check_bottom?: CheckBottom | undefined
      attachment?: HtmlString | TmplId | RemoteFileUrl | LocalFilePath | undefined
      billing_group_id?: BillingGroupId | undefined
      service_request_number?: ServiceRequestNumber | undefined
      print_speed?: PrintSpeed | undefined
    }
type CheckDeletion = { id?: ChkId | undefined; deleted?: Deleted | undefined }
type CrvFront = TmplId | LocalFilePath
type CrvBack = TmplId | LocalFilePath
type PostcardSize = '4x6' | '6x9' | '6x11'
type QrCodeCampaigns = {
  position: 'relative'
  top?: string | undefined
  right?: string | undefined
  left?: string | undefined
  bottom?: string | undefined
  redirect_url?: { [x: string]: unknown } | undefined
  width: string
  pages?: string | undefined
}
type Writable = {
  mail_type?: MailType | undefined
  size?: PostcardSize | undefined
  qr_code?: QrCodeCampaigns | undefined
}
type FromAttribute = AdrId | InlineAddressUs
type AddressPlacement =
  | 'top_first_page'
  | 'insert_blank_page'
  | 'bottom_first_page_center'
  | 'bottom_first_page'
type LetterAddOnTypes = 'buckslips' | 'cards' | 'custom_envelope'
type Color = boolean
type UserProvided = string | null
type DoubleSided = boolean
type ExtraService = 'certified' | 'certified_return_receipt' | 'registered' | null
type Writable_2 = {
  address_placement?: AddressPlacement | undefined
  add_on_types?: (LetterAddOnTypes[] | null) | undefined
  buckslips?: (BuckslipId[] | null) | undefined
  cards?: (CardId[] | null) | undefined
  color: Color
  custom_envelope?: UserProvided | undefined
  double_sided?: DoubleSided | undefined
  extra_service?: ExtraService | undefined
  mail_type?: MailType | undefined
  qr_code?: QrCodeCampaigns | undefined
}
type CrvFile = TmplId | LocalFilePath
type CrvInside = TmplId | LocalFilePath
type CrvOutside = TmplId | LocalFilePath
type SelfMailerSize = '6x18_bifold' | '11x9_bifold' | '12x9_bifold' | '17.75x9_trifold'
type Writable_3 = {
  mail_type?: MailType | undefined
  size?: SelfMailerSize | undefined
  qr_code?: QrCodeCampaigns | undefined
}
type CreativeWritable =
  | {
      resource_type: 'postcard'
      campaign_id: CmpId
      front: CrvFront
      back: CrvBack
      details: Writable
      from?: FromAttribute | undefined
      description?: ResourceDescription | undefined
      metadata?: Metadata | undefined
    }
  | {
      resource_type: 'letter'
      campaign_id: CmpId
      details: Writable_2
      file: CrvFile
      from?: FromAttribute | undefined
      description?: ResourceDescription | undefined
      metadata?: Metadata | undefined
    }
  | {
      resource_type: 'self_mailer'
      campaign_id: CmpId
      inside: CrvInside
      outside: CrvOutside
      details: Writable_3
      from?: FromAttribute | undefined
      description?: ResourceDescription | undefined
      metadata?: Metadata | undefined
    }
type CreativeBase = {
  from?: FromAttribute | undefined
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
}
type RecipientInput = {
  recipient: Recipient
  primary_line: PrimaryLineUs
  secondary_line?: SecondaryLine | undefined
  urbanization?: Urbanization | undefined
  city?: {} | undefined
  state?: string | undefined
  zip_code?: {} | undefined
}
type IdentityValidationCompany = string | null
type CompanyInput = {
  company: IdentityValidationCompany
  primary_line: PrimaryLineUs
  secondary_line?: SecondaryLine | undefined
  urbanization?: Urbanization | undefined
  city?: {} | undefined
  state?: string | undefined
  zip_code?: {} | undefined
}
type IdentityValidationWritable = RecipientInput | CompanyInput
type IdentityValidationId = string
type IdentityValidationRecipient = string | null
type RecipientValidation = {
  id?: IdentityValidationId | undefined
  recipient?: IdentityValidationRecipient | undefined
  primary_line?: PrimaryLineUs | undefined
  secondary_line?: SecondaryLine | undefined
  urbanization?: Urbanization | undefined
  last_line?: string | undefined
  score?: (number | null) | undefined
  confidence?: 'high' | 'medium' | 'low' | '' | undefined
  object?: 'id_validation' | undefined
}
type CompanyValidation = {
  id?: IdentityValidationId | undefined
  company?: IdentityValidationCompany | undefined
  primary_line?: PrimaryLineUs | undefined
  secondary_line?: SecondaryLine | undefined
  urbanization?: Urbanization | undefined
  last_line?: string | undefined
  score?: (number | null) | undefined
  confidence?: 'high' | 'medium' | 'low' | '' | undefined
  object?: 'id_validation' | undefined
}
type IdentityValidation = RecipientValidation | CompanyValidation
type InfdId = string
type UspsCampaignId = string
type Response = {
  quantity?: number | undefined
  status?: string | undefined
  ride_along_url?: string | undefined
  start_date?: string | undefined
  brand_name?: string | undefined
  usps_title?: string | undefined
  lob_campaign_id?: (string | null) | undefined
  id: InfdId
  object: 'informed_delivery_campaign'
  account_id: string
  usps_campaign_id: UspsCampaignId
  end_date: string
  start_serial: number | null
  end_serial: number | null
  ride_along_image_s3_link: string
  representative_image_s3_link: string | null
  date_created: DateCreated
  date_modified: DateModified
  mode: 'live' | 'test'
  deleted: boolean
  campaign_code: string
  service_request_number: string | null
}
type Create = {
  quantity?: number | undefined
  status?: 'pending_approval' | undefined
  ride_along_url?: string | undefined
  start_date?: string | undefined
  brand_name?: string | undefined
  usps_title?: string | undefined
  lob_campaign_id?: (string | null) | undefined
  ride_along_image?: { [x: string]: unknown } | undefined
  representative_image?: { [x: string]: unknown } | undefined
}
type Update = {
  quantity?: number | undefined
  status?: 'approved' | undefined
  ride_along_url?: string | undefined
  start_date?: string | undefined
  brand_name?: string | undefined
  usps_title?: string | undefined
  lob_campaign_id?: (string | null) | undefined
  ride_along_image?: { [x: string]: unknown } | undefined
  representative_image?: { [x: string]: unknown } | undefined
}
type SingleLineAddressIntl = { address: string; country: CountryExtended }
type IntlVerificationWritable = MultipleComponentsIntl | SingleLineAddressIntl
type LtrId = string
type LetterDeletion = { id?: LtrId | undefined; deleted?: Deleted | undefined }
type Card = {
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
  object: 'card'
  description?: CardDescription | undefined
  size?: '3.375x2.125' | '2.125x3.375' | undefined
  id: CardId
  url: string
  auto_reorder: boolean
  reorder_quantity: number | null
  raw_url: string
  front_original_url: string
  back_original_url: string
  thumbnails: Thumbnail[]
  available_quantity: number
  pending_quantity: number
  status: 'processed' | 'rendered'
  orientation: 'horizontal' | 'vertical'
  threshold_amount: number
}
type BoId = string
type BuckslipOrder = {
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
  object: Object
  id?: BoId | undefined
  buckslip_id?: BuckslipId | undefined
  status?: 'pending' | 'printing' | 'available' | 'cancelled' | 'depleted' | undefined
  quantity_ordered?: number | undefined
  unit_price?: number | undefined
  inventory?: number | undefined
  cancelled_reason?: string | undefined
  availability_date?: string | undefined
  expected_availability_date?: string | undefined
}
type Buckslip = {
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
  object: 'buckslip'
  description?: BuckslipDescription | undefined
  size?: '8.75x3.75' | undefined
  id: BuckslipId
  auto_reorder: boolean
  reorder_quantity: number | null
  threshold_amount: number
  url: string
  raw_url: string
  front_original_url: string
  back_original_url: string
  thumbnails: Thumbnail[]
  available_quantity: number
  allocated_quantity: number
  onhand_quantity: number
  pending_quantity: number
  projected_quantity: number
  buckslip_orders: BuckslipOrder[]
  stock: 'text' | 'cover'
  weight: '80#'
  finish: 'gloss' | 'matte'
  status: 'processed' | 'rendered' | 'failed'
}
type ReturnAddress = AdrId | InlineAddress
type Returned_5 = boolean | { [x: string]: unknown }
type Returned_2 = { id: string; url: string; object: 'envelope' } | null
type LtrUseType = 'marketing' | 'operational' | null
type TrackingEventDetails = {
  event:
    | 'package_accepted'
    | 'package_arrived'
    | 'package_departed'
    | 'package_processing'
    | 'package_processed'
    | 'package_in_local_area'
    | 'delivery_scheduled'
    | 'out_for_delivery'
    | 'pickup_available'
    | 'delivered'
    | 'package_forwarded'
    | 'returned_to_sender'
    | 'address_issue'
    | 'contact_carrier'
    | 'delayed'
    | 'delivery_attempted'
    | 'delivery_rescheduled'
    | 'location_inaccessible'
    | 'notice_left'
    | 'package_damaged'
    | 'package_disposed'
    | 'package_held'
    | 'package_lost'
    | 'package_unclaimed'
    | 'package_undeliverable'
    | 'reschedule_delivery'
    | 'other'
  description: string
  notes?: string | undefined
  action_required: boolean
}
type TrackingEventCertified = {
  id: EvntId
  time?: string | undefined
  date_created: DateCreated
  date_modified: DateModified
  object: {}
  type: 'certified'
  name:
    | 'Mailed'
    | 'In Transit'
    | 'In Local Area'
    | 'Processed for Delivery'
    | 'Pickup Available'
    | 'Delivered'
    | 'Re-Routed'
    | 'Returned to Sender'
    | 'Issue'
  details?: TrackingEventDetails | undefined
  location?: (string | null) | undefined
}
type Letter =
  | {
      tracking_events?: TrackingEventNormal[] | undefined
      cards?: (Card[] | null) | undefined
      buckslips?: (Buckslip[] | null) | undefined
      return_address?: ReturnAddress | undefined
      description?: ResourceDescription | undefined
      metadata?: Metadata | undefined
      merge_variables?: MergeVariables | undefined
      send_date?: SendDate | undefined
      mail_type?: MailType | undefined
      color: Color
      double_sided?: DoubleSided | undefined
      address_placement?: AddressPlacement | undefined
      return_envelope?: Returned_5 | undefined
      perforated_page?: (number | null) | undefined
      custom_envelope?: Returned_2 | undefined
      to: Address
      carrier: 'USPS'
      thumbnails?: Thumbnail[] | undefined
      expected_delivery_date?: ExpectedDeliveryDate | undefined
      date_created?: DateCreated | undefined
      date_modified?: DateModified | undefined
      deleted?: Deleted | undefined
      from?: Address | undefined
      url?: SignedLink | undefined
      id: LtrId
      template_id?: {} | undefined
      template_version_id?: {} | undefined
      campaign_id?: CampaignId | undefined
      use_type: LtrUseType
      fsc?: boolean | undefined
      status?: Status | undefined
      failure_reason?:
        | {
            remediation?: string | undefined
            failure_reason?: string | undefined
            errors?: (FailureReasonError[] | null) | undefined
          }
        | undefined
      object?: 'letter' | undefined
    }
  | {
      extra_service: 'registered'
      tracking_number?: (string | null) | undefined
      tracking_events?: TrackingEventNormal[] | undefined
      return_address?: ReturnAddress | undefined
      description?: ResourceDescription | undefined
      metadata?: Metadata | undefined
      merge_variables?: MergeVariables | undefined
      send_date?: SendDate | undefined
      mail_type?: MailType | undefined
      color: Color
      double_sided?: DoubleSided | undefined
      address_placement?: AddressPlacement | undefined
      return_envelope?: Returned_5 | undefined
      perforated_page?: (number | null) | undefined
      custom_envelope?: Returned_2 | undefined
      to: Address
      carrier: 'USPS'
      thumbnails?: Thumbnail[] | undefined
      expected_delivery_date?: ExpectedDeliveryDate | undefined
      date_created?: DateCreated | undefined
      date_modified?: DateModified | undefined
      deleted?: Deleted | undefined
      from?: Address | undefined
      url?: SignedLink | undefined
      id: LtrId
      template_id?: {} | undefined
      template_version_id?: {} | undefined
      campaign_id?: CampaignId | undefined
      use_type: LtrUseType
      fsc?: boolean | undefined
      status?: Status | undefined
      failure_reason?:
        | {
            remediation?: string | undefined
            failure_reason?: string | undefined
            errors?: (FailureReasonError[] | null) | undefined
          }
        | undefined
      object?: 'letter' | undefined
    }
  | {
      extra_service: 'certified' | 'certified_return_receipt'
      tracking_number?: (string | null) | undefined
      tracking_events: TrackingEventCertified[]
      return_address?: ReturnAddress | undefined
      description?: ResourceDescription | undefined
      metadata?: Metadata | undefined
      merge_variables?: MergeVariables | undefined
      send_date?: SendDate | undefined
      mail_type?: MailType | undefined
      color: Color
      double_sided?: DoubleSided | undefined
      address_placement?: AddressPlacement | undefined
      return_envelope?: Returned_5 | undefined
      perforated_page?: (number | null) | undefined
      custom_envelope?: Returned_2 | undefined
      to: Address
      carrier: 'USPS'
      thumbnails?: Thumbnail[] | undefined
      expected_delivery_date?: ExpectedDeliveryDate | undefined
      date_created?: DateCreated | undefined
      date_modified?: DateModified | undefined
      deleted?: Deleted | undefined
      from?: Address | undefined
      url?: SignedLink | undefined
      id: LtrId
      template_id?: {} | undefined
      template_version_id?: {} | undefined
      campaign_id?: CampaignId | undefined
      use_type: LtrUseType
      fsc?: boolean | undefined
      status?: Status | undefined
      failure_reason?:
        | {
            remediation?: string | undefined
            failure_reason?: string | undefined
            errors?: (FailureReasonError[] | null) | undefined
          }
        | undefined
      object?: 'letter' | undefined
    }
type LtrFile = HtmlString | TmplId | RemoteFileUrl | string
type UserProvided_2 = boolean | string
type LtrSize = 'us_letter' | 'us_legal'
type LetterEditable = {
  to?: AdrId | InlineAddress | undefined
  from?: AdrId | InlineAddress | undefined
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
  mail_type?: MailType | undefined
  merge_variables?: MergeVariables | undefined
  send_date?: SendDate | undefined
  print_speed?: PrintSpeed | undefined
  file: LtrFile
  extra_service?: ExtraService | undefined
  cards?: (CardId[] | null) | undefined
  color: {}
  double_sided?: DoubleSided | undefined
  address_placement?: AddressPlacement | undefined
  return_envelope?: UserProvided_2 | undefined
  perforated_page?: (number | null) | undefined
  custom_envelope?: UserProvided | undefined
  billing_group_id?: BillingGroupId | undefined
  qr_code?: QrCode | undefined
  use_type: LtrUseType
  service_request_number?: ServiceRequestNumber | undefined
  fsc?: boolean | undefined
  size?: LtrSize | undefined
}
type PscId = string
type PostcardDeletion = { id?: PscId | undefined; deleted?: Deleted | undefined }
type PscUseType = 'marketing' | 'operational' | null
type Postcard = {
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
  mail_type?: MailType | undefined
  merge_variables?: MergeVariables | undefined
  send_date?: SendDate | undefined
  print_speed?: PrintSpeed | undefined
  size?: PostcardSize | undefined
  to: Address
  carrier: 'USPS'
  thumbnails?: Thumbnail[] | undefined
  expected_delivery_date?: ExpectedDeliveryDate | undefined
  date_created?: DateCreated | undefined
  date_modified?: DateModified | undefined
  deleted?: Deleted | undefined
  from?: AddressUs | undefined
  id: PscId
  front_template_id: string | null
  back_template_id: string | null
  front_template_version_id?: (string | null) | undefined
  back_template_version_id?: (string | null) | undefined
  tracking_events?: (TrackingEventNormal[] | null) | undefined
  url: SignedLink
  campaign_id?: CampaignId | undefined
  use_type?: PscUseType | undefined
  fsc?: boolean | undefined
  status?: Status | undefined
  failure_reason?:
    | {
        remediation?: string | undefined
        failure_reason?: string | undefined
        errors?: (FailureReasonError[] | null) | undefined
      }
    | undefined
  object?: 'postcard' | undefined
}
type PscFront = HtmlString | TmplId | RemoteFileUrl | LocalFilePath
type PscBack = HtmlString | TmplId | RemoteFileUrl | LocalFilePath
type PostcardEditable = {
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
  mail_type?: MailType | undefined
  merge_variables?: MergeVariables | undefined
  send_date?: SendDate | undefined
  print_speed?: PrintSpeed | undefined
  size?: PostcardSize | undefined
  to?: AdrId | InlineAddress | undefined
  from?: AdrId | InlineAddressUs | undefined
  front: PscFront
  back: PscBack
  billing_group_id?: BillingGroupId | undefined
  qr_code?: QrCode | undefined
  use_type: PscUseType
  service_request_number?: ServiceRequestNumber | undefined
  fsc?: boolean | undefined
}
type DomainResponse = {
  id?: string | undefined
  domain?: string | undefined
  error_redirect_link?: string | undefined
  status?: 'configured' | 'not_configured' | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type DomainDelete = { id?: string | undefined; deleted?: boolean | undefined }
type Domain = string
type ErrorRedirectLink = string
type Domains = { domain: Domain; error_redirect_link?: ErrorRedirectLink | undefined }
type DomainsResponse = {
  object?: Object | undefined
  next_url?: (string | null) | undefined
  previous_url?: (string | null) | undefined
  count?: Count | undefined
  total_count?: number | undefined
  data?: DomainResponse[] | undefined
}
type RedirectLink = string
type LinkResponse = {
  id?: string | undefined
  title?: string | undefined
  domain_id?: string | undefined
  redirect_link?: RedirectLink | undefined
  short_link?: string | undefined
  metadata?: Metadata | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type LinkUpdate = {
  title?: string | undefined
  redirect_link: RedirectLink
  metadata?: Metadata | undefined
}
type LinkDeleteResponse = { id?: string | undefined; deleted?: boolean | undefined }
type LinkSingle = {
  title?: string | undefined
  redirect_link: RedirectLink
  domain?: string | undefined
  slug?: string | undefined
  metadata?: Metadata | undefined
}
type LinksResponse = {
  object?: Object | undefined
  next_url?: (string | null) | undefined
  previous_url?: (string | null) | undefined
  count?: Count | undefined
  total_count?: number | undefined
  data?: LinkResponse[] | undefined
}
type ResPrfId = string
type ResourceProofUpdatable = { template_id?: (string | null) | undefined }
type PostcardResourceParameters = {
  to?: AdrId | InlineAddress | undefined
  from?: AdrId | InlineAddressUs | undefined
  size?: PostcardSize | undefined
  merge_variables?: MergeVariables | undefined
  front: PscFront
  back: PscBack
}
type LetterResourceParameters = {
  to?: AdrId | InlineAddress | undefined
  from?: AdrId | InlineAddress | undefined
  merge_variables?: MergeVariables | undefined
  file: LtrFile
  color: {}
  double_sided?: DoubleSided | undefined
  address_placement?: AddressPlacement | undefined
  size?: LtrSize | undefined
}
type SelfMailerResourceParameters = {
  to?: AdrId | InlineAddress | undefined
  from?: AdrId | InlineAddressUs | undefined
  size?: SelfMailerSize | undefined
  merge_variables?: MergeVariables | undefined
  inside: HtmlString | TmplId | RemoteFileUrl | LocalFilePath
  outside: HtmlString | TmplId | RemoteFileUrl | LocalFilePath
}
type ResourceProofEditable =
  | {
      template_id?: (string | null) | undefined
      resource_type?: 'postcard' | undefined
      resource_parameters?: PostcardResourceParameters | undefined
    }
  | {
      template_id?: (string | null) | undefined
      resource_type?: 'letter' | undefined
      resource_parameters?: LetterResourceParameters | undefined
    }
  | {
      template_id?: (string | null) | undefined
      resource_type?: 'self_mailer' | undefined
      resource_parameters?: SelfMailerResourceParameters | undefined
    }
type SfmId = string
type SelfMailerDeletion = { id?: SfmId | undefined; deleted?: Deleted | undefined }
type SfmUseType = 'marketing' | 'operational' | null
type SelfMailer = {
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
  mail_type?: MailType | undefined
  merge_variables?: MergeVariables | undefined
  send_date?: SendDate | undefined
  print_speed?: PrintSpeed | undefined
  size?: SelfMailerSize | undefined
  to: Address
  carrier: 'USPS'
  thumbnails?: Thumbnail[] | undefined
  expected_delivery_date?: ExpectedDeliveryDate | undefined
  date_created?: DateCreated | undefined
  date_modified?: DateModified | undefined
  deleted?: Deleted | undefined
  from?: AddressUs | undefined
  id: SfmId
  outside_template_id?: {} | undefined
  inside_template_id?: {} | undefined
  outside_template_version_id?: {} | undefined
  inside_template_version_id?: {} | undefined
  object?: 'self_mailer' | undefined
  tracking_events?: TrackingEventCertified[] | undefined
  use_type: SfmUseType
  url: SignedLink
  fsc?: boolean | undefined
  status?: Status | undefined
  campaign_id?: CampaignId | undefined
  failure_reason?:
    | {
        remediation?: string | undefined
        failure_reason?: string | undefined
        errors?: (FailureReasonError[] | null) | undefined
      }
    | undefined
}
type SelfMailerEditable = {
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
  mail_type?: MailType | undefined
  merge_variables?: MergeVariables | undefined
  send_date?: SendDate | undefined
  print_speed?: PrintSpeed | undefined
  size?: SelfMailerSize | undefined
  to?: AdrId | InlineAddress | undefined
  from?: AdrId | InlineAddressUs | undefined
  inside: HtmlString | TmplId | RemoteFileUrl | LocalFilePath
  outside: HtmlString | TmplId | RemoteFileUrl | LocalFilePath
  billing_group_id?: BillingGroupId | undefined
  qr_code?: QrCode | undefined
  use_type: SfmUseType
  service_request_number?: ServiceRequestNumber | undefined
  fsc?: boolean | undefined
}
type SnapPackId = string
type SnapPackDeletion = { id?: SnapPackId | undefined; deleted?: Deleted | undefined }
type SnapPackSize = '8.5x11'
type SnapPackUseType = 'marketing' | 'operational' | null
type SnapPack = {
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
  mail_type?: MailType | undefined
  merge_variables?: MergeVariables | undefined
  send_date?: SendDate | undefined
  print_speed?: PrintSpeed | undefined
  size?: SnapPackSize | undefined
  to: Address
  carrier: 'USPS'
  thumbnails?: Thumbnail[] | undefined
  expected_delivery_date?: ExpectedDeliveryDate | undefined
  date_created?: DateCreated | undefined
  date_modified?: DateModified | undefined
  deleted?: Deleted | undefined
  from?: AddressUs | undefined
  id: SnapPackId
  outside_template_id?: {} | undefined
  inside_template_id?: {} | undefined
  outside_template_version_id?: {} | undefined
  inside_template_version_id?: {} | undefined
  object?: 'snap_pack' | undefined
  tracking_events?: TrackingEventNormal[] | undefined
  use_type: SnapPackUseType
  url: SignedLink
  fsc?: boolean | undefined
  status?: Status | undefined
  campaign_id?: CampaignId | undefined
  failure_reason?:
    | {
        remediation?: string | undefined
        failure_reason?: string | undefined
        errors?: (FailureReasonError[] | null) | undefined
      }
    | undefined
  color?: Color | undefined
}
type SnapPackEditable = {
  description?: ResourceDescription | undefined
  metadata?: Metadata | undefined
  mail_type?: MailType | undefined
  merge_variables?: MergeVariables | undefined
  send_date?: SendDate | undefined
  print_speed?: PrintSpeed | undefined
  size?: SnapPackSize | undefined
  to?: AdrId | InlineAddress | undefined
  from?: AdrId | InlineAddressUs | undefined
  inside: HtmlString | TmplId | RemoteFileUrl | LocalFilePath
  outside: HtmlString | TmplId | RemoteFileUrl | LocalFilePath
  billing_group_id?: BillingGroupId | undefined
  use_type: SnapPackUseType
  color?: {} | undefined
  qr_code?: QrCode | undefined
}
type VrsnId = string
type Engine = 'legacy' | 'handlebars'
type TemplateRequiredVars = string[]
type TemplateVersionUpdatable = {
  description?: ResourceDescription | undefined
  engine?: Engine | undefined
  required_vars?: TemplateRequiredVars | undefined
}
type TemplateVersionDeletion = { id?: VrsnId | undefined; deleted?: Deleted | undefined }
type TemplateHtml = string
type TemplateVersion = {
  description?: ResourceDescription | undefined
  html: TemplateHtml
  engine?: Engine | undefined
  required_vars?: TemplateRequiredVars | undefined
  date_created: DateCreated
  date_modified: DateModified
  deleted?: Deleted | undefined
  object: 'version'
  id: VrsnId
  suggest_json_editor?: boolean | undefined
  merge_variables?: { [x: string]: unknown } | undefined
}
type TemplateVersionWritable = {
  description?: ResourceDescription | undefined
  html: TemplateHtml
  engine?: Engine | undefined
  required_vars?: TemplateRequiredVars | undefined
}
type TemplateUpdate = {
  description?: ResourceDescription | undefined
  published_version?: {} | undefined
}
type TemplateDeletion = { id?: TmplId | undefined; deleted?: Deleted | undefined }
type Template = {
  description?: ResourceDescription | undefined
  id: TmplId
  versions: TemplateVersion[]
  published_version: {
    description?: ResourceDescription | undefined
    html: TemplateHtml
    engine?: Engine | undefined
    required_vars?: TemplateRequiredVars | undefined
    date_created: DateCreated
    date_modified: DateModified
    deleted?: Deleted | undefined
    object?: 'version' | undefined
    id: VrsnId
    suggest_json_editor?: boolean | undefined
    merge_variables?: { [x: string]: unknown } | undefined
  }
  object?: 'template' | undefined
  metadata?: Metadata | undefined
  date_created?: DateCreated | undefined
  date_modified?: DateModified | undefined
  deleted?: Deleted | undefined
}
type TemplateWritable = {
  description?: ResourceDescription | undefined
  html: TemplateHtml
  metadata?: Metadata | undefined
  engine?: Engine | undefined
  required_vars?: TemplateRequiredVars | undefined
}
type UploadWritable = {
  campaignId: {}
  requiredAddressColumnMapping?: RequiredAddressColumnMapping | undefined
  optionalAddressColumnMapping?: OptionalAddressColumnMapping | undefined
  metadata?: UploadsMetadata | undefined
  mergeVariableColumnMapping?: MergeVariableColumnMapping | undefined
}
type UploadUpdatable = {
  originalFilename?: string | undefined
  requiredAddressColumnMapping?: RequiredAddressColumnMapping | undefined
  optionalAddressColumnMapping?: OptionalAddressColumnMapping | undefined
  metadata?: UploadsMetadata | undefined
  mergeVariableColumnMapping?: MergeVariableColumnMapping | undefined
}
type UploadFile = { message: 'File uploaded successfully'; filename: string }
type UploadCreateExport = { message: 'Export is processing'; exportId: string }
type ExId = string
type UsAutocompletionsWritable = {
  address_prefix: string
  city?: string | undefined
  state?: string | undefined
  zip_code?: string | undefined
  geo_ip_sort?: boolean | undefined
}
type UsAutoId = string
type Suggestions = {
  primary_line: string
  city: City
  state: State
  zip_code: {}
  object?: 'us_autocompletion' | undefined
}
type UsAutocompletions = {
  id?: UsAutoId | undefined
  suggestions?: Suggestions[] | undefined
  object?: 'us_autocompletion' | undefined
}
type Location = { latitude: number | null; longitude: number | null }
type ReverseGeocodeId = string
type Components = { zip_code: string; zip_code_plus_4: {} }
type LocationAnalysis = { latitude: number | null; longitude: number | null; distance: number }
type Addresses = {
  components?: Components | undefined
  location_analysis?: LocationAnalysis | undefined
}
type ReverseGeocode = {
  id?: ReverseGeocodeId | undefined
  addresses?: Addresses[] | undefined
  object?: 'us_reverse_geocode_lookup' | undefined
}
type SingleLineAddress = { address: string }
type UsVerificationsWritable = MultipleComponents | SingleLineAddress
type Zip5 = { zip_code: string }
type ZipId = string
type ZipLookupCity = {
  city: City
  state: State
  county: County
  county_fips: CountyFips
  preferred: boolean
}
type Zip = {
  zip_code: string
  id: ZipId
  cities: ZipLookupCity[]
  zip_code_type: ZipCodeType
  object: 'us_zip_lookup'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/accounts': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/addresses': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
              }
            }
            output: {
              object?: Object | undefined
              next_url?: (string | null) | undefined
              previous_url?: (string | null) | undefined
              count?: Count | undefined
              total_count?: number | undefined
              data?: Address[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: AddressEditable } & { form: AddressEditable }
            output: Address
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AddressEditable } & { form: AddressEditable }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/addresses/:adr_id': {
      $get:
        | {
            input: { param: { adr_id: AdrId } }
            output: Address
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { adr_id: AdrId } }; output: Error; outputFormat: 'json'; status: 200 }
      $delete:
        | {
            input: { param: { adr_id: AdrId } }
            output: AddressDeletion
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { adr_id: AdrId } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/bank_accounts/:bank_id/verify': {
      $post: {
        input: { param: { bank_id: BankId } } & { json: BankAccountVerify } & {
          form: BankAccountVerify
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bank_accounts/:bank_id': {
      $get: {
        input: { param: { bank_id: BankId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { bank_id: BankId } }
            output: BankDeletion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bank_id: BankId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bank_accounts': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
              }
            }
            output: {
              object?: Object | undefined
              next_url?: (string | null) | undefined
              previous_url?: (string | null) | undefined
              count?: Count | undefined
              total_count?: number | undefined
              data?: BankAccount[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: { json: BankAccountBase } & { form: BankAccountBase }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing_groups/:bg_id': {
      $get: { input: { param: { bg_id: BgId } }; output: Error; outputFormat: 'json'; status: 200 }
      $post: {
        input: { param: { bg_id: BgId } } & { json: BillingGroupBase } & { form: BillingGroupBase }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing_groups': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            include?: string[] | undefined
            date_created?: DateFilter | undefined
            date_modified?: DateFilter | undefined
            sort_by?:
              | {
                  date_created?: 'asc' | 'desc' | undefined
                  date_modified?: 'asc' | 'desc' | undefined
                }
              | undefined
          }
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: BillingGroupEditable } & { form: BillingGroupEditable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/booklets/:booklet_id': {
      $get: {
        input: { param: { booklet_id: BookletId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { booklet_id: BookletId } }
            output: BookletDeletion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { booklet_id: BookletId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/booklets': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                campaign_id?: CampaignId | undefined
                status?: Status | undefined
              }
            }
            output: {
              object?: Object | undefined
              next_url?: (string | null) | undefined
              previous_url?: (string | null) | undefined
              count?: Count | undefined
              total_count?: number | undefined
              data?: Booklet[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                campaign_id?: CampaignId | undefined
                status?: Status | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: { query: { idempotency_key?: string | undefined } } & {
          header: { 'Idempotency-Key'?: string | undefined }
        } & { json: BookletEditable } & { form: BookletEditable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/buckslips': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            'before/after'?: { before?: string | undefined; after?: string | undefined } | undefined
            include?: string[] | undefined
          }
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: BuckslipEditable } & { form: BuckslipEditable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/buckslips/:buckslip_id': {
      $get: {
        input: { param: { buckslip_id: BuckslipId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { buckslip_id: BuckslipId } } & { json: BuckslipUpdatable } & {
          form: BuckslipUpdatable
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { buckslip_id: BuckslipId } }
            output: BuckslipDeletion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buckslip_id: BuckslipId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckslips/:buckslip_id/orders': {
      $get: {
        input: { param: { buckslip_id: BuckslipId } } & {
          query: { limit?: number | undefined; offset?: number | undefined }
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { buckslip_id: BuckslipId } } & { json: BuckslipOrderEditable } & {
          form: BuckslipOrderEditable
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bulk/us_verifications': {
      $post:
        | {
            input: { query: { case?: 'upper' | 'proper' | undefined } } & {
              json: MultipleComponentsList
            } & { form: MultipleComponentsList }
            output: UsVerifications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { case?: 'upper' | 'proper' | undefined } } & {
              json: MultipleComponentsList
            } & { form: MultipleComponentsList }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bulk/intl_verifications': {
      $post:
        | {
            input: { json: IntlVerificationsPayload } & { form: IntlVerificationsPayload }
            output: IntlVerifications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IntlVerificationsPayload } & { form: IntlVerificationsPayload }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/campaigns': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            include?: string[] | undefined
            'before/after'?: { before?: string | undefined; after?: string | undefined } | undefined
          }
        }
        output: {
          object?: Object | undefined
          next_url?: (string | null) | undefined
          previous_url?: (string | null) | undefined
          count?: Count | undefined
          total_count?: number | undefined
          data?: Campaign[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'x-lang-output'?: 'native' | 'match' | undefined } } & {
          json: CampaignWritable
        } & { form: CampaignWritable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/campaigns/:cmp_id': {
      $get: {
        input: { param: { cmp_id: CmpId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { cmp_id: CmpId } } & { json: CampaignUpdatable } & {
          form: CampaignUpdatable
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { cmp_id: CmpId } }
            output: { id?: CmpId | undefined; deleted?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { cmp_id: CmpId } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/campaigns/:cmp_id/send': {
      $post: {
        input: { param: { cmp_id: CmpId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cards': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            'before/after'?: { before?: string | undefined; after?: string | undefined } | undefined
            include?: string[] | undefined
          }
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CardEditable } & { form: CardEditable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cards/:card_id': {
      $get: {
        input: { param: { card_id: CardId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { card_id: CardId } } & { json: CardUpdatable } & { form: CardUpdatable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { card_id: CardId } }
            output: CardDeletion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_id: CardId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cards/:card_id/orders': {
      $get: {
        input: { param: { card_id: CardId } } & {
          query: { limit?: number | undefined; offset?: number | undefined }
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { card_id: CardId } } & { json: CardOrderEditable } & {
          form: CardOrderEditable
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/checks': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                scheduled?: boolean | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                status?: Status | undefined
              }
            }
            output: {
              object?: Object | undefined
              next_url?: (string | null) | undefined
              previous_url?: (string | null) | undefined
              count?: Count | undefined
              total_count?: number | undefined
              data?: Check[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                scheduled?: boolean | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                status?: Status | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: { query: { idempotency_key?: string | undefined } } & {
          header: { 'Idempotency-Key'?: string | undefined }
        } & { json: CheckEditable } & { form: CheckEditable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/checks/:chk_id': {
      $get: {
        input: { param: { chk_id: ChkId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { chk_id: ChkId } }
            output: CheckDeletion
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { chk_id: ChkId } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/creatives': {
      $post: {
        input: { header: { 'x-lang-output'?: 'native' | 'match' | undefined } } & {
          json: CreativeWritable
        } & { form: CreativeWritable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/creatives/:crv_id': {
      $get: {
        input: { param: { crv_id: CrvId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { crv_id: CrvId } } & { json: CreativeBase } & { form: CreativeBase }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity_validation': {
      $post:
        | {
            input: { json: IdentityValidationWritable } & { form: IdentityValidationWritable }
            output: IdentityValidation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityValidationWritable } & { form: IdentityValidationWritable }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/informed_delivery_campaigns': {
      $get: {
        input: {}
        output: {
          object?: Object | undefined
          next_url?: (string | null) | undefined
          previous_url?: (string | null) | undefined
          count?: Count | undefined
          total_count?: number | undefined
          data?: Response[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { form: Create }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/informed_delivery_campaigns/:usps_campaign_id': {
      $get: {
        input: { param: { usps_campaign_id: UspsCampaignId } }
        output: Error
        outputFormat: 'json'
        status: 404
      }
      $patch:
        | {
            input: { param: { usps_campaign_id: UspsCampaignId } } & { form: Update }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { usps_campaign_id: UspsCampaignId } } & { form: Update }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/intl_verifications': {
      $post:
        | {
            input: { header: { 'x-lang-output'?: 'native' | 'match' | undefined } } & {
              json: IntlVerificationWritable
            } & { form: IntlVerificationWritable }
            output: IntlVerification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-lang-output'?: 'native' | 'match' | undefined } } & {
              json: IntlVerificationWritable
            } & { form: IntlVerificationWritable }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/letters/:ltr_id': {
      $get: {
        input: { param: { ltr_id: LtrId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { ltr_id: LtrId } }
            output: LetterDeletion
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ltr_id: LtrId } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/letters': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                campaign_id?: CampaignId | undefined
                status?: Status | undefined
                color?: boolean | undefined
                scheduled?: boolean | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
              }
            }
            output: {
              object?: Object | undefined
              next_url?: (string | null) | undefined
              previous_url?: (string | null) | undefined
              count?: Count | undefined
              total_count?: number | undefined
              data?: Letter[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                campaign_id?: CampaignId | undefined
                status?: Status | undefined
                color?: boolean | undefined
                scheduled?: boolean | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: { query: { idempotency_key?: string | undefined } } & {
          header: { 'Idempotency-Key'?: string | undefined; 'Lob-Version'?: string | undefined }
        } & { json: LetterEditable } & { form: LetterEditable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/postcards/:psc_id': {
      $get: {
        input: { param: { psc_id: PscId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { psc_id: PscId } }
            output: PostcardDeletion
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { psc_id: PscId } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/postcards': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                campaign_id?: CampaignId | undefined
                status?: Status | undefined
                size?: PostcardSize[] | undefined
                scheduled?: boolean | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
              }
            }
            output: {
              object?: Object | undefined
              next_url?: (string | null) | undefined
              previous_url?: (string | null) | undefined
              count?: Count | undefined
              total_count?: number | undefined
              data?: Postcard[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                campaign_id?: CampaignId | undefined
                status?: Status | undefined
                size?: PostcardSize[] | undefined
                scheduled?: boolean | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: { query: { idempotency_key?: string | undefined } } & {
          header: { 'Idempotency-Key'?: string | undefined }
        } & { json: PostcardEditable } & { form: PostcardEditable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/qr_code_analytics': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            include?: string[] | undefined
            date_created?: DateFilter | undefined
            scanned?: boolean | undefined
            resource_ids?: unknown[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/domains/:domain_id': {
      $get:
        | {
            input: { param: { domain_id: string } }
            output: DomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { domain_id: string } }
            output: DomainDelete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/domains': {
      $post:
        | {
            input: { json: Domains } & { form: Domains }
            output: DomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Domains } & { form: Domains }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                status?: 'configured' | 'not_configured' | undefined
              }
            }
            output: DomainsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                status?: 'configured' | 'not_configured' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/links/:link_id': {
      $get:
        | {
            input: { param: { link_id: string } }
            output: LinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { link_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { link_id: string } } & { json: LinkUpdate } & { form: LinkUpdate }
            output: LinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { link_id: string } } & { json: LinkUpdate } & { form: LinkUpdate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { link_id: string } }
            output: LinkDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { link_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/links': {
      $post:
        | {
            input: { json: LinkSingle } & { form: LinkSingle }
            output: LinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LinkSingle } & { form: LinkSingle }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                campaign_id?: CampaignId | undefined
                domain_id?: string | undefined
              }
            }
            output: LinksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                campaign_id?: CampaignId | undefined
                domain_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/resource_proofs/:res_prf_id': {
      $get: {
        input: { param: { res_prf_id: ResPrfId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { res_prf_id: ResPrfId } } & { json: ResourceProofUpdatable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resource_proofs': {
      $post: {
        input: { json: ResourceProofEditable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/self_mailers/:sfm_id': {
      $get: {
        input: { param: { sfm_id: SfmId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { sfm_id: SfmId } }
            output: SelfMailerDeletion
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { sfm_id: SfmId } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/self_mailers': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                size?: SelfMailerSize[] | undefined
                scheduled?: boolean | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                campaign_id?: CampaignId | undefined
                status?: Status | undefined
              }
            }
            output: {
              object?: Object | undefined
              next_url?: (string | null) | undefined
              previous_url?: (string | null) | undefined
              count?: Count | undefined
              total_count?: number | undefined
              data?: SelfMailer[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                size?: SelfMailerSize[] | undefined
                scheduled?: boolean | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                campaign_id?: CampaignId | undefined
                status?: Status | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: { query: { idempotency_key?: string | undefined } } & {
          header: { 'Idempotency-Key'?: string | undefined }
        } & { json: SelfMailerEditable } & { form: SelfMailerEditable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/snap_packs/:snap_pack_id': {
      $get: {
        input: { param: { snap_pack_id: SnapPackId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { snap_pack_id: SnapPackId } }
            output: SnapPackDeletion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { snap_pack_id: SnapPackId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/snap_packs': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                campaign_id?: CampaignId | undefined
                status?: Status | undefined
              }
            }
            output: {
              object?: Object | undefined
              next_url?: (string | null) | undefined
              previous_url?: (string | null) | undefined
              count?: Count | undefined
              total_count?: number | undefined
              data?: SnapPack[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
                send_date?: SendDate | undefined
                mail_type?: MailType | undefined
                sort_by?:
                  | {
                      date_created?: 'asc' | 'desc' | undefined
                      send_date?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                campaign_id?: CampaignId | undefined
                status?: Status | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: { query: { idempotency_key?: string | undefined } } & {
          header: { 'Idempotency-Key'?: string | undefined }
        } & { json: SnapPackEditable } & { form: SnapPackEditable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/:tmpl_id/versions/:vrsn_id': {
      $get: {
        input: { param: { tmpl_id: TmplId; vrsn_id: VrsnId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { tmpl_id: TmplId; vrsn_id: VrsnId } } & {
          json: TemplateVersionUpdatable
        } & { form: TemplateVersionUpdatable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { tmpl_id: TmplId; vrsn_id: VrsnId } }
            output: TemplateVersionDeletion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tmpl_id: TmplId; vrsn_id: VrsnId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/templates/:tmpl_id/versions': {
      $get:
        | {
            input: { param: { tmpl_id: TmplId } } & {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
              }
            }
            output: {
              object?: Object | undefined
              next_url?: (string | null) | undefined
              previous_url?: (string | null) | undefined
              count?: Count | undefined
              total_count?: number | undefined
              data?: TemplateVersion[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tmpl_id: TmplId } } & {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: { param: { tmpl_id: TmplId } } & { json: TemplateVersionWritable } & {
          form: TemplateVersionWritable
        }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/:tmpl_id': {
      $get: {
        input: { param: { tmpl_id: TmplId } }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { tmpl_id: TmplId } } & { json: TemplateUpdate } & { form: TemplateUpdate }
        output: Error
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { tmpl_id: TmplId } }
            output: TemplateDeletion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tmpl_id: TmplId } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/templates': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
              }
            }
            output: {
              object?: Object | undefined
              next_url?: (string | null) | undefined
              previous_url?: (string | null) | undefined
              count?: Count | undefined
              total_count?: number | undefined
              data?: Template[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                'before/after'?:
                  | { before?: string | undefined; after?: string | undefined }
                  | undefined
                include?: string[] | undefined
                date_created?: DateFilter | undefined
                metadata?: Metadata | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post: {
        input: { json: TemplateWritable } & { form: TemplateWritable }
        output: Error
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uploads': {
      $get: {
        input: { query: { campaignId?: CmpId | undefined } }
        output: Upload[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: UploadWritable }
        output: { detail?: { loc: (string | number)[]; msg: string; type: string }[] | undefined }
        outputFormat: 'json'
        status: 422
      }
    }
  } & {
    '/uploads/:upl_id': {
      $get:
        | { input: { param: { upl_id: UplId } }; output: Error; outputFormat: 'json'; status: 404 }
        | {
            input: { param: { upl_id: UplId } }
            output: {
              detail?: { loc: (string | number)[]; msg: string; type: string }[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { upl_id: UplId } } & { json: UploadUpdatable }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upl_id: UplId } } & { json: UploadUpdatable }
            output: {
              detail?: { loc: (string | number)[]; msg: string; type: string }[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
      $delete: {
        input: { param: { upl_id: UplId } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/uploads/:upl_id/file': {
      $post:
        | {
            input: { param: { upl_id: UplId } } & { form: { file?: File | undefined } }
            output: UploadFile
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { upl_id: UplId } } & { form: { file?: File | undefined } }
            output: {
              detail?: { loc: (string | number)[]; msg: string; type: string }[] | undefined
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/uploads/:upl_id/exports': {
      $post:
        | {
            input: { param: { upl_id: UplId } } & {
              json: { type?: 'all' | 'failures' | 'successes' | undefined }
            }
            output: UploadCreateExport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upl_id: UplId } } & {
              json: { type?: 'all' | 'failures' | 'successes' | undefined }
            }
            output: { code: 400 | 404; message: string; errors: string[] }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/uploads/:upl_id/report': {
      $get:
        | {
            input: { param: { upl_id: UplId } } & {
              query: {
                status?: 'Validated' | 'Failed' | 'Processing' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              data: {
                rowNumber?: number | undefined
                status?: 'Validated' | 'Failed' | 'Processing' | undefined
                errorMessage?: (string | null) | undefined
                mailpieceId?: (string | null) | undefined
                originalData?: { [x: string]: unknown } | undefined
              }[]
              next_url?: (string | null) | undefined
              prev_url?: (string | null) | undefined
              count: Count
              total_count: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { upl_id: UplId } } & {
              query: {
                status?: 'Validated' | 'Failed' | 'Processing' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/uploads/:upl_id/exports/:ex_id': {
      $get: {
        input: { param: { upl_id: UplId; ex_id: ExId } }
        output: {
          id: ExId
          dateCreated: string
          dateModified: string
          deleted: boolean
          s3Url: string
          state: 'in_progress' | 'failed' | 'succeeded'
          type: 'all' | 'failures' | 'successes'
          uploadId: UplId
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/us_autocompletions': {
      $post:
        | {
            input: {
              query: {
                case?: 'upper' | 'proper' | undefined
                valid_addresses?: true | false | undefined
              }
            } & { json: UsAutocompletionsWritable } & { form: UsAutocompletionsWritable }
            output: UsAutocompletions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                case?: 'upper' | 'proper' | undefined
                valid_addresses?: true | false | undefined
              }
            } & { json: UsAutocompletionsWritable } & { form: UsAutocompletionsWritable }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/us_reverse_geocode_lookups': {
      $post:
        | {
            input: { query: { size?: number | undefined } } & { json: Location } & {
              form: Location
            }
            output: ReverseGeocode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { size?: number | undefined } } & { json: Location } & {
              form: Location
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/us_verifications': {
      $post:
        | {
            input: { query: { case?: 'upper' | 'proper' | undefined } } & {
              json: UsVerificationsWritable
            } & { form: UsVerificationsWritable }
            output: UsVerification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { case?: 'upper' | 'proper' | undefined } } & {
              json: UsVerificationsWritable
            } & { form: UsVerificationsWritable }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/us_zip_lookups': {
      $post:
        | { input: { json: Zip5 } & { form: Zip5 }; output: Zip; outputFormat: 'json'; status: 200 }
        | {
            input: { json: Zip5 } & { form: Zip5 }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
