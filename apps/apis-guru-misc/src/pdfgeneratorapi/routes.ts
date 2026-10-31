import { createRoute, z } from '@hono/zod-openapi'

const DataSchema = z
  .object({
    id: z.int().exactOptional().openapi({ example: 12312 }),
    name: z.string().exactOptional().openapi({ example: 'Sample Data' }),
  })
  .openapi({ required: [] })
  .openapi('Data')

const BatchDataSchema = z
  .array(
    z
      .object({
        data: DataSchema.exactOptional(),
        template: z.int().exactOptional().openapi({ description: 'Template id', example: 52272 }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    example: [
      { data: { key: 'value' }, template: 52272 },
      { data: { key2: 'value2' }, template: 52273 },
    ],
  })
  .openapi('BatchData')

const ComponentSchema = z
  .object({
    cls: z
      .enum([
        'labelComponent',
        'numberComponent',
        'textComponent',
        'imageComponent',
        'dateComponent',
        'hlineComponent',
        'vlineComponent',
        'tableComponent',
        'compositeComponent',
        'barcodeComponent',
        'qrcodeComponent',
        'chartComponent',
        'rectangleComponent',
        'headerComponent',
        'footerComponent',
        'checkboxComponent',
        'radioComponent',
      ])
      .exactOptional()
      .openapi({ description: 'Defines component class/type', example: 'labelComponent' }),
    dataIndex: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Defines data field for Table and Container components which are used to iterate over list of items',
        example: 'line_items',
      }),
    height: z.number().exactOptional().openapi({ description: 'Height in units', example: 1 }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Component id', example: 'component-12313' }),
    left: z
      .number()
      .exactOptional()
      .openapi({ description: 'Position from the page left in units', example: 2.5 }),
    top: z
      .number()
      .exactOptional()
      .openapi({ description: 'Position from the page top in units', example: 4.2 }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Component value', example: '${price}' }),
    width: z.number().exactOptional().openapi({ description: 'Width in units', example: 3.5 }),
    zindex: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Defines the rendering order on page. Components with smaller zindex are rendered before',
        example: 102,
      }),
  })
  .openapi({ description: 'Template component definition', required: [] })
  .openapi('Component')

const TemplateSchema = z
  .object({
    id: z.int().exactOptional().openapi({ description: 'Unique identifier', example: 24382 }),
    modified: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the template was modified',
        example: '2017-10-21 11:49:28',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Template name', example: 'Invoice template' }),
    owner: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the workspace is the owner of the template',
        example: true,
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of tags assigned to a template',
        example: ['invoice', 'orders'],
      }),
  })
  .openapi({ description: 'Template object', required: [] })
  .openapi('Template')

