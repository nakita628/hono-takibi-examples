import { createRoute, z } from '@hono/zod-openapi'

const V2ObjectSchema = z.object({}).openapi('V2Object')

const V2VoidSchema = z.object({}).openapi('V2Void')

const V3StopDepartureRequestRouteDirectionSchema = z
  .object({
    direction_id: z
      .int32()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'Direction of travel identifier; values returned by Directions API - v3/directions',
      }),
    direction_name: z
      .string()
      .openapi({
        description:
          'Name of direction of travel; values returned by Directions API - v3/directions',
      }),
    route_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of route; values returned by Routes API - v3/routes' }),
  })
  .openapi({ required: ['direction_name'] })
  .openapi('V3StopDepartureRequestRouteDirection')

const V3StopDepartureRequestSchema = z
  .object({
    gtfs: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that stop_id parameter will accept "GTFS stop_id" data and route_directions[x].route_id parameters will accept route_gtfs_id data',
      }),
    max_results: z
      .int32()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'Maximum number of results returned' }),
    route_directions: z
      .array(V3StopDepartureRequestRouteDirectionSchema)
      .openapi({ description: 'The route directions to find departures for at this stop.' }),
    route_type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
      .exactOptional()
      .openapi({
        description: 'Number identifying transport mode; values returned via RouteTypes API',
      }),
    stop_id: z
      .int32()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'Identifier of stop; values returned by Stops API' }),
  })
  .openapi({ required: ['route_directions'] })
  .openapi('V3StopDepartureRequest')

const V3BulkDeparturesRequestSchema = z
  .object({
    date_utc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)',
      }),
    expand: z
      .array(
        z.enum([
          'All',
          'Stop',
          'Route',
          'Run',
          'Direction',
          'Disruption',
          'VehicleDescriptor',
          'VehiclePosition',
          'None',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption, none',
      }),
    include_cancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only',
      }),
    include_geopath: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the route geopath should be returned' }),
    look_backwards: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.',
      }),
    requests: z
      .array(V3StopDepartureRequestSchema)
      .openapi({ description: 'Collection of departure requests' }),
  })
  .openapi({ required: ['requests'] })
  .openapi('V3BulkDeparturesRequest')

const V3DirectionSchema = z
  .object({
    direction_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Direction of travel identifier' }),
    direction_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of direction of travel' }),
    route_id: z.int32().exactOptional().openapi({ description: 'Route identifier' }),
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
  })
  .openapi({ required: [] })
  .openapi('V3Direction')

const V3DisruptionDirectionSchema = z
  .object({
    direction_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Direction of travel identifier' }),
    direction_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of direction of travel' }),
    route_direction_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Route and direction of travel combination identifier' }),
    service_time: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time of service to which disruption applies, in 24 hour clock format (HH:MM:SS) AEDT/AEST; returns null if disruption applies to multiple (or no) services',
      }),
  })
  .openapi({ required: [] })
  .openapi('V3DisruptionDirection')

const V3DisruptionRouteSchema = z
  .object({
    direction: V3DisruptionDirectionSchema.exactOptional(),
    route_gtfs_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'GTFS Identifer of the route' }),
    route_id: z.int32().exactOptional().openapi({ description: 'Route identifier' }),
    route_name: z.string().exactOptional().openapi({ description: 'Name of route' }),
    route_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'Route number presented to public (i.e. not route_id)' }),
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
  })
  .openapi({ required: [] })
  .openapi('V3DisruptionRoute')

const V3DisruptionStopSchema = z
  .object({ stop_id: z.int32().exactOptional(), stop_name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('V3DisruptionStop')

const V3DisruptionSchema = z
  .object({
    colour: z.string().exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the disruption' }),
    display_on_board: z.boolean().exactOptional(),
    display_status: z.boolean().exactOptional(),
    disruption_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Disruption information identifier',
      }),
    disruption_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Status of the disruption (e.g. "Planned", "Current")' }),
    disruption_type: z.string().exactOptional().openapi({ description: 'Type of disruption' }),
    from_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time at which disruption begins, in ISO 8601 UTC format' }),
    last_updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time disruption information was last updated by PTV, in ISO 8601 UTC format',
      }),
    published_on: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time disruption information is published on PTV website, in ISO 8601 UTC format',
      }),
    routes: z
      .array(V3DisruptionRouteSchema)
      .exactOptional()
      .openapi({ description: 'Route relevant to a disruption (if applicable)' }),
    stops: z
      .array(V3DisruptionStopSchema)
      .exactOptional()
      .openapi({ description: 'Stop relevant to a disruption (if applicable)' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Headline title summarising disruption information' }),
    to_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time at which disruption ends, in ISO 8601 UTC format (returns null if unknown)',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of relevant article on PTV website' }),
  })
  .openapi({ required: [] })
  .openapi('V3Disruption')

const V3DepartureSchema = z
  .object({
    at_platform: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the metropolitan train service is at the platform at the time of query; returns false for other modes',
      }),
    departure_sequence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Chronological sequence for the departures in a run. Order ascendingly by this field to get chronological order (earliest first) of departures with the same run_ref. NOTE, this field is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4',
      }),
    direction_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Direction of travel identifier' }),
    disruption_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ description: 'Disruption information identifier(s)' }),
    estimated_departure_utc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Real-time estimate of departure time and date in ISO 8601 UTC format',
      }),
    flags: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Flag indicating special condition for run (e.g. RR Reservations Required, GC Guaranteed Connection, DOO Drop Off Only, PUO Pick Up Only, MO Mondays only, TU Tuesdays only, WE Wednesdays only, TH Thursdays only, FR Fridays only, SS School days only; ignore E flag)',
      }),
    platform_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Platform number at stop (metropolitan train only; returns null for other modes)',
      }),
    route_id: z.int32().exactOptional().openapi({ description: 'Route identifier' }),
    run_id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric',
        readOnly: true,
      }),
    run_ref: z
      .string()
      .exactOptional()
      .openapi({ description: 'Alphanumeric trip/service run identifier' }),
    scheduled_departure_utc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Scheduled (i.e. timetabled) departure time and date in ISO 8601 UTC format',
      }),
    stop_id: z.int32().exactOptional().openapi({ description: 'Stop identifier' }),
  })
  .openapi({ required: [] })
  .openapi('V3Departure')

const V3BulkDeparturesRouteDirectionResponseSchema = z
  .object({
    direction_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Direction of travel identifier' }),
    direction_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of direction of travel' }),
    route_id: z.string().exactOptional().openapi({ description: 'Route identifier' }),
  })
  .openapi({ required: [] })
  .openapi('V3BulkDeparturesRouteDirectionResponse')

const V3BulkDeparturesUpdateResponseSchema = z
  .object({
    departures: z
      .array(V3DepartureSchema)
      .exactOptional()
      .openapi({ description: 'Timetabled and real-time service departures' }),
    requested_route_direction: V3BulkDeparturesRouteDirectionResponseSchema.exactOptional(),
    route_direction: V3BulkDeparturesRouteDirectionResponseSchema.exactOptional(),
    route_direction_status: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          'The status of the route direction (changed | unchanged).\r\n            If changed, requests should change the requested_route_direction for the route_direction supplied.',
      }),
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
    stop_id: z.int32().exactOptional().openapi({ description: 'Stop identifier' }),
  })
  .openapi({ required: [] })
  .openapi('V3BulkDeparturesUpdateResponse')

const V3VehicleDescriptorSchema = z
  .object({
    air_conditioned: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicator if vehicle is air conditioned. May be null. Only available for some tram runs.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Vehicle description such as "6 Car Comeng", "6 Car Xtrapolis", "3 Car Comeng", "6 Car Siemens", "3 Car Siemens". May be null/empty.\r\n            Only available for some metropolitan train runs.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operator identifier of the vehicle such as "26094". May be null/empty. Only available for some tram and bus runs.',
      }),
    length: z
      .string()
      .exactOptional()
      .openapi({ description: 'The length of the vehicle. Applies to CIS - Metro Trains' }),
    low_floor: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicator if vehicle has a low floor. May be null. Only available for some tram runs.',
      }),
    operator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Operator name of the vehicle such as "Metro Trains Melbourne", "Yarra Trams", "Ventura Bus Line", "CDC" or "Sita Bus Lines" . May be null/empty.\r\n            Only available for train, tram, v/line and some bus runs.',
      }),
    supplier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Supplier of vehicle descriptor data.' }),
  })
  .openapi({ required: [] })
  .openapi('V3VehicleDescriptor')

const V3VehiclePositionSchema = z
  .object({
    bearing: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Compass bearing of the vehicle when known, clockwise from True North, i.e., 0 is North and 90 is East. May be null.\r\n            Only available for some bus runs.',
      }),
    datetime_utc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time that the vehicle position data was supplied.' }),
    direction: z
      .string()
      .exactOptional()
      .openapi({ description: 'CIS - Metro Train Vehicle Location Direction' }),
    easting: z
      .float64()
      .exactOptional()
      .openapi({ description: 'CIS - Metro Train Vehicle Location Easting coordinate' }),
    expiry_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'CIS - Metro Train Vehicle Location data expiry time' }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Geographic coordinate of latitude of the vehicle when known. May be null.\r\n            Only available for some bus runs.',
      }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Geographic coordinate of longitude of the vehicle when known. \r\n            Only available for some bus runs.',
      }),
    northing: z
      .float64()
      .exactOptional()
      .openapi({ description: 'CIS - Metro Train Vehicle Location Northing coordinate' }),
    supplier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Supplier of vehicle position data.' }),
  })
  .openapi({ required: [] })
  .openapi('V3VehiclePosition')

