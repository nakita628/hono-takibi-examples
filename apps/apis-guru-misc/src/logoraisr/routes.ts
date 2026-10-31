import { createRoute, z } from '@hono/zod-openapi'

const ColorSchema = z
  .object({
    blue: z.int().exactOptional().openapi({ description: 'RGB-Blue color value', title: 'Blue' }),
    green: z
      .int()
      .exactOptional()
      .openapi({ description: 'RGB-Green color value.', title: 'Green' }),
    hex: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Hex-label of this color.', title: 'Hex' }),
    number_of_pixel: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of pixels that holds this color.',
        title: 'Number of pixel',
      }),
    percentage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Percentage of pixels that holds this color.', title: 'Percentage' }),
    red: z.int().exactOptional().openapi({ description: 'RGB-Red color value.', title: 'Red' }),
  })
  .openapi({ required: [] })
  .openapi('Color')

const FileResponseSchema = z
  .object({
    file_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Returns the file_id. To apply processes to the uploaded file, this file_id must be referenced in the API-calls.',
        title: 'File id',
      }),
  })
  .openapi({ required: [] })
  .openapi('FileResponse')

const PreviewResponseSchema = z
  .object({
    preview_img_url: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description: 'Url from which the preview file can be downloaded.',
        title: 'Preview img url',
      }),
  })
  .openapi({ required: [] })
  .openapi('PreviewResponse')

const ProcessSchema = z
  .object({
    crop: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'Crops the image according to the specified mechanism. If you specify the size "WidthexHeight", the image will be cropped centered. If coordinates "x1,y1,x2,y2" are given, the image is cropped according to the coordinates. The image will be cropped to the size of the stories if "faces" are specified as. Example Centered: "crop": "200x300". Example Region: "crop": "200,300,150,300". Example Faces: "crop": "faces".',
        title: 'Crop',
      }),
    flip: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flips the image around the horizontal axis, from top to bottom. Example: "flip": true',
        title: 'Flip',
      }),
    mirror: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Mirrors the image around the vertical axis, i.e. from right to left. Example: "mirror": true',
        title: 'Mirror',
      }),
    processing_algorithm: z
      .string()
      .min(1)
      .openapi({
        description:
          'Schlüssel welcher Verarbeitungs-Algorithmus angewendet wird. Zur Auswahl stehen "logo-to-vector", "logo-super-resolution", "logo-segmentation" und "image-processing".',
        title: 'Processing algorithm',
      }),
    resize: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'Changes the size of the image according to the specified size. Example: "resize": "200x300".',
        title: 'Resize',
      }),
    rotate: z
      .int()
      .min(0)
      .max(360)
      .exactOptional()
      .openapi({
        description:
          'Rotates the image around the center according to the specified degree. Example: "rotate": 90',
        title: 'Rotate',
      }),
  })
  .openapi({ required: ['processing_algorithm'] })
  .openapi('Process')

const ProjectSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The Date when the project was created.', title: 'Created' }),
    file_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Id of the file on which the process was applied.',
        title: 'File id',
      }),
    id: z.int().exactOptional().openapi({ description: 'Id of the created project.', title: 'Id' }),
    paypal_payment_id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Id of the paypal payment.', title: 'Paypal payment id' }),
    process: ProcessSchema.exactOptional(),
    process_id: z
      .string()
      .min(1)
      .openapi({
        description: 'Process which should applied. Processes are "color-classification".',
        title: 'Process id',
      }),
    project_number: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of the created project.', title: 'Project number' }),
    project_title: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Name of the project with which it was saved.',
        title: 'Project title',
      }),
    result_file_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Id of the result file which the process created.',
        title: 'Result file id',
      }),
  })
  .openapi({ required: ['process_id'] })
  .openapi('Project')

const ProjectRequestSchema = z
  .object({
    file_id: z
      .uuid()
      .openapi({
        description: 'Id of the file on which the process is to be applied.',
        title: 'File id',
      }),
    process: ProcessSchema.exactOptional(),
    project_title: z
      .string()
      .min(1)
      .openapi({
        description: 'Name of the project with which it is saved.',
        title: 'Project title',
      }),
  })
  .openapi({ required: ['file_id', 'project_title'] })
  .openapi('ProjectRequest')

const ProjectResponseSchema = z
  .object({
    project_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Id of the created project.', title: 'Project id' }),
    project_number: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of the created project.', title: 'Project number' }),
    result_file_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Id of the result_file. This id must be specified to create the result_file_url.',
        title: 'Result file id',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProjectResponse')

const ResultSchema = z
  .object({
    colors: z.array(ColorSchema).exactOptional(),
    height: z.int().exactOptional().openapi({ description: 'Height of image.', title: 'Height' }),
    number_of_pixel_in_image: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of pixel in image.', title: 'Number of pixel in image' }),
    width: z.int().exactOptional().openapi({ description: 'Width of image.', title: 'Width' }),
  })
  .openapi({ title: 'Result', required: [] })
  .openapi('Result')

const ReportSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The Date when the report was created.', title: 'Created' }),
    file_id: z
      .uuid()
      .openapi({
        description: 'Id of the file on which the report was applied.',
        title: 'File id',
      }),
    process_id: z
      .int()
      .openapi({
        description:
          'Process_id of the process which was applied. Processes are "color-classification".',
        title: 'Process id',
      }),
    report_number: z
      .int()
      .openapi({ description: 'Number of the created report.', title: 'Report number' }),
    result: ResultSchema.exactOptional(),
    result_id: z
      .int()
      .openapi({ description: 'Result_id of the result which was created.', title: 'Result id' }),
  })
  .openapi({ required: ['report_number', 'file_id', 'process_id', 'result_id'] })
  .openapi('Report')