const TemplateDefinitionSchema = z
  .object({
    dataSettings: z
      .object({
        filterBy: z.array(z.object({})).exactOptional(),
        sortBy: z.array(z.object({})).exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Defines filter and sort option for root data set.', required: [] }),
    editor: z
      .object({ heightMultiplier: z.number().exactOptional().openapi({ example: 2 }) })
      .exactOptional()
      .openapi({ description: 'Configuration preferences for the editor', required: [] }),
    id: z.int().exactOptional().openapi({ description: 'Unique identifier', example: 24382 }),
    isDraft: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the template is a draft or published.',
        example: true,
      }),
    layout: z
      .object({
        emptyLabels: z
          .int()
          .exactOptional()
          .openapi({ description: 'Defines how many pages or labels should be empty', example: 0 }),
        format: z
          .enum(['A4', 'letter', 'custom'])
          .exactOptional()
          .openapi({ description: 'Defines template page size', example: 'A4' }),
        height: z
          .number()
          .exactOptional()
          .openapi({ description: 'Page height in units', example: 29.7 }),
        margins: z
          .object({
            bottom: z.number().exactOptional().openapi({ example: 0.5 }),
            left: z.number().exactOptional().openapi({ example: 0.5 }),
            right: z.number().exactOptional().openapi({ example: 0.5 }),
            top: z.number().exactOptional().openapi({ example: 0.5 }),
          })
          .exactOptional()
          .openapi({ description: 'Page margins in units', required: [] }),
        orientation: z
          .enum(['portrait', 'landscape'])
          .exactOptional()
          .openapi({ description: 'Page orientation', example: 'portrait' }),
        repeatLayout: z
          .object({
            format: z
              .enum(['A4', 'letter', 'custom'])
              .exactOptional()
              .openapi({ description: 'Defines template page size', example: 'A4' }),
            height: z
              .number()
              .exactOptional()
              .openapi({ description: 'Page height in units', example: 29.7 }),
            width: z
              .number()
              .exactOptional()
              .openapi({ description: 'Page width in units', example: 21 }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Defines page size if layout is repeated on the page e.g sheet labels',
            required: [],
          }),
        rotation: z
          .union([z.literal(0), z.literal(90), z.literal(180), z.literal(270)])
          .exactOptional()
          .openapi({ description: 'Page rotation in degrees', example: 0 }),
        unit: z
          .enum(['cm', 'in'])
          .exactOptional()
          .openapi({ description: 'Measure unit', example: 'cm' }),
        width: z
          .number()
          .exactOptional()
          .openapi({ description: 'Page width in units', example: 21 }),
      })
      .exactOptional()
      .openapi({
        description: 'Defines template layout (e.g page format, margins).',
        required: [],
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Template name', example: 'Invoice template' }),
    pages: z
      .array(
        z
          .object({
            components: z.array(ComponentSchema).exactOptional(),
            height: z
              .number()
              .exactOptional()
              .openapi({ description: 'Page height in units', example: 29.7 }),
            margins: z
              .object({
                bottom: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Page or label margin from bottom', example: 0.5 }),
                right: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Page or label margin from right', example: 0.5 }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            width: z
              .number()
              .exactOptional()
              .openapi({ description: 'Page width in units', example: 21 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'Defines page or label size, margins and components on page or label',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of tags assigned to a template',
        example: ['invoice', 'orders'],
      }),
  })
  .openapi({ required: [] })
  .openapi('TemplateDefinition')

const TemplateDefinitionNewSchema = z
  .object({
    isDraft: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the template is a draft or published.',
        example: true,
      }),
    layout: z
      .object({
        emptyLabels: z
          .int()
          .exactOptional()
          .openapi({ description: 'Defines how many pages or labels should be empty', example: 0 }),
        format: z
          .enum(['A4', 'letter', 'custom'])
          .exactOptional()
          .openapi({ description: 'Defines template page size', example: 'A4' }),
        height: z
          .number()
          .exactOptional()
          .openapi({ description: 'Page height in units', example: 29.7 }),
        margins: z
          .object({
            bottom: z.number().exactOptional().openapi({ example: 0.5 }),
            left: z.number().exactOptional().openapi({ example: 0.5 }),
            right: z.number().exactOptional().openapi({ example: 0.5 }),
            top: z.number().exactOptional().openapi({ example: 0.5 }),
          })
          .exactOptional()
          .openapi({ description: 'Page margins in units', required: [] }),
        orientation: z
          .enum(['portrait', 'landscape'])
          .exactOptional()
          .openapi({ description: 'Page orientation', example: 'portrait' }),
        repeatLayout: z
          .object({
            format: z
              .enum(['A4', 'letter', 'custom'])
              .exactOptional()
              .openapi({ description: 'Defines template page size', example: 'A4' }),
            height: z
              .number()
              .exactOptional()
              .openapi({ description: 'Page height in units', example: 29.7 }),
            width: z
              .number()
              .exactOptional()
              .openapi({ description: 'Page width in units', example: 21 }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Defines page size if layout is repeated on the page e.g sheet labels',
            required: [],
          }),
        rotaion: z
          .union([z.literal(0), z.literal(90), z.literal(180), z.literal(270)])
          .exactOptional()
          .openapi({ description: 'Page rotation in degrees', example: 0 }),
        unit: z
          .enum(['cm', 'in'])
          .exactOptional()
          .openapi({ description: 'Measure unit', example: 'cm' }),
        width: z
          .number()
          .exactOptional()
          .openapi({ description: 'Page width in units', example: 21 }),
      })
      .exactOptional()
      .openapi({
        description: 'Defines template layout (e.g page format, margins).',
        required: [],
      }),
    name: z.string().openapi({ description: 'Template name', example: 'Invoice template' }),
    pages: z
      .array(
        z
          .object({
            components: z.array(ComponentSchema).exactOptional(),
            height: z
              .number()
              .exactOptional()
              .openapi({ description: 'Page height in units', example: 29.7 }),
            margins: z
              .object({
                bottom: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Page or label margin from bottom', example: 0.5 }),
                right: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Page or label margin from right', example: 0.5 }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            width: z
              .number()
              .exactOptional()
              .openapi({ description: 'Page width in units', example: 21 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'Defines page or label size, margins and components on page or label',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of tags assigned to a template',
        example: ['invoice', 'orders'],
      }),
  })
  .openapi({ description: 'Template configuration', required: ['name'] })
  .openapi('TemplateDefinitionNew')

const WorkspaceSchema = z
  .object({
    created_at: z.string().exactOptional().openapi({ example: '2020-04-01 12:03:12' }),
    id: z.int().exactOptional().openapi({ description: 'Internal workspace id', example: 1 }),
    identifier: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique workspace idenfitifer specified by your application',
        example: 'demo.example@actualreports.com',
      }),
    is_master_workspace: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if a master workspace', example: false }),
  })
  .openapi({ required: [] })
  .openapi('Workspace')

const DocumentResponse = {
  description: 'Document data',
  content: {
    'application/json': {
      schema: z
        .object({
          meta: z
            .object({
              'content-type': z
                .string()
                .exactOptional()
                .openapi({ description: 'Document content type.', example: 'application/pdf' }),
              display_name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Document name without the file extension.',
                  example: 'a2bd25b8921f3dc7a440fd7f427f90a4',
                }),
              encoding: z
                .string()
                .exactOptional()
                .openapi({ description: 'Document encoding', example: 'base64' }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Document name. This value is automatically generated if name attribute is not defined in request.',
                  example: 'a2bd25b8921f3dc7a440fd7f427f90a4.pdf',
                }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          response: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used.',
              example: 'JVBERi0xLjcKJeLjz9MKNyAwIG9iago8PCAvVHlwZSA...',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const EditorUrlResponse = {
  description:
    'Returns an URL which you can use to redirect your user to the editor or use as iframe source',
  content: {
    'application/json': {
      schema: z
        .object({
          response: z
            .string()
            .exactOptional()
            .openapi({
              example:
                'https://us1.pdfgeneratorapi.com/editor/open/2ff98760d39456c4b2cf974fef005ecf',
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const Error401Response = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z
            .enum([
              'Authentication failed: request expired',
              'Authentication failed: signature or secret missing',
              'Authentication failed: workspace missing',
              'Authentication failed: key missing',
              "Authentication failed: property 'iss' (issuer) missing in JWT",
              "Authentication failed: property 'sub' (subject) missing in JWT",
              "Authentication failed: property 'exp' (expiration time) missing in JWT",
              "Authentication failed: invalid 'iss' (issuer)",
              'Authentication failed: incorrect signature',
              'Authentication failed',
            ])
            .exactOptional()
            .openapi({ description: 'Error description', example: 'Authentication failed' }),
          status: z.int().exactOptional().openapi({ description: 'HTTP Error code', example: 401 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const Error403Response = {
  description: 'Forbidden',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z
            .literal('Your account has exceeded the monthly document generation limit.')
            .exactOptional()
            .openapi({ description: 'Error description', example: 'Access not granted' }),
          status: z.int().exactOptional().openapi({ description: 'HTTP Error code', example: 403 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const Error404Response = {
  description: 'Not Found',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z
            .enum([
              'Entity not found',
              'Resource not found',
              'None of the templates is available for the workspace.',
            ])
            .exactOptional()
            .openapi({ description: 'Error description', example: 'Entity not found' }),
          status: z.int().exactOptional().openapi({ description: 'HTTP Error code', example: 404 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const Error422Response = {
  description: 'Unprocessable Entity',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z
            .enum([
              'Unable to parse JSON, please check formatting',
              'Required parameter missing',
              'Required parameter missing: template definition not defined',
              'Required parameter missing: template not defined',
            ])
            .exactOptional()
            .openapi({ description: 'Error description', example: 'Incorrect parameter value' }),
          status: z.int().exactOptional().openapi({ description: 'HTTP Error code', example: 422 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const Error500Response = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z
            .string()
            .exactOptional()
            .openapi({ description: 'Error description', example: 'Internal error' }),
          status: z.int().exactOptional().openapi({ description: 'HTTP Error code', example: 500 }),
        })
        .openapi({ required: [] }),
    },
  },
}

const ListOfTemplatesResponse = {
  description: 'An array of template objects',
  content: {
    'application/json': {
      schema: z
        .object({ response: z.array(TemplateSchema).exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const SuccessResponse = {
  description: 'The request was successfully executed.',
  content: {
    'application/json': {
      schema: z
        .object({
          response: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const TemplateConfigResponse = {
  description: 'Template configuration as JSON object',
  content: {
    'application/json': {
      schema: z
        .object({ response: TemplateDefinitionSchema.exactOptional() })
        .openapi({ required: [] }),
    },
  },
}

const WorkspaceResponse = {
  description: 'Workspace information',
  content: {
    'application/json': {
      schema: z.object({ response: WorkspaceSchema.exactOptional() }).openapi({ required: [] }),
    },
  },
}

const DocNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Document name, returned in the meta data.',
      in: 'query',
      name: 'name',
      schema: { example: 'My document', type: 'string' },
      required: false,
    },
    example: 'My document',
  })

const FormatParamsSchema = z
  .enum(['pdf', 'html', 'zip', 'xlsx'])
  .default('pdf')
  .exactOptional()
  .openapi({
    param: {
      description: 'Document format. The zip option will return a ZIP file with PDF files.',
      in: 'query',
      name: 'format',
      schema: {
        default: 'pdf',
        enum: ['pdf', 'html', 'zip', 'xlsx'],
        example: 'pdf',
        type: 'string',
      },
      required: false,
    },
    example: 'pdf',
  })

const OutputParamsSchema = z
  .enum(['base64', 'url', 'I'])
  .default('base64')
  .exactOptional()
  .openapi({
    param: {
      description:
        'Response format. With the url option, the document is stored for 30 days and automatically deleted.',
      in: 'query',
      name: 'output',
      schema: {
        default: 'base64',
        enum: ['base64', 'url', 'I'],
        example: 'base64',
        type: 'string',
      },
      required: false,
    },
    example: 'base64',
  })

const TemplateIdParamsSchema = z
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
    param: {
      description: 'Template unique identifier',
      in: 'path',
      name: 'templateId',
      required: true,
      schema: { example: 19375, type: 'integer' },
    },
    example: 19375,
  })

const WorkspaceIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Workspace identifier',
      example: 'demo.example@actualreports.com',
      in: 'path',
      name: 'workspaceId',
      required: true,
      schema: { type: 'string' },
    },
  })

const JSONWebTokenAuthSecurityScheme = {
  bearerFormat: 'JWT',
  description:
    'JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. For more information about JSON Web Tokens check [jwt.io](https://jwt.io).\n',
  scheme: 'bearer',
  type: 'http',
}

export const getTemplatesRoute = createRoute({
  method: 'get',
  path: '/templates',
  tags: ['Templates'],
  summary: 'Get templates',
  description: 'Returns a list of templates available for the authenticated workspace',
  operationId: 'getTemplates',
  responses: {
    200: ListOfTemplatesResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})

export const postTemplatesRoute = createRoute({
  method: 'post',
  path: '/templates',
  tags: ['Templates'],
  summary: 'Create template',
  description:
    'Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.',
  operationId: 'createTemplate',
  request: {
    body: {
      description: 'Template configuration as JSON string',
      content: { 'application/json': { schema: TemplateDefinitionNewSchema } },
      required: true,
    },
  },
  responses: {
    200: TemplateConfigResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})

export const postTemplatesOutputRoute = createRoute({
  method: 'post',
  path: '/templates/output',
  tags: ['Documents'],
  summary: 'Generate document (multiple templates)',
  description:
    'Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.',
  operationId: 'mergeTemplates',
  request: {
    query: z.object({
      name: DocNameParamsSchema,
      format: FormatParamsSchema,
      output: OutputParamsSchema,
    }),
    body: {
      description:
        'Data used to specify templates and data objects which are used to merge the template',
      content: { 'application/json': { schema: BatchDataSchema } },
      required: true,
    },
  },
  responses: {
    200: DocumentResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})

export const getTemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/templates/templateId',
  tags: ['Templates'],
  summary: 'Get template',
  description: 'Returns template configuration',
  operationId: 'getTemplate',
  request: {
    query: z.object({
      templateId: z
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
          param: {
            description: 'Template unique identifier',
            in: 'query',
            name: 'templateId',
            required: true,
            schema: { example: 19375, type: 'integer' },
          },
          example: 19375,
        }),
    }),
  },
  responses: {
    200: TemplateConfigResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})

export const putTemplatesTemplateIdRoute = createRoute({
  method: 'put',
  path: '/templates/templateId',
  tags: ['Templates'],
  summary: 'Update template',
  description:
    'Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.',
  operationId: 'updateTemplate',
  request: {
    query: z.object({
      templateId: z
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
          param: {
            description: 'Template unique identifier',
            in: 'query',
            name: 'templateId',
            required: true,
            schema: { example: 19375, type: 'integer' },
          },
          example: 19375,
        }),
    }),
    body: {
      description: 'Template configuration as JSON string',
      content: { 'application/json': { schema: TemplateDefinitionNewSchema } },
      required: true,
    },
  },
  responses: {
    200: TemplateConfigResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})

export const deleteTemplatesTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/templates/templateId',
  tags: ['Templates'],
  summary: 'Delete template',
  description: 'Deletes the template from workspace',
  operationId: 'deleteTemplate',
  request: {
    query: z.object({
      templateId: z
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
          param: {
            description: 'Template unique identifier',
            in: 'query',
            name: 'templateId',
            required: true,
            schema: { example: 19375, type: 'integer' },
          },
          example: 19375,
        }),
    }),
  },
  responses: {
    200: SuccessResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})

export const postTemplatesTemplateIdCopyRoute = createRoute({
  method: 'post',
  path: '/templates/templateId/copy',
  tags: ['Templates'],
  summary: 'Copy template',
  description:
    'Creates a copy of a template to the workspace specified in authentication parameters.',
  operationId: 'copyTemplate',
  request: {
    query: z.object({
      templateId: z
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
          param: {
            description: 'Template unique identifier',
            in: 'query',
            name: 'templateId',
            required: true,
            schema: { example: 19375, type: 'integer' },
          },
          example: 19375,
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Name for the copied template. If name is not specified then the original name is used.',
            example: 'My copied template',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: TemplateConfigResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})

export const postTemplatesTemplateIdEditorRoute = createRoute({
  method: 'post',
  path: '/templates/templateId/editor',
  tags: ['Templates'],
  summary: 'Open editor',
  description:
    'Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.\n',
  operationId: 'getEditorUrl',
  request: {
    query: z.object({
      templateId: z
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
          param: {
            description: 'Template unique identifier',
            in: 'query',
            name: 'templateId',
            required: true,
            schema: { example: 19375, type: 'integer' },
          },
          example: 19375,
        }),
      language: z
        .enum(['en', 'et', 'cs', 'sk', 'ru'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the editor UI language. Defaults to organization editor language.',
            example: 'en',
            in: 'query',
            name: 'language',
            required: false,
            schema: { enum: ['en', 'et', 'cs', 'sk', 'ru'], type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.',
      content: {
        'application/json': {
          schema: z.object({}).openapi({ example: { id: 12312, name: 'Sample Data' } }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: EditorUrlResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})

export const postTemplatesTemplateIdOutputRoute = createRoute({
  method: 'post',
  path: '/templates/templateId/output',
  tags: ['Documents'],
  summary: 'Generate document',
  description:
    'Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.',
  operationId: 'mergeTemplate',
  request: {
    query: z.object({
      templateId: z
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
          param: {
            description: 'Template unique identifier',
            in: 'query',
            name: 'templateId',
            required: true,
            schema: { example: 19375, type: 'integer' },
          },
          example: 19375,
        }),
      name: DocNameParamsSchema,
      format: FormatParamsSchema,
      output: OutputParamsSchema,
    }),
    body: {
      description:
        'Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.',
      content: { 'application/json': { schema: DataSchema } },
      required: true,
    },
  },
  responses: {
    200: DocumentResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})

export const getWorkspacesWorkspaceIdRoute = createRoute({
  method: 'get',
  path: '/workspaces/workspaceId',
  tags: ['Workspaces'],
  summary: 'Get workspace',
  description: 'Returns workspace information',
  operationId: 'getWorkspace',
  request: {
    query: z.object({
      workspaceId: z
        .string()
        .openapi({
          param: {
            description: 'Workspace identifier',
            example: 'demo.example@actualreports.com',
            in: 'query',
            name: 'workspaceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: WorkspaceResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})

export const deleteWorkspacesWorkspaceIdRoute = createRoute({
  method: 'delete',
  path: '/workspaces/workspaceId',
  tags: ['Workspaces'],
  summary: 'Delete workspace',
  description: 'Deletes the workspace',
  operationId: 'deleteWorkspace',
  request: {
    query: z.object({
      workspaceId: z
        .string()
        .openapi({
          param: {
            description: 'Workspace identifier',
            example: 'demo.example@actualreports.com',
            in: 'query',
            name: 'workspaceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: SuccessResponse,
    401: Error401Response,
    403: Error403Response,
    404: Error404Response,
    422: Error422Response,
    500: Error500Response,
  },
})
