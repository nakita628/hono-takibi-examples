import { createRoute, z } from '@hono/zod-openapi'

const SnappedWaypointSchema = z
  .object({
    lat: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Latitude of location.', example: 51.512665 }),
    lon: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Longitude of location.', example: -0.092869 }),
  })
  .openapi({
    description:
      'Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).',
    required: [],
  })
  .openapi('SnappedWaypoint')

const ResponseAddressSchema = z
  .object({
    lat: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Latitude of location.', example: 51.512665 }),
    location_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specifies the id of the location.',
        example: '550e8400-e29b-11d4-a716-446655440000',
      }),
    lon: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Longitude of location.', example: -0.092869 }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of location.',
        example: 'Queens Victoria Street 70, Second Floor, Flat 245',
      }),
    snapped_waypoint: SnappedWaypointSchema.exactOptional(),
    street_hint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.',
        example: 'Queens Victoria Street 70',
      }),
  })
  .openapi({ description: 'Address of activity', required: [] })
  .openapi('ResponseAddress')

const ActivitySchema = z
  .object({
    address: ResponseAddressSchema.exactOptional(),
    arr_date_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Arrival date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`.',
      }),
    arr_time: z
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
        description:
          'Arrival time at this activity in seconds. If type is `start`, this is not available (since it makes no sense to have `arr_time` at start). However, `end_time` is available and actually means \\"departure time\\" at start location. It is important to note that `arr_time` does not necessarily mean \\"start of underlying activity\\", it solely means arrival time at activity location. If this activity has no time windows and if there are no further preparation times, `arr_time` is equal to activity start time.',
      }),
    distance: z
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
        description: 'cumulated distance from start to this activity in m',
      }),
    driving_time: z
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
        description: 'cumulated driving time from start to this driver activity in seconds',
      }),
    end_date_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'End date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`.',
      }),
    end_time: z
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
        description:
          'End time of and thus departure time at this activity. If type is `end`, this is not available (since it makes no sense to have an `end_time` at end) `end_time` at each activity is equal to the departure time at the activity location.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to',
      }),
    load_after: z
      .array(z.int32().openapi({ description: 'dimension value' }))
      .exactOptional()
      .openapi({ description: 'Array with size/capacity dimensions after this activity' }),
    load_before: z
      .array(z.int32().openapi({ description: 'dimension value' }))
      .exactOptional()
      .openapi({ description: 'Array with size/capacity dimensions before this activity' }),
    location_id: z.string().exactOptional().openapi({ description: 'Id that refers to address' }),
    preparation_time: z
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
        description: 'preparation time at this activity in seconds',
      }),
    type: z
      .enum([
        'start',
        'end',
        'service',
        'pickupShipment',
        'deliverShipment',
        'pickup',
        'delivery',
        'break',
      ])
      .exactOptional()
      .openapi({ description: 'type of activity' }),
    waiting_time: z
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
        description:
          'Waiting time at this activity in seconds. A waiting time can occur if the activity has at least one time window. If `arr_time` < `time_window.earliest` a waiting time of `time_window_earliest` - `arr_time` occurs.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Activity')

const AddressSchema = z
  .object({
    curbside: z
      .enum(['right', 'left', 'any'])
      .default('any')
      .exactOptional()
      .openapi({
        description:
          'Optional parameter. Specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. Only supported for motor vehicles and OpenStreetMap.',
        example:
          'If you would like to arrive at this address without having to cross the street use `curbside=right/left` for countries with right/left-hand driving. Using `curbside=any` is the same as not specifying this parameter at all.',
      }),
    lat: z.float64().openapi({ description: 'Latitude of location.', example: 51.512665 }),
    location_id: z
      .string()
      .openapi({
        description: 'Specifies the id of the location.',
        example: '550e8400-e29b-11d4-a716-446655440000',
      }),
    lon: z.float64().openapi({ description: 'Longitude of location.', example: -0.092869 }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of location.',
        example: 'Queens Victoria Street 70, Second Floor, Flat 245',
      }),
    street_hint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.',
        example: 'Queens Victoria Street 70',
      }),
  })
  .openapi({ required: ['location_id', 'lon', 'lat'] })
  .openapi('Address')

const AlgorithmSchema = z
  .object({
    objective: z.enum(['transport_time', 'completion_time']).exactOptional(),
    problem_type: z.enum(['min', 'min-max']).exactOptional(),
  })
  .openapi({ deprecated: true, description: 'Use `objectives` instead.', required: [] })
  .openapi('Algorithm')

const ErrorMessageSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details', example: 'class java.lang.IllegalArgumentException' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'error message',
        example:
          'unsupported json property [vehiles]. allowed properties: [vehicles, vehicle_types, services, shipments, relations, algorithm, objectives, cost_matrices, configuration]',
      }),
  })
  .openapi({ required: [] })
  .openapi('ErrorMessage')

const BadRequestSchema = z
  .object({
    hints: z
      .array(ErrorMessageSchema)
      .exactOptional()
      .openapi({ description: 'Optional error information.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short error message', example: 'Bad Request' }),
    status: z
      .string()
      .default('finished')
      .exactOptional()
      .openapi({ description: 'status', example: 'finished' }),
  })
  .openapi({ required: [] })
  .openapi('BadRequest')

const ClusterSchema = z
  .object({
    ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array of customer ids assigned to this specific cluster',
        example: ['GraphHopper GmbH'],
      }),
    quantity: z.number().exactOptional().openapi({ description: 'Cluster size', example: 40 }),
  })
  .openapi({ required: [] })
  .openapi('Cluster')

const ClusterConfigurationClusteringSchema = z
  .object({
    max_quantity: z
      .number()
      .exactOptional()
      .openapi({ description: 'Specifies max. quantity in a cluster', example: 50 }),
    min_quantity: z
      .number()
      .exactOptional()
      .openapi({ description: 'Specifies min. quantity in a cluster', example: 30 }),
    num_clusters: z
      .number()
      .exactOptional()
      .openapi({ description: 'Specifies the number of clusters', example: 10 }),
  })
  .openapi({ required: [] })
  .openapi('ClusterConfigurationClustering')

const ClusterConfigurationRoutingSchema = z
  .object({
    cost_per_meter: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Cost per meter (travel distance)', example: 0 }),
    cost_per_second: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Cost per second (travel time)', example: 1 }),
    profile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The routing profile for which the travel times and distances should be calculated. Other profiles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap)',
        example: 'car',
      }),
  })
  .openapi({ required: [] })
  .openapi('ClusterConfigurationRouting')

const ClusterConfigurationSchema = z
  .object({
    clustering: ClusterConfigurationClusteringSchema.exactOptional(),
    response_type: z
      .string()
      .default('json')
      .exactOptional()
      .openapi({
        description: 'Specifies the response format. You can either choose `geojson` or `json`.',
        example: 'json',
      }),
    routing: ClusterConfigurationRoutingSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClusterConfiguration')

const ClusterCustomerAddressSchema = z
  .object({
    lat: z.float64().exactOptional().openapi({ description: 'Latitude', example: 48.118434 }),
    lon: z.float64().exactOptional().openapi({ description: 'Longitude', example: 11.53941 }),
    street_hint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.',
        example: 'Lindenschmitstraße 52',
      }),
  })
  .openapi({ required: [] })
  .openapi('ClusterCustomerAddress')

const ClusterCustomerSchema = z
  .object({
    address: ClusterCustomerAddressSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of customer', example: 'GraphHopper GmbH' }),
    quantity: z
      .number()
      .exactOptional()
      .openapi({ description: 'demand of customer', example: 10 }),
  })
  .openapi({ required: [] })
  .openapi('ClusterCustomer')

const ClusterRequestSchema = z
  .object({
    configuration: ClusterConfigurationSchema.exactOptional(),
    customers: z.array(ClusterCustomerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClusterRequest')

const ClusterResponseSchema = z
  .object({
    clusters: z.array(ClusterSchema).exactOptional(),
    copyrights: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['GraphHopper', 'OpenStreetMap contributors'] }),
    processing_time: z.float64().exactOptional().openapi({ example: 4900 }),
    status: z
      .enum(['waiting_in_queue', 'processing', 'finished'])
      .exactOptional()
      .openapi({ description: 'Indicates the current status of the job', example: 'finished' }),
    waiting_time_in_queue: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClusterResponse')

const RoutingSchema = z
  .object({
    calc_points: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'It lets you specify whether the API should provide you with route geometries for vehicle routes or not. Thus, you do not need to do extra routing to get the polyline for each route.',
      }),
    consider_traffic: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'indicates whether historical traffic information should be considered',
      }),
    curbside_strictness: z
      .enum(['ignore', 'soft', 'strict'])
      .default('soft')
      .exactOptional()
      .openapi({
        description:
          'In some cases curbside constraints cannot be fulfilled. For example in one-way streets you cannot arrive at a building that is on the left side of the street such that the building is to the right of you (unless you drove the one-way street the wrong/illegal way). You can set the `curbside_strictness` to `soft` to ignore the curbside constraint in such cases or set it to `strict` to get an error response instead. You can also set it to `ignore` to ignore all curbside constraints (this is useful to compare the results with and without constraints without modifying every single address).',
      }),
    fail_fast: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'indicates whether matrix calculation should fail fast when points cannot be connected',
      }),
    network_data_provider: z
      .enum(['openstreetmap', 'tomtom'])
      .default('openstreetmap')
      .exactOptional()
      .openapi({
        description:
          'specifies the data provider, read more about it [here](#section/Map-Data-and-Routing-Profiles).',
      }),
    return_snapped_waypoints: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether a solution includes snapped waypoints. In contrary to the address coordinate a snapped waypoint is the access point to the (road) network.',
      }),
    snap_preventions: z
      .array(z.enum(['motorway', 'trunk', 'bridge', 'ford', 'tunnel', 'ferry']))
      .exactOptional()
      .openapi({
        description:
          'Prevents snapping locations to road links of specified road types, e.g. to motorway.',
        example: ['motorway', 'trunk', 'bridge', 'tunnel', 'ferry'],
      }),
  })
  .openapi({ description: 'This contains all routing specific configurations.', required: [] })
  .openapi('Routing')

const ConfigurationSchema = z
  .object({ routing: RoutingSchema.exactOptional() })
  .openapi({
    description:
      'Specifies general configurations that are taken into account when solving the vehicle routing problem.',
    required: [],
  })
  .openapi('Configuration')

const CostMatrixSchema = z
  .object({
    data: z
      .object({
        distances: z.array(z.array(z.float64())).min(1).exactOptional(),
        info: z
          .object({
            copyrights: z.array(z.string()).exactOptional(),
            took: z.float64().exactOptional(),
          })
          .exactOptional()
          .openapi({ description: 'Additional information for your request', required: [] }),
        times: z
          .array(
            z.array(
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
            ),
          )
          .min(1)
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'JSON data of matrix response', required: [] }),
    location_ids: z.array(z.string()).exactOptional(),
    profile: z
      .string()
      .exactOptional()
      .openapi({ description: 'vehicle profile or empty if catch all fallback' }),
    type: z
      .enum(['default', 'google'])
      .exactOptional()
      .openapi({ description: 'type of cost matrix, currently default or google are supported' }),
  })
  .openapi({ required: [] })
  .openapi('CostMatrix')

const DetailSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Reason code\n\nCode   |  Reason\n:------|:---------\n1 | cannot serve required skill\n2 | cannot be visited within time window\n3 | does not fit into any vehicle due to capacity\n4 | cannot be assigned due to max distance constraint of vehicles\n21 | could not be assigned due to relation constraint\n22 | could not be assigned due to allowed vehicle constraint\n23 | could not be assigned due to max-time-in-vehicle constraint\n24 | driver does not need a break\n25 | could not be assigned due to disallowed vehicle constraint\n26 | could not be assigned due to max drive time constraint\n27 | could not be assigned due to max job constraint\n28 | could not be assigned due to max activity constraint\n50 | underlying location cannot be accessed over road network by at least one vehicle\n',
      }),
    id: z.string().exactOptional().openapi({ description: 'Id of unassigned service/shipment' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human readable reason as listed above' }),
  })
  .openapi({ required: [] })
  .openapi('Detail')

const DriveTimeBreakSchema = z
  .object({
    duration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Specifies the duration of the break in seconds.',
        example: 2700,
      }),
    initial_driving_time: z
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
        description:
          'Specifies the initial (current) driving time of a driver to allow dynamic adaptations in seconds.',
        example: 3600,
      }),
    max_driving_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Specifies the max driving time (in a row) without break in seconds.',
        example: 14400,
      }),
    possible_split: z
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
      .openapi({
        description:
          'Array specifying how a break duration (in seconds) can be split into several smaller breaks',
        example: [900, 1800],
      }),
  })
  .openapi({ required: ['duration', 'max_driving_time'] })
  .openapi('DriveTimeBreak')

const EncodedLineStringSchema = z
  .string()
  .openapi({
    description:
      "A polyline-encoded list of positions. You'll need to decode this string in client code. We provide open source code in [Java](https://github.com/graphhopper/graphhopper/blob/e649aaed8d3f4378bf2d8889bbbc2318261eabb2/web-api/src/main/java/com/graphhopper/http/WebHelper.java#L54) and [JavaScript](https://github.com/graphhopper/directions-api-js-client/blob/cf43d1a5bc93a3e8007a44fcfc551117e4fa49bc/src/GHUtil.js#L27).",
  })
  .openapi('EncodedLineString')

const GHErrorSchema = z
  .object({
    hints: z
      .array(z.object({ message: z.string().exactOptional() }).openapi({ required: [] }))
      .exactOptional()
      .openapi({ description: 'Optional error information.' }),
    message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GHError')

const GeocodingPointSchema = z
  .object({
    lat: z.float64().exactOptional().openapi({ description: 'Latitude' }),
    lng: z.float64().exactOptional().openapi({ description: 'Longitude' }),
  })
  .openapi({ required: [] })
  .openapi('GeocodingPoint')

const GeocodingLocationSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'The city of the address' }),
    country: z.string().exactOptional().openapi({ description: 'The country of the address' }),
    housenumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The housenumber of the address' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the entity. Can be a boundary, POI, address, etc' }),
    osm_id: z.string().exactOptional().openapi({ description: 'The OSM ID of the entity' }),
    osm_key: z.string().exactOptional().openapi({ description: 'The OSM key of the entity' }),
    osm_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'N = node, R = relation, W = way' }),
    point: GeocodingPointSchema.exactOptional(),
    postcode: z.string().exactOptional().openapi({ description: 'The postcode of the address' }),
    state: z.string().exactOptional().openapi({ description: 'The state of the address' }),
    street: z.string().exactOptional().openapi({ description: 'The street of the address' }),
  })
  .openapi({ required: [] })
  .openapi('GeocodingLocation')