const V3RunSchema = z
  .object({
    destination_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of destination of run' }),
    direction_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Direction of travel identifier' }),
    express_stop_count: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of remaining skipped/express stations for the run/service from a stop',
      }),
    final_stop_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'stop_id of final stop of run' }),
    geopath: z
      .array(V2ObjectSchema)
      .exactOptional()
      .openapi({ description: 'Geopath of the route' }),
    route_id: z.int32().exactOptional().openapi({ description: 'Route identifier' }),
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
    run_id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric',
        readOnly: true,
      }),
    run_ref: z
      .string()
      .exactOptional()
      .openapi({ description: 'Alphanumeric trip/service run identifier' }),
    run_sequence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Chronological sequence of the trip/service run on the route in direction. Order ascendingly by this field to get chronological order (earliest first) of runs with the same route_id and direction_id.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Status of metropolitan train run; returns "scheduled" for other modes',
      }),
    vehicle_descriptor: V3VehicleDescriptorSchema.exactOptional(),
    vehicle_position: V3VehiclePositionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3Run')

const V3StatusSchema = z
  .object({
    health: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ description: 'API system health status (0=offline, 1=online)' }),
    version: z.string().exactOptional().openapi({ description: 'API Version number' }),
  })
  .openapi({ required: [] })
  .openapi('V3Status')

const V3BulkDeparturesStopResponseSchema = z
  .object({
    stop_id: z.int32().exactOptional().openapi({ description: 'Stop identifier' }),
    stop_landmark: z
      .string()
      .exactOptional()
      .openapi({ description: 'Landmark in proximity of stop' }),
    stop_latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of latitude at stop' }),
    stop_longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of longitude at stop' }),
    stop_name: z.string().exactOptional().openapi({ description: 'Name of stop' }),
    stop_suburb: z.string().exactOptional().openapi({ description: 'suburb of stop' }),
  })
  .openapi({ required: [] })
  .openapi('V3BulkDeparturesStopResponse')

const V3BulkDeparturesResponseSchema = z
  .object({
    directions: z
      .array(V3DirectionSchema)
      .exactOptional()
      .openapi({ description: 'Directions of travel of route' }),
    disruptions: z
      .record(z.string(), V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Disruption information applicable to relevant routes or stops' }),
    responses: z
      .array(V3BulkDeparturesUpdateResponseSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains departures for the requested stop and route(s). It includes details as to the route_direction and whether it is still valid.',
      }),
    routes: z
      .array(V2ObjectSchema)
      .exactOptional()
      .openapi({
        description:
          'Train lines, tram routes, bus routes, regional coach routes, Night Bus routes',
      }),
    runs: z
      .array(V3RunSchema)
      .exactOptional()
      .openapi({ description: 'Individual trips/services of a route' }),
    status: V3StatusSchema.exactOptional(),
    stops: z
      .record(z.string(), V3BulkDeparturesStopResponseSchema)
      .exactOptional()
      .openapi({
        description: 'A train station, tram stop, bus stop, regional coach stop or Night Bus stop',
      }),
  })
  .openapi({ required: [] })
  .openapi('V3BulkDeparturesResponse')

const V3DeparturesBroadParametersSchema = z
  .object({
    date_utc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)',
      }),
    direction_id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}',
      }),
    expand: z
      .array(
        z.enum([
          'All',
          'Stop',
          'Route',
          'Run',
          'Direction',
          'Disruption',
          'VehicleDescriptor',
          'VehiclePosition',
          'None',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.\r\n            Run must be expanded to receive VehiclePosition and VehicleDescriptor information.',
      }),
    gtfs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates that stop_id parameter will accept "GTFS stop_id" data' }),
    include_cancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only',
      }),
    include_geopath: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the route geopath should be returned' }),
    look_backwards: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.',
      }),
    max_results: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of results returned' }),
    platform_numbers: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'Filter by platform number at stop' }),
  })
  .openapi({ required: [] })
  .openapi('V3DeparturesBroadParameters')

const V3StopModelSchema = z
  .object({
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
    stop_distance: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Distance of stop from input location (in metres); returns 0 if no location is input',
      }),
    stop_id: z.int32().exactOptional().openapi({ description: 'Stop identifier' }),
    stop_landmark: z
      .string()
      .exactOptional()
      .openapi({ description: 'Landmark in proximity of stop' }),
    stop_latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of latitude at stop' }),
    stop_longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of longitude at stop' }),
    stop_name: z.string().exactOptional().openapi({ description: 'Name of stop' }),
    stop_sequence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.',
      }),
    stop_suburb: z.string().exactOptional().openapi({ description: 'suburb of stop' }),
  })
  .openapi({ required: [] })
  .openapi('V3StopModel')

const V3DeparturesResponseSchema = z
  .object({
    departures: z
      .array(V3DepartureSchema)
      .exactOptional()
      .openapi({ description: 'Timetabled and real-time service departures' }),
    directions: z
      .record(z.string(), V3DirectionSchema)
      .exactOptional()
      .openapi({ description: 'Directions of travel of route' }),
    disruptions: z
      .record(z.string(), V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Disruption information applicable to relevant routes or stops' }),
    routes: z
      .record(z.string(), V2ObjectSchema)
      .exactOptional()
      .openapi({
        description:
          'Train lines, tram routes, bus routes, regional coach routes, Night Bus routes',
      }),
    runs: z
      .record(z.string(), V3RunSchema)
      .exactOptional()
      .openapi({ description: 'Individual trips/services of a route' }),
    status: V3StatusSchema.exactOptional(),
    stops: z
      .record(z.string(), V3StopModelSchema)
      .exactOptional()
      .openapi({
        description: 'A train station, tram stop, bus stop, regional coach stop or Night Bus stop',
      }),
  })
  .openapi({ required: [] })
  .openapi('V3DeparturesResponse')

const V3DeparturesSpecificParametersSchema = z
  .object({
    date_utc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)',
      }),
    direction_id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}',
      }),
    expand: z
      .array(
        z.enum([
          'All',
          'Stop',
          'Route',
          'Run',
          'Direction',
          'Disruption',
          'VehicleDescriptor',
          'VehiclePosition',
          'None',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.\r\n            Run must be expanded to receive VehiclePosition and VehicleDescriptor information.',
      }),
    gtfs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates that stop_id parameter will accept "GTFS stop_id" data' }),
    include_cancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only',
      }),
    include_geopath: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the route geopath should be returned' }),
    look_backwards: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.',
      }),
    max_results: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of results returned' }),
  })
  .openapi({ required: [] })
  .openapi('V3DeparturesSpecificParameters')

const V3DirectionWithDescriptionSchema = z
  .object({
    direction_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Direction of travel identifier' }),
    direction_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of direction of travel' }),
    route_direction_description: z.string().exactOptional(),
    route_id: z.int32().exactOptional().openapi({ description: 'Route identifier' }),
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
  })
  .openapi({ required: [] })
  .openapi('V3DirectionWithDescription')

const V3DirectionsResponseSchema = z
  .object({
    directions: z
      .array(V3DirectionWithDescriptionSchema)
      .exactOptional()
      .openapi({ description: 'Directions of travel of route' }),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3DirectionsResponse')

const V3DisruptionModeSchema = z
  .object({
    disruption_mode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Disruption mode identifier' }),
    disruption_mode_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of disruption mode' }),
  })
  .openapi({ required: [] })
  .openapi('V3DisruptionMode')

const V3DisruptionModesResponseSchema = z
  .object({
    disruption_modes: z
      .array(V3DisruptionModeSchema)
      .exactOptional()
      .openapi({ description: 'Transport mode identifiers' }),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3DisruptionModesResponse')

const V3DisruptionResponseSchema = z
  .object({
    disruption: V3DisruptionSchema.exactOptional(),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3DisruptionResponse')

const V3DisruptionsSchema = z
  .object({
    ferry: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to ferry' }),
    general: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({
        description: 'Subset of disruption information applicable to multiple route_types',
      }),
    interstate_train: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to interstate train' }),
    metro_bus: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to metropolitan bus' }),
    metro_train: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({
        description: 'Subset of disruption information applicable to metropolitan train',
      }),
    metro_tram: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to metropolitan tram' }),
    night_bus: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to night bus' }),
    regional_bus: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to regional bus' }),
    regional_coach: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to V/Line coach' }),
    regional_train: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to V/Line train' }),
    school_bus: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to school bus' }),
    skybus: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to skybus' }),
    taxi: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to taxi' }),
    telebus: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Subset of disruption information applicable to telebus services' }),
  })
  .openapi({ required: [] })
  .openapi('V3Disruptions')

const V3DisruptionsResponseSchema = z
  .object({
    disruptions: V3DisruptionsSchema.exactOptional(),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3DisruptionsResponse')

const V3DynamoDbTimetableSchema = z
  .object({
    applicable_local_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Formated date string of applicable date', readOnly: true }),
    exists: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the named table has been created in DynamoDB (i.e. at least one departure record has been loaded),\r\n            or false if there are no records for this date and transport type.',
      }),
    parser_mapping_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Diva Mapping Version used to load Parser into DynamoDB' }),
    parser_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'Parser verison' }),
    pt_mapping_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Diva Mapping Version used to load PT into DynamoDB' }),
    pt_version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'PT version' }),
    table_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of corresponding table in DynamoDB.' }),
    transport_type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
      .exactOptional()
      .openapi({
        description: 'A.k.a. Transport Mode (e.g. Train, Tram, Bus, V/Line, Nightrider)',
      }),
  })
  .openapi({ required: [] })
  .openapi('V3DynamoDbTimetable')

const V3DynamoDbTimetablesReponseSchema = z
  .object({
    status: V3StatusSchema.exactOptional(),
    timetables: z.array(V3DynamoDbTimetableSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3DynamoDbTimetablesReponse')

const V3ErrorResponseSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'Error message' }),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ description: 'An error response', required: [] })
  .openapi('V3ErrorResponse')

const V3FareEstimateResponseSchema = z.any().openapi('V3FareEstimateResponse')

const V3GenerateDivaMappingResponseSchema = z
  .object({
    mapping_version: z.string().exactOptional().openapi({ readOnly: true }),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3GenerateDivaMappingResponse')

const V3OutletSchema = z
  .object({
    outlet_business: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business name of the outlet' }),
    outlet_business_hour_fri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Friday' }),
    outlet_business_hour_mon: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Monday' }),
    outlet_business_hour_sat: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Saturday' }),
    outlet_business_hour_sun: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Sunday' }),
    outlet_business_hour_thur: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Thursday' }),
    outlet_business_hour_tue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Tuesday' }),
    outlet_business_hour_wed: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Wednesday' }),
    outlet_latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of latitude at outlet' }),
    outlet_longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of longitude at outlet' }),
    outlet_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location name of the outlet' }),
    outlet_notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty.",
      }),
    outlet_postcode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The postcode for the outlet' }),
    outlet_slid_spid: z.string().exactOptional().openapi({ description: 'The SLID / SPID' }),
    outlet_suburb: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city/municipality the outlet is in' }),
  })
  .openapi({ required: [] })
  .openapi('V3Outlet')

const V3OutletGeolocationSchema = z
  .object({
    outlet_business: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business name of the outlet' }),
    outlet_business_hour_fri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Friday' }),
    outlet_business_hour_mon: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Monday' }),
    outlet_business_hour_sat: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Saturday' }),
    outlet_business_hour_sun: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Sunday' }),
    outlet_business_hour_thur: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Thursday' }),
    outlet_business_hour_tue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Tuesday' }),
    outlet_business_hour_wed: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Wednesday' }),
    outlet_distance: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Distance of outlet from input location (in metres); returns 0 if no location is input',
      }),
    outlet_latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of latitude at outlet' }),
    outlet_longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of longitude at outlet' }),
    outlet_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location name of the outlet' }),
    outlet_notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty.",
      }),
    outlet_postcode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The postcode for the outlet' }),
    outlet_slid_spid: z.string().exactOptional().openapi({ description: 'The SLID / SPID' }),
    outlet_suburb: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city/municipality the outlet is in' }),
  })
  .openapi({ required: [] })
  .openapi('V3OutletGeolocation')

