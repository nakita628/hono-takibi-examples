import { createRoute, z } from '@hono/zod-openapi'

const BodyCreateSchema = z
  .object({ file: z.file().openapi({ type: 'string', format: 'binary', title: 'File' }) })
  .openapi({ required: ['file'], title: 'Body_create' })
  .openapi('BodyCreate')

const BoundingBoxSchema = z
  .object({
    height: z.number().min(1).openapi({ title: 'Height' }),
    width: z.number().min(1).openapi({ title: 'Width' }),
    x: z.number().min(0).openapi({ title: 'X' }),
    y: z.number().min(0).openapi({ title: 'Y' }),
  })
  .openapi({ required: ['x', 'y', 'width', 'height'], title: 'BoundingBox' })
  .openapi('BoundingBox')

const CheckBoxFieldSchema = z
  .object({
    bbox: BoundingBoxSchema,
    eval: z
      .union([z.boolean(), z.string().min(1)])
      .default(true)
      .exactOptional()
      .openapi({ title: 'Eval' }),
    name: z.string().min(1).openapi({ title: 'Name' }),
    page: z.int().min(0).openapi({ title: 'Page' }),
    required: z.boolean().default(true).exactOptional().openapi({ title: 'Required' }),
    type: z.literal('check').openapi({ title: 'Type' }),
  })
  .openapi({ required: ['bbox', 'name', 'page', 'type'], title: 'CheckBoxField' })
  .openapi('CheckBoxField')

const FormatSchema = z
  .enum(['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6'])
  .openapi({ description: 'An enumeration.', title: 'Format' })
  .openapi('Format')

const OrientationSchema = z
  .enum(['landscape', 'portrait'])
  .openapi({ description: 'An enumeration.', title: 'Orientation' })
  .openapi('Orientation')

const CreateOrUpdateTemplateRequestSchema = z
  .object({
    components: z.array(z.object({})).openapi({ title: 'Components' }),
    css: z.string().openapi({ title: 'Css' }),
    footer_html: z.string().exactOptional().openapi({ title: 'Footer Html' }),
    format: FormatSchema,
    header_html: z.string().exactOptional().openapi({ title: 'Header Html' }),
    name: z.string().openapi({ title: 'Name' }),
    orientation: OrientationSchema,
    preview_payload: z.object({}).openapi({ title: 'Preview Payload' }),
    template_html: z.string().openapi({ title: 'Template Html' }),
  })
  .openapi({
    required: [
      'components',
      'name',
      'template_html',
      'css',
      'format',
      'orientation',
      'preview_payload',
    ],
    title: 'CreateOrUpdateTemplateRequest',
  })
  .openapi('CreateOrUpdateTemplateRequest')

const FontSchema = z
  .enum(['courier', 'helvetica', 'times_roman'])
  .openapi({ description: 'An enumeration.', title: 'Font' })
  .openapi('Font')

const HorizontalAlignSchema = z
  .enum(['L', 'C', 'R'])
  .openapi({ description: 'An enumeration.', title: 'HorizontalAlign' })
  .openapi('HorizontalAlign')

const VerticalAlignSchema = z
  .enum(['T', 'C', 'B'])
  .openapi({ description: 'An enumeration.', title: 'VerticalAlign' })
  .openapi('VerticalAlign')

const DateFieldSchema = z
  .object({
    bbox: BoundingBoxSchema,
    cell_count: z.int().min(0).default(0).exactOptional().openapi({ title: 'Cell Count' }),
    cell_offset: z.int().min(0).default(0).exactOptional().openapi({ title: 'Cell Offset' }),
    cells: z.boolean().default(false).exactOptional().openapi({ title: 'Cells' }),
    color: z.string().default('black').exactOptional().openapi({ title: 'Color' }),
    font: FontSchema.default('helvetica').exactOptional(),
    font_size: z.int().positive().default(10).exactOptional().openapi({ title: 'Font Size' }),
    format: z.string().openapi({ title: 'Format' }),
    h_align: HorizontalAlignSchema.default('L').exactOptional(),
    locale: z.string().length(5).default('en_US').exactOptional().openapi({ title: 'Locale' }),
    name: z.string().min(1).openapi({ title: 'Name' }),
    page: z.int().min(0).openapi({ title: 'Page' }),
    required: z.boolean().default(true).exactOptional().openapi({ title: 'Required' }),
    type: z.literal('date').openapi({ title: 'Type' }),
    v_align: VerticalAlignSchema.default('B').exactOptional(),
  })
  .openapi({ required: ['bbox', 'name', 'page', 'type', 'format'], title: 'DateField' })
  .openapi('DateField')

