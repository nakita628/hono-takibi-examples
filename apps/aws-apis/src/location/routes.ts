import { createRoute, z } from '@hono/zod-openapi'

const AssociateTrackerConsumerResponseSchema = z
  .object({})
  .openapi('AssociateTrackerConsumerResponse')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const IdSchema = z
  .string()
  .regex(/^[-._\p{L}\p{N}]+$/u)
  .min(1)
  .max(100)
  .openapi('Id')

const BatchItemErrorCodeSchema = z
  .enum([
    'AccessDeniedError',
    'ConflictError',
    'InternalServerError',
    'ResourceNotFoundError',
    'ThrottlingError',
    'ValidationError',
  ])
  .openapi('BatchItemErrorCode')

const StringSchema = z.string().openapi('String')

const BatchItemErrorSchema = z
  .object({
    Code: BatchItemErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code associated with the batch request error.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'A message with the reason for the batch request error.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the batch request error details associated with the request.',
    required: [],
  })
  .openapi('BatchItemError')

const BatchDeleteDevicePositionHistoryErrorSchema = z
  .object({
    DeviceId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the device for this position.' }),
    ),
    Error: BatchItemErrorSchema,
  })
  .openapi({
    required: ['DeviceId', 'Error'],
    description: 'Contains the tracker resource details.',
  })
  .openapi('BatchDeleteDevicePositionHistoryError')

const BatchDeleteDevicePositionHistoryErrorListSchema = z
  .array(BatchDeleteDevicePositionHistoryErrorSchema)
  .openapi('BatchDeleteDevicePositionHistoryErrorList')

const BatchDeleteDevicePositionHistoryResponseSchema = z
  .object({
    Errors: BatchDeleteDevicePositionHistoryErrorListSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains error details for each device history that failed to delete.',
        }),
    ),
  })
  .openapi({ required: ['Errors'] })
  .openapi('BatchDeleteDevicePositionHistoryResponse')

const BatchDeleteGeofenceErrorSchema = z
  .object({
    Error: BatchItemErrorSchema.and(
      z.any().openapi({ description: 'Contains details associated to the batch error.' }),
    ),
    GeofenceId: IdSchema.and(
      z.any().openapi({ description: 'The geofence associated with the error message.' }),
    ),
  })
  .openapi({
    required: ['Error', 'GeofenceId'],
    description:
      'Contains error details for each geofence that failed to delete from the geofence collection.',
  })
  .openapi('BatchDeleteGeofenceError')

const BatchDeleteGeofenceErrorListSchema = z
  .array(BatchDeleteGeofenceErrorSchema)
  .openapi('BatchDeleteGeofenceErrorList')

const BatchDeleteGeofenceResponseSchema = z
  .object({
    Errors: BatchDeleteGeofenceErrorListSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains error details for each geofence that failed to delete.',
        }),
    ),
  })
  .openapi({ required: ['Errors'] })
  .openapi('BatchDeleteGeofenceResponse')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const BatchEvaluateGeofencesErrorSchema = z
  .object({
    DeviceId: IdSchema.and(
      z.any().openapi({ description: 'The device associated with the position evaluation error.' }),
    ),
    Error: BatchItemErrorSchema.and(
      z.any().openapi({ description: 'Contains details associated to the batch error.' }),
    ),
    SampleTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a timestamp for when the error occurred in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
  })
  .openapi({
    required: ['DeviceId', 'Error', 'SampleTime'],
    description:
      'Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection.',
  })
  .openapi('BatchEvaluateGeofencesError')

const BatchEvaluateGeofencesErrorListSchema = z
  .array(BatchEvaluateGeofencesErrorSchema)
  .openapi('BatchEvaluateGeofencesErrorList')

const BatchEvaluateGeofencesResponseSchema = z
  .object({
    Errors: BatchEvaluateGeofencesErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains error details for each device that failed to evaluate its position against the given geofence collection.',
        }),
    ),
  })
  .openapi({ required: ['Errors'] })
  .openapi('BatchEvaluateGeofencesResponse')

const PositionalAccuracyHorizontalDoubleSchema = z
  .float64()
  .min(0)
  .max(10000)
  .openapi('PositionalAccuracyHorizontalDouble')

const PositionalAccuracySchema = z
  .object({
    Horizontal: PositionalAccuracyHorizontalDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "Estimated maximum distance, in meters, between the measured position and the true position of a device, along the Earth's surface.",
        }),
    ),
  })
  .openapi({
    required: ['Horizontal'],
    description: 'Defines the level of certainty of the position.',
  })
  .openapi('PositionalAccuracy')

const DoubleSchema = z.float64().openapi('Double')

const PositionSchema = z.array(DoubleSchema).length(2).openapi('Position')

const PropertyMapValueStringSchema = z.string().min(1).max(40).openapi('PropertyMapValueString')

const PropertyMapSchema = z
  .record(z.string(), PropertyMapValueStringSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 3)
  .openapi('PropertyMap')

const DevicePositionUpdateSchema = z
  .object({
    Accuracy: PositionalAccuracySchema.and(
      z.any().openapi({ description: 'The accuracy of the device position.' }),
    ).exactOptional(),
    DeviceId: IdSchema.and(
      z.any().openapi({ description: 'The device associated to the position update.' }),
    ),
    Position: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The latest device position defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">WGS 84</a> format: <code>[X or longitude, Y or latitude]</code>.',
        }),
    ),
    PositionProperties: PropertyMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Associates one of more properties with the position update. A property is a key-value pair stored with the position update and added to any geofence event the update may trigger.</p> <p>Format: <code>"key" : "value"</code> </p>',
        }),
    ).exactOptional(),
    SampleTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the device\'s position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
  })
  .openapi({
    required: ['DeviceId', 'Position', 'SampleTime'],
    description: 'Contains the position update details for a device.',
  })
  .openapi('DevicePositionUpdate')

const DevicePositionSchema = z
  .object({
    Accuracy: PositionalAccuracySchema.and(
      z.any().openapi({ description: 'The accuracy of the device position.' }),
    ).exactOptional(),
    DeviceId: IdSchema.and(
      z.any().openapi({ description: 'The device whose position you retrieved.' }),
    ).exactOptional(),
    Position: PositionSchema.and(
      z.any().openapi({ description: 'The last known device position.' }),
    ),
    PositionProperties: PropertyMapSchema.and(
      z.any().openapi({ description: 'The properties associated with the position.' }),
    ).exactOptional(),
    ReceivedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the tracker resource received the device position in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    SampleTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the device\'s position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['Position', 'ReceivedTime', 'SampleTime'],
    description: 'Contains the device position details.',
  })
  .openapi('DevicePosition')

const DevicePositionListSchema = z.array(DevicePositionSchema).openapi('DevicePositionList')

const BatchGetDevicePositionErrorSchema = z
  .object({
    DeviceId: IdSchema.and(
      z.any().openapi({ description: "The ID of the device that didn't return a position." }),
    ),
    Error: BatchItemErrorSchema.and(
      z.any().openapi({ description: 'Contains details related to the error code.' }),
    ),
  })
  .openapi({
    required: ['DeviceId', 'Error'],
    description: "Contains error details for each device that didn't return a position.",
  })
  .openapi('BatchGetDevicePositionError')

const BatchGetDevicePositionErrorListSchema = z
  .array(BatchGetDevicePositionErrorSchema)
  .openapi('BatchGetDevicePositionErrorList')

const BatchGetDevicePositionResponseSchema = z
  .object({
    DevicePositions: DevicePositionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains device position details such as the device ID, position, and timestamps for when the position was received and sampled.',
        }),
    ),
    Errors: BatchGetDevicePositionErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains error details for each device that failed to send its position to the tracker resource.',
        }),
    ),
  })
  .openapi({ required: ['DevicePositions', 'Errors'] })
  .openapi('BatchGetDevicePositionResponse')

const BatchPutGeofenceErrorSchema = z
  .object({
    Error: BatchItemErrorSchema.and(
      z.any().openapi({ description: 'Contains details associated to the batch error.' }),
    ),
    GeofenceId: IdSchema.and(
      z.any().openapi({ description: 'The geofence associated with the error message.' }),
    ),
  })
  .openapi({
    required: ['Error', 'GeofenceId'],
    description:
      'Contains error details for each geofence that failed to be stored in a given geofence collection.',
  })
  .openapi('BatchPutGeofenceError')

const BatchPutGeofenceErrorListSchema = z
  .array(BatchPutGeofenceErrorSchema)
  .openapi('BatchPutGeofenceErrorList')

const BatchPutGeofenceSuccessSchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence was stored in a geofence collection in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
    GeofenceId: IdSchema.and(
      z
        .any()
        .openapi({ description: 'The geofence successfully stored in a geofence collection.' }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
  })
  .openapi({
    required: ['CreateTime', 'GeofenceId', 'UpdateTime'],
    description:
      'Contains a summary of each geofence that was successfully stored in a given geofence collection.',
  })
  .openapi('BatchPutGeofenceSuccess')

const BatchPutGeofenceSuccessListSchema = z
  .array(BatchPutGeofenceSuccessSchema)
  .openapi('BatchPutGeofenceSuccessList')

const BatchPutGeofenceResponseSchema = z
  .object({
    Errors: BatchPutGeofenceErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains additional error details for each geofence that failed to be stored in a geofence collection.',
        }),
    ),
    Successes: BatchPutGeofenceSuccessListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains each geofence that was successfully stored in a geofence collection.',
        }),
    ),
  })
  .openapi({ required: ['Errors', 'Successes'] })
  .openapi('BatchPutGeofenceResponse')

const CircleSchema = z
  .object({
    Center: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A single point geometry, specifying the center of the circle, using <a href="https://gisgeography.com/wgs84-world-geodetic-system/">WGS 84</a> coordinates, in the form <code>[longitude, latitude]</code>.',
        }),
    ),
    Radius: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The radius of the circle in meters. Must be greater than zero and no larger than 100,000 (100 kilometers).',
        }),
    ),
  })
  .openapi({
    required: ['Center', 'Radius'],
    description: 'A circle on the earth, as defined by a center point and a radius.',
  })
  .openapi('Circle')

const LinearRingSchema = z.array(PositionSchema).min(4).openapi('LinearRing')

const LinearRingsSchema = z.array(LinearRingSchema).min(1).openapi('LinearRings')

const GeofenceGeometrySchema = z
  .object({
    Circle: CircleSchema.and(
      z
        .any()
        .openapi({
          description: 'A circle on the earth, as defined by a center point and a radius.',
        }),
    ).exactOptional(),
    Polygon: LinearRingsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A polygon is a list of linear rings which are each made up of a list of vertices.</p> <p>Each vertex is a 2-dimensional point of the form: <code>[longitude, latitude]</code>. This is represented as an array of doubles of length 2 (so <code>[double, double]</code>).</p> <p>An array of 4 or more vertices, where the first and last vertex are the same (to form a closed boundary), is called a linear ring. The linear ring vertices must be listed in counter-clockwise order around the ring’s interior. The linear ring is represented as an array of vertices, or an array of arrays of doubles (<code>[[double, double], ...]</code>).</p> <p>A geofence consists of a single linear ring. To allow for future expansion, the Polygon parameter takes an array of linear rings, which is represented as an array of arrays of arrays of doubles (<code>[[[double, double], ...], ...]</code>).</p> <p>A linear ring for use in geofences can consist of between 4 and 1,000 vertices.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Contains the geofence geometry details.</p> <p>A geofence geometry is made up of either a polygon or a circle. Can be either a polygon or a circle. Including both will return a validation error.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>",
    required: [],
  })
  .openapi('GeofenceGeometry')

const BatchPutGeofenceRequestEntrySchema = z
  .object({
    GeofenceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the geofence to be stored in a given geofence collection.',
        }),
    ),
    Geometry: GeofenceGeometrySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the details of the position of the geofence. Can be either a polygon or a circle. Including both will return a validation error.</p> <note> <p>Each <a href="https://docs.aws.amazon.com/location-geofences/latest/APIReference/API_GeofenceGeometry.html"> geofence polygon</a> can have a maximum of 1,000 vertices.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['GeofenceId', 'Geometry'],
    description: 'Contains geofence geometry details. ',
  })
  .openapi('BatchPutGeofenceRequestEntry')

const BatchUpdateDevicePositionErrorSchema = z
  .object({
    DeviceId: IdSchema.and(
      z.any().openapi({ description: 'The device associated with the failed location update.' }),
    ),
    Error: BatchItemErrorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains details related to the error code such as the error code and error message.',
        }),
    ),
    SampleTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the device position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['DeviceId', 'Error', 'SampleTime'],
    description: 'Contains error details for each device that failed to update its position.',
  })
  .openapi('BatchUpdateDevicePositionError')

const BatchUpdateDevicePositionErrorListSchema = z
  .array(BatchUpdateDevicePositionErrorSchema)
  .openapi('BatchUpdateDevicePositionErrorList')

const BatchUpdateDevicePositionResponseSchema = z
  .object({
    Errors: BatchUpdateDevicePositionErrorListSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains error details for each device that failed to update its position.',
        }),
    ),
  })
  .openapi({ required: ['Errors'] })
  .openapi('BatchUpdateDevicePositionResponse')

const LegDistanceDoubleSchema = z.float64().min(0).openapi('LegDistanceDouble')

const LegDurationSecondsDoubleSchema = z.float64().min(0).openapi('LegDurationSecondsDouble')

const LineStringSchema = z.array(PositionSchema).min(2).openapi('LineString')

const LegGeometrySchema = z
  .object({
    LineString: LineStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An ordered list of positions used to plot a route on a map. </p> <p>The first position is closest to the start position for the leg, and the last position is the closest to the end position for the leg.</p> <ul> <li> <p>For example, <code>[[-123.117, 49.284],[-123.115, 49.285],[-123.115, 49.285]]</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the geometry details for each path between a pair of positions. Used in plotting a route leg on a map.',
    required: [],
  })
  .openapi('LegGeometry')

const StepDistanceDoubleSchema = z.float64().min(0).openapi('StepDistanceDouble')

const StepDurationSecondsDoubleSchema = z.float64().min(0).openapi('StepDurationSecondsDouble')

const StepGeometryOffsetIntegerSchema = z.int().min(0).openapi('StepGeometryOffsetInteger')

const StepSchema = z
  .object({
    Distance: StepDistanceDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The travel distance between the step's <code>StartPosition</code> and <code>EndPosition</code>.",
        }),
    ),
    DurationSeconds: StepDurationSecondsDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The estimated travel time, in seconds, from the step's <code>StartPosition</code> to the <code>EndPosition</code>. . The travel mode and departure time that you specify in the request determines the calculated time.",
        }),
    ),
    EndPosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end position of a step. If the position the last step in the leg, this position is the same as the end position of the leg.',
        }),
    ),
    GeometryOffset: StepGeometryOffsetIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Represents the start position, or index, in a sequence of steps within the leg's line string geometry. For example, the index of the first step in a leg geometry is <code>0</code>. </p> <p>Included in the response for queries that set <code>IncludeLegGeometry</code> to <code>True</code>. </p>",
        }),
    ).exactOptional(),
    StartPosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The starting position of a step. If the position is the first step in the leg, this position is the same as the start position of the leg.',
        }),
    ),
  })
  .openapi({
    required: ['Distance', 'DurationSeconds', 'EndPosition', 'StartPosition'],
    description:
      ' Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg. ',
  })
  .openapi('Step')

const StepListSchema = z.array(StepSchema).openapi('StepList')

const LegSchema = z
  .object({
    Distance: LegDistanceDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The distance between the leg's <code>StartPosition</code> and <code>EndPosition</code> along a calculated route. </p> <ul> <li> <p>The default measurement is <code>Kilometers</code> unless the request specifies a <code>DistanceUnit</code> of <code>Miles</code>.</p> </li> </ul>",
        }),
    ),
    DurationSeconds: LegDurationSecondsDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The estimated travel time between the leg's <code>StartPosition</code> and <code>EndPosition</code>. The travel mode and departure time that you specify in the request determines the calculated time.",
        }),
    ),
    EndPosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The terminating position of the leg. Follows the format <code>[longitude,latitude]</code>.</p> <note> <p>If the <code>EndPosition</code> isn\'t located on a road, it\'s <a href="https://docs.aws.amazon.com/location/latest/developerguide/nap-to-nearby-road.html">snapped to a nearby road</a>. </p> </note>',
        }),
    ),
    Geometry: LegGeometrySchema.and(
      z
        .any()
        .openapi({ description: "Contains the calculated route's path as a linestring geometry." }),
    ).exactOptional(),
    StartPosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The starting position of the leg. Follows the format <code>[longitude,latitude]</code>.</p> <note> <p>If the <code>StartPosition</code> isn\'t located on a road, it\'s <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">snapped to a nearby road</a>. </p> </note>',
        }),
    ),
    Steps: StepListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Contains a list of steps, which represent subsections of a leg. Each step provides instructions for how to move to the next step in the leg such as the step's start position, end position, travel distance, travel duration, and geometry offset.",
        }),
    ),
  })
  .openapi({
    required: ['Distance', 'DurationSeconds', 'EndPosition', 'StartPosition', 'Steps'],
    description:
      '<p>Contains the calculated route\'s details for each path between a pair of positions. The number of legs returned corresponds to one fewer than the total number of positions in the request. </p> <p>For example, a route with a departure position and destination position returns one leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">snapped to a nearby road</a>:</p> <ul> <li> <p>The <code>StartPosition</code> is the departure position.</p> </li> <li> <p>The <code>EndPosition</code> is the destination position.</p> </li> </ul> <p>A route with a waypoint between the departure and destination position returns two legs with the positions snapped to a nearby road:</p> <ul> <li> <p>Leg 1: The <code>StartPosition</code> is the departure position . The <code>EndPosition</code> is the waypoint positon.</p> </li> <li> <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The <code>EndPosition</code> is the destination position.</p> </li> </ul>',
  })
  .openapi('Leg')

const LegListSchema = z.array(LegSchema).openapi('LegList')

const CalculateRouteSummaryDistanceDoubleSchema = z
  .float64()
  .min(0)
  .openapi('CalculateRouteSummaryDistanceDouble')

const DistanceUnitSchema = z.enum(['Kilometers', 'Miles']).openapi('DistanceUnit')

const CalculateRouteSummaryDurationSecondsDoubleSchema = z
  .float64()
  .min(0)
  .openapi('CalculateRouteSummaryDurationSecondsDouble')

const BoundingBoxSchema = z.array(DoubleSchema).length(4).openapi('BoundingBox')

const CalculateRouteSummarySchema = z
  .object({
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data provider of traffic and road network data used to calculate the route. Indicates one of the available providers:</p> <ul> <li> <p> <code>Esri</code> </p> </li> <li> <p> <code>Grab</code> </p> </li> <li> <p> <code>Here</code> </p> </li> </ul> <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>',
        }),
    ),
    Distance: CalculateRouteSummaryDistanceDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The total distance covered by the route. The sum of the distance travelled between every stop on the route.</p> <note> <p>If Esri is the data source for the route calculator, the route distance can’t be greater than 400 km. If the route exceeds 400 km, the response is a <code>400 RoutesValidationException</code> error.</p> </note>',
        }),
    ),
    DistanceUnit: DistanceUnitSchema.and(
      z.any().openapi({ description: 'The unit of measurement for route distances.' }),
    ),
    DurationSeconds: CalculateRouteSummaryDurationSecondsDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total travel time for the route measured in seconds. The sum of the travel time between every stop on the route.',
        }),
    ),
    RouteBBox: BoundingBoxSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a geographical box surrounding a route. Used to zoom into a route when displaying it in a map. For example, <code>[min x, min y, max x, max y]</code>.</p> <p>The first 2 <code>bbox</code> parameters describe the lower southwest corner: </p> <ul> <li> <p>The first <code>bbox</code> position is the X coordinate or longitude of the lower southwest corner. </p> </li> <li> <p>The second <code>bbox</code> position is the Y coordinate or latitude of the lower southwest corner. </p> </li> </ul> <p>The next 2 <code>bbox</code> parameters describe the upper northeast corner: </p> <ul> <li> <p>The third <code>bbox</code> position is the X coordinate, or longitude of the upper northeast corner. </p> </li> <li> <p>The fourth <code>bbox</code> position is the Y coordinate, or latitude of the upper northeast corner. </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['DataSource', 'Distance', 'DistanceUnit', 'DurationSeconds', 'RouteBBox'],
    description: 'A summary of the calculated route.',
  })
  .openapi('CalculateRouteSummary')

const CalculateRouteResponseSchema = z
  .object({
    Legs: LegListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains details about each path between a pair of positions included along a route such as: <code>StartPosition</code>, <code>EndPosition</code>, <code>Distance</code>, <code>DurationSeconds</code>, <code>Geometry</code>, and <code>Steps</code>. The number of legs returned corresponds to one fewer than the total number of positions in the request. </p> <p>For example, a route with a departure position and destination position returns one leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">snapped to a nearby road</a>:</p> <ul> <li> <p>The <code>StartPosition</code> is the departure position.</p> </li> <li> <p>The <code>EndPosition</code> is the destination position.</p> </li> </ul> <p>A route with a waypoint between the departure and destination position returns two legs with the positions snapped to a nearby road:</p> <ul> <li> <p>Leg 1: The <code>StartPosition</code> is the departure position . The <code>EndPosition</code> is the waypoint positon.</p> </li> <li> <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The <code>EndPosition</code> is the destination position.</p> </li> </ul>',
        }),
    ),
    Summary: CalculateRouteSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the whole route, such as: <code>RouteBBox</code>, <code>DataSource</code>, <code>Distance</code>, <code>DistanceUnit</code>, and <code>DurationSeconds</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Legs', 'Summary'],
    description:
      'Returns the result of the route calculation. Metadata includes legs and route summary.',
  })
  .openapi('CalculateRouteResponse')

const BooleanSchema = z.boolean().openapi('Boolean')

const TruckDimensionsHeightDoubleSchema = z.float64().min(0).openapi('TruckDimensionsHeightDouble')