const GeocodingResponseSchema = z
  .object({
    hits: z.array(GeocodingLocationSchema).exactOptional(),
    took: z.number().exactOptional().openapi({ description: 'in ms' }),
  })
  .openapi({
    example: {
      hits: [
        {
          city: 'Berlin',
          country: 'Deutschland',
          name: 'Berlin',
          osm_id: 240109189,
          osm_key: 'place',
          osm_type: 'N',
          osm_value: 'city',
          point: { lat: 52.5170365, lng: 13.3888599 },
          postcode: '10117',
        },
        {
          country: 'Deutschland',
          extent: [13.088345, 52.6755087, 13.7611609, 52.33826],
          name: 'Berlin',
          osm_id: 62422,
          osm_key: 'place',
          osm_type: 'R',
          osm_value: 'city',
          point: { lat: 52.5198535, lng: 13.4385964 },
        },
        {
          city: 'Berlin',
          country: 'Deutschland',
          extent: [13.3906703, 52.5200704, 13.3948873, 52.5175007],
          name: 'Humboldt-Universität zu Berlin',
          osm_id: 120456814,
          osm_key: 'amenity',
          osm_type: 'W',
          osm_value: 'university',
          point: { lat: 52.51875685, lng: 13.393560493637775 },
          postcode: '10117',
          street: 'Dorotheenstraße',
        },
        {
          city: 'Berlin',
          country: 'Deutschland',
          extent: [13.3924346, 52.5191829, 13.3948768, 52.517526],
          housenumber: '6',
          name: 'Humboldt-Universität zu Berlin',
          osm_id: 6647,
          osm_key: 'building',
          osm_type: 'R',
          osm_value: 'yes',
          point: { lat: 52.51840935, lng: 13.392908021752554 },
          postcode: '10117',
          street: 'Unter den Linden',
        },
        {
          city: 'Berlin',
          country: 'Deutschland',
          extent: [13.2364563, 52.5161915, 13.2433375, 52.5129557],
          housenumber: '3',
          name: 'Olympiastadion Berlin',
          osm_id: 38862723,
          osm_key: 'leisure',
          osm_type: 'W',
          osm_value: 'stadium',
          point: { lat: 52.5147077, lng: 13.239776301622072 },
          postcode: '14053',
          street: 'Olympischer Platz',
        },
        {
          city: 'Berlin',
          country: 'Deutschland',
          extent: [13.3739245, 52.528547, 13.3818019, 52.5229778],
          name: 'Charité Universitätsmedizin Berlin',
          osm_id: 583306346,
          osm_key: 'amenity',
          osm_type: 'W',
          osm_value: 'hospital',
          point: { lat: 52.52585125, lng: 13.377739577932736 },
          postcode: '10117',
          street: 'Hufelandweg',
        },
        {
          city: 'Berlin',
          country: 'Deutschland',
          extent: [13.3906159, 52.5190301, 13.3923847, 52.5174089],
          housenumber: '8',
          name: 'Staatsbibliothek zu Berlin',
          osm_id: 180594,
          osm_key: 'amenity',
          osm_type: 'R',
          osm_value: 'library',
          point: { lat: 52.5182233, lng: 13.391516532100738 },
          postcode: '10117',
          street: 'Unter den Linden',
        },
        {
          city: 'Berlin',
          country: 'Deutschland',
          name: 'Berlin Hauptbahnhof',
          osm_id: 3856100103,
          osm_key: 'railway',
          osm_type: 'N',
          osm_value: 'station',
          point: { lat: 52.5249451, lng: 13.3696614 },
          postcode: '10557',
          street: 'Washingtonplatz',
        },
        {
          city: 'Berlin',
          country: 'Deutschland',
          name: 'Schlacht um Berlin',
          osm_id: 1078631331,
          osm_key: 'historic',
          osm_type: 'N',
          osm_value: 'battlefield',
          point: { lat: 52.5127537, lng: 13.3814231 },
          postcode: '10117',
          street: 'Gertrud-Kolmar-Straße',
        },
        {
          city: 'Berlin',
          country: 'Deutschland',
          extent: [13.3807495, 52.5083344, 13.3822459, 52.5074359],
          housenumber: '5',
          name: 'Abgeordnetenhaus von Berlin',
          osm_id: 1154556,
          osm_key: 'office',
          osm_type: 'R',
          osm_value: 'government',
          point: { lat: 52.50786655, lng: 13.381504320489928 },
          postcode: '10117',
          street: 'Niederkirchnerstraße',
        },
      ],
      took: 37,
    },
    required: [],
  })
  .openapi('GeocodingResponse')

const GroupRelationSchema = z
  .object({
    groups: z
      .array(z.string().openapi({ description: 'group of services or shipments' }))
      .openapi({
        description: 'An array of groups that should be related',
        example: ['group-A', 'group-B'],
      }),
    type: z
      .string()
      .openapi({
        description:
          'Specifies the type of relation. It must be either of type `in_sequence` or `in_direct_sequence`.\n',
        example: 'in_direct_sequence',
      }),
  })
  .openapi({ required: ['type', 'groups'] })
  .openapi('GroupRelation')

const InfoResponseSchema = z
  .object({
    bbox: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bounding box of the geographical area covered by this GraphHopper instance. Format: `"minLon,minLat,maxLon,maxLat"\n',
      }),
    features: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The supported features, such as elevation, per vehicle profile.\n',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the GraphHopper server that provided this response. This is not related to the API version.\n',
      }),
  })
  .openapi({
    description: 'Information about the server and the geographical area that it covers.',
    example: {
      bbox: [13.072624, 52.333508, 13.763972, 52.679616],
      build_date: '2014-02-21T16:52',
      features: { car: { elevation: false }, foot: { elevation: true } },
      version: '0.4',
    },
    required: [],
  })
  .openapi('InfoResponse')

const InternalErrorMessageSchema = z
  .object({
    code: z.int32().default(500).exactOptional().openapi({ example: 500 }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details', example: 'There has been an internal server error.' }),
  })
  .openapi({ required: [] })
  .openapi('InternalErrorMessage')

const PolygonSchema = z
  .object({
    coordinates: z.array(z.array(z.array(z.number()))).exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Polygon')

const IsochroneResponsePolygonSchema = z
  .object({
    geometry: PolygonSchema.exactOptional(),
    properties: z
      .object({ bucket: z.int32().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    type: z.string().exactOptional(),
  })
  .openapi({ description: 'A found path', required: [] })
  .openapi('IsochroneResponsePolygon')

const IsochroneResponseSchema = z
  .object({
    copyrights: z.array(z.string()).exactOptional(),
    polygons: z
      .array(IsochroneResponsePolygonSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of polygons in GeoJson format. It can be used e.g. in the Leaflet framework:\n\n```\nL.geoJson(json.polygons).addTo(map)\n```\n\nThe number of polygon is identical to the specified buckets in the query. Every polygon contains the bucket number in the properties section of the GeoJson.\n',
      }),
  })
  .openapi({
    example: {
      polygons: [
        {
          geometry: {
            coordinates: [
              [13.351851, 52.51345],
              [13.350402, 52.516949],
              [13.352598, 52.522252],
              [13.351851, 52.51345],
            ],
            type: 'Polygon',
          },
          properties: { bucket: 0 },
          type: 'Feature',
        },
      ],
    },
    required: [],
  })
  .openapi('IsochroneResponse')

const JobIdSchema = z
  .object({
    job_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'UUID. Unique id for your job/request with which you can fetch your solution',
        example: '44886560-b584-4da5-b245-768151dacd8f',
      }),
  })
  .openapi({ required: [] })
  .openapi('JobId')

const JobRelationSchema = z
  .object({
    ids: z
      .array(z.string())
      .openapi({
        description:
          'Specifies an array of shipment and/or service ids that are in relation. If you deal with services then you need to use the id of your services in ids. To also consider sequences of the pickups and deliveries of your shipments, you need to use a special ID, i.e. use your shipment id plus the keyword `_pickup` or `_delivery`. If you want to place a service or shipment activity at the beginning of your route, use the special ID `start`. In turn, use `end` to place it at the end of the route.',
        example: ['pickup-1', 'pickup-2'],
      }),
    type: z
      .string()
      .openapi({
        description:
          'Specifies the type of relation. It must be either of type `in_same_route`, `in_sequence` or `in_direct_sequence`.\n\n`in_same_route`: As the name suggest, it enforces the specified services or shipments to be in the same route. It can be specified as follows:\n\n```json\n{\n   "type": "in_same_route",\n   "ids": ["serv_i_id","serv_j_id"]\n}\n```\n\nThis enforces service i to be in the same route as service j no matter which vehicle will be employed. If a specific vehicle (driver) is required to conduct this, just add a `vehicle_id` like this:\n\n```\n{\n   "type": "in_same_route",\n   "ids": ["serv_i_id","serv_j_id"],\n   "vehicle_id": "vehicle1"\n}\n```\n\nThis not only enforce service i and j to be in the same route, but also makes sure that both services are in the route of `vehicle1`.\n\n*Tip*: This way initial loads and vehicle routes can be modelled. For example, if your vehicles are already on the road and new orders come in, then vehicles can still be rescheduled subject to the orders that have already been assigned to these vehicles.\n\n\n\n`in_sequence`: This relation type enforces n jobs to be in sequence. It can be specified as\n\n```json\n{\n   "type": "in_sequence",\n   "ids": ["serv_i_id","serv_j_id"]\n}\n```\n\nwhich means that service j need to be in the same route as service i AND it needs to occur somewhere after service i. As described above if a specific vehicle needs to conduct this, just add `vehicle_id`.\n\n\n`in_direct_sequence`: This enforces n services or shipments to be in direct sequence. It can be specified as\n\n```json\n{\n   "type": "in_direct_sequence",\n   "ids": ["serv_i_id","serv_j_id","serv_k_id"]\n}\n```\n\nyielding service j to occur directly after service i, and service k to occur directly after service j i.e. in strong order. Again, a vehicle can be assigned a priority by adding a `vehicle_id` to the relation.\n\n\n*Special IDs*:\nIf you look at the previous example and you want service i to be the first in the route, use the special ID `start` as follows:\n\n```json\n{\n   "type": "in_direct_sequence",\n   "ids": ["start","serv_i_id","serv_j_id","serv_k_id"]\n}\n```\n\nLatter enforces the direct sequence of i, j and k at the beginning of the route. If this sequence should be bound to the end of the route, use the special ID `end` like this:\n\n```json\n{\n   "type": "in_direct_sequence",\n   "ids": ["serv_i_id","service_j_id","serv_k_id","end"]\n}\n```\n\nIf you deal with services then you need to use the \'id\' of your services in the field \'ids\'. To also consider sequences of the pickups and deliveries of your shipments, you need to use a special ID, i.e. use the shipment id plus the keyword `_pickup` or `_delivery`. For example, to ensure that the pickup and delivery of the shipment with the id \'my_shipment\' are direct neighbors, you need the following specification:\n\n```\n{\n   "type": "in_direct_sequence",\n   "ids": ["my_ship_pickup","my_ship_delivery"]\n}\n```\n\n',
        example: 'in_direct_sequence',
      }),
    vehicle_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of pre-assigned vehicle, i.e. the vehicle id that is determined to conduct the services and shipments in this relation.',
        example: 'driver-Peter',
      }),
  })
  .openapi({ required: ['type', 'ids'] })
  .openapi('JobRelation')

const LineStringSchema = z
  .object({
    coordinates: z
      .array(z.array(z.number()))
      .exactOptional()
      .openapi({
        description:
          'A list of coordinate pairs or triples, `[lon,lat]` or `[lon,lat,elevation]`.\n',
      }),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LineString')

const VehicleProfileIdSchema = z
  .enum(['car', 'bike', 'foot', 'hike', 'mtb', 'racingbike', 'scooter', 'truck', 'small_truck'])
  .default('car')
  .openapi('VehicleProfileId')

const MatrixRequestSchema = z
  .object({
    fail_fast: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).',
      }),
    from_curbsides: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'See `curbsides`of symmetrical matrix' }),
    from_point_hints: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'See `point_hints`of symmetrical matrix' }),
    from_points: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'The starting points for the routes in an array of `[longitude,latitude]`. For instance, if you want to calculate three routes from point A such as A->1, A->2, A->3 then you have one `from_point` parameter and three `to_point` parameters.',
      }),
    out_arrays: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies which matrices should be included in the response. Specify one or more of the following options `weights`, `times`, `distances`. The units of the entries of `distances` are meters, of `times` are seconds and of `weights` is arbitrary and it can differ for different vehicles or versions of this API.',
      }),
    snap_preventions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'See `snap_preventions` of symmetrical matrix' }),
    to_curbsides: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'See `curbsides`of symmetrical matrix' }),
    to_point_hints: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'See `point_hints`of symmetrical matrix' }),
    to_points: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description: 'The destination points for the routes in an array of `[longitude,latitude]`.',
      }),
    turn_costs: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.',
      }),
    vehicle: VehicleProfileIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The vehicle profile for which the route should be calculated. Other vehicles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) for the details.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      from_point_hints: ['Copenhagen Street', 'Richmond Avenue', 'White Lion Street'],
      from_points: [
        [-0.11379003524780275, 51.53664617804063],
        [-0.10866165161132814, 51.538621486960956],
        [-0.11059284210205078, 51.53245503603458],
      ],
      out_arrays: ['weights', 'times', 'distances'],
      to_point_hints: ['Cannon', 'Cornhill'],
      to_points: [
        [-0.09576559066772462, 51.512882367963456],
        [-0.08797645568847656, 51.51317615367198],
      ],
      vehicle: 'car',
    },
    required: [],
  })
  .openapi('MatrixRequest')

const ResponseInfoSchema = z
  .object({
    copyrights: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Attribution according to our documentation is necessary if no white-label option included.',
      }),
    took: z.float64().exactOptional(),
  })
  .openapi({ description: 'Additional information for your request', required: [] })
  .openapi('ResponseInfo')

const MatrixResponseSchema = z
  .object({
    distances: z
      .array(z.array(z.number()))
      .exactOptional()
      .openapi({
        description:
          'The distance matrix for the specified points in the same order as the time matrix. The distances are in meters. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.',
      }),
    hints: z
      .array(
        z
          .object({
            details: z.string().exactOptional().openapi({ description: 'Details of this hint' }),
            invalid_from_points: z
              .array(z.number())
              .exactOptional()
              .openapi({
                description:
                  'Optional. An array of from_point indices of points that could not be found. Will only be added if `fail_fast=false` and some `from_point`s were not found.`',
              }),
            invalid_to_points: z
              .array(z.number())
              .exactOptional()
              .openapi({
                description:
                  'Optional. An array of to_point indices of points that could not be found. Will only be added if `fail_fast=false` and some `to_point`s were not found.`',
              }),
            message: z
              .string()
              .exactOptional()
              .openapi({ description: 'Short description of this hint' }),
            point_pairs: z
              .array(z.array(z.number()))
              .exactOptional()
              .openapi({
                description:
                  'Optional. An array of two-element arrays representing the from/to_point indices of points for which no connection could be found. Will only be added if `fail_fast=false` and some connections were not found.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Optional. Additional response data.' }),
    info: ResponseInfoSchema.exactOptional(),
    times: z
      .array(z.array(z.number()))
      .exactOptional()
      .openapi({
        description:
          'The time matrix for the specified points in the order [[from1->to1, from1->to2, ...], [from2->to1, from2->to2, ...], ...]. The times are in seconds. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.',
      }),
    weights: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'The weight matrix for the specified points in the same order as the time matrix. The weights for different vehicles can have a different unit but the weights array is perfectly suited as input for Vehicle Routing Problems as it is currently faster to calculate. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.',
      }),
  })
  .openapi({
    example: {
      distances: [
        [0, 97653, 48887],
        [97426, 0, 121035],
        [49006, 121049, 0],
      ],
      info: { copyrights: ['GraphHopper', 'OpenStreetMap contributors'] },
      times: [
        [0, 4197, 2994],
        [4192, 0, 6074],
        [3006, 6062, 0],
      ],
      weights: [
        [0, 5662.551, 3727.147],
        [5653.807, 0, 7889.653],
        [3741.528, 7878.365, 0],
      ],
    },
    required: [],
  })
  .openapi('MatrixResponse')

