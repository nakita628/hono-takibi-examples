import { createRoute, z } from '@hono/zod-openapi'

const AirQualityPointHourlyDataSchema = z
  .object({
    aerosol_550: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total aerosol optical depth at 550 nm.\nUnit: dimensionless',
        title: 'Aerosol 550',
      }),
    air_quality: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Air quality index. The following values can appear:\n\n* 1 - Very good\n* 2 - Good\n* 3 - Medium\n* 4 - Poor\n* 5 - Very poor\n* 6 - Extremely poor\n\nUnit: index',
        title: 'Air Quality',
      }),
    co_surface: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Carbon monoxide at surface level.\nUnit: µg/m3',
        title: 'Co Surface',
      }),
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Datetime in YYYY-MM-DDTHH:MM:SS format.',
        example: '2022-03-30T18:00:00',
        title: 'Date',
      }),
    dust_550nm: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Dust aerosol optical depth at 550 nm.\nUnit: dimensionless',
        title: 'Dust 550Nm',
      }),
    dust_mixing_ratio_05: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Dust aerosol (0.55 - 0.9 µm) mixing ratio.\nUnit: kg/kg',
        title: 'Dust Mixing Ratio 05',
      }),
    no2_surface: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Nitrogen dioxide at surface level.\nUnit: µg/m3',
        title: 'No2 Surface',
      }),
    no_surface: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Nitrogen monoxide at surface level.\nUnit: µg/m3',
        title: 'No Surface',
      }),
    ozone_surface: z
      .number()
      .exactOptional()
      .openapi({ description: 'Ozone.\nUnit: µg/m3', title: 'Ozone Surface' }),
    ozone_total: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total column ozone.\nUnit: Dobson', title: 'Ozone Total' }),
    pm10: z
      .number()
      .exactOptional()
      .openapi({ description: 'Particulate matter d < 10 µm (PM10).\nUnit: µg/m3', title: 'Pm10' }),
    pm25: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Particulate matter d < 2.5 µm (PM2.5).\nUnit: µg/m3',
        title: 'Pm25',
      }),
    so2_surface: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Sulphur dioxide at surface level.\nUnit: µg/m3',
        title: 'So2 Surface',
      }),
  })
  .openapi({ title: 'AirQuality_PointHourlyData', required: [] })
  .openapi('AirQualityPointHourlyData')

const AirQualityPointDataSchema = z
  .object({
    data: z.array(AirQualityPointHourlyDataSchema).openapi({ title: 'Data' }),
    elevation: z
      .int()
      .openapi({
        description:
          "Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')",
        title: 'Elevation',
      }),
    lat: z
      .string()
      .openapi({
        description:
          'Latitude of the point, always in the format <float><N/S>, for example ``23.5S``',
        title: 'Lat',
      }),
    lon: z
      .string()
      .openapi({
        description:
          'Longitude of the point, always in the format <float><E/W>, for example ``23.5W``',
        title: 'Lon',
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID.",
        title: 'Timezone',
      }),
  })
  .openapi({ required: ['lat', 'lon', 'elevation', 'data'], title: 'AirQuality_PointData' })
  .openapi('AirQualityPointData')

const FindPlacesModelSchema = z
  .object({
    adm_area1: z
      .string()
      .default('England')
      .exactOptional()
      .openapi({
        description: 'first-level administrative area (a US state, for example)',
        title: 'Adm Area1',
      }),
    adm_area2: z
      .string()
      .default('Greater London')
      .exactOptional()
      .openapi({
        description: 'second-level administrative area (a US county, for example)',
        title: 'Adm Area2',
      }),
    country: z
      .string()
      .default('United Kingdom')
      .exactOptional()
      .openapi({ description: 'name of the country', title: 'Country' }),
    lat: z
      .string()
      .default('23.2N')
      .exactOptional()
      .openapi({
        description:
          'Latitude of the point, always in the format \\<float><N/S>, for example ``23.5S``',
        title: 'Lat',
      }),
    lon: z
      .string()
      .default('15.3E')
      .exactOptional()
      .openapi({
        description:
          'Longitude of the point, always in format \\<float><E/W>, for example ``23.5W``',
        title: 'Lon',
      }),
    name: z
      .string()
      .default('London')
      .exactOptional()
      .openapi({ description: 'name of the place', title: 'Name' }),
    place_id: z
      .string()
      .default('london')
      .exactOptional()
      .openapi({
        description:
          'unique identifier of the place, which can be used in /point and /map endpoints',
        title: 'Place Id',
      }),
    timezone: z
      .string()
      .default('Europe/London')
      .exactOptional()
      .openapi({ description: 'Timezone of the point in tzinfo format.', title: 'Timezone' }),
    type: z
      .string()
      .default('settlement')
      .exactOptional()
      .openapi({
        description:
          'The character of the place. May be one of the following values:\n\n* administrative areas (states, counties, districts...): ``administrative_area``\n* country: ``country``\n* a different political entity from a country (for example, a dependent teritory): ``political_entity``\n* villages, towns and cities: ``settlement``\n* air industry locations: ``airbase``, ``airfield``, ``heliport``, ``airport``, ``airport_terminal``\n* places related to water: ``bay``, ``channel``, ``fjord``, ``lake``, ``pond``, ``falls``, ``gulf``,\n    ``harbor``, ``reservoir``, ``sea``, ``dam``, ``cape``, ``island``, ``peninsula``\n* places related to mountain areas: ``hill``, ``mountain``, ``peak``, ``valley``, ``volcano``, ``canyon``\n* other places related to nature: ``park``, ``reserve``, ``resort``, ``desert``\n* places based on postcodes: ``postcode``\n        ',
        title: 'Type',
      }),
  })
  .openapi({ title: 'FindPlacesModel', required: [] })
  .openapi('FindPlacesModel')

const GeneralRequestErrorSchema = z
  .object({ detail: z.string().openapi({ title: 'Detail' }) })
  .openapi({ required: ['detail'], title: 'GeneralRequestError' })
  .openapi('GeneralRequestError')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.union([z.string(), z.int()])).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const LanguageSchema = z
  .enum(['cs', 'en', 'de', 'es', 'fr', 'pl', 'pt'])
  .openapi({ description: 'An enumeration.', title: 'Language' })
  .openapi('Language')

const PointPointAlertsSchema = z
  .object({ data: z.string().exactOptional().openapi({ title: 'Data' }) })
  .openapi({ title: 'Point_PointAlerts', required: [] })
  .openapi('PointPointAlerts')

const PointPointCurrentPrecipitationDataSchema = z
  .object({
    total: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Current amount of precipitation.\nUnits: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h',
        title: 'Total',
      }),
    type: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Precipitation type, may be one of:\n\n* `none`, it there is no precipitation\n* `rain`\n* `snow`\n* `rain_snow`\n* `ice pellets`\n* `frozen rain`\n\nUnit: prec_str',
        title: 'Type',
      }),
  })
  .openapi({ title: 'Point_PointCurrentPrecipitationData', required: [] })
  .openapi('PointPointCurrentPrecipitationData')

const PointPointCurrentWindDataSchema = z
  .object({
    angle: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Wind direction angle in degrees, 180° means wind from the south.\nUnit: degrees',
        title: 'Angle',
      }),
    dir: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.\nUnit: 16dir',
        title: 'Dir',
      }),
    gusts: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Wind gust speed.\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Gusts',
      }),
    speed: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Wind speed 10 metres above the ground.\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Speed',
      }),
  })
  .openapi({ title: 'Point_PointCurrentWindData', required: [] })
  .openapi('PointPointCurrentWindData')

const PointPointCurrentDataSchema = z
  .object({
    cloud_cover: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by clouds.\nUnit: \\%',
        title: 'Cloud Cover',
      }),
    dew_point: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Current dew point temperature.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Dew Point',
      }),
    feels_like: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Feels like temperature.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Feels Like',
      }),
    humidity: z
      .int()
      .exactOptional()
      .openapi({ description: 'Relative humidity.\nUnit: \\%', title: 'Humidity' }),
    icon: z
      .string()
      .exactOptional()
      .openapi({
        description: 'String identifier of current weather icon, e.g. `light_rain`.',
        title: 'Icon',
      }),
    icon_num: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Numeric identifier of current weather icon. The following values can appear:\n\n* 1 - Not available\n* 2 - Sunny\n* 3 - Mostly sunny\n* 4 - Partly sunny\n* 5 - Mostly cloudy\n* 6 - Cloudy\n* 7 - Overcast\n* 8 - Overcast with low clouds\n* 9 - Fog\n* 10 - Light rain\n* 11 - Rain\n* 12 - Possible rain\n* 13 - Rain shower\n* 14 - Thunderstorm\n* 15 - Local thunderstorms\n* 16 - Light snow\n* 17 - Snow\n* 18 - Possible snow\n* 19 - Snow shower\n* 20 - Rain and snow\n* 21 - Possible rain and snow\n* 22 - Rain and snow\n* 23 - Freezing rain\n* 24 - Possible freezing rain\n* 25 - Hail\n* 26 - Clear (night)\n* 27 - Mostly clear (night)\n* 28 - Partly clear (night)\n* 29 - Mostly cloudy (night)\n* 30 - Cloudy (night)\n* 31 - Overcast with low clouds (night)\n* 32 - Rain shower (night)\n* 33 - Local thunderstorms (night)\n* 34 - Snow shower (night)\n* 35 - Rain and snow (night)\n* 36 - Possible freezing rain (night)\n\nUnit: weather_ico0_36',
        title: 'Icon Num',
      }),
    irradiance: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Global downward short-wave radiation flux.\nUnit: W/m2',
        title: 'Irradiance',
      }),
    ozone: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total column of ozone.\nUnit: Dobson', title: 'Ozone' }),
    precipitation: PointPointCurrentPrecipitationDataSchema,
    pressure: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Atmospheric pressure at mean sea level.\nUnits: metric = hPa, us = Hg, uk = hPa, ca = kPa',
        title: 'Pressure',
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Short text summary of current weather, e.g. `Light rain`.',
        title: 'Summary',
      }),
    temperature: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Current temperature 2 metres above ground.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Temperature',
      }),
    uv_index: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'UV index, values from zero (low risk of harm) to 11+ (extreme risk of harm).\nUnit: uv_index',
        title: 'Uv Index',
      }),
    visibility: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Visibility.\nUnits: metric = km, us = mi, uk = mi, ca = km',
        title: 'Visibility',
      }),
    wind: PointPointCurrentWindDataSchema,
    wind_chill: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Windchill temperature.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Wind Chill',
      }),
  })
  .openapi({ required: ['wind', 'precipitation'], title: 'Point_PointCurrentData' })
  .openapi('PointPointCurrentData')