const TruckDimensionsLengthDoubleSchema = z.float64().min(0).openapi('TruckDimensionsLengthDouble')

const DimensionUnitSchema = z.enum(['Meters', 'Feet']).openapi('DimensionUnit')

const TruckDimensionsWidthDoubleSchema = z.float64().min(0).openapi('TruckDimensionsWidthDouble')

const TruckDimensionsSchema = z
  .object({
    Height: TruckDimensionsHeightDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The height of the truck.</p> <ul> <li> <p>For example, <code>4.5</code>.</p> </li> </ul> <note> <p> For routes calculated with a HERE resource, this value must be between 0 and 50 meters. </p> </note>',
        }),
    ).exactOptional(),
    Length: TruckDimensionsLengthDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The length of the truck.</p> <ul> <li> <p>For example, <code>15.5</code>.</p> </li> </ul> <note> <p> For routes calculated with a HERE resource, this value must be between 0 and 300 meters. </p> </note>',
        }),
    ).exactOptional(),
    Unit: DimensionUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies the unit of measurement for the truck dimensions.</p> <p>Default Value: <code>Meters</code> </p>',
        }),
    ).exactOptional(),
    Width: TruckDimensionsWidthDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The width of the truck.</p> <ul> <li> <p>For example, <code>4.5</code>.</p> </li> </ul> <note> <p> For routes calculated with a HERE resource, this value must be between 0 and 50 meters. </p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Contains details about the truck dimensions in the unit of measurement that you specify. Used to filter out roads that can't support or allow the specified dimensions for requests that specify <code>TravelMode</code> as <code>Truck</code>.",
    required: [],
  })
  .openapi('TruckDimensions')

const TruckWeightTotalDoubleSchema = z.float64().min(0).openapi('TruckWeightTotalDouble')

const VehicleWeightUnitSchema = z.enum(['Kilograms', 'Pounds']).openapi('VehicleWeightUnit')

const TruckWeightSchema = z
  .object({
    Total: TruckWeightTotalDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The total weight of the truck. </p> <ul> <li> <p>For example, <code>3500</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Unit: VehicleWeightUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unit of measurement to use for the truck weight.</p> <p>Default Value: <code>Kilograms</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Contains details about the truck's weight specifications. Used to avoid roads that can't support or allow the total weight for requests that specify <code>TravelMode</code> as <code>Truck</code>.",
    required: [],
  })
  .openapi('TruckWeight')

const RouteMatrixEntryDistanceDoubleSchema = z
  .float64()
  .min(0)
  .openapi('RouteMatrixEntryDistanceDouble')

const RouteMatrixEntryDurationSecondsDoubleSchema = z
  .float64()
  .min(0)
  .openapi('RouteMatrixEntryDurationSecondsDouble')

const RouteMatrixErrorCodeSchema = z
  .enum([
    'RouteNotFound',
    'RouteTooLong',
    'PositionsNotFound',
    'DestinationPositionNotFound',
    'DeparturePositionNotFound',
    'OtherValidationError',
  ])
  .openapi('RouteMatrixErrorCode')

const RouteMatrixEntryErrorSchema = z
  .object({
    Code: RouteMatrixErrorCodeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of error which occurred for the route calculation.' }),
    ),
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A message about the error that occurred for the route calculation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Code'],
    description:
      '<p>An error corresponding to the calculation of a route between the <code>DeparturePosition</code> and <code>DestinationPosition</code>.</p> <p>The error code can be one of the following:</p> <ul> <li> <p> <code>RouteNotFound</code> - Unable to find a valid route with the given parameters.</p> </li> </ul> <ul> <li> <p> <code>RouteTooLong</code> - Route calculation went beyond the maximum size of a route and was terminated before completion.</p> </li> </ul> <ul> <li> <p> <code>PositionsNotFound</code> - One or more of the input positions were not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>DestinationPositionNotFound</code> - The destination position was not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>DeparturePositionNotFound</code> - The departure position was not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>OtherValidationError</code> - The given inputs were not valid or a route was not found. More information is given in the error <code>Message</code> </p> </li> </ul>',
  })
  .openapi('RouteMatrixEntryError')

const RouteMatrixEntrySchema = z
  .object({
    Distance: RouteMatrixEntryDistanceDoubleSchema.and(
      z.any().openapi({ description: 'The total distance of travel for the route.' }),
    ).exactOptional(),
    DurationSeconds: RouteMatrixEntryDurationSecondsDoubleSchema.and(
      z.any().openapi({ description: 'The expected duration of travel for the route.' }),
    ).exactOptional(),
    Error: RouteMatrixEntryErrorSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error corresponding to the calculation of a route between the <code>DeparturePosition</code> and <code>DestinationPosition</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The result for the calculated route of one <code>DeparturePosition</code> <code>DestinationPosition</code> pair.',
    required: [],
  })
  .openapi('RouteMatrixEntry')

const RouteMatrixRowSchema = z.array(RouteMatrixEntrySchema).openapi('RouteMatrixRow')

const RouteMatrixSchema = z.array(RouteMatrixRowSchema).openapi('RouteMatrix')

const CalculateRouteMatrixResponseSnappedDeparturePositionsListSchema = z
  .array(PositionSchema)
  .min(1)
  .max(350)
  .openapi('CalculateRouteMatrixResponseSnappedDeparturePositionsList')

const CalculateRouteMatrixResponseSnappedDestinationPositionsListSchema = z
  .array(PositionSchema)
  .min(1)
  .max(350)
  .openapi('CalculateRouteMatrixResponseSnappedDestinationPositionsList')

const CalculateRouteMatrixSummaryErrorCountIntegerSchema = z
  .int()
  .min(1)
  .max(160000)
  .openapi('CalculateRouteMatrixSummaryErrorCountInteger')

const CalculateRouteMatrixSummaryRouteCountIntegerSchema = z
  .int()
  .min(1)
  .max(160000)
  .openapi('CalculateRouteMatrixSummaryRouteCountInteger')

const CalculateRouteMatrixSummarySchema = z
  .object({
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data provider of traffic and road network data used to calculate the routes. Indicates one of the available providers:</p> <ul> <li> <p> <code>Esri</code> </p> </li> <li> <p> <code>Grab</code> </p> </li> <li> <p> <code>Here</code> </p> </li> </ul> <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>',
        }),
    ),
    DistanceUnit: DistanceUnitSchema.and(
      z.any().openapi({ description: 'The unit of measurement for route distances.' }),
    ),
    ErrorCount: CalculateRouteMatrixSummaryErrorCountIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The count of error results in the route matrix. If this number is 0, all routes were calculated successfully.',
        }),
    ),
    RouteCount: CalculateRouteMatrixSummaryRouteCountIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The count of cells in the route matrix. Equal to the number of <code>DeparturePositions</code> multiplied by the number of <code>DestinationPositions</code>.',
        }),
    ),
  })
  .openapi({
    required: ['DataSource', 'DistanceUnit', 'ErrorCount', 'RouteCount'],
    description: 'A summary of the calculated route matrix.',
  })
  .openapi('CalculateRouteMatrixSummary')

const CalculateRouteMatrixResponseSchema = z
  .object({
    RouteMatrix: RouteMatrixSchema.and(
      z
        .any()
        .openapi({
          description:
            'The calculated route matrix containing the results for all pairs of <code>DeparturePositions</code> to <code>DestinationPositions</code>. Each row corresponds to one entry in <code>DeparturePositions</code>. Each entry in the row corresponds to the route from that entry in <code>DeparturePositions</code> to an entry in <code>DestinationPositions</code>. ',
        }),
    ),
    SnappedDeparturePositions: CalculateRouteMatrixResponseSnappedDeparturePositionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'For routes calculated using an Esri route calculator resource, departure positions are snapped to the closest road. For Esri route calculator resources, this returns the list of departure/origin positions used for calculation of the <code>RouteMatrix</code>.',
        }),
    ).exactOptional(),
    SnappedDestinationPositions:
      CalculateRouteMatrixResponseSnappedDestinationPositionsListSchema.and(
        z
          .any()
          .openapi({
            description:
              'The list of destination positions for the route matrix used for calculation of the <code>RouteMatrix</code>.',
          }),
      ).exactOptional(),
    Summary: CalculateRouteMatrixSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains information about the route matrix, <code>DataSource</code>, <code>DistanceUnit</code>, <code>RouteCount</code> and <code>ErrorCount</code>.',
        }),
    ),
  })
  .openapi({
    required: ['RouteMatrix', 'Summary'],
    description: 'Returns the result of the route matrix calculation.',
  })
  .openapi('CalculateRouteMatrixResponse')

const ArnSchema = z
  .string()
  .regex(/^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^\/].*)?$/)
  .min(0)
  .max(1600)
  .openapi('Arn')

const ResourceNameSchema = z
  .string()
  .regex(/^[-._\w]+$/)
  .min(1)
  .max(100)
  .openapi('ResourceName')

const CreateGeofenceCollectionResponseSchema = z
  .object({
    CollectionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the geofence collection resource. Used when you need to specify a resource across all Amazon Web Services. </p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection</code> </p> </li> </ul>',
        }),
    ),
    CollectionName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name for the geofence collection.' }),
    ),
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
  })
  .openapi({ required: ['CollectionArn', 'CollectionName', 'CreateTime'] })
  .openapi('CreateGeofenceCollectionResponse')

const TagValueSchema = z
  .string()
  .regex(/^[A-Za-z0-9 _=@:.+-\/]*$/)
  .min(0)
  .max(256)
  .openapi('TagValue')

const ApiKeySchema = z.string().min(0).max(1000).openapi('ApiKey')

const CreateKeyResponseSchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the API key resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    Key: ApiKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The key value/string of an API key. This value is used when making API calls to authorize the call. For example, see <a href="https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapGlyphs.html">GetMapGlyphs</a>.',
        }),
    ),
    KeyArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:key/ExampleKey</code> </p> </li> </ul>',
        }),
    ),
    KeyName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the API key resource.' }),
    ),
  })
  .openapi({ required: ['CreateTime', 'Key', 'KeyArn', 'KeyName'] })
  .openapi('CreateKeyResponse')

const ApiKeyActionSchema = z
  .string()
  .regex(/^geo:GetMap\*$/)
  .openapi('ApiKeyAction')

const ApiKeyRestrictionsAllowActionsListSchema = z
  .array(ApiKeyActionSchema)
  .length(1)
  .openapi('ApiKeyRestrictionsAllowActionsList')

const RefererPatternSchema = z
  .string()
  .regex(/^([$\-._+!*\u0060(),;\/?:@=&\w]|%([0-9a-fA-F?]{2}|[0-9a-fA-F?]?[*]))+$/)
  .min(0)
  .max(253)
  .openapi('RefererPattern')

const ApiKeyRestrictionsAllowReferersListSchema = z
  .array(RefererPatternSchema)
  .min(1)
  .max(5)
  .openapi('ApiKeyRestrictionsAllowReferersList')

const GeoArnSchema = z
  .string()
  .regex(
    /^arn(:[a-z0-9]+([.-][a-z0-9]+)*):geo(:([a-z0-9]+([.-][a-z0-9]+)*))(:[0-9]+):((\*)|([-a-z]+[\/][*-._\w]+))$/,
  )
  .min(0)
  .max(1600)
  .openapi('GeoArn')

const ApiKeyRestrictionsAllowResourcesListSchema = z
  .array(GeoArnSchema)
  .min(1)
  .max(5)
  .openapi('ApiKeyRestrictionsAllowResourcesList')

const CreateMapResponseSchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.',
        }),
    ),
    MapArn: GeoArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the map resource. Used to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:map/ExampleMap</code> </p> </li> </ul>',
        }),
    ),
    MapName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the map resource.' }),
    ),
  })
  .openapi({ required: ['CreateTime', 'MapArn', 'MapName'] })
  .openapi('CreateMapResponse')

const MapStyleSchema = z
  .string()
  .regex(/^[-._\w]+$/)
  .min(1)
  .max(100)
  .openapi('MapStyle')

const CreatePlaceIndexResponseSchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    IndexArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the place index resource. Used to specify a resource across Amazon Web Services. </p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex</code> </p> </li> </ul>',
        }),
    ),
    IndexName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name for the place index resource.' }),
    ),
  })
  .openapi({ required: ['CreateTime', 'IndexArn', 'IndexName'] })
  .openapi('CreatePlaceIndexResponse')

const IntendedUseSchema = z.enum(['SingleUse', 'Storage']).openapi('IntendedUse')

const CreateRouteCalculatorResponseSchema = z
  .object({
    CalculatorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the route calculator resource. Use the ARN when you specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:route-calculator/ExampleCalculator</code> </p> </li> </ul>',
        }),
    ),
    CalculatorName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the route calculator resource. </p> <ul> <li> <p>For example, <code>ExampleRouteCalculator</code>.</p> </li> </ul>',
        }),
    ),
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The timestamp when the route calculator resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p> <ul> <li> <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['CalculatorArn', 'CalculatorName', 'CreateTime'] })
  .openapi('CreateRouteCalculatorResponse')

const CreateTrackerResponseSchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    TrackerArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:tracker/ExampleTracker</code> </p> </li> </ul>',
        }),
    ),
    TrackerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the tracker resource.' }),
    ),
  })
  .openapi({ required: ['CreateTime', 'TrackerArn', 'TrackerName'] })
  .openapi('CreateTrackerResponse')

const DeleteGeofenceCollectionResponseSchema = z
  .object({})
  .openapi('DeleteGeofenceCollectionResponse')

const DeleteKeyResponseSchema = z.object({}).openapi('DeleteKeyResponse')

const DeleteMapResponseSchema = z.object({}).openapi('DeleteMapResponse')

const DeletePlaceIndexResponseSchema = z.object({}).openapi('DeletePlaceIndexResponse')

const DeleteRouteCalculatorResponseSchema = z.object({}).openapi('DeleteRouteCalculatorResponse')

const DeleteTrackerResponseSchema = z.object({}).openapi('DeleteTrackerResponse')

const ResourceDescriptionSchema = z.string().min(0).max(1000).openapi('ResourceDescription')

const KmsKeyIdSchema = z.string().min(1).max(2048).openapi('KmsKeyId')

const PricingPlanSchema = z
  .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
  .openapi('PricingPlan')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const DescribeGeofenceCollectionResponseSchema = z
  .object({
    CollectionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the geofence collection resource. Used when you need to specify a resource across all Amazon Web Services. </p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection</code> </p> </li> </ul>',
        }),
    ),
    CollectionName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the geofence collection.' }),
    ),
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The optional description for the geofence collection.' }),
    ),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a> assigned to the Amazon Location resource',
        }),
    ).exactOptional(),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.',
        }),
    ).exactOptional(),
    PricingPlanDataSource: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'No longer used. Always returns an empty string.Deprecated. Unused.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Displays the key, value pairs of tags associated with this resource.',
        }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence collection was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
  })
  .openapi({
    required: ['CollectionArn', 'CollectionName', 'CreateTime', 'Description', 'UpdateTime'],
  })
  .openapi('DescribeGeofenceCollectionResponse')