const DesignerTemplateSchema = z
  .object({
    components: z.array(z.object({})).openapi({ title: 'Components' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    css: z.string().openapi({ title: 'Css' }),
    footer_html: z.string().exactOptional().openapi({ title: 'Footer Html' }),
    format: FormatSchema,
    header_html: z.string().exactOptional().openapi({ title: 'Header Html' }),
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    name: z.string().openapi({ title: 'Name' }),
    orientation: OrientationSchema,
    preview_payload: z.object({}).openapi({ title: 'Preview Payload' }),
    template_html: z.string().openapi({ title: 'Template Html' }),
  })
  .openapi({
    required: [
      'name',
      'template_html',
      'css',
      'format',
      'orientation',
      'components',
      'preview_payload',
    ],
    title: 'DesignerTemplate',
  })
  .openapi('DesignerTemplate')

const FillTemplateRequestSchema = z
  .object({ data: z.object({}).default({}).exactOptional().openapi({ title: 'Data' }) })
  .openapi({ title: 'FillTemplateRequest', required: [] })
  .openapi('FillTemplateRequest')

const GeneratePDFPayloadSchema = z
  .object({ data: z.object({}).openapi({ title: 'Data' }) })
  .openapi({ required: ['data'], title: 'GeneratePDFPayload' })
  .openapi('GeneratePDFPayload')

const ImageAnchorSchema = z
  .enum(['nw', 'n', 'ne', 'w', 'c', 'e', 'sw', 's'])
  .openapi({ description: 'An enumeration.', title: 'ImageAnchor' })
  .openapi('ImageAnchor')

const ImageFieldSchema = z
  .object({
    anchor: ImageAnchorSchema.default('c').exactOptional(),
    bbox: BoundingBoxSchema,
    name: z.string().min(1).openapi({ title: 'Name' }),
    page: z.int().min(0).openapi({ title: 'Page' }),
    required: z.boolean().default(true).exactOptional().openapi({ title: 'Required' }),
    type: z.literal('image').default('image').exactOptional().openapi({ title: 'Type' }),
  })
  .openapi({ required: ['bbox', 'name', 'page'], title: 'ImageField' })
  .openapi('ImageField')

const PreviewModelSchema = z
  .object({
    css: z.string().openapi({ title: 'Css' }),
    data: z.object({}).openapi({ title: 'Data' }),
    footer_html: z.string().exactOptional().openapi({ title: 'Footer Html' }),
    header_html: z.string().exactOptional().openapi({ title: 'Header Html' }),
    template_html: z.string().openapi({ title: 'Template Html' }),
  })
  .openapi({ required: ['data', 'template_html', 'css'], title: 'PreviewModel' })
  .openapi('PreviewModel')

const PreviewResponseSchema = z
  .object({ html: z.string().openapi({ title: 'Html' }) })
  .openapi({ required: ['html'], title: 'PreviewResponse' })
  .openapi('PreviewResponse')

const ResponseErrorSchema = z
  .object({ message: z.string().openapi({ title: 'Message' }) })
  .openapi({ required: ['message'], title: 'ResponseError' })
  .openapi('ResponseError')

const ResponseOkDesignerTemplateSchema = z
  .object({ results: DesignerTemplateSchema })
  .openapi({ required: ['results'], title: 'ResponseOk[DesignerTemplate]' })
  .openapi('ResponseOkDesignerTemplate')

const ResponseOkHttpUrlSchema = z
  .object({ results: z.url().min(1).max(2083).openapi({ title: 'Results' }) })
  .openapi({ required: ['results'], title: 'ResponseOk[HttpUrl]' })
  .openapi('ResponseOkHttpUrl')

const TextFieldSchema = z
  .object({
    bbox: BoundingBoxSchema,
    cell_count: z.int().min(0).default(0).exactOptional().openapi({ title: 'Cell Count' }),
    cell_offset: z.int().min(0).default(0).exactOptional().openapi({ title: 'Cell Offset' }),
    cells: z.boolean().default(false).exactOptional().openapi({ title: 'Cells' }),
    color: z.string().default('black').exactOptional().openapi({ title: 'Color' }),
    font: FontSchema.default('helvetica').exactOptional(),
    font_size: z.int().positive().default(10).exactOptional().openapi({ title: 'Font Size' }),
    h_align: HorizontalAlignSchema.default('L').exactOptional(),
    name: z.string().min(1).openapi({ title: 'Name' }),
    page: z.int().min(0).openapi({ title: 'Page' }),
    required: z.boolean().default(true).exactOptional().openapi({ title: 'Required' }),
    type: z.literal('text').openapi({ title: 'Type' }),
    v_align: VerticalAlignSchema.default('B').exactOptional(),
  })
  .openapi({ required: ['bbox', 'name', 'page', 'type'], title: 'TextField' })
  .openapi('TextField')

const TemplateSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ title: 'Created At' }),
    fields: z
      .array(
        z
          .xor([DateFieldSchema, TextFieldSchema, ImageFieldSchema, CheckBoxFieldSchema])
          .openapi({
            discriminator: {
              mapping: {
                check: '#/components/schemas/CheckBoxField',
                date: '#/components/schemas/DateField',
                image: '#/components/schemas/ImageField',
                text: '#/components/schemas/TextField',
              },
              propertyName: 'type',
            },
          }),
      )
      .default([])
      .exactOptional()
      .openapi({ title: 'Fields' }),
    id: z.string().exactOptional().openapi({ title: 'Id' }),
    name: z.string().exactOptional().openapi({ title: 'Name' }),
    pages: z.int().positive().openapi({ title: 'Pages' }),
    size_bytes: z.int().exactOptional().openapi({ title: 'Size Bytes' }),
  })
  .openapi({ required: ['pages'], title: 'Template' })
  .openapi('Template')

