type AirQualityPointHourlyData = {
  aerosol_550?: number | undefined
  air_quality?: number | undefined
  co_surface?: number | undefined
  date?: string | undefined
  dust_550nm?: number | undefined
  dust_mixing_ratio_05?: number | undefined
  no2_surface?: number | undefined
  no_surface?: number | undefined
  ozone_surface?: number | undefined
  ozone_total?: number | undefined
  pm10?: number | undefined
  pm25?: number | undefined
  so2_surface?: number | undefined
}
type AirQualityPointData = {
  data: AirQualityPointHourlyData[]
  elevation: number
  lat: string
  lon: string
  timezone?: string | undefined
}
type GeneralRequestError = { detail: string }
type ValidationError = { loc: (string | number)[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type FindPlacesModel = {
  adm_area1?: string | undefined
  adm_area2?: string | undefined
  country?: string | undefined
  lat?: string | undefined
  lon?: string | undefined
  name?: string | undefined
  place_id?: string | undefined
  timezone?: string | undefined
  type?: string | undefined
}
type PointPointAlerts = { data?: string | undefined }
type PointPointCurrentPrecipitationData = { total?: number | undefined; type?: File | undefined }
type PointPointCurrentWindData = {
  angle?: number | undefined
  dir?: File | undefined
  gusts?: number | undefined
  speed?: number | undefined
}
type PointPointCurrentData = {
  cloud_cover?: number | undefined
  dew_point?: number | undefined
  feels_like?: number | undefined
  humidity?: number | undefined
  icon?: string | undefined
  icon_num?: number | undefined
  irradiance?: number | undefined
  ozone?: number | undefined
  precipitation: PointPointCurrentPrecipitationData
  pressure?: number | undefined
  summary?: string | undefined
  temperature?: number | undefined
  uv_index?: number | undefined
  visibility?: number | undefined
  wind: PointPointCurrentWindData
  wind_chill?: number | undefined
}
type PointPointDailyAfternoonCloudCoverData = {
  high?: number | undefined
  low?: number | undefined
  middle?: number | undefined
  total?: number | undefined
}
type PointPointDailyAfternoonPrecipitationData = {
  total?: number | undefined
  type?: File | undefined
}
type PointPointDailyAfternoonProbData = {
  freeze?: number | undefined
  precipitation?: number | undefined
  storm?: number | undefined
}
type PointPointDailyAfternoonWindData = {
  angle?: number | undefined
  dir?: File | undefined
  gusts?: number | undefined
  speed?: number | undefined
}
type PointPointDailyAfternoonData = {
  cloud_cover: PointPointDailyAfternoonCloudCoverData
  dew_point?: number | undefined
  feels_like?: number | undefined
  humidity?: number | undefined
  icon?: number | undefined
  ozone?: number | undefined
  precipitation: PointPointDailyAfternoonPrecipitationData
  pressure?: number | undefined
  probability: PointPointDailyAfternoonProbData
  snow_depth?: number | undefined
  soil_temperature?: number | undefined
  surface_temperature?: number | undefined
  temperature?: number | undefined
  visibility?: number | undefined
  weather?: string | undefined
  wind: PointPointDailyAfternoonWindData
  wind_chill?: number | undefined
}
type PointPointDailyAllDayCloudCoverData = {
  high?: number | undefined
  low?: number | undefined
  middle?: number | undefined
  total?: number | undefined
}
type PointPointDailyAllDayPrecipitationData = {
  total?: number | undefined
  type?: File | undefined
}
type PointPointDailyAllDayProbData = {
  freeze?: number | undefined
  precipitation?: number | undefined
  storm?: number | undefined
}
type PointPointDailyAllDayWindData = {
  angle?: number | undefined
  dir?: File | undefined
  gusts?: number | undefined
  speed?: number | undefined
}
type PointPointDailyAllDayData = {
  cloud_cover: PointPointDailyAllDayCloudCoverData
  dew_point?: number | undefined
  dew_point_max?: number | undefined
  dew_point_min?: number | undefined
  feels_like?: number | undefined
  feels_like_max?: number | undefined
  feels_like_min?: number | undefined
  humidity?: number | undefined
  icon?: number | undefined
  ozone?: number | undefined
  precipitation: PointPointDailyAllDayPrecipitationData
  pressure?: number | undefined
  probability: PointPointDailyAllDayProbData
  snow_depth?: number | undefined
  soil_temperature?: number | undefined
  soil_temperature_max?: number | undefined
  soil_temperature_min?: number | undefined
  surface_temperature?: number | undefined
  surface_temperature_max?: number | undefined
  surface_temperature_min?: number | undefined
  temperature?: number | undefined
  temperature_max?: number | undefined
  temperature_min?: number | undefined
  visibility?: number | undefined
  weather?: string | undefined
  wind: PointPointDailyAllDayWindData
  wind_chill?: number | undefined
  wind_chill_max?: number | undefined
  wind_chill_min?: number | undefined
}
type PointPointDailyMoonData = {
  always_down?: boolean | undefined
  always_up?: boolean | undefined
  phase?: File | undefined
  rise?: string | undefined
  set?: string | undefined
}
type PointPointDailySunData = {
  always_down?: boolean | undefined
  always_up?: boolean | undefined
  rise?: string | undefined
  set?: string | undefined
}
type PointPointDailyAstroData = { moon: PointPointDailyMoonData; sun: PointPointDailySunData }
type PointPointDailyEveningCloudCoverData = {
  high?: number | undefined
  low?: number | undefined
  middle?: number | undefined
  total?: number | undefined
}
type PointPointDailyEveningPrecipitationData = {
  total?: number | undefined
  type?: File | undefined
}
type PointPointDailyEveningProbData = {
  freeze?: number | undefined
  precipitation?: number | undefined
  storm?: number | undefined
}
type PointPointDailyEveningWindData = {
  angle?: number | undefined
  dir?: File | undefined
  gusts?: number | undefined
  speed?: number | undefined
}
type PointPointDailyEveningData = {
  cloud_cover: PointPointDailyEveningCloudCoverData
  dew_point?: number | undefined
  feels_like?: number | undefined
  humidity?: number | undefined
  icon?: number | undefined
  ozone?: number | undefined
  precipitation: PointPointDailyEveningPrecipitationData
  pressure?: number | undefined
  probability: PointPointDailyEveningProbData
  snow_depth?: number | undefined
  soil_temperature?: number | undefined
  surface_temperature?: number | undefined
  temperature?: number | undefined
  visibility?: number | undefined
  weather?: string | undefined
  wind: PointPointDailyEveningWindData
  wind_chill?: number | undefined
}
type PointPointDailyMorningCloudCoverData = {
  high?: number | undefined
  low?: number | undefined
  middle?: number | undefined
  total?: number | undefined
}
type PointPointDailyMorningPrecipitationData = {
  total?: number | undefined
  type?: File | undefined
}
type PointPointDailyMorningProbData = {
  freeze?: number | undefined
  precipitation?: number | undefined
  storm?: number | undefined
}
type PointPointDailyMorningWindData = {
  angle?: number | undefined
  dir?: File | undefined
  gusts?: number | undefined
  speed?: number | undefined
}
type PointPointDailyMorningData = {
  cloud_cover: PointPointDailyMorningCloudCoverData
  dew_point?: number | undefined
  feels_like?: number | undefined
  humidity?: number | undefined
  icon?: number | undefined
  ozone?: number | undefined
  precipitation: PointPointDailyMorningPrecipitationData
  pressure?: number | undefined
  probability: PointPointDailyMorningProbData
  snow_depth?: number | undefined
  soil_temperature?: number | undefined
  surface_temperature?: number | undefined
  temperature?: number | undefined
  visibility?: number | undefined
  weather?: string | undefined
  wind: PointPointDailyMorningWindData
  wind_chill?: number | undefined
}
type PointPointDailyStatsPrecipitationData = {
  avg?: number | undefined
  probability?: number | undefined
}
type PointPointDailyStatsTemperatureData = {
  avg?: number | undefined
  avg_max?: number | undefined
  avg_min?: number | undefined
  record_max?: number | undefined
  record_min?: number | undefined
}
type PointPointDailyStatsWindData = {
  avg_angle?: number | undefined
  avg_dir?: File | undefined
  avg_speed?: number | undefined
  max_gust?: number | undefined
  max_speed?: number | undefined
}
type PointPointDailyStatsData = {
  precipitation: PointPointDailyStatsPrecipitationData
  temperature: PointPointDailyStatsTemperatureData
  wind: PointPointDailyStatsWindData
}
type PointPointDailyData = {
  afternoon?: PointPointDailyAfternoonData | undefined
  all_day: PointPointDailyAllDayData
  astro: PointPointDailyAstroData
  day?: File | undefined
  evening?: PointPointDailyEveningData | undefined
  icon?: number | undefined
  morning?: PointPointDailyMorningData | undefined
  predictability?: number | undefined
  statistics: PointPointDailyStatsData
  summary?: string | undefined
  weather?: string | undefined
}
type PointPointDaily = { data: PointPointDailyData[] }
type PointPointHourlyCloudCoverData = {
  high?: number | undefined
  low?: number | undefined
  middle?: number | undefined
  total?: number | undefined
}
type PointPointHourlyPrecipitationData = {
  convective?: number | undefined
  rainspot?: File | undefined
  total?: number | undefined
  type?: File | undefined
}
type PointPointHourlyProbData = {
  freeze?: number | undefined
  precipitation?: number | undefined
  storm?: number | undefined
}
type PointPointHourlyWindData = {
  angle?: number | undefined
  dir?: File | undefined
  gusts?: number | undefined
  speed?: number | undefined
}
type PointPointHourlyData = {
  cape?: number | undefined
  cloud_cover: PointPointHourlyCloudCoverData
  date?: string | undefined
  dew_point?: number | undefined
  evaporation?: number | undefined
  feels_like?: number | undefined
  humidity?: number | undefined
  icon?: number | undefined
  irradiance?: number | undefined
  lftx?: number | undefined
  ozone?: number | undefined
  precipitation: PointPointHourlyPrecipitationData
  pressure?: number | undefined
  probability: PointPointHourlyProbData
  snow_depth?: number | undefined
  soil_temperature?: number | undefined
  summary?: string | undefined
  sunshine_duration?: number | undefined
  surface_temperature?: number | undefined
  temperature?: number | undefined
  uv_index?: number | undefined
  visibility?: number | undefined
  weather?: string | undefined
  wind: PointPointHourlyWindData
  wind_chill?: number | undefined
}
type PointPointHourly = { data: PointPointHourlyData[] }
type PointPointMinutelyPrecipitationData = {
  date?: string | undefined
  precipitation?: number | undefined
}
type PointPointMinutely = {
  data: PointPointMinutelyPrecipitationData[]
  summary?: string | undefined
}
type PointPointData = {
  alerts: PointPointAlerts
  current?: PointPointCurrentData | undefined
  daily?: PointPointDaily | undefined
  elevation: number
  hourly?: PointPointHourly | undefined
  lat: string
  lon: string
  minutely?: PointPointMinutely | undefined
  timezone?: string | undefined
  units: string
}
type TimeMachineTimeMachineCloudCoverData = {
  high?: number | undefined
  low?: number | undefined
  middle?: number | undefined
  total?: number | undefined
}
type TimeMachineTimeMachinePrecipitationData = {
  total?: number | undefined
  type?: File | undefined
}
type TimeMachineTimeMachineWindData = {
  angle?: number | undefined
  dir?: File | undefined
  gusts?: number | undefined
  speed?: number | undefined
}
type TimeMachineTimeMachineHourlyData = {
  cape?: number | undefined
  cloud_cover: TimeMachineTimeMachineCloudCoverData
  date?: string | undefined
  dew_point?: number | undefined
  evaporation?: number | undefined
  feels_like?: number | undefined
  humidity?: number | undefined
  icon?: number | undefined
  irradiance?: number | undefined
  ozone?: number | undefined
  precipitation: TimeMachineTimeMachinePrecipitationData
  pressure?: number | undefined
  soil_temperature?: number | undefined
  surface_temperature?: number | undefined
  temperature?: number | undefined
  weather?: string | undefined
  wind: TimeMachineTimeMachineWindData
  wind_chill?: number | undefined
}
type TimeMachinePointDailyStatsPrecipitationData = {
  avg?: number | undefined
  probability?: number | undefined
}
type TimeMachinePointDailyStatsTemperatureData = {
  avg?: number | undefined
  avg_max?: number | undefined
  avg_min?: number | undefined
  record_max?: number | undefined
  record_min?: number | undefined
}
type TimeMachinePointDailyStatsWindData = {
  avg_angle?: number | undefined
  avg_dir?: File | undefined
  avg_speed?: number | undefined
  max_gust?: number | undefined
  max_speed?: number | undefined
}
type TimeMachinePointDailyStatsData = {
  precipitation: TimeMachinePointDailyStatsPrecipitationData
  temperature: TimeMachinePointDailyStatsTemperatureData
  wind: TimeMachinePointDailyStatsWindData
}
type TimeMachineTimeMachine = {
  data: TimeMachineTimeMachineHourlyData[]
  elevation: number
  lat: string
  lon: string
  statistics: TimeMachinePointDailyStatsData
  timezone?: string | undefined
  units: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/air_quality': {
      $get:
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                timezone?: string | undefined
                key?: string | undefined
              }
            }
            output: AirQualityPointData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                timezone?: string | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                timezone?: string | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                timezone?: string | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                timezone?: string | undefined
                key?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                timezone?: string | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/find_places': {
      $get:
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: FindPlacesModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/find_places_prefix': {
      $get:
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: FindPlacesModel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { text: string; language?: {} | undefined; key?: string | undefined } }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/map': {
      $get:
        | {
            input: {
              query: {
                tile_x?: number | undefined
                tile_y?: number | undefined
                tile_zoom?: number | undefined
                min_lat?: string | undefined
                min_lon?: string | undefined
                max_lat?: string | undefined
                max_lon?: string | undefined
                variable: string
                datetime: string
                key?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                tile_x?: number | undefined
                tile_y?: number | undefined
                tile_zoom?: number | undefined
                min_lat?: string | undefined
                min_lon?: string | undefined
                max_lat?: string | undefined
                max_lon?: string | undefined
                variable: string
                datetime: string
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                tile_x?: number | undefined
                tile_y?: number | undefined
                tile_zoom?: number | undefined
                min_lat?: string | undefined
                min_lon?: string | undefined
                max_lat?: string | undefined
                max_lon?: string | undefined
                variable: string
                datetime: string
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              query: {
                tile_x?: number | undefined
                tile_y?: number | undefined
                tile_zoom?: number | undefined
                min_lat?: string | undefined
                min_lon?: string | undefined
                max_lat?: string | undefined
                max_lon?: string | undefined
                variable: string
                datetime: string
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                tile_x?: number | undefined
                tile_y?: number | undefined
                tile_zoom?: number | undefined
                min_lat?: string | undefined
                min_lon?: string | undefined
                max_lat?: string | undefined
                max_lon?: string | undefined
                variable: string
                datetime: string
                key?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                tile_x?: number | undefined
                tile_y?: number | undefined
                tile_zoom?: number | undefined
                min_lat?: string | undefined
                min_lon?: string | undefined
                max_lat?: string | undefined
                max_lon?: string | undefined
                variable: string
                datetime: string
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'text'
            status: 429
          }
    }
  } & {
    '/nearest_place': {
      $get:
        | {
            input: {
              query: {
                lat: string
                lon: string
                language?: {} | undefined
                key?: string | undefined
              }
            }
            output: FindPlacesModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                lat: string
                lon: string
                language?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                lat: string
                lon: string
                language?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                lat: string
                lon: string
                language?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                lat: string
                lon: string
                language?: {} | undefined
                key?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                lat: string
                lon: string
                language?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/point': {
      $get:
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                sections?: string | undefined
                timezone?: string | undefined
                language?: {} | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: PointPointData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                sections?: string | undefined
                timezone?: string | undefined
                language?: {} | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                sections?: string | undefined
                timezone?: string | undefined
                language?: {} | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                sections?: string | undefined
                timezone?: string | undefined
                language?: {} | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                sections?: string | undefined
                timezone?: string | undefined
                language?: {} | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                sections?: string | undefined
                timezone?: string | undefined
                language?: {} | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/time_machine': {
      $get:
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                date: string
                timezone?: string | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: TimeMachineTimeMachine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                date: string
                timezone?: string | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                date: string
                timezone?: string | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                date: string
                timezone?: string | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                date: string
                timezone?: string | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                place_id?: string | undefined
                lat?: string | undefined
                lon?: string | undefined
                date: string
                timezone?: string | undefined
                units?: {} | undefined
                key?: string | undefined
              }
            }
            output: GeneralRequestError
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