const ObjectiveSchema = z
  .object({
    type: z
      .enum(['min', 'min-max'])
      .default('min')
      .openapi({
        description:
          'Type of objective function, i.e. `min` or `min-max`.\n\n * `min`: Minimizes the objective value.\n * `min-max`: Minimizes the maximum objective value.\n\nFor instance, `min` -> `vehicles` minimizes the number of employed vehicles.\n`min` -> `completion_time` minimizes the sum of your vehicle routes\' completion time.\n\nIf you use, for example, `min-max` -> `completion_time`, it minimizes the maximum of your vehicle routes\' completion time, i.e. it minimizes the overall makespan.\nThis only makes sense if you have more than one vehicle. In case of one vehicle, switching from `min` to `min-max` should not have any impact.\nIf you have more than one vehicle, then the algorithm tries to constantly move stops from one vehicle to another such that\nthe completion time of longest vehicle route can be further reduced. For example, if you have one vehicle that takes 8 hours\nto serve all customers, adding another vehicle (and using `min-max`) might halve the time to serve all customers to 4 hours. However,\nthis usually comes with higher transport costs.\n\nIf you want to minimize `vehicles` first and, second, `completion_time`, you can also combine different objectives like this:\n\n```json\n"objectives" : [\n   {\n      "type": "min",\n      "value": "vehicles"\n   },\n   {\n      "type": "min",\n      "value": "completion_time"\n   }\n]\n```\n\nIf you want to balance activities or the number of stops among all employed drivers, you need to specify it as follows:\n\n```json\n"objectives" : [\n   {\n      "type": "min-max",\n      "value": "completion_time"\n   },\n   {\n      "type": "min-max",\n      "value": "activities"\n   }\n]\n```\n',
      }),
    value: z
      .enum(['completion_time', 'transport_time', 'vehicles', 'activities'])
      .default('transport_time')
      .openapi({
        description:
          "The value of the objective function.\nThe objective value `transport_time` solely considers the time\nyour drivers spend on the road, i.e. transport time. In contrary to `transport_time`, `completion_time` also takes waiting times at customer sites into account.\nThe `completion_time` of a route is defined as the time from starting to ending the route,\ni.e. the route's transport time, the sum of waiting times plus the sum of activity durations.\nNote that choosing `transport_time` or `completion_time` only makes a difference if you specified time windows for your services/shipments since only in\nscenarios with time windows waiting times can occur.\nThe objective value `vehicles` can only be used along with `min` and minimizes vehicles.\n",
      }),
  })
  .openapi({ example: { type: 'min', value: 'vehicles' }, required: ['type', 'value'] })
  .openapi('Objective')

const TimeWindowSchema = z
  .object({
    earliest: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description:
          'Specifies the opening time of the time window in seconds, i.e. the earliest time the service can start.',
      }),
    latest: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(9223372036854776000n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 9223372036854776000,
        description:
          'Specifies the closing time of the time window in seconds, i.e. the latest time the service can start.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TimeWindow')

const StopSchema = z
  .object({
    address: AddressSchema.exactOptional().openapi({
      description: 'Specifies pickup or delivery address.',
    }),
    duration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(604800n),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 604800,
        default: 0,
        description:
          'Specifies the duration of the pickup or delivery in seconds, e.g. how long it takes unload items at the customer site.',
        example: 1800,
      }),
    group: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Group this stop belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this.',
        example: 'ASAP',
      }),
    preparation_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(604800n),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 604800,
        default: 0,
        description:
          'Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.',
        example: 300,
      }),
    time_windows: z
      .array(TimeWindowSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies an array of time window objects (see time window object below). For example, if an item needs to be delivered between 7am and 10am then specify the array as follows: [ { "earliest": 25200, "latest" : 32400 } ] (starting the day from 0 in seconds).',
        example: [
          { earliest: 32400, latest: 36000 },
          { earliest: 50400, latest: 54000 },
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('Stop')

const PickupSchema = StopSchema.openapi('Pickup')

const ServiceSchema = z
  .object({
    address: AddressSchema.exactOptional(),
    allowed_vehicles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies an array of allowed vehicles, i.e. array of vehicle ids. For example, if this service can only be conducted EITHER by `technician_peter` OR `technician_stefan` specify this as follows: `["technician_peter","technician_stefan"]`.',
        example: ['technician_peter', 'technician_stefan'],
      }),
    disallowed_vehicles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Specifies an array of disallowed vehicles, i.e. array of vehicle ids.',
        example: ['driver-A', 'driver-B'],
      }),
    duration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(604800n),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 604800,
        default: 0,
        description:
          'Specifies the duration of the service in seconds, i.e. how long it takes at the customer site.',
        example: 1800,
      }),
    group: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Group this service belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this.',
        example: 'group-A',
      }),
    id: z
      .string()
      .openapi({
        description:
          'Specifies the id of the service. Ids need to be unique so there must not be two services/shipments with the same id.',
        example: '7fe77504-7df8-4497-843c-02d70b6490ce',
      }),
    max_time_in_vehicle: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(9223372036854776000n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 9223372036854776000,
        description:
          'Specifies the maximum time in seconds a delivery can stay in the vehicle. Currently, it only works with services of "type":"delivery".',
        example: 900,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaningful name for service, e.g. `"deliver pizza"`.',
        example: 'delivery pizza',
      }),
    preparation_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(604800n),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 604800,
        default: 0,
        description:
          'Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.',
        example: 300,
      }),
    priority: z
      .int32()
      .default(2)
      .exactOptional()
      .openapi({
        description:
          'Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution.',
        example: 1,
      }),
    required_skills: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies an array of required skills, i.e. array of string (not case sensitive). For example, if this service needs to be conducted by a technician having a `drilling_machine` and a `screw_driver` then specify the array as follows: `["drilling_machine","screw_driver"]`. This means that the service can only be done by a vehicle (technician) that has the skills `drilling_machine` AND `screw_driver` in its skill array. Otherwise it remains unassigned.',
        example: ['drilling_machine', 'screw_driver'],
      }),
    size: z
      .array(z.int32())
      .default([0])
      .exactOptional()
      .openapi({
        description:
          'Size can have multiple dimensions and should be in line with the capacity dimension array of the vehicle type. For example, if the item that needs to be delivered has two size dimension, volume and weight, then specify it as follow [ 20, 5 ] assuming a volume of 20 and a weight of 5.',
        example: [30, 5, 1],
      }),
    time_windows: z
      .array(TimeWindowSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies an array of time window objects (see time_window object below). Specify the time either with the recommended Unix time stamp (the number of seconds since 1970-01-01) or you can also count the seconds relative to Monday morning 00:00 and define the whole week in seconds. For example, Monday 9am is then represented by 9hour * 3600sec/hour = 32400. In turn, Wednesday 1pm corresponds to 2day * 24hour/day * 3600sec/hour + 1day * 13hour/day * 3600sec/hour = 219600. See this tutorial for more information.',
        example: [
          { earliest: 32400, latest: 36000 },
          { earliest: 50400, latest: 54000 },
        ],
      }),
    type: z
      .enum(['service', 'pickup', 'delivery'])
      .default('service')
      .exactOptional()
      .openapi({
        description:
          'Specifies type of service. This makes a difference if items are loaded or unloaded, i.e. if one of the size dimensions > 0. If it is specified as `service` or `pickup`, items are loaded and will stay in the vehicle for the rest of the route (and thus consumes capacity for the rest of the route). If it is a `delivery`, items are implicitly loaded at the beginning of the route and will stay in the route until delivery (and thus releases capacity for the rest of the route).',
        example: 'delivery',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('Service')

const ShipmentSchema = z
  .object({
    allowed_vehicles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies an array of allowed vehicles, i.e. array of vehicle ids. For example, if this shipment can only be conducted EITHER by "technician_peter" OR "technician_stefan" specify this as follows: ["technician_peter","technician_stefan"].',
        example: ['technician_peter', 'technician_stefan'],
      }),
    delivery: StopSchema,
    disallowed_vehicles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Specifies an array of disallowed vehicles, i.e. array of vehicle ids.',
        example: ['driver-A', 'driver-B'],
      }),
    id: z
      .string()
      .openapi({
        description:
          'Specifies the id of the shipment. Ids need to be unique so there must not be two services/shipments with the same id.',
        example: '7fe77504-7df8-4497-843c-02d70b6490ce',
      }),
    max_time_in_vehicle: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(9223372036854776000n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 9223372036854776000,
        description: 'Specifies the maximum time in seconds a shipment can stay in the vehicle.',
        example: 1800,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Meaningful name for shipment, e.g. "pickup and deliver pizza to Peter".',
        example: 'pickup and deliver pizza to Peter',
      }),
    pickup: StopSchema,
    priority: z
      .int32()
      .default(2)
      .exactOptional()
      .openapi({
        description:
          'Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution.',
        example: 1,
      }),
    required_skills: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies an array of required skills, i.e. array of string (not case sensitive). For example, if this shipment needs to be conducted by a technician having a `drilling_machine` and a `screw_driver` then specify the array as follows: `["drilling_machine","screw_driver"]`. This means that the service can only be done by a vehicle (technician) that has the skills `drilling_machine` AND `screw_driver` in its skill array. Otherwise it remains unassigned.',
        example: ['drilling_machine', 'screw_driver'],
      }),
    size: z
      .array(z.int32())
      .default([0])
      .exactOptional()
      .openapi({
        description:
          'Size can have multiple dimensions and should be in line with the capacity dimension array of the vehicle type. For example, if the item that needs to be delivered has two size dimension, volume and weight, then specify it as follow [ 20, 5 ] assuming a volume of 20 and a weight of 5.',
        example: [3],
      }),
  })
  .openapi({ required: ['id', 'pickup', 'delivery'] })
  .openapi('Shipment')

const VehicleTypeSchema = z
  .object({
    capacity: z
      .array(z.int32())
      .default([0])
      .exactOptional()
      .openapi({
        description:
          'Specifies an array of capacity dimension values which need to be int values. For example, if there are two dimensions such as volume and weight then it needs to be defined as [ 1000, 300 ] assuming a maximum volume of 1000 and a maximum weight of 300.',
        example: [100, 500],
      }),
    consider_traffic: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Specifies whether traffic should be considered. if "tomtom" is used and this is false, free flow travel times from "tomtom" are calculated. If this is true, historical traffic info are used. We do not yet have traffic data for "openstreetmap", thus, setting this true has no effect at all.',
      }),
    cost_per_activation: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          '**_BETA feature_**! Cost parameter vehicle activation, i.e. fixed costs per vehicle',
      }),
    cost_per_meter: z
      .float64()
      .exactOptional()
      .openapi({
        description: '**_BETA feature_**! Cost parameter per distance unit, here meter is used',
      }),
    cost_per_second: z
      .float64()
      .exactOptional()
      .openapi({
        description: '**_BETA feature_**! Cost parameter per time unit, here second is used',
      }),
    network_data_provider: z
      .enum(['openstreetmap', 'tomtom'])
      .default('openstreetmap')
      .exactOptional()
      .openapi({
        description:
          'Specifies the network data provider. Either use [`openstreetmap`](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) (default) or [`tomtom`](#section/Map-Data-and-Routing-Profiles/TomTom) (add-on required).',
      }),
    profile: z
      .any()
      .openapi({
        description:
          'Specifies the vehicle profile of this type. The profile is used to determine the network, speed and other physical attributes to use for routing the vehicle.',
      })
      .and(VehicleProfileIdSchema)
      .exactOptional(),
    service_time_factor: z
      .float64()
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Specifies a service time factor for this vehicle type. If the vehicle/driver that uses this type is able to conduct the service as double as fast as it is determined in the corresponding service or shipment then set it to 0.5.',
      }),
    speed_factor: z
      .float64()
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Specifies a speed factor for this vehicle type. If the vehicle that uses this type needs to be only half as fast as what is actually calculated with our routing engine then set the speed factor to 0.5.',
      }),
    type_id: z
      .string()
      .openapi({
        description:
          'Specifies the id of the vehicle type. If a vehicle needs to be of this type, it should refer to this with its type_id attribute.',
        example: 'my-own-type',
      }),
  })
  .openapi({ required: ['type_id'] })
  .openapi('VehicleType')

const TimeWindowBreakSchema = z
  .object({
    duration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Specifies the duration of the break in seconds.',
        example: 2700,
      }),
    earliest: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Specifies the earliest start time of the break in seconds.',
        example: 1550136467,
      }),
    latest: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Specifies the latest start time of break in seconds.',
        example: 1550148467,
      }),
  })
  .openapi({ required: ['earliest', 'latest', 'duration'] })
  .openapi('TimeWindowBreak')

