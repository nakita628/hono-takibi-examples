import { createRoute, z } from '@hono/zod-openapi'

const InputCalculateMinMaxSchema = z
  .object({
    input: z
      .array(z.number())
      .openapi({ description: 'Colllection of values to calculate', 'x-ms-summary': 'Values' }),
    type: z
      .enum(['Minimum', 'Maximum'])
      .default('Minimum')
      .openapi({ description: 'Minimum or Maximum', 'x-ms-summary': 'Min or Max' }),
  })
  .openapi({ example: { input: [1, 2, 3, 4, 5], type: 'Minimum' }, required: ['input', 'type'] })
  .openapi('InputCalculateMinMax')

const InputCalculateNumberSchema = z
  .object({
    decimals: z
      .number()
      .min(0)
      .openapi({
        description: 'Round to number of decimal places',
        'x-ms-summary': 'Decimal Places',
      }),
    input: z
      .number()
      .openapi({ description: 'Numeric value to calculate', 'x-ms-summary': 'Value' }),
  })
  .openapi({ example: { decimals: 2, input: 0.195928 }, required: ['decimals', 'input'] })
  .openapi('InputCalculateNumber')

const InputCalculateNumbersSchema = z
  .object({
    decimals: z
      .number()
      .min(0)
      .openapi({
        description: 'Round to number of decimal places',
        'x-ms-summary': 'Decimal Places',
      }),
    input: z.number().openapi({ description: 'Numeric value', 'x-ms-summary': 'Primary Value' }),
    value: z
      .number()
      .openapi({
        description: 'Addend, subtrahend, factor, divisor or radicand',
        'x-ms-summary': 'Secondary Value',
      }),
  })
  .openapi({
    example: { decimals: 2, input: 4, value: 2 },
    required: ['decimals', 'input', 'value'],
  })
  .openapi('InputCalculateNumbers')

const InputCalculatePowerSchema = z
  .object({
    decimals: z
      .number()
      .min(0)
      .openapi({
        description: 'Round to number of decimal places',
        'x-ms-summary': 'Decimal Places',
      }),
    input: z.number().openapi({ description: 'Number to raise', 'x-ms-summary': 'Number' }),
    power: z.number().openapi({ description: 'Power', 'x-ms-summary': 'Power' }),
  })
  .openapi({
    example: { decimals: 2, input: 5.53, power: 4 },
    required: ['decimals', 'input', 'power'],
  })
  .openapi('InputCalculatePower')

const InputCalculateSeriesSchema = z
  .object({
    decimals: z
      .number()
      .min(0)
      .openapi({
        description: 'Round to number of decimal places',
        'x-ms-summary': 'Decimal Places',
      }),
    input: z
      .array(z.number())
      .openapi({ description: 'Colllection of values to calculate', 'x-ms-summary': 'Values' }),
  })
  .openapi({ example: { decimals: 2, input: [1, 2, 3, 4, 5] }, required: ['decimals', 'input'] })
  .openapi('InputCalculateSeries')

const InputCaseConversionSchema = z
  .object({
    alphacase: z
      .enum(['Upper', 'Lower', 'Title'])
      .openapi({ description: 'Case of conversion result', 'x-ms-summary': 'Case' }),
    input: z
      .string()
      .openapi({ description: 'String containing the text to convert', 'x-ms-summary': 'Value' }),
  })
  .openapi({
    example: { alphacase: 'Upper', input: 'the brown cow' },
    required: ['alphacase', 'input'],
  })
  .openapi('InputCaseConversion')

const InputCollectionConversionSchema = z
  .object({
    input: z
      .array(z.string())
      .openapi({
        description: 'Collection containing strings to convert',
        'x-ms-summary': 'Values',
      }),
    name: z.string().openapi({ description: 'Collection name', 'x-ms-summary': 'Name' }),
  })
  .openapi({
    example: { input: ['a', 'b', 'c', 'd', 'e'], name: 'Items' },
    required: ['input', 'name'],
  })
  .openapi('InputCollectionConversion')

const InputCollectionConversionXMLSchema = z
  .object({
    child: z
      .string()
      .openapi({ description: 'Name of child XML node(s)', 'x-ms-summary': 'Child Node Name' }),
    input: z
      .array(z.string())
      .openapi({
        description: 'Collection containing strings to convert',
        'x-ms-summary': 'Values',
      }),
    root: z
      .string()
      .openapi({ description: 'Name of root XML node', 'x-ms-summary': 'Root Node Name' }),
  })
  .openapi({
    example: { child: 'Item', input: ['a', 'b', 'c', 'd', 'e'], root: 'Items' },
    required: ['child', 'input', 'root'],
  })
  .openapi('InputCollectionConversionXML')

const InputCollectionCountSchema = z
  .object({
    input: z
      .array(z.string())
      .openapi({ description: 'Collection of items to count', 'x-ms-summary': 'Collection' }),
  })
  .openapi({ example: { input: ['a', 'd', 'c', 'b', 'e'] }, required: ['input'] })
  .openapi('InputCollectionCount')

const InputCollectionFilterSchema = z
  .object({
    input: z
      .array(z.string())
      .openapi({ description: 'Collection of strings to filter', 'x-ms-summary': 'Collection' }),
    keywords: z
      .string()
      .openapi({
        description: 'Keywords (separate multiple values with commas)',
        'x-ms-summary': 'Keywords',
      }),
    match: z
      .enum(['Any', 'All', 'None'])
      .default('Any')
      .openapi({ description: 'Match type', 'x-ms-summary': 'Match' }),
  })
  .openapi({
    example: { input: ['the cow', 'jumped over', 'the moon'], keywords: 'cow,moon', match: 'Any' },
    required: ['input', 'keywords', 'match'],
  })
  .openapi('InputCollectionFilter')

const InputCollectionModifySchema = z
  .object({
    index: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Index position for operation (leave blank to specify end of collection)',
        'x-ms-summary': 'Index',
      }),
    input: z
      .array(z.string())
      .openapi({
        description: 'Collection of values or objects to modify',
        'x-ms-summary': 'Collection',
      }),
    item: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Item (for multiple items, leave blank and use Items)',
        'x-ms-summary': 'Item',
      }),
    items: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Items (Collection, for a single item leave blank and use Item)',
        'x-ms-summary': 'Items',
      }),
  })
  .openapi({
    example: { index: '0', input: ['a', 'b', 'c'], item: 'd', items: '' },
    required: ['input'],
  })
  .openapi('InputCollectionModify')

const InputCollectionReplaceSchema = z
  .object({
    ignoreCase: z
      .union([z.literal(true), z.literal(false)])
      .default(true)
      .openapi({ description: 'Ignore case', 'x-ms-summary': 'Ignore case' }),
    input: z
      .array(z.string())
      .openapi({ description: 'Collection of strings', 'x-ms-summary': 'Collection' }),
    match: z.string().openapi({ description: 'Match value', 'x-ms-summary': 'Match value' }),
    replacement: z
      .string()
      .openapi({ description: 'Replacement value', 'x-ms-summary': 'Replacement value' }),
  })
  .openapi({
    example: {
      ignoreCase: true,
      input: ['the brown cow', 'jumped over', 'the brown dog'],
      match: 'Brown',
      replacement: 'spotted',
    },
    required: ['ignoreCase', 'input', 'match', 'replacement'],
  })
  .openapi('InputCollectionReplace')

const InputCollectionSearchSchema = z
  .object({
    ignorecase: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({
        description: 'Ignore case when performing comparison',
        'x-ms-summary': 'Ignore Case',
      }),
    input: z
      .array(z.string())
      .openapi({ description: 'Collection of strings to search', 'x-ms-summary': 'Values' }),
    match: z.string().openapi({ description: 'Text to match', 'x-ms-summary': 'Text' }),
    trim: z
      .union([z.literal(true), z.literal(false)])
      .exactOptional()
      .openapi({ description: 'Trim white space from comparison string', 'x-ms-summary': 'Trim' }),
  })
  .openapi({
    example: { ignorecase: true, input: ['the', 'brown', 'cow '], match: 'cow', trim: true },
    required: ['input', 'match'],
  })
  .openapi('InputCollectionSearch')

const InputCollectionSearchNumericSchema = z
  .object({
    input: z
      .array(z.number())
      .openapi({ description: 'Collection of strings to search', 'x-ms-summary': 'Values' }),
    match: z.number().openapi({ description: 'Number to match', 'x-ms-summary': 'Number' }),
    type: z
      .enum(['Integer', 'Decimal'])
      .default('Integer')
      .exactOptional()
      .openapi({
        description: 'Type of number - integer or decimal',
        'x-ms-summary': 'Number Type',
      }),
  })
  .openapi({
    example: { input: [1.25, 10.5, 20.75, 51.25, 119.6, 301.25], match: '1.25,', type: 'Decimal' },
    required: ['input', 'match'],
  })
  .openapi('InputCollectionSearchNumeric')

const InputCollectionSortSchema = z
  .object({
    input: z
      .array(z.string())
      .openapi({ description: 'Collection of strings to sort', 'x-ms-summary': 'Collection' }),
    order: z
      .enum(['Ascending', 'Descending'])
      .default('Ascending')
      .openapi({ description: 'Sort order', 'x-ms-summary': 'Order' }),
  })
  .openapi({
    example: { input: ['a', 'd', 'c', 'b', 'e'], order: 'Ascending' },
    required: ['input', 'order'],
  })
  .openapi('InputCollectionSort')

const InputCollectionSplitSchema = z
  .object({
    index: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Index location to split (leave empty to use Match value)',
        'x-ms-summary': 'Index',
      }),
    input: z
      .array(z.string())
      .openapi({ description: 'Collection of items to split', 'x-ms-summary': 'Collection' }),
    match: z
      .string()
      .exactOptional()
      .openapi({
        description: 'String to match (explicit, case-insensitive, leave empty to use Index)',
        'x-ms-summary': 'Match Value',
      }),
  })
  .openapi({
    example: { index: '', input: ['the cow', 'jumped over', 'the moon'], match: 'jumped over' },
    required: ['input'],
  })
  .openapi('InputCollectionSplit')

