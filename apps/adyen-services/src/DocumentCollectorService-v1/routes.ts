import { createRoute, z } from '@hono/zod-openapi'

const InvalidFieldSchema = z
  .object({
    message: z.string().openapi({ description: 'Description of the validation error.' }),
    name: z.string().openapi({ description: 'The field that has an invalid value.' }),
    value: z.string().openapi({ description: 'The invalid value.' }),
  })
  .openapi({ required: ['message', 'name', 'value'] })
  .openapi('InvalidField')

const DefaultErrorResponseEntitySchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
      }),
    errorCode: z.string().exactOptional().openapi({ description: 'Unique business error code.' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URI that identifies the specific occurrence of the problem if applicable.',
      }),
    invalidFields: z
      .array(InvalidFieldSchema)
      .exactOptional()
      .openapi({ description: 'Array of fields with validation errors when applicable.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique reference for the request.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP status code.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short, human-readable summary of the problem type.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI that identifies the validation error type. It points to human-readable documentation for the problem type.',
      }),
  })
  .openapi({
    description: 'Standardized error response following RFC-7807 format',
    externalDocs: { url: 'https://www.rfc-editor.org/rfc/rfc7807' },
    required: [],
  })
  .openapi('DefaultErrorResponseEntity')

const DocumentContextSchema = z
  .literal('paCbInvoice')
  .openapi({
    description:
      'The document context indicating the type of document being uploaded.\n Possible values: **paCbInvoice**.',
  })
  .openapi('DocumentContext')

const DocumentUploadRequestSchema = z
  .object({
    context: DocumentContextSchema.openapi({
      description:
        'The document context indicating the type of document being uploaded.\n Possible values: **paCbInvoice**.',
    }),
    file: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'The PDF file to upload. Filename must be {pspReference}.pdf',
      }),
    merchantAccount: z
      .string()
      .regex(/^[a-zA-Z0-9_]*$/)
      .min(1)
      .max(255)
      .openapi({
        description: 'The merchant account that the document belongs to.',
        example: 'YourMerchantAccount',
      }),
  })
  .openapi({ required: ['context', 'file', 'merchantAccount'] })
  .openapi('DocumentUploadRequest')

const DocumentUploadResponseSchema = z
  .object({
    context: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The document context indicating the type of document.',
        example: 'paCbInvoice',
      }),
    fileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the uploaded file.', example: 'QRMJC25GDZRKDM92.pdf' }),
    merchantAccount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The merchant account that the document belongs to.',
        example: 'YourMerchantAccount',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The PSP reference extracted from the filename.',
        example: 'QRMJC25GDZRKDM92',
      }),
  })
  .openapi({ description: 'The uploaded document resource', required: [] })
  .openapi('DocumentUploadResponse')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postCrossBorderInvoicesRoute = createRoute({
  method: 'post',
  path: '/crossBorderInvoices',
  tags: ['Documents'],
  summary: 'Upload a document',
  description: 'Uploads a document for a merchant account.',
  operationId: 'post-crossBorderInvoices',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: DocumentUploadRequestSchema,
          examples: {
            'upload-document': {
              summary: 'Upload a cross-border invoice document',
              description: 'upload-document',
              value: {
                file: '(binary PDF named {pspReference}.pdf)',
                context: 'paCbInvoice',
                merchantAccount: 'YourMerchantAccount',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Document uploaded successfully.',
      content: {
        'application/json': {
          schema: DocumentUploadResponseSchema,
          examples: {
            'upload-document-201': {
              summary: 'Document uploaded successfully',
              description: 'upload-document-201',
              value: {
                pspReference: 'QRMJC25GDZRKDM92',
                merchantAccount: 'YourMerchantAccount',
                context: 'paCbInvoice',
                fileName: 'QRMJC25GDZRKDM92.pdf',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'upload-document-400': {
              summary: 'Bad request — malformed multipart request',
              description: 'upload-document-400',
              value: {
                type: 'https://docs.adyen.com/errors/invalid-request',
                title: 'Bad Request',
                status: 400,
                errorCode: '00_400',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'upload-document-401': {
              summary: 'Unauthorized — missing or invalid credentials',
              description: 'upload-document-401',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                title: 'Unauthorized',
                status: 401,
                errorCode: '00_401',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'upload-document-403': {
              summary: 'Forbidden — insufficient permissions',
              description: 'upload-document-403',
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                title: 'Forbidden',
                detail: 'Caller does not have access to the requested account',
                status: 403,
                errorCode: '00_403',
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity. The request contains invalid fields.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'upload-document-422': {
              summary: 'Unprocessable entity — validation failed',
              description: 'upload-document-422',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                errorCode: '29_001',
                invalidFields: [
                  {
                    name: 'file',
                    value: '',
                    message: 'File must be a PDF named {pspReference}.pdf',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'upload-document-500': {
              summary: 'Internal server error',
              description: 'upload-document-500',
              value: {
                type: 'https://docs.adyen.com/errors/internal-server-error',
                title: 'Internal Server Error',
                status: 500,
                errorCode: '00_500',
              },
            },
          },
        },
      },
    },
  },
  security: [{ ApiKeyAuth: [] }, { BasicAuth: [] }],
})