const PointPointDailyAfternoonCloudCoverDataSchema = z
  .object({
    high: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by high clouds. (afternoon avg)\nUnit: \\%',
        title: 'High',
      }),
    low: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by low clouds. (afternoon avg)\nUnit: \\%',
        title: 'Low',
      }),
    middle: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by middle clouds. (afternoon avg)\nUnit: \\%',
        title: 'Middle',
      }),
    total: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by clouds. (afternoon avg)\nUnit: \\%',
        title: 'Total',
      }),
  })
  .openapi({ title: 'Point_PointDailyAfternoonCloudCoverData', required: [] })
  .openapi('PointPointDailyAfternoonCloudCoverData')

const PointPointDailyAfternoonPrecipitationDataSchema = z
  .object({
    total: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total precipitation amount accumulated since last hour. (afternoon sum)\nUnits: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h',
        title: 'Total',
      }),
    type: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Precipitation type, may be one of:\n\n* `none`, it there is no precipitation\n* `rain`\n* `snow`\n* `rain_snow`\n* `ice pellets`\n* `frozen rain`\n\nUnit: precipitation type',
        title: 'Type',
      }),
  })
  .openapi({ title: 'Point_PointDailyAfternoonPrecipitationData', required: [] })
  .openapi('PointPointDailyAfternoonPrecipitationData')

const PointPointDailyAfternoonProbDataSchema = z
  .object({
    freeze: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Probability the temperature drops below 0 °C. (afternoon avg)\nUnit: %',
        title: 'Freeze',
      }),
    precipitation: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Probability of non-zero precipitation.\nUnit: \\%',
        title: 'Precipitation',
      }),
    storm: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total precipitation amount accumulated since last hour.\nUnit: mm/h',
        title: 'Storm',
      }),
  })
  .openapi({ title: 'Point_PointDailyAfternoonProbData', required: [] })
  .openapi('PointPointDailyAfternoonProbData')

const PointPointDailyAfternoonWindDataSchema = z
  .object({
    angle: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Afternoon wind direction angle in degrees, 180° means wind from the south.\nUnit: degrees',
        title: 'Angle',
      }),
    dir: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Afternoon wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.\nUnit: 16dir',
        title: 'Dir',
      }),
    gusts: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Wind gust speed. (afternoon max)\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Gusts',
      }),
    speed: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Speed',
      }),
  })
  .openapi({ title: 'Point_PointDailyAfternoonWindData', required: [] })
  .openapi('PointPointDailyAfternoonWindData')

const PointPointDailyAfternoonDataSchema = z
  .object({
    cloud_cover: PointPointDailyAfternoonCloudCoverDataSchema,
    dew_point: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Dew Point',
      }),
    feels_like: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Feels Like',
      }),
    humidity: z
      .int()
      .exactOptional()
      .openapi({ description: 'Relative humidity. (afternoon avg)\nUnit: \\%', title: 'Humidity' }),
    icon: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Afternoon umeric identifier of the weather icon. The following values can appear:\n\n* 1 - Not available\n* 2 - Sunny\n* 3 - Mostly sunny\n* 4 - Partly sunny\n* 5 - Mostly cloudy\n* 6 - Cloudy\n* 7 - Overcast\n* 8 - Overcast with low clouds\n* 9 - Fog\n* 10 - Light rain\n* 11 - Rain\n* 12 - Possible rain\n* 13 - Rain shower\n* 14 - Thunderstorm\n* 15 - Local thunderstorms\n* 16 - Light snow\n* 17 - Snow\n* 18 - Possible snow\n* 19 - Snow shower\n* 20 - Rain and snow\n* 21 - Possible rain and snow\n* 22 - Rain and snow\n* 23 - Freezing rain\n* 24 - Possible freezing rain\n* 25 - Hail\n* 26 - Clear (night)\n* 27 - Mostly clear (night)\n* 28 - Partly clear (night)\n* 29 - Mostly cloudy (night)\n* 30 - Cloudy (night)\n* 31 - Overcast with low clouds (night)\n* 32 - Rain shower (night)\n* 33 - Local thunderstorms (night)\n* 34 - Snow shower (night)\n* 35 - Rain and snow (night)\n* 36 - Possible freezing rain (night)\n\nUnit: icon',
        title: 'Icon',
      }),
    ozone: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total column of ozone. (afternoon avg)\nUnit: Dobson',
        title: 'Ozone',
      }),
    precipitation: PointPointDailyAfternoonPrecipitationDataSchema,
    pressure: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Atmospheric pressure at mean sea level. (afternoon avg)\nUnits: metric = hPa, us = Hg, uk = hPa, ca = kPa',
        title: 'Pressure',
      }),
    probability: PointPointDailyAfternoonProbDataSchema,
    snow_depth: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Snow depth. (afternoon avg)\nUnits: metric = cm, us = inch, uk = cm, ca = cm',
        title: 'Snow Depth',
      }),
    soil_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Soil Temperature',
      }),
    surface_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Surface Temperature',
      }),
    temperature: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (afternoon avg)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Temperature',
      }),
    visibility: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Visibility. (afternoon avg)\nUnits: metric = km, us = mi, uk = mi, ca = km',
        title: 'Visibility',
      }),
    weather: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Afternoon day string identifier of the weather icon, e.g. `light_rain`.',
        title: 'Weather',
      }),
    wind: PointPointDailyAfternoonWindDataSchema,
    wind_chill: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (afternoon avg)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Wind Chill',
      }),
  })
  .openapi({
    required: ['wind', 'cloud_cover', 'precipitation', 'probability'],
    title: 'Point_PointDailyAfternoonData',
  })
  .openapi('PointPointDailyAfternoonData')

const PointPointDailyAllDayCloudCoverDataSchema = z
  .object({
    high: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by high clouds. (allday avg)\nUnit: \\%',
        title: 'High',
      }),
    low: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by low clouds. (allday avg)\nUnit: \\%',
        title: 'Low',
      }),
    middle: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by middle clouds. (allday avg)\nUnit: \\%',
        title: 'Middle',
      }),
    total: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by clouds. (allday avg)\nUnit: \\%',
        title: 'Total',
      }),
  })
  .openapi({ title: 'Point_PointDailyAllDayCloudCoverData', required: [] })
  .openapi('PointPointDailyAllDayCloudCoverData')

const PointPointDailyAllDayPrecipitationDataSchema = z
  .object({
    total: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total precipitation amount accumulated since last hour. (allday sum)\nUnits: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h',
        title: 'Total',
      }),
    type: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Precipitation type, may be one of:\n\n* `none`, it there is no precipitation\n* `rain`\n* `snow`\n* `rain_snow`\n* `ice pellets`\n* `frozen rain`\n\nUnit: precipitation type',
        title: 'Type',
      }),
  })
  .openapi({ title: 'Point_PointDailyAllDayPrecipitationData', required: [] })
  .openapi('PointPointDailyAllDayPrecipitationData')

const PointPointDailyAllDayProbDataSchema = z
  .object({
    freeze: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Probability the temperature drops below 0 °C. (allday avg)\nUnit: %',
        title: 'Freeze',
      }),
    precipitation: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Probability of non-zero precipitation.\nUnit: \\%',
        title: 'Precipitation',
      }),
    storm: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total precipitation amount accumulated since last hour.\nUnit: mm/h',
        title: 'Storm',
      }),
  })
  .openapi({ title: 'Point_PointDailyAllDayProbData', required: [] })
  .openapi('PointPointDailyAllDayProbData')

const PointPointDailyAllDayWindDataSchema = z
  .object({
    angle: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'All day wind direction angle in degrees, 180° means wind from the south.\nUnit: degrees',
        title: 'Angle',
      }),
    dir: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'All day wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.\nUnit: 16dir',
        title: 'Dir',
      }),
    gusts: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Wind gust speed. (allday max)\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Gusts',
      }),
    speed: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Speed',
      }),
  })
  .openapi({ title: 'Point_PointDailyAllDayWindData', required: [] })
  .openapi('PointPointDailyAllDayWindData')

const PointPointDailyAllDayDataSchema = z
  .object({
    cloud_cover: PointPointDailyAllDayCloudCoverDataSchema,
    dew_point: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Dew Point',
      }),
    dew_point_max: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Dew Point Max',
      }),
    dew_point_min: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Dew Point Min',
      }),
    feels_like: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Feels Like',
      }),
    feels_like_max: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Feels Like Max',
      }),
    feels_like_min: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Feels Like Min',
      }),
    humidity: z
      .int()
      .exactOptional()
      .openapi({ description: 'Relative humidity. (allday avg)\nUnit: \\%', title: 'Humidity' }),
    icon: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Numeric identifier of the weather icon. The following values can appear:\n\n* 1 - Not available\n* 2 - Sunny\n* 3 - Mostly sunny\n* 4 - Partly sunny\n* 5 - Mostly cloudy\n* 6 - Cloudy\n* 7 - Overcast\n* 8 - Overcast with low clouds\n* 9 - Fog\n* 10 - Light rain\n* 11 - Rain\n* 12 - Possible rain\n* 13 - Rain shower\n* 14 - Thunderstorm\n* 15 - Local thunderstorms\n* 16 - Light snow\n* 17 - Snow\n* 18 - Possible snow\n* 19 - Snow shower\n* 20 - Rain and snow\n* 21 - Possible rain and snow\n* 22 - Rain and snow\n* 23 - Freezing rain\n* 24 - Possible freezing rain\n* 25 - Hail\n* 26 - Clear (night)\n* 27 - Mostly clear (night)\n* 28 - Partly clear (night)\n* 29 - Mostly cloudy (night)\n* 30 - Cloudy (night)\n* 31 - Overcast with low clouds (night)\n* 32 - Rain shower (night)\n* 33 - Local thunderstorms (night)\n* 34 - Snow shower (night)\n* 35 - Rain and snow (night)\n* 36 - Possible freezing rain (night)\n\nUnit: icon',
        title: 'Icon',
      }),
    ozone: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total column of ozone. (allday avg)\nUnit: Dobson',
        title: 'Ozone',
      }),
    precipitation: PointPointDailyAllDayPrecipitationDataSchema,
    pressure: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Atmospheric pressure at mean sea level. (allday avg)\nUnits: metric = hPa, us = Hg, uk = hPa, ca = kPa',
        title: 'Pressure',
      }),
    probability: PointPointDailyAllDayProbDataSchema,
    snow_depth: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Snow depth. (allday avg)\nUnits: metric = cm, us = inch, uk = cm, ca = cm',
        title: 'Snow Depth',
      }),
    soil_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Soil Temperature',
      }),
    soil_temperature_max: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Soil Temperature Max',
      }),
    soil_temperature_min: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Soil Temperature Min',
      }),
    surface_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Surface Temperature',
      }),
    surface_temperature_max: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Surface Temperature Max',
      }),
    surface_temperature_min: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Surface Temperature Min',
      }),
    temperature: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (allday avg)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Temperature',
      }),
    temperature_max: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (allday max)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Temperature Max',
      }),
    temperature_min: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (allday min)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Temperature Min',
      }),
    visibility: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Visibility. (allday avg)\nUnits: metric = km, us = mi, uk = mi, ca = km',
        title: 'Visibility',
      }),
    weather: z
      .string()
      .exactOptional()
      .openapi({
        description: 'All day string identifier of the weather icon, e.g. `light_rain`.',
        title: 'Weather',
      }),
    wind: PointPointDailyAllDayWindDataSchema,
    wind_chill: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (allday avg)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Wind Chill',
      }),
    wind_chill_max: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (allday max)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Wind Chill Max',
      }),
    wind_chill_min: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (allday min)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Wind Chill Min',
      }),
  })
  .openapi({
    required: ['wind', 'cloud_cover', 'precipitation', 'probability'],
    title: 'Point_PointDailyAllDayData',
  })
  .openapi('PointPointDailyAllDayData')