const V3OutletGeolocationParametersSchema = z
  .object({
    max_distance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)',
      }),
    max_results: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of results returned (default = 30)' }),
  })
  .openapi({ required: [] })
  .openapi('V3OutletGeolocationParameters')

const V3OutletGeolocationResponseSchema = z
  .object({
    outlets: z
      .array(V3OutletGeolocationSchema)
      .exactOptional()
      .openapi({ description: 'myki ticket outlets' }),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3OutletGeolocationResponse')

const V3OutletParametersSchema = z
  .object({
    max_results: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of results returned (default = 30)' }),
  })
  .openapi({ required: [] })
  .openapi('V3OutletParameters')

const V3OutletResponseSchema = z
  .object({
    outlets: z
      .array(V3OutletSchema)
      .exactOptional()
      .openapi({ description: 'myki ticket outlets' }),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3OutletResponse')

const V3PatternDepartureSchema = z
  .object({
    at_platform: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the metropolitan train service is at the platform at the time of query; returns false for other modes',
      }),
    departure_sequence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Chronological sequence for the departures in a run. Order ascendingly by this field to get chronological order (earliest first) of departures with the same run_ref. NOTE, this field is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4',
      }),
    direction_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Direction of travel identifier' }),
    disruption_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ description: 'Disruption information identifier(s)' }),
    estimated_departure_utc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Real-time estimate of departure time and date in ISO 8601 UTC format',
      }),
    flags: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Flag indicating special condition for run (e.g. RR Reservations Required, GC Guaranteed Connection, DOO Drop Off Only, PUO Pick Up Only, MO Mondays only, TU Tuesdays only, WE Wednesdays only, TH Thursdays only, FR Fridays only, SS School days only; ignore E flag)',
      }),
    platform_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Platform number at stop (metropolitan train only; returns null for other modes)',
      }),
    route_id: z.int32().exactOptional().openapi({ description: 'Route identifier' }),
    run_id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric',
        readOnly: true,
      }),
    run_ref: z
      .string()
      .exactOptional()
      .openapi({ description: 'Alphanumeric trip/service run identifier' }),
    scheduled_departure_utc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Scheduled (i.e. timetabled) departure time and date in ISO 8601 UTC format',
      }),
    skipped_stops: z
      .array(V3StopModelSchema)
      .exactOptional()
      .openapi({
        description: 'The stops to be skipped following the current departure in order.',
      }),
    stop_id: z.int32().exactOptional().openapi({ description: 'Stop identifier' }),
  })
  .openapi({ required: [] })
  .openapi('V3PatternDeparture')

const V3ResultOutletSchema = z
  .object({
    outlet_business: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business name of the outlet' }),
    outlet_business_hour_fri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Friday' }),
    outlet_business_hour_mon: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Monday' }),
    outlet_business_hour_sat: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Saturday' }),
    outlet_business_hour_sun: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Sunday' }),
    outlet_business_hour_thur: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Thursday' }),
    outlet_business_hour_tue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Tuesday' }),
    outlet_business_hour_wed: z
      .string()
      .exactOptional()
      .openapi({ description: 'The business hours on Wednesday' }),
    outlet_distance: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Distance of outlet from input location (in metres); returns 0 if no location is input',
      }),
    outlet_latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of latitude at outlet' }),
    outlet_longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of longitude at outlet' }),
    outlet_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location name of the outlet' }),
    outlet_notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty.",
      }),
    outlet_postcode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The postcode for the outlet' }),
    outlet_slid_spid: z.string().exactOptional().openapi({ description: 'The SLID / SPID' }),
    outlet_suburb: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city/municipality the outlet is in' }),
  })
  .openapi({ required: [] })
  .openapi('V3ResultOutlet')

const V3RouteServiceStatusSchema = z
  .object({
    description: z.string().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3RouteServiceStatus')

const V3ResultRouteSchema = z
  .object({
    route_gtfs_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'GTFS Identifer of the route' }),
    route_id: z.int32().exactOptional().openapi({ description: 'Route identifier' }),
    route_name: z.string().exactOptional().openapi({ description: 'Name of route' }),
    route_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'Route number presented to public (nb. not route_id)' }),
    route_service_status: V3RouteServiceStatusSchema.exactOptional(),
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
  })
  .openapi({ required: [] })
  .openapi('V3ResultRoute')

const V3ResultStopSchema = z
  .object({
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
    routes: z
      .array(V3ResultRouteSchema)
      .exactOptional()
      .openapi({ description: 'List of routes travelling through the stop' }),
    stop_distance: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Distance of stop from input location (in metres); returns 0 if no location is input',
      }),
    stop_id: z.int32().exactOptional().openapi({ description: 'Stop identifier' }),
    stop_landmark: z
      .string()
      .exactOptional()
      .openapi({ description: 'Landmark in proximity of stop' }),
    stop_latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of latitude at stop' }),
    stop_longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of longitude at stop' }),
    stop_name: z.string().exactOptional().openapi({ description: 'Name of stop' }),
    stop_sequence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.',
      }),
    stop_suburb: z.string().exactOptional().openapi({ description: 'suburb of stop' }),
  })
  .openapi({ required: [] })
  .openapi('V3ResultStop')

const V3RouteDeparturesSpecificParametersSchema = z
  .object({
    date_utc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)',
      }),
    expand: z
      .array(
        z.enum([
          'All',
          'Stop',
          'Route',
          'Run',
          'Direction',
          'Disruption',
          'VehicleDescriptor',
          'VehiclePosition',
          'None',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.\r\n            Run must be expanded to receive VehiclePosition and VehicleDescriptor information.',
      }),
    include_cancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only',
      }),
    include_geopath: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the route geopath should be returned' }),
    look_backwards: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.',
      }),
    max_results: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of results returned' }),
    scheduled_timetables: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When set to true, all timetable information returned by Chronos will be sourced from the scheduled timetables,\r\n            while when set to false (default state), the operational timetables will be used where available.',
      }),
    train_scheduled_timetables: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'DEPRECATED - use `scheduled_timetables` instead' }),
  })
  .openapi({ required: [] })
  .openapi('V3RouteDeparturesSpecificParameters')

const V3RouteResponseSchema = z
  .object({ route: V2ObjectSchema.exactOptional(), status: V3StatusSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('V3RouteResponse')

const V3RouteTypeSchema = z
  .object({
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
    route_type_name: z.string().exactOptional().openapi({ description: 'Name of transport mode' }),
  })
  .openapi({ required: [] })
  .openapi('V3RouteType')

const V3RouteTypesResponseSchema = z
  .object({
    route_types: z
      .array(V3RouteTypeSchema)
      .exactOptional()
      .openapi({ description: 'Transport mode identifiers' }),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3RouteTypesResponse')

const V3RunResponseSchema = z
  .object({ run: V3RunSchema.exactOptional(), status: V3StatusSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('V3RunResponse')

const V3RunsResponseSchema = z
  .object({
    runs: z
      .array(V3RunSchema)
      .exactOptional()
      .openapi({ description: 'Individual trips/services of a route' }),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3RunsResponse')

const V3SearchParametersSchema = z
  .object({
    include_addresses: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Placeholder for future development; currently unavailable' }),
    include_outlets: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if outlets will be returned in response (default = true)',
      }),
    latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Filter by geographic coordinate of latitude' }),
    longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Filter by geographic coordinate of longitude' }),
    match_route_by_suburb: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to find routes by suburbs in the search term (default = true)',
      }),
    match_stop_by_gtfs_stop_id: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to search for stops according to a metlink stop ID (default = false)',
      }),
    match_stop_by_suburb: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to find stops by suburbs in the search term (default = true)',
      }),
    max_distance: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Filter by maximum distance (in metres) from location specified via latitude and longitude parameters',
      }),
    route_types: z
      .array(z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]))
      .exactOptional()
      .openapi({
        description:
          'Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified)',
      }),
  })
  .openapi({ required: [] })
  .openapi('V3SearchParameters')

const V3SearchResultSchema = z
  .object({
    outlets: z
      .array(V3ResultOutletSchema)
      .exactOptional()
      .openapi({ description: 'myki ticket outlets' }),
    routes: z
      .array(V3ResultRouteSchema)
      .exactOptional()
      .openapi({
        description:
          'Train lines, tram routes, bus routes, regional coach routes, Night Bus routes',
      }),
    status: V3StatusSchema.exactOptional(),
    stops: z
      .array(V3ResultStopSchema)
      .exactOptional()
      .openapi({
        description:
          'Train stations, tram stops, bus stops, regional coach stops or Night Bus stops',
      }),
  })
  .openapi({ required: [] })
  .openapi('V3SearchResult')

