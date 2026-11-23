type AerodromesByDistance = {
  distance: number | number
  latitude: number | number
  longitude: number | number
}
type AerodromeDistanceResponse = { found: { [x: string]: unknown } }
type ValidationError = { loc: (string | number)[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type AerodromesByPolygon = { poly: { [x: string]: unknown } }
type AerodromePolyResponse = { found: { [x: string]: unknown } }
type AerodromesByRoute = { route: { [x: string]: unknown } }
type AerodromeRouteResponse = { found: { [x: string]: unknown } }
type AirspaceByDistance = {
  asptypes: string[]
  distance: number | number
  latitude: number | number
  longitude: number | number
}
type AirspaceDistanceResponse = { found: { [x: string]: unknown }[] }
type AirspaceByPolygon = { asptypes: string[]; poly: { [x: string]: unknown } }
type AirspacePolyResponse = { found: { [x: string]: unknown }[] }
type AirspaceByRoute = { asptypes: string[]; route: { [x: string]: unknown } }
type AirspaceRouteResponse = { found: { [x: string]: unknown }[] }
type ObstaclesByDistance = {
  distance: number | number
  latitude: number | number
  longitude: number | number
}
type ObstacleDistanceResponse = { found: { [x: string]: unknown } }
type ObstaclesByPolygon = { poly: { [x: string]: unknown } }
type ObstaclePolyResponse = { found: { [x: string]: unknown } }
type ObstaclesByRoute = { route: { [x: string]: unknown } }
type ObstacleRouteResponse = { found: { [x: string]: unknown } }
type NOTAMsByDistance = {
  distance: number | number
  latitude: number | number
  longitude: number | number
}
type NOTAMsDistanceResponse = { found: { [x: string]: unknown } }
type NOTAMsByPolygon = { poly: { [x: string]: unknown } }
type NOTAMsPolyResponse = { found: { [x: string]: unknown } }
type NOTAMsByRoute = { route: { [x: string]: unknown } }
type NOTAMsRouteResponse = { found: { [x: string]: unknown } }
type SSAByDistance = {
  distance: number | number
  latitude: number | number
  longitude: number | number
}
type SSADistanceResponse = { found: { [x: string]: unknown } }
type SSAByPolygon = { poly: { [x: string]: unknown } }
type SSAPolyResponse = { found: { [x: string]: unknown } }
type SSAByRoute = { route: { [x: string]: unknown } }
type SSARouteResponse = { found: { [x: string]: unknown } }
type UOAsByDistance = {
  distance: number | number
  latitude: number | number
  longitude: number | number
}
type UOAsDistanceResponse = { found: { [x: string]: unknown } }
type UOAsByPolygon = { poly: { [x: string]: unknown } }
type UOAsPolyResponse = { found: { [x: string]: unknown } }
type UOAsByRoute = { route: { [x: string]: unknown } }
type UOAsRouteResponse = { found: { [x: string]: unknown } }
type VenuesByDistance = {
  distance: number | number
  latitude: number | number
  longitude: number | number
}
type VenueDistanceResponse = { found: { [x: string]: unknown } }
type VenuesByPolygon = { poly: { [x: string]: unknown } }
type VenuePolyResponse = { found: { [x: string]: unknown } }
type VenuesByRoute = { route: { [x: string]: unknown } }
type VenueRouteResponse = { found: { [x: string]: unknown } }
type WxByDistance = {
  distance: number | number
  hours: number
  latitude: number | number
  longitude: number | number
  wxtypes: string[]
}
type WxDistanceResponse = { found: { [x: string]: unknown } }
type WxByPolygon = { hours: number; poly: { [x: string]: unknown }; wxtypes: string[] }
type WxPolyResponse = { found: { [x: string]: unknown } }
type WxByRoute = { hours: number; route: { [x: string]: unknown }; wxtypes: string[] }
type WxRouteResponse = { found: { [x: string]: unknown } }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/us/v1/aerodromes/distance-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AerodromesByDistance }
            output: AerodromeDistanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AerodromesByDistance }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/aerodromes/polygon-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AerodromesByPolygon }
            output: AerodromePolyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AerodromesByPolygon }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/aerodromes/route-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AerodromesByRoute }
            output: AerodromeRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AerodromesByRoute }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/airspace/distance-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AirspaceByDistance }
            output: AirspaceDistanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AirspaceByDistance }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/airspace/polygon-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AirspaceByPolygon }
            output: AirspacePolyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AirspaceByPolygon }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/airspace/route-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AirspaceByRoute }
            output: AirspaceRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: AirspaceByRoute }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/obstacles/distance-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: ObstaclesByDistance }
            output: ObstacleDistanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: ObstaclesByDistance }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/obstacles/polygon-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: ObstaclesByPolygon }
            output: ObstaclePolyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: ObstaclesByPolygon }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/obstacles/route-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: ObstaclesByRoute }
            output: ObstacleRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: ObstaclesByRoute }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/restrictions/distance-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: NOTAMsByDistance }
            output: NOTAMsDistanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: NOTAMsByDistance }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/restrictions/polygon-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: NOTAMsByPolygon }
            output: NOTAMsPolyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: NOTAMsByPolygon }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/restrictions/route-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: NOTAMsByRoute }
            output: NOTAMsRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: NOTAMsByRoute }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/ssa/distance-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: SSAByDistance }
            output: SSADistanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: SSAByDistance }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/ssa/polygon-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: SSAByPolygon }
            output: SSAPolyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: SSAByPolygon }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/ssa/route-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: SSAByRoute }
            output: SSARouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: SSAByRoute }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/uoa/distance-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: UOAsByDistance }
            output: UOAsDistanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: UOAsByDistance }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/uoa/polygon-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: UOAsByPolygon }
            output: UOAsPolyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: UOAsByPolygon }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/uoa/route-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: UOAsByRoute }
            output: UOAsRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: UOAsByRoute }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/venues/distance-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: VenuesByDistance }
            output: VenueDistanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: VenuesByDistance }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/venues/polygon-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: VenuesByPolygon }
            output: VenuePolyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: VenuesByPolygon }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/venues/route-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: VenuesByRoute }
            output: VenueRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: VenuesByRoute }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/wx-forecast/distance-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: WxByDistance }
            output: WxDistanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: WxByDistance }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/wx-forecast/polygon-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: WxByPolygon }
            output: WxPolyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: WxByPolygon }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/us/v1/wx-forecast/route-query': {
      $post:
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: WxByRoute }
            output: WxRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-api-key'?: string | undefined } } & { json: WxByRoute }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