const PointPointDailyMoonDataSchema = z
  .object({
    always_down: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the moon never rises on given day, false otherwise.',
        title: 'Always Down',
      }),
    always_up: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the moon never sets on given day, false otherwise.',
        title: 'Always Up',
      }),
    phase: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          "Name of the moon phase, one of 'new_moon', 'first_quarter', 'full_moon', 'last_quarter'.",
        title: 'Phase',
      }),
    rise: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Datetime of the moonrise or null if the moon does not rise on given day.',
        example: '2022-03-30T18:00:00',
        title: 'Rise',
      }),
    set: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Datetime of the moonset or null if the moon does not set on given day.',
        example: '2022-03-30T18:00:00',
        title: 'Set',
      }),
  })
  .openapi({ title: 'Point_PointDailyMoonData', required: [] })
  .openapi('PointPointDailyMoonData')

const PointPointDailySunDataSchema = z
  .object({
    always_down: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the sun never rises on given day (polar night), false otherwise.',
        title: 'Always Down',
      }),
    always_up: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the sun never sets on given day (polar day), false otherwise.',
        title: 'Always Up',
      }),
    rise: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Datetime of the sunrise or null during polar day/night.',
        example: '2022-03-30T18:00:00',
        title: 'Rise',
      }),
    set: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Datetime of the sunset or null during polar day/night.',
        example: '2022-03-30T18:00:00',
        title: 'Set',
      }),
  })
  .openapi({ title: 'Point_PointDailySunData', required: [] })
  .openapi('PointPointDailySunData')

const PointPointDailyAstroDataSchema = z
  .object({ moon: PointPointDailyMoonDataSchema, sun: PointPointDailySunDataSchema })
  .openapi({ required: ['sun', 'moon'], title: 'Point_PointDailyAstroData' })
  .openapi('PointPointDailyAstroData')

const PointPointDailyEveningCloudCoverDataSchema = z
  .object({
    high: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by high clouds. (evening avg)\nUnit: \\%',
        title: 'High',
      }),
    low: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by low clouds. (evening avg)\nUnit: \\%',
        title: 'Low',
      }),
    middle: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by middle clouds. (evening avg)\nUnit: \\%',
        title: 'Middle',
      }),
    total: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by clouds. (evening avg)\nUnit: \\%',
        title: 'Total',
      }),
  })
  .openapi({ title: 'Point_PointDailyEveningCloudCoverData', required: [] })
  .openapi('PointPointDailyEveningCloudCoverData')

const PointPointDailyEveningPrecipitationDataSchema = z
  .object({
    total: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total precipitation amount accumulated since last hour. (evening sum)\nUnits: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h',
        title: 'Total',
      }),
    type: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Precipitation type, may be one of:\n\n* `none`, it there is no precipitation\n* `rain`\n* `snow`\n* `rain_snow`\n* `ice pellets`\n* `frozen rain`\n\nUnit: precipitation type',
        title: 'Type',
      }),
  })
  .openapi({ title: 'Point_PointDailyEveningPrecipitationData', required: [] })
  .openapi('PointPointDailyEveningPrecipitationData')

const PointPointDailyEveningProbDataSchema = z
  .object({
    freeze: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Probability the temperature drops below 0 °C. (evening avg)\nUnit: %',
        title: 'Freeze',
      }),
    precipitation: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Probability of non-zero precipitation.\nUnit: \\%',
        title: 'Precipitation',
      }),
    storm: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total precipitation amount accumulated since last hour.\nUnit: mm/h',
        title: 'Storm',
      }),
  })
  .openapi({ title: 'Point_PointDailyEveningProbData', required: [] })
  .openapi('PointPointDailyEveningProbData')

const PointPointDailyEveningWindDataSchema = z
  .object({
    angle: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Evening wind direction angle in degrees, 180° means wind from the south.\nUnit: degrees',
        title: 'Angle',
      }),
    dir: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Evening wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.\nUnit: 16dir',
        title: 'Dir',
      }),
    gusts: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Wind gust speed. (evening max)\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Gusts',
      }),
    speed: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Speed',
      }),
  })
  .openapi({ title: 'Point_PointDailyEveningWindData', required: [] })
  .openapi('PointPointDailyEveningWindData')

const PointPointDailyEveningDataSchema = z
  .object({
    cloud_cover: PointPointDailyEveningCloudCoverDataSchema,
    dew_point: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Dew Point',
      }),
    feels_like: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Feels Like',
      }),
    humidity: z
      .int()
      .exactOptional()
      .openapi({ description: 'Relative humidity. (evening avg)\nUnit: \\%', title: 'Humidity' }),
    icon: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Evening numeric identifier of the weather icon. The following values can appear:\n\n* 1 - Not available\n* 2 - Sunny\n* 3 - Mostly sunny\n* 4 - Partly sunny\n* 5 - Mostly cloudy\n* 6 - Cloudy\n* 7 - Overcast\n* 8 - Overcast with low clouds\n* 9 - Fog\n* 10 - Light rain\n* 11 - Rain\n* 12 - Possible rain\n* 13 - Rain shower\n* 14 - Thunderstorm\n* 15 - Local thunderstorms\n* 16 - Light snow\n* 17 - Snow\n* 18 - Possible snow\n* 19 - Snow shower\n* 20 - Rain and snow\n* 21 - Possible rain and snow\n* 22 - Rain and snow\n* 23 - Freezing rain\n* 24 - Possible freezing rain\n* 25 - Hail\n* 26 - Clear (night)\n* 27 - Mostly clear (night)\n* 28 - Partly clear (night)\n* 29 - Mostly cloudy (night)\n* 30 - Cloudy (night)\n* 31 - Overcast with low clouds (night)\n* 32 - Rain shower (night)\n* 33 - Local thunderstorms (night)\n* 34 - Snow shower (night)\n* 35 - Rain and snow (night)\n* 36 - Possible freezing rain (night)\n\nUnit: icon',
        title: 'Icon',
      }),
    ozone: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total column of ozone. (evening avg)\nUnit: Dobson',
        title: 'Ozone',
      }),
    precipitation: PointPointDailyEveningPrecipitationDataSchema,
    pressure: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Atmospheric pressure at mean sea level. (evening avg)\nUnits: metric = hPa, us = Hg, uk = hPa, ca = kPa',
        title: 'Pressure',
      }),
    probability: PointPointDailyEveningProbDataSchema,
    snow_depth: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Snow depth. (evening avg)\nUnits: metric = cm, us = inch, uk = cm, ca = cm',
        title: 'Snow Depth',
      }),
    soil_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Soil Temperature',
      }),
    surface_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Surface Temperature',
      }),
    temperature: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (evening avg)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Temperature',
      }),
    visibility: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Visibility. (evening avg)\nUnits: metric = km, us = mi, uk = mi, ca = km',
        title: 'Visibility',
      }),
    weather: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Evening day string identifier of the weather icon, e.g. `light_rain`.',
        title: 'Weather',
      }),
    wind: PointPointDailyEveningWindDataSchema,
    wind_chill: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (evening avg)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Wind Chill',
      }),
  })
  .openapi({
    required: ['wind', 'cloud_cover', 'precipitation', 'probability'],
    title: 'Point_PointDailyEveningData',
  })
  .openapi('PointPointDailyEveningData')

const PointPointDailyMorningCloudCoverDataSchema = z
  .object({
    high: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by high clouds. (morning avg)\nUnit: \\%',
        title: 'High',
      }),
    low: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by low clouds. (morning avg)\nUnit: \\%',
        title: 'Low',
      }),
    middle: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by middle clouds. (morning avg)\nUnit: \\%',
        title: 'Middle',
      }),
    total: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by clouds. (morning avg)\nUnit: \\%',
        title: 'Total',
      }),
  })
  .openapi({ title: 'Point_PointDailyMorningCloudCoverData', required: [] })
  .openapi('PointPointDailyMorningCloudCoverData')

const PointPointDailyMorningPrecipitationDataSchema = z
  .object({
    total: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total precipitation amount accumulated since last hour. (morning sum)\nUnits: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h',
        title: 'Total',
      }),
    type: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Precipitation type, may be one of:\n\n* `none`, it there is no precipitation\n* `rain`\n* `snow`\n* `rain_snow`\n* `ice pellets`\n* `frozen rain`\n\nUnit: precipitation type',
        title: 'Type',
      }),
  })
  .openapi({ title: 'Point_PointDailyMorningPrecipitationData', required: [] })
  .openapi('PointPointDailyMorningPrecipitationData')

const PointPointDailyMorningProbDataSchema = z
  .object({
    freeze: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Probability the temperature drops below 0 °C. (morning avg)\nUnit: %',
        title: 'Freeze',
      }),
    precipitation: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Probability of non-zero precipitation.\nUnit: \\%',
        title: 'Precipitation',
      }),
    storm: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total precipitation amount accumulated since last hour.\nUnit: mm/h',
        title: 'Storm',
      }),
  })
  .openapi({ title: 'Point_PointDailyMorningProbData', required: [] })
  .openapi('PointPointDailyMorningProbData')

const PointPointDailyMorningWindDataSchema = z
  .object({
    angle: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Morning wind direction angle in degrees, 180° means wind from the south.\nUnit: degrees',
        title: 'Angle',
      }),
    dir: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Morning wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.\nUnit: 16dir',
        title: 'Dir',
      }),
    gusts: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Wind gust speed. (morning max)\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Gusts',
      }),
    speed: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Speed',
      }),
  })
  .openapi({ title: 'Point_PointDailyMorningWindData', required: [] })
  .openapi('PointPointDailyMorningWindData')

