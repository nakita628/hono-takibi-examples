import { createRoute, z } from '@hono/zod-openapi'

const AttributeSchema = z
  .object({
    attribute: z.string().exactOptional(),
    description: z.string().exactOptional(),
    expression: z.string().exactOptional(),
    id: z.int().exactOptional(),
    type: z.string().exactOptional().openapi({ description: 'String|Number|Boolean' }),
  })
  .openapi({ required: [] })
  .openapi('Attribute')

const CalendarSchema = z
  .object({
    attributes: z.object({}).exactOptional(),
    data: z.string().exactOptional().openapi({ description: 'base64 encoded in iCalendar format' }),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Calendar')

const CommandSchema = z
  .object({
    attributes: z.object({}).exactOptional(),
    description: z.string().exactOptional(),
    deviceId: z.int().exactOptional(),
    id: z.int().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Command')

const CommandTypeSchema = z
  .object({ type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CommandType')

const DeviceSchema = z
  .object({
    attributes: z.object({}).exactOptional(),
    category: z.string().exactOptional(),
    contact: z.string().exactOptional(),
    disabled: z.boolean().exactOptional(),
    geofenceIds: z.array(z.int()).exactOptional(),
    groupId: z.int().exactOptional(),
    id: z.int().exactOptional(),
    lastUpdate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
    model: z.string().exactOptional(),
    name: z.string().exactOptional(),
    phone: z.string().exactOptional(),
    positionId: z.int().exactOptional(),
    status: z.string().exactOptional(),
    uniqueId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Device')

const DeviceAccumulatorsSchema = z
  .object({
    deviceId: z.int().exactOptional(),
    hours: z.number().exactOptional(),
    totalDistance: z.number().exactOptional().openapi({ description: 'in meters' }),
  })
  .openapi({ required: [] })
  .openapi('DeviceAccumulators')

const DriverSchema = z
  .object({
    attributes: z.object({}).exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    uniqueId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Driver')

const EventSchema = z
  .object({
    attributes: z.object({}).exactOptional(),
    deviceId: z.int().exactOptional(),
    eventTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
    geofenceId: z.int().exactOptional(),
    id: z.int().exactOptional(),
    maintenanceId: z.int().exactOptional(),
    positionId: z.int().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Event')

const GeofenceSchema = z
  .object({
    area: z.string().exactOptional(),
    attributes: z.object({}).exactOptional(),
    calendarId: z.int().exactOptional(),
    description: z.string().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Geofence')

const GroupSchema = z
  .object({
    attributes: z.object({}).exactOptional(),
    groupId: z.int().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Group')

const MaintenanceSchema = z
  .object({
    attributes: z.object({}).exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    period: z.number().exactOptional(),
    start: z.number().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Maintenance')

const NotificationSchema = z
  .object({
    always: z.boolean().exactOptional(),
    attributes: z.object({}).exactOptional(),
    calendarId: z.int().exactOptional(),
    id: z.int().exactOptional(),
    mail: z.boolean().exactOptional(),
    sms: z.boolean().exactOptional(),
    type: z.string().exactOptional(),
    web: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Notification')

const NotificationTypeSchema = z
  .object({ type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('NotificationType')

const PermissionSchema = z
  .object({
    attributeId: z
      .int()
      .exactOptional()
      .openapi({ description: 'Computed Attribute Id, can be second parameter only' }),
    calendarId: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Calendar Id, can be second parameter only and only in combination with userId',
      }),
    deviceId: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Device Id, can be first parameter or second only in combination with userId',
      }),
    driverId: z
      .int()
      .exactOptional()
      .openapi({ description: 'Driver Id, can be second parameter only' }),
    geofenceId: z
      .int()
      .exactOptional()
      .openapi({ description: 'Geofence Id, can be second parameter only' }),
    groupId: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Group Id, can be first parameter or second only in combination with userId',
      }),
    managedUserId: z
      .int()
      .exactOptional()
      .openapi({
        description: 'User Id, can be second parameter only and only in combination with userId',
      }),
    notificationId: z
      .int()
      .exactOptional()
      .openapi({ description: 'Notification Id, can be second parameter only' }),
    userId: z
      .int()
      .exactOptional()
      .openapi({ description: 'User Id, can be only first parameter' }),
  })
  .openapi({
    description:
      'This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }',
    required: [],
  })
  .openapi('Permission')

const PositionSchema = z
  .object({
    accuracy: z.number().exactOptional(),
    address: z.string().exactOptional(),
    altitude: z.number().exactOptional(),
    attributes: z.object({}).exactOptional(),
    course: z.number().exactOptional(),
    deviceId: z.int().exactOptional(),
    deviceTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
    fixTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
    id: z.int().exactOptional(),
    latitude: z.number().exactOptional(),
    longitude: z.number().exactOptional(),
    network: z.object({}).exactOptional(),
    outdated: z.boolean().exactOptional(),
    protocol: z.string().exactOptional(),
    serverTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
    speed: z.number().exactOptional().openapi({ description: 'in knots' }),
    valid: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Position')

const ReportStopsSchema = z
  .object({
    address: z.string().exactOptional(),
    deviceId: z.int().exactOptional(),
    deviceName: z.string().exactOptional(),
    duration: z.int().exactOptional(),
    endTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
    engineHours: z.int().exactOptional(),
    lat: z.number().exactOptional(),
    lon: z.number().exactOptional(),
    spentFuel: z.number().exactOptional().openapi({ description: 'in liters' }),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
  })
  .openapi({ required: [] })
  .openapi('ReportStops')

const ReportSummarySchema = z
  .object({
    averageSpeed: z.number().exactOptional().openapi({ description: 'in knots' }),
    deviceId: z.int().exactOptional(),
    deviceName: z.string().exactOptional(),
    distance: z.number().exactOptional().openapi({ description: 'in meters' }),
    engineHours: z.int().exactOptional(),
    maxSpeed: z.number().exactOptional().openapi({ description: 'in knots' }),
    spentFuel: z.number().exactOptional().openapi({ description: 'in liters' }),
  })
  .openapi({ required: [] })
  .openapi('ReportSummary')

const ReportTripsSchema = z
  .object({
    averageSpeed: z.number().exactOptional().openapi({ description: 'in knots' }),
    deviceId: z.int().exactOptional(),
    deviceName: z.string().exactOptional(),
    distance: z.number().exactOptional().openapi({ description: 'in meters' }),
    driverName: z.string().exactOptional(),
    driverUniqueId: z.int().exactOptional(),
    duration: z.int().exactOptional(),
    endAddress: z.string().exactOptional(),
    endLat: z.number().exactOptional(),
    endLon: z.number().exactOptional(),
    endTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
    maxSpeed: z.number().exactOptional().openapi({ description: 'in knots' }),
    spentFuel: z.number().exactOptional().openapi({ description: 'in liters' }),
    startAddress: z.string().exactOptional(),
    startLat: z.number().exactOptional(),
    startLon: z.number().exactOptional(),
    startTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
  })
  .openapi({ required: [] })
  .openapi('ReportTrips')

const ServerSchema = z
  .object({
    attributes: z.object({}).exactOptional(),
    bingKey: z.string().exactOptional(),
    coordinateFormat: z.string().exactOptional(),
    deviceReadonly: z.boolean().exactOptional(),
    forceSettings: z.boolean().exactOptional(),
    id: z.int().exactOptional(),
    latitude: z.number().exactOptional(),
    limitCommands: z.boolean().exactOptional(),
    longitude: z.number().exactOptional(),
    map: z.string().exactOptional(),
    mapUrl: z.string().exactOptional(),
    poiLayer: z.string().exactOptional(),
    readonly: z.boolean().exactOptional(),
    registration: z.boolean().exactOptional(),
    twelveHourFormat: z.boolean().exactOptional(),
    version: z.string().exactOptional(),
    zoom: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Server')

const StatisticsSchema = z
  .object({
    activeDevices: z.int().exactOptional(),
    activeUsers: z.int().exactOptional(),
    captureTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
    messagesReceived: z.int().exactOptional(),
    messagesStored: z.int().exactOptional(),
    requests: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Statistics')

const UserSchema = z
  .object({
    administrator: z.boolean().exactOptional(),
    attributes: z.object({}).exactOptional(),
    coordinateFormat: z.string().exactOptional(),
    deviceLimit: z.int().exactOptional(),
    deviceReadonly: z.boolean().exactOptional(),
    disabled: z.boolean().exactOptional(),
    email: z.string().exactOptional(),
    expirationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`' }),
    id: z.int().exactOptional(),
    latitude: z.number().exactOptional(),
    limitCommands: z.boolean().exactOptional(),
    longitude: z.number().exactOptional(),
    map: z.string().exactOptional(),
    name: z.string().exactOptional(),
    password: z.string().exactOptional(),
    phone: z.string().exactOptional(),
    poiLayer: z.string().exactOptional(),
    readonly: z.boolean().exactOptional(),
    twelveHourFormat: z.boolean().exactOptional(),
    userLimit: z.int().exactOptional(),
    zoom: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const AllParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Can only be used by admins or managers to fetch all entities',
      in: 'query',
      name: 'all',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const DeviceIdParamsSchema = z
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
      description: 'Standard users can use this only with _deviceId_s, they have access to',
      in: 'query',
      name: 'deviceId',
      schema: { type: 'integer' },
      required: false,
    },
  })

const DeviceIdArrayParamsSchema = z
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
        z.int(),
      ),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      explode: true,
      in: 'query',
      name: 'deviceId',
      schema: { items: { type: 'integer' }, type: 'array' },
      style: 'form',
      required: false,
    },
  })

const EntityIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } } })

const FromTimeParamsSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    param: {
      description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
      in: 'query',
      name: 'from',
      required: true,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const GroupIdParamsSchema = z
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
      description: 'Standard users can use this only with _groupId_s, they have access to',
      in: 'query',
      name: 'groupId',
      schema: { type: 'integer' },
      required: false,
    },
  })

const GroupIdArrayParamsSchema = z
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
        z.int(),
      ),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      explode: true,
      in: 'query',
      name: 'groupId',
      schema: { items: { type: 'integer' }, type: 'array' },
      style: 'form',
      required: false,
    },
  })

const RefreshParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'refresh', schema: { type: 'boolean' }, required: false },
  })

const ToTimeParamsSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    param: {
      description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
      in: 'query',
      name: 'to',
      required: true,
      schema: { format: 'date-time', type: 'string' },
    },
  })

const UserIdParamsSchema = z
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
      description: 'Standard users can use this only with their own _userId_',
      in: 'query',
      name: 'userId',
      schema: { type: 'integer' },
      required: false,
    },
  })

const AttributeRequestBody = {
  content: { 'application/json': { schema: AttributeSchema } },
  required: true,
}

const CalendarRequestBody = {
  content: { 'application/json': { schema: CalendarSchema } },
  required: true,
}

const CommandRequestBody = {
  content: { 'application/json': { schema: CommandSchema } },
  required: true,
}

const DeviceRequestBody = {
  content: { 'application/json': { schema: DeviceSchema } },
  required: true,
}

const DriverRequestBody = {
  content: { 'application/json': { schema: DriverSchema } },
  required: true,
}

const GeofenceRequestBody = {
  content: { 'application/json': { schema: GeofenceSchema } },
  required: true,
}

const GroupRequestBody = {
  content: { 'application/json': { schema: GroupSchema } },
  required: true,
}

const MaintenanceRequestBody = {
  content: { 'application/json': { schema: MaintenanceSchema } },
  required: true,
}

const NotificationRequestBody = {
  content: { 'application/json': { schema: NotificationSchema } },
  required: true,
}

const PermissionRequestBody = {
  content: { 'application/json': { schema: PermissionSchema } },
  required: true,
}

const UserRequestBody = { content: { 'application/json': { schema: UserSchema } }, required: true }

const BasicAuthSecurityScheme = {
  description: 'Basic HTTP authorization with _email_ and _password_',
  scheme: 'basic',
  type: 'http',
}

export const getAttributesComputedRoute = createRoute({
  method: 'get',
  path: '/attributes/computed',
  tags: ['Attributes'],
  summary: 'Fetch a list of Attributes',
  description: 'Without params, it returns a list of Attributes the user has access to',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can only be used by admins or managers to fetch all entities',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      userId: z
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
            description: 'Standard users can use this only with their own _userId_',
            in: 'query',
            name: 'userId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      deviceId: z
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
            description: 'Standard users can use this only with _deviceId_s, they have access to',
            in: 'query',
            name: 'deviceId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      groupId: z
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
            description: 'Standard users can use this only with _groupId_s, they have access to',
            in: 'query',
            name: 'groupId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'refresh', schema: { type: 'boolean' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AttributeSchema) } },
    },
  },
})

export const postAttributesComputedRoute = createRoute({
  method: 'post',
  path: '/attributes/computed',
  tags: ['Attributes'],
  summary: 'Create an Attribute',
  request: {
    body: { content: { 'application/json': { schema: AttributeSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AttributeSchema } } },
  },
})

export const putAttributesComputedIdRoute = createRoute({
  method: 'put',
  path: '/attributes/computed/{id}',
  tags: ['Attributes'],
  summary: 'Update an Attribute',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: AttributeSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AttributeSchema } } },
  },
})

export const deleteAttributesComputedIdRoute = createRoute({
  method: 'delete',
  path: '/attributes/computed/{id}',
  tags: ['Attributes'],
  summary: 'Delete an Attribute',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getCalendarsRoute = createRoute({
  method: 'get',
  path: '/calendars',
  tags: ['Calendars'],
  summary: 'Fetch a list of Calendars',
  description: 'Without params, it returns a list of Calendars the user has access to',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can only be used by admins or managers to fetch all entities',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      userId: z
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
            description: 'Standard users can use this only with their own _userId_',
            in: 'query',
            name: 'userId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CalendarSchema) } },
    },
  },
})

export const postCalendarsRoute = createRoute({
  method: 'post',
  path: '/calendars',
  tags: ['Calendars'],
  summary: 'Create a Calendar',
  request: {
    body: { content: { 'application/json': { schema: CalendarSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CalendarSchema } } },
  },
})

export const putCalendarsIdRoute = createRoute({
  method: 'put',
  path: '/calendars/{id}',
  tags: ['Calendars'],
  summary: 'Update a Calendar',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: CalendarSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CalendarSchema } } },
  },
})

export const deleteCalendarsIdRoute = createRoute({
  method: 'delete',
  path: '/calendars/{id}',
  tags: ['Calendars'],
  summary: 'Delete a Calendar',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getCommandsRoute = createRoute({
  method: 'get',
  path: '/commands',
  tags: ['Commands'],
  summary: 'Fetch a list of Saved Commands',
  description: 'Without params, it returns a list of Saved Commands the user has access to',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can only be used by admins or managers to fetch all entities',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      userId: z
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
            description: 'Standard users can use this only with their own _userId_',
            in: 'query',
            name: 'userId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      deviceId: z
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
            description: 'Standard users can use this only with _deviceId_s, they have access to',
            in: 'query',
            name: 'deviceId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      groupId: z
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
            description: 'Standard users can use this only with _groupId_s, they have access to',
            in: 'query',
            name: 'groupId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'refresh', schema: { type: 'boolean' }, required: false },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(CommandSchema) } } },
  },
})

export const postCommandsRoute = createRoute({
  method: 'post',
  path: '/commands',
  tags: ['Commands'],
  summary: 'Create a Saved Command',
  request: { body: { content: { 'application/json': { schema: CommandSchema } }, required: true } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CommandSchema } } },
  },
})

export const getCommandsSendRoute = createRoute({
  method: 'get',
  path: '/commands/send',
  tags: ['Commands'],
  summary: 'Fetch a list of Saved Commands supported by Device at the moment',
  description:
    'Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support',
  request: {
    query: z.object({
      deviceId: z
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
            description: 'Standard users can use this only with _deviceId_s, they have access to',
            in: 'query',
            name: 'deviceId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(CommandSchema) } } },
    400: {
      description: "Could happen when the user doesn't have permission for the device",
      content: {},
    },
  },
})

export const postCommandsSendRoute = createRoute({
  method: 'post',
  path: '/commands/send',
  tags: ['Commands'],
  summary: 'Dispatch commands to device',
  description: 'Dispatch a new command or Saved Command if _body.id_ set',
  request: { body: { content: { 'application/json': { schema: CommandSchema } }, required: true } },
  responses: {
    200: {
      description: 'Command sent',
      content: { 'application/json': { schema: CommandSchema } },
    },
    202: {
      description: 'Command queued',
      content: { 'application/json': { schema: CommandSchema } },
    },
    400: {
      description:
        "Could happen when the user doesn't have permission or an incorrect command _type_ for the device",
      content: {},
    },
  },
})

export const getCommandsTypesRoute = createRoute({
  method: 'get',
  path: '/commands/types',
  tags: ['Commands'],
  summary:
    'Fetch a list of available Commands for the Device or all possible Commands if Device ommited',
  request: {
    query: z.object({
      deviceId: z
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
            description:
              'Internal device identifier. Only works if device has already reported some locations',
            in: 'query',
            name: 'deviceId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      protocol: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Protocol name. Can be used instead of device id',
            in: 'query',
            name: 'protocol',
            schema: { type: 'string' },
            required: false,
          },
        }),
      textChannel: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When `true` return SMS commands. If not specified or `false` return data commands',
            in: 'query',
            name: 'textChannel',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CommandTypeSchema) } },
    },
    400: {
      description:
        'Could happen when trying to fetch from a device the user does not have permission',
      content: {},
    },
  },
})

export const putCommandsIdRoute = createRoute({
  method: 'put',
  path: '/commands/{id}',
  tags: ['Commands'],
  summary: 'Update a Saved Command',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: CommandSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CommandSchema } } },
  },
})

export const deleteCommandsIdRoute = createRoute({
  method: 'delete',
  path: '/commands/{id}',
  tags: ['Commands'],
  summary: 'Delete a Saved Command',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getDevicesRoute = createRoute({
  method: 'get',
  path: '/devices',
  tags: ['Devices'],
  summary: 'Fetch a list of Devices',
  description: "Without any params, returns a list of the user's devices",
  request: {
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can only be used by admins or managers to fetch all entities',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      userId: z
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
            description: 'Standard users can use this only with their own _userId_',
            in: 'query',
            name: 'userId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      id: z
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
            description:
              'To fetch one or more devices. Multiple params can be passed like `id=31&id=42`',
            in: 'query',
            name: 'id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      uniqueId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'To fetch one or more devices. Multiple params can be passed like `uniqueId=333331&uniqieId=44442`',
            in: 'query',
            name: 'uniqueId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(DeviceSchema) } } },
    400: { description: 'No permission', content: {} },
  },
})

export const postDevicesRoute = createRoute({
  method: 'post',
  path: '/devices',
  tags: ['Devices'],
  summary: 'Create a Device',
  request: { body: { content: { 'application/json': { schema: DeviceSchema } }, required: true } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeviceSchema } } },
  },
})

export const putDevicesIdRoute = createRoute({
  method: 'put',
  path: '/devices/{id}',
  tags: ['Devices'],
  summary: 'Update a Device',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DeviceSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DeviceSchema } } },
  },
})

export const deleteDevicesIdRoute = createRoute({
  method: 'delete',
  path: '/devices/{id}',
  tags: ['Devices'],
  summary: 'Delete a Device',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const putDevicesIdAccumulatorsRoute = createRoute({
  method: 'put',
  path: '/devices/{id}/accumulators',
  tags: ['Devices'],
  summary: 'Update total distance and hours of the Device',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DeviceAccumulatorsSchema } }, required: true },
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getDriversRoute = createRoute({
  method: 'get',
  path: '/drivers',
  tags: ['Drivers'],
  summary: 'Fetch a list of Drivers',
  description: 'Without params, it returns a list of Drivers the user has access to',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can only be used by admins or managers to fetch all entities',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      userId: z
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
            description: 'Standard users can use this only with their own _userId_',
            in: 'query',
            name: 'userId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      deviceId: z
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
            description: 'Standard users can use this only with _deviceId_s, they have access to',
            in: 'query',
            name: 'deviceId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      groupId: z
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
            description: 'Standard users can use this only with _groupId_s, they have access to',
            in: 'query',
            name: 'groupId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'refresh', schema: { type: 'boolean' }, required: false },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(DriverSchema) } } },
  },
})

export const postDriversRoute = createRoute({
  method: 'post',
  path: '/drivers',
  tags: ['Drivers'],
  summary: 'Create a Driver',
  request: { body: { content: { 'application/json': { schema: DriverSchema } }, required: true } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DriverSchema } } },
  },
})

export const putDriversIdRoute = createRoute({
  method: 'put',
  path: '/drivers/{id}',
  tags: ['Drivers'],
  summary: 'Update a Driver',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DriverSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DriverSchema } } },
  },
})

export const deleteDriversIdRoute = createRoute({
  method: 'delete',
  path: '/drivers/{id}',
  tags: ['Drivers'],
  summary: 'Delete a Driver',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getEventsIdRoute = createRoute({
  method: 'get',
  path: '/events/{id}',
  tags: ['Events'],
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EventSchema } } },
  },
})

export const getGeofencesRoute = createRoute({
  method: 'get',
  path: '/geofences',
  tags: ['Geofences'],
  summary: 'Fetch a list of Geofences',
  description: 'Without params, it returns a list of Geofences the user has access to',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can only be used by admins or managers to fetch all entities',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      userId: z
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
            description: 'Standard users can use this only with their own _userId_',
            in: 'query',
            name: 'userId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      deviceId: z
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
            description: 'Standard users can use this only with _deviceId_s, they have access to',
            in: 'query',
            name: 'deviceId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      groupId: z
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
            description: 'Standard users can use this only with _groupId_s, they have access to',
            in: 'query',
            name: 'groupId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'refresh', schema: { type: 'boolean' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GeofenceSchema) } },
    },
  },
})

export const postGeofencesRoute = createRoute({
  method: 'post',
  path: '/geofences',
  tags: ['Geofences'],
  summary: 'Create a Geofence',
  request: {
    body: { content: { 'application/json': { schema: GeofenceSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: GeofenceSchema } } },
  },
})

export const putGeofencesIdRoute = createRoute({
  method: 'put',
  path: '/geofences/{id}',
  tags: ['Geofences'],
  summary: 'Update a Geofence',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: GeofenceSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: GeofenceSchema } } },
  },
})

export const deleteGeofencesIdRoute = createRoute({
  method: 'delete',
  path: '/geofences/{id}',
  tags: ['Geofences'],
  summary: 'Delete a Geofence',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getGroupsRoute = createRoute({
  method: 'get',
  path: '/groups',
  tags: ['Groups'],
  summary: 'Fetch a list of Groups',
  description: 'Without any params, returns a list of the Groups the user belongs to',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can only be used by admins or managers to fetch all entities',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      userId: z
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
            description: 'Standard users can use this only with their own _userId_',
            in: 'query',
            name: 'userId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(GroupSchema) } } },
  },
})

export const postGroupsRoute = createRoute({
  method: 'post',
  path: '/groups',
  tags: ['Groups'],
  summary: 'Create a Group',
  request: { body: { content: { 'application/json': { schema: GroupSchema } }, required: true } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: GroupSchema } } },
    400: { description: 'No permission', content: {} },
  },
})

export const putGroupsIdRoute = createRoute({
  method: 'put',
  path: '/groups/{id}',
  tags: ['Groups'],
  summary: 'Update a Group',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: GroupSchema } } },
  },
})

export const deleteGroupsIdRoute = createRoute({
  method: 'delete',
  path: '/groups/{id}',
  tags: ['Groups'],
  summary: 'Delete a Group',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getMaintenanceRoute = createRoute({
  method: 'get',
  path: '/maintenance',
  tags: ['Maintenance'],
  summary: 'Fetch a list of Maintenance',
  description: 'Without params, it returns a list of Maintenance the user has access to',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can only be used by admins or managers to fetch all entities',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      userId: z
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
            description: 'Standard users can use this only with their own _userId_',
            in: 'query',
            name: 'userId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      deviceId: z
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
            description: 'Standard users can use this only with _deviceId_s, they have access to',
            in: 'query',
            name: 'deviceId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      groupId: z
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
            description: 'Standard users can use this only with _groupId_s, they have access to',
            in: 'query',
            name: 'groupId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'refresh', schema: { type: 'boolean' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MaintenanceSchema) } },
    },
  },
})

export const postMaintenanceRoute = createRoute({
  method: 'post',
  path: '/maintenance',
  tags: ['Maintenance'],
  summary: 'Create a Maintenance',
  request: {
    body: { content: { 'application/json': { schema: MaintenanceSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MaintenanceSchema } } },
  },
})

export const putMaintenanceIdRoute = createRoute({
  method: 'put',
  path: '/maintenance/{id}',
  tags: ['Maintenance'],
  summary: 'Update a Maintenance',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: MaintenanceSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MaintenanceSchema } } },
  },
})

export const deleteMaintenanceIdRoute = createRoute({
  method: 'delete',
  path: '/maintenance/{id}',
  tags: ['Maintenance'],
  summary: 'Delete a Maintenance',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getNotificationsRoute = createRoute({
  method: 'get',
  path: '/notifications',
  tags: ['Notifications'],
  summary: 'Fetch a list of Notifications',
  description: 'Without params, it returns a list of Notifications the user has access to',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can only be used by admins or managers to fetch all entities',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      userId: z
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
            description: 'Standard users can use this only with their own _userId_',
            in: 'query',
            name: 'userId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      deviceId: z
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
            description: 'Standard users can use this only with _deviceId_s, they have access to',
            in: 'query',
            name: 'deviceId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      groupId: z
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
            description: 'Standard users can use this only with _groupId_s, they have access to',
            in: 'query',
            name: 'groupId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'refresh', schema: { type: 'boolean' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(NotificationSchema) } },
    },
  },
})

export const postNotificationsRoute = createRoute({
  method: 'post',
  path: '/notifications',
  tags: ['Notifications'],
  summary: 'Create a Notification',
  request: {
    body: { content: { 'application/json': { schema: NotificationSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: NotificationSchema } } },
  },
})

export const postNotificationsTestRoute = createRoute({
  method: 'post',
  path: '/notifications/test',
  tags: ['Notifications'],
  summary: 'Send test notification to current user via Email and SMS',
  responses: {
    204: { description: 'Successful sending', content: {} },
    400: { description: 'Could happen if sending has failed', content: {} },
  },
})

export const getNotificationsTypesRoute = createRoute({
  method: 'get',
  path: '/notifications/types',
  tags: ['Notifications'],
  summary: 'Fetch a list of available Notification types',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(NotificationTypeSchema) } },
    },
  },
})

export const putNotificationsIdRoute = createRoute({
  method: 'put',
  path: '/notifications/{id}',
  tags: ['Notifications'],
  summary: 'Update a Notification',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: NotificationSchema } } },
  },
})

export const deleteNotificationsIdRoute = createRoute({
  method: 'delete',
  path: '/notifications/{id}',
  tags: ['Notifications'],
  summary: 'Delete a Notification',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const postPermissionsRoute = createRoute({
  method: 'post',
  path: '/permissions',
  tags: ['Permissions'],
  summary: 'Link an Object to another Object',
  request: {
    body: { content: { 'application/json': { schema: PermissionSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PermissionSchema } } },
    400: { description: 'No permission', content: {} },
  },
})

export const deletePermissionsRoute = createRoute({
  method: 'delete',
  path: '/permissions',
  tags: ['Permissions'],
  summary: 'Unlink an Object from another Object',
  request: {
    body: { content: { 'application/json': { schema: PermissionSchema } }, required: true },
  },
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getPositionsRoute = createRoute({
  method: 'get',
  path: '/positions',
  tags: ['Positions'],
  summary: 'Fetches a list of Positions',
  description:
    "We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.",
  request: {
    query: z.object({
      deviceId: z
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
            description:
              '_deviceId_ is optional, but requires the _from_ and _to_ parameters when used',
            in: 'query',
            name: 'deviceId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'from',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'to',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      id: z
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
            description:
              'To fetch one or more positions. Multiple params can be passed like `id=31&id=42`',
            in: 'query',
            name: 'id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/gpx+xml': { schema: z.array(PositionSchema) },
        'application/json': { schema: z.array(PositionSchema) },
        'text/csv': { schema: z.array(PositionSchema) },
      },
    },
  },
})

export const getReportsEventsRoute = createRoute({
  method: 'get',
  path: '/reports/events',
  tags: ['Reports'],
  summary: 'Fetch a list of Events within the time period for the Devices or Groups',
  description: 'At least one _deviceId_ or one _groupId_ must be passed',
  request: {
    query: z.object({
      deviceId: z
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
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'deviceId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      groupId: z
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
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'groupId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      type: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '% can be used to return events of all types',
            explode: false,
            in: 'query',
            name: 'type',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'from',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'to',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(EventSchema) },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          schema: z.array(EventSchema),
        },
      },
    },
  },
})

export const getReportsRouteRoute = createRoute({
  method: 'get',
  path: '/reports/route',
  tags: ['Reports'],
  summary: 'Fetch a list of Positions within the time period for the Devices or Groups',
  description: 'At least one _deviceId_ or one _groupId_ must be passed',
  request: {
    query: z.object({
      deviceId: z
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
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'deviceId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      groupId: z
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
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'groupId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'from',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'to',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(PositionSchema) },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          schema: z.array(PositionSchema),
        },
      },
    },
  },
})

export const getReportsStopsRoute = createRoute({
  method: 'get',
  path: '/reports/stops',
  tags: ['Reports'],
  summary: 'Fetch a list of ReportStops within the time period for the Devices or Groups',
  description: 'At least one _deviceId_ or one _groupId_ must be passed',
  request: {
    query: z.object({
      deviceId: z
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
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'deviceId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      groupId: z
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
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'groupId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'from',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'to',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ReportStopsSchema) },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          schema: z.array(ReportStopsSchema),
        },
      },
    },
  },
})

export const getReportsSummaryRoute = createRoute({
  method: 'get',
  path: '/reports/summary',
  tags: ['Reports'],
  summary: 'Fetch a list of ReportSummary within the time period for the Devices or Groups',
  description: 'At least one _deviceId_ or one _groupId_ must be passed',
  request: {
    query: z.object({
      deviceId: z
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
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'deviceId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      groupId: z
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
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'groupId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'from',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'to',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ReportSummarySchema) },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          schema: z.array(ReportSummarySchema),
        },
      },
    },
  },
})

export const getReportsTripsRoute = createRoute({
  method: 'get',
  path: '/reports/trips',
  tags: ['Reports'],
  summary: 'Fetch a list of ReportTrips within the time period for the Devices or Groups',
  description: 'At least one _deviceId_ or one _groupId_ must be passed',
  request: {
    query: z.object({
      deviceId: z
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
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'deviceId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      groupId: z
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
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'groupId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'from',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'to',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(ReportTripsSchema) },
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
          schema: z.array(ReportTripsSchema),
        },
      },
    },
  },
})

export const getServerRoute = createRoute({
  method: 'get',
  path: '/server',
  tags: ['Server'],
  summary: 'Fetch Server information',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ServerSchema } } },
  },
})

export const putServerRoute = createRoute({
  method: 'put',
  path: '/server',
  tags: ['Server'],
  summary: 'Update Server information',
  request: { body: { content: { 'application/json': { schema: ServerSchema } }, required: true } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ServerSchema } } },
  },
})

export const getSessionRoute = createRoute({
  method: 'get',
  path: '/session',
  tags: ['Session'],
  summary: 'Fetch Session information',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'token', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
    404: { description: 'Not Found', content: {} },
  },
})

export const postSessionRoute = createRoute({
  method: 'post',
  path: '/session',
  tags: ['Session'],
  summary: 'Create a new Session',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ email: z.string(), password: z.string() })
            .openapi({ required: ['email', 'password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
    401: { description: 'Unauthorized', content: {} },
  },
})

export const deleteSessionRoute = createRoute({
  method: 'delete',
  path: '/session',
  tags: ['Session'],
  summary: 'Close the Session',
  responses: { 204: { description: 'No Content', content: {} } },
})

export const getStatisticsRoute = createRoute({
  method: 'get',
  path: '/statistics',
  tags: ['Statistics'],
  summary: 'Fetch server Statistics',
  request: {
    query: z.object({
      from: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'from',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'in IS0 8601 format. eg. `1963-11-22T18:30:00Z`',
            in: 'query',
            name: 'to',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(StatisticsSchema) } },
    },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'Fetch a list of Users',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Can only be used by admin or manager users',
            in: 'query',
            name: 'userId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(UserSchema) } } },
    400: { description: 'No Permission', content: {} },
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Users'],
  summary: 'Create a User',
  request: { body: { content: { 'application/json': { schema: UserSchema } }, required: true } },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
  },
})

export const putUsersIdRoute = createRoute({
  method: 'put',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Update a User',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
  },
})

export const deleteUsersIdRoute = createRoute({
  method: 'delete',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Delete a User',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', content: {} } },
})