const InputConvertAngleSchema = z
  .object({
    input: z.number().openapi({ 'x-ms-summary': 'Measurement value' }),
    source: z
      .enum([
        'Arcminute',
        'Arcsecond',
        'Centiradian',
        'Deciradian',
        'Degree',
        'Gradian',
        'Microdegree',
        'Microradian',
        'Millidegree',
        'Milliradian',
        'Nanodegree',
        'Nanoradian',
        'Radian',
        'Revolution',
      ])
      .openapi({ 'x-ms-summary': 'Source measurement' }),
    target: z
      .enum([
        'Arcminute',
        'Arcsecond',
        'Centiradian',
        'Deciradian',
        'Degree',
        'Gradian',
        'Microdegree',
        'Microradian',
        'Millidegree',
        'Milliradian',
        'Nanodegree',
        'Nanoradian',
        'Radian',
        'Revolution',
      ])
      .openapi({ 'x-ms-summary': 'Target measurement' }),
  })
  .openapi({
    example: { input: 16.036844, source: 'Arcminute', target: 'Arcsecond' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputConvertAngle')

const InputConvertAreaSchema = z
  .object({
    input: z.number().openapi({ 'x-ms-summary': 'Measurement value' }),
    source: z
      .enum([
        'Acre',
        'Hectare',
        'SquareCentimeter',
        'SquareDecimeter',
        'SquareFoot',
        'SquareInch',
        'SquareKilometer',
        'SquareMeter',
        'SquareMicrometer',
        'SquareMile',
        'SquareMillimeter',
        'SquareYard',
      ])
      .openapi({ 'x-ms-summary': 'Source measurement' }),
    target: z
      .enum([
        'Acre',
        'Hectare',
        'SquareCentimeter',
        'SquareDecimeter',
        'SquareFoot',
        'SquareInch',
        'SquareKilometer',
        'SquareMeter',
        'SquareMicrometer',
        'SquareMile',
        'SquareMillimeter',
        'SquareYard',
      ])
      .openapi({ 'x-ms-summary': 'Target measurement' }),
  })
  .openapi({
    example: { input: 0.416714, source: 'Acre', target: 'SquareFoot' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputConvertArea')

const InputConvertDistanceSchema = z
  .object({
    input: z.number().openapi({ 'x-ms-summary': 'Measurement value' }),
    source: z
      .enum([
        'Centimeter',
        'Decimeter',
        'Fathom',
        'Foot',
        'Hectometer',
        'Inch',
        'Kilometer',
        'LightYear',
        'Meter',
        'Micrometer',
        'Mile',
        'Millimeter',
        'Nanometer',
        'NauticalMile',
        'Yard',
      ])
      .openapi({ 'x-ms-summary': 'Source measurement' }),
    target: z
      .enum([
        'Centimeter',
        'Decimeter',
        'Fathom',
        'Foot',
        'Hectometer',
        'Inch',
        'Kilometer',
        'LightYear',
        'Meter',
        'Micrometer',
        'Mile',
        'Millimeter',
        'Nanometer',
        'NauticalMile',
        'Yard',
      ])
      .openapi({ 'x-ms-summary': 'Target measurement' }),
  })
  .openapi({
    example: { input: 0.525505, source: 'Meter', target: 'Foot' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputConvertDistance')

const InputConvertDurationSchema = z
  .object({
    input: z.number().openapi({ 'x-ms-summary': 'Measurement value' }),
    source: z
      .enum([
        'Day',
        'Hour',
        'Microsecond',
        'Millisecond',
        'Minute',
        'Month',
        'Nanosecond',
        'Second',
        'Week',
        'Year',
      ])
      .openapi({ 'x-ms-summary': 'Source measurement' }),
    target: z
      .enum([
        'Day',
        'Hour',
        'Microsecond',
        'Millisecond',
        'Minute',
        'Month',
        'Nanosecond',
        'Second',
        'Week',
        'Year',
      ])
      .openapi({ 'x-ms-summary': 'Target measurement' }),
  })
  .openapi({
    example: { input: 0.66375, source: 'Day', target: 'Hour' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputConvertDuration')

const InputConvertEnergySchema = z
  .object({
    input: z.number().openapi({ 'x-ms-summary': 'Measurement value' }),
    source: z
      .enum([
        'BritishThermalUnit',
        'Calorie',
        'ElectronVolt',
        'FootPound',
        'GigawattHour',
        'Joule',
        'Kilocalorie',
        'Kilojoule',
        'KilowattHour',
        'Megajoule',
        'MegawattHour',
        'TerawattHour',
        'Therm (EU)',
        'Therm (UK)',
        'Therm (US)',
        'WattHour',
      ])
      .openapi({ 'x-ms-summary': 'Source measurement' }),
    target: z
      .enum([
        'BritishThermalUnit',
        'Calorie',
        'ElectronVolt',
        'FootPound',
        'GigawattHour',
        'Joule',
        'Kilocalorie',
        'Kilojoule',
        'KilowattHour',
        'Megajoule',
        'MegawattHour',
        'TerawattHour',
        'Therm (EU)',
        'Therm (UK)',
        'Therm (US)',
        'WattHour',
      ])
      .openapi({ 'x-ms-summary': 'Target measurement' }),
  })
  .openapi({
    example: { input: 0.397155, source: 'Calorie', target: 'Joule' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputConvertEnergy')

const InputConvertPowerSchema = z
  .object({
    input: z.number().openapi({ 'x-ms-summary': 'Measurement value' }),
    source: z
      .enum([
        'BritishThermalUnitPerHour',
        'Decawatt',
        'Deciwatt',
        'ElectricalHorsepower',
        'Femtowatt',
        'Gigawatt',
        'HydraulicHorsepower',
        'Kilowatt',
        'MechanicalHorsepower',
        'Megawatt',
        'Microwatt',
        'Milliwatt',
        'Nanowatt',
        'Petawatt',
        'Picowatt',
        'Terawatt',
        'Watt',
      ])
      .openapi({ 'x-ms-summary': 'Source measurement' }),
    target: z
      .enum([
        'BritishThermalUnitPerHour',
        'Decawatt',
        'Deciwatt',
        'ElectricalHorsepower',
        'Femtowatt',
        'Gigawatt',
        'HydraulicHorsepower',
        'Kilowatt',
        'MechanicalHorsepower',
        'Megawatt',
        'Microwatt',
        'Milliwatt',
        'Nanowatt',
        'Petawatt',
        'Picowatt',
        'Terawatt',
        'Watt',
      ])
      .openapi({ 'x-ms-summary': 'Target measurement' }),
  })
  .openapi({
    example: { input: 0.866107, source: 'Gigawatt', target: 'Kilowatt' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputConvertPower')

const InputConvertSpeedSchema = z
  .object({
    input: z.number().openapi({ 'x-ms-summary': 'Measurement value' }),
    source: z
      .enum([
        'CentimeterPerHour',
        'CentimeterPerMinute',
        'CentimeterPerSecond',
        'DecimeterPerMinute',
        'DecimeterPerSecond',
        'FootPerHour',
        'FootPerMinute',
        'FootPerSecond',
        'InchPerHour',
        'InchPerMinute',
        'InchPerSecond',
        'KilometerPerHour',
        'KilometerPerMinute',
        'KilometerPerSecond',
        'Knot',
        'MeterPerHour',
        'MeterPerMinute',
        'MeterPerSecond',
        'MicrometerPerMinute',
        'MicrometerPerSecond',
        'MilePerHour',
        'MillimeterPerHour',
        'MillimeterPerMinute',
        'MillimeterPerSecond',
        'NanometerPerMinute',
        'NanometerPerSecond',
        'YardPerHour',
        'YardPerMinute',
        'YardPerSecond',
      ])
      .openapi({ 'x-ms-summary': 'Source measurement' }),
    target: z
      .enum([
        'CentimeterPerHour',
        'CentimeterPerMinute',
        'CentimeterPerSecond',
        'DecimeterPerMinute',
        'DecimeterPerSecond',
        'FootPerHour',
        'FootPerMinute',
        'FootPerSecond',
        'InchPerHour',
        'InchPerMinute',
        'InchPerSecond',
        'KilometerPerHour',
        'KilometerPerMinute',
        'KilometerPerSecond',
        'Knot',
        'MeterPerHour',
        'MeterPerMinute',
        'MeterPerSecond',
        'MicrometerPerMinute',
        'MicrometerPerSecond',
        'MilePerHour',
        'MillimeterPerHour',
        'MillimeterPerMinute',
        'MillimeterPerSecond',
        'NanometerPerMinute',
        'NanometerPerSecond',
        'YardPerHour',
        'YardPerMinute',
        'YardPerSecond',
      ])
      .openapi({ 'x-ms-summary': 'Target measurement' }),
  })
  .openapi({
    example: { input: 0.278054, source: 'Knot', target: 'MilePerHour' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputConvertSpeed')

const InputConvertTemperatureSchema = z
  .object({
    input: z.number().openapi({ 'x-ms-summary': 'Measurement value' }),
    source: z
      .enum(['Celsius', 'Fahrenheit', 'Newton', 'Kelvin'])
      .openapi({ 'x-ms-summary': 'Source measurement' }),
    target: z
      .enum(['Celsius', 'Fahrenheit', 'Newton', 'Kelvin'])
      .openapi({ 'x-ms-summary': 'Target measurement' }),
  })
  .openapi({
    example: { input: 10, source: 'Celsius', target: 'Fahrenheit' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputConvertTemperature')

const InputConvertVolumeSchema = z
  .object({
    input: z.number().openapi({ 'x-ms-summary': 'Measurement value' }),
    source: z
      .enum([
        'Centiliter',
        'CubicCentimeter',
        'CubicDecimeter',
        'CubicFoot',
        'CubicHectometer',
        'CubicInch',
        'CubicKilometer',
        'CubicMeter',
        'CubicMillimeter',
        'CubicYard',
        'Deciliter',
        'ImperialBeerBarrel',
        'ImperialGallon',
        'ImperialOunce',
        'ImperialPint',
        'Kiloliter',
        'Liter',
        'Microliter',
        'Milliliter',
        'Gallon',
        'Cup',
        'Ounce',
        'Pint',
        'Quart',
        'Tablespoon',
        'Teaspoon',
      ])
      .openapi({ 'x-ms-summary': 'Source measurement' }),
    target: z
      .enum([
        'Centiliter',
        'CubicCentimeter',
        'CubicDecimeter',
        'CubicFoot',
        'CubicHectometer',
        'CubicInch',
        'CubicKilometer',
        'CubicMeter',
        'CubicMillimeter',
        'CubicYard',
        'Deciliter',
        'ImperialBeerBarrel',
        'ImperialGallon',
        'ImperialOunce',
        'ImperialPint',
        'Kiloliter',
        'Liter',
        'Microliter',
        'Milliliter',
        'Gallon',
        'Cup',
        'Ounce',
        'Pint',
        'Quart',
        'Tablespoon',
        'Teaspoon',
      ])
      .openapi({ 'x-ms-summary': 'Target measurement' }),
  })
  .openapi({
    example: { input: 1.5, source: 'CubicFoot', target: 'CubicMeter' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputConvertVolume')

const InputConvertWeightSchema = z
  .object({
    input: z.number().openapi({ 'x-ms-summary': 'Measurement value' }),
    source: z
      .enum([
        'Centigram',
        'Decagram',
        'Decigram',
        'Grain',
        'Gram',
        'Hectogram',
        'Kilogram',
        'Microgram',
        'Milligram',
        'Nanogram',
        'Ounce',
        'Pound',
        'Stone',
        'Solar Mass',
        'Earth Mass',
        'Slug',
        'Short Ton',
        'Long Ton',
        'Ton',
        'Megaton',
        'Short Hundredweight',
        'Long Hundredweight',
      ])
      .openapi({ 'x-ms-summary': 'Source measurement' }),
    target: z
      .enum([
        'Centigram',
        'Decagram',
        'Decigram',
        'Grain',
        'Gram',
        'Hectogram',
        'Kilogram',
        'Microgram',
        'Milligram',
        'Nanogram',
        'Ounce',
        'Pound',
        'Stone',
        'Ton',
      ])
      .openapi({ 'x-ms-summary': 'Target measurement' }),
  })
  .openapi({
    example: { input: 5.7, source: 'Gram', target: 'Ounce' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputConvertWeight')

const InputCsvConversionJSONSchema = z
  .object({
    header: z
      .boolean()
      .default(true)
      .openapi({ description: 'Include header row', 'x-ms-summary': 'Header' }),
    input: z.string().openapi({ description: 'CSV string', 'x-ms-summary': 'Value' }),
  })
  .openapi({
    example: {
      header: true,
      input: 'Property1,Property2,Property3\r\nvalue,value,value\r\nvalue,value,value',
    },
    required: ['header', 'input'],
  })
  .openapi('InputCsvConversionJSON')

const InputCurrencyConversionSchema = z
  .object({
    input: z.number().openapi({ description: 'Amount to convert', 'x-ms-summary': 'Value' }),
    source: z
      .enum([
        'USD',
        'AUD',
        'BGN',
        'BRL',
        'CAD',
        'CHF',
        'CNY',
        'CZK',
        'DKK',
        'EUR',
        'GBP',
        'HKD',
        'HRK',
        'HUF',
        'IDR',
        'ILS',
        'INR',
        'ISK',
        'JPY',
        'KRW',
        'MXN',
        'MYR',
        'NOK',
        'NZD',
        'PHP',
        'PLN',
        'RON',
        'RUB',
        'SGD',
        'SEK',
        'THB',
        'TRY',
        'ZAR',
      ])
      .default('USD')
      .openapi({ 'x-ms-summary': 'Source currency' }),
    target: z
      .enum([
        'USD',
        'AUD',
        'BGN',
        'BRL',
        'CAD',
        'CHF',
        'CNY',
        'CZK',
        'DKK',
        'EUR',
        'GBP',
        'HKD',
        'HRK',
        'HUF',
        'IDR',
        'ILS',
        'INR',
        'ISK',
        'JPY',
        'KRW',
        'MXN',
        'MYR',
        'NOK',
        'NZD',
        'PHP',
        'PLN',
        'RON',
        'RUB',
        'SGD',
        'SEK',
        'THB',
        'TRY',
        'ZAR',
      ])
      .openapi({ 'x-ms-summary': 'Target currency' }),
  })
  .openapi({
    example: { input: 100.25, source: 'USD', target: 'CAD' },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputCurrencyConversion')

const InputCurrencyFormatSchema = z
  .object({
    input: z.number().openapi({ description: 'Amount to format', 'x-ms-summary': 'Value' }),
    target: z
      .enum([
        'USD',
        'AUD',
        'BGN',
        'BRL',
        'CAD',
        'CHF',
        'CNY',
        'CZK',
        'DKK',
        'EUR',
        'GBP',
        'HKD',
        'HRK',
        'HUF',
        'IDR',
        'ILS',
        'INR',
        'ISK',
        'JPY',
        'KRW',
        'MXN',
        'MYR',
        'NOK',
        'NZD',
        'PHP',
        'PLN',
        'RON',
        'RUB',
        'SGD',
        'SEK',
        'THB',
        'TRY',
        'ZAR',
      ])
      .openapi({ 'x-ms-summary': 'Target currency' }),
  })
  .openapi({ example: { input: 10980.79, target: 'GBP' }, required: ['input', 'target'] })
  .openapi('InputCurrencyFormat')

const InputDataQuerySchema = z
  .object({
    input: z.string().openapi({ description: 'XML or JSON string', 'x-ms-summary': 'Value' }),
    query: z.string().openapi({ description: 'XPath or JSONPath query', 'x-ms-summary': 'Query' }),
  })
  .openapi({
    example: {
      input: '{"properties": [{"name":"ID","value":"1234"},{"name":"Title","value":"Some Title"}]}',
      query: '$.properties[?(@.name == "ID")].value',
    },
    required: ['input', 'query'],
  })
  .openapi('InputDataQuery')

const InputDateTimeConversionSchema = z
  .object({
    format: z
      .string()
      .exactOptional()
      .openapi({
        description: "Display format (defaults to 'yyyy-MM-dd HH:mm:ss')",
        'x-ms-summary': 'Format',
      }),
    input: z.string().openapi({ description: 'Source date and time', 'x-ms-summary': 'Value' }),
    source: z
      .enum([
        'GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
        'Greenwich Standard Time - (GMT) Monrovia, Reykjavik',
        'W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        'Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        'Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
        'W. Central Africa Standard Time - (GMT+01:00) West Central Africa',
        'GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul',
        'Middle East Standard Time - (GMT+02:00) Beirut',
        'Egypt Standard Time - (GMT+02:00) Cairo',
        'South Africa Standard Time - (GMT+02:00) Harare, Pretoria',
        'FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
        'Israel Standard Time - (GMT+02:00) Jerusalem',
        'E. Europe Standard Time - (GMT+02:00) Minsk',
        'Namibia Standard Time - (GMT+02:00) Windhoek',
        'Arabic Standard Time - (GMT+03:00) Baghdad',
        'Arab Standard Time - (GMT+03:00) Kuwait, Riyadh',
        'Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd',
        'E. Africa Standard Time - (GMT+03:00) Nairobi',
        'Georgian Standard Time - (GMT+03:00) Tbilisi',
        'Iran Standard Time - (GMT+03:30) Tehran',
        'Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat',
        'Azerbaijan Standard Time - (GMT+04:00) Baku',
        'Mauritius Standard Time - (GMT+04:00) Port Louis',
        'Caucasus Standard Time - (GMT+04:00) Yerevan',
        'Afghanistan Standard Time - (GMT+04:30) Kabul',
        'Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg',
        'Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi',
        'West Asia Standard Time - (GMT+05:00) Tashkent',
        'India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
        'Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura',
        'Nepal Standard Time - (GMT+05:45) Kathmandu',
        'N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk',
        'Central Asia Standard Time - (GMT+06:00) Astana, Dhaka',
        'Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)',
        'SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta',
        'North Asia Standard Time - (GMT+07:00) Krasnoyarsk',
        'China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
        'North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar',
        'Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore',
        'W. Australia Standard Time - (GMT+08:00) Perth',
        'Taipei Standard Time - (GMT+08:00) Taipei',
        'Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo',
        'Korea Standard Time - (GMT+09:00) Seoul',
        'Yakutsk Standard Time - (GMT+09:00) Yakutsk',
        'Cen. Australia Standard Time - (GMT+09:30) Adelaide',
        'AUS Central Standard Time - (GMT+09:30) Darwin',
        'E. Australia Standard Time - (GMT+10:00) Brisbane',
        'AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney',
        'West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby',
        'Tasmania Standard Time - (GMT+10:00) Hobart',
        'Vladivostok Standard Time - (GMT+10:00) Vladivostok',
        'Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia',
        'New Zealand Standard Time - (GMT+12:00) Auckland, Wellington',
        'Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.',
        "Tonga Standard Time - (GMT+13:00) Nuku'alofa",
        'Azores Standard Time - (GMT-01:00) Azores',
        'Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.',
        'Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic',
        'E. South America Standard Time - (GMT-03:00) Brasilia',
        'Argentina Standard Time - (GMT-03:00) Buenos Aires',
        'SA Eastern Standard Time - (GMT-03:00) Georgetown',
        'Greenland Standard Time - (GMT-03:00) Greenland',
        'Montevideo Standard Time - (GMT-03:00) Montevideo',
        'Newfoundland Standard Time - (GMT-03:30) Newfoundland',
        'Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)',
        'SA Western Standard Time - (GMT-04:00) La Paz',
        'Central Brazilian Standard Time - (GMT-04:00) Manaus',
        'Pacific SA Standard Time - (GMT-04:00) Santiago',
        'Venezuela Standard Time - (GMT-04:30) Caracas',
        'SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco',
        'Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)',
        'US Eastern Standard Time - (GMT-05:00) Indiana (East)',
        'Central America Standard Time - (GMT-06:00) Central America',
        'Central Standard Time - (GMT-06:00) Central Time (US & Canada)',
        'Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey',
        'Canada Central Standard Time - (GMT-06:00) Saskatchewan',
        'US Mountain Standard Time - (GMT-07:00) Arizona',
        'Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan',
        'Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)',
        'Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)',
        'Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California',
        'Alaskan Standard Time - (GMT-09:00) Alaska',
        'Hawaiian Standard Time - (GMT-10:00) Hawaii',
        'Samoa Standard Time - (GMT-11:00) Midway Island, Samoa',
        'Dateline Standard Time - (GMT-12:00) International Date Line West',
      ])
      .default('GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London')
      .openapi({ 'x-ms-summary': 'Source Time Zone' }),
    target: z
      .enum([
        'GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
        'Greenwich Standard Time - (GMT) Monrovia, Reykjavik',
        'W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        'Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        'Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
        'W. Central Africa Standard Time - (GMT+01:00) West Central Africa',
        'GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul',
        'Middle East Standard Time - (GMT+02:00) Beirut',
        'Egypt Standard Time - (GMT+02:00) Cairo',
        'South Africa Standard Time - (GMT+02:00) Harare, Pretoria',
        'FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
        'Israel Standard Time - (GMT+02:00) Jerusalem',
        'E. Europe Standard Time - (GMT+02:00) Minsk',
        'Namibia Standard Time - (GMT+02:00) Windhoek',
        'Arabic Standard Time - (GMT+03:00) Baghdad',
        'Arab Standard Time - (GMT+03:00) Kuwait, Riyadh',
        'Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd',
        'E. Africa Standard Time - (GMT+03:00) Nairobi',
        'Georgian Standard Time - (GMT+03:00) Tbilisi',
        'Iran Standard Time - (GMT+03:30) Tehran',
        'Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat',
        'Azerbaijan Standard Time - (GMT+04:00) Baku',
        'Mauritius Standard Time - (GMT+04:00) Port Louis',
        'Caucasus Standard Time - (GMT+04:00) Yerevan',
        'Afghanistan Standard Time - (GMT+04:30) Kabul',
        'Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg',
        'Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi',
        'West Asia Standard Time - (GMT+05:00) Tashkent',
        'India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
        'Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura',
        'Nepal Standard Time - (GMT+05:45) Kathmandu',
        'N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk',
        'Central Asia Standard Time - (GMT+06:00) Astana, Dhaka',
        'Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)',
        'SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta',
        'North Asia Standard Time - (GMT+07:00) Krasnoyarsk',
        'China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
        'North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar',
        'Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore',
        'W. Australia Standard Time - (GMT+08:00) Perth',
        'Taipei Standard Time - (GMT+08:00) Taipei',
        'Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo',
        'Korea Standard Time - (GMT+09:00) Seoul',
        'Yakutsk Standard Time - (GMT+09:00) Yakutsk',
        'Cen. Australia Standard Time - (GMT+09:30) Adelaide',
        'AUS Central Standard Time - (GMT+09:30) Darwin',
        'E. Australia Standard Time - (GMT+10:00) Brisbane',
        'AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney',
        'West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby',
        'Tasmania Standard Time - (GMT+10:00) Hobart',
        'Vladivostok Standard Time - (GMT+10:00) Vladivostok',
        'Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia',
        'New Zealand Standard Time - (GMT+12:00) Auckland, Wellington',
        'Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.',
        "Tonga Standard Time - (GMT+13:00) Nuku'alofa",
        'Azores Standard Time - (GMT-01:00) Azores',
        'Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.',
        'Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic',
        'E. South America Standard Time - (GMT-03:00) Brasilia',
        'Argentina Standard Time - (GMT-03:00) Buenos Aires',
        'SA Eastern Standard Time - (GMT-03:00) Georgetown',
        'Greenland Standard Time - (GMT-03:00) Greenland',
        'Montevideo Standard Time - (GMT-03:00) Montevideo',
        'Newfoundland Standard Time - (GMT-03:30) Newfoundland',
        'Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)',
        'SA Western Standard Time - (GMT-04:00) La Paz',
        'Central Brazilian Standard Time - (GMT-04:00) Manaus',
        'Pacific SA Standard Time - (GMT-04:00) Santiago',
        'Venezuela Standard Time - (GMT-04:30) Caracas',
        'SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco',
        'Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)',
        'US Eastern Standard Time - (GMT-05:00) Indiana (East)',
        'Central America Standard Time - (GMT-06:00) Central America',
        'Central Standard Time - (GMT-06:00) Central Time (US & Canada)',
        'Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey',
        'Canada Central Standard Time - (GMT-06:00) Saskatchewan',
        'US Mountain Standard Time - (GMT-07:00) Arizona',
        'Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan',
        'Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)',
        'Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)',
        'Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California',
        'Alaskan Standard Time - (GMT-09:00) Alaska',
        'Hawaiian Standard Time - (GMT-10:00) Hawaii',
        'Samoa Standard Time - (GMT-11:00) Midway Island, Samoa',
        'Dateline Standard Time - (GMT-12:00) International Date Line West',
      ])
      .default('GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London')
      .openapi({ 'x-ms-summary': 'Target Time Zone' }),
  })
  .openapi({
    example: {
      format: 'yyyy-MM-dd HH:mm:ss',
      input: '03/10/2010 09:00:00',
      source: 'GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
      target: 'Central Standard Time - (GMT-06:00) Central Time (US & Canada)',
    },
    required: ['input', 'source', 'target'],
  })
  .openapi('InputDateTimeConversion')

const InputDateTimeDifferenceSchema = z
  .object({
    dateTime1: z
      .string()
      .openapi({ description: 'First date/time value', 'x-ms-summary': 'First date/time value' }),
    dateTime2: z
      .string()
      .openapi({ description: 'Second date/time value', 'x-ms-summary': 'Second date/time value' }),
  })
  .openapi({
    example: { dateTime1: '1/1/2010 12:37:19', dateTime2: '3/15/2011 14:27:49' },
    required: ['dateTime1', 'dateTime2'],
  })
  .openapi('InputDateTimeDifference')

const InputDateTimeFormatSchema = z
  .object({
    culture: z
      .enum([
        'en-US',
        'af-ZA',
        'ar-AE',
        'ar-BH',
        'ar-DZ',
        'ar-EG',
        'ar-IQ',
        'ar-JO',
        'ar-KW',
        'ar-LB',
        'ar-LY',
        'ar-MA',
        'ar-OM',
        'ar-QA',
        'ar-SA',
        'ar-SY',
        'ar-TN',
        'ar-YE',
        'az-AZ',
        'be-BY',
        'bg-BG',
        'bs-BA',
        'ca-ES',
        'cs-CZ',
        'cy-GB',
        'da-DK',
        'de-AT',
        'de-CH',
        'de-DE',
        'de-LI',
        'de-LU',
        'el-GR',
        'en-AU',
        'en-BZ',
        'en-CA',
        'en-CB',
        'en-GB',
        'en-IE',
        'en-JM',
        'en-NZ',
        'en-PH',
        'en-TT',
        'en-ZA',
        'en-ZW',
        'es-AR',
        'es-BO',
        'es-CL',
        'es-CO',
        'es-CR',
        'es-DO',
        'es-EC',
        'es-ES',
        'es-GT',
        'es-HN',
        'es-MX',
        'es-NI',
        'es-PA',
        'es-PE',
        'es-PR',
        'es-PY',
        'es-SV',
        'es-UY',
        'es-VE',
        'et-EE',
        'eu-ES',
        'fa-IR',
        'fi-FI',
        'fo-FO',
        'fr-BE',
        'fr-CA',
        'fr-CH',
        'fr-FR',
        'fr-LU',
        'fr-MC',
        'gl-ES',
        'gu-IN',
        'he-IL',
        'hi-IN',
        'hr-BA',
        'hr-HR',
        'hu-HU',
        'hy-AM',
        'id-ID',
        'is-IS',
        'it-CH',
        'it-IT',
        'ja-JP',
        'ka-GE',
        'kk-KZ',
        'kn-IN',
        'ko-KR',
        'ky-KG',
        'lt-LT',
        'lv-LV',
        'mi-NZ',
        'mn-MN',
        'mr-IN',
        'ms-BN',
        'ms-MY',
        'mt-MT',
        'nl-BE',
        'nl-NL',
        'nn-NO',
        'ns-ZA',
        'pa-IN',
        'pl-PL',
        'ps-AR',
        'pt-BR',
        'pt-PT',
        'ro-RO',
        'ru-RU',
        'sa-IN',
        'sk-SK',
        'sl-SI',
        'sq-AL',
        'sr-BA',
        'sr-SP',
        'sv-FI',
        'sv-SE',
        'sw-KE',
        'ta-IN',
        'te-IN',
        'th-TH',
        'tl-PH',
        'tn-ZA',
        'tr-TR',
        'uk-UA',
        'ur-PK',
        'uz-UZ',
        'vi-VN',
        'zh-CN',
        'zh-HK',
        'zh-MO',
        'zh-SG',
        'zh-TW',
        'zu-ZA',
      ])
      .default('en-US')
      .openapi({ description: 'Language culture', 'x-ms-summary': 'Culture' }),
    format: z.string().openapi({ description: 'Output format', 'x-ms-summary': 'Format' }),
    input: z.string().openapi({ description: 'Source date and time', 'x-ms-summary': 'Value' }),
  })
  .openapi({
    example: { culture: 'en-GB', format: 'ddd', input: '03/10/2010 00:00:00' },
    required: ['culture', 'format', 'input'],
  })
  .openapi('InputDateTimeFormat')

const InputDateTimeInfoSchema = z
  .object({
    culture: z
      .enum([
        'en-US',
        'af-ZA',
        'ar-AE',
        'ar-BH',
        'ar-DZ',
        'ar-EG',
        'ar-IQ',
        'ar-JO',
        'ar-KW',
        'ar-LB',
        'ar-LY',
        'ar-MA',
        'ar-OM',
        'ar-QA',
        'ar-SA',
        'ar-SY',
        'ar-TN',
        'ar-YE',
        'az-AZ',
        'be-BY',
        'bg-BG',
        'bs-BA',
        'ca-ES',
        'cs-CZ',
        'cy-GB',
        'da-DK',
        'de-AT',
        'de-CH',
        'de-DE',
        'de-LI',
        'de-LU',
        'el-GR',
        'en-AU',
        'en-BZ',
        'en-CA',
        'en-CB',
        'en-GB',
        'en-IE',
        'en-JM',
        'en-NZ',
        'en-PH',
        'en-TT',
        'en-ZA',
        'en-ZW',
        'es-AR',
        'es-BO',
        'es-CL',
        'es-CO',
        'es-CR',
        'es-DO',
        'es-EC',
        'es-ES',
        'es-GT',
        'es-HN',
        'es-MX',
        'es-NI',
        'es-PA',
        'es-PE',
        'es-PR',
        'es-PY',
        'es-SV',
        'es-UY',
        'es-VE',
        'et-EE',
        'eu-ES',
        'fa-IR',
        'fi-FI',
        'fo-FO',
        'fr-BE',
        'fr-CA',
        'fr-CH',
        'fr-FR',
        'fr-LU',
        'fr-MC',
        'gl-ES',
        'gu-IN',
        'he-IL',
        'hi-IN',
        'hr-BA',
        'hr-HR',
        'hu-HU',
        'hy-AM',
        'id-ID',
        'is-IS',
        'it-CH',
        'it-IT',
        'ja-JP',
        'ka-GE',
        'kk-KZ',
        'kn-IN',
        'ko-KR',
        'ky-KG',
        'lt-LT',
        'lv-LV',
        'mi-NZ',
        'mn-MN',
        'mr-IN',
        'ms-BN',
        'ms-MY',
        'mt-MT',
        'nl-BE',
        'nl-NL',
        'nn-NO',
        'ns-ZA',
        'pa-IN',
        'pl-PL',
        'ps-AR',
        'pt-BR',
        'pt-PT',
        'ro-RO',
        'ru-RU',
        'sa-IN',
        'sk-SK',
        'sl-SI',
        'sq-AL',
        'sr-BA',
        'sr-SP',
        'sv-FI',
        'sv-SE',
        'sw-KE',
        'ta-IN',
        'te-IN',
        'th-TH',
        'tl-PH',
        'tn-ZA',
        'tr-TR',
        'uk-UA',
        'ur-PK',
        'uz-UZ',
        'vi-VN',
        'zh-CN',
        'zh-HK',
        'zh-MO',
        'zh-SG',
        'zh-TW',
        'zu-ZA',
      ])
      .default('en-US')
      .openapi({ description: 'Language culture', 'x-ms-summary': 'Culture' }),
    input: z.string().openapi({ description: 'Source date and time', 'x-ms-summary': 'Value' }),
  })
  .openapi({
    example: { culture: 'en-GB', input: '03/10/2010 09:00:00' },
    required: ['culture', 'input'],
  })
  .openapi('InputDateTimeInfo')

const InputGenerateHashSchema = z
  .object({
    algorithm: z
      .enum(['MD5', 'SHA1', 'SHA256', 'SHA384', 'SHA512'])
      .openapi({ description: 'Hash algorithm', 'x-ms-summary': 'Algorithm' }),
    input: z.string().openapi({ description: 'Hash source string', 'x-ms-summary': 'Input' }),
  })
  .openapi({
    example: { algorithm: 'SHA256', source: 'text to hash' },
    required: ['algorithm', 'input'],
  })
  .openapi('InputGenerateHash')

const InputGenerateUniqueIDSchema = z
  .object({
    uppercase: z
      .union([z.literal(true), z.literal(false)])
      .openapi({ description: 'All uppercase alpha characters', 'x-ms-summary': 'Uppercase' }),
  })
  .openapi({ example: { uppercase: true }, required: ['uppercase'] })
  .openapi('InputGenerateUniqueID')

const InputJoinStringsSchema = z
  .object({
    input: z
      .array(z.string())
      .openapi({ description: 'Collection of strings to be joined', 'x-ms-summary': 'Values' }),
    lower: z
      .union([z.literal(true), z.literal(false)])
      .openapi({
        description: 'Convert strings in collection to lowercase',
        'x-ms-summary': 'Lowercase',
      }),
    separator: z
      .string()
      .openapi({ description: 'Separator character', 'x-ms-summary': 'Separator' }),
    trim: z
      .union([z.literal(true), z.literal(false)])
      .openapi({ description: 'Trim strings in collection', 'x-ms-summary': 'Trim' }),
  })
  .openapi({
    example: { input: ['The', 'brown', 'cow'], lower: true, separator: ';', trim: true },
    required: ['input', 'lower', 'separator', 'trim'],
  })
  .openapi('InputJoinStrings')

const InputJsonConversionCSVSchema = z
  .object({
    header: z
      .boolean()
      .default(true)
      .openapi({ description: 'Include header row', 'x-ms-summary': 'Header' }),
    input: z.string().openapi({ description: 'JSON array object', 'x-ms-summary': 'Value' }),
    omit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Columns to omit (comma separated)',
        'x-ms-summary': 'Omit Columns',
      }),
    order: z
      .string()
      .exactOptional()
      .openapi({ description: 'Column order (comma separated)', 'x-ms-summary': 'Order' }),
  })
  .openapi({
    example: {
      header: true,
      input: [{ property1: 'value' }, { property2: 'value' }, { property3: 'value' }],
      omit: 'property1',
      order: 'property3,property2',
    },
    required: ['header', 'input'],
  })
  .openapi('InputJsonConversionCSV')

const InputJsonConversionHTMLSchema = z
  .object({
    alternate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Alternate header row markup', 'x-ms-summary': 'Alternate Header' }),
    attributes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional table attributes (single quoted values)',
        'x-ms-summary': 'Table Attributes',
      }),
    header: z
      .boolean()
      .default(true)
      .openapi({ description: 'Include header row', 'x-ms-summary': 'Header' }),
    input: z.string().openapi({ description: 'JSON array object', 'x-ms-summary': 'Value' }),
    omit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Columns to omit (comma separated)',
        'x-ms-summary': 'Omit Columns',
      }),
    order: z
      .string()
      .exactOptional()
      .openapi({ description: 'Column order (comma separated)', 'x-ms-summary': 'Order' }),
  })
  .openapi({
    example: {
      alternate: '<tr><th>Property 3</th><th>Property 2</th></tr>',
      attributes: "style='width:100%;text-align:center;'",
      header: false,
      input: [{ property1: 'value' }, { property2: 'value' }, { property3: 'value' }],
      omit: 'property1',
      order: 'property3,property2',
    },
    required: ['header', 'input'],
  })
  .openapi('InputJsonConversionHTML')

const InputJsonConversionXMLSchema = z
  .object({
    input: z.string().openapi({ description: 'JSON array object', 'x-ms-summary': 'Value' }),
    root: z.string().openapi({ description: 'Name of root node', 'x-ms-summary': 'Root Name' }),
  })
  .openapi({
    example: {
      input: '{"property1":"value","property2":"value","property3":"value"}',
      root: 'Properties',
    },
    required: ['input', 'root'],
  })
  .openapi('InputJsonConversionXML')

const InputMarketIndexSchema = z
  .object({
    date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Date (yyyy-MM-dd, leave empty for last trading day)',
        'x-ms-summary': 'Date',
      }),
    symbol: z
      .enum([
        'DJA.INDX (Dow Jones Composite Average)',
        'DJI.INDX (Dow Jones Industrial Average)',
        'DJT.INDX (Dow Jones Transportation)',
        'DJUS.INDX (Dow Jones US)',
        'DXY.INDX (US Dollar Index)',
        'GDOW.INDX (Global Dow USD)',
        'NY.INDX (NYSE US 100 Index)',
        'NYA.INDX (NYSE Composite)',
        'IXIC.INDX (NASDAQ Composite)',
        'NDX.INDX (NASDAQ 100)',
        'GSPC.INDX (S&P 500)',
        'ES.INDX (S&P 500 Futures)',
        'MID.INDX (S&P Midcap 400)',
        'GPTSE.INDX (S&P TSX Composite Index [Canada])',
        'FTSE.INDX (FTSE 100 Index [UK])',
        'CDAXX.INDX (DAX Composite Index [Germany])',
        'GDAXI.INDX (DAX Index [Germany])',
        'HSCE.INDX (Hang Seng China Enterprise (CEI))',
        'HSI.INDX (Hang Seng Index [Hong Kong])',
        'N100.INDX (EuroNext 100)',
        'N225.INDX (Nikkei 225 Index)',
        'RTSI.INDX (RTSI Index [Russia])',
        'SSEC.INDX (Shanghai Composite)',
        'SSMI.INDX (Swiss Market Index)',
      ])
      .openapi({ description: 'Market index', 'x-ms-summary': 'Index' }),
  })
  .openapi({
    example: { date: '2020-10-07T00:00:00.000Z', symbol: 'DJI.INDX' },
    required: ['symbol'],
  })
  .openapi('InputMarketIndex')

const InputNumberRangeSchema = z
  .object({
    end: z.number().min(0).openapi({ description: 'End of range', 'x-ms-summary': 'End' }),
    start: z.number().min(0).openapi({ description: 'Start of range', 'x-ms-summary': 'Start' }),
  })
  .openapi({ example: { end: 1000000, start: 1 }, required: ['end', 'start'] })
  .openapi('InputNumberRange')

const InputQRCodeSchema = z
  .object({
    input: z
      .string()
      .openapi({
        description: 'Text value(s) (vertical bar delimited by type)',
        'x-ms-summary': 'Value',
      }),
    payload: z
      .enum([
        'Plain Text (string)',
        'Bitcoin Payment (address|amount|label|message)',
        'Bookmark (url|title)',
        "Calendar Event (subject|description|location|start|end|allDayEvent['true' or 'false']|format ['universal' or 'iCal'])",
        'Geolocation (latitude|longitude)',
        'Mail (recipient|subject|message)',
        'Phone Number (string)',
        'SMS (number|message)',
        'URL (string)',
        "WiFi (ssid|password|authenticationMode ['WEP', 'WPA' or 'WPA2'])",
      ])
      .default('Plain Text (string)')
      .openapi({ description: 'Payload type', 'x-ms-summary': 'Type' }),
  })
  .openapi({
    example: { input: 'someone@example.com|Test message|This is a test.', payload: 'Mail' },
    required: ['input', 'payload'],
  })
  .openapi('InputQRCode')

const InputRedactStringSchema = z
  .object({
    regex: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Regular expression pattern for matching strings',
        'x-ms-summary': '-OR- Regular Expression',
      }),
    source: z
      .string()
      .openapi({
        description: 'String containing the complete text',
        'x-ms-summary': 'Source String',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Individual string to redact', 'x-ms-summary': 'Value' }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Collection of strings to redact',
        'x-ms-summary': '-OR- Values Collection',
      }),
  })
  .openapi({
    example: {
      regex: '[A-Za-z]{5}',
      source: 'The brown cow',
      value: 'brown',
      values: ['The', 'brown', 'cow'],
    },
    required: ['source'],
  })
  .openapi('InputRedactString')

const InputReplaceStringSchema = z
  .object({
    replacement: z
      .string()
      .openapi({ description: 'Replacement text', 'x-ms-summary': 'Replacement' }),
    source: z
      .string()
      .openapi({
        description: 'String containing the text to be replaced',
        'x-ms-summary': 'Source',
      }),
    value: z.string().openapi({ description: 'Text to replace', 'x-ms-summary': 'Value' }),
  })
  .openapi({
    example: { replacement: 'dog', source: 'The brown cow', value: 'cow' },
    required: ['replacement', 'source', 'value'],
  })
  .openapi('InputReplaceString')

const InputSplitStringSchema = z
  .object({
    characters: z
      .string()
      .openapi({
        description: 'One or more characters that will be used to split the text',
        'x-ms-summary': 'Character(s)',
      }),
    input: z.string().openapi({ description: 'Text to split', 'x-ms-summary': 'Value' }),
  })
  .openapi({
    example: { characters: ',', input: 'The,brown,cow' },
    required: ['characters', 'input'],
  })
  .openapi('InputSplitString')

const InputStockPricesSchema = z
  .object({
    date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Date (yyyy-MM-dd, leave empty for latest)',
        'x-ms-summary': 'Date',
      }),
    exchange: z
      .enum([
        'XNYS (New York Stock Exchange)',
        'XNAS (NASDAQ Stock Exchange)',
        'XBRU (Euronext Brussels)',
        'XTSE (Toronto Stock Exchange)',
        'XCNQ (Candadian Securities Exchange)',
        'XSHG (Shanghai Stock Exchange)',
        'XCSE (Copenhagen Stock Exchange)',
        'XPAR (Euronext Paris)',
        'XFRA (Deutsche Borse)',
        'XHKG (Hong Kong Stock Exchange)',
        'XNSE (National Stock Exchange India)',
        'XTAE (Tel Aviv Stock Exchange)',
        'XNGO (Nagoya Stock Exchange)',
        'XFKA (Fukuoka Stock Exchange)',
        'XSAP (Sapporo Stock Exchange)',
        'XMEX (Mexican Stock Exchange)',
        'XNZE (New Zealand Stock Exchange)',
        'XLIS (Euronext Lisbon)',
        'MISX (Moscow Stock Exchange)',
        'XSES (Singapore Stock Exchange)',
        'XLON (London Stock Exchange)',
        'XASE (American Stock Exchange)',
        'XASX (Australia Stock Exchange)',
        'XDFM (Dubai Financial Market)',
        'XBKK (Stock Exchange of Thailand)',
        'XSWX (SIX Swiss Exchange)',
        'XSTO (Stockholm Stock Exchange)',
        'BMEX (Bolsas y Mercados Españoles)',
        'XJSE (Johannesburg Stock Exchange)',
      ])
      .exactOptional()
      .openapi({ description: 'Stock exchange', 'x-ms-summary': 'Exchange' }),
    symbols: z
      .string()
      .openapi({
        description: 'Stock ticker symbols (comma-separated, max 20)',
        'x-ms-summary': 'Symbols',
      }),
  })
  .openapi({
    example: {
      date: '2020-10-07T00:00:00.000Z',
      exchange: 'XNYS (New York Stock Exchange)',
      symbols: 'MMM,CVX',
    },
    required: ['symbols'],
  })
  .openapi('InputStockPrices')

const InputStringSchema = z
  .object({
    source: z
      .string()
      .openapi({ description: 'String variable or text value', 'x-ms-summary': 'Source' }),
  })
  .openapi({ example: { source: 'The brown cow' }, required: ['source'] })
  .openapi('InputString')

const InputStringComparisonSchema = z
  .object({
    compare: z.string().openapi({ description: 'Comparison string', 'x-ms-summary': 'Target' }),
    input: z.string().openapi({ description: 'Original string', 'x-ms-summary': 'Source' }),
    lower: z
      .union([z.literal(true), z.literal(false)])
      .openapi({
        description: 'Convert strings to lowercase before comparison',
        'x-ms-summary': 'Lowercase',
      }),
    trim: z
      .union([z.literal(true), z.literal(false)])
      .openapi({ description: 'Trim strings before comparison', 'x-ms-summary': 'Trim' }),
  })
  .openapi({
    example: { compare: 'dog', input: 'Cow', lower: true, trim: true },
    required: ['compare', 'input', 'lower', 'trim'],
  })
  .openapi('InputStringComparison')

const InputStringContainsSchema = z
  .object({
    find: z.string().openapi({ description: 'Text to match', 'x-ms-summary': 'Value' }),
    input: z.string().openapi({ description: 'Text to search', 'x-ms-summary': 'Target' }),
    lower: z
      .union([z.literal(true), z.literal(false)])
      .openapi({ description: 'Convert strings to lowercase', 'x-ms-summary': 'Lowercase' }),
  })
  .openapi({
    example: { find: 'cow', input: 'The brown cow', lower: true },
    required: ['find', 'input', 'lower'],
  })
  .openapi('InputStringContains')

const InputStringToFileSchema = z
  .object({
    extension: z
      .enum(['TXT', 'CSV', 'HTML', 'XML', 'CSS', 'JSON', 'JS'])
      .default('TXT')
      .openapi({ description: 'File extension', 'x-ms-summary': 'Extension' }),
    filename: z
      .string()
      .openapi({ description: 'Name of file (without extension)', 'x-ms-summary': 'Filename' }),
    input: z
      .string()
      .openapi({ description: 'Text string (body of file)', 'x-ms-summary': 'Value' }),
  })
  .openapi({
    example: { extension: 'TXT', filename: 'Test', input: 'This is a test.' },
    required: ['extension', 'filename', 'input'],
  })
  .openapi('InputStringToFile')

const InputTextToSpeechSchema = z
  .object({
    text: z
      .string()
      .openapi({ description: 'Text to convert (10,000 characters max)', 'x-ms-summary': 'Text' }),
    type: z
      .enum(['PlainText', 'SSML'])
      .default('PlainText')
      .openapi({ description: 'Text or file type', 'x-ms-summary': 'Text or file type' }),
    voice: z
      .enum([
        'ar-EG, Hoda (Female)',
        'ar-SA, Naayf (Male)',
        'bg-BG, Ivan (Male)',
        'ca-ES, Herena (Female)',
        'cs-CZ, Jakub (Male)',
        'da-DK, Helle (Female)',
        'de-AT, Michael (Male)',
        'de-CH, Karsten (Male)',
        'de-DE, Hedda (Female)',
        'de-DE, Stefan (Male)',
        'el-GR, Stefanos (Male)',
        'en-AU, Catherine (Female)',
        'en-AU, Hayley (Female)',
        'en-CA, Heather (Female)',
        'en-CA, Linda (Female)',
        'en-GB, George (Male)',
        'en-GB, Hazel (Female)',
        'en-GB, Susan (Female)',
        'en-IE, Sean (Male)',
        'en-IN, Heera (Female)',
        'en-IN, Priya (Female)',
        'en-IN, Ravi (Male)',
        'en-US, Aria (Female)',
        'en-US, Benjamin (Male)',
        'en-US, Guy (Male)',
        'en-US, Zira (Female)',
        'es-ES, Helena (Female)',
        'es-ES, Laura (Female)',
        'es-ES, Pablo (Male)',
        'es-MX, Hilda (Female)',
        'es-MX, Raul (Male)',
        'fi-FI, Heidi (Female)',
        'fr-CA, Caroline (Female)',
        'fr-CA, Harmonie (Female)',
        'fr-CH, Guillaume (Male)',
        'fr-FR, Hortense (Female)',
        'fr-FR, Julie (Female)',
        'fr-FR, Paul (Male)',
        'he-IL, Asaf (Male)',
        'hi-IN, Hemant (Male)',
        'hi-IN, Kalpana (Female)',
        'hr-HR, Matej (Male)',
        'hu-HU, Szabolcs (Male)',
        'id-ID, Andika (Male)',
        'it-IT, Cosimo (Male)',
        'it-IT, Lucia (Female)',
        'ja-JP, Ayumi (Female)',
        'ja-JP, Haruka (Female)',
        'ja-JP, Ichiro (Male)',
        'ko-KR, Heami (Female)',
        'ms-MY, Rizwan (Male)',
        'nb-NO, Hulda (Female)',
        'nl-NL, Hanna (Female)',
        'pl-PL, Paulina (Female)',
        'pt-BR, Daniel (Male)',
        'pt-BR, Heloisa (Female)',
        'pt-PT, Helia (Female)',
        'ro-RO, Andrei (Male)',
        'ru-RU, Ekaterina (Female)',
        'ru-RU, Irina (Female)',
        'ru-RU, Pavel (Male)',
        'sk-SK, Filip (Male)',
        'sl-SI, Lado (Male)',
        'sv-SE, Hedvig (Female)',
        'ta-IN, Valluvar (Male)',
        'te-IN, Chitra (Female)',
        'th-TH, Pattara (Male)',
        'tr-TR, Seda (Female)',
        'vi-VN, An (Male)',
        'zh-CN, Huihui (Female)',
        'zh-CN, Kangkang (Male)',
        'zh-CN, Yaoyao (Female)',
        'zh-HK, Danny (Male)',
        'zh-HK, Tracy (Female)',
        'zh-TW, HanHan (Female)',
        'zh-TW, Yating (Female)',
        'zh-TW, Zhiwei (Male)',
      ])
      .default('en-US, Aria (Female)')
      .openapi({
        description: 'Voice locale (must match language of input text)',
        'x-ms-summary': 'Voice',
      }),
  })
  .openapi({
    example: { text: 'This is sample text.', type: 'PlainText', voice: 'en-US, Aria (Female)' },
    required: ['text', 'type', 'voice'],
  })
  .openapi('InputTextToSpeech')

const InputTranslateStringSchema = z
  .object({
    input: z
      .string()
      .openapi({
        description: 'String containing the text to be translated',
        'x-ms-summary': 'Value',
      }),
    language: z
      .enum([
        'Arabic',
        'Chinese (Simplified)',
        'Czech',
        'Danish',
        'Dutch',
        'English',
        'Finnish',
        'French',
        'German',
        'Greek',
        'Hindi',
        'Hungarian',
        'Italian',
        'Japanese',
        'Klingon',
        'Korean',
        'Norweigan',
        'Polish',
        'Portuguese',
        'Russian',
        'Spanish',
        'Swedish',
        'Turkish',
        'Vietnamese',
        'Welsh',
      ])
      .openapi({ description: 'Translation language', 'x-ms-summary': 'Language' }),
  })
  .openapi({
    example: { input: 'The brown cow', language: 'German' },
    required: ['input', 'language'],
  })
  .openapi('InputTranslateString')

const InputTrimStringSchema = z
  .object({
    source: z
      .string()
      .openapi({
        description: 'String containing the text to be trimmed',
        'x-ms-summary': 'Source',
      }),
    type: z
      .enum(['Start', 'End', 'Both'])
      .openapi({ description: 'Type of white space to remove', 'x-ms-summary': 'Type' }),
  })
  .openapi({ example: { source: '  The brown cow  ', type: 'Both' }, required: ['source', 'type'] })
  .openapi('InputTrimString')

const InputVerifyHashSchema = z
  .object({
    algorithm: z
      .enum(['MD5', 'SHA1', 'SHA256', 'SHA384', 'SHA512'])
      .openapi({ description: 'Hash algorithm', 'x-ms-summary': 'Algorithm' }),
    hash: z.string().openapi({ description: 'Hashed result', 'x-ms-summary': 'Hash' }),
    input: z.string().openapi({ description: 'Original source string', 'x-ms-summary': 'Input' }),
  })
  .openapi({
    example: {
      algorithm: 'SHA256',
      hash: 'a52b8248f023cebd33aeeddda695f60d2561c0c9',
      source: 'this is a really good test',
    },
    required: ['algorithm', 'hash', 'input'],
  })
  .openapi('InputVerifyHash')

const InputXmlConversionJSONSchema = z
  .object({ input: z.string().openapi({ description: 'XML string', 'x-ms-summary': 'Value' }) })
  .openapi({
    example: { input: '<properties><property1>value</property1></properties>' },
    required: ['input'],
  })
  .openapi('InputXmlConversionJSON')

const OutputBooleanSchema = z
  .object({
    result: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Result', 'x-ms-summary': 'Result' }),
  })
  .openapi({ example: { result: true }, required: [] })
  .openapi('OutputBoolean')

const OutputCollectionNumberSchema = z
  .object({
    item: z
      .number()
      .exactOptional()
      .openapi({ description: 'First Value', 'x-ms-summary': 'First Value' }),
    items: z
      .array(z.number())
      .exactOptional()
      .openapi({ description: 'All Values', 'x-ms-summary': 'All Values' }),
    status: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Success', 'x-ms-summary': 'Success' }),
  })
  .openapi({ example: { item: 1.25, status: false }, required: [] })
  .openapi('OutputCollectionNumber')

const OutputCollectionResultSchema = z
  .object({
    result: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Modified collection result',
        'x-ms-summary': 'Modified collection result',
      }),
  })
  .openapi({ example: { result: ['a', 'b', 'c'] }, required: [] })
  .openapi('OutputCollectionResult')

const OutputCollectionStringSchema = z
  .object({
    item: z
      .string()
      .exactOptional()
      .openapi({ description: 'First Value', 'x-ms-summary': 'First Value' }),
    items: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'All Values', 'x-ms-summary': 'All Values' }),
    status: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Success', 'x-ms-summary': 'Success' }),
  })
  .openapi({ example: { item: 'string', status: false }, required: [] })
  .openapi('OutputCollectionString')

const OutputDateDifferenceSchema = z
  .object({
    days: z.number().exactOptional().openapi({ description: 'Days', 'x-ms-summary': 'Days' }),
    hours: z.number().exactOptional().openapi({ description: 'Hours', 'x-ms-summary': 'Hours' }),
    milliseconds: z
      .number()
      .exactOptional()
      .openapi({ description: 'Milliseconds', 'x-ms-summary': 'Milliseconds' }),
    minutes: z
      .number()
      .exactOptional()
      .openapi({ description: 'Minutes', 'x-ms-summary': 'Minutes' }),
    months: z.number().exactOptional().openapi({ description: 'Months', 'x-ms-summary': 'Months' }),
    ticks: z.number().exactOptional().openapi({ description: 'Ticks', 'x-ms-summary': 'Ticks' }),
    totalDays: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total Days', 'x-ms-summary': 'Total Days' }),
    totalHours: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total Hours', 'x-ms-summary': 'Total Hours' }),
    totalMilliseconds: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total Milliseconds', 'x-ms-summary': 'Total Milliseconds' }),
    totalMinutes: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total Minutes', 'x-ms-summary': 'Total Minutes' }),
    totalMonths: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total Months', 'x-ms-summary': 'Total Months' }),
    totalSeconds: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total Seconds', 'x-ms-summary': 'Total Seconds' }),
    totalYears: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total Years', 'x-ms-summary': 'Total Years' }),
    years: z.number().exactOptional().openapi({ description: 'Years', 'x-ms-summary': 'Years' }),
  })
  .openapi({
    example: {
      days: 14,
      hours: 1,
      milliseconds: 0,
      minutes: 50,
      months: 2,
      seconds: 30,
      ticks: 378498300000000,
      totalDays: 438.08,
      totalHours: 10513.84,
      totalMilliseconds: 37849830000,
      totalMinutes: 630830.5,
      totalMonths: 14.39,
      totalSeconds: 37849830,
      totalYears: 1.2,
      years: 1,
    },
    required: [],
  })
  .openapi('OutputDateDifference')

const OutputDateInfoSchema = z
  .object({
    DayOfWeek: z
      .number()
      .exactOptional()
      .openapi({ description: 'DayOfWeek', 'x-ms-summary': 'DayOfWeek' }),
    DayOfYear: z
      .number()
      .exactOptional()
      .openapi({ description: 'DayOfYear', 'x-ms-summary': 'DayOfYear' }),
    MinutesInDay: z
      .number()
      .exactOptional()
      .openapi({ description: 'MinutesInDay', 'x-ms-summary': 'MinutesInDay' }),
    SecondsInDay: z
      .number()
      .exactOptional()
      .openapi({ description: 'SecondsInDay', 'x-ms-summary': 'SecondsInDay' }),
    Ticks: z.number().exactOptional().openapi({ description: 'Ticks', 'x-ms-summary': 'Ticks' }),
    WeekOfYear: z
      .number()
      .exactOptional()
      .openapi({ description: 'WeekOfYear', 'x-ms-summary': 'WeekOfYear' }),
  })
  .openapi({
    example: {
      DayOfWeek: 2,
      DayOfYear: 25,
      MinutesInDay: 359,
      SecondsInDay: 1234,
      Ticks: 1234567890,
      WeekOfYear: 10,
    },
    required: [],
  })
  .openapi('OutputDateInfo')

const OutputFileByteSchema = z
  .object({
    result: z
      .string()
      .regex(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)
      .exactOptional()
      .openapi({ description: 'Result', 'x-ms-summary': 'Result' }),
  })
  .openapi({ example: { result: 'Base64 encoded string (byte array)' }, required: [] })
  .openapi('OutputFileByte')

const OutputMarketIndexSchema = z
  .object({
    adj_close: z
      .number()
      .exactOptional()
      .openapi({ description: 'Adjusted close value', 'x-ms-summary': 'Adjusted Close' }),
    adj_high: z
      .number()
      .exactOptional()
      .openapi({ description: 'Adjusted high value', 'x-ms-summary': 'Adjusted High' }),
    adj_low: z
      .number()
      .exactOptional()
      .openapi({ description: 'Adjusted low value', 'x-ms-summary': 'Adjusted Low' }),
    adj_open: z
      .number()
      .exactOptional()
      .openapi({ description: 'Adjusted open value', 'x-ms-summary': 'Adjusted Open' }),
    adj_volume: z
      .number()
      .exactOptional()
      .openapi({ description: 'Adjusted trading volume', 'x-ms-summary': 'Adjusted Volume' }),
    close: z
      .number()
      .exactOptional()
      .openapi({ description: 'Close value', 'x-ms-summary': 'Close' }),
    date: z.string().exactOptional().openapi({ description: 'Date', 'x-ms-summary': 'Date' }),
    exchange: z
      .string()
      .exactOptional()
      .openapi({ description: 'Market exchange', 'x-ms-summary': 'Exchange' }),
    high: z.number().exactOptional().openapi({ description: 'High value', 'x-ms-summary': 'High' }),
    low: z.number().exactOptional().openapi({ description: 'Low value', 'x-ms-summary': 'Low' }),
    open: z.number().exactOptional().openapi({ description: 'Open value', 'x-ms-summary': 'Open' }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({ description: 'Index symbol', 'x-ms-summary': 'Symbol' }),
    volume: z
      .number()
      .exactOptional()
      .openapi({ description: 'Trading volume', 'x-ms-summary': 'Volume' }),
  })
  .openapi({
    example: {
      adj_close: 72.7,
      adj_high: 74.32,
      adj_low: 72.245,
      adj_open: 73.84,
      adj_volume: 15151304,
      close: 72.7,
      date: '2020-10-07T00:00:00+0000',
      exchange: 'INDX',
      high: 74.32,
      low: 72.245,
      open: 73.84,
      symbol: 'DJI.INDX',
      volume: 15151304,
    },
    required: [],
  })
  .openapi('OutputMarketIndex')

const OutputMultiCollectionSchema = z
  .object({
    result1: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'First collection result',
        'x-ms-summary': 'First collection result',
      }),
    result2: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Second collection result',
        'x-ms-summary': 'Second collection result',
      }),
  })
  .openapi({ example: { result1: ['a', 'b', 'c'], result2: ['d', 'e', 'f'] }, required: [] })
  .openapi('OutputMultiCollection')

const OutputNumberSchema = z
  .object({
    result: z.number().exactOptional().openapi({ description: 'Result', 'x-ms-summary': 'Result' }),
  })
  .openapi({ example: { result: 1 }, required: [] })
  .openapi('OutputNumber')

const OutputStockPriceSchema = z
  .object({
    result: z
      .array(
        z
          .object({
            close: z
              .number()
              .exactOptional()
              .openapi({ description: 'Close', 'x-ms-summary': 'Close' }),
            date: z
              .string()
              .exactOptional()
              .openapi({ description: 'Date', 'x-ms-summary': 'Date' }),
            exchange: z
              .string()
              .exactOptional()
              .openapi({ description: 'Stock exchange', 'x-ms-summary': 'Exchange' }),
            high: z
              .number()
              .exactOptional()
              .openapi({ description: 'High', 'x-ms-summary': 'High' }),
            low: z.number().exactOptional().openapi({ description: 'Low', 'x-ms-summary': 'Low' }),
            open: z
              .number()
              .exactOptional()
              .openapi({ description: 'Open', 'x-ms-summary': 'Open' }),
            symbol: z
              .string()
              .exactOptional()
              .openapi({ description: 'Ticker symbol', 'x-ms-summary': 'Symbol' }),
            volume: z
              .number()
              .exactOptional()
              .openapi({ description: 'Volume', 'x-ms-summary': 'Volume' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'Stock price information',
        'x-ms-summary': 'Stock price information',
      }),
  })
  .openapi({
    example: {
      result: [
        {
          close: 72.7,
          date: '2020-10-07T00:00:00+0000',
          exchange: 'XNYS',
          high: 74.32,
          last: 72.3,
          low: 72.245,
          open: 73.84,
          symbol: 'CVX',
          volume: 15151304,
        },
      ],
    },
    required: [],
  })
  .openapi('OutputStockPrice')

const OutputStringSchema = z
  .object({
    result: z.string().exactOptional().openapi({ description: 'Result', 'x-ms-summary': 'Result' }),
  })
  .openapi({ example: { result: 'string' }, required: [] })
  .openapi('OutputString')

const OutputStringArraySchema = z
  .object({
    data: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'data', 'x-ms-summary': 'data' }),
  })
  .openapi({ example: { data: ['string'] }, required: [] })
  .openapi('OutputStringArray')

const ApiKeyHeaderSecurityScheme = { in: 'header', name: 'X-IBM-Client-Id', type: 'apiKey' }

export const postAddToCollectionRoute = createRoute({
  method: 'post',
  path: '/AddToCollection',
  tags: ['Collections'],
  summary: 'Collections - Add to collection',
  description: 'Add an item to a collection',
  operationId: 'AddToCollection',
  request: {
    body: {
      description: 'Collection modification parameters',
      content: { 'application/json': { schema: InputCollectionModifySchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputCollectionResultSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCSVtoJSONRoute = createRoute({
  method: 'post',
  path: '/CSVtoJSON',
  tags: ['Data'],
  summary: 'Data - CSV to JSON',
  description: 'Convert a CSV string to a JSON array',
  operationId: 'CsvToJson',
  request: { body: { content: { 'application/json': { schema: InputCsvConversionJSONSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateAbsoluteRoute = createRoute({
  method: 'post',
  path: '/CalculateAbsolute',
  tags: ['Math'],
  summary: 'Math - Calculate Absolute',
  description: 'Calculate the absolute value of a number',
  operationId: 'CalculateAbsolute',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumberSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateAdditionRoute = createRoute({
  method: 'post',
  path: '/CalculateAddition',
  tags: ['Math'],
  summary: 'Math - Calculate Addition',
  description: 'Calculate the sum of two numbers',
  operationId: 'CalculateAddition',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumbersSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateAverageRoute = createRoute({
  method: 'post',
  path: '/CalculateAverage',
  tags: ['Math'],
  summary: 'Math - Calculate average',
  description: 'Calculate the average of two or more numbers',
  operationId: 'CalculateAverage',
  request: {
    body: {
      description: 'Series calculation parameters',
      content: { 'application/json': { schema: InputCalculateSeriesSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateCosineRoute = createRoute({
  method: 'post',
  path: '/CalculateCosine',
  tags: ['Math'],
  summary: 'Math - Calculate Cosine',
  description: 'Calculate the cosine value of an angle',
  operationId: 'CalculateCosine',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumberSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateDivisionRoute = createRoute({
  method: 'post',
  path: '/CalculateDivision',
  tags: ['Math'],
  summary: 'Math - Calculate Division',
  description: 'Calculate the quotient of two numbers',
  operationId: 'CalculateDivision',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumbersSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateLogarithmRoute = createRoute({
  method: 'post',
  path: '/CalculateLogarithm',
  tags: ['Math'],
  summary: 'Math - Calculate Logarithm',
  description: 'Calculate the logarithm of a number',
  operationId: 'CalculateLogarithm',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumberSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateMedianRoute = createRoute({
  method: 'post',
  path: '/CalculateMedian',
  tags: ['Math'],
  summary: 'Math - Calculate median',
  description: 'Calculate the median of two or more numbers',
  operationId: 'CalculateMedian',
  request: {
    body: {
      description: 'Series calculation parameters',
      content: { 'application/json': { schema: InputCalculateSeriesSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateMinMaxRoute = createRoute({
  method: 'post',
  path: '/CalculateMinMax',
  tags: ['Math'],
  summary: 'Math - Calculate minimum or maximum',
  description: 'Calculate the minimum or maximum value in a sequence of numbers',
  operationId: 'CalculateMinMax',
  request: {
    body: {
      description: 'Series calculation parameters',
      content: { 'application/json': { schema: InputCalculateMinMaxSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateModuloRoute = createRoute({
  method: 'post',
  path: '/CalculateModulo',
  tags: ['Math'],
  summary: 'Math - Calculate Modulo',
  description: 'Calculate the remainder of dividing two numbers',
  operationId: 'CalculateModulo',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumbersSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateMultiplicationRoute = createRoute({
  method: 'post',
  path: '/CalculateMultiplication',
  tags: ['Math'],
  summary: 'Math - Calculate Multiplication',
  description: 'Calculate the product of two numbers',
  operationId: 'CalculateMultiplication',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumbersSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateNthRootRoute = createRoute({
  method: 'post',
  path: '/CalculateNthRoot',
  tags: ['Math'],
  summary: 'Math - Calculate Nth Root',
  description: 'Calculate the n-th root of a number',
  operationId: 'CalculateNthRoot',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumbersSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculatePowerRoute = createRoute({
  method: 'post',
  path: '/CalculatePower',
  tags: ['Math'],
  summary: 'Math - Calculate power',
  description: 'Raise number to a specified power',
  operationId: 'CalculatePower',
  request: {
    body: {
      description: 'Power calculation parameters',
      content: { 'application/json': { schema: InputCalculatePowerSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateSineRoute = createRoute({
  method: 'post',
  path: '/CalculateSine',
  tags: ['Math'],
  summary: 'Math - Calculate Sine',
  description: 'Calculate the sine value of an angle',
  operationId: 'CalculateSine',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumberSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateSquareRootRoute = createRoute({
  method: 'post',
  path: '/CalculateSquareRoot',
  tags: ['Math'],
  summary: 'Math - Calculate Square Root',
  description: 'Calculate the square root of a number',
  operationId: 'CalculateSquareRoot',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumberSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateSubtractionRoute = createRoute({
  method: 'post',
  path: '/CalculateSubtraction',
  tags: ['Math'],
  summary: 'Math - Calculate Subtraction',
  description: 'Calculate the difference between two numbers',
  operationId: 'CalculateSubtraction',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumbersSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateSumRoute = createRoute({
  method: 'post',
  path: '/CalculateSum',
  tags: ['Math'],
  summary: 'Math - Calculate sum',
  description: 'Calculate the sum of two or more numbers',
  operationId: 'CalculateSum',
  request: {
    body: {
      description: 'Series calculation parameters',
      content: { 'application/json': { schema: InputCalculateSeriesSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateTangentRoute = createRoute({
  method: 'post',
  path: '/CalculateTangent',
  tags: ['Math'],
  summary: 'Math - Calculate Tangent',
  description: 'Calculate the tangent value of an angle',
  operationId: 'CalculateTangent',
  request: {
    body: {
      description: 'Number calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumberSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCalculateVarianceRoute = createRoute({
  method: 'post',
  path: '/CalculateVariance',
  tags: ['Math'],
  summary: 'Math - Calculate variance',
  description: 'Calculate the statistical variance of two or more numbers',
  operationId: 'CalculateVariance',
  request: {
    body: {
      description: 'Series calculation parameters',
      content: { 'application/json': { schema: InputCalculateSeriesSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCollectionContainsNumberRoute = createRoute({
  method: 'post',
  path: '/CollectionContainsNumber',
  tags: ['Collections'],
  summary: 'Collections - Contains number',
  description: 'Determine if a collection contains a specific number',
  operationId: 'CollectionContainsNumber',
  request: {
    body: {
      description: 'Collection search parameters',
      content: { 'application/json': { schema: InputCollectionSearchNumericSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputCollectionNumberSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCollectionContainsStringRoute = createRoute({
  method: 'post',
  path: '/CollectionContainsString',
  tags: ['Collections'],
  summary: 'Collections - Contains string',
  description: 'Determine if any items in a collection contain a specific string',
  operationId: 'CollectionContainsString',
  request: {
    body: {
      description: 'Collection search parameters',
      content: { 'application/json': { schema: InputCollectionSearchSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputCollectionStringSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCollectionEndsWithStringRoute = createRoute({
  method: 'post',
  path: '/CollectionEndsWithString',
  tags: ['Collections'],
  summary: 'Collections - Ends with string',
  description: 'Determine if any items in a collection end with a specific string',
  operationId: 'CollectionEndsWithString',
  request: {
    body: {
      description: 'Collection search parameters',
      content: { 'application/json': { schema: InputCollectionSearchSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputCollectionStringSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCollectionStartsWithStringRoute = createRoute({
  method: 'post',
  path: '/CollectionStartsWithString',
  tags: ['Collections'],
  summary: 'Collections - Starts with string',
  description: 'Determine if any items in a collection start with a specific string',
  operationId: 'CollectionStartsWithString',
  request: {
    body: {
      description: 'Collection search parameters',
      content: { 'application/json': { schema: InputCollectionSearchSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputCollectionStringSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCollectionToJSONRoute = createRoute({
  method: 'post',
  path: '/CollectionToJSON',
  tags: ['Collections'],
  summary: 'Collections - Collection to JSON',
  description: 'Convert a collection to a named JSON object',
  operationId: 'CollectionToJSON',
  request: {
    body: { content: { 'application/json': { schema: InputCollectionConversionSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCollectionToXMLRoute = createRoute({
  method: 'post',
  path: '/CollectionToXML',
  tags: ['Collections'],
  summary: 'Collections - Collection to XML',
  description: 'Convert a collection to an XML string',
  operationId: 'CollectionToXml',
  request: {
    body: { content: { 'application/json': { schema: InputCollectionConversionXMLSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCompareStringsRoute = createRoute({
  method: 'post',
  path: '/CompareStrings',
  tags: ['Text'],
  summary: 'Text - Compare strings',
  description: 'Perform a comparison of two strings',
  operationId: 'CompareStrings',
  request: { body: { content: { 'application/json': { schema: InputStringComparisonSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postContainsStringRoute = createRoute({
  method: 'post',
  path: '/ContainsString',
  tags: ['Text'],
  summary: 'Text - Contains string',
  description: 'Determine if a string contains another string',
  operationId: 'ContainsString',
  request: { body: { content: { 'application/json': { schema: InputStringContainsSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertAngleRoute = createRoute({
  method: 'post',
  path: '/ConvertAngle',
  tags: ['Math'],
  summary: 'Math - Convert angle',
  description: 'Convert value from one angle measurement to another',
  operationId: 'ConvertAngle',
  request: { body: { content: { 'application/json': { schema: InputConvertAngleSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertAreaRoute = createRoute({
  method: 'post',
  path: '/ConvertArea',
  tags: ['Math'],
  summary: 'Math - Convert area',
  description: 'Convert value from one area measurement to another',
  operationId: 'ConvertArea',
  request: { body: { content: { 'application/json': { schema: InputConvertAreaSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertCaseRoute = createRoute({
  method: 'post',
  path: '/ConvertCase',
  tags: ['Text'],
  summary: 'Text - Convert case',
  description: 'Convert string to upper, lower or title case',
  operationId: 'ConvertCase',
  request: { body: { content: { 'application/json': { schema: InputCaseConversionSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertCurrencyRoute = createRoute({
  method: 'post',
  path: '/ConvertCurrency',
  tags: ['Finance'],
  summary: 'Currency - Convert currency',
  description: 'Calculate monetary value in a different currency',
  operationId: 'ConvertCurrency',
  request: { body: { content: { 'application/json': { schema: InputCurrencyConversionSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertDistanceRoute = createRoute({
  method: 'post',
  path: '/ConvertDistance',
  tags: ['Math'],
  summary: 'Math - Convert distance',
  description: 'Convert value from one distance measurement to another',
  operationId: 'ConvertDistance',
  request: { body: { content: { 'application/json': { schema: InputConvertDistanceSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertDurationRoute = createRoute({
  method: 'post',
  path: '/ConvertDuration',
  tags: ['Math'],
  summary: 'Math - Convert duration',
  description: 'Convert value from one duration measurement to another',
  operationId: 'ConvertDuration',
  request: { body: { content: { 'application/json': { schema: InputConvertDurationSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertEnergyRoute = createRoute({
  method: 'post',
  path: '/ConvertEnergy',
  tags: ['Math'],
  summary: 'Math - Convert energy',
  description: 'Convert value from one energy measurement to another',
  operationId: 'ConvertEnergy',
  request: { body: { content: { 'application/json': { schema: InputConvertEnergySchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertImageRoute = createRoute({
  method: 'post',
  path: '/ConvertImage',
  tags: ['Files'],
  summary: 'Files - Convert Image',
  description: 'Convert an image from one format to another',
  operationId: 'ConvertImage',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Source image file',
                  'x-ms-summary': 'File',
                }),
              format: z
                .enum(['PNG', 'JPG', 'GIF', 'BMP', 'TIF'])
                .default('PNG')
                .openapi({ description: 'Output file format', 'x-ms-summary': 'Format' }),
            })
            .openapi({ required: ['file', 'format'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'image/bmp': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/gif': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'ERROR',
      content: {
        'image/bmp': { schema: OutputStringSchema },
        'image/gif': { schema: OutputStringSchema },
        'image/jpeg': { schema: OutputStringSchema },
        'image/png': { schema: OutputStringSchema },
      },
    },
  },
})

export const postConvertPowerRoute = createRoute({
  method: 'post',
  path: '/ConvertPower',
  tags: ['Math'],
  summary: 'Math - Convert power',
  description: 'Convert value from one power measurement to another',
  operationId: 'ConvertPower',
  request: { body: { content: { 'application/json': { schema: InputConvertPowerSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertSpeedRoute = createRoute({
  method: 'post',
  path: '/ConvertSpeed',
  tags: ['Math'],
  summary: 'Math - Convert speed',
  description: 'Convert value from one speed measurement to another',
  operationId: 'ConvertSpeed',
  request: { body: { content: { 'application/json': { schema: InputConvertSpeedSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertTemperatureRoute = createRoute({
  method: 'post',
  path: '/ConvertTemperature',
  tags: ['Math'],
  summary: 'Math - Convert temperature',
  description: 'Convert value from one temperature measurement to another',
  operationId: 'ConvertTemperature',
  request: { body: { content: { 'application/json': { schema: InputConvertTemperatureSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertVolumeRoute = createRoute({
  method: 'post',
  path: '/ConvertVolume',
  tags: ['Math'],
  summary: 'Math - Convert volume',
  description: 'Convert value from one volume measurement to another',
  operationId: 'ConvertVolume',
  request: { body: { content: { 'application/json': { schema: InputConvertVolumeSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postConvertWeightRoute = createRoute({
  method: 'post',
  path: '/ConvertWeight',
  tags: ['Math'],
  summary: 'Math - Convert weight',
  description: 'Convert value from one weight measurement to another',
  operationId: 'ConvertWeight',
  request: { body: { content: { 'application/json': { schema: InputConvertWeightSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCountCollectionRoute = createRoute({
  method: 'post',
  path: '/CountCollection',
  tags: ['Collections'],
  summary: 'Collections - Count collection',
  description: 'Count a collection of items',
  operationId: 'CountCollection',
  request: {
    body: {
      description: 'Count collection parameters',
      content: { 'application/json': { schema: InputCollectionCountSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postCropImageRoute = createRoute({
  method: 'post',
  path: '/CropImage',
  tags: ['Files'],
  summary: 'Files - Crop Image',
  description: 'Crop an image',
  operationId: 'CropImage',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              Height: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number(),
                )
                .openapi({
                  description: 'Height (Y-axis down, negative to reverse)',
                  'x-ms-summary': 'Height',
                }),
              Width: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number(),
                )
                .openapi({
                  description: 'Width (X-axis right, negative to reverse)',
                  'x-ms-summary': 'Width',
                }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Source image file',
                  'x-ms-summary': 'File',
                }),
              position: z
                .enum([
                  'TopLeft',
                  'TopCenter',
                  'TopRight',
                  'MiddleLeft',
                  'MiddleCenter',
                  'MiddleRight',
                  'BottomLeft',
                  'BottomCenter',
                  'BottomRight',
                ])
                .default('TopLeft')
                .openapi({
                  description: 'Crop start position (use negative values to reverse crop area)',
                  'x-ms-summary': 'Position',
                }),
            })
            .openapi({ required: ['Height', 'Width', 'file', 'position'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'image/bmp': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/gif': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'ERROR',
      content: {
        'image/bmp': { schema: OutputStringSchema },
        'image/gif': { schema: OutputStringSchema },
        'image/jpeg': { schema: OutputStringSchema },
        'image/png': { schema: OutputStringSchema },
      },
    },
  },
})

export const postDateTimeDifferenceRoute = createRoute({
  method: 'post',
  path: '/DateTimeDifference',
  tags: ['DateTime'],
  summary: 'DateTime - DateTime difference',
  description: 'Calculate the difference between two dates',
  operationId: 'DateTimeDifference',
  request: { body: { content: { 'application/json': { schema: InputDateTimeDifferenceSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputDateDifferenceSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postDateTimeInfoRoute = createRoute({
  method: 'post',
  path: '/DateTimeInfo',
  tags: ['DateTime'],
  summary: 'DateTime - Get date and time information',
  description:
    'Retrieve useful date and time information, such as day of year, total seconds and ticks',
  operationId: 'DateTimeInfo',
  request: { body: { content: { 'application/json': { schema: InputDateTimeInfoSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputDateInfoSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postDecodeStringRoute = createRoute({
  method: 'post',
  path: '/DecodeString',
  tags: ['Text'],
  summary: 'Text - Decode string',
  description: 'Decode a string encoded with Base64 encoding',
  operationId: 'DecodeString',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              source: z
                .string()
                .openapi({
                  description: 'Encoded string variable or text value',
                  'x-ms-summary': 'Source',
                }),
            })
            .openapi({ example: { source: 'VGhlIGJyb3duIGNvdw==' }, required: ['source'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postEncodeStringRoute = createRoute({
  method: 'post',
  path: '/EncodeString',
  tags: ['Text'],
  summary: 'Text - Encode string',
  description: 'Encode a string using Base64 encoding',
  operationId: 'EncodeString',
  request: { body: { content: { 'application/json': { schema: InputStringSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postFileToStringRoute = createRoute({
  method: 'post',
  path: '/FileToString',
  tags: ['Files'],
  summary: 'Files - File to string',
  description: 'Convert a file to a Base64 string',
  operationId: 'FileToString',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Source file (10MB limit)',
                  'x-ms-summary': 'File',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postFilterCollectionRoute = createRoute({
  method: 'post',
  path: '/FilterCollection',
  tags: ['Collections'],
  summary: 'Collections - Filter collection',
  description: 'Filter a collection of strings by keyword',
  operationId: 'FilterCollection',
  request: {
    body: {
      description: 'Filter collection parameters',
      content: { 'application/json': { schema: InputCollectionFilterSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputCollectionResultSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postFlipImageRoute = createRoute({
  method: 'post',
  path: '/FlipImage',
  tags: ['Files'],
  summary: 'Files - Flip Image',
  description: 'Flip an image (horizontal or vertical)',
  operationId: 'FlipImage',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Source image file',
                  'x-ms-summary': 'File',
                }),
              orientation: z
                .enum(['Horizontal', 'Vertical'])
                .default('Horizontal')
                .openapi({ description: 'Horizontal or Vertical', 'x-ms-summary': 'Orientation' }),
            })
            .openapi({ required: ['file', 'orientation'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: { description: 'ERROR', content: { '*/*': { schema: OutputStringSchema } } },
  },
})

export const postFormatCurrencyRoute = createRoute({
  method: 'post',
  path: '/FormatCurrency',
  tags: ['Finance'],
  summary: 'Currency - Format currency',
  description: 'Apply currency symbol to a numeric value',
  operationId: 'FormatCurrency',
  request: { body: { content: { 'application/json': { schema: InputCurrencyFormatSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postFormatDateTimeRoute = createRoute({
  method: 'post',
  path: '/FormatDateTime',
  tags: ['DateTime'],
  summary: 'DateTime - Format date and time',
  description: 'Create a date/time string in a specific format',
  operationId: 'FormatDateTime',
  request: { body: { content: { 'application/json': { schema: InputDateTimeFormatSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postGenerateGuidRoute = createRoute({
  method: 'post',
  path: '/GenerateGuid',
  tags: ['Text'],
  summary: 'Text - Generate GUID',
  description: 'Generate a globally unique identifier',
  operationId: 'GenerateGuid',
  request: { body: { content: { 'application/json': { schema: InputGenerateUniqueIDSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postGenerateHashRoute = createRoute({
  method: 'post',
  path: '/GenerateHash',
  tags: ['Text'],
  summary: 'Text - Generate hash',
  description: 'Generate a hash value from a string',
  operationId: 'GenerateHash',
  request: { body: { content: { 'application/json': { schema: InputGenerateHashSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postGenerateQRCodeRoute = createRoute({
  method: 'post',
  path: '/GenerateQRCode',
  tags: ['Files'],
  summary: 'Files - Generate QR code',
  description: 'Generate a QR code image',
  operationId: 'GenerateQRCode',
  request: { body: { content: { 'application/json': { schema: InputQRCodeSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: { description: 'ERROR', content: { 'image/png': { schema: OutputStringSchema } } },
  },
})

export const postJSONtoCSVRoute = createRoute({
  method: 'post',
  path: '/JSONtoCSV',
  tags: ['Data'],
  summary: 'Data - JSON to CSV',
  description: 'Convert a JSON array to CSV string',
  operationId: 'JsonToCsv',
  request: { body: { content: { 'application/json': { schema: InputJsonConversionCSVSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postJSONtoHTMLRoute = createRoute({
  method: 'post',
  path: '/JSONtoHTML',
  tags: ['Data'],
  summary: 'Data - JSON to HTML Table',
  description: 'Convert a JSON array to an HTML table',
  operationId: 'JsonToHtml',
  request: { body: { content: { 'application/json': { schema: InputJsonConversionHTMLSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postJSONtoXMLRoute = createRoute({
  method: 'post',
  path: '/JSONtoXML',
  tags: ['Data'],
  summary: 'Data - JSON to XML',
  description: 'Convert a JSON object to an XML string',
  operationId: 'JsonToXml',
  request: { body: { content: { 'application/json': { schema: InputJsonConversionXMLSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postJoinStringsRoute = createRoute({
  method: 'post',
  path: '/JoinStrings',
  tags: ['Text'],
  summary: 'Text - Join strings',
  description: 'Join a collection of strings',
  operationId: 'JoinStrings',
  request: { body: { content: { 'application/json': { schema: InputJoinStringsSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postMarketIndexRoute = createRoute({
  method: 'post',
  path: '/MarketIndex',
  tags: ['Finance'],
  summary: 'Finance - Market index',
  description: 'Get current and historical market index information',
  operationId: 'MarketIndex',
  request: { body: { content: { 'application/json': { schema: InputMarketIndexSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputMarketIndexSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postQueryJSONRoute = createRoute({
  method: 'post',
  path: '/QueryJSON',
  tags: ['Data'],
  summary: 'Data - Query JSON',
  description: 'Query a JSON object using a JSONPath expression',
  operationId: 'QueryJson',
  request: { body: { content: { 'application/json': { schema: InputDataQuerySchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postQueryXMLRoute = createRoute({
  method: 'post',
  path: '/QueryXML',
  tags: ['Data'],
  summary: 'Data - Query XML',
  description: 'Query an XML string using an XPath expression',
  operationId: 'QueryXml',
  request: { body: { content: { 'application/json': { schema: InputDataQuerySchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postRandomNumberRoute = createRoute({
  method: 'post',
  path: '/RandomNumber',
  tags: ['Math'],
  summary: 'Math - Random number',
  description: 'Generate a random number within a specified range',
  operationId: 'RandomNumber',
  request: { body: { content: { 'application/json': { schema: InputNumberRangeSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postRedactStringRoute = createRoute({
  method: 'post',
  path: '/RedactString',
  tags: ['Text'],
  summary: 'Text - Redact string',
  description: 'Redact a strng containing sensitive content',
  operationId: 'RedactString',
  request: { body: { content: { 'application/json': { schema: InputRedactStringSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postRemoveFromCollectionRoute = createRoute({
  method: 'post',
  path: '/RemoveFromCollection',
  tags: ['Collections'],
  summary: 'Collections - Remove from collection',
  description: 'Remove an item from a collection',
  operationId: 'RemoveFromCollection',
  request: {
    body: {
      description: 'Collection modification parameters',
      content: { 'application/json': { schema: InputCollectionModifySchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputCollectionResultSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postReplaceStringRoute = createRoute({
  method: 'post',
  path: '/ReplaceString',
  tags: ['Text'],
  summary: 'Text - Replace string',
  description: 'Replace one value with another in a string',
  operationId: 'ReplaceString',
  request: { body: { content: { 'application/json': { schema: InputReplaceStringSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postReplaceValuesInCollectionRoute = createRoute({
  method: 'post',
  path: '/ReplaceValuesInCollection',
  tags: ['Collections'],
  summary: 'Collections - Replace values in collection',
  description: 'Replace whole or partial strings in a collection',
  operationId: 'ReplaceValuesInCollection',
  request: {
    body: {
      description: 'Replace values in collection parameters',
      content: { 'application/json': { schema: InputCollectionReplaceSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputCollectionResultSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postResizeImageRoute = createRoute({
  method: 'post',
  path: '/ResizeImage',
  tags: ['Files'],
  summary: 'Files - Resize Image',
  description: 'Resize an image',
  operationId: 'ResizeImage',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              algorithm: z
                .enum([
                  'Bicubic (default)',
                  'Bilinear',
                  'Cubic (Box)',
                  'Cubic (Catmull-Rom)',
                  'Cubic (Hermite)',
                  'Cubic (Spline)',
                  'Nearest Neighbor',
                  'Sinc (Lanczos2)',
                  'Sinc (Lanczos3)',
                  'Sinc (Lanczos5)',
                  'Sinc (Lanczos8)',
                  'Robidoux',
                  'Robidoux Sharp',
                ])
                .default('Bicubic (default)')
                .openapi({
                  description: 'Optimize output quality of the target image',
                  'x-ms-summary': 'Resampling Algorithm',
                }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Source image file',
                  'x-ms-summary': 'File',
                }),
              height: z
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
                  description: 'Image height (pixels or percent)',
                  'x-ms-summary': 'Height',
                }),
              units: z
                .enum(['Pixels', 'Percent'])
                .default('Pixels')
                .openapi({ description: 'Image adjustment units', 'x-ms-summary': 'Units' }),
              width: z
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
                  description: 'Image width (pixels or percent)',
                  'x-ms-summary': 'Width',
                }),
            })
            .openapi({ required: ['algorithm', 'file', 'units'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'image/bmp': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/gif': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'ERROR',
      content: {
        'image/bmp': { schema: OutputStringSchema },
        'image/gif': { schema: OutputStringSchema },
        'image/jpeg': { schema: OutputStringSchema },
        'image/png': { schema: OutputStringSchema },
      },
    },
  },
})

export const postRotateImageRoute = createRoute({
  method: 'post',
  path: '/RotateImage',
  tags: ['Files'],
  summary: 'Files - Rotate Image',
  description: 'Rotate an image by specified number of degrees',
  operationId: 'RotateImage',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              degrees: z
                .string()
                .openapi({ description: 'Number of degrees', 'x-ms-summary': 'Degrees' }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Source image file',
                  'x-ms-summary': 'File',
                }),
            })
            .openapi({ required: ['degrees', 'file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: { description: 'ERROR', content: { '*/*': { schema: OutputStringSchema } } },
  },
})

export const postRoundNumberRoute = createRoute({
  method: 'post',
  path: '/RoundNumber',
  tags: ['Math'],
  summary: 'Math - Round number',
  description: 'Round a numeric value up or down',
  operationId: 'RoundNumber',
  request: {
    body: {
      description: 'Numeric calculation parameters',
      content: { 'application/json': { schema: InputCalculateNumberSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postShortenLinkRoute = createRoute({
  method: 'post',
  path: '/ShortenLink',
  tags: ['Text'],
  summary: 'Text - Shorten hyperlink',
  description: 'Generate a simple, short URL from a complex URL',
  operationId: 'ShortenLink',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              source: z
                .string()
                .openapi({
                  description: 'String variable or text value',
                  'x-ms-summary': 'Source',
                }),
            })
            .openapi({
              example: {
                source: 'http://www.somewebsite.com/path1/path2?query1=value&query2=value',
              },
              required: ['source'],
            }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postSortCollectionRoute = createRoute({
  method: 'post',
  path: '/SortCollection',
  tags: ['Collections'],
  summary: 'Collections - Sort collection',
  description: 'Sort a collection of strings',
  operationId: 'SortCollection',
  request: {
    body: {
      description: 'Sort collection parameters',
      content: { 'application/json': { schema: InputCollectionSortSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputCollectionResultSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postSpeechToTextRoute = createRoute({
  method: 'post',
  path: '/SpeechToText',
  tags: ['Text'],
  summary: 'Text - Speech to Text',
  description: 'Convert audio file to text (10MB limit)',
  operationId: 'SpeechToText',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Source audio file (WAV, MP3, AAC, M4A)',
                  'x-ms-summary': 'File',
                }),
              language: z
                .enum([
                  'Arabic (Bahrain)',
                  'Arabic (Egypt)',
                  'Arabic (Iraq)',
                  'Arabic (Jordan)',
                  'Arabic (Kuwait)',
                  'Arabic (Lebanon)',
                  'Arabic (Oman)',
                  'Arabic (Qatar)',
                  'Arabic (Saudi Arabia)',
                  'Arabic (Syria)',
                  'Arabic (United Arab Emirates)',
                  'Bulgarian (Bulgaria)',
                  'Catalan (Spain)',
                  'Chinese (Cantonese, Traditional)',
                  'Chinese (Mandarin, Simplified)',
                  'Chinese (Taiwanese Mandarin)',
                  'Croatian (Croatia)',
                  'Czech (Czech Republic)',
                  'Danish (Denmark)',
                  'Dutch (Netherlands)',
                  'English (Australia)',
                  'English (Canada)',
                  'English (Hong Kong)',
                  'English (India)',
                  'English (Ireland)',
                  'English (New Zealand)',
                  'English (Philippines)',
                  'English (Singapore)',
                  'English (South Africa)',
                  'English (United Kingdom)',
                  'English (United States)',
                  'Estonian(Estonia)',
                  'Finnish (Finland)',
                  'French (Canada)',
                  'French (France)',
                  'German (Germany)',
                  'Greek (Greece)',
                  'Gujarati (Indian)',
                  'Hindi (India)',
                  'Hungarian (Hungary)',
                  'Irish(Ireland)',
                  'Italian (Italy)',
                  'Japanese (Japan)',
                  'Korean (Korea)',
                  'Latvian (Latvia)',
                  'Lithuanian (Lithuania)',
                  'Maltese(Malta)',
                  'Marathi (India)',
                  'Norwegian (Norway)',
                  'Polish (Poland)',
                  'Portuguese (Brazil)',
                  'Portuguese (Portugal)',
                  'Romanian (Romania)',
                  'Russian (Russia)',
                  'Slovak (Slovakia)',
                  'Slovenian (Slovenia)',
                  'Spanish (Argentina)',
                  'Spanish (Bolivia)',
                  'Spanish (Chile)',
                  'Spanish (Colombia)',
                  'Spanish (Costa Rica)',
                  'Spanish (Cuba)',
                  'Spanish (Dominican Republic)',
                  'Spanish (Ecuador)',
                  'Spanish (El Salvador)',
                  'Spanish (Guatemala)',
                  'Spanish (Honduras)',
                  'Spanish (Mexico)',
                  'Spanish (Nicaragua)',
                  'Spanish (Panama)',
                  'Spanish (Paraguay)',
                  'Spanish (Peru)',
                  'Spanish (Puerto Rico)',
                  'Spanish (Spain)',
                  'Spanish (Uruguay)',
                  'Spanish (USA)',
                  'Spanish (Venezuela)',
                  'Swedish (Sweden)',
                  'Tamil (India)',
                  'Telugu (India)',
                  'Thai (Thailand)',
                  'Turkish (Turkey)',
                ])
                .default('English (United States)')
                .openapi({ description: 'Language of audio input', 'x-ms-summary': 'Language' }),
            })
            .openapi({ required: ['file', 'language'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postSplitCollectionRoute = createRoute({
  method: 'post',
  path: '/SplitCollection',
  tags: ['Collections'],
  summary: 'Collections - Split collection',
  description: 'Split a collection of items by matching value or index',
  operationId: 'SplitCollection',
  request: {
    body: {
      description: 'Split collection parameters',
      content: { 'application/json': { schema: InputCollectionSplitSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputMultiCollectionSchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postSplitStringRoute = createRoute({
  method: 'post',
  path: '/SplitString',
  tags: ['Text'],
  summary: 'Text - Split string',
  description: 'Split a string based upon one or more characters',
  operationId: 'SplitString',
  request: { body: { content: { 'application/json': { schema: InputSplitStringSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OutputStringArraySchema } },
    },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postStandardDeviationRoute = createRoute({
  method: 'post',
  path: '/StandardDeviation',
  tags: ['Math'],
  summary: 'Math - Calculate standard deviation',
  description: 'Calculate the standard deviation of two or more numbers',
  operationId: 'StandardDeviation',
  request: {
    body: {
      description: 'Series calculation parameters',
      content: { 'application/json': { schema: InputCalculateSeriesSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputNumberSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postStockPricesRoute = createRoute({
  method: 'post',
  path: '/StockPrices',
  tags: ['Finance'],
  summary: 'Finance - Stock prices',
  description: 'Get current and historical stock price information',
  operationId: 'StockPrices',
  request: { body: { content: { 'application/json': { schema: InputStockPricesSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStockPriceSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postStringToFileRoute = createRoute({
  method: 'post',
  path: '/StringToFile',
  tags: ['Text'],
  summary: 'Text - String to File',
  description: 'Convert text string to file',
  operationId: 'StringToFile',
  request: { body: { content: { 'application/json': { schema: InputStringToFileSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'application/xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/css': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/html': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/javascript': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'ERROR',
      content: {
        'application/json': { schema: OutputStringSchema },
        'application/xml': { schema: OutputStringSchema },
        'text/css': { schema: OutputStringSchema },
        'text/csv': { schema: OutputStringSchema },
        'text/html': { schema: OutputStringSchema },
        'text/javascript': { schema: OutputStringSchema },
        'text/plain': { schema: OutputStringSchema },
      },
    },
  },
})

export const postTextToSpeechRoute = createRoute({
  method: 'post',
  path: '/TextToSpeech',
  tags: ['Text'],
  summary: 'Text - Text to Speech',
  description: 'Convert text to an audio file using AI-driven speech synthesis.',
  operationId: 'TextToSpeech',
  request: { body: { content: { 'application/json': { schema: InputTextToSpeechSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'audio/mp3': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: { description: 'ERROR', content: { 'audio/mp3': { schema: OutputStringSchema } } },
  },
})

export const postTranslateStringRoute = createRoute({
  method: 'post',
  path: '/TranslateString',
  tags: ['Text'],
  summary: 'Text - Translate string',
  description: 'Translate a string into a different language',
  operationId: 'TranslateString',
  request: { body: { content: { 'application/json': { schema: InputTranslateStringSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postTrimStringRoute = createRoute({
  method: 'post',
  path: '/TrimString',
  tags: ['Text'],
  summary: 'Text - Trim string',
  description: 'Trim leading or trailing whitespace from a string',
  operationId: 'TrimString',
  request: { body: { content: { 'application/json': { schema: InputTrimStringSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postURLDecodeRoute = createRoute({
  method: 'post',
  path: '/URLDecode',
  tags: ['Text'],
  summary: 'Text - Decode URL',
  description: 'Decode an encoded URL',
  operationId: 'UrlDecode',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              source: z
                .string()
                .openapi({
                  description: 'Encoded string variable or text value',
                  'x-ms-summary': 'Source',
                }),
            })
            .openapi({ example: { source: 'The%20brown%20cow' }, required: ['source'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postURLEncodeRoute = createRoute({
  method: 'post',
  path: '/URLEncode',
  tags: ['Text'],
  summary: 'Text - Encode URL',
  description: 'Generate an encoded string from a complex hyperlink',
  operationId: 'UrlEncode',
  request: { body: { content: { 'application/json': { schema: InputStringSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postValidateEmailRoute = createRoute({
  method: 'post',
  path: '/ValidateEmail',
  tags: ['Text'],
  summary: 'Text - Validate email',
  description: 'Determine if an email address is valid',
  operationId: 'ValidateEmail',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              source: z
                .string()
                .openapi({
                  description: 'String variable or text value',
                  'x-ms-summary': 'Source',
                }),
            })
            .openapi({ example: { source: 'some user @ bademail-com' }, required: ['source'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postVerifyHashRoute = createRoute({
  method: 'post',
  path: '/VerifyHash',
  tags: ['Text'],
  summary: 'Text - Verify hash',
  description: 'Verify a hashed value against the original source string',
  operationId: 'VerifyHash',
  request: { body: { content: { 'application/json': { schema: InputVerifyHashSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputBooleanSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postWatermarkImageRoute = createRoute({
  method: 'post',
  path: '/WatermarkImage',
  tags: ['Files'],
  summary: 'Files - Watermark Image',
  description: 'Add watermark text to an image',
  operationId: 'WatermarkImage',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              color: z
                .string()
                .default('000000')
                .openapi({ description: 'Text color hex value', 'x-ms-summary': 'Text Color' }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Source image file',
                  'x-ms-summary': 'File',
                }),
              font: z
                .enum([
                  'Arial',
                  'Arial Black',
                  'Arial Narrow',
                  'Book Antiqua',
                  'Britannic Bold',
                  'Brush Script MT',
                  'Calisto MT',
                  'Century Gothic',
                  'Century Schoolbook',
                  'Colonna MT',
                  'Comic Sans MS',
                  'Cooper Black',
                  'Copperplate Gothic Bold',
                  'Copperplate Gothic Light',
                  'Courier New',
                  'Edwardian Script ITC',
                  'Engravers MT',
                  'Franklin Gothic Demi',
                  'Franklin Gothic Heavy',
                  'Franklin Gothic Medium',
                  'Garamond',
                  'Georgia',
                  'Gill Sans MT',
                  'Gill Sans MT Condensed',
                  'Gill Sans Ultra Bold',
                  'Gill Sans Ultra Bold Condensed',
                  'Goudy Old Style',
                  'Haettenschweiler',
                  'Holidays MT',
                  'Impact',
                  'Lucida Calligraphy',
                  'Lucida Console',
                  'Lucida Handwriting',
                  'Lucida Sans Typewriter',
                  'Lucida Sans Unicode',
                  'Marlett',
                  'Microsoft Sans Serif',
                  'MS Outlook',
                  'Palace Script MT',
                  'Palatino Linotype',
                  'Papyrus',
                  'Playbill',
                  'Rockwell',
                  'Rockwell Condensed',
                  'Rockwell Extra Bold',
                  'Script MT Bold',
                  'Stencil',
                  'Symbol',
                  'Tahoma',
                  'Times New Roman',
                  'Trebuchet MS',
                  'Verdana',
                  'Vivaldi',
                  'Webdings',
                  'Wingdings 1',
                  'Wingdings 2',
                  'Wingdings 3',
                ])
                .default('Arial')
                .openapi({ description: 'Text font', 'x-ms-summary': 'Font' }),
              horizontal: z
                .enum(['Left', 'Center', 'Right'])
                .default('Center')
                .openapi({ description: 'Horizontal alignment', 'x-ms-summary': 'Horizontal' }),
              size: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number(),
                )
                .openapi({ description: 'Font size (points)', 'x-ms-summary': 'Font Size' }),
              text: z.string().openapi({ description: 'Watermark text', 'x-ms-summary': 'Text' }),
              vertical: z
                .enum(['Top', 'Center', 'Bottom'])
                .default('Center')
                .openapi({ description: 'Vertical alignment', 'x-ms-summary': 'Vertical' }),
            })
            .openapi({
              required: ['color', 'file', 'font', 'horizontal', 'size', 'text', 'vertical'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: { description: 'ERROR', content: { '*/*': { schema: OutputStringSchema } } },
  },
})

export const postWorldTimeRoute = createRoute({
  method: 'post',
  path: '/WorldTime',
  tags: ['DateTime'],
  summary: 'DateTime - Get world time',
  description: 'Convert date and time from one time zone to another',
  operationId: 'WorldTime',
  request: { body: { content: { 'application/json': { schema: InputDateTimeConversionSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})

export const postXMLtoJSONRoute = createRoute({
  method: 'post',
  path: '/XMLtoJSON',
  tags: ['Data'],
  summary: 'Data - XML to JSON',
  description: 'Convert an XML string to a JSON object',
  operationId: 'XmlToJson',
  request: { body: { content: { 'application/json': { schema: InputXmlConversionJSONSchema } } } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OutputStringSchema } } },
    400: { description: 'ERROR', content: { 'application/json': { schema: OutputStringSchema } } },
  },
})