const PointPointDailyMorningDataSchema = z
  .object({
    cloud_cover: PointPointDailyMorningCloudCoverDataSchema,
    dew_point: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Dew Point',
      }),
    feels_like: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Feels Like',
      }),
    humidity: z
      .int()
      .exactOptional()
      .openapi({ description: 'Relative humidity. (morning avg)\nUnit: \\%', title: 'Humidity' }),
    icon: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Morning numeric identifier of the weather icon. The following values can appear:\n\n* 1 - Not available\n* 2 - Sunny\n* 3 - Mostly sunny\n* 4 - Partly sunny\n* 5 - Mostly cloudy\n* 6 - Cloudy\n* 7 - Overcast\n* 8 - Overcast with low clouds\n* 9 - Fog\n* 10 - Light rain\n* 11 - Rain\n* 12 - Possible rain\n* 13 - Rain shower\n* 14 - Thunderstorm\n* 15 - Local thunderstorms\n* 16 - Light snow\n* 17 - Snow\n* 18 - Possible snow\n* 19 - Snow shower\n* 20 - Rain and snow\n* 21 - Possible rain and snow\n* 22 - Rain and snow\n* 23 - Freezing rain\n* 24 - Possible freezing rain\n* 25 - Hail\n* 26 - Clear (night)\n* 27 - Mostly clear (night)\n* 28 - Partly clear (night)\n* 29 - Mostly cloudy (night)\n* 30 - Cloudy (night)\n* 31 - Overcast with low clouds (night)\n* 32 - Rain shower (night)\n* 33 - Local thunderstorms (night)\n* 34 - Snow shower (night)\n* 35 - Rain and snow (night)\n* 36 - Possible freezing rain (night)\n\nUnit: icon',
        title: 'Icon',
      }),
    ozone: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total column of ozone. (morning avg)\nUnit: Dobson',
        title: 'Ozone',
      }),
    precipitation: PointPointDailyMorningPrecipitationDataSchema,
    pressure: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Atmospheric pressure at mean sea level. (morning avg)\nUnits: metric = hPa, us = Hg, uk = hPa, ca = kPa',
        title: 'Pressure',
      }),
    probability: PointPointDailyMorningProbDataSchema,
    snow_depth: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Snow depth. (morning avg)\nUnits: metric = cm, us = inch, uk = cm, ca = cm',
        title: 'Snow Depth',
      }),
    soil_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Soil Temperature',
      }),
    surface_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Surface Temperature',
      }),
    temperature: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (morning avg)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Temperature',
      }),
    visibility: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Visibility. (morning avg)\nUnits: metric = km, us = mi, uk = mi, ca = km',
        title: 'Visibility',
      }),
    weather: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Morning day string identifier of the weather icon, e.g. `light_rain`.',
        title: 'Weather',
      }),
    wind: PointPointDailyMorningWindDataSchema,
    wind_chill: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Temperature 2 metres above ground. (morning avg)\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Wind Chill',
      }),
  })
  .openapi({
    required: ['wind', 'cloud_cover', 'precipitation', 'probability'],
    title: 'Point_PointDailyMorningData',
  })
  .openapi('PointPointDailyMorningData')

const PointPointDailyStatsPrecipitationDataSchema = z
  .object({
    avg: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Long-term average daily precipitation amount.\nUnits: metric = mm/day, us = inches per day, uk = mm/day, ca = mm/day',
        title: 'Avg',
      }),
    probability: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Long-term average precipitation probability.\nUnit: \\%',
        title: 'Probability',
      }),
  })
  .openapi({ title: 'Point_PointDailyStatsPrecipitationData', required: [] })
  .openapi('PointPointDailyStatsPrecipitationData')

const PointPointDailyStatsTemperatureDataSchema = z
  .object({
    avg: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Long-term temperature average.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Avg',
      }),
    avg_max: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Long-term daily maximum temperature average.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Avg Max',
      }),
    avg_min: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Long-term daily minimum temperature average.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Avg Min',
      }),
    record_max: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Historical daily maximum.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Record Max',
      }),
    record_min: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Historical daily minimum temperature.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Record Min',
      }),
  })
  .openapi({ title: 'Point_PointDailyStatsTemperatureData', required: [] })
  .openapi('PointPointDailyStatsTemperatureData')

const PointPointDailyStatsWindDataSchema = z
  .object({
    avg_angle: z
      .number()
      .exactOptional()
      .openapi({ description: 'Long-term average wind angle.\nUnit: deg', title: 'Avg Angle' }),
    avg_dir: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          "Long-term average wind direction in 'N', 'NNE', 'NE', ... 'NNW' format.\nUnit: 16dir",
        title: 'Avg Dir',
      }),
    avg_speed: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Long-term average wind speed.\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Avg Speed',
      }),
    max_gust: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Historical daily maximum wind gust speed.\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Max Gust',
      }),
    max_speed: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Historical daily maximum wind speed.\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Max Speed',
      }),
  })
  .openapi({ title: 'Point_PointDailyStatsWindData', required: [] })
  .openapi('PointPointDailyStatsWindData')

const PointPointDailyStatsDataSchema = z
  .object({
    precipitation: PointPointDailyStatsPrecipitationDataSchema,
    temperature: PointPointDailyStatsTemperatureDataSchema,
    wind: PointPointDailyStatsWindDataSchema,
  })
  .openapi({
    required: ['temperature', 'wind', 'precipitation'],
    title: 'Point_PointDailyStatsData',
  })
  .openapi('PointPointDailyStatsData')

const PointPointDailyDataSchema = z
  .object({
    afternoon: PointPointDailyAfternoonDataSchema.exactOptional(),
    all_day: PointPointDailyAllDayDataSchema,
    astro: PointPointDailyAstroDataSchema,
    day: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Datetime in YYYY-MM-DDTHH:MM:SS format.',
        title: 'Day',
      }),
    evening: PointPointDailyEveningDataSchema.exactOptional(),
    icon: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Numeric identifier of the weather icon. The following values can appear:\n\n* 1 - Not available\n* 2 - Sunny\n* 3 - Mostly sunny\n* 4 - Partly sunny\n* 5 - Mostly cloudy\n* 6 - Cloudy\n* 7 - Overcast\n* 8 - Overcast with low clouds\n* 9 - Fog\n* 10 - Light rain\n* 11 - Rain\n* 12 - Possible rain\n* 13 - Rain shower\n* 14 - Thunderstorm\n* 15 - Local thunderstorms\n* 16 - Light snow\n* 17 - Snow\n* 18 - Possible snow\n* 19 - Snow shower\n* 20 - Rain and snow\n* 21 - Possible rain and snow\n* 22 - Rain and snow\n* 23 - Freezing rain\n* 24 - Possible freezing rain\n* 25 - Hail\n* 26 - Clear (night)\n* 27 - Mostly clear (night)\n* 28 - Partly clear (night)\n* 29 - Mostly cloudy (night)\n* 30 - Cloudy (night)\n* 31 - Overcast with low clouds (night)\n* 32 - Rain shower (night)\n* 33 - Local thunderstorms (night)\n* 34 - Snow shower (night)\n* 35 - Rain and snow (night)\n* 36 - Possible freezing rain (night)\n\nUnit: icon',
        title: 'Icon',
      }),
    morning: PointPointDailyMorningDataSchema.exactOptional(),
    predictability: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Weather predictability. Values from 1 (very high predictability) to 5 (very low predictability).\nUnit: 1-5',
        title: 'Predictability',
      }),
    statistics: PointPointDailyStatsDataSchema,
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Short text summary of the weather, e.g. `Light rain`.',
        title: 'Summary',
      }),
    weather: z
      .string()
      .exactOptional()
      .openapi({
        description: 'All day string identifier of the weather icon, e.g. `light_rain`.',
        title: 'Weather',
      }),
  })
  .openapi({ required: ['all_day', 'astro', 'statistics'], title: 'Point_PointDailyData' })
  .openapi('PointPointDailyData')

const PointPointDailySchema = z
  .object({ data: z.array(PointPointDailyDataSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'Point_PointDaily' })
  .openapi('PointPointDaily')

const PointPointHourlyCloudCoverDataSchema = z
  .object({
    high: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by high clouds.\nUnit: \\%',
        title: 'High',
      }),
    low: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by low clouds.\nUnit: \\%',
        title: 'Low',
      }),
    middle: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by middle clouds.\nUnit: \\%',
        title: 'Middle',
      }),
    total: z.number().exactOptional().openapi({ description: 'Unit: \\%', title: 'Total' }),
  })
  .openapi({ title: 'Point_PointHourlyCloudCoverData', required: [] })
  .openapi('PointPointHourlyCloudCoverData')

const PointPointHourlyPrecipitationDataSchema = z
  .object({
    convective: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total precipitation amount accumulated since last hour.\nUnits: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h',
        title: 'Convective',
      }),
    rainspot: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Precipitation in the surrounding of queried location. The data is 7x7 ASCII art string, queried location being in the center. Character `#` means there is precipitation, `.` means no precipitation. The distance between neighboring cells is 0.25°.\nUnit: rainspot',
        title: 'Rainspot',
      }),
    total: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total precipitation amount accumulated since last hour.\nUnits: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h',
        title: 'Total',
      }),
    type: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Precipitation type, may be one of:\n\n* `none`, it there is no precipitation\n* `rain`\n* `snow`\n* `rain_snow`\n* `ice pellets`\n* `frozen rain`\n\nUnit: precipitation type',
        title: 'Type',
      }),
  })
  .openapi({ title: 'Point_PointHourlyPrecipitationData', required: [] })
  .openapi('PointPointHourlyPrecipitationData')

const PointPointHourlyProbDataSchema = z
  .object({
    freeze: z.number().exactOptional().openapi({ description: 'Unit: \\%', title: 'Freeze' }),
    precipitation: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Probability of non-zero precipitation.\nUnit: \\%',
        title: 'Precipitation',
      }),
    storm: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total precipitation amount accumulated since last hour.\nUnit: mm/h',
        title: 'Storm',
      }),
  })
  .openapi({ title: 'Point_PointHourlyProbData', required: [] })
  .openapi('PointPointHourlyProbData')

const PointPointHourlyWindDataSchema = z
  .object({
    angle: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Wind direction angle in degrees, 180° means wind from the south.\nUnit: degrees',
        title: 'Angle',
      }),
    dir: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.\nUnit: 16dir',
        title: 'Dir',
      }),
    gusts: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Gusts',
      }),
    speed: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Speed',
      }),
  })
  .openapi({ title: 'Point_PointHourlyWindData', required: [] })
  .openapi('PointPointHourlyWindData')

