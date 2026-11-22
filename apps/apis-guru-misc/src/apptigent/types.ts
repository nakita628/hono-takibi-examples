type InputCollectionModify = {
  index?: string | undefined
  input: string[]
  item?: string | undefined
  items?: string[] | undefined
}
type OutputCollectionResult = { result?: string[] | undefined }
type OutputString = { result?: string | undefined }
type InputCsvConversionJSON = { header: boolean; input: string }
type InputCalculateNumber = { decimals: number; input: number }
type OutputNumber = { result?: number | undefined }
type InputCalculateNumbers = { decimals: number; input: number; value: number }
type InputCalculateSeries = { decimals: number; input: number[] }
type InputCalculateMinMax = { input: number[]; type: 'Minimum' | 'Maximum' }
type InputCalculatePower = { decimals: number; input: number; power: number }
type InputCollectionSearchNumeric = {
  input: number[]
  match: number
  type?: 'Integer' | 'Decimal' | undefined
}
type OutputCollectionNumber = {
  item?: number | undefined
  items?: number[] | undefined
  status?: boolean | undefined
}
type InputCollectionSearch = {
  ignorecase?: true | false | undefined
  input: string[]
  match: string
  trim?: true | false | undefined
}
type OutputCollectionString = {
  item?: string | undefined
  items?: string[] | undefined
  status?: boolean | undefined
}
type InputCollectionConversion = { input: string[]; name: string }
type InputCollectionConversionXML = { child: string; input: string[]; root: string }
type InputStringComparison = {
  compare: string
  input: string
  lower: true | false
  trim: true | false
}
type InputStringContains = { find: string; input: string; lower: true | false }
type InputConvertAngle = {
  input: number
  source:
    | 'Arcminute'
    | 'Arcsecond'
    | 'Centiradian'
    | 'Deciradian'
    | 'Degree'
    | 'Gradian'
    | 'Microdegree'
    | 'Microradian'
    | 'Millidegree'
    | 'Milliradian'
    | 'Nanodegree'
    | 'Nanoradian'
    | 'Radian'
    | 'Revolution'
  target:
    | 'Arcminute'
    | 'Arcsecond'
    | 'Centiradian'
    | 'Deciradian'
    | 'Degree'
    | 'Gradian'
    | 'Microdegree'
    | 'Microradian'
    | 'Millidegree'
    | 'Milliradian'
    | 'Nanodegree'
    | 'Nanoradian'
    | 'Radian'
    | 'Revolution'
}
type InputConvertArea = {
  input: number
  source:
    | 'Acre'
    | 'Hectare'
    | 'SquareCentimeter'
    | 'SquareDecimeter'
    | 'SquareFoot'
    | 'SquareInch'
    | 'SquareKilometer'
    | 'SquareMeter'
    | 'SquareMicrometer'
    | 'SquareMile'
    | 'SquareMillimeter'
    | 'SquareYard'
  target:
    | 'Acre'
    | 'Hectare'
    | 'SquareCentimeter'
    | 'SquareDecimeter'
    | 'SquareFoot'
    | 'SquareInch'
    | 'SquareKilometer'
    | 'SquareMeter'
    | 'SquareMicrometer'
    | 'SquareMile'
    | 'SquareMillimeter'
    | 'SquareYard'
}
type InputCaseConversion = { alphacase: 'Upper' | 'Lower' | 'Title'; input: string }
type InputCurrencyConversion = {
  input: number
  source:
    | 'USD'
    | 'AUD'
    | 'BGN'
    | 'BRL'
    | 'CAD'
    | 'CHF'
    | 'CNY'
    | 'CZK'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'HKD'
    | 'HRK'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'ISK'
    | 'JPY'
    | 'KRW'
    | 'MXN'
    | 'MYR'
    | 'NOK'
    | 'NZD'
    | 'PHP'
    | 'PLN'
    | 'RON'
    | 'RUB'
    | 'SGD'
    | 'SEK'
    | 'THB'
    | 'TRY'
    | 'ZAR'
  target:
    | 'USD'
    | 'AUD'
    | 'BGN'
    | 'BRL'
    | 'CAD'
    | 'CHF'
    | 'CNY'
    | 'CZK'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'HKD'
    | 'HRK'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'ISK'
    | 'JPY'
    | 'KRW'
    | 'MXN'
    | 'MYR'
    | 'NOK'
    | 'NZD'
    | 'PHP'
    | 'PLN'
    | 'RON'
    | 'RUB'
    | 'SGD'
    | 'SEK'
    | 'THB'
    | 'TRY'
    | 'ZAR'
}
type InputConvertDistance = {
  input: number
  source:
    | 'Centimeter'
    | 'Decimeter'
    | 'Fathom'
    | 'Foot'
    | 'Hectometer'
    | 'Inch'
    | 'Kilometer'
    | 'LightYear'
    | 'Meter'
    | 'Micrometer'
    | 'Mile'
    | 'Millimeter'
    | 'Nanometer'
    | 'NauticalMile'
    | 'Yard'
  target:
    | 'Centimeter'
    | 'Decimeter'
    | 'Fathom'
    | 'Foot'
    | 'Hectometer'
    | 'Inch'
    | 'Kilometer'
    | 'LightYear'
    | 'Meter'
    | 'Micrometer'
    | 'Mile'
    | 'Millimeter'
    | 'Nanometer'
    | 'NauticalMile'
    | 'Yard'
}
type InputConvertDuration = {
  input: number
  source:
    | 'Day'
    | 'Hour'
    | 'Microsecond'
    | 'Millisecond'
    | 'Minute'
    | 'Month'
    | 'Nanosecond'
    | 'Second'
    | 'Week'
    | 'Year'
  target:
    | 'Day'
    | 'Hour'
    | 'Microsecond'
    | 'Millisecond'
    | 'Minute'
    | 'Month'
    | 'Nanosecond'
    | 'Second'
    | 'Week'
    | 'Year'
}
type InputConvertEnergy = {
  input: number
  source:
    | 'BritishThermalUnit'
    | 'Calorie'
    | 'ElectronVolt'
    | 'FootPound'
    | 'GigawattHour'
    | 'Joule'
    | 'Kilocalorie'
    | 'Kilojoule'
    | 'KilowattHour'
    | 'Megajoule'
    | 'MegawattHour'
    | 'TerawattHour'
    | 'Therm (EU)'
    | 'Therm (UK)'
    | 'Therm (US)'
    | 'WattHour'
  target:
    | 'BritishThermalUnit'
    | 'Calorie'
    | 'ElectronVolt'
    | 'FootPound'
    | 'GigawattHour'
    | 'Joule'
    | 'Kilocalorie'
    | 'Kilojoule'
    | 'KilowattHour'
    | 'Megajoule'
    | 'MegawattHour'
    | 'TerawattHour'
    | 'Therm (EU)'
    | 'Therm (UK)'
    | 'Therm (US)'
    | 'WattHour'
}
type InputConvertPower = {
  input: number
  source:
    | 'BritishThermalUnitPerHour'
    | 'Decawatt'
    | 'Deciwatt'
    | 'ElectricalHorsepower'
    | 'Femtowatt'
    | 'Gigawatt'
    | 'HydraulicHorsepower'
    | 'Kilowatt'
    | 'MechanicalHorsepower'
    | 'Megawatt'
    | 'Microwatt'
    | 'Milliwatt'
    | 'Nanowatt'
    | 'Petawatt'
    | 'Picowatt'
    | 'Terawatt'
    | 'Watt'
  target:
    | 'BritishThermalUnitPerHour'
    | 'Decawatt'
    | 'Deciwatt'
    | 'ElectricalHorsepower'
    | 'Femtowatt'
    | 'Gigawatt'
    | 'HydraulicHorsepower'
    | 'Kilowatt'
    | 'MechanicalHorsepower'
    | 'Megawatt'
    | 'Microwatt'
    | 'Milliwatt'
    | 'Nanowatt'
    | 'Petawatt'
    | 'Picowatt'
    | 'Terawatt'
    | 'Watt'
}
type InputConvertSpeed = {
  input: number
  source:
    | 'CentimeterPerHour'
    | 'CentimeterPerMinute'
    | 'CentimeterPerSecond'
    | 'DecimeterPerMinute'
    | 'DecimeterPerSecond'
    | 'FootPerHour'
    | 'FootPerMinute'
    | 'FootPerSecond'
    | 'InchPerHour'
    | 'InchPerMinute'
    | 'InchPerSecond'
    | 'KilometerPerHour'
    | 'KilometerPerMinute'
    | 'KilometerPerSecond'
    | 'Knot'
    | 'MeterPerHour'
    | 'MeterPerMinute'
    | 'MeterPerSecond'
    | 'MicrometerPerMinute'
    | 'MicrometerPerSecond'
    | 'MilePerHour'
    | 'MillimeterPerHour'
    | 'MillimeterPerMinute'
    | 'MillimeterPerSecond'
    | 'NanometerPerMinute'
    | 'NanometerPerSecond'
    | 'YardPerHour'
    | 'YardPerMinute'
    | 'YardPerSecond'
  target:
    | 'CentimeterPerHour'
    | 'CentimeterPerMinute'
    | 'CentimeterPerSecond'
    | 'DecimeterPerMinute'
    | 'DecimeterPerSecond'
    | 'FootPerHour'
    | 'FootPerMinute'
    | 'FootPerSecond'
    | 'InchPerHour'
    | 'InchPerMinute'
    | 'InchPerSecond'
    | 'KilometerPerHour'
    | 'KilometerPerMinute'
    | 'KilometerPerSecond'
    | 'Knot'
    | 'MeterPerHour'
    | 'MeterPerMinute'
    | 'MeterPerSecond'
    | 'MicrometerPerMinute'
    | 'MicrometerPerSecond'
    | 'MilePerHour'
    | 'MillimeterPerHour'
    | 'MillimeterPerMinute'
    | 'MillimeterPerSecond'
    | 'NanometerPerMinute'
    | 'NanometerPerSecond'
    | 'YardPerHour'
    | 'YardPerMinute'
    | 'YardPerSecond'
}
type InputConvertTemperature = {
  input: number
  source: 'Celsius' | 'Fahrenheit' | 'Newton' | 'Kelvin'
  target: 'Celsius' | 'Fahrenheit' | 'Newton' | 'Kelvin'
}
type InputConvertVolume = {
  input: number
  source:
    | 'Centiliter'
    | 'CubicCentimeter'
    | 'CubicDecimeter'
    | 'CubicFoot'
    | 'CubicHectometer'
    | 'CubicInch'
    | 'CubicKilometer'
    | 'CubicMeter'
    | 'CubicMillimeter'
    | 'CubicYard'
    | 'Deciliter'
    | 'ImperialBeerBarrel'
    | 'ImperialGallon'
    | 'ImperialOunce'
    | 'ImperialPint'
    | 'Kiloliter'
    | 'Liter'
    | 'Microliter'
    | 'Milliliter'
    | 'Gallon'
    | 'Cup'
    | 'Ounce'
    | 'Pint'
    | 'Quart'
    | 'Tablespoon'
    | 'Teaspoon'
  target:
    | 'Centiliter'
    | 'CubicCentimeter'
    | 'CubicDecimeter'
    | 'CubicFoot'
    | 'CubicHectometer'
    | 'CubicInch'
    | 'CubicKilometer'
    | 'CubicMeter'
    | 'CubicMillimeter'
    | 'CubicYard'
    | 'Deciliter'
    | 'ImperialBeerBarrel'
    | 'ImperialGallon'
    | 'ImperialOunce'
    | 'ImperialPint'
    | 'Kiloliter'
    | 'Liter'
    | 'Microliter'
    | 'Milliliter'
    | 'Gallon'
    | 'Cup'
    | 'Ounce'
    | 'Pint'
    | 'Quart'
    | 'Tablespoon'
    | 'Teaspoon'
}
type InputConvertWeight = {
  input: number
  source:
    | 'Centigram'
    | 'Decagram'
    | 'Decigram'
    | 'Grain'
    | 'Gram'
    | 'Hectogram'
    | 'Kilogram'
    | 'Microgram'
    | 'Milligram'
    | 'Nanogram'
    | 'Ounce'
    | 'Pound'
    | 'Stone'
    | 'Solar Mass'
    | 'Earth Mass'
    | 'Slug'
    | 'Short Ton'
    | 'Long Ton'
    | 'Ton'
    | 'Megaton'
    | 'Short Hundredweight'
    | 'Long Hundredweight'
  target:
    | 'Centigram'
    | 'Decagram'
    | 'Decigram'
    | 'Grain'
    | 'Gram'
    | 'Hectogram'
    | 'Kilogram'
    | 'Microgram'
    | 'Milligram'
    | 'Nanogram'
    | 'Ounce'
    | 'Pound'
    | 'Stone'
    | 'Ton'
}
type InputCollectionCount = { input: string[] }
type InputDateTimeDifference = { dateTime1: string; dateTime2: string }
type OutputDateDifference = {
  days?: number | undefined
  hours?: number | undefined
  milliseconds?: number | undefined
  minutes?: number | undefined
  months?: number | undefined
  ticks?: number | undefined
  totalDays?: number | undefined
  totalHours?: number | undefined
  totalMilliseconds?: number | undefined
  totalMinutes?: number | undefined
  totalMonths?: number | undefined
  totalSeconds?: number | undefined
  totalYears?: number | undefined
  years?: number | undefined
}
type InputDateTimeInfo = {
  culture:
    | 'en-US'
    | 'af-ZA'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'az-AZ'
    | 'be-BY'
    | 'bg-BG'
    | 'bs-BA'
    | 'ca-ES'
    | 'cs-CZ'
    | 'cy-GB'
    | 'da-DK'
    | 'de-AT'
    | 'de-CH'
    | 'de-DE'
    | 'de-LI'
    | 'de-LU'
    | 'el-GR'
    | 'en-AU'
    | 'en-BZ'
    | 'en-CA'
    | 'en-CB'
    | 'en-GB'
    | 'en-IE'
    | 'en-JM'
    | 'en-NZ'
    | 'en-PH'
    | 'en-TT'
    | 'en-ZA'
    | 'en-ZW'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-DO'
    | 'es-EC'
    | 'es-ES'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-UY'
    | 'es-VE'
    | 'et-EE'
    | 'eu-ES'
    | 'fa-IR'
    | 'fi-FI'
    | 'fo-FO'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-CH'
    | 'fr-FR'
    | 'fr-LU'
    | 'fr-MC'
    | 'gl-ES'
    | 'gu-IN'
    | 'he-IL'
    | 'hi-IN'
    | 'hr-BA'
    | 'hr-HR'
    | 'hu-HU'
    | 'hy-AM'
    | 'id-ID'
    | 'is-IS'
    | 'it-CH'
    | 'it-IT'
    | 'ja-JP'
    | 'ka-GE'
    | 'kk-KZ'
    | 'kn-IN'
    | 'ko-KR'
    | 'ky-KG'
    | 'lt-LT'
    | 'lv-LV'
    | 'mi-NZ'
    | 'mn-MN'
    | 'mr-IN'
    | 'ms-BN'
    | 'ms-MY'
    | 'mt-MT'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn-NO'
    | 'ns-ZA'
    | 'pa-IN'
    | 'pl-PL'
    | 'ps-AR'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'sa-IN'
    | 'sk-SK'
    | 'sl-SI'
    | 'sq-AL'
    | 'sr-BA'
    | 'sr-SP'
    | 'sv-FI'
    | 'sv-SE'
    | 'sw-KE'
    | 'ta-IN'
    | 'te-IN'
    | 'th-TH'
    | 'tl-PH'
    | 'tn-ZA'
    | 'tr-TR'
    | 'uk-UA'
    | 'ur-PK'
    | 'uz-UZ'
    | 'vi-VN'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-MO'
    | 'zh-SG'
    | 'zh-TW'
    | 'zu-ZA'
  input: string
}
type OutputDateInfo = {
  DayOfWeek?: number | undefined
  DayOfYear?: number | undefined
  MinutesInDay?: number | undefined
  SecondsInDay?: number | undefined
  Ticks?: number | undefined
  WeekOfYear?: number | undefined
}
type InputString = { source: string }
type InputCollectionFilter = { input: string[]; keywords: string; match: 'Any' | 'All' | 'None' }
type InputCurrencyFormat = {
  input: number
  target:
    | 'USD'
    | 'AUD'
    | 'BGN'
    | 'BRL'
    | 'CAD'
    | 'CHF'
    | 'CNY'
    | 'CZK'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'HKD'
    | 'HRK'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'ISK'
    | 'JPY'
    | 'KRW'
    | 'MXN'
    | 'MYR'
    | 'NOK'
    | 'NZD'
    | 'PHP'
    | 'PLN'
    | 'RON'
    | 'RUB'
    | 'SGD'
    | 'SEK'
    | 'THB'
    | 'TRY'
    | 'ZAR'
}
type InputDateTimeFormat = {
  culture:
    | 'en-US'
    | 'af-ZA'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'az-AZ'
    | 'be-BY'
    | 'bg-BG'
    | 'bs-BA'
    | 'ca-ES'
    | 'cs-CZ'
    | 'cy-GB'
    | 'da-DK'
    | 'de-AT'
    | 'de-CH'
    | 'de-DE'
    | 'de-LI'
    | 'de-LU'
    | 'el-GR'
    | 'en-AU'
    | 'en-BZ'
    | 'en-CA'
    | 'en-CB'
    | 'en-GB'
    | 'en-IE'
    | 'en-JM'
    | 'en-NZ'
    | 'en-PH'
    | 'en-TT'
    | 'en-ZA'
    | 'en-ZW'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-DO'
    | 'es-EC'
    | 'es-ES'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-UY'
    | 'es-VE'
    | 'et-EE'
    | 'eu-ES'
    | 'fa-IR'
    | 'fi-FI'
    | 'fo-FO'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-CH'
    | 'fr-FR'
    | 'fr-LU'
    | 'fr-MC'
    | 'gl-ES'
    | 'gu-IN'
    | 'he-IL'
    | 'hi-IN'
    | 'hr-BA'
    | 'hr-HR'
    | 'hu-HU'
    | 'hy-AM'
    | 'id-ID'
    | 'is-IS'
    | 'it-CH'
    | 'it-IT'
    | 'ja-JP'
    | 'ka-GE'
    | 'kk-KZ'
    | 'kn-IN'
    | 'ko-KR'
    | 'ky-KG'
    | 'lt-LT'
    | 'lv-LV'
    | 'mi-NZ'
    | 'mn-MN'
    | 'mr-IN'
    | 'ms-BN'
    | 'ms-MY'
    | 'mt-MT'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn-NO'
    | 'ns-ZA'
    | 'pa-IN'
    | 'pl-PL'
    | 'ps-AR'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'sa-IN'
    | 'sk-SK'
    | 'sl-SI'
    | 'sq-AL'
    | 'sr-BA'
    | 'sr-SP'
    | 'sv-FI'
    | 'sv-SE'
    | 'sw-KE'
    | 'ta-IN'
    | 'te-IN'
    | 'th-TH'
    | 'tl-PH'
    | 'tn-ZA'
    | 'tr-TR'
    | 'uk-UA'
    | 'ur-PK'
    | 'uz-UZ'
    | 'vi-VN'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-MO'
    | 'zh-SG'
    | 'zh-TW'
    | 'zu-ZA'
  format: string
  input: string
}
type InputGenerateUniqueID = { uppercase: true | false }
type InputGenerateHash = {
  algorithm: 'MD5' | 'SHA1' | 'SHA256' | 'SHA384' | 'SHA512'
  input: string
}
type InputQRCode = {
  input: string
  payload:
    | 'Plain Text (string)'
    | 'Bitcoin Payment (address|amount|label|message)'
    | 'Bookmark (url|title)'
    | "Calendar Event (subject|description|location|start|end|allDayEvent['true' or 'false']|format ['universal' or 'iCal'])"
    | 'Geolocation (latitude|longitude)'
    | 'Mail (recipient|subject|message)'
    | 'Phone Number (string)'
    | 'SMS (number|message)'
    | 'URL (string)'
    | "WiFi (ssid|password|authenticationMode ['WEP', 'WPA' or 'WPA2'])"
}
type InputJsonConversionCSV = {
  header: boolean
  input: string
  omit?: string | undefined
  order?: string | undefined
}
type InputJsonConversionHTML = {
  alternate?: string | undefined
  attributes?: string | undefined
  header: boolean
  input: string
  omit?: string | undefined
  order?: string | undefined
}
type InputJsonConversionXML = { input: string; root: string }
type InputJoinStrings = {
  input: string[]
  lower: true | false
  separator: string
  trim: true | false
}
type InputMarketIndex = {
  date?: string | undefined
  symbol:
    | 'DJA.INDX (Dow Jones Composite Average)'
    | 'DJI.INDX (Dow Jones Industrial Average)'
    | 'DJT.INDX (Dow Jones Transportation)'
    | 'DJUS.INDX (Dow Jones US)'
    | 'DXY.INDX (US Dollar Index)'
    | 'GDOW.INDX (Global Dow USD)'
    | 'NY.INDX (NYSE US 100 Index)'
    | 'NYA.INDX (NYSE Composite)'
    | 'IXIC.INDX (NASDAQ Composite)'
    | 'NDX.INDX (NASDAQ 100)'
    | 'GSPC.INDX (S&P 500)'
    | 'ES.INDX (S&P 500 Futures)'
    | 'MID.INDX (S&P Midcap 400)'
    | 'GPTSE.INDX (S&P TSX Composite Index [Canada])'
    | 'FTSE.INDX (FTSE 100 Index [UK])'
    | 'CDAXX.INDX (DAX Composite Index [Germany])'
    | 'GDAXI.INDX (DAX Index [Germany])'
    | 'HSCE.INDX (Hang Seng China Enterprise (CEI))'
    | 'HSI.INDX (Hang Seng Index [Hong Kong])'
    | 'N100.INDX (EuroNext 100)'
    | 'N225.INDX (Nikkei 225 Index)'
    | 'RTSI.INDX (RTSI Index [Russia])'
    | 'SSEC.INDX (Shanghai Composite)'
    | 'SSMI.INDX (Swiss Market Index)'
}
type OutputMarketIndex = {
  adj_close?: number | undefined
  adj_high?: number | undefined
  adj_low?: number | undefined
  adj_open?: number | undefined
  adj_volume?: number | undefined
  close?: number | undefined
  date?: string | undefined
  exchange?: string | undefined
  high?: number | undefined
  low?: number | undefined
  open?: number | undefined
  symbol?: string | undefined
  volume?: number | undefined
}
type InputDataQuery = { input: string; query: string }
type InputNumberRange = { end: number; start: number }
type InputRedactString = {
  regex?: string | undefined
  source: string
  value?: string | undefined
  values?: string[] | undefined
}
type InputReplaceString = { replacement: string; source: string; value: string }
type InputCollectionReplace = {
  ignoreCase: true | false
  input: string[]
  match: string
  replacement: string
}
type InputCollectionSort = { input: string[]; order: 'Ascending' | 'Descending' }
type InputCollectionSplit = {
  index?: string | undefined
  input: string[]
  match?: string | undefined
}
type OutputMultiCollection = { result1?: string[] | undefined; result2?: string[] | undefined }
type InputSplitString = { characters: string; input: string }
type OutputStringArray = { data?: string[] | undefined }
type InputStockPrices = {
  date?: string | undefined
  exchange?:
    | 'XNYS (New York Stock Exchange)'
    | 'XNAS (NASDAQ Stock Exchange)'
    | 'XBRU (Euronext Brussels)'
    | 'XTSE (Toronto Stock Exchange)'
    | 'XCNQ (Candadian Securities Exchange)'
    | 'XSHG (Shanghai Stock Exchange)'
    | 'XCSE (Copenhagen Stock Exchange)'
    | 'XPAR (Euronext Paris)'
    | 'XFRA (Deutsche Borse)'
    | 'XHKG (Hong Kong Stock Exchange)'
    | 'XNSE (National Stock Exchange India)'
    | 'XTAE (Tel Aviv Stock Exchange)'
    | 'XNGO (Nagoya Stock Exchange)'
    | 'XFKA (Fukuoka Stock Exchange)'
    | 'XSAP (Sapporo Stock Exchange)'
    | 'XMEX (Mexican Stock Exchange)'
    | 'XNZE (New Zealand Stock Exchange)'
    | 'XLIS (Euronext Lisbon)'
    | 'MISX (Moscow Stock Exchange)'
    | 'XSES (Singapore Stock Exchange)'
    | 'XLON (London Stock Exchange)'
    | 'XASE (American Stock Exchange)'
    | 'XASX (Australia Stock Exchange)'
    | 'XDFM (Dubai Financial Market)'
    | 'XBKK (Stock Exchange of Thailand)'
    | 'XSWX (SIX Swiss Exchange)'
    | 'XSTO (Stockholm Stock Exchange)'
    | 'BMEX (Bolsas y Mercados Españoles)'
    | 'XJSE (Johannesburg Stock Exchange)'
    | undefined
  symbols: string
}
type OutputStockPrice = {
  result?:
    | {
        close?: number | undefined
        date?: string | undefined
        exchange?: string | undefined
        high?: number | undefined
        low?: number | undefined
        open?: number | undefined
        symbol?: string | undefined
        volume?: number | undefined
      }[]
    | undefined
}
type InputStringToFile = {
  extension: 'TXT' | 'CSV' | 'HTML' | 'XML' | 'CSS' | 'JSON' | 'JS'
  filename: string
  input: string
}
type InputTextToSpeech = {
  text: string
  type: 'PlainText' | 'SSML'
  voice:
    | 'ar-EG, Hoda (Female)'
    | 'ar-SA, Naayf (Male)'
    | 'bg-BG, Ivan (Male)'
    | 'ca-ES, Herena (Female)'
    | 'cs-CZ, Jakub (Male)'
    | 'da-DK, Helle (Female)'
    | 'de-AT, Michael (Male)'
    | 'de-CH, Karsten (Male)'
    | 'de-DE, Hedda (Female)'
    | 'de-DE, Stefan (Male)'
    | 'el-GR, Stefanos (Male)'
    | 'en-AU, Catherine (Female)'
    | 'en-AU, Hayley (Female)'
    | 'en-CA, Heather (Female)'
    | 'en-CA, Linda (Female)'
    | 'en-GB, George (Male)'
    | 'en-GB, Hazel (Female)'
    | 'en-GB, Susan (Female)'
    | 'en-IE, Sean (Male)'
    | 'en-IN, Heera (Female)'
    | 'en-IN, Priya (Female)'
    | 'en-IN, Ravi (Male)'
    | 'en-US, Aria (Female)'
    | 'en-US, Benjamin (Male)'
    | 'en-US, Guy (Male)'
    | 'en-US, Zira (Female)'
    | 'es-ES, Helena (Female)'
    | 'es-ES, Laura (Female)'
    | 'es-ES, Pablo (Male)'
    | 'es-MX, Hilda (Female)'
    | 'es-MX, Raul (Male)'
    | 'fi-FI, Heidi (Female)'
    | 'fr-CA, Caroline (Female)'
    | 'fr-CA, Harmonie (Female)'
    | 'fr-CH, Guillaume (Male)'
    | 'fr-FR, Hortense (Female)'
    | 'fr-FR, Julie (Female)'
    | 'fr-FR, Paul (Male)'
    | 'he-IL, Asaf (Male)'
    | 'hi-IN, Hemant (Male)'
    | 'hi-IN, Kalpana (Female)'
    | 'hr-HR, Matej (Male)'
    | 'hu-HU, Szabolcs (Male)'
    | 'id-ID, Andika (Male)'
    | 'it-IT, Cosimo (Male)'
    | 'it-IT, Lucia (Female)'
    | 'ja-JP, Ayumi (Female)'
    | 'ja-JP, Haruka (Female)'
    | 'ja-JP, Ichiro (Male)'
    | 'ko-KR, Heami (Female)'
    | 'ms-MY, Rizwan (Male)'
    | 'nb-NO, Hulda (Female)'
    | 'nl-NL, Hanna (Female)'
    | 'pl-PL, Paulina (Female)'
    | 'pt-BR, Daniel (Male)'
    | 'pt-BR, Heloisa (Female)'
    | 'pt-PT, Helia (Female)'
    | 'ro-RO, Andrei (Male)'
    | 'ru-RU, Ekaterina (Female)'
    | 'ru-RU, Irina (Female)'
    | 'ru-RU, Pavel (Male)'
    | 'sk-SK, Filip (Male)'
    | 'sl-SI, Lado (Male)'
    | 'sv-SE, Hedvig (Female)'
    | 'ta-IN, Valluvar (Male)'
    | 'te-IN, Chitra (Female)'
    | 'th-TH, Pattara (Male)'
    | 'tr-TR, Seda (Female)'
    | 'vi-VN, An (Male)'
    | 'zh-CN, Huihui (Female)'
    | 'zh-CN, Kangkang (Male)'
    | 'zh-CN, Yaoyao (Female)'
    | 'zh-HK, Danny (Male)'
    | 'zh-HK, Tracy (Female)'
    | 'zh-TW, HanHan (Female)'
    | 'zh-TW, Yating (Female)'
    | 'zh-TW, Zhiwei (Male)'
}
type InputTranslateString = {
  input: string
  language:
    | 'Arabic'
    | 'Chinese (Simplified)'
    | 'Czech'
    | 'Danish'
    | 'Dutch'
    | 'English'
    | 'Finnish'
    | 'French'
    | 'German'
    | 'Greek'
    | 'Hindi'
    | 'Hungarian'
    | 'Italian'
    | 'Japanese'
    | 'Klingon'
    | 'Korean'
    | 'Norweigan'
    | 'Polish'
    | 'Portuguese'
    | 'Russian'
    | 'Spanish'
    | 'Swedish'
    | 'Turkish'
    | 'Vietnamese'
    | 'Welsh'
}
type InputTrimString = { source: string; type: 'Start' | 'End' | 'Both' }
type InputVerifyHash = {
  algorithm: 'MD5' | 'SHA1' | 'SHA256' | 'SHA384' | 'SHA512'
  hash: string
  input: string
}
type OutputBoolean = { result?: boolean | undefined }
type InputDateTimeConversion = {
  format?: string | undefined
  input: string
  source:
    | 'GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London'
    | 'Greenwich Standard Time - (GMT) Monrovia, Reykjavik'
    | 'W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna'
    | 'Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague'
    | 'Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb'
    | 'W. Central Africa Standard Time - (GMT+01:00) West Central Africa'
    | 'GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul'
    | 'Middle East Standard Time - (GMT+02:00) Beirut'
    | 'Egypt Standard Time - (GMT+02:00) Cairo'
    | 'South Africa Standard Time - (GMT+02:00) Harare, Pretoria'
    | 'FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius'
    | 'Israel Standard Time - (GMT+02:00) Jerusalem'
    | 'E. Europe Standard Time - (GMT+02:00) Minsk'
    | 'Namibia Standard Time - (GMT+02:00) Windhoek'
    | 'Arabic Standard Time - (GMT+03:00) Baghdad'
    | 'Arab Standard Time - (GMT+03:00) Kuwait, Riyadh'
    | 'Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd'
    | 'E. Africa Standard Time - (GMT+03:00) Nairobi'
    | 'Georgian Standard Time - (GMT+03:00) Tbilisi'
    | 'Iran Standard Time - (GMT+03:30) Tehran'
    | 'Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat'
    | 'Azerbaijan Standard Time - (GMT+04:00) Baku'
    | 'Mauritius Standard Time - (GMT+04:00) Port Louis'
    | 'Caucasus Standard Time - (GMT+04:00) Yerevan'
    | 'Afghanistan Standard Time - (GMT+04:30) Kabul'
    | 'Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg'
    | 'Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi'
    | 'West Asia Standard Time - (GMT+05:00) Tashkent'
    | 'India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi'
    | 'Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura'
    | 'Nepal Standard Time - (GMT+05:45) Kathmandu'
    | 'N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk'
    | 'Central Asia Standard Time - (GMT+06:00) Astana, Dhaka'
    | 'Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)'
    | 'SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta'
    | 'North Asia Standard Time - (GMT+07:00) Krasnoyarsk'
    | 'China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi'
    | 'North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar'
    | 'Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore'
    | 'W. Australia Standard Time - (GMT+08:00) Perth'
    | 'Taipei Standard Time - (GMT+08:00) Taipei'
    | 'Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo'
    | 'Korea Standard Time - (GMT+09:00) Seoul'
    | 'Yakutsk Standard Time - (GMT+09:00) Yakutsk'
    | 'Cen. Australia Standard Time - (GMT+09:30) Adelaide'
    | 'AUS Central Standard Time - (GMT+09:30) Darwin'
    | 'E. Australia Standard Time - (GMT+10:00) Brisbane'
    | 'AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney'
    | 'West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby'
    | 'Tasmania Standard Time - (GMT+10:00) Hobart'
    | 'Vladivostok Standard Time - (GMT+10:00) Vladivostok'
    | 'Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia'
    | 'New Zealand Standard Time - (GMT+12:00) Auckland, Wellington'
    | 'Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.'
    | "Tonga Standard Time - (GMT+13:00) Nuku'alofa"
    | 'Azores Standard Time - (GMT-01:00) Azores'
    | 'Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.'
    | 'Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic'
    | 'E. South America Standard Time - (GMT-03:00) Brasilia'
    | 'Argentina Standard Time - (GMT-03:00) Buenos Aires'
    | 'SA Eastern Standard Time - (GMT-03:00) Georgetown'
    | 'Greenland Standard Time - (GMT-03:00) Greenland'
    | 'Montevideo Standard Time - (GMT-03:00) Montevideo'
    | 'Newfoundland Standard Time - (GMT-03:30) Newfoundland'
    | 'Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)'
    | 'SA Western Standard Time - (GMT-04:00) La Paz'
    | 'Central Brazilian Standard Time - (GMT-04:00) Manaus'
    | 'Pacific SA Standard Time - (GMT-04:00) Santiago'
    | 'Venezuela Standard Time - (GMT-04:30) Caracas'
    | 'SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco'
    | 'Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)'
    | 'US Eastern Standard Time - (GMT-05:00) Indiana (East)'
    | 'Central America Standard Time - (GMT-06:00) Central America'
    | 'Central Standard Time - (GMT-06:00) Central Time (US & Canada)'
    | 'Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey'
    | 'Canada Central Standard Time - (GMT-06:00) Saskatchewan'
    | 'US Mountain Standard Time - (GMT-07:00) Arizona'
    | 'Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan'
    | 'Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)'
    | 'Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)'
    | 'Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California'
    | 'Alaskan Standard Time - (GMT-09:00) Alaska'
    | 'Hawaiian Standard Time - (GMT-10:00) Hawaii'
    | 'Samoa Standard Time - (GMT-11:00) Midway Island, Samoa'
    | 'Dateline Standard Time - (GMT-12:00) International Date Line West'
  target:
    | 'GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London'
    | 'Greenwich Standard Time - (GMT) Monrovia, Reykjavik'
    | 'W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna'
    | 'Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague'
    | 'Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb'
    | 'W. Central Africa Standard Time - (GMT+01:00) West Central Africa'
    | 'GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul'
    | 'Middle East Standard Time - (GMT+02:00) Beirut'
    | 'Egypt Standard Time - (GMT+02:00) Cairo'
    | 'South Africa Standard Time - (GMT+02:00) Harare, Pretoria'
    | 'FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius'
    | 'Israel Standard Time - (GMT+02:00) Jerusalem'
    | 'E. Europe Standard Time - (GMT+02:00) Minsk'
    | 'Namibia Standard Time - (GMT+02:00) Windhoek'
    | 'Arabic Standard Time - (GMT+03:00) Baghdad'
    | 'Arab Standard Time - (GMT+03:00) Kuwait, Riyadh'
    | 'Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd'
    | 'E. Africa Standard Time - (GMT+03:00) Nairobi'
    | 'Georgian Standard Time - (GMT+03:00) Tbilisi'
    | 'Iran Standard Time - (GMT+03:30) Tehran'
    | 'Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat'
    | 'Azerbaijan Standard Time - (GMT+04:00) Baku'
    | 'Mauritius Standard Time - (GMT+04:00) Port Louis'
    | 'Caucasus Standard Time - (GMT+04:00) Yerevan'
    | 'Afghanistan Standard Time - (GMT+04:30) Kabul'
    | 'Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg'
    | 'Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi'
    | 'West Asia Standard Time - (GMT+05:00) Tashkent'
    | 'India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi'
    | 'Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura'
    | 'Nepal Standard Time - (GMT+05:45) Kathmandu'
    | 'N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk'
    | 'Central Asia Standard Time - (GMT+06:00) Astana, Dhaka'
    | 'Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)'
    | 'SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta'
    | 'North Asia Standard Time - (GMT+07:00) Krasnoyarsk'
    | 'China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi'
    | 'North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar'
    | 'Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore'
    | 'W. Australia Standard Time - (GMT+08:00) Perth'
    | 'Taipei Standard Time - (GMT+08:00) Taipei'
    | 'Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo'
    | 'Korea Standard Time - (GMT+09:00) Seoul'
    | 'Yakutsk Standard Time - (GMT+09:00) Yakutsk'
    | 'Cen. Australia Standard Time - (GMT+09:30) Adelaide'
    | 'AUS Central Standard Time - (GMT+09:30) Darwin'
    | 'E. Australia Standard Time - (GMT+10:00) Brisbane'
    | 'AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney'
    | 'West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby'
    | 'Tasmania Standard Time - (GMT+10:00) Hobart'
    | 'Vladivostok Standard Time - (GMT+10:00) Vladivostok'
    | 'Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia'
    | 'New Zealand Standard Time - (GMT+12:00) Auckland, Wellington'
    | 'Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.'
    | "Tonga Standard Time - (GMT+13:00) Nuku'alofa"
    | 'Azores Standard Time - (GMT-01:00) Azores'
    | 'Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.'
    | 'Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic'
    | 'E. South America Standard Time - (GMT-03:00) Brasilia'
    | 'Argentina Standard Time - (GMT-03:00) Buenos Aires'
    | 'SA Eastern Standard Time - (GMT-03:00) Georgetown'
    | 'Greenland Standard Time - (GMT-03:00) Greenland'
    | 'Montevideo Standard Time - (GMT-03:00) Montevideo'
    | 'Newfoundland Standard Time - (GMT-03:30) Newfoundland'
    | 'Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)'
    | 'SA Western Standard Time - (GMT-04:00) La Paz'
    | 'Central Brazilian Standard Time - (GMT-04:00) Manaus'
    | 'Pacific SA Standard Time - (GMT-04:00) Santiago'
    | 'Venezuela Standard Time - (GMT-04:30) Caracas'
    | 'SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco'
    | 'Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)'
    | 'US Eastern Standard Time - (GMT-05:00) Indiana (East)'
    | 'Central America Standard Time - (GMT-06:00) Central America'
    | 'Central Standard Time - (GMT-06:00) Central Time (US & Canada)'
    | 'Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey'
    | 'Canada Central Standard Time - (GMT-06:00) Saskatchewan'
    | 'US Mountain Standard Time - (GMT-07:00) Arizona'
    | 'Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan'
    | 'Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)'
    | 'Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)'
    | 'Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California'
    | 'Alaskan Standard Time - (GMT-09:00) Alaska'
    | 'Hawaiian Standard Time - (GMT-10:00) Hawaii'
    | 'Samoa Standard Time - (GMT-11:00) Midway Island, Samoa'
    | 'Dateline Standard Time - (GMT-12:00) International Date Line West'
}
type InputXmlConversionJSON = { input: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/AddToCollection': {
      $post:
        | {
            input: { json: InputCollectionModify }
            output: OutputCollectionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionModify }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CSVtoJSON': {
      $post:
        | {
            input: { json: InputCsvConversionJSON }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCsvConversionJSON }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateAbsolute': {
      $post:
        | {
            input: { json: InputCalculateNumber }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumber }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateAddition': {
      $post:
        | {
            input: { json: InputCalculateNumbers }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumbers }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateAverage': {
      $post:
        | {
            input: { json: InputCalculateSeries }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateSeries }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateCosine': {
      $post:
        | {
            input: { json: InputCalculateNumber }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumber }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateDivision': {
      $post:
        | {
            input: { json: InputCalculateNumbers }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumbers }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateLogarithm': {
      $post:
        | {
            input: { json: InputCalculateNumber }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumber }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateMedian': {
      $post:
        | {
            input: { json: InputCalculateSeries }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateSeries }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateMinMax': {
      $post:
        | {
            input: { json: InputCalculateMinMax }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateMinMax }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateModulo': {
      $post:
        | {
            input: { json: InputCalculateNumbers }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumbers }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateMultiplication': {
      $post:
        | {
            input: { json: InputCalculateNumbers }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumbers }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateNthRoot': {
      $post:
        | {
            input: { json: InputCalculateNumbers }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumbers }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculatePower': {
      $post:
        | {
            input: { json: InputCalculatePower }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculatePower }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateSine': {
      $post:
        | {
            input: { json: InputCalculateNumber }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumber }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateSquareRoot': {
      $post:
        | {
            input: { json: InputCalculateNumber }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumber }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateSubtraction': {
      $post:
        | {
            input: { json: InputCalculateNumbers }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumbers }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateSum': {
      $post:
        | {
            input: { json: InputCalculateSeries }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateSeries }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateTangent': {
      $post:
        | {
            input: { json: InputCalculateNumber }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumber }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CalculateVariance': {
      $post:
        | {
            input: { json: InputCalculateSeries }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateSeries }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CollectionContainsNumber': {
      $post:
        | {
            input: { json: InputCollectionSearchNumeric }
            output: OutputCollectionNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionSearchNumeric }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CollectionContainsString': {
      $post:
        | {
            input: { json: InputCollectionSearch }
            output: OutputCollectionString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionSearch }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CollectionEndsWithString': {
      $post:
        | {
            input: { json: InputCollectionSearch }
            output: OutputCollectionString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionSearch }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CollectionStartsWithString': {
      $post:
        | {
            input: { json: InputCollectionSearch }
            output: OutputCollectionString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionSearch }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CollectionToJSON': {
      $post:
        | {
            input: { json: InputCollectionConversion }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionConversion }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CollectionToXML': {
      $post:
        | {
            input: { json: InputCollectionConversionXML }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionConversionXML }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CompareStrings': {
      $post:
        | {
            input: { json: InputStringComparison }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputStringComparison }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ContainsString': {
      $post:
        | {
            input: { json: InputStringContains }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputStringContains }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertAngle': {
      $post:
        | {
            input: { json: InputConvertAngle }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputConvertAngle }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertArea': {
      $post:
        | {
            input: { json: InputConvertArea }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputConvertArea }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertCase': {
      $post:
        | {
            input: { json: InputCaseConversion }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCaseConversion }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertCurrency': {
      $post:
        | {
            input: { json: InputCurrencyConversion }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCurrencyConversion }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertDistance': {
      $post:
        | {
            input: { json: InputConvertDistance }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputConvertDistance }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertDuration': {
      $post:
        | {
            input: { json: InputConvertDuration }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputConvertDuration }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertEnergy': {
      $post:
        | {
            input: { json: InputConvertEnergy }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputConvertEnergy }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertImage': {
      $post:
        | {
            input: { form: { file: File; format: 'PNG' | 'JPG' | 'GIF' | 'BMP' | 'TIF' } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { file: File; format: 'PNG' | 'JPG' | 'GIF' | 'BMP' | 'TIF' } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { file: File; format: 'PNG' | 'JPG' | 'GIF' | 'BMP' | 'TIF' } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { file: File; format: 'PNG' | 'JPG' | 'GIF' | 'BMP' | 'TIF' } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { file: File; format: 'PNG' | 'JPG' | 'GIF' | 'BMP' | 'TIF' } }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { form: { file: File; format: 'PNG' | 'JPG' | 'GIF' | 'BMP' | 'TIF' } }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { form: { file: File; format: 'PNG' | 'JPG' | 'GIF' | 'BMP' | 'TIF' } }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { form: { file: File; format: 'PNG' | 'JPG' | 'GIF' | 'BMP' | 'TIF' } }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/ConvertPower': {
      $post:
        | {
            input: { json: InputConvertPower }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputConvertPower }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertSpeed': {
      $post:
        | {
            input: { json: InputConvertSpeed }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputConvertSpeed }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertTemperature': {
      $post:
        | {
            input: { json: InputConvertTemperature }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputConvertTemperature }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertVolume': {
      $post:
        | {
            input: { json: InputConvertVolume }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputConvertVolume }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ConvertWeight': {
      $post:
        | {
            input: { json: InputConvertWeight }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputConvertWeight }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CountCollection': {
      $post:
        | {
            input: { json: InputCollectionCount }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionCount }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/CropImage': {
      $post:
        | {
            input: {
              form: {
                Height: number
                Width: number
                file: File
                position:
                  | 'TopLeft'
                  | 'TopCenter'
                  | 'TopRight'
                  | 'MiddleLeft'
                  | 'MiddleCenter'
                  | 'MiddleRight'
                  | 'BottomLeft'
                  | 'BottomCenter'
                  | 'BottomRight'
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                Height: number
                Width: number
                file: File
                position:
                  | 'TopLeft'
                  | 'TopCenter'
                  | 'TopRight'
                  | 'MiddleLeft'
                  | 'MiddleCenter'
                  | 'MiddleRight'
                  | 'BottomLeft'
                  | 'BottomCenter'
                  | 'BottomRight'
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                Height: number
                Width: number
                file: File
                position:
                  | 'TopLeft'
                  | 'TopCenter'
                  | 'TopRight'
                  | 'MiddleLeft'
                  | 'MiddleCenter'
                  | 'MiddleRight'
                  | 'BottomLeft'
                  | 'BottomCenter'
                  | 'BottomRight'
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                Height: number
                Width: number
                file: File
                position:
                  | 'TopLeft'
                  | 'TopCenter'
                  | 'TopRight'
                  | 'MiddleLeft'
                  | 'MiddleCenter'
                  | 'MiddleRight'
                  | 'BottomLeft'
                  | 'BottomCenter'
                  | 'BottomRight'
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                Height: number
                Width: number
                file: File
                position:
                  | 'TopLeft'
                  | 'TopCenter'
                  | 'TopRight'
                  | 'MiddleLeft'
                  | 'MiddleCenter'
                  | 'MiddleRight'
                  | 'BottomLeft'
                  | 'BottomCenter'
                  | 'BottomRight'
              }
            }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              form: {
                Height: number
                Width: number
                file: File
                position:
                  | 'TopLeft'
                  | 'TopCenter'
                  | 'TopRight'
                  | 'MiddleLeft'
                  | 'MiddleCenter'
                  | 'MiddleRight'
                  | 'BottomLeft'
                  | 'BottomCenter'
                  | 'BottomRight'
              }
            }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              form: {
                Height: number
                Width: number
                file: File
                position:
                  | 'TopLeft'
                  | 'TopCenter'
                  | 'TopRight'
                  | 'MiddleLeft'
                  | 'MiddleCenter'
                  | 'MiddleRight'
                  | 'BottomLeft'
                  | 'BottomCenter'
                  | 'BottomRight'
              }
            }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              form: {
                Height: number
                Width: number
                file: File
                position:
                  | 'TopLeft'
                  | 'TopCenter'
                  | 'TopRight'
                  | 'MiddleLeft'
                  | 'MiddleCenter'
                  | 'MiddleRight'
                  | 'BottomLeft'
                  | 'BottomCenter'
                  | 'BottomRight'
              }
            }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/DateTimeDifference': {
      $post:
        | {
            input: { json: InputDateTimeDifference }
            output: OutputDateDifference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputDateTimeDifference }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/DateTimeInfo': {
      $post:
        | {
            input: { json: InputDateTimeInfo }
            output: OutputDateInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputDateTimeInfo }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/DecodeString': {
      $post:
        | {
            input: { json: { source: string } }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { source: string } }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/EncodeString': {
      $post:
        | { input: { json: InputString }; output: OutputString; outputFormat: 'json'; status: 200 }
        | { input: { json: InputString }; output: OutputString; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/FileToString': {
      $post:
        | {
            input: { form: { file: File } }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { file: File } }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/FilterCollection': {
      $post:
        | {
            input: { json: InputCollectionFilter }
            output: OutputCollectionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionFilter }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/FlipImage': {
      $post:
        | {
            input: { form: { file: File; orientation: 'Horizontal' | 'Vertical' } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { file: File; orientation: 'Horizontal' | 'Vertical' } }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/FormatCurrency': {
      $post:
        | {
            input: { json: InputCurrencyFormat }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCurrencyFormat }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/FormatDateTime': {
      $post:
        | {
            input: { json: InputDateTimeFormat }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputDateTimeFormat }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/GenerateGuid': {
      $post:
        | {
            input: { json: InputGenerateUniqueID }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputGenerateUniqueID }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/GenerateHash': {
      $post:
        | {
            input: { json: InputGenerateHash }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputGenerateHash }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/GenerateQRCode': {
      $post:
        | { input: { json: InputQRCode }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: InputQRCode }; output: OutputString; outputFormat: 'text'; status: 400 }
    }
  } & {
    '/JSONtoCSV': {
      $post:
        | {
            input: { json: InputJsonConversionCSV }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputJsonConversionCSV }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/JSONtoHTML': {
      $post:
        | {
            input: { json: InputJsonConversionHTML }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputJsonConversionHTML }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/JSONtoXML': {
      $post:
        | {
            input: { json: InputJsonConversionXML }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputJsonConversionXML }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/JoinStrings': {
      $post:
        | {
            input: { json: InputJoinStrings }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputJoinStrings }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/MarketIndex': {
      $post:
        | {
            input: { json: InputMarketIndex }
            output: OutputMarketIndex
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputMarketIndex }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/QueryJSON': {
      $post:
        | {
            input: { json: InputDataQuery }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputDataQuery }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/QueryXML': {
      $post:
        | {
            input: { json: InputDataQuery }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputDataQuery }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/RandomNumber': {
      $post:
        | {
            input: { json: InputNumberRange }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputNumberRange }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/RedactString': {
      $post:
        | {
            input: { json: InputRedactString }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputRedactString }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/RemoveFromCollection': {
      $post:
        | {
            input: { json: InputCollectionModify }
            output: OutputCollectionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionModify }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ReplaceString': {
      $post:
        | {
            input: { json: InputReplaceString }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputReplaceString }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ReplaceValuesInCollection': {
      $post:
        | {
            input: { json: InputCollectionReplace }
            output: OutputCollectionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionReplace }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ResizeImage': {
      $post:
        | {
            input: {
              form: {
                algorithm:
                  | 'Bicubic (default)'
                  | 'Bilinear'
                  | 'Cubic (Box)'
                  | 'Cubic (Catmull-Rom)'
                  | 'Cubic (Hermite)'
                  | 'Cubic (Spline)'
                  | 'Nearest Neighbor'
                  | 'Sinc (Lanczos2)'
                  | 'Sinc (Lanczos3)'
                  | 'Sinc (Lanczos5)'
                  | 'Sinc (Lanczos8)'
                  | 'Robidoux'
                  | 'Robidoux Sharp'
                file: File
                height?: number | undefined
                units: 'Pixels' | 'Percent'
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                algorithm:
                  | 'Bicubic (default)'
                  | 'Bilinear'
                  | 'Cubic (Box)'
                  | 'Cubic (Catmull-Rom)'
                  | 'Cubic (Hermite)'
                  | 'Cubic (Spline)'
                  | 'Nearest Neighbor'
                  | 'Sinc (Lanczos2)'
                  | 'Sinc (Lanczos3)'
                  | 'Sinc (Lanczos5)'
                  | 'Sinc (Lanczos8)'
                  | 'Robidoux'
                  | 'Robidoux Sharp'
                file: File
                height?: number | undefined
                units: 'Pixels' | 'Percent'
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                algorithm:
                  | 'Bicubic (default)'
                  | 'Bilinear'
                  | 'Cubic (Box)'
                  | 'Cubic (Catmull-Rom)'
                  | 'Cubic (Hermite)'
                  | 'Cubic (Spline)'
                  | 'Nearest Neighbor'
                  | 'Sinc (Lanczos2)'
                  | 'Sinc (Lanczos3)'
                  | 'Sinc (Lanczos5)'
                  | 'Sinc (Lanczos8)'
                  | 'Robidoux'
                  | 'Robidoux Sharp'
                file: File
                height?: number | undefined
                units: 'Pixels' | 'Percent'
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                algorithm:
                  | 'Bicubic (default)'
                  | 'Bilinear'
                  | 'Cubic (Box)'
                  | 'Cubic (Catmull-Rom)'
                  | 'Cubic (Hermite)'
                  | 'Cubic (Spline)'
                  | 'Nearest Neighbor'
                  | 'Sinc (Lanczos2)'
                  | 'Sinc (Lanczos3)'
                  | 'Sinc (Lanczos5)'
                  | 'Sinc (Lanczos8)'
                  | 'Robidoux'
                  | 'Robidoux Sharp'
                file: File
                height?: number | undefined
                units: 'Pixels' | 'Percent'
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                algorithm:
                  | 'Bicubic (default)'
                  | 'Bilinear'
                  | 'Cubic (Box)'
                  | 'Cubic (Catmull-Rom)'
                  | 'Cubic (Hermite)'
                  | 'Cubic (Spline)'
                  | 'Nearest Neighbor'
                  | 'Sinc (Lanczos2)'
                  | 'Sinc (Lanczos3)'
                  | 'Sinc (Lanczos5)'
                  | 'Sinc (Lanczos8)'
                  | 'Robidoux'
                  | 'Robidoux Sharp'
                file: File
                height?: number | undefined
                units: 'Pixels' | 'Percent'
                width?: number | undefined
              }
            }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              form: {
                algorithm:
                  | 'Bicubic (default)'
                  | 'Bilinear'
                  | 'Cubic (Box)'
                  | 'Cubic (Catmull-Rom)'
                  | 'Cubic (Hermite)'
                  | 'Cubic (Spline)'
                  | 'Nearest Neighbor'
                  | 'Sinc (Lanczos2)'
                  | 'Sinc (Lanczos3)'
                  | 'Sinc (Lanczos5)'
                  | 'Sinc (Lanczos8)'
                  | 'Robidoux'
                  | 'Robidoux Sharp'
                file: File
                height?: number | undefined
                units: 'Pixels' | 'Percent'
                width?: number | undefined
              }
            }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              form: {
                algorithm:
                  | 'Bicubic (default)'
                  | 'Bilinear'
                  | 'Cubic (Box)'
                  | 'Cubic (Catmull-Rom)'
                  | 'Cubic (Hermite)'
                  | 'Cubic (Spline)'
                  | 'Nearest Neighbor'
                  | 'Sinc (Lanczos2)'
                  | 'Sinc (Lanczos3)'
                  | 'Sinc (Lanczos5)'
                  | 'Sinc (Lanczos8)'
                  | 'Robidoux'
                  | 'Robidoux Sharp'
                file: File
                height?: number | undefined
                units: 'Pixels' | 'Percent'
                width?: number | undefined
              }
            }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              form: {
                algorithm:
                  | 'Bicubic (default)'
                  | 'Bilinear'
                  | 'Cubic (Box)'
                  | 'Cubic (Catmull-Rom)'
                  | 'Cubic (Hermite)'
                  | 'Cubic (Spline)'
                  | 'Nearest Neighbor'
                  | 'Sinc (Lanczos2)'
                  | 'Sinc (Lanczos3)'
                  | 'Sinc (Lanczos5)'
                  | 'Sinc (Lanczos8)'
                  | 'Robidoux'
                  | 'Robidoux Sharp'
                file: File
                height?: number | undefined
                units: 'Pixels' | 'Percent'
                width?: number | undefined
              }
            }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/RotateImage': {
      $post:
        | {
            input: { form: { degrees: string; file: File } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { degrees: string; file: File } }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/RoundNumber': {
      $post:
        | {
            input: { json: InputCalculateNumber }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateNumber }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ShortenLink': {
      $post:
        | {
            input: { json: { source: string } }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { source: string } }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/SortCollection': {
      $post:
        | {
            input: { json: InputCollectionSort }
            output: OutputCollectionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionSort }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/SpeechToText': {
      $post:
        | {
            input: {
              form: {
                file: File
                language:
                  | 'Arabic (Bahrain)'
                  | 'Arabic (Egypt)'
                  | 'Arabic (Iraq)'
                  | 'Arabic (Jordan)'
                  | 'Arabic (Kuwait)'
                  | 'Arabic (Lebanon)'
                  | 'Arabic (Oman)'
                  | 'Arabic (Qatar)'
                  | 'Arabic (Saudi Arabia)'
                  | 'Arabic (Syria)'
                  | 'Arabic (United Arab Emirates)'
                  | 'Bulgarian (Bulgaria)'
                  | 'Catalan (Spain)'
                  | 'Chinese (Cantonese, Traditional)'
                  | 'Chinese (Mandarin, Simplified)'
                  | 'Chinese (Taiwanese Mandarin)'
                  | 'Croatian (Croatia)'
                  | 'Czech (Czech Republic)'
                  | 'Danish (Denmark)'
                  | 'Dutch (Netherlands)'
                  | 'English (Australia)'
                  | 'English (Canada)'
                  | 'English (Hong Kong)'
                  | 'English (India)'
                  | 'English (Ireland)'
                  | 'English (New Zealand)'
                  | 'English (Philippines)'
                  | 'English (Singapore)'
                  | 'English (South Africa)'
                  | 'English (United Kingdom)'
                  | 'English (United States)'
                  | 'Estonian(Estonia)'
                  | 'Finnish (Finland)'
                  | 'French (Canada)'
                  | 'French (France)'
                  | 'German (Germany)'
                  | 'Greek (Greece)'
                  | 'Gujarati (Indian)'
                  | 'Hindi (India)'
                  | 'Hungarian (Hungary)'
                  | 'Irish(Ireland)'
                  | 'Italian (Italy)'
                  | 'Japanese (Japan)'
                  | 'Korean (Korea)'
                  | 'Latvian (Latvia)'
                  | 'Lithuanian (Lithuania)'
                  | 'Maltese(Malta)'
                  | 'Marathi (India)'
                  | 'Norwegian (Norway)'
                  | 'Polish (Poland)'
                  | 'Portuguese (Brazil)'
                  | 'Portuguese (Portugal)'
                  | 'Romanian (Romania)'
                  | 'Russian (Russia)'
                  | 'Slovak (Slovakia)'
                  | 'Slovenian (Slovenia)'
                  | 'Spanish (Argentina)'
                  | 'Spanish (Bolivia)'
                  | 'Spanish (Chile)'
                  | 'Spanish (Colombia)'
                  | 'Spanish (Costa Rica)'
                  | 'Spanish (Cuba)'
                  | 'Spanish (Dominican Republic)'
                  | 'Spanish (Ecuador)'
                  | 'Spanish (El Salvador)'
                  | 'Spanish (Guatemala)'
                  | 'Spanish (Honduras)'
                  | 'Spanish (Mexico)'
                  | 'Spanish (Nicaragua)'
                  | 'Spanish (Panama)'
                  | 'Spanish (Paraguay)'
                  | 'Spanish (Peru)'
                  | 'Spanish (Puerto Rico)'
                  | 'Spanish (Spain)'
                  | 'Spanish (Uruguay)'
                  | 'Spanish (USA)'
                  | 'Spanish (Venezuela)'
                  | 'Swedish (Sweden)'
                  | 'Tamil (India)'
                  | 'Telugu (India)'
                  | 'Thai (Thailand)'
                  | 'Turkish (Turkey)'
              }
            }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                file: File
                language:
                  | 'Arabic (Bahrain)'
                  | 'Arabic (Egypt)'
                  | 'Arabic (Iraq)'
                  | 'Arabic (Jordan)'
                  | 'Arabic (Kuwait)'
                  | 'Arabic (Lebanon)'
                  | 'Arabic (Oman)'
                  | 'Arabic (Qatar)'
                  | 'Arabic (Saudi Arabia)'
                  | 'Arabic (Syria)'
                  | 'Arabic (United Arab Emirates)'
                  | 'Bulgarian (Bulgaria)'
                  | 'Catalan (Spain)'
                  | 'Chinese (Cantonese, Traditional)'
                  | 'Chinese (Mandarin, Simplified)'
                  | 'Chinese (Taiwanese Mandarin)'
                  | 'Croatian (Croatia)'
                  | 'Czech (Czech Republic)'
                  | 'Danish (Denmark)'
                  | 'Dutch (Netherlands)'
                  | 'English (Australia)'
                  | 'English (Canada)'
                  | 'English (Hong Kong)'
                  | 'English (India)'
                  | 'English (Ireland)'
                  | 'English (New Zealand)'
                  | 'English (Philippines)'
                  | 'English (Singapore)'
                  | 'English (South Africa)'
                  | 'English (United Kingdom)'
                  | 'English (United States)'
                  | 'Estonian(Estonia)'
                  | 'Finnish (Finland)'
                  | 'French (Canada)'
                  | 'French (France)'
                  | 'German (Germany)'
                  | 'Greek (Greece)'
                  | 'Gujarati (Indian)'
                  | 'Hindi (India)'
                  | 'Hungarian (Hungary)'
                  | 'Irish(Ireland)'
                  | 'Italian (Italy)'
                  | 'Japanese (Japan)'
                  | 'Korean (Korea)'
                  | 'Latvian (Latvia)'
                  | 'Lithuanian (Lithuania)'
                  | 'Maltese(Malta)'
                  | 'Marathi (India)'
                  | 'Norwegian (Norway)'
                  | 'Polish (Poland)'
                  | 'Portuguese (Brazil)'
                  | 'Portuguese (Portugal)'
                  | 'Romanian (Romania)'
                  | 'Russian (Russia)'
                  | 'Slovak (Slovakia)'
                  | 'Slovenian (Slovenia)'
                  | 'Spanish (Argentina)'
                  | 'Spanish (Bolivia)'
                  | 'Spanish (Chile)'
                  | 'Spanish (Colombia)'
                  | 'Spanish (Costa Rica)'
                  | 'Spanish (Cuba)'
                  | 'Spanish (Dominican Republic)'
                  | 'Spanish (Ecuador)'
                  | 'Spanish (El Salvador)'
                  | 'Spanish (Guatemala)'
                  | 'Spanish (Honduras)'
                  | 'Spanish (Mexico)'
                  | 'Spanish (Nicaragua)'
                  | 'Spanish (Panama)'
                  | 'Spanish (Paraguay)'
                  | 'Spanish (Peru)'
                  | 'Spanish (Puerto Rico)'
                  | 'Spanish (Spain)'
                  | 'Spanish (Uruguay)'
                  | 'Spanish (USA)'
                  | 'Spanish (Venezuela)'
                  | 'Swedish (Sweden)'
                  | 'Tamil (India)'
                  | 'Telugu (India)'
                  | 'Thai (Thailand)'
                  | 'Turkish (Turkey)'
              }
            }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/SplitCollection': {
      $post:
        | {
            input: { json: InputCollectionSplit }
            output: OutputMultiCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCollectionSplit }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/SplitString': {
      $post:
        | {
            input: { json: InputSplitString }
            output: OutputStringArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputSplitString }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/StandardDeviation': {
      $post:
        | {
            input: { json: InputCalculateSeries }
            output: OutputNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputCalculateSeries }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/StockPrices': {
      $post:
        | {
            input: { json: InputStockPrices }
            output: OutputStockPrice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputStockPrices }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/StringToFile': {
      $post:
        | { input: { json: InputStringToFile }; output: File; outputFormat: 'json'; status: 200 }
        | { input: { json: InputStringToFile }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: InputStringToFile }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: InputStringToFile }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: InputStringToFile }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: InputStringToFile }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { json: InputStringToFile }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { json: InputStringToFile }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: InputStringToFile }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: InputStringToFile }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: InputStringToFile }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: InputStringToFile }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: InputStringToFile }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: InputStringToFile }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/TextToSpeech': {
      $post:
        | { input: { json: InputTextToSpeech }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { json: InputTextToSpeech }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/TranslateString': {
      $post:
        | {
            input: { json: InputTranslateString }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputTranslateString }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/TrimString': {
      $post:
        | {
            input: { json: InputTrimString }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputTrimString }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/URLDecode': {
      $post:
        | {
            input: { json: { source: string } }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { source: string } }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/URLEncode': {
      $post:
        | { input: { json: InputString }; output: OutputString; outputFormat: 'json'; status: 200 }
        | { input: { json: InputString }; output: OutputString; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/ValidateEmail': {
      $post:
        | {
            input: { json: { source: string } }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { source: string } }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/VerifyHash': {
      $post:
        | {
            input: { json: InputVerifyHash }
            output: OutputBoolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputVerifyHash }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/WatermarkImage': {
      $post:
        | {
            input: {
              form: {
                color: string
                file: File
                font:
                  | 'Arial'
                  | 'Arial Black'
                  | 'Arial Narrow'
                  | 'Book Antiqua'
                  | 'Britannic Bold'
                  | 'Brush Script MT'
                  | 'Calisto MT'
                  | 'Century Gothic'
                  | 'Century Schoolbook'
                  | 'Colonna MT'
                  | 'Comic Sans MS'
                  | 'Cooper Black'
                  | 'Copperplate Gothic Bold'
                  | 'Copperplate Gothic Light'
                  | 'Courier New'
                  | 'Edwardian Script ITC'
                  | 'Engravers MT'
                  | 'Franklin Gothic Demi'
                  | 'Franklin Gothic Heavy'
                  | 'Franklin Gothic Medium'
                  | 'Garamond'
                  | 'Georgia'
                  | 'Gill Sans MT'
                  | 'Gill Sans MT Condensed'
                  | 'Gill Sans Ultra Bold'
                  | 'Gill Sans Ultra Bold Condensed'
                  | 'Goudy Old Style'
                  | 'Haettenschweiler'
                  | 'Holidays MT'
                  | 'Impact'
                  | 'Lucida Calligraphy'
                  | 'Lucida Console'
                  | 'Lucida Handwriting'
                  | 'Lucida Sans Typewriter'
                  | 'Lucida Sans Unicode'
                  | 'Marlett'
                  | 'Microsoft Sans Serif'
                  | 'MS Outlook'
                  | 'Palace Script MT'
                  | 'Palatino Linotype'
                  | 'Papyrus'
                  | 'Playbill'
                  | 'Rockwell'
                  | 'Rockwell Condensed'
                  | 'Rockwell Extra Bold'
                  | 'Script MT Bold'
                  | 'Stencil'
                  | 'Symbol'
                  | 'Tahoma'
                  | 'Times New Roman'
                  | 'Trebuchet MS'
                  | 'Verdana'
                  | 'Vivaldi'
                  | 'Webdings'
                  | 'Wingdings 1'
                  | 'Wingdings 2'
                  | 'Wingdings 3'
                horizontal: 'Left' | 'Center' | 'Right'
                size: number
                text: string
                vertical: 'Top' | 'Center' | 'Bottom'
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              form: {
                color: string
                file: File
                font:
                  | 'Arial'
                  | 'Arial Black'
                  | 'Arial Narrow'
                  | 'Book Antiqua'
                  | 'Britannic Bold'
                  | 'Brush Script MT'
                  | 'Calisto MT'
                  | 'Century Gothic'
                  | 'Century Schoolbook'
                  | 'Colonna MT'
                  | 'Comic Sans MS'
                  | 'Cooper Black'
                  | 'Copperplate Gothic Bold'
                  | 'Copperplate Gothic Light'
                  | 'Courier New'
                  | 'Edwardian Script ITC'
                  | 'Engravers MT'
                  | 'Franklin Gothic Demi'
                  | 'Franklin Gothic Heavy'
                  | 'Franklin Gothic Medium'
                  | 'Garamond'
                  | 'Georgia'
                  | 'Gill Sans MT'
                  | 'Gill Sans MT Condensed'
                  | 'Gill Sans Ultra Bold'
                  | 'Gill Sans Ultra Bold Condensed'
                  | 'Goudy Old Style'
                  | 'Haettenschweiler'
                  | 'Holidays MT'
                  | 'Impact'
                  | 'Lucida Calligraphy'
                  | 'Lucida Console'
                  | 'Lucida Handwriting'
                  | 'Lucida Sans Typewriter'
                  | 'Lucida Sans Unicode'
                  | 'Marlett'
                  | 'Microsoft Sans Serif'
                  | 'MS Outlook'
                  | 'Palace Script MT'
                  | 'Palatino Linotype'
                  | 'Papyrus'
                  | 'Playbill'
                  | 'Rockwell'
                  | 'Rockwell Condensed'
                  | 'Rockwell Extra Bold'
                  | 'Script MT Bold'
                  | 'Stencil'
                  | 'Symbol'
                  | 'Tahoma'
                  | 'Times New Roman'
                  | 'Trebuchet MS'
                  | 'Verdana'
                  | 'Vivaldi'
                  | 'Webdings'
                  | 'Wingdings 1'
                  | 'Wingdings 2'
                  | 'Wingdings 3'
                horizontal: 'Left' | 'Center' | 'Right'
                size: number
                text: string
                vertical: 'Top' | 'Center' | 'Bottom'
              }
            }
            output: OutputString
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/WorldTime': {
      $post:
        | {
            input: { json: InputDateTimeConversion }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputDateTimeConversion }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/XMLtoJSON': {
      $post:
        | {
            input: { json: InputXmlConversionJSON }
            output: OutputString
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InputXmlConversionJSON }
            output: OutputString
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