const V3SiriReferenceDataDetailSchema = z
  .object({
    direction_id: z.int32().exactOptional(),
    route_id: z.int32().exactOptional(),
    route_number_short: z.string().exactOptional().openapi({ description: 'Route number' }),
    route_type: z.int32().exactOptional(),
    tracking_supplier_id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Authority (Upstream SIRI provider) of a route and direction' }),
  })
  .openapi({ required: [] })
  .openapi('V3SiriReferenceDataDetail')

const V3SiriStopsRefsDictionarySchema = z
  .object({
    stop_point_refs: z
      .record(z.string(), V3SiriReferenceDataDetailSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    unmatched_stop_point_refs: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('V3SiriStopsRefsDictionary')

const V3SiriDirectionRefsDictionarySchema = z
  .object({
    direction_refs: z
      .record(z.string(), V3SiriStopsRefsDictionarySchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('V3SiriDirectionRefsDictionary')

const V3SiriDownstreamSubscriptionTopicSchema = z
  .object({
    direction_ref: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(5),
        z.literal(10),
        z.literal(16),
        z.literal(32),
        z.literal(65),
        z.literal(130),
      ])
      .exactOptional(),
    line_ref: z.string().exactOptional(),
    route_type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3SiriDownstreamSubscriptionTopic')

const V3SiriDownstreamSubscriptionSchema = z
  .object({
    consumer_address: z.string().exactOptional(),
    initial_termination_time: z.iso.datetime({ offset: true }).exactOptional(),
    message_type: z.union([z.literal(0), z.literal(1)]).exactOptional(),
    preview_interval: z.string().exactOptional(),
    siri_format: z.union([z.literal(0), z.literal(1)]).exactOptional(),
    siri_version: z
      .string()
      .regex(/1.3|2.0/)
      .exactOptional(),
    subscriber_ref: z.string().exactOptional(),
    subscription_ref: z.string().exactOptional(),
    topics: z.array(V3SiriDownstreamSubscriptionTopicSchema).exactOptional(),
    validity_period_end: z.iso.datetime({ offset: true }).exactOptional(),
    validity_period_start: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3SiriDownstreamSubscription')

const V3SiriDownstreamSubscriptionDeleteRequestSchema = z
  .object({
    subscriber_ref: z.string().openapi({ description: 'Siri Subscriber Ref' }),
    subscription_ref: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Siri Subscription Reference(s) - Unique to a Subscriber Ref.\r\n            If `null`, then all subscriptions will be terminated for the referenced Subscriber.',
      }),
  })
  .openapi({ required: ['subscriber_ref'] })
  .openapi('V3SiriDownstreamSubscriptionDeleteRequest')

const V3SiriDownstreamSubscriptionResponseSchema = z
  .object({
    valid_until: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The Data Horizon of Chronos' }),
  })
  .openapi({ required: [] })
  .openapi('V3SiriDownstreamSubscriptionResponse')

const V3SiriSubscriptionTopicSchema = z
  .object({
    direction_ref: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(5),
        z.literal(10),
        z.literal(16),
        z.literal(32),
        z.literal(65),
        z.literal(130),
      ])
      .exactOptional()
      .openapi({
        description:
          'Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound)',
      }),
    line_ref: z.string().openapi({ description: 'Siri LineRef' }),
    route_type: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
      .openapi({
        description: 'Route Type eg. 0 (Train) 1 (Tram) 2 (Bus) 3 (Vline) 4 (NightRider)',
      }),
  })
  .openapi({ required: ['line_ref', 'route_type'] })
  .openapi('V3SiriSubscriptionTopic')

const V3SiriEstimatedTimetableSubscriptionRequestSchema = z
  .object({
    consumer_address: z
      .string()
      .openapi({
        description: 'Siri Consumer Address - Baseline and Updates will be sent to this address',
      }),
    initial_termination_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Siri Initial Termination Time - Expiry of the subscription' }),
    preview_interval: z.string().openapi({ description: 'Siri Preview Interval' }),
    siri_format: z
      .union([z.literal(0), z.literal(1)])
      .openapi({ description: "Siri Message Format 'xml' or 'json'" }),
    siri_version: z
      .string()
      .regex(/1.3|2.0/)
      .openapi({ description: "Siri Message Version '1.3' or '2.0'" }),
    subscriber_ref: z.string().openapi({ description: 'Siri Subscriber Ref' }),
    subscription_ref: z
      .string()
      .openapi({ description: 'Siri Subscription Ref - Unique to a Subscriber Ref' }),
    topics: z.array(V3SiriSubscriptionTopicSchema),
  })
  .openapi({
    required: [
      'preview_interval',
      'subscriber_ref',
      'subscription_ref',
      'siri_format',
      'siri_version',
      'consumer_address',
      'initial_termination_time',
      'topics',
    ],
  })
  .openapi('V3SiriEstimatedTimetableSubscriptionRequest')

const V3SiriLineRefSchema = z
  .object({
    direction_ref: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(5),
        z.literal(10),
        z.literal(16),
        z.literal(32),
        z.literal(65),
        z.literal(130),
      ])
      .exactOptional()
      .openapi({
        description:
          'Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound)',
      }),
    line_ref: z.string().openapi({ description: 'Siri LineRef' }),
  })
  .openapi({ required: ['line_ref'] })
  .openapi('V3SiriLineRef')

const V3SiriLineRefDirectionRefStopPointRefSchema = z
  .object({
    direction_ref: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(5),
        z.literal(10),
        z.literal(16),
        z.literal(32),
        z.literal(65),
        z.literal(130),
      ])
      .openapi({
        description:
          'Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound)',
      }),
    line_ref: z.string().openapi({ description: 'Siri LineRef' }),
    stop_point_ref: z.int32().openapi({ description: 'Siri StopPointRef' }),
  })
  .openapi({ required: ['line_ref', 'direction_ref', 'stop_point_ref'] })
  .openapi('V3SiriLineRefDirectionRefStopPointRef')

const V3SiriLineRefDirectionRefsDictionarySchema = z
  .object({
    direction_refs: z.record(z.string(), z.array(V3SiriReferenceDataDetailSchema)).exactOptional(),
    unmatched_direction_refs: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3SiriLineRefDirectionRefsDictionary')

const V3SiriLineRefMappingsResponseSchema = z
  .object({
    line_refs: z.record(z.string(), V3SiriLineRefDirectionRefsDictionarySchema).exactOptional(),
    mapping_version: z.string().exactOptional().openapi({ readOnly: true }),
    status: V3StatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3SiriLineRefMappingsResponse')

const V3SiriLineRefsRequestSchema = z
  .object({
    line_refs: z.array(V3SiriLineRefSchema).exactOptional(),
    mapping_version: z
      .string()
      .openapi({
        description:
          'DIVA mapping version generated by Chronos during a Parser or RealtimeBusConfig load',
      }),
  })
  .openapi({ required: ['mapping_version'] })
  .openapi('V3SiriLineRefsRequest')

const V3SiriProductionTimetableSubscriptionRequestSchema = z
  .object({
    consumer_address: z
      .string()
      .openapi({
        description: 'Siri Consumer Address - Baseline and Updates will be sent to this address',
      }),
    end_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Siri End Time of the Validity Period' }),
    initial_termination_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Siri Initial Termination Time - Expiry of the subscription' }),
    siri_format: z
      .union([z.literal(0), z.literal(1)])
      .openapi({ description: "Siri Message Format 'xml' or 'json'" }),
    siri_version: z
      .string()
      .regex(/1.3|2.0/)
      .openapi({ description: "Siri Message Version '1.3' or '2.0'" }),
    start_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Siri Start Time of the Validity Period' }),
    subscriber_ref: z.string().openapi({ description: 'Siri Subscriber Ref' }),
    subscription_ref: z
      .string()
      .openapi({ description: 'Siri Subscription Ref - Unique to a Subscriber Ref' }),
    topics: z.array(V3SiriSubscriptionTopicSchema),
  })
  .openapi({
    required: [
      'start_time',
      'end_time',
      'subscriber_ref',
      'subscription_ref',
      'siri_format',
      'siri_version',
      'consumer_address',
      'initial_termination_time',
      'topics',
    ],
  })
  .openapi('V3SiriProductionTimetableSubscriptionRequest')

const V3StopPointSchema = z
  .object({ stop_id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('V3StopPoint')

const V3SiriReferenceDataMappingsResponseSchema = z
  .object({
    line_refs: z
      .record(z.string(), V3SiriDirectionRefsDictionarySchema)
      .exactOptional()
      .openapi({ description: 'SIRI LineRef', readOnly: true }),
    mapping_version: z.string().exactOptional().openapi({ readOnly: true }),
    status: V3StatusSchema.exactOptional(),
    stop_point_refs: z
      .record(z.string(), V3StopPointSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('V3SiriReferenceDataMappingsResponse')

const V3SiriReferenceDataRequestSchema = z
  .object({
    date_utc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)',
      }),
    line_refs: z.array(V3SiriLineRefDirectionRefStopPointRefSchema),
    mapping_version: z
      .string()
      .openapi({
        description:
          'DIVA mapping version generated by Chronos during a Parser or RealtimeBusConfig load',
      }),
    stop_point_refs: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'Siri StopPointRef' }),
  })
  .openapi({ required: ['line_refs', 'mapping_version'] })
  .openapi('V3SiriReferenceDataRequest')

const V3StopAccessibilityWheelchairSchema = z
  .object({
    accessible_ramp: z.boolean().exactOptional(),
    low_ticket_counter: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if there is at least one low ticket counter at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)',
      }),
    manouvering: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if there is a space for mobility device to board on or off a transport mode',
      }),
    parking: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if there is at least one accessible parking spot at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)',
      }),
    raised_platform: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there is a raised platform to board a train' }),
    raised_platform_shelther: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there is shelter near the raised platform' }),
    ramp: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are ramps (&lt;1:14) at the stop/platform' }),
    secondary_path: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there is a path beyond the stop which is accessible' }),
    steep_ramp: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are ramps (&gt;1:14) at the stop/platform' }),
    telephone: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if there is at least one accessible telephone at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)',
      }),
    toilet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if there is at least one accessible toilet at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)',
      }),
  })
  .openapi({ required: [] })
  .openapi('V3StopAccessibilityWheelchair')