const PointPointHourlyDataSchema = z
  .object({
    cape: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Convective available potential energy.\nUnit: J/kg',
        title: 'Cape',
      }),
    cloud_cover: PointPointHourlyCloudCoverDataSchema,
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Datetime in YYYY-MM-DDTHH:MM:SS format.',
        example: '2022-03-30T18:00:00',
        title: 'Date',
      }),
    dew_point: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Dew Point',
      }),
    evaporation: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Evaporation of liquid water into water vapor.\nUnit: mm/h',
        title: 'Evaporation',
      }),
    feels_like: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Feels Like',
      }),
    humidity: z
      .int()
      .exactOptional()
      .openapi({ description: 'Relative humidity.\nUnit: \\%', title: 'Humidity' }),
    icon: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Numeric identifier of the weather icon. The following values can appear:\n\n* 1 - Not available\n* 2 - Sunny\n* 3 - Mostly sunny\n* 4 - Partly sunny\n* 5 - Mostly cloudy\n* 6 - Cloudy\n* 7 - Overcast\n* 8 - Overcast with low clouds\n* 9 - Fog\n* 10 - Light rain\n* 11 - Rain\n* 12 - Possible rain\n* 13 - Rain shower\n* 14 - Thunderstorm\n* 15 - Local thunderstorms\n* 16 - Light snow\n* 17 - Snow\n* 18 - Possible snow\n* 19 - Snow shower\n* 20 - Rain and snow\n* 21 - Possible rain and snow\n* 22 - Rain and snow\n* 23 - Freezing rain\n* 24 - Possible freezing rain\n* 25 - Hail\n* 26 - Clear (night)\n* 27 - Mostly clear (night)\n* 28 - Partly clear (night)\n* 29 - Mostly cloudy (night)\n* 30 - Cloudy (night)\n* 31 - Overcast with low clouds (night)\n* 32 - Rain shower (night)\n* 33 - Local thunderstorms (night)\n* 34 - Snow shower (night)\n* 35 - Rain and snow (night)\n* 36 - Possible freezing rain (night)\n\nUnit: weather_ico0_36',
        title: 'Icon',
      }),
    irradiance: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Global downward short-wave radiation flux.\nUnit: W/m2',
        title: 'Irradiance',
      }),
    lftx: z
      .number()
      .exactOptional()
      .openapi({ description: 'Surface lifted index.\nUnit: K', title: 'Lftx' }),
    ozone: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total column of ozone.\nUnit: Dobson', title: 'Ozone' }),
    precipitation: PointPointHourlyPrecipitationDataSchema,
    pressure: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Atmospheric pressure at mean sea level.\nUnits: metric = hPa, us = Hg, uk = hPa, ca = kPa',
        title: 'Pressure',
      }),
    probability: PointPointHourlyProbDataSchema,
    snow_depth: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Snow depth.\nUnits: metric = cm, us = inch, uk = cm, ca = cm',
        title: 'Snow Depth',
      }),
    soil_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Soil Temperature',
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Short text summary of the weather, e.g. `Light rain`.',
        title: 'Summary',
      }),
    sunshine_duration: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Sunshine duration since start of previous hour.\nUnit: s',
        title: 'Sunshine Duration',
      }),
    surface_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Surface Temperature',
      }),
    temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Temperature',
      }),
    uv_index: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'UV index, values from zero (low risk of harm) to 11+ (extreme risk of harm).\nUnit: uv_index',
        title: 'Uv Index',
      }),
    visibility: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Visibility.\nUnits: metric = km, us = mi, uk = mi, ca = km',
        title: 'Visibility',
      }),
    weather: z
      .string()
      .exactOptional()
      .openapi({
        description: 'String identifier of the weather icon, e.g. `light_rain`.',
        title: 'Weather',
      }),
    wind: PointPointHourlyWindDataSchema,
    wind_chill: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Wind Chill',
      }),
  })
  .openapi({
    required: ['wind', 'cloud_cover', 'precipitation', 'probability'],
    title: 'Point_PointHourlyData',
  })
  .openapi('PointPointHourlyData')

const PointPointHourlySchema = z
  .object({ data: z.array(PointPointHourlyDataSchema).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'Point_PointHourly' })
  .openapi('PointPointHourly')

const PointPointMinutelyPrecipitationDataSchema = z
  .object({
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Datetime in YYYY-MM-DDTHH:MM:SS format.',
        example: '2022-03-30T18:00:00',
        title: 'Date',
      }),
    precipitation: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Minutely precipitation amount (per hour). For the startup tier, showing one value per 10 minutes.\nFor other tiers, showing one value per each minute.\n\nUnit: mm/h',
        title: 'Precipitation',
      }),
  })
  .openapi({ title: 'Point_PointMinutelyPrecipitationData', required: [] })
  .openapi('PointPointMinutelyPrecipitationData')

const PointPointMinutelySchema = z
  .object({
    data: z.array(PointPointMinutelyPrecipitationDataSchema).openapi({ title: 'Data' }),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Text summary about upcoming precipitation.\nUnit: summary',
        title: 'Summary',
      }),
  })
  .openapi({ required: ['data'], title: 'Point_PointMinutely' })
  .openapi('PointPointMinutely')

const PointPointDataSchema = z
  .object({
    alerts: PointPointAlertsSchema,
    current: PointPointCurrentDataSchema.exactOptional(),
    daily: PointPointDailySchema.exactOptional(),
    elevation: z
      .int()
      .openapi({
        description:
          "Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')",
        title: 'Elevation',
      }),
    hourly: PointPointHourlySchema.exactOptional(),
    lat: z
      .string()
      .openapi({
        description:
          'Latitude of the point, always in the format <float><N/S>, for example ``23.5S``',
        title: 'Lat',
      }),
    lon: z
      .string()
      .openapi({
        description:
          'Longitude of the point, always in the format <float><E/W>, for example ``23.5W``',
        title: 'Lon',
      }),
    minutely: PointPointMinutelySchema.exactOptional(),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID.",
        title: 'Timezone',
      }),
    units: z
      .string()
      .openapi({ description: 'Unit system (metric, uk, ca or us)', title: 'Units' }),
  })
  .openapi({ required: ['lat', 'lon', 'elevation', 'units', 'alerts'], title: 'Point_PointData' })
  .openapi('PointPointData')

const TimeMachinePointDailyStatsPrecipitationDataSchema = z
  .object({
    avg: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Long-term average daily precipitation amount.\nUnits: metric = mm/day, us = inches per day, uk = mm/day, ca = mm/day',
        title: 'Avg',
      }),
    probability: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Long-term average precipitation probability.\nUnit: \\%',
        title: 'Probability',
      }),
  })
  .openapi({ title: 'TimeMachine_PointDailyStatsPrecipitationData', required: [] })
  .openapi('TimeMachinePointDailyStatsPrecipitationData')

const TimeMachinePointDailyStatsTemperatureDataSchema = z
  .object({
    avg: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Long-term temperature average.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Avg',
      }),
    avg_max: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Long-term daily maximum temperature average.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Avg Max',
      }),
    avg_min: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Long-term daily minimum temperature average.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Avg Min',
      }),
    record_max: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Historical daily maximum.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Record Max',
      }),
    record_min: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Historical daily minimum temperature.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Record Min',
      }),
  })
  .openapi({ title: 'TimeMachine_PointDailyStatsTemperatureData', required: [] })
  .openapi('TimeMachinePointDailyStatsTemperatureData')

const TimeMachinePointDailyStatsWindDataSchema = z
  .object({
    avg_angle: z
      .number()
      .exactOptional()
      .openapi({ description: 'Long-term average wind angle.\nUnit: deg', title: 'Avg Angle' }),
    avg_dir: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          "Long-term average wind direction in 'N', 'NNE', 'NE', ... 'NNW' format.\nUnit: 16dir",
        title: 'Avg Dir',
      }),
    avg_speed: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Long-term average wind speed.\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Avg Speed',
      }),
    max_gust: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Historical daily maximum wind gust speed.\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Max Gust',
      }),
    max_speed: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Historical daily maximum wind speed.\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Max Speed',
      }),
  })
  .openapi({ title: 'TimeMachine_PointDailyStatsWindData', required: [] })
  .openapi('TimeMachinePointDailyStatsWindData')

const TimeMachinePointDailyStatsDataSchema = z
  .object({
    precipitation: TimeMachinePointDailyStatsPrecipitationDataSchema,
    temperature: TimeMachinePointDailyStatsTemperatureDataSchema,
    wind: TimeMachinePointDailyStatsWindDataSchema,
  })
  .openapi({
    required: ['temperature', 'wind', 'precipitation'],
    title: 'TimeMachine_PointDailyStatsData',
  })
  .openapi('TimeMachinePointDailyStatsData')

const TimeMachineTimeMachineCloudCoverDataSchema = z
  .object({
    high: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by high clouds.\nUnit: %',
        title: 'High',
      }),
    low: z
      .int()
      .exactOptional()
      .openapi({ description: 'Percentage of sky covered by low clouds.\nUnit: %', title: 'Low' }),
    middle: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Percentage of sky covered by middle clouds.\nUnit: %',
        title: 'Middle',
      }),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'Percentage of sky covered by clouds.\nUnit: %', title: 'Total' }),
  })
  .openapi({ title: 'TimeMachine_TimeMachineCloudCoverData', required: [] })
  .openapi('TimeMachineTimeMachineCloudCoverData')

const TimeMachineTimeMachinePrecipitationDataSchema = z
  .object({
    total: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total precipitation amount accumulated since last hour.\nUnits: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h',
        title: 'Total',
      }),
    type: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'Precipitation type, may be one of:\n\n* `none`, it there is no precipitation\n* `rain`\n* `snow`\n* `rain_snow`\n* `ice pellets`\n* `frozen rain`\n\nUnit: precipitation type',
        title: 'Type',
      }),
  })
  .openapi({ title: 'TimeMachine_TimeMachinePrecipitationData', required: [] })
  .openapi('TimeMachineTimeMachinePrecipitationData')

const TimeMachineTimeMachineWindDataSchema = z
  .object({
    angle: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.\nUnit: deg',
        title: 'Angle',
      }),
    dir: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.\nUnit: 16dir',
        title: 'Dir',
      }),
    gusts: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Wind gust speed.\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Gusts',
      }),
    speed: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Wind speed 10 metres above the ground.\nUnits: metric = m/s, us = mph, uk = mph, ca = km/h',
        title: 'Speed',
      }),
  })
  .openapi({ title: 'TimeMachine_TimeMachineWindData', required: [] })
  .openapi('TimeMachineTimeMachineWindData')

