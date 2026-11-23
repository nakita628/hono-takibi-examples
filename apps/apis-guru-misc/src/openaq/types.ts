type CitiesRow = {
  city: string
  count: number
  country?: string | undefined
  firstUpdated: string
  lastUpdated: string
  locations: number
  parameters: string[]
}
type OpenAQCitiesResult = {
  meta?:
    | {
        found?: number | undefined
        license?: string | undefined
        limit?: number | undefined
        name?: string | undefined
        page?: number | undefined
        website?: string | undefined
      }
    | undefined
  results: CitiesRow[]
}
type ValidationError = { loc: string[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type CountriesRow = {
  cities: number
  code: string
  count: number
  firstUpdated: string
  lastUpdated: string
  locations: number
  name: string
  parameters: string[]
  sources: number
}
type OpenAQCountriesResult = {
  meta?:
    | {
        found?: number | undefined
        license?: string | undefined
        limit?: number | undefined
        name?: string | undefined
        page?: number | undefined
        website?: string | undefined
      }
    | undefined
  results: CountriesRow[]
}
type OpenAQResult = {
  meta?:
    | {
        found?: number | undefined
        license?: string | undefined
        limit?: number | undefined
        name?: string | undefined
        page?: number | undefined
        website?: string | undefined
      }
    | undefined
  results?: { [x: string]: unknown }[] | undefined
}
type EntityTypes = 'government' | 'community' | 'research'
type SensorTypes = 'reference grade' | 'low-cost sensor'
type ParametersRow = {
  description: string
  displayName: string
  id: number
  isCore?: boolean | undefined
  maxColorValue?: number | undefined
  name: string
  preferredUnit: string
}
type OpenAQParametersResult = {
  meta?:
    | {
        found?: number | undefined
        license?: string | undefined
        limit?: number | undefined
        name?: string | undefined
        page?: number | undefined
        website?: string | undefined
      }
    | undefined
  results: ParametersRow[]
}
type Spatial = 'country' | 'location' | 'project' | 'total'
type Temporal = 'day' | 'month' | 'year' | 'moy' | 'dow' | 'hour' | 'hod'
type TileJSON = {
  attribution?: string | undefined
  bounds?: number[] | undefined
  data?: string[] | undefined
  description?: string | undefined
  grids?: string[] | undefined
  legend?: string | undefined
  maxzoom?: number | undefined
  minzoom?: number | undefined
  name?: string | undefined
  scheme?: string | undefined
  template?: string | undefined
  tilejson?: string | undefined
  tiles: string[]
  version?: string | undefined
}
type ProjectParameterDetails = {
  average: number
  count: number
  displayName?: string | undefined
  firstUpdated: string
  lastUpdated: string
  lastValue: number
  locations: number
  parameter: string
  parameterId: number
  unit: string
}
type ProjectsRow = {
  bbox?: number[] | undefined
  countries?: string[] | undefined
  entity?: string | undefined
  firstUpdated: string
  id: number
  isAnalysis?: boolean | undefined
  isMobile?: boolean | undefined
  lastUpdated: string
  locationIds: number[]
  locations: number
  measurements: number
  name: string
  parameters: ProjectParameterDetails[]
  sensorType?: string | undefined
  sources?: { [x: string]: unknown }[] | undefined
  subtitle: string
}
type OpenAQProjectsResult = {
  meta?:
    | {
        found?: number | undefined
        license?: string | undefined
        limit?: number | undefined
        name?: string | undefined
        page?: number | undefined
        website?: string | undefined
      }
    | undefined
  results: ProjectsRow[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/favicon.ico': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ping': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/cities': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                order_by?: {} | undefined
                entity?: string | undefined
              }
            }
            output: OpenAQCitiesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                order_by?: {} | undefined
                entity?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/countries': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                order_by?: {} | undefined
              }
            }
            output: OpenAQCountriesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                order_by?: {} | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/countries/:country_id': {
      $get:
        | {
            input: { param: { country_id: string } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country?: string[] | undefined
                order_by?: {} | undefined
              }
            }
            output: OpenAQCountriesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country_id: string } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country?: string[] | undefined
                order_by?: {} | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/latest': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/latest/:location_id': {
      $get:
        | {
            input: { param: { location_id: number } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { location_id: number } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/locations': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/locations/:location_id': {
      $get:
        | {
            input: { param: { location_id: number } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { location_id: number } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/measurements': {
      $get:
        | {
            input: {
              query: {
                format?: string | undefined
                date_from?: string | string | undefined
                date_to?: string | string | undefined
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                project?: number | undefined
                entity?: EntityTypes | undefined
                sensorType?: SensorTypes | undefined
                value_from?: number | undefined
                value_to?: number | undefined
                include_fields?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: string | undefined
                date_from?: string | string | undefined
                date_to?: string | string | undefined
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                project?: number | undefined
                entity?: EntityTypes | undefined
                sensorType?: SensorTypes | undefined
                value_from?: number | undefined
                value_to?: number | undefined
                include_fields?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/parameters': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                sourceName?: string[] | undefined
                sourceId?: number[] | undefined
                sourceSlug?: string[] | undefined
                order_by?: string | string | string | undefined
              }
            }
            output: OpenAQParametersResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                sourceName?: string[] | undefined
                sourceId?: number[] | undefined
                sourceSlug?: string[] | undefined
                order_by?: string | string | string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                name?: string | undefined
                order_by?: {} | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                name?: string | undefined
                order_by?: {} | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/averages': {
      $get:
        | {
            input: {
              query: {
                date_from?: string | string | undefined
                date_to?: string | string | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                project_id?: number | undefined
                project?: (number | string)[] | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                spatial: Spatial
                temporal: Temporal
                location?: string[] | undefined
                group?: boolean | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date_from?: string | string | undefined
                date_to?: string | string | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                project_id?: number | undefined
                project?: (number | string)[] | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                spatial: Spatial
                temporal: Temporal
                location?: string[] | undefined
                group?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/cities': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                order_by?: {} | undefined
                entity?: string | undefined
              }
            }
            output: OpenAQCitiesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                order_by?: {} | undefined
                entity?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/countries': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                order_by?: {} | undefined
              }
            }
            output: OpenAQCountriesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                order_by?: {} | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/countries/:country_id': {
      $get:
        | {
            input: { param: { country_id: string } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country?: string[] | undefined
                order_by?: {} | undefined
              }
            }
            output: OpenAQCountriesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country_id: string } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                country?: string[] | undefined
                order_by?: {} | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/latest': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/latest/:location_id': {
      $get:
        | {
            input: { param: { location_id: number } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { location_id: number } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/locations': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/locations/tiles/mobile-generalized/tiles.json': {
      $get: { input: {}; output: TileJSON; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/locations/tiles/mobile-generalized/:z/:x/:y.pbf': {
      $get:
        | {
            input: { param: { z: number; x: number; y: number } } & {
              query: {
                parameter?: number | string | undefined
                location?: number[] | undefined
                lastUpdatedFrom?: string | string | undefined
                lastUpdatedTo?: string | string | undefined
                isMobile?: boolean | undefined
                project?: number | undefined
                isAnalysis?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { z: number; x: number; y: number } } & {
              query: {
                parameter?: number | string | undefined
                location?: number[] | undefined
                lastUpdatedFrom?: string | string | undefined
                lastUpdatedTo?: string | string | undefined
                isMobile?: boolean | undefined
                project?: number | undefined
                isAnalysis?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/locations/tiles/mobile/tiles.json': {
      $get: { input: {}; output: TileJSON; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/locations/tiles/mobile/:z/:x/:y.pbf': {
      $get:
        | {
            input: { param: { z: number; x: number; y: number } } & {
              query: {
                dateFrom: string | string
                dateTo: string | string
                parameter?: number | string | undefined
                location?: number[] | undefined
                lastUpdatedFrom?: string | string | undefined
                lastUpdatedTo?: string | string | undefined
                isMobile?: boolean | undefined
                project?: number | undefined
                isAnalysis?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { z: number; x: number; y: number } } & {
              query: {
                dateFrom: string | string
                dateTo: string | string
                parameter?: number | string | undefined
                location?: number[] | undefined
                lastUpdatedFrom?: string | string | undefined
                lastUpdatedTo?: string | string | undefined
                isMobile?: boolean | undefined
                project?: number | undefined
                isAnalysis?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/locations/tiles/tiles.json': {
      $get: { input: {}; output: TileJSON; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/locations/tiles/viewer': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/v2/locations/tiles/:z/:x/:y.pbf': {
      $get:
        | {
            input: { param: { z: number; x: number; y: number } } & {
              query: {
                parameter?: number | string | undefined
                location?: number[] | undefined
                lastUpdatedFrom?: string | string | undefined
                lastUpdatedTo?: string | string | undefined
                isMobile?: boolean | undefined
                project?: number | undefined
                isAnalysis?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { z: number; x: number; y: number } } & {
              query: {
                parameter?: number | string | undefined
                location?: number[] | undefined
                lastUpdatedFrom?: string | string | undefined
                lastUpdatedTo?: string | string | undefined
                isMobile?: boolean | undefined
                project?: number | undefined
                isAnalysis?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/locations/:location_id': {
      $get:
        | {
            input: { param: { location_id: number } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { location_id: number } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                sourceName?: string[] | undefined
                entity?: {} | undefined
                sensorType?: {} | undefined
                modelName?: string[] | undefined
                manufacturerName?: string[] | undefined
                dumpRaw?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/manufacturers': {
      $get: { input: {}; output: OpenAQResult; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/measurements': {
      $get:
        | {
            input: {
              query: {
                format?: string | undefined
                date_from?: string | string | undefined
                date_to?: string | string | undefined
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                project?: number | undefined
                entity?: EntityTypes | undefined
                sensorType?: SensorTypes | undefined
                value_from?: number | undefined
                value_to?: number | undefined
                include_fields?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: string | undefined
                date_from?: string | string | undefined
                date_to?: string | string | undefined
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                has_geo?: boolean | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                coordinates?: string | undefined
                radius?: number | undefined
                country_id?: string | undefined
                country?: string[] | undefined
                city?: string[] | undefined
                location_id?: number | undefined
                location?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                project?: number | undefined
                entity?: EntityTypes | undefined
                sensorType?: SensorTypes | undefined
                value_from?: number | undefined
                value_to?: number | undefined
                include_fields?: string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/models': { $get: { input: {}; output: OpenAQResult; outputFormat: 'json'; status: 200 } }
  } & {
    '/v2/parameters': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                sourceName?: string[] | undefined
                sourceId?: number[] | undefined
                sourceSlug?: string[] | undefined
                order_by?: string | string | string | undefined
              }
            }
            output: OpenAQParametersResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                sourceName?: string[] | undefined
                sourceId?: number[] | undefined
                sourceSlug?: string[] | undefined
                order_by?: string | string | string | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/projects': {
      $get:
        | {
            input: {
              query: {
                country_id?: string | undefined
                country?: string[] | undefined
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                project_id?: number | undefined
                project?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                entity?: string | undefined
                sensorType?: string | undefined
                sourceName?: string[] | undefined
              }
            }
            output: OpenAQProjectsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                country_id?: string | undefined
                country?: string[] | undefined
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                project_id?: number | undefined
                project?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                entity?: string | undefined
                sensorType?: string | undefined
                sourceName?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/projects/:project_id': {
      $get:
        | {
            input: { param: { project_id: number } } & {
              query: {
                country_id?: string | undefined
                country?: string[] | undefined
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                project?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                entity?: string | undefined
                sensorType?: string | undefined
                sourceName?: string[] | undefined
              }
            }
            output: OpenAQProjectsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: number } } & {
              query: {
                country_id?: string | undefined
                country?: string[] | undefined
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                parameter_id?: number | undefined
                parameter?: (number | string)[] | undefined
                unit?: string[] | undefined
                project?: (number | string)[] | undefined
                order_by?: {} | undefined
                isMobile?: boolean | undefined
                isAnalysis?: boolean | undefined
                entity?: string | undefined
                sensorType?: string | undefined
                sourceName?: string[] | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/sources': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                sourceName?: string[] | undefined
                sourceId?: number[] | undefined
                sourceSlug?: string[] | undefined
                order_by?: {} | undefined
              }
            }
            output: OpenAQResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page?: number | undefined
                offset?: number | undefined
                sort?: {} | undefined
                sourceName?: string[] | undefined
                sourceId?: number[] | undefined
                sourceSlug?: string[] | undefined
                order_by?: {} | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/sources/readme/:slug': {
      $get:
        | {
            input: { param: { slug: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/summary': { $get: { input: {}; output: OpenAQResult; outputFormat: 'json'; status: 200 } }
  },
  '/'
>
export default routes