const VehicleSchema = z
  .object({
    break: z.union([TimeWindowBreakSchema, DriveTimeBreakSchema]).exactOptional(),
    earliest_start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description:
          'Earliest start of vehicle in seconds. It is recommended to use the unix timestamp.',
      }),
    end_address: AddressSchema.exactOptional().openapi({
      description:
        'If this is omitted AND return_to_depot is true then the vehicle needs to return to its start_address.',
    }),
    latest_end: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(9223372036854776000n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 9223372036854776000,
        description:
          'Latest end of vehicle in seconds, i.e. the time the vehicle needs to be at its end location at latest.',
      }),
    max_activities: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Specifies the maximum number of activities a vehicle can conduct.',
        example: 24,
      }),
    max_distance: z
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
        description: 'Specifies the maximum distance (in meters) a vehicle can go.',
        example: 400000,
      }),
    max_driving_time: z
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
        description:
          'Specifies the maximum drive time (in seconds) a vehicle/driver can go, i.e. the maximum time on the road (service and waiting times are not included here)',
        example: 28800,
      }),
    max_jobs: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Specifies the maximum number of jobs a vehicle can load.',
        example: 12,
      }),
    min_jobs: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the minimum number of jobs a vehicle should load. This is a soft constraint, i.e. if it is not possible to fulfill “min_jobs”, we will still try to get as close as possible to this constraint.',
        example: 12,
      }),
    move_to_end_address: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether a vehicle should be moved even though it has not been assigned any jobs.',
      }),
    return_to_depot: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "If it is false, the algorithm decides where to end the vehicle route. It ends in one of your customers' locations. The end is chosen such that it contributes to the overall objective function, e.g. min transport_time. If it is true, you can either specify a specific end location (which is then regarded as end depot) or you can leave it and the driver returns to its start location.",
      }),
    skills: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Array of skills, i.e. array of string (not case sensitive).',
        example: ['drilling_maschine', 'screw_driver'],
      }),
    start_address: AddressSchema,
    type_id: z
      .string()
      .default('default-type')
      .exactOptional()
      .openapi({
        description:
          'The type ID assigns a vehicle type to this vehicle. You can specify types in the array of vehicle types. If you omit the type ID, the default type is used. The default type is a `car` with a capacity of 0.',
        example: 'my-own-type',
      }),
    vehicle_id: z
      .string()
      .openapi({
        description:
          'Specifies the ID of the vehicle. Ids must be unique, i.e. if there are two vehicles with the same ID, an error is returned.',
        example: 'vehicle-1',
      }),
  })
  .openapi({ required: ['vehicle_id', 'start_address'] })
  .openapi('Vehicle')

const RequestSchema = z
  .object({
    algorithm: AlgorithmSchema.exactOptional(),
    configuration: ConfigurationSchema.exactOptional().openapi({
      description: 'Specifies general configurations.',
    }),
    cost_matrices: z
      .array(CostMatrixSchema)
      .exactOptional()
      .openapi({
        description: 'Specifies your own tranport time and distance matrices.',
        example: [
          {
            data: {
              distances: [
                [0, 1000, 1400, 2000, 0, 4000],
                [1000, 0, 1000, 2100, 1000, 4000],
                [1400, 1000, 0, 1100, 1100, 4000],
                [2000, 2100, 1100, 0, 1200, 4000],
                [0, 1000, 1400, 2000, 0, 4000],
                [4000, 4000, 4000, 4000, 4000, 4000],
              ],
              times: [
                [0, 1000, 1400, 2000, 0, 4000],
                [1000, 0, 1000, 2100, 1000, 4000],
                [1400, 1000, 0, 1100, 1100, 4000],
                [2000, 2100, 1100, 0, 1200, 4000],
                [0, 1000, 1400, 2000, 0, 4000],
                [4000, 4000, 4000, 4000, 4000, 4000],
              ],
            },
            location_ids: [
              'start',
              'Dammstrasse',
              'Bergstrasse',
              'Koppstrasse',
              'start2',
              'nirvana',
            ],
            profile: 'car',
          },
        ],
      }),
    objectives: z
      .array(ObjectiveSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies an objective function. The vehicle routing problem is solved in such a way that this objective function is minimized.',
        example: [
          { type: 'min', value: 'vehicles' },
          { type: 'min', value: 'completion_time' },
        ],
      }),
    relations: z
      .array(z.union([JobRelationSchema, GroupRelationSchema]))
      .exactOptional()
      .openapi({ description: 'Defines additional relationships between orders.' }),
    services: z
      .array(ServiceSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies the orders of the type "service". These are, for example, pick-ups, deliveries or other stops that are to be approached by the specified vehicles. Each of these orders contains only one location.',
      }),
    shipments: z
      .array(ShipmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies the available shipments. Each shipment contains a pickup and a delivery stop, which must be processed one after the other.',
      }),
    vehicle_types: z
      .array(VehicleTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies the available vehicle types. These types can be assigned to vehicles.',
      }),
    vehicles: z
      .array(VehicleSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'Specifies the available vehicles.' }),
  })
  .openapi({
    example: {
      configuration: {
        routing: {
          calc_points: true,
          snap_preventions: ['motorway', 'trunk', 'tunnel', 'bridge', 'ferry'],
        },
      },
      objectives: [
        { type: 'min', value: 'vehicles' },
        { type: 'min', value: 'completion_time' },
      ],
      services: [
        {
          address: { lat: 52.537338, location_id: '13.375854_52.537338', lon: 13.375854 },
          id: 's-1',
          name: 'visit-Joe',
          size: [1],
          time_windows: [{ earliest: 1554805329, latest: 1554806329 }],
        },
        {
          address: { lat: 52.525851, location_id: '13.393364_52.525851', lon: 13.393364 },
          id: 's-2',
          name: 'serve-Peter',
          size: [1],
        },
        {
          address: { lat: 52.523543, location_id: '13.416882_52.523543', lon: 13.416882 },
          id: 's-3',
          name: 'visit-Michael',
          size: [1],
        },
        {
          address: { lat: 52.514038, location_id: '13.395767_52.514038', lon: 13.395767 },
          id: 's-4',
          name: 'do nothing',
          size: [1],
        },
      ],
      shipments: [
        {
          delivery: {
            address: { lat: 52.513614, location_id: '13.380575_52.513614', lon: 13.380575 },
          },
          id: '7fe77504-7df8-4497-843c-02d70b6490ce',
          name: 'pickup and deliver pizza to Peter',
          pickup: {
            address: { lat: 52.529961, location_id: '13.387613_52.529961', lon: 13.387613 },
          },
          priority: 1,
          required_skills: ['physical strength'],
          size: [1],
        },
      ],
      vehicle_types: [{ capacity: [10], profile: 'bike', type_id: 'cargo-bike' }],
      vehicles: [
        {
          earliest_start: 1554804329,
          latest_end: 1554808329,
          max_jobs: 3,
          start_address: { lat: 52.537, location_id: 'berlin', lon: 13.406 },
          type_id: 'cargo-bike',
          vehicle_id: 'vehicle-1',
        },
        {
          earliest_start: 1554804329,
          latest_end: 1554808329,
          max_jobs: 3,
          skills: ['physical strength'],
          start_address: { lat: 52.537, location_id: 'berlin', lon: 13.406 },
          type_id: 'cargo-bike',
          vehicle_id: 'vehicle-2',
        },
      ],
    },
    required: [],
  })
  .openapi('Request')

const RoutePointSchema = z
  .object({ coordinates: z.array(z.object({})).exactOptional(), type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RoutePoint')

const RouteSchema = z
  .object({
    activities: z
      .array(ActivitySchema)
      .exactOptional()
      .openapi({
        description: 'Array of activities',
        example: [
          {
            address: { lat: 52.537, location_id: 'berlin', lon: 13.406 },
            distance: 0,
            driving_time: 0,
            end_date_time: '2019-02-25T20:20+01:00',
            end_time: 1551122400,
            load_after: [0],
            location_id: 'berlin',
            preparation_time: 0,
            type: 'start',
            waiting_time: 0,
          },
          {
            address: { lat: 52.527094, location_id: '13.408642_52.527094', lon: 13.408642 },
            arr_date_time: '2019-02-25T20:25:13+01:00',
            arr_time: 1551122713,
            distance: 1777,
            driving_time: 313,
            end_date_time: '2019-02-25T20:25:13+01:00',
            end_time: 1551122713,
            id: 'berlin-2',
            load_after: [0],
            load_before: [0],
            location_id: '13.408642_52.527094',
            preparation_time: 0,
            type: 'service',
            waiting_time: 0,
          },
          {
            address: { lat: 52.527303, location_id: '13.398170_52.527303', lon: 13.39817 },
            arr_date_time: '2019-02-25T20:27:44+01:00',
            arr_time: 1551122864,
            distance: 2562,
            driving_time: 464,
            end_date_time: '2019-02-25T20:27:44+01:00',
            end_time: 1551122864,
            id: 'berlin-1',
            load_after: [0],
            load_before: [0],
            location_id: '13.398170_52.527303',
            preparation_time: 0,
            type: 'service',
            waiting_time: 0,
          },
          {
            address: { lat: 52.537, location_id: 'berlin', lon: 13.406 },
            arr_date_time: '2019-02-25T20:33:09+01:00',
            arr_time: 1551123189,
            distance: 4334,
            driving_time: 789,
            load_before: [0],
            location_id: 'berlin',
            preparation_time: 0,
            type: 'end',
            waiting_time: 0,
          },
        ],
      }),
    completion_time: z
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
        description: 'Completion time of route in seconds',
        example: 1800,
      }),
    distance: z
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
        description: 'Distance of route in meter',
        example: 10000,
      }),
    points: z
      .array(RoutePointSchema)
      .exactOptional()
      .openapi({
        description: 'Array of route planning points',
        example: [
          {
            coordinates: [
              [13.4061, 52.53701],
              [13.40643, 52.53634],
              [13.4067, 52.53573],
              [13.40722, 52.53479],
              [13.40729, 52.53468],
              [13.40735, 52.53463],
              [13.41205, 52.53275],
              [13.41245, 52.53264],
              [13.41218, 52.53166],
              [13.41205, 52.53139],
              [13.41177, 52.53112],
              [13.41072, 52.53033],
              [13.41049, 52.53014],
              [13.4098, 52.52928],
              [13.40937, 52.5287],
              [13.40994, 52.52858],
              [13.41032, 52.52782],
              [13.41054, 52.52745],
              [13.41097, 52.52656],
              [13.41107, 52.5265],
              [13.41119, 52.52614],
              [13.41119, 52.52604],
              [13.41109, 52.52587],
              [13.40971, 52.52631],
              [13.40981, 52.52659],
              [13.40891, 52.52683],
              [13.40852, 52.52695],
            ],
            type: 'LineString',
          },
          {
            coordinates: [
              [13.40852, 52.52695],
              [13.4081, 52.52706],
              [13.40802, 52.52696],
              [13.40469, 52.52758],
              [13.4033, 52.52781],
              [13.40331, 52.52767],
              [13.40298, 52.52763],
              [13.40261, 52.52807],
              [13.39818, 52.52726],
            ],
            type: 'LineString',
          },
          {
            coordinates: [
              [13.39818, 52.52726],
              [13.39808, 52.52725],
              [13.39785, 52.52768],
              [13.39727, 52.52866],
              [13.39762, 52.52876],
              [13.3976, 52.52914],
              [13.39756, 52.52943],
              [13.39597, 52.53243],
              [13.39777, 52.5325],
              [13.39843, 52.53254],
              [13.39891, 52.53259],
              [13.40288, 52.53354],
              [13.40297, 52.53359],
              [13.40338, 52.534],
              [13.40466, 52.53419],
              [13.40433, 52.53503],
              [13.40443, 52.53511],
              [13.40541, 52.53611],
              [13.40547, 52.53615],
              [13.40643, 52.53634],
              [13.4061, 52.53701],
            ],
            type: 'LineString',
          },
        ],
      }),
    preparation_time: z
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
        description: 'Preparation time of route in seconds',
      }),
    service_duration: z
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
        description: 'Service duration of route in seconds',
      }),
    transport_time: z
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
        description: 'Transport time of route in seconds',
        example: 1800,
      }),
    vehicle_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of vehicle that operates route', example: 'driver-stefan' }),
    waiting_time: z
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
        description: 'Waiting time of route in seconds',
      }),
  })
  .openapi({ required: [] })
  .openapi('Route')

const SolutionSchema = z
  .object({
    completion_time: z
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
        description:
          'Overall completion time in seconds, i.e. the sum of each routes/drivers operation time.',
        example: 12000,
      }),
    costs: z.int32().exactOptional().openapi({ deprecated: true }),
    distance: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Overall distance travelled in meter, i.e. the sum of each route's transport distance",
        example: 1200,
      }),
    max_operation_time: z
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
        description: 'Operation time of longest route in seconds.',
        example: 4000,
      }),
    no_unassigned: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of jobs that could not be assigned to final solution.',
        example: 1,
      }),
    no_vehicles: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of employed vehicles.', example: 10 }),
    preparation_time: z
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
        description: 'Overall preparation time in seconds.',
      }),
    routes: z.array(RouteSchema).exactOptional().openapi({ description: 'An array of routes' }),
    service_duration: z
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
        description: 'Overall service time in seconds.',
        example: 1200,
      }),
    time: z
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
        deprecated: true,
        description: 'Use `transport_time` instead.',
      }),
    transport_time: z
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
        description:
          "Overall time travelled in seconds, i.e. the sum of each route's transport time.",
        example: 12000,
      }),
    unassigned: z
      .object({
        breaks: z
          .array(z.string().openapi({ description: 'Id of unassigned breaks' }))
          .exactOptional()
          .openapi({ description: 'An array of ids of unassigned breaks' }),
        details: z
          .array(DetailSchema)
          .exactOptional()
          .openapi({
            description: 'An array of details, i.e. reason for unassigned services or shipments',
            example: [
              { code: 3, id: 'service-1', reason: 'does not fit into any vehicle due to capacity' },
              {
                code: 27,
                id: 'service-2',
                reason: 'could not be assigned due to max job constraint',
              },
              { code: 2, id: 'shipment-5', reason: 'cannot be visited within time window' },
            ],
          }),
        services: z
          .array(z.string().openapi({ description: 'Id of unassigned service' }))
          .exactOptional()
          .openapi({
            description: 'An array of ids of unassigned services',
            example: ['service-1', 'service-3'],
          }),
        shipments: z
          .array(z.string().openapi({ description: 'Id of unassigned shipments' }))
          .exactOptional()
          .openapi({
            description: 'An array of ids of unassigned shipments',
            example: ['shipment-5'],
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    waiting_time: z
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
        description: 'Overall waiting time in seconds.',
        example: 200,
      }),
  })
  .openapi({ description: 'Only available if status field indicates `finished`.', required: [] })
  .openapi('Solution')

