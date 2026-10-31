import { createRoute, z } from '@hono/zod-openapi'

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const WidgetSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    order: z
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
    icon_class: z.string(),
    icon_url: z.string(),
    widget_url: z.string().nullable(),
    item_icons_round: z.boolean(),
    item_api_versions: z.array(
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
    reload_interval: z
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
    buttons: z
      .array(
        z
          .object({ type: z.string(), text: z.string(), link: z.string() })
          .openapi({ required: ['type', 'text', 'link'] }),
      )
      .exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'title',
      'order',
      'icon_class',
      'icon_url',
      'widget_url',
      'item_icons_round',
      'item_api_versions',
      'reload_interval',
    ],
  })
  .openapi('Widget')

const WidgetItemSchema = z
  .object({
    subtitle: z.string(),
    title: z.string(),
    link: z.string(),
    iconUrl: z.string(),
    overlayIconUrl: z.string(),
    sinceId: z.string(),
  })
  .openapi({ required: ['subtitle', 'title', 'link', 'iconUrl', 'overlayIconUrl', 'sinceId'] })
  .openapi('WidgetItem')

const WidgetItemsSchema = z
  .object({
    items: z.array(WidgetItemSchema),
    emptyContentMessage: z.string(),
    halfEmptyContentMessage: z.string(),
  })
  .openapi({ required: ['items', 'emptyContentMessage', 'halfEmptyContentMessage'] })
  .openapi('WidgetItems')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getOcsV2PhpAppsDashboardApiV1WidgetItemsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/dashboard/api/v1/widget-items',
  tags: ['dashboard_api'],
  summary: 'Get the items for the widgets',
  operationId: 'dashboard_api-get-widget-items',
  request: {
    query: z.object({
      sinceIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sinceIds',
            in: 'query',
            description:
              'Array indexed by widget Ids, contains date/id from which we want the new items',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(30n))
        .default(7n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit number of result items per widget',
            schema: { type: 'integer', format: 'int64', default: 7, minimum: 1, maximum: 30 },
            required: false,
          },
        }),
      'widgets[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'widgets[]',
            in: 'query',
            description: 'Limit results to specific widgets',
            schema: { type: 'array', default: [], items: { type: 'string' } },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Widget items returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.record(z.string(), z.array(WidgetItemSchema)),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsDashboardApiV2WidgetItemsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/dashboard/api/v2/widget-items',
  tags: ['dashboard_api'],
  summary: 'Get the items for the widgets',
  operationId: 'dashboard_api-get-widget-items-v2',
  request: {
    query: z.object({
      sinceIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sinceIds',
            in: 'query',
            description:
              'Array indexed by widget Ids, contains date/id from which we want the new items',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(30n))
        .default(7n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Limit number of result items per widget, not more than 30 are allowed',
            schema: { type: 'integer', format: 'int64', default: 7, minimum: 1, maximum: 30 },
            required: false,
          },
        }),
      'widgets[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            name: 'widgets[]',
            in: 'query',
            description: 'Limit results to specific widgets',
            schema: { type: 'array', default: [], items: { type: 'string' } },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Widget items returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), WidgetItemsSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsDashboardApiV1WidgetsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/dashboard/api/v1/widgets',
  tags: ['dashboard_api'],
  summary: 'Get the widgets',
  operationId: 'dashboard_api-get-widgets',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Widgets returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), WidgetSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsDashboardApiV3LayoutRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/dashboard/api/v3/layout',
  tags: ['dashboard_api'],
  summary: 'Get the layout',
  operationId: 'dashboard_api-get-layout',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Layout returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ layout: z.array(z.string()) }).openapi({ required: ['layout'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsDashboardApiV3LayoutRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/dashboard/api/v3/layout',
  tags: ['dashboard_api'],
  summary: 'Update the layout',
  operationId: 'dashboard_api-update-layout',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ layout: z.array(z.string()).openapi({ description: 'The new layout' }) })
            .openapi({ required: ['layout'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Statuses updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ layout: z.array(z.string()) }).openapi({ required: ['layout'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsDashboardApiV3StatusesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/dashboard/api/v3/statuses',
  tags: ['dashboard_api'],
  summary: 'Get the statuses',
  operationId: 'dashboard_api-get-statuses',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Statuses returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ statuses: z.array(z.string()) })
                    .openapi({ required: ['statuses'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsDashboardApiV3StatusesRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/dashboard/api/v3/statuses',
  tags: ['dashboard_api'],
  summary: 'Update the statuses',
  operationId: 'dashboard_api-update-statuses',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ statuses: z.array(z.string()).openapi({ description: 'The new statuses' }) })
            .openapi({ required: ['statuses'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Statuses updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ statuses: z.array(z.string()) })
                    .openapi({ required: ['statuses'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