const TimeMachineTimeMachineHourlyDataSchema = z
  .object({
    cape: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Convective available potential energy.\nUnit: J/kg',
        title: 'Cape',
      }),
    cloud_cover: TimeMachineTimeMachineCloudCoverDataSchema,
    date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Datetime in YYYY-MM-DDTHH:MM:SS format.',
        example: '2022-03-30T18:00:00',
        title: 'Date',
      }),
    dew_point: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Dew Point',
      }),
    evaporation: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Evaporation of liquid water into water vapor.\nUnit: mm/h',
        title: 'Evaporation',
      }),
    feels_like: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Feels like temperature.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Feels Like',
      }),
    humidity: z
      .int()
      .exactOptional()
      .openapi({ description: 'Relative humidity.\nUnit: \\%', title: 'Humidity' }),
    icon: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Numeric identifier of the weather icon. The following values can appear:\n\n* 1 - Not available\n* 2 - Sunny\n* 3 - Mostly sunny\n* 4 - Partly sunny\n* 5 - Mostly cloudy\n* 6 - Cloudy\n* 7 - Overcast\n* 8 - Overcast with low clouds\n* 9 - Fog\n* 10 - Light rain\n* 11 - Rain\n* 12 - Possible rain\n* 13 - Rain shower\n* 14 - Thunderstorm\n* 15 - Local thunderstorms\n* 16 - Light snow\n* 17 - Snow\n* 18 - Possible snow\n* 19 - Snow shower\n* 20 - Rain and snow\n* 21 - Possible rain and snow\n* 22 - Rain and snow\n* 23 - Freezing rain\n* 24 - Possible freezing rain\n* 25 - Hail\n* 26 - Clear (night)\n* 27 - Mostly clear (night)\n* 28 - Partly clear (night)\n* 29 - Mostly cloudy (night)\n* 30 - Cloudy (night)\n* 31 - Overcast with low clouds (night)\n* 32 - Rain shower (night)\n* 33 - Local thunderstorms (night)\n* 34 - Snow shower (night)\n* 35 - Rain and snow (night)\n* 36 - Possible freezing rain (night)\n\nUnit: N/A',
        title: 'Icon',
      }),
    irradiance: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Global downward short-wave radiation flux.\nUnit: W/m2',
        title: 'Irradiance',
      }),
    ozone: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total column of ozone.\nUnit: Dobson', title: 'Ozone' }),
    precipitation: TimeMachineTimeMachinePrecipitationDataSchema,
    pressure: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Atmospheric pressure at mean sea level.\nUnits: metric = hPa, us = Hg, uk = hPa, ca = kPa',
        title: 'Pressure',
      }),
    soil_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Soil Temperature',
      }),
    surface_temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Surface Temperature',
      }),
    temperature: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Units: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Temperature',
      }),
    weather: z
      .string()
      .exactOptional()
      .openapi({
        description: 'String identifier of the weather icon, e.g. `light_rain`.',
        title: 'Weather',
      }),
    wind: TimeMachineTimeMachineWindDataSchema,
    wind_chill: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Windchill temperature.\nUnits: metric = °C, us = °F, uk = °C, ca = °C',
        title: 'Wind Chill',
      }),
  })
  .openapi({
    required: ['wind', 'cloud_cover', 'precipitation'],
    title: 'TimeMachine_TimeMachineHourlyData',
  })
  .openapi('TimeMachineTimeMachineHourlyData')

const TimeMachineTimeMachineSchema = z
  .object({
    data: z.array(TimeMachineTimeMachineHourlyDataSchema).openapi({ title: 'Data' }),
    elevation: z
      .int()
      .openapi({
        description:
          "Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')",
        title: 'Elevation',
      }),
    lat: z
      .string()
      .openapi({
        description:
          'Latitude of the point, always in the format <float><N/S>, for example ``23.5S``',
        title: 'Lat',
      }),
    lon: z
      .string()
      .openapi({
        description:
          'Longitude of the point, always in the format <float><E/W>, for example ``23.5W``',
        title: 'Lon',
      }),
    statistics: TimeMachinePointDailyStatsDataSchema,
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID.",
        title: 'Timezone',
      }),
    units: z
      .string()
      .openapi({ description: 'Unit system (metric, uk, ca or us)', title: 'Units' }),
  })
  .openapi({
    required: ['lat', 'lon', 'elevation', 'units', 'data', 'statistics'],
    title: 'TimeMachine_TimeMachine',
  })
  .openapi('TimeMachineTimeMachine')

const UnitsSchema = z
  .enum(['auto', 'metric', 'us', 'uk', 'ca'])
  .openapi({ description: 'An enumeration.', title: 'Units' })
  .openapi('Units')

const APIKeyHeaderSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

export const getAirQualityRoute = createRoute({
  method: 'get',
  path: '/air_quality',
  tags: ['Point weather'],
  summary: 'Returns air quality data for a single point (geographic name or GPS)',
  description:
    '## Air quality forecast for a single location\n\n### Location specification\nThe location of the weather data is the only parameter that is required and must be specified. There are two ways to do this:\n1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.\n2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).\n\n### Notes\n* **For a detailed description of variables, please consult ⚠️ <a href="https://www.meteosource.com/documentation#description_aq" target="_blank">description of variables</a> ⚠️ in Documentation or `Schema` of the response (link next to Example value in the Responses section below).**\n* Do **not** make any assumptions about the number and ordering of the variables. New variables and sections may be introduced in the future. Always check the data are present before you try to use them.\n* The response contains an `Expires` header, which defines the point at which the API response will not change for the same request. We highly recommend using this to avoid unnecessary requests and **increase the performance of your app**.\n* Meteosource API supports HTTP compression. To enable it, simply add an `Accept-Encoding: gzip` header to your request.\n* When daylight saving time starts, one hourly record will be missing (typically `2:00:00 AM`). When daylight saving time ends, the hourly forecast will contain two records with duplicate times (typically `2:00:00 AM`).\n',
  operationId: 'air_quality_air_quality_get',
  request: {
    query: z.object({
      place_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).',
            in: 'query',
            name: 'place_id',
            required: false,
            schema: {
              description:
                'Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).',
              title: 'Place Id',
              type: 'string',
            },
          },
          description:
            'Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).',
          title: 'Place Id',
        }),
      lat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
            in: 'query',
            name: 'lat',
            required: false,
            schema: {
              description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
              title: 'Lat',
              type: 'string',
            },
          },
          description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
          title: 'Lat',
        }),
      lon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
            in: 'query',
            name: 'lon',
            required: false,
            schema: {
              description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
              title: 'Lon',
              type: 'string',
            },
          },
          description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
          title: 'Lon',
        }),
      timezone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.\nThe format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.\nAlternatively you may use the value ``auto`` in which case the local timezone of the location is used.\nThe full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).\n',
            in: 'query',
            name: 'timezone',
            required: false,
            schema: {
              description:
                'Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.\nThe format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.\nAlternatively you may use the value ``auto`` in which case the local timezone of the location is used.\nThe full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).\n',
              title: 'Timezone',
              type: 'string',
            },
          },
          description:
            'Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.\nThe format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.\nAlternatively you may use the value ``auto`` in which case the local timezone of the location is used.\nThe full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).\n',
          title: 'Timezone',
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
            in: 'query',
            name: 'key',
            required: false,
            schema: {
              description:
                'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
              title: 'Key',
              type: 'string',
            },
          },
          description:
            'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
          title: 'Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: AirQualityPointDataSchema } },
    },
    400: {
      description: 'Error in passed parameter.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    402: {
      description: 'Maximum requests per day limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    403: {
      description: 'API key not not specified or invalid.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Maximum requests per minute limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
  },
  security: [{ APIKeyHeader: [] }],
})

export const getFindPlacesRoute = createRoute({
  method: 'get',
  path: '/find_places',
  tags: ['Location endpoints'],
  summary: 'Search for places. Complete words required.',
  description:
    '## Search for places\n\nYou can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint.\nThe response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.\n\nUnlike the `/find_place_prefix` endpoint, complete words are required here. You can search for cities,\nmountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance.\nYou can then identify the one you want by coordinates, country, or the administrative area.\n',
  operationId: 'find_places_find_places_get',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            description: 'Place name or ZIP code',
            in: 'query',
            name: 'text',
            required: true,
            schema: { description: 'Place name or ZIP code', title: 'Text', type: 'string' },
          },
          description: 'Place name or ZIP code',
          title: 'Text',
        }),
      language: LanguageSchema.default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
            in: 'query',
            name: 'language',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Language' }],
              default: 'en',
              description:
                'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
            },
          },
          description:
            'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
            in: 'query',
            name: 'key',
            required: false,
            schema: {
              description:
                'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
              title: 'Key',
              type: 'string',
            },
          },
          description:
            'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
          title: 'Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(FindPlacesModelSchema)
            .openapi({ title: 'Response Find Places Find Places Get' }),
        },
      },
    },
    400: {
      description: 'Error in passed parameter.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    402: {
      description: 'Maximum requests per day limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    403: {
      description: 'API key not not specified or invalid.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Maximum requests per minute limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
  },
  security: [{ APIKeyHeader: [] }],
})

export const getFindPlacesPrefixRoute = createRoute({
  method: 'get',
  path: '/find_places_prefix',
  tags: ['Location endpoints'],
  summary: 'Prefix search for places. Useful for autocomplete forms.',
  description:
    '## Search for places by prefix\n\nYou can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint. The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.\n\nUnlike the `/find_places` endpoint, you should only specify the prefix of the place you are looking for. This is particularly useful for autocomplete forms. You can search for cities, mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance. You can then identify the one you want by coordinates, country, or the administrative area.\n',
  operationId: 'find_places_prefix_find_places_prefix_get',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            description: 'Place name or ZIP code',
            in: 'query',
            name: 'text',
            required: true,
            schema: { description: 'Place name or ZIP code', title: 'Text', type: 'string' },
          },
          description: 'Place name or ZIP code',
          title: 'Text',
        }),
      language: LanguageSchema.default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
            in: 'query',
            name: 'language',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Language' }],
              default: 'en',
              description:
                'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
            },
          },
          description:
            'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
            in: 'query',
            name: 'key',
            required: false,
            schema: {
              description:
                'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
              title: 'Key',
              type: 'string',
            },
          },
          description:
            'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
          title: 'Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .array(FindPlacesModelSchema)
            .openapi({ title: 'Response Find Places Prefix Find Places Prefix Get' }),
        },
      },
    },
    400: {
      description: 'Error in passed parameter.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    402: {
      description: 'Maximum requests per day limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    403: {
      description: 'API key not not specified or invalid.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Maximum requests per minute limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
  },
  security: [{ APIKeyHeader: [] }],
})

