import { createRoute, z } from '@hono/zod-openapi'

export const getAreasRoute = createRoute({
  method: 'get',
  path: '/areas',
  tags: ['resources'],
  summary: 'Lists the geographical areas (e.g. districts) that can be used to filter events.',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'The format of the response',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of packages' } },
})

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['resources'],
  summary: 'Lists road events',
  description:
    'The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided. ',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'The format of the response',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
      status: z
        .enum(['ALL', 'ACTIVE', 'ARCHIVED'])
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the response to events having a given status.',
            in: 'query',
            name: 'status',
            schema: { default: 'ALL', enum: ['ALL', 'ACTIVE', 'ARCHIVED'], type: 'string' },
            required: false,
          },
        }),
      severity: z
        .string()
        .default('MAJOR')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the response to events tagged with one of the listed severity values. The possible values are: [MINOR, MODERATE, MAJOR].  Multiple values may be listed, and should be separated by a comma. The default is to return events of any severity.',
            in: 'query',
            name: 'severity',
            schema: { default: 'MAJOR', type: 'string' },
            required: false,
          },
        }),
      jurisdiction: z
        .string()
        .default('drivebc.ca')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the response to events reported by a given jurisdiction. The value given must be specified as the ID of a jurisdiction returned by the /jurisdiction resource. The default is to return events from all jurisdictions.',
            in: 'query',
            name: 'jurisdiction',
            required: false,
            schema: { default: 'drivebc.ca', type: 'string' },
          },
        }),
      event_type: z
        .enum(['CONSTRUCTION', 'SPECIAL_EVENT', 'INCIDENT', 'WEATHER_CONDITION', 'ROAD_CONDITION'])
        .default('INCIDENT')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limits the response to events tagged with one of the listed event types.  The possible values include: [CONSTRUCTION, INCIDENT, SPECIAL_EVENT, WEATHER_CONDITION].  Multiple values may be listed, and should be separated by a comma. The default is to return events of all types.',
            in: 'query',
            name: 'event_type',
            required: false,
            schema: {
              default: 'INCIDENT',
              enum: [
                'CONSTRUCTION',
                'SPECIAL_EVENT',
                'INCIDENT',
                'WEATHER_CONDITION',
                'ROAD_CONDITION',
              ],
              type: 'string',
            },
          },
        }),
      created: z
        .string()
        .default('>2015-09-01T12:00:00Z')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limits the response to events based on the date and time that the event was created (first recorded). The date/time must be specified in ISO 8601 format, and may be prefixed by one of the following operators [<, <=, >, >=] to indicate 'before', 'before or equal to', 'after' or 'after or equal to' respectively.  For example, >2013-12-01T12:00:00Z requests all events create after Dec. 1, 2015 at 12pm (noon) Coordinated Universal Time.  The default is to return events with any creation time.",
            in: 'query',
            name: 'created',
            required: false,
            schema: { default: '>2015-09-01T12:00:00Z', type: 'string' },
          },
        }),
      updated: z
        .string()
        .default('>2015-09-01T12:00:00Z')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limits the response to events based on the date and time that the event was last updated. The date/time must be specified in ISO 8601 format, and may be prefixed by one of the following operators [<, <=, >, >=] to indicate 'before', 'before or equal to', 'after' or 'after or equal to' respectively.  For example, >2013-12-01T12:00:00Z requests all events updated after Dec. 1, 2015 at 12pm (noon) Coordinated Universal Time. The default is to return events with any update time",
            in: 'query',
            name: 'updated',
            required: false,
            schema: { default: '>2015-09-01T12:00:00Z', type: 'string' },
          },
        }),
      road_name: z
        .string()
        .default('Highway 99')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limits the response to events on a given road as specified by the road name.  An example of a valid road name is 'Highway 1'. The default is to return events on all roads.",
            in: 'query',
            name: 'road_name',
            required: false,
            schema: { default: 'Highway 99', type: 'string' },
          },
        }),
      area_id: z
        .string()
        .default('drivebc.ca/1')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limits the response to events within one of the specified areas.  An area must be specified as the ID of an item returned by the /areas resource. For example: an area_id of 'drivebc.ca/1' limits events to those within the Lower Mainland District.  The default is to return events in all areas.",
            in: 'query',
            name: 'area_id',
            required: false,
            schema: { default: 'drivebc.ca/1', type: 'string' },
          },
        }),
      bbox: z
        .string()
        .default('-130,48,-116,60')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limits the response to events that fall within the specified geographical bounding box.  The bbox format must be '[min longitude],[min latitude],[max longitude],[max latitude]' with WGS84 coordinates.  For example: -123.45,48.99,-122.45,49.49.  The default is to return events in all geographical locations.",
            in: 'query',
            name: 'bbox',
            required: false,
            schema: { default: '-130,48,-116,60', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of packages' } },
})

export const getJurisdictionRoute = createRoute({
  method: 'get',
  path: '/jurisdiction',
  tags: ['resources'],
  summary: 'Lists the jurisdictions publishing data through this Open511 API implementation',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'The format of the response',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of packages' } },
})

export const getJurisdictiongeographyRoute = createRoute({
  method: 'get',
  path: '/jurisdictiongeography',
  tags: ['resources'],
  summary: 'Provides the geographical boundaries for all the jurisdictions.',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .default('json')
        .exactOptional()
        .openapi({
          param: {
            description: 'The format of the response',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'json', enum: ['json', 'xml'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of packages' } },
})