const ApiKeyRestrictionsSchema = z
  .object({
    AllowActions: ApiKeyRestrictionsAllowActionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of allowed actions that an API key resource grants permissions to perform</p> <note> <p>Currently, the only valid action is <code>geo:GetMap*</code> as an input to the list. For example, <code>["geo:GetMap*"]</code> is valid but <code>["geo:GetMapTile"]</code> is not.</p> </note>',
        }),
    ),
    AllowReferers: ApiKeyRestrictionsAllowReferersListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional list of allowed HTTP referers for which requests must originate from. Requests using this API key from other domains will not be allowed.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9) or any symbols in this list <code>$\\-._+!*`(),;/?:@=&amp;</code> </p> </li> <li> <p>May contain a percent (%) if followed by 2 hexadecimal digits (A-F, a-f, 0-9); this is used for URL encoding purposes.</p> </li> <li> <p>May contain wildcard characters question mark (?) and asterisk (*).</p> <p>Question mark (?) will replace any single character (including hexadecimal digits).</p> <p>Asterisk (*) will replace any multiple characters (including multiple hexadecimal digits).</p> </li> <li> <p>No spaces allowed. For example, <code>https://example.com</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    AllowResources: ApiKeyRestrictionsAllowResourcesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of allowed resource ARNs that a API key bearer can perform actions on</p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p> <note> <p>In this preview, you can allow only map resources.</p> </note> <p>Requirements:</p> <ul> <li> <p>Must be prefixed with <code>arn</code>.</p> </li> <li> <p> <code>partition</code> and <code>service</code> must not be empty and should begin with only alphanumeric characters (A–Z, a–z, 0–9) and contain only alphanumeric numbers, hyphens (-) and periods (.).</p> </li> <li> <p> <code>region</code> and <code>account-id</code> can be empty or should begin with only alphanumeric characters (A–Z, a–z, 0–9) and contain only alphanumeric numbers, hyphens (-) and periods (.).</p> </li> <li> <p> <code>resource-id</code> can begin with any character except for forward slash (/) and contain any characters after, including forward slashes to form a path.</p> <p> <code>resource-id</code> can also include wildcard characters, denoted by an asterisk (*).</p> </li> <li> <p> <code>arn</code>, <code>partition</code>, <code>service</code>, <code>region</code>, <code>account-id</code> and <code>resource-id</code> must be delimited by a colon (:).</p> </li> <li> <p>No spaces allowed. For example, <code>arn:aws:geo:region:<i>account-id</i>:map/ExampleMap*</code>.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['AllowActions', 'AllowResources'],
    description:
      'API Restrictions on the allowed actions, resources, and referers for an API key resource.',
  })
  .openapi('ApiKeyRestrictions')

const DescribeKeyResponseSchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the API key resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The optional description for the API key resource.' }),
    ).exactOptional(),
    ExpireTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    Key: ApiKeySchema.and(z.any().openapi({ description: 'The key value/string of an API key.' })),
    KeyArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:key/ExampleKey</code> </p> </li> </ul>',
        }),
    ),
    KeyName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the API key resource.' }),
    ),
    Restrictions: ApiKeyRestrictionsSchema,
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Tags associated with the API key resource.' }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the API key resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({
    required: [
      'CreateTime',
      'ExpireTime',
      'Key',
      'KeyArn',
      'KeyName',
      'Restrictions',
      'UpdateTime',
    ],
  })
  .openapi('DescribeKeyResponse')

const MapConfigurationSchema = z
  .object({
    Style: MapStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the map style selected from an available data provider.</p> <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri map styles</a>:</p> <ul> <li> <p> <code>VectorEsriDarkGrayCanvas</code> – The Esri Dark Gray Canvas map style. A vector basemap with a dark gray, neutral background with minimal colors, labels, and features that\'s designed to draw attention to your thematic content. </p> </li> <li> <p> <code>RasterEsriImagery</code> – The Esri Imagery map style. A raster basemap that provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide. </p> </li> <li> <p> <code>VectorEsriLightGrayCanvas</code> – The Esri Light Gray Canvas map style, which provides a detailed vector basemap with a light gray, neutral background style with minimal colors, labels, and features that\'s designed to draw attention to your thematic content. </p> </li> <li> <p> <code>VectorEsriTopographic</code> – The Esri Light map style, which provides a detailed vector basemap with a classic Esri map style.</p> </li> <li> <p> <code>VectorEsriStreets</code> – The Esri World Streets map style, which provides a detailed vector basemap for the world symbolized with a classic Esri street map style. The vector tile layer is similar in content and style to the World Street Map raster map.</p> </li> <li> <p> <code>VectorEsriNavigation</code> – The Esri World Navigation map style, which provides a detailed basemap for the world symbolized with a custom navigation map style that\'s designed for use during the day in mobile devices.</p> </li> </ul> <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies map styles</a>:</p> <ul> <li> <p> <code>VectorHereContrast</code> – The HERE Contrast (Berlin) map style is a high contrast detailed base map of the world that blends 3D and 2D rendering.</p> <note> <p>The <code>VectorHereContrast</code> style has been renamed from <code>VectorHereBerlin</code>. <code>VectorHereBerlin</code> has been deprecated, but will continue to work in applications that use it.</p> </note> </li> <li> <p> <code>VectorHereExplore</code> – A default HERE map style containing a neutral, global map and its features including roads, buildings, landmarks, and water features. It also now includes a fully designed map of Japan.</p> </li> <li> <p> <code>VectorHereExploreTruck</code> – A global map containing truck restrictions and attributes (e.g. width / height / HAZMAT) symbolized with highlighted segments and icons on top of HERE Explore to support use cases within transport and logistics.</p> </li> <li> <p> <code>RasterHereExploreSatellite</code> – A global map containing high resolution satellite imagery.</p> </li> <li> <p> <code>HybridHereExploreSatellite</code> – A global map displaying the road network, street names, and city labels over satellite imagery. This style will automatically retrieve both raster and vector tiles, and your charges will be based on total tiles retrieved.</p> <note> <p>Hybrid styles use both vector and raster tiles when rendering the map that you see. This means that more tiles are retrieved than when using either vector or raster tiles alone. Your charges will include all tiles retrieved.</p> </note> </li> </ul> <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps map styles</a>:</p> <ul> <li> <p> <code>VectorGrabStandardLight</code> – The Grab Standard Light map style provides a basemap with detailed land use coloring, area names, roads, landmarks, and points of interest covering Southeast Asia.</p> </li> <li> <p> <code>VectorGrabStandardDark</code> – The Grab Standard Dark map style provides a dark variation of the standard basemap covering Southeast Asia.</p> </li> </ul> <note> <p>Grab provides maps only for countries in Southeast Asia, and is only available in the Asia Pacific (Singapore) Region (<code>ap-southeast-1</code>). For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and area covered</a>.</p> </note> <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/open-data.html">Open Data map styles</a>:</p> <ul> <li> <p> <code>VectorOpenDataStandardLight</code> – The Open Data Standard Light map style provides a detailed basemap for the world suitable for website and mobile application use. The map includes highways major roads, minor roads, railways, water features, cities, parks, landmarks, building footprints, and administrative boundaries.</p> </li> <li> <p> <code>VectorOpenDataStandardDark</code> – Open Data Standard Dark is a dark-themed map style that provides a detailed basemap for the world suitable for website and mobile application use. The map includes highways major roads, minor roads, railways, water features, cities, parks, landmarks, building footprints, and administrative boundaries.</p> </li> <li> <p> <code>VectorOpenDataVisualizationLight</code> – The Open Data Visualization Light map style is a light-themed style with muted colors and fewer features that aids in understanding overlaid data.</p> </li> <li> <p> <code>VectorOpenDataVisualizationDark</code> – The Open Data Visualization Dark map style is a dark-themed style with muted colors and fewer features that aids in understanding overlaid data.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Style'],
    description: 'Specifies the map tile style selected from an available provider.',
  })
  .openapi('MapConfiguration')

const DescribeMapResponseSchema = z
  .object({
    Configuration: MapConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the map tile style selected from a partner data provider.',
        }),
    ),
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.',
        }),
    ),
    DataSource: StringSchema.and(
      z.any().openapi({ description: 'Specifies the data provider for the associated map tiles.' }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The optional description for the map resource.' }),
    ),
    MapArn: GeoArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the map resource. Used to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:map/ExampleMap</code> </p> </li> </ul>',
        }),
    ),
    MapName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The map style selected from an available provider.' }),
    ),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Tags associated with the map resource.' }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the map resource was last update in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.',
        }),
    ),
  })
  .openapi({
    required: [
      'Configuration',
      'CreateTime',
      'DataSource',
      'Description',
      'MapArn',
      'MapName',
      'UpdateTime',
    ],
  })
  .openapi('DescribeMapResponse')

const DataSourceConfigurationSchema = z
  .object({
    IntendedUse: IntendedUseSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies how the results of an operation will be stored by the caller. </p> <p>Valid values include:</p> <ul> <li> <p> <code>SingleUse</code> specifies that the results won't be stored. </p> </li> <li> <p> <code>Storage</code> specifies that the result can be cached or stored in a database.</p> </li> </ul> <p>Default value: <code>SingleUse</code> </p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can\'t store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can\'t store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>',
    required: [],
  })
  .openapi('DataSourceConfiguration')

const DescribePlaceIndexResponseSchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data provider of geospatial data. Values can be one of the following:</p> <ul> <li> <p> <code>Esri</code> </p> </li> <li> <p> <code>Grab</code> </p> </li> <li> <p> <code>Here</code> </p> </li> </ul> <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>',
        }),
    ),
    DataSourceConfiguration: DataSourceConfigurationSchema.and(
      z.any().openapi({ description: 'The specified data storage option for requesting Places.' }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The optional description for the place index resource.' }),
    ),
    IndexArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the place index resource. Used to specify a resource across Amazon Web Services. </p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex</code> </p> </li> </ul>',
        }),
    ),
    IndexName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the place index resource being described.' }),
    ),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Tags associated with place index resource.' }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the place index resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({
    required: [
      'CreateTime',
      'DataSource',
      'DataSourceConfiguration',
      'Description',
      'IndexArn',
      'IndexName',
      'UpdateTime',
    ],
  })
  .openapi('DescribePlaceIndexResponse')

const DescribeRouteCalculatorResponseSchema = z
  .object({
    CalculatorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the Route calculator resource. Use the ARN when you specify a resource across Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:route-calculator/ExampleCalculator</code> </p> </li> </ul>',
        }),
    ),
    CalculatorName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the route calculator resource being described.' }),
    ),
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The timestamp when the route calculator resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p> <ul> <li> <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>',
        }),
    ),
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data provider of traffic and road network data. Indicates one of the available providers:</p> <ul> <li> <p> <code>Esri</code> </p> </li> <li> <p> <code>Grab</code> </p> </li> <li> <p> <code>Here</code> </p> </li> </ul> <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The optional description of the route calculator resource.' }),
    ),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Tags associated with route calculator resource.' }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The timestamp when the route calculator resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p> <ul> <li> <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: [
      'CalculatorArn',
      'CalculatorName',
      'CreateTime',
      'DataSource',
      'Description',
      'UpdateTime',
    ],
  })
  .openapi('DescribeRouteCalculatorResponse')

const PositionFilteringSchema = z
  .enum(['TimeBased', 'DistanceBased', 'AccuracyBased'])
  .openapi('PositionFiltering')

const DescribeTrackerResponseSchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The optional description for the tracker resource.' }),
    ),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a> assigned to the Amazon Location resource.',
        }),
    ).exactOptional(),
    PositionFiltering: PositionFilteringSchema.and(
      z.any().openapi({ description: 'The position filtering method of the tracker resource.' }),
    ).exactOptional(),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.',
        }),
    ).exactOptional(),
    PricingPlanDataSource: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'No longer used. Always returns an empty string.Deprecated. Unused.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags associated with the tracker resource.' }),
    ).exactOptional(),
    TrackerArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:tracker/ExampleTracker</code> </p> </li> </ul>',
        }),
    ),
    TrackerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the tracker resource.' }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the tracker resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({ required: ['CreateTime', 'Description', 'TrackerArn', 'TrackerName', 'UpdateTime'] })
  .openapi('DescribeTrackerResponse')

const DisassociateTrackerConsumerResponseSchema = z
  .object({})
  .openapi('DisassociateTrackerConsumerResponse')

const GetDevicePositionResponseSchema = z
  .object({
    Accuracy: PositionalAccuracySchema.and(
      z.any().openapi({ description: 'The accuracy of the device position.' }),
    ).exactOptional(),
    DeviceId: IdSchema.and(
      z.any().openapi({ description: 'The device whose position you retrieved.' }),
    ).exactOptional(),
    Position: PositionSchema.and(
      z.any().openapi({ description: 'The last known device position.' }),
    ),
    PositionProperties: PropertyMapSchema.and(
      z.any().openapi({ description: 'The properties associated with the position.' }),
    ).exactOptional(),
    ReceivedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the tracker resource received the device position in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601 </a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    SampleTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the device\'s position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601 </a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({ required: ['Position', 'ReceivedTime', 'SampleTime'] })
  .openapi('GetDevicePositionResponse')

const TokenSchema = z.string().min(1).max(2000).openapi('Token')

const GetDevicePositionHistoryResponseSchema = z
  .object({
    DevicePositions: DevicePositionListSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the position history details for the requested device.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DevicePositions'] })
  .openapi('GetDevicePositionHistoryResponse')

const GetGeofenceResponseSchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
    GeofenceId: IdSchema.and(z.any().openapi({ description: 'The geofence identifier.' })),
    Geometry: GeofenceGeometrySchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the geofence geometry details describing a polygon or a circle.',
        }),
    ),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the state of the geofence. A geofence will hold one of the following states:</p> <ul> <li> <p> <code>ACTIVE</code> — The geofence has been indexed by the system. </p> </li> <li> <p> <code>PENDING</code> — The geofence is being processed by the system.</p> </li> <li> <p> <code>FAILED</code> — The geofence failed to be indexed by the system.</p> </li> <li> <p> <code>DELETED</code> — The geofence has been deleted from the system index.</p> </li> <li> <p> <code>DELETING</code> — The geofence is being deleted from the system index.</p> </li> </ul>',
        }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence collection was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
  })
  .openapi({ required: ['CreateTime', 'GeofenceId', 'Geometry', 'Status', 'UpdateTime'] })
  .openapi('GetGeofenceResponse')

const BlobSchema = z.string().openapi('Blob')

const GetMapGlyphsResponseSchema = z
  .object({
    Blob: BlobSchema.and(
      z.any().openapi({ description: 'The glyph, as binary blob.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMapGlyphsResponse')

const GetMapSpritesResponseSchema = z
  .object({
    Blob: BlobSchema.and(
      z.any().openapi({ description: 'Contains the body of the sprite sheet or JSON offset ﬁle.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMapSpritesResponse')

const GetMapStyleDescriptorResponseSchema = z
  .object({
    Blob: BlobSchema.and(
      z.any().openapi({ description: 'Contains the body of the style descriptor.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMapStyleDescriptorResponse')

const GetMapTileResponseSchema = z
  .object({
    Blob: BlobSchema.and(
      z.any().openapi({ description: 'Contains Mapbox Vector Tile (MVT) data.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMapTileResponse')

const PlaceGeometrySchema = z
  .object({
    Point: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A single point geometry specifies a location for a Place using <a href="https://gisgeography.com/wgs84-world-geodetic-system/">WGS 84</a> coordinates:</p> <ul> <li> <p> <i>x</i> — Specifies the x coordinate or longitude. </p> </li> <li> <p> <i>y</i> — Specifies the y coordinate or latitude. </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Places uses a point geometry to specify a location or a Place.',
    required: [],
  })
  .openapi('PlaceGeometry')

const IntegerSchema = z.int().openapi('Integer')

const TimeZoneSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the time zone, following the <a href="https://www.iana.org/time-zones"> IANA time zone standard</a>. For example, <code>America/Los_Angeles</code>.',
        }),
    ),
    Offset: IntegerSchema.and(
      z.any().openapi({ description: "The time zone's offset, in seconds, from UTC." }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      'Information about a time zone. Includes the name of the time zone and the offset from UTC in seconds.',
  })
  .openapi('TimeZone')

const PlaceSchema = z
  .object({
    AddressNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The numerical portion of an address, such as a building number. ',
        }),
    ).exactOptional(),
    Country: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A country/region specified using <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit country/region code. For example, <code>CAN</code>.',
        }),
    ).exactOptional(),
    Geometry: PlaceGeometrySchema,
    Interpolated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <code>True</code> if the result is interpolated from other known places.</p> <p> <code>False</code> if the Place is a known place.</p> <p>Not returned when the partner does not provide the information.</p> <p>For example, returns <code>False</code> for an address location that is found in the partner data, but returns <code>True</code> if an address does not exist in the partner data and its location is calculated by interpolating between other known addresses. </p>',
        }),
    ).exactOptional(),
    Label: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full name and address of the point of interest such as a city, region, or country. For example, <code>123 Any Street, Any Town, USA</code>.',
        }),
    ).exactOptional(),
    Municipality: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for a local area, such as a city or town name. For example, <code>Toronto</code>.',
        }),
    ).exactOptional(),
    Neighborhood: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of a community district. For example, <code>Downtown</code>.',
        }),
    ).exactOptional(),
    PostalCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A group of numbers and letters in a country-specific format, which accompanies the address for the purpose of identifying a location. ',
        }),
    ).exactOptional(),
    Region: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for an area or geographical division, such as a province or state name. For example, <code>British Columbia</code>.',
        }),
    ).exactOptional(),
    Street: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for a street or a road to identify a location. For example, <code>Main Street</code>.',
        }),
    ).exactOptional(),
    SubRegion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A county, or an area that's part of a larger region. For example, <code>Metro Vancouver</code>.",
        }),
    ).exactOptional(),
    TimeZone: TimeZoneSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time zone in which the <code>Place</code> is located. Returned only when using HERE as the selected partner.',
        }),
    ).exactOptional(),
    UnitNumber: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For addresses with multiple units, the unit identifier. Can include numbers and letters, for example <code>3B</code> or <code>Unit 123</code>.</p> <note> <p>Returned only for a place index that uses Esri as a data provider. Is not returned for <code>SearchPlaceIndexForPosition</code>.</p> </note>',
        }),
    ).exactOptional(),
    UnitType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'For addresses with a <code>UnitNumber</code>, the type of unit. For example, <code>Apartment</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Geometry'],
    description:
      '<p>Contains details about addresses or points of interest that match the search criteria.</p> <p>Not all details are included with all responses. Some details may only be returned by specific data partners.</p>',
  })
  .openapi('Place')

const GetPlaceResponseSchema = z
  .object({
    Place: PlaceSchema.and(
      z
        .any()
        .openapi({ description: 'Details about the result, such as its address and position.' }),
    ),
  })
  .openapi({ required: ['Place'] })
  .openapi('GetPlaceResponse')

const ListDevicePositionsResponseEntrySchema = z
  .object({
    Accuracy: PositionalAccuracySchema.and(
      z.any().openapi({ description: 'The accuracy of the device position.' }),
    ).exactOptional(),
    DeviceId: IdSchema.and(
      z.any().openapi({ description: 'The ID of the device for this position.' }),
    ),
    Position: PositionSchema.and(
      z
        .any()
        .openapi({
          description: 'The last known device position. Empty if no positions currently stored.',
        }),
    ),
    PositionProperties: PropertyMapSchema.and(
      z.any().openapi({ description: 'The properties associated with the position.' }),
    ).exactOptional(),
    SampleTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the device position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.',
        }),
    ),
  })
  .openapi({
    required: ['DeviceId', 'Position', 'SampleTime'],
    description: 'Contains the tracker resource details.',
  })
  .openapi('ListDevicePositionsResponseEntry')

const ListDevicePositionsResponseEntryListSchema = z
  .array(ListDevicePositionsResponseEntrySchema)
  .openapi('ListDevicePositionsResponseEntryList')

const ListDevicePositionsResponseSchema = z
  .object({
    Entries: ListDevicePositionsResponseEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Contains details about each device's last known position. These details includes the device ID, the time when the position was sampled on the device, the time that the service received the update, and the most recent coordinates.",
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entries'] })
  .openapi('ListDevicePositionsResponse')

const ListGeofenceCollectionsResponseEntrySchema = z
  .object({
    CollectionName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the geofence collection.' }),
    ),
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence collection was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the geofence collection' }),
    ),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.',
        }),
    ).exactOptional(),
    PricingPlanDataSource: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'No longer used. Always returns an empty string.Deprecated. Unused.',
        }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a timestamp for when the resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
  })
  .openapi({
    required: ['CollectionName', 'CreateTime', 'Description', 'UpdateTime'],
    description: 'Contains the geofence collection details.',
  })
  .openapi('ListGeofenceCollectionsResponseEntry')

const ListGeofenceCollectionsResponseEntryListSchema = z
  .array(ListGeofenceCollectionsResponseEntrySchema)
  .openapi('ListGeofenceCollectionsResponseEntryList')

const ListGeofenceCollectionsResponseSchema = z
  .object({
    Entries: ListGeofenceCollectionsResponseEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the geofence collections that exist in your Amazon Web Services account.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entries'] })
  .openapi('ListGeofenceCollectionsResponse')

const ListGeofenceResponseEntrySchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence was stored in a geofence collection in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
    GeofenceId: IdSchema.and(z.any().openapi({ description: 'The geofence identifier.' })),
    Geometry: GeofenceGeometrySchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the geofence geometry details describing a polygon or a circle.',
        }),
    ),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the state of the geofence. A geofence will hold one of the following states:</p> <ul> <li> <p> <code>ACTIVE</code> — The geofence has been indexed by the system. </p> </li> <li> <p> <code>PENDING</code> — The geofence is being processed by the system.</p> </li> <li> <p> <code>FAILED</code> — The geofence failed to be indexed by the system.</p> </li> <li> <p> <code>DELETED</code> — The geofence has been deleted from the system index.</p> </li> <li> <p> <code>DELETING</code> — The geofence is being deleted from the system index.</p> </li> </ul>',
        }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
  })
  .openapi({
    required: ['CreateTime', 'GeofenceId', 'Geometry', 'Status', 'UpdateTime'],
    description: 'Contains a list of geofences stored in a given geofence collection.',
  })
  .openapi('ListGeofenceResponseEntry')

const ListGeofenceResponseEntryListSchema = z
  .array(ListGeofenceResponseEntrySchema)
  .openapi('ListGeofenceResponseEntryList')

const ListGeofencesResponseSchema = z
  .object({
    Entries: ListGeofenceResponseEntryListSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains a list of geofences stored in the geofence collection.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entries'] })
  .openapi('ListGeofencesResponse')

const ListKeysResponseEntrySchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp of when the API key was created, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The optional description for the API key resource.' }),
    ).exactOptional(),
    ExpireTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the API key resource will expire, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.',
        }),
    ),
    KeyName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the API key resource.' }),
    ),
    Restrictions: ApiKeyRestrictionsSchema,
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp of when the API key was last updated, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.',
        }),
    ),
  })
  .openapi({
    required: ['CreateTime', 'ExpireTime', 'KeyName', 'Restrictions', 'UpdateTime'],
    description: 'An API key resource listed in your Amazon Web Services account.',
  })
  .openapi('ListKeysResponseEntry')

const ListKeysResponseEntryListSchema = z
  .array(ListKeysResponseEntrySchema)
  .openapi('ListKeysResponseEntryList')

const ListKeysResponseSchema = z
  .object({
    Entries: ListKeysResponseEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains API key resources in your Amazon Web Services account. Details include API key name, allowed referers and timestamp for when the API key will expire.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entries'] })
  .openapi('ListKeysResponse')

const StatusSchema = z.enum(['Active', 'Expired']).openapi('Status')

const ListMapsResponseEntrySchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the map resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.',
        }),
    ),
    DataSource: StringSchema.and(
      z.any().openapi({ description: 'Specifies the data provider for the associated map tiles.' }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the map resource.' }),
    ),
    MapName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the associated map resource.' }),
    ),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.',
        }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the map resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.',
        }),
    ),
  })
  .openapi({
    required: ['CreateTime', 'DataSource', 'Description', 'MapName', 'UpdateTime'],
    description:
      'Contains details of an existing map resource in your Amazon Web Services account.',
  })
  .openapi('ListMapsResponseEntry')

const ListMapsResponseEntryListSchema = z
  .array(ListMapsResponseEntrySchema)
  .openapi('ListMapsResponseEntryList')

const ListMapsResponseSchema = z
  .object({
    Entries: ListMapsResponseEntryListSchema.and(
      z
        .any()
        .openapi({ description: 'Contains a list of maps in your Amazon Web Services account' }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entries'] })
  .openapi('ListMapsResponse')

const ListPlaceIndexesResponseEntrySchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the place index resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data provider of geospatial data. Values can be one of the following:</p> <ul> <li> <p> <code>Esri</code> </p> </li> <li> <p> <code>Grab</code> </p> </li> <li> <p> <code>Here</code> </p> </li> </ul> <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The optional description for the place index resource.' }),
    ),
    IndexName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the place index resource.' }),
    ),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.',
        }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the place index resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['CreateTime', 'DataSource', 'Description', 'IndexName', 'UpdateTime'],
    description: 'A place index resource listed in your Amazon Web Services account.',
  })
  .openapi('ListPlaceIndexesResponseEntry')

const ListPlaceIndexesResponseEntryListSchema = z
  .array(ListPlaceIndexesResponseEntrySchema)
  .openapi('ListPlaceIndexesResponseEntryList')

const ListPlaceIndexesResponseSchema = z
  .object({
    Entries: ListPlaceIndexesResponseEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the place index resources that exist in your Amazon Web Services account',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token indicating that there are additional pages available. You can use the token in a new request to fetch the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entries'] })
  .openapi('ListPlaceIndexesResponse')

const ListRouteCalculatorsResponseEntrySchema = z
  .object({
    CalculatorName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the route calculator resource.' }),
    ),
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The timestamp when the route calculator resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p> <ul> <li> <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>',
        }),
    ),
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data provider of traffic and road network data. Indicates one of the available providers:</p> <ul> <li> <p> <code>Esri</code> </p> </li> <li> <p> <code>Grab</code> </p> </li> <li> <p> <code>Here</code> </p> </li> </ul> <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The optional description of the route calculator resource.' }),
    ),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.',
        }),
    ).exactOptional(),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The timestamp when the route calculator resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. </p> <ul> <li> <p>For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['CalculatorName', 'CreateTime', 'DataSource', 'Description', 'UpdateTime'],
    description: 'A route calculator resource listed in your Amazon Web Services account.',
  })
  .openapi('ListRouteCalculatorsResponseEntry')

const ListRouteCalculatorsResponseEntryListSchema = z
  .array(ListRouteCalculatorsResponseEntrySchema)
  .openapi('ListRouteCalculatorsResponseEntryList')

const ListRouteCalculatorsResponseSchema = z
  .object({
    Entries: ListRouteCalculatorsResponseEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists the route calculator resources that exist in your Amazon Web Services account',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token indicating there are additional pages available. You can use the token in a subsequent request to fetch the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entries'] })
  .openapi('ListRouteCalculatorsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags that have been applied to the specified resource. Tags are mapped from the tag key to the tag value: <code>"TagKey" : "TagValue"</code>.</p> <ul> <li> <p>Format example: <code>{"tag1" : "value1", "tag2" : "value2"} </code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ArnListSchema = z.array(ArnSchema).openapi('ArnList')

const ListTrackerConsumersResponseSchema = z
  .object({
    ConsumerArns: ArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the list of geofence collection ARNs associated to the tracker resource.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConsumerArns'] })
  .openapi('ListTrackerConsumersResponse')

const ListTrackersResponseEntrySchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the tracker resource was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The description for the tracker resource.' }),
    ),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Always returns <code>RequestBasedUsage</code>.Deprecated. Always returns RequestBasedUsage.',
        }),
    ).exactOptional(),
    PricingPlanDataSource: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'No longer used. Always returns an empty string.Deprecated. Unused.',
        }),
    ).exactOptional(),
    TrackerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the tracker resource.' }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp at which the device\'s position was determined. Uses <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({
    required: ['CreateTime', 'Description', 'TrackerName', 'UpdateTime'],
    description: 'Contains the tracker resource details.',
  })
  .openapi('ListTrackersResponseEntry')

const ListTrackersResponseEntryListSchema = z
  .array(ListTrackersResponseEntrySchema)
  .openapi('ListTrackersResponseEntryList')

const ListTrackersResponseSchema = z
  .object({
    Entries: ListTrackersResponseEntryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains tracker resources in your Amazon Web Services account. Details include tracker name, description and timestamps for when the tracker was created and last updated.',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entries'] })
  .openapi('ListTrackersResponse')

const PutGeofenceResponseSchema = z
  .object({
    CreateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence was created in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
    GeofenceId: IdSchema.and(
      z.any().openapi({ description: 'The geofence identifier entered in the request.' }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the geofence was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
  })
  .openapi({ required: ['CreateTime', 'GeofenceId', 'UpdateTime'] })
  .openapi('PutGeofenceResponse')

const SearchForPositionResultDistanceDoubleSchema = z
  .float64()
  .min(0)
  .openapi('SearchForPositionResultDistanceDouble')

const PlaceIdSchema = z.string().openapi('PlaceId')

const SearchForPositionResultSchema = z
  .object({
    Distance: SearchForPositionResultDistanceDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The distance in meters of a great-circle arc between the query position and the result.</p> <note> <p>A great-circle arc is the shortest path on a sphere, in this case the Earth. This returns the shortest distance between two locations.</p> </note>',
        }),
    ),
    Place: PlaceSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about the search result, such as its address and position.',
        }),
    ),
    PlaceId: PlaceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of the place. You can use this with the <code>GetPlace</code> operation to find the place again later.</p> <note> <p>For <code>SearchPlaceIndexForPosition</code> operations, the <code>PlaceId</code> is returned only by place indexes that use HERE or Grab as a data provider.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Distance', 'Place'],
    description:
      'Contains a search result from a position search query that is run on a place index resource.',
  })
  .openapi('SearchForPositionResult')

const SearchForPositionResultListSchema = z
  .array(SearchForPositionResultSchema)
  .openapi('SearchForPositionResultList')

const LanguageTagSchema = z.string().min(2).max(35).openapi('LanguageTag')

const PlaceIndexSearchResultLimitSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('PlaceIndexSearchResultLimit')

const SearchPlaceIndexForPositionSummarySchema = z
  .object({
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The geospatial data provider attached to the place index resource specified in the request. Values can be one of the following:</p> <ul> <li> <p>Esri</p> </li> <li> <p>Grab</p> </li> <li> <p>Here</p> </li> </ul> <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>',
        }),
    ),
    Language: LanguageTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred language used to return results. Matches the language in the request. The value is a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.',
        }),
    ).exactOptional(),
    MaxResults: PlaceIndexSearchResultLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the optional result count limit that is specified in the request.</p> <p>Default value: <code>50</code> </p>',
        }),
    ).exactOptional(),
    Position: PositionSchema.and(
      z.any().openapi({ description: 'The position specified in the request.' }),
    ),
  })
  .openapi({
    required: ['DataSource', 'Position'],
    description: 'A summary of the request sent by using <code>SearchPlaceIndexForPosition</code>.',
  })
  .openapi('SearchPlaceIndexForPositionSummary')

const SearchPlaceIndexForPositionResponseSchema = z
  .object({
    Results: SearchForPositionResultListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of Places closest to the specified position. Each result contains additional information about the Places returned.',
        }),
    ),
    Summary: SearchPlaceIndexForPositionSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a summary of the request. Echoes the input values for <code>Position</code>, <code>Language</code>, <code>MaxResults</code>, and the <code>DataSource</code> of the place index. ',
        }),
    ),
  })
  .openapi({ required: ['Results', 'Summary'] })
  .openapi('SearchPlaceIndexForPositionResponse')

const SearchForSuggestionsResultSchema = z
  .object({
    PlaceId: PlaceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of the place. You can use this with the <code>GetPlace</code> operation to find the place again later.</p> <note> <p>For <code>SearchPlaceIndexForSuggestions</code> operations, the <code>PlaceId</code> is returned by place indexes that use Esri, Grab, or HERE as data providers.</p> </note>',
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text of the place suggestion, typically formatted as an address string.',
        }),
    ),
  })
  .openapi({
    required: ['Text'],
    description:
      'Contains a place suggestion resulting from a place suggestion query that is run on a place index resource.',
  })
  .openapi('SearchForSuggestionsResult')

const SearchForSuggestionsResultListSchema = z
  .array(SearchForSuggestionsResultSchema)
  .openapi('SearchForSuggestionsResultList')

const CountryCodeSchema = z
  .string()
  .regex(/^[A-Z]{3}$/)
  .openapi('CountryCode')

const CountryCodeListSchema = z.array(CountryCodeSchema).min(1).max(100).openapi('CountryCodeList')

const SensitiveStringSchema = z.string().openapi('SensitiveString')

const SearchPlaceIndexForSuggestionsSummarySchema = z
  .object({
    BiasPosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the coordinates for the optional bias position specified in the request.</p> <p>This parameter contains a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p>',
        }),
    ).exactOptional(),
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The geospatial data provider attached to the place index resource specified in the request. Values can be one of the following:</p> <ul> <li> <p>Esri</p> </li> <li> <p>Grab</p> </li> <li> <p>Here</p> </li> </ul> <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>',
        }),
    ),
    FilterBBox: BoundingBoxSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the coordinates for the optional bounding box specified in the request.',
        }),
    ).exactOptional(),
    FilterCountries: CountryCodeListSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the optional country filter specified in the request.' }),
    ).exactOptional(),
    Language: LanguageTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred language used to return results. Matches the language in the request. The value is a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.',
        }),
    ).exactOptional(),
    MaxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the optional result count limit specified in the request.',
        }),
    ).exactOptional(),
    Text: SensitiveStringSchema.and(
      z
        .any()
        .openapi({ description: 'The free-form partial text input specified in the request.' }),
    ),
  })
  .openapi({
    required: ['DataSource', 'Text'],
    description:
      'A summary of the request sent by using <code>SearchPlaceIndexForSuggestions</code>.',
  })
  .openapi('SearchPlaceIndexForSuggestionsSummary')

const SearchPlaceIndexForSuggestionsResponseSchema = z
  .object({
    Results: SearchForSuggestionsResultListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of place suggestions that best match the search text.' }),
    ),
    Summary: SearchPlaceIndexForSuggestionsSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a summary of the request. Echoes the input values for <code>BiasPosition</code>, <code>FilterBBox</code>, <code>FilterCountries</code>, <code>Language</code>, <code>MaxResults</code>, and <code>Text</code>. Also includes the <code>DataSource</code> of the place index. ',
        }),
    ),
  })
  .openapi({ required: ['Results', 'Summary'] })
  .openapi('SearchPlaceIndexForSuggestionsResponse')

const SearchForTextResultDistanceDoubleSchema = z
  .float64()
  .min(0)
  .openapi('SearchForTextResultDistanceDouble')

const SearchForTextResultRelevanceDoubleSchema = z
  .float64()
  .min(0)
  .max(1)
  .openapi('SearchForTextResultRelevanceDouble')

const SearchForTextResultSchema = z
  .object({
    Distance: SearchForTextResultDistanceDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The distance in meters of a great-circle arc between the bias position specified and the result. <code>Distance</code> will be returned only if a bias position was specified in the query.</p> <note> <p>A great-circle arc is the shortest path on a sphere, in this case the Earth. This returns the shortest distance between two locations.</p> </note>',
        }),
    ).exactOptional(),
    Place: PlaceSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about the search result, such as its address and position.',
        }),
    ),
    PlaceId: PlaceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier of the place. You can use this with the <code>GetPlace</code> operation to find the place again later.</p> <note> <p>For <code>SearchPlaceIndexForText</code> operations, the <code>PlaceId</code> is returned only by place indexes that use HERE or Grab as a data provider.</p> </note>',
        }),
    ).exactOptional(),
    Relevance: SearchForTextResultRelevanceDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The relative confidence in the match for a result among the results returned. For example, if more fields for an address match (including house number, street, city, country/region, and postal code), the relevance score is closer to 1.</p> <p>Returned only when the partner selected is Esri or Grab.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Place'],
    description:
      'Contains a search result from a text search query that is run on a place index resource.',
  })
  .openapi('SearchForTextResult')

const SearchForTextResultListSchema = z
  .array(SearchForTextResultSchema)
  .openapi('SearchForTextResultList')

const SearchPlaceIndexForTextSummarySchema = z
  .object({
    BiasPosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the coordinates for the optional bias position specified in the request.</p> <p>This parameter contains a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p>',
        }),
    ).exactOptional(),
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The geospatial data provider attached to the place index resource specified in the request. Values can be one of the following:</p> <ul> <li> <p>Esri</p> </li> <li> <p>Grab</p> </li> <li> <p>Here</p> </li> </ul> <p>For more information about data providers, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Amazon Location Service data providers</a>.</p>',
        }),
    ),
    FilterBBox: BoundingBoxSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the coordinates for the optional bounding box specified in the request.',
        }),
    ).exactOptional(),
    FilterCountries: CountryCodeListSchema.and(
      z
        .any()
        .openapi({ description: 'Contains the optional country filter specified in the request.' }),
    ).exactOptional(),
    Language: LanguageTagSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred language used to return results. Matches the language in the request. The value is a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.',
        }),
    ).exactOptional(),
    MaxResults: PlaceIndexSearchResultLimitSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the optional result count limit specified in the request.',
        }),
    ).exactOptional(),
    ResultBBox: BoundingBoxSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The bounding box that fully contains all search results.</p> <note> <p>If you specified the optional <code>FilterBBox</code> parameter in the request, <code>ResultBBox</code> is contained within <code>FilterBBox</code>.</p> </note>',
        }),
    ).exactOptional(),
    Text: SensitiveStringSchema.and(
      z.any().openapi({ description: 'The search text specified in the request.' }),
    ),
  })
  .openapi({
    required: ['DataSource', 'Text'],
    description: 'A summary of the request sent by using <code>SearchPlaceIndexForText</code>.',
  })
  .openapi('SearchPlaceIndexForTextSummary')

const SearchPlaceIndexForTextResponseSchema = z
  .object({
    Results: SearchForTextResultListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of Places matching the input text. Each result contains additional information about the specific point of interest. </p> <p>Not all response properties are included with all responses. Some properties may only be returned by specific data partners.</p>',
        }),
    ),
    Summary: SearchPlaceIndexForTextSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains a summary of the request. Echoes the input values for <code>BiasPosition</code>, <code>FilterBBox</code>, <code>FilterCountries</code>, <code>Language</code>, <code>MaxResults</code>, and <code>Text</code>. Also includes the <code>DataSource</code> of the place index and the bounding box, <code>ResultBBox</code>, which surrounds the search results. ',
        }),
    ),
  })
  .openapi({ required: ['Results', 'Summary'] })
  .openapi('SearchPlaceIndexForTextResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateGeofenceCollectionResponseSchema = z
  .object({
    CollectionArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the updated geofence collection. Used to specify a resource across Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection</code> </p> </li> </ul>',
        }),
    ),
    CollectionName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the updated geofence collection.' }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when the geofence collection was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> ',
        }),
    ),
  })
  .openapi({ required: ['CollectionArn', 'CollectionName', 'UpdateTime'] })
  .openapi('UpdateGeofenceCollectionResponse')

const UpdateKeyResponseSchema = z
  .object({
    KeyArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the API key resource. Used when you need to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:key/ExampleKey</code> </p> </li> </ul>',
        }),
    ),
    KeyName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the API key resource.' }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the API key resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({ required: ['KeyArn', 'KeyName', 'UpdateTime'] })
  .openapi('UpdateKeyResponse')

const UpdateMapResponseSchema = z
  .object({
    MapArn: GeoArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the updated map resource. Used to specify a resource across AWS.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:map/ExampleMap</code> </p> </li> </ul>',
        }),
    ),
    MapName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the updated map resource.' }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the map resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({ required: ['MapArn', 'MapName', 'UpdateTime'] })
  .openapi('UpdateMapResponse')

const UpdatePlaceIndexResponseSchema = z
  .object({
    IndexArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the upated place index resource. Used to specify a resource across Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:place- index/ExamplePlaceIndex</code> </p> </li> </ul>',
        }),
    ),
    IndexName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the updated place index resource.' }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the place index resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({ required: ['IndexArn', 'IndexName', 'UpdateTime'] })
  .openapi('UpdatePlaceIndexResponse')

const UpdateRouteCalculatorResponseSchema = z
  .object({
    CalculatorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the updated route calculator resource. Used to specify a resource across AWS.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:route- calculator/ExampleCalculator</code> </p> </li> </ul>',
        }),
    ),
    CalculatorName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the updated route calculator resource.' }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the route calculator was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({ required: ['CalculatorArn', 'CalculatorName', 'UpdateTime'] })
  .openapi('UpdateRouteCalculatorResponse')

const UpdateTrackerResponseSchema = z
  .object({
    TrackerArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the updated tracker resource. Used to specify a resource across AWS.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:tracker/ExampleTracker</code> </p> </li> </ul>',
        }),
    ),
    TrackerName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the updated tracker resource.' }),
    ),
    UpdateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp for when the tracker resource was last updated in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ),
  })
  .openapi({ required: ['TrackerArn', 'TrackerName', 'UpdateTime'] })
  .openapi('UpdateTrackerResponse')

const ApiKeyFilterSchema = z
  .object({
    KeyStatus: StatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Filter on <code>Active</code> or <code>Expired</code> API keys.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Options for filtering API keys.', required: [] })
  .openapi('ApiKeyFilter')

const AssociateTrackerConsumerRequestSchema = z
  .object({
    ConsumerArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ConsumerArn'], title: 'AssociateTrackerConsumerRequest' })
  .openapi('AssociateTrackerConsumerRequest')

const BatchDeleteDevicePositionHistoryRequestDeviceIdsListSchema = z
  .array(IdSchema)
  .min(1)
  .max(100)
  .openapi('BatchDeleteDevicePositionHistoryRequestDeviceIdsList')

const BatchDeleteDevicePositionHistoryRequestSchema = z
  .object({
    DeviceIds: BatchDeleteDevicePositionHistoryRequestDeviceIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Devices whose position history you want to delete.</p> <ul> <li> <p>For example, for two devices: <code>“DeviceIds” : [DeviceId1,DeviceId2]</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['DeviceIds'], title: 'BatchDeleteDevicePositionHistoryRequest' })
  .openapi('BatchDeleteDevicePositionHistoryRequest')

const BatchDeleteGeofenceRequestGeofenceIdsListSchema = z
  .array(IdSchema)
  .min(1)
  .max(10)
  .openapi('BatchDeleteGeofenceRequestGeofenceIdsList')

const BatchDeleteGeofenceRequestSchema = z
  .object({
    GeofenceIds: BatchDeleteGeofenceRequestGeofenceIdsListSchema.and(
      z.any().openapi({ description: 'The batch of geofences to be deleted.' }),
    ),
  })
  .openapi({ required: ['GeofenceIds'], title: 'BatchDeleteGeofenceRequest' })
  .openapi('BatchDeleteGeofenceRequest')

const BatchEvaluateGeofencesRequestDevicePositionUpdatesListSchema = z
  .array(DevicePositionUpdateSchema)
  .min(1)
  .max(10)
  .openapi('BatchEvaluateGeofencesRequestDevicePositionUpdatesList')

const BatchEvaluateGeofencesRequestSchema = z
  .object({
    DevicePositionUpdates: BatchEvaluateGeofencesRequestDevicePositionUpdatesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains device details for each device to be evaluated against the given geofence collection.',
        }),
    ),
  })
  .openapi({ required: ['DevicePositionUpdates'], title: 'BatchEvaluateGeofencesRequest' })
  .openapi('BatchEvaluateGeofencesRequest')

const BatchGetDevicePositionRequestDeviceIdsListSchema = z
  .array(IdSchema)
  .min(1)
  .max(10)
  .openapi('BatchGetDevicePositionRequestDeviceIdsList')

const BatchGetDevicePositionRequestTrackerNameStringSchema = z
  .string()
  .regex(/^[-._\w]+$/)
  .min(1)
  .openapi('BatchGetDevicePositionRequestTrackerNameString')

const BatchGetDevicePositionRequestSchema = z
  .object({
    DeviceIds: BatchGetDevicePositionRequestDeviceIdsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Devices whose position you want to retrieve.</p> <ul> <li> <p>For example, for two devices: <code>device-ids=DeviceId1&amp;device-ids=DeviceId2</code> </p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['DeviceIds'], title: 'BatchGetDevicePositionRequest' })
  .openapi('BatchGetDevicePositionRequest')

const BatchPutGeofenceRequestEntriesListSchema = z
  .array(BatchPutGeofenceRequestEntrySchema)
  .min(1)
  .max(10)
  .openapi('BatchPutGeofenceRequestEntriesList')

const BatchPutGeofenceRequestSchema = z
  .object({
    Entries: BatchPutGeofenceRequestEntriesListSchema.and(
      z
        .any()
        .openapi({ description: 'The batch of geofences to be stored in a geofence collection.' }),
    ),
  })
  .openapi({ required: ['Entries'], title: 'BatchPutGeofenceRequest' })
  .openapi('BatchPutGeofenceRequest')

const BatchUpdateDevicePositionRequestUpdatesListSchema = z
  .array(DevicePositionUpdateSchema)
  .min(1)
  .max(10)
  .openapi('BatchUpdateDevicePositionRequestUpdatesList')

const BatchUpdateDevicePositionRequestSchema = z
  .object({
    Updates: BatchUpdateDevicePositionRequestUpdatesListSchema.and(
      z.any().openapi({ description: 'Contains the position update details for each device.' }),
    ),
  })
  .openapi({ required: ['Updates'], title: 'BatchUpdateDevicePositionRequest' })
  .openapi('BatchUpdateDevicePositionRequest')

const CalculateRouteCarModeOptionsSchema = z
  .object({
    AvoidFerries: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Avoids ferries when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
        }),
    ).exactOptional(),
    AvoidTolls: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Avoids tolls when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.',
    required: [],
  })
  .openapi('CalculateRouteCarModeOptions')

const CalculateRouteMatrixRequestDeparturePositionsListSchema = z
  .array(PositionSchema)
  .min(1)
  .max(350)
  .openapi('CalculateRouteMatrixRequestDeparturePositionsList')

const CalculateRouteMatrixRequestDestinationPositionsListSchema = z
  .array(PositionSchema)
  .min(1)
  .max(350)
  .openapi('CalculateRouteMatrixRequestDestinationPositionsList')

const TravelModeSchema = z
  .enum(['Car', 'Truck', 'Walking', 'Bicycle', 'Motorcycle'])
  .openapi('TravelMode')

const CalculateRouteTruckModeOptionsSchema = z
  .object({
    AvoidFerries: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Avoids ferries when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
        }),
    ).exactOptional(),
    AvoidTolls: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Avoids tolls when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
        }),
    ).exactOptional(),
    Dimensions: TruckDimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the truck's dimension specifications including length, height, width, and unit of measurement. Used to avoid roads that can't support the truck's dimensions.",
        }),
    ).exactOptional(),
    Weight: TruckWeightSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the truck's weight specifications including total weight and unit of measurement. Used to avoid roads that can't support the truck's weight.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.',
    required: [],
  })
  .openapi('CalculateRouteTruckModeOptions')

const CalculateRouteMatrixRequestSchema = z
  .object({
    CarModeOptions: CalculateRouteCarModeOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies route preferences when traveling by <code>Car</code>, such as avoiding routes that use ferries or tolls.</p> <p>Requirements: <code>TravelMode</code> must be specified as <code>Car</code>.</p>',
        }),
    ).exactOptional(),
    DepartNow: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Sets the time of departure as the current time. Uses the current time to calculate the route matrix. You can't set both <code>DepartureTime</code> and <code>DepartNow</code>. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>",
        }),
    ).exactOptional(),
    DeparturePositions: CalculateRouteMatrixRequestDeparturePositionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of departure (origin) positions for the route matrix. An array of points, each of which is itself a 2-value array defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format: <code>[longitude, latitude]</code>. For example, <code>[-123.115, 49.285]</code>.</p> <important> <p>Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html#matrix-routing-position-limits"> Position restrictions</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </important> <note> <p>For route calculators that use Esri as the data provider, if you specify a departure that\'s not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"> moves the position to the nearest road</a>. The snapped value is available in the result in <code>SnappedDeparturePositions</code>.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>',
        }),
    ),
    DepartureTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the desired time of departure. Uses the given time to calculate the route matrix. You can\'t set both <code>DepartureTime</code> and <code>DepartNow</code>. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.</p> <note> <p>Setting a departure time in the past returns a <code>400 ValidationException</code> error.</p> </note> <ul> <li> <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    DestinationPositions: CalculateRouteMatrixRequestDestinationPositionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of destination positions for the route matrix. An array of points, each of which is itself a 2-value array defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format: <code>[longitude, latitude]</code>. For example, <code>[-122.339, 47.615]</code> </p> <important> <p>Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html#matrix-routing-position-limits"> Position restrictions</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </important> <note> <p>For route calculators that use Esri as the data provider, if you specify a destination that\'s not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"> moves the position to the nearest road</a>. The snapped value is available in the result in <code>SnappedDestinationPositions</code>.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>',
        }),
    ),
    DistanceUnit: DistanceUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set the unit system to specify the distance.</p> <p>Default Value: <code>Kilometers</code> </p>',
        }),
    ).exactOptional(),
    TravelMode: TravelModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>The <code>TravelMode</code> you specify also determines how you specify route preferences: </p> <ul> <li> <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code> parameter.</p> </li> <li> <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code> parameter.</p> </li> </ul> <note> <p> <code>Bicycle</code> or <code>Motorcycle</code> are only valid when using <code>Grab</code> as a data provider, and only within Southeast Asia.</p> <p> <code>Truck</code> is not available for Grab.</p> <p>For more information about using Grab as a data provider, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>Default Value: <code>Car</code> </p>',
        }),
    ).exactOptional(),
    TruckModeOptions: CalculateRouteTruckModeOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies route preferences when traveling by <code>Truck</code>, such as avoiding routes that use ferries or tolls, and truck specifications to consider when choosing an optimal road.</p> <p>Requirements: <code>TravelMode</code> must be specified as <code>Truck</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeparturePositions', 'DestinationPositions'],
    title: 'CalculateRouteMatrixRequest',
  })
  .openapi('CalculateRouteMatrixRequest')

const CalculateRouteRequestWaypointPositionsListSchema = z
  .array(PositionSchema)
  .min(0)
  .max(23)
  .openapi('CalculateRouteRequestWaypointPositionsList')

const CalculateRouteRequestSchema = z
  .object({
    CarModeOptions: CalculateRouteCarModeOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies route preferences when traveling by <code>Car</code>, such as avoiding routes that use ferries or tolls.</p> <p>Requirements: <code>TravelMode</code> must be specified as <code>Car</code>.</p>',
        }),
    ).exactOptional(),
    DepartNow: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sets the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
        }),
    ).exactOptional(),
    DeparturePosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The start position for the route. Defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">World Geodetic System (WGS 84)</a> format: <code>[longitude, latitude]</code>.</p> <ul> <li> <p>For example, <code>[-123.115, 49.285]</code> </p> </li> </ul> <note> <p>If you specify a departure that\'s not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a <code>400 RoutesValidationException</code> error.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>',
        }),
    ),
    DepartureTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the desired time of departure. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.</p> <note> <p>Setting a departure time in the past returns a <code>400 ValidationException</code> error.</p> </note> <ul> <li> <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    DestinationPosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The finish position for the route. Defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">World Geodetic System (WGS 84)</a> format: <code>[longitude, latitude]</code>.</p> <ul> <li> <p> For example, <code>[-122.339, 47.615]</code> </p> </li> </ul> <note> <p>If you specify a destination that\'s not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. </p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>',
        }),
    ),
    DistanceUnit: DistanceUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set the unit system to specify the distance.</p> <p>Default Value: <code>Kilometers</code> </p>',
        }),
    ).exactOptional(),
    IncludeLegGeometry: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to include the geometry details in the result for each path between a pair of positions.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
        }),
    ).exactOptional(),
    TravelMode: TravelModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. You can choose <code>Car</code>, <code>Truck</code>, <code>Walking</code>, <code>Bicycle</code> or <code>Motorcycle</code> as options for the <code>TravelMode</code>.</p> <note> <p> <code>Bicycle</code> and <code>Motorcycle</code> are only valid when using Grab as a data provider, and only within Southeast Asia.</p> <p> <code>Truck</code> is not available for Grab.</p> <p>For more details on the using Grab for routing, including areas of coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>The <code>TravelMode</code> you specify also determines how you specify route preferences: </p> <ul> <li> <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code> parameter.</p> </li> <li> <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code> parameter.</p> </li> </ul> <p>Default Value: <code>Car</code> </p>',
        }),
    ).exactOptional(),
    TruckModeOptions: CalculateRouteTruckModeOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies route preferences when traveling by <code>Truck</code>, such as avoiding routes that use ferries or tolls, and truck specifications to consider when choosing an optimal road.</p> <p>Requirements: <code>TravelMode</code> must be specified as <code>Truck</code>.</p>',
        }),
    ).exactOptional(),
    WaypointPositions: CalculateRouteRequestWaypointPositionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies an ordered list of up to 23 intermediate positions to include along a route between the departure position and destination position. </p> <ul> <li> <p>For example, from the <code>DeparturePosition</code> <code>[-123.115, 49.285]</code>, the route follows the order that the waypoint positions are given <code>[[-122.757, 49.0021],[-122.349, 47.620]]</code> </p> </li> </ul> <note> <p>If you specify a waypoint position that\'s not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. </p> <p>Specifying more than 23 waypoints returns a <code>400 ValidationException</code> error.</p> <p>If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a <code>400 RoutesValidationException</code> error.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DeparturePosition', 'DestinationPosition'],
    title: 'CalculateRouteRequest',
  })
  .openapi('CalculateRouteRequest')

const CreateGeofenceCollectionRequestSchema = z
  .object({
    CollectionName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A custom name for the geofence collection.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique geofence collection name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleGeofenceCollection</code>.</p> </li> </ul>',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'An optional description for the geofence collection.' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN. ',
        }),
    ).exactOptional(),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.Deprecated. If included, the only allowed value is RequestBasedUsage.',
        }),
    ).exactOptional(),
    PricingPlanDataSource: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'This parameter is no longer used.Deprecated. No longer allowed.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Applies one or more tags to the geofence collection. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CollectionName'], title: 'CreateGeofenceCollectionRequest' })
  .openapi('CreateGeofenceCollectionRequest')

const CreateKeyRequestSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'An optional description for the API key resource.' }),
    ).exactOptional(),
    ExpireTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. One of <code>NoExpiry</code> or <code>ExpireTime</code> must be set.',
        }),
    ).exactOptional(),
    KeyName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A custom name for the API key resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique API key name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleAPIKey</code>.</p> </li> </ul>',
        }),
    ),
    NoExpiry: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optionally set to <code>true</code> to set no expiration time for the API key. One of <code>NoExpiry</code> or <code>ExpireTime</code> must be set.',
        }),
    ).exactOptional(),
    Restrictions: ApiKeyRestrictionsSchema.and(
      z.any().openapi({ description: 'The API key restrictions for the API key resource.' }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Applies one or more tags to the map resource. A tag is a key-value pair that helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['KeyName', 'Restrictions'], title: 'CreateKeyRequest' })
  .openapi('CreateKeyRequest')

const CreateMapRequestSchema = z
  .object({
    Configuration: MapConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the <code>MapConfiguration</code>, including the map style, for the map resource that you create. The map style defines the look of maps and the data provider for your map resource.',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'An optional description for the map resource.' }),
    ).exactOptional(),
    MapName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for the map resource.</p> <p>Requirements:</p> <ul> <li> <p>Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique map resource name. </p> </li> <li> <p>No spaces allowed. For example, <code>ExampleMap</code>.</p> </li> </ul>',
        }),
    ),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.Deprecated. If included, the only allowed value is RequestBasedUsage.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Applies one or more tags to the map resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Configuration', 'MapName'], title: 'CreateMapRequest' })
  .openapi('CreateMapRequest')

const CreatePlaceIndexRequestSchema = z
  .object({
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the geospatial data provider for the new place index.</p> <note> <p>This field is case-sensitive. Enter the valid values as shown. For example, entering <code>HERE</code> returns an error.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>\'s coverage in your region of interest, see <a href="https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm">Esri details on geocoding coverage</a>.</p> </li> <li> <p> <code>Grab</code> – Grab provides place index functionality for Southeast Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>\' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p> </li> <li> <p> <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a>\' coverage in your region of interest, see <a href="https://developer.here.com/documentation/geocoder/dev_guide/topics/coverage-geocoder.html">HERE details on goecoding coverage</a>.</p> <important> <p>If you specify HERE Technologies (<code>Here</code>) as the data provider, you may not <a href="https://docs.aws.amazon.com/location-places/latest/APIReference/API_DataSourceConfiguration.html">store results</a> for locations in Japan. For more information, see the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> for Amazon Location Service.</p> </important> </li> </ul> <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>',
        }),
    ),
    DataSourceConfiguration: DataSourceConfigurationSchema.and(
      z.any().openapi({ description: 'Specifies the data storage option requesting Places.' }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'The optional description for the place index resource.' }),
    ).exactOptional(),
    IndexName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the place index resource. </p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique place index resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExamplePlaceIndex</code>.</p> </li> </ul>',
        }),
    ),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.Deprecated. If included, the only allowed value is RequestBasedUsage.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Applies one or more tags to the place index resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DataSource', 'IndexName'], title: 'CreatePlaceIndexRequest' })
  .openapi('CreatePlaceIndexRequest')

const CreateRouteCalculatorRequestSchema = z
  .object({
    CalculatorName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the route calculator resource. </p> <p>Requirements:</p> <ul> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9) , hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique Route calculator resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleRouteCalculator</code>.</p> </li> </ul>',
        }),
    ),
    DataSource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the data provider of traffic and road network data.</p> <note> <p>This field is case-sensitive. Enter the valid values as shown. For example, entering <code>HERE</code> returns an error.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>\'s coverage in your region of interest, see <a href="https://doc.arcgis.com/en/arcgis-online/reference/network-coverage.htm">Esri details on street networks and traffic coverage</a>.</p> <p>Route calculators that use Esri as a data source only calculate routes that are shorter than 400 km.</p> </li> <li> <p> <code>Grab</code> – Grab provides routing functionality for Southeast Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>\' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p> </li> <li> <p> <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a>\' coverage in your region of interest, see <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/car-routing.html">HERE car routing coverage</a> and <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/truck-routing.html">HERE truck routing coverage</a>.</p> </li> </ul> <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>',
        }),
    ),
    Description: ResourceDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The optional description for the route calculator resource.' }),
    ).exactOptional(),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.Deprecated. If included, the only allowed value is RequestBasedUsage.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Applies one or more tags to the route calculator resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <ul> <li> <p>For example: { <code>"tag1" : "value1"</code>, <code>"tag2" : "value2"</code>}</p> </li> </ul> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CalculatorName', 'DataSource'], title: 'CreateRouteCalculatorRequest' })
  .openapi('CreateRouteCalculatorRequest')

const CreateTrackerRequestSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'An optional description for the tracker resource.' }),
    ).exactOptional(),
    KmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.',
        }),
    ).exactOptional(),
    PositionFiltering: PositionFilteringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the position filtering for the tracker resource.</p> <p>Valid values:</p> <ul> <li> <p> <code>TimeBased</code> - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID. </p> </li> <li> <p> <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this area are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map. </p> </li> <li> <p> <code>AccuracyBased</code> - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This can reduce the effects of GPS noise when displaying device trajectories on a map, and can help control your costs by reducing the number of geofence evaluations. </p> </li> </ul> <p>This field is optional. If not specified, the default value is <code>TimeBased</code>.</p>',
        }),
    ).exactOptional(),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.Deprecated. If included, the only allowed value is RequestBasedUsage.',
        }),
    ).exactOptional(),
    PricingPlanDataSource: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'This parameter is no longer used.Deprecated. No longer allowed.',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Applies one or more tags to the tracker resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TrackerName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name for the tracker resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique tracker resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleTracker</code>.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['TrackerName'], title: 'CreateTrackerRequest' })
  .openapi('CreateTrackerRequest')

const DeleteGeofenceCollectionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteGeofenceCollectionRequest' })
  .openapi('DeleteGeofenceCollectionRequest')

const DeleteKeyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteKeyRequest' })
  .openapi('DeleteKeyRequest')

const DeleteMapRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteMapRequest' })
  .openapi('DeleteMapRequest')

const DeletePlaceIndexRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePlaceIndexRequest' })
  .openapi('DeletePlaceIndexRequest')

const DeleteRouteCalculatorRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRouteCalculatorRequest' })
  .openapi('DeleteRouteCalculatorRequest')

const DeleteTrackerRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteTrackerRequest' })
  .openapi('DeleteTrackerRequest')

const DescribeGeofenceCollectionRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeGeofenceCollectionRequest' })
  .openapi('DescribeGeofenceCollectionRequest')

const DescribeKeyRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeKeyRequest' })
  .openapi('DescribeKeyRequest')

const DescribeMapRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeMapRequest' })
  .openapi('DescribeMapRequest')

const DescribePlaceIndexRequestSchema = z
  .object({})
  .openapi({ title: 'DescribePlaceIndexRequest' })
  .openapi('DescribePlaceIndexRequest')

const DescribeRouteCalculatorRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeRouteCalculatorRequest' })
  .openapi('DescribeRouteCalculatorRequest')

const DescribeTrackerRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeTrackerRequest' })
  .openapi('DescribeTrackerRequest')

const DisassociateTrackerConsumerRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateTrackerConsumerRequest' })
  .openapi('DisassociateTrackerConsumerRequest')

const GetDevicePositionHistoryRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('GetDevicePositionHistoryRequestMaxResultsInteger')

const GetDevicePositionHistoryRequestSchema = z
  .object({
    EndTimeExclusive: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the end time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be the time that the request is made.</p> <p>Requirement:</p> <ul> <li> <p>The time specified for <code>EndTimeExclusive</code> must be after the time for <code>StartTimeInclusive</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxResults: GetDevicePositionHistoryRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional limit for the number of device positions returned in a single call.</p> <p>Default value: <code>100</code> </p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
        }),
    ).exactOptional(),
    StartTimeInclusive: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the start time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be 24 hours prior to the time that the request is made.</p> <p>Requirement:</p> <ul> <li> <p>The time specified for <code>StartTimeInclusive</code> must be before <code>EndTimeExclusive</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDevicePositionHistoryRequest', required: [] })
  .openapi('GetDevicePositionHistoryRequest')

const GetDevicePositionRequestSchema = z
  .object({})
  .openapi({ title: 'GetDevicePositionRequest' })
  .openapi('GetDevicePositionRequest')

const GetGeofenceRequestSchema = z
  .object({})
  .openapi({ title: 'GetGeofenceRequest' })
  .openapi('GetGeofenceRequest')

const GetMapGlyphsRequestFontUnicodeRangeStringSchema = z
  .string()
  .regex(/^[0-9]+-[0-9]+\.pbf$/)
  .openapi('GetMapGlyphsRequestFontUnicodeRangeString')

const GetMapGlyphsRequestSchema = z
  .object({})
  .openapi({ title: 'GetMapGlyphsRequest' })
  .openapi('GetMapGlyphsRequest')

const GetMapSpritesRequestFileNameStringSchema = z
  .string()
  .regex(/^sprites(@2x)?\.(png|json)$/)
  .openapi('GetMapSpritesRequestFileNameString')

const GetMapSpritesRequestSchema = z
  .object({})
  .openapi({ title: 'GetMapSpritesRequest' })
  .openapi('GetMapSpritesRequest')

const GetMapStyleDescriptorRequestSchema = z
  .object({})
  .openapi({ title: 'GetMapStyleDescriptorRequest' })
  .openapi('GetMapStyleDescriptorRequest')

const GetMapTileRequestXStringSchema = z.string().regex(/\d+/).openapi('GetMapTileRequestXString')

const GetMapTileRequestYStringSchema = z.string().regex(/\d+/).openapi('GetMapTileRequestYString')

const GetMapTileRequestZStringSchema = z.string().regex(/\d+/).openapi('GetMapTileRequestZString')

const GetMapTileRequestSchema = z
  .object({})
  .openapi({ title: 'GetMapTileRequest' })
  .openapi('GetMapTileRequest')

const GetPlaceRequestSchema = z
  .object({})
  .openapi({ title: 'GetPlaceRequest' })
  .openapi('GetPlaceRequest')

const ListDevicePositionsRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListDevicePositionsRequestMaxResultsInteger')

const ListDevicePositionsRequestSchema = z
  .object({
    MaxResults: ListDevicePositionsRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional limit for the number of entries returned in a single call.</p> <p>Default value: <code>100</code> </p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDevicePositionsRequest', required: [] })
  .openapi('ListDevicePositionsRequest')

const ListGeofenceCollectionsRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListGeofenceCollectionsRequestMaxResultsInteger')

const ListGeofenceCollectionsRequestSchema = z
  .object({
    MaxResults: ListGeofenceCollectionsRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListGeofenceCollectionsRequest', required: [] })
  .openapi('ListGeofenceCollectionsRequest')

const ListGeofencesRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListGeofencesRequestMaxResultsInteger')

const ListGeofencesRequestSchema = z
  .object({
    MaxResults: ListGeofencesRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional limit for the number of geofences returned in a single call. </p> <p>Default value: <code>100</code> </p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListGeofencesRequest', required: [] })
  .openapi('ListGeofencesRequest')

const ListKeysRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListKeysRequestMaxResultsInteger')

const ListKeysRequestSchema = z
  .object({
    Filter: ApiKeyFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optionally filter the list to only <code>Active</code> or <code>Expired</code> API keys.',
        }),
    ).exactOptional(),
    MaxResults: ListKeysRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListKeysRequest', required: [] })
  .openapi('ListKeysRequest')

const ListMapsRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListMapsRequestMaxResultsInteger')

const ListMapsRequestSchema = z
  .object({
    MaxResults: ListMapsRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListMapsRequest', required: [] })
  .openapi('ListMapsRequest')

const ListPlaceIndexesRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListPlaceIndexesRequestMaxResultsInteger')

const ListPlaceIndexesRequestSchema = z
  .object({
    MaxResults: ListPlaceIndexesRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional limit for the maximum number of results returned in a single call.</p> <p>Default value: <code>100</code> </p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPlaceIndexesRequest', required: [] })
  .openapi('ListPlaceIndexesRequest')

const ListRouteCalculatorsRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListRouteCalculatorsRequestMaxResultsInteger')

const ListRouteCalculatorsRequestSchema = z
  .object({
    MaxResults: ListRouteCalculatorsRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional maximum number of results returned in a single call.</p> <p>Default Value: <code>100</code> </p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default Value: <code>null</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRouteCalculatorsRequest', required: [] })
  .openapi('ListRouteCalculatorsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListTrackerConsumersRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListTrackerConsumersRequestMaxResultsInteger')

const ListTrackerConsumersRequestSchema = z
  .object({
    MaxResults: ListTrackerConsumersRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTrackerConsumersRequest', required: [] })
  .openapi('ListTrackerConsumersRequest')

const ListTrackersRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListTrackersRequestMaxResultsInteger')

const ListTrackersRequestSchema = z
  .object({
    MaxResults: ListTrackersRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTrackersRequest', required: [] })
  .openapi('ListTrackersRequest')

const PropertyMapKeyStringSchema = z.string().min(1).max(20).openapi('PropertyMapKeyString')

const PutGeofenceRequestSchema = z
  .object({
    Geometry: GeofenceGeometrySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Contains the details to specify the position of the geofence. Can be either a polygon or a circle. Including both will return a validation error.</p> <note> <p>Each <a href="https://docs.aws.amazon.com/location-geofences/latest/APIReference/API_GeofenceGeometry.html"> geofence polygon</a> can have a maximum of 1,000 vertices.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['Geometry'], title: 'PutGeofenceRequest' })
  .openapi('PutGeofenceRequest')

const SearchPlaceIndexForPositionRequestSchema = z
  .object({
    Language: LanguageTagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we\'ll use the Greek language. You search for a location around Athens, Greece, with the <code>language</code> parameter set to <code>en</code>. The <code>city</code> in the results will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the <code>city</code> in the results will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>',
        }),
    ).exactOptional(),
    MaxResults: PlaceIndexSearchResultLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter. The maximum number of results returned per request.</p> <p>Default value: <code>50</code> </p>',
        }),
    ).exactOptional(),
    Position: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the longitude and latitude of the position to query.</p> <p> This parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents a position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p>',
        }),
    ),
  })
  .openapi({ required: ['Position'], title: 'SearchPlaceIndexForPositionRequest' })
  .openapi('SearchPlaceIndexForPositionRequest')

const SearchPlaceIndexForSuggestionsRequestMaxResultsIntegerSchema = z
  .int()
  .min(1)
  .max(15)
  .openapi('SearchPlaceIndexForSuggestionsRequestMaxResultsInteger')

const SearchPlaceIndexForSuggestionsRequestTextStringSchema = z
  .string()
  .min(1)
  .max(200)
  .openapi('SearchPlaceIndexForSuggestionsRequestTextString')

const SearchPlaceIndexForSuggestionsRequestSchema = z
  .object({
    BiasPosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that indicates a preference for place suggestions that are closer to a specified position.</p> <p> If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p> <note> <p> <code>BiasPosition</code> and <code>FilterBBox</code> are mutually exclusive. Specifying both options results in an error. </p> </note>',
        }),
    ).exactOptional(),
    FilterBBox: BoundingBoxSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that limits the search results by returning only suggestions within a specified bounding box.</p> <p> If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box.</p> <p>For example, <code>[-12.7935, -37.4835, -12.0684, -36.9542]</code> represents a bounding box where the southwest corner has longitude <code>-12.7935</code> and latitude <code>-37.4835</code>, and the northeast corner has longitude <code>-12.0684</code> and latitude <code>-36.9542</code>.</p> <note> <p> <code>FilterBBox</code> and <code>BiasPosition</code> are mutually exclusive. Specifying both options results in an error. </p> </note>',
        }),
    ).exactOptional(),
    FilterCountries: CountryCodeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that limits the search results by returning only suggestions within the provided list of countries.</p> <ul> <li> <p>Use the <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit country code. For example, Australia uses three upper-case characters: <code>AUS</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Language: LanguageTagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we\'ll use the Greek language. You search for <code>Athens, Gr</code> to get suggestions with the <code>language</code> parameter set to <code>en</code>. The results found will most likely be returned as <code>Athens, Greece</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the result found will more likely be returned as <code>Αθήνα, Ελλάδα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>',
        }),
    ).exactOptional(),
    MaxResults: SearchPlaceIndexForSuggestionsRequestMaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>5</code> </p>',
        }),
    ).exactOptional(),
    Text: SearchPlaceIndexForSuggestionsRequestTextStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The free-form partial text to use to generate place suggestions. For example, <code>eiffel tow</code>.',
        }),
    ),
  })
  .openapi({ required: ['Text'], title: 'SearchPlaceIndexForSuggestionsRequest' })
  .openapi('SearchPlaceIndexForSuggestionsRequest')

const SearchPlaceIndexForTextRequestTextStringSchema = z
  .string()
  .min(1)
  .max(200)
  .openapi('SearchPlaceIndexForTextRequestTextString')

const SearchPlaceIndexForTextRequestSchema = z
  .object({
    BiasPosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that indicates a preference for places that are closer to a specified position.</p> <p> If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p> <note> <p> <code>BiasPosition</code> and <code>FilterBBox</code> are mutually exclusive. Specifying both options results in an error. </p> </note>',
        }),
    ).exactOptional(),
    FilterBBox: BoundingBoxSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that limits the search results by returning only places that are within the provided bounding box.</p> <p> If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box.</p> <p>For example, <code>[-12.7935, -37.4835, -12.0684, -36.9542]</code> represents a bounding box where the southwest corner has longitude <code>-12.7935</code> and latitude <code>-37.4835</code>, and the northeast corner has longitude <code>-12.0684</code> and latitude <code>-36.9542</code>.</p> <note> <p> <code>FilterBBox</code> and <code>BiasPosition</code> are mutually exclusive. Specifying both options results in an error. </p> </note>',
        }),
    ).exactOptional(),
    FilterCountries: CountryCodeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter that limits the search results by returning only places that are in a specified list of countries.</p> <ul> <li> <p>Valid values include <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit country codes. For example, Australia uses three upper-case characters: <code>AUS</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Language: LanguageTagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we\'ll use the Greek language. You search for <code>Athens, Greece</code>, with the <code>language</code> parameter set to <code>en</code>. The result found will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the result found will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>',
        }),
    ).exactOptional(),
    MaxResults: PlaceIndexSearchResultLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>50</code> </p>',
        }),
    ).exactOptional(),
    Text: SearchPlaceIndexForTextRequestTextStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The address, name, city, or region to be used in the search in free-form text format. For example, <code>123 Any Street</code>.',
        }),
    ),
  })
  .openapi({ required: ['Text'], title: 'SearchPlaceIndexForTextRequest' })
  .openapi('SearchPlaceIndexForTextRequest')

const TagKeySchema = z
  .string()
  .regex(/^[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagKeysSchema = z.array(StringSchema).min(1).max(50).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Applies one or more tags to specific resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateGeofenceCollectionRequestSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'Updates the description for the geofence collection.' }),
    ).exactOptional(),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.Deprecated. If included, the only allowed value is RequestBasedUsage.',
        }),
    ).exactOptional(),
    PricingPlanDataSource: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'This parameter is no longer used.Deprecated. No longer allowed.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateGeofenceCollectionRequest', required: [] })
  .openapi('UpdateGeofenceCollectionRequest')

const UpdateKeyRequestSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'Updates the description for the API key resource.' }),
    ).exactOptional(),
    ExpireTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Updates the timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
        }),
    ).exactOptional(),
    ForceUpdate: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The boolean flag to be included for updating <code>ExpireTime</code> or <code>Restrictions</code> details.</p> <p>Must be set to <code>true</code> to update an API key resource that has been used in the past 7 days.</p> <p> <code>False</code> if force update is not preferred</p> <p>Default value: <code>False</code> </p>',
        }),
    ).exactOptional(),
    NoExpiry: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the API key should expire. Set to <code>true</code> to set the API key to have no expiration time.',
        }),
    ).exactOptional(),
    Restrictions: ApiKeyRestrictionsSchema.and(
      z
        .any()
        .openapi({ description: 'Updates the API key restrictions for the API key resource.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateKeyRequest', required: [] })
  .openapi('UpdateKeyRequest')

const UpdateMapRequestSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'Updates the description for the map resource.' }),
    ).exactOptional(),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.Deprecated. If included, the only allowed value is RequestBasedUsage.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateMapRequest', required: [] })
  .openapi('UpdateMapRequest')

const UpdatePlaceIndexRequestSchema = z
  .object({
    DataSourceConfiguration: DataSourceConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Updates the data storage option for the place index resource.' }),
    ).exactOptional(),
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'Updates the description for the place index resource.' }),
    ).exactOptional(),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.Deprecated. If included, the only allowed value is RequestBasedUsage.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdatePlaceIndexRequest', required: [] })
  .openapi('UpdatePlaceIndexRequest')

const UpdateRouteCalculatorRequestSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'Updates the description for the route calculator resource.' }),
    ).exactOptional(),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.Deprecated. If included, the only allowed value is RequestBasedUsage.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRouteCalculatorRequest', required: [] })
  .openapi('UpdateRouteCalculatorRequest')

const UpdateTrackerRequestSchema = z
  .object({
    Description: ResourceDescriptionSchema.and(
      z.any().openapi({ description: 'Updates the description for the tracker resource.' }),
    ).exactOptional(),
    PositionFiltering: PositionFilteringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Updates the position filtering for the tracker resource.</p> <p>Valid values:</p> <ul> <li> <p> <code>TimeBased</code> - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID. </p> </li> <li> <p> <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this distance are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map. </p> </li> <li> <p> <code>AccuracyBased</code> - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This helps educe the effects of GPS noise when displaying device trajectories on a map, and can help control costs by reducing the number of geofence evaluations. </p> </li> </ul>',
        }),
    ).exactOptional(),
    PricingPlan: PricingPlanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.Deprecated. If included, the only allowed value is RequestBasedUsage.',
        }),
    ).exactOptional(),
    PricingPlanDataSource: StringSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'This parameter is no longer used.Deprecated. No longer allowed.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateTrackerRequest', required: [] })
  .openapi('UpdateTrackerRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postTrackingV0TrackersTrackerNameConsumersRoute = createRoute({
  method: 'post',
  path: '/tracking/v0/trackers/{TrackerName}/consumers',
  description:
    '<p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>',
  operationId: 'AssociateTrackerConsumer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description:
              'The name of the tracker resource to be associated with a geofence collection.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ConsumerArn: z
                .string()
                .regex(
                  /^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^\/].*)?$/,
                )
                .min(0)
                .max(1600)
                .openapi({
                  description:
                    '<p>The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code> </p> </li> </ul>',
                }),
            })
            .openapi({ required: ['ConsumerArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateTrackerConsumerResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTrackingV0TrackersTrackerNameDeletePositionsRoute = createRoute({
  method: 'post',
  path: '/tracking/v0/trackers/{TrackerName}/delete-positions',
  description: 'Deletes the position history of one or more devices from a tracker resource.',
  operationId: 'BatchDeleteDevicePositionHistory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description:
              'The name of the tracker resource to delete the device position history from.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DeviceIds: z
                .array(IdSchema)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p>Devices whose position history you want to delete.</p> <ul> <li> <p>For example, for two devices: <code>“DeviceIds” : [DeviceId1,DeviceId2]</code> </p> </li> </ul>',
                }),
            })
            .openapi({ required: ['DeviceIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteDevicePositionHistoryResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postGeofencingV0CollectionsCollectionNameDeleteGeofencesRoute = createRoute({
  method: 'post',
  path: '/geofencing/v0/collections/{CollectionName}/delete-geofences',
  description:
    '<p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>',
  operationId: 'BatchDeleteGeofence',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CollectionName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CollectionName',
            in: 'path',
            required: true,
            description: 'The geofence collection storing the geofences to be deleted.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GeofenceIds: z
                .array(IdSchema)
                .min(1)
                .max(10)
                .openapi({ description: 'The batch of geofences to be deleted.' }),
            })
            .openapi({ required: ['GeofenceIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteGeofenceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postGeofencingV0CollectionsCollectionNamePositionsRoute = createRoute({
  method: 'post',
  path: '/geofencing/v0/collections/{CollectionName}/positions',
  description:
    '<p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>',
  operationId: 'BatchEvaluateGeofences',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CollectionName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CollectionName',
            in: 'path',
            required: true,
            description:
              'The geofence collection used in evaluating the position of devices against its geofences.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DevicePositionUpdates: z
                .array(DevicePositionUpdateSchema)
                .min(1)
                .max(10)
                .openapi({
                  description:
                    'Contains device details for each device to be evaluated against the given geofence collection.',
                }),
            })
            .openapi({ required: ['DevicePositionUpdates'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchEvaluateGeofencesResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTrackingV0TrackersTrackerNameGetPositionsRoute = createRoute({
  method: 'post',
  path: '/tracking/v0/trackers/{TrackerName}/get-positions',
  description: 'Lists the latest device positions for requested devices.',
  operationId: 'BatchGetDevicePosition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description: 'The tracker resource retrieving the device position.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DeviceIds: z
                .array(IdSchema)
                .min(1)
                .max(10)
                .openapi({
                  description:
                    '<p>Devices whose position you want to retrieve.</p> <ul> <li> <p>For example, for two devices: <code>device-ids=DeviceId1&amp;device-ids=DeviceId2</code> </p> </li> </ul>',
                }),
            })
            .openapi({ required: ['DeviceIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetDevicePositionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postGeofencingV0CollectionsCollectionNamePutGeofencesRoute = createRoute({
  method: 'post',
  path: '/geofencing/v0/collections/{CollectionName}/put-geofences',
  description:
    'A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.',
  operationId: 'BatchPutGeofence',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CollectionName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CollectionName',
            in: 'path',
            required: true,
            description: 'The geofence collection storing the geofences.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Entries: z
                .array(BatchPutGeofenceRequestEntrySchema)
                .min(1)
                .max(10)
                .openapi({
                  description: 'The batch of geofences to be stored in a geofence collection.',
                }),
            })
            .openapi({ required: ['Entries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchPutGeofenceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTrackingV0TrackersTrackerNamePositionsRoute = createRoute({
  method: 'post',
  path: '/tracking/v0/trackers/{TrackerName}/positions',
  description:
    '<p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>',
  operationId: 'BatchUpdateDevicePosition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description: 'The name of the tracker resource to update.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Updates: z
                .array(DevicePositionUpdateSchema)
                .min(1)
                .max(10)
                .openapi({ description: 'Contains the position update details for each device.' }),
            })
            .openapi({ required: ['Updates'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchUpdateDevicePositionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postRoutesV0CalculatorsCalculatorNameCalculateRouteRoute = createRoute({
  method: 'post',
  path: '/routes/v0/calculators/{CalculatorName}/calculate/route',
  description:
    '<p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn\'t specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can\'t specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>',
  operationId: 'CalculateRoute',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CalculatorName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CalculatorName',
            in: 'path',
            required: true,
            description:
              'The name of the route calculator resource that you want to use to calculate the route. ',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CarModeOptions: z
                .object({
                  AvoidFerries: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Avoids ferries when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
                      }),
                  ).exactOptional(),
                  AvoidTolls: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Avoids tolls when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.',
                  required: [],
                }),
              DepartNow: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Sets the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
                }),
              DeparturePosition: z
                .array(DoubleSchema)
                .length(2)
                .openapi({
                  description:
                    '<p>The start position for the route. Defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">World Geodetic System (WGS 84)</a> format: <code>[longitude, latitude]</code>.</p> <ul> <li> <p>For example, <code>[-123.115, 49.285]</code> </p> </li> </ul> <note> <p>If you specify a departure that\'s not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a <code>400 RoutesValidationException</code> error.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>',
                }),
              DepartureTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the desired time of departure. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.</p> <note> <p>Setting a departure time in the past returns a <code>400 ValidationException</code> error.</p> </note> <ul> <li> <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>',
                }),
              DestinationPosition: z
                .array(DoubleSchema)
                .length(2)
                .openapi({
                  description:
                    '<p>The finish position for the route. Defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">World Geodetic System (WGS 84)</a> format: <code>[longitude, latitude]</code>.</p> <ul> <li> <p> For example, <code>[-122.339, 47.615]</code> </p> </li> </ul> <note> <p>If you specify a destination that\'s not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. </p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>',
                }),
              DistanceUnit: z
                .enum(['Kilometers', 'Miles'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Set the unit system to specify the distance.</p> <p>Default Value: <code>Kilometers</code> </p>',
                }),
              IncludeLegGeometry: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Set to include the geometry details in the result for each path between a pair of positions.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
                }),
              TravelMode: z
                .enum(['Car', 'Truck', 'Walking', 'Bicycle', 'Motorcycle'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. You can choose <code>Car</code>, <code>Truck</code>, <code>Walking</code>, <code>Bicycle</code> or <code>Motorcycle</code> as options for the <code>TravelMode</code>.</p> <note> <p> <code>Bicycle</code> and <code>Motorcycle</code> are only valid when using Grab as a data provider, and only within Southeast Asia.</p> <p> <code>Truck</code> is not available for Grab.</p> <p>For more details on the using Grab for routing, including areas of coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>The <code>TravelMode</code> you specify also determines how you specify route preferences: </p> <ul> <li> <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code> parameter.</p> </li> <li> <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code> parameter.</p> </li> </ul> <p>Default Value: <code>Car</code> </p>',
                }),
              TruckModeOptions: z
                .object({
                  AvoidFerries: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Avoids ferries when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
                      }),
                  ).exactOptional(),
                  AvoidTolls: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Avoids tolls when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
                      }),
                  ).exactOptional(),
                  Dimensions: TruckDimensionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies the truck's dimension specifications including length, height, width, and unit of measurement. Used to avoid roads that can't support the truck's dimensions.",
                      }),
                  ).exactOptional(),
                  Weight: TruckWeightSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies the truck's weight specifications including total weight and unit of measurement. Used to avoid roads that can't support the truck's weight.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.',
                  required: [],
                }),
              WaypointPositions: z
                .array(PositionSchema)
                .min(0)
                .max(23)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies an ordered list of up to 23 intermediate positions to include along a route between the departure position and destination position. </p> <ul> <li> <p>For example, from the <code>DeparturePosition</code> <code>[-123.115, 49.285]</code>, the route follows the order that the waypoint positions are given <code>[[-122.757, 49.0021],[-122.349, 47.620]]</code> </p> </li> </ul> <note> <p>If you specify a waypoint position that\'s not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. </p> <p>Specifying more than 23 waypoints returns a <code>400 ValidationException</code> error.</p> <p>If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a <code>400 RoutesValidationException</code> error.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>',
                }),
            })
            .openapi({ required: ['DeparturePosition', 'DestinationPosition'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CalculateRouteResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixRoute = createRoute({
  method: 'post',
  path: '/routes/v0/calculators/{CalculatorName}/calculate/route-matrix',
  description:
    '<p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn\'t specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can\'t specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>',
  operationId: 'CalculateRouteMatrix',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CalculatorName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CalculatorName',
            in: 'path',
            required: true,
            description:
              'The name of the route calculator resource that you want to use to calculate the route matrix. ',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CarModeOptions: z
                .object({
                  AvoidFerries: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Avoids ferries when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
                      }),
                  ).exactOptional(),
                  AvoidTolls: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Avoids tolls when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.',
                  required: [],
                }),
              DepartNow: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "<p>Sets the time of departure as the current time. Uses the current time to calculate the route matrix. You can't set both <code>DepartureTime</code> and <code>DepartNow</code>. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>",
                }),
              DeparturePositions: z
                .array(PositionSchema)
                .min(1)
                .max(350)
                .openapi({
                  description:
                    '<p>The list of departure (origin) positions for the route matrix. An array of points, each of which is itself a 2-value array defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format: <code>[longitude, latitude]</code>. For example, <code>[-123.115, 49.285]</code>.</p> <important> <p>Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html#matrix-routing-position-limits"> Position restrictions</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </important> <note> <p>For route calculators that use Esri as the data provider, if you specify a departure that\'s not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"> moves the position to the nearest road</a>. The snapped value is available in the result in <code>SnappedDeparturePositions</code>.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>',
                }),
              DepartureTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the desired time of departure. Uses the given time to calculate the route matrix. You can\'t set both <code>DepartureTime</code> and <code>DepartNow</code>. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.</p> <note> <p>Setting a departure time in the past returns a <code>400 ValidationException</code> error.</p> </note> <ul> <li> <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>',
                }),
              DestinationPositions: z
                .array(PositionSchema)
                .min(1)
                .max(350)
                .openapi({
                  description:
                    '<p>The list of destination positions for the route matrix. An array of points, each of which is itself a 2-value array defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format: <code>[longitude, latitude]</code>. For example, <code>[-122.339, 47.615]</code> </p> <important> <p>Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html#matrix-routing-position-limits"> Position restrictions</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </important> <note> <p>For route calculators that use Esri as the data provider, if you specify a destination that\'s not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"> moves the position to the nearest road</a>. The snapped value is available in the result in <code>SnappedDestinationPositions</code>.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>',
                }),
              DistanceUnit: z
                .enum(['Kilometers', 'Miles'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Set the unit system to specify the distance.</p> <p>Default Value: <code>Kilometers</code> </p>',
                }),
              TravelMode: z
                .enum(['Car', 'Truck', 'Walking', 'Bicycle', 'Motorcycle'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>The <code>TravelMode</code> you specify also determines how you specify route preferences: </p> <ul> <li> <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code> parameter.</p> </li> <li> <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code> parameter.</p> </li> </ul> <note> <p> <code>Bicycle</code> or <code>Motorcycle</code> are only valid when using <code>Grab</code> as a data provider, and only within Southeast Asia.</p> <p> <code>Truck</code> is not available for Grab.</p> <p>For more information about using Grab as a data provider, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>Default Value: <code>Car</code> </p>',
                }),
              TruckModeOptions: z
                .object({
                  AvoidFerries: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Avoids ferries when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
                      }),
                  ).exactOptional(),
                  AvoidTolls: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Avoids tolls when calculating routes.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> | <code>true</code> </p>',
                      }),
                  ).exactOptional(),
                  Dimensions: TruckDimensionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies the truck's dimension specifications including length, height, width, and unit of measurement. Used to avoid roads that can't support the truck's dimensions.",
                      }),
                  ).exactOptional(),
                  Weight: TruckWeightSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies the truck's weight specifications including total weight and unit of measurement. Used to avoid roads that can't support the truck's weight.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.',
                  required: [],
                }),
            })
            .openapi({ required: ['DeparturePositions', 'DestinationPositions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CalculateRouteMatrixResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postGeofencingV0CollectionsRoute = createRoute({
  method: 'post',
  path: '/geofencing/v0/collections',
  description: 'Creates a geofence collection, which manages and stores geofences.',
  operationId: 'CreateGeofenceCollection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CollectionName: z
                .string()
                .regex(/^[-._\w]+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p>A custom name for the geofence collection.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique geofence collection name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleGeofenceCollection</code>.</p> </li> </ul>',
                }),
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'An optional description for the geofence collection.' }),
              KmsKeyId: z
                .string()
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN. ',
                }),
              PricingPlan: z
                .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
                .exactOptional()
                .openapi({
                  description:
                    'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.',
                }),
              PricingPlanDataSource: z
                .string()
                .exactOptional()
                .openapi({ description: 'This parameter is no longer used.' }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Applies one or more tags to the geofence collection. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['CollectionName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGeofenceCollectionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postMetadataV0KeysRoute = createRoute({
  method: 'post',
  path: '/metadata/v0/keys',
  description:
    '<p>Creates an API key resource in your Amazon Web Services account, which lets you grant <code>geo:GetMap*</code> actions for Amazon Location Map resources to the API key bearer.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>',
  operationId: 'CreateKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'An optional description for the API key resource.' }),
              ExpireTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The optional timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. One of <code>NoExpiry</code> or <code>ExpireTime</code> must be set.',
                }),
              KeyName: z
                .string()
                .regex(/^[-._\w]+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p>A custom name for the API key resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique API key name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleAPIKey</code>.</p> </li> </ul>',
                }),
              NoExpiry: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Optionally set to <code>true</code> to set no expiration time for the API key. One of <code>NoExpiry</code> or <code>ExpireTime</code> must be set.',
                }),
              Restrictions: z
                .object({
                  AllowActions: ApiKeyRestrictionsAllowActionsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A list of allowed actions that an API key resource grants permissions to perform</p> <note> <p>Currently, the only valid action is <code>geo:GetMap*</code> as an input to the list. For example, <code>["geo:GetMap*"]</code> is valid but <code>["geo:GetMapTile"]</code> is not.</p> </note>',
                      }),
                  ).exactOptional(),
                  AllowReferers: ApiKeyRestrictionsAllowReferersListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>An optional list of allowed HTTP referers for which requests must originate from. Requests using this API key from other domains will not be allowed.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9) or any symbols in this list <code>$\\-._+!*`(),;/?:@=&amp;</code> </p> </li> <li> <p>May contain a percent (%) if followed by 2 hexadecimal digits (A-F, a-f, 0-9); this is used for URL encoding purposes.</p> </li> <li> <p>May contain wildcard characters question mark (?) and asterisk (*).</p> <p>Question mark (?) will replace any single character (including hexadecimal digits).</p> <p>Asterisk (*) will replace any multiple characters (including multiple hexadecimal digits).</p> </li> <li> <p>No spaces allowed. For example, <code>https://example.com</code>.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  AllowResources: ApiKeyRestrictionsAllowResourcesListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A list of allowed resource ARNs that a API key bearer can perform actions on</p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p> <note> <p>In this preview, you can allow only map resources.</p> </note> <p>Requirements:</p> <ul> <li> <p>Must be prefixed with <code>arn</code>.</p> </li> <li> <p> <code>partition</code> and <code>service</code> must not be empty and should begin with only alphanumeric characters (A–Z, a–z, 0–9) and contain only alphanumeric numbers, hyphens (-) and periods (.).</p> </li> <li> <p> <code>region</code> and <code>account-id</code> can be empty or should begin with only alphanumeric characters (A–Z, a–z, 0–9) and contain only alphanumeric numbers, hyphens (-) and periods (.).</p> </li> <li> <p> <code>resource-id</code> can begin with any character except for forward slash (/) and contain any characters after, including forward slashes to form a path.</p> <p> <code>resource-id</code> can also include wildcard characters, denoted by an asterisk (*).</p> </li> <li> <p> <code>arn</code>, <code>partition</code>, <code>service</code>, <code>region</code>, <code>account-id</code> and <code>resource-id</code> must be delimited by a colon (:).</p> </li> <li> <p>No spaces allowed. For example, <code>arn:aws:geo:region:<i>account-id</i>:map/ExampleMap*</code>.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'API Restrictions on the allowed actions, resources, and referers for an API key resource.',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Applies one or more tags to the map resource. A tag is a key-value pair that helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['KeyName', 'Restrictions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateKeyResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postMapsV0MapsRoute = createRoute({
  method: 'post',
  path: '/maps/v0/maps',
  description:
    '<p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>',
  operationId: 'CreateMap',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Configuration: z
                .object({
                  Style: MapStyleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specifies the map style selected from an available data provider.</p> <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri map styles</a>:</p> <ul> <li> <p> <code>VectorEsriDarkGrayCanvas</code> – The Esri Dark Gray Canvas map style. A vector basemap with a dark gray, neutral background with minimal colors, labels, and features that\'s designed to draw attention to your thematic content. </p> </li> <li> <p> <code>RasterEsriImagery</code> – The Esri Imagery map style. A raster basemap that provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide. </p> </li> <li> <p> <code>VectorEsriLightGrayCanvas</code> – The Esri Light Gray Canvas map style, which provides a detailed vector basemap with a light gray, neutral background style with minimal colors, labels, and features that\'s designed to draw attention to your thematic content. </p> </li> <li> <p> <code>VectorEsriTopographic</code> – The Esri Light map style, which provides a detailed vector basemap with a classic Esri map style.</p> </li> <li> <p> <code>VectorEsriStreets</code> – The Esri World Streets map style, which provides a detailed vector basemap for the world symbolized with a classic Esri street map style. The vector tile layer is similar in content and style to the World Street Map raster map.</p> </li> <li> <p> <code>VectorEsriNavigation</code> – The Esri World Navigation map style, which provides a detailed basemap for the world symbolized with a custom navigation map style that\'s designed for use during the day in mobile devices.</p> </li> </ul> <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies map styles</a>:</p> <ul> <li> <p> <code>VectorHereContrast</code> – The HERE Contrast (Berlin) map style is a high contrast detailed base map of the world that blends 3D and 2D rendering.</p> <note> <p>The <code>VectorHereContrast</code> style has been renamed from <code>VectorHereBerlin</code>. <code>VectorHereBerlin</code> has been deprecated, but will continue to work in applications that use it.</p> </note> </li> <li> <p> <code>VectorHereExplore</code> – A default HERE map style containing a neutral, global map and its features including roads, buildings, landmarks, and water features. It also now includes a fully designed map of Japan.</p> </li> <li> <p> <code>VectorHereExploreTruck</code> – A global map containing truck restrictions and attributes (e.g. width / height / HAZMAT) symbolized with highlighted segments and icons on top of HERE Explore to support use cases within transport and logistics.</p> </li> <li> <p> <code>RasterHereExploreSatellite</code> – A global map containing high resolution satellite imagery.</p> </li> <li> <p> <code>HybridHereExploreSatellite</code> – A global map displaying the road network, street names, and city labels over satellite imagery. This style will automatically retrieve both raster and vector tiles, and your charges will be based on total tiles retrieved.</p> <note> <p>Hybrid styles use both vector and raster tiles when rendering the map that you see. This means that more tiles are retrieved than when using either vector or raster tiles alone. Your charges will include all tiles retrieved.</p> </note> </li> </ul> <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps map styles</a>:</p> <ul> <li> <p> <code>VectorGrabStandardLight</code> – The Grab Standard Light map style provides a basemap with detailed land use coloring, area names, roads, landmarks, and points of interest covering Southeast Asia.</p> </li> <li> <p> <code>VectorGrabStandardDark</code> – The Grab Standard Dark map style provides a dark variation of the standard basemap covering Southeast Asia.</p> </li> </ul> <note> <p>Grab provides maps only for countries in Southeast Asia, and is only available in the Asia Pacific (Singapore) Region (<code>ap-southeast-1</code>). For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and area covered</a>.</p> </note> <p>Valid <a href="https://docs.aws.amazon.com/location/latest/developerguide/open-data.html">Open Data map styles</a>:</p> <ul> <li> <p> <code>VectorOpenDataStandardLight</code> – The Open Data Standard Light map style provides a detailed basemap for the world suitable for website and mobile application use. The map includes highways major roads, minor roads, railways, water features, cities, parks, landmarks, building footprints, and administrative boundaries.</p> </li> <li> <p> <code>VectorOpenDataStandardDark</code> – Open Data Standard Dark is a dark-themed map style that provides a detailed basemap for the world suitable for website and mobile application use. The map includes highways major roads, minor roads, railways, water features, cities, parks, landmarks, building footprints, and administrative boundaries.</p> </li> <li> <p> <code>VectorOpenDataVisualizationLight</code> – The Open Data Visualization Light map style is a light-themed style with muted colors and fewer features that aids in understanding overlaid data.</p> </li> <li> <p> <code>VectorOpenDataVisualizationDark</code> – The Open Data Visualization Dark map style is a dark-themed style with muted colors and fewer features that aids in understanding overlaid data.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'Specifies the map tile style selected from an available provider.',
                  required: [],
                }),
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'An optional description for the map resource.' }),
              MapName: z
                .string()
                .regex(/^[-._\w]+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p>The name for the map resource.</p> <p>Requirements:</p> <ul> <li> <p>Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique map resource name. </p> </li> <li> <p>No spaces allowed. For example, <code>ExampleMap</code>.</p> </li> </ul>',
                }),
              PricingPlan: z
                .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
                .exactOptional()
                .openapi({
                  description:
                    'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Applies one or more tags to the map resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['Configuration', 'MapName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMapResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPlacesV0IndexesRoute = createRoute({
  method: 'post',
  path: '/places/v0/indexes',
  description:
    '<p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>',
  operationId: 'CreatePlaceIndex',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DataSource: z
                .string()
                .openapi({
                  description:
                    '<p>Specifies the geospatial data provider for the new place index.</p> <note> <p>This field is case-sensitive. Enter the valid values as shown. For example, entering <code>HERE</code> returns an error.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>\'s coverage in your region of interest, see <a href="https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm">Esri details on geocoding coverage</a>.</p> </li> <li> <p> <code>Grab</code> – Grab provides place index functionality for Southeast Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>\' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p> </li> <li> <p> <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a>\' coverage in your region of interest, see <a href="https://developer.here.com/documentation/geocoder/dev_guide/topics/coverage-geocoder.html">HERE details on goecoding coverage</a>.</p> <important> <p>If you specify HERE Technologies (<code>Here</code>) as the data provider, you may not <a href="https://docs.aws.amazon.com/location-places/latest/APIReference/API_DataSourceConfiguration.html">store results</a> for locations in Japan. For more information, see the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> for Amazon Location Service.</p> </important> </li> </ul> <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>',
                }),
              DataSourceConfiguration: z
                .object({
                  IntendedUse: IntendedUseSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specifies how the results of an operation will be stored by the caller. </p> <p>Valid values include:</p> <ul> <li> <p> <code>SingleUse</code> specifies that the results won't be stored. </p> </li> <li> <p> <code>Storage</code> specifies that the result can be cached or stored in a database.</p> </li> </ul> <p>Default value: <code>SingleUse</code> </p>",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can\'t store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can\'t store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>',
                  required: [],
                }),
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The optional description for the place index resource.' }),
              IndexName: z
                .string()
                .regex(/^[-._\w]+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p>The name of the place index resource. </p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique place index resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExamplePlaceIndex</code>.</p> </li> </ul>',
                }),
              PricingPlan: z
                .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
                .exactOptional()
                .openapi({
                  description:
                    'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Applies one or more tags to the place index resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['DataSource', 'IndexName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePlaceIndexResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postRoutesV0CalculatorsRoute = createRoute({
  method: 'post',
  path: '/routes/v0/calculators',
  description:
    '<p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>',
  operationId: 'CreateRouteCalculator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CalculatorName: z
                .string()
                .regex(/^[-._\w]+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p>The name of the route calculator resource. </p> <p>Requirements:</p> <ul> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9) , hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique Route calculator resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleRouteCalculator</code>.</p> </li> </ul>',
                }),
              DataSource: z
                .string()
                .openapi({
                  description:
                    '<p>Specifies the data provider of traffic and road network data.</p> <note> <p>This field is case-sensitive. Enter the valid values as shown. For example, entering <code>HERE</code> returns an error.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>\'s coverage in your region of interest, see <a href="https://doc.arcgis.com/en/arcgis-online/reference/network-coverage.htm">Esri details on street networks and traffic coverage</a>.</p> <p>Route calculators that use Esri as a data source only calculate routes that are shorter than 400 km.</p> </li> <li> <p> <code>Grab</code> – Grab provides routing functionality for Southeast Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>\' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p> </li> <li> <p> <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a>\' coverage in your region of interest, see <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/car-routing.html">HERE car routing coverage</a> and <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/truck-routing.html">HERE truck routing coverage</a>.</p> </li> </ul> <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>',
                }),
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: 'The optional description for the route calculator resource.',
                }),
              PricingPlan: z
                .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
                .exactOptional()
                .openapi({
                  description:
                    'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Applies one or more tags to the route calculator resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <ul> <li> <p>For example: { <code>"tag1" : "value1"</code>, <code>"tag2" : "value2"</code>}</p> </li> </ul> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['CalculatorName', 'DataSource'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRouteCalculatorResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTrackingV0TrackersRoute = createRoute({
  method: 'post',
  path: '/tracking/v0/trackers',
  description:
    'Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.',
  operationId: 'CreateTracker',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'An optional description for the tracker resource.' }),
              KmsKeyId: z
                .string()
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.',
                }),
              PositionFiltering: z
                .enum(['TimeBased', 'DistanceBased', 'AccuracyBased'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the position filtering for the tracker resource.</p> <p>Valid values:</p> <ul> <li> <p> <code>TimeBased</code> - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID. </p> </li> <li> <p> <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this area are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map. </p> </li> <li> <p> <code>AccuracyBased</code> - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This can reduce the effects of GPS noise when displaying device trajectories on a map, and can help control your costs by reducing the number of geofence evaluations. </p> </li> </ul> <p>This field is optional. If not specified, the default value is <code>TimeBased</code>.</p>',
                }),
              PricingPlan: z
                .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
                .exactOptional()
                .openapi({
                  description:
                    'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.',
                }),
              PricingPlanDataSource: z
                .string()
                .exactOptional()
                .openapi({ description: 'This parameter is no longer used.' }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Applies one or more tags to the tracker resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
                }),
              TrackerName: z
                .string()
                .regex(/^[-._\w]+$/)
                .min(1)
                .max(100)
                .openapi({
                  description:
                    '<p>The name for the tracker resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique tracker resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleTracker</code>.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['TrackerName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTrackerResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getGeofencingV0CollectionsCollectionNameRoute = createRoute({
  method: 'get',
  path: '/geofencing/v0/collections/{CollectionName}',
  description: 'Retrieves the geofence collection details.',
  operationId: 'DescribeGeofenceCollection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CollectionName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CollectionName',
            in: 'path',
            required: true,
            description: 'The name of the geofence collection.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGeofenceCollectionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteGeofencingV0CollectionsCollectionNameRoute = createRoute({
  method: 'delete',
  path: '/geofencing/v0/collections/{CollectionName}',
  description:
    '<p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>',
  operationId: 'DeleteGeofenceCollection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CollectionName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CollectionName',
            in: 'path',
            required: true,
            description: 'The name of the geofence collection to be deleted.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGeofenceCollectionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchGeofencingV0CollectionsCollectionNameRoute = createRoute({
  method: 'patch',
  path: '/geofencing/v0/collections/{CollectionName}',
  description: 'Updates the specified properties of a given geofence collection.',
  operationId: 'UpdateGeofenceCollection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CollectionName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CollectionName',
            in: 'path',
            required: true,
            description: 'The name of the geofence collection to update.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Updates the description for the geofence collection.' }),
              PricingPlan: z
                .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
                .exactOptional()
                .openapi({
                  description:
                    'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.',
                }),
              PricingPlanDataSource: z
                .string()
                .exactOptional()
                .openapi({ description: 'This parameter is no longer used.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGeofenceCollectionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getMetadataV0KeysKeyNameRoute = createRoute({
  method: 'get',
  path: '/metadata/v0/keys/{KeyName}',
  description:
    '<p>Retrieves the API key resource details.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>',
  operationId: 'DescribeKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      KeyName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'KeyName',
            in: 'path',
            required: true,
            description: 'The name of the API key resource.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeKeyResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteMetadataV0KeysKeyNameRoute = createRoute({
  method: 'delete',
  path: '/metadata/v0/keys/{KeyName}',
  description:
    'Deletes the specified API key. The API key must have been deactivated more than 90 days previously.',
  operationId: 'DeleteKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      KeyName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'KeyName',
            in: 'path',
            required: true,
            description: 'The name of the API key to delete.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteKeyResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchMetadataV0KeysKeyNameRoute = createRoute({
  method: 'patch',
  path: '/metadata/v0/keys/{KeyName}',
  description:
    '<p>Updates the specified properties of a given API key resource.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>',
  operationId: 'UpdateKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      KeyName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'KeyName',
            in: 'path',
            required: true,
            description: 'The name of the API key resource to update.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Updates the description for the API key resource.' }),
              ExpireTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Updates the timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. ',
                }),
              ForceUpdate: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>The boolean flag to be included for updating <code>ExpireTime</code> or <code>Restrictions</code> details.</p> <p>Must be set to <code>true</code> to update an API key resource that has been used in the past 7 days.</p> <p> <code>False</code> if force update is not preferred</p> <p>Default value: <code>False</code> </p>',
                }),
              NoExpiry: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the API key should expire. Set to <code>true</code> to set the API key to have no expiration time.',
                }),
              Restrictions: z
                .object({
                  AllowActions: ApiKeyRestrictionsAllowActionsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A list of allowed actions that an API key resource grants permissions to perform</p> <note> <p>Currently, the only valid action is <code>geo:GetMap*</code> as an input to the list. For example, <code>["geo:GetMap*"]</code> is valid but <code>["geo:GetMapTile"]</code> is not.</p> </note>',
                      }),
                  ).exactOptional(),
                  AllowReferers: ApiKeyRestrictionsAllowReferersListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>An optional list of allowed HTTP referers for which requests must originate from. Requests using this API key from other domains will not be allowed.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9) or any symbols in this list <code>$\\-._+!*`(),;/?:@=&amp;</code> </p> </li> <li> <p>May contain a percent (%) if followed by 2 hexadecimal digits (A-F, a-f, 0-9); this is used for URL encoding purposes.</p> </li> <li> <p>May contain wildcard characters question mark (?) and asterisk (*).</p> <p>Question mark (?) will replace any single character (including hexadecimal digits).</p> <p>Asterisk (*) will replace any multiple characters (including multiple hexadecimal digits).</p> </li> <li> <p>No spaces allowed. For example, <code>https://example.com</code>.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  AllowResources: ApiKeyRestrictionsAllowResourcesListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A list of allowed resource ARNs that a API key bearer can perform actions on</p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p> <note> <p>In this preview, you can allow only map resources.</p> </note> <p>Requirements:</p> <ul> <li> <p>Must be prefixed with <code>arn</code>.</p> </li> <li> <p> <code>partition</code> and <code>service</code> must not be empty and should begin with only alphanumeric characters (A–Z, a–z, 0–9) and contain only alphanumeric numbers, hyphens (-) and periods (.).</p> </li> <li> <p> <code>region</code> and <code>account-id</code> can be empty or should begin with only alphanumeric characters (A–Z, a–z, 0–9) and contain only alphanumeric numbers, hyphens (-) and periods (.).</p> </li> <li> <p> <code>resource-id</code> can begin with any character except for forward slash (/) and contain any characters after, including forward slashes to form a path.</p> <p> <code>resource-id</code> can also include wildcard characters, denoted by an asterisk (*).</p> </li> <li> <p> <code>arn</code>, <code>partition</code>, <code>service</code>, <code>region</code>, <code>account-id</code> and <code>resource-id</code> must be delimited by a colon (:).</p> </li> <li> <p>No spaces allowed. For example, <code>arn:aws:geo:region:<i>account-id</i>:map/ExampleMap*</code>.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'API Restrictions on the allowed actions, resources, and referers for an API key resource.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateKeyResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getMapsV0MapsMapNameRoute = createRoute({
  method: 'get',
  path: '/maps/v0/maps/{MapName}',
  description: 'Retrieves the map resource details.',
  operationId: 'DescribeMap',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      MapName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'MapName',
            in: 'path',
            required: true,
            description: 'The name of the map resource.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMapResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteMapsV0MapsMapNameRoute = createRoute({
  method: 'delete',
  path: '/maps/v0/maps/{MapName}',
  description:
    '<p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>',
  operationId: 'DeleteMap',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      MapName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'MapName',
            in: 'path',
            required: true,
            description: 'The name of the map resource to be deleted.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMapResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchMapsV0MapsMapNameRoute = createRoute({
  method: 'patch',
  path: '/maps/v0/maps/{MapName}',
  description: 'Updates the specified properties of a given map resource.',
  operationId: 'UpdateMap',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      MapName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'MapName',
            in: 'path',
            required: true,
            description: 'The name of the map resource to update.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Updates the description for the map resource.' }),
              PricingPlan: z
                .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
                .exactOptional()
                .openapi({
                  description:
                    'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMapResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getPlacesV0IndexesIndexNameRoute = createRoute({
  method: 'get',
  path: '/places/v0/indexes/{IndexName}',
  description: 'Retrieves the place index resource details.',
  operationId: 'DescribePlaceIndex',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IndexName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'IndexName',
            in: 'path',
            required: true,
            description: 'The name of the place index resource.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePlaceIndexResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deletePlacesV0IndexesIndexNameRoute = createRoute({
  method: 'delete',
  path: '/places/v0/indexes/{IndexName}',
  description:
    '<p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>',
  operationId: 'DeletePlaceIndex',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IndexName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'IndexName',
            in: 'path',
            required: true,
            description: 'The name of the place index resource to be deleted.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePlaceIndexResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchPlacesV0IndexesIndexNameRoute = createRoute({
  method: 'patch',
  path: '/places/v0/indexes/{IndexName}',
  description: 'Updates the specified properties of a given place index resource.',
  operationId: 'UpdatePlaceIndex',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IndexName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'IndexName',
            in: 'path',
            required: true,
            description: 'The name of the place index resource to update.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DataSourceConfiguration: z
                .object({
                  IntendedUse: IntendedUseSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>Specifies how the results of an operation will be stored by the caller. </p> <p>Valid values include:</p> <ul> <li> <p> <code>SingleUse</code> specifies that the results won't be stored. </p> </li> <li> <p> <code>Storage</code> specifies that the result can be cached or stored in a database.</p> </li> </ul> <p>Default value: <code>SingleUse</code> </p>",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can\'t store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can\'t store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>',
                  required: [],
                }),
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Updates the description for the place index resource.' }),
              PricingPlan: z
                .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
                .exactOptional()
                .openapi({
                  description:
                    'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePlaceIndexResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getRoutesV0CalculatorsCalculatorNameRoute = createRoute({
  method: 'get',
  path: '/routes/v0/calculators/{CalculatorName}',
  description: 'Retrieves the route calculator resource details.',
  operationId: 'DescribeRouteCalculator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CalculatorName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CalculatorName',
            in: 'path',
            required: true,
            description: 'The name of the route calculator resource.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRouteCalculatorResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteRoutesV0CalculatorsCalculatorNameRoute = createRoute({
  method: 'delete',
  path: '/routes/v0/calculators/{CalculatorName}',
  description:
    '<p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>',
  operationId: 'DeleteRouteCalculator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CalculatorName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CalculatorName',
            in: 'path',
            required: true,
            description: 'The name of the route calculator resource to be deleted.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRouteCalculatorResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchRoutesV0CalculatorsCalculatorNameRoute = createRoute({
  method: 'patch',
  path: '/routes/v0/calculators/{CalculatorName}',
  description: 'Updates the specified properties for a given route calculator resource.',
  operationId: 'UpdateRouteCalculator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CalculatorName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CalculatorName',
            in: 'path',
            required: true,
            description: 'The name of the route calculator resource to update.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: 'Updates the description for the route calculator resource.',
                }),
              PricingPlan: z
                .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
                .exactOptional()
                .openapi({
                  description:
                    'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRouteCalculatorResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTrackingV0TrackersTrackerNameRoute = createRoute({
  method: 'get',
  path: '/tracking/v0/trackers/{TrackerName}',
  description: 'Retrieves the tracker resource details.',
  operationId: 'DescribeTracker',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description: 'The name of the tracker resource.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTrackerResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteTrackingV0TrackersTrackerNameRoute = createRoute({
  method: 'delete',
  path: '/tracking/v0/trackers/{TrackerName}',
  description:
    "<p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>",
  operationId: 'DeleteTracker',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description: 'The name of the tracker resource to be deleted.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTrackerResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchTrackingV0TrackersTrackerNameRoute = createRoute({
  method: 'patch',
  path: '/tracking/v0/trackers/{TrackerName}',
  description: 'Updates the specified properties of a given tracker resource.',
  operationId: 'UpdateTracker',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description: 'The name of the tracker resource to update.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Updates the description for the tracker resource.' }),
              PositionFiltering: z
                .enum(['TimeBased', 'DistanceBased', 'AccuracyBased'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Updates the position filtering for the tracker resource.</p> <p>Valid values:</p> <ul> <li> <p> <code>TimeBased</code> - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID. </p> </li> <li> <p> <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this distance are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map. </p> </li> <li> <p> <code>AccuracyBased</code> - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This helps educe the effects of GPS noise when displaying device trajectories on a map, and can help control costs by reducing the number of geofence evaluations. </p> </li> </ul>',
                }),
              PricingPlan: z
                .enum(['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement'])
                .exactOptional()
                .openapi({
                  description:
                    'No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.',
                }),
              PricingPlanDataSource: z
                .string()
                .exactOptional()
                .openapi({ description: 'This parameter is no longer used.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTrackerResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteTrackingV0TrackersTrackerNameConsumersConsumerArnRoute = createRoute({
  method: 'delete',
  path: '/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}',
  description:
    '<p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>',
  operationId: 'DisassociateTrackerConsumer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ConsumerArn: z
        .string()
        .regex(/^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^\/].*)?$/)
        .min(0)
        .max(1600)
        .openapi({
          param: {
            name: 'ConsumerArn',
            in: 'path',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) for the geofence collection to be disassociated from the tracker resource. Used when you need to specify a resource across all Amazon Web Services. </p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code> </p> </li> </ul>',
            schema: {
              type: 'string',
              pattern:
                '^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$',
              minLength: 0,
              maxLength: 1600,
            },
          },
        }),
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description: 'The name of the tracker resource to be dissociated from the consumer.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateTrackerConsumerResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestRoute = createRoute({
  method: 'get',
  path: '/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest',
  description:
    "<p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>",
  operationId: 'GetDevicePosition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      DeviceId: z
        .string()
        .regex(/^[-._\p{L}\p{N}]+$/u)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'DeviceId',
            in: 'path',
            required: true,
            description: 'The device whose position you want to retrieve.',
            schema: {
              type: 'string',
              pattern: '^[-._\\p{L}\\p{N}]+$',
              minLength: 1,
              maxLength: 100,
            },
          },
        }),
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description: 'The tracker resource receiving the position update.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDevicePositionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsRoute = createRoute({
  method: 'post',
  path: '/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions',
  description:
    '<p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>',
  operationId: 'GetDevicePositionHistory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      DeviceId: z
        .string()
        .regex(/^[-._\p{L}\p{N}]+$/u)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'DeviceId',
            in: 'path',
            required: true,
            description: 'The device whose position history you want to retrieve.',
            schema: {
              type: 'string',
              pattern: '^[-._\\p{L}\\p{N}]+$',
              minLength: 1,
              maxLength: 100,
            },
          },
        }),
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description:
              'The tracker resource receiving the request for the device position history.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              EndTimeExclusive: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specify the end time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be the time that the request is made.</p> <p>Requirement:</p> <ul> <li> <p>The time specified for <code>EndTimeExclusive</code> must be after the time for <code>StartTimeInclusive</code>.</p> </li> </ul>',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional limit for the number of device positions returned in a single call.</p> <p>Default value: <code>100</code> </p>',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
                }),
              StartTimeInclusive: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specify the start time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be 24 hours prior to the time that the request is made.</p> <p>Requirement:</p> <ul> <li> <p>The time specified for <code>StartTimeInclusive</code> must be before <code>EndTimeExclusive</code>.</p> </li> </ul>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDevicePositionHistoryResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRoute = createRoute({
  method: 'get',
  path: '/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}',
  description: 'Retrieves the geofence details from a geofence collection.',
  operationId: 'GetGeofence',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CollectionName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CollectionName',
            in: 'path',
            required: true,
            description: 'The geofence collection storing the target geofence.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
      GeofenceId: z
        .string()
        .regex(/^[-._\p{L}\p{N}]+$/u)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'GeofenceId',
            in: 'path',
            required: true,
            description: "The geofence you're retrieving details for.",
            schema: {
              type: 'string',
              pattern: '^[-._\\p{L}\\p{N}]+$',
              minLength: 1,
              maxLength: 100,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGeofenceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRoute = createRoute({
  method: 'put',
  path: '/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}',
  description:
    'Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. ',
  operationId: 'PutGeofence',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CollectionName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CollectionName',
            in: 'path',
            required: true,
            description: 'The geofence collection to store the geofence in.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
      GeofenceId: z
        .string()
        .regex(/^[-._\p{L}\p{N}]+$/u)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'GeofenceId',
            in: 'path',
            required: true,
            description:
              'An identifier for the geofence. For example, <code>ExampleGeofence-1</code>.',
            schema: {
              type: 'string',
              pattern: '^[-._\\p{L}\\p{N}]+$',
              minLength: 1,
              maxLength: 100,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Geometry: z
                .object({
                  Circle: CircleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A circle on the earth, as defined by a center point and a radius.',
                      }),
                  ).exactOptional(),
                  Polygon: LinearRingsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A polygon is a list of linear rings which are each made up of a list of vertices.</p> <p>Each vertex is a 2-dimensional point of the form: <code>[longitude, latitude]</code>. This is represented as an array of doubles of length 2 (so <code>[double, double]</code>).</p> <p>An array of 4 or more vertices, where the first and last vertex are the same (to form a closed boundary), is called a linear ring. The linear ring vertices must be listed in counter-clockwise order around the ring’s interior. The linear ring is represented as an array of vertices, or an array of arrays of doubles (<code>[[double, double], ...]</code>).</p> <p>A geofence consists of a single linear ring. To allow for future expansion, the Polygon parameter takes an array of linear rings, which is represented as an array of arrays of arrays of doubles (<code>[[[double, double], ...], ...]</code>).</p> <p>A linear ring for use in geofences can consist of between 4 and 1,000 vertices.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    "<p>Contains the geofence geometry details.</p> <p>A geofence geometry is made up of either a polygon or a circle. Can be either a polygon or a circle. Including both will return a validation error.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>",
                  required: [],
                }),
            })
            .openapi({ required: ['Geometry'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutGeofenceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeRoute = createRoute({
  method: 'get',
  path: '/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}',
  description: 'Retrieves glyphs used to display labels on a map.',
  operationId: 'GetMapGlyphs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FontStack: z
        .string()
        .openapi({
          param: {
            name: 'FontStack',
            in: 'path',
            required: true,
            description:
              '<p>A comma-separated list of fonts to load glyphs from in order of preference. For example, <code>Noto Sans Regular, Arial Unicode</code>.</p> <p>Valid fonts stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a> styles: </p> <ul> <li> <p>VectorEsriDarkGrayCanvas – <code>Ubuntu Medium Italic</code> | <code>Ubuntu Medium</code> | <code>Ubuntu Italic</code> | <code>Ubuntu Regular</code> | <code>Ubuntu Bold</code> </p> </li> <li> <p>VectorEsriLightGrayCanvas – <code>Ubuntu Italic</code> | <code>Ubuntu Regular</code> | <code>Ubuntu Light</code> | <code>Ubuntu Bold</code> </p> </li> <li> <p>VectorEsriTopographic – <code>Noto Sans Italic</code> | <code>Noto Sans Regular</code> | <code>Noto Sans Bold</code> | <code>Noto Serif Regular</code> | <code>Roboto Condensed Light Italic</code> </p> </li> <li> <p>VectorEsriStreets – <code>Arial Regular</code> | <code>Arial Italic</code> | <code>Arial Bold</code> </p> </li> <li> <p>VectorEsriNavigation – <code>Arial Regular</code> | <code>Arial Italic</code> | <code>Arial Bold</code> </p> </li> </ul> <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a> styles:</p> <ul> <li> <p>VectorHereContrast – <code>Fira GO Regular</code> | <code>Fira GO Bold</code> </p> </li> <li> <p>VectorHereExplore, VectorHereExploreTruck, HybridHereExploreSatellite – <code>Fira GO Italic</code> | <code>Fira GO Map</code> | <code>Fira GO Map Bold</code> | <code>Noto Sans CJK JP Bold</code> | <code>Noto Sans CJK JP Light</code> | <code>Noto Sans CJK JP Regular</code> </p> </li> </ul> <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> styles:</p> <ul> <li> <p>VectorGrabStandardLight, VectorGrabStandardDark – <code>Noto Sans Regular</code> | <code>Noto Sans Medium</code> | <code>Noto Sans Bold</code> </p> </li> </ul> <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/open-data.html">Open Data</a> styles:</p> <ul> <li> <p>VectorOpenDataStandardLight, VectorOpenDataStandardDark, VectorOpenDataVisualizationLight, VectorOpenDataVisualizationDark – <code>Amazon Ember Regular,Noto Sans Regular</code> | <code>Amazon Ember Bold,Noto Sans Bold</code> | <code>Amazon Ember Medium,Noto Sans Medium</code> | <code>Amazon Ember Regular Italic,Noto Sans Italic</code> | <code>Amazon Ember Condensed RC Regular,Noto Sans Regular</code> | <code>Amazon Ember Condensed RC Bold,Noto Sans Bold</code> </p> </li> </ul> <note> <p>The fonts used by the Open Data map styles are combined fonts that use <code>Amazon Ember</code> for most glyphs but <code>Noto Sans</code> for glyphs unsupported by <code>Amazon Ember</code>.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      FontUnicodeRange: z
        .string()
        .regex(/^[0-9]+-[0-9]+\.pbf$/)
        .openapi({
          param: {
            name: 'FontUnicodeRange',
            in: 'path',
            required: true,
            description:
              'A Unicode range of characters to download glyphs for. Each response will contain 256 characters. For example, 0–255 includes all characters from range <code>U+0000</code> to <code>00FF</code>. Must be aligned to multiples of 256.',
            schema: { type: 'string', pattern: '^[0-9]+-[0-9]+\\.pbf$' },
          },
        }),
      MapName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'MapName',
            in: 'path',
            required: true,
            description: 'The map resource associated with the glyph ﬁle.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .min(0)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'key',
            in: 'query',
            required: false,
            description:
              'The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.',
            schema: { type: 'string', minLength: 0, maxLength: 1000, format: 'password' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMapGlyphsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getMapsV0MapsMapNameSpritesFileNameRoute = createRoute({
  method: 'get',
  path: '/maps/v0/maps/{MapName}/sprites/{FileName}',
  description:
    'Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.',
  operationId: 'GetMapSprites',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      FileName: z
        .string()
        .regex(/^sprites(@2x)?\.(png|json)$/)
        .openapi({
          param: {
            name: 'FileName',
            in: 'path',
            required: true,
            description:
              '<p>The name of the sprite ﬁle. Use the following ﬁle names for the sprite sheet:</p> <ul> <li> <p> <code>sprites.png</code> </p> </li> <li> <p> <code>sprites@2x.png</code> for high pixel density displays</p> </li> </ul> <p>For the JSON document containing image offsets. Use the following ﬁle names:</p> <ul> <li> <p> <code>sprites.json</code> </p> </li> <li> <p> <code>sprites@2x.json</code> for high pixel density displays</p> </li> </ul>',
            schema: { type: 'string', pattern: '^sprites(@2x)?\\.(png|json)$' },
          },
        }),
      MapName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'MapName',
            in: 'path',
            required: true,
            description: 'The map resource associated with the sprite ﬁle.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .min(0)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'key',
            in: 'query',
            required: false,
            description:
              'The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.',
            schema: { type: 'string', minLength: 0, maxLength: 1000, format: 'password' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMapSpritesResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getMapsV0MapsMapNameStyleDescriptorRoute = createRoute({
  method: 'get',
  path: '/maps/v0/maps/{MapName}/style-descriptor',
  description:
    '<p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>',
  operationId: 'GetMapStyleDescriptor',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      key: z
        .string()
        .min(0)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'key',
            in: 'query',
            required: false,
            description:
              'The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.',
            schema: { type: 'string', minLength: 0, maxLength: 1000, format: 'password' },
          },
        }),
    }),
    params: z.object({
      MapName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'MapName',
            in: 'path',
            required: true,
            description: 'The map resource to retrieve the style descriptor from.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMapStyleDescriptorResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getMapsV0MapsMapNameTilesZXYRoute = createRoute({
  method: 'get',
  path: '/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}',
  description:
    "<p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>",
  operationId: 'GetMapTile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      key: z
        .string()
        .min(0)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'key',
            in: 'query',
            required: false,
            description:
              'The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.',
            schema: { type: 'string', minLength: 0, maxLength: 1000, format: 'password' },
          },
        }),
    }),
    params: z.object({
      MapName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'MapName',
            in: 'path',
            required: true,
            description: 'The map resource to retrieve the map tiles from.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
      X: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'X',
            in: 'path',
            required: true,
            description: 'The X axis value for the map tile.',
            schema: { type: 'string', pattern: '\\d+' },
          },
        }),
      Y: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'Y',
            in: 'path',
            required: true,
            description: 'The Y axis value for the map tile. ',
            schema: { type: 'string', pattern: '\\d+' },
          },
        }),
      Z: z
        .string()
        .regex(/\d+/)
        .openapi({
          param: {
            name: 'Z',
            in: 'path',
            required: true,
            description: 'The zoom value for the map tile.',
            schema: { type: 'string', pattern: '\\d+' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMapTileResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getPlacesV0IndexesIndexNamePlacesPlaceIdRoute = createRoute({
  method: 'get',
  path: '/places/v0/indexes/{IndexName}/places/{PlaceId}',
  description:
    '<p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>',
  operationId: 'GetPlace',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IndexName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'IndexName',
            in: 'path',
            required: true,
            description:
              'The name of the place index resource that you want to use for the search.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
      PlaceId: z
        .string()
        .openapi({
          param: {
            name: 'PlaceId',
            in: 'path',
            required: true,
            description: 'The identifier of the place to find.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      language: z
        .string()
        .min(2)
        .max(35)
        .exactOptional()
        .openapi({
          param: {
            name: 'language',
            in: 'query',
            required: false,
            description:
              '<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we\'ll use the Greek language. You search for a location around Athens, Greece, with the <code>language</code> parameter set to <code>en</code>. The <code>city</code> in the results will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the <code>city</code> in the results will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>',
            schema: { type: 'string', minLength: 2, maxLength: 35 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPlaceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTrackingV0TrackersTrackerNameListPositionsRoute = createRoute({
  method: 'post',
  path: '/tracking/v0/trackers/{TrackerName}/list-positions',
  description: 'A batch request to retrieve all device positions.',
  operationId: 'ListDevicePositions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description: 'The tracker resource containing the requested devices.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional limit for the number of entries returned in a single call.</p> <p>Default value: <code>100</code> </p>',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDevicePositionsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postGeofencingV0ListCollectionsRoute = createRoute({
  method: 'post',
  path: '/geofencing/v0/list-collections',
  description: 'Lists geofence collections in your Amazon Web Services account.',
  operationId: 'ListGeofenceCollections',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGeofenceCollectionsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postGeofencingV0CollectionsCollectionNameListGeofencesRoute = createRoute({
  method: 'post',
  path: '/geofencing/v0/collections/{CollectionName}/list-geofences',
  description: 'Lists geofences stored in a given geofence collection.',
  operationId: 'ListGeofences',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      CollectionName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'CollectionName',
            in: 'path',
            required: true,
            description: 'The name of the geofence collection storing the list of geofences.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional limit for the number of geofences returned in a single call. </p> <p>Default value: <code>100</code> </p>',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGeofencesResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postMetadataV0ListKeysRoute = createRoute({
  method: 'post',
  path: '/metadata/v0/list-keys',
  description:
    '<p>Lists API key resources in your Amazon Web Services account.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>',
  operationId: 'ListKeys',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Filter: z
                .object({
                  KeyStatus: StatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Filter on <code>Active</code> or <code>Expired</code> API keys.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Options for filtering API keys.', required: [] }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListKeysResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postMapsV0ListMapsRoute = createRoute({
  method: 'post',
  path: '/maps/v0/list-maps',
  description: 'Lists map resources in your Amazon Web Services account.',
  operationId: 'ListMaps',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMapsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPlacesV0ListIndexesRoute = createRoute({
  method: 'post',
  path: '/places/v0/list-indexes',
  description: 'Lists place index resources in your Amazon Web Services account.',
  operationId: 'ListPlaceIndexes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional limit for the maximum number of results returned in a single call.</p> <p>Default value: <code>100</code> </p>',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPlaceIndexesResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postRoutesV0ListCalculatorsRoute = createRoute({
  method: 'post',
  path: '/routes/v0/list-calculators',
  description: 'Lists route calculator resources in your Amazon Web Services account.',
  operationId: 'ListRouteCalculators',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional maximum number of results returned in a single call.</p> <p>Default Value: <code>100</code> </p>',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default Value: <code>null</code> </p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRouteCalculatorsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{ResourceArn}',
  description: 'Returns a list of tags that are applied to the specified Amazon Location resource.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceArn: z
        .string()
        .regex(/^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^\/].*)?$/)
        .min(0)
        .max(1600)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code> </p> </li> </ul>',
            schema: {
              type: 'string',
              pattern:
                '^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$',
              minLength: 0,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{ResourceArn}',
  description:
    "<p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>",
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceArn: z
        .string()
        .regex(/^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^\/].*)?$/)
        .min(0)
        .max(1600)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) of the resource whose tags you want to update.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code> </p> </li> </ul>',
            schema: {
              type: 'string',
              pattern:
                '^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$',
              minLength: 0,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    '<p>Applies one or more tags to specific resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTrackingV0TrackersTrackerNameListConsumersRoute = createRoute({
  method: 'post',
  path: '/tracking/v0/trackers/{TrackerName}/list-consumers',
  description: 'Lists geofence collections currently associated to the given tracker resource.',
  operationId: 'ListTrackerConsumers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      TrackerName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TrackerName',
            in: 'path',
            required: true,
            description:
              'The tracker resource whose associated geofence collections you want to list.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTrackerConsumersResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTrackingV0ListTrackersRoute = createRoute({
  method: 'post',
  path: '/tracking/v0/list-trackers',
  description: 'Lists tracker resources in your Amazon Web Services account.',
  operationId: 'ListTrackers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>',
                }),
              NextToken: z
                .string()
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTrackersResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPlacesV0IndexesIndexNameSearchPositionRoute = createRoute({
  method: 'post',
  path: '/places/v0/indexes/{IndexName}/search/position',
  description:
    'Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.',
  operationId: 'SearchPlaceIndexForPosition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IndexName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'IndexName',
            in: 'path',
            required: true,
            description: 'The name of the place index resource you want to use for the search.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Language: z
                .string()
                .min(2)
                .max(35)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we\'ll use the Greek language. You search for a location around Athens, Greece, with the <code>language</code> parameter set to <code>en</code>. The <code>city</code> in the results will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the <code>city</code> in the results will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional parameter. The maximum number of results returned per request.</p> <p>Default value: <code>50</code> </p>',
                }),
              Position: z
                .array(DoubleSchema)
                .length(2)
                .openapi({
                  description:
                    '<p>Specifies the longitude and latitude of the position to query.</p> <p> This parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents a position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p>',
                }),
            })
            .openapi({ required: ['Position'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchPlaceIndexForPositionResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPlacesV0IndexesIndexNameSearchSuggestionsRoute = createRoute({
  method: 'post',
  path: '/places/v0/indexes/{IndexName}/search/suggestions',
  description:
    '<p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>',
  operationId: 'SearchPlaceIndexForSuggestions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IndexName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'IndexName',
            in: 'path',
            required: true,
            description: 'The name of the place index resource you want to use for the search.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              BiasPosition: z
                .array(DoubleSchema)
                .length(2)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional parameter that indicates a preference for place suggestions that are closer to a specified position.</p> <p> If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p> <note> <p> <code>BiasPosition</code> and <code>FilterBBox</code> are mutually exclusive. Specifying both options results in an error. </p> </note>',
                }),
              FilterBBox: z
                .array(DoubleSchema)
                .length(4)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional parameter that limits the search results by returning only suggestions within a specified bounding box.</p> <p> If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box.</p> <p>For example, <code>[-12.7935, -37.4835, -12.0684, -36.9542]</code> represents a bounding box where the southwest corner has longitude <code>-12.7935</code> and latitude <code>-37.4835</code>, and the northeast corner has longitude <code>-12.0684</code> and latitude <code>-36.9542</code>.</p> <note> <p> <code>FilterBBox</code> and <code>BiasPosition</code> are mutually exclusive. Specifying both options results in an error. </p> </note>',
                }),
              FilterCountries: z
                .array(CountryCodeSchema)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional parameter that limits the search results by returning only suggestions within the provided list of countries.</p> <ul> <li> <p>Use the <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit country code. For example, Australia uses three upper-case characters: <code>AUS</code>.</p> </li> </ul>',
                }),
              Language: z
                .string()
                .min(2)
                .max(35)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we\'ll use the Greek language. You search for <code>Athens, Gr</code> to get suggestions with the <code>language</code> parameter set to <code>en</code>. The results found will most likely be returned as <code>Athens, Greece</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the result found will more likely be returned as <code>Αθήνα, Ελλάδα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(15)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>5</code> </p>',
                }),
              Text: z
                .string()
                .min(1)
                .max(200)
                .openapi({
                  description:
                    'The free-form partial text to use to generate place suggestions. For example, <code>eiffel tow</code>.',
                }),
            })
            .openapi({ required: ['Text'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchPlaceIndexForSuggestionsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPlacesV0IndexesIndexNameSearchTextRoute = createRoute({
  method: 'post',
  path: '/places/v0/indexes/{IndexName}/search/text',
  description:
    '<p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>',
  operationId: 'SearchPlaceIndexForText',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      IndexName: z
        .string()
        .regex(/^[-._\w]+$/)
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'IndexName',
            in: 'path',
            required: true,
            description: 'The name of the place index resource you want to use for the search.',
            schema: { type: 'string', pattern: '^[-._\\w]+$', minLength: 1, maxLength: 100 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              BiasPosition: z
                .array(DoubleSchema)
                .length(2)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional parameter that indicates a preference for places that are closer to a specified position.</p> <p> If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p> <note> <p> <code>BiasPosition</code> and <code>FilterBBox</code> are mutually exclusive. Specifying both options results in an error. </p> </note>',
                }),
              FilterBBox: z
                .array(DoubleSchema)
                .length(4)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional parameter that limits the search results by returning only places that are within the provided bounding box.</p> <p> If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box.</p> <p>For example, <code>[-12.7935, -37.4835, -12.0684, -36.9542]</code> represents a bounding box where the southwest corner has longitude <code>-12.7935</code> and latitude <code>-37.4835</code>, and the northeast corner has longitude <code>-12.0684</code> and latitude <code>-36.9542</code>.</p> <note> <p> <code>FilterBBox</code> and <code>BiasPosition</code> are mutually exclusive. Specifying both options results in an error. </p> </note>',
                }),
              FilterCountries: z
                .array(CountryCodeSchema)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional parameter that limits the search results by returning only places that are in a specified list of countries.</p> <ul> <li> <p>Valid values include <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit country codes. For example, Australia uses three upper-case characters: <code>AUS</code>.</p> </li> </ul>',
                }),
              Language: z
                .string()
                .min(2)
                .max(35)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we\'ll use the Greek language. You search for <code>Athens, Greece</code>, with the <code>language</code> parameter set to <code>en</code>. The result found will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the result found will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>50</code> </p>',
                }),
              Text: z
                .string()
                .min(1)
                .max(200)
                .openapi({
                  description:
                    'The address, name, city, or region to be used in the search in free-form text format. For example, <code>123 Any Street</code>.',
                }),
            })
            .openapi({ required: ['Text'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchPlaceIndexForTextResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{ResourceArn}#tagKeys',
  description: 'Removes one or more tags from the specified Amazon Location resource.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      ResourceArn: z
        .string()
        .regex(/^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^\/].*)?$/)
        .min(0)
        .max(1600)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) of the resource from which you want to remove tags.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code> </p> </li> </ul>',
            schema: {
              type: 'string',
              pattern:
                '^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$',
              minLength: 0,
              maxLength: 1600,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The list of tag keys to remove from the specified resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/String' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