export const getMapRoute = createRoute({
  method: 'get',
  path: '/map',
  tags: ['Weather maps'],
  summary: 'Returns PNG weather map for given area and variable',
  description:
    '## PNG weather forecast maps for given area and variable\n\n### Area specification\nThere are two ways to specify geographical area you need for your map:\n1. Specify `X` and `Y` coordinates and zoom level `Z` of desired tile in <a href="https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/" rel="nofollow" target="_blank">Google Maps Tile notation</a>.\n2. Specify latitude and longitude bounds of the area you want to cover.\n\n### Notes\n* The resulting PNG maps are **always** in <a href="https://epsg.io/3857" rel="nofollow" target="_blank">Google Mercator projection (EPSG:3857)</a>.\n* As Meteosource only covers areas between latitudes 80° and -80°, you can only request maps within these bounds, when specifying the latitude and longitude boundaries. When specifying the area using Google Maps Tile notation, the regions outside our supported latitudes will be fully transparent.\n* The finest resolution is not available for maps covering very large regions. The resulting map will be automatically downscaled in this case, to guarantee high-speed responses.\n* Weather maps are only supported for forecasts, not for archive data.\n',
  operationId: 'map_map_get',
  request: {
    query: z.object({
      tile_x: z
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
            description: 'The X coordinate of Google Maps tile',
            in: 'query',
            name: 'tile_x',
            required: false,
            schema: {
              description: 'The X coordinate of Google Maps tile',
              title: 'Tile X',
              type: 'integer',
            },
          },
          description: 'The X coordinate of Google Maps tile',
          title: 'Tile X',
        }),
      tile_y: z
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
            description: 'The Y coordinate of Google Maps tile',
            in: 'query',
            name: 'tile_y',
            required: false,
            schema: {
              description: 'The Y coordinate of Google Maps tile',
              title: 'Tile Y',
              type: 'integer',
            },
          },
          description: 'The Y coordinate of Google Maps tile',
          title: 'Tile Y',
        }),
      tile_zoom: z
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
            description: 'The zoom level of Google Maps tile',
            in: 'query',
            name: 'tile_zoom',
            required: false,
            schema: {
              description: 'The zoom level of Google Maps tile',
              title: 'Tile Zoom',
              type: 'integer',
            },
          },
          description: 'The zoom level of Google Maps tile',
          title: 'Tile Zoom',
        }),
      min_lat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2\n',
            in: 'query',
            name: 'min_lat',
            required: false,
            schema: {
              description: 'Minimal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2\n',
              title: 'Min Lat',
              type: 'string',
            },
          },
          description: 'Minimal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2\n',
          title: 'Min Lat',
        }),
      min_lon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2\n',
            in: 'query',
            name: 'min_lon',
            required: false,
            schema: {
              description: 'Minimal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2\n',
              title: 'Min Lon',
              type: 'string',
            },
          },
          description: 'Minimal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2\n',
          title: 'Min Lon',
        }),
      max_lat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2.\n',
            in: 'query',
            name: 'max_lat',
            required: false,
            schema: {
              description: 'Maximal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2.\n',
              title: 'Max Lat',
              type: 'string',
            },
          },
          description: 'Maximal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2.\n',
          title: 'Max Lat',
        }),
      max_lon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2\n',
            in: 'query',
            name: 'max_lon',
            required: false,
            schema: {
              description: 'Maximal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2\n',
              title: 'Max Lon',
              type: 'string',
            },
          },
          description: 'Maximal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2\n',
          title: 'Max Lon',
        }),
      variable: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the variable for your map. Available values are:\n\n* `temperature`: Temperature 2 metres above ground\n* `feels_like_temperature`: Feels like temperature\n* `clouds`: Percentage of sky covered by clouds\n* `precipitation`: Total precipitation amount accumulated since last hour\n* `wind_speed`: Wind speed 10 metres above the ground\n* `wind_gust`: Wind gust speed\n* `pressure`: Atmospheric pressure at mean sea level\n* `humidity`: Relative humidity\n* `wave_height`: Wave height\n* `wave_period`: Wave period\n* `sea_temperature`: Sea temperature (available only for +-24 hours)\n* `air_quality`: Air quality index\n* `ozone_surface`: Ozone at surface level\n* `ozone_total`: Total column ozone\n* `no2`: Nitrogen dioxide at surface level\n* `pm2.5`: Particulate matter d < 2.5 µm (PM2.5)\n',
            in: 'query',
            name: 'variable',
            required: true,
            schema: {
              description:
                'Name of the variable for your map. Available values are:\n\n* `temperature`: Temperature 2 metres above ground\n* `feels_like_temperature`: Feels like temperature\n* `clouds`: Percentage of sky covered by clouds\n* `precipitation`: Total precipitation amount accumulated since last hour\n* `wind_speed`: Wind speed 10 metres above the ground\n* `wind_gust`: Wind gust speed\n* `pressure`: Atmospheric pressure at mean sea level\n* `humidity`: Relative humidity\n* `wave_height`: Wave height\n* `wave_period`: Wave period\n* `sea_temperature`: Sea temperature (available only for +-24 hours)\n* `air_quality`: Air quality index\n* `ozone_surface`: Ozone at surface level\n* `ozone_total`: Total column ozone\n* `no2`: Nitrogen dioxide at surface level\n* `pm2.5`: Particulate matter d < 2.5 µm (PM2.5)\n',
              title: 'Variable',
              type: 'string',
            },
          },
          description:
            'Name of the variable for your map. Available values are:\n\n* `temperature`: Temperature 2 metres above ground\n* `feels_like_temperature`: Feels like temperature\n* `clouds`: Percentage of sky covered by clouds\n* `precipitation`: Total precipitation amount accumulated since last hour\n* `wind_speed`: Wind speed 10 metres above the ground\n* `wind_gust`: Wind gust speed\n* `pressure`: Atmospheric pressure at mean sea level\n* `humidity`: Relative humidity\n* `wave_height`: Wave height\n* `wave_period`: Wave period\n* `sea_temperature`: Sea temperature (available only for +-24 hours)\n* `air_quality`: Air quality index\n* `ozone_surface`: Ozone at surface level\n* `ozone_total`: Total column ozone\n* `no2`: Nitrogen dioxide at surface level\n* `pm2.5`: Particulate matter d < 2.5 µm (PM2.5)\n',
          title: 'Variable',
        }),
      datetime: z
        .string()
        .openapi({
          param: {
            description:
              'There are two ways to specify date and time for your map:\n\n1. Datetime in `YYYY-MM-DDTHH:MM` format and `UTC` timezone, e.g. `2021-08-24T12:00`\n2. Offset from current time in `[+-]<minutes|hours|days>` format, e.g. `+10minutes`, `-2hours` or `+1days`\n',
            in: 'query',
            name: 'datetime',
            required: true,
            schema: {
              description:
                'There are two ways to specify date and time for your map:\n\n1. Datetime in `YYYY-MM-DDTHH:MM` format and `UTC` timezone, e.g. `2021-08-24T12:00`\n2. Offset from current time in `[+-]<minutes|hours|days>` format, e.g. `+10minutes`, `-2hours` or `+1days`\n',
              title: 'Datetime',
              type: 'string',
            },
          },
          description:
            'There are two ways to specify date and time for your map:\n\n1. Datetime in `YYYY-MM-DDTHH:MM` format and `UTC` timezone, e.g. `2021-08-24T12:00`\n2. Offset from current time in `[+-]<minutes|hours|days>` format, e.g. `+10minutes`, `-2hours` or `+1days`\n',
          title: 'Datetime',
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
            in: 'query',
            name: 'key',
            required: false,
            schema: {
              description:
                'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
              title: 'Key',
              type: 'string',
            },
          },
          description:
            'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
          title: 'Key',
        }),
    }),
  },
  responses: {
    200: { description: 'Successful Response', content: { 'image/png': { schema: z.string() } } },
    400: {
      description: 'Error in passed parameter.',
      content: { 'image/png': { schema: GeneralRequestErrorSchema } },
    },
    402: {
      description: 'Maximum requests per day limit exceeded.',
      content: { 'image/png': { schema: GeneralRequestErrorSchema } },
    },
    403: {
      description: 'API key not not specified or invalid.',
      content: { 'image/png': { schema: GeneralRequestErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Maximum requests per minute limit exceeded.',
      content: { 'image/png': { schema: GeneralRequestErrorSchema } },
    },
  },
  security: [{ APIKeyHeader: [] }],
})

export const getNearestPlaceRoute = createRoute({
  method: 'get',
  path: '/nearest_place',
  tags: ['Location endpoints'],
  summary: 'Returns the nearest named location for a given GPS coordinates.',
  description:
    '## Search for nearest place by coordinates\n\nYou can use this endpoint to find the nearest place from given coordinates.\n\n*Note: If you specify coordinates of a secluded place (e.g. middle of the ocean), the nearest point can be very far from the coordinates.*\n',
  operationId: 'nearest_place_nearest_place_get',
  request: {
    query: z.object({
      lat: z
        .string()
        .openapi({
          param: {
            description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
            in: 'query',
            name: 'lat',
            required: true,
            schema: {
              description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
              title: 'Lat',
              type: 'string',
            },
          },
          description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
          title: 'Lat',
        }),
      lon: z
        .string()
        .openapi({
          param: {
            description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
            in: 'query',
            name: 'lon',
            required: true,
            schema: {
              description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
              title: 'Lon',
              type: 'string',
            },
          },
          description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
          title: 'Lon',
        }),
      language: LanguageSchema.default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
            in: 'query',
            name: 'language',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Language' }],
              default: 'en',
              description:
                'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
            },
          },
          description:
            'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
            in: 'query',
            name: 'key',
            required: false,
            schema: {
              description:
                'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
              title: 'Key',
              type: 'string',
            },
          },
          description:
            'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
          title: 'Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: FindPlacesModelSchema } },
    },
    400: {
      description: 'Error in passed parameter.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    402: {
      description: 'Maximum requests per day limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    403: {
      description: 'API key not not specified or invalid.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Maximum requests per minute limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
  },
  security: [{ APIKeyHeader: [] }],
})