const ResponseOkListAppsApiRoutesTemplatesTemplateSchema = z
  .object({ results: z.array(TemplateSchema).openapi({ title: 'Results' }) })
  .openapi({ required: ['results'], title: 'ResponseOk[List[apps.api.routes_templates.Template]]' })
  .openapi('ResponseOkListAppsApiRoutesTemplatesTemplate')

const ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplateSchema = z
  .object({ results: z.array(DesignerTemplateSchema).openapi({ title: 'Results' }) })
  .openapi({
    required: ['results'],
    title: 'ResponseOk[List[fillr.entities.designer_template.DesignerTemplate]]',
  })
  .openapi('ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplate')

const ResponseOkNoneTypeSchema = z
  .object({ results: z.any().nullable().openapi({ title: 'Results' }) })
  .openapi({ required: ['results'], title: 'ResponseOk[NoneType]' })
  .openapi('ResponseOkNoneType')

const ResponseOkPreviewResponseSchema = z
  .object({ results: PreviewResponseSchema })
  .openapi({ required: ['results'], title: 'ResponseOk[PreviewResponse]' })
  .openapi('ResponseOkPreviewResponse')

const ResponseOkTemplateSchema = z
  .object({ results: TemplateSchema })
  .openapi({ required: ['results'], title: 'ResponseOk[Template]' })
  .openapi('ResponseOkTemplate')

const UpdateTemplateRequestSchema = z
  .object({
    fields: z
      .array(
        z
          .xor([DateFieldSchema, TextFieldSchema, ImageFieldSchema, CheckBoxFieldSchema])
          .openapi({
            discriminator: {
              mapping: {
                check: '#/components/schemas/CheckBoxField',
                date: '#/components/schemas/DateField',
                image: '#/components/schemas/ImageField',
                text: '#/components/schemas/TextField',
              },
              propertyName: 'type',
            },
          }),
      )
      .openapi({ title: 'Fields' }),
    name: z.string().exactOptional().openapi({ title: 'Name' }),
  })
  .openapi({ required: ['fields'], title: 'UpdateTemplateRequest' })
  .openapi('UpdateTemplateRequest')

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'x-api-key', type: 'apiKey' }

