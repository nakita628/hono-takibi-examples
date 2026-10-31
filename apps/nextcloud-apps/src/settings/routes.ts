import { createRoute, z } from '@hono/zod-openapi'

const DeclarativeFormFieldSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string().exactOptional(),
    type: z.enum([
      'text',
      'password',
      'email',
      'tel',
      'url',
      'number',
      'checkbox',
      'multi-checkbox',
      'radio',
      'select',
      'multi-select',
    ]),
    placeholder: z.string().exactOptional(),
    label: z.string().exactOptional(),
    default: z.object({}),
    options: z
      .array(
        z.xor([
          z.string(),
          z
            .object({ name: z.string(), value: z.object({}) })
            .openapi({ required: ['name', 'value'] }),
        ]),
      )
      .exactOptional(),
    value: z.union([
      z.string(),
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
      z.float64(),
      z.boolean(),
      z.array(z.string()),
    ]),
    sensitive: z.boolean().exactOptional(),
  })
  .openapi({ required: ['id', 'title', 'type', 'default', 'value'] })
  .openapi('DeclarativeFormField')

const DeclarativeFormSchema = z
  .object({
    id: z.string(),
    priority: z
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
    section_type: z.enum(['admin', 'personal']),
    section_id: z.string(),
    storage_type: z.enum(['internal', 'external']),
    title: z.string(),
    description: z.string().exactOptional(),
    doc_url: z.string().exactOptional(),
    app: z.string(),
    fields: z.array(DeclarativeFormFieldSchema),
  })
  .openapi({
    required: [
      'id',
      'priority',
      'section_type',
      'section_id',
      'storage_type',
      'title',
      'app',
      'fields',
    ],
  })
  .openapi('DeclarativeForm')

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

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getIndexPhpSettingsAdminLogDownloadRoute = createRoute({
  method: 'get',
  path: '/index.php/settings/admin/log/download',
  tags: ['log_settings'],
  summary: 'download logfile',
  description: 'This endpoint requires admin access',
  operationId: 'log_settings-download',
  responses: {
    200: {
      description: 'Logfile returned',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({
        'Content-Disposition': {
          schema: z
            .literal('attachment; filename="nextcloud.log"')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }).openapi({ required: ['message'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpSettingsApiDeclarativeValueRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/settings/api/declarative/value',
  tags: ['declarative_settings'],
  summary: 'Sets a declarative settings value',
  operationId: 'declarative_settings-set-value',
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
            .object({
              app: z.string().openapi({ description: 'ID of the app' }),
              formId: z.string().openapi({ description: 'ID of the form' }),
              fieldId: z.string().openapi({ description: 'ID of the field' }),
              value: z.object({}).openapi({ description: 'Value to be saved' }),
            })
            .openapi({ required: ['app', 'formId', 'fieldId', 'value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Value set successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid arguments to save value',
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
    500: {
      description: 'Not logged in or not an admin user',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpSettingsApiDeclarativeValueSensitiveRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/settings/api/declarative/value-sensitive',
  tags: ['declarative_settings'],
  summary:
    'Sets a declarative settings value. Password confirmation is required for sensitive values.',
  description: 'This endpoint requires password confirmation',
  operationId: 'declarative_settings-set-sensitive-value',
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
            .object({
              app: z.string().openapi({ description: 'ID of the app' }),
              formId: z.string().openapi({ description: 'ID of the form' }),
              fieldId: z.string().openapi({ description: 'ID of the field' }),
              value: z.object({}).openapi({ description: 'Value to be saved' }),
            })
            .openapi({ required: ['app', 'formId', 'fieldId', 'value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Value set successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid arguments to save value',
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
    500: {
      description: 'Not logged in or not an admin user',
      content: { 'text/plain': { schema: z.string() } },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpSettingsApiDeclarativeFormsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/settings/api/declarative/forms',
  tags: ['declarative_settings'],
  summary: 'Gets all declarative forms with the values prefilled.',
  operationId: 'declarative_settings-get-forms',
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
      description: 'Forms returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(DeclarativeFormSchema) })
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
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