export const getPointRoute = createRoute({
  method: 'get',
  path: '/point',
  tags: ['Point weather'],
  summary: 'Returns weather data for a single point (geographic name or GPS)',
  description:
    '## Current weather and forecast for single location\n\n### Location specification\nThe location of the weather data is the only parameter that is required and must be specified. There are two ways to do this:\n1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.\n2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).\n\n*Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive forecasts for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*\n\n### Sections\nThe endpoint can return multiple sections of data. To obtain the best performance, we advise only requesting the sections you actually need. The available sections are as follows:\n\n* Current weather situation\n* Hourly forecast (for 24/48/96/168 hours, depending on the tier)\n* Daily forecast (for 7/10/30 days, depending on the tier)\n* Minutely precipitation forecast (for 60 minutes in the following hour, only for higher tiers)\n* Weather alerts (only for higher tiers)\n\nBy default, only the current and hourly sections are returned. The division into daily parts (morning, afternoon and evening) is only available for the first 7 days of the forecast. For details regarding available parameters, see the parameter description below.\n\n### Notes\n* **For a detailed description of variables (e.g. icons), please consult ⚠️ <a href="https://www.meteosource.com/documentation#description" target="_blank">description of variables</a> ⚠️ in Documentation or `Schema` of the response (link next to Example value in the Responses section below).**\n* Variables can be instantaneous, averaged, or accumulated over certain time. For example, `precipitation` forecast provides the precipitation accumulated until the next hour (data with timestamp as `12:00:00` is rain accumulated from `12:00:00` to `13:00:00`).\n* Do **not** make any assumptions about the number and ordering of the variables. New variables and sections may be introduced in the future. Always check the data are present before you try to use them.\n* The response contains an `Expires` header, which defines the point at which the API response will not change for the same request. We highly recommend using this to avoid unnecessary requests and **increase the performance of your app**.\n* Meteosource API supports HTTP compression. To enable it, simply add an `Accept-Encoding: gzip` header to your request.\n* When daylight saving time starts, one hourly record will be missing (typically `2:00:00 AM`). When daylight saving time ends, the hourly forecast will contain two records with duplicate times (typically `2:00:00 AM`).\n* The detailed description of weather alerts is only available in English. The alert category is translated into selected language.\n',
  operationId: 'point_point_get',
  request: {
    query: z.object({
      place_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).',
            in: 'query',
            name: 'place_id',
            required: false,
            schema: {
              description:
                'Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).',
              title: 'Place Id',
              type: 'string',
            },
          },
          description:
            'Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).',
          title: 'Place Id',
        }),
      lat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
            in: 'query',
            name: 'lat',
            required: false,
            schema: {
              description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
              title: 'Lat',
              type: 'string',
            },
          },
          description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
          title: 'Lat',
        }),
      lon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
            in: 'query',
            name: 'lon',
            required: false,
            schema: {
              description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
              title: 'Lon',
              type: 'string',
            },
          },
          description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
          title: 'Lon',
        }),
      sections: z
        .string()
        .default('current,hourly')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sections to be included in the response. You can specify more section by separating the values with a comma. The available values are:\n\n* ``current``: Current weather situation\n* ``daily``: Forecasts for each whole day, without the daily parts\n* ``daily-parts``: Forecasts for each whole day, morning, afternoon and evening\n    * Important: forecast for the morning, afternoon and evening is available only for the first\n      7 days in the forecast\n* ``hourly``: Forecasts with hourly resolution\n* ``minutely``: Precipitation forecast with 1 minute resolution\n* ``alerts``: The weather alerts\n* ``all``: All sections\n',
            in: 'query',
            name: 'sections',
            required: false,
            schema: {
              default: 'current,hourly',
              description:
                'Sections to be included in the response. You can specify more section by separating the values with a comma. The available values are:\n\n* ``current``: Current weather situation\n* ``daily``: Forecasts for each whole day, without the daily parts\n* ``daily-parts``: Forecasts for each whole day, morning, afternoon and evening\n    * Important: forecast for the morning, afternoon and evening is available only for the first\n      7 days in the forecast\n* ``hourly``: Forecasts with hourly resolution\n* ``minutely``: Precipitation forecast with 1 minute resolution\n* ``alerts``: The weather alerts\n* ``all``: All sections\n',
              title: 'Sections',
              type: 'string',
            },
          },
          description:
            'Sections to be included in the response. You can specify more section by separating the values with a comma. The available values are:\n\n* ``current``: Current weather situation\n* ``daily``: Forecasts for each whole day, without the daily parts\n* ``daily-parts``: Forecasts for each whole day, morning, afternoon and evening\n    * Important: forecast for the morning, afternoon and evening is available only for the first\n      7 days in the forecast\n* ``hourly``: Forecasts with hourly resolution\n* ``minutely``: Precipitation forecast with 1 minute resolution\n* ``alerts``: The weather alerts\n* ``all``: All sections\n',
          title: 'Sections',
        }),
      timezone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.\nThe format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.\nAlternatively you may use the value ``auto`` in which case the local timezone of the location is used.\nThe full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).\n',
            in: 'query',
            name: 'timezone',
            required: false,
            schema: {
              description:
                'Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.\nThe format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.\nAlternatively you may use the value ``auto`` in which case the local timezone of the location is used.\nThe full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).\n',
              title: 'Timezone',
              type: 'string',
            },
          },
          description:
            'Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.\nThe format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.\nAlternatively you may use the value ``auto`` in which case the local timezone of the location is used.\nThe full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).\n',
          title: 'Timezone',
        }),
      language: LanguageSchema.default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
            in: 'query',
            name: 'language',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Language' }],
              default: 'en',
              description:
                'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
            },
          },
          description:
            'The language of text summaries and place names (variable names are never translated). Available languages are:\n\n   * ``en``: English\n   * ``es``: Spanish\n   * ``fr``: French\n   * ``de``: German\n   * ``pl``: Polish\n   * ``pt``: Portuguese\n   * ``cs``: Czech\n',
        }),
      units: UnitsSchema.default('auto')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unit system to be used. The available values are:\n\n* `auto`: Select the system automatically, based on the forecast location.\n* `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).\n* `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).\n* `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.\n* `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.\n',
            in: 'query',
            name: 'units',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Units' }],
              default: 'auto',
              description:
                'Unit system to be used. The available values are:\n\n* `auto`: Select the system automatically, based on the forecast location.\n* `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).\n* `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).\n* `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.\n* `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.\n',
            },
          },
          description:
            'Unit system to be used. The available values are:\n\n* `auto`: Select the system automatically, based on the forecast location.\n* `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).\n* `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).\n* `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.\n* `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.\n',
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
            in: 'query',
            name: 'key',
            required: false,
            schema: {
              description:
                'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
              title: 'Key',
              type: 'string',
            },
          },
          description:
            'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
          title: 'Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PointPointDataSchema } },
    },
    400: {
      description: 'Error in passed parameter.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    402: {
      description: 'Maximum requests per day limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    403: {
      description: 'API key not not specified or invalid.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Maximum requests per minute limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
  },
  security: [{ APIKeyHeader: [] }],
})

export const getTimeMachineRoute = createRoute({
  method: 'get',
  path: '/time_machine',
  tags: ['Time machine - historical weather'],
  summary: 'Returns weather data for a single location and given day in the past',
  description:
    '## Actual weather data for a single location and day in the past\n\nThe output contains actual weather data for each day up to 8 years in the past, and long-term statistics of selected weather variables aggregated over 40 years.\n\n### Location specification\nThe location of the weather data must be specified. There are two ways to do this:\n1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.\n2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).\n\n*Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive data for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*\n',
  operationId: 'time_machine_time_machine_get',
  request: {
    query: z.object({
      place_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).',
            in: 'query',
            name: 'place_id',
            required: false,
            schema: {
              description:
                'Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).',
              title: 'Place Id',
              type: 'string',
            },
          },
          description:
            'Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).',
          title: 'Place Id',
        }),
      lat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
            in: 'query',
            name: 'lat',
            required: false,
            schema: {
              description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
              title: 'Lat',
              type: 'string',
            },
          },
          description: 'Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4',
          title: 'Lat',
        }),
      lon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
            in: 'query',
            name: 'lon',
            required: false,
            schema: {
              description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
              title: 'Lon',
              type: 'string',
            },
          },
          description: 'Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4',
          title: 'Lon',
        }),
      date: z.iso
        .date()
        .openapi({
          param: {
            description:
              'The UTC day of the data in the past. Specify in `YYYY-MM-DD` format, e.g. `2021-08-24`.\n',
            in: 'query',
            name: 'date',
            required: true,
            schema: {
              description:
                'The UTC day of the data in the past. Specify in `YYYY-MM-DD` format, e.g. `2021-08-24`.\n',
              format: 'date',
              title: 'Date',
              type: 'string',
            },
          },
          description:
            'The UTC day of the data in the past. Specify in `YYYY-MM-DD` format, e.g. `2021-08-24`.\n',
          title: 'Date',
        }),
      timezone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timezone to be used for the date fields. If not specified, local timezone of the location will be used.\nThe format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.\nAlternatively you may use the value ``auto`` in which case the local timezone of the location is used.\nThe full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).\n',
            in: 'query',
            name: 'timezone',
            required: false,
            schema: {
              description:
                'Timezone to be used for the date fields. If not specified, local timezone of the location will be used.\nThe format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.\nAlternatively you may use the value ``auto`` in which case the local timezone of the location is used.\nThe full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).\n',
              title: 'Timezone',
              type: 'string',
            },
          },
          description:
            'Timezone to be used for the date fields. If not specified, local timezone of the location will be used.\nThe format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.\nAlternatively you may use the value ``auto`` in which case the local timezone of the location is used.\nThe full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).\n',
          title: 'Timezone',
        }),
      units: UnitsSchema.default('auto')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unit system to be used. The available values are:\n\n* `auto`: Select the system automatically, based on the forecast location.\n* `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).\n* `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).\n* `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.\n* `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.\n',
            in: 'query',
            name: 'units',
            required: false,
            schema: {
              allOf: [{ $ref: '#/components/schemas/Units' }],
              default: 'auto',
              description:
                'Unit system to be used. The available values are:\n\n* `auto`: Select the system automatically, based on the forecast location.\n* `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).\n* `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).\n* `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.\n* `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.\n',
            },
          },
          description:
            'Unit system to be used. The available values are:\n\n* `auto`: Select the system automatically, based on the forecast location.\n* `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).\n* `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).\n* `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.\n* `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.\n',
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
            in: 'query',
            name: 'key',
            required: false,
            schema: {
              description:
                'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
              title: 'Key',
              type: 'string',
            },
          },
          description:
            'Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.',
          title: 'Key',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TimeMachineTimeMachineSchema } },
    },
    400: {
      description: 'Error in passed parameter.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    402: {
      description: 'Maximum requests per day limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    403: {
      description: 'API key not not specified or invalid.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
    429: {
      description: 'Maximum requests per minute limit exceeded.',
      content: { 'application/json': { schema: GeneralRequestErrorSchema } },
    },
  },
  security: [{ APIKeyHeader: [] }],
})