const ReportRequestSchema = z
  .object({
    file_id: z
      .uuid()
      .openapi({
        description: 'Id of the file on which the process is to be applied.',
        title: 'File id',
      }),
    process: z
      .string()
      .min(1)
      .openapi({
        description: 'Process which should applied. Processes are "color-classification".',
        title: 'Process',
      }),
  })
  .openapi({ required: ['process', 'file_id'] })
  .openapi('ReportRequest')

const ReportResponseSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The Date when the project was created.', title: 'Created' }),
    file_id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Id of the file on which the process was applied.',
        title: 'File id',
      }),
    processing_algorithm: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Process which was applied. Processes are "color-classification".',
        title: 'Processing algorithm',
      }),
    report_number: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of the report which was created.', title: 'Report number' }),
    result: ResultSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportResponse')

const ResultResponseSchema = z
  .object({
    result_file_url: z
      .string()
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description: 'Url from which the result file can be downloaded.',
        title: 'Result file url',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResultResponse')

const TokenSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

export const getPreviewsFileIdIndexRoute = createRoute({
  method: 'get',
  path: '/previews/{file_id}/',
  tags: ['previews'],
  summary: 'Get preview image of uploaded file',
  description:
    'This GET-Method returns the URL where the preview image of uploaded file can downloaded from.',
  operationId: 'previews_read',
  request: {
    params: z.object({
      file_id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the file for which the preview_img_url is generated.',
            in: 'path',
            name: 'file_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PreviewResponseSchema } } },
    400: { description: 'BAD REQUEST' },
    403: { description: 'FORBIDDEN' },
  },
})

export const getProcessesIndexRoute = createRoute({
  method: 'get',
  path: '/processes/',
  tags: ['processes'],
  summary: 'Get process list.',
  description: 'This GET-Method lists all on logoraisr available processes.',
  operationId: 'processes_list',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ProcessSchema } } },
  },
})

export const getProjectsIndexRoute = createRoute({
  method: 'get',
  path: '/projects/',
  tags: ['projects'],
  summary: 'Get user project list.',
  description: "This GET-Method lists the user's projects.",
  operationId: 'projects_list',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ProjectSchema } } },
    403: { description: 'FORBIDDEN' },
    404: { description: 'NOT FOUND' },
  },
})

export const postProjectsIndexRoute = createRoute({
  method: 'post',
  path: '/projects/',
  tags: ['projects'],
  summary: 'Create a new project.',
  description: 'This POST-Method creates a new project.',
  operationId: 'projects_create',
  request: {
    body: { content: { 'application/json': { schema: ProjectRequestSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: ProjectResponseSchema } } },
    400: { description: 'BAD REQUEST' },
    403: { description: 'FORBIDDEN' },
    404: { description: 'NOT FOUND' },
  },
})

export const getProjectsProjectNumberIndexRoute = createRoute({
  method: 'get',
  path: '/projects/{project_number}/',
  tags: ['projects'],
  summary: 'Get project details.',
  description: 'This GET-Method returns a specific project.',
  operationId: 'projects_read',
  request: {
    params: z.object({
      project_number: z
        .string()
        .openapi({
          param: {
            description: 'Number of the project.',
            in: 'path',
            name: 'project_number',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ProjectSchema } } },
    403: { description: 'FORBIDDEN' },
    404: { description: 'NOT FOUND' },
  },
})

export const getReportsIndexRoute = createRoute({
  method: 'get',
  path: '/reports/',
  tags: ['reports'],
  summary: 'Get user report list.',
  description: "This GET method lists the user's reports.",
  operationId: 'reports_list',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ReportSchema } } },
    403: { description: 'FORBIDDEN' },
    404: { description: 'NOT FOUND' },
  },
})

export const postReportsIndexRoute = createRoute({
  method: 'post',
  path: '/reports/',
  tags: ['reports'],
  summary: 'Create a new report.',
  description: 'This POST-Method creates a new report.',
  operationId: 'reports_create',
  request: {
    body: { content: { 'application/json': { schema: ReportRequestSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: ReportResponseSchema } } },
    400: { description: 'BAD REQUEST' },
    401: { description: 'UNAUTHORIZED' },
    403: { description: 'FORBIDDEN' },
  },
})

export const getReportsReportNumberIndexRoute = createRoute({
  method: 'get',
  path: '/reports/{report_number}/',
  tags: ['reports'],
  summary: 'Get report details.',
  description: 'This GET-Method returns the details of a specific report.',
  operationId: 'reports_read',
  request: {
    params: z.object({
      report_number: z
        .string()
        .openapi({
          param: { in: 'path', name: 'report_number', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ReportSchema } } },
    403: { description: 'FORBIDDEN' },
    404: { description: 'NOT FOUND' },
  },
})

export const getResultsResultFileIdIndexRoute = createRoute({
  method: 'get',
  path: '/results/{result_file_id}/',
  tags: ['results'],
  summary: 'Get the result from image processing',
  description: 'This GET-Method returns the URL where the result can downloaded from.',
  operationId: 'results_read',
  request: {
    params: z.object({
      result_file_id: z
        .string()
        .openapi({
          param: {
            description: 'Id of the result_file for which the result_file_url is generated.',
            in: 'path',
            name: 'result_file_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ResultResponseSchema } } },
    400: { description: 'BAD REQUEST' },
    403: { description: 'FORBIDDEN' },
  },
})

export const postUploadsIndexRoute = createRoute({
  method: 'post',
  path: '/uploads/',
  tags: ['uploads'],
  summary: 'Upload a new image',
  description: 'This POST-Method uploads a new file on the server.',
  operationId: 'uploads_create',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'File which should be uploaded. Supported file types are: JPEG and PNG',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: FileResponseSchema } } },
    400: { description: 'BAD REQUEST' },
  },
})