const V3StopAccessibilitySchema = z
  .object({
    audio_customer_information: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if there is at least one audio customer information at the stop/platform',
      }),
    escalator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if there is at least one accessible escalator at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992)',
      }),
    hearing_loop: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if there is a hearing loop facility at the stop/platform',
      }),
    lift: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there is an elevator at the stop/platform' }),
    lighting: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there is lighting at the stop' }),
    platform_number: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Indicates the platform number for xivic information (Platform 0 indicates general stop facilities)',
      }),
    stairs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are stairs available in the stop' }),
    stop_accessible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the stop is accessible' }),
    tactile_ground_surface_indicator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if there are tactile tiles (also known as tactile ground surface indicators, or TGSIs) at the stop',
      }),
    waiting_room: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there is a general waiting area at the stop' }),
    wheelchair: V3StopAccessibilityWheelchairSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3StopAccessibility')

const V3StopAmenityDetailsSchema = z
  .object({
    car_parking: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of free car parking spots at the stop' }),
    cctv: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if there are CCTV (i.e. closed circuit television) cameras at the stop',
      }),
    taxi_rank: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there is a taxi rank at or near the stop' }),
    toilet: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there is a public toilet at or near the stop' }),
  })
  .openapi({ required: [] })
  .openapi('V3StopAmenityDetails')

const V3StopBasicSchema = z
  .object({ stop_id: z.int32().exactOptional(), stop_name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('V3StopBasic')

const V3StopGpsSchema = z
  .object({
    latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of latitude at stop' }),
    longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of longitude at stop' }),
  })
  .openapi({ required: [] })
  .openapi('V3StopGps')

const V3StopLocationSchema = z
  .object({ gps: V3StopGpsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('V3StopLocation')

const V3StopStaffingSchema = z
  .object({
    fri_am_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    fri_am_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    fri_pm_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    fri_pm_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    mon_am_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    mon_am_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    mon_pm_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    mon_pm_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    ph_additional_text: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    ph_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    ph_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    sat_am_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    sat_am_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    sat_pm_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    sat_pm_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    sun_am_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    sun_am_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    sun_pm_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    sun_pm_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    thu_am_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    thu_am_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    thu_pm_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    thu_pm_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    tue_am_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    tue_am_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    tue_pm_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    tue_pm_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    wed_am_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    wed_am_to: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    wed_pm_To: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
    wed_pm_from: z.string().exactOptional().openapi({ description: 'Stop staffing hours' }),
  })
  .openapi({ required: [] })
  .openapi('V3StopStaffing')

const V3StopDetailsSchema = z
  .object({
    disruption_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ description: 'Disruption information identifier(s)' }),
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
    routes: z
      .array(V2ObjectSchema)
      .exactOptional()
      .openapi({ description: 'Routes travelling through the stop' }),
    station_description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The definition applicable to the station_type; returns null for V/Line train',
      }),
    station_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of metropolitan train station (i.e. "Premium", "Host" or "Unstaffed" station); returns null for V/Line train',
      }),
    stop_accessibility: V3StopAccessibilitySchema.exactOptional(),
    stop_amenities: V3StopAmenityDetailsSchema.exactOptional(),
    stop_id: z.int32().exactOptional().openapi({ description: 'Stop identifier' }),
    stop_landmark: z
      .string()
      .exactOptional()
      .openapi({ description: 'Landmark in proximity of stop' }),
    stop_location: V3StopLocationSchema.exactOptional(),
    stop_name: z.string().exactOptional().openapi({ description: 'Name of stop' }),
    stop_staffing: V3StopStaffingSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3StopDetails')

const V3StopGeosearchSchema = z
  .object({
    disruption_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ description: 'Disruption information identifier(s)' }),
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
    routes: z
      .array(V2ObjectSchema)
      .exactOptional()
      .openapi({ description: 'List of routes travelling through the stop' }),
    stop_distance: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Distance of stop from input location (in metres); returns 0 if no location is input',
      }),
    stop_id: z.int32().exactOptional().openapi({ description: 'Stop identifier' }),
    stop_landmark: z
      .string()
      .exactOptional()
      .openapi({ description: 'Landmark in proximity of stop' }),
    stop_latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of latitude at stop' }),
    stop_longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of longitude at stop' }),
    stop_name: z.string().exactOptional().openapi({ description: 'Name of stop' }),
    stop_sequence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.',
      }),
    stop_suburb: z.string().exactOptional().openapi({ description: 'suburb of stop' }),
  })
  .openapi({ required: [] })
  .openapi('V3StopGeosearch')

const V3StopTicketSchema = z
  .object({
    is_free_fare_zone: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the stop is inside the free fare zone' }),
    ticket_checks: z.boolean().exactOptional(),
    ticket_machine: z.boolean().exactOptional(),
    ticket_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates the ticket type for the stop (myki, paper or both)' }),
    ticket_zones: z.array(z.int32()).exactOptional(),
    vline_reservation: z.boolean().exactOptional(),
    zone: z.string().exactOptional().openapi({ description: 'Description of the zone' }),
  })
  .openapi({ required: [] })
  .openapi('V3StopTicket')

const V3StopOnRouteSchema = z
  .object({
    disruption_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ description: 'Disruption information identifier(s)' }),
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
    stop_id: z.int32().exactOptional().openapi({ description: 'Stop identifier' }),
    stop_landmark: z
      .string()
      .exactOptional()
      .openapi({ description: 'Landmark in proximity of stop' }),
    stop_latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of latitude at stop' }),
    stop_longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of longitude at stop' }),
    stop_name: z.string().exactOptional().openapi({ description: 'Name of stop' }),
    stop_sequence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.',
      }),
    stop_suburb: z.string().exactOptional().openapi({ description: 'suburb of stop' }),
    stop_ticket: V3StopTicketSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3StopOnRoute')

