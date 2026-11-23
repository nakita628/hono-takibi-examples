type LocationTypeEnum = 'Point'
type VehicleProfileEnum = 'bike' | 'bus' | 'car' | 'foot' | 'scooter' | 'small_truck' | 'truck'
type AccountRole = {
  account: string
  activated_at: string
  created_at: string
  deleted_at: string
  display_name?: (string | null) | undefined
  email: string
  id: string
  is_active: boolean
  is_integration?: boolean | undefined
  is_manager?: boolean | undefined
  is_on_duty: boolean
  is_worker?: boolean | undefined
  last_time_location: string
  phone?: string | undefined
  route_end_address?:
    | {
        apartment_number?: (string | null) | undefined
        city?: string | undefined
        country?: string | undefined
        country_code?: string | undefined
        formatted_address?: string | undefined
        geocode_failed_at: string
        geocoded_at: string
        google_place_id?: string | undefined
        house_number?: string | undefined
        location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
        point_of_interest?: string | undefined
        postal_code?: string | undefined
        raw_address?: string | undefined
        state?: string | undefined
        street?: string | undefined
      }
    | undefined
  route_start_address?:
    | {
        apartment_number?: (string | null) | undefined
        city?: string | undefined
        country?: string | undefined
        country_code?: string | undefined
        formatted_address?: string | undefined
        geocode_failed_at: string
        geocoded_at: string
        google_place_id?: string | undefined
        house_number?: string | undefined
        location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
        point_of_interest?: string | undefined
        postal_code?: string | undefined
        raw_address?: string | undefined
        state?: string | undefined
        street?: string | undefined
      }
    | undefined
  show_unassigned?: boolean | undefined
  signature_image: string
  state: {}
  updated_at: string
  url: string
  user?: string | undefined
  vehicle_capacity?: (number[] | null) | undefined
  vehicle_profile?: VehicleProfileEnum | undefined
  vehicle_registration_number?: string | undefined
  vehicle_service_time_factor?: string | undefined
  vehicle_speed_factor?: string | undefined
}
type PaginatedAccountRoleList = AccountRole[]
type PatchedAccountRole = {
  account?: string | undefined
  activated_at?: string | undefined
  created_at?: string | undefined
  deleted_at?: string | undefined
  display_name?: (string | null) | undefined
  email?: string | undefined
  id?: string | undefined
  is_active?: boolean | undefined
  is_integration?: boolean | undefined
  is_manager?: boolean | undefined
  is_on_duty?: boolean | undefined
  is_worker?: boolean | undefined
  last_time_location?: string | undefined
  phone?: string | undefined
  route_end_address?:
    | {
        apartment_number?: (string | null) | undefined
        city?: string | undefined
        country?: string | undefined
        country_code?: string | undefined
        formatted_address?: string | undefined
        geocode_failed_at: string
        geocoded_at: string
        google_place_id?: string | undefined
        house_number?: string | undefined
        location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
        point_of_interest?: string | undefined
        postal_code?: string | undefined
        raw_address?: string | undefined
        state?: string | undefined
        street?: string | undefined
      }
    | undefined
  route_start_address?:
    | {
        apartment_number?: (string | null) | undefined
        city?: string | undefined
        country?: string | undefined
        country_code?: string | undefined
        formatted_address?: string | undefined
        geocode_failed_at: string
        geocoded_at: string
        google_place_id?: string | undefined
        house_number?: string | undefined
        location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
        point_of_interest?: string | undefined
        postal_code?: string | undefined
        raw_address?: string | undefined
        state?: string | undefined
        street?: string | undefined
      }
    | undefined
  show_unassigned?: boolean | undefined
  signature_image?: string | undefined
  state?: {} | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user?: string | undefined
  vehicle_capacity?: (number[] | null) | undefined
  vehicle_profile?: VehicleProfileEnum | undefined
  vehicle_registration_number?: string | undefined
  vehicle_service_time_factor?: string | undefined
  vehicle_speed_factor?: string | undefined
}
type AccountRoleActivation = { token: string }
type AccountRoleToken = { token: string }
type CountryCodeEnum =
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
type BlankEnum = ''
type DateFormatEnum = 'DD.MM.YYYY' | 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'MM/DD/YYYY'
type DistanceUnitsEnum = 'kilometers' | 'miles'
type FeatureAddressAutosuggestProviderEnum = 'google' | 'heremaps' | 'regio' | 'janaseta'
type TaskExpiryStateEnum = 'cancelled' | 'completed'
type TimeFormatEnum = 'HH:mm' | 'h:mm A'
type TimezoneEnum =
  | 'Africa/Abidjan'
  | 'Africa/Accra'
  | 'Africa/Addis_Ababa'
  | 'Africa/Algiers'
  | 'Africa/Asmara'
  | 'Africa/Bamako'
  | 'Africa/Bangui'
  | 'Africa/Banjul'
  | 'Africa/Bissau'
  | 'Africa/Blantyre'
  | 'Africa/Brazzaville'
  | 'Africa/Bujumbura'
  | 'Africa/Cairo'
  | 'Africa/Casablanca'
  | 'Africa/Ceuta'
  | 'Africa/Conakry'
  | 'Africa/Dakar'
  | 'Africa/Dar_es_Salaam'
  | 'Africa/Djibouti'
  | 'Africa/Douala'
  | 'Africa/El_Aaiun'
  | 'Africa/Freetown'
  | 'Africa/Gaborone'
  | 'Africa/Harare'
  | 'Africa/Johannesburg'
  | 'Africa/Juba'
  | 'Africa/Kampala'
  | 'Africa/Khartoum'
  | 'Africa/Kigali'
  | 'Africa/Kinshasa'
  | 'Africa/Lagos'
  | 'Africa/Libreville'
  | 'Africa/Lome'
  | 'Africa/Luanda'
  | 'Africa/Lubumbashi'
  | 'Africa/Lusaka'
  | 'Africa/Malabo'
  | 'Africa/Maputo'
  | 'Africa/Maseru'
  | 'Africa/Mbabane'
  | 'Africa/Mogadishu'
  | 'Africa/Monrovia'
  | 'Africa/Nairobi'
  | 'Africa/Ndjamena'
  | 'Africa/Niamey'
  | 'Africa/Nouakchott'
  | 'Africa/Ouagadougou'
  | 'Africa/Porto-Novo'
  | 'Africa/Sao_Tome'
  | 'Africa/Tripoli'
  | 'Africa/Tunis'
  | 'Africa/Windhoek'
  | 'America/Adak'
  | 'America/Anchorage'
  | 'America/Anguilla'
  | 'America/Antigua'
  | 'America/Araguaina'
  | 'America/Argentina/Buenos_Aires'
  | 'America/Argentina/Catamarca'
  | 'America/Argentina/Cordoba'
  | 'America/Argentina/Jujuy'
  | 'America/Argentina/La_Rioja'
  | 'America/Argentina/Mendoza'
  | 'America/Argentina/Rio_Gallegos'
  | 'America/Argentina/Salta'
  | 'America/Argentina/San_Juan'
  | 'America/Argentina/San_Luis'
  | 'America/Argentina/Tucuman'
  | 'America/Argentina/Ushuaia'
  | 'America/Aruba'
  | 'America/Asuncion'
  | 'America/Atikokan'
  | 'America/Bahia'
  | 'America/Bahia_Banderas'
  | 'America/Barbados'
  | 'America/Belem'
  | 'America/Belize'
  | 'America/Blanc-Sablon'
  | 'America/Boa_Vista'
  | 'America/Bogota'
  | 'America/Boise'
  | 'America/Cambridge_Bay'
  | 'America/Campo_Grande'
  | 'America/Cancun'
  | 'America/Caracas'
  | 'America/Cayenne'
  | 'America/Cayman'
  | 'America/Chicago'
  | 'America/Chihuahua'
  | 'America/Costa_Rica'
  | 'America/Creston'
  | 'America/Cuiaba'
  | 'America/Curacao'
  | 'America/Danmarkshavn'
  | 'America/Dawson'
  | 'America/Dawson_Creek'
  | 'America/Denver'
  | 'America/Detroit'
  | 'America/Dominica'
  | 'America/Edmonton'
  | 'America/Eirunepe'
  | 'America/El_Salvador'
  | 'America/Fort_Nelson'
  | 'America/Fortaleza'
  | 'America/Glace_Bay'
  | 'America/Goose_Bay'
  | 'America/Grand_Turk'
  | 'America/Grenada'
  | 'America/Guadeloupe'
  | 'America/Guatemala'
  | 'America/Guayaquil'
  | 'America/Guyana'
  | 'America/Halifax'
  | 'America/Havana'
  | 'America/Hermosillo'
  | 'America/Indiana/Indianapolis'
  | 'America/Indiana/Knox'
  | 'America/Indiana/Marengo'
  | 'America/Indiana/Petersburg'
  | 'America/Indiana/Tell_City'
  | 'America/Indiana/Vevay'
  | 'America/Indiana/Vincennes'
  | 'America/Indiana/Winamac'
  | 'America/Inuvik'
  | 'America/Iqaluit'
  | 'America/Jamaica'
  | 'America/Juneau'
  | 'America/Kentucky/Louisville'
  | 'America/Kentucky/Monticello'
  | 'America/Kralendijk'
  | 'America/La_Paz'
  | 'America/Lima'
  | 'America/Los_Angeles'
  | 'America/Lower_Princes'
  | 'America/Maceio'
  | 'America/Managua'
  | 'America/Manaus'
  | 'America/Marigot'
  | 'America/Martinique'
  | 'America/Matamoros'
  | 'America/Mazatlan'
  | 'America/Menominee'
  | 'America/Merida'
  | 'America/Metlakatla'
  | 'America/Mexico_City'
  | 'America/Miquelon'
  | 'America/Moncton'
  | 'America/Monterrey'
  | 'America/Montevideo'
  | 'America/Montserrat'
  | 'America/Nassau'
  | 'America/New_York'
  | 'America/Nipigon'
  | 'America/Nome'
  | 'America/Noronha'
  | 'America/North_Dakota/Beulah'
  | 'America/North_Dakota/Center'
  | 'America/North_Dakota/New_Salem'
  | 'America/Nuuk'
  | 'America/Ojinaga'
  | 'America/Panama'
  | 'America/Pangnirtung'
  | 'America/Paramaribo'
  | 'America/Phoenix'
  | 'America/Port-au-Prince'
  | 'America/Port_of_Spain'
  | 'America/Porto_Velho'
  | 'America/Puerto_Rico'
  | 'America/Punta_Arenas'
  | 'America/Rainy_River'
  | 'America/Rankin_Inlet'
  | 'America/Recife'
  | 'America/Regina'
  | 'America/Resolute'
  | 'America/Rio_Branco'
  | 'America/Santarem'
  | 'America/Santiago'
  | 'America/Santo_Domingo'
  | 'America/Sao_Paulo'
  | 'America/Scoresbysund'
  | 'America/Sitka'
  | 'America/St_Barthelemy'
  | 'America/St_Johns'
  | 'America/St_Kitts'
  | 'America/St_Lucia'
  | 'America/St_Thomas'
  | 'America/St_Vincent'
  | 'America/Swift_Current'
  | 'America/Tegucigalpa'
  | 'America/Thule'
  | 'America/Thunder_Bay'
  | 'America/Tijuana'
  | 'America/Toronto'
  | 'America/Tortola'
  | 'America/Vancouver'
  | 'America/Whitehorse'
  | 'America/Winnipeg'
  | 'America/Yakutat'
  | 'America/Yellowknife'
  | 'Antarctica/Casey'
  | 'Antarctica/Davis'
  | 'Antarctica/DumontDUrville'
  | 'Antarctica/Macquarie'
  | 'Antarctica/Mawson'
  | 'Antarctica/McMurdo'
  | 'Antarctica/Palmer'
  | 'Antarctica/Rothera'
  | 'Antarctica/Syowa'
  | 'Antarctica/Troll'
  | 'Antarctica/Vostok'
  | 'Arctic/Longyearbyen'
  | 'Asia/Aden'
  | 'Asia/Almaty'
  | 'Asia/Amman'
  | 'Asia/Anadyr'
  | 'Asia/Aqtau'
  | 'Asia/Aqtobe'
  | 'Asia/Ashgabat'
  | 'Asia/Atyrau'
  | 'Asia/Baghdad'
  | 'Asia/Bahrain'
  | 'Asia/Baku'
  | 'Asia/Bangkok'
  | 'Asia/Barnaul'
  | 'Asia/Beirut'
  | 'Asia/Bishkek'
  | 'Asia/Brunei'
  | 'Asia/Chita'
  | 'Asia/Choibalsan'
  | 'Asia/Colombo'
  | 'Asia/Damascus'
  | 'Asia/Dhaka'
  | 'Asia/Dili'
  | 'Asia/Dubai'
  | 'Asia/Dushanbe'
  | 'Asia/Famagusta'
  | 'Asia/Gaza'
  | 'Asia/Hebron'
  | 'Asia/Ho_Chi_Minh'
  | 'Asia/Hong_Kong'
  | 'Asia/Hovd'
  | 'Asia/Irkutsk'
  | 'Asia/Jakarta'
  | 'Asia/Jayapura'
  | 'Asia/Jerusalem'
  | 'Asia/Kabul'
  | 'Asia/Kamchatka'
  | 'Asia/Karachi'
  | 'Asia/Kathmandu'
  | 'Asia/Khandyga'
  | 'Asia/Kolkata'
  | 'Asia/Krasnoyarsk'
  | 'Asia/Kuala_Lumpur'
  | 'Asia/Kuching'
  | 'Asia/Kuwait'
  | 'Asia/Macau'
  | 'Asia/Magadan'
  | 'Asia/Makassar'
  | 'Asia/Manila'
  | 'Asia/Muscat'
  | 'Asia/Nicosia'
  | 'Asia/Novokuznetsk'
  | 'Asia/Novosibirsk'
  | 'Asia/Omsk'
  | 'Asia/Oral'
  | 'Asia/Phnom_Penh'
  | 'Asia/Pontianak'
  | 'Asia/Pyongyang'
  | 'Asia/Qatar'
  | 'Asia/Qostanay'
  | 'Asia/Qyzylorda'
  | 'Asia/Riyadh'
  | 'Asia/Sakhalin'
  | 'Asia/Samarkand'
  | 'Asia/Seoul'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Srednekolymsk'
  | 'Asia/Taipei'
  | 'Asia/Tashkent'
  | 'Asia/Tbilisi'
  | 'Asia/Tehran'
  | 'Asia/Thimphu'
  | 'Asia/Tokyo'
  | 'Asia/Tomsk'
  | 'Asia/Ulaanbaatar'
  | 'Asia/Urumqi'
  | 'Asia/Ust-Nera'
  | 'Asia/Vientiane'
  | 'Asia/Vladivostok'
  | 'Asia/Yakutsk'
  | 'Asia/Yangon'
  | 'Asia/Yekaterinburg'
  | 'Asia/Yerevan'
  | 'Atlantic/Azores'
  | 'Atlantic/Bermuda'
  | 'Atlantic/Canary'
  | 'Atlantic/Cape_Verde'
  | 'Atlantic/Faroe'
  | 'Atlantic/Madeira'
  | 'Atlantic/Reykjavik'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/St_Helena'
  | 'Atlantic/Stanley'
  | 'Australia/Adelaide'
  | 'Australia/Brisbane'
  | 'Australia/Broken_Hill'
  | 'Australia/Darwin'
  | 'Australia/Eucla'
  | 'Australia/Hobart'
  | 'Australia/Lindeman'
  | 'Australia/Lord_Howe'
  | 'Australia/Melbourne'
  | 'Australia/Perth'
  | 'Australia/Sydney'
  | 'Canada/Atlantic'
  | 'Canada/Central'
  | 'Canada/Eastern'
  | 'Canada/Mountain'
  | 'Canada/Newfoundland'
  | 'Canada/Pacific'
  | 'Europe/Amsterdam'
  | 'Europe/Andorra'
  | 'Europe/Astrakhan'
  | 'Europe/Athens'
  | 'Europe/Belgrade'
  | 'Europe/Berlin'
  | 'Europe/Bratislava'
  | 'Europe/Brussels'
  | 'Europe/Bucharest'
  | 'Europe/Budapest'
  | 'Europe/Busingen'
  | 'Europe/Chisinau'
  | 'Europe/Copenhagen'
  | 'Europe/Dublin'
  | 'Europe/Gibraltar'
  | 'Europe/Guernsey'
  | 'Europe/Helsinki'
  | 'Europe/Isle_of_Man'
  | 'Europe/Istanbul'
  | 'Europe/Jersey'
  | 'Europe/Kaliningrad'
  | 'Europe/Kiev'
  | 'Europe/Kirov'
  | 'Europe/Lisbon'
  | 'Europe/Ljubljana'
  | 'Europe/London'
  | 'Europe/Luxembourg'
  | 'Europe/Madrid'
  | 'Europe/Malta'
  | 'Europe/Mariehamn'
  | 'Europe/Minsk'
  | 'Europe/Monaco'
  | 'Europe/Moscow'
  | 'Europe/Oslo'
  | 'Europe/Paris'
  | 'Europe/Podgorica'
  | 'Europe/Prague'
  | 'Europe/Riga'
  | 'Europe/Rome'
  | 'Europe/Samara'
  | 'Europe/San_Marino'
  | 'Europe/Sarajevo'
  | 'Europe/Saratov'
  | 'Europe/Simferopol'
  | 'Europe/Skopje'
  | 'Europe/Sofia'
  | 'Europe/Stockholm'
  | 'Europe/Tallinn'
  | 'Europe/Tirane'
  | 'Europe/Ulyanovsk'
  | 'Europe/Uzhgorod'
  | 'Europe/Vaduz'
  | 'Europe/Vatican'
  | 'Europe/Vienna'
  | 'Europe/Vilnius'
  | 'Europe/Volgograd'
  | 'Europe/Warsaw'
  | 'Europe/Zagreb'
  | 'Europe/Zaporozhye'
  | 'Europe/Zurich'
  | 'GMT'
  | 'Indian/Antananarivo'
  | 'Indian/Chagos'
  | 'Indian/Christmas'
  | 'Indian/Cocos'
  | 'Indian/Comoro'
  | 'Indian/Kerguelen'
  | 'Indian/Mahe'
  | 'Indian/Maldives'
  | 'Indian/Mauritius'
  | 'Indian/Mayotte'
  | 'Indian/Reunion'
  | 'Pacific/Apia'
  | 'Pacific/Auckland'
  | 'Pacific/Bougainville'
  | 'Pacific/Chatham'
  | 'Pacific/Chuuk'
  | 'Pacific/Easter'
  | 'Pacific/Efate'
  | 'Pacific/Fakaofo'
  | 'Pacific/Fiji'
  | 'Pacific/Funafuti'
  | 'Pacific/Galapagos'
  | 'Pacific/Gambier'
  | 'Pacific/Guadalcanal'
  | 'Pacific/Guam'
  | 'Pacific/Honolulu'
  | 'Pacific/Kanton'
  | 'Pacific/Kiritimati'
  | 'Pacific/Kosrae'
  | 'Pacific/Kwajalein'
  | 'Pacific/Majuro'
  | 'Pacific/Marquesas'
  | 'Pacific/Midway'
  | 'Pacific/Nauru'
  | 'Pacific/Niue'
  | 'Pacific/Norfolk'
  | 'Pacific/Noumea'
  | 'Pacific/Pago_Pago'
  | 'Pacific/Palau'
  | 'Pacific/Pitcairn'
  | 'Pacific/Pohnpei'
  | 'Pacific/Port_Moresby'
  | 'Pacific/Rarotonga'
  | 'Pacific/Saipan'
  | 'Pacific/Tahiti'
  | 'Pacific/Tarawa'
  | 'Pacific/Tongatapu'
  | 'Pacific/Wake'
  | 'Pacific/Wallis'
  | 'US/Alaska'
  | 'US/Arizona'
  | 'US/Central'
  | 'US/Eastern'
  | 'US/Hawaii'
  | 'US/Mountain'
  | 'US/Pacific'
  | 'UTC'
type Type21dEnum = 'service' | 'delivery'
type Account = {
  address?:
    | {
        apartment_number?: (string | null) | undefined
        city?: string | undefined
        country?: string | undefined
        country_code?: string | undefined
        formatted_address?: string | undefined
        geocode_failed_at: string
        geocoded_at: string
        google_place_id?: string | undefined
        house_number?: string | undefined
        location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
        point_of_interest?: string | undefined
        postal_code?: string | undefined
        raw_address?: string | undefined
        state?: string | undefined
        street?: string | undefined
      }
    | undefined
  assignee_proximity_radius?: number | undefined
  auto_assign_max_distance?: (number | null) | undefined
  auto_assign_max_tasks?: (number | null) | undefined
  auto_assign_optimize?: boolean | undefined
  auto_assign_orders?: boolean | undefined
  auto_assign_rotate?: ({ [x: string]: unknown } | null) | undefined
  auto_assign_time_before?: (string | null) | undefined
  billing_address?: string | undefined
  billing_company?: string | undefined
  billing_country?: string | undefined
  billing_email?: string | undefined
  billing_method: {}
  billing_name?: string | undefined
  billing_phone?: string | undefined
  billing_vatin?: string | undefined
  calendar_task_template: string
  country_code?: CountryCodeEnum | BlankEnum | undefined
  custom_integration_url: string
  dashboard_task_template: string
  dashboard_worker_limit: number
  date_format?: DateFormatEnum | undefined
  distance_units?: DistanceUnitsEnum | undefined
  email?: string | undefined
  feature_address_autosuggest_provider?: FeatureAddressAutosuggestProviderEnum | undefined
  feature_app_task_search?: boolean | undefined
  feature_change_task_account: boolean
  feature_document_signing?: boolean | undefined
  feature_geocoding_country_code: {}
  feature_navigation_app_selection?: boolean | undefined
  feature_navigation_use_address?: boolean | undefined
  feature_show_tutorial?: boolean | undefined
  feature_show_unassigned_to_workers?: boolean | undefined
  feature_task_accept?: boolean | undefined
  feature_task_created_sound?: boolean | undefined
  feature_task_reject?: boolean | undefined
  feature_tracker_reviews_allowed?: boolean | undefined
  id: string
  language?: {} | undefined
  managers: string
  name: string
  notification_emails?: string[] | undefined
  optimization_objective?: {} | undefined
  optimize_after_create?: boolean | undefined
  owner: string
  reference_autogenerate?: boolean | undefined
  reference_length?: number | undefined
  reference_offset?: number | undefined
  reference_prefix?: string | undefined
  registry_code?: string | undefined
  review_emails?: string[] | undefined
  route_end_address?:
    | {
        apartment_number?: (string | null) | undefined
        city?: string | undefined
        country?: string | undefined
        country_code?: string | undefined
        formatted_address?: string | undefined
        geocode_failed_at: string
        geocoded_at: string
        google_place_id?: string | undefined
        house_number?: string | undefined
        location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
        point_of_interest?: string | undefined
        postal_code?: string | undefined
        raw_address?: string | undefined
        state?: string | undefined
        street?: string | undefined
      }
    | undefined
  route_start_address?:
    | {
        apartment_number?: (string | null) | undefined
        city?: string | undefined
        country?: string | undefined
        country_code?: string | undefined
        formatted_address?: string | undefined
        geocode_failed_at: string
        geocoded_at: string
        google_place_id?: string | undefined
        house_number?: string | undefined
        location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
        point_of_interest?: string | undefined
        postal_code?: string | undefined
        raw_address?: string | undefined
        state?: string | undefined
        street?: string | undefined
      }
    | undefined
  slug: string
  state: {}
  stripe_customer_id: string
  stripe_payment_method_id: string
  task_duration?: { [x: string]: unknown } | undefined
  task_expiry_duration_from_complete_after?: ({ [x: string]: unknown } | null) | undefined
  task_expiry_duration_from_complete_before?: ({ [x: string]: unknown } | null) | undefined
  task_expiry_state?: TaskExpiryStateEnum | undefined
  time_format?: TimeFormatEnum | undefined
  timezone?: TimezoneEnum | undefined
  type?: Type21dEnum | BlankEnum | undefined
  url: string
  vatin?: string | undefined
  website?: string | undefined
  workers: string
}
type PaginatedAccountList = Account[]
type PatchedAccount = {
  address?:
    | {
        apartment_number?: (string | null) | undefined
        city?: string | undefined
        country?: string | undefined
        country_code?: string | undefined
        formatted_address?: string | undefined
        geocode_failed_at: string
        geocoded_at: string
        google_place_id?: string | undefined
        house_number?: string | undefined
        location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
        point_of_interest?: string | undefined
        postal_code?: string | undefined
        raw_address?: string | undefined
        state?: string | undefined
        street?: string | undefined
      }
    | undefined
  assignee_proximity_radius?: number | undefined
  auto_assign_max_distance?: (number | null) | undefined
  auto_assign_max_tasks?: (number | null) | undefined
  auto_assign_optimize?: boolean | undefined
  auto_assign_orders?: boolean | undefined
  auto_assign_rotate?: ({ [x: string]: unknown } | null) | undefined
  auto_assign_time_before?: (string | null) | undefined
  billing_address?: string | undefined
  billing_company?: string | undefined
  billing_country?: string | undefined
  billing_email?: string | undefined
  billing_method?: {} | undefined
  billing_name?: string | undefined
  billing_phone?: string | undefined
  billing_vatin?: string | undefined
  calendar_task_template?: string | undefined
  country_code?: CountryCodeEnum | BlankEnum | undefined
  custom_integration_url?: string | undefined
  dashboard_task_template?: string | undefined
  dashboard_worker_limit?: number | undefined
  date_format?: DateFormatEnum | undefined
  distance_units?: DistanceUnitsEnum | undefined
  email?: string | undefined
  feature_address_autosuggest_provider?: FeatureAddressAutosuggestProviderEnum | undefined
  feature_app_task_search?: boolean | undefined
  feature_change_task_account?: boolean | undefined
  feature_document_signing?: boolean | undefined
  feature_geocoding_country_code?: {} | undefined
  feature_navigation_app_selection?: boolean | undefined
  feature_navigation_use_address?: boolean | undefined
  feature_show_tutorial?: boolean | undefined
  feature_show_unassigned_to_workers?: boolean | undefined
  feature_task_accept?: boolean | undefined
  feature_task_created_sound?: boolean | undefined
  feature_task_reject?: boolean | undefined
  feature_tracker_reviews_allowed?: boolean | undefined
  id?: string | undefined
  language?: {} | undefined
  managers?: string | undefined
  name?: string | undefined
  notification_emails?: string[] | undefined
  optimization_objective?: {} | undefined
  optimize_after_create?: boolean | undefined
  owner?: string | undefined
  reference_autogenerate?: boolean | undefined
  reference_length?: number | undefined
  reference_offset?: number | undefined
  reference_prefix?: string | undefined
  registry_code?: string | undefined
  review_emails?: string[] | undefined
  route_end_address?:
    | {
        apartment_number?: (string | null) | undefined
        city?: string | undefined
        country?: string | undefined
        country_code?: string | undefined
        formatted_address?: string | undefined
        geocode_failed_at: string
        geocoded_at: string
        google_place_id?: string | undefined
        house_number?: string | undefined
        location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
        point_of_interest?: string | undefined
        postal_code?: string | undefined
        raw_address?: string | undefined
        state?: string | undefined
        street?: string | undefined
      }
    | undefined
  route_start_address?:
    | {
        apartment_number?: (string | null) | undefined
        city?: string | undefined
        country?: string | undefined
        country_code?: string | undefined
        formatted_address?: string | undefined
        geocode_failed_at: string
        geocoded_at: string
        google_place_id?: string | undefined
        house_number?: string | undefined
        location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
        point_of_interest?: string | undefined
        postal_code?: string | undefined
        raw_address?: string | undefined
        state?: string | undefined
        street?: string | undefined
      }
    | undefined
  slug?: string | undefined
  state?: {} | undefined
  stripe_customer_id?: string | undefined
  stripe_payment_method_id?: string | undefined
  task_duration?: { [x: string]: unknown } | undefined
  task_expiry_duration_from_complete_after?: ({ [x: string]: unknown } | null) | undefined
  task_expiry_duration_from_complete_before?: ({ [x: string]: unknown } | null) | undefined
  task_expiry_state?: TaskExpiryStateEnum | undefined
  time_format?: TimeFormatEnum | undefined
  timezone?: TimezoneEnum | undefined
  type?: Type21dEnum | BlankEnum | undefined
  url?: string | undefined
  vatin?: string | undefined
  website?: string | undefined
  workers?: string | undefined
}
type AccountOwnerChange = { owner: string }
type AccountUser = {
  display_name: string
  email: string
  first_name: string
  id: string
  is_on_duty: boolean
  last_name: string
  phone: string
  url: string
}
type AccountStripePaymentMethodAttach = {
  set_default?: boolean | undefined
  stripe_customer_id?: string | undefined
  stripe_payment_method_id: string
}
type AccountStripeSetupIntentCreate = { payment_method_id: string }
type AccountStripePaymentMethodDetach = { stripe_payment_method_id: string }
type AccountStripePaymentMethodGet = { payment_method_id: string }
type AccountStripeSetupAttemptGet = { setup_attempt_id: string }
type AccountStripeSetupIntentGet = { setup_intent_id: string }
type AccountStripePaymentMethods = { default_payment_method_id: string }
type AccountStripePaymentMethodSetDefault = { stripe_payment_method_id: string }
type AccountStripeSetupIntentsGet = { payment_method_id?: (string | null) | undefined }
type Addon = {
  description: string
  icon: string
  id: string
  name: string
  price: string
  short_description: string
  unit: string
}
type PaginatedAddonList = Addon[]
type AuthToken = { password: string; token: string; username: string }
type BraintreeCustomer = {
  account: string
  braintree_id?: (string | null) | undefined
  company?: string | undefined
  created_at: string
  email?: string | undefined
  first_name?: string | undefined
  id: string
  last_name?: string | undefined
  payment_method_nonce?: (string | null) | undefined
  phone?: string | undefined
  updated_at: string
  url: string
  vat?: string | undefined
  website?: string | undefined
}
type PaginatedBraintreeCustomerList = BraintreeCustomer[]
type PatchedBraintreeCustomer = {
  account?: string | undefined
  braintree_id?: (string | null) | undefined
  company?: string | undefined
  created_at?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  id?: string | undefined
  last_name?: string | undefined
  payment_method_nonce?: (string | null) | undefined
  phone?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  vat?: string | undefined
  website?: string | undefined
}
type InvoiceItem = {
  created_at: string
  id: string
  invoice: string
  name: string
  quantity: string
  total: string
  unit?: string | undefined
  unit_price: string
  updated_at: string
}
type Invoice = {
  account: {
    billing_email?: string | undefined
    billing_reference?: string | undefined
    billing_vat?: boolean | undefined
    id: string
    name: string
    registry_code?: string | undefined
    slug: string
    vatin?: string | undefined
  }
  billing_method: {}
  confirmed_at: string
  confirmed_by: string
  created_at: string
  currency: string
  due_date?: (string | null) | undefined
  id: string
  items: InvoiceItem[]
  paid_at: string
  period: string[]
  pricing: string
  state: {}
  total_no_vat: string
  total_vat: string
  total_with_vat: string
  updated_at: string
  url: string
  vat: boolean
}
type PaginatedInvoiceList = Invoice[]
type PatchedInvoice = {
  account?:
    | {
        billing_email?: string | undefined
        billing_reference?: string | undefined
        billing_vat?: boolean | undefined
        id: string
        name: string
        registry_code?: string | undefined
        slug: string
        vatin?: string | undefined
      }
    | undefined
  billing_method?: {} | undefined
  confirmed_at?: string | undefined
  confirmed_by?: string | undefined
  created_at?: string | undefined
  currency?: string | undefined
  due_date?: (string | null) | undefined
  id?: string | undefined
  items?: InvoiceItem[] | undefined
  paid_at?: string | undefined
  period?: string[] | undefined
  pricing?: string | undefined
  state?: {} | undefined
  total_no_vat?: string | undefined
  total_vat?: string | undefined
  total_with_vat?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  vat?: boolean | undefined
}
type StripePaymentStateEnum =
  | 'draft'
  | 'failed'
  | 'saved'
  | 'settled'
  | 'rejected'
  | 'retried'
  | 'cancelled'
type StripeStateEnum =
  | 'requires_payment_method'
  | 'requires_confirmation'
  | 'requires_capture'
  | 'requires_action'
  | 'processing'
  | 'succeeded'
  | 'canceled'
type NullEnum = null
type StripePayment = {
  amount: string
  billable_account: string
  created_at: string
  currency?: string | undefined
  id: string
  invoice: string | null
  response?: (string | null) | undefined
  state?: StripePaymentStateEnum | undefined
  stripe_id?: (string | null) | undefined
  stripe_state?: StripeStateEnum | NullEnum | undefined
  timestamp?: (string | null) | undefined
  updated_at: string
  url: string
}
type PaginatedStripePaymentList = StripePayment[]
type BraintreeTransaction = {
  amount: string
  created_at: string
  currency?: string | undefined
  customer: string
  id: string
  invoice: string
  response: string
  status?: string | undefined
  timestamp: string
  type?: string | undefined
  updated_at: string
  url: string
}
type PaginatedBraintreeTransactionList = BraintreeTransaction[]
type ClientRole = {
  account: string
  client: string
  created_at: string
  id: string
  is_active?: boolean | undefined
  is_manager?: boolean | undefined
  phone?: string | undefined
  updated_at: string
  url: string
  user: string
}
type PaginatedClientRoleList = ClientRole[]
type PatchedClientRole = {
  account?: string | undefined
  client?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  is_active?: boolean | undefined
  is_manager?: boolean | undefined
  phone?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  user?: string | undefined
}
type Client = {
  account: string
  archived?: boolean | undefined
  contact_addresses: { [x: string]: { [x: string]: unknown } }[]
  created_at: string
  id: string
  name: string
  slug: string
  updated_at: string
  url: string
}
type PaginatedClientList = Client[]
type PatchedClient = {
  account?: string | undefined
  archived?: boolean | undefined
  contact_addresses?: { [x: string]: { [x: string]: unknown } }[] | undefined
  created_at?: string | undefined
  id?: string | undefined
  name?: string | undefined
  slug?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type LevelEnum = 'danger' | 'warning' | 'success'
type ConfigurationNotification = {
  level: LevelEnum
  message: string
  open_in_new_window?: boolean | undefined
  persist?: boolean | undefined
  url: string | null
}
type ConfigurationSerializerV2 = {
  account: {
    address?:
      | {
          apartment_number?: (string | null) | undefined
          city?: string | undefined
          country?: string | undefined
          country_code?: string | undefined
          formatted_address?: string | undefined
          geocode_failed_at: string
          geocoded_at: string
          google_place_id?: string | undefined
          house_number?: string | undefined
          location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
          point_of_interest?: string | undefined
          postal_code?: string | undefined
          raw_address?: string | undefined
          state?: string | undefined
          street?: string | undefined
        }
      | undefined
    assignee_proximity_radius?: number | undefined
    auto_assign_max_distance?: (number | null) | undefined
    auto_assign_max_tasks?: (number | null) | undefined
    auto_assign_optimize?: boolean | undefined
    auto_assign_orders?: boolean | undefined
    auto_assign_rotate?: ({ [x: string]: unknown } | null) | undefined
    auto_assign_time_before?: (string | null) | undefined
    billing_address?: string | undefined
    billing_company?: string | undefined
    billing_country?: string | undefined
    billing_email?: string | undefined
    billing_method: {}
    billing_name?: string | undefined
    billing_phone?: string | undefined
    billing_vatin?: string | undefined
    calendar_task_template: string
    country_code?: CountryCodeEnum | BlankEnum | undefined
    custom_integration_url: string
    dashboard_task_template: string
    dashboard_worker_limit: number
    date_format?: DateFormatEnum | undefined
    distance_units?: DistanceUnitsEnum | undefined
    email?: string | undefined
    feature_address_autosuggest_provider?: FeatureAddressAutosuggestProviderEnum | undefined
    feature_app_task_search?: boolean | undefined
    feature_change_task_account: boolean
    feature_document_signing?: boolean | undefined
    feature_geocoding_country_code: {}
    feature_navigation_app_selection?: boolean | undefined
    feature_navigation_use_address?: boolean | undefined
    feature_show_tutorial?: boolean | undefined
    feature_show_unassigned_to_workers?: boolean | undefined
    feature_task_accept?: boolean | undefined
    feature_task_created_sound?: boolean | undefined
    feature_task_reject?: boolean | undefined
    feature_tracker_reviews_allowed?: boolean | undefined
    id: string
    language?: {} | undefined
    managers: string
    name: string
    notification_emails?: string[] | undefined
    optimization_objective?: {} | undefined
    optimize_after_create?: boolean | undefined
    owner: string
    reference_autogenerate?: boolean | undefined
    reference_length?: number | undefined
    reference_offset?: number | undefined
    reference_prefix?: string | undefined
    registry_code?: string | undefined
    review_emails?: string[] | undefined
    route_end_address?:
      | {
          apartment_number?: (string | null) | undefined
          city?: string | undefined
          country?: string | undefined
          country_code?: string | undefined
          formatted_address?: string | undefined
          geocode_failed_at: string
          geocoded_at: string
          google_place_id?: string | undefined
          house_number?: string | undefined
          location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
          point_of_interest?: string | undefined
          postal_code?: string | undefined
          raw_address?: string | undefined
          state?: string | undefined
          street?: string | undefined
        }
      | undefined
    route_start_address?:
      | {
          apartment_number?: (string | null) | undefined
          city?: string | undefined
          country?: string | undefined
          country_code?: string | undefined
          formatted_address?: string | undefined
          geocode_failed_at: string
          geocoded_at: string
          google_place_id?: string | undefined
          house_number?: string | undefined
          location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
          point_of_interest?: string | undefined
          postal_code?: string | undefined
          raw_address?: string | undefined
          state?: string | undefined
          street?: string | undefined
        }
      | undefined
    slug: string
    state: {}
    stripe_customer_id: string
    stripe_payment_method_id: string
    task_duration?: { [x: string]: unknown } | undefined
    task_expiry_duration_from_complete_after?: ({ [x: string]: unknown } | null) | undefined
    task_expiry_duration_from_complete_before?: ({ [x: string]: unknown } | null) | undefined
    task_expiry_state?: TaskExpiryStateEnum | undefined
    time_format?: TimeFormatEnum | undefined
    timezone?: TimezoneEnum | undefined
    type?: Type21dEnum | BlankEnum | undefined
    url: string
    vatin?: string | undefined
    website?: string | undefined
    workers: string
  }
  app: {}
  auth: { [x: string]: { [x: string]: unknown } }
  billing: { [x: string]: { [x: string]: unknown } }
  defaults: { distance_units: string; task_duration: { [x: string]: unknown } }
  features: { [x: string]: { [x: string]: unknown } }
  id: string
  is_client_role?: boolean | undefined
  is_staff?: boolean | undefined
  legacy_views: { [x: string]: { [x: string]: unknown } }
  location: { coordinates: number[]; type: LocationTypeEnum }
  notifications: ConfigurationNotification[]
  permissions: { [x: string]: { [x: string]: unknown } }
  settings: {
    date_format: string
    task_command_queue_limit: { [x: string]: unknown }
    time_format: string
  }
  templates: { [x: string]: { [x: string]: unknown } }
  tracking: { [x: string]: { [x: string]: unknown } }
  user: {
    display_name: string
    email: string
    first_name?: string | undefined
    id: string
    intercom_hash: string
    last_name?: string | undefined
    phone?: string | undefined
    signature_image?: string | undefined
    url: string
  }
  version: string
}
type PaginatedConfigurationSerializerV2List = ConfigurationSerializerV2[]
type Location = { coordinates: number[]; type: LocationTypeEnum }
type ContactAddressExport = {
  account__name?: string | undefined
  address__apartment_number?: string | undefined
  address__city?: string | undefined
  address__country?: string | undefined
  address__country_code?: string | undefined
  address__formatted_address?: string | undefined
  address__google_place_id?: string | undefined
  address__house_number?: string | undefined
  address__location: Location
  address__point_of_interest?: string | undefined
  address__postal_code?: string | undefined
  address__raw_address?: string | undefined
  address__state?: string | undefined
  address__street?: string | undefined
  contact__company?: string | undefined
  contact__emails?: string[] | undefined
  contact__name?: string | undefined
  contact__notes?: string | undefined
  contact__phones?: string[] | undefined
  created_at: string
  external_id?: (string | null) | undefined
  id: string
  is_orderer?: boolean | undefined
  is_receiver?: boolean | undefined
  source?: string | undefined
  updated_at: string
}
type PaginatedContactAddressExportList = ContactAddressExport[]
type ContactAddressBackgroundImport = {
  account: string
  celery_task_id: string
  completed_at: string
  contact_addresses_created: string[]
  contact_addresses_data: { [x: string]: { [x: string]: unknown } }[]
  created_at: string
  created_by: string
  errors: { [x: string]: { [x: string]: unknown } }
  failed_at: string
  id: string
  started_at: string
  state: {}
  updated_at: string
  url: string
}
type PaginatedContactAddressBackgroundImportList = ContactAddressBackgroundImport[]
type NestedAddress = {
  apartment_number?: (string | null) | undefined
  city?: string | undefined
  country?: string | undefined
  country_code?: string | undefined
  formatted_address?: string | undefined
  geocode_failed_at: string
  geocoded_at: string
  google_place_id?: string | undefined
  house_number?: string | undefined
  location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  point_of_interest?: string | undefined
  postal_code?: string | undefined
  raw_address?: string | undefined
  state?: string | undefined
  street?: string | undefined
}
type NestedContact = {
  company?: string | undefined
  emails?: string[] | undefined
  name?: string | undefined
  notes?: string | undefined
  phones?: string[] | undefined
}
type ContactAddress = {
  account: string
  address: NestedAddress
  client?: string | undefined
  contact: NestedContact
  created_at: string
  external_id?: (string | null) | undefined
  id: string
  is_orderer?: boolean | undefined
  is_receiver?: boolean | undefined
  source?: string | undefined
  updated_at: string
  url: string
}
type PaginatedContactAddressList = ContactAddress[]
type PatchedContactAddress = {
  account?: string | undefined
  address?: NestedAddress | undefined
  client?: string | undefined
  contact?: NestedContact | undefined
  created_at?: string | undefined
  external_id?: (string | null) | undefined
  id?: string | undefined
  is_orderer?: boolean | undefined
  is_receiver?: boolean | undefined
  source?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type Device = {
  battery_level?: (number | null) | undefined
  brand?: (string | null) | undefined
  build_number?: (string | null) | undefined
  created_at: string
  device_country?: (string | null) | undefined
  device_id?: (string | null) | undefined
  device_locale?: (string | null) | undefined
  free_disk_storage?: (bigint | null) | undefined
  id: string
  ios_app_tracking_permission?: (string | null) | undefined
  is_charging?: (boolean | null) | undefined
  location_permission?: (string | null) | undefined
  manufacturer?: (string | null) | undefined
  model?: (string | null) | undefined
  motion_permission?: (string | null) | undefined
  notification_permission?: (string | null) | undefined
  readable_version?: (string | null) | undefined
  system_name?: (string | null) | undefined
  system_version?: (string | null) | undefined
  timezone?: TimezoneEnum | BlankEnum | undefined
  url: string
  user: string
  version?: (string | null) | undefined
}
type PaginatedDeviceList = Device[]
type SourceEnum = 'web' | 'mobile' | 'integration'
type Document = {
  account?: string | undefined
  created_at: string
  created_by: string
  description?: string | undefined
  external_id?: (string | null) | undefined
  file: string
  file_name: string
  file_upload?: (string | null) | undefined
  id: string
  mimetype: string
  order?: (string | null) | undefined
  source?: SourceEnum | BlankEnum | NullEnum | undefined
  task?: (string | null) | undefined
  thumbnail: string
  updated_at: string
  url: string
  visible_to_client?: boolean | undefined
  visible_to_worker?: boolean | undefined
}
type PaginatedDocumentList = Document[]
type DocumentDeleteAction = { account: string; documents: string[] }
type Email = {
  account: string
  created_at: string
  external_id?: string | undefined
  failed_at: string
  from_email?: string | undefined
  id: string
  message: string
  notification: string
  received_at: string
  reply_to_email?: string | undefined
  sender: string
  sent_at: string
  state: {}
  subject: string
  to_emails?: string[] | undefined
  url: string
}
type PaginatedEmailList = Email[]
type PatchedEmail = {
  account?: string | undefined
  created_at?: string | undefined
  external_id?: string | undefined
  failed_at?: string | undefined
  from_email?: string | undefined
  id?: string | undefined
  message?: string | undefined
  notification?: string | undefined
  received_at?: string | undefined
  reply_to_email?: string | undefined
  sender?: string | undefined
  sent_at?: string | undefined
  state?: {} | undefined
  subject?: string | undefined
  to_emails?: string[] | undefined
  url?: string | undefined
}
type ExportModelEnum = 'tasks'
type FormatEnum = 'json' | 'xlsx'
type Export = {
  account: string
  created_at: string
  export_model: ExportModelEnum
  field_names?: (string[] | null) | undefined
  format: FormatEnum
  id: string
  link: string
  updated_at: string
  url: string
}
type PaginatedExportList = Export[]
type PatchedExport = {
  account?: string | undefined
  created_at?: string | undefined
  export_model?: ExportModelEnum | undefined
  field_names?: (string[] | null) | undefined
  format?: FormatEnum | undefined
  id?: string | undefined
  link?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type S3FileUpload = {
  created_at: string
  created_by: string
  file: string
  file_name: string
  file_type: string
  id: string
  s3_signature: { [x: string]: { [x: string]: unknown } } | null
  source?: SourceEnum | BlankEnum | NullEnum | undefined
  updated_at: string
  url: string
}
type PaginatedS3FileUploadList = S3FileUpload[]
type FormRule = {
  account: string
  edit_url: string
  id: string
  is_active?: boolean | undefined
  name: string
  pdf_url?: (string | null) | undefined
  rules: { [x: string]: { [x: string]: unknown } }
  url: string
  view_url?: (string | null) | undefined
}
type PaginatedFormRuleList = FormRule[]
type PatchedFormRule = {
  account?: string | undefined
  edit_url?: string | undefined
  id?: string | undefined
  is_active?: boolean | undefined
  name?: string | undefined
  pdf_url?: (string | null) | undefined
  rules?: { [x: string]: { [x: string]: unknown } } | undefined
  url?: string | undefined
  view_url?: (string | null) | undefined
}
type IntegrationRequest = {
  account: string
  id: string
  name: string
  notes?: string | undefined
  user: string
}
type ValueTypeEnum = 'string' | 'integer' | 'decimal' | 'choice'
type Metafield = {
  account: string
  choices?: (string[] | null) | undefined
  choices_url?: (string | null) | undefined
  created_at: string
  field_name: string
  id: string
  is_editable?: boolean | undefined
  is_editable_assignee?: boolean | undefined
  is_persistent?: boolean | undefined
  is_required?: boolean | undefined
  is_searchable?: boolean | undefined
  key: string
  label?: string | undefined
  namespace?: string | undefined
  ordering?: number | undefined
  show_in_detail_view?: boolean | undefined
  show_in_list_view?: boolean | undefined
  show_in_mobile_app?: boolean | undefined
  show_in_pod?: boolean | undefined
  show_when_task_type_assignment?: boolean | undefined
  show_when_task_type_drop_off?: boolean | undefined
  show_when_task_type_pick_up?: boolean | undefined
  updated_at: string
  url: string
  value_type?: ValueTypeEnum | undefined
}
type PaginatedMetafieldList = Metafield[]
type PatchedMetafield = {
  account?: string | undefined
  choices?: (string[] | null) | undefined
  choices_url?: (string | null) | undefined
  created_at?: string | undefined
  field_name?: string | undefined
  id?: string | undefined
  is_editable?: boolean | undefined
  is_editable_assignee?: boolean | undefined
  is_persistent?: boolean | undefined
  is_required?: boolean | undefined
  is_searchable?: boolean | undefined
  key?: string | undefined
  label?: string | undefined
  namespace?: string | undefined
  ordering?: number | undefined
  show_in_detail_view?: boolean | undefined
  show_in_list_view?: boolean | undefined
  show_in_mobile_app?: boolean | undefined
  show_in_pod?: boolean | undefined
  show_when_task_type_assignment?: boolean | undefined
  show_when_task_type_drop_off?: boolean | undefined
  show_when_task_type_pick_up?: boolean | undefined
  updated_at?: string | undefined
  url?: string | undefined
  value_type?: ValueTypeEnum | undefined
}
type EventEnum =
  | 'create'
  | 'assign'
  | 'unassign'
  | 'reject'
  | 'accept'
  | 'unaccept'
  | 'transit'
  | 'activate'
  | 'complete'
  | 'fail'
  | 'cancel'
  | 'assignee_near'
  | 'assignee_away'
  | 'updated'
type RecipientEnum = 'account' | 'assignee' | 'orderer' | 'contact' | 'client'
type TaskStateEnum =
  | 'unassigned'
  | 'assigned'
  | 'accepted'
  | 'transit'
  | 'active'
  | 'completed'
  | 'failed'
  | 'cancelled'
type TaskCategoryEnum = 'assignment' | 'pick_up' | 'drop_off' | 'warehouse'
type NotificationTemplate = {
  account: string
  created_at: string
  email_reply_to?: string | undefined
  emails?: string[] | undefined
  event?: EventEnum | BlankEnum | undefined
  id: string
  is_active?: boolean | undefined
  message: string
  name: string
  phones?: string[] | undefined
  recipient?: RecipientEnum | BlankEnum | NullEnum | undefined
  scheduled_time_change?: boolean | undefined
  state?: TaskStateEnum | BlankEnum | undefined
  task_category?: TaskCategoryEnum | BlankEnum | NullEnum | undefined
  updated_at: string
  url: string
  via_app?: boolean | undefined
  via_email?: boolean | undefined
  via_sms?: boolean | undefined
}
type PaginatedNotificationTemplateList = NotificationTemplate[]
type PatchedNotificationTemplate = {
  account?: string | undefined
  created_at?: string | undefined
  email_reply_to?: string | undefined
  emails?: string[] | undefined
  event?: EventEnum | BlankEnum | undefined
  id?: string | undefined
  is_active?: boolean | undefined
  message?: string | undefined
  name?: string | undefined
  phones?: string[] | undefined
  recipient?: RecipientEnum | BlankEnum | NullEnum | undefined
  scheduled_time_change?: boolean | undefined
  state?: TaskStateEnum | BlankEnum | undefined
  task_category?: TaskCategoryEnum | BlankEnum | NullEnum | undefined
  updated_at?: string | undefined
  url?: string | undefined
  via_app?: boolean | undefined
  via_email?: boolean | undefined
  via_sms?: boolean | undefined
}
type RenderRequest = { task: string }
type AssigneeProximityEnum = 'away' | 'near'
type Notification = {
  add_tracking_link?: boolean | undefined
  assignee_proximity?: AssigneeProximityEnum | BlankEnum | NullEnum | undefined
  created_at: string
  emails?: (string[] | null) | undefined
  event?: EventEnum | BlankEnum | NullEnum | undefined
  id: string
  message?: string | undefined
  method: {}
  phones?: string[] | undefined
  recipient?: RecipientEnum | BlankEnum | NullEnum | undefined
  sent_at?: (string | null) | undefined
  sms_count: number
  state?: TaskStateEnum | BlankEnum | NullEnum | undefined
  task: string
  template?: (string | null) | undefined
  updated_at: string
  url: string
  via_app: boolean
  via_email: boolean
  via_sms: boolean
}
type PaginatedNotificationList = Notification[]
type TaskSerializerV2 = {
  account: string
  actions: { [x: string]: { [x: string]: unknown } }
  address?: NestedAddress | undefined
  assignee?: (string | null) | undefined
  assignee_proximity: {}
  auto_assign?: boolean | undefined
  barcodes?: string[] | undefined
  cancelled_at: string
  category?: TaskCategoryEnum | undefined
  complete_after?: (string | null) | undefined
  complete_before?: (string | null) | undefined
  completed_at: string
  contact?: NestedContact | undefined
  contact_address?: (string | null) | undefined
  contact_address_external_id?: (string | null) | undefined
  counts: { [x: string]: { [x: string]: unknown } }
  created_at: string
  description?: string | undefined
  documents?: string[] | undefined
  duration?: ({ [x: string]: unknown } | null) | undefined
  external_id?: (string | null) | undefined
  forms: { [x: string]: { [x: string]: unknown } }
  id?: (string | null) | undefined
  issues: string[]
  metafields?: { [x: string]: { [x: string]: unknown } } | undefined
  order?: (string | null) | undefined
  orderer?: (string | null) | undefined
  orderer_name: string
  position?: (number | null) | undefined
  priority?: number | undefined
  reference?: string | undefined
  route?: (string | null) | undefined
  scheduled_time?: (string | null) | undefined
  signatures?: string[] | undefined
  size?: (number[] | null) | undefined
  state: {}
  trackers: string[]
  updated_at: string
  url: string
}
type OrderSerializerV2 = {
  account: string
  auto_assign?: boolean | undefined
  client?: string | undefined
  created_at: string
  created_by: string
  description?: string | undefined
  documents: string[]
  external_id?: (string | null) | undefined
  id?: (string | null) | undefined
  orderer?: NestedContact | undefined
  reference?: string | undefined
  tasks?: string[] | undefined
  tasks_data?: TaskSerializerV2[] | undefined
  updated_at: string
  url: string
}
type PaginatedOrderSerializerV2List = OrderSerializerV2[]
type PatchedOrderSerializerV2 = {
  account?: string | undefined
  auto_assign?: boolean | undefined
  client?: string | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  description?: string | undefined
  documents?: string[] | undefined
  external_id?: (string | null) | undefined
  id?: (string | null) | undefined
  orderer?: NestedContact | undefined
  reference?: string | undefined
  tasks?: string[] | undefined
  tasks_data?: TaskSerializerV2[] | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type PasswordChange = { new_password1: string; new_password2: string; old_password: string }
type PasswordReset = { email: string }
type PasswordResetConfirm = {
  new_password1: string
  new_password2: string
  token: string
  uidb64: string
}
type PushNotification = {
  account: string
  created_at: string
  error?: (string | null) | undefined
  event?: EventEnum | BlankEnum | NullEnum | undefined
  external_id?: (string | null) | undefined
  failed_at: string
  id: string
  message: string
  notification: string
  pending_at: string
  recipient: string
  sent_at: string
  state: {}
  subject?: string | undefined
  task: string
  url: string
}
type PaginatedPushNotificationList = PushNotification[]
type PatchedPushNotification = {
  account?: string | undefined
  created_at?: string | undefined
  error?: (string | null) | undefined
  event?: EventEnum | BlankEnum | NullEnum | undefined
  external_id?: (string | null) | undefined
  failed_at?: string | undefined
  id?: string | undefined
  message?: string | undefined
  notification?: string | undefined
  pending_at?: string | undefined
  recipient?: string | undefined
  sent_at?: string | undefined
  state?: {} | undefined
  subject?: string | undefined
  task?: string | undefined
  url?: string | undefined
}
type Recurrence = {
  account: string
  assignee?: (string | null) | undefined
  created_at: string
  created_by: string
  id: string
  is_active?: boolean | undefined
  last_recurred_at: string
  last_scheduled_at: string
  next_scheduled_at: string
  order: string
  rrule: string
  tasks_data?: { [x: string]: { [x: string]: unknown } } | undefined
  timezone?: TimezoneEnum | undefined
  updated_at: string
  url: string
}
type PaginatedRecurrenceList = Recurrence[]
type PatchedRecurrence = {
  account?: string | undefined
  assignee?: (string | null) | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  id?: string | undefined
  is_active?: boolean | undefined
  last_recurred_at?: string | undefined
  last_scheduled_at?: string | undefined
  next_scheduled_at?: string | undefined
  order?: string | undefined
  rrule?: string | undefined
  tasks_data?: { [x: string]: { [x: string]: unknown } } | undefined
  timezone?: TimezoneEnum | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type RegistrationAccount = {
  country_code?: CountryCodeEnum | BlankEnum | undefined
  id: string
  language?: {} | undefined
  name: string
  timezone?: TimezoneEnum | BlankEnum | NullEnum | undefined
  type?: Type21dEnum | BlankEnum | undefined
  url: string
  website?: string | undefined
}
type RegistrationUser = {
  email: string
  id: string
  name: string
  password: string
  phone?: string | undefined
  url: string
}
type Registration = { account: RegistrationAccount; token: string; user: RegistrationUser }
type TasksStatesCount = {
  accepted: number
  active: number
  assigned: number
  cancelled: number
  completed: number
  failed: number
  transit: number
  unassigned: number
}
type TasksStatesCountResponse = { dates: { [x: string]: TasksStatesCount } }
type Review = {
  comment?: string | undefined
  created_at: string
  id: string
  last_assignee: string
  last_task: string
  rating: number
  tracker: string
}
type PaginatedReviewList = Review[]
type ObjectiveEnum = 'vehicles' | 'transport_time' | 'completion_time'
type RouteOptimizationSerializerV2 = {
  account: string
  assignees: string[]
  commit?: boolean | undefined
  commited_at: string
  completed_at: string
  created_at: string
  created_by?: string | undefined
  end_location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  errors: string
  failed_at: string
  id: string
  objective?: ObjectiveEnum | NullEnum | undefined
  ready_at: string
  scheduled_at: string
  start_location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  start_time?: (string | null) | undefined
  started_at: string
  state: {}
  tasks: string[]
  total_distance: number
  total_duration: { [x: string]: unknown }
  unassign_not_optimal?: boolean | undefined
  updated_at: string
  url: string
}
type PaginatedRouteOptimizationSerializerV2List = RouteOptimizationSerializerV2[]
type Route = {
  account: string
  assignee?: string | undefined
  code: string
  created_at: string
  description?: string | undefined
  end_location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  end_time?: (string | null) | undefined
  external_id?: (string | null) | undefined
  id: string
  start_location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  start_time?: (string | null) | undefined
  updated_at: string
  url: string
}
type PaginatedRouteList = Route[]
type PatchedRoute = {
  account?: string | undefined
  assignee?: string | undefined
  code?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  end_location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  end_time?: (string | null) | undefined
  external_id?: (string | null) | undefined
  id?: string | undefined
  start_location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  start_time?: (string | null) | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type Order = {
  account: string
  auto_assign?: boolean | undefined
  client?: (string | null) | undefined
  created_at: string
  created_by: string
  external_id?: (string | null) | undefined
  id?: (string | null) | undefined
  reference?: string | undefined
  tasks: string[]
  updated_at: string
  url: string
}
type TaskMetadata = {
  accepted_distance?: (number | null) | undefined
  accepted_duration?: ({ [x: string]: unknown } | null) | undefined
  active_distance?: (number | null) | undefined
  active_duration?: ({ [x: string]: unknown } | null) | undefined
  assigned_distance?: (number | null) | undefined
  assigned_duration?: ({ [x: string]: unknown } | null) | undefined
  cancelled_distance?: (number | null) | undefined
  cancelled_duration?: ({ [x: string]: unknown } | null) | undefined
  completed_distance?: (number | null) | undefined
  completed_duration?: ({ [x: string]: unknown } | null) | undefined
  documents_count?: (number | null) | undefined
  events_count?: (number | null) | undefined
  failed_distance?: (number | null) | undefined
  failed_duration?: ({ [x: string]: unknown } | null) | undefined
  forms_completed_count?: (number | null) | undefined
  forms_count?: (number | null) | undefined
  id: string
  last_accepted_at?: (string | null) | undefined
  last_active_at?: (string | null) | undefined
  last_assigned_at?: (string | null) | undefined
  last_cancelled_at?: (string | null) | undefined
  last_completed_at?: (string | null) | undefined
  last_failed_at?: (string | null) | undefined
  last_task_event_notes?: string | undefined
  last_transit_at?: (string | null) | undefined
  last_unassigned_at?: (string | null) | undefined
  signatures_count?: (number | null) | undefined
  task: string
  task_event_notes_count?: (number | null) | undefined
  transit_distance?: (number | null) | undefined
  transit_duration?: ({ [x: string]: unknown } | null) | undefined
  unassigned_distance?: (number | null) | undefined
  unassigned_duration?: ({ [x: string]: unknown } | null) | undefined
  url: string
}
type LegacyNestedContact = {
  company?: string | undefined
  email?: (string | null) | undefined
  emails?: string[] | undefined
  name?: string | undefined
  notes?: string | undefined
  phone?: (string | null) | undefined
  phones?: string[] | undefined
}
type LegacyTask = {
  account: string
  actions: { [x: string]: { [x: string]: unknown } }
  address: NestedAddress
  assignee?: (string | null) | undefined
  assignee_proximity: {}
  auto_assign?: boolean | undefined
  cancelled_at: string
  category?: TaskCategoryEnum | undefined
  complete_after?: (string | null) | undefined
  complete_before?: (string | null) | undefined
  completed_at: string
  contact?: LegacyNestedContact | undefined
  counts: { [x: string]: { [x: string]: unknown } }
  created_at: string
  created_by: string
  description?: string | undefined
  documents: string
  duration?: ({ [x: string]: unknown } | null) | undefined
  events: string
  external_id?: (string | null) | undefined
  forms: { [x: string]: { [x: string]: unknown } }
  id?: (string | null) | undefined
  is_full_load?: boolean | undefined
  issues: string[]
  metafields?: { [x: string]: { [x: string]: unknown } } | undefined
  order?: (string | null) | undefined
  order_reference: string
  orderer?: (string | null) | undefined
  orderer_name: string
  position?: (number | null) | undefined
  priority?: number | undefined
  receiver?: (string | null) | undefined
  reference?: string | undefined
  route?: (string | null) | undefined
  scheduled_time?: (string | null) | undefined
  signatures: string
  size?: (number[] | null) | undefined
  state: {}
  updated_at: string
  url: string
}
type TimeLocationStateEnum = 'unknown' | 'stopped' | 'moving'
type WorkerFeature = {
  accuracy?: (number | null) | undefined
  altitude?: (number | null) | undefined
  battery_level?: (string | null) | undefined
  created_at: string
  heading?: (number | null) | undefined
  id: string
  location: Location
  model: string
  source: string
  speed?: (number | null) | undefined
  state?: TimeLocationStateEnum | undefined
  time: string
  time_location: string
  updated_at: string
  url: string
  user: string
  user_name: string
}
type DashboardScene = {
  assigned_task_counts: { [x: string]: { [x: string]: unknown } }
  orders: Order[]
  task_metadatas: TaskMetadata[]
  tasks: LegacyTask[]
  updated_at: string
  worker_features: WorkerFeature[]
  workers: AccountUser[]
}
type PaginatedDashboardSceneList = DashboardScene[]
type PublicUser = { display_name: string; email: string; id: string; url: string }
type OrderListScene = {
  assignees: PublicUser[]
  clients: Client[]
  orders: Order[]
  tasks: LegacyTask[]
}
type PaginatedOrderListSceneList = OrderListScene[]
type ReadableUser = {
  display_name: string
  email: string
  first_name?: string | undefined
  id: string
  intercom_hash: string
  last_name?: string | undefined
  phone?: string | undefined
  signature_image?: string | undefined
  url: string
}
type Task = {
  account: string
  actions: { [x: string]: { [x: string]: unknown } }
  address: NestedAddress
  assignee?: (string | null) | undefined
  assignee_proximity: {}
  auto_assign?: boolean | undefined
  cancelled_at: string
  category?: TaskCategoryEnum | undefined
  complete_after?: (string | null) | undefined
  complete_before?: (string | null) | undefined
  completed_at: string
  contact?: NestedContact | undefined
  counts: { [x: string]: { [x: string]: unknown } }
  created_at: string
  created_by: string
  description?: string | undefined
  documents: string
  duration?: ({ [x: string]: unknown } | null) | undefined
  events: string
  external_id?: (string | null) | undefined
  forms: { [x: string]: { [x: string]: unknown } }
  id?: (string | null) | undefined
  is_full_load?: boolean | undefined
  issues: string[]
  metafields?: { [x: string]: { [x: string]: unknown } } | undefined
  order?: (string | null) | undefined
  order_reference: string
  orderer?: (string | null) | undefined
  orderer_name: string
  position?: (number | null) | undefined
  priority?: number | undefined
  receiver?: (string | null) | undefined
  reference?: string | undefined
  route?: (string | null) | undefined
  scheduled_time?: (string | null) | undefined
  signatures: string
  size?: (number[] | null) | undefined
  state: {}
  updated_at: string
  url: string
}
type RecurrenceListScene = {
  assignees: ReadableUser[]
  clients: Client[]
  orders: Order[]
  recurrences: Recurrence[]
  tasks: Task[]
}
type PaginatedRecurrenceListSceneList = RecurrenceListScene[]
type FieldEnum = 'state' | 'assignee_proximity'
type TaskEvent = {
  account: string
  assignee: string
  created_at: string
  event: {}
  field: FieldEnum | BlankEnum
  from_state: {}
  id: string
  location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  notes?: string | undefined
  task: string
  task_command: string
  to_state: {}
  updated_at: string
  url: string
  user: string
}
type TaskListScene = {
  clients: Client[]
  orders: Order[]
  task_events_with_notes: TaskEvent[]
  task_metadatas: TaskMetadata[]
  tasks: LegacyTask[]
  updated_at: string
  users: PublicUser[]
}
type PaginatedTaskListSceneList = TaskListScene[]
type Signature = {
  account?: string | undefined
  created_at: string
  created_by: string
  documents?: string[] | undefined
  file: string
  file_name: string
  file_upload: string
  id: string
  location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  mimetype: string
  signer: NestedContact
  source?: SourceEnum | BlankEnum | NullEnum | undefined
  task: string
  thumbnail: string
  updated_at: string
  url: string
}
type PaginatedSignatureList = Signature[]
type SignatureDeleteAction = { account: string; signatures: string[] }
type SMS = {
  account: string
  alphanumeric_sender_id?: string | undefined
  created_at: string
  error?: (string | null) | undefined
  external_id?: string | undefined
  failed_at: string
  id: string
  message?: (string | null) | undefined
  notification: string
  phone: string
  received_at: string
  segments_count?: number | undefined
  sender: string
  sent_at: string
  state: {}
  url: string
}
type PaginatedSMSList = SMS[]
type PatchedSMS = {
  account?: string | undefined
  alphanumeric_sender_id?: string | undefined
  created_at?: string | undefined
  error?: (string | null) | undefined
  external_id?: string | undefined
  failed_at?: string | undefined
  id?: string | undefined
  message?: (string | null) | undefined
  notification?: string | undefined
  phone?: string | undefined
  received_at?: string | undefined
  segments_count?: number | undefined
  sender?: string | undefined
  sent_at?: string | undefined
  state?: {} | undefined
  url?: string | undefined
}
type TaskAddressFeature = {
  category?: TaskCategoryEnum | undefined
  formatted_address: string
  geometry: Location
  id: string
  model: string
  state?: TaskStateEnum | undefined
  task: string
}
type PaginatedTaskAddressFeatureList = TaskAddressFeature[]
type ActionEnum =
  | 'update'
  | 'reassign'
  | 'assign'
  | 'accept'
  | 'unaccept'
  | 'reject'
  | 'unassign'
  | 'transit'
  | 'activate'
  | 'complete'
  | 'fail'
  | 'cancel'
  | 'assignee_near'
  | 'assignee_away'
type TaskCommandStateEnum = 'pending' | 'accepted' | 'rejected'
type TaskCommandTaskData = {
  address?: NestedAddress | undefined
  metafields?: { [x: string]: { [x: string]: unknown } } | undefined
  position?: number | undefined
  scheduled_time?: string | undefined
}
type TaskCommand = {
  accepted_at?: (string | null) | undefined
  account: string
  action: ActionEnum
  assignee?: (string | null) | undefined
  created_at: string
  error_message?: string | undefined
  external_id?: (string | null) | undefined
  id: string
  location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  notes?: string | undefined
  rejected_at?: (string | null) | undefined
  state?: TaskCommandStateEnum | undefined
  task: string
  task_data?: TaskCommandTaskData | undefined
  time: string
  updated_at: string
  url: string
  user: string
}
type PaginatedTaskCommandList = TaskCommand[]
type TaskEventTrack = {
  assignee?: (string | null) | undefined
  created_at: string
  event: {}
  from_state: {}
  id: string
  model: string
  notes?: string | undefined
  task: string
  task_event: string
  to_state: {}
  track: { coordinates: number[]; type: LocationTypeEnum }
  updated_at: string
  url: string
  user: string
}
type PaginatedTaskEventTrackList = TaskEventTrack[]
type TaskEventTask = {
  account: string
  actions: { [x: string]: { [x: string]: unknown } }
  address?: NestedAddress | undefined
  assignee?: (string | null) | undefined
  assignee_proximity: {}
  auto_assign?: boolean | undefined
  barcodes?: string[] | undefined
  cancelled_at: string
  category?: TaskCategoryEnum | undefined
  complete_after?: (string | null) | undefined
  complete_before?: (string | null) | undefined
  completed_at: string
  contact?: NestedContact | undefined
  contact_address?: (string | null) | undefined
  contact_address_external_id: string | null
  counts: { [x: string]: { [x: string]: unknown } }
  created_at: string
  description?: string | undefined
  documents?: string[] | undefined
  duration?: ({ [x: string]: unknown } | null) | undefined
  external_id?: (string | null) | undefined
  forms: { [x: string]: { [x: string]: unknown } }
  id?: (string | null) | undefined
  issues: string[]
  metafields?: { [x: string]: { [x: string]: unknown } } | undefined
  order?: (string | null) | undefined
  orderer?: (string | null) | undefined
  orderer_name: string
  position?: (number | null) | undefined
  priority?: number | undefined
  reference?: string | undefined
  route?: (string | null) | undefined
  scheduled_time?: (string | null) | undefined
  signatures?: string[] | undefined
  size?: (number[] | null) | undefined
  state: {}
  trackers: string[]
  updated_at: string
  url: string
}
type TaskEventSerializerV2 = {
  account: string
  assignee: string
  created_at: string
  event: {}
  field: FieldEnum | BlankEnum
  from_state: {}
  id: string
  location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  notes?: string | undefined
  task: TaskEventTask
  task_command: string
  to_state: {}
  updated_at: string
  url: string
  user: string
}
type PaginatedTaskEventSerializerV2List = TaskEventSerializerV2[]
type TaskExport = {
  account__name: string
  address__apartment_number?: string | undefined
  address__city?: string | undefined
  address__country?: string | undefined
  address__country_code?: string | undefined
  address__formatted_address?: string | undefined
  address__geocode_failed_at?: string | undefined
  address__geocoded_at?: string | undefined
  address__google_place_id?: string | undefined
  address__house_number?: string | undefined
  address__location: Location
  address__point_of_interest?: string | undefined
  address__postal_code?: string | undefined
  address__raw_address?: string | undefined
  address__state?: string | undefined
  address__street?: string | undefined
  assignee__display_name: string
  assignee__email?: string | undefined
  assignee__phone?: string | undefined
  assignee_proximity?: AssigneeProximityEnum | undefined
  auto_assign?: boolean | undefined
  cancelled_at?: (string | null) | undefined
  category?: TaskCategoryEnum | undefined
  complete_after?: (string | null) | undefined
  complete_before?: (string | null) | undefined
  completed_at?: (string | null) | undefined
  contact__company?: string | undefined
  contact__emails?: string[] | undefined
  contact__name?: string | undefined
  contact__notes?: string | undefined
  contact__phones?: string[] | undefined
  contact_address_external_id: string | null
  created_at: string
  created_by__display_name: string
  created_by__email?: string | undefined
  created_by__phone?: string | undefined
  description?: string | undefined
  duration?: ({ [x: string]: unknown } | null) | undefined
  external_id?: (string | null) | undefined
  id?: (string | null) | undefined
  is_full_load?: boolean | undefined
  issues?: string[] | undefined
  metadata__accepted_distance: number
  metadata__accepted_duration: { [x: string]: unknown }
  metadata__active_distance: number
  metadata__active_duration: { [x: string]: unknown }
  metadata__assigned_distance: number
  metadata__assigned_duration: { [x: string]: unknown }
  metadata__cancelled_distance: number
  metadata__cancelled_duration: { [x: string]: unknown }
  metadata__completed_distance: number
  metadata__completed_duration: { [x: string]: unknown }
  metadata__documents_count: number
  metadata__events_count: number
  metadata__failed_distance: number
  metadata__failed_duration: { [x: string]: unknown }
  metadata__forms_completed_count: number
  metadata__forms_count: number
  metadata__last_accepted_at?: string | undefined
  metadata__last_active_at?: string | undefined
  metadata__last_assigned_at?: string | undefined
  metadata__last_cancelled_at?: string | undefined
  metadata__last_completed_at?: string | undefined
  metadata__last_failed_at?: string | undefined
  metadata__last_task_event_notes?: string | undefined
  metadata__last_transit_at?: string | undefined
  metadata__last_unassigned_at?: string | undefined
  metadata__signatures_count: number
  metadata__task_event_notes_count?: number | undefined
  metadata__transit_distance: number
  metadata__transit_duration: { [x: string]: unknown }
  metadata__unassigned_distance: number
  metadata__unassigned_duration: { [x: string]: unknown }
  order__auto_assign?: string | undefined
  order__created_at?: string | undefined
  order__created_by?: string | undefined
  order__external_id?: string | undefined
  order__id?: string | undefined
  order__orderer__company?: string | undefined
  order__orderer__emails?: string[] | undefined
  order__orderer__name?: string | undefined
  order__orderer__notes?: string | undefined
  order__orderer__phones?: string[] | undefined
  order__reference?: string | undefined
  orderer__name?: string | undefined
  position?: (number | null) | undefined
  priority?: number | undefined
  reference?: string | undefined
  route__code?: string | undefined
  route__description?: string | undefined
  scheduled_time?: (string | null) | undefined
  size?: (number[] | null) | undefined
  state: string
  updated_at: string
}
type PaginatedTaskExportList = TaskExport[]
type TaskForm = {
  completed?: boolean | undefined
  created_at: string
  edit_url: string
  id: string
  link: string
  name: string
  pdf_url?: string | undefined
  task: string
  updated_at: string
  url: string
  view_url?: string | undefined
}
type PaginatedTaskFormList = TaskForm[]
type PatchedTaskForm = {
  completed?: boolean | undefined
  created_at?: string | undefined
  edit_url?: string | undefined
  id?: string | undefined
  link?: string | undefined
  name?: string | undefined
  pdf_url?: string | undefined
  task?: string | undefined
  updated_at?: string | undefined
  url?: string | undefined
  view_url?: string | undefined
}
type TasksBackgroundImport = {
  account: string
  assignees: string[]
  celery_task_id?: (string | null) | undefined
  completed_at: string
  created_at: string
  created_by: string
  errors?: { [x: string]: { [x: string]: unknown } } | undefined
  failed_at: string
  id: string
  mapping?: (string | null) | undefined
  started_at: string
  state: {}
  tasks_created: string[]
  tasks_data: { [x: string]: { [x: string]: unknown } }[]
  updated_at: string
  url: string
}
type PaginatedTasksBackgroundImportList = TasksBackgroundImport[]
type ImportMappingLine = {
  format?: (string | null) | undefined
  from_field: string
  to_field?: string | undefined
}
type ImportMapping = {
  account: string
  created_at: string
  field_names: string[]
  id: string
  lines: ImportMappingLine[]
  url: string
}
type PaginatedImportMappingList = ImportMapping[]
type PaginatedTaskMetadataList = TaskMetadata[]
type PaginatedTaskSerializerV2List = TaskSerializerV2[]
type TaskListReorderRequest = {
  account: string
  assign_tasks: string[]
  assignee: string | null
  reorder_tasks: string[]
}
type PatchedTaskSerializerV2 = {
  account?: string | undefined
  actions?: { [x: string]: { [x: string]: unknown } } | undefined
  address?: NestedAddress | undefined
  assignee?: (string | null) | undefined
  assignee_proximity?: {} | undefined
  auto_assign?: boolean | undefined
  barcodes?: string[] | undefined
  cancelled_at?: string | undefined
  category?: TaskCategoryEnum | undefined
  complete_after?: (string | null) | undefined
  complete_before?: (string | null) | undefined
  completed_at?: string | undefined
  contact?: NestedContact | undefined
  contact_address?: (string | null) | undefined
  contact_address_external_id?: (string | null) | undefined
  counts?: { [x: string]: { [x: string]: unknown } } | undefined
  created_at?: string | undefined
  description?: string | undefined
  documents?: string[] | undefined
  duration?: ({ [x: string]: unknown } | null) | undefined
  external_id?: (string | null) | undefined
  forms?: { [x: string]: { [x: string]: unknown } } | undefined
  id?: (string | null) | undefined
  issues?: string[] | undefined
  metafields?: { [x: string]: { [x: string]: unknown } } | undefined
  order?: (string | null) | undefined
  orderer?: (string | null) | undefined
  orderer_name?: string | undefined
  position?: (number | null) | undefined
  priority?: number | undefined
  reference?: string | undefined
  route?: (string | null) | undefined
  scheduled_time?: (string | null) | undefined
  signatures?: string[] | undefined
  size?: (number[] | null) | undefined
  state?: {} | undefined
  trackers?: string[] | undefined
  updated_at?: string | undefined
  url?: string | undefined
}
type TaskAction = {
  location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  notes?: string | undefined
}
type TaskAccountChange = { account: string }
type TaskAssign = {
  assignee: string
  location?: { coordinates: number[]; type: LocationTypeEnum } | undefined
  notes?: string | undefined
}
type TimeLocationFeature = {
  accuracy?: (number | null) | undefined
  altitude?: (number | null) | undefined
  battery_level?: (string | null) | undefined
  created_at: string
  heading?: (number | null) | undefined
  id: string
  location: Location
  model: string
  source: string
  speed?: (number | null) | undefined
  state?: TimeLocationStateEnum | undefined
  time: string
  updated_at: string
  user: string
}
type PaginatedTimeLocationFeatureList = TimeLocationFeature[]
type PatchedTimeLocationFeature = {
  accuracy?: (number | null) | undefined
  altitude?: (number | null) | undefined
  battery_level?: (string | null) | undefined
  created_at?: string | undefined
  heading?: (number | null) | undefined
  id?: string | undefined
  location?: Location | undefined
  model?: string | undefined
  source?: string | undefined
  speed?: (number | null) | undefined
  state?: TimeLocationStateEnum | undefined
  time?: string | undefined
  updated_at?: string | undefined
  user?: string | undefined
}
type TimeLocation = {
  accuracy?: (number | null) | undefined
  altitude?: (number | null) | undefined
  battery_level?: (string | null) | undefined
  created_at: string
  heading?: (number | null) | undefined
  id: string
  location: Location
  source: string
  speed?: (number | null) | undefined
  state?: TimeLocationStateEnum | undefined
  time: string
  updated_at: string
  url: string
  user: string
}
type PaginatedTimeLocationList = TimeLocation[]
type Tracker = {
  account: string
  active_from?: (string | null) | undefined
  active_states?: TaskStateEnum[] | undefined
  active_until?: (string | null) | undefined
  autozoom?: boolean | undefined
  created_by: string
  id: string
  max_zoom_level?: (number | null) | undefined
  queued_states?: TaskStateEnum[] | undefined
  reviewed_at: string
  reviews_allowed?: boolean | undefined
  show_call_action?: boolean | undefined
  show_destination?: boolean | undefined
  show_driver_info?: boolean | undefined
  show_eta?: boolean | undefined
  show_logo?: boolean | undefined
  show_path?: boolean | undefined
  show_predicted_delivery?: boolean | undefined
  show_sms_action?: boolean | undefined
  tasks: string[]
  tracking_page_url: string
  url: string
}
type PaginatedTrackerList = Tracker[]
type PatchedTracker = {
  account?: string | undefined
  active_from?: (string | null) | undefined
  active_states?: TaskStateEnum[] | undefined
  active_until?: (string | null) | undefined
  autozoom?: boolean | undefined
  created_by?: string | undefined
  id?: string | undefined
  max_zoom_level?: (number | null) | undefined
  queued_states?: TaskStateEnum[] | undefined
  reviewed_at?: string | undefined
  reviews_allowed?: boolean | undefined
  show_call_action?: boolean | undefined
  show_destination?: boolean | undefined
  show_driver_info?: boolean | undefined
  show_eta?: boolean | undefined
  show_logo?: boolean | undefined
  show_path?: boolean | undefined
  show_predicted_delivery?: boolean | undefined
  show_sms_action?: boolean | undefined
  tasks?: string[] | undefined
  tracking_page_url?: string | undefined
  url?: string | undefined
}
type OnDuty = { account: string }
type AuthenticatedUserCreate = {
  address?: NestedAddress | undefined
  display_name: string
  email: string
  first_name?: string | undefined
  id: string
  last_name?: string | undefined
  password?: string | undefined
  phone?: string | undefined
  url: string
}
type AuthenticatedUserUpdate = {
  address?: NestedAddress | undefined
  display_name: string
  email: string
  first_name?: string | undefined
  id: string
  last_name?: string | undefined
  phone?: string | undefined
  url: string
}
type User = OnDuty | AuthenticatedUserCreate | AuthenticatedUserUpdate | ReadableUser
type PaginatedUserList = User[]
type PatchedAuthenticatedUserUpdate = {
  address?: NestedAddress | undefined
  display_name?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  id?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  url?: string | undefined
}
type UserActivation = { password?: string | undefined; token: string }
type ModeEnum = 'online' | 'offline'
type StatusEnum = 'on_duty' | 'off_duty'
type WorkingState = {
  account?: string | undefined
  account_role?: string | undefined
  created_at: string
  mode?: ModeEnum | undefined
  status: StatusEnum
  timestamp?: string | undefined
  user?: string | undefined
}
type PaginatedWorkingStateList = WorkingState[]
type VersionEnum =
  | '2.4.13'
  | '2.4.12'
  | '2.4.11'
  | '2.4.10'
  | '2.4.9'
  | '2.4.8'
  | '2.4.7'
  | '2.4.6'
  | '2.4.5'
  | '2.4.4'
  | '2.4.3'
  | '2.4.2'
  | '2.4.1'
  | '2.3.5'
  | '2.3.4'
  | '2.3.3'
  | '2.3.2'
  | '2.3.1'
  | '2.3.0'
  | '2.2.6'
  | '2.2.5'
  | '2.2.4'
  | '2.2.3'
  | '2.2.2'
  | '2.2.1'
  | '2.2.0'
  | '2.1.1'
  | '2.1.0'
  | '2.0.0'
  | '1.1.0'
  | '1.0.0'
type Webhook = {
  account: string
  activated_at: string
  created_at: string
  disable_message: string
  disabled_at: string
  document_events?: boolean | undefined
  failure_count: number
  headers?: { [x: string]: { [x: string]: unknown } } | undefined
  id: string
  name: string
  notification_emails?: string[] | undefined
  review_events?: boolean | undefined
  shared_secret?: string | undefined
  signature_events?: boolean | undefined
  state: {}
  target: string
  task_events?: boolean | undefined
  updated_at: string
  url: string
  version?: VersionEnum | undefined
}
type PaginatedWebhookList = Webhook[]
type PatchedWebhook = {
  account?: string | undefined
  activated_at?: string | undefined
  created_at?: string | undefined
  disable_message?: string | undefined
  disabled_at?: string | undefined
  document_events?: boolean | undefined
  failure_count?: number | undefined
  headers?: { [x: string]: { [x: string]: unknown } } | undefined
  id?: string | undefined
  name?: string | undefined
  notification_emails?: string[] | undefined
  review_events?: boolean | undefined
  shared_secret?: string | undefined
  signature_events?: boolean | undefined
  state?: {} | undefined
  target?: string | undefined
  task_events?: boolean | undefined
  updated_at?: string | undefined
  url?: string | undefined
  version?: VersionEnum | undefined
}
type PaginatedWorkerFeatureList = WorkerFeature[]
type WorkerTrack = {
  end_time: string
  id: string
  start_time: string
  track: Location
  user: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account_roles/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                activated_at__date?: string | undefined
                activated_at__date_or_isnull?: string | undefined
                activated_at__gt?: string | undefined
                activated_at__gt_or_isnull?: string | undefined
                activated_at__gte?: string | undefined
                activated_at__gte_or_isnull?: string | undefined
                activated_at__lt?: string | undefined
                activated_at__lt_or_isnull?: string | undefined
                activated_at__lte?: string | undefined
                activated_at__lte_or_isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                deleted_at__date?: string | undefined
                deleted_at__date_or_isnull?: string | undefined
                deleted_at__gt?: string | undefined
                deleted_at__gt_or_isnull?: string | undefined
                deleted_at__gte?: string | undefined
                deleted_at__gte_or_isnull?: string | undefined
                deleted_at__lt?: string | undefined
                deleted_at__lt_or_isnull?: string | undefined
                deleted_at__lte?: string | undefined
                deleted_at__lte_or_isnull?: string | undefined
                display_name?: string | undefined
                format?: 'json' | 'xml' | undefined
                is_active?: boolean | undefined
                is_integration?: string | undefined
                is_manager?: string | undefined
                is_worker?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                state?: 'inactive' | 'active' | 'deleted' | undefined
                state__in?: string | undefined
                state__in_or_isnull?: string | undefined
                state__not_in?: string | undefined
                state__not_in_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedAccountRoleList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                activated_at__date?: string | undefined
                activated_at__date_or_isnull?: string | undefined
                activated_at__gt?: string | undefined
                activated_at__gt_or_isnull?: string | undefined
                activated_at__gte?: string | undefined
                activated_at__gte_or_isnull?: string | undefined
                activated_at__lt?: string | undefined
                activated_at__lt_or_isnull?: string | undefined
                activated_at__lte?: string | undefined
                activated_at__lte_or_isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                deleted_at__date?: string | undefined
                deleted_at__date_or_isnull?: string | undefined
                deleted_at__gt?: string | undefined
                deleted_at__gt_or_isnull?: string | undefined
                deleted_at__gte?: string | undefined
                deleted_at__gte_or_isnull?: string | undefined
                deleted_at__lt?: string | undefined
                deleted_at__lt_or_isnull?: string | undefined
                deleted_at__lte?: string | undefined
                deleted_at__lte_or_isnull?: string | undefined
                display_name?: string | undefined
                format?: 'json' | 'xml' | undefined
                is_active?: boolean | undefined
                is_integration?: string | undefined
                is_manager?: string | undefined
                is_worker?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                state?: 'inactive' | 'active' | 'deleted' | undefined
                state__in?: string | undefined
                state__in_or_isnull?: string | undefined
                state__not_in?: string | undefined
                state__not_in_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedAccountRoleList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } } & { json: AccountRole }
            output: AccountRole
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } } & { json: AccountRole }
            output: AccountRole
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/account_roles/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: AccountRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: AccountRole
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: PatchedAccountRole }
            output: AccountRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: PatchedAccountRole }
            output: AccountRole
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: AccountRole }
            output: AccountRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: AccountRole }
            output: AccountRole
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/account_roles/:id/activate/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: AccountRoleActivation }
            output: AccountRoleActivation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: AccountRoleActivation }
            output: AccountRoleActivation
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/account_roles/:id/notify/': {
      $post:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: AccountRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: AccountRole
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/account_roles/:id/token/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: AccountRoleToken
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: AccountRoleToken
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/': {
      $get:
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                search?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedAccountList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                search?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedAccountList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Account
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Account
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedAccount } & { form: PatchedAccount }
            output: Account
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedAccount } & { form: PatchedAccount }
            output: Account
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Account } & { form: Account }
            output: Account
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Account } & { form: Account }
            output: Account
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/braintree_customer/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Account
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Account
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/change_owner/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountOwnerChange } & { form: AccountOwnerChange }
            output: AccountOwnerChange
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountOwnerChange } & { form: AccountOwnerChange }
            output: AccountOwnerChange
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/managers/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountUser
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountUser } & { form: AccountUser }
            output: AccountUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountUser } & { form: AccountUser }
            output: AccountUser
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/stripe_attach_payment_method/': {
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountStripePaymentMethodAttach } & {
              form: AccountStripePaymentMethodAttach
            }
            output: AccountStripePaymentMethodAttach
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountStripePaymentMethodAttach } & {
              form: AccountStripePaymentMethodAttach
            }
            output: AccountStripePaymentMethodAttach
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/stripe_create_setup_intent/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountStripeSetupIntentCreate } & { form: AccountStripeSetupIntentCreate }
            output: AccountStripeSetupIntentCreate
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountStripeSetupIntentCreate } & { form: AccountStripeSetupIntentCreate }
            output: AccountStripeSetupIntentCreate
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountStripeSetupIntentCreate } & { form: AccountStripeSetupIntentCreate }
            output: AccountStripeSetupIntentCreate
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountStripeSetupIntentCreate } & { form: AccountStripeSetupIntentCreate }
            output: AccountStripeSetupIntentCreate
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/stripe_detach_payment_method/': {
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountStripePaymentMethodDetach } & {
              form: AccountStripePaymentMethodDetach
            }
            output: AccountStripePaymentMethodDetach
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountStripePaymentMethodDetach } & {
              form: AccountStripePaymentMethodDetach
            }
            output: AccountStripePaymentMethodDetach
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/stripe_get_payment_method/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountStripePaymentMethodGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountStripePaymentMethodGet
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/stripe_get_setup_attempt/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountStripeSetupAttemptGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountStripeSetupAttemptGet
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/stripe_get_setup_intent/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountStripeSetupIntentGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountStripeSetupIntentGet
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/stripe_payment_methods/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountStripePaymentMethods
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountStripePaymentMethods
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/stripe_set_default_payment_method/': {
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountStripePaymentMethodSetDefault } & {
              form: AccountStripePaymentMethodSetDefault
            }
            output: AccountStripePaymentMethodSetDefault
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountStripePaymentMethodSetDefault } & {
              form: AccountStripePaymentMethodSetDefault
            }
            output: AccountStripePaymentMethodSetDefault
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/stripe_setup_intents/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountStripeSetupIntentsGet
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountStripeSetupIntentsGet
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/accounts/:id/workers/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: AccountUser
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountUser } & { form: AccountUser }
            output: AccountUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: AccountUser } & { form: AccountUser }
            output: AccountUser
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/addons/': {
      $get:
        | {
            input: {
              query: {
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
              }
            }
            output: PaginatedAddonList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
              }
            }
            output: PaginatedAddonList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/addons/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Addon
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Addon
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/authenticate/': {
      $post: {
        input: { json: AuthToken } & { form: AuthToken }
        output: AuthToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing/customers/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
              }
            }
            output: PaginatedBraintreeCustomerList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
              }
            }
            output: PaginatedBraintreeCustomerList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: BraintreeCustomer
            } & { form: BraintreeCustomer }
            output: BraintreeCustomer
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: BraintreeCustomer
            } & { form: BraintreeCustomer }
            output: BraintreeCustomer
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/billing/customers/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: BraintreeCustomer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: BraintreeCustomer
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedBraintreeCustomer } & { form: PatchedBraintreeCustomer }
            output: BraintreeCustomer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedBraintreeCustomer } & { form: PatchedBraintreeCustomer }
            output: BraintreeCustomer
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: BraintreeCustomer } & { form: BraintreeCustomer }
            output: BraintreeCustomer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: BraintreeCustomer } & { form: BraintreeCustomer }
            output: BraintreeCustomer
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/billing/customers/:id/client_token/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: BraintreeCustomer
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: BraintreeCustomer
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/billing/invoices/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                billing_method?: 'braintree' | 'invoice' | 'stripe' | undefined
                confirmed_at__date?: string | undefined
                confirmed_at__date_or_isnull?: string | undefined
                confirmed_at__gt?: string | undefined
                confirmed_at__gt_or_isnull?: string | undefined
                confirmed_at__gte?: string | undefined
                confirmed_at__gte_or_isnull?: string | undefined
                confirmed_at__lt?: string | undefined
                confirmed_at__lt_or_isnull?: string | undefined
                confirmed_at__lte?: string | undefined
                confirmed_at__lte_or_isnull?: string | undefined
                created_at?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                state?: 'draft' | 'confirmed' | 'overdue' | 'paid' | 'cancelled' | undefined
              }
            }
            output: PaginatedInvoiceList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                billing_method?: 'braintree' | 'invoice' | 'stripe' | undefined
                confirmed_at__date?: string | undefined
                confirmed_at__date_or_isnull?: string | undefined
                confirmed_at__gt?: string | undefined
                confirmed_at__gt_or_isnull?: string | undefined
                confirmed_at__gte?: string | undefined
                confirmed_at__gte_or_isnull?: string | undefined
                confirmed_at__lt?: string | undefined
                confirmed_at__lt_or_isnull?: string | undefined
                confirmed_at__lte?: string | undefined
                confirmed_at__lte_or_isnull?: string | undefined
                created_at?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                state?: 'draft' | 'confirmed' | 'overdue' | 'paid' | 'cancelled' | undefined
              }
            }
            output: PaginatedInvoiceList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/billing/invoices/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Invoice
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Invoice
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedInvoice } & { form: PatchedInvoice }
            output: Invoice
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedInvoice } & { form: PatchedInvoice }
            output: Invoice
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Invoice } & { form: Invoice }
            output: Invoice
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Invoice } & { form: Invoice }
            output: Invoice
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/billing/invoices/:id/mark_as_paid/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Invoice } & { form: Invoice }
            output: Invoice
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Invoice } & { form: Invoice }
            output: Invoice
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/billing/stripe_payments/': {
      $get:
        | {
            input: {
              query: {
                billable_account?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                invoice?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                state?:
                  | 'draft'
                  | 'failed'
                  | 'saved'
                  | 'settled'
                  | 'rejected'
                  | 'retried'
                  | 'cancelled'
                  | undefined
                stripe_state?:
                  | null
                  | 'requires_payment_method'
                  | 'requires_confirmation'
                  | 'requires_capture'
                  | 'requires_action'
                  | 'processing'
                  | 'succeeded'
                  | 'canceled'
                  | undefined
              }
            }
            output: PaginatedStripePaymentList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                billable_account?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                invoice?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                state?:
                  | 'draft'
                  | 'failed'
                  | 'saved'
                  | 'settled'
                  | 'rejected'
                  | 'retried'
                  | 'cancelled'
                  | undefined
                stripe_state?:
                  | null
                  | 'requires_payment_method'
                  | 'requires_confirmation'
                  | 'requires_capture'
                  | 'requires_action'
                  | 'processing'
                  | 'succeeded'
                  | 'canceled'
                  | undefined
              }
            }
            output: PaginatedStripePaymentList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/billing/stripe_payments/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: StripePayment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: StripePayment
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/billing/transactions/': {
      $get:
        | {
            input: {
              query: {
                cursor?: number | undefined
                customer?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                invoice__account?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                state?:
                  | 'draft'
                  | 'failed'
                  | 'saved'
                  | 'settled'
                  | 'rejected'
                  | 'voided'
                  | 'refunded'
                  | 'retried'
                  | 'cancelled'
                  | 'imported'
                  | undefined
              }
            }
            output: PaginatedBraintreeTransactionList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: number | undefined
                customer?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                invoice__account?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                state?:
                  | 'draft'
                  | 'failed'
                  | 'saved'
                  | 'settled'
                  | 'rejected'
                  | 'voided'
                  | 'refunded'
                  | 'retried'
                  | 'cancelled'
                  | 'imported'
                  | undefined
              }
            }
            output: PaginatedBraintreeTransactionList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/billing/transactions/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: BraintreeTransaction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: BraintreeTransaction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/client_roles/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                client?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                is_active?: string | undefined
                is_manager?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedClientRoleList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                client?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                is_active?: string | undefined
                is_manager?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedClientRoleList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: ClientRole } & {
              form: ClientRole
            }
            output: ClientRole
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: ClientRole } & {
              form: ClientRole
            }
            output: ClientRole
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/client_roles/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: ClientRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: ClientRole
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedClientRole } & { form: PatchedClientRole }
            output: ClientRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedClientRole } & { form: PatchedClientRole }
            output: ClientRole
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: ClientRole } & { form: ClientRole }
            output: ClientRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: ClientRole } & { form: ClientRole }
            output: ClientRole
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/client_roles/:id/notify/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: ClientRole } & { form: ClientRole }
            output: ClientRole
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: ClientRole } & { form: ClientRole }
            output: ClientRole
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/clients/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                search?: string | undefined
                slug?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedClientList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                search?: string | undefined
                slug?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedClientList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Client } & {
              form: Client
            }
            output: Client
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Client } & {
              form: Client
            }
            output: Client
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/clients/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Client
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Client
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedClient } & { form: PatchedClient }
            output: Client
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedClient } & { form: PatchedClient }
            output: Client
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Client } & { form: Client }
            output: Client
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Client } & { form: Client }
            output: Client
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/configurations/': {
      $get:
        | {
            input: {
              query: {
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
              }
            }
            output: PaginatedConfigurationSerializerV2List
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
              }
            }
            output: PaginatedConfigurationSerializerV2List
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/contact_address_exports/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__iexact?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__iexact?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__iexact?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__iexact?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__iexact?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__iexact?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__iexact?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__iexact?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                contact__company?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__iexact?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__overlap?: string | undefined
                contact__name?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__iexact?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__overlap?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                fields?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                is_orderer?: string | undefined
                is_receiver?: string | undefined
                ordering?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                search?: string | undefined
                source?: string | undefined
                sourcecontact__name__icontains?: string | undefined
                sourcecontact__name__iexact?: string | undefined
                sourcecontact__name__iregex?: string | undefined
                sourcecontact__name__istartswith?: string | undefined
                sourcecontact__name__search?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedContactAddressExportList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__iexact?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__iexact?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__iexact?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__iexact?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__iexact?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__iexact?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__iexact?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__iexact?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                contact__company?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__iexact?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__overlap?: string | undefined
                contact__name?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__iexact?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__overlap?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                fields?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                is_orderer?: string | undefined
                is_receiver?: string | undefined
                ordering?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                search?: string | undefined
                source?: string | undefined
                sourcecontact__name__icontains?: string | undefined
                sourcecontact__name__iexact?: string | undefined
                sourcecontact__name__iregex?: string | undefined
                sourcecontact__name__istartswith?: string | undefined
                sourcecontact__name__search?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedContactAddressExportList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/contact_address_import/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                started_at__date?: string | undefined
                started_at__date_or_isnull?: string | undefined
                started_at__gt?: string | undefined
                started_at__gt_or_isnull?: string | undefined
                started_at__gte?: string | undefined
                started_at__gte_or_isnull?: string | undefined
                started_at__lt?: string | undefined
                started_at__lt_or_isnull?: string | undefined
                started_at__lte?: string | undefined
                started_at__lte_or_isnull?: string | undefined
                state?: 'pending' | 'started' | 'completed' | 'failed' | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedContactAddressBackgroundImportList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                started_at__date?: string | undefined
                started_at__date_or_isnull?: string | undefined
                started_at__gt?: string | undefined
                started_at__gt_or_isnull?: string | undefined
                started_at__gte?: string | undefined
                started_at__gte_or_isnull?: string | undefined
                started_at__lt?: string | undefined
                started_at__lt_or_isnull?: string | undefined
                started_at__lte?: string | undefined
                started_at__lte_or_isnull?: string | undefined
                state?: 'pending' | 'started' | 'completed' | 'failed' | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedContactAddressBackgroundImportList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: ContactAddressBackgroundImport
            } & { form: ContactAddressBackgroundImport }
            output: ContactAddressBackgroundImport
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: ContactAddressBackgroundImport
            } & { form: ContactAddressBackgroundImport }
            output: ContactAddressBackgroundImport
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/contact_address_import/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: ContactAddressBackgroundImport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: ContactAddressBackgroundImport
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/contact_addresses/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__iexact?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__iexact?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__iexact?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__iexact?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__iexact?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__iexact?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__iexact?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__iexact?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                client?: string | undefined
                contact__company?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__iexact?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__icontains?: string | undefined
                contact__emails__iexact?: string | undefined
                contact__emails__iregex?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__istartswith?: string | undefined
                contact__emails__overlap?: string | undefined
                contact__emails__search?: string | undefined
                contact__name?: string | undefined
                contact__name__icontains?: string | undefined
                contact__name__iexact?: string | undefined
                contact__name__iregex?: string | undefined
                contact__name__istartswith?: string | undefined
                contact__name__search?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__iexact?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__icontains?: string | undefined
                contact__phones__iexact?: string | undefined
                contact__phones__iregex?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__istartswith?: string | undefined
                contact__phones__overlap?: string | undefined
                contact__phones__search?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                is_orderer?: string | undefined
                is_receiver?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                source?: string | undefined
                source__icontains?: string | undefined
                source__iexact?: string | undefined
                source__iregex?: string | undefined
                source__istartswith?: string | undefined
                source__search?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedContactAddressList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__iexact?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__iexact?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__iexact?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__iexact?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__iexact?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__iexact?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__iexact?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__iexact?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                client?: string | undefined
                contact__company?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__iexact?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__icontains?: string | undefined
                contact__emails__iexact?: string | undefined
                contact__emails__iregex?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__istartswith?: string | undefined
                contact__emails__overlap?: string | undefined
                contact__emails__search?: string | undefined
                contact__name?: string | undefined
                contact__name__icontains?: string | undefined
                contact__name__iexact?: string | undefined
                contact__name__iregex?: string | undefined
                contact__name__istartswith?: string | undefined
                contact__name__search?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__iexact?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__icontains?: string | undefined
                contact__phones__iexact?: string | undefined
                contact__phones__iregex?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__istartswith?: string | undefined
                contact__phones__overlap?: string | undefined
                contact__phones__search?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                is_orderer?: string | undefined
                is_receiver?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                source?: string | undefined
                source__icontains?: string | undefined
                source__iexact?: string | undefined
                source__iregex?: string | undefined
                source__istartswith?: string | undefined
                source__search?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedContactAddressList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: ContactAddress
            } & { form: ContactAddress }
            output: ContactAddress
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: ContactAddress
            } & { form: ContactAddress }
            output: ContactAddress
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/contact_addresses/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: ContactAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: ContactAddress
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedContactAddress } & { form: PatchedContactAddress }
            output: ContactAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedContactAddress } & { form: PatchedContactAddress }
            output: ContactAddress
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: ContactAddress } & { form: ContactAddress }
            output: ContactAddress
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: ContactAddress } & { form: ContactAddress }
            output: ContactAddress
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/devices/': {
      $get:
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                search?: string | undefined
                user?: string | undefined
                user__account_roles__account?: string | undefined
              }
            }
            output: PaginatedDeviceList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                search?: string | undefined
                user?: string | undefined
                user__account_roles__account?: string | undefined
              }
            }
            output: PaginatedDeviceList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Device } & {
              form: Device
            }
            output: Device
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Device } & {
              form: Device
            }
            output: Device
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/devices/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Device
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Device
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/docs/schema/': {
      $get:
        | {
            input: {
              query: {
                format?: 'json' | 'yaml' | undefined
                lang?:
                  | 'de'
                  | 'en'
                  | 'es'
                  | 'et'
                  | 'fi'
                  | 'fr'
                  | 'it'
                  | 'lt'
                  | 'lv'
                  | 'pl'
                  | 'ru'
                  | 'sv'
                  | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'json' | 'yaml' | undefined
                lang?:
                  | 'de'
                  | 'en'
                  | 'es'
                  | 'et'
                  | 'fi'
                  | 'fr'
                  | 'it'
                  | 'lt'
                  | 'lv'
                  | 'pl'
                  | 'ru'
                  | 'sv'
                  | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'json' | 'yaml' | undefined
                lang?:
                  | 'de'
                  | 'en'
                  | 'es'
                  | 'et'
                  | 'fi'
                  | 'fr'
                  | 'it'
                  | 'lt'
                  | 'lv'
                  | 'pl'
                  | 'ru'
                  | 'sv'
                  | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'json' | 'yaml' | undefined
                lang?:
                  | 'de'
                  | 'en'
                  | 'es'
                  | 'et'
                  | 'fi'
                  | 'fr'
                  | 'it'
                  | 'lt'
                  | 'lv'
                  | 'pl'
                  | 'ru'
                  | 'sv'
                  | undefined
              }
            }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/documents/': {
      $get:
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                cursor?: number | undefined
                filename?: string | undefined
                filename__icontains?: string | undefined
                filename__iexact?: string | undefined
                filename__iregex?: string | undefined
                filename__istartswith?: string | undefined
                filename__search?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                mimetype?: string | undefined
                order?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                source?: 'web' | 'mobile' | 'integration' | undefined
                task?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedDocumentList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                cursor?: number | undefined
                filename?: string | undefined
                filename__icontains?: string | undefined
                filename__iexact?: string | undefined
                filename__iregex?: string | undefined
                filename__istartswith?: string | undefined
                filename__search?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                mimetype?: string | undefined
                order?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                source?: 'web' | 'mobile' | 'integration' | undefined
                task?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedDocumentList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Document } & {
              form: Document
            }
            output: Document
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Document } & {
              form: Document
            }
            output: Document
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/documents/batch_delete/': {
      $post: {
        input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
          json: DocumentDeleteAction
        } & { form: DocumentDeleteAction }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/documents/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Document
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Document
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/emails/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                from_email?: string | undefined
                from_email__icontains?: string | undefined
                id?: string | undefined
                message?: string | undefined
                message__icontains?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                received_at__date?: string | undefined
                received_at__date_or_isnull?: string | undefined
                received_at__gt?: string | undefined
                received_at__gt_or_isnull?: string | undefined
                received_at__gte?: string | undefined
                received_at__gte_or_isnull?: string | undefined
                received_at__lt?: string | undefined
                received_at__lt_or_isnull?: string | undefined
                received_at__lte?: string | undefined
                received_at__lte_or_isnull?: string | undefined
                reply_to_email?: string | undefined
                reply_to_email__icontains?: string | undefined
                search?: string | undefined
                sent_at__date?: string | undefined
                sent_at__date_or_isnull?: string | undefined
                sent_at__gt?: string | undefined
                sent_at__gt_or_isnull?: string | undefined
                sent_at__gte?: string | undefined
                sent_at__gte_or_isnull?: string | undefined
                sent_at__lt?: string | undefined
                sent_at__lt_or_isnull?: string | undefined
                sent_at__lte?: string | undefined
                sent_at__lte_or_isnull?: string | undefined
                state?: 'queued' | 'over_quota' | 'sent' | 'failed' | 'received' | undefined
                state__in?: string | undefined
                subject?: string | undefined
                subject__icontains?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedEmailList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                from_email?: string | undefined
                from_email__icontains?: string | undefined
                id?: string | undefined
                message?: string | undefined
                message__icontains?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                received_at__date?: string | undefined
                received_at__date_or_isnull?: string | undefined
                received_at__gt?: string | undefined
                received_at__gt_or_isnull?: string | undefined
                received_at__gte?: string | undefined
                received_at__gte_or_isnull?: string | undefined
                received_at__lt?: string | undefined
                received_at__lt_or_isnull?: string | undefined
                received_at__lte?: string | undefined
                received_at__lte_or_isnull?: string | undefined
                reply_to_email?: string | undefined
                reply_to_email__icontains?: string | undefined
                search?: string | undefined
                sent_at__date?: string | undefined
                sent_at__date_or_isnull?: string | undefined
                sent_at__gt?: string | undefined
                sent_at__gt_or_isnull?: string | undefined
                sent_at__gte?: string | undefined
                sent_at__gte_or_isnull?: string | undefined
                sent_at__lt?: string | undefined
                sent_at__lt_or_isnull?: string | undefined
                sent_at__lte?: string | undefined
                sent_at__lte_or_isnull?: string | undefined
                state?: 'queued' | 'over_quota' | 'sent' | 'failed' | 'received' | undefined
                state__in?: string | undefined
                subject?: string | undefined
                subject__icontains?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedEmailList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Email } & {
              form: Email
            }
            output: Email
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Email } & {
              form: Email
            }
            output: Email
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/emails/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Email
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Email
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedEmail } & { form: PatchedEmail }
            output: Email
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedEmail } & { form: PatchedEmail }
            output: Email
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Email } & { form: Email }
            output: Email
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Email } & { form: Email }
            output: Email
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/emails/:id/resend/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Email } & { form: Email }
            output: Email
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Email } & { form: Email }
            output: Email
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/exports/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedExportList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedExportList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Export } & {
              form: Export
            }
            output: Export
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Export } & {
              form: Export
            }
            output: Export
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/exports/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Export
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Export
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedExport } & { form: PatchedExport }
            output: Export
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedExport } & { form: PatchedExport }
            output: Export
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Export } & { form: Export }
            output: Export
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Export } & { form: Export }
            output: Export
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/file_uploads/': {
      $get:
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                cursor?: number | undefined
                filename?: string | undefined
                filename__icontains?: string | undefined
                filename__iexact?: string | undefined
                filename__iregex?: string | undefined
                filename__istartswith?: string | undefined
                filename__search?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                source?: 'web' | 'mobile' | 'integration' | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedS3FileUploadList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                cursor?: number | undefined
                filename?: string | undefined
                filename__icontains?: string | undefined
                filename__iexact?: string | undefined
                filename__iregex?: string | undefined
                filename__istartswith?: string | undefined
                filename__search?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                source?: 'web' | 'mobile' | 'integration' | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedS3FileUploadList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: S3FileUpload } & {
              form: S3FileUpload
            }
            output: S3FileUpload
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: S3FileUpload } & {
              form: S3FileUpload
            }
            output: S3FileUpload
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/file_uploads/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: S3FileUpload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: S3FileUpload
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/formrules/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                search?: string | undefined
              }
            }
            output: PaginatedFormRuleList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                search?: string | undefined
              }
            }
            output: PaginatedFormRuleList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: FormRule } & {
              form: FormRule
            }
            output: FormRule
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: FormRule } & {
              form: FormRule
            }
            output: FormRule
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/formrules/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: FormRule
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: FormRule
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedFormRule } & { form: PatchedFormRule }
            output: FormRule
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedFormRule } & { form: PatchedFormRule }
            output: FormRule
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: FormRule } & { form: FormRule }
            output: FormRule
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: FormRule } & { form: FormRule }
            output: FormRule
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/integrations/': {
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: IntegrationRequest
            } & { form: IntegrationRequest }
            output: IntegrationRequest
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: IntegrationRequest
            } & { form: IntegrationRequest }
            output: IntegrationRequest
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/metafields/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                is_editable?: string | undefined
                is_editable_assignee?: string | undefined
                is_persistent?: string | undefined
                is_required?: string | undefined
                is_searchable?: string | undefined
                key?: string | undefined
                label?: string | undefined
                namespace?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                show_in_detail_view?: string | undefined
                show_in_list_view?: string | undefined
                show_in_mobile_app?: string | undefined
                show_in_pod?: string | undefined
                show_when_task_type_assignment?: string | undefined
                show_when_task_type_drop_off?: string | undefined
                show_when_task_type_pick_up?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                value_type?: 'string' | 'integer' | 'decimal' | 'choice' | undefined
              }
            }
            output: PaginatedMetafieldList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                is_editable?: string | undefined
                is_editable_assignee?: string | undefined
                is_persistent?: string | undefined
                is_required?: string | undefined
                is_searchable?: string | undefined
                key?: string | undefined
                label?: string | undefined
                namespace?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                show_in_detail_view?: string | undefined
                show_in_list_view?: string | undefined
                show_in_mobile_app?: string | undefined
                show_in_pod?: string | undefined
                show_when_task_type_assignment?: string | undefined
                show_when_task_type_drop_off?: string | undefined
                show_when_task_type_pick_up?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                value_type?: 'string' | 'integer' | 'decimal' | 'choice' | undefined
              }
            }
            output: PaginatedMetafieldList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Metafield } & {
              form: Metafield
            }
            output: Metafield
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Metafield } & {
              form: Metafield
            }
            output: Metafield
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/metafields/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Metafield
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Metafield
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedMetafield } & { form: PatchedMetafield }
            output: Metafield
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedMetafield } & { form: PatchedMetafield }
            output: Metafield
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Metafield } & { form: Metafield }
            output: Metafield
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Metafield } & { form: Metafield }
            output: Metafield
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/notification_templates/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                event?:
                  | 'create'
                  | 'assign'
                  | 'unassign'
                  | 'reject'
                  | 'accept'
                  | 'unaccept'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | 'updated'
                  | undefined
                format?: 'json' | 'xlsx' | undefined
                is_active?: string | undefined
                name?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                recipient?: 'account' | 'assignee' | 'orderer' | 'contact' | 'client' | undefined
                search?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                via_app?: string | undefined
                via_email?: string | undefined
                via_sms?: string | undefined
              }
            }
            output: PaginatedNotificationTemplateList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                event?:
                  | 'create'
                  | 'assign'
                  | 'unassign'
                  | 'reject'
                  | 'accept'
                  | 'unaccept'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | 'updated'
                  | undefined
                format?: 'json' | 'xlsx' | undefined
                is_active?: string | undefined
                name?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                recipient?: 'account' | 'assignee' | 'orderer' | 'contact' | 'client' | undefined
                search?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                via_app?: string | undefined
                via_email?: string | undefined
                via_sms?: string | undefined
              }
            }
            output: PaginatedNotificationTemplateList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: NotificationTemplate
            } & { form: NotificationTemplate }
            output: NotificationTemplate
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: NotificationTemplate
            } & { form: NotificationTemplate }
            output: NotificationTemplate
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/notification_templates/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: NotificationTemplate
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: NotificationTemplate
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedNotificationTemplate } & { form: PatchedNotificationTemplate }
            output: NotificationTemplate
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedNotificationTemplate } & { form: PatchedNotificationTemplate }
            output: NotificationTemplate
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: NotificationTemplate } & { form: NotificationTemplate }
            output: NotificationTemplate
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: NotificationTemplate } & { form: NotificationTemplate }
            output: NotificationTemplate
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/notification_templates/:id/render/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: RenderRequest } & { form: RenderRequest }
            output: RenderRequest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: RenderRequest } & { form: RenderRequest }
            output: RenderRequest
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/notifications/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                event?:
                  | 'create'
                  | 'assign'
                  | 'unassign'
                  | 'reject'
                  | 'accept'
                  | 'unaccept'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | 'updated'
                  | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                recipient?: 'account' | 'assignee' | 'orderer' | 'contact' | 'client' | undefined
                search?: string | undefined
                sent_at__date?: string | undefined
                sent_at__date_or_isnull?: string | undefined
                sent_at__gt?: string | undefined
                sent_at__gt_or_isnull?: string | undefined
                sent_at__gte?: string | undefined
                sent_at__gte_or_isnull?: string | undefined
                sent_at__lt?: string | undefined
                sent_at__lt_or_isnull?: string | undefined
                sent_at__lte?: string | undefined
                sent_at__lte_or_isnull?: string | undefined
                task?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                via_app?: string | undefined
                via_email?: string | undefined
                via_sms?: string | undefined
              }
            }
            output: PaginatedNotificationList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                event?:
                  | 'create'
                  | 'assign'
                  | 'unassign'
                  | 'reject'
                  | 'accept'
                  | 'unaccept'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | 'updated'
                  | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                recipient?: 'account' | 'assignee' | 'orderer' | 'contact' | 'client' | undefined
                search?: string | undefined
                sent_at__date?: string | undefined
                sent_at__date_or_isnull?: string | undefined
                sent_at__gt?: string | undefined
                sent_at__gt_or_isnull?: string | undefined
                sent_at__gte?: string | undefined
                sent_at__gte_or_isnull?: string | undefined
                sent_at__lt?: string | undefined
                sent_at__lt_or_isnull?: string | undefined
                sent_at__lte?: string | undefined
                sent_at__lte_or_isnull?: string | undefined
                task?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                via_app?: string | undefined
                via_email?: string | undefined
                via_sms?: string | undefined
              }
            }
            output: PaginatedNotificationList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Notification } & {
              form: Notification
            }
            output: Notification
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Notification } & {
              form: Notification
            }
            output: Notification
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/notifications/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Notification
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Notification
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/orders/': {
      $get: {
        input: {
          query: {
            account?: string | undefined
            created_at__date?: string | undefined
            created_at__date_or_isnull?: string | undefined
            created_at__gt?: string | undefined
            created_at__gt_or_isnull?: string | undefined
            created_at__gte?: string | undefined
            created_at__gte_or_isnull?: string | undefined
            created_at__lt?: string | undefined
            created_at__lt_or_isnull?: string | undefined
            created_at__lte?: string | undefined
            created_at__lte_or_isnull?: string | undefined
            cursor?: number | undefined
            external_id?: string | undefined
            id?: string | undefined
            ordering?: string | undefined
            page_size?: number | undefined
            reference?: string | undefined
            search?: string | undefined
            updated_at__date?: string | undefined
            updated_at__date_or_isnull?: string | undefined
            updated_at__gt?: string | undefined
            updated_at__gt_or_isnull?: string | undefined
            updated_at__gte?: string | undefined
            updated_at__gte_or_isnull?: string | undefined
            updated_at__lt?: string | undefined
            updated_at__lt_or_isnull?: string | undefined
            updated_at__lte?: string | undefined
            updated_at__lte_or_isnull?: string | undefined
          }
        }
        output: PaginatedOrderSerializerV2List
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { json: OrderSerializerV2 } & { form: OrderSerializerV2 }
        output: OrderSerializerV2
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/orders/:id/': {
      $get: {
        input: { param: { id: string } }
        output: OrderSerializerV2
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: PatchedOrderSerializerV2 } & {
          form: PatchedOrderSerializerV2
        }
        output: OrderSerializerV2
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: OrderSerializerV2 } & { form: OrderSerializerV2 }
        output: OrderSerializerV2
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/password_change/': {
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: PasswordChange
            } & { form: PasswordChange }
            output: PasswordChange
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: PasswordChange
            } & { form: PasswordChange }
            output: PasswordChange
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/password_reset/': {
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: PasswordReset } & {
              form: PasswordReset
            }
            output: PasswordReset
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: PasswordReset } & {
              form: PasswordReset
            }
            output: PasswordReset
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/password_reset_confirm/': {
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: PasswordResetConfirm
            } & { form: PasswordResetConfirm }
            output: PasswordResetConfirm
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: PasswordResetConfirm
            } & { form: PasswordResetConfirm }
            output: PasswordResetConfirm
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/push_notifications/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                event?:
                  | 'create'
                  | 'assign'
                  | 'unassign'
                  | 'reject'
                  | 'accept'
                  | 'unaccept'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | 'updated'
                  | undefined
                event__in?: string | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                id?: string | undefined
                message?: string | undefined
                message__icontains?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                pending_at__date?: string | undefined
                pending_at__date_or_isnull?: string | undefined
                pending_at__gt?: string | undefined
                pending_at__gt_or_isnull?: string | undefined
                pending_at__gte?: string | undefined
                pending_at__gte_or_isnull?: string | undefined
                pending_at__lt?: string | undefined
                pending_at__lt_or_isnull?: string | undefined
                pending_at__lte?: string | undefined
                pending_at__lte_or_isnull?: string | undefined
                search?: string | undefined
                state?: 'queued' | 'pending' | 'failed' | 'sent' | undefined
                state__in?: string | undefined
                subject?: string | undefined
                subject__icontains?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedPushNotificationList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                event?:
                  | 'create'
                  | 'assign'
                  | 'unassign'
                  | 'reject'
                  | 'accept'
                  | 'unaccept'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | 'updated'
                  | undefined
                event__in?: string | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                id?: string | undefined
                message?: string | undefined
                message__icontains?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                pending_at__date?: string | undefined
                pending_at__date_or_isnull?: string | undefined
                pending_at__gt?: string | undefined
                pending_at__gt_or_isnull?: string | undefined
                pending_at__gte?: string | undefined
                pending_at__gte_or_isnull?: string | undefined
                pending_at__lt?: string | undefined
                pending_at__lt_or_isnull?: string | undefined
                pending_at__lte?: string | undefined
                pending_at__lte_or_isnull?: string | undefined
                search?: string | undefined
                state?: 'queued' | 'pending' | 'failed' | 'sent' | undefined
                state__in?: string | undefined
                subject?: string | undefined
                subject__icontains?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedPushNotificationList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: PushNotification
            } & { form: PushNotification }
            output: PushNotification
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: PushNotification
            } & { form: PushNotification }
            output: PushNotification
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/push_notifications/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: PushNotification
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: PushNotification
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedPushNotification } & { form: PatchedPushNotification }
            output: PushNotification
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedPushNotification } & { form: PatchedPushNotification }
            output: PushNotification
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PushNotification } & { form: PushNotification }
            output: PushNotification
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PushNotification } & { form: PushNotification }
            output: PushNotification
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/push_notifications/:id/resend/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PushNotification } & { form: PushNotification }
            output: PushNotification
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PushNotification } & { form: PushNotification }
            output: PushNotification
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/recurrences/': {
      $get: {
        input: {
          query: {
            account?: string | undefined
            account__in?: string | undefined
            assign_worker?: boolean | undefined
            assignee?: string | undefined
            assignee__in?: string | undefined
            created_at__date?: string | undefined
            created_at__date_or_isnull?: string | undefined
            created_at__gt?: string | undefined
            created_at__gt_or_isnull?: string | undefined
            created_at__gte?: string | undefined
            created_at__gte_or_isnull?: string | undefined
            created_at__lt?: string | undefined
            created_at__lt_or_isnull?: string | undefined
            created_at__lte?: string | undefined
            created_at__lte_or_isnull?: string | undefined
            created_by?: string | undefined
            created_by__in?: string | undefined
            cursor?: number | undefined
            is_active?: string | undefined
            last_errored_at__date?: string | undefined
            last_errored_at__date_or_isnull?: string | undefined
            last_errored_at__gt?: string | undefined
            last_errored_at__gt_or_isnull?: string | undefined
            last_errored_at__gte?: string | undefined
            last_errored_at__gte_or_isnull?: string | undefined
            last_errored_at__lt?: string | undefined
            last_errored_at__lt_or_isnull?: string | undefined
            last_errored_at__lte?: string | undefined
            last_errored_at__lte_or_isnull?: string | undefined
            last_recurred_at__date?: string | undefined
            last_recurred_at__date_or_isnull?: string | undefined
            last_recurred_at__gt?: string | undefined
            last_recurred_at__gt_or_isnull?: string | undefined
            last_recurred_at__gte?: string | undefined
            last_recurred_at__gte_or_isnull?: string | undefined
            last_recurred_at__lt?: string | undefined
            last_recurred_at__lt_or_isnull?: string | undefined
            last_recurred_at__lte?: string | undefined
            last_recurred_at__lte_or_isnull?: string | undefined
            last_scheduled_at__date?: string | undefined
            last_scheduled_at__date_or_isnull?: string | undefined
            last_scheduled_at__gt?: string | undefined
            last_scheduled_at__gt_or_isnull?: string | undefined
            last_scheduled_at__gte?: string | undefined
            last_scheduled_at__gte_or_isnull?: string | undefined
            last_scheduled_at__lt?: string | undefined
            last_scheduled_at__lt_or_isnull?: string | undefined
            last_scheduled_at__lte?: string | undefined
            last_scheduled_at__lte_or_isnull?: string | undefined
            next_scheduled_at__date?: string | undefined
            next_scheduled_at__date_or_isnull?: string | undefined
            next_scheduled_at__gt?: string | undefined
            next_scheduled_at__gt_or_isnull?: string | undefined
            next_scheduled_at__gte?: string | undefined
            next_scheduled_at__gte_or_isnull?: string | undefined
            next_scheduled_at__lt?: string | undefined
            next_scheduled_at__lt_or_isnull?: string | undefined
            next_scheduled_at__lte?: string | undefined
            next_scheduled_at__lte_or_isnull?: string | undefined
            order?: string | undefined
            ordering?: string | undefined
            page_size?: number | undefined
            search?: string | undefined
            tasks_data__address__formatted_address__exact?: string | undefined
            tasks_data__address__formatted_address__icontains?: string | undefined
            tasks_data__address__formatted_address__in?: string | undefined
            tasks_data__category__exact?: string | undefined
            tasks_data__category__in?: string | undefined
            tasks_data__contact__company__exact?: string | undefined
            tasks_data__contact__company__icontains?: string | undefined
            tasks_data__contact__company__in?: string | undefined
            tasks_data__contact__emails__contains?: string | undefined
            tasks_data__contact__emails__isnull?: string | undefined
            tasks_data__contact__name__exact?: string | undefined
            tasks_data__contact__name__icontains?: string | undefined
            tasks_data__contact__name__in?: string | undefined
            tasks_data__contact__notes__exact?: string | undefined
            tasks_data__contact__notes__icontains?: string | undefined
            tasks_data__contact__phones__contains?: string | undefined
            tasks_data__contact__phones__isnull?: string | undefined
            tasks_data__description__icontains?: string | undefined
            tasks_data__state__exact?: string | undefined
            tasks_data__state__in?: string | undefined
            updated_at__date?: string | undefined
            updated_at__date_or_isnull?: string | undefined
            updated_at__gt?: string | undefined
            updated_at__gt_or_isnull?: string | undefined
            updated_at__gte?: string | undefined
            updated_at__gte_or_isnull?: string | undefined
            updated_at__lt?: string | undefined
            updated_at__lt_or_isnull?: string | undefined
            updated_at__lte?: string | undefined
            updated_at__lte_or_isnull?: string | undefined
          }
        }
        output: PaginatedRecurrenceList
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { json: Recurrence } & { form: Recurrence }
        output: Recurrence
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/recurrences/:id/': {
      $get: {
        input: { param: { id: string } }
        output: Recurrence
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: PatchedRecurrence } & { form: PatchedRecurrence }
        output: Recurrence
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: Recurrence } & { form: Recurrence }
        output: Recurrence
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/register/': {
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Registration } & {
              form: Registration
            }
            output: Registration
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Registration } & {
              form: Registration
            }
            output: Registration
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/reports/tasks/states_count/': {
      $get:
        | {
            input: {
              query: {
                account: string
                assignee?: string | undefined
                assignee__in?: string | undefined
                date_from: string
                date_until: string
                format?: 'json' | 'xlsx' | undefined
                timezone?:
                  | 'Africa/Abidjan'
                  | 'Africa/Accra'
                  | 'Africa/Addis_Ababa'
                  | 'Africa/Algiers'
                  | 'Africa/Asmara'
                  | 'Africa/Bamako'
                  | 'Africa/Bangui'
                  | 'Africa/Banjul'
                  | 'Africa/Bissau'
                  | 'Africa/Blantyre'
                  | 'Africa/Brazzaville'
                  | 'Africa/Bujumbura'
                  | 'Africa/Cairo'
                  | 'Africa/Casablanca'
                  | 'Africa/Ceuta'
                  | 'Africa/Conakry'
                  | 'Africa/Dakar'
                  | 'Africa/Dar_es_Salaam'
                  | 'Africa/Djibouti'
                  | 'Africa/Douala'
                  | 'Africa/El_Aaiun'
                  | 'Africa/Freetown'
                  | 'Africa/Gaborone'
                  | 'Africa/Harare'
                  | 'Africa/Johannesburg'
                  | 'Africa/Juba'
                  | 'Africa/Kampala'
                  | 'Africa/Khartoum'
                  | 'Africa/Kigali'
                  | 'Africa/Kinshasa'
                  | 'Africa/Lagos'
                  | 'Africa/Libreville'
                  | 'Africa/Lome'
                  | 'Africa/Luanda'
                  | 'Africa/Lubumbashi'
                  | 'Africa/Lusaka'
                  | 'Africa/Malabo'
                  | 'Africa/Maputo'
                  | 'Africa/Maseru'
                  | 'Africa/Mbabane'
                  | 'Africa/Mogadishu'
                  | 'Africa/Monrovia'
                  | 'Africa/Nairobi'
                  | 'Africa/Ndjamena'
                  | 'Africa/Niamey'
                  | 'Africa/Nouakchott'
                  | 'Africa/Ouagadougou'
                  | 'Africa/Porto-Novo'
                  | 'Africa/Sao_Tome'
                  | 'Africa/Tripoli'
                  | 'Africa/Tunis'
                  | 'Africa/Windhoek'
                  | 'America/Adak'
                  | 'America/Anchorage'
                  | 'America/Anguilla'
                  | 'America/Antigua'
                  | 'America/Araguaina'
                  | 'America/Argentina/Buenos_Aires'
                  | 'America/Argentina/Catamarca'
                  | 'America/Argentina/Cordoba'
                  | 'America/Argentina/Jujuy'
                  | 'America/Argentina/La_Rioja'
                  | 'America/Argentina/Mendoza'
                  | 'America/Argentina/Rio_Gallegos'
                  | 'America/Argentina/Salta'
                  | 'America/Argentina/San_Juan'
                  | 'America/Argentina/San_Luis'
                  | 'America/Argentina/Tucuman'
                  | 'America/Argentina/Ushuaia'
                  | 'America/Aruba'
                  | 'America/Asuncion'
                  | 'America/Atikokan'
                  | 'America/Bahia'
                  | 'America/Bahia_Banderas'
                  | 'America/Barbados'
                  | 'America/Belem'
                  | 'America/Belize'
                  | 'America/Blanc-Sablon'
                  | 'America/Boa_Vista'
                  | 'America/Bogota'
                  | 'America/Boise'
                  | 'America/Cambridge_Bay'
                  | 'America/Campo_Grande'
                  | 'America/Cancun'
                  | 'America/Caracas'
                  | 'America/Cayenne'
                  | 'America/Cayman'
                  | 'America/Chicago'
                  | 'America/Chihuahua'
                  | 'America/Costa_Rica'
                  | 'America/Creston'
                  | 'America/Cuiaba'
                  | 'America/Curacao'
                  | 'America/Danmarkshavn'
                  | 'America/Dawson'
                  | 'America/Dawson_Creek'
                  | 'America/Denver'
                  | 'America/Detroit'
                  | 'America/Dominica'
                  | 'America/Edmonton'
                  | 'America/Eirunepe'
                  | 'America/El_Salvador'
                  | 'America/Fort_Nelson'
                  | 'America/Fortaleza'
                  | 'America/Glace_Bay'
                  | 'America/Goose_Bay'
                  | 'America/Grand_Turk'
                  | 'America/Grenada'
                  | 'America/Guadeloupe'
                  | 'America/Guatemala'
                  | 'America/Guayaquil'
                  | 'America/Guyana'
                  | 'America/Halifax'
                  | 'America/Havana'
                  | 'America/Hermosillo'
                  | 'America/Indiana/Indianapolis'
                  | 'America/Indiana/Knox'
                  | 'America/Indiana/Marengo'
                  | 'America/Indiana/Petersburg'
                  | 'America/Indiana/Tell_City'
                  | 'America/Indiana/Vevay'
                  | 'America/Indiana/Vincennes'
                  | 'America/Indiana/Winamac'
                  | 'America/Inuvik'
                  | 'America/Iqaluit'
                  | 'America/Jamaica'
                  | 'America/Juneau'
                  | 'America/Kentucky/Louisville'
                  | 'America/Kentucky/Monticello'
                  | 'America/Kralendijk'
                  | 'America/La_Paz'
                  | 'America/Lima'
                  | 'America/Los_Angeles'
                  | 'America/Lower_Princes'
                  | 'America/Maceio'
                  | 'America/Managua'
                  | 'America/Manaus'
                  | 'America/Marigot'
                  | 'America/Martinique'
                  | 'America/Matamoros'
                  | 'America/Mazatlan'
                  | 'America/Menominee'
                  | 'America/Merida'
                  | 'America/Metlakatla'
                  | 'America/Mexico_City'
                  | 'America/Miquelon'
                  | 'America/Moncton'
                  | 'America/Monterrey'
                  | 'America/Montevideo'
                  | 'America/Montserrat'
                  | 'America/Nassau'
                  | 'America/New_York'
                  | 'America/Nipigon'
                  | 'America/Nome'
                  | 'America/Noronha'
                  | 'America/North_Dakota/Beulah'
                  | 'America/North_Dakota/Center'
                  | 'America/North_Dakota/New_Salem'
                  | 'America/Nuuk'
                  | 'America/Ojinaga'
                  | 'America/Panama'
                  | 'America/Pangnirtung'
                  | 'America/Paramaribo'
                  | 'America/Phoenix'
                  | 'America/Port-au-Prince'
                  | 'America/Port_of_Spain'
                  | 'America/Porto_Velho'
                  | 'America/Puerto_Rico'
                  | 'America/Punta_Arenas'
                  | 'America/Rainy_River'
                  | 'America/Rankin_Inlet'
                  | 'America/Recife'
                  | 'America/Regina'
                  | 'America/Resolute'
                  | 'America/Rio_Branco'
                  | 'America/Santarem'
                  | 'America/Santiago'
                  | 'America/Santo_Domingo'
                  | 'America/Sao_Paulo'
                  | 'America/Scoresbysund'
                  | 'America/Sitka'
                  | 'America/St_Barthelemy'
                  | 'America/St_Johns'
                  | 'America/St_Kitts'
                  | 'America/St_Lucia'
                  | 'America/St_Thomas'
                  | 'America/St_Vincent'
                  | 'America/Swift_Current'
                  | 'America/Tegucigalpa'
                  | 'America/Thule'
                  | 'America/Thunder_Bay'
                  | 'America/Tijuana'
                  | 'America/Toronto'
                  | 'America/Tortola'
                  | 'America/Vancouver'
                  | 'America/Whitehorse'
                  | 'America/Winnipeg'
                  | 'America/Yakutat'
                  | 'America/Yellowknife'
                  | 'Antarctica/Casey'
                  | 'Antarctica/Davis'
                  | 'Antarctica/DumontDUrville'
                  | 'Antarctica/Macquarie'
                  | 'Antarctica/Mawson'
                  | 'Antarctica/McMurdo'
                  | 'Antarctica/Palmer'
                  | 'Antarctica/Rothera'
                  | 'Antarctica/Syowa'
                  | 'Antarctica/Troll'
                  | 'Antarctica/Vostok'
                  | 'Arctic/Longyearbyen'
                  | 'Asia/Aden'
                  | 'Asia/Almaty'
                  | 'Asia/Amman'
                  | 'Asia/Anadyr'
                  | 'Asia/Aqtau'
                  | 'Asia/Aqtobe'
                  | 'Asia/Ashgabat'
                  | 'Asia/Atyrau'
                  | 'Asia/Baghdad'
                  | 'Asia/Bahrain'
                  | 'Asia/Baku'
                  | 'Asia/Bangkok'
                  | 'Asia/Barnaul'
                  | 'Asia/Beirut'
                  | 'Asia/Bishkek'
                  | 'Asia/Brunei'
                  | 'Asia/Chita'
                  | 'Asia/Choibalsan'
                  | 'Asia/Colombo'
                  | 'Asia/Damascus'
                  | 'Asia/Dhaka'
                  | 'Asia/Dili'
                  | 'Asia/Dubai'
                  | 'Asia/Dushanbe'
                  | 'Asia/Famagusta'
                  | 'Asia/Gaza'
                  | 'Asia/Hebron'
                  | 'Asia/Ho_Chi_Minh'
                  | 'Asia/Hong_Kong'
                  | 'Asia/Hovd'
                  | 'Asia/Irkutsk'
                  | 'Asia/Jakarta'
                  | 'Asia/Jayapura'
                  | 'Asia/Jerusalem'
                  | 'Asia/Kabul'
                  | 'Asia/Kamchatka'
                  | 'Asia/Karachi'
                  | 'Asia/Kathmandu'
                  | 'Asia/Khandyga'
                  | 'Asia/Kolkata'
                  | 'Asia/Krasnoyarsk'
                  | 'Asia/Kuala_Lumpur'
                  | 'Asia/Kuching'
                  | 'Asia/Kuwait'
                  | 'Asia/Macau'
                  | 'Asia/Magadan'
                  | 'Asia/Makassar'
                  | 'Asia/Manila'
                  | 'Asia/Muscat'
                  | 'Asia/Nicosia'
                  | 'Asia/Novokuznetsk'
                  | 'Asia/Novosibirsk'
                  | 'Asia/Omsk'
                  | 'Asia/Oral'
                  | 'Asia/Phnom_Penh'
                  | 'Asia/Pontianak'
                  | 'Asia/Pyongyang'
                  | 'Asia/Qatar'
                  | 'Asia/Qostanay'
                  | 'Asia/Qyzylorda'
                  | 'Asia/Riyadh'
                  | 'Asia/Sakhalin'
                  | 'Asia/Samarkand'
                  | 'Asia/Seoul'
                  | 'Asia/Shanghai'
                  | 'Asia/Singapore'
                  | 'Asia/Srednekolymsk'
                  | 'Asia/Taipei'
                  | 'Asia/Tashkent'
                  | 'Asia/Tbilisi'
                  | 'Asia/Tehran'
                  | 'Asia/Thimphu'
                  | 'Asia/Tokyo'
                  | 'Asia/Tomsk'
                  | 'Asia/Ulaanbaatar'
                  | 'Asia/Urumqi'
                  | 'Asia/Ust-Nera'
                  | 'Asia/Vientiane'
                  | 'Asia/Vladivostok'
                  | 'Asia/Yakutsk'
                  | 'Asia/Yangon'
                  | 'Asia/Yekaterinburg'
                  | 'Asia/Yerevan'
                  | 'Atlantic/Azores'
                  | 'Atlantic/Bermuda'
                  | 'Atlantic/Canary'
                  | 'Atlantic/Cape_Verde'
                  | 'Atlantic/Faroe'
                  | 'Atlantic/Madeira'
                  | 'Atlantic/Reykjavik'
                  | 'Atlantic/South_Georgia'
                  | 'Atlantic/St_Helena'
                  | 'Atlantic/Stanley'
                  | 'Australia/Adelaide'
                  | 'Australia/Brisbane'
                  | 'Australia/Broken_Hill'
                  | 'Australia/Darwin'
                  | 'Australia/Eucla'
                  | 'Australia/Hobart'
                  | 'Australia/Lindeman'
                  | 'Australia/Lord_Howe'
                  | 'Australia/Melbourne'
                  | 'Australia/Perth'
                  | 'Australia/Sydney'
                  | 'Canada/Atlantic'
                  | 'Canada/Central'
                  | 'Canada/Eastern'
                  | 'Canada/Mountain'
                  | 'Canada/Newfoundland'
                  | 'Canada/Pacific'
                  | 'Europe/Amsterdam'
                  | 'Europe/Andorra'
                  | 'Europe/Astrakhan'
                  | 'Europe/Athens'
                  | 'Europe/Belgrade'
                  | 'Europe/Berlin'
                  | 'Europe/Bratislava'
                  | 'Europe/Brussels'
                  | 'Europe/Bucharest'
                  | 'Europe/Budapest'
                  | 'Europe/Busingen'
                  | 'Europe/Chisinau'
                  | 'Europe/Copenhagen'
                  | 'Europe/Dublin'
                  | 'Europe/Gibraltar'
                  | 'Europe/Guernsey'
                  | 'Europe/Helsinki'
                  | 'Europe/Isle_of_Man'
                  | 'Europe/Istanbul'
                  | 'Europe/Jersey'
                  | 'Europe/Kaliningrad'
                  | 'Europe/Kiev'
                  | 'Europe/Kirov'
                  | 'Europe/Lisbon'
                  | 'Europe/Ljubljana'
                  | 'Europe/London'
                  | 'Europe/Luxembourg'
                  | 'Europe/Madrid'
                  | 'Europe/Malta'
                  | 'Europe/Mariehamn'
                  | 'Europe/Minsk'
                  | 'Europe/Monaco'
                  | 'Europe/Moscow'
                  | 'Europe/Oslo'
                  | 'Europe/Paris'
                  | 'Europe/Podgorica'
                  | 'Europe/Prague'
                  | 'Europe/Riga'
                  | 'Europe/Rome'
                  | 'Europe/Samara'
                  | 'Europe/San_Marino'
                  | 'Europe/Sarajevo'
                  | 'Europe/Saratov'
                  | 'Europe/Simferopol'
                  | 'Europe/Skopje'
                  | 'Europe/Sofia'
                  | 'Europe/Stockholm'
                  | 'Europe/Tallinn'
                  | 'Europe/Tirane'
                  | 'Europe/Ulyanovsk'
                  | 'Europe/Uzhgorod'
                  | 'Europe/Vaduz'
                  | 'Europe/Vatican'
                  | 'Europe/Vienna'
                  | 'Europe/Vilnius'
                  | 'Europe/Volgograd'
                  | 'Europe/Warsaw'
                  | 'Europe/Zagreb'
                  | 'Europe/Zaporozhye'
                  | 'Europe/Zurich'
                  | 'GMT'
                  | 'Indian/Antananarivo'
                  | 'Indian/Chagos'
                  | 'Indian/Christmas'
                  | 'Indian/Cocos'
                  | 'Indian/Comoro'
                  | 'Indian/Kerguelen'
                  | 'Indian/Mahe'
                  | 'Indian/Maldives'
                  | 'Indian/Mauritius'
                  | 'Indian/Mayotte'
                  | 'Indian/Reunion'
                  | 'Pacific/Apia'
                  | 'Pacific/Auckland'
                  | 'Pacific/Bougainville'
                  | 'Pacific/Chatham'
                  | 'Pacific/Chuuk'
                  | 'Pacific/Easter'
                  | 'Pacific/Efate'
                  | 'Pacific/Fakaofo'
                  | 'Pacific/Fiji'
                  | 'Pacific/Funafuti'
                  | 'Pacific/Galapagos'
                  | 'Pacific/Gambier'
                  | 'Pacific/Guadalcanal'
                  | 'Pacific/Guam'
                  | 'Pacific/Honolulu'
                  | 'Pacific/Kanton'
                  | 'Pacific/Kiritimati'
                  | 'Pacific/Kosrae'
                  | 'Pacific/Kwajalein'
                  | 'Pacific/Majuro'
                  | 'Pacific/Marquesas'
                  | 'Pacific/Midway'
                  | 'Pacific/Nauru'
                  | 'Pacific/Niue'
                  | 'Pacific/Norfolk'
                  | 'Pacific/Noumea'
                  | 'Pacific/Pago_Pago'
                  | 'Pacific/Palau'
                  | 'Pacific/Pitcairn'
                  | 'Pacific/Pohnpei'
                  | 'Pacific/Port_Moresby'
                  | 'Pacific/Rarotonga'
                  | 'Pacific/Saipan'
                  | 'Pacific/Tahiti'
                  | 'Pacific/Tarawa'
                  | 'Pacific/Tongatapu'
                  | 'Pacific/Wake'
                  | 'Pacific/Wallis'
                  | 'US/Alaska'
                  | 'US/Arizona'
                  | 'US/Central'
                  | 'US/Eastern'
                  | 'US/Hawaii'
                  | 'US/Mountain'
                  | 'US/Pacific'
                  | 'UTC'
                  | undefined
              }
            }
            output: TasksStatesCountResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account: string
                assignee?: string | undefined
                assignee__in?: string | undefined
                date_from: string
                date_until: string
                format?: 'json' | 'xlsx' | undefined
                timezone?:
                  | 'Africa/Abidjan'
                  | 'Africa/Accra'
                  | 'Africa/Addis_Ababa'
                  | 'Africa/Algiers'
                  | 'Africa/Asmara'
                  | 'Africa/Bamako'
                  | 'Africa/Bangui'
                  | 'Africa/Banjul'
                  | 'Africa/Bissau'
                  | 'Africa/Blantyre'
                  | 'Africa/Brazzaville'
                  | 'Africa/Bujumbura'
                  | 'Africa/Cairo'
                  | 'Africa/Casablanca'
                  | 'Africa/Ceuta'
                  | 'Africa/Conakry'
                  | 'Africa/Dakar'
                  | 'Africa/Dar_es_Salaam'
                  | 'Africa/Djibouti'
                  | 'Africa/Douala'
                  | 'Africa/El_Aaiun'
                  | 'Africa/Freetown'
                  | 'Africa/Gaborone'
                  | 'Africa/Harare'
                  | 'Africa/Johannesburg'
                  | 'Africa/Juba'
                  | 'Africa/Kampala'
                  | 'Africa/Khartoum'
                  | 'Africa/Kigali'
                  | 'Africa/Kinshasa'
                  | 'Africa/Lagos'
                  | 'Africa/Libreville'
                  | 'Africa/Lome'
                  | 'Africa/Luanda'
                  | 'Africa/Lubumbashi'
                  | 'Africa/Lusaka'
                  | 'Africa/Malabo'
                  | 'Africa/Maputo'
                  | 'Africa/Maseru'
                  | 'Africa/Mbabane'
                  | 'Africa/Mogadishu'
                  | 'Africa/Monrovia'
                  | 'Africa/Nairobi'
                  | 'Africa/Ndjamena'
                  | 'Africa/Niamey'
                  | 'Africa/Nouakchott'
                  | 'Africa/Ouagadougou'
                  | 'Africa/Porto-Novo'
                  | 'Africa/Sao_Tome'
                  | 'Africa/Tripoli'
                  | 'Africa/Tunis'
                  | 'Africa/Windhoek'
                  | 'America/Adak'
                  | 'America/Anchorage'
                  | 'America/Anguilla'
                  | 'America/Antigua'
                  | 'America/Araguaina'
                  | 'America/Argentina/Buenos_Aires'
                  | 'America/Argentina/Catamarca'
                  | 'America/Argentina/Cordoba'
                  | 'America/Argentina/Jujuy'
                  | 'America/Argentina/La_Rioja'
                  | 'America/Argentina/Mendoza'
                  | 'America/Argentina/Rio_Gallegos'
                  | 'America/Argentina/Salta'
                  | 'America/Argentina/San_Juan'
                  | 'America/Argentina/San_Luis'
                  | 'America/Argentina/Tucuman'
                  | 'America/Argentina/Ushuaia'
                  | 'America/Aruba'
                  | 'America/Asuncion'
                  | 'America/Atikokan'
                  | 'America/Bahia'
                  | 'America/Bahia_Banderas'
                  | 'America/Barbados'
                  | 'America/Belem'
                  | 'America/Belize'
                  | 'America/Blanc-Sablon'
                  | 'America/Boa_Vista'
                  | 'America/Bogota'
                  | 'America/Boise'
                  | 'America/Cambridge_Bay'
                  | 'America/Campo_Grande'
                  | 'America/Cancun'
                  | 'America/Caracas'
                  | 'America/Cayenne'
                  | 'America/Cayman'
                  | 'America/Chicago'
                  | 'America/Chihuahua'
                  | 'America/Costa_Rica'
                  | 'America/Creston'
                  | 'America/Cuiaba'
                  | 'America/Curacao'
                  | 'America/Danmarkshavn'
                  | 'America/Dawson'
                  | 'America/Dawson_Creek'
                  | 'America/Denver'
                  | 'America/Detroit'
                  | 'America/Dominica'
                  | 'America/Edmonton'
                  | 'America/Eirunepe'
                  | 'America/El_Salvador'
                  | 'America/Fort_Nelson'
                  | 'America/Fortaleza'
                  | 'America/Glace_Bay'
                  | 'America/Goose_Bay'
                  | 'America/Grand_Turk'
                  | 'America/Grenada'
                  | 'America/Guadeloupe'
                  | 'America/Guatemala'
                  | 'America/Guayaquil'
                  | 'America/Guyana'
                  | 'America/Halifax'
                  | 'America/Havana'
                  | 'America/Hermosillo'
                  | 'America/Indiana/Indianapolis'
                  | 'America/Indiana/Knox'
                  | 'America/Indiana/Marengo'
                  | 'America/Indiana/Petersburg'
                  | 'America/Indiana/Tell_City'
                  | 'America/Indiana/Vevay'
                  | 'America/Indiana/Vincennes'
                  | 'America/Indiana/Winamac'
                  | 'America/Inuvik'
                  | 'America/Iqaluit'
                  | 'America/Jamaica'
                  | 'America/Juneau'
                  | 'America/Kentucky/Louisville'
                  | 'America/Kentucky/Monticello'
                  | 'America/Kralendijk'
                  | 'America/La_Paz'
                  | 'America/Lima'
                  | 'America/Los_Angeles'
                  | 'America/Lower_Princes'
                  | 'America/Maceio'
                  | 'America/Managua'
                  | 'America/Manaus'
                  | 'America/Marigot'
                  | 'America/Martinique'
                  | 'America/Matamoros'
                  | 'America/Mazatlan'
                  | 'America/Menominee'
                  | 'America/Merida'
                  | 'America/Metlakatla'
                  | 'America/Mexico_City'
                  | 'America/Miquelon'
                  | 'America/Moncton'
                  | 'America/Monterrey'
                  | 'America/Montevideo'
                  | 'America/Montserrat'
                  | 'America/Nassau'
                  | 'America/New_York'
                  | 'America/Nipigon'
                  | 'America/Nome'
                  | 'America/Noronha'
                  | 'America/North_Dakota/Beulah'
                  | 'America/North_Dakota/Center'
                  | 'America/North_Dakota/New_Salem'
                  | 'America/Nuuk'
                  | 'America/Ojinaga'
                  | 'America/Panama'
                  | 'America/Pangnirtung'
                  | 'America/Paramaribo'
                  | 'America/Phoenix'
                  | 'America/Port-au-Prince'
                  | 'America/Port_of_Spain'
                  | 'America/Porto_Velho'
                  | 'America/Puerto_Rico'
                  | 'America/Punta_Arenas'
                  | 'America/Rainy_River'
                  | 'America/Rankin_Inlet'
                  | 'America/Recife'
                  | 'America/Regina'
                  | 'America/Resolute'
                  | 'America/Rio_Branco'
                  | 'America/Santarem'
                  | 'America/Santiago'
                  | 'America/Santo_Domingo'
                  | 'America/Sao_Paulo'
                  | 'America/Scoresbysund'
                  | 'America/Sitka'
                  | 'America/St_Barthelemy'
                  | 'America/St_Johns'
                  | 'America/St_Kitts'
                  | 'America/St_Lucia'
                  | 'America/St_Thomas'
                  | 'America/St_Vincent'
                  | 'America/Swift_Current'
                  | 'America/Tegucigalpa'
                  | 'America/Thule'
                  | 'America/Thunder_Bay'
                  | 'America/Tijuana'
                  | 'America/Toronto'
                  | 'America/Tortola'
                  | 'America/Vancouver'
                  | 'America/Whitehorse'
                  | 'America/Winnipeg'
                  | 'America/Yakutat'
                  | 'America/Yellowknife'
                  | 'Antarctica/Casey'
                  | 'Antarctica/Davis'
                  | 'Antarctica/DumontDUrville'
                  | 'Antarctica/Macquarie'
                  | 'Antarctica/Mawson'
                  | 'Antarctica/McMurdo'
                  | 'Antarctica/Palmer'
                  | 'Antarctica/Rothera'
                  | 'Antarctica/Syowa'
                  | 'Antarctica/Troll'
                  | 'Antarctica/Vostok'
                  | 'Arctic/Longyearbyen'
                  | 'Asia/Aden'
                  | 'Asia/Almaty'
                  | 'Asia/Amman'
                  | 'Asia/Anadyr'
                  | 'Asia/Aqtau'
                  | 'Asia/Aqtobe'
                  | 'Asia/Ashgabat'
                  | 'Asia/Atyrau'
                  | 'Asia/Baghdad'
                  | 'Asia/Bahrain'
                  | 'Asia/Baku'
                  | 'Asia/Bangkok'
                  | 'Asia/Barnaul'
                  | 'Asia/Beirut'
                  | 'Asia/Bishkek'
                  | 'Asia/Brunei'
                  | 'Asia/Chita'
                  | 'Asia/Choibalsan'
                  | 'Asia/Colombo'
                  | 'Asia/Damascus'
                  | 'Asia/Dhaka'
                  | 'Asia/Dili'
                  | 'Asia/Dubai'
                  | 'Asia/Dushanbe'
                  | 'Asia/Famagusta'
                  | 'Asia/Gaza'
                  | 'Asia/Hebron'
                  | 'Asia/Ho_Chi_Minh'
                  | 'Asia/Hong_Kong'
                  | 'Asia/Hovd'
                  | 'Asia/Irkutsk'
                  | 'Asia/Jakarta'
                  | 'Asia/Jayapura'
                  | 'Asia/Jerusalem'
                  | 'Asia/Kabul'
                  | 'Asia/Kamchatka'
                  | 'Asia/Karachi'
                  | 'Asia/Kathmandu'
                  | 'Asia/Khandyga'
                  | 'Asia/Kolkata'
                  | 'Asia/Krasnoyarsk'
                  | 'Asia/Kuala_Lumpur'
                  | 'Asia/Kuching'
                  | 'Asia/Kuwait'
                  | 'Asia/Macau'
                  | 'Asia/Magadan'
                  | 'Asia/Makassar'
                  | 'Asia/Manila'
                  | 'Asia/Muscat'
                  | 'Asia/Nicosia'
                  | 'Asia/Novokuznetsk'
                  | 'Asia/Novosibirsk'
                  | 'Asia/Omsk'
                  | 'Asia/Oral'
                  | 'Asia/Phnom_Penh'
                  | 'Asia/Pontianak'
                  | 'Asia/Pyongyang'
                  | 'Asia/Qatar'
                  | 'Asia/Qostanay'
                  | 'Asia/Qyzylorda'
                  | 'Asia/Riyadh'
                  | 'Asia/Sakhalin'
                  | 'Asia/Samarkand'
                  | 'Asia/Seoul'
                  | 'Asia/Shanghai'
                  | 'Asia/Singapore'
                  | 'Asia/Srednekolymsk'
                  | 'Asia/Taipei'
                  | 'Asia/Tashkent'
                  | 'Asia/Tbilisi'
                  | 'Asia/Tehran'
                  | 'Asia/Thimphu'
                  | 'Asia/Tokyo'
                  | 'Asia/Tomsk'
                  | 'Asia/Ulaanbaatar'
                  | 'Asia/Urumqi'
                  | 'Asia/Ust-Nera'
                  | 'Asia/Vientiane'
                  | 'Asia/Vladivostok'
                  | 'Asia/Yakutsk'
                  | 'Asia/Yangon'
                  | 'Asia/Yekaterinburg'
                  | 'Asia/Yerevan'
                  | 'Atlantic/Azores'
                  | 'Atlantic/Bermuda'
                  | 'Atlantic/Canary'
                  | 'Atlantic/Cape_Verde'
                  | 'Atlantic/Faroe'
                  | 'Atlantic/Madeira'
                  | 'Atlantic/Reykjavik'
                  | 'Atlantic/South_Georgia'
                  | 'Atlantic/St_Helena'
                  | 'Atlantic/Stanley'
                  | 'Australia/Adelaide'
                  | 'Australia/Brisbane'
                  | 'Australia/Broken_Hill'
                  | 'Australia/Darwin'
                  | 'Australia/Eucla'
                  | 'Australia/Hobart'
                  | 'Australia/Lindeman'
                  | 'Australia/Lord_Howe'
                  | 'Australia/Melbourne'
                  | 'Australia/Perth'
                  | 'Australia/Sydney'
                  | 'Canada/Atlantic'
                  | 'Canada/Central'
                  | 'Canada/Eastern'
                  | 'Canada/Mountain'
                  | 'Canada/Newfoundland'
                  | 'Canada/Pacific'
                  | 'Europe/Amsterdam'
                  | 'Europe/Andorra'
                  | 'Europe/Astrakhan'
                  | 'Europe/Athens'
                  | 'Europe/Belgrade'
                  | 'Europe/Berlin'
                  | 'Europe/Bratislava'
                  | 'Europe/Brussels'
                  | 'Europe/Bucharest'
                  | 'Europe/Budapest'
                  | 'Europe/Busingen'
                  | 'Europe/Chisinau'
                  | 'Europe/Copenhagen'
                  | 'Europe/Dublin'
                  | 'Europe/Gibraltar'
                  | 'Europe/Guernsey'
                  | 'Europe/Helsinki'
                  | 'Europe/Isle_of_Man'
                  | 'Europe/Istanbul'
                  | 'Europe/Jersey'
                  | 'Europe/Kaliningrad'
                  | 'Europe/Kiev'
                  | 'Europe/Kirov'
                  | 'Europe/Lisbon'
                  | 'Europe/Ljubljana'
                  | 'Europe/London'
                  | 'Europe/Luxembourg'
                  | 'Europe/Madrid'
                  | 'Europe/Malta'
                  | 'Europe/Mariehamn'
                  | 'Europe/Minsk'
                  | 'Europe/Monaco'
                  | 'Europe/Moscow'
                  | 'Europe/Oslo'
                  | 'Europe/Paris'
                  | 'Europe/Podgorica'
                  | 'Europe/Prague'
                  | 'Europe/Riga'
                  | 'Europe/Rome'
                  | 'Europe/Samara'
                  | 'Europe/San_Marino'
                  | 'Europe/Sarajevo'
                  | 'Europe/Saratov'
                  | 'Europe/Simferopol'
                  | 'Europe/Skopje'
                  | 'Europe/Sofia'
                  | 'Europe/Stockholm'
                  | 'Europe/Tallinn'
                  | 'Europe/Tirane'
                  | 'Europe/Ulyanovsk'
                  | 'Europe/Uzhgorod'
                  | 'Europe/Vaduz'
                  | 'Europe/Vatican'
                  | 'Europe/Vienna'
                  | 'Europe/Vilnius'
                  | 'Europe/Volgograd'
                  | 'Europe/Warsaw'
                  | 'Europe/Zagreb'
                  | 'Europe/Zaporozhye'
                  | 'Europe/Zurich'
                  | 'GMT'
                  | 'Indian/Antananarivo'
                  | 'Indian/Chagos'
                  | 'Indian/Christmas'
                  | 'Indian/Cocos'
                  | 'Indian/Comoro'
                  | 'Indian/Kerguelen'
                  | 'Indian/Mahe'
                  | 'Indian/Maldives'
                  | 'Indian/Mauritius'
                  | 'Indian/Mayotte'
                  | 'Indian/Reunion'
                  | 'Pacific/Apia'
                  | 'Pacific/Auckland'
                  | 'Pacific/Bougainville'
                  | 'Pacific/Chatham'
                  | 'Pacific/Chuuk'
                  | 'Pacific/Easter'
                  | 'Pacific/Efate'
                  | 'Pacific/Fakaofo'
                  | 'Pacific/Fiji'
                  | 'Pacific/Funafuti'
                  | 'Pacific/Galapagos'
                  | 'Pacific/Gambier'
                  | 'Pacific/Guadalcanal'
                  | 'Pacific/Guam'
                  | 'Pacific/Honolulu'
                  | 'Pacific/Kanton'
                  | 'Pacific/Kiritimati'
                  | 'Pacific/Kosrae'
                  | 'Pacific/Kwajalein'
                  | 'Pacific/Majuro'
                  | 'Pacific/Marquesas'
                  | 'Pacific/Midway'
                  | 'Pacific/Nauru'
                  | 'Pacific/Niue'
                  | 'Pacific/Norfolk'
                  | 'Pacific/Noumea'
                  | 'Pacific/Pago_Pago'
                  | 'Pacific/Palau'
                  | 'Pacific/Pitcairn'
                  | 'Pacific/Pohnpei'
                  | 'Pacific/Port_Moresby'
                  | 'Pacific/Rarotonga'
                  | 'Pacific/Saipan'
                  | 'Pacific/Tahiti'
                  | 'Pacific/Tarawa'
                  | 'Pacific/Tongatapu'
                  | 'Pacific/Wake'
                  | 'Pacific/Wallis'
                  | 'US/Alaska'
                  | 'US/Arizona'
                  | 'US/Central'
                  | 'US/Eastern'
                  | 'US/Hawaii'
                  | 'US/Mountain'
                  | 'US/Pacific'
                  | 'UTC'
                  | undefined
              }
            }
            output: TasksStatesCountResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/reviews/': {
      $get:
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                tracker?: string | undefined
              }
            }
            output: PaginatedReviewList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                tracker?: string | undefined
              }
            }
            output: PaginatedReviewList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Review } & {
              form: Review
            }
            output: Review
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Review } & {
              form: Review
            }
            output: Review
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/reviews/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Review
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Review
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/route_optimizations/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                assignees__id__in?: string | undefined
                commited_at__date?: string | undefined
                commited_at__date_or_isnull?: string | undefined
                commited_at__gt?: string | undefined
                commited_at__gt_or_isnull?: string | undefined
                commited_at__gte?: string | undefined
                commited_at__gte_or_isnull?: string | undefined
                commited_at__lt?: string | undefined
                commited_at__lt_or_isnull?: string | undefined
                commited_at__lte?: string | undefined
                commited_at__lte_or_isnull?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xml' | undefined
                id?: string | undefined
                objective?: 'vehicles' | 'transport_time' | 'completion_time' | undefined
                objective__in?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                ready_at__date?: string | undefined
                ready_at__date_or_isnull?: string | undefined
                ready_at__gt?: string | undefined
                ready_at__gt_or_isnull?: string | undefined
                ready_at__gte?: string | undefined
                ready_at__gte_or_isnull?: string | undefined
                ready_at__lt?: string | undefined
                ready_at__lt_or_isnull?: string | undefined
                ready_at__lte?: string | undefined
                ready_at__lte_or_isnull?: string | undefined
                scheduled_at__date?: string | undefined
                scheduled_at__date_or_isnull?: string | undefined
                scheduled_at__gt?: string | undefined
                scheduled_at__gt_or_isnull?: string | undefined
                scheduled_at__gte?: string | undefined
                scheduled_at__gte_or_isnull?: string | undefined
                scheduled_at__lt?: string | undefined
                scheduled_at__lt_or_isnull?: string | undefined
                scheduled_at__lte?: string | undefined
                scheduled_at__lte_or_isnull?: string | undefined
                started_at__date?: string | undefined
                started_at__date_or_isnull?: string | undefined
                started_at__gt?: string | undefined
                started_at__gt_or_isnull?: string | undefined
                started_at__gte?: string | undefined
                started_at__gte_or_isnull?: string | undefined
                started_at__lt?: string | undefined
                started_at__lt_or_isnull?: string | undefined
                started_at__lte?: string | undefined
                started_at__lte_or_isnull?: string | undefined
                state?:
                  | 'pending'
                  | 'started'
                  | 'ready'
                  | 'completed'
                  | 'over_quota'
                  | 'failed'
                  | undefined
                state__in?: string | undefined
                total_distance__gt?: string | undefined
                total_distance__gte?: string | undefined
                total_distance__lt?: string | undefined
                total_distance__lte?: string | undefined
                total_duration__gt?: string | undefined
                total_duration__gte?: string | undefined
                total_duration__lt?: string | undefined
                total_duration__lte?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedRouteOptimizationSerializerV2List
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                assignees__id__in?: string | undefined
                commited_at__date?: string | undefined
                commited_at__date_or_isnull?: string | undefined
                commited_at__gt?: string | undefined
                commited_at__gt_or_isnull?: string | undefined
                commited_at__gte?: string | undefined
                commited_at__gte_or_isnull?: string | undefined
                commited_at__lt?: string | undefined
                commited_at__lt_or_isnull?: string | undefined
                commited_at__lte?: string | undefined
                commited_at__lte_or_isnull?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xml' | undefined
                id?: string | undefined
                objective?: 'vehicles' | 'transport_time' | 'completion_time' | undefined
                objective__in?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                ready_at__date?: string | undefined
                ready_at__date_or_isnull?: string | undefined
                ready_at__gt?: string | undefined
                ready_at__gt_or_isnull?: string | undefined
                ready_at__gte?: string | undefined
                ready_at__gte_or_isnull?: string | undefined
                ready_at__lt?: string | undefined
                ready_at__lt_or_isnull?: string | undefined
                ready_at__lte?: string | undefined
                ready_at__lte_or_isnull?: string | undefined
                scheduled_at__date?: string | undefined
                scheduled_at__date_or_isnull?: string | undefined
                scheduled_at__gt?: string | undefined
                scheduled_at__gt_or_isnull?: string | undefined
                scheduled_at__gte?: string | undefined
                scheduled_at__gte_or_isnull?: string | undefined
                scheduled_at__lt?: string | undefined
                scheduled_at__lt_or_isnull?: string | undefined
                scheduled_at__lte?: string | undefined
                scheduled_at__lte_or_isnull?: string | undefined
                started_at__date?: string | undefined
                started_at__date_or_isnull?: string | undefined
                started_at__gt?: string | undefined
                started_at__gt_or_isnull?: string | undefined
                started_at__gte?: string | undefined
                started_at__gte_or_isnull?: string | undefined
                started_at__lt?: string | undefined
                started_at__lt_or_isnull?: string | undefined
                started_at__lte?: string | undefined
                started_at__lte_or_isnull?: string | undefined
                state?:
                  | 'pending'
                  | 'started'
                  | 'ready'
                  | 'completed'
                  | 'over_quota'
                  | 'failed'
                  | undefined
                state__in?: string | undefined
                total_distance__gt?: string | undefined
                total_distance__gte?: string | undefined
                total_distance__lt?: string | undefined
                total_distance__lte?: string | undefined
                total_duration__gt?: string | undefined
                total_duration__gte?: string | undefined
                total_duration__lt?: string | undefined
                total_duration__lte?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedRouteOptimizationSerializerV2List
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } } & {
              json: RouteOptimizationSerializerV2
            }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } } & {
              json: RouteOptimizationSerializerV2
            }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/route_optimizations/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/route_optimizations/:id/commit/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: RouteOptimizationSerializerV2 }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: RouteOptimizationSerializerV2 }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/route_optimizations/:id/results/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/route_optimizations/:id/routes/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: RouteOptimizationSerializerV2 }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: RouteOptimizationSerializerV2 }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/route_optimizations/:id/schedule/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: RouteOptimizationSerializerV2 }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: RouteOptimizationSerializerV2 }
            output: RouteOptimizationSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/routes/': {
      $get: {
        input: {
          query: {
            account?: string | undefined
            assignee?: string | undefined
            code?: string | undefined
            created_at__date?: string | undefined
            created_at__date_or_isnull?: string | undefined
            created_at__gt?: string | undefined
            created_at__gt_or_isnull?: string | undefined
            created_at__gte?: string | undefined
            created_at__gte_or_isnull?: string | undefined
            created_at__lt?: string | undefined
            created_at__lt_or_isnull?: string | undefined
            created_at__lte?: string | undefined
            created_at__lte_or_isnull?: string | undefined
            cursor?: number | undefined
            ordering?: string | undefined
            page_size?: number | undefined
            updated_at__date?: string | undefined
            updated_at__date_or_isnull?: string | undefined
            updated_at__gt?: string | undefined
            updated_at__gt_or_isnull?: string | undefined
            updated_at__gte?: string | undefined
            updated_at__gte_or_isnull?: string | undefined
            updated_at__lt?: string | undefined
            updated_at__lt_or_isnull?: string | undefined
            updated_at__lte?: string | undefined
            updated_at__lte_or_isnull?: string | undefined
          }
        }
        output: PaginatedRouteList
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { json: Route } & { form: Route }
        output: Route
        outputFormat: 'text'
        status: 201
      }
    }
  } & {
    '/routes/:id/': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: string } }; output: Route; outputFormat: 'text'; status: 200 }
      $patch: {
        input: { param: { id: string } } & { json: PatchedRoute } & { form: PatchedRoute }
        output: Route
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: Route } & { form: Route }
        output: Route
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/scenes/dashboard/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                account__in?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__in?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__in?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__in?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__in?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__in?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__geocode_failed_at__date?: string | undefined
                address__geocode_failed_at__date_or_isnull?: string | undefined
                address__geocode_failed_at__gt?: string | undefined
                address__geocode_failed_at__gt_or_isnull?: string | undefined
                address__geocode_failed_at__gte?: string | undefined
                address__geocode_failed_at__gte_or_isnull?: string | undefined
                address__geocode_failed_at__lt?: string | undefined
                address__geocode_failed_at__lt_or_isnull?: string | undefined
                address__geocode_failed_at__lte?: string | undefined
                address__geocode_failed_at__lte_or_isnull?: string | undefined
                address__geocoded_at__date?: string | undefined
                address__geocoded_at__date_or_isnull?: string | undefined
                address__geocoded_at__gt?: string | undefined
                address__geocoded_at__gt_or_isnull?: string | undefined
                address__geocoded_at__gte?: string | undefined
                address__geocoded_at__gte_or_isnull?: string | undefined
                address__geocoded_at__lt?: string | undefined
                address__geocoded_at__lt_or_isnull?: string | undefined
                address__geocoded_at__lte?: string | undefined
                address__geocoded_at__lte_or_isnull?: string | undefined
                address__google_place_id?: string | undefined
                address__google_place_id__icontains?: string | undefined
                address__google_place_id__in?: string | undefined
                address__google_place_id__iregex?: string | undefined
                address__google_place_id__istartswith?: string | undefined
                address__google_place_id__search?: string | undefined
                address__house_number?: string | undefined
                address__house_number__icontains?: string | undefined
                address__house_number__in?: string | undefined
                address__house_number__iregex?: string | undefined
                address__house_number__istartswith?: string | undefined
                address__house_number__search?: string | undefined
                address__point_of_interest?: string | undefined
                address__point_of_interest__icontains?: string | undefined
                address__point_of_interest__in?: string | undefined
                address__point_of_interest__iregex?: string | undefined
                address__point_of_interest__istartswith?: string | undefined
                address__point_of_interest__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__in?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__raw_address?: string | undefined
                address__raw_address__icontains?: string | undefined
                address__raw_address__in?: string | undefined
                address__raw_address__iregex?: string | undefined
                address__raw_address__istartswith?: string | undefined
                address__raw_address__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__in?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__in?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                address_data?: string | undefined
                address_id?: string | undefined
                address_id__in?: string | undefined
                address_id__isnull?: string | undefined
                assignee?: string | undefined
                assignee__email?: string | undefined
                assignee__email__icontains?: string | undefined
                assignee__email__iregex?: string | undefined
                assignee__email__isnull?: string | undefined
                assignee__email__istartswith?: string | undefined
                assignee__email__search?: string | undefined
                assignee__first_name?: string | undefined
                assignee__first_name__icontains?: string | undefined
                assignee__first_name__iregex?: string | undefined
                assignee__first_name__isnull?: string | undefined
                assignee__first_name__istartswith?: string | undefined
                assignee__first_name__search?: string | undefined
                assignee__in?: string | undefined
                assignee__last_name?: string | undefined
                assignee__last_name__icontains?: string | undefined
                assignee__last_name__iregex?: string | undefined
                assignee__last_name__isnull?: string | undefined
                assignee__last_name__istartswith?: string | undefined
                assignee__last_name__search?: string | undefined
                assignee__phone?: string | undefined
                assignee__phone__icontains?: string | undefined
                assignee__phone__iregex?: string | undefined
                assignee__phone__isnull?: string | undefined
                assignee__phone__istartswith?: string | undefined
                assignee__phone__search?: string | undefined
                assignee_id?: string | undefined
                assignee_id__in?: string | undefined
                assignee_id__isnull?: string | undefined
                assignee_proximity?: 'away' | 'near' | undefined
                assignee_proximity__in?: string | undefined
                barcodes__contained_by?: string | undefined
                barcodes__contains?: string | undefined
                barcodes__isnull?: boolean | undefined
                barcodes__overlap?: string | undefined
                cancelled_at__date?: string | undefined
                cancelled_at__date_or_isnull?: string | undefined
                cancelled_at__gt?: string | undefined
                cancelled_at__gt_or_isnull?: string | undefined
                cancelled_at__gte?: string | undefined
                cancelled_at__gte_or_isnull?: string | undefined
                cancelled_at__lt?: string | undefined
                cancelled_at__lt_or_isnull?: string | undefined
                cancelled_at__lte?: string | undefined
                cancelled_at__lte_or_isnull?: string | undefined
                category?: 'assignment' | 'pick_up' | 'drop_off' | 'warehouse' | undefined
                category__in?: string | undefined
                complete_after__date?: string | undefined
                complete_after__date_or_isnull?: string | undefined
                complete_after__gt?: string | undefined
                complete_after__gt_or_isnull?: string | undefined
                complete_after__gte?: string | undefined
                complete_after__gte_or_isnull?: string | undefined
                complete_after__lt?: string | undefined
                complete_after__lt_or_isnull?: string | undefined
                complete_after__lte?: string | undefined
                complete_after__lte_or_isnull?: string | undefined
                complete_before__date?: string | undefined
                complete_before__date_or_isnull?: string | undefined
                complete_before__gt?: string | undefined
                complete_before__gt_or_isnull?: string | undefined
                complete_before__gte?: string | undefined
                complete_before__gte_or_isnull?: string | undefined
                complete_before__lt?: string | undefined
                complete_before__lt_or_isnull?: string | undefined
                complete_before__lte?: string | undefined
                complete_before__lte_or_isnull?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__in?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__email?: string | undefined
                contact__email__icontains?: string | undefined
                contact__email__in?: string | undefined
                contact__email__iregex?: string | undefined
                contact__email__istartswith?: string | undefined
                contact__email__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__overlap?: string | undefined
                contact__name?: string | undefined
                contact__name__icontains?: string | undefined
                contact__name__in?: string | undefined
                contact__name__iregex?: string | undefined
                contact__name__istartswith?: string | undefined
                contact__name__search?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__in?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phone?: string | undefined
                contact__phone__icontains?: string | undefined
                contact__phone__in?: string | undefined
                contact__phone__iregex?: string | undefined
                contact__phone__istartswith?: string | undefined
                contact__phone__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__overlap?: string | undefined
                contact_data?: string | undefined
                contact_id?: string | undefined
                contact_id__in?: string | undefined
                contact_id__isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                created_by__isnull?: string | undefined
                cursor?: number | undefined
                description?: string | undefined
                description__icontains?: string | undefined
                description__iregex?: string | undefined
                description__istartswith?: string | undefined
                description__search?: string | undefined
                duration?: string | undefined
                duration__gt?: string | undefined
                duration__gte?: string | undefined
                duration__lt?: string | undefined
                duration__lte?: string | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                external_id__in?: string | undefined
                external_id__iregex?: string | undefined
                external_id__isnull?: string | undefined
                external_id__istartswith?: string | undefined
                external_id__search?: string | undefined
                format?: 'json' | 'xml' | undefined
                id?: string | undefined
                id__in?: string | undefined
                is_optimal?: string | undefined
                is_optimal__isnull?: string | undefined
                metadata__accepted_distance?: string | undefined
                metadata__accepted_distance__gt?: string | undefined
                metadata__accepted_distance__gte?: string | undefined
                metadata__accepted_distance__lt?: string | undefined
                metadata__accepted_distance__lte?: string | undefined
                metadata__accepted_duration?: string | undefined
                metadata__accepted_duration__gt?: string | undefined
                metadata__accepted_duration__gte?: string | undefined
                metadata__accepted_duration__lt?: string | undefined
                metadata__accepted_duration__lte?: string | undefined
                metadata__active_distance?: string | undefined
                metadata__active_distance__gt?: string | undefined
                metadata__active_distance__gte?: string | undefined
                metadata__active_distance__lt?: string | undefined
                metadata__active_distance__lte?: string | undefined
                metadata__active_duration?: string | undefined
                metadata__active_duration__gt?: string | undefined
                metadata__active_duration__gte?: string | undefined
                metadata__active_duration__lt?: string | undefined
                metadata__active_duration__lte?: string | undefined
                metadata__assigned_distance?: string | undefined
                metadata__assigned_distance__gt?: string | undefined
                metadata__assigned_distance__gte?: string | undefined
                metadata__assigned_distance__lt?: string | undefined
                metadata__assigned_distance__lte?: string | undefined
                metadata__assigned_duration?: string | undefined
                metadata__assigned_duration__gt?: string | undefined
                metadata__assigned_duration__gte?: string | undefined
                metadata__assigned_duration__lt?: string | undefined
                metadata__assigned_duration__lte?: string | undefined
                metadata__cancelled_distance?: string | undefined
                metadata__cancelled_distance__gt?: string | undefined
                metadata__cancelled_distance__gte?: string | undefined
                metadata__cancelled_distance__lt?: string | undefined
                metadata__cancelled_distance__lte?: string | undefined
                metadata__cancelled_duration?: string | undefined
                metadata__cancelled_duration__gt?: string | undefined
                metadata__cancelled_duration__gte?: string | undefined
                metadata__cancelled_duration__lt?: string | undefined
                metadata__cancelled_duration__lte?: string | undefined
                metadata__completed_distance?: string | undefined
                metadata__completed_distance__gt?: string | undefined
                metadata__completed_distance__gte?: string | undefined
                metadata__completed_distance__lt?: string | undefined
                metadata__completed_distance__lte?: string | undefined
                metadata__completed_duration?: string | undefined
                metadata__completed_duration__gt?: string | undefined
                metadata__completed_duration__gte?: string | undefined
                metadata__completed_duration__lt?: string | undefined
                metadata__completed_duration__lte?: string | undefined
                metadata__documents_count?: string | undefined
                metadata__documents_count__gt?: string | undefined
                metadata__documents_count__gte?: string | undefined
                metadata__documents_count__lt?: string | undefined
                metadata__documents_count__lte?: string | undefined
                metadata__events_count?: string | undefined
                metadata__events_count__gt?: string | undefined
                metadata__events_count__gte?: string | undefined
                metadata__events_count__lt?: string | undefined
                metadata__events_count__lte?: string | undefined
                metadata__failed_distance?: string | undefined
                metadata__failed_distance__gt?: string | undefined
                metadata__failed_distance__gte?: string | undefined
                metadata__failed_distance__lt?: string | undefined
                metadata__failed_distance__lte?: string | undefined
                metadata__failed_duration?: string | undefined
                metadata__failed_duration__gt?: string | undefined
                metadata__failed_duration__gte?: string | undefined
                metadata__failed_duration__lt?: string | undefined
                metadata__failed_duration__lte?: string | undefined
                metadata__forms_completed_count?: string | undefined
                metadata__forms_completed_count__gt?: string | undefined
                metadata__forms_completed_count__gte?: string | undefined
                metadata__forms_completed_count__lt?: string | undefined
                metadata__forms_completed_count__lte?: string | undefined
                metadata__forms_count?: string | undefined
                metadata__forms_count__gt?: string | undefined
                metadata__forms_count__gte?: string | undefined
                metadata__forms_count__lt?: string | undefined
                metadata__forms_count__lte?: string | undefined
                metadata__last_accepted_at__date?: string | undefined
                metadata__last_accepted_at__date_or_isnull?: string | undefined
                metadata__last_accepted_at__gt?: string | undefined
                metadata__last_accepted_at__gt_or_isnull?: string | undefined
                metadata__last_accepted_at__gte?: string | undefined
                metadata__last_accepted_at__gte_or_isnull?: string | undefined
                metadata__last_accepted_at__lt?: string | undefined
                metadata__last_accepted_at__lt_or_isnull?: string | undefined
                metadata__last_accepted_at__lte?: string | undefined
                metadata__last_accepted_at__lte_or_isnull?: string | undefined
                metadata__last_active_at__date?: string | undefined
                metadata__last_active_at__date_or_isnull?: string | undefined
                metadata__last_active_at__gt?: string | undefined
                metadata__last_active_at__gt_or_isnull?: string | undefined
                metadata__last_active_at__gte?: string | undefined
                metadata__last_active_at__gte_or_isnull?: string | undefined
                metadata__last_active_at__lt?: string | undefined
                metadata__last_active_at__lt_or_isnull?: string | undefined
                metadata__last_active_at__lte?: string | undefined
                metadata__last_active_at__lte_or_isnull?: string | undefined
                metadata__last_assigned_at__date?: string | undefined
                metadata__last_assigned_at__date_or_isnull?: string | undefined
                metadata__last_assigned_at__gt?: string | undefined
                metadata__last_assigned_at__gt_or_isnull?: string | undefined
                metadata__last_assigned_at__gte?: string | undefined
                metadata__last_assigned_at__gte_or_isnull?: string | undefined
                metadata__last_assigned_at__lt?: string | undefined
                metadata__last_assigned_at__lt_or_isnull?: string | undefined
                metadata__last_assigned_at__lte?: string | undefined
                metadata__last_assigned_at__lte_or_isnull?: string | undefined
                metadata__last_cancelled_at__date?: string | undefined
                metadata__last_cancelled_at__date_or_isnull?: string | undefined
                metadata__last_cancelled_at__gt?: string | undefined
                metadata__last_cancelled_at__gt_or_isnull?: string | undefined
                metadata__last_cancelled_at__gte?: string | undefined
                metadata__last_cancelled_at__gte_or_isnull?: string | undefined
                metadata__last_cancelled_at__lt?: string | undefined
                metadata__last_cancelled_at__lt_or_isnull?: string | undefined
                metadata__last_cancelled_at__lte?: string | undefined
                metadata__last_cancelled_at__lte_or_isnull?: string | undefined
                metadata__last_completed_at__date?: string | undefined
                metadata__last_completed_at__date_or_isnull?: string | undefined
                metadata__last_completed_at__gt?: string | undefined
                metadata__last_completed_at__gt_or_isnull?: string | undefined
                metadata__last_completed_at__gte?: string | undefined
                metadata__last_completed_at__gte_or_isnull?: string | undefined
                metadata__last_completed_at__lt?: string | undefined
                metadata__last_completed_at__lt_or_isnull?: string | undefined
                metadata__last_completed_at__lte?: string | undefined
                metadata__last_completed_at__lte_or_isnull?: string | undefined
                metadata__last_failed_at__date?: string | undefined
                metadata__last_failed_at__date_or_isnull?: string | undefined
                metadata__last_failed_at__gt?: string | undefined
                metadata__last_failed_at__gt_or_isnull?: string | undefined
                metadata__last_failed_at__gte?: string | undefined
                metadata__last_failed_at__gte_or_isnull?: string | undefined
                metadata__last_failed_at__lt?: string | undefined
                metadata__last_failed_at__lt_or_isnull?: string | undefined
                metadata__last_failed_at__lte?: string | undefined
                metadata__last_failed_at__lte_or_isnull?: string | undefined
                metadata__last_transit_at__date?: string | undefined
                metadata__last_transit_at__date_or_isnull?: string | undefined
                metadata__last_transit_at__gt?: string | undefined
                metadata__last_transit_at__gt_or_isnull?: string | undefined
                metadata__last_transit_at__gte?: string | undefined
                metadata__last_transit_at__gte_or_isnull?: string | undefined
                metadata__last_transit_at__lt?: string | undefined
                metadata__last_transit_at__lt_or_isnull?: string | undefined
                metadata__last_transit_at__lte?: string | undefined
                metadata__last_transit_at__lte_or_isnull?: string | undefined
                metadata__last_unassigned_at__date?: string | undefined
                metadata__last_unassigned_at__date_or_isnull?: string | undefined
                metadata__last_unassigned_at__gt?: string | undefined
                metadata__last_unassigned_at__gt_or_isnull?: string | undefined
                metadata__last_unassigned_at__gte?: string | undefined
                metadata__last_unassigned_at__gte_or_isnull?: string | undefined
                metadata__last_unassigned_at__lt?: string | undefined
                metadata__last_unassigned_at__lt_or_isnull?: string | undefined
                metadata__last_unassigned_at__lte?: string | undefined
                metadata__last_unassigned_at__lte_or_isnull?: string | undefined
                metadata__signatures_count?: string | undefined
                metadata__signatures_count__gt?: string | undefined
                metadata__signatures_count__gte?: string | undefined
                metadata__signatures_count__lt?: string | undefined
                metadata__signatures_count__lte?: string | undefined
                metadata__task_event_notes_count?: string | undefined
                metadata__task_event_notes_count__gt?: string | undefined
                metadata__task_event_notes_count__gte?: string | undefined
                metadata__task_event_notes_count__lt?: string | undefined
                metadata__task_event_notes_count__lte?: string | undefined
                metadata__transit_distance?: string | undefined
                metadata__transit_distance__gt?: string | undefined
                metadata__transit_distance__gte?: string | undefined
                metadata__transit_distance__lt?: string | undefined
                metadata__transit_distance__lte?: string | undefined
                metadata__transit_duration?: string | undefined
                metadata__transit_duration__gt?: string | undefined
                metadata__transit_duration__gte?: string | undefined
                metadata__transit_duration__lt?: string | undefined
                metadata__transit_duration__lte?: string | undefined
                metadata__unassigned_distance?: string | undefined
                metadata__unassigned_distance__gt?: string | undefined
                metadata__unassigned_distance__gte?: string | undefined
                metadata__unassigned_distance__lt?: string | undefined
                metadata__unassigned_distance__lte?: string | undefined
                metadata__unassigned_duration?: string | undefined
                metadata__unassigned_duration__gt?: string | undefined
                metadata__unassigned_duration__gte?: string | undefined
                metadata__unassigned_duration__lt?: string | undefined
                metadata__unassigned_duration__lte?: string | undefined
                'metafields__namespace:key'?: string | undefined
                order?: string | undefined
                order__auto_assign?: string | undefined
                order__created_at__date?: string | undefined
                order__created_at__date_or_isnull?: string | undefined
                order__created_at__gt?: string | undefined
                order__created_at__gt_or_isnull?: string | undefined
                order__created_at__gte?: string | undefined
                order__created_at__gte_or_isnull?: string | undefined
                order__created_at__lt?: string | undefined
                order__created_at__lt_or_isnull?: string | undefined
                order__created_at__lte?: string | undefined
                order__created_at__lte_or_isnull?: string | undefined
                order__created_by?: string | undefined
                order__created_by__in?: string | undefined
                order__created_by__isnull?: string | undefined
                order__external_id?: string | undefined
                order__external_id__icontains?: string | undefined
                order__external_id__in?: string | undefined
                order__external_id__iregex?: string | undefined
                order__external_id__isnull?: string | undefined
                order__external_id__istartswith?: string | undefined
                order__external_id__search?: string | undefined
                order__in?: string | undefined
                order__orderer?: string | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
                order__reference?: string | undefined
                order__reference__icontains?: string | undefined
                order__reference__in?: string | undefined
                order__reference__iregex?: string | undefined
                order__reference__istartswith?: string | undefined
                order__reference__search?: string | undefined
                order_id?: string | undefined
                order_id__in?: string | undefined
                order_id__isnull?: string | undefined
                orderer?: string | undefined
                orderer__id?: string | undefined
                orderer__id__in?: string | undefined
                orderer__id__isnull?: string | undefined
                orderer__in?: string | undefined
                orderer__name?: string | undefined
                orderer__name__icontains?: string | undefined
                orderer_id?: string | undefined
                orderer_id__in?: string | undefined
                orderer_id__isnull?: string | undefined
                ordering?: string | undefined
                owner_id?: string | undefined
                owner_id__in?: string | undefined
                owner_id__isnull?: string | undefined
                page_size?: number | undefined
                position__date?: string | undefined
                position__date_or_isnull?: string | undefined
                position__gt?: string | undefined
                position__gt_or_isnull?: string | undefined
                position__gte?: string | undefined
                position__gte_or_isnull?: string | undefined
                position__lt?: string | undefined
                position__lt_or_isnull?: string | undefined
                position__lte?: string | undefined
                position__lte_or_isnull?: string | undefined
                previous_assignees__contained_by?: string | undefined
                previous_assignees__contains?: string | undefined
                previous_assignees__isnull?: boolean | undefined
                previous_assignees__overlap?: string | undefined
                priority?: string | undefined
                priority__gt?: string | undefined
                priority__gte?: string | undefined
                priority__in?: string | undefined
                priority__lt?: string | undefined
                priority__lte?: string | undefined
                receiver?: string | undefined
                receiver__in?: string | undefined
                receiver_id?: string | undefined
                receiver_id__in?: string | undefined
                receiver_id__isnull?: string | undefined
                reference?: string | undefined
                reference__icontains?: string | undefined
                reference__in?: string | undefined
                reference__iregex?: string | undefined
                reference__istartswith?: string | undefined
                reference__search?: string | undefined
                route?: string | undefined
                route__in?: string | undefined
                route_id?: string | undefined
                route_id__in?: string | undefined
                route_id__isnull?: string | undefined
                scheduled_time__date?: string | undefined
                scheduled_time__date_or_isnull?: string | undefined
                scheduled_time__gt?: string | undefined
                scheduled_time__gt_or_isnull?: string | undefined
                scheduled_time__gte?: string | undefined
                scheduled_time__gte_or_isnull?: string | undefined
                scheduled_time__lt?: string | undefined
                scheduled_time__lt_or_isnull?: string | undefined
                scheduled_time__lte?: string | undefined
                scheduled_time__lte_or_isnull?: string | undefined
                search?: string | undefined
                size__contained_by?: string | undefined
                size__contains?: string | undefined
                size__isnull?: boolean | undefined
                size__overlap?: string | undefined
                state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                state__in?: string | undefined
                state__in_or_isnull?: string | undefined
                state__not_in?: string | undefined
                state__not_in_or_isnull?: string | undefined
                task_import?: string | undefined
                task_import__in?: string | undefined
                unassignee_id?: string | undefined
                unassignee_id__in?: string | undefined
                unassignee_id__isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                updated_at_delay_latest?: boolean | undefined
              }
            }
            output: PaginatedDashboardSceneList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                account__in?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__in?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__in?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__in?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__in?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__in?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__geocode_failed_at__date?: string | undefined
                address__geocode_failed_at__date_or_isnull?: string | undefined
                address__geocode_failed_at__gt?: string | undefined
                address__geocode_failed_at__gt_or_isnull?: string | undefined
                address__geocode_failed_at__gte?: string | undefined
                address__geocode_failed_at__gte_or_isnull?: string | undefined
                address__geocode_failed_at__lt?: string | undefined
                address__geocode_failed_at__lt_or_isnull?: string | undefined
                address__geocode_failed_at__lte?: string | undefined
                address__geocode_failed_at__lte_or_isnull?: string | undefined
                address__geocoded_at__date?: string | undefined
                address__geocoded_at__date_or_isnull?: string | undefined
                address__geocoded_at__gt?: string | undefined
                address__geocoded_at__gt_or_isnull?: string | undefined
                address__geocoded_at__gte?: string | undefined
                address__geocoded_at__gte_or_isnull?: string | undefined
                address__geocoded_at__lt?: string | undefined
                address__geocoded_at__lt_or_isnull?: string | undefined
                address__geocoded_at__lte?: string | undefined
                address__geocoded_at__lte_or_isnull?: string | undefined
                address__google_place_id?: string | undefined
                address__google_place_id__icontains?: string | undefined
                address__google_place_id__in?: string | undefined
                address__google_place_id__iregex?: string | undefined
                address__google_place_id__istartswith?: string | undefined
                address__google_place_id__search?: string | undefined
                address__house_number?: string | undefined
                address__house_number__icontains?: string | undefined
                address__house_number__in?: string | undefined
                address__house_number__iregex?: string | undefined
                address__house_number__istartswith?: string | undefined
                address__house_number__search?: string | undefined
                address__point_of_interest?: string | undefined
                address__point_of_interest__icontains?: string | undefined
                address__point_of_interest__in?: string | undefined
                address__point_of_interest__iregex?: string | undefined
                address__point_of_interest__istartswith?: string | undefined
                address__point_of_interest__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__in?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__raw_address?: string | undefined
                address__raw_address__icontains?: string | undefined
                address__raw_address__in?: string | undefined
                address__raw_address__iregex?: string | undefined
                address__raw_address__istartswith?: string | undefined
                address__raw_address__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__in?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__in?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                address_data?: string | undefined
                address_id?: string | undefined
                address_id__in?: string | undefined
                address_id__isnull?: string | undefined
                assignee?: string | undefined
                assignee__email?: string | undefined
                assignee__email__icontains?: string | undefined
                assignee__email__iregex?: string | undefined
                assignee__email__isnull?: string | undefined
                assignee__email__istartswith?: string | undefined
                assignee__email__search?: string | undefined
                assignee__first_name?: string | undefined
                assignee__first_name__icontains?: string | undefined
                assignee__first_name__iregex?: string | undefined
                assignee__first_name__isnull?: string | undefined
                assignee__first_name__istartswith?: string | undefined
                assignee__first_name__search?: string | undefined
                assignee__in?: string | undefined
                assignee__last_name?: string | undefined
                assignee__last_name__icontains?: string | undefined
                assignee__last_name__iregex?: string | undefined
                assignee__last_name__isnull?: string | undefined
                assignee__last_name__istartswith?: string | undefined
                assignee__last_name__search?: string | undefined
                assignee__phone?: string | undefined
                assignee__phone__icontains?: string | undefined
                assignee__phone__iregex?: string | undefined
                assignee__phone__isnull?: string | undefined
                assignee__phone__istartswith?: string | undefined
                assignee__phone__search?: string | undefined
                assignee_id?: string | undefined
                assignee_id__in?: string | undefined
                assignee_id__isnull?: string | undefined
                assignee_proximity?: 'away' | 'near' | undefined
                assignee_proximity__in?: string | undefined
                barcodes__contained_by?: string | undefined
                barcodes__contains?: string | undefined
                barcodes__isnull?: boolean | undefined
                barcodes__overlap?: string | undefined
                cancelled_at__date?: string | undefined
                cancelled_at__date_or_isnull?: string | undefined
                cancelled_at__gt?: string | undefined
                cancelled_at__gt_or_isnull?: string | undefined
                cancelled_at__gte?: string | undefined
                cancelled_at__gte_or_isnull?: string | undefined
                cancelled_at__lt?: string | undefined
                cancelled_at__lt_or_isnull?: string | undefined
                cancelled_at__lte?: string | undefined
                cancelled_at__lte_or_isnull?: string | undefined
                category?: 'assignment' | 'pick_up' | 'drop_off' | 'warehouse' | undefined
                category__in?: string | undefined
                complete_after__date?: string | undefined
                complete_after__date_or_isnull?: string | undefined
                complete_after__gt?: string | undefined
                complete_after__gt_or_isnull?: string | undefined
                complete_after__gte?: string | undefined
                complete_after__gte_or_isnull?: string | undefined
                complete_after__lt?: string | undefined
                complete_after__lt_or_isnull?: string | undefined
                complete_after__lte?: string | undefined
                complete_after__lte_or_isnull?: string | undefined
                complete_before__date?: string | undefined
                complete_before__date_or_isnull?: string | undefined
                complete_before__gt?: string | undefined
                complete_before__gt_or_isnull?: string | undefined
                complete_before__gte?: string | undefined
                complete_before__gte_or_isnull?: string | undefined
                complete_before__lt?: string | undefined
                complete_before__lt_or_isnull?: string | undefined
                complete_before__lte?: string | undefined
                complete_before__lte_or_isnull?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__in?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__email?: string | undefined
                contact__email__icontains?: string | undefined
                contact__email__in?: string | undefined
                contact__email__iregex?: string | undefined
                contact__email__istartswith?: string | undefined
                contact__email__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__overlap?: string | undefined
                contact__name?: string | undefined
                contact__name__icontains?: string | undefined
                contact__name__in?: string | undefined
                contact__name__iregex?: string | undefined
                contact__name__istartswith?: string | undefined
                contact__name__search?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__in?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phone?: string | undefined
                contact__phone__icontains?: string | undefined
                contact__phone__in?: string | undefined
                contact__phone__iregex?: string | undefined
                contact__phone__istartswith?: string | undefined
                contact__phone__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__overlap?: string | undefined
                contact_data?: string | undefined
                contact_id?: string | undefined
                contact_id__in?: string | undefined
                contact_id__isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                created_by__isnull?: string | undefined
                cursor?: number | undefined
                description?: string | undefined
                description__icontains?: string | undefined
                description__iregex?: string | undefined
                description__istartswith?: string | undefined
                description__search?: string | undefined
                duration?: string | undefined
                duration__gt?: string | undefined
                duration__gte?: string | undefined
                duration__lt?: string | undefined
                duration__lte?: string | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                external_id__in?: string | undefined
                external_id__iregex?: string | undefined
                external_id__isnull?: string | undefined
                external_id__istartswith?: string | undefined
                external_id__search?: string | undefined
                format?: 'json' | 'xml' | undefined
                id?: string | undefined
                id__in?: string | undefined
                is_optimal?: string | undefined
                is_optimal__isnull?: string | undefined
                metadata__accepted_distance?: string | undefined
                metadata__accepted_distance__gt?: string | undefined
                metadata__accepted_distance__gte?: string | undefined
                metadata__accepted_distance__lt?: string | undefined
                metadata__accepted_distance__lte?: string | undefined
                metadata__accepted_duration?: string | undefined
                metadata__accepted_duration__gt?: string | undefined
                metadata__accepted_duration__gte?: string | undefined
                metadata__accepted_duration__lt?: string | undefined
                metadata__accepted_duration__lte?: string | undefined
                metadata__active_distance?: string | undefined
                metadata__active_distance__gt?: string | undefined
                metadata__active_distance__gte?: string | undefined
                metadata__active_distance__lt?: string | undefined
                metadata__active_distance__lte?: string | undefined
                metadata__active_duration?: string | undefined
                metadata__active_duration__gt?: string | undefined
                metadata__active_duration__gte?: string | undefined
                metadata__active_duration__lt?: string | undefined
                metadata__active_duration__lte?: string | undefined
                metadata__assigned_distance?: string | undefined
                metadata__assigned_distance__gt?: string | undefined
                metadata__assigned_distance__gte?: string | undefined
                metadata__assigned_distance__lt?: string | undefined
                metadata__assigned_distance__lte?: string | undefined
                metadata__assigned_duration?: string | undefined
                metadata__assigned_duration__gt?: string | undefined
                metadata__assigned_duration__gte?: string | undefined
                metadata__assigned_duration__lt?: string | undefined
                metadata__assigned_duration__lte?: string | undefined
                metadata__cancelled_distance?: string | undefined
                metadata__cancelled_distance__gt?: string | undefined
                metadata__cancelled_distance__gte?: string | undefined
                metadata__cancelled_distance__lt?: string | undefined
                metadata__cancelled_distance__lte?: string | undefined
                metadata__cancelled_duration?: string | undefined
                metadata__cancelled_duration__gt?: string | undefined
                metadata__cancelled_duration__gte?: string | undefined
                metadata__cancelled_duration__lt?: string | undefined
                metadata__cancelled_duration__lte?: string | undefined
                metadata__completed_distance?: string | undefined
                metadata__completed_distance__gt?: string | undefined
                metadata__completed_distance__gte?: string | undefined
                metadata__completed_distance__lt?: string | undefined
                metadata__completed_distance__lte?: string | undefined
                metadata__completed_duration?: string | undefined
                metadata__completed_duration__gt?: string | undefined
                metadata__completed_duration__gte?: string | undefined
                metadata__completed_duration__lt?: string | undefined
                metadata__completed_duration__lte?: string | undefined
                metadata__documents_count?: string | undefined
                metadata__documents_count__gt?: string | undefined
                metadata__documents_count__gte?: string | undefined
                metadata__documents_count__lt?: string | undefined
                metadata__documents_count__lte?: string | undefined
                metadata__events_count?: string | undefined
                metadata__events_count__gt?: string | undefined
                metadata__events_count__gte?: string | undefined
                metadata__events_count__lt?: string | undefined
                metadata__events_count__lte?: string | undefined
                metadata__failed_distance?: string | undefined
                metadata__failed_distance__gt?: string | undefined
                metadata__failed_distance__gte?: string | undefined
                metadata__failed_distance__lt?: string | undefined
                metadata__failed_distance__lte?: string | undefined
                metadata__failed_duration?: string | undefined
                metadata__failed_duration__gt?: string | undefined
                metadata__failed_duration__gte?: string | undefined
                metadata__failed_duration__lt?: string | undefined
                metadata__failed_duration__lte?: string | undefined
                metadata__forms_completed_count?: string | undefined
                metadata__forms_completed_count__gt?: string | undefined
                metadata__forms_completed_count__gte?: string | undefined
                metadata__forms_completed_count__lt?: string | undefined
                metadata__forms_completed_count__lte?: string | undefined
                metadata__forms_count?: string | undefined
                metadata__forms_count__gt?: string | undefined
                metadata__forms_count__gte?: string | undefined
                metadata__forms_count__lt?: string | undefined
                metadata__forms_count__lte?: string | undefined
                metadata__last_accepted_at__date?: string | undefined
                metadata__last_accepted_at__date_or_isnull?: string | undefined
                metadata__last_accepted_at__gt?: string | undefined
                metadata__last_accepted_at__gt_or_isnull?: string | undefined
                metadata__last_accepted_at__gte?: string | undefined
                metadata__last_accepted_at__gte_or_isnull?: string | undefined
                metadata__last_accepted_at__lt?: string | undefined
                metadata__last_accepted_at__lt_or_isnull?: string | undefined
                metadata__last_accepted_at__lte?: string | undefined
                metadata__last_accepted_at__lte_or_isnull?: string | undefined
                metadata__last_active_at__date?: string | undefined
                metadata__last_active_at__date_or_isnull?: string | undefined
                metadata__last_active_at__gt?: string | undefined
                metadata__last_active_at__gt_or_isnull?: string | undefined
                metadata__last_active_at__gte?: string | undefined
                metadata__last_active_at__gte_or_isnull?: string | undefined
                metadata__last_active_at__lt?: string | undefined
                metadata__last_active_at__lt_or_isnull?: string | undefined
                metadata__last_active_at__lte?: string | undefined
                metadata__last_active_at__lte_or_isnull?: string | undefined
                metadata__last_assigned_at__date?: string | undefined
                metadata__last_assigned_at__date_or_isnull?: string | undefined
                metadata__last_assigned_at__gt?: string | undefined
                metadata__last_assigned_at__gt_or_isnull?: string | undefined
                metadata__last_assigned_at__gte?: string | undefined
                metadata__last_assigned_at__gte_or_isnull?: string | undefined
                metadata__last_assigned_at__lt?: string | undefined
                metadata__last_assigned_at__lt_or_isnull?: string | undefined
                metadata__last_assigned_at__lte?: string | undefined
                metadata__last_assigned_at__lte_or_isnull?: string | undefined
                metadata__last_cancelled_at__date?: string | undefined
                metadata__last_cancelled_at__date_or_isnull?: string | undefined
                metadata__last_cancelled_at__gt?: string | undefined
                metadata__last_cancelled_at__gt_or_isnull?: string | undefined
                metadata__last_cancelled_at__gte?: string | undefined
                metadata__last_cancelled_at__gte_or_isnull?: string | undefined
                metadata__last_cancelled_at__lt?: string | undefined
                metadata__last_cancelled_at__lt_or_isnull?: string | undefined
                metadata__last_cancelled_at__lte?: string | undefined
                metadata__last_cancelled_at__lte_or_isnull?: string | undefined
                metadata__last_completed_at__date?: string | undefined
                metadata__last_completed_at__date_or_isnull?: string | undefined
                metadata__last_completed_at__gt?: string | undefined
                metadata__last_completed_at__gt_or_isnull?: string | undefined
                metadata__last_completed_at__gte?: string | undefined
                metadata__last_completed_at__gte_or_isnull?: string | undefined
                metadata__last_completed_at__lt?: string | undefined
                metadata__last_completed_at__lt_or_isnull?: string | undefined
                metadata__last_completed_at__lte?: string | undefined
                metadata__last_completed_at__lte_or_isnull?: string | undefined
                metadata__last_failed_at__date?: string | undefined
                metadata__last_failed_at__date_or_isnull?: string | undefined
                metadata__last_failed_at__gt?: string | undefined
                metadata__last_failed_at__gt_or_isnull?: string | undefined
                metadata__last_failed_at__gte?: string | undefined
                metadata__last_failed_at__gte_or_isnull?: string | undefined
                metadata__last_failed_at__lt?: string | undefined
                metadata__last_failed_at__lt_or_isnull?: string | undefined
                metadata__last_failed_at__lte?: string | undefined
                metadata__last_failed_at__lte_or_isnull?: string | undefined
                metadata__last_transit_at__date?: string | undefined
                metadata__last_transit_at__date_or_isnull?: string | undefined
                metadata__last_transit_at__gt?: string | undefined
                metadata__last_transit_at__gt_or_isnull?: string | undefined
                metadata__last_transit_at__gte?: string | undefined
                metadata__last_transit_at__gte_or_isnull?: string | undefined
                metadata__last_transit_at__lt?: string | undefined
                metadata__last_transit_at__lt_or_isnull?: string | undefined
                metadata__last_transit_at__lte?: string | undefined
                metadata__last_transit_at__lte_or_isnull?: string | undefined
                metadata__last_unassigned_at__date?: string | undefined
                metadata__last_unassigned_at__date_or_isnull?: string | undefined
                metadata__last_unassigned_at__gt?: string | undefined
                metadata__last_unassigned_at__gt_or_isnull?: string | undefined
                metadata__last_unassigned_at__gte?: string | undefined
                metadata__last_unassigned_at__gte_or_isnull?: string | undefined
                metadata__last_unassigned_at__lt?: string | undefined
                metadata__last_unassigned_at__lt_or_isnull?: string | undefined
                metadata__last_unassigned_at__lte?: string | undefined
                metadata__last_unassigned_at__lte_or_isnull?: string | undefined
                metadata__signatures_count?: string | undefined
                metadata__signatures_count__gt?: string | undefined
                metadata__signatures_count__gte?: string | undefined
                metadata__signatures_count__lt?: string | undefined
                metadata__signatures_count__lte?: string | undefined
                metadata__task_event_notes_count?: string | undefined
                metadata__task_event_notes_count__gt?: string | undefined
                metadata__task_event_notes_count__gte?: string | undefined
                metadata__task_event_notes_count__lt?: string | undefined
                metadata__task_event_notes_count__lte?: string | undefined
                metadata__transit_distance?: string | undefined
                metadata__transit_distance__gt?: string | undefined
                metadata__transit_distance__gte?: string | undefined
                metadata__transit_distance__lt?: string | undefined
                metadata__transit_distance__lte?: string | undefined
                metadata__transit_duration?: string | undefined
                metadata__transit_duration__gt?: string | undefined
                metadata__transit_duration__gte?: string | undefined
                metadata__transit_duration__lt?: string | undefined
                metadata__transit_duration__lte?: string | undefined
                metadata__unassigned_distance?: string | undefined
                metadata__unassigned_distance__gt?: string | undefined
                metadata__unassigned_distance__gte?: string | undefined
                metadata__unassigned_distance__lt?: string | undefined
                metadata__unassigned_distance__lte?: string | undefined
                metadata__unassigned_duration?: string | undefined
                metadata__unassigned_duration__gt?: string | undefined
                metadata__unassigned_duration__gte?: string | undefined
                metadata__unassigned_duration__lt?: string | undefined
                metadata__unassigned_duration__lte?: string | undefined
                'metafields__namespace:key'?: string | undefined
                order?: string | undefined
                order__auto_assign?: string | undefined
                order__created_at__date?: string | undefined
                order__created_at__date_or_isnull?: string | undefined
                order__created_at__gt?: string | undefined
                order__created_at__gt_or_isnull?: string | undefined
                order__created_at__gte?: string | undefined
                order__created_at__gte_or_isnull?: string | undefined
                order__created_at__lt?: string | undefined
                order__created_at__lt_or_isnull?: string | undefined
                order__created_at__lte?: string | undefined
                order__created_at__lte_or_isnull?: string | undefined
                order__created_by?: string | undefined
                order__created_by__in?: string | undefined
                order__created_by__isnull?: string | undefined
                order__external_id?: string | undefined
                order__external_id__icontains?: string | undefined
                order__external_id__in?: string | undefined
                order__external_id__iregex?: string | undefined
                order__external_id__isnull?: string | undefined
                order__external_id__istartswith?: string | undefined
                order__external_id__search?: string | undefined
                order__in?: string | undefined
                order__orderer?: string | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
                order__reference?: string | undefined
                order__reference__icontains?: string | undefined
                order__reference__in?: string | undefined
                order__reference__iregex?: string | undefined
                order__reference__istartswith?: string | undefined
                order__reference__search?: string | undefined
                order_id?: string | undefined
                order_id__in?: string | undefined
                order_id__isnull?: string | undefined
                orderer?: string | undefined
                orderer__id?: string | undefined
                orderer__id__in?: string | undefined
                orderer__id__isnull?: string | undefined
                orderer__in?: string | undefined
                orderer__name?: string | undefined
                orderer__name__icontains?: string | undefined
                orderer_id?: string | undefined
                orderer_id__in?: string | undefined
                orderer_id__isnull?: string | undefined
                ordering?: string | undefined
                owner_id?: string | undefined
                owner_id__in?: string | undefined
                owner_id__isnull?: string | undefined
                page_size?: number | undefined
                position__date?: string | undefined
                position__date_or_isnull?: string | undefined
                position__gt?: string | undefined
                position__gt_or_isnull?: string | undefined
                position__gte?: string | undefined
                position__gte_or_isnull?: string | undefined
                position__lt?: string | undefined
                position__lt_or_isnull?: string | undefined
                position__lte?: string | undefined
                position__lte_or_isnull?: string | undefined
                previous_assignees__contained_by?: string | undefined
                previous_assignees__contains?: string | undefined
                previous_assignees__isnull?: boolean | undefined
                previous_assignees__overlap?: string | undefined
                priority?: string | undefined
                priority__gt?: string | undefined
                priority__gte?: string | undefined
                priority__in?: string | undefined
                priority__lt?: string | undefined
                priority__lte?: string | undefined
                receiver?: string | undefined
                receiver__in?: string | undefined
                receiver_id?: string | undefined
                receiver_id__in?: string | undefined
                receiver_id__isnull?: string | undefined
                reference?: string | undefined
                reference__icontains?: string | undefined
                reference__in?: string | undefined
                reference__iregex?: string | undefined
                reference__istartswith?: string | undefined
                reference__search?: string | undefined
                route?: string | undefined
                route__in?: string | undefined
                route_id?: string | undefined
                route_id__in?: string | undefined
                route_id__isnull?: string | undefined
                scheduled_time__date?: string | undefined
                scheduled_time__date_or_isnull?: string | undefined
                scheduled_time__gt?: string | undefined
                scheduled_time__gt_or_isnull?: string | undefined
                scheduled_time__gte?: string | undefined
                scheduled_time__gte_or_isnull?: string | undefined
                scheduled_time__lt?: string | undefined
                scheduled_time__lt_or_isnull?: string | undefined
                scheduled_time__lte?: string | undefined
                scheduled_time__lte_or_isnull?: string | undefined
                search?: string | undefined
                size__contained_by?: string | undefined
                size__contains?: string | undefined
                size__isnull?: boolean | undefined
                size__overlap?: string | undefined
                state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                state__in?: string | undefined
                state__in_or_isnull?: string | undefined
                state__not_in?: string | undefined
                state__not_in_or_isnull?: string | undefined
                task_import?: string | undefined
                task_import__in?: string | undefined
                unassignee_id?: string | undefined
                unassignee_id__in?: string | undefined
                unassignee_id__isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                updated_at_delay_latest?: boolean | undefined
              }
            }
            output: PaginatedDashboardSceneList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/scenes/order_list/': {
      $get: {
        input: {
          query: {
            account?: string | undefined
            created_at__date?: string | undefined
            created_at__date_or_isnull?: string | undefined
            created_at__gt?: string | undefined
            created_at__gt_or_isnull?: string | undefined
            created_at__gte?: string | undefined
            created_at__gte_or_isnull?: string | undefined
            created_at__lt?: string | undefined
            created_at__lt_or_isnull?: string | undefined
            created_at__lte?: string | undefined
            created_at__lte_or_isnull?: string | undefined
            cursor?: number | undefined
            external_id?: string | undefined
            id?: string | undefined
            ordering?: string | undefined
            page_size?: number | undefined
            reference?: string | undefined
            search?: string | undefined
            updated_at__date?: string | undefined
            updated_at__date_or_isnull?: string | undefined
            updated_at__gt?: string | undefined
            updated_at__gt_or_isnull?: string | undefined
            updated_at__gte?: string | undefined
            updated_at__gte_or_isnull?: string | undefined
            updated_at__lt?: string | undefined
            updated_at__lt_or_isnull?: string | undefined
            updated_at__lte?: string | undefined
            updated_at__lte_or_isnull?: string | undefined
          }
        }
        output: PaginatedOrderListSceneList
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/scenes/recurrence_list/': {
      $get: {
        input: {
          query: {
            account?: string | undefined
            account__in?: string | undefined
            assign_worker?: boolean | undefined
            assignee?: string | undefined
            assignee__in?: string | undefined
            created_at__date?: string | undefined
            created_at__date_or_isnull?: string | undefined
            created_at__gt?: string | undefined
            created_at__gt_or_isnull?: string | undefined
            created_at__gte?: string | undefined
            created_at__gte_or_isnull?: string | undefined
            created_at__lt?: string | undefined
            created_at__lt_or_isnull?: string | undefined
            created_at__lte?: string | undefined
            created_at__lte_or_isnull?: string | undefined
            created_by?: string | undefined
            created_by__in?: string | undefined
            cursor?: number | undefined
            is_active?: string | undefined
            last_errored_at__date?: string | undefined
            last_errored_at__date_or_isnull?: string | undefined
            last_errored_at__gt?: string | undefined
            last_errored_at__gt_or_isnull?: string | undefined
            last_errored_at__gte?: string | undefined
            last_errored_at__gte_or_isnull?: string | undefined
            last_errored_at__lt?: string | undefined
            last_errored_at__lt_or_isnull?: string | undefined
            last_errored_at__lte?: string | undefined
            last_errored_at__lte_or_isnull?: string | undefined
            last_recurred_at__date?: string | undefined
            last_recurred_at__date_or_isnull?: string | undefined
            last_recurred_at__gt?: string | undefined
            last_recurred_at__gt_or_isnull?: string | undefined
            last_recurred_at__gte?: string | undefined
            last_recurred_at__gte_or_isnull?: string | undefined
            last_recurred_at__lt?: string | undefined
            last_recurred_at__lt_or_isnull?: string | undefined
            last_recurred_at__lte?: string | undefined
            last_recurred_at__lte_or_isnull?: string | undefined
            last_scheduled_at__date?: string | undefined
            last_scheduled_at__date_or_isnull?: string | undefined
            last_scheduled_at__gt?: string | undefined
            last_scheduled_at__gt_or_isnull?: string | undefined
            last_scheduled_at__gte?: string | undefined
            last_scheduled_at__gte_or_isnull?: string | undefined
            last_scheduled_at__lt?: string | undefined
            last_scheduled_at__lt_or_isnull?: string | undefined
            last_scheduled_at__lte?: string | undefined
            last_scheduled_at__lte_or_isnull?: string | undefined
            next_scheduled_at__date?: string | undefined
            next_scheduled_at__date_or_isnull?: string | undefined
            next_scheduled_at__gt?: string | undefined
            next_scheduled_at__gt_or_isnull?: string | undefined
            next_scheduled_at__gte?: string | undefined
            next_scheduled_at__gte_or_isnull?: string | undefined
            next_scheduled_at__lt?: string | undefined
            next_scheduled_at__lt_or_isnull?: string | undefined
            next_scheduled_at__lte?: string | undefined
            next_scheduled_at__lte_or_isnull?: string | undefined
            order?: string | undefined
            ordering?: string | undefined
            page_size?: number | undefined
            search?: string | undefined
            tasks_data__address__formatted_address__exact?: string | undefined
            tasks_data__address__formatted_address__icontains?: string | undefined
            tasks_data__address__formatted_address__in?: string | undefined
            tasks_data__category__exact?: string | undefined
            tasks_data__category__in?: string | undefined
            tasks_data__contact__company__exact?: string | undefined
            tasks_data__contact__company__icontains?: string | undefined
            tasks_data__contact__company__in?: string | undefined
            tasks_data__contact__emails__contains?: string | undefined
            tasks_data__contact__emails__isnull?: string | undefined
            tasks_data__contact__name__exact?: string | undefined
            tasks_data__contact__name__icontains?: string | undefined
            tasks_data__contact__name__in?: string | undefined
            tasks_data__contact__notes__exact?: string | undefined
            tasks_data__contact__notes__icontains?: string | undefined
            tasks_data__contact__phones__contains?: string | undefined
            tasks_data__contact__phones__isnull?: string | undefined
            tasks_data__description__icontains?: string | undefined
            tasks_data__state__exact?: string | undefined
            tasks_data__state__in?: string | undefined
            updated_at__date?: string | undefined
            updated_at__date_or_isnull?: string | undefined
            updated_at__gt?: string | undefined
            updated_at__gt_or_isnull?: string | undefined
            updated_at__gte?: string | undefined
            updated_at__gte_or_isnull?: string | undefined
            updated_at__lt?: string | undefined
            updated_at__lt_or_isnull?: string | undefined
            updated_at__lte?: string | undefined
            updated_at__lte_or_isnull?: string | undefined
          }
        }
        output: PaginatedRecurrenceListSceneList
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/scenes/task_list/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                account__in?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__in?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__in?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__in?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__in?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__in?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__geocode_failed_at__date?: string | undefined
                address__geocode_failed_at__date_or_isnull?: string | undefined
                address__geocode_failed_at__gt?: string | undefined
                address__geocode_failed_at__gt_or_isnull?: string | undefined
                address__geocode_failed_at__gte?: string | undefined
                address__geocode_failed_at__gte_or_isnull?: string | undefined
                address__geocode_failed_at__lt?: string | undefined
                address__geocode_failed_at__lt_or_isnull?: string | undefined
                address__geocode_failed_at__lte?: string | undefined
                address__geocode_failed_at__lte_or_isnull?: string | undefined
                address__geocoded_at__date?: string | undefined
                address__geocoded_at__date_or_isnull?: string | undefined
                address__geocoded_at__gt?: string | undefined
                address__geocoded_at__gt_or_isnull?: string | undefined
                address__geocoded_at__gte?: string | undefined
                address__geocoded_at__gte_or_isnull?: string | undefined
                address__geocoded_at__lt?: string | undefined
                address__geocoded_at__lt_or_isnull?: string | undefined
                address__geocoded_at__lte?: string | undefined
                address__geocoded_at__lte_or_isnull?: string | undefined
                address__google_place_id?: string | undefined
                address__google_place_id__icontains?: string | undefined
                address__google_place_id__in?: string | undefined
                address__google_place_id__iregex?: string | undefined
                address__google_place_id__istartswith?: string | undefined
                address__google_place_id__search?: string | undefined
                address__house_number?: string | undefined
                address__house_number__icontains?: string | undefined
                address__house_number__in?: string | undefined
                address__house_number__iregex?: string | undefined
                address__house_number__istartswith?: string | undefined
                address__house_number__search?: string | undefined
                address__point_of_interest?: string | undefined
                address__point_of_interest__icontains?: string | undefined
                address__point_of_interest__in?: string | undefined
                address__point_of_interest__iregex?: string | undefined
                address__point_of_interest__istartswith?: string | undefined
                address__point_of_interest__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__in?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__raw_address?: string | undefined
                address__raw_address__icontains?: string | undefined
                address__raw_address__in?: string | undefined
                address__raw_address__iregex?: string | undefined
                address__raw_address__istartswith?: string | undefined
                address__raw_address__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__in?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__in?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                address_data?: string | undefined
                address_id?: string | undefined
                address_id__in?: string | undefined
                address_id__isnull?: string | undefined
                assignee?: string | undefined
                assignee__email?: string | undefined
                assignee__email__icontains?: string | undefined
                assignee__email__iregex?: string | undefined
                assignee__email__isnull?: string | undefined
                assignee__email__istartswith?: string | undefined
                assignee__email__search?: string | undefined
                assignee__first_name?: string | undefined
                assignee__first_name__icontains?: string | undefined
                assignee__first_name__iregex?: string | undefined
                assignee__first_name__isnull?: string | undefined
                assignee__first_name__istartswith?: string | undefined
                assignee__first_name__search?: string | undefined
                assignee__in?: string | undefined
                assignee__last_name?: string | undefined
                assignee__last_name__icontains?: string | undefined
                assignee__last_name__iregex?: string | undefined
                assignee__last_name__isnull?: string | undefined
                assignee__last_name__istartswith?: string | undefined
                assignee__last_name__search?: string | undefined
                assignee__phone?: string | undefined
                assignee__phone__icontains?: string | undefined
                assignee__phone__iregex?: string | undefined
                assignee__phone__isnull?: string | undefined
                assignee__phone__istartswith?: string | undefined
                assignee__phone__search?: string | undefined
                assignee_id?: string | undefined
                assignee_id__in?: string | undefined
                assignee_id__isnull?: string | undefined
                assignee_proximity?: 'away' | 'near' | undefined
                assignee_proximity__in?: string | undefined
                barcodes__contained_by?: string | undefined
                barcodes__contains?: string | undefined
                barcodes__isnull?: boolean | undefined
                barcodes__overlap?: string | undefined
                cancelled_at__date?: string | undefined
                cancelled_at__date_or_isnull?: string | undefined
                cancelled_at__gt?: string | undefined
                cancelled_at__gt_or_isnull?: string | undefined
                cancelled_at__gte?: string | undefined
                cancelled_at__gte_or_isnull?: string | undefined
                cancelled_at__lt?: string | undefined
                cancelled_at__lt_or_isnull?: string | undefined
                cancelled_at__lte?: string | undefined
                cancelled_at__lte_or_isnull?: string | undefined
                category?: 'assignment' | 'pick_up' | 'drop_off' | 'warehouse' | undefined
                category__in?: string | undefined
                complete_after__date?: string | undefined
                complete_after__date_or_isnull?: string | undefined
                complete_after__gt?: string | undefined
                complete_after__gt_or_isnull?: string | undefined
                complete_after__gte?: string | undefined
                complete_after__gte_or_isnull?: string | undefined
                complete_after__lt?: string | undefined
                complete_after__lt_or_isnull?: string | undefined
                complete_after__lte?: string | undefined
                complete_after__lte_or_isnull?: string | undefined
                complete_before__date?: string | undefined
                complete_before__date_or_isnull?: string | undefined
                complete_before__gt?: string | undefined
                complete_before__gt_or_isnull?: string | undefined
                complete_before__gte?: string | undefined
                complete_before__gte_or_isnull?: string | undefined
                complete_before__lt?: string | undefined
                complete_before__lt_or_isnull?: string | undefined
                complete_before__lte?: string | undefined
                complete_before__lte_or_isnull?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__in?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__email?: string | undefined
                contact__email__icontains?: string | undefined
                contact__email__in?: string | undefined
                contact__email__iregex?: string | undefined
                contact__email__istartswith?: string | undefined
                contact__email__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__overlap?: string | undefined
                contact__name?: string | undefined
                contact__name__icontains?: string | undefined
                contact__name__in?: string | undefined
                contact__name__iregex?: string | undefined
                contact__name__istartswith?: string | undefined
                contact__name__search?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__in?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phone?: string | undefined
                contact__phone__icontains?: string | undefined
                contact__phone__in?: string | undefined
                contact__phone__iregex?: string | undefined
                contact__phone__istartswith?: string | undefined
                contact__phone__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__overlap?: string | undefined
                contact_data?: string | undefined
                contact_id?: string | undefined
                contact_id__in?: string | undefined
                contact_id__isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                created_by__isnull?: string | undefined
                cursor?: number | undefined
                description?: string | undefined
                description__icontains?: string | undefined
                description__iregex?: string | undefined
                description__istartswith?: string | undefined
                description__search?: string | undefined
                duration?: string | undefined
                duration__gt?: string | undefined
                duration__gte?: string | undefined
                duration__lt?: string | undefined
                duration__lte?: string | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                external_id__in?: string | undefined
                external_id__iregex?: string | undefined
                external_id__isnull?: string | undefined
                external_id__istartswith?: string | undefined
                external_id__search?: string | undefined
                format?: 'json' | 'xml' | undefined
                id?: string | undefined
                id__in?: string | undefined
                is_optimal?: string | undefined
                is_optimal__isnull?: string | undefined
                metadata__accepted_distance?: string | undefined
                metadata__accepted_distance__gt?: string | undefined
                metadata__accepted_distance__gte?: string | undefined
                metadata__accepted_distance__lt?: string | undefined
                metadata__accepted_distance__lte?: string | undefined
                metadata__accepted_duration?: string | undefined
                metadata__accepted_duration__gt?: string | undefined
                metadata__accepted_duration__gte?: string | undefined
                metadata__accepted_duration__lt?: string | undefined
                metadata__accepted_duration__lte?: string | undefined
                metadata__active_distance?: string | undefined
                metadata__active_distance__gt?: string | undefined
                metadata__active_distance__gte?: string | undefined
                metadata__active_distance__lt?: string | undefined
                metadata__active_distance__lte?: string | undefined
                metadata__active_duration?: string | undefined
                metadata__active_duration__gt?: string | undefined
                metadata__active_duration__gte?: string | undefined
                metadata__active_duration__lt?: string | undefined
                metadata__active_duration__lte?: string | undefined
                metadata__assigned_distance?: string | undefined
                metadata__assigned_distance__gt?: string | undefined
                metadata__assigned_distance__gte?: string | undefined
                metadata__assigned_distance__lt?: string | undefined
                metadata__assigned_distance__lte?: string | undefined
                metadata__assigned_duration?: string | undefined
                metadata__assigned_duration__gt?: string | undefined
                metadata__assigned_duration__gte?: string | undefined
                metadata__assigned_duration__lt?: string | undefined
                metadata__assigned_duration__lte?: string | undefined
                metadata__cancelled_distance?: string | undefined
                metadata__cancelled_distance__gt?: string | undefined
                metadata__cancelled_distance__gte?: string | undefined
                metadata__cancelled_distance__lt?: string | undefined
                metadata__cancelled_distance__lte?: string | undefined
                metadata__cancelled_duration?: string | undefined
                metadata__cancelled_duration__gt?: string | undefined
                metadata__cancelled_duration__gte?: string | undefined
                metadata__cancelled_duration__lt?: string | undefined
                metadata__cancelled_duration__lte?: string | undefined
                metadata__completed_distance?: string | undefined
                metadata__completed_distance__gt?: string | undefined
                metadata__completed_distance__gte?: string | undefined
                metadata__completed_distance__lt?: string | undefined
                metadata__completed_distance__lte?: string | undefined
                metadata__completed_duration?: string | undefined
                metadata__completed_duration__gt?: string | undefined
                metadata__completed_duration__gte?: string | undefined
                metadata__completed_duration__lt?: string | undefined
                metadata__completed_duration__lte?: string | undefined
                metadata__documents_count?: string | undefined
                metadata__documents_count__gt?: string | undefined
                metadata__documents_count__gte?: string | undefined
                metadata__documents_count__lt?: string | undefined
                metadata__documents_count__lte?: string | undefined
                metadata__events_count?: string | undefined
                metadata__events_count__gt?: string | undefined
                metadata__events_count__gte?: string | undefined
                metadata__events_count__lt?: string | undefined
                metadata__events_count__lte?: string | undefined
                metadata__failed_distance?: string | undefined
                metadata__failed_distance__gt?: string | undefined
                metadata__failed_distance__gte?: string | undefined
                metadata__failed_distance__lt?: string | undefined
                metadata__failed_distance__lte?: string | undefined
                metadata__failed_duration?: string | undefined
                metadata__failed_duration__gt?: string | undefined
                metadata__failed_duration__gte?: string | undefined
                metadata__failed_duration__lt?: string | undefined
                metadata__failed_duration__lte?: string | undefined
                metadata__forms_completed_count?: string | undefined
                metadata__forms_completed_count__gt?: string | undefined
                metadata__forms_completed_count__gte?: string | undefined
                metadata__forms_completed_count__lt?: string | undefined
                metadata__forms_completed_count__lte?: string | undefined
                metadata__forms_count?: string | undefined
                metadata__forms_count__gt?: string | undefined
                metadata__forms_count__gte?: string | undefined
                metadata__forms_count__lt?: string | undefined
                metadata__forms_count__lte?: string | undefined
                metadata__last_accepted_at__date?: string | undefined
                metadata__last_accepted_at__date_or_isnull?: string | undefined
                metadata__last_accepted_at__gt?: string | undefined
                metadata__last_accepted_at__gt_or_isnull?: string | undefined
                metadata__last_accepted_at__gte?: string | undefined
                metadata__last_accepted_at__gte_or_isnull?: string | undefined
                metadata__last_accepted_at__lt?: string | undefined
                metadata__last_accepted_at__lt_or_isnull?: string | undefined
                metadata__last_accepted_at__lte?: string | undefined
                metadata__last_accepted_at__lte_or_isnull?: string | undefined
                metadata__last_active_at__date?: string | undefined
                metadata__last_active_at__date_or_isnull?: string | undefined
                metadata__last_active_at__gt?: string | undefined
                metadata__last_active_at__gt_or_isnull?: string | undefined
                metadata__last_active_at__gte?: string | undefined
                metadata__last_active_at__gte_or_isnull?: string | undefined
                metadata__last_active_at__lt?: string | undefined
                metadata__last_active_at__lt_or_isnull?: string | undefined
                metadata__last_active_at__lte?: string | undefined
                metadata__last_active_at__lte_or_isnull?: string | undefined
                metadata__last_assigned_at__date?: string | undefined
                metadata__last_assigned_at__date_or_isnull?: string | undefined
                metadata__last_assigned_at__gt?: string | undefined
                metadata__last_assigned_at__gt_or_isnull?: string | undefined
                metadata__last_assigned_at__gte?: string | undefined
                metadata__last_assigned_at__gte_or_isnull?: string | undefined
                metadata__last_assigned_at__lt?: string | undefined
                metadata__last_assigned_at__lt_or_isnull?: string | undefined
                metadata__last_assigned_at__lte?: string | undefined
                metadata__last_assigned_at__lte_or_isnull?: string | undefined
                metadata__last_cancelled_at__date?: string | undefined
                metadata__last_cancelled_at__date_or_isnull?: string | undefined
                metadata__last_cancelled_at__gt?: string | undefined
                metadata__last_cancelled_at__gt_or_isnull?: string | undefined
                metadata__last_cancelled_at__gte?: string | undefined
                metadata__last_cancelled_at__gte_or_isnull?: string | undefined
                metadata__last_cancelled_at__lt?: string | undefined
                metadata__last_cancelled_at__lt_or_isnull?: string | undefined
                metadata__last_cancelled_at__lte?: string | undefined
                metadata__last_cancelled_at__lte_or_isnull?: string | undefined
                metadata__last_completed_at__date?: string | undefined
                metadata__last_completed_at__date_or_isnull?: string | undefined
                metadata__last_completed_at__gt?: string | undefined
                metadata__last_completed_at__gt_or_isnull?: string | undefined
                metadata__last_completed_at__gte?: string | undefined
                metadata__last_completed_at__gte_or_isnull?: string | undefined
                metadata__last_completed_at__lt?: string | undefined
                metadata__last_completed_at__lt_or_isnull?: string | undefined
                metadata__last_completed_at__lte?: string | undefined
                metadata__last_completed_at__lte_or_isnull?: string | undefined
                metadata__last_failed_at__date?: string | undefined
                metadata__last_failed_at__date_or_isnull?: string | undefined
                metadata__last_failed_at__gt?: string | undefined
                metadata__last_failed_at__gt_or_isnull?: string | undefined
                metadata__last_failed_at__gte?: string | undefined
                metadata__last_failed_at__gte_or_isnull?: string | undefined
                metadata__last_failed_at__lt?: string | undefined
                metadata__last_failed_at__lt_or_isnull?: string | undefined
                metadata__last_failed_at__lte?: string | undefined
                metadata__last_failed_at__lte_or_isnull?: string | undefined
                metadata__last_transit_at__date?: string | undefined
                metadata__last_transit_at__date_or_isnull?: string | undefined
                metadata__last_transit_at__gt?: string | undefined
                metadata__last_transit_at__gt_or_isnull?: string | undefined
                metadata__last_transit_at__gte?: string | undefined
                metadata__last_transit_at__gte_or_isnull?: string | undefined
                metadata__last_transit_at__lt?: string | undefined
                metadata__last_transit_at__lt_or_isnull?: string | undefined
                metadata__last_transit_at__lte?: string | undefined
                metadata__last_transit_at__lte_or_isnull?: string | undefined
                metadata__last_unassigned_at__date?: string | undefined
                metadata__last_unassigned_at__date_or_isnull?: string | undefined
                metadata__last_unassigned_at__gt?: string | undefined
                metadata__last_unassigned_at__gt_or_isnull?: string | undefined
                metadata__last_unassigned_at__gte?: string | undefined
                metadata__last_unassigned_at__gte_or_isnull?: string | undefined
                metadata__last_unassigned_at__lt?: string | undefined
                metadata__last_unassigned_at__lt_or_isnull?: string | undefined
                metadata__last_unassigned_at__lte?: string | undefined
                metadata__last_unassigned_at__lte_or_isnull?: string | undefined
                metadata__signatures_count?: string | undefined
                metadata__signatures_count__gt?: string | undefined
                metadata__signatures_count__gte?: string | undefined
                metadata__signatures_count__lt?: string | undefined
                metadata__signatures_count__lte?: string | undefined
                metadata__task_event_notes_count?: string | undefined
                metadata__task_event_notes_count__gt?: string | undefined
                metadata__task_event_notes_count__gte?: string | undefined
                metadata__task_event_notes_count__lt?: string | undefined
                metadata__task_event_notes_count__lte?: string | undefined
                metadata__transit_distance?: string | undefined
                metadata__transit_distance__gt?: string | undefined
                metadata__transit_distance__gte?: string | undefined
                metadata__transit_distance__lt?: string | undefined
                metadata__transit_distance__lte?: string | undefined
                metadata__transit_duration?: string | undefined
                metadata__transit_duration__gt?: string | undefined
                metadata__transit_duration__gte?: string | undefined
                metadata__transit_duration__lt?: string | undefined
                metadata__transit_duration__lte?: string | undefined
                metadata__unassigned_distance?: string | undefined
                metadata__unassigned_distance__gt?: string | undefined
                metadata__unassigned_distance__gte?: string | undefined
                metadata__unassigned_distance__lt?: string | undefined
                metadata__unassigned_distance__lte?: string | undefined
                metadata__unassigned_duration?: string | undefined
                metadata__unassigned_duration__gt?: string | undefined
                metadata__unassigned_duration__gte?: string | undefined
                metadata__unassigned_duration__lt?: string | undefined
                metadata__unassigned_duration__lte?: string | undefined
                'metafields__namespace:key'?: string | undefined
                order?: string | undefined
                order__auto_assign?: string | undefined
                order__created_at__date?: string | undefined
                order__created_at__date_or_isnull?: string | undefined
                order__created_at__gt?: string | undefined
                order__created_at__gt_or_isnull?: string | undefined
                order__created_at__gte?: string | undefined
                order__created_at__gte_or_isnull?: string | undefined
                order__created_at__lt?: string | undefined
                order__created_at__lt_or_isnull?: string | undefined
                order__created_at__lte?: string | undefined
                order__created_at__lte_or_isnull?: string | undefined
                order__created_by?: string | undefined
                order__created_by__in?: string | undefined
                order__created_by__isnull?: string | undefined
                order__external_id?: string | undefined
                order__external_id__icontains?: string | undefined
                order__external_id__in?: string | undefined
                order__external_id__iregex?: string | undefined
                order__external_id__isnull?: string | undefined
                order__external_id__istartswith?: string | undefined
                order__external_id__search?: string | undefined
                order__in?: string | undefined
                order__orderer?: string | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
                order__reference?: string | undefined
                order__reference__icontains?: string | undefined
                order__reference__in?: string | undefined
                order__reference__iregex?: string | undefined
                order__reference__istartswith?: string | undefined
                order__reference__search?: string | undefined
                order_id?: string | undefined
                order_id__in?: string | undefined
                order_id__isnull?: string | undefined
                orderer?: string | undefined
                orderer__id?: string | undefined
                orderer__id__in?: string | undefined
                orderer__id__isnull?: string | undefined
                orderer__in?: string | undefined
                orderer__name?: string | undefined
                orderer__name__icontains?: string | undefined
                orderer_id?: string | undefined
                orderer_id__in?: string | undefined
                orderer_id__isnull?: string | undefined
                ordering?: string | undefined
                owner_id?: string | undefined
                owner_id__in?: string | undefined
                owner_id__isnull?: string | undefined
                page_size?: number | undefined
                position__date?: string | undefined
                position__date_or_isnull?: string | undefined
                position__gt?: string | undefined
                position__gt_or_isnull?: string | undefined
                position__gte?: string | undefined
                position__gte_or_isnull?: string | undefined
                position__lt?: string | undefined
                position__lt_or_isnull?: string | undefined
                position__lte?: string | undefined
                position__lte_or_isnull?: string | undefined
                previous_assignees__contained_by?: string | undefined
                previous_assignees__contains?: string | undefined
                previous_assignees__isnull?: boolean | undefined
                previous_assignees__overlap?: string | undefined
                priority?: string | undefined
                priority__gt?: string | undefined
                priority__gte?: string | undefined
                priority__in?: string | undefined
                priority__lt?: string | undefined
                priority__lte?: string | undefined
                receiver?: string | undefined
                receiver__in?: string | undefined
                receiver_id?: string | undefined
                receiver_id__in?: string | undefined
                receiver_id__isnull?: string | undefined
                reference?: string | undefined
                reference__icontains?: string | undefined
                reference__in?: string | undefined
                reference__iregex?: string | undefined
                reference__istartswith?: string | undefined
                reference__search?: string | undefined
                route?: string | undefined
                route__in?: string | undefined
                route_id?: string | undefined
                route_id__in?: string | undefined
                route_id__isnull?: string | undefined
                scheduled_time__date?: string | undefined
                scheduled_time__date_or_isnull?: string | undefined
                scheduled_time__gt?: string | undefined
                scheduled_time__gt_or_isnull?: string | undefined
                scheduled_time__gte?: string | undefined
                scheduled_time__gte_or_isnull?: string | undefined
                scheduled_time__lt?: string | undefined
                scheduled_time__lt_or_isnull?: string | undefined
                scheduled_time__lte?: string | undefined
                scheduled_time__lte_or_isnull?: string | undefined
                search?: string | undefined
                size__contained_by?: string | undefined
                size__contains?: string | undefined
                size__isnull?: boolean | undefined
                size__overlap?: string | undefined
                state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                state__in?: string | undefined
                state__in_or_isnull?: string | undefined
                state__not_in?: string | undefined
                state__not_in_or_isnull?: string | undefined
                task_import?: string | undefined
                task_import__in?: string | undefined
                unassignee_id?: string | undefined
                unassignee_id__in?: string | undefined
                unassignee_id__isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                updated_at_delay_latest?: boolean | undefined
              }
            }
            output: PaginatedTaskListSceneList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                account__in?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__in?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__in?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__in?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__in?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__in?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__geocode_failed_at__date?: string | undefined
                address__geocode_failed_at__date_or_isnull?: string | undefined
                address__geocode_failed_at__gt?: string | undefined
                address__geocode_failed_at__gt_or_isnull?: string | undefined
                address__geocode_failed_at__gte?: string | undefined
                address__geocode_failed_at__gte_or_isnull?: string | undefined
                address__geocode_failed_at__lt?: string | undefined
                address__geocode_failed_at__lt_or_isnull?: string | undefined
                address__geocode_failed_at__lte?: string | undefined
                address__geocode_failed_at__lte_or_isnull?: string | undefined
                address__geocoded_at__date?: string | undefined
                address__geocoded_at__date_or_isnull?: string | undefined
                address__geocoded_at__gt?: string | undefined
                address__geocoded_at__gt_or_isnull?: string | undefined
                address__geocoded_at__gte?: string | undefined
                address__geocoded_at__gte_or_isnull?: string | undefined
                address__geocoded_at__lt?: string | undefined
                address__geocoded_at__lt_or_isnull?: string | undefined
                address__geocoded_at__lte?: string | undefined
                address__geocoded_at__lte_or_isnull?: string | undefined
                address__google_place_id?: string | undefined
                address__google_place_id__icontains?: string | undefined
                address__google_place_id__in?: string | undefined
                address__google_place_id__iregex?: string | undefined
                address__google_place_id__istartswith?: string | undefined
                address__google_place_id__search?: string | undefined
                address__house_number?: string | undefined
                address__house_number__icontains?: string | undefined
                address__house_number__in?: string | undefined
                address__house_number__iregex?: string | undefined
                address__house_number__istartswith?: string | undefined
                address__house_number__search?: string | undefined
                address__point_of_interest?: string | undefined
                address__point_of_interest__icontains?: string | undefined
                address__point_of_interest__in?: string | undefined
                address__point_of_interest__iregex?: string | undefined
                address__point_of_interest__istartswith?: string | undefined
                address__point_of_interest__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__in?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__raw_address?: string | undefined
                address__raw_address__icontains?: string | undefined
                address__raw_address__in?: string | undefined
                address__raw_address__iregex?: string | undefined
                address__raw_address__istartswith?: string | undefined
                address__raw_address__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__in?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__in?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                address_data?: string | undefined
                address_id?: string | undefined
                address_id__in?: string | undefined
                address_id__isnull?: string | undefined
                assignee?: string | undefined
                assignee__email?: string | undefined
                assignee__email__icontains?: string | undefined
                assignee__email__iregex?: string | undefined
                assignee__email__isnull?: string | undefined
                assignee__email__istartswith?: string | undefined
                assignee__email__search?: string | undefined
                assignee__first_name?: string | undefined
                assignee__first_name__icontains?: string | undefined
                assignee__first_name__iregex?: string | undefined
                assignee__first_name__isnull?: string | undefined
                assignee__first_name__istartswith?: string | undefined
                assignee__first_name__search?: string | undefined
                assignee__in?: string | undefined
                assignee__last_name?: string | undefined
                assignee__last_name__icontains?: string | undefined
                assignee__last_name__iregex?: string | undefined
                assignee__last_name__isnull?: string | undefined
                assignee__last_name__istartswith?: string | undefined
                assignee__last_name__search?: string | undefined
                assignee__phone?: string | undefined
                assignee__phone__icontains?: string | undefined
                assignee__phone__iregex?: string | undefined
                assignee__phone__isnull?: string | undefined
                assignee__phone__istartswith?: string | undefined
                assignee__phone__search?: string | undefined
                assignee_id?: string | undefined
                assignee_id__in?: string | undefined
                assignee_id__isnull?: string | undefined
                assignee_proximity?: 'away' | 'near' | undefined
                assignee_proximity__in?: string | undefined
                barcodes__contained_by?: string | undefined
                barcodes__contains?: string | undefined
                barcodes__isnull?: boolean | undefined
                barcodes__overlap?: string | undefined
                cancelled_at__date?: string | undefined
                cancelled_at__date_or_isnull?: string | undefined
                cancelled_at__gt?: string | undefined
                cancelled_at__gt_or_isnull?: string | undefined
                cancelled_at__gte?: string | undefined
                cancelled_at__gte_or_isnull?: string | undefined
                cancelled_at__lt?: string | undefined
                cancelled_at__lt_or_isnull?: string | undefined
                cancelled_at__lte?: string | undefined
                cancelled_at__lte_or_isnull?: string | undefined
                category?: 'assignment' | 'pick_up' | 'drop_off' | 'warehouse' | undefined
                category__in?: string | undefined
                complete_after__date?: string | undefined
                complete_after__date_or_isnull?: string | undefined
                complete_after__gt?: string | undefined
                complete_after__gt_or_isnull?: string | undefined
                complete_after__gte?: string | undefined
                complete_after__gte_or_isnull?: string | undefined
                complete_after__lt?: string | undefined
                complete_after__lt_or_isnull?: string | undefined
                complete_after__lte?: string | undefined
                complete_after__lte_or_isnull?: string | undefined
                complete_before__date?: string | undefined
                complete_before__date_or_isnull?: string | undefined
                complete_before__gt?: string | undefined
                complete_before__gt_or_isnull?: string | undefined
                complete_before__gte?: string | undefined
                complete_before__gte_or_isnull?: string | undefined
                complete_before__lt?: string | undefined
                complete_before__lt_or_isnull?: string | undefined
                complete_before__lte?: string | undefined
                complete_before__lte_or_isnull?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__in?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__email?: string | undefined
                contact__email__icontains?: string | undefined
                contact__email__in?: string | undefined
                contact__email__iregex?: string | undefined
                contact__email__istartswith?: string | undefined
                contact__email__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__overlap?: string | undefined
                contact__name?: string | undefined
                contact__name__icontains?: string | undefined
                contact__name__in?: string | undefined
                contact__name__iregex?: string | undefined
                contact__name__istartswith?: string | undefined
                contact__name__search?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__in?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phone?: string | undefined
                contact__phone__icontains?: string | undefined
                contact__phone__in?: string | undefined
                contact__phone__iregex?: string | undefined
                contact__phone__istartswith?: string | undefined
                contact__phone__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__overlap?: string | undefined
                contact_data?: string | undefined
                contact_id?: string | undefined
                contact_id__in?: string | undefined
                contact_id__isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                created_by__isnull?: string | undefined
                cursor?: number | undefined
                description?: string | undefined
                description__icontains?: string | undefined
                description__iregex?: string | undefined
                description__istartswith?: string | undefined
                description__search?: string | undefined
                duration?: string | undefined
                duration__gt?: string | undefined
                duration__gte?: string | undefined
                duration__lt?: string | undefined
                duration__lte?: string | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                external_id__in?: string | undefined
                external_id__iregex?: string | undefined
                external_id__isnull?: string | undefined
                external_id__istartswith?: string | undefined
                external_id__search?: string | undefined
                format?: 'json' | 'xml' | undefined
                id?: string | undefined
                id__in?: string | undefined
                is_optimal?: string | undefined
                is_optimal__isnull?: string | undefined
                metadata__accepted_distance?: string | undefined
                metadata__accepted_distance__gt?: string | undefined
                metadata__accepted_distance__gte?: string | undefined
                metadata__accepted_distance__lt?: string | undefined
                metadata__accepted_distance__lte?: string | undefined
                metadata__accepted_duration?: string | undefined
                metadata__accepted_duration__gt?: string | undefined
                metadata__accepted_duration__gte?: string | undefined
                metadata__accepted_duration__lt?: string | undefined
                metadata__accepted_duration__lte?: string | undefined
                metadata__active_distance?: string | undefined
                metadata__active_distance__gt?: string | undefined
                metadata__active_distance__gte?: string | undefined
                metadata__active_distance__lt?: string | undefined
                metadata__active_distance__lte?: string | undefined
                metadata__active_duration?: string | undefined
                metadata__active_duration__gt?: string | undefined
                metadata__active_duration__gte?: string | undefined
                metadata__active_duration__lt?: string | undefined
                metadata__active_duration__lte?: string | undefined
                metadata__assigned_distance?: string | undefined
                metadata__assigned_distance__gt?: string | undefined
                metadata__assigned_distance__gte?: string | undefined
                metadata__assigned_distance__lt?: string | undefined
                metadata__assigned_distance__lte?: string | undefined
                metadata__assigned_duration?: string | undefined
                metadata__assigned_duration__gt?: string | undefined
                metadata__assigned_duration__gte?: string | undefined
                metadata__assigned_duration__lt?: string | undefined
                metadata__assigned_duration__lte?: string | undefined
                metadata__cancelled_distance?: string | undefined
                metadata__cancelled_distance__gt?: string | undefined
                metadata__cancelled_distance__gte?: string | undefined
                metadata__cancelled_distance__lt?: string | undefined
                metadata__cancelled_distance__lte?: string | undefined
                metadata__cancelled_duration?: string | undefined
                metadata__cancelled_duration__gt?: string | undefined
                metadata__cancelled_duration__gte?: string | undefined
                metadata__cancelled_duration__lt?: string | undefined
                metadata__cancelled_duration__lte?: string | undefined
                metadata__completed_distance?: string | undefined
                metadata__completed_distance__gt?: string | undefined
                metadata__completed_distance__gte?: string | undefined
                metadata__completed_distance__lt?: string | undefined
                metadata__completed_distance__lte?: string | undefined
                metadata__completed_duration?: string | undefined
                metadata__completed_duration__gt?: string | undefined
                metadata__completed_duration__gte?: string | undefined
                metadata__completed_duration__lt?: string | undefined
                metadata__completed_duration__lte?: string | undefined
                metadata__documents_count?: string | undefined
                metadata__documents_count__gt?: string | undefined
                metadata__documents_count__gte?: string | undefined
                metadata__documents_count__lt?: string | undefined
                metadata__documents_count__lte?: string | undefined
                metadata__events_count?: string | undefined
                metadata__events_count__gt?: string | undefined
                metadata__events_count__gte?: string | undefined
                metadata__events_count__lt?: string | undefined
                metadata__events_count__lte?: string | undefined
                metadata__failed_distance?: string | undefined
                metadata__failed_distance__gt?: string | undefined
                metadata__failed_distance__gte?: string | undefined
                metadata__failed_distance__lt?: string | undefined
                metadata__failed_distance__lte?: string | undefined
                metadata__failed_duration?: string | undefined
                metadata__failed_duration__gt?: string | undefined
                metadata__failed_duration__gte?: string | undefined
                metadata__failed_duration__lt?: string | undefined
                metadata__failed_duration__lte?: string | undefined
                metadata__forms_completed_count?: string | undefined
                metadata__forms_completed_count__gt?: string | undefined
                metadata__forms_completed_count__gte?: string | undefined
                metadata__forms_completed_count__lt?: string | undefined
                metadata__forms_completed_count__lte?: string | undefined
                metadata__forms_count?: string | undefined
                metadata__forms_count__gt?: string | undefined
                metadata__forms_count__gte?: string | undefined
                metadata__forms_count__lt?: string | undefined
                metadata__forms_count__lte?: string | undefined
                metadata__last_accepted_at__date?: string | undefined
                metadata__last_accepted_at__date_or_isnull?: string | undefined
                metadata__last_accepted_at__gt?: string | undefined
                metadata__last_accepted_at__gt_or_isnull?: string | undefined
                metadata__last_accepted_at__gte?: string | undefined
                metadata__last_accepted_at__gte_or_isnull?: string | undefined
                metadata__last_accepted_at__lt?: string | undefined
                metadata__last_accepted_at__lt_or_isnull?: string | undefined
                metadata__last_accepted_at__lte?: string | undefined
                metadata__last_accepted_at__lte_or_isnull?: string | undefined
                metadata__last_active_at__date?: string | undefined
                metadata__last_active_at__date_or_isnull?: string | undefined
                metadata__last_active_at__gt?: string | undefined
                metadata__last_active_at__gt_or_isnull?: string | undefined
                metadata__last_active_at__gte?: string | undefined
                metadata__last_active_at__gte_or_isnull?: string | undefined
                metadata__last_active_at__lt?: string | undefined
                metadata__last_active_at__lt_or_isnull?: string | undefined
                metadata__last_active_at__lte?: string | undefined
                metadata__last_active_at__lte_or_isnull?: string | undefined
                metadata__last_assigned_at__date?: string | undefined
                metadata__last_assigned_at__date_or_isnull?: string | undefined
                metadata__last_assigned_at__gt?: string | undefined
                metadata__last_assigned_at__gt_or_isnull?: string | undefined
                metadata__last_assigned_at__gte?: string | undefined
                metadata__last_assigned_at__gte_or_isnull?: string | undefined
                metadata__last_assigned_at__lt?: string | undefined
                metadata__last_assigned_at__lt_or_isnull?: string | undefined
                metadata__last_assigned_at__lte?: string | undefined
                metadata__last_assigned_at__lte_or_isnull?: string | undefined
                metadata__last_cancelled_at__date?: string | undefined
                metadata__last_cancelled_at__date_or_isnull?: string | undefined
                metadata__last_cancelled_at__gt?: string | undefined
                metadata__last_cancelled_at__gt_or_isnull?: string | undefined
                metadata__last_cancelled_at__gte?: string | undefined
                metadata__last_cancelled_at__gte_or_isnull?: string | undefined
                metadata__last_cancelled_at__lt?: string | undefined
                metadata__last_cancelled_at__lt_or_isnull?: string | undefined
                metadata__last_cancelled_at__lte?: string | undefined
                metadata__last_cancelled_at__lte_or_isnull?: string | undefined
                metadata__last_completed_at__date?: string | undefined
                metadata__last_completed_at__date_or_isnull?: string | undefined
                metadata__last_completed_at__gt?: string | undefined
                metadata__last_completed_at__gt_or_isnull?: string | undefined
                metadata__last_completed_at__gte?: string | undefined
                metadata__last_completed_at__gte_or_isnull?: string | undefined
                metadata__last_completed_at__lt?: string | undefined
                metadata__last_completed_at__lt_or_isnull?: string | undefined
                metadata__last_completed_at__lte?: string | undefined
                metadata__last_completed_at__lte_or_isnull?: string | undefined
                metadata__last_failed_at__date?: string | undefined
                metadata__last_failed_at__date_or_isnull?: string | undefined
                metadata__last_failed_at__gt?: string | undefined
                metadata__last_failed_at__gt_or_isnull?: string | undefined
                metadata__last_failed_at__gte?: string | undefined
                metadata__last_failed_at__gte_or_isnull?: string | undefined
                metadata__last_failed_at__lt?: string | undefined
                metadata__last_failed_at__lt_or_isnull?: string | undefined
                metadata__last_failed_at__lte?: string | undefined
                metadata__last_failed_at__lte_or_isnull?: string | undefined
                metadata__last_transit_at__date?: string | undefined
                metadata__last_transit_at__date_or_isnull?: string | undefined
                metadata__last_transit_at__gt?: string | undefined
                metadata__last_transit_at__gt_or_isnull?: string | undefined
                metadata__last_transit_at__gte?: string | undefined
                metadata__last_transit_at__gte_or_isnull?: string | undefined
                metadata__last_transit_at__lt?: string | undefined
                metadata__last_transit_at__lt_or_isnull?: string | undefined
                metadata__last_transit_at__lte?: string | undefined
                metadata__last_transit_at__lte_or_isnull?: string | undefined
                metadata__last_unassigned_at__date?: string | undefined
                metadata__last_unassigned_at__date_or_isnull?: string | undefined
                metadata__last_unassigned_at__gt?: string | undefined
                metadata__last_unassigned_at__gt_or_isnull?: string | undefined
                metadata__last_unassigned_at__gte?: string | undefined
                metadata__last_unassigned_at__gte_or_isnull?: string | undefined
                metadata__last_unassigned_at__lt?: string | undefined
                metadata__last_unassigned_at__lt_or_isnull?: string | undefined
                metadata__last_unassigned_at__lte?: string | undefined
                metadata__last_unassigned_at__lte_or_isnull?: string | undefined
                metadata__signatures_count?: string | undefined
                metadata__signatures_count__gt?: string | undefined
                metadata__signatures_count__gte?: string | undefined
                metadata__signatures_count__lt?: string | undefined
                metadata__signatures_count__lte?: string | undefined
                metadata__task_event_notes_count?: string | undefined
                metadata__task_event_notes_count__gt?: string | undefined
                metadata__task_event_notes_count__gte?: string | undefined
                metadata__task_event_notes_count__lt?: string | undefined
                metadata__task_event_notes_count__lte?: string | undefined
                metadata__transit_distance?: string | undefined
                metadata__transit_distance__gt?: string | undefined
                metadata__transit_distance__gte?: string | undefined
                metadata__transit_distance__lt?: string | undefined
                metadata__transit_distance__lte?: string | undefined
                metadata__transit_duration?: string | undefined
                metadata__transit_duration__gt?: string | undefined
                metadata__transit_duration__gte?: string | undefined
                metadata__transit_duration__lt?: string | undefined
                metadata__transit_duration__lte?: string | undefined
                metadata__unassigned_distance?: string | undefined
                metadata__unassigned_distance__gt?: string | undefined
                metadata__unassigned_distance__gte?: string | undefined
                metadata__unassigned_distance__lt?: string | undefined
                metadata__unassigned_distance__lte?: string | undefined
                metadata__unassigned_duration?: string | undefined
                metadata__unassigned_duration__gt?: string | undefined
                metadata__unassigned_duration__gte?: string | undefined
                metadata__unassigned_duration__lt?: string | undefined
                metadata__unassigned_duration__lte?: string | undefined
                'metafields__namespace:key'?: string | undefined
                order?: string | undefined
                order__auto_assign?: string | undefined
                order__created_at__date?: string | undefined
                order__created_at__date_or_isnull?: string | undefined
                order__created_at__gt?: string | undefined
                order__created_at__gt_or_isnull?: string | undefined
                order__created_at__gte?: string | undefined
                order__created_at__gte_or_isnull?: string | undefined
                order__created_at__lt?: string | undefined
                order__created_at__lt_or_isnull?: string | undefined
                order__created_at__lte?: string | undefined
                order__created_at__lte_or_isnull?: string | undefined
                order__created_by?: string | undefined
                order__created_by__in?: string | undefined
                order__created_by__isnull?: string | undefined
                order__external_id?: string | undefined
                order__external_id__icontains?: string | undefined
                order__external_id__in?: string | undefined
                order__external_id__iregex?: string | undefined
                order__external_id__isnull?: string | undefined
                order__external_id__istartswith?: string | undefined
                order__external_id__search?: string | undefined
                order__in?: string | undefined
                order__orderer?: string | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
                order__reference?: string | undefined
                order__reference__icontains?: string | undefined
                order__reference__in?: string | undefined
                order__reference__iregex?: string | undefined
                order__reference__istartswith?: string | undefined
                order__reference__search?: string | undefined
                order_id?: string | undefined
                order_id__in?: string | undefined
                order_id__isnull?: string | undefined
                orderer?: string | undefined
                orderer__id?: string | undefined
                orderer__id__in?: string | undefined
                orderer__id__isnull?: string | undefined
                orderer__in?: string | undefined
                orderer__name?: string | undefined
                orderer__name__icontains?: string | undefined
                orderer_id?: string | undefined
                orderer_id__in?: string | undefined
                orderer_id__isnull?: string | undefined
                ordering?: string | undefined
                owner_id?: string | undefined
                owner_id__in?: string | undefined
                owner_id__isnull?: string | undefined
                page_size?: number | undefined
                position__date?: string | undefined
                position__date_or_isnull?: string | undefined
                position__gt?: string | undefined
                position__gt_or_isnull?: string | undefined
                position__gte?: string | undefined
                position__gte_or_isnull?: string | undefined
                position__lt?: string | undefined
                position__lt_or_isnull?: string | undefined
                position__lte?: string | undefined
                position__lte_or_isnull?: string | undefined
                previous_assignees__contained_by?: string | undefined
                previous_assignees__contains?: string | undefined
                previous_assignees__isnull?: boolean | undefined
                previous_assignees__overlap?: string | undefined
                priority?: string | undefined
                priority__gt?: string | undefined
                priority__gte?: string | undefined
                priority__in?: string | undefined
                priority__lt?: string | undefined
                priority__lte?: string | undefined
                receiver?: string | undefined
                receiver__in?: string | undefined
                receiver_id?: string | undefined
                receiver_id__in?: string | undefined
                receiver_id__isnull?: string | undefined
                reference?: string | undefined
                reference__icontains?: string | undefined
                reference__in?: string | undefined
                reference__iregex?: string | undefined
                reference__istartswith?: string | undefined
                reference__search?: string | undefined
                route?: string | undefined
                route__in?: string | undefined
                route_id?: string | undefined
                route_id__in?: string | undefined
                route_id__isnull?: string | undefined
                scheduled_time__date?: string | undefined
                scheduled_time__date_or_isnull?: string | undefined
                scheduled_time__gt?: string | undefined
                scheduled_time__gt_or_isnull?: string | undefined
                scheduled_time__gte?: string | undefined
                scheduled_time__gte_or_isnull?: string | undefined
                scheduled_time__lt?: string | undefined
                scheduled_time__lt_or_isnull?: string | undefined
                scheduled_time__lte?: string | undefined
                scheduled_time__lte_or_isnull?: string | undefined
                search?: string | undefined
                size__contained_by?: string | undefined
                size__contains?: string | undefined
                size__isnull?: boolean | undefined
                size__overlap?: string | undefined
                state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                state__in?: string | undefined
                state__in_or_isnull?: string | undefined
                state__not_in?: string | undefined
                state__not_in_or_isnull?: string | undefined
                task_import?: string | undefined
                task_import__in?: string | undefined
                unassignee_id?: string | undefined
                unassignee_id__in?: string | undefined
                unassignee_id__isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                updated_at_delay_latest?: boolean | undefined
              }
            }
            output: PaginatedTaskListSceneList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/signatures/': {
      $get:
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                cursor?: number | undefined
                filename?: string | undefined
                filename__icontains?: string | undefined
                filename__iexact?: string | undefined
                filename__iregex?: string | undefined
                filename__istartswith?: string | undefined
                filename__search?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                mimetype?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                source?: 'web' | 'mobile' | 'integration' | undefined
                task?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedSignatureList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                cursor?: number | undefined
                filename?: string | undefined
                filename__icontains?: string | undefined
                filename__iexact?: string | undefined
                filename__iregex?: string | undefined
                filename__istartswith?: string | undefined
                filename__search?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                mimetype?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                search?: string | undefined
                source?: 'web' | 'mobile' | 'integration' | undefined
                task?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedSignatureList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Signature } & {
              form: Signature
            }
            output: Signature
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Signature } & {
              form: Signature
            }
            output: Signature
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/signatures/batch_delete/': {
      $post: {
        input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
          json: SignatureDeleteAction
        } & { form: SignatureDeleteAction }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/signatures/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Signature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Signature
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/sms/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                alphanumeric_sender_id?: string | undefined
                alphanumeric_sender_id__icontains?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                id?: string | undefined
                message?: string | undefined
                message__icontains?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                phone?: string | undefined
                phone__icontains?: string | undefined
                price?: string | undefined
                price__gt?: string | undefined
                price__gte?: string | undefined
                price__lt?: string | undefined
                price__lte?: string | undefined
                provider?: 'twilio' | 'smsapi' | undefined
                provider__in?: string | undefined
                received_at__date?: string | undefined
                received_at__date_or_isnull?: string | undefined
                received_at__gt?: string | undefined
                received_at__gt_or_isnull?: string | undefined
                received_at__gte?: string | undefined
                received_at__gte_or_isnull?: string | undefined
                received_at__lt?: string | undefined
                received_at__lt_or_isnull?: string | undefined
                received_at__lte?: string | undefined
                received_at__lte_or_isnull?: string | undefined
                search?: string | undefined
                segments_count?: string | undefined
                segments_count__gt?: string | undefined
                segments_count__gte?: string | undefined
                segments_count__lt?: string | undefined
                segments_count__lte?: string | undefined
                sent_at__date?: string | undefined
                sent_at__date_or_isnull?: string | undefined
                sent_at__gt?: string | undefined
                sent_at__gt_or_isnull?: string | undefined
                sent_at__gte?: string | undefined
                sent_at__gte_or_isnull?: string | undefined
                sent_at__lt?: string | undefined
                sent_at__lt_or_isnull?: string | undefined
                sent_at__lte?: string | undefined
                sent_at__lte_or_isnull?: string | undefined
                state?: 'queued' | 'over_quota' | 'sent' | 'failed' | 'received' | undefined
                state__in?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedSMSList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                alphanumeric_sender_id?: string | undefined
                alphanumeric_sender_id__icontains?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                id?: string | undefined
                message?: string | undefined
                message__icontains?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                phone?: string | undefined
                phone__icontains?: string | undefined
                price?: string | undefined
                price__gt?: string | undefined
                price__gte?: string | undefined
                price__lt?: string | undefined
                price__lte?: string | undefined
                provider?: 'twilio' | 'smsapi' | undefined
                provider__in?: string | undefined
                received_at__date?: string | undefined
                received_at__date_or_isnull?: string | undefined
                received_at__gt?: string | undefined
                received_at__gt_or_isnull?: string | undefined
                received_at__gte?: string | undefined
                received_at__gte_or_isnull?: string | undefined
                received_at__lt?: string | undefined
                received_at__lt_or_isnull?: string | undefined
                received_at__lte?: string | undefined
                received_at__lte_or_isnull?: string | undefined
                search?: string | undefined
                segments_count?: string | undefined
                segments_count__gt?: string | undefined
                segments_count__gte?: string | undefined
                segments_count__lt?: string | undefined
                segments_count__lte?: string | undefined
                sent_at__date?: string | undefined
                sent_at__date_or_isnull?: string | undefined
                sent_at__gt?: string | undefined
                sent_at__gt_or_isnull?: string | undefined
                sent_at__gte?: string | undefined
                sent_at__gte_or_isnull?: string | undefined
                sent_at__lt?: string | undefined
                sent_at__lt_or_isnull?: string | undefined
                sent_at__lte?: string | undefined
                sent_at__lte_or_isnull?: string | undefined
                state?: 'queued' | 'over_quota' | 'sent' | 'failed' | 'received' | undefined
                state__in?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedSMSList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: SMS } & {
              form: SMS
            }
            output: SMS
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: SMS } & {
              form: SMS
            }
            output: SMS
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/sms/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: SMS
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: SMS
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedSMS } & { form: PatchedSMS }
            output: SMS
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedSMS } & { form: PatchedSMS }
            output: SMS
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: SMS } & { form: SMS }
            output: SMS
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: SMS } & { form: SMS }
            output: SMS
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/sms/:id/resend/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: SMS } & { form: SMS }
            output: SMS
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: SMS } & { form: SMS }
            output: SMS
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_address_features/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                assignee?: string | undefined
                category?: 'assignment' | 'pick_up' | 'drop_off' | 'warehouse' | undefined
                complete_after__date?: string | undefined
                complete_after__date_or_isnull?: string | undefined
                complete_after__gt?: string | undefined
                complete_after__gt_or_isnull?: string | undefined
                complete_after__gte?: string | undefined
                complete_after__gte_or_isnull?: string | undefined
                complete_after__lt?: string | undefined
                complete_after__lt_or_isnull?: string | undefined
                complete_after__lte?: string | undefined
                complete_after__lte_or_isnull?: string | undefined
                complete_before__date?: string | undefined
                complete_before__date_or_isnull?: string | undefined
                complete_before__gt?: string | undefined
                complete_before__gt_or_isnull?: string | undefined
                complete_before__gte?: string | undefined
                complete_before__gte_or_isnull?: string | undefined
                complete_before__lt?: string | undefined
                complete_before__lt_or_isnull?: string | undefined
                complete_before__lte?: string | undefined
                complete_before__lte_or_isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                owner?: string | undefined
                page_size?: number | undefined
                position__date?: string | undefined
                position__date_or_isnull?: string | undefined
                position__gt?: string | undefined
                position__gt_or_isnull?: string | undefined
                position__gte?: string | undefined
                position__gte_or_isnull?: string | undefined
                position__lt?: string | undefined
                position__lt_or_isnull?: string | undefined
                position__lte?: string | undefined
                position__lte_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedTaskAddressFeatureList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                assignee?: string | undefined
                category?: 'assignment' | 'pick_up' | 'drop_off' | 'warehouse' | undefined
                complete_after__date?: string | undefined
                complete_after__date_or_isnull?: string | undefined
                complete_after__gt?: string | undefined
                complete_after__gt_or_isnull?: string | undefined
                complete_after__gte?: string | undefined
                complete_after__gte_or_isnull?: string | undefined
                complete_after__lt?: string | undefined
                complete_after__lt_or_isnull?: string | undefined
                complete_after__lte?: string | undefined
                complete_after__lte_or_isnull?: string | undefined
                complete_before__date?: string | undefined
                complete_before__date_or_isnull?: string | undefined
                complete_before__gt?: string | undefined
                complete_before__gt_or_isnull?: string | undefined
                complete_before__gte?: string | undefined
                complete_before__gte_or_isnull?: string | undefined
                complete_before__lt?: string | undefined
                complete_before__lt_or_isnull?: string | undefined
                complete_before__lte?: string | undefined
                complete_before__lte_or_isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                owner?: string | undefined
                page_size?: number | undefined
                position__date?: string | undefined
                position__date_or_isnull?: string | undefined
                position__gt?: string | undefined
                position__gt_or_isnull?: string | undefined
                position__gte?: string | undefined
                position__gte_or_isnull?: string | undefined
                position__lt?: string | undefined
                position__lt_or_isnull?: string | undefined
                position__lte?: string | undefined
                position__lte_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedTaskAddressFeatureList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_address_features/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskAddressFeature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskAddressFeature
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_commands/': {
      $get:
        | {
            input: {
              query: {
                accepted_at__date?: string | undefined
                accepted_at__date_or_isnull?: string | undefined
                accepted_at__gt?: string | undefined
                accepted_at__gt_or_isnull?: string | undefined
                accepted_at__gte?: string | undefined
                accepted_at__gte_or_isnull?: string | undefined
                accepted_at__lt?: string | undefined
                accepted_at__lt_or_isnull?: string | undefined
                accepted_at__lte?: string | undefined
                accepted_at__lte_or_isnull?: string | undefined
                action?:
                  | 'update'
                  | 'reassign'
                  | 'assign'
                  | 'accept'
                  | 'unaccept'
                  | 'reject'
                  | 'unassign'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | undefined
                assignee?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                rejected_at__date?: string | undefined
                rejected_at__date_or_isnull?: string | undefined
                rejected_at__gt?: string | undefined
                rejected_at__gt_or_isnull?: string | undefined
                rejected_at__gte?: string | undefined
                rejected_at__gte_or_isnull?: string | undefined
                rejected_at__lt?: string | undefined
                rejected_at__lt_or_isnull?: string | undefined
                rejected_at__lte?: string | undefined
                rejected_at__lte_or_isnull?: string | undefined
                state?: 'pending' | 'accepted' | 'rejected' | undefined
                task?: string | undefined
                task__account?: string | undefined
                time?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedTaskCommandList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accepted_at__date?: string | undefined
                accepted_at__date_or_isnull?: string | undefined
                accepted_at__gt?: string | undefined
                accepted_at__gt_or_isnull?: string | undefined
                accepted_at__gte?: string | undefined
                accepted_at__gte_or_isnull?: string | undefined
                accepted_at__lt?: string | undefined
                accepted_at__lt_or_isnull?: string | undefined
                accepted_at__lte?: string | undefined
                accepted_at__lte_or_isnull?: string | undefined
                action?:
                  | 'update'
                  | 'reassign'
                  | 'assign'
                  | 'accept'
                  | 'unaccept'
                  | 'reject'
                  | 'unassign'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | undefined
                assignee?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                rejected_at__date?: string | undefined
                rejected_at__date_or_isnull?: string | undefined
                rejected_at__gt?: string | undefined
                rejected_at__gt_or_isnull?: string | undefined
                rejected_at__gte?: string | undefined
                rejected_at__gte_or_isnull?: string | undefined
                rejected_at__lt?: string | undefined
                rejected_at__lt_or_isnull?: string | undefined
                rejected_at__lte?: string | undefined
                rejected_at__lte_or_isnull?: string | undefined
                state?: 'pending' | 'accepted' | 'rejected' | undefined
                task?: string | undefined
                task__account?: string | undefined
                time?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedTaskCommandList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: TaskCommand } & {
              form: TaskCommand
            }
            output: TaskCommand
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: TaskCommand } & {
              form: TaskCommand
            }
            output: TaskCommand
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/task_commands/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskCommand
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskCommand
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: TaskCommand } & { form: TaskCommand }
            output: TaskCommand
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: TaskCommand } & { form: TaskCommand }
            output: TaskCommand
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_event_tracks/': {
      $get:
        | {
            input: {
              query: {
                assignee?: string | undefined
                assignee__in?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                event?:
                  | 'create'
                  | 'assign'
                  | 'unassign'
                  | 'reject'
                  | 'accept'
                  | 'unaccept'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | 'updated'
                  | undefined
                format?: 'json' | 'xlsx' | undefined
                from_state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | 'away'
                  | 'near'
                  | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                task?: string | undefined
                task__in?: string | undefined
                to_state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | 'away'
                  | 'near'
                  | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
                user__in?: string | undefined
              }
            }
            output: PaginatedTaskEventTrackList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                assignee?: string | undefined
                assignee__in?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                event?:
                  | 'create'
                  | 'assign'
                  | 'unassign'
                  | 'reject'
                  | 'accept'
                  | 'unaccept'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | 'updated'
                  | undefined
                format?: 'json' | 'xlsx' | undefined
                from_state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | 'away'
                  | 'near'
                  | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                task?: string | undefined
                task__in?: string | undefined
                to_state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | 'away'
                  | 'near'
                  | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
                user__in?: string | undefined
              }
            }
            output: PaginatedTaskEventTrackList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_event_tracks/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskEventTrack
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskEventTrack
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_events/': {
      $get:
        | {
            input: {
              query: {
                assignee?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                event?:
                  | 'create'
                  | 'assign'
                  | 'unassign'
                  | 'reject'
                  | 'accept'
                  | 'unaccept'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | 'updated'
                  | undefined
                event__in?: string | undefined
                field?: '' | 'state' | 'assignee_proximity' | undefined
                format?: 'json' | 'xlsx' | undefined
                from_state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | 'away'
                  | 'near'
                  | undefined
                from_state__in?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                task?: string | undefined
                task__account?: string | undefined
                to_state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | 'away'
                  | 'near'
                  | undefined
                to_state__in?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedTaskEventSerializerV2List
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                assignee?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                event?:
                  | 'create'
                  | 'assign'
                  | 'unassign'
                  | 'reject'
                  | 'accept'
                  | 'unaccept'
                  | 'transit'
                  | 'activate'
                  | 'complete'
                  | 'fail'
                  | 'cancel'
                  | 'assignee_near'
                  | 'assignee_away'
                  | 'updated'
                  | undefined
                event__in?: string | undefined
                field?: '' | 'state' | 'assignee_proximity' | undefined
                format?: 'json' | 'xlsx' | undefined
                from_state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | 'away'
                  | 'near'
                  | undefined
                from_state__in?: string | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                task?: string | undefined
                task__account?: string | undefined
                to_state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | 'away'
                  | 'near'
                  | undefined
                to_state__in?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedTaskEventSerializerV2List
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_events/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskEventSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskEventSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_exports/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                account__in?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__in?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__in?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__in?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__in?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__in?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__geocode_failed_at__date?: string | undefined
                address__geocode_failed_at__date_or_isnull?: string | undefined
                address__geocode_failed_at__gt?: string | undefined
                address__geocode_failed_at__gt_or_isnull?: string | undefined
                address__geocode_failed_at__gte?: string | undefined
                address__geocode_failed_at__gte_or_isnull?: string | undefined
                address__geocode_failed_at__lt?: string | undefined
                address__geocode_failed_at__lt_or_isnull?: string | undefined
                address__geocode_failed_at__lte?: string | undefined
                address__geocode_failed_at__lte_or_isnull?: string | undefined
                address__geocoded_at__date?: string | undefined
                address__geocoded_at__date_or_isnull?: string | undefined
                address__geocoded_at__gt?: string | undefined
                address__geocoded_at__gt_or_isnull?: string | undefined
                address__geocoded_at__gte?: string | undefined
                address__geocoded_at__gte_or_isnull?: string | undefined
                address__geocoded_at__lt?: string | undefined
                address__geocoded_at__lt_or_isnull?: string | undefined
                address__geocoded_at__lte?: string | undefined
                address__geocoded_at__lte_or_isnull?: string | undefined
                address__google_place_id?: string | undefined
                address__google_place_id__icontains?: string | undefined
                address__google_place_id__in?: string | undefined
                address__google_place_id__iregex?: string | undefined
                address__google_place_id__istartswith?: string | undefined
                address__google_place_id__search?: string | undefined
                address__house_number?: string | undefined
                address__house_number__icontains?: string | undefined
                address__house_number__in?: string | undefined
                address__house_number__iregex?: string | undefined
                address__house_number__istartswith?: string | undefined
                address__house_number__search?: string | undefined
                address__point_of_interest?: string | undefined
                address__point_of_interest__icontains?: string | undefined
                address__point_of_interest__in?: string | undefined
                address__point_of_interest__iregex?: string | undefined
                address__point_of_interest__istartswith?: string | undefined
                address__point_of_interest__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__in?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__raw_address?: string | undefined
                address__raw_address__icontains?: string | undefined
                address__raw_address__in?: string | undefined
                address__raw_address__iregex?: string | undefined
                address__raw_address__istartswith?: string | undefined
                address__raw_address__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__in?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__in?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                address_data?: string | undefined
                address_id?: string | undefined
                address_id__in?: string | undefined
                address_id__isnull?: string | undefined
                assignee?: string | undefined
                assignee__email?: string | undefined
                assignee__email__icontains?: string | undefined
                assignee__email__iregex?: string | undefined
                assignee__email__isnull?: string | undefined
                assignee__email__istartswith?: string | undefined
                assignee__email__search?: string | undefined
                assignee__first_name?: string | undefined
                assignee__first_name__icontains?: string | undefined
                assignee__first_name__iregex?: string | undefined
                assignee__first_name__isnull?: string | undefined
                assignee__first_name__istartswith?: string | undefined
                assignee__first_name__search?: string | undefined
                assignee__in?: string | undefined
                assignee__last_name?: string | undefined
                assignee__last_name__icontains?: string | undefined
                assignee__last_name__iregex?: string | undefined
                assignee__last_name__isnull?: string | undefined
                assignee__last_name__istartswith?: string | undefined
                assignee__last_name__search?: string | undefined
                assignee__phone?: string | undefined
                assignee__phone__icontains?: string | undefined
                assignee__phone__iregex?: string | undefined
                assignee__phone__isnull?: string | undefined
                assignee__phone__istartswith?: string | undefined
                assignee__phone__search?: string | undefined
                assignee_id?: string | undefined
                assignee_id__in?: string | undefined
                assignee_id__isnull?: string | undefined
                assignee_proximity?: 'away' | 'near' | undefined
                assignee_proximity__in?: string | undefined
                barcodes__contained_by?: string | undefined
                barcodes__contains?: string | undefined
                barcodes__isnull?: boolean | undefined
                barcodes__overlap?: string | undefined
                cancelled_at__date?: string | undefined
                cancelled_at__date_or_isnull?: string | undefined
                cancelled_at__gt?: string | undefined
                cancelled_at__gt_or_isnull?: string | undefined
                cancelled_at__gte?: string | undefined
                cancelled_at__gte_or_isnull?: string | undefined
                cancelled_at__lt?: string | undefined
                cancelled_at__lt_or_isnull?: string | undefined
                cancelled_at__lte?: string | undefined
                cancelled_at__lte_or_isnull?: string | undefined
                category?: 'assignment' | 'pick_up' | 'drop_off' | 'warehouse' | undefined
                category__in?: string | undefined
                complete_after__date?: string | undefined
                complete_after__date_or_isnull?: string | undefined
                complete_after__gt?: string | undefined
                complete_after__gt_or_isnull?: string | undefined
                complete_after__gte?: string | undefined
                complete_after__gte_or_isnull?: string | undefined
                complete_after__lt?: string | undefined
                complete_after__lt_or_isnull?: string | undefined
                complete_after__lte?: string | undefined
                complete_after__lte_or_isnull?: string | undefined
                complete_before__date?: string | undefined
                complete_before__date_or_isnull?: string | undefined
                complete_before__gt?: string | undefined
                complete_before__gt_or_isnull?: string | undefined
                complete_before__gte?: string | undefined
                complete_before__gte_or_isnull?: string | undefined
                complete_before__lt?: string | undefined
                complete_before__lt_or_isnull?: string | undefined
                complete_before__lte?: string | undefined
                complete_before__lte_or_isnull?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__in?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__email?: string | undefined
                contact__email__icontains?: string | undefined
                contact__email__in?: string | undefined
                contact__email__iregex?: string | undefined
                contact__email__istartswith?: string | undefined
                contact__email__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__overlap?: string | undefined
                contact__name?: string | undefined
                contact__name__icontains?: string | undefined
                contact__name__in?: string | undefined
                contact__name__iregex?: string | undefined
                contact__name__istartswith?: string | undefined
                contact__name__search?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__in?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phone?: string | undefined
                contact__phone__icontains?: string | undefined
                contact__phone__in?: string | undefined
                contact__phone__iregex?: string | undefined
                contact__phone__istartswith?: string | undefined
                contact__phone__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__overlap?: string | undefined
                contact_data?: string | undefined
                contact_id?: string | undefined
                contact_id__in?: string | undefined
                contact_id__isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                created_by__isnull?: string | undefined
                description?: string | undefined
                description__icontains?: string | undefined
                description__iregex?: string | undefined
                description__istartswith?: string | undefined
                description__search?: string | undefined
                duration?: string | undefined
                duration__gt?: string | undefined
                duration__gte?: string | undefined
                duration__lt?: string | undefined
                duration__lte?: string | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                external_id__in?: string | undefined
                external_id__iregex?: string | undefined
                external_id__isnull?: string | undefined
                external_id__istartswith?: string | undefined
                external_id__search?: string | undefined
                fields?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                id?: string | undefined
                id__in?: string | undefined
                is_optimal?: string | undefined
                is_optimal__isnull?: string | undefined
                metadata__accepted_distance?: string | undefined
                metadata__accepted_distance__gt?: string | undefined
                metadata__accepted_distance__gte?: string | undefined
                metadata__accepted_distance__lt?: string | undefined
                metadata__accepted_distance__lte?: string | undefined
                metadata__accepted_duration?: string | undefined
                metadata__accepted_duration__gt?: string | undefined
                metadata__accepted_duration__gte?: string | undefined
                metadata__accepted_duration__lt?: string | undefined
                metadata__accepted_duration__lte?: string | undefined
                metadata__active_distance?: string | undefined
                metadata__active_distance__gt?: string | undefined
                metadata__active_distance__gte?: string | undefined
                metadata__active_distance__lt?: string | undefined
                metadata__active_distance__lte?: string | undefined
                metadata__active_duration?: string | undefined
                metadata__active_duration__gt?: string | undefined
                metadata__active_duration__gte?: string | undefined
                metadata__active_duration__lt?: string | undefined
                metadata__active_duration__lte?: string | undefined
                metadata__assigned_distance?: string | undefined
                metadata__assigned_distance__gt?: string | undefined
                metadata__assigned_distance__gte?: string | undefined
                metadata__assigned_distance__lt?: string | undefined
                metadata__assigned_distance__lte?: string | undefined
                metadata__assigned_duration?: string | undefined
                metadata__assigned_duration__gt?: string | undefined
                metadata__assigned_duration__gte?: string | undefined
                metadata__assigned_duration__lt?: string | undefined
                metadata__assigned_duration__lte?: string | undefined
                metadata__cancelled_distance?: string | undefined
                metadata__cancelled_distance__gt?: string | undefined
                metadata__cancelled_distance__gte?: string | undefined
                metadata__cancelled_distance__lt?: string | undefined
                metadata__cancelled_distance__lte?: string | undefined
                metadata__cancelled_duration?: string | undefined
                metadata__cancelled_duration__gt?: string | undefined
                metadata__cancelled_duration__gte?: string | undefined
                metadata__cancelled_duration__lt?: string | undefined
                metadata__cancelled_duration__lte?: string | undefined
                metadata__completed_distance?: string | undefined
                metadata__completed_distance__gt?: string | undefined
                metadata__completed_distance__gte?: string | undefined
                metadata__completed_distance__lt?: string | undefined
                metadata__completed_distance__lte?: string | undefined
                metadata__completed_duration?: string | undefined
                metadata__completed_duration__gt?: string | undefined
                metadata__completed_duration__gte?: string | undefined
                metadata__completed_duration__lt?: string | undefined
                metadata__completed_duration__lte?: string | undefined
                metadata__documents_count?: string | undefined
                metadata__documents_count__gt?: string | undefined
                metadata__documents_count__gte?: string | undefined
                metadata__documents_count__lt?: string | undefined
                metadata__documents_count__lte?: string | undefined
                metadata__events_count?: string | undefined
                metadata__events_count__gt?: string | undefined
                metadata__events_count__gte?: string | undefined
                metadata__events_count__lt?: string | undefined
                metadata__events_count__lte?: string | undefined
                metadata__failed_distance?: string | undefined
                metadata__failed_distance__gt?: string | undefined
                metadata__failed_distance__gte?: string | undefined
                metadata__failed_distance__lt?: string | undefined
                metadata__failed_distance__lte?: string | undefined
                metadata__failed_duration?: string | undefined
                metadata__failed_duration__gt?: string | undefined
                metadata__failed_duration__gte?: string | undefined
                metadata__failed_duration__lt?: string | undefined
                metadata__failed_duration__lte?: string | undefined
                metadata__forms_completed_count?: string | undefined
                metadata__forms_completed_count__gt?: string | undefined
                metadata__forms_completed_count__gte?: string | undefined
                metadata__forms_completed_count__lt?: string | undefined
                metadata__forms_completed_count__lte?: string | undefined
                metadata__forms_count?: string | undefined
                metadata__forms_count__gt?: string | undefined
                metadata__forms_count__gte?: string | undefined
                metadata__forms_count__lt?: string | undefined
                metadata__forms_count__lte?: string | undefined
                metadata__last_accepted_at__date?: string | undefined
                metadata__last_accepted_at__date_or_isnull?: string | undefined
                metadata__last_accepted_at__gt?: string | undefined
                metadata__last_accepted_at__gt_or_isnull?: string | undefined
                metadata__last_accepted_at__gte?: string | undefined
                metadata__last_accepted_at__gte_or_isnull?: string | undefined
                metadata__last_accepted_at__lt?: string | undefined
                metadata__last_accepted_at__lt_or_isnull?: string | undefined
                metadata__last_accepted_at__lte?: string | undefined
                metadata__last_accepted_at__lte_or_isnull?: string | undefined
                metadata__last_active_at__date?: string | undefined
                metadata__last_active_at__date_or_isnull?: string | undefined
                metadata__last_active_at__gt?: string | undefined
                metadata__last_active_at__gt_or_isnull?: string | undefined
                metadata__last_active_at__gte?: string | undefined
                metadata__last_active_at__gte_or_isnull?: string | undefined
                metadata__last_active_at__lt?: string | undefined
                metadata__last_active_at__lt_or_isnull?: string | undefined
                metadata__last_active_at__lte?: string | undefined
                metadata__last_active_at__lte_or_isnull?: string | undefined
                metadata__last_assigned_at__date?: string | undefined
                metadata__last_assigned_at__date_or_isnull?: string | undefined
                metadata__last_assigned_at__gt?: string | undefined
                metadata__last_assigned_at__gt_or_isnull?: string | undefined
                metadata__last_assigned_at__gte?: string | undefined
                metadata__last_assigned_at__gte_or_isnull?: string | undefined
                metadata__last_assigned_at__lt?: string | undefined
                metadata__last_assigned_at__lt_or_isnull?: string | undefined
                metadata__last_assigned_at__lte?: string | undefined
                metadata__last_assigned_at__lte_or_isnull?: string | undefined
                metadata__last_cancelled_at__date?: string | undefined
                metadata__last_cancelled_at__date_or_isnull?: string | undefined
                metadata__last_cancelled_at__gt?: string | undefined
                metadata__last_cancelled_at__gt_or_isnull?: string | undefined
                metadata__last_cancelled_at__gte?: string | undefined
                metadata__last_cancelled_at__gte_or_isnull?: string | undefined
                metadata__last_cancelled_at__lt?: string | undefined
                metadata__last_cancelled_at__lt_or_isnull?: string | undefined
                metadata__last_cancelled_at__lte?: string | undefined
                metadata__last_cancelled_at__lte_or_isnull?: string | undefined
                metadata__last_completed_at__date?: string | undefined
                metadata__last_completed_at__date_or_isnull?: string | undefined
                metadata__last_completed_at__gt?: string | undefined
                metadata__last_completed_at__gt_or_isnull?: string | undefined
                metadata__last_completed_at__gte?: string | undefined
                metadata__last_completed_at__gte_or_isnull?: string | undefined
                metadata__last_completed_at__lt?: string | undefined
                metadata__last_completed_at__lt_or_isnull?: string | undefined
                metadata__last_completed_at__lte?: string | undefined
                metadata__last_completed_at__lte_or_isnull?: string | undefined
                metadata__last_failed_at__date?: string | undefined
                metadata__last_failed_at__date_or_isnull?: string | undefined
                metadata__last_failed_at__gt?: string | undefined
                metadata__last_failed_at__gt_or_isnull?: string | undefined
                metadata__last_failed_at__gte?: string | undefined
                metadata__last_failed_at__gte_or_isnull?: string | undefined
                metadata__last_failed_at__lt?: string | undefined
                metadata__last_failed_at__lt_or_isnull?: string | undefined
                metadata__last_failed_at__lte?: string | undefined
                metadata__last_failed_at__lte_or_isnull?: string | undefined
                metadata__last_transit_at__date?: string | undefined
                metadata__last_transit_at__date_or_isnull?: string | undefined
                metadata__last_transit_at__gt?: string | undefined
                metadata__last_transit_at__gt_or_isnull?: string | undefined
                metadata__last_transit_at__gte?: string | undefined
                metadata__last_transit_at__gte_or_isnull?: string | undefined
                metadata__last_transit_at__lt?: string | undefined
                metadata__last_transit_at__lt_or_isnull?: string | undefined
                metadata__last_transit_at__lte?: string | undefined
                metadata__last_transit_at__lte_or_isnull?: string | undefined
                metadata__last_unassigned_at__date?: string | undefined
                metadata__last_unassigned_at__date_or_isnull?: string | undefined
                metadata__last_unassigned_at__gt?: string | undefined
                metadata__last_unassigned_at__gt_or_isnull?: string | undefined
                metadata__last_unassigned_at__gte?: string | undefined
                metadata__last_unassigned_at__gte_or_isnull?: string | undefined
                metadata__last_unassigned_at__lt?: string | undefined
                metadata__last_unassigned_at__lt_or_isnull?: string | undefined
                metadata__last_unassigned_at__lte?: string | undefined
                metadata__last_unassigned_at__lte_or_isnull?: string | undefined
                metadata__signatures_count?: string | undefined
                metadata__signatures_count__gt?: string | undefined
                metadata__signatures_count__gte?: string | undefined
                metadata__signatures_count__lt?: string | undefined
                metadata__signatures_count__lte?: string | undefined
                metadata__task_event_notes_count?: string | undefined
                metadata__task_event_notes_count__gt?: string | undefined
                metadata__task_event_notes_count__gte?: string | undefined
                metadata__task_event_notes_count__lt?: string | undefined
                metadata__task_event_notes_count__lte?: string | undefined
                metadata__transit_distance?: string | undefined
                metadata__transit_distance__gt?: string | undefined
                metadata__transit_distance__gte?: string | undefined
                metadata__transit_distance__lt?: string | undefined
                metadata__transit_distance__lte?: string | undefined
                metadata__transit_duration?: string | undefined
                metadata__transit_duration__gt?: string | undefined
                metadata__transit_duration__gte?: string | undefined
                metadata__transit_duration__lt?: string | undefined
                metadata__transit_duration__lte?: string | undefined
                metadata__unassigned_distance?: string | undefined
                metadata__unassigned_distance__gt?: string | undefined
                metadata__unassigned_distance__gte?: string | undefined
                metadata__unassigned_distance__lt?: string | undefined
                metadata__unassigned_distance__lte?: string | undefined
                metadata__unassigned_duration?: string | undefined
                metadata__unassigned_duration__gt?: string | undefined
                metadata__unassigned_duration__gte?: string | undefined
                metadata__unassigned_duration__lt?: string | undefined
                metadata__unassigned_duration__lte?: string | undefined
                'metafields__namespace:key'?: string | undefined
                order?: string | undefined
                order__auto_assign?: string | undefined
                order__created_at__date?: string | undefined
                order__created_at__date_or_isnull?: string | undefined
                order__created_at__gt?: string | undefined
                order__created_at__gt_or_isnull?: string | undefined
                order__created_at__gte?: string | undefined
                order__created_at__gte_or_isnull?: string | undefined
                order__created_at__lt?: string | undefined
                order__created_at__lt_or_isnull?: string | undefined
                order__created_at__lte?: string | undefined
                order__created_at__lte_or_isnull?: string | undefined
                order__created_by?: string | undefined
                order__created_by__in?: string | undefined
                order__created_by__isnull?: string | undefined
                order__external_id?: string | undefined
                order__external_id__icontains?: string | undefined
                order__external_id__in?: string | undefined
                order__external_id__iregex?: string | undefined
                order__external_id__isnull?: string | undefined
                order__external_id__istartswith?: string | undefined
                order__external_id__search?: string | undefined
                order__in?: string | undefined
                order__orderer?: string | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
                order__reference?: string | undefined
                order__reference__icontains?: string | undefined
                order__reference__in?: string | undefined
                order__reference__iregex?: string | undefined
                order__reference__istartswith?: string | undefined
                order__reference__search?: string | undefined
                order_id?: string | undefined
                order_id__in?: string | undefined
                order_id__isnull?: string | undefined
                orderer?: string | undefined
                orderer__id?: string | undefined
                orderer__id__in?: string | undefined
                orderer__id__isnull?: string | undefined
                orderer__in?: string | undefined
                orderer__name?: string | undefined
                orderer__name__icontains?: string | undefined
                orderer_id?: string | undefined
                orderer_id__in?: string | undefined
                orderer_id__isnull?: string | undefined
                ordering?: string | undefined
                owner_id?: string | undefined
                owner_id__in?: string | undefined
                owner_id__isnull?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                position__date?: string | undefined
                position__date_or_isnull?: string | undefined
                position__gt?: string | undefined
                position__gt_or_isnull?: string | undefined
                position__gte?: string | undefined
                position__gte_or_isnull?: string | undefined
                position__lt?: string | undefined
                position__lt_or_isnull?: string | undefined
                position__lte?: string | undefined
                position__lte_or_isnull?: string | undefined
                previous_assignees__contained_by?: string | undefined
                previous_assignees__contains?: string | undefined
                previous_assignees__isnull?: boolean | undefined
                previous_assignees__overlap?: string | undefined
                priority?: string | undefined
                priority__gt?: string | undefined
                priority__gte?: string | undefined
                priority__in?: string | undefined
                priority__lt?: string | undefined
                priority__lte?: string | undefined
                receiver?: string | undefined
                receiver__in?: string | undefined
                receiver_id?: string | undefined
                receiver_id__in?: string | undefined
                receiver_id__isnull?: string | undefined
                reference?: string | undefined
                reference__icontains?: string | undefined
                reference__in?: string | undefined
                reference__iregex?: string | undefined
                reference__istartswith?: string | undefined
                reference__search?: string | undefined
                route?: string | undefined
                route__in?: string | undefined
                route_id?: string | undefined
                route_id__in?: string | undefined
                route_id__isnull?: string | undefined
                scheduled_time__date?: string | undefined
                scheduled_time__date_or_isnull?: string | undefined
                scheduled_time__gt?: string | undefined
                scheduled_time__gt_or_isnull?: string | undefined
                scheduled_time__gte?: string | undefined
                scheduled_time__gte_or_isnull?: string | undefined
                scheduled_time__lt?: string | undefined
                scheduled_time__lt_or_isnull?: string | undefined
                scheduled_time__lte?: string | undefined
                scheduled_time__lte_or_isnull?: string | undefined
                search?: string | undefined
                size__contained_by?: string | undefined
                size__contains?: string | undefined
                size__isnull?: boolean | undefined
                size__overlap?: string | undefined
                state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                state__in?: string | undefined
                state__in_or_isnull?: string | undefined
                state__not_in?: string | undefined
                state__not_in_or_isnull?: string | undefined
                task_import?: string | undefined
                task_import__in?: string | undefined
                unassignee_id?: string | undefined
                unassignee_id__in?: string | undefined
                unassignee_id__isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                updated_at_delay_latest?: boolean | undefined
              }
            }
            output: PaginatedTaskExportList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                account__in?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__in?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__in?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__in?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__in?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__in?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__geocode_failed_at__date?: string | undefined
                address__geocode_failed_at__date_or_isnull?: string | undefined
                address__geocode_failed_at__gt?: string | undefined
                address__geocode_failed_at__gt_or_isnull?: string | undefined
                address__geocode_failed_at__gte?: string | undefined
                address__geocode_failed_at__gte_or_isnull?: string | undefined
                address__geocode_failed_at__lt?: string | undefined
                address__geocode_failed_at__lt_or_isnull?: string | undefined
                address__geocode_failed_at__lte?: string | undefined
                address__geocode_failed_at__lte_or_isnull?: string | undefined
                address__geocoded_at__date?: string | undefined
                address__geocoded_at__date_or_isnull?: string | undefined
                address__geocoded_at__gt?: string | undefined
                address__geocoded_at__gt_or_isnull?: string | undefined
                address__geocoded_at__gte?: string | undefined
                address__geocoded_at__gte_or_isnull?: string | undefined
                address__geocoded_at__lt?: string | undefined
                address__geocoded_at__lt_or_isnull?: string | undefined
                address__geocoded_at__lte?: string | undefined
                address__geocoded_at__lte_or_isnull?: string | undefined
                address__google_place_id?: string | undefined
                address__google_place_id__icontains?: string | undefined
                address__google_place_id__in?: string | undefined
                address__google_place_id__iregex?: string | undefined
                address__google_place_id__istartswith?: string | undefined
                address__google_place_id__search?: string | undefined
                address__house_number?: string | undefined
                address__house_number__icontains?: string | undefined
                address__house_number__in?: string | undefined
                address__house_number__iregex?: string | undefined
                address__house_number__istartswith?: string | undefined
                address__house_number__search?: string | undefined
                address__point_of_interest?: string | undefined
                address__point_of_interest__icontains?: string | undefined
                address__point_of_interest__in?: string | undefined
                address__point_of_interest__iregex?: string | undefined
                address__point_of_interest__istartswith?: string | undefined
                address__point_of_interest__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__in?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__raw_address?: string | undefined
                address__raw_address__icontains?: string | undefined
                address__raw_address__in?: string | undefined
                address__raw_address__iregex?: string | undefined
                address__raw_address__istartswith?: string | undefined
                address__raw_address__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__in?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__in?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                address_data?: string | undefined
                address_id?: string | undefined
                address_id__in?: string | undefined
                address_id__isnull?: string | undefined
                assignee?: string | undefined
                assignee__email?: string | undefined
                assignee__email__icontains?: string | undefined
                assignee__email__iregex?: string | undefined
                assignee__email__isnull?: string | undefined
                assignee__email__istartswith?: string | undefined
                assignee__email__search?: string | undefined
                assignee__first_name?: string | undefined
                assignee__first_name__icontains?: string | undefined
                assignee__first_name__iregex?: string | undefined
                assignee__first_name__isnull?: string | undefined
                assignee__first_name__istartswith?: string | undefined
                assignee__first_name__search?: string | undefined
                assignee__in?: string | undefined
                assignee__last_name?: string | undefined
                assignee__last_name__icontains?: string | undefined
                assignee__last_name__iregex?: string | undefined
                assignee__last_name__isnull?: string | undefined
                assignee__last_name__istartswith?: string | undefined
                assignee__last_name__search?: string | undefined
                assignee__phone?: string | undefined
                assignee__phone__icontains?: string | undefined
                assignee__phone__iregex?: string | undefined
                assignee__phone__isnull?: string | undefined
                assignee__phone__istartswith?: string | undefined
                assignee__phone__search?: string | undefined
                assignee_id?: string | undefined
                assignee_id__in?: string | undefined
                assignee_id__isnull?: string | undefined
                assignee_proximity?: 'away' | 'near' | undefined
                assignee_proximity__in?: string | undefined
                barcodes__contained_by?: string | undefined
                barcodes__contains?: string | undefined
                barcodes__isnull?: boolean | undefined
                barcodes__overlap?: string | undefined
                cancelled_at__date?: string | undefined
                cancelled_at__date_or_isnull?: string | undefined
                cancelled_at__gt?: string | undefined
                cancelled_at__gt_or_isnull?: string | undefined
                cancelled_at__gte?: string | undefined
                cancelled_at__gte_or_isnull?: string | undefined
                cancelled_at__lt?: string | undefined
                cancelled_at__lt_or_isnull?: string | undefined
                cancelled_at__lte?: string | undefined
                cancelled_at__lte_or_isnull?: string | undefined
                category?: 'assignment' | 'pick_up' | 'drop_off' | 'warehouse' | undefined
                category__in?: string | undefined
                complete_after__date?: string | undefined
                complete_after__date_or_isnull?: string | undefined
                complete_after__gt?: string | undefined
                complete_after__gt_or_isnull?: string | undefined
                complete_after__gte?: string | undefined
                complete_after__gte_or_isnull?: string | undefined
                complete_after__lt?: string | undefined
                complete_after__lt_or_isnull?: string | undefined
                complete_after__lte?: string | undefined
                complete_after__lte_or_isnull?: string | undefined
                complete_before__date?: string | undefined
                complete_before__date_or_isnull?: string | undefined
                complete_before__gt?: string | undefined
                complete_before__gt_or_isnull?: string | undefined
                complete_before__gte?: string | undefined
                complete_before__gte_or_isnull?: string | undefined
                complete_before__lt?: string | undefined
                complete_before__lt_or_isnull?: string | undefined
                complete_before__lte?: string | undefined
                complete_before__lte_or_isnull?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__in?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__email?: string | undefined
                contact__email__icontains?: string | undefined
                contact__email__in?: string | undefined
                contact__email__iregex?: string | undefined
                contact__email__istartswith?: string | undefined
                contact__email__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__overlap?: string | undefined
                contact__name?: string | undefined
                contact__name__icontains?: string | undefined
                contact__name__in?: string | undefined
                contact__name__iregex?: string | undefined
                contact__name__istartswith?: string | undefined
                contact__name__search?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__in?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phone?: string | undefined
                contact__phone__icontains?: string | undefined
                contact__phone__in?: string | undefined
                contact__phone__iregex?: string | undefined
                contact__phone__istartswith?: string | undefined
                contact__phone__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__overlap?: string | undefined
                contact_data?: string | undefined
                contact_id?: string | undefined
                contact_id__in?: string | undefined
                contact_id__isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                created_by__isnull?: string | undefined
                description?: string | undefined
                description__icontains?: string | undefined
                description__iregex?: string | undefined
                description__istartswith?: string | undefined
                description__search?: string | undefined
                duration?: string | undefined
                duration__gt?: string | undefined
                duration__gte?: string | undefined
                duration__lt?: string | undefined
                duration__lte?: string | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                external_id__in?: string | undefined
                external_id__iregex?: string | undefined
                external_id__isnull?: string | undefined
                external_id__istartswith?: string | undefined
                external_id__search?: string | undefined
                fields?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                id?: string | undefined
                id__in?: string | undefined
                is_optimal?: string | undefined
                is_optimal__isnull?: string | undefined
                metadata__accepted_distance?: string | undefined
                metadata__accepted_distance__gt?: string | undefined
                metadata__accepted_distance__gte?: string | undefined
                metadata__accepted_distance__lt?: string | undefined
                metadata__accepted_distance__lte?: string | undefined
                metadata__accepted_duration?: string | undefined
                metadata__accepted_duration__gt?: string | undefined
                metadata__accepted_duration__gte?: string | undefined
                metadata__accepted_duration__lt?: string | undefined
                metadata__accepted_duration__lte?: string | undefined
                metadata__active_distance?: string | undefined
                metadata__active_distance__gt?: string | undefined
                metadata__active_distance__gte?: string | undefined
                metadata__active_distance__lt?: string | undefined
                metadata__active_distance__lte?: string | undefined
                metadata__active_duration?: string | undefined
                metadata__active_duration__gt?: string | undefined
                metadata__active_duration__gte?: string | undefined
                metadata__active_duration__lt?: string | undefined
                metadata__active_duration__lte?: string | undefined
                metadata__assigned_distance?: string | undefined
                metadata__assigned_distance__gt?: string | undefined
                metadata__assigned_distance__gte?: string | undefined
                metadata__assigned_distance__lt?: string | undefined
                metadata__assigned_distance__lte?: string | undefined
                metadata__assigned_duration?: string | undefined
                metadata__assigned_duration__gt?: string | undefined
                metadata__assigned_duration__gte?: string | undefined
                metadata__assigned_duration__lt?: string | undefined
                metadata__assigned_duration__lte?: string | undefined
                metadata__cancelled_distance?: string | undefined
                metadata__cancelled_distance__gt?: string | undefined
                metadata__cancelled_distance__gte?: string | undefined
                metadata__cancelled_distance__lt?: string | undefined
                metadata__cancelled_distance__lte?: string | undefined
                metadata__cancelled_duration?: string | undefined
                metadata__cancelled_duration__gt?: string | undefined
                metadata__cancelled_duration__gte?: string | undefined
                metadata__cancelled_duration__lt?: string | undefined
                metadata__cancelled_duration__lte?: string | undefined
                metadata__completed_distance?: string | undefined
                metadata__completed_distance__gt?: string | undefined
                metadata__completed_distance__gte?: string | undefined
                metadata__completed_distance__lt?: string | undefined
                metadata__completed_distance__lte?: string | undefined
                metadata__completed_duration?: string | undefined
                metadata__completed_duration__gt?: string | undefined
                metadata__completed_duration__gte?: string | undefined
                metadata__completed_duration__lt?: string | undefined
                metadata__completed_duration__lte?: string | undefined
                metadata__documents_count?: string | undefined
                metadata__documents_count__gt?: string | undefined
                metadata__documents_count__gte?: string | undefined
                metadata__documents_count__lt?: string | undefined
                metadata__documents_count__lte?: string | undefined
                metadata__events_count?: string | undefined
                metadata__events_count__gt?: string | undefined
                metadata__events_count__gte?: string | undefined
                metadata__events_count__lt?: string | undefined
                metadata__events_count__lte?: string | undefined
                metadata__failed_distance?: string | undefined
                metadata__failed_distance__gt?: string | undefined
                metadata__failed_distance__gte?: string | undefined
                metadata__failed_distance__lt?: string | undefined
                metadata__failed_distance__lte?: string | undefined
                metadata__failed_duration?: string | undefined
                metadata__failed_duration__gt?: string | undefined
                metadata__failed_duration__gte?: string | undefined
                metadata__failed_duration__lt?: string | undefined
                metadata__failed_duration__lte?: string | undefined
                metadata__forms_completed_count?: string | undefined
                metadata__forms_completed_count__gt?: string | undefined
                metadata__forms_completed_count__gte?: string | undefined
                metadata__forms_completed_count__lt?: string | undefined
                metadata__forms_completed_count__lte?: string | undefined
                metadata__forms_count?: string | undefined
                metadata__forms_count__gt?: string | undefined
                metadata__forms_count__gte?: string | undefined
                metadata__forms_count__lt?: string | undefined
                metadata__forms_count__lte?: string | undefined
                metadata__last_accepted_at__date?: string | undefined
                metadata__last_accepted_at__date_or_isnull?: string | undefined
                metadata__last_accepted_at__gt?: string | undefined
                metadata__last_accepted_at__gt_or_isnull?: string | undefined
                metadata__last_accepted_at__gte?: string | undefined
                metadata__last_accepted_at__gte_or_isnull?: string | undefined
                metadata__last_accepted_at__lt?: string | undefined
                metadata__last_accepted_at__lt_or_isnull?: string | undefined
                metadata__last_accepted_at__lte?: string | undefined
                metadata__last_accepted_at__lte_or_isnull?: string | undefined
                metadata__last_active_at__date?: string | undefined
                metadata__last_active_at__date_or_isnull?: string | undefined
                metadata__last_active_at__gt?: string | undefined
                metadata__last_active_at__gt_or_isnull?: string | undefined
                metadata__last_active_at__gte?: string | undefined
                metadata__last_active_at__gte_or_isnull?: string | undefined
                metadata__last_active_at__lt?: string | undefined
                metadata__last_active_at__lt_or_isnull?: string | undefined
                metadata__last_active_at__lte?: string | undefined
                metadata__last_active_at__lte_or_isnull?: string | undefined
                metadata__last_assigned_at__date?: string | undefined
                metadata__last_assigned_at__date_or_isnull?: string | undefined
                metadata__last_assigned_at__gt?: string | undefined
                metadata__last_assigned_at__gt_or_isnull?: string | undefined
                metadata__last_assigned_at__gte?: string | undefined
                metadata__last_assigned_at__gte_or_isnull?: string | undefined
                metadata__last_assigned_at__lt?: string | undefined
                metadata__last_assigned_at__lt_or_isnull?: string | undefined
                metadata__last_assigned_at__lte?: string | undefined
                metadata__last_assigned_at__lte_or_isnull?: string | undefined
                metadata__last_cancelled_at__date?: string | undefined
                metadata__last_cancelled_at__date_or_isnull?: string | undefined
                metadata__last_cancelled_at__gt?: string | undefined
                metadata__last_cancelled_at__gt_or_isnull?: string | undefined
                metadata__last_cancelled_at__gte?: string | undefined
                metadata__last_cancelled_at__gte_or_isnull?: string | undefined
                metadata__last_cancelled_at__lt?: string | undefined
                metadata__last_cancelled_at__lt_or_isnull?: string | undefined
                metadata__last_cancelled_at__lte?: string | undefined
                metadata__last_cancelled_at__lte_or_isnull?: string | undefined
                metadata__last_completed_at__date?: string | undefined
                metadata__last_completed_at__date_or_isnull?: string | undefined
                metadata__last_completed_at__gt?: string | undefined
                metadata__last_completed_at__gt_or_isnull?: string | undefined
                metadata__last_completed_at__gte?: string | undefined
                metadata__last_completed_at__gte_or_isnull?: string | undefined
                metadata__last_completed_at__lt?: string | undefined
                metadata__last_completed_at__lt_or_isnull?: string | undefined
                metadata__last_completed_at__lte?: string | undefined
                metadata__last_completed_at__lte_or_isnull?: string | undefined
                metadata__last_failed_at__date?: string | undefined
                metadata__last_failed_at__date_or_isnull?: string | undefined
                metadata__last_failed_at__gt?: string | undefined
                metadata__last_failed_at__gt_or_isnull?: string | undefined
                metadata__last_failed_at__gte?: string | undefined
                metadata__last_failed_at__gte_or_isnull?: string | undefined
                metadata__last_failed_at__lt?: string | undefined
                metadata__last_failed_at__lt_or_isnull?: string | undefined
                metadata__last_failed_at__lte?: string | undefined
                metadata__last_failed_at__lte_or_isnull?: string | undefined
                metadata__last_transit_at__date?: string | undefined
                metadata__last_transit_at__date_or_isnull?: string | undefined
                metadata__last_transit_at__gt?: string | undefined
                metadata__last_transit_at__gt_or_isnull?: string | undefined
                metadata__last_transit_at__gte?: string | undefined
                metadata__last_transit_at__gte_or_isnull?: string | undefined
                metadata__last_transit_at__lt?: string | undefined
                metadata__last_transit_at__lt_or_isnull?: string | undefined
                metadata__last_transit_at__lte?: string | undefined
                metadata__last_transit_at__lte_or_isnull?: string | undefined
                metadata__last_unassigned_at__date?: string | undefined
                metadata__last_unassigned_at__date_or_isnull?: string | undefined
                metadata__last_unassigned_at__gt?: string | undefined
                metadata__last_unassigned_at__gt_or_isnull?: string | undefined
                metadata__last_unassigned_at__gte?: string | undefined
                metadata__last_unassigned_at__gte_or_isnull?: string | undefined
                metadata__last_unassigned_at__lt?: string | undefined
                metadata__last_unassigned_at__lt_or_isnull?: string | undefined
                metadata__last_unassigned_at__lte?: string | undefined
                metadata__last_unassigned_at__lte_or_isnull?: string | undefined
                metadata__signatures_count?: string | undefined
                metadata__signatures_count__gt?: string | undefined
                metadata__signatures_count__gte?: string | undefined
                metadata__signatures_count__lt?: string | undefined
                metadata__signatures_count__lte?: string | undefined
                metadata__task_event_notes_count?: string | undefined
                metadata__task_event_notes_count__gt?: string | undefined
                metadata__task_event_notes_count__gte?: string | undefined
                metadata__task_event_notes_count__lt?: string | undefined
                metadata__task_event_notes_count__lte?: string | undefined
                metadata__transit_distance?: string | undefined
                metadata__transit_distance__gt?: string | undefined
                metadata__transit_distance__gte?: string | undefined
                metadata__transit_distance__lt?: string | undefined
                metadata__transit_distance__lte?: string | undefined
                metadata__transit_duration?: string | undefined
                metadata__transit_duration__gt?: string | undefined
                metadata__transit_duration__gte?: string | undefined
                metadata__transit_duration__lt?: string | undefined
                metadata__transit_duration__lte?: string | undefined
                metadata__unassigned_distance?: string | undefined
                metadata__unassigned_distance__gt?: string | undefined
                metadata__unassigned_distance__gte?: string | undefined
                metadata__unassigned_distance__lt?: string | undefined
                metadata__unassigned_distance__lte?: string | undefined
                metadata__unassigned_duration?: string | undefined
                metadata__unassigned_duration__gt?: string | undefined
                metadata__unassigned_duration__gte?: string | undefined
                metadata__unassigned_duration__lt?: string | undefined
                metadata__unassigned_duration__lte?: string | undefined
                'metafields__namespace:key'?: string | undefined
                order?: string | undefined
                order__auto_assign?: string | undefined
                order__created_at__date?: string | undefined
                order__created_at__date_or_isnull?: string | undefined
                order__created_at__gt?: string | undefined
                order__created_at__gt_or_isnull?: string | undefined
                order__created_at__gte?: string | undefined
                order__created_at__gte_or_isnull?: string | undefined
                order__created_at__lt?: string | undefined
                order__created_at__lt_or_isnull?: string | undefined
                order__created_at__lte?: string | undefined
                order__created_at__lte_or_isnull?: string | undefined
                order__created_by?: string | undefined
                order__created_by__in?: string | undefined
                order__created_by__isnull?: string | undefined
                order__external_id?: string | undefined
                order__external_id__icontains?: string | undefined
                order__external_id__in?: string | undefined
                order__external_id__iregex?: string | undefined
                order__external_id__isnull?: string | undefined
                order__external_id__istartswith?: string | undefined
                order__external_id__search?: string | undefined
                order__in?: string | undefined
                order__orderer?: string | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
                order__reference?: string | undefined
                order__reference__icontains?: string | undefined
                order__reference__in?: string | undefined
                order__reference__iregex?: string | undefined
                order__reference__istartswith?: string | undefined
                order__reference__search?: string | undefined
                order_id?: string | undefined
                order_id__in?: string | undefined
                order_id__isnull?: string | undefined
                orderer?: string | undefined
                orderer__id?: string | undefined
                orderer__id__in?: string | undefined
                orderer__id__isnull?: string | undefined
                orderer__in?: string | undefined
                orderer__name?: string | undefined
                orderer__name__icontains?: string | undefined
                orderer_id?: string | undefined
                orderer_id__in?: string | undefined
                orderer_id__isnull?: string | undefined
                ordering?: string | undefined
                owner_id?: string | undefined
                owner_id__in?: string | undefined
                owner_id__isnull?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                position__date?: string | undefined
                position__date_or_isnull?: string | undefined
                position__gt?: string | undefined
                position__gt_or_isnull?: string | undefined
                position__gte?: string | undefined
                position__gte_or_isnull?: string | undefined
                position__lt?: string | undefined
                position__lt_or_isnull?: string | undefined
                position__lte?: string | undefined
                position__lte_or_isnull?: string | undefined
                previous_assignees__contained_by?: string | undefined
                previous_assignees__contains?: string | undefined
                previous_assignees__isnull?: boolean | undefined
                previous_assignees__overlap?: string | undefined
                priority?: string | undefined
                priority__gt?: string | undefined
                priority__gte?: string | undefined
                priority__in?: string | undefined
                priority__lt?: string | undefined
                priority__lte?: string | undefined
                receiver?: string | undefined
                receiver__in?: string | undefined
                receiver_id?: string | undefined
                receiver_id__in?: string | undefined
                receiver_id__isnull?: string | undefined
                reference?: string | undefined
                reference__icontains?: string | undefined
                reference__in?: string | undefined
                reference__iregex?: string | undefined
                reference__istartswith?: string | undefined
                reference__search?: string | undefined
                route?: string | undefined
                route__in?: string | undefined
                route_id?: string | undefined
                route_id__in?: string | undefined
                route_id__isnull?: string | undefined
                scheduled_time__date?: string | undefined
                scheduled_time__date_or_isnull?: string | undefined
                scheduled_time__gt?: string | undefined
                scheduled_time__gt_or_isnull?: string | undefined
                scheduled_time__gte?: string | undefined
                scheduled_time__gte_or_isnull?: string | undefined
                scheduled_time__lt?: string | undefined
                scheduled_time__lt_or_isnull?: string | undefined
                scheduled_time__lte?: string | undefined
                scheduled_time__lte_or_isnull?: string | undefined
                search?: string | undefined
                size__contained_by?: string | undefined
                size__contains?: string | undefined
                size__isnull?: boolean | undefined
                size__overlap?: string | undefined
                state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                state__in?: string | undefined
                state__in_or_isnull?: string | undefined
                state__not_in?: string | undefined
                state__not_in_or_isnull?: string | undefined
                task_import?: string | undefined
                task_import__in?: string | undefined
                unassignee_id?: string | undefined
                unassignee_id__in?: string | undefined
                unassignee_id__isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                updated_at_delay_latest?: boolean | undefined
              }
            }
            output: PaginatedTaskExportList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_forms/': {
      $get:
        | {
            input: {
              query: {
                completed?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                task?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedTaskFormList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                completed?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                task?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedTaskFormList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: TaskForm } & {
              form: TaskForm
            }
            output: TaskForm
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: TaskForm } & {
              form: TaskForm
            }
            output: TaskForm
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/task_forms/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskForm
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskForm
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedTaskForm } & { form: PatchedTaskForm }
            output: TaskForm
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedTaskForm } & { form: PatchedTaskForm }
            output: TaskForm
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: TaskForm } & { form: TaskForm }
            output: TaskForm
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: TaskForm } & { form: TaskForm }
            output: TaskForm
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_import/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                started_at__date?: string | undefined
                started_at__date_or_isnull?: string | undefined
                started_at__gt?: string | undefined
                started_at__gt_or_isnull?: string | undefined
                started_at__gte?: string | undefined
                started_at__gte_or_isnull?: string | undefined
                started_at__lt?: string | undefined
                started_at__lt_or_isnull?: string | undefined
                started_at__lte?: string | undefined
                started_at__lte_or_isnull?: string | undefined
                state?: 'pending' | 'started' | 'completed' | 'failed' | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedTasksBackgroundImportList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                failed_at__date?: string | undefined
                failed_at__date_or_isnull?: string | undefined
                failed_at__gt?: string | undefined
                failed_at__gt_or_isnull?: string | undefined
                failed_at__gte?: string | undefined
                failed_at__gte_or_isnull?: string | undefined
                failed_at__lt?: string | undefined
                failed_at__lt_or_isnull?: string | undefined
                failed_at__lte?: string | undefined
                failed_at__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                started_at__date?: string | undefined
                started_at__date_or_isnull?: string | undefined
                started_at__gt?: string | undefined
                started_at__gt_or_isnull?: string | undefined
                started_at__gte?: string | undefined
                started_at__gte_or_isnull?: string | undefined
                started_at__lt?: string | undefined
                started_at__lt_or_isnull?: string | undefined
                started_at__lte?: string | undefined
                started_at__lte_or_isnull?: string | undefined
                state?: 'pending' | 'started' | 'completed' | 'failed' | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedTasksBackgroundImportList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: TasksBackgroundImport
            } & { form: TasksBackgroundImport }
            output: TasksBackgroundImport
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: TasksBackgroundImport
            } & { form: TasksBackgroundImport }
            output: TasksBackgroundImport
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/task_import/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TasksBackgroundImport
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TasksBackgroundImport
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_import_mapping/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                field_names__contained_by?: string | undefined
                field_names__contains?: string | undefined
                field_names__isnull?: boolean | undefined
                field_names__overlap?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedImportMappingList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                field_names__contained_by?: string | undefined
                field_names__contains?: string | undefined
                field_names__isnull?: boolean | undefined
                field_names__overlap?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedImportMappingList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: ImportMapping } & {
              form: ImportMapping
            }
            output: ImportMapping
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: ImportMapping } & {
              form: ImportMapping
            }
            output: ImportMapping
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/task_import_mapping/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: ImportMapping
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: ImportMapping
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_metadatas/': {
      $get:
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                task?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedTaskMetadataList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                task?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedTaskMetadataList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/task_metadatas/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskMetadata
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TaskMetadata
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                account__in?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__in?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__in?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__in?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__in?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__in?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__geocode_failed_at__date?: string | undefined
                address__geocode_failed_at__date_or_isnull?: string | undefined
                address__geocode_failed_at__gt?: string | undefined
                address__geocode_failed_at__gt_or_isnull?: string | undefined
                address__geocode_failed_at__gte?: string | undefined
                address__geocode_failed_at__gte_or_isnull?: string | undefined
                address__geocode_failed_at__lt?: string | undefined
                address__geocode_failed_at__lt_or_isnull?: string | undefined
                address__geocode_failed_at__lte?: string | undefined
                address__geocode_failed_at__lte_or_isnull?: string | undefined
                address__geocoded_at__date?: string | undefined
                address__geocoded_at__date_or_isnull?: string | undefined
                address__geocoded_at__gt?: string | undefined
                address__geocoded_at__gt_or_isnull?: string | undefined
                address__geocoded_at__gte?: string | undefined
                address__geocoded_at__gte_or_isnull?: string | undefined
                address__geocoded_at__lt?: string | undefined
                address__geocoded_at__lt_or_isnull?: string | undefined
                address__geocoded_at__lte?: string | undefined
                address__geocoded_at__lte_or_isnull?: string | undefined
                address__google_place_id?: string | undefined
                address__google_place_id__icontains?: string | undefined
                address__google_place_id__in?: string | undefined
                address__google_place_id__iregex?: string | undefined
                address__google_place_id__istartswith?: string | undefined
                address__google_place_id__search?: string | undefined
                address__house_number?: string | undefined
                address__house_number__icontains?: string | undefined
                address__house_number__in?: string | undefined
                address__house_number__iregex?: string | undefined
                address__house_number__istartswith?: string | undefined
                address__house_number__search?: string | undefined
                address__point_of_interest?: string | undefined
                address__point_of_interest__icontains?: string | undefined
                address__point_of_interest__in?: string | undefined
                address__point_of_interest__iregex?: string | undefined
                address__point_of_interest__istartswith?: string | undefined
                address__point_of_interest__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__in?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__raw_address?: string | undefined
                address__raw_address__icontains?: string | undefined
                address__raw_address__in?: string | undefined
                address__raw_address__iregex?: string | undefined
                address__raw_address__istartswith?: string | undefined
                address__raw_address__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__in?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__in?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                address_data?: string | undefined
                address_id?: string | undefined
                address_id__in?: string | undefined
                address_id__isnull?: string | undefined
                assignee?: string | undefined
                assignee__email?: string | undefined
                assignee__email__icontains?: string | undefined
                assignee__email__iregex?: string | undefined
                assignee__email__isnull?: string | undefined
                assignee__email__istartswith?: string | undefined
                assignee__email__search?: string | undefined
                assignee__first_name?: string | undefined
                assignee__first_name__icontains?: string | undefined
                assignee__first_name__iregex?: string | undefined
                assignee__first_name__isnull?: string | undefined
                assignee__first_name__istartswith?: string | undefined
                assignee__first_name__search?: string | undefined
                assignee__in?: string | undefined
                assignee__last_name?: string | undefined
                assignee__last_name__icontains?: string | undefined
                assignee__last_name__iregex?: string | undefined
                assignee__last_name__isnull?: string | undefined
                assignee__last_name__istartswith?: string | undefined
                assignee__last_name__search?: string | undefined
                assignee__phone?: string | undefined
                assignee__phone__icontains?: string | undefined
                assignee__phone__iregex?: string | undefined
                assignee__phone__isnull?: string | undefined
                assignee__phone__istartswith?: string | undefined
                assignee__phone__search?: string | undefined
                assignee_id?: string | undefined
                assignee_id__in?: string | undefined
                assignee_id__isnull?: string | undefined
                assignee_proximity?: 'away' | 'near' | undefined
                assignee_proximity__in?: string | undefined
                barcodes__contained_by?: string | undefined
                barcodes__contains?: string | undefined
                barcodes__isnull?: boolean | undefined
                barcodes__overlap?: string | undefined
                cancelled_at__date?: string | undefined
                cancelled_at__date_or_isnull?: string | undefined
                cancelled_at__gt?: string | undefined
                cancelled_at__gt_or_isnull?: string | undefined
                cancelled_at__gte?: string | undefined
                cancelled_at__gte_or_isnull?: string | undefined
                cancelled_at__lt?: string | undefined
                cancelled_at__lt_or_isnull?: string | undefined
                cancelled_at__lte?: string | undefined
                cancelled_at__lte_or_isnull?: string | undefined
                category?: 'assignment' | 'pick_up' | 'drop_off' | 'warehouse' | undefined
                category__in?: string | undefined
                complete_after__date?: string | undefined
                complete_after__date_or_isnull?: string | undefined
                complete_after__gt?: string | undefined
                complete_after__gt_or_isnull?: string | undefined
                complete_after__gte?: string | undefined
                complete_after__gte_or_isnull?: string | undefined
                complete_after__lt?: string | undefined
                complete_after__lt_or_isnull?: string | undefined
                complete_after__lte?: string | undefined
                complete_after__lte_or_isnull?: string | undefined
                complete_before__date?: string | undefined
                complete_before__date_or_isnull?: string | undefined
                complete_before__gt?: string | undefined
                complete_before__gt_or_isnull?: string | undefined
                complete_before__gte?: string | undefined
                complete_before__gte_or_isnull?: string | undefined
                complete_before__lt?: string | undefined
                complete_before__lt_or_isnull?: string | undefined
                complete_before__lte?: string | undefined
                complete_before__lte_or_isnull?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__in?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__email?: string | undefined
                contact__email__icontains?: string | undefined
                contact__email__in?: string | undefined
                contact__email__iregex?: string | undefined
                contact__email__istartswith?: string | undefined
                contact__email__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__overlap?: string | undefined
                contact__name?: string | undefined
                contact__name__icontains?: string | undefined
                contact__name__in?: string | undefined
                contact__name__iregex?: string | undefined
                contact__name__istartswith?: string | undefined
                contact__name__search?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__in?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phone?: string | undefined
                contact__phone__icontains?: string | undefined
                contact__phone__in?: string | undefined
                contact__phone__iregex?: string | undefined
                contact__phone__istartswith?: string | undefined
                contact__phone__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__overlap?: string | undefined
                contact_data?: string | undefined
                contact_id?: string | undefined
                contact_id__in?: string | undefined
                contact_id__isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                created_by__isnull?: string | undefined
                cursor?: number | undefined
                description?: string | undefined
                description__icontains?: string | undefined
                description__iregex?: string | undefined
                description__istartswith?: string | undefined
                description__search?: string | undefined
                duration?: string | undefined
                duration__gt?: string | undefined
                duration__gte?: string | undefined
                duration__lt?: string | undefined
                duration__lte?: string | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                external_id__in?: string | undefined
                external_id__iregex?: string | undefined
                external_id__isnull?: string | undefined
                external_id__istartswith?: string | undefined
                external_id__search?: string | undefined
                format?: 'json' | 'xml' | undefined
                id?: string | undefined
                id__in?: string | undefined
                is_optimal?: string | undefined
                is_optimal__isnull?: string | undefined
                metadata__accepted_distance?: string | undefined
                metadata__accepted_distance__gt?: string | undefined
                metadata__accepted_distance__gte?: string | undefined
                metadata__accepted_distance__lt?: string | undefined
                metadata__accepted_distance__lte?: string | undefined
                metadata__accepted_duration?: string | undefined
                metadata__accepted_duration__gt?: string | undefined
                metadata__accepted_duration__gte?: string | undefined
                metadata__accepted_duration__lt?: string | undefined
                metadata__accepted_duration__lte?: string | undefined
                metadata__active_distance?: string | undefined
                metadata__active_distance__gt?: string | undefined
                metadata__active_distance__gte?: string | undefined
                metadata__active_distance__lt?: string | undefined
                metadata__active_distance__lte?: string | undefined
                metadata__active_duration?: string | undefined
                metadata__active_duration__gt?: string | undefined
                metadata__active_duration__gte?: string | undefined
                metadata__active_duration__lt?: string | undefined
                metadata__active_duration__lte?: string | undefined
                metadata__assigned_distance?: string | undefined
                metadata__assigned_distance__gt?: string | undefined
                metadata__assigned_distance__gte?: string | undefined
                metadata__assigned_distance__lt?: string | undefined
                metadata__assigned_distance__lte?: string | undefined
                metadata__assigned_duration?: string | undefined
                metadata__assigned_duration__gt?: string | undefined
                metadata__assigned_duration__gte?: string | undefined
                metadata__assigned_duration__lt?: string | undefined
                metadata__assigned_duration__lte?: string | undefined
                metadata__cancelled_distance?: string | undefined
                metadata__cancelled_distance__gt?: string | undefined
                metadata__cancelled_distance__gte?: string | undefined
                metadata__cancelled_distance__lt?: string | undefined
                metadata__cancelled_distance__lte?: string | undefined
                metadata__cancelled_duration?: string | undefined
                metadata__cancelled_duration__gt?: string | undefined
                metadata__cancelled_duration__gte?: string | undefined
                metadata__cancelled_duration__lt?: string | undefined
                metadata__cancelled_duration__lte?: string | undefined
                metadata__completed_distance?: string | undefined
                metadata__completed_distance__gt?: string | undefined
                metadata__completed_distance__gte?: string | undefined
                metadata__completed_distance__lt?: string | undefined
                metadata__completed_distance__lte?: string | undefined
                metadata__completed_duration?: string | undefined
                metadata__completed_duration__gt?: string | undefined
                metadata__completed_duration__gte?: string | undefined
                metadata__completed_duration__lt?: string | undefined
                metadata__completed_duration__lte?: string | undefined
                metadata__documents_count?: string | undefined
                metadata__documents_count__gt?: string | undefined
                metadata__documents_count__gte?: string | undefined
                metadata__documents_count__lt?: string | undefined
                metadata__documents_count__lte?: string | undefined
                metadata__events_count?: string | undefined
                metadata__events_count__gt?: string | undefined
                metadata__events_count__gte?: string | undefined
                metadata__events_count__lt?: string | undefined
                metadata__events_count__lte?: string | undefined
                metadata__failed_distance?: string | undefined
                metadata__failed_distance__gt?: string | undefined
                metadata__failed_distance__gte?: string | undefined
                metadata__failed_distance__lt?: string | undefined
                metadata__failed_distance__lte?: string | undefined
                metadata__failed_duration?: string | undefined
                metadata__failed_duration__gt?: string | undefined
                metadata__failed_duration__gte?: string | undefined
                metadata__failed_duration__lt?: string | undefined
                metadata__failed_duration__lte?: string | undefined
                metadata__forms_completed_count?: string | undefined
                metadata__forms_completed_count__gt?: string | undefined
                metadata__forms_completed_count__gte?: string | undefined
                metadata__forms_completed_count__lt?: string | undefined
                metadata__forms_completed_count__lte?: string | undefined
                metadata__forms_count?: string | undefined
                metadata__forms_count__gt?: string | undefined
                metadata__forms_count__gte?: string | undefined
                metadata__forms_count__lt?: string | undefined
                metadata__forms_count__lte?: string | undefined
                metadata__last_accepted_at__date?: string | undefined
                metadata__last_accepted_at__date_or_isnull?: string | undefined
                metadata__last_accepted_at__gt?: string | undefined
                metadata__last_accepted_at__gt_or_isnull?: string | undefined
                metadata__last_accepted_at__gte?: string | undefined
                metadata__last_accepted_at__gte_or_isnull?: string | undefined
                metadata__last_accepted_at__lt?: string | undefined
                metadata__last_accepted_at__lt_or_isnull?: string | undefined
                metadata__last_accepted_at__lte?: string | undefined
                metadata__last_accepted_at__lte_or_isnull?: string | undefined
                metadata__last_active_at__date?: string | undefined
                metadata__last_active_at__date_or_isnull?: string | undefined
                metadata__last_active_at__gt?: string | undefined
                metadata__last_active_at__gt_or_isnull?: string | undefined
                metadata__last_active_at__gte?: string | undefined
                metadata__last_active_at__gte_or_isnull?: string | undefined
                metadata__last_active_at__lt?: string | undefined
                metadata__last_active_at__lt_or_isnull?: string | undefined
                metadata__last_active_at__lte?: string | undefined
                metadata__last_active_at__lte_or_isnull?: string | undefined
                metadata__last_assigned_at__date?: string | undefined
                metadata__last_assigned_at__date_or_isnull?: string | undefined
                metadata__last_assigned_at__gt?: string | undefined
                metadata__last_assigned_at__gt_or_isnull?: string | undefined
                metadata__last_assigned_at__gte?: string | undefined
                metadata__last_assigned_at__gte_or_isnull?: string | undefined
                metadata__last_assigned_at__lt?: string | undefined
                metadata__last_assigned_at__lt_or_isnull?: string | undefined
                metadata__last_assigned_at__lte?: string | undefined
                metadata__last_assigned_at__lte_or_isnull?: string | undefined
                metadata__last_cancelled_at__date?: string | undefined
                metadata__last_cancelled_at__date_or_isnull?: string | undefined
                metadata__last_cancelled_at__gt?: string | undefined
                metadata__last_cancelled_at__gt_or_isnull?: string | undefined
                metadata__last_cancelled_at__gte?: string | undefined
                metadata__last_cancelled_at__gte_or_isnull?: string | undefined
                metadata__last_cancelled_at__lt?: string | undefined
                metadata__last_cancelled_at__lt_or_isnull?: string | undefined
                metadata__last_cancelled_at__lte?: string | undefined
                metadata__last_cancelled_at__lte_or_isnull?: string | undefined
                metadata__last_completed_at__date?: string | undefined
                metadata__last_completed_at__date_or_isnull?: string | undefined
                metadata__last_completed_at__gt?: string | undefined
                metadata__last_completed_at__gt_or_isnull?: string | undefined
                metadata__last_completed_at__gte?: string | undefined
                metadata__last_completed_at__gte_or_isnull?: string | undefined
                metadata__last_completed_at__lt?: string | undefined
                metadata__last_completed_at__lt_or_isnull?: string | undefined
                metadata__last_completed_at__lte?: string | undefined
                metadata__last_completed_at__lte_or_isnull?: string | undefined
                metadata__last_failed_at__date?: string | undefined
                metadata__last_failed_at__date_or_isnull?: string | undefined
                metadata__last_failed_at__gt?: string | undefined
                metadata__last_failed_at__gt_or_isnull?: string | undefined
                metadata__last_failed_at__gte?: string | undefined
                metadata__last_failed_at__gte_or_isnull?: string | undefined
                metadata__last_failed_at__lt?: string | undefined
                metadata__last_failed_at__lt_or_isnull?: string | undefined
                metadata__last_failed_at__lte?: string | undefined
                metadata__last_failed_at__lte_or_isnull?: string | undefined
                metadata__last_transit_at__date?: string | undefined
                metadata__last_transit_at__date_or_isnull?: string | undefined
                metadata__last_transit_at__gt?: string | undefined
                metadata__last_transit_at__gt_or_isnull?: string | undefined
                metadata__last_transit_at__gte?: string | undefined
                metadata__last_transit_at__gte_or_isnull?: string | undefined
                metadata__last_transit_at__lt?: string | undefined
                metadata__last_transit_at__lt_or_isnull?: string | undefined
                metadata__last_transit_at__lte?: string | undefined
                metadata__last_transit_at__lte_or_isnull?: string | undefined
                metadata__last_unassigned_at__date?: string | undefined
                metadata__last_unassigned_at__date_or_isnull?: string | undefined
                metadata__last_unassigned_at__gt?: string | undefined
                metadata__last_unassigned_at__gt_or_isnull?: string | undefined
                metadata__last_unassigned_at__gte?: string | undefined
                metadata__last_unassigned_at__gte_or_isnull?: string | undefined
                metadata__last_unassigned_at__lt?: string | undefined
                metadata__last_unassigned_at__lt_or_isnull?: string | undefined
                metadata__last_unassigned_at__lte?: string | undefined
                metadata__last_unassigned_at__lte_or_isnull?: string | undefined
                metadata__signatures_count?: string | undefined
                metadata__signatures_count__gt?: string | undefined
                metadata__signatures_count__gte?: string | undefined
                metadata__signatures_count__lt?: string | undefined
                metadata__signatures_count__lte?: string | undefined
                metadata__task_event_notes_count?: string | undefined
                metadata__task_event_notes_count__gt?: string | undefined
                metadata__task_event_notes_count__gte?: string | undefined
                metadata__task_event_notes_count__lt?: string | undefined
                metadata__task_event_notes_count__lte?: string | undefined
                metadata__transit_distance?: string | undefined
                metadata__transit_distance__gt?: string | undefined
                metadata__transit_distance__gte?: string | undefined
                metadata__transit_distance__lt?: string | undefined
                metadata__transit_distance__lte?: string | undefined
                metadata__transit_duration?: string | undefined
                metadata__transit_duration__gt?: string | undefined
                metadata__transit_duration__gte?: string | undefined
                metadata__transit_duration__lt?: string | undefined
                metadata__transit_duration__lte?: string | undefined
                metadata__unassigned_distance?: string | undefined
                metadata__unassigned_distance__gt?: string | undefined
                metadata__unassigned_distance__gte?: string | undefined
                metadata__unassigned_distance__lt?: string | undefined
                metadata__unassigned_distance__lte?: string | undefined
                metadata__unassigned_duration?: string | undefined
                metadata__unassigned_duration__gt?: string | undefined
                metadata__unassigned_duration__gte?: string | undefined
                metadata__unassigned_duration__lt?: string | undefined
                metadata__unassigned_duration__lte?: string | undefined
                'metafields__namespace:key'?: string | undefined
                order?: string | undefined
                order__auto_assign?: string | undefined
                order__created_at__date?: string | undefined
                order__created_at__date_or_isnull?: string | undefined
                order__created_at__gt?: string | undefined
                order__created_at__gt_or_isnull?: string | undefined
                order__created_at__gte?: string | undefined
                order__created_at__gte_or_isnull?: string | undefined
                order__created_at__lt?: string | undefined
                order__created_at__lt_or_isnull?: string | undefined
                order__created_at__lte?: string | undefined
                order__created_at__lte_or_isnull?: string | undefined
                order__created_by?: string | undefined
                order__created_by__in?: string | undefined
                order__created_by__isnull?: string | undefined
                order__external_id?: string | undefined
                order__external_id__icontains?: string | undefined
                order__external_id__in?: string | undefined
                order__external_id__iregex?: string | undefined
                order__external_id__isnull?: string | undefined
                order__external_id__istartswith?: string | undefined
                order__external_id__search?: string | undefined
                order__in?: string | undefined
                order__orderer?: string | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
                order__reference?: string | undefined
                order__reference__icontains?: string | undefined
                order__reference__in?: string | undefined
                order__reference__iregex?: string | undefined
                order__reference__istartswith?: string | undefined
                order__reference__search?: string | undefined
                order_id?: string | undefined
                order_id__in?: string | undefined
                order_id__isnull?: string | undefined
                orderer?: string | undefined
                orderer__id?: string | undefined
                orderer__id__in?: string | undefined
                orderer__id__isnull?: string | undefined
                orderer__in?: string | undefined
                orderer__name?: string | undefined
                orderer__name__icontains?: string | undefined
                orderer_id?: string | undefined
                orderer_id__in?: string | undefined
                orderer_id__isnull?: string | undefined
                ordering?: string | undefined
                owner_id?: string | undefined
                owner_id__in?: string | undefined
                owner_id__isnull?: string | undefined
                page_size?: number | undefined
                position__date?: string | undefined
                position__date_or_isnull?: string | undefined
                position__gt?: string | undefined
                position__gt_or_isnull?: string | undefined
                position__gte?: string | undefined
                position__gte_or_isnull?: string | undefined
                position__lt?: string | undefined
                position__lt_or_isnull?: string | undefined
                position__lte?: string | undefined
                position__lte_or_isnull?: string | undefined
                previous_assignees__contained_by?: string | undefined
                previous_assignees__contains?: string | undefined
                previous_assignees__isnull?: boolean | undefined
                previous_assignees__overlap?: string | undefined
                priority?: string | undefined
                priority__gt?: string | undefined
                priority__gte?: string | undefined
                priority__in?: string | undefined
                priority__lt?: string | undefined
                priority__lte?: string | undefined
                receiver?: string | undefined
                receiver__in?: string | undefined
                receiver_id?: string | undefined
                receiver_id__in?: string | undefined
                receiver_id__isnull?: string | undefined
                reference?: string | undefined
                reference__icontains?: string | undefined
                reference__in?: string | undefined
                reference__iregex?: string | undefined
                reference__istartswith?: string | undefined
                reference__search?: string | undefined
                route?: string | undefined
                route__in?: string | undefined
                route_id?: string | undefined
                route_id__in?: string | undefined
                route_id__isnull?: string | undefined
                scheduled_time__date?: string | undefined
                scheduled_time__date_or_isnull?: string | undefined
                scheduled_time__gt?: string | undefined
                scheduled_time__gt_or_isnull?: string | undefined
                scheduled_time__gte?: string | undefined
                scheduled_time__gte_or_isnull?: string | undefined
                scheduled_time__lt?: string | undefined
                scheduled_time__lt_or_isnull?: string | undefined
                scheduled_time__lte?: string | undefined
                scheduled_time__lte_or_isnull?: string | undefined
                search?: string | undefined
                size__contained_by?: string | undefined
                size__contains?: string | undefined
                size__isnull?: boolean | undefined
                size__overlap?: string | undefined
                state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                state__in?: string | undefined
                state__in_or_isnull?: string | undefined
                state__not_in?: string | undefined
                state__not_in_or_isnull?: string | undefined
                task_import?: string | undefined
                task_import__in?: string | undefined
                unassignee_id?: string | undefined
                unassignee_id__in?: string | undefined
                unassignee_id__isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                updated_at_delay_latest?: boolean | undefined
              }
            }
            output: PaginatedTaskSerializerV2List
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                account__in?: string | undefined
                address__apartment_number?: string | undefined
                address__apartment_number__icontains?: string | undefined
                address__apartment_number__in?: string | undefined
                address__apartment_number__iregex?: string | undefined
                address__apartment_number__istartswith?: string | undefined
                address__apartment_number__search?: string | undefined
                address__city?: string | undefined
                address__city__icontains?: string | undefined
                address__city__in?: string | undefined
                address__city__iregex?: string | undefined
                address__city__istartswith?: string | undefined
                address__city__search?: string | undefined
                address__country?: string | undefined
                address__country__icontains?: string | undefined
                address__country__in?: string | undefined
                address__country__iregex?: string | undefined
                address__country__istartswith?: string | undefined
                address__country__search?: string | undefined
                address__country_code?: string | undefined
                address__country_code__icontains?: string | undefined
                address__country_code__in?: string | undefined
                address__country_code__iregex?: string | undefined
                address__country_code__istartswith?: string | undefined
                address__country_code__search?: string | undefined
                address__formatted_address?: string | undefined
                address__formatted_address__icontains?: string | undefined
                address__formatted_address__in?: string | undefined
                address__formatted_address__iregex?: string | undefined
                address__formatted_address__istartswith?: string | undefined
                address__formatted_address__search?: string | undefined
                address__geocode_failed_at__date?: string | undefined
                address__geocode_failed_at__date_or_isnull?: string | undefined
                address__geocode_failed_at__gt?: string | undefined
                address__geocode_failed_at__gt_or_isnull?: string | undefined
                address__geocode_failed_at__gte?: string | undefined
                address__geocode_failed_at__gte_or_isnull?: string | undefined
                address__geocode_failed_at__lt?: string | undefined
                address__geocode_failed_at__lt_or_isnull?: string | undefined
                address__geocode_failed_at__lte?: string | undefined
                address__geocode_failed_at__lte_or_isnull?: string | undefined
                address__geocoded_at__date?: string | undefined
                address__geocoded_at__date_or_isnull?: string | undefined
                address__geocoded_at__gt?: string | undefined
                address__geocoded_at__gt_or_isnull?: string | undefined
                address__geocoded_at__gte?: string | undefined
                address__geocoded_at__gte_or_isnull?: string | undefined
                address__geocoded_at__lt?: string | undefined
                address__geocoded_at__lt_or_isnull?: string | undefined
                address__geocoded_at__lte?: string | undefined
                address__geocoded_at__lte_or_isnull?: string | undefined
                address__google_place_id?: string | undefined
                address__google_place_id__icontains?: string | undefined
                address__google_place_id__in?: string | undefined
                address__google_place_id__iregex?: string | undefined
                address__google_place_id__istartswith?: string | undefined
                address__google_place_id__search?: string | undefined
                address__house_number?: string | undefined
                address__house_number__icontains?: string | undefined
                address__house_number__in?: string | undefined
                address__house_number__iregex?: string | undefined
                address__house_number__istartswith?: string | undefined
                address__house_number__search?: string | undefined
                address__point_of_interest?: string | undefined
                address__point_of_interest__icontains?: string | undefined
                address__point_of_interest__in?: string | undefined
                address__point_of_interest__iregex?: string | undefined
                address__point_of_interest__istartswith?: string | undefined
                address__point_of_interest__search?: string | undefined
                address__postal_code?: string | undefined
                address__postal_code__icontains?: string | undefined
                address__postal_code__in?: string | undefined
                address__postal_code__iregex?: string | undefined
                address__postal_code__istartswith?: string | undefined
                address__postal_code__search?: string | undefined
                address__raw_address?: string | undefined
                address__raw_address__icontains?: string | undefined
                address__raw_address__in?: string | undefined
                address__raw_address__iregex?: string | undefined
                address__raw_address__istartswith?: string | undefined
                address__raw_address__search?: string | undefined
                address__state?: string | undefined
                address__state__icontains?: string | undefined
                address__state__in?: string | undefined
                address__state__iregex?: string | undefined
                address__state__istartswith?: string | undefined
                address__state__search?: string | undefined
                address__street?: string | undefined
                address__street__icontains?: string | undefined
                address__street__in?: string | undefined
                address__street__iregex?: string | undefined
                address__street__istartswith?: string | undefined
                address__street__search?: string | undefined
                address_data?: string | undefined
                address_id?: string | undefined
                address_id__in?: string | undefined
                address_id__isnull?: string | undefined
                assignee?: string | undefined
                assignee__email?: string | undefined
                assignee__email__icontains?: string | undefined
                assignee__email__iregex?: string | undefined
                assignee__email__isnull?: string | undefined
                assignee__email__istartswith?: string | undefined
                assignee__email__search?: string | undefined
                assignee__first_name?: string | undefined
                assignee__first_name__icontains?: string | undefined
                assignee__first_name__iregex?: string | undefined
                assignee__first_name__isnull?: string | undefined
                assignee__first_name__istartswith?: string | undefined
                assignee__first_name__search?: string | undefined
                assignee__in?: string | undefined
                assignee__last_name?: string | undefined
                assignee__last_name__icontains?: string | undefined
                assignee__last_name__iregex?: string | undefined
                assignee__last_name__isnull?: string | undefined
                assignee__last_name__istartswith?: string | undefined
                assignee__last_name__search?: string | undefined
                assignee__phone?: string | undefined
                assignee__phone__icontains?: string | undefined
                assignee__phone__iregex?: string | undefined
                assignee__phone__isnull?: string | undefined
                assignee__phone__istartswith?: string | undefined
                assignee__phone__search?: string | undefined
                assignee_id?: string | undefined
                assignee_id__in?: string | undefined
                assignee_id__isnull?: string | undefined
                assignee_proximity?: 'away' | 'near' | undefined
                assignee_proximity__in?: string | undefined
                barcodes__contained_by?: string | undefined
                barcodes__contains?: string | undefined
                barcodes__isnull?: boolean | undefined
                barcodes__overlap?: string | undefined
                cancelled_at__date?: string | undefined
                cancelled_at__date_or_isnull?: string | undefined
                cancelled_at__gt?: string | undefined
                cancelled_at__gt_or_isnull?: string | undefined
                cancelled_at__gte?: string | undefined
                cancelled_at__gte_or_isnull?: string | undefined
                cancelled_at__lt?: string | undefined
                cancelled_at__lt_or_isnull?: string | undefined
                cancelled_at__lte?: string | undefined
                cancelled_at__lte_or_isnull?: string | undefined
                category?: 'assignment' | 'pick_up' | 'drop_off' | 'warehouse' | undefined
                category__in?: string | undefined
                complete_after__date?: string | undefined
                complete_after__date_or_isnull?: string | undefined
                complete_after__gt?: string | undefined
                complete_after__gt_or_isnull?: string | undefined
                complete_after__gte?: string | undefined
                complete_after__gte_or_isnull?: string | undefined
                complete_after__lt?: string | undefined
                complete_after__lt_or_isnull?: string | undefined
                complete_after__lte?: string | undefined
                complete_after__lte_or_isnull?: string | undefined
                complete_before__date?: string | undefined
                complete_before__date_or_isnull?: string | undefined
                complete_before__gt?: string | undefined
                complete_before__gt_or_isnull?: string | undefined
                complete_before__gte?: string | undefined
                complete_before__gte_or_isnull?: string | undefined
                complete_before__lt?: string | undefined
                complete_before__lt_or_isnull?: string | undefined
                complete_before__lte?: string | undefined
                complete_before__lte_or_isnull?: string | undefined
                completed_at__date?: string | undefined
                completed_at__date_or_isnull?: string | undefined
                completed_at__gt?: string | undefined
                completed_at__gt_or_isnull?: string | undefined
                completed_at__gte?: string | undefined
                completed_at__gte_or_isnull?: string | undefined
                completed_at__lt?: string | undefined
                completed_at__lt_or_isnull?: string | undefined
                completed_at__lte?: string | undefined
                completed_at__lte_or_isnull?: string | undefined
                contact__company__icontains?: string | undefined
                contact__company__in?: string | undefined
                contact__company__iregex?: string | undefined
                contact__company__istartswith?: string | undefined
                contact__company__search?: string | undefined
                contact__email?: string | undefined
                contact__email__icontains?: string | undefined
                contact__email__in?: string | undefined
                contact__email__iregex?: string | undefined
                contact__email__istartswith?: string | undefined
                contact__email__search?: string | undefined
                contact__emails__contained_by?: string | undefined
                contact__emails__contains?: string | undefined
                contact__emails__isnull?: boolean | undefined
                contact__emails__overlap?: string | undefined
                contact__name?: string | undefined
                contact__name__icontains?: string | undefined
                contact__name__in?: string | undefined
                contact__name__iregex?: string | undefined
                contact__name__istartswith?: string | undefined
                contact__name__search?: string | undefined
                contact__notes?: string | undefined
                contact__notes__icontains?: string | undefined
                contact__notes__in?: string | undefined
                contact__notes__iregex?: string | undefined
                contact__notes__istartswith?: string | undefined
                contact__notes__search?: string | undefined
                contact__phone?: string | undefined
                contact__phone__icontains?: string | undefined
                contact__phone__in?: string | undefined
                contact__phone__iregex?: string | undefined
                contact__phone__istartswith?: string | undefined
                contact__phone__search?: string | undefined
                contact__phones__contained_by?: string | undefined
                contact__phones__contains?: string | undefined
                contact__phones__isnull?: boolean | undefined
                contact__phones__overlap?: string | undefined
                contact_data?: string | undefined
                contact_id?: string | undefined
                contact_id__in?: string | undefined
                contact_id__isnull?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                created_by?: string | undefined
                created_by__in?: string | undefined
                created_by__isnull?: string | undefined
                cursor?: number | undefined
                description?: string | undefined
                description__icontains?: string | undefined
                description__iregex?: string | undefined
                description__istartswith?: string | undefined
                description__search?: string | undefined
                duration?: string | undefined
                duration__gt?: string | undefined
                duration__gte?: string | undefined
                duration__lt?: string | undefined
                duration__lte?: string | undefined
                external_id?: string | undefined
                external_id__icontains?: string | undefined
                external_id__in?: string | undefined
                external_id__iregex?: string | undefined
                external_id__isnull?: string | undefined
                external_id__istartswith?: string | undefined
                external_id__search?: string | undefined
                format?: 'json' | 'xml' | undefined
                id?: string | undefined
                id__in?: string | undefined
                is_optimal?: string | undefined
                is_optimal__isnull?: string | undefined
                metadata__accepted_distance?: string | undefined
                metadata__accepted_distance__gt?: string | undefined
                metadata__accepted_distance__gte?: string | undefined
                metadata__accepted_distance__lt?: string | undefined
                metadata__accepted_distance__lte?: string | undefined
                metadata__accepted_duration?: string | undefined
                metadata__accepted_duration__gt?: string | undefined
                metadata__accepted_duration__gte?: string | undefined
                metadata__accepted_duration__lt?: string | undefined
                metadata__accepted_duration__lte?: string | undefined
                metadata__active_distance?: string | undefined
                metadata__active_distance__gt?: string | undefined
                metadata__active_distance__gte?: string | undefined
                metadata__active_distance__lt?: string | undefined
                metadata__active_distance__lte?: string | undefined
                metadata__active_duration?: string | undefined
                metadata__active_duration__gt?: string | undefined
                metadata__active_duration__gte?: string | undefined
                metadata__active_duration__lt?: string | undefined
                metadata__active_duration__lte?: string | undefined
                metadata__assigned_distance?: string | undefined
                metadata__assigned_distance__gt?: string | undefined
                metadata__assigned_distance__gte?: string | undefined
                metadata__assigned_distance__lt?: string | undefined
                metadata__assigned_distance__lte?: string | undefined
                metadata__assigned_duration?: string | undefined
                metadata__assigned_duration__gt?: string | undefined
                metadata__assigned_duration__gte?: string | undefined
                metadata__assigned_duration__lt?: string | undefined
                metadata__assigned_duration__lte?: string | undefined
                metadata__cancelled_distance?: string | undefined
                metadata__cancelled_distance__gt?: string | undefined
                metadata__cancelled_distance__gte?: string | undefined
                metadata__cancelled_distance__lt?: string | undefined
                metadata__cancelled_distance__lte?: string | undefined
                metadata__cancelled_duration?: string | undefined
                metadata__cancelled_duration__gt?: string | undefined
                metadata__cancelled_duration__gte?: string | undefined
                metadata__cancelled_duration__lt?: string | undefined
                metadata__cancelled_duration__lte?: string | undefined
                metadata__completed_distance?: string | undefined
                metadata__completed_distance__gt?: string | undefined
                metadata__completed_distance__gte?: string | undefined
                metadata__completed_distance__lt?: string | undefined
                metadata__completed_distance__lte?: string | undefined
                metadata__completed_duration?: string | undefined
                metadata__completed_duration__gt?: string | undefined
                metadata__completed_duration__gte?: string | undefined
                metadata__completed_duration__lt?: string | undefined
                metadata__completed_duration__lte?: string | undefined
                metadata__documents_count?: string | undefined
                metadata__documents_count__gt?: string | undefined
                metadata__documents_count__gte?: string | undefined
                metadata__documents_count__lt?: string | undefined
                metadata__documents_count__lte?: string | undefined
                metadata__events_count?: string | undefined
                metadata__events_count__gt?: string | undefined
                metadata__events_count__gte?: string | undefined
                metadata__events_count__lt?: string | undefined
                metadata__events_count__lte?: string | undefined
                metadata__failed_distance?: string | undefined
                metadata__failed_distance__gt?: string | undefined
                metadata__failed_distance__gte?: string | undefined
                metadata__failed_distance__lt?: string | undefined
                metadata__failed_distance__lte?: string | undefined
                metadata__failed_duration?: string | undefined
                metadata__failed_duration__gt?: string | undefined
                metadata__failed_duration__gte?: string | undefined
                metadata__failed_duration__lt?: string | undefined
                metadata__failed_duration__lte?: string | undefined
                metadata__forms_completed_count?: string | undefined
                metadata__forms_completed_count__gt?: string | undefined
                metadata__forms_completed_count__gte?: string | undefined
                metadata__forms_completed_count__lt?: string | undefined
                metadata__forms_completed_count__lte?: string | undefined
                metadata__forms_count?: string | undefined
                metadata__forms_count__gt?: string | undefined
                metadata__forms_count__gte?: string | undefined
                metadata__forms_count__lt?: string | undefined
                metadata__forms_count__lte?: string | undefined
                metadata__last_accepted_at__date?: string | undefined
                metadata__last_accepted_at__date_or_isnull?: string | undefined
                metadata__last_accepted_at__gt?: string | undefined
                metadata__last_accepted_at__gt_or_isnull?: string | undefined
                metadata__last_accepted_at__gte?: string | undefined
                metadata__last_accepted_at__gte_or_isnull?: string | undefined
                metadata__last_accepted_at__lt?: string | undefined
                metadata__last_accepted_at__lt_or_isnull?: string | undefined
                metadata__last_accepted_at__lte?: string | undefined
                metadata__last_accepted_at__lte_or_isnull?: string | undefined
                metadata__last_active_at__date?: string | undefined
                metadata__last_active_at__date_or_isnull?: string | undefined
                metadata__last_active_at__gt?: string | undefined
                metadata__last_active_at__gt_or_isnull?: string | undefined
                metadata__last_active_at__gte?: string | undefined
                metadata__last_active_at__gte_or_isnull?: string | undefined
                metadata__last_active_at__lt?: string | undefined
                metadata__last_active_at__lt_or_isnull?: string | undefined
                metadata__last_active_at__lte?: string | undefined
                metadata__last_active_at__lte_or_isnull?: string | undefined
                metadata__last_assigned_at__date?: string | undefined
                metadata__last_assigned_at__date_or_isnull?: string | undefined
                metadata__last_assigned_at__gt?: string | undefined
                metadata__last_assigned_at__gt_or_isnull?: string | undefined
                metadata__last_assigned_at__gte?: string | undefined
                metadata__last_assigned_at__gte_or_isnull?: string | undefined
                metadata__last_assigned_at__lt?: string | undefined
                metadata__last_assigned_at__lt_or_isnull?: string | undefined
                metadata__last_assigned_at__lte?: string | undefined
                metadata__last_assigned_at__lte_or_isnull?: string | undefined
                metadata__last_cancelled_at__date?: string | undefined
                metadata__last_cancelled_at__date_or_isnull?: string | undefined
                metadata__last_cancelled_at__gt?: string | undefined
                metadata__last_cancelled_at__gt_or_isnull?: string | undefined
                metadata__last_cancelled_at__gte?: string | undefined
                metadata__last_cancelled_at__gte_or_isnull?: string | undefined
                metadata__last_cancelled_at__lt?: string | undefined
                metadata__last_cancelled_at__lt_or_isnull?: string | undefined
                metadata__last_cancelled_at__lte?: string | undefined
                metadata__last_cancelled_at__lte_or_isnull?: string | undefined
                metadata__last_completed_at__date?: string | undefined
                metadata__last_completed_at__date_or_isnull?: string | undefined
                metadata__last_completed_at__gt?: string | undefined
                metadata__last_completed_at__gt_or_isnull?: string | undefined
                metadata__last_completed_at__gte?: string | undefined
                metadata__last_completed_at__gte_or_isnull?: string | undefined
                metadata__last_completed_at__lt?: string | undefined
                metadata__last_completed_at__lt_or_isnull?: string | undefined
                metadata__last_completed_at__lte?: string | undefined
                metadata__last_completed_at__lte_or_isnull?: string | undefined
                metadata__last_failed_at__date?: string | undefined
                metadata__last_failed_at__date_or_isnull?: string | undefined
                metadata__last_failed_at__gt?: string | undefined
                metadata__last_failed_at__gt_or_isnull?: string | undefined
                metadata__last_failed_at__gte?: string | undefined
                metadata__last_failed_at__gte_or_isnull?: string | undefined
                metadata__last_failed_at__lt?: string | undefined
                metadata__last_failed_at__lt_or_isnull?: string | undefined
                metadata__last_failed_at__lte?: string | undefined
                metadata__last_failed_at__lte_or_isnull?: string | undefined
                metadata__last_transit_at__date?: string | undefined
                metadata__last_transit_at__date_or_isnull?: string | undefined
                metadata__last_transit_at__gt?: string | undefined
                metadata__last_transit_at__gt_or_isnull?: string | undefined
                metadata__last_transit_at__gte?: string | undefined
                metadata__last_transit_at__gte_or_isnull?: string | undefined
                metadata__last_transit_at__lt?: string | undefined
                metadata__last_transit_at__lt_or_isnull?: string | undefined
                metadata__last_transit_at__lte?: string | undefined
                metadata__last_transit_at__lte_or_isnull?: string | undefined
                metadata__last_unassigned_at__date?: string | undefined
                metadata__last_unassigned_at__date_or_isnull?: string | undefined
                metadata__last_unassigned_at__gt?: string | undefined
                metadata__last_unassigned_at__gt_or_isnull?: string | undefined
                metadata__last_unassigned_at__gte?: string | undefined
                metadata__last_unassigned_at__gte_or_isnull?: string | undefined
                metadata__last_unassigned_at__lt?: string | undefined
                metadata__last_unassigned_at__lt_or_isnull?: string | undefined
                metadata__last_unassigned_at__lte?: string | undefined
                metadata__last_unassigned_at__lte_or_isnull?: string | undefined
                metadata__signatures_count?: string | undefined
                metadata__signatures_count__gt?: string | undefined
                metadata__signatures_count__gte?: string | undefined
                metadata__signatures_count__lt?: string | undefined
                metadata__signatures_count__lte?: string | undefined
                metadata__task_event_notes_count?: string | undefined
                metadata__task_event_notes_count__gt?: string | undefined
                metadata__task_event_notes_count__gte?: string | undefined
                metadata__task_event_notes_count__lt?: string | undefined
                metadata__task_event_notes_count__lte?: string | undefined
                metadata__transit_distance?: string | undefined
                metadata__transit_distance__gt?: string | undefined
                metadata__transit_distance__gte?: string | undefined
                metadata__transit_distance__lt?: string | undefined
                metadata__transit_distance__lte?: string | undefined
                metadata__transit_duration?: string | undefined
                metadata__transit_duration__gt?: string | undefined
                metadata__transit_duration__gte?: string | undefined
                metadata__transit_duration__lt?: string | undefined
                metadata__transit_duration__lte?: string | undefined
                metadata__unassigned_distance?: string | undefined
                metadata__unassigned_distance__gt?: string | undefined
                metadata__unassigned_distance__gte?: string | undefined
                metadata__unassigned_distance__lt?: string | undefined
                metadata__unassigned_distance__lte?: string | undefined
                metadata__unassigned_duration?: string | undefined
                metadata__unassigned_duration__gt?: string | undefined
                metadata__unassigned_duration__gte?: string | undefined
                metadata__unassigned_duration__lt?: string | undefined
                metadata__unassigned_duration__lte?: string | undefined
                'metafields__namespace:key'?: string | undefined
                order?: string | undefined
                order__auto_assign?: string | undefined
                order__created_at__date?: string | undefined
                order__created_at__date_or_isnull?: string | undefined
                order__created_at__gt?: string | undefined
                order__created_at__gt_or_isnull?: string | undefined
                order__created_at__gte?: string | undefined
                order__created_at__gte_or_isnull?: string | undefined
                order__created_at__lt?: string | undefined
                order__created_at__lt_or_isnull?: string | undefined
                order__created_at__lte?: string | undefined
                order__created_at__lte_or_isnull?: string | undefined
                order__created_by?: string | undefined
                order__created_by__in?: string | undefined
                order__created_by__isnull?: string | undefined
                order__external_id?: string | undefined
                order__external_id__icontains?: string | undefined
                order__external_id__in?: string | undefined
                order__external_id__iregex?: string | undefined
                order__external_id__isnull?: string | undefined
                order__external_id__istartswith?: string | undefined
                order__external_id__search?: string | undefined
                order__in?: string | undefined
                order__orderer?: string | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
                order__reference?: string | undefined
                order__reference__icontains?: string | undefined
                order__reference__in?: string | undefined
                order__reference__iregex?: string | undefined
                order__reference__istartswith?: string | undefined
                order__reference__search?: string | undefined
                order_id?: string | undefined
                order_id__in?: string | undefined
                order_id__isnull?: string | undefined
                orderer?: string | undefined
                orderer__id?: string | undefined
                orderer__id__in?: string | undefined
                orderer__id__isnull?: string | undefined
                orderer__in?: string | undefined
                orderer__name?: string | undefined
                orderer__name__icontains?: string | undefined
                orderer_id?: string | undefined
                orderer_id__in?: string | undefined
                orderer_id__isnull?: string | undefined
                ordering?: string | undefined
                owner_id?: string | undefined
                owner_id__in?: string | undefined
                owner_id__isnull?: string | undefined
                page_size?: number | undefined
                position__date?: string | undefined
                position__date_or_isnull?: string | undefined
                position__gt?: string | undefined
                position__gt_or_isnull?: string | undefined
                position__gte?: string | undefined
                position__gte_or_isnull?: string | undefined
                position__lt?: string | undefined
                position__lt_or_isnull?: string | undefined
                position__lte?: string | undefined
                position__lte_or_isnull?: string | undefined
                previous_assignees__contained_by?: string | undefined
                previous_assignees__contains?: string | undefined
                previous_assignees__isnull?: boolean | undefined
                previous_assignees__overlap?: string | undefined
                priority?: string | undefined
                priority__gt?: string | undefined
                priority__gte?: string | undefined
                priority__in?: string | undefined
                priority__lt?: string | undefined
                priority__lte?: string | undefined
                receiver?: string | undefined
                receiver__in?: string | undefined
                receiver_id?: string | undefined
                receiver_id__in?: string | undefined
                receiver_id__isnull?: string | undefined
                reference?: string | undefined
                reference__icontains?: string | undefined
                reference__in?: string | undefined
                reference__iregex?: string | undefined
                reference__istartswith?: string | undefined
                reference__search?: string | undefined
                route?: string | undefined
                route__in?: string | undefined
                route_id?: string | undefined
                route_id__in?: string | undefined
                route_id__isnull?: string | undefined
                scheduled_time__date?: string | undefined
                scheduled_time__date_or_isnull?: string | undefined
                scheduled_time__gt?: string | undefined
                scheduled_time__gt_or_isnull?: string | undefined
                scheduled_time__gte?: string | undefined
                scheduled_time__gte_or_isnull?: string | undefined
                scheduled_time__lt?: string | undefined
                scheduled_time__lt_or_isnull?: string | undefined
                scheduled_time__lte?: string | undefined
                scheduled_time__lte_or_isnull?: string | undefined
                search?: string | undefined
                size__contained_by?: string | undefined
                size__contains?: string | undefined
                size__isnull?: boolean | undefined
                size__overlap?: string | undefined
                state?:
                  | 'unassigned'
                  | 'assigned'
                  | 'accepted'
                  | 'transit'
                  | 'active'
                  | 'completed'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                state__in?: string | undefined
                state__in_or_isnull?: string | undefined
                state__not_in?: string | undefined
                state__not_in_or_isnull?: string | undefined
                task_import?: string | undefined
                task_import__in?: string | undefined
                unassignee_id?: string | undefined
                unassignee_id__in?: string | undefined
                unassignee_id__isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                updated_at_delay_latest?: boolean | undefined
              }
            }
            output: PaginatedTaskSerializerV2List
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskSerializerV2 }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskSerializerV2 }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/tasks/reorder/': {
      $post:
        | {
            input: {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskListReorderRequest }
            output: TaskListReorderRequest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskListReorderRequest }
            output: TaskListReorderRequest
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/reposition/': {
      $post:
        | {
            input: {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskSerializerV2 }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskSerializerV2 }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: PatchedTaskSerializerV2 }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: PatchedTaskSerializerV2 }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskSerializerV2 }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskSerializerV2 }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/accept/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/account_change/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAccountChange }
            output: TaskAccountChange
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAccountChange }
            output: TaskAccountChange
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/activate/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/assign/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAssign }
            output: TaskAssign
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAssign }
            output: TaskAssign
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/cancel/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/complete/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/documents/': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/events/': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/fail/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/reject/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/signatures/': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            }
            output: TaskSerializerV2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/transit/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/unaccept/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tasks/:id/unassign/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                format?: 'json' | 'xml' | undefined
                order__orderer__company?: string | undefined
                order__orderer__company__icontains?: string | undefined
                order__orderer__company__iexact?: string | undefined
                order__orderer__company__istartswith?: string | undefined
                order__orderer__emails__contained_by?: string | undefined
                order__orderer__emails__contains?: string | undefined
                order__orderer__emails__overlap?: string | undefined
                order__orderer__name?: string | undefined
                order__orderer__name__icontains?: string | undefined
                order__orderer__name__iexact?: string | undefined
                order__orderer__name__istartswith?: string | undefined
                order__orderer__notes?: string | undefined
                order__orderer__notes__icontains?: string | undefined
                order__orderer__notes__iexact?: string | undefined
                order__orderer__notes__istartswith?: string | undefined
                order__orderer__phones__contained_by?: string | undefined
                order__orderer__phones__contains?: string | undefined
                order__orderer__phones__overlap?: string | undefined
              }
            } & { json: TaskAction }
            output: TaskAction
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/time_location_features/': {
      $get:
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                state?: 'unknown' | 'stopped' | 'moving' | undefined
                time__date?: string | undefined
                time__date_or_isnull?: string | undefined
                time__gt?: string | undefined
                time__gt_or_isnull?: string | undefined
                time__gte?: string | undefined
                time__gte_or_isnull?: string | undefined
                time__lt?: string | undefined
                time__lt_or_isnull?: string | undefined
                time__lte?: string | undefined
                time__lte_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedTimeLocationFeatureList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                state?: 'unknown' | 'stopped' | 'moving' | undefined
                time__date?: string | undefined
                time__date_or_isnull?: string | undefined
                time__gt?: string | undefined
                time__gt_or_isnull?: string | undefined
                time__gte?: string | undefined
                time__gte_or_isnull?: string | undefined
                time__lt?: string | undefined
                time__lt_or_isnull?: string | undefined
                time__lte?: string | undefined
                time__lte_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedTimeLocationFeatureList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: TimeLocationFeature
            } & { form: TimeLocationFeature }
            output: TimeLocationFeature
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & {
              json: TimeLocationFeature
            } & { form: TimeLocationFeature }
            output: TimeLocationFeature
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/time_location_features/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TimeLocationFeature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TimeLocationFeature
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedTimeLocationFeature } & { form: PatchedTimeLocationFeature }
            output: TimeLocationFeature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedTimeLocationFeature } & { form: PatchedTimeLocationFeature }
            output: TimeLocationFeature
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: TimeLocationFeature } & { form: TimeLocationFeature }
            output: TimeLocationFeature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: TimeLocationFeature } & { form: TimeLocationFeature }
            output: TimeLocationFeature
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/time_locations/': {
      $get:
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                state?: 'unknown' | 'stopped' | 'moving' | undefined
                time__date?: string | undefined
                time__date_or_isnull?: string | undefined
                time__gt?: string | undefined
                time__gt_or_isnull?: string | undefined
                time__gte?: string | undefined
                time__gte_or_isnull?: string | undefined
                time__lt?: string | undefined
                time__lt_or_isnull?: string | undefined
                time__lte?: string | undefined
                time__lte_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedTimeLocationList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                state?: 'unknown' | 'stopped' | 'moving' | undefined
                time__date?: string | undefined
                time__date_or_isnull?: string | undefined
                time__gt?: string | undefined
                time__gt_or_isnull?: string | undefined
                time__gte?: string | undefined
                time__gte_or_isnull?: string | undefined
                time__lt?: string | undefined
                time__lt_or_isnull?: string | undefined
                time__lte?: string | undefined
                time__lte_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedTimeLocationList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: TimeLocation } & {
              form: TimeLocation
            }
            output: TimeLocation
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: TimeLocation } & {
              form: TimeLocation
            }
            output: TimeLocation
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/time_locations/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TimeLocation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: TimeLocation
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/trackers/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedTrackerList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: PaginatedTrackerList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Tracker } & {
              form: Tracker
            }
            output: Tracker
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Tracker } & {
              form: Tracker
            }
            output: Tracker
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/trackers/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Tracker
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Tracker
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedTracker } & { form: PatchedTracker }
            output: Tracker
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedTracker } & { form: PatchedTracker }
            output: Tracker
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Tracker } & { form: Tracker }
            output: Tracker
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Tracker } & { form: Tracker }
            output: Tracker
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/trackers/:id/public/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Tracker
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Tracker
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/users/': {
      $get:
        | {
            input: {
              query: {
                cursor?: number | undefined
                format?: 'json' | 'xml' | undefined
                page_size?: number | undefined
                search?: string | undefined
              }
            }
            output: PaginatedUserList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: number | undefined
                format?: 'json' | 'xml' | undefined
                page_size?: number | undefined
                search?: string | undefined
              }
            }
            output: PaginatedUserList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } } & {
              json: AuthenticatedUserCreate
            }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'xml' | undefined } } & {
              json: AuthenticatedUserCreate
            }
            output: User
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/users/:id/': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: User
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: User
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: PatchedAuthenticatedUserUpdate }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: PatchedAuthenticatedUserUpdate }
            output: User
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: AuthenticatedUserUpdate }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: AuthenticatedUserUpdate }
            output: User
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/users/:id/activate/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: UserActivation }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: UserActivation }
            output: User
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/users/:id/on_duty/': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: User
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xml' | undefined } }
            output: User
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: OnDuty }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xml' | undefined }
            } & { json: OnDuty }
            output: User
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/users_on_duty_log/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                account_role?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                mode?: 'online' | 'offline' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                status?: 'on_duty' | 'off_duty' | undefined
                timestamp__date?: string | undefined
                timestamp__date_or_isnull?: string | undefined
                timestamp__gt?: string | undefined
                timestamp__gt_or_isnull?: string | undefined
                timestamp__gte?: string | undefined
                timestamp__gte_or_isnull?: string | undefined
                timestamp__lt?: string | undefined
                timestamp__lt_or_isnull?: string | undefined
                timestamp__lte?: string | undefined
                timestamp__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedWorkingStateList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                account_role?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                mode?: 'online' | 'offline' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                status?: 'on_duty' | 'off_duty' | undefined
                timestamp__date?: string | undefined
                timestamp__date_or_isnull?: string | undefined
                timestamp__gt?: string | undefined
                timestamp__gt_or_isnull?: string | undefined
                timestamp__gte?: string | undefined
                timestamp__gte_or_isnull?: string | undefined
                timestamp__lt?: string | undefined
                timestamp__lt_or_isnull?: string | undefined
                timestamp__lte?: string | undefined
                timestamp__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedWorkingStateList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: WorkingState } & {
              form: WorkingState
            }
            output: WorkingState
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: WorkingState } & {
              form: WorkingState
            }
            output: WorkingState
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/users_on_duty_log/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: WorkingState
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: WorkingState
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                cursor?: number | undefined
                document_events?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                review_events?: string | undefined
                search?: string | undefined
                signature_events?: string | undefined
                state?: 'inactive' | 'active' | 'disabled' | undefined
                task_events?: string | undefined
                version?: string | undefined
              }
            }
            output: PaginatedWebhookList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                cursor?: number | undefined
                document_events?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                review_events?: string | undefined
                search?: string | undefined
                signature_events?: string | undefined
                state?: 'inactive' | 'active' | 'disabled' | undefined
                task_events?: string | undefined
                version?: string | undefined
              }
            }
            output: PaginatedWebhookList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Webhook } & {
              form: Webhook
            }
            output: Webhook
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: Webhook } & {
              form: Webhook
            }
            output: Webhook
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/webhooks/:id/': {
      $delete: {
        input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Webhook
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: Webhook
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedWebhook } & { form: PatchedWebhook }
            output: Webhook
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: PatchedWebhook } & { form: PatchedWebhook }
            output: Webhook
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Webhook } & { form: Webhook }
            output: Webhook
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Webhook } & { form: Webhook }
            output: Webhook
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks/:id/active/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Webhook } & { form: Webhook }
            output: Webhook
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Webhook } & { form: Webhook }
            output: Webhook
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/webhooks/:id/inactive/': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Webhook } & { form: Webhook }
            output: Webhook
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            } & { json: Webhook } & { form: Webhook }
            output: Webhook
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/worker_features/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                account__in?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                state?: 'unknown' | 'stopped' | 'moving' | undefined
                time__date?: string | undefined
                time__date_or_isnull?: string | undefined
                time__gt?: string | undefined
                time__gt_or_isnull?: string | undefined
                time__gte?: string | undefined
                time__gte_or_isnull?: string | undefined
                time__lt?: string | undefined
                time__lt_or_isnull?: string | undefined
                time__lte?: string | undefined
                time__lte_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
                user__in?: string | undefined
              }
            }
            output: PaginatedWorkerFeatureList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                account__in?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                page_size?: number | undefined
                state?: 'unknown' | 'stopped' | 'moving' | undefined
                time__date?: string | undefined
                time__date_or_isnull?: string | undefined
                time__gt?: string | undefined
                time__gt_or_isnull?: string | undefined
                time__gte?: string | undefined
                time__gte_or_isnull?: string | undefined
                time__lt?: string | undefined
                time__lt_or_isnull?: string | undefined
                time__lte?: string | undefined
                time__lte_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
                user?: string | undefined
                user__in?: string | undefined
              }
            }
            output: PaginatedWorkerFeatureList
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/worker_features/:user_id/': {
      $get:
        | {
            input: { param: { user_id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            }
            output: WorkerFeature
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: { format?: 'json' | 'xlsx' | undefined }
            }
            output: WorkerFeature
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/worker_tracks/': {
      $get:
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                end_time__date?: string | undefined
                end_time__date_or_isnull?: string | undefined
                end_time__gt?: string | undefined
                end_time__gt_or_isnull?: string | undefined
                end_time__gte?: string | undefined
                end_time__gte_or_isnull?: string | undefined
                end_time__lt?: string | undefined
                end_time__lt_or_isnull?: string | undefined
                end_time__lte?: string | undefined
                end_time__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                start_time__date?: string | undefined
                start_time__date_or_isnull?: string | undefined
                start_time__gt?: string | undefined
                start_time__gt_or_isnull?: string | undefined
                start_time__gte?: string | undefined
                start_time__gte_or_isnull?: string | undefined
                start_time__lt?: string | undefined
                start_time__lt_or_isnull?: string | undefined
                start_time__lte?: string | undefined
                start_time__lte_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: WorkerTrack[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                end_time__date?: string | undefined
                end_time__date_or_isnull?: string | undefined
                end_time__gt?: string | undefined
                end_time__gt_or_isnull?: string | undefined
                end_time__gte?: string | undefined
                end_time__gte_or_isnull?: string | undefined
                end_time__lt?: string | undefined
                end_time__lt_or_isnull?: string | undefined
                end_time__lte?: string | undefined
                end_time__lte_or_isnull?: string | undefined
                format?: 'json' | 'xlsx' | undefined
                start_time__date?: string | undefined
                start_time__date_or_isnull?: string | undefined
                start_time__gt?: string | undefined
                start_time__gt_or_isnull?: string | undefined
                start_time__gte?: string | undefined
                start_time__gte_or_isnull?: string | undefined
                start_time__lt?: string | undefined
                start_time__lt_or_isnull?: string | undefined
                start_time__lte?: string | undefined
                start_time__lte_or_isnull?: string | undefined
                updated_at__date?: string | undefined
                updated_at__date_or_isnull?: string | undefined
                updated_at__gt?: string | undefined
                updated_at__gt_or_isnull?: string | undefined
                updated_at__gte?: string | undefined
                updated_at__gte_or_isnull?: string | undefined
                updated_at__lt?: string | undefined
                updated_at__lt_or_isnull?: string | undefined
                updated_at__lte?: string | undefined
                updated_at__lte_or_isnull?: string | undefined
              }
            }
            output: WorkerTrack[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/working_state/': {
      $get:
        | {
            input: {
              query: {
                account?: string | undefined
                account_role?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                mode?: 'online' | 'offline' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                status?: 'on_duty' | 'off_duty' | undefined
                timestamp__date?: string | undefined
                timestamp__date_or_isnull?: string | undefined
                timestamp__gt?: string | undefined
                timestamp__gt_or_isnull?: string | undefined
                timestamp__gte?: string | undefined
                timestamp__gte_or_isnull?: string | undefined
                timestamp__lt?: string | undefined
                timestamp__lt_or_isnull?: string | undefined
                timestamp__lte?: string | undefined
                timestamp__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedWorkingStateList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                account?: string | undefined
                account_role?: string | undefined
                created_at__date?: string | undefined
                created_at__date_or_isnull?: string | undefined
                created_at__gt?: string | undefined
                created_at__gt_or_isnull?: string | undefined
                created_at__gte?: string | undefined
                created_at__gte_or_isnull?: string | undefined
                created_at__lt?: string | undefined
                created_at__lt_or_isnull?: string | undefined
                created_at__lte?: string | undefined
                created_at__lte_or_isnull?: string | undefined
                cursor?: number | undefined
                format?: 'json' | 'xlsx' | undefined
                mode?: 'online' | 'offline' | undefined
                ordering?: string | undefined
                page_size?: number | undefined
                status?: 'on_duty' | 'off_duty' | undefined
                timestamp__date?: string | undefined
                timestamp__date_or_isnull?: string | undefined
                timestamp__gt?: string | undefined
                timestamp__gt_or_isnull?: string | undefined
                timestamp__gte?: string | undefined
                timestamp__gte_or_isnull?: string | undefined
                timestamp__lt?: string | undefined
                timestamp__lt_or_isnull?: string | undefined
                timestamp__lte?: string | undefined
                timestamp__lte_or_isnull?: string | undefined
                user?: string | undefined
              }
            }
            output: PaginatedWorkingStateList
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: WorkingState } & {
              form: WorkingState
            }
            output: WorkingState
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { format?: 'json' | 'xlsx' | undefined } } & { json: WorkingState } & {
              form: WorkingState
            }
            output: WorkingState
            outputFormat: 'text'
            status: 201
          }
    }
  } & {
    '/working_state/:id/': {
      $get:
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: WorkingState
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { format?: 'json' | 'xlsx' | undefined } }
            output: WorkingState
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