const ResponseSchema = z
  .object({
    copyrights: z
      .array(z.string().openapi({ description: 'Attribution' }))
      .exactOptional()
      .openapi({ example: ['GraphHopper', 'OpenStreetMap contributors'] }),
    processing_time: z
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
        description:
          'Processing time in ms. If job is still waiting in queue, processing_time is 0',
        example: 900000,
      }),
    solution: SolutionSchema.exactOptional(),
    status: z
      .enum(['waiting_in_queue', 'processing', 'finished'])
      .exactOptional()
      .openapi({ description: 'Indicates the current status of the job', example: 'finished' }),
    waiting_time_in_queue: z
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
        description: 'Waiting time in ms',
        example: 300000,
      }),
  })
  .openapi({
    example: {
      copyrights: ['GraphHopper', 'OpenStreetMap contributors'],
      job_id: 'd62fcadd-c84a-4298-90b5-28550125bec5',
      processing_time: 459,
      solution: {
        completion_time: 4172,
        costs: 438,
        distance: 17994,
        max_operation_time: 2465,
        no_unassigned: 0,
        no_vehicles: 2,
        preparation_time: 0,
        routes: [
          {
            activities: [
              {
                address: { lat: 52.537, location_id: 'berlin', lon: 13.406 },
                distance: 0,
                driving_time: 0,
                end_date_time: null,
                end_time: 1554804329,
                load_after: [0],
                location_id: 'berlin',
                preparation_time: 0,
                type: 'start',
                waiting_time: 0,
              },
              {
                address: { lat: 52.529961, location_id: '13.387613_52.529961', lon: 13.387613 },
                arr_date_time: null,
                arr_time: 1554804789,
                distance: 2012,
                driving_time: 460,
                end_date_time: null,
                end_time: 1554804789,
                id: '7fe77504-7df8-4497-843c-02d70b6490ce',
                load_after: [1],
                load_before: [0],
                location_id: '13.387613_52.529961',
                preparation_time: 0,
                type: 'pickupShipment',
                waiting_time: 0,
              },
              {
                address: { lat: 52.513614, location_id: '13.380575_52.513614', lon: 13.380575 },
                arr_date_time: null,
                arr_time: 1554805344,
                distance: 4560,
                driving_time: 1015,
                end_date_time: null,
                end_time: 1554805344,
                id: '7fe77504-7df8-4497-843c-02d70b6490ce',
                load_after: [0],
                load_before: [1],
                location_id: '13.380575_52.513614',
                preparation_time: 0,
                type: 'deliverShipment',
                waiting_time: 0,
              },
              {
                address: { lat: 52.514038, location_id: '13.395767_52.514038', lon: 13.395767 },
                arr_date_time: null,
                arr_time: 1554805632,
                distance: 5887,
                driving_time: 1303,
                end_date_time: null,
                end_time: 1554805632,
                id: 's-4',
                load_after: [1],
                load_before: [0],
                location_id: '13.395767_52.514038',
                preparation_time: 0,
                type: 'service',
                waiting_time: 0,
              },
              {
                address: { lat: 52.523543, location_id: '13.416882_52.523543', lon: 13.416882 },
                arr_date_time: null,
                arr_time: 1554806253,
                distance: 8486,
                driving_time: 1924,
                end_date_time: null,
                end_time: 1554806253,
                id: 's-3',
                load_after: [2],
                load_before: [1],
                location_id: '13.416882_52.523543',
                preparation_time: 0,
                type: 'service',
                waiting_time: 0,
              },
              {
                address: { lat: 52.537, location_id: 'berlin', lon: 13.406 },
                arr_date_time: null,
                arr_time: 1554806794,
                distance: 10618,
                driving_time: 2465,
                load_before: [2],
                location_id: 'berlin',
                preparation_time: 0,
                type: 'end',
                waiting_time: 0,
              },
            ],
            completion_time: 2465,
            distance: 10618,
            points: [
              {
                coordinates: [
                  [13.40608, 52.53701],
                  [13.40643, 52.53631],
                  [13.40554, 52.53616],
                  [13.4054, 52.53608],
                  [13.40445, 52.53513],
                  [13.40436, 52.53509],
                  [13.40428, 52.53508],
                  [13.40463, 52.53419],
                  [13.40451, 52.53419],
                  [13.4034, 52.53401],
                  [13.403, 52.53359],
                  [13.40291, 52.53354],
                  [13.40268, 52.53347],
                  [13.39888, 52.53259],
                  [13.39839, 52.53253],
                  [13.39812, 52.53251],
                  [13.39616, 52.53243],
                  [13.39579, 52.5324],
                  [13.38973, 52.53173],
                  [13.39163, 52.53025],
                  [13.38797, 52.52935],
                  [13.38763, 52.52996],
                ],
                type: 'LineString',
              },
              {
                coordinates: [
                  [13.38763, 52.52996],
                  [13.38739, 52.53039],
                  [13.38724, 52.53036],
                  [13.38464, 52.52929],
                  [13.38538, 52.52871],
                  [13.38634, 52.52792],
                  [13.38638, 52.52779],
                  [13.38657, 52.52763],
                  [13.38676, 52.52741],
                  [13.38698, 52.52713],
                  [13.38704, 52.52701],
                  [13.38753, 52.524],
                  [13.3877, 52.52307],
                  [13.3878, 52.52282],
                  [13.38788, 52.52252],
                  [13.38802, 52.52174],
                  [13.38519, 52.52009],
                  [13.38539, 52.5191],
                  [13.38548, 52.51852],
                  [13.38042, 52.51819],
                  [13.38071, 52.5167],
                  [13.38076, 52.51652],
                  [13.38084, 52.51634],
                  [13.3821, 52.51396],
                  [13.38055, 52.51365],
                ],
                type: 'LineString',
              },
              {
                coordinates: [
                  [13.38055, 52.51365],
                  [13.38229, 52.514],
                  [13.38363, 52.51429],
                  [13.3848, 52.51445],
                  [13.38504, 52.51358],
                  [13.39124, 52.51397],
                  [13.3911, 52.51488],
                  [13.39303, 52.51499],
                  [13.39317, 52.5141],
                  [13.39548, 52.51419],
                  [13.39571, 52.51421],
                ],
                type: 'LineString',
              },
              {
                coordinates: [
                  [13.39571, 52.51421],
                  [13.39695, 52.51434],
                  [13.39674, 52.51523],
                  [13.39742, 52.51531],
                  [13.39873, 52.51558],
                  [13.39846, 52.51599],
                  [13.39825, 52.51729],
                  [13.39805, 52.51755],
                  [13.39892, 52.51761],
                  [13.39917, 52.51764],
                  [13.39964, 52.51775],
                  [13.40009, 52.51791],
                  [13.40034, 52.51797],
                  [13.4021, 52.51864],
                  [13.40288, 52.51896],
                  [13.40375, 52.51936],
                  [13.40498, 52.52001],
                  [13.40463, 52.5203],
                  [13.40311, 52.52144],
                  [13.40442, 52.52189],
                  [13.40448, 52.52192],
                  [13.40451, 52.52195],
                  [13.40473, 52.52199],
                  [13.40504, 52.52208],
                  [13.40572, 52.52235],
                  [13.40687, 52.52294],
                  [13.40693, 52.52299],
                  [13.40706, 52.52319],
                  [13.40738, 52.52378],
                  [13.40787, 52.52443],
                  [13.4079, 52.52453],
                  [13.40938, 52.52401],
                  [13.40962, 52.52398],
                  [13.41001, 52.52395],
                  [13.41072, 52.52391],
                  [13.41215, 52.52389],
                  [13.41233, 52.52386],
                  [13.4131, 52.5235],
                  [13.41288, 52.52333],
                  [13.41475, 52.52247],
                  [13.41496, 52.52264],
                  [13.41523, 52.52251],
                  [13.41633, 52.52338],
                  [13.41631, 52.52346],
                  [13.41654, 52.52364],
                  [13.41684, 52.52351],
                ],
                type: 'LineString',
              },
              {
                coordinates: [
                  [13.41684, 52.52351],
                  [13.41654, 52.52364],
                  [13.41631, 52.52346],
                  [13.4163, 52.52344],
                  [13.41587, 52.52363],
                  [13.41572, 52.5235],
                  [13.41409, 52.5242],
                  [13.41454, 52.52461],
                  [13.41454, 52.52466],
                  [13.41358, 52.52508],
                  [13.41366, 52.52514],
                  [13.41344, 52.52525],
                  [13.4133, 52.52514],
                  [13.41316, 52.5252],
                  [13.41107, 52.52585],
                  [13.41118, 52.52606],
                  [13.41118, 52.52616],
                  [13.41095, 52.52664],
                  [13.41097, 52.52678],
                  [13.41084, 52.52706],
                  [13.41057, 52.52747],
                  [13.41028, 52.52809],
                  [13.41032, 52.52821],
                  [13.4102, 52.52847],
                  [13.40999, 52.52875],
                  [13.40984, 52.52905],
                  [13.40982, 52.52914],
                  [13.40984, 52.52926],
                  [13.4104, 52.52998],
                  [13.4105, 52.53001],
                  [13.41064, 52.53016],
                  [13.41082, 52.5303],
                  [13.41198, 52.53107],
                  [13.4122, 52.53128],
                  [13.41232, 52.53143],
                  [13.41247, 52.53192],
                  [13.41267, 52.53245],
                  [13.41275, 52.53259],
                  [13.41215, 52.5327],
                  [13.40731, 52.53463],
                  [13.40608, 52.53701],
                ],
                type: 'LineString',
              },
            ],
            preparation_time: 0,
            service_duration: 0,
            transport_time: 2465,
            vehicle_id: 'vehicle-2',
            waiting_time: 0,
          },
          {
            activities: [
              {
                address: { lat: 52.537, location_id: 'berlin', lon: 13.406 },
                distance: 0,
                driving_time: 0,
                end_date_time: null,
                end_time: 1554804329,
                load_after: [0],
                location_id: 'berlin',
                preparation_time: 0,
                type: 'start',
                waiting_time: 0,
              },
              {
                address: { lat: 52.525851, location_id: '13.393364_52.525851', lon: 13.393364 },
                arr_date_time: null,
                arr_time: 1554804743,
                distance: 1884,
                driving_time: 414,
                end_date_time: null,
                end_time: 1554804743,
                id: 's-2',
                load_after: [1],
                load_before: [0],
                location_id: '13.393364_52.525851',
                preparation_time: 0,
                type: 'service',
                waiting_time: 0,
              },
              {
                address: { lat: 52.537338, location_id: '13.375854_52.537338', lon: 13.375854 },
                arr_date_time: null,
                arr_time: 1554805251,
                distance: 4205,
                driving_time: 922,
                end_date_time: null,
                end_time: 1554805329,
                id: 's-1',
                load_after: [2],
                load_before: [1],
                location_id: '13.375854_52.537338',
                preparation_time: 0,
                type: 'service',
                waiting_time: 78,
              },
              {
                address: { lat: 52.537, location_id: 'berlin', lon: 13.406 },
                arr_date_time: null,
                arr_time: 1554806036,
                distance: 7376,
                driving_time: 1629,
                load_before: [2],
                location_id: 'berlin',
                preparation_time: 0,
                type: 'end',
                waiting_time: 0,
              },
            ],
            completion_time: 1707,
            distance: 7376,
            points: [
              {
                coordinates: [
                  [13.40608, 52.53701],
                  [13.40674, 52.53571],
                  [13.40433, 52.53313],
                  [13.40271, 52.53149],
                  [13.40246, 52.53121],
                  [13.40148, 52.52999],
                  [13.40128, 52.52993],
                  [13.40118, 52.52988],
                  [13.40133, 52.5296],
                  [13.40138, 52.52951],
                  [13.40167, 52.52914],
                  [13.40188, 52.52895],
                  [13.398, 52.52885],
                  [13.39289, 52.52748],
                  [13.39354, 52.5264],
                  [13.39358, 52.52628],
                  [13.39324, 52.52575],
                  [13.39334, 52.52573],
                  [13.39339, 52.52584],
                ],
                type: 'LineString',
              },
              {
                coordinates: [
                  [13.39339, 52.52584],
                  [13.3934, 52.52599],
                  [13.39358, 52.52628],
                  [13.39354, 52.5264],
                  [13.39242, 52.52823],
                  [13.39381, 52.52852],
                  [13.38973, 52.53173],
                  [13.38717, 52.5315],
                  [13.38678, 52.5315],
                  [13.38641, 52.53147],
                  [13.38617, 52.53143],
                  [13.38607, 52.53155],
                  [13.38526, 52.53225],
                  [13.38501, 52.53252],
                  [13.38316, 52.53418],
                  [13.38179, 52.5355],
                  [13.38084, 52.53523],
                  [13.38081, 52.53531],
                  [13.3795, 52.53677],
                  [13.37941, 52.53682],
                  [13.37935, 52.53683],
                  [13.37919, 52.53682],
                  [13.37617, 52.5361],
                  [13.37502, 52.53698],
                  [13.37584, 52.53734],
                ],
                type: 'LineString',
              },
              {
                coordinates: [
                  [13.37584, 52.53734],
                  [13.37566, 52.53726],
                  [13.37515, 52.53763],
                  [13.37644, 52.53841],
                  [13.37807, 52.53935],
                  [13.37946, 52.5402],
                  [13.3796, 52.54019],
                  [13.37984, 52.54021],
                  [13.37988, 52.54012],
                  [13.38062, 52.53936],
                  [13.38169, 52.53832],
                  [13.38236, 52.5377],
                  [13.38363, 52.53661],
                  [13.38492, 52.53555],
                  [13.38613, 52.53447],
                  [13.38757, 52.53338],
                  [13.38791, 52.53354],
                  [13.38812, 52.53368],
                  [13.38833, 52.53392],
                  [13.38977, 52.53518],
                  [13.39003, 52.53539],
                  [13.39256, 52.53701],
                  [13.39316, 52.53739],
                  [13.39327, 52.53744],
                  [13.3936, 52.53757],
                  [13.40155, 52.53982],
                  [13.40357, 52.53715],
                  [13.40372, 52.53719],
                  [13.40465, 52.53727],
                  [13.4048, 52.53726],
                  [13.4059, 52.53736],
                  [13.40608, 52.53701],
                ],
                type: 'LineString',
              },
            ],
            preparation_time: 0,
            service_duration: 0,
            transport_time: 1629,
            vehicle_id: 'vehicle-1',
            waiting_time: 78,
          },
        ],
        service_duration: 0,
        time: 4094,
        transport_time: 4094,
        unassigned: { breaks: [], details: [], services: [], shipments: [] },
        waiting_time: 78,
      },
      status: 'finished',
      waiting_time_in_queue: 0,
    },
    required: [],
  })
  .openapi('Response')

