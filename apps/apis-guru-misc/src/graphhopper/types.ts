type ClusterConfigurationClustering = {
  max_quantity?: number | undefined
  min_quantity?: number | undefined
  num_clusters?: number | undefined
}
type ClusterConfigurationRouting = {
  cost_per_meter?: number | undefined
  cost_per_second?: number | undefined
  profile?: string | undefined
}
type ClusterConfiguration = {
  clustering?: ClusterConfigurationClustering | undefined
  response_type?: string | undefined
  routing?: ClusterConfigurationRouting | undefined
}
type ClusterCustomerAddress = {
  lat?: number | undefined
  lon?: number | undefined
  street_hint?: string | undefined
}
type ClusterCustomer = {
  address?: ClusterCustomerAddress | undefined
  id?: string | undefined
  quantity?: number | undefined
}
type ClusterRequest = {
  configuration?: ClusterConfiguration | undefined
  customers?: ClusterCustomer[] | undefined
}
type Cluster = { ids?: string[] | undefined; quantity?: number | undefined }
type ClusterResponse = {
  clusters?: Cluster[] | undefined
  copyrights?: string[] | undefined
  processing_time?: number | undefined
  status?: 'waiting_in_queue' | 'processing' | 'finished' | undefined
  waiting_time_in_queue?: number | undefined
}
type ErrorMessage = { details?: string | undefined; message?: string | undefined }
type BadRequest = {
  hints?: ErrorMessage[] | undefined
  message?: string | undefined
  status?: string | undefined
}
type InternalErrorMessage = { code?: number | undefined; message?: string | undefined }
type JobId = { job_id?: string | undefined }
type GeocodingPoint = { lat?: number | undefined; lng?: number | undefined }
type GeocodingLocation = {
  city?: string | undefined
  country?: string | undefined
  housenumber?: string | undefined
  name?: string | undefined
  osm_id?: string | undefined
  osm_key?: string | undefined
  osm_type?: string | undefined
  point?: GeocodingPoint | undefined
  postcode?: string | undefined
  state?: string | undefined
  street?: string | undefined
}
type GeocodingResponse = { hits?: GeocodingLocation[] | undefined; took?: number | undefined }
type GHError = {
  hints?: { message?: string | undefined }[] | undefined
  message?: string | undefined
}
type VehicleProfileId =
  | 'car'
  | 'bike'
  | 'foot'
  | 'hike'
  | 'mtb'
  | 'racingbike'
  | 'scooter'
  | 'truck'
  | 'small_truck'