export const getDesignerTemplatesIndexRoute = createRoute({
  method: 'get',
  path: '/designer/templates/',
  summary: 'List Templates',
  operationId: 'list_templates_designer_templates__get',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, maximum: 1000, minimum: 1, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplateSchema,
        },
      },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const postDesignerTemplatesIndexRoute = createRoute({
  method: 'post',
  path: '/designer/templates/',
  summary: 'Create Template',
  operationId: 'create_template_designer_templates__post',
  request: {
    body: {
      content: { 'application/json': { schema: CreateOrUpdateTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseOkDesignerTemplateSchema } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const postDesignerTemplatesPreviewRoute = createRoute({
  method: 'post',
  path: '/designer/templates/preview',
  summary: 'Preview',
  operationId: 'preview_designer_templates_preview_post',
  request: {
    body: { content: { 'application/json': { schema: PreviewModelSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseOkPreviewResponseSchema } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const getDesignerTemplatesIdRoute = createRoute({
  method: 'get',
  path: '/designer/templates/{id}',
  summary: 'List Templates',
  operationId: 'list_templates_designer_templates__id__get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { title: 'Id', type: 'string' },
          },
          title: 'Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseOkDesignerTemplateSchema } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const putDesignerTemplatesIdRoute = createRoute({
  method: 'put',
  path: '/designer/templates/{id}',
  summary: 'Update Template',
  operationId: 'update_template_designer_templates__id__put',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { title: 'Id', type: 'string' },
          },
          title: 'Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateOrUpdateTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseOkDesignerTemplateSchema } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const deleteDesignerTemplatesIdRoute = createRoute({
  method: 'delete',
  path: '/designer/templates/{id}',
  summary: 'Delete',
  operationId: 'delete_designer_templates__id__delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { title: 'Id', type: 'string' },
          },
          title: 'Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseOkNoneTypeSchema } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const postDesignerTemplatesIdGenerateRoute = createRoute({
  method: 'post',
  path: '/designer/templates/{id}/generate',
  summary: 'Generate Pdf',
  operationId: 'generate_pdf_designer_templates__id__generate_post',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { title: 'Id', type: 'string' },
          },
          title: 'Id',
        }),
    }),
    body: { content: { 'application/json': { schema: GeneratePDFPayloadSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const getTemplatesRoute = createRoute({
  method: 'get',
  path: '/templates',
  tags: ['Templates'],
  summary: 'List ',
  operationId: 'list',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, maximum: 1000, minimum: 1, title: 'Limit', type: 'integer' },
          },
          title: 'Limit',
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, minimum: 0, title: 'Offset', type: 'integer' },
          },
          title: 'Offset',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': { schema: ResponseOkListAppsApiRoutesTemplatesTemplateSchema },
      },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const postTemplatesRoute = createRoute({
  method: 'post',
  path: '/templates',
  tags: ['Templates'],
  summary: 'Create',
  operationId: 'create',
  request: {
    body: { content: { 'multipart/form-data': { schema: BodyCreateSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseOkTemplateSchema } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const getTemplatesIdRoute = createRoute({
  method: 'get',
  path: '/templates/{id}',
  tags: ['Templates'],
  summary: 'Get Template',
  operationId: 'get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { title: 'Id', type: 'string' },
          },
          title: 'Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseOkTemplateSchema } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const putTemplatesIdRoute = createRoute({
  method: 'put',
  path: '/templates/{id}',
  tags: ['Templates'],
  summary: 'Update',
  operationId: 'update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { title: 'Id', type: 'string' },
          },
          title: 'Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseOkTemplateSchema } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const deleteTemplatesIdRoute = createRoute({
  method: 'delete',
  path: '/templates/{id}',
  tags: ['Templates'],
  summary: 'Delete ',
  operationId: 'delete__templates__id__delete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { title: 'Id', type: 'string' },
          },
          title: 'Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseOkNoneTypeSchema } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const getTemplatesIdFileRoute = createRoute({
  method: 'get',
  path: '/templates/{id}/file',
  tags: ['Templates'],
  summary: 'Get File',
  operationId: 'get_file_templates__id__file_get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { title: 'Id', type: 'string' },
          },
          title: 'Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ResponseOkHttpUrlSchema } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})

export const postTemplatesIdFillRoute = createRoute({
  method: 'post',
  path: '/templates/{id}/fill',
  tags: ['Templates'],
  summary: 'Fill',
  operationId: 'fill',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { title: 'Id', type: 'string' },
          },
          title: 'Id',
        }),
    }),
    body: {
      content: { 'application/json': { schema: FillTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
    '4XX': {
      description: 'Client Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
    '5XX': {
      description: 'Server Error',
      content: { 'application/json': { schema: ResponseErrorSchema } },
    },
  },
})