const RouteRequestSchema = z
  .object({
    algorithm: z
      .enum(['round_trip', 'alternative_route'])
      .exactOptional()
      .openapi({
        description:
          'Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing:\nWith `round_trip`, the route will get you back to where you started. This is meant for fun (think of\na bike trip), so we will add some randomness. This requires `ch.disable=true`.\nWith `alternative_route`, we give you not one but several routes that are close to optimal, but\nnot too similar to each other. You can control both of these features with additional parameters, see below.\n',
      }),
    'alternative_route.max_paths': z
      .int32()
      .default(2)
      .exactOptional()
      .openapi({
        description:
          'If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.\n',
      }),
    'alternative_route.max_share_factor': z
      .number()
      .default(0.6)
      .exactOptional()
      .openapi({
        description:
          'If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.\n',
      }),
    'alternative_route.max_weight_factor': z
      .number()
      .default(1.4)
      .exactOptional()
      .openapi({
        description:
          'If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.\n',
      }),
    avoid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify which road classes and environments you would like to avoid.\nPossible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`.\nSeparate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`.\n',
      }),
    block_area: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Block road access via a point with the format `latitude,longitude`\nor an area defined by a circle `lat,lon,radius` or a rectangle `lat1,lon1,lat2,lon2`.\nSeparate several values with `;`. Requires `ch.disable=true`.\n',
      }),
    calc_points: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'If the points for the route should be calculated at all.\n' }),
    'ch.disable': z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Use this parameter in combination with one or more parameters from below.\n',
      }),
    curbsides: z
      .array(z.enum(['any', 'right', 'left']))
      .exactOptional()
      .openapi({
        description:
          'Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.',
        example: ['any', 'right'],
      }),
    debug: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If `true`, the output will be formatted.\n' }),
    details: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,\n`time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539).\n',
      }),
    elevation: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, a third coordinate, the altitude, is included with all positions in the response.\nThis changes the format of the `points` and `snapped_waypoints` fields of the response, in both their\nencodings. Unless you switch off the `points_encoded` parameter, you need special code on the\nclient side that can handle three-dimensional coordinates.\nA request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile.\n',
      }),
    heading_penalty: z
      .int32()
      .default(120)
      .exactOptional()
      .openapi({
        description:
          'Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.\n',
      }),
    headings: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points.\nIn this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree.\nThis parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`.\n',
      }),
    instructions: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'If instructions should be calculated and returned\n' }),
    locale: z
      .string()
      .default('en')
      .exactOptional()
      .openapi({
        description:
          'The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.\n',
      }),
    optimize: z
      .string()
      .default('false')
      .exactOptional()
      .openapi({
        description:
          'Normally, the calculated route will visit the points in the order you specified them.\nIf you have more than two points, you can set this parameter to `"true"` and the points may be re-ordered to minimize the total travel time.\nKeep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits.\n',
      }),
    pass_through: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.\n',
      }),
    point_hints: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.',
        example: ['Lindenschmitstraße', 'Thalkirchener Str.'],
      }),
    points: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'The points for the route in an array of `[longitude,latitude]`. For instance, if you want to calculate a route from point A to B to C\nthen you specify `points: [ [A_longitude, A_latitude], [B_longitude, B_latitude], [C_longitude, C_latitude]]\n',
        example: [
          [11.539421, 48.118477],
          [11.559023, 48.12228],
        ],
      }),
    points_encoded: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact\nbut requires special client code to unpack. (We provide it in our JavaScript client library!)\nSet this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`.\nSee the description of the response format for more information.\n',
      }),
    'round_trip.distance': z
      .int32()
      .default(10000)
      .exactOptional()
      .openapi({
        description:
          'If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.\n',
      }),
    'round_trip.seed': z
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
        description:
          'If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.\n',
      }),
    snap_preventions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`',
        example: ['motorway', 'ferry', 'tunnel'],
      }),
    vehicle: VehicleProfileIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The vehicle profile for which the route should be calculated. Other vehicles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) for the details.',
        }),
    )
      .exactOptional()
      .openapi({ example: 'bike' }),
    weighting: z
      .string()
      .default('fastest')
      .exactOptional()
      .openapi({
        description:
          "Determines the way the ''best'' route is calculated. Default is `fastest`. Other options are `shortest` (e.g. for `vehicle=foot` or `bike`) and `short_fastest` which finds a reasonable balance between `shortest` and `fastest`. Requires `ch.disable=true`.\n",
      }),
  })
  .openapi({
    example: {
      calc_points: true,
      details: ['road_class', 'surface'],
      instructions: true,
      locale: 'en',
      point_hints: ['Lindenschmitstraße', 'Thalkirchener Str.'],
      points: [
        [11.539421, 48.118477],
        [11.559023, 48.12228],
      ],
      points_encoded: false,
      snap_preventions: ['motorway', 'ferry', 'tunnel'],
      vehicle: 'bike',
    },
    required: [],
  })
  .openapi('RouteRequest')

const RouteResponsePathSchema = z
  .object({
    ascend: z.float64().exactOptional().openapi({ description: 'The total ascent, in meters.\n' }),
    bbox: z
      .array(z.float64())
      .exactOptional()
      .openapi({
        description:
          'The bounding box of the route geometry. Format: `[minLon, minLat, maxLon, maxLat]`.\n',
      }),
    descend: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total descent, in meters.\n' }),
    details: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Details, as requested with the `details` parameter. Consider the value `{"street_name": [[0,2,"Frankfurter Straße"],[2,6,"Zollweg"]]}`.\nIn this example, the route uses two streets: The first, Frankfurter Straße, is\nused between `points[0]` and `points[2]`, and the second, Zollweg, between `points[2]` and `points[6]`.\nSee [here](https://discuss.graphhopper.com/t/2539) for discussion.\n',
      }),
    distance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The total distance, in meters. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).\n",
      }),
    instructions: z
      .array(
        z
          .object({
            distance: z
              .float64()
              .exactOptional()
              .openapi({ description: 'The distance for this instruction, in meters.\n' }),
            exit_number: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'Only available for roundabout instructions (sign is 6). The count of exits at which the route leaves the roundabout.\n',
              }),
            interval: z
              .array(z.int32())
              .exactOptional()
              .openapi({
                description:
                  'Two indices into `points`, referring to the beginning and the end of the segment of the route\nthis instruction refers to.\n',
              }),
            sign: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'A number which specifies the sign to show:\n\n| sign | description  |\n|---|---|\n|-98| an U-turn without the knowledge if it is a right or left U-turn |\n| -8| a left U-turn |\n| -7| keep left |\n| -6| **not yet used**: leave roundabout |\n| -3| turn sharp left |\n| -2| turn left |\n| -1| turn slight left |\n|  0| continue on street |\n|  1| turn slight right |\n|  2| turn right |\n|  3| turn sharp right |\n|  4| the finish instruction before the last point |\n|  5| the instruction before a via point |\n|  6| the instruction before entering a roundabout |\n|  7| keep right |\n|  8| a right U-turn |\n|  *| **For future compatibility** it is important that all clients are able to handle also unknown instruction sign numbers\n',
              }),
            street_name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The name of the street to turn onto in order to follow the route.\n',
              }),
            text: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A description what the user has to do in order to follow the route. The language depends on the locale parameter.\n',
              }),
            time: z
              .int32()
              .exactOptional()
              .openapi({ description: 'The duration for this instruction, in milliseconds.\n' }),
            turn_angle: z
              .float64()
              .exactOptional()
              .openapi({
                description:
                  'Only available for roundabout instructions (sign is 6). The radian of the route within the roundabout `0 < r < 2*PI` for clockwise and\n`-2*PI < r < 0` for counterclockwise turns.\n',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'The instructions for this route. This feature is under active development, and our instructions can sometimes be misleading,\nso be mindful when using them for navigation.\n',
      }),
    points: z
      .any()
      .openapi({
        description:
          'The geometry of the route. The format depends on the value of `points_encoded`.\n',
      })
      .and(z.union([EncodedLineStringSchema, LineStringSchema]))
      .exactOptional(),
    points_encoded: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the `points` and `snapped_waypoints` fields are polyline-encoded strings rather than JSON arrays\nof coordinates. See the field description for more information on the two formats.\n',
      }),
    points_order: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description:
          'An array of indices (zero-based), specifiying the order in which the input points are visited.\nOnly present if the `optimize` parameter was used.\n',
      }),
    snapped_waypoints: z
      .any()
      .openapi({
        description:
          'The snapped input points. The format depends on the value of `points_encoded`.\n',
      })
      .and(z.union([EncodedLineStringSchema, LineStringSchema]))
      .exactOptional(),
    time: z
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
        description:
          "The total travel time, in milliseconds. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).\n",
      }),
  })
  .openapi({ required: [] })
  .openapi('RouteResponsePath')

const RouteResponseSchema = z
  .object({
    info: ResponseInfoSchema.exactOptional(),
    paths: z.array(RouteResponsePathSchema).exactOptional(),
  })
  .openapi({
    example: {
      hints: { 'visited_nodes.average': 58, 'visited_nodes.sum': 58 },
      info: { copyrights: ['GraphHopper', 'OpenStreetMap contributors'], took: 2 },
      paths: [
        {
          ascend: 6.3294677734375,
          bbox: [11.539424, 48.118343, 11.558901, 48.122364],
          descend: 25.0579833984375,
          details: {},
          distance: 1791.011,
          instructions: [
            {
              distance: 672.954,
              heading: 89.04,
              interval: [0, 6],
              sign: 0,
              street_name: 'Lindenschmitstraße',
              text: 'Continue onto Lindenschmitstraße',
              time: 144703,
            },
            {
              distance: 107.145,
              interval: [6, 7],
              sign: -2,
              street_name: '',
              text: 'Turn left',
              time: 22675,
            },
            {
              distance: 140.169,
              interval: [7, 10],
              sign: 2,
              street_name: 'Oberländerstraße',
              text: 'Turn right onto Oberländerstraße',
              time: 28032,
            },
            {
              distance: 360.232,
              interval: [10, 18],
              sign: 1,
              street_name: '',
              text: 'Turn slight right',
              time: 72677,
            },
            {
              distance: 177.621,
              interval: [18, 20],
              sign: 2,
              street_name: 'Thalkirchner Straße',
              text: 'Turn right onto Thalkirchner Straße',
              time: 35524,
            },
            {
              distance: 332.89,
              interval: [20, 24],
              sign: -2,
              street_name: 'Thalkirchner Straße',
              text: 'Turn left onto Thalkirchner Straße',
              time: 67351,
            },
            {
              distance: 0,
              interval: [24, 24],
              last_heading: 45.67046584987792,
              sign: 4,
              street_name: '',
              text: 'Arrive at destination',
              time: 0,
            },
          ],
          legs: [],
          points: {
            coordinates: [
              [11.539424, 48.118352],
              [11.540387, 48.118368],
              [11.54061, 48.118356],
              [11.541941, 48.118409],
              [11.543696, 48.118344],
              [11.547167, 48.118343],
              [11.548478, 48.118366],
              [11.548487, 48.119329],
              [11.548807, 48.119328],
              [11.549408, 48.119366],
              [11.550349, 48.119508],
              [11.550441, 48.119473],
              [11.551109, 48.119467],
              [11.551553, 48.119445],
              [11.551748, 48.119398],
              [11.552087, 48.119475],
              [11.552236, 48.119542],
              [11.552353, 48.119635],
              [11.553853, 48.121136],
              [11.555448, 48.12039],
              [11.555797, 48.120206],
              [11.55632, 48.120592],
              [11.556716, 48.120919],
              [11.557326, 48.121345],
              [11.558901, 48.122364],
            ],
            type: 'LineString',
          },
          points_encoded: false,
          snapped_waypoints: {
            coordinates: [
              [11.539424, 48.118352],
              [11.558901, 48.122364],
            ],
            type: 'LineString',
          },
          time: 370962,
          transfers: 0,
          weight: 307.852443,
        },
      ],
    },
    required: [],
  })
  .openapi('RouteResponse')

