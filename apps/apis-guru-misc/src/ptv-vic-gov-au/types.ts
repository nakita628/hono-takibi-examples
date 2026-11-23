type V3Departure = {
  at_platform?: boolean | undefined
  departure_sequence?: number | undefined
  direction_id?: number | undefined
  disruption_ids?: bigint[] | undefined
  estimated_departure_utc?: string | undefined
  flags?: string | undefined
  platform_number?: string | undefined
  route_id?: number | undefined
  run_id?: number | undefined
  run_ref?: string | undefined
  scheduled_departure_utc?: string | undefined
  stop_id?: number | undefined
}
type V3Direction = {
  direction_id?: number | undefined
  direction_name?: string | undefined
  route_id?: number | undefined
  route_type?: number | undefined
}
type V3DisruptionDirection = {
  direction_id?: number | undefined
  direction_name?: string | undefined
  route_direction_id?: number | undefined
  service_time?: string | undefined
}
type V3DisruptionRoute = {
  direction?: V3DisruptionDirection | undefined
  route_gtfs_id?: string | undefined
  route_id?: number | undefined
  route_name?: string | undefined
  route_number?: string | undefined
  route_type?: number | undefined
}
type V3DisruptionStop = { stop_id?: number | undefined; stop_name?: string | undefined }
type V3Disruption = {
  colour?: string | undefined
  description?: string | undefined
  display_on_board?: boolean | undefined
  display_status?: boolean | undefined
  disruption_id?: bigint | undefined
  disruption_status?: string | undefined
  disruption_type?: string | undefined
  from_date?: string | undefined
  last_updated?: string | undefined
  published_on?: string | undefined
  routes?: V3DisruptionRoute[] | undefined
  stops?: V3DisruptionStop[] | undefined
  title?: string | undefined
  to_date?: string | undefined
  url?: string | undefined
}
type V2Object = { [x: string]: unknown }
type V3VehicleDescriptor = {
  air_conditioned?: boolean | undefined
  description?: string | undefined
  id?: string | undefined
  length?: string | undefined
  low_floor?: boolean | undefined
  operator?: string | undefined
  supplier?: string | undefined
}
type V3VehiclePosition = {
  bearing?: number | undefined
  datetime_utc?: string | undefined
  direction?: string | undefined
  easting?: number | undefined
  expiry_time?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  northing?: number | undefined
  supplier?: string | undefined
}
type V3Run = {
  destination_name?: string | undefined
  direction_id?: number | undefined
  express_stop_count?: number | undefined
  final_stop_id?: number | undefined
  geopath?: V2Object[] | undefined
  route_id?: number | undefined
  route_type?: number | undefined
  run_id?: number | undefined
  run_ref?: string | undefined
  run_sequence?: number | undefined
  status?: string | undefined
  vehicle_descriptor?: V3VehicleDescriptor | undefined
  vehicle_position?: V3VehiclePosition | undefined
}
type V3Status = { health?: 0 | 1 | undefined; version?: string | undefined }
type V3StopModel = {
  route_type?: number | undefined
  stop_distance?: number | undefined
  stop_id?: number | undefined
  stop_landmark?: string | undefined
  stop_latitude?: number | undefined
  stop_longitude?: number | undefined
  stop_name?: string | undefined
  stop_sequence?: number | undefined
  stop_suburb?: string | undefined
}
type V3DeparturesResponse = {
  departures?: V3Departure[] | undefined
  directions?: { [x: string]: V3Direction } | undefined
  disruptions?: { [x: string]: V3Disruption } | undefined
  routes?: { [x: string]: V2Object } | undefined
  runs?: { [x: string]: V3Run } | undefined
  status?: V3Status | undefined
  stops?: { [x: string]: V3StopModel } | undefined
}
type V3ErrorResponse = { message?: string | undefined; status?: V3Status | undefined }
type V3DirectionWithDescription = {
  direction_id?: number | undefined
  direction_name?: string | undefined
  route_direction_description?: string | undefined
  route_id?: number | undefined
  route_type?: number | undefined
}
type V3DirectionsResponse = {
  directions?: V3DirectionWithDescription[] | undefined
  status?: V3Status | undefined
}
type V3Disruptions = {
  ferry?: V3Disruption[] | undefined
  general?: V3Disruption[] | undefined
  interstate_train?: V3Disruption[] | undefined
  metro_bus?: V3Disruption[] | undefined
  metro_train?: V3Disruption[] | undefined
  metro_tram?: V3Disruption[] | undefined
  night_bus?: V3Disruption[] | undefined
  regional_bus?: V3Disruption[] | undefined
  regional_coach?: V3Disruption[] | undefined
  regional_train?: V3Disruption[] | undefined
  school_bus?: V3Disruption[] | undefined
  skybus?: V3Disruption[] | undefined
  taxi?: V3Disruption[] | undefined
  telebus?: V3Disruption[] | undefined
}
type V3DisruptionsResponse = {
  disruptions?: V3Disruptions | undefined
  status?: V3Status | undefined
}
type V3DisruptionMode = {
  disruption_mode?: number | undefined
  disruption_mode_name?: string | undefined
}
type V3DisruptionModesResponse = {
  disruption_modes?: V3DisruptionMode[] | undefined
  status?: V3Status | undefined
}
type V3DisruptionResponse = { disruption?: V3Disruption | undefined; status?: V3Status | undefined }
type V3FareEstimateResponse = { [x: string]: unknown }
type V3Outlet = {
  outlet_business?: string | undefined
  outlet_business_hour_fri?: string | undefined
  outlet_business_hour_mon?: string | undefined
  outlet_business_hour_sat?: string | undefined
  outlet_business_hour_sun?: string | undefined
  outlet_business_hour_thur?: string | undefined
  outlet_business_hour_tue?: string | undefined
  outlet_business_hour_wed?: string | undefined
  outlet_latitude?: number | undefined
  outlet_longitude?: number | undefined
  outlet_name?: string | undefined
  outlet_notes?: string | undefined
  outlet_postcode?: number | undefined
  outlet_slid_spid?: string | undefined
  outlet_suburb?: string | undefined
}
type V3OutletResponse = { outlets?: V3Outlet[] | undefined; status?: V3Status | undefined }
type V3OutletGeolocation = {
  outlet_business?: string | undefined
  outlet_business_hour_fri?: string | undefined
  outlet_business_hour_mon?: string | undefined
  outlet_business_hour_sat?: string | undefined
  outlet_business_hour_sun?: string | undefined
  outlet_business_hour_thur?: string | undefined
  outlet_business_hour_tue?: string | undefined
  outlet_business_hour_wed?: string | undefined
  outlet_distance?: number | undefined
  outlet_latitude?: number | undefined
  outlet_longitude?: number | undefined
  outlet_name?: string | undefined
  outlet_notes?: string | undefined
  outlet_postcode?: number | undefined
  outlet_slid_spid?: string | undefined
  outlet_suburb?: string | undefined
}
type V3OutletGeolocationResponse = {
  outlets?: V3OutletGeolocation[] | undefined
  status?: V3Status | undefined
}
type V3PatternDeparture = {
  at_platform?: boolean | undefined
  departure_sequence?: number | undefined
  direction_id?: number | undefined
  disruption_ids?: bigint[] | undefined
  estimated_departure_utc?: string | undefined
  flags?: string | undefined
  platform_number?: string | undefined
  route_id?: number | undefined
  run_id?: number | undefined
  run_ref?: string | undefined
  scheduled_departure_utc?: string | undefined
  skipped_stops?: V3StopModel[] | undefined
  stop_id?: number | undefined
}
type V3StopTicket = {
  is_free_fare_zone?: boolean | undefined
  ticket_checks?: boolean | undefined
  ticket_machine?: boolean | undefined
  ticket_type?: string | undefined
  ticket_zones?: number[] | undefined
  vline_reservation?: boolean | undefined
  zone?: string | undefined
}
type V3StoppingPatternStop = {
  route_type?: number | undefined
  stop_distance?: number | undefined
  stop_id?: number | undefined
  stop_landmark?: string | undefined
  stop_latitude?: number | undefined
  stop_longitude?: number | undefined
  stop_name?: string | undefined
  stop_sequence?: number | undefined
  stop_suburb?: string | undefined
  stop_ticket?: V3StopTicket | undefined
}
type V3StoppingPattern = {
  departures?: V3PatternDeparture[] | undefined
  directions?: { [x: string]: V3Direction } | undefined
  disruptions?: V3Disruption[] | undefined
  routes?: { [x: string]: V2Object } | undefined
  runs?: { [x: string]: V3Run } | undefined
  status?: V3Status | undefined
  stops?: { [x: string]: V3StoppingPatternStop } | undefined
}
type V3RouteType = { route_type?: number | undefined; route_type_name?: string | undefined }
type V3RouteTypesResponse = {
  route_types?: V3RouteType[] | undefined
  status?: V3Status | undefined
}
type V3RouteResponse = { route?: V2Object | undefined; status?: V3Status | undefined }
type V3RunsResponse = { runs?: V3Run[] | undefined; status?: V3Status | undefined }
type V3RunResponse = { run?: V3Run | undefined; status?: V3Status | undefined }
type V3ResultOutlet = {
  outlet_business?: string | undefined
  outlet_business_hour_fri?: string | undefined
  outlet_business_hour_mon?: string | undefined
  outlet_business_hour_sat?: string | undefined
  outlet_business_hour_sun?: string | undefined
  outlet_business_hour_thur?: string | undefined
  outlet_business_hour_tue?: string | undefined
  outlet_business_hour_wed?: string | undefined
  outlet_distance?: number | undefined
  outlet_latitude?: number | undefined
  outlet_longitude?: number | undefined
  outlet_name?: string | undefined
  outlet_notes?: string | undefined
  outlet_postcode?: number | undefined
  outlet_slid_spid?: string | undefined
  outlet_suburb?: string | undefined
}
type V3RouteServiceStatus = { description?: string | undefined; timestamp?: string | undefined }
type V3ResultRoute = {
  route_gtfs_id?: string | undefined
  route_id?: number | undefined
  route_name?: string | undefined
  route_number?: string | undefined
  route_service_status?: V3RouteServiceStatus | undefined
  route_type?: number | undefined
}
type V3ResultStop = {
  route_type?: number | undefined
  routes?: V3ResultRoute[] | undefined
  stop_distance?: number | undefined
  stop_id?: number | undefined
  stop_landmark?: string | undefined
  stop_latitude?: number | undefined
  stop_longitude?: number | undefined
  stop_name?: string | undefined
  stop_sequence?: number | undefined
  stop_suburb?: string | undefined
}
type V3SearchResult = {
  outlets?: V3ResultOutlet[] | undefined
  routes?: V3ResultRoute[] | undefined
  status?: V3Status | undefined
  stops?: V3ResultStop[] | undefined
}
type V3StopGeosearch = {
  disruption_ids?: bigint[] | undefined
  route_type?: number | undefined
  routes?: V2Object[] | undefined
  stop_distance?: number | undefined
  stop_id?: number | undefined
  stop_landmark?: string | undefined
  stop_latitude?: number | undefined
  stop_longitude?: number | undefined
  stop_name?: string | undefined
  stop_sequence?: number | undefined
  stop_suburb?: string | undefined
}
type V3StopsByDistanceResponse = {
  disruptions?: { [x: string]: V3Disruption } | undefined
  status?: V3Status | undefined
  stops?: V3StopGeosearch[] | undefined
}
type V3StopOnRoute = {
  disruption_ids?: bigint[] | undefined
  route_type?: number | undefined
  stop_id?: number | undefined
  stop_landmark?: string | undefined
  stop_latitude?: number | undefined
  stop_longitude?: number | undefined
  stop_name?: string | undefined
  stop_sequence?: number | undefined
  stop_suburb?: string | undefined
  stop_ticket?: V3StopTicket | undefined
}
type V3StopsOnRouteResponse = {
  disruptions?: { [x: string]: V3Disruption } | undefined
  geopath?: V2Object[] | undefined
  status?: V3Status | undefined
  stops?: V3StopOnRoute[] | undefined
}
type V3StopAccessibilityWheelchair = {
  accessible_ramp?: boolean | undefined
  low_ticket_counter?: boolean | undefined
  manouvering?: boolean | undefined
  parking?: boolean | undefined
  raised_platform?: boolean | undefined
  raised_platform_shelther?: boolean | undefined
  ramp?: boolean | undefined
  secondary_path?: boolean | undefined
  steep_ramp?: boolean | undefined
  telephone?: boolean | undefined
  toilet?: boolean | undefined
}
type V3StopAccessibility = {
  audio_customer_information?: boolean | undefined
  escalator?: boolean | undefined
  hearing_loop?: boolean | undefined
  lift?: boolean | undefined
  lighting?: boolean | undefined
  platform_number?: number | undefined
  stairs?: boolean | undefined
  stop_accessible?: boolean | undefined
  tactile_ground_surface_indicator?: boolean | undefined
  waiting_room?: boolean | undefined
  wheelchair?: V3StopAccessibilityWheelchair | undefined
}
type V3StopAmenityDetails = {
  car_parking?: string | undefined
  cctv?: boolean | undefined
  taxi_rank?: boolean | undefined
  toilet?: boolean | undefined
}
type V3StopGps = { latitude?: number | undefined; longitude?: number | undefined }
type V3StopLocation = { gps?: V3StopGps | undefined }
type V3StopStaffing = {
  fri_am_from?: string | undefined
  fri_am_to?: string | undefined
  fri_pm_from?: string | undefined
  fri_pm_to?: string | undefined
  mon_am_from?: string | undefined
  mon_am_to?: string | undefined
  mon_pm_from?: string | undefined
  mon_pm_to?: string | undefined
  ph_additional_text?: string | undefined
  ph_from?: string | undefined
  ph_to?: string | undefined
  sat_am_from?: string | undefined
  sat_am_to?: string | undefined
  sat_pm_from?: string | undefined
  sat_pm_to?: string | undefined
  sun_am_from?: string | undefined
  sun_am_to?: string | undefined
  sun_pm_from?: string | undefined
  sun_pm_to?: string | undefined
  thu_am_from?: string | undefined
  thu_am_to?: string | undefined
  thu_pm_from?: string | undefined
  thu_pm_to?: string | undefined
  tue_am_from?: string | undefined
  tue_am_to?: string | undefined
  tue_pm_from?: string | undefined
  tue_pm_to?: string | undefined
  wed_am_from?: string | undefined
  wed_am_to?: string | undefined
  wed_pm_To?: string | undefined
  wed_pm_from?: string | undefined
}
type V3StopDetails = {
  disruption_ids?: bigint[] | undefined
  route_type?: number | undefined
  routes?: V2Object[] | undefined
  station_description?: string | undefined
  station_type?: string | undefined
  stop_accessibility?: V3StopAccessibility | undefined
  stop_amenities?: V3StopAmenityDetails | undefined
  stop_id?: number | undefined
  stop_landmark?: string | undefined
  stop_location?: V3StopLocation | undefined
  stop_name?: string | undefined
  stop_staffing?: V3StopStaffing | undefined
}
type V3StopResponse = {
  disruptions?: { [x: string]: V3Disruption } | undefined
  status?: V3Status | undefined
  stop?: V3StopDetails | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3/departures/route_type/:route_type/stop/:stop_id': {
      $get:
        | {
            input: { param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number } } & {
              query: {
                platform_numbers?: number[] | undefined
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DeparturesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number } } & {
              query: {
                platform_numbers?: number[] | undefined
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DeparturesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number } } & {
              query: {
                platform_numbers?: number[] | undefined
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DeparturesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number } } & {
              query: {
                platform_numbers?: number[] | undefined
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number } } & {
              query: {
                platform_numbers?: number[] | undefined
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number } } & {
              query: {
                platform_numbers?: number[] | undefined
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number } } & {
              query: {
                platform_numbers?: number[] | undefined
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number } } & {
              query: {
                platform_numbers?: number[] | undefined
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number } } & {
              query: {
                platform_numbers?: number[] | undefined
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/departures/route_type/:route_type/stop/:stop_id/route/:route_id': {
      $get:
        | {
            input: {
              param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number; route_id: string }
            } & {
              query: {
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DeparturesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number; route_id: string }
            } & {
              query: {
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DeparturesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number; route_id: string }
            } & {
              query: {
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DeparturesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number; route_id: string }
            } & {
              query: {
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number; route_id: string }
            } & {
              query: {
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number; route_id: string }
            } & {
              query: {
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number; route_id: string }
            } & {
              query: {
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number; route_id: string }
            } & {
              query: {
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              param: { route_type: 0 | 1 | 2 | 3 | 4; stop_id: number; route_id: string }
            } & {
              query: {
                direction_id?: number | undefined
                gtfs?: boolean | undefined
                date_utc?: string | undefined
                max_results?: number | undefined
                include_cancelled?: boolean | undefined
                look_backwards?: boolean | undefined
                expand?:
                  | (
                      | 'All'
                      | 'Stop'
                      | 'Route'
                      | 'Run'
                      | 'Direction'
                      | 'Disruption'
                      | 'VehicleDescriptor'
                      | 'VehiclePosition'
                      | 'None'
                    )[]
                  | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/directions/route/:route_id': {
      $get:
        | {
            input: { param: { route_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DirectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DirectionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DirectionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/directions/:direction_id': {
      $get:
        | {
            input: { param: { direction_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DirectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { direction_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DirectionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { direction_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DirectionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { direction_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { direction_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { direction_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { direction_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { direction_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { direction_id: number } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/directions/:direction_id/route_type/:route_type': {
      $get:
        | {
            input: { param: { direction_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DirectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { direction_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DirectionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { direction_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DirectionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { direction_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { direction_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { direction_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { direction_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { direction_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { direction_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/disruptions': {
      $get:
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                disruption_modes?:
                  | (1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 100)[]
                  | undefined
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                disruption_modes?:
                  | (1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 100)[]
                  | undefined
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                disruption_modes?:
                  | (1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 100)[]
                  | undefined
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                disruption_modes?:
                  | (1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 100)[]
                  | undefined
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                disruption_modes?:
                  | (1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 100)[]
                  | undefined
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                disruption_modes?:
                  | (1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 100)[]
                  | undefined
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                disruption_modes?:
                  | (1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 100)[]
                  | undefined
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                disruption_modes?:
                  | (1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 100)[]
                  | undefined
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                disruption_modes?:
                  | (1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 100)[]
                  | undefined
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/disruptions/modes': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionModesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionModesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionModesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/disruptions/route/:route_id': {
      $get:
        | {
            input: { param: { route_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/disruptions/route/:route_id/stop/:stop_id': {
      $get:
        | {
            input: { param: { route_id: number; stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id: number; stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number; stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number; stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id: number; stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number; stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number; stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { route_id: number; stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { route_id: number; stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/disruptions/stop/:stop_id': {
      $get:
        | {
            input: { param: { stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { stop_id: number } } & {
              query: {
                disruption_status?: 'current' | 'planned' | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/disruptions/:disruption_id': {
      $get:
        | {
            input: { param: { disruption_id: bigint } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { disruption_id: bigint } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { disruption_id: bigint } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3DisruptionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { disruption_id: bigint } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { disruption_id: bigint } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { disruption_id: bigint } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { disruption_id: bigint } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { disruption_id: bigint } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { disruption_id: bigint } } & {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/fare_estimate/min_zone/:minZone/max_zone/:maxZone': {
      $get:
        | {
            input: { param: { minZone: number; maxZone: number } } & {
              query: {
                journey_touch_on_utc?: string | undefined
                journey_touch_off_utc?: string | undefined
                is_journey_in_free_tram_zone?: boolean | undefined
                travelled_route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3FareEstimateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { minZone: number; maxZone: number } } & {
              query: {
                journey_touch_on_utc?: string | undefined
                journey_touch_off_utc?: string | undefined
                is_journey_in_free_tram_zone?: boolean | undefined
                travelled_route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3FareEstimateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { minZone: number; maxZone: number } } & {
              query: {
                journey_touch_on_utc?: string | undefined
                journey_touch_off_utc?: string | undefined
                is_journey_in_free_tram_zone?: boolean | undefined
                travelled_route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3FareEstimateResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { minZone: number; maxZone: number } } & {
              query: {
                journey_touch_on_utc?: string | undefined
                journey_touch_off_utc?: string | undefined
                is_journey_in_free_tram_zone?: boolean | undefined
                travelled_route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { minZone: number; maxZone: number } } & {
              query: {
                journey_touch_on_utc?: string | undefined
                journey_touch_off_utc?: string | undefined
                is_journey_in_free_tram_zone?: boolean | undefined
                travelled_route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { minZone: number; maxZone: number } } & {
              query: {
                journey_touch_on_utc?: string | undefined
                journey_touch_off_utc?: string | undefined
                is_journey_in_free_tram_zone?: boolean | undefined
                travelled_route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { minZone: number; maxZone: number } } & {
              query: {
                journey_touch_on_utc?: string | undefined
                journey_touch_off_utc?: string | undefined
                is_journey_in_free_tram_zone?: boolean | undefined
                travelled_route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { minZone: number; maxZone: number } } & {
              query: {
                journey_touch_on_utc?: string | undefined
                journey_touch_off_utc?: string | undefined
                is_journey_in_free_tram_zone?: boolean | undefined
                travelled_route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { minZone: number; maxZone: number } } & {
              query: {
                journey_touch_on_utc?: string | undefined
                journey_touch_off_utc?: string | undefined
                is_journey_in_free_tram_zone?: boolean | undefined
                travelled_route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/outlets': {
      $get:
        | {
            input: {
              query: {
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3OutletResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3OutletResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3OutletResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/outlets/location/:latitude,{longitude}': {
      $get:
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                max_distance?: number | undefined
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3OutletGeolocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                max_distance?: number | undefined
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3OutletGeolocationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                max_distance?: number | undefined
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3OutletGeolocationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                max_distance?: number | undefined
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                max_distance?: number | undefined
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                max_distance?: number | undefined
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                max_distance?: number | undefined
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                max_distance?: number | undefined
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                max_distance?: number | undefined
                max_results?: number | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/pattern/run/:run_ref/route_type/:route_type': {
      $get:
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: (
                  | 'All'
                  | 'Stop'
                  | 'Route'
                  | 'Run'
                  | 'Direction'
                  | 'Disruption'
                  | 'VehicleDescriptor'
                  | 'VehiclePosition'
                  | 'None'
                )[]
                stop_id?: number | undefined
                date_utc?: string | undefined
                include_skipped_stops?: boolean | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StoppingPattern
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: (
                  | 'All'
                  | 'Stop'
                  | 'Route'
                  | 'Run'
                  | 'Direction'
                  | 'Disruption'
                  | 'VehicleDescriptor'
                  | 'VehiclePosition'
                  | 'None'
                )[]
                stop_id?: number | undefined
                date_utc?: string | undefined
                include_skipped_stops?: boolean | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StoppingPattern
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: (
                  | 'All'
                  | 'Stop'
                  | 'Route'
                  | 'Run'
                  | 'Direction'
                  | 'Disruption'
                  | 'VehicleDescriptor'
                  | 'VehiclePosition'
                  | 'None'
                )[]
                stop_id?: number | undefined
                date_utc?: string | undefined
                include_skipped_stops?: boolean | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StoppingPattern
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: (
                  | 'All'
                  | 'Stop'
                  | 'Route'
                  | 'Run'
                  | 'Direction'
                  | 'Disruption'
                  | 'VehicleDescriptor'
                  | 'VehiclePosition'
                  | 'None'
                )[]
                stop_id?: number | undefined
                date_utc?: string | undefined
                include_skipped_stops?: boolean | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: (
                  | 'All'
                  | 'Stop'
                  | 'Route'
                  | 'Run'
                  | 'Direction'
                  | 'Disruption'
                  | 'VehicleDescriptor'
                  | 'VehiclePosition'
                  | 'None'
                )[]
                stop_id?: number | undefined
                date_utc?: string | undefined
                include_skipped_stops?: boolean | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: (
                  | 'All'
                  | 'Stop'
                  | 'Route'
                  | 'Run'
                  | 'Direction'
                  | 'Disruption'
                  | 'VehicleDescriptor'
                  | 'VehiclePosition'
                  | 'None'
                )[]
                stop_id?: number | undefined
                date_utc?: string | undefined
                include_skipped_stops?: boolean | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: (
                  | 'All'
                  | 'Stop'
                  | 'Route'
                  | 'Run'
                  | 'Direction'
                  | 'Disruption'
                  | 'VehicleDescriptor'
                  | 'VehiclePosition'
                  | 'None'
                )[]
                stop_id?: number | undefined
                date_utc?: string | undefined
                include_skipped_stops?: boolean | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: (
                  | 'All'
                  | 'Stop'
                  | 'Route'
                  | 'Run'
                  | 'Direction'
                  | 'Disruption'
                  | 'VehicleDescriptor'
                  | 'VehiclePosition'
                  | 'None'
                )[]
                stop_id?: number | undefined
                date_utc?: string | undefined
                include_skipped_stops?: boolean | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: (
                  | 'All'
                  | 'Stop'
                  | 'Route'
                  | 'Run'
                  | 'Direction'
                  | 'Disruption'
                  | 'VehicleDescriptor'
                  | 'VehiclePosition'
                  | 'None'
                )[]
                stop_id?: number | undefined
                date_utc?: string | undefined
                include_skipped_stops?: boolean | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/route_types': {
      $get:
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RouteTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RouteTypesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RouteTypesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/routes': {
      $get:
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                route_name?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                route_name?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RouteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                route_name?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RouteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                route_name?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                route_name?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                route_name?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                route_name?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                route_name?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                route_name?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/routes/:route_id': {
      $get:
        | {
            input: { param: { route_id: number } } & {
              query: {
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RouteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RouteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/runs/route/:route_id': {
      $get:
        | {
            input: { param: { route_id: number } } & {
              query: {
                expand?: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[] | undefined
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                expand?: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[] | undefined
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                expand?: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[] | undefined
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                expand?: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[] | undefined
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                expand?: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[] | undefined
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                expand?: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[] | undefined
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                expand?: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[] | undefined
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                expand?: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[] | undefined
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { route_id: number } } & {
              query: {
                expand?: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[] | undefined
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/runs/route/:route_id/route_type/:route_type': {
      $get:
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/runs/:run_ref': {
      $get:
        | {
            input: { param: { run_ref: string } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { run_ref: string } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { run_ref: string } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { run_ref: string } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { run_ref: string } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { run_ref: string } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { run_ref: string } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { run_ref: string } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { run_ref: string } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/runs/:run_ref/route_type/:route_type': {
      $get:
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3RunResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { run_ref: string; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                expand: ('All' | 'VehicleDescriptor' | 'VehiclePosition' | 'None')[]
                date_utc?: string | undefined
                include_geopath?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/search/:search_term': {
      $get:
        | {
            input: { param: { search_term: string } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                max_distance?: number | undefined
                include_addresses?: boolean | undefined
                include_outlets?: boolean | undefined
                match_stop_by_suburb?: boolean | undefined
                match_route_by_suburb?: boolean | undefined
                match_stop_by_gtfs_stop_id?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3SearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { search_term: string } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                max_distance?: number | undefined
                include_addresses?: boolean | undefined
                include_outlets?: boolean | undefined
                match_stop_by_suburb?: boolean | undefined
                match_route_by_suburb?: boolean | undefined
                match_stop_by_gtfs_stop_id?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3SearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { search_term: string } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                max_distance?: number | undefined
                include_addresses?: boolean | undefined
                include_outlets?: boolean | undefined
                match_stop_by_suburb?: boolean | undefined
                match_route_by_suburb?: boolean | undefined
                match_stop_by_gtfs_stop_id?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3SearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { search_term: string } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                max_distance?: number | undefined
                include_addresses?: boolean | undefined
                include_outlets?: boolean | undefined
                match_stop_by_suburb?: boolean | undefined
                match_route_by_suburb?: boolean | undefined
                match_stop_by_gtfs_stop_id?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { search_term: string } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                max_distance?: number | undefined
                include_addresses?: boolean | undefined
                include_outlets?: boolean | undefined
                match_stop_by_suburb?: boolean | undefined
                match_route_by_suburb?: boolean | undefined
                match_stop_by_gtfs_stop_id?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { search_term: string } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                max_distance?: number | undefined
                include_addresses?: boolean | undefined
                include_outlets?: boolean | undefined
                match_stop_by_suburb?: boolean | undefined
                match_route_by_suburb?: boolean | undefined
                match_stop_by_gtfs_stop_id?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { search_term: string } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                max_distance?: number | undefined
                include_addresses?: boolean | undefined
                include_outlets?: boolean | undefined
                match_stop_by_suburb?: boolean | undefined
                match_route_by_suburb?: boolean | undefined
                match_stop_by_gtfs_stop_id?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { search_term: string } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                max_distance?: number | undefined
                include_addresses?: boolean | undefined
                include_outlets?: boolean | undefined
                match_stop_by_suburb?: boolean | undefined
                match_route_by_suburb?: boolean | undefined
                match_stop_by_gtfs_stop_id?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { search_term: string } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                max_distance?: number | undefined
                include_addresses?: boolean | undefined
                include_outlets?: boolean | undefined
                match_stop_by_suburb?: boolean | undefined
                match_route_by_suburb?: boolean | undefined
                match_stop_by_gtfs_stop_id?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/stops/location/:latitude,{longitude}': {
      $get:
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                max_results?: number | undefined
                max_distance?: number | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StopsByDistanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                max_results?: number | undefined
                max_distance?: number | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StopsByDistanceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                max_results?: number | undefined
                max_distance?: number | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StopsByDistanceResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                max_results?: number | undefined
                max_distance?: number | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                max_results?: number | undefined
                max_distance?: number | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                max_results?: number | undefined
                max_distance?: number | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                max_results?: number | undefined
                max_distance?: number | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                max_results?: number | undefined
                max_distance?: number | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { latitude: number; longitude: number } } & {
              query: {
                route_types?: (0 | 1 | 2 | 3 | 4)[] | undefined
                max_results?: number | undefined
                max_distance?: number | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/stops/route/:route_id/route_type/:route_type': {
      $get:
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                direction_id?: number | undefined
                stop_disruptions?: boolean | undefined
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StopsOnRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                direction_id?: number | undefined
                stop_disruptions?: boolean | undefined
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StopsOnRouteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                direction_id?: number | undefined
                stop_disruptions?: boolean | undefined
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StopsOnRouteResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                direction_id?: number | undefined
                stop_disruptions?: boolean | undefined
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                direction_id?: number | undefined
                stop_disruptions?: boolean | undefined
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                direction_id?: number | undefined
                stop_disruptions?: boolean | undefined
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                direction_id?: number | undefined
                stop_disruptions?: boolean | undefined
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                direction_id?: number | undefined
                stop_disruptions?: boolean | undefined
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { route_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                direction_id?: number | undefined
                stop_disruptions?: boolean | undefined
                include_geopath?: boolean | undefined
                geopath_utc?: string | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v3/stops/:stop_id/route_type/:route_type': {
      $get:
        | {
            input: { param: { stop_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                stop_location?: boolean | undefined
                stop_amenities?: boolean | undefined
                stop_accessibility?: boolean | undefined
                stop_contact?: boolean | undefined
                stop_ticket?: boolean | undefined
                gtfs?: boolean | undefined
                stop_staffing?: boolean | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StopResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stop_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                stop_location?: boolean | undefined
                stop_amenities?: boolean | undefined
                stop_accessibility?: boolean | undefined
                stop_contact?: boolean | undefined
                stop_ticket?: boolean | undefined
                gtfs?: boolean | undefined
                stop_staffing?: boolean | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StopResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stop_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                stop_location?: boolean | undefined
                stop_amenities?: boolean | undefined
                stop_accessibility?: boolean | undefined
                stop_contact?: boolean | undefined
                stop_ticket?: boolean | undefined
                gtfs?: boolean | undefined
                stop_staffing?: boolean | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3StopResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stop_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                stop_location?: boolean | undefined
                stop_amenities?: boolean | undefined
                stop_accessibility?: boolean | undefined
                stop_contact?: boolean | undefined
                stop_ticket?: boolean | undefined
                gtfs?: boolean | undefined
                stop_staffing?: boolean | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { stop_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                stop_location?: boolean | undefined
                stop_amenities?: boolean | undefined
                stop_accessibility?: boolean | undefined
                stop_contact?: boolean | undefined
                stop_ticket?: boolean | undefined
                gtfs?: boolean | undefined
                stop_staffing?: boolean | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { stop_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                stop_location?: boolean | undefined
                stop_amenities?: boolean | undefined
                stop_accessibility?: boolean | undefined
                stop_contact?: boolean | undefined
                stop_ticket?: boolean | undefined
                gtfs?: boolean | undefined
                stop_staffing?: boolean | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { stop_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                stop_location?: boolean | undefined
                stop_amenities?: boolean | undefined
                stop_accessibility?: boolean | undefined
                stop_contact?: boolean | undefined
                stop_ticket?: boolean | undefined
                gtfs?: boolean | undefined
                stop_staffing?: boolean | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { stop_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                stop_location?: boolean | undefined
                stop_amenities?: boolean | undefined
                stop_accessibility?: boolean | undefined
                stop_contact?: boolean | undefined
                stop_ticket?: boolean | undefined
                gtfs?: boolean | undefined
                stop_staffing?: boolean | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { stop_id: number; route_type: 0 | 1 | 2 | 3 | 4 } } & {
              query: {
                stop_location?: boolean | undefined
                stop_amenities?: boolean | undefined
                stop_accessibility?: boolean | undefined
                stop_contact?: boolean | undefined
                stop_ticket?: boolean | undefined
                gtfs?: boolean | undefined
                stop_staffing?: boolean | undefined
                stop_disruptions?: boolean | undefined
                token?: string | undefined
                devid?: string | undefined
                signature?: string | undefined
              }
            }
            output: V3ErrorResponse
            outputFormat: 'text'
            status: 403
          }
    }
  },
  '/'
>
export default routes