type Polygon = { coordinates?: number[][][] | undefined; type?: string | undefined }
type IsochroneResponsePolygon = {
  geometry?: Polygon | undefined
  properties?: { bucket?: number | undefined } | undefined
  type?: string | undefined
}
type IsochroneResponse = {
  copyrights?: string[] | undefined
  polygons?: IsochroneResponsePolygon[] | undefined
}
type ResponseInfo = { copyrights?: string[] | undefined; took?: number | undefined }
type RouteResponsePath = {
  ascend?: number | undefined
  bbox?: number[] | undefined
  descend?: number | undefined
  details?: { [x: string]: unknown } | undefined
  distance?: number | undefined
  instructions?:
    | {
        distance?: number | undefined
        exit_number?: number | undefined
        interval?: number[] | undefined
        sign?: number | undefined
        street_name?: string | undefined
        text?: string | undefined
        time?: number | undefined
        turn_angle?: number | undefined
      }[]
    | undefined
  points?: {} | undefined
  points_encoded?: boolean | undefined
  points_order?: number[] | undefined
  snapped_waypoints?: {} | undefined
  time?: bigint | undefined
}
type RouteResponse = { info?: ResponseInfo | undefined; paths?: RouteResponsePath[] | undefined }
type MatrixResponse = {
  distances?: number[][] | undefined
  hints?:
    | {
        details?: string | undefined
        invalid_from_points?: number[] | undefined
        invalid_to_points?: number[] | undefined
        message?: string | undefined
        point_pairs?: number[][] | undefined
      }[]
    | undefined
  info?: ResponseInfo | undefined
  times?: number[][] | undefined
  weights?: number[][] | undefined
}
type MatrixRequest = {
  fail_fast?: boolean | undefined
  from_curbsides?: string[] | undefined
  from_point_hints?: string[] | undefined
  from_points?: number[][] | undefined
  out_arrays?: string[] | undefined
  snap_preventions?: string[] | undefined
  to_curbsides?: string[] | undefined
  to_point_hints?: string[] | undefined
  to_points?: number[][] | undefined
  turn_costs?: boolean | undefined
  vehicle?: {} | undefined
}
type SymmetricalMatrixRequest = {
  curbsides?: string[] | undefined
  fail_fast?: boolean | undefined
  out_arrays?: string[] | undefined
  point_hints?: string[] | undefined
  points?: number[][] | undefined
  snap_preventions?: string[] | undefined
  turn_costs?: boolean | undefined
  vehicle?: {} | undefined
}
type RouteRequest = {
  algorithm?: 'round_trip' | 'alternative_route' | undefined
  'alternative_route.max_paths'?: number | undefined
  'alternative_route.max_share_factor'?: number | undefined
  'alternative_route.max_weight_factor'?: number | undefined
  avoid?: string | undefined
  block_area?: string | undefined
  calc_points?: boolean | undefined
  'ch.disable'?: boolean | undefined
  curbsides?: ('any' | 'right' | 'left')[] | undefined
  debug?: boolean | undefined
  details?: string[] | undefined
  elevation?: boolean | undefined
  heading_penalty?: number | undefined
  headings?: number[] | undefined
  instructions?: boolean | undefined
  locale?: string | undefined
  optimize?: string | undefined
  pass_through?: boolean | undefined
  point_hints?: string[] | undefined
  points?: number[][] | undefined
  points_encoded?: boolean | undefined
  'round_trip.distance'?: number | undefined
  'round_trip.seed'?: bigint | undefined
  snap_preventions?: string[] | undefined
  vehicle?: {} | undefined
  weighting?: string | undefined
}
type InfoResponse = {
  bbox?: string | undefined
  features?: { [x: string]: unknown } | undefined
  version?: string | undefined
}
type Algorithm = {
  objective?: 'transport_time' | 'completion_time' | undefined
  problem_type?: 'min' | 'min-max' | undefined
}
type Routing = {
  calc_points?: boolean | undefined
  consider_traffic?: boolean | undefined
  curbside_strictness?: 'ignore' | 'soft' | 'strict' | undefined
  fail_fast?: boolean | undefined
  network_data_provider?: 'openstreetmap' | 'tomtom' | undefined
  return_snapped_waypoints?: boolean | undefined
  snap_preventions?: ('motorway' | 'trunk' | 'bridge' | 'ford' | 'tunnel' | 'ferry')[] | undefined
}
type Configuration = { routing?: Routing | undefined }
type CostMatrix = {
  data?:
    | {
        distances?: number[][] | undefined
        info?: { copyrights?: string[] | undefined; took?: number | undefined } | undefined
        times?: bigint[][] | undefined
      }
    | undefined
  location_ids?: string[] | undefined
  profile?: string | undefined
  type?: 'default' | 'google' | undefined
}
type Objective = {
  type: 'min' | 'min-max'
  value: 'completion_time' | 'transport_time' | 'vehicles' | 'activities'
}
type JobRelation = { ids: string[]; type: string; vehicle_id?: string | undefined }
type GroupRelation = { groups: string[]; type: string }
type Address = {
  curbside?: 'right' | 'left' | 'any' | undefined
  lat: number
  location_id: string
  lon: number
  name?: string | undefined
  street_hint?: string | undefined
}
type TimeWindow = { earliest?: bigint | undefined; latest?: bigint | undefined }
type Service = {
  address?: Address | undefined
  allowed_vehicles?: string[] | undefined
  disallowed_vehicles?: string[] | undefined
  duration?: bigint | undefined
  group?: string | undefined
  id: string
  max_time_in_vehicle?: bigint | undefined
  name?: string | undefined
  preparation_time?: bigint | undefined
  priority?: number | undefined
  required_skills?: string[] | undefined
  size?: number[] | undefined
  time_windows?: TimeWindow[] | undefined
  type?: 'service' | 'pickup' | 'delivery' | undefined
}
type Stop = {
  address?: Address | undefined
  duration?: bigint | undefined
  group?: string | undefined
  preparation_time?: bigint | undefined
  time_windows?: TimeWindow[] | undefined
}
type Shipment = {
  allowed_vehicles?: string[] | undefined
  delivery: Stop
  disallowed_vehicles?: string[] | undefined
  id: string
  max_time_in_vehicle?: bigint | undefined
  name?: string | undefined
  pickup: Stop
  priority?: number | undefined
  required_skills?: string[] | undefined
  size?: number[] | undefined
}
type VehicleType = {
  capacity?: number[] | undefined
  consider_traffic?: boolean | undefined
  cost_per_activation?: number | undefined
  cost_per_meter?: number | undefined
  cost_per_second?: number | undefined
  network_data_provider?: 'openstreetmap' | 'tomtom' | undefined
  profile?: {} | undefined
  service_time_factor?: number | undefined
  speed_factor?: number | undefined
  type_id: string
}
type TimeWindowBreak = { duration: bigint; earliest: bigint; latest: bigint }
type DriveTimeBreak = {
  duration: bigint
  initial_driving_time?: bigint | undefined
  max_driving_time: bigint
  possible_split?: bigint[] | undefined
}
type Vehicle = {
  break?: TimeWindowBreak | DriveTimeBreak | undefined
  earliest_start?: bigint | undefined
  end_address?: Address | undefined
  latest_end?: bigint | undefined
  max_activities?: number | undefined
  max_distance?: bigint | undefined
  max_driving_time?: bigint | undefined
  max_jobs?: number | undefined
  min_jobs?: number | undefined
  move_to_end_address?: boolean | undefined
  return_to_depot?: boolean | undefined
  skills?: string[] | undefined
  start_address: Address
  type_id?: string | undefined
  vehicle_id: string
}
type Request = {
  algorithm?: Algorithm | undefined
  configuration?: Configuration | undefined
  cost_matrices?: CostMatrix[] | undefined
  objectives?: Objective[] | undefined
  relations?: (JobRelation | GroupRelation)[] | undefined
  services?: Service[] | undefined
  shipments?: Shipment[] | undefined
  vehicle_types?: VehicleType[] | undefined
  vehicles?: Vehicle[] | undefined
}
type SnappedWaypoint = { lat?: number | undefined; lon?: number | undefined }
type ResponseAddress = {
  lat?: number | undefined
  location_id?: string | undefined
  lon?: number | undefined
  name?: string | undefined
  snapped_waypoint?: SnappedWaypoint | undefined
  street_hint?: string | undefined
}
type Activity = {
  address?: ResponseAddress | undefined
  arr_date_time?: string | undefined
  arr_time?: bigint | undefined
  distance?: bigint | undefined
  driving_time?: bigint | undefined
  end_date_time?: string | undefined
  end_time?: bigint | undefined
  id?: string | undefined
  load_after?: number[] | undefined
  load_before?: number[] | undefined
  location_id?: string | undefined
  preparation_time?: bigint | undefined
  type?:
    | 'start'
    | 'end'
    | 'service'
    | 'pickupShipment'
    | 'deliverShipment'
    | 'pickup'
    | 'delivery'
    | 'break'
    | undefined
  waiting_time?: bigint | undefined
}
type RoutePoint = {
  coordinates?: { [x: string]: unknown }[] | undefined
  type?: string | undefined
}
type Route = {
  activities?: Activity[] | undefined
  completion_time?: bigint | undefined
  distance?: bigint | undefined
  points?: RoutePoint[] | undefined
  preparation_time?: bigint | undefined
  service_duration?: bigint | undefined
  transport_time?: bigint | undefined
  vehicle_id?: string | undefined
  waiting_time?: bigint | undefined
}
type Detail = { code?: number | undefined; id?: string | undefined; reason?: string | undefined }
type Solution = {
  completion_time?: bigint | undefined
  costs?: number | undefined
  distance?: number | undefined
  max_operation_time?: bigint | undefined
  no_unassigned?: number | undefined
  no_vehicles?: number | undefined
  preparation_time?: bigint | undefined
  routes?: Route[] | undefined
  service_duration?: bigint | undefined
  time?: bigint | undefined
  transport_time?: bigint | undefined
  unassigned?:
    | {
        breaks?: string[] | undefined
        details?: Detail[] | undefined
        services?: string[] | undefined
        shipments?: string[] | undefined
      }
    | undefined
  waiting_time?: bigint | undefined
}
type Response = {
  copyrights?: string[] | undefined
  processing_time?: bigint | undefined
  solution?: Solution | undefined
  status?: 'waiting_in_queue' | 'processing' | 'finished' | undefined
  waiting_time_in_queue?: bigint | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/cluster': {
      $post:
        | {
            input: { json: ClusterRequest }
            output: ClusterResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ClusterRequest }; output: BadRequest; outputFormat: 'json'; status: 400 }
        | {
            input: { json: ClusterRequest }
            output: InternalErrorMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cluster/calculate': {
      $post:
        | { input: { json: ClusterRequest }; output: JobId; outputFormat: 'json'; status: 200 }
        | { input: { json: ClusterRequest }; output: BadRequest; outputFormat: 'json'; status: 400 }
        | {
            input: { json: ClusterRequest }
            output: InternalErrorMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cluster/solution/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: ClusterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jobId: string } }
            output: { message?: string | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { jobId: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/geocode': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                locale?: string | undefined
                limit?: number | undefined
                reverse?: boolean | undefined
                debug?: boolean | undefined
                point?: string | undefined
                provider?: string | undefined
              }
            }
            output: GeocodingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                locale?: string | undefined
                limit?: number | undefined
                reverse?: boolean | undefined
                debug?: boolean | undefined
                point?: string | undefined
                provider?: string | undefined
              }
            }
            output: GHError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/isochrone': {
      $get:
        | {
            input: {
              query: {
                point: string
                time_limit?: number | undefined
                distance_limit?: number | undefined
                vehicle?: VehicleProfileId | undefined
                buckets?: number | undefined
                reverse_flow?: boolean | undefined
                weighting?: 'fastest' | 'shortest' | undefined
              }
            }
            output: IsochroneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                point: string
                time_limit?: number | undefined
                distance_limit?: number | undefined
                vehicle?: VehicleProfileId | undefined
                buckets?: number | undefined
                reverse_flow?: boolean | undefined
                weighting?: 'fastest' | 'shortest' | undefined
              }
            }
            output: GHError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/match': {
      $post:
        | {
            input: { query: { gps_accuracy?: number | undefined; vehicle?: string | undefined } }
            output: RouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { gps_accuracy?: number | undefined; vehicle?: string | undefined } }
            output: GHError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/matrix': {
      $get:
        | {
            input: {
              query: {
                point?: string[] | undefined
                from_point?: string[] | undefined
                to_point?: string[] | undefined
                point_hint?: string[] | undefined
                from_point_hint?: string[] | undefined
                to_point_hint?: string[] | undefined
                snap_prevention?: string[] | undefined
                curbside?: ('any' | 'right' | 'left')[] | undefined
                from_curbside?: ('any' | 'right' | 'left')[] | undefined
                to_curbside?: ('any' | 'right' | 'left')[] | undefined
                out_array?: string[] | undefined
                vehicle?: VehicleProfileId | undefined
                fail_fast?: boolean | undefined
                turn_costs?: boolean | undefined
              }
            }
            output: MatrixResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                point?: string[] | undefined
                from_point?: string[] | undefined
                to_point?: string[] | undefined
                point_hint?: string[] | undefined
                from_point_hint?: string[] | undefined
                to_point_hint?: string[] | undefined
                snap_prevention?: string[] | undefined
                curbside?: ('any' | 'right' | 'left')[] | undefined
                from_curbside?: ('any' | 'right' | 'left')[] | undefined
                to_curbside?: ('any' | 'right' | 'left')[] | undefined
                out_array?: string[] | undefined
                vehicle?: VehicleProfileId | undefined
                fail_fast?: boolean | undefined
                turn_costs?: boolean | undefined
              }
            }
            output: GHError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: MatrixRequest | SymmetricalMatrixRequest }
            output: MatrixResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MatrixRequest | SymmetricalMatrixRequest }
            output: GHError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/matrix/calculate': {
      $post:
        | {
            input: { json: MatrixRequest | SymmetricalMatrixRequest }
            output: JobId
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MatrixRequest | SymmetricalMatrixRequest }
            output: GHError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/matrix/solution/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: MatrixResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } }
            output: GHError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/route': {
      $get:
        | {
            input: {
              query: {
                point: string[]
                point_hint?: string[] | undefined
                snap_prevention?: string[] | undefined
                vehicle?: VehicleProfileId | undefined
                curbside?: ('any' | 'right' | 'left')[] | undefined
                turn_costs?: boolean | undefined
                locale?: string | undefined
                elevation?: boolean | undefined
                details?: string[] | undefined
                optimize?: string | undefined
                instructions?: boolean | undefined
                calc_points?: boolean | undefined
                debug?: boolean | undefined
                points_encoded?: boolean | undefined
                'ch.disable'?: boolean | undefined
                weighting?: string | undefined
                heading?: number[] | undefined
                heading_penalty?: number | undefined
                pass_through?: boolean | undefined
                block_area?: string | undefined
                avoid?: string | undefined
                algorithm?: 'round_trip' | 'alternative_route' | undefined
                'round_trip.distance'?: number | undefined
                'round_trip.seed'?: bigint | undefined
                'alternative_route.max_paths'?: number | undefined
                'alternative_route.max_weight_factor'?: number | undefined
                'alternative_route.max_share_factor'?: number | undefined
              }
            }
            output: RouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                point: string[]
                point_hint?: string[] | undefined
                snap_prevention?: string[] | undefined
                vehicle?: VehicleProfileId | undefined
                curbside?: ('any' | 'right' | 'left')[] | undefined
                turn_costs?: boolean | undefined
                locale?: string | undefined
                elevation?: boolean | undefined
                details?: string[] | undefined
                optimize?: string | undefined
                instructions?: boolean | undefined
                calc_points?: boolean | undefined
                debug?: boolean | undefined
                points_encoded?: boolean | undefined
                'ch.disable'?: boolean | undefined
                weighting?: string | undefined
                heading?: number[] | undefined
                heading_penalty?: number | undefined
                pass_through?: boolean | undefined
                block_area?: string | undefined
                avoid?: string | undefined
                algorithm?: 'round_trip' | 'alternative_route' | undefined
                'round_trip.distance'?: number | undefined
                'round_trip.seed'?: bigint | undefined
                'alternative_route.max_paths'?: number | undefined
                'alternative_route.max_weight_factor'?: number | undefined
                'alternative_route.max_share_factor'?: number | undefined
              }
            }
            output: GHError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                point: string[]
                point_hint?: string[] | undefined
                snap_prevention?: string[] | undefined
                vehicle?: VehicleProfileId | undefined
                curbside?: ('any' | 'right' | 'left')[] | undefined
                turn_costs?: boolean | undefined
                locale?: string | undefined
                elevation?: boolean | undefined
                details?: string[] | undefined
                optimize?: string | undefined
                instructions?: boolean | undefined
                calc_points?: boolean | undefined
                debug?: boolean | undefined
                points_encoded?: boolean | undefined
                'ch.disable'?: boolean | undefined
                weighting?: string | undefined
                heading?: number[] | undefined
                heading_penalty?: number | undefined
                pass_through?: boolean | undefined
                block_area?: string | undefined
                avoid?: string | undefined
                algorithm?: 'round_trip' | 'alternative_route' | undefined
                'round_trip.distance'?: number | undefined
                'round_trip.seed'?: bigint | undefined
                'alternative_route.max_paths'?: number | undefined
                'alternative_route.max_weight_factor'?: number | undefined
                'alternative_route.max_share_factor'?: number | undefined
              }
            }
            output: GHError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                point: string[]
                point_hint?: string[] | undefined
                snap_prevention?: string[] | undefined
                vehicle?: VehicleProfileId | undefined
                curbside?: ('any' | 'right' | 'left')[] | undefined
                turn_costs?: boolean | undefined
                locale?: string | undefined
                elevation?: boolean | undefined
                details?: string[] | undefined
                optimize?: string | undefined
                instructions?: boolean | undefined
                calc_points?: boolean | undefined
                debug?: boolean | undefined
                points_encoded?: boolean | undefined
                'ch.disable'?: boolean | undefined
                weighting?: string | undefined
                heading?: number[] | undefined
                heading_penalty?: number | undefined
                pass_through?: boolean | undefined
                block_area?: string | undefined
                avoid?: string | undefined
                algorithm?: 'round_trip' | 'alternative_route' | undefined
                'round_trip.distance'?: number | undefined
                'round_trip.seed'?: bigint | undefined
                'alternative_route.max_paths'?: number | undefined
                'alternative_route.max_weight_factor'?: number | undefined
                'alternative_route.max_share_factor'?: number | undefined
              }
            }
            output: GHError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                point: string[]
                point_hint?: string[] | undefined
                snap_prevention?: string[] | undefined
                vehicle?: VehicleProfileId | undefined
                curbside?: ('any' | 'right' | 'left')[] | undefined
                turn_costs?: boolean | undefined
                locale?: string | undefined
                elevation?: boolean | undefined
                details?: string[] | undefined
                optimize?: string | undefined
                instructions?: boolean | undefined
                calc_points?: boolean | undefined
                debug?: boolean | undefined
                points_encoded?: boolean | undefined
                'ch.disable'?: boolean | undefined
                weighting?: string | undefined
                heading?: number[] | undefined
                heading_penalty?: number | undefined
                pass_through?: boolean | undefined
                block_area?: string | undefined
                avoid?: string | undefined
                algorithm?: 'round_trip' | 'alternative_route' | undefined
                'round_trip.distance'?: number | undefined
                'round_trip.seed'?: bigint | undefined
                'alternative_route.max_paths'?: number | undefined
                'alternative_route.max_weight_factor'?: number | undefined
                'alternative_route.max_share_factor'?: number | undefined
              }
            }
            output: GHError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                point: string[]
                point_hint?: string[] | undefined
                snap_prevention?: string[] | undefined
                vehicle?: VehicleProfileId | undefined
                curbside?: ('any' | 'right' | 'left')[] | undefined
                turn_costs?: boolean | undefined
                locale?: string | undefined
                elevation?: boolean | undefined
                details?: string[] | undefined
                optimize?: string | undefined
                instructions?: boolean | undefined
                calc_points?: boolean | undefined
                debug?: boolean | undefined
                points_encoded?: boolean | undefined
                'ch.disable'?: boolean | undefined
                weighting?: string | undefined
                heading?: number[] | undefined
                heading_penalty?: number | undefined
                pass_through?: boolean | undefined
                block_area?: string | undefined
                avoid?: string | undefined
                algorithm?: 'round_trip' | 'alternative_route' | undefined
                'round_trip.distance'?: number | undefined
                'round_trip.seed'?: bigint | undefined
                'alternative_route.max_paths'?: number | undefined
                'alternative_route.max_weight_factor'?: number | undefined
                'alternative_route.max_share_factor'?: number | undefined
              }
            }
            output: GHError
            outputFormat: 'json'
            status: 501
          }
      $post:
        | {
            input: { json: RouteRequest }
            output: RouteResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: RouteRequest }; output: GHError; outputFormat: 'json'; status: 400 }
        | { input: { json: RouteRequest }; output: GHError; outputFormat: 'json'; status: 401 }
        | { input: { json: RouteRequest }; output: GHError; outputFormat: 'json'; status: 429 }
        | { input: { json: RouteRequest }; output: GHError; outputFormat: 'json'; status: 500 }
        | { input: { json: RouteRequest }; output: GHError; outputFormat: 'json'; status: 501 }
    }
  } & {
    '/route/info': { $get: { input: {}; output: InfoResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/vrp': {
      $post:
        | { input: { json: Request }; output: Response; outputFormat: 'json'; status: 200 }
        | { input: { json: Request }; output: BadRequest; outputFormat: 'json'; status: 400 }
        | {
            input: { json: Request }
            output: InternalErrorMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/vrp/optimize': {
      $post:
        | { input: { json: Request }; output: JobId; outputFormat: 'json'; status: 200 }
        | { input: { json: Request }; output: BadRequest; outputFormat: 'json'; status: 400 }
        | {
            input: { json: Request }
            output: InternalErrorMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/vrp/solution/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } }
            output: Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { jobId: string } }
            output: { message?: string | undefined; status?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { jobId: string } }; output: {}; outputFormat: string; status: 500 }
    }
  },
  '/'
>
export default routes