const SymmetricalMatrixRequestSchema = z
  .object({
    curbsides: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.',
      }),
    fail_fast: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).',
      }),
    out_arrays: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies which matrices should be included in the response. Specify one or more of the following options `weights`, `times`, `distances`. The units of the entries of `distances` are meters, of `times` are seconds and of `weights` is arbitrary and it can differ for different vehicles or versions of this API.',
      }),
    point_hints: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.',
      }),
    points: z
      .array(z.array(z.float64()))
      .exactOptional()
      .openapi({
        description:
          'Specify multiple points for which the weight-, route-, time- or distance-matrix should be calculated as follows: `[longitude,latitude]`. In this case the origins are identical to the destinations. Thus, if there are N points, NxN entries are calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with `from_point` or `to_point.`.',
      }),
    snap_preventions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`',
      }),
    turn_costs: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.',
      }),
    vehicle: VehicleProfileIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The vehicle profile for which the route should be calculated. Other vehicles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) for the details.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      out_arrays: ['weights', 'times', 'distances'],
      point_hints: ['Copenhagen Street', 'Richmond Avenue', 'White Lion Street'],
      points: [
        [-0.11379003524780275, 51.53664617804063],
        [-0.10866165161132814, 51.538621486960956],
        [-0.11059284210205078, 51.53245503603458],
      ],
      vehicle: 'car',
    },
    required: [],
  })
  .openapi('SymmetricalMatrixRequest')

const ApiKeySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const postClusterRoute = createRoute({
  method: 'post',
  path: '/cluster',
  tags: ['Cluster API'],
  summary: 'POST Cluster Endpoint',
  description:
    '\nThe Cluster endpoint is used with a POST request towards\n`https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.\nPlease note that for problems that take longer than 10 seconds a bad request error is returned.\nIn this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.\n',
  operationId: 'solveClusteringProblem',
  request: {
    body: {
      description: 'Request object that contains the problem to be solved',
      content: { 'application/json': { schema: ClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A response containing the solution',
      content: { 'application/json': { schema: ClusterResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Error occurred when reading the request. Request is invalid.',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    500: {
      description: 'Error occurred on server side.',
      content: { 'application/json': { schema: InternalErrorMessageSchema } },
    },
  },
})

export const postClusterCalculateRoute = createRoute({
  method: 'post',
  path: '/cluster/calculate',
  tags: ['Cluster API'],
  summary: 'Batch Cluster Endpoint',
  description:
    '\nPrefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for\nlong running problems only. The work flow is asynchronous:\n\n- send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.\n- poll the solution every 500ms until it gives `status=finished`. Do this with a GET request\n  towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.\n',
  operationId: 'asyncClusteringProblem',
  request: {
    body: {
      description: 'Request object that contains the problem to be solved',
      content: { 'application/json': { schema: ClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'A jobId you can use to retrieve your solution from the server - see solution endpoint.',
      content: { 'application/json': { schema: JobIdSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
      links: {
        GetSolutionByJobId: {
          operationId: 'getSolution',
          parameters: { jobId: '$response.body#/job_id' },
          description:
            'The `job_id` value returned in the response can be used as the `jobId` parameter in `GET /vrp/{jobId}`.\n',
        },
      },
    },
    400: {
      description: 'Error occurred when reading client request. Request is invalid.',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    500: {
      description: 'Error occurred on server side.',
      content: { 'application/json': { schema: InternalErrorMessageSchema } },
    },
  },
})

export const getClusterSolutionJobIdRoute = createRoute({
  method: 'get',
  path: '/cluster/solution/{jobId}',
  tags: ['Cluster API'],
  summary: 'GET Batch Solution Endpoint',
  description:
    'This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).\nYou can fetch it with the job_id, you have been sent.\n',
  operationId: 'getClusterSolution',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Request solution with jobId',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A response containing the solution',
      content: { 'application/json': { schema: ClusterResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Error occurred on client side such as invalid input.',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    404: {
      description: 'Requested solution could not be found.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Error message',
                  example: 'Invalid job_id 73314c89-ee4b-459c-aca4-0ad6d6e558da',
                }),
              status: z
                .string()
                .default('finished')
                .exactOptional()
                .openapi({ description: 'status', example: 'finished' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: { description: 'Error occurred on server side.' },
  },
})

export const getGeocodeRoute = createRoute({
  method: 'get',
  path: '/geocode',
  tags: ['Geocoding API'],
  summary: 'Geocoding Endpoint',
  description:
    '\n### Introduction\n\n![Geocoding Example](./img/geocoding-example.png)\n\n_Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).\nFor example the conversion from `Berlin` to `52.5170365,13.3888599`.\n\n_Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).\n',
  operationId: 'getGeocode',
  request: {
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.",
            in: 'query',
            name: 'locale',
            schema: { default: 'en', type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the maximum number of results to return',
            in: 'query',
            name: 'limit',
            schema: { default: 10, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      reverse: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.',
            in: 'query',
            name: 'reverse',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      debug: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If `true`, the output will be formatted.',
            in: 'query',
            name: 'debug',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      point: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "_Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.",
            in: 'query',
            name: 'point',
            schema: { type: 'string' },
            required: false,
          },
        }),
      provider: z
        .string()
        .default('default')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The provider parameter is currently under development and can fall back to `default` at any time.\nThe intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it\'s worth to compare the different providers.\nTo try it append the `provider`parameter to the URL like `&provider=nominatim`,\nthe result structure should be identical in all cases - if not, please report this back to us.\nKeep in mind that some providers do not support certain parameters or don\'t return some fields, for example `osm_id` and `osm_type` are not supported by every geocoding provider.\nIf you would like to use additional parameters of one of the providers, but it\'s not available for the GraphHopper Geocoding API, yet? Please contact us.\n\nThe credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.\n\nCurrently, only the default provider and gisgraphy supports autocompletion of partial search strings.\n\nAll providers support normal "forward" geocoding and reverse geocoding via `reverse=true`.\n\n#### Default (`provider=default`)\n\nThis provider returns results of our internal geocoding engine, as described above.\nIn addition to the above documented parameters the following parameters are possible:\n* `bbox` - the expected format is `minLon,minLat,maxLon,maxLat`\n* `osm_tag` - you can filter `key:value` or exclude places with certain OpenStreetMap tags `!key:value`. E.g. `osm_tag=tourism:museum` or just the key `osm_tag=tourism`. To exclude multiple tags you add multiple `osm_tag` parameters.\n\n#### Nominatim (`provider=nominatim`)\n\nThe GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.\n\nIn addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):\n\n* `viewbox` - the expected format is `minLon,minLat,maxLon,maxLat`\n* `bounded` - If 1 and a viewbox is given, restrict the result to items contained within that viewbox. Default is 0.\n\n#### Gisgraphy (`provider=gisgraphy`)\n\nThis provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).\n\n**Limitations:** The `locale` parameter is not supported. Gisgraphy does not return OSM tags or an extent.\n\nGisgraphy has a special autocomplete API, which you can use by adding `autocomplete=true` (does not work with `reverse=true`). The autocomplete API is optimized on predicting text input, but returns less information.\n\nIn addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):\n\n* `radius` - radius in meters\n* `country` - restrict search for the specified country. The value must be the ISO 3166 Alpha 2 code of the country.\n\n#### NetToolKit (`provider=nettoolkit`)\n\nThis provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).\n\nThe following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo/geocoding) for more details):\n- `source`: User can choose which source provider to geocode the address, this value is "NetToolKit" by default\n- `country_code`: an iso-3166-2 country code (e.g : US) filter the results to the specify country code\n\n**Limitations:** NetToolKit does not support the `locale` parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).\n\n#### OpenCage Data (`provider=opencagedata`)\n\nThis provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).\n\nIn addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):\n\n* countrycode - The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States. \n* bounds - the expected format is `minLon,minLat,maxLon,maxLat`\n',
            in: 'query',
            name: 'provider',
            schema: { default: 'default', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array found locations',
      content: { 'application/json': { schema: GeocodingResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: GHErrorSchema } },
    },
  },
})

export const getIsochroneRoute = createRoute({
  method: 'get',
  path: '/isochrone',
  tags: ['Isochrone API'],
  summary: 'Isochrone Endpoint',
  description:
    "### Example\nYou can get an example response via:\n\n```\ncurl \"https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]\"\n```\n\nDon't forget to replace the placeholder with your own key.\n\n### Introduction\n![Isochrone screenshot](./img/isochrone-example.png)\n\nAn isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.\nWith the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.\n\n### Use Cases\nSome possible areas in which this API may be useful to you:\n\n- real estate analysis\n- realtors\n- vehicle scheduling\n- geomarketing\n- reach of electric vehicles\n- transport planning\n- logistics (distribution and retail network planning)\n\n### API Clients and Examples\nSee the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).\n",
  operationId: 'getIsochrone',
  request: {
    query: z.object({
      point: z
        .string()
        .openapi({
          param: {
            description: 'Specify the start coordinate',
            in: 'query',
            name: 'point',
            required: true,
            schema: { type: 'string' },
          },
        }),
      time_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(600)
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify which time the vehicle should travel. In seconds.',
            in: 'query',
            name: 'time_limit',
            schema: { default: 600, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      distance_limit: z
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
            description: 'Specify which distance the vehicle should travel. In meters.',
            in: 'query',
            name: 'distance_limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      vehicle: VehicleProfileIdSchema.openapi({
        param: {
          description: 'The vehicle profile for which the route should be calculated.\n',
          in: 'query',
          name: 'vehicle',
          schema: { $ref: '#/components/schemas/VehicleProfileId' },
          required: false,
        },
      }).exactOptional(),
      buckets: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number by which to divide the given `time_limit` to create `buckets` nested isochrones of time intervals `time_limit-n*time_limit/buckets`. Applies analogously to `distance_limit`.',
            in: 'query',
            name: 'buckets',
            schema: { default: 1, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      reverse_flow: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `false` the flow goes from point to the polygon, if `true` the flow goes from the polygon "inside" to the point.\nExample use case for `false`&#58; *How many potential customer can be reached within 30min travel time from your store* vs. `true`&#58; *How many customers can reach your store within 30min travel time.*\n',
            in: 'query',
            name: 'reverse_flow',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      weighting: z
        .enum(['fastest', 'shortest'])
        .default('fastest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Use `"shortest"` to get an isodistance line instead of an isochrone.',
            in: 'query',
            name: 'weighting',
            schema: { default: 'fastest', enum: ['fastest', 'shortest'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Isochrone Result',
      content: { 'application/json': { schema: IsochroneResponseSchema } },
    },
    default: {
      description: 'Unexpected Error',
      content: { 'application/json': { schema: GHErrorSchema } },
    },
  },
})

export const postMatchRoute = createRoute({
  method: 'post',
  path: '/match',
  tags: ['Map Matching API'],
  summary: 'Map-match a GPX file',
  description:
    '### Example\nYou get an example response for a GPX via:\n\n```\ncurl -XPOST -H "Content-Type: application/gpx+xml" "https://graphhopper.com/api/1/match?vehicle=car&key=[YOUR_KEY]" --data @/path/to/some.gpx\n```\n\nA minimal working GPX file looks like\n```gpx\n<gpx>\n <trk>\n  <trkseg>\n   <trkpt lat="51.343657" lon="12.360708"></trkpt>\n   <trkpt lat="51.343796" lon="12.361337"></trkpt>\n   <trkpt lat="51.342784" lon="12.361882"></trkpt>\n  </trkseg>\n </trk>\n</gpx>\n```\n\n### Introduction\n![Map Matching screenshot](./img/map-matching-example.gif)\n\nThe Map Matching API is part of the GraphHopper Directions API and with this API you can snap measured GPS points typically as GPX files to a digital\nroad network to e.g. clean data or attach certain data like elevation or turn instructions to it. Read more at Wikipedia.\n\nIn the example screenshot above and demo you see the Map Matching API in action where the black line is the GPS track and the green one is matched result.\n\nMost of the times, you can simply POST a GPX file, but some of the request parameters of the [Routing API](#tag/Routing-API) apply here, too.\n\n### API Clients and Examples\nSee the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#map-matching).\n\n### Limits and Counts\nThe cost for one request depends on the number of GPS location and is documented [here](https://graphhopper.com/api/1/docs/FAQ/).\n\nOne request should not exceed the Map Matching API location limit depending on the package, see the pricing in our dashboard.\n',
  operationId: 'postGPX',
  request: {
    query: z.object({
      gps_accuracy: z
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
            description: 'Specify the precision of a point, in meter',
            in: 'query',
            name: 'gps_accuracy',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      vehicle: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the vehicle profile like car',
            in: 'query',
            name: 'vehicle',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Routing Result',
      content: { 'application/json': { schema: RouteResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'Unexpected Error',
      content: { 'application/json': { schema: GHErrorSchema } },
    },
  },
})

export const getMatrixRoute = createRoute({
  method: 'get',
  path: '/matrix',
  tags: ['Matrix API'],
  summary: 'GET Matrix Endpoint',
  description:
    'With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient\nas it works out-of-the-box in the browser. If possible you should\nprefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations\nand can also gzip the **request**. (Note, that all endpoints return gzipped responses).\n',
  operationId: 'getMatrix',
  request: {
    query: z.object({
      point: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify multiple points in `latitude,longitude` for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point.',
            explode: true,
            in: 'query',
            name: 'point',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      from_point: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting points for the routes in `latitude,longitude`. E.g. if you want to calculate the three routes A-&gt;1, A-&gt;2, A-&gt;3 then you have one from_point parameter and three to_point parameters.',
            explode: true,
            in: 'query',
            name: 'from_point',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      to_point: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The destination points for the routes in `latitude,longitude`.',
            explode: true,
            in: 'query',
            name: 'to_point',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      point_hint: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional parameter. Specifies a hint for each `point` parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.',
            explode: true,
            in: 'query',
            name: 'point_hint',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      from_point_hint: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'For the from_point parameter. See point_hint',
            explode: true,
            in: 'query',
            name: 'from_point_hint',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      to_point_hint: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'For the to_point parameter. See point_hint',
            explode: true,
            in: 'query',
            name: 'to_point_hint',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      snap_prevention: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`\n',
            explode: true,
            in: 'query',
            name: 'snap_prevention',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      curbside: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['any', 'right', 'left'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.',
            explode: true,
            in: 'query',
            name: 'curbside',
            required: false,
            schema: { items: { enum: ['any', 'right', 'left'], type: 'string' }, type: 'array' },
          },
        }),
      from_curbside: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['any', 'right', 'left'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Curbside setting for the from_point parameter. See curbside.',
            explode: true,
            in: 'query',
            name: 'from_curbside',
            required: false,
            schema: { items: { enum: ['any', 'right', 'left'], type: 'string' }, type: 'array' },
          },
        }),
      to_curbside: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['any', 'right', 'left'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Curbside setting for the to_point parameter. See curbside.',
            explode: true,
            in: 'query',
            name: 'to_curbside',
            required: false,
            schema: { items: { enum: ['any', 'right', 'left'], type: 'string' }, type: 'array' },
          },
        }),
      out_array: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies which arrays should be included in the response. Specify one or more of the following options 'weights', 'times', 'distances'. To specify more than one array use e.g. out_array=times&out_array=distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API.",
            explode: true,
            in: 'query',
            name: 'out_array',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      vehicle: VehicleProfileIdSchema.openapi({
        param: {
          description: 'The vehicle profile for which the matrix should be calculated.',
          in: 'query',
          name: 'vehicle',
          schema: { $ref: '#/components/schemas/VehicleProfileId' },
          required: false,
        },
      }).exactOptional(),
      fail_fast: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).',
            in: 'query',
            name: 'fail_fast',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      turn_costs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.',
            in: 'query',
            name: 'turn_costs',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Matrix API response',
      content: { 'application/json': { schema: MatrixResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'Unexpected Error',
      content: { 'application/json': { schema: GHErrorSchema } },
    },
  },
})

export const postMatrixRoute = createRoute({
  method: 'post',
  path: '/matrix',
  tags: ['Matrix API'],
  summary: 'POST Matrix Endpoint',
  description:
    '\nThe [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request.\nIn those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key.\nBoth request scenarios are identical except that all singular parameter names are named as their plural for a POST request.\nThe effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters\nplease refer to the [guide of the GET endpoint](#operation/getMatrix).\n\n**Please note that in contrast to GET endpoint the points have to be specified as `[longitude, latitude]` array (in that order, similar to [GeoJson](http://geojson.org/geojson-spec.html#examples))**.\n\nFor example the query `point=10,11&point=20,22&vehicle=car` will be converted to the following JSON:\n```json\n{ "points": [[11,10], [22,20]], "vehicle": "car" }\n```\n\nA complete curl Example:\n```bash\ncurl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]" -d \'{"elevation":false,"out_arrays":["weights", "times"],"from_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"to_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"vehicle":"car"}\'\n```\n',
  operationId: 'postMatrix',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([MatrixRequestSchema, SymmetricalMatrixRequestSchema]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Matrix API response',
      content: { 'application/json': { schema: MatrixResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'Unexpected Error',
      content: { 'application/json': { schema: GHErrorSchema } },
    },
  },
})

export const postMatrixCalculateRoute = createRoute({
  method: 'post',
  path: '/matrix/calculate',
  tags: ['Matrix API'],
  summary: 'Batch Matrix Endpoint',
  description:
    'Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.\n\nThe Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):\n * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ "job_id": "7ac65787-fb99-4e02-a832-2c3010c70097" }`\n * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`\n\nHere are some full examples via curl:\n```bash\n$ curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]" -d \'{"points":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}\'\n{"job_id":"7ac65787-fb99-4e02-a832-2c3010c70097"}\n```\n\nPick the returned `job_id` and use it in the next GET requests:\n```bash\n$ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"\n{"status":"waiting"}\n```\n\nWhen the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`:\n```bash\n$ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"\n{"solution":{"weights":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],"info":{"copyrights":["GraphHopper","OpenStreetMap contributors"]}},"status":"finished"}\n```\n\nPlease note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.:\n```json\n{"message":"Cannot find from_points: 1"}\n```\nAnd the optional `hints` array.\n',
  operationId: 'calculateMatrix',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([MatrixRequestSchema, SymmetricalMatrixRequestSchema]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'A jobId you can use to retrieve your solution from the server.',
      content: { 'application/json': { schema: JobIdSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'Unexpected Error',
      content: { 'application/json': { schema: GHErrorSchema } },
    },
  },
})

export const getMatrixSolutionJobIdRoute = createRoute({
  method: 'get',
  path: '/matrix/solution/{jobId}',
  tags: ['Matrix API'],
  summary: 'GET Batch Matrix Endpoint',
  description:
    'This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent.\n',
  operationId: 'getMatrixSolution',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Request solution with jobId',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A response containing the matrix',
      content: { 'application/json': { schema: MatrixResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'Unexpected Error',
      content: { 'application/json': { schema: GHErrorSchema } },
    },
  },
})

export const getRouteRoute = createRoute({
  method: 'get',
  path: '/route',
  tags: ['Routing API'],
  summary: 'GET Route Endpoint',
  description:
    'The GET request is the most simple one: just specify the parameter in the URL and you are done.\nCan be tried directly in every browser.\n',
  operationId: 'getRoute',
  request: {
    query: z.object({
      point: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible.\nThe maximum number depends on your plan.\n',
            explode: true,
            in: 'query',
            name: 'point',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      point_hint: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters.\n',
            explode: true,
            in: 'query',
            name: 'point_hint',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      snap_prevention: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`.\n',
            explode: true,
            in: 'query',
            name: 'snap_prevention',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      vehicle: VehicleProfileIdSchema.openapi({
        param: {
          description: 'The vehicle profile for which the route should be calculated.\n',
          in: 'query',
          name: 'vehicle',
          schema: { $ref: '#/components/schemas/VehicleProfileId' },
          required: false,
        },
      }).exactOptional(),
      curbside: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['any', 'right', 'left'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.\n',
            in: 'query',
            name: 'curbside',
            schema: { items: { enum: ['any', 'right', 'left'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      turn_costs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap.\n',
            in: 'query',
            name: 'turn_costs',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.\n',
            in: 'query',
            name: 'locale',
            schema: { default: 'en', type: 'string' },
            required: false,
          },
        }),
      elevation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `true`, a third coordinate, the altitude, is included with all positions in the response.\nThis changes the format of the `points` and `snapped_waypoints` fields of the response, in both their\nencodings. Unless you switch off the `points_encoded` parameter, you need special code on the\nclient side that can handle three-dimensional coordinates.\nA request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile.\n',
            in: 'query',
            name: 'elevation',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      details: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional parameter to retrieve path details. You can request additional details for the route: `street_name`, \n`time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539).\n',
            explode: true,
            in: 'query',
            name: 'details',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      optimize: z
        .string()
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Normally, the calculated route will visit the points in the order you specified them.\nIf you have more than two points, you can set this parameter to `"true"` and the points may be re-ordered to minimize the total travel time.\nKeep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits.\n',
            in: 'query',
            name: 'optimize',
            schema: { default: 'false', type: 'string' },
            required: false,
          },
        }),
      instructions: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'If instructions should be calculated and returned\n',
            in: 'query',
            name: 'instructions',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      calc_points: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'If the points for the route should be calculated at all.\n',
            in: 'query',
            name: 'calc_points',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      debug: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If `true`, the output will be formatted.\n',
            in: 'query',
            name: 'debug',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      points_encoded: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact\nbut requires special client code to unpack. (We provide it in our JavaScript client library!)\nSet this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`.\nSee the description of the response format for more information.\n',
            in: 'query',
            name: 'points_encoded',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      'ch.disable': z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Use this parameter in combination with one or more parameters from below.\n',
            in: 'query',
            name: 'ch.disable',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      weighting: z
        .string()
        .default('fastest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Determines the way the "best" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`.\n',
            in: 'query',
            name: 'weighting',
            schema: { default: 'fastest', type: 'string' },
            required: false,
          },
        }),
      heading: z
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
            description:
              'Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points.\nIn this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree.\nThis parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`.\n',
            explode: true,
            in: 'query',
            name: 'heading',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      heading_penalty: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(120)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.\n',
            in: 'query',
            name: 'heading_penalty',
            schema: { default: 120, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      pass_through: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.\n',
            in: 'query',
            name: 'pass_through',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      block_area: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`.\nYou can also block all road segments crossing a geometric shape. Specify a circle using the format `lat,lon,radius`, or a polygon using the format `lat1,lon1,lat2,lon2,...,latN,lonN`.\nYou can specify several shapes, separating them with `;`. Requires `ch.disable=true`.\n',
            in: 'query',
            name: 'block_area',
            schema: { type: 'string' },
            required: false,
          },
        }),
      avoid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify which road classes and environments you would like to avoid. \nPossible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`.\nSeparate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`.\n',
            in: 'query',
            name: 'avoid',
            schema: { type: 'string' },
            required: false,
          },
        }),
      algorithm: z
        .enum(['round_trip', 'alternative_route'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing:\nWith `alternative_route`, we give you not one but several routes that are close to optimal, but\nnot too similar to each other. \nWith `round_trip`, the route will get you back to where you started. This is meant for fun (think of\na bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`.\nYou can control both of these features with additional parameters, see below. \n',
            in: 'query',
            name: 'algorithm',
            schema: { enum: ['round_trip', 'alternative_route'], type: 'string' },
            required: false,
          },
        }),
      'round_trip.distance': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(10000)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.\n',
            in: 'query',
            name: 'round_trip.distance',
            schema: { default: 10000, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      'round_trip.seed': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.\n',
            in: 'query',
            name: 'round_trip.seed',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      'alternative_route.max_paths': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(2)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.\n',
            in: 'query',
            name: 'alternative_route.max_paths',
            schema: { default: 2, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      'alternative_route.max_weight_factor': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(1.4)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.\n',
            in: 'query',
            name: 'alternative_route.max_weight_factor',
            schema: { default: 1.4, type: 'number' },
            required: false,
          },
        }),
      'alternative_route.max_share_factor': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0.6)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.\n',
            in: 'query',
            name: 'alternative_route.max_share_factor',
            schema: { default: 0.6, type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Routing Result',
      content: { 'application/json': { schema: RouteResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description:
        'Your request is not valid. For example, you specified too few or too many points.',
      content: { 'application/json': { schema: GHErrorSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Authentication necessary',
      content: { 'application/json': { schema: GHErrorSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'API limit reached.',
      content: { 'application/json': { schema: GHErrorSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal server error. We get notified automatically and fix this asap.',
      content: { 'application/json': { schema: GHErrorSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    501: {
      description: 'Only a special list of vehicles is supported.',
      content: { 'application/json': { schema: GHErrorSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postRouteRoute = createRoute({
  method: 'post',
  path: '/route',
  tags: ['Routing API'],
  summary: 'POST Route Endpoint',
  description:
    'Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started.\nIf you are familiar with POST requests and JSON then do not hesitate to continue here.\n\nEspecially when you use many locations you should get familiar with this POST endpoint as the GET endpoint\nhas an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly\nspeed up the request.\n\nTo do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request.\nThe effected parameters are: `points`, `point_hints` and `snap_preventions`.\n\n**Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.\n\nFor example `point=10,11&point=20,22` will be converted to the `points` array (plural):\n```json\n{ "points": [[11,10], [22,20]] }\n```\nNote again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]`\nsimilar to [GeoJson](http://geojson.org/geojson-spec.html#examples).\n\nExample:\n```bash\ncurl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/route?key=[YOUR_KEY]" -d \'{"elevation":false,"points":[[-0.087891,51.534377],[-0.090637,51.467697]],"vehicle":"car"}\'\n```\n',
  operationId: 'postRoute',
  request: { body: { content: { 'application/json': { schema: RouteRequestSchema } } } },
  responses: {
    200: {
      description: 'Routing Result',
      content: { 'application/json': { schema: RouteResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description:
        'Your request is not valid. For example, you specified too few or too many points.',
      content: { 'application/json': { schema: GHErrorSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Authentication necessary',
      content: { 'application/json': { schema: GHErrorSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    429: {
      description: 'API limit reached.',
      content: { 'application/json': { schema: GHErrorSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal server error. We get notified automatically and fix this asap.',
      content: { 'application/json': { schema: GHErrorSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    501: {
      description: 'Only a special list of vehicles is supported.',
      content: { 'application/json': { schema: GHErrorSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getRouteInfoRoute = createRoute({
  method: 'get',
  path: '/route/info',
  tags: ['Routing API'],
  summary: 'Coverage information',
  description:
    'Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.\n',
  responses: {
    200: {
      description: 'Coverage Information',
      content: { 'application/json': { schema: InfoResponseSchema } },
    },
  },
})

export const postVrpRoute = createRoute({
  method: 'post',
  path: '/vrp',
  tags: ['Route Optimization API'],
  summary: 'POST route optimization problem',
  description:
    '\nTo get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).\n\nTo solve a new vehicle routing problem, make a HTTP POST to this URL\n\n```\nhttps://graphhopper.com/api/1/vrp?key=<your_key>\n```\n\nIt returns the solution to this problem in the JSON response.\n\nPlease note that this URL is very well suited to solve minor problems.\nLarger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.\nTo solve them, please use the [batch mode URL](#operation/asyncVRP) instead.\n',
  operationId: 'solveVRP',
  request: {
    body: {
      description: 'The request that contains the vehicle routing problem to be solved.',
      content: { 'application/json': { schema: RequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A response containing the solution',
      content: { 'application/json': { schema: ResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Error occurred when reading the request. Request is invalid.',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    500: {
      description: 'Error occurred on server side.',
      content: { 'application/json': { schema: InternalErrorMessageSchema } },
    },
  },
})

export const postVrpOptimizeRoute = createRoute({
  method: 'post',
  path: '/vrp/optimize',
  tags: ['Route Optimization API'],
  summary: 'POST route optimization problem (batch mode)',
  description:
    "\nTo solve a vehicle routing problem, perform the following steps:\n\n1.) Make a HTTP POST to this URL\n\n```\nhttps://graphhopper.com/api/1/vrp/optimize?key=<your_key>\n```\n\nIt returns a job id (job_id).\n\n2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:\n\n```\nhttps://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>\n```\n\nWe recommend to query the solution every 500ms until it returns 'status=finished'.\n\n**Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer\nthe [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.\n",
  operationId: 'asyncVRP',
  request: {
    body: {
      description: 'The request that contains the problem to be solved.',
      content: { 'application/json': { schema: RequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'A jobId you can use to retrieve your solution from the server - see solution endpoint.',
      content: { 'application/json': { schema: JobIdSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
      links: {
        GetSolutionByJobId: {
          operationId: 'getSolution',
          parameters: { jobId: '$response.body#/job_id' },
          description:
            'The `job_id` value returned in the response can be used as the `jobId` parameter in `GET /vrp/{jobId}`.\n',
        },
      },
    },
    400: {
      description: 'Error occurred when reading client request. Request is invalid.',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    500: {
      description: 'Error occurred on server side.',
      content: { 'application/json': { schema: InternalErrorMessageSchema } },
    },
  },
})

export const getVrpSolutionJobIdRoute = createRoute({
  method: 'get',
  path: '/vrp/solution/{jobId}',
  tags: ['Route Optimization API'],
  summary: 'GET the solution (batch mode)',
  description:
    '\nTake the job id and fetch the solution for the vehicle routing problem from this URL:\n\n```\nhttps://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>\n```\n\nYou get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).\n',
  operationId: 'getSolution',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'Request solution with jobId',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A response containing the solution',
      content: { 'application/json': { schema: ResponseSchema } },
      headers: z.object({
        'X-RateLimit-Credits': {
          description:
            'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Your current daily credit limit.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your current daily credit limit.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'Your remaining credits until the reset.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Your remaining credits until the reset.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The number of seconds that you have to wait before a reset of the credit count is done.',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'The number of seconds that you have to wait before a reset of the credit count is done.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Error occurred on client side such as invalid input.',
      content: { 'application/json': { schema: BadRequestSchema } },
    },
    404: {
      description: 'Requested solution could not be found.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Error message',
                  example: 'Invalid job_id 73314c89-ee4b-459c-aca4-0ad6d6e558da',
                }),
              status: z
                .string()
                .default('finished')
                .exactOptional()
                .openapi({ description: 'status', example: 'finished' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: { description: 'Error occurred on server side.' },
  },
})