const V3StopResponseSchema = z
  .object({
    disruptions: z
      .record(z.string(), V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Disruption information applicable to relevant routes or stops' }),
    status: V3StatusSchema.exactOptional(),
    stop: V3StopDetailsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3StopResponse')

const V3StoppingPatternStopSchema = z
  .object({
    route_type: z.int32().exactOptional().openapi({ description: 'Transport mode identifier' }),
    stop_distance: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Distance of stop from input location (in metres); returns 0 if no location is input',
      }),
    stop_id: z.int32().exactOptional().openapi({ description: 'Stop identifier' }),
    stop_landmark: z
      .string()
      .exactOptional()
      .openapi({ description: 'Landmark in proximity of stop' }),
    stop_latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of latitude at stop' }),
    stop_longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Geographic coordinate of longitude at stop' }),
    stop_name: z.string().exactOptional().openapi({ description: 'Name of stop' }),
    stop_sequence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.',
      }),
    stop_suburb: z.string().exactOptional().openapi({ description: 'suburb of stop' }),
    stop_ticket: V3StopTicketSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('V3StoppingPatternStop')

const V3StoppingPatternSchema = z
  .object({
    departures: z
      .array(V3PatternDepartureSchema)
      .exactOptional()
      .openapi({ description: 'Timetabled and real-time service departures' }),
    directions: z
      .record(z.string(), V3DirectionSchema)
      .exactOptional()
      .openapi({ description: 'Directions of travel of route' }),
    disruptions: z
      .array(V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Disruption information applicable to relevant routes or stops' }),
    routes: z
      .record(z.string(), V2ObjectSchema)
      .exactOptional()
      .openapi({
        description:
          'Train lines, tram routes, bus routes, regional coach routes, Night Bus routes',
      }),
    runs: z
      .record(z.string(), V3RunSchema)
      .exactOptional()
      .openapi({ description: 'Individual trips/services of a route' }),
    status: V3StatusSchema.exactOptional(),
    stops: z
      .record(z.string(), V3StoppingPatternStopSchema)
      .exactOptional()
      .openapi({
        description: 'A train station, tram stop, bus stop, regional coach stop or Night Bus stop',
      }),
  })
  .openapi({ required: [] })
  .openapi('V3StoppingPattern')

const V3StopsByDistanceResponseSchema = z
  .object({
    disruptions: z
      .record(z.string(), V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Disruption information applicable to relevant routes or stops' }),
    status: V3StatusSchema.exactOptional(),
    stops: z
      .array(V3StopGeosearchSchema)
      .exactOptional()
      .openapi({
        description:
          'Train stations, tram stops, bus stops, regional coach stops or Night Bus stops',
      }),
  })
  .openapi({ required: [] })
  .openapi('V3StopsByDistanceResponse')

const V3StopsOnRouteResponseSchema = z
  .object({
    disruptions: z
      .record(z.string(), V3DisruptionSchema)
      .exactOptional()
      .openapi({ description: 'Disruption information applicable to relevant routes or stops' }),
    geopath: z
      .array(V2ObjectSchema)
      .exactOptional()
      .openapi({ description: 'GeoPath for the route' }),
    status: V3StatusSchema.exactOptional(),
    stops: z
      .array(V3StopOnRouteSchema)
      .exactOptional()
      .openapi({
        description:
          'Train stations, tram stops, bus stops, regional coach stops or Night Bus stops',
      }),
  })
  .openapi({ required: [] })
  .openapi('V3StopsOnRouteResponse')

export const getV3DeparturesRouteTypeRouteTypeStopStopIdRoute = createRoute({
  method: 'get',
  path: '/v3/departures/route_type/{route_type}/stop/{stop_id}',
  tags: ['Departures'],
  summary: 'View departures for all routes from a stop',
  operationId: 'Departures_GetForStop',
  request: {
    params: z.object({
      route_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
        )
        .openapi({
          param: {
            description: 'Number identifying transport mode; values returned via RouteTypes API',
            in: 'path',
            name: 'route_type',
            required: true,
            schema: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
          },
        }),
      stop_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of stop; values returned by Stops API',
            in: 'path',
            name: 'stop_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      platform_numbers: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by platform number at stop',
            explode: true,
            in: 'query',
            name: 'platform_numbers',
            required: false,
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
          },
        }),
      direction_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}',
            in: 'query',
            name: 'direction_id',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      gtfs: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates that stop_id parameter will accept "GTFS stop_id" data',
            in: 'query',
            name: 'gtfs',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      date_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)',
            in: 'query',
            name: 'date_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results returned',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      include_cancelled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only',
            in: 'query',
            name: 'include_cancelled',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      look_backwards: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.',
            in: 'query',
            name: 'look_backwards',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'All',
              'Stop',
              'Route',
              'Run',
              'Direction',
              'Disruption',
              'VehicleDescriptor',
              'VehiclePosition',
              'None',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.\r\n            Run must be expanded to receive VehiclePosition and VehicleDescriptor information.',
            explode: true,
            in: 'query',
            name: 'expand',
            required: false,
            schema: {
              items: {
                enum: [
                  'All',
                  'Stop',
                  'Route',
                  'Run',
                  'Direction',
                  'Disruption',
                  'VehicleDescriptor',
                  'VehiclePosition',
                  'None',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      include_geopath: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates if the route geopath should be returned',
            in: 'query',
            name: 'include_geopath',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Service departures from the specified stop for all routes of the specified route type; departures are timetabled and real-time (if applicable).',
      content: {
        'application/json': { schema: V3DeparturesResponseSchema },
        'text/html': { schema: V3DeparturesResponseSchema },
        'text/json': { schema: V3DeparturesResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdRoute = createRoute({
  method: 'get',
  path: '/v3/departures/route_type/{route_type}/stop/{stop_id}/route/{route_id}',
  tags: ['Departures'],
  summary: 'View departures for a specific route from a stop',
  operationId: 'Departures_GetForStopAndRoute',
  request: {
    params: z.object({
      route_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
        )
        .openapi({
          param: {
            description: 'Number identifying transport mode; values returned via RouteTypes API',
            in: 'path',
            name: 'route_type',
            required: true,
            schema: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
          },
        }),
      stop_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of stop; values returned by Stops API',
            in: 'path',
            name: 'stop_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      route_id: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of route; values returned by Routes API - v3/routes',
            in: 'path',
            name: 'route_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      direction_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}',
            in: 'query',
            name: 'direction_id',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      gtfs: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates that stop_id parameter will accept "GTFS stop_id" data',
            in: 'query',
            name: 'gtfs',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      date_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)',
            in: 'query',
            name: 'date_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results returned',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      include_cancelled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only',
            in: 'query',
            name: 'include_cancelled',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      look_backwards: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.',
            in: 'query',
            name: 'look_backwards',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'All',
              'Stop',
              'Route',
              'Run',
              'Direction',
              'Disruption',
              'VehicleDescriptor',
              'VehiclePosition',
              'None',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.\r\n            Run must be expanded to receive VehiclePosition and VehicleDescriptor information.',
            explode: true,
            in: 'query',
            name: 'expand',
            required: false,
            schema: {
              items: {
                enum: [
                  'All',
                  'Stop',
                  'Route',
                  'Run',
                  'Direction',
                  'Disruption',
                  'VehicleDescriptor',
                  'VehiclePosition',
                  'None',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      include_geopath: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates if the route geopath should be returned',
            in: 'query',
            name: 'include_geopath',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Service departures from the specified stop for the specified route (and route type); departures are timetabled and real-time (if applicable).',
      content: {
        'application/json': { schema: V3DeparturesResponseSchema },
        'text/html': { schema: V3DeparturesResponseSchema },
        'text/json': { schema: V3DeparturesResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3DirectionsRouteRouteIdRoute = createRoute({
  method: 'get',
  path: '/v3/directions/route/{route_id}',
  tags: ['Directions'],
  summary: 'View directions that a route travels in',
  operationId: 'Directions_ForRoute',
  request: {
    params: z.object({
      route_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of route; values returned by Routes API - v3/routes',
            in: 'path',
            name: 'route_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The directions that a specified route travels in.',
      content: {
        'application/json': { schema: V3DirectionsResponseSchema },
        'text/html': { schema: V3DirectionsResponseSchema },
        'text/json': { schema: V3DirectionsResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3DirectionsDirectionIdRoute = createRoute({
  method: 'get',
  path: '/v3/directions/{direction_id}',
  tags: ['Directions'],
  summary: 'View all routes for a direction of travel',
  operationId: 'Directions_ForDirection',
  request: {
    params: z.object({
      direction_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              'Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}',
            in: 'path',
            name: 'direction_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All routes that travel in the specified direction.',
      content: {
        'application/json': { schema: V3DirectionsResponseSchema },
        'text/html': { schema: V3DirectionsResponseSchema },
        'text/json': { schema: V3DirectionsResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3DirectionsDirectionIdRouteTypeRouteTypeRoute = createRoute({
  method: 'get',
  path: '/v3/directions/{direction_id}/route_type/{route_type}',
  tags: ['Directions'],
  summary: 'View all routes of a particular type for a direction of travel',
  operationId: 'Directions_ForDirectionAndType',
  request: {
    params: z.object({
      direction_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              'Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}',
            in: 'path',
            name: 'direction_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      route_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
        )
        .openapi({
          param: {
            description: 'Number identifying transport mode; values returned via RouteTypes API',
            in: 'path',
            name: 'route_type',
            required: true,
            schema: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All routes of the specified route type that travel in the specified direction.',
      content: {
        'application/json': { schema: V3DirectionsResponseSchema },
        'text/html': { schema: V3DirectionsResponseSchema },
        'text/json': { schema: V3DirectionsResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3DisruptionsRoute = createRoute({
  method: 'get',
  path: '/v3/disruptions',
  tags: ['Disruptions'],
  summary: 'View all disruptions for all route types',
  operationId: 'Disruptions_GetAllDisruptions',
  request: {
    query: z.object({
      route_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by route_type; values returned via RouteTypes API',
            explode: true,
            in: 'query',
            name: 'route_types',
            required: false,
            schema: {
              items: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
              type: 'array',
            },
          },
        }),
      disruption_modes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([
                z.literal(1),
                z.literal(2),
                z.literal(3),
                z.literal(4),
                z.literal(5),
                z.literal(7),
                z.literal(8),
                z.literal(9),
                z.literal(10),
                z.literal(11),
                z.literal(12),
                z.literal(13),
                z.literal(14),
                z.literal(100),
              ]),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by disruption_mode; values returned via v3/disruptions/modes API',
            explode: true,
            in: 'query',
            name: 'disruption_modes',
            required: false,
            schema: {
              items: {
                enum: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 100],
                format: 'int32',
                type: 'integer',
              },
              type: 'array',
            },
          },
        }),
      disruption_status: z
        .enum(['current', 'planned'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by status of disruption',
            in: 'query',
            name: 'disruption_status',
            required: false,
            schema: { enum: ['current', 'planned'], type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All disruption information for all route types.',
      content: {
        'application/json': { schema: V3DisruptionsResponseSchema },
        'text/html': { schema: V3DisruptionsResponseSchema },
        'text/json': { schema: V3DisruptionsResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3DisruptionsModesRoute = createRoute({
  method: 'get',
  path: '/v3/disruptions/modes',
  tags: ['Disruptions'],
  summary: 'Get all disruption modes',
  operationId: 'Disruptions_GetDisruptionModes',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Disruption specific modes',
      content: {
        'application/json': { schema: V3DisruptionModesResponseSchema },
        'text/html': { schema: V3DisruptionModesResponseSchema },
        'text/json': { schema: V3DisruptionModesResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3DisruptionsRouteRouteIdRoute = createRoute({
  method: 'get',
  path: '/v3/disruptions/route/{route_id}',
  tags: ['Disruptions'],
  summary: 'View all disruptions for a particular route',
  operationId: 'Disruptions_GetDisruptionsByRoute',
  request: {
    params: z.object({
      route_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of route; values returned by Routes API - v3/routes',
            in: 'path',
            name: 'route_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      disruption_status: z
        .enum(['current', 'planned'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by status of disruption',
            in: 'query',
            name: 'disruption_status',
            required: false,
            schema: { enum: ['current', 'planned'], type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All disruption information (if any exists) for the specified route.',
      content: {
        'application/json': { schema: V3DisruptionsResponseSchema },
        'text/html': { schema: V3DisruptionsResponseSchema },
        'text/json': { schema: V3DisruptionsResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3DisruptionsRouteRouteIdStopStopIdRoute = createRoute({
  method: 'get',
  path: '/v3/disruptions/route/{route_id}/stop/{stop_id}',
  tags: ['Disruptions'],
  summary: 'View all disruptions for a particular route and stop',
  operationId: 'Disruptions_GetDisruptionsByRouteAndStop',
  request: {
    params: z.object({
      route_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of route; values returned by Routes API - v3/routes',
            in: 'path',
            name: 'route_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      stop_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of stop; values returned by Stops API - v3/stops',
            in: 'path',
            name: 'stop_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      disruption_status: z
        .enum(['current', 'planned'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by status of disruption',
            in: 'query',
            name: 'disruption_status',
            required: false,
            schema: { enum: ['current', 'planned'], type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All disruption information (if any exists) for the specified route and stop.',
      content: {
        'application/json': { schema: V3DisruptionsResponseSchema },
        'text/html': { schema: V3DisruptionsResponseSchema },
        'text/json': { schema: V3DisruptionsResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3DisruptionsStopStopIdRoute = createRoute({
  method: 'get',
  path: '/v3/disruptions/stop/{stop_id}',
  tags: ['Disruptions'],
  summary: 'View all disruptions for a particular stop',
  operationId: 'Disruptions_GetDisruptionsByStop',
  request: {
    params: z.object({
      stop_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of stop; values returned by Stops API - v3/stops',
            in: 'path',
            name: 'stop_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      disruption_status: z
        .enum(['current', 'planned'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by status of disruption',
            in: 'query',
            name: 'disruption_status',
            required: false,
            schema: { enum: ['current', 'planned'], type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All disruption information (if any exists) for the specified stop.',
      content: {
        'application/json': { schema: V3DisruptionsResponseSchema },
        'text/html': { schema: V3DisruptionsResponseSchema },
        'text/json': { schema: V3DisruptionsResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3DisruptionsDisruptionIdRoute = createRoute({
  method: 'get',
  path: '/v3/disruptions/{disruption_id}',
  tags: ['Disruptions'],
  summary: 'View a specific disruption',
  operationId: 'Disruptions_GetDisruptionById',
  request: {
    params: z.object({
      disruption_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description:
              'Identifier of disruption; values returned by Disruptions API - /v3/disruptions OR /v3/disruptions/route/{route_id}',
            in: 'path',
            name: 'disruption_id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Disruption information for the specified disruption ID.',
      content: {
        'application/json': { schema: V3DisruptionResponseSchema },
        'text/html': { schema: V3DisruptionResponseSchema },
        'text/json': { schema: V3DisruptionResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneRoute = createRoute({
  method: 'get',
  path: '/v3/fare_estimate/min_zone/{minZone}/max_zone/{maxZone}',
  tags: ['FareEstimate'],
  summary: 'Estimate a fare by zone',
  operationId: 'FareEstimate_GetFareEstimateByZone',
  request: {
    params: z.object({
      minZone: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Minimum Zone travelled through ie. 1',
            in: 'path',
            name: 'minZone',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      maxZone: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Maximum Zone travelled through id. 6',
            in: 'path',
            name: 'maxZone',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      journey_touch_on_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'JourneyTouchOnUtc in format yyyy-M-d h:m (e.g 2016-5-31 16:53).',
            in: 'query',
            name: 'journey_touch_on_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      journey_touch_off_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'JourneyTouchOffUtc in format yyyy-M-d h:m (e.g 2016-5-31 16:53).',
            in: 'query',
            name: 'journey_touch_off_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      is_journey_in_free_tram_zone: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'is_journey_in_free_tram_zone',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      travelled_route_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'travelled_route_types',
            required: false,
            schema: {
              items: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
              type: 'array',
            },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Resultant set fare estimates',
      content: {
        'application/json': { schema: V3FareEstimateResponseSchema },
        'text/html': { schema: V3FareEstimateResponseSchema },
        'text/json': { schema: V3FareEstimateResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3OutletsRoute = createRoute({
  method: 'get',
  path: '/v3/outlets',
  tags: ['Outlets'],
  summary: 'List all ticket outlets',
  operationId: 'Outlets_GetAllOutlets',
  request: {
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results returned (default = 30)',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ticket outlets.',
      content: {
        'application/json': { schema: V3OutletResponseSchema },
        'text/html': { schema: V3OutletResponseSchema },
        'text/json': { schema: V3OutletResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3OutletsLocationLatitudeLongitudeRoute = createRoute({
  method: 'get',
  path: '/v3/outlets/location/{latitude},{longitude}',
  tags: ['Outlets'],
  summary: 'List ticket outlets near a specific location',
  operationId: 'Outlets_GetOutletsByGeolocation',
  request: {
    params: z.object({
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Geographic coordinate of latitude',
            in: 'path',
            name: 'latitude',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Geographic coordinate of longitude',
            in: 'path',
            name: 'longitude',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
    }),
    query: z.object({
      max_distance: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)',
            in: 'query',
            name: 'max_distance',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results returned (default = 30)',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Ticket outlets near the specified location.',
      content: {
        'application/json': { schema: V3OutletGeolocationResponseSchema },
        'text/html': { schema: V3OutletGeolocationResponseSchema },
        'text/json': { schema: V3OutletGeolocationResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3PatternRunRunRefRouteTypeRouteTypeRoute = createRoute({
  method: 'get',
  path: '/v3/pattern/run/{run_ref}/route_type/{route_type}',
  tags: ['Patterns'],
  summary: 'View the stopping pattern for a specific trip/service run',
  operationId: 'Patterns_GetPatternByRun',
  request: {
    params: z.object({
      run_ref: z
        .string()
        .openapi({
          param: {
            description:
              'The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.',
            in: 'path',
            name: 'run_ref',
            required: true,
            schema: { type: 'string' },
          },
        }),
      route_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
        )
        .openapi({
          param: {
            description: 'Number identifying transport mode; values returned via RouteTypes API',
            in: 'path',
            name: 'route_type',
            required: true,
            schema: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'All',
              'Stop',
              'Route',
              'Run',
              'Direction',
              'Disruption',
              'VehicleDescriptor',
              'VehiclePosition',
              'None',
            ]),
          ),
        )
        .openapi({
          param: {
            description:
              'List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor and None. Default is Disruption. Run must be expanded to receive VehiclePosition and VehicleDescriptor information.',
            explode: true,
            in: 'query',
            name: 'expand',
            required: true,
            schema: {
              items: {
                enum: [
                  'All',
                  'Stop',
                  'Route',
                  'Run',
                  'Direction',
                  'Disruption',
                  'VehicleDescriptor',
                  'VehiclePosition',
                  'None',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      stop_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by stop_id; values returned by Stops API',
            in: 'query',
            name: 'stop_id',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      date_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by the date and time of the request (ISO 8601 UTC format)',
            in: 'query',
            name: 'date_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      include_skipped_stops: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include any skipped stops in a stopping pattern. Defaults to false.',
            in: 'query',
            name: 'include_skipped_stops',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      include_geopath: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates if geopath data will be returned (default = false)',
            in: 'query',
            name: 'include_geopath',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The stopping pattern of the specified run_ref and route type. (NOTE: the departure sequence field should be used to sort departures in chronological order, however it is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4)',
      content: {
        'application/json': { schema: V3StoppingPatternSchema },
        'text/html': { schema: V3StoppingPatternSchema },
        'text/json': { schema: V3StoppingPatternSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3RouteTypesRoute = createRoute({
  method: 'get',
  path: '/v3/route_types',
  tags: ['RouteTypes'],
  summary: 'View all route types and their names',
  operationId: 'RouteTypes_GetRouteTypes',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All route types (i.e. identifiers of transport modes) and their names.',
      content: {
        'application/json': { schema: V3RouteTypesResponseSchema },
        'text/html': { schema: V3RouteTypesResponseSchema },
        'text/json': { schema: V3RouteTypesResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3RoutesRoute = createRoute({
  method: 'get',
  path: '/v3/routes',
  tags: ['Routes'],
  summary: 'View route names and numbers for all routes',
  operationId: 'Routes_OneOrMoreRoutes',
  request: {
    query: z.object({
      route_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by route_type; values returned via RouteTypes API',
            explode: true,
            in: 'query',
            name: 'route_types',
            required: false,
            schema: {
              items: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
              type: 'array',
            },
          },
        }),
      route_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by name  of route (accepts partial route name matches)',
            in: 'query',
            name: 'route_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Route names and numbers for all routes of all route types.',
      content: {
        'application/json': { schema: V3RouteResponseSchema },
        'text/html': { schema: V3RouteResponseSchema },
        'text/json': { schema: V3RouteResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3RoutesRouteIdRoute = createRoute({
  method: 'get',
  path: '/v3/routes/{route_id}',
  tags: ['Routes'],
  summary: 'View route name and number for specific route ID',
  operationId: 'Routes_RouteFromId',
  request: {
    params: z.object({
      route_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              'Identifier of route; values returned by Departures, Directions and Disruptions APIs',
            in: 'path',
            name: 'route_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      include_geopath: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates kif geopath data will be returned (default = false)',
            in: 'query',
            name: 'include_geopath',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      geopath_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter geopaths by date (ISO 8601 UTC format) (default = current date)',
            in: 'query',
            name: 'geopath_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The route name and number for the specified route ID.',
      content: {
        'application/json': { schema: V3RouteResponseSchema },
        'text/html': { schema: V3RouteResponseSchema },
        'text/json': { schema: V3RouteResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3RunsRouteRouteIdRoute = createRoute({
  method: 'get',
  path: '/v3/runs/route/{route_id}',
  tags: ['Runs'],
  summary: 'View all trip/service runs for a specific route ID',
  operationId: 'Runs_ForRoute',
  request: {
    params: z.object({
      route_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of route; values returned by Routes API - v3/routes.',
            in: 'path',
            name: 'route_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['All', 'VehicleDescriptor', 'VehiclePosition', 'None'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.',
            explode: true,
            in: 'query',
            name: 'expand',
            required: false,
            schema: {
              items: {
                enum: ['All', 'VehicleDescriptor', 'VehiclePosition', 'None'],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      date_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Date of the request. (optional - defaults to now)',
            in: 'query',
            name: 'date_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All trip/service run details for the specified route ID.',
      content: {
        'application/json': { schema: V3RunsResponseSchema },
        'text/html': { schema: V3RunsResponseSchema },
        'text/json': { schema: V3RunsResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3RunsRouteRouteIdRouteTypeRouteTypeRoute = createRoute({
  method: 'get',
  path: '/v3/runs/route/{route_id}/route_type/{route_type}',
  tags: ['Runs'],
  summary: 'View all trip/service runs for a specific route ID and route type',
  operationId: 'Runs_ForRouteAndRouteType',
  request: {
    params: z.object({
      route_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of route; values returned by Routes API - v3/routes.',
            in: 'path',
            name: 'route_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      route_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
        )
        .openapi({
          param: {
            description: 'Number identifying transport mode; values returned via RouteTypes API',
            in: 'path',
            name: 'route_type',
            required: true,
            schema: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['All', 'VehicleDescriptor', 'VehiclePosition', 'None'])),
        )
        .openapi({
          param: {
            description:
              'List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is All.',
            explode: true,
            in: 'query',
            name: 'expand',
            required: true,
            schema: {
              items: {
                enum: ['All', 'VehicleDescriptor', 'VehiclePosition', 'None'],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      date_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Date of the request. (optional - defaults to now)',
            in: 'query',
            name: 'date_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All trip/service run details for the specified route ID and route type.',
      content: {
        'application/json': { schema: V3RunsResponseSchema },
        'text/html': { schema: V3RunsResponseSchema },
        'text/json': { schema: V3RunsResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3RunsRunRefRoute = createRoute({
  method: 'get',
  path: '/v3/runs/{run_ref}',
  tags: ['Runs'],
  summary: 'View all trip/service runs for a specific run_ref',
  operationId: 'Runs_ForRun',
  request: {
    params: z.object({
      run_ref: z
        .string()
        .openapi({
          param: {
            description:
              'The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.',
            in: 'path',
            name: 'run_ref',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['All', 'VehicleDescriptor', 'VehiclePosition', 'None'])),
        )
        .openapi({
          param: {
            description:
              'List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.',
            explode: true,
            in: 'query',
            name: 'expand',
            required: true,
            schema: {
              items: {
                enum: ['All', 'VehicleDescriptor', 'VehiclePosition', 'None'],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      date_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Date of the request. (optional - defaults to now)',
            in: 'query',
            name: 'date_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      include_geopath: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates if geopath data will be returned (default = false)',
            in: 'query',
            name: 'include_geopath',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All trip/service run details for the specified run_ref.',
      content: {
        'application/json': { schema: V3RunsResponseSchema },
        'text/html': { schema: V3RunsResponseSchema },
        'text/json': { schema: V3RunsResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3RunsRunRefRouteTypeRouteTypeRoute = createRoute({
  method: 'get',
  path: '/v3/runs/{run_ref}/route_type/{route_type}',
  tags: ['Runs'],
  summary: 'View the trip/service run for a specific run_ref and route type',
  operationId: 'Runs_ForRunAndRouteType',
  request: {
    params: z.object({
      run_ref: z
        .string()
        .openapi({
          param: {
            description:
              'The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.',
            in: 'path',
            name: 'run_ref',
            required: true,
            schema: { type: 'string' },
          },
        }),
      route_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
        )
        .openapi({
          param: {
            description: 'Number identifying transport mode; values returned via RouteTypes API',
            in: 'path',
            name: 'route_type',
            required: true,
            schema: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['All', 'VehicleDescriptor', 'VehiclePosition', 'None'])),
        )
        .openapi({
          param: {
            description:
              'List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.',
            explode: true,
            in: 'query',
            name: 'expand',
            required: true,
            schema: {
              items: {
                enum: ['All', 'VehicleDescriptor', 'VehiclePosition', 'None'],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      date_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Date of the request. (optional - defaults to now)',
            in: 'query',
            name: 'date_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      include_geopath: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates if geopath data will be returned (default = false)',
            in: 'query',
            name: 'include_geopath',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The trip/service run details for the run_ref and route type specified.',
      content: {
        'application/json': { schema: V3RunResponseSchema },
        'text/html': { schema: V3RunResponseSchema },
        'text/json': { schema: V3RunResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3SearchSearchTermRoute = createRoute({
  method: 'get',
  path: '/v3/search/{search_term}',
  tags: ['Search'],
  summary: 'View stops, routes and myki ticket outlets that match the search term',
  operationId: 'Search_Search',
  request: {
    params: z.object({
      search_term: z
        .string()
        .openapi({
          param: {
            description:
              'Search text (note: if search text is numeric and/or less than 3 characters, the API will only return routes)',
            in: 'path',
            name: 'search_term',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      route_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified)',
            explode: true,
            in: 'query',
            name: 'route_types',
            required: false,
            schema: {
              items: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
              type: 'array',
            },
          },
        }),
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by geographic coordinate of latitude',
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by geographic coordinate of longitude',
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      max_distance: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by maximum distance (in metres) from location specified via latitude and longitude parameters',
            in: 'query',
            name: 'max_distance',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      include_addresses: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Placeholder for future development; currently unavailable',
            in: 'query',
            name: 'include_addresses',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      include_outlets: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates if outlets will be returned in response (default = true)',
            in: 'query',
            name: 'include_outlets',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      match_stop_by_suburb: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether to find stops by suburbs in the search term (default = true)',
            in: 'query',
            name: 'match_stop_by_suburb',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      match_route_by_suburb: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether to find routes by suburbs in the search term (default = true)',
            in: 'query',
            name: 'match_route_by_suburb',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      match_stop_by_gtfs_stop_id: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates whether to search for stops according to a metlink stop ID (default = false)',
            in: 'query',
            name: 'match_stop_by_gtfs_stop_id',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Stops, routes and myki ticket outlets that contain the search term (note: stops and routes are ordered by route_type by default).',
      content: {
        'application/json': { schema: V3SearchResultSchema },
        'text/html': { schema: V3SearchResultSchema },
        'text/json': { schema: V3SearchResultSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3StopsLocationLatitudeLongitudeRoute = createRoute({
  method: 'get',
  path: '/v3/stops/location/{latitude},{longitude}',
  tags: ['Stops'],
  summary: 'View all stops near a specific location',
  operationId: 'Stops_StopsByGeolocation',
  request: {
    params: z.object({
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Geographic coordinate of latitude',
            in: 'path',
            name: 'latitude',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Geographic coordinate of longitude',
            in: 'path',
            name: 'longitude',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
    }),
    query: z.object({
      route_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by route_type; values returned via RouteTypes API',
            explode: true,
            in: 'query',
            name: 'route_types',
            required: false,
            schema: {
              items: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
              type: 'array',
            },
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results returned (default = 30)',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      max_distance: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)',
            in: 'query',
            name: 'max_distance',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      stop_disruptions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if stop disruption information will be returned (default = false)',
            in: 'query',
            name: 'stop_disruptions',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All stops near the specified location.',
      content: {
        'application/json': { schema: V3StopsByDistanceResponseSchema },
        'text/html': { schema: V3StopsByDistanceResponseSchema },
        'text/json': { schema: V3StopsByDistanceResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3StopsRouteRouteIdRouteTypeRouteTypeRoute = createRoute({
  method: 'get',
  path: '/v3/stops/route/{route_id}/route_type/{route_type}',
  tags: ['Stops'],
  summary: 'View all stops on a specific route',
  operationId: 'Stops_StopsForRoute',
  request: {
    params: z.object({
      route_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of route; values returned by Routes API - v3/routes',
            in: 'path',
            name: 'route_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      route_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
        )
        .openapi({
          param: {
            description: 'Number identifying transport mode; values returned via RouteTypes API',
            in: 'path',
            name: 'route_type',
            required: true,
            schema: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      direction_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional direction; values returned by Directions API. When this is set, stop sequence information is returned in the response.',
            in: 'query',
            name: 'direction_id',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      stop_disruptions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if stop disruption information will be returned (default = false)',
            in: 'query',
            name: 'stop_disruptions',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      include_geopath: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates if geopath data will be returned (default = false)',
            in: 'query',
            name: 'include_geopath',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      geopath_utc: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter geopaths by date (ISO 8601 UTC format) (default = current date)',
            in: 'query',
            name: 'geopath_utc',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All stops on the specified route.',
      content: {
        'application/json': { schema: V3StopsOnRouteResponseSchema },
        'text/html': { schema: V3StopsOnRouteResponseSchema },
        'text/json': { schema: V3StopsOnRouteResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})

export const getV3StopsStopIdRouteTypeRouteTypeRoute = createRoute({
  method: 'get',
  path: '/v3/stops/{stop_id}/route_type/{route_type}',
  tags: ['Stops'],
  summary: 'View facilities at a specific stop (Metro and V/Line stations only)',
  operationId: 'Stops_StopDetails',
  request: {
    params: z.object({
      stop_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Identifier of stop; values returned by Stops API',
            in: 'path',
            name: 'stop_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      route_type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
        )
        .openapi({
          param: {
            description: 'Number identifying transport mode; values returned via RouteTypes API',
            in: 'path',
            name: 'route_type',
            required: true,
            schema: { enum: [0, 1, 2, 3, 4], format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      stop_location: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if stop location information will be returned (default = false)',
            in: 'query',
            name: 'stop_location',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      stop_amenities: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates if stop amenity information will be returned (default = false)',
            in: 'query',
            name: 'stop_amenities',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      stop_accessibility: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if stop accessibility information will be returned (default = false)',
            in: 'query',
            name: 'stop_accessibility',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      stop_contact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates if stop contact information will be returned (default = false)',
            in: 'query',
            name: 'stop_contact',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      stop_ticket: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates if stop ticket information will be returned (default = false)',
            in: 'query',
            name: 'stop_ticket',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      gtfs: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Incdicates whether the stop_id is a GTFS ID or not',
            in: 'query',
            name: 'gtfs',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      stop_staffing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if stop staffing information will be returned (default = false)',
            in: 'query',
            name: 'stop_staffing',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      stop_disruptions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if stop disruption information will be returned (default = false)',
            in: 'query',
            name: 'stop_disruptions',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Please ignore',
            in: 'query',
            name: 'token',
            required: false,
            schema: { type: 'string' },
          },
        }),
      devid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your developer id',
            in: 'query',
            name: 'devid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Authentication signature for request',
            in: 'query',
            name: 'signature',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Stop location, amenity and accessibility facility information for the specified stop (metropolitan and V/Line stations only).',
      content: {
        'application/json': { schema: V3StopResponseSchema },
        'text/html': { schema: V3StopResponseSchema },
        'text/json': { schema: V3StopResponseSchema },
      },
    },
    400: {
      description: 'Invalid Request',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': { schema: V3ErrorResponseSchema },
        'text/html': { schema: V3ErrorResponseSchema },
        'text/json': { schema: V3ErrorResponseSchema },
      },
    },
  },
})
