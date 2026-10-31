import { createRoute, z } from '@hono/zod-openapi'

const EventRecordSchema = z
  .object({
    agent: z
      .string()
      .openapi({
        example:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1',
      }),
    browsertype: z.string().openapi({ example: 'Chrome' }),
    channel: z.string().openapi({ example: 'Whatsapp' }),
    click: z.string().openapi({ example: 'Minimize' }),
    clicks: z.int().openapi({ example: 1 }),
    code: z.string().openapi({ example: null }),
    company: z.string().openapi({ example: 'a89d82faf093c43c9c28659d' }),
    contact: z.string().openapi({ example: 'MailChimp' }),
    cost: z.number().openapi({ example: 1.1 }),
    costcurrency: z.string().openapi({ example: 'EUR' }),
    currency: z.string().openapi({ example: 'EUR' }),
    deal: z.string().openapi({ example: 'afe76fe60defa9000288e4ff' }),
    'deal name': z.string().openapi({ example: 'My deal' }),
    delay: z.int().openapi({ example: 473 }),
    denyreason: z.string().openapi({ example: 'Deal is expired' }),
    device: z.string().openapi({ example: 'a75984d7a1d1a4379' }),
    devicetype: z.string().openapi({ example: 'Mobile' }),
    email: z.string().openapi({ example: 'a89d82faf093c43c9c28659d' }),
    emailaddrsha256: z
      .string()
      .openapi({ example: 'cc63f389e0957aeacc9db39b8a0c2e7792aae3eb76af8909d30d9eab1f7309ac' }),
    flow: z.string().openapi({ example: 'afe76fe60defa9000288e4ff' }),
    flowstep: z.string().openapi({ example: 'FriendImpression' }),
    flowtype: z.string().openapi({ example: 'Start' }),
    impression: z.string().openapi({ example: 'Widget' }),
    ip: z.string().openapi({ example: '0.0.0.0' }),
    latitude: z.string().openapi({ example: 51.4353 }),
    longitude: z.string().openapi({ example: -0.3096 }),
    optin: z.string().openapi({ example: 'Redeal' }),
    os: z.string().openapi({ example: 'iOS' }),
    resolution: z.string().openapi({ example: '360x760' }),
    revenue: z.number().openapi({ example: 10.5 }),
    role: z.string().openapi({ example: 'Ambassador' }),
    session: z.string().openapi({ example: 'a909d7aff093c4423ccee7cc' }),
    site: z.string().openapi({ example: 'a909d7aff093c4423ccee7cc' }),
    'site name': z.string().openapi({ example: 'My site' }),
    timestamp: z.iso.datetime({ offset: true }).openapi({ example: '2016-08-29T09:12:33.001Z' }),
    total: z.number().openapi({ example: 12.6 }),
    user: z.string().openapi({ example: 'a909d7aff093c4423ccee7cc' }),
    userlanguage: z.string().openapi({ example: 'de-DE' }),
  })
  .openapi({
    required: [
      'timestamp',
      'role',
      'flow',
      'deal',
      'click',
      'channel',
      'impression',
      'user',
      'device',
      'flowstep',
      'latitude',
      'longitude',
      'devicetype',
      'resolution',
      'os',
      'userlanguage',
      'browsertype',
      'revenue',
      'total',
      'denyreason',
      'session',
      'optin',
      'site',
      'contact',
      'code',
      'currency',
      'company',
      'email',
      'emailaddrsha256',
      'agent',
      'flowtype',
      'ip',
      'delay',
      'site name',
      'deal name',
      'clicks',
      'cost',
      'costcurrency',
    ],
  })
  .openapi('EventRecord')

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['developers'],
  summary: 'get events for analytics',
  description:
    'By passing in the company, site or deal Id a set of user interaction event records is returned. For pagination of a large result set use queryexecutionid and nexttoken instead.\n',
  operationId: 'getEvents',
  request: {
    query: z.object({
      company: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'pass an optional company Id',
            in: 'query',
            name: 'company',
            required: false,
            schema: { type: 'string' },
          },
        }),
      site: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'pass an optional site Id',
            in: 'query',
            name: 'site',
            required: false,
            schema: { type: 'string' },
          },
        }),
      deal: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'pass an optional deal Id',
            in: 'query',
            name: 'deal',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['all', 'clicks', 'contacts'])
        .exactOptional()
        .openapi({
          param: {
            description: 'type of records to return',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['all', 'clicks', 'contacts'], type: 'string' },
          },
        }),
      nexttoken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'next token to start returning records from',
            in: 'query',
            name: 'nexttoken',
            required: false,
            schema: { type: 'string' },
          },
        }),
      queryexecutionid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id of execution to get more records based on next token',
            in: 'query',
            name: 'queryexecutionid',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'analytics results matching criteria',
      content: { 'application/json': { schema: z.array(EventRecordSchema) } },
    },
    400: { description: 'bad input parameter' },
  },
})
