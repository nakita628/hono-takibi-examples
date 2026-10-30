import { createRoute, z } from '@hono/zod-openapi'

type ContentDispositionType = {
  creationDate: string
  fileName: string
  modificationDate: string
  parameters: { [key: string]: string }
  readDate: string
  size: number
  type: string
}

const ContentDispositionSchema: z.ZodType<ContentDispositionType> = z
  .object({
    creationDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the file was created, formatted as a date-time string.',
        example: null,
      }),
    fileName: z
      .string()
      .openapi({
        description:
          "The name of the file as a string, indicating the file's name in the content disposition.",
        example: null,
      }),
    modificationDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the file was last modified, formatted as a date-time string.',
        example: null,
      }),
    parameters: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
        example: null,
      }),
    readDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the file was last read, formatted as a date-time string.',
        example: null,
      }),
    size: z
      .int32()
      .openapi({
        description: "The size of the file as an integer, representing the file's size in bytes.",
        example: null,
      }),
    type: z
      .string()
      .openapi({
        description:
          'The type of content disposition, typically a string indicating how the content should be handled.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'creationDate',
      'fileName',
      'modificationDate',
      'parameters',
      'readDate',
      'size',
      'type',
    ],
    example: null,
  })
  .openapi('ContentDisposition')

type MediaTypeType = {
  parameters: { [key: string]: string }
  subtype: string
  type: string
  wildcardSubtype: boolean
  wildcardType: boolean
}

const MediaTypeSchema: z.ZodType<MediaTypeType> = z
  .object({
    parameters: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional parameters for the media type, where each key-value pair is a string.',
        example: null,
      }),
    subtype: z
      .string()
      .openapi({
        description: 'The specific subtype of the media, represented as a string.',
        example: null,
      }),
    type: z
      .string()
      .openapi({
        description: 'The primary type of the media, represented as a string.',
        example: null,
      }),
    wildcardSubtype: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the media subtype is a wildcard.',
        example: null,
      }),
    wildcardType: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the media type is a wildcard.',
        example: null,
      }),
  })
  .openapi({
    required: ['parameters', 'subtype', 'type', 'wildcardSubtype', 'wildcardType'],
    example: null,
  })
  .openapi('MediaType')

type ParameterizedHeaderType = { parameters: { [key: string]: string }; value: string }

const ParameterizedHeaderSchema: z.ZodType<ParameterizedHeaderType> = z
  .object({
    parameters: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          "An object containing additional parameters for the header, where each key is a parameter name and each value is a string representing the parameter's value.",
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'A string representing the main value of the header.',
        example: null,
      }),
  })
  .openapi({ required: ['parameters', 'value'], example: null })
  .openapi('ParameterizedHeader')

const MultiPartSchema: z.ZodType<MultiPartType> = z
  .lazy(() =>
    z
      .object({
        bodyParts: z
          .array(BodyPartSchema)
          .openapi({
            description:
              'An array of BodyPart objects, each representing a distinct part of the multipart entity.',
            example: null,
          }),
        contentDisposition: ContentDispositionSchema,
        entity: z
          .object({})
          .openapi({
            description:
              'An object that holds the main content or payload of the multipart entity.',
            example: null,
          }),
        headers: z
          .record(
            z.string(),
            z.array(z.string().openapi({ example: null })).openapi({ example: null }),
          )
          .openapi({
            description:
              'An object containing a map of header names to their respective values, where each value is an array of strings.',
            example: null,
          }),
        mediaType: MediaTypeSchema,
        messageBodyWorkers: z
          .object({})
          .openapi({
            description:
              'An object that may contain workers for processing the message body, though its specific properties are not detailed.',
            example: null,
          }),
        parameterizedHeaders: z
          .record(z.string(), z.array(ParameterizedHeaderSchema).openapi({ example: null }))
          .openapi({
            description:
              'An object containing a map of header names to arrays of ParameterizedHeader objects, which include additional parameters for each header.',
            example: null,
          }),
        parent: MultiPartSchema,
        providers: z
          .object({})
          .openapi({
            description:
              'An object that may contain providers related to the multipart entity, though its specific properties are not detailed.',
            example: null,
          }),
      })
      .openapi({
        required: [
          'bodyParts',
          'contentDisposition',
          'entity',
          'headers',
          'mediaType',
          'messageBodyWorkers',
          'parameterizedHeaders',
          'parent',
          'providers',
        ],
        example: null,
      }),
  )
  .openapi('MultiPart')

type BodyPartType = {
  contentDisposition: z.infer<typeof ContentDispositionSchema>
  entity: { [key: string]: unknown }
  headers: { [key: string]: string[] }
  mediaType: z.infer<typeof MediaTypeSchema>
  messageBodyWorkers: { [key: string]: unknown }
  parameterizedHeaders: { [key: string]: z.infer<typeof ParameterizedHeaderSchema>[] }
  parent: z.infer<typeof MultiPartSchema>
  providers: { [key: string]: unknown }
}

const BodyPartSchema: z.ZodType<BodyPartType> = z
  .lazy(() =>
    z
      .object({
        contentDisposition: ContentDispositionSchema,
        entity: z
          .object({})
          .openapi({
            description: 'An object representing the actual content or payload of the body part.',
            example: null,
          }),
        headers: z
          .record(
            z.string(),
            z.array(z.string().openapi({ example: null })).openapi({ example: null }),
          )
          .openapi({
            description:
              'An object containing the headers associated with this body part, where each header can have multiple string values.',
            example: null,
          }),
        mediaType: MediaTypeSchema,
        messageBodyWorkers: z
          .object({})
          .openapi({
            description:
              'An object representing workers that handle the processing of the message body.',
            example: null,
          }),
        parameterizedHeaders: z
          .record(z.string(), z.array(ParameterizedHeaderSchema).openapi({ example: null }))
          .openapi({
            description:
              'An object containing headers with parameters, where each header can have multiple ParameterizedHeader objects.',
            example: null,
          }),
        parent: MultiPartSchema,
        providers: z
          .object({})
          .openapi({
            description:
              'An object representing providers that supply additional handling or processing for the body part.',
            example: null,
          }),
      })
      .openapi({
        required: [
          'contentDisposition',
          'entity',
          'headers',
          'mediaType',
          'messageBodyWorkers',
          'parameterizedHeaders',
          'parent',
          'providers',
        ],
        example: null,
      }),
  )
  .openapi('BodyPart')

type MultiPartType = {
  bodyParts: z.infer<typeof BodyPartSchema>[]
  contentDisposition: z.infer<typeof ContentDispositionSchema>
  entity: { [key: string]: unknown }
  headers: { [key: string]: string[] }
  mediaType: z.infer<typeof MediaTypeSchema>
  messageBodyWorkers: { [key: string]: unknown }
  parameterizedHeaders: { [key: string]: z.infer<typeof ParameterizedHeaderSchema>[] }
  parent: MultiPartType
  providers: { [key: string]: unknown }
}

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({ required: ['message'], example: null })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const FileColumnSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'The name of the column, represented as a string.', example: null }),
    type: z
      .string()
      .openapi({
        description: 'The data type of the column, represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['name', 'type'], example: null })
  .openapi('FileColumn')

const DataSourceUpdateResponseSchema = z
  .object({
    datasourceId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The unique identifier for the data source. It is an integer formatted as int64.',
        example: null,
      }),
    datasourceName: z
      .string()
      .openapi({ description: 'The name of the data source. It is a string.', example: null }),
    previewLink: z
      .string()
      .openapi({
        description: 'A URL string that provides a preview link for the data source.',
        example: null,
      }),
  })
  .openapi({ required: ['datasourceId', 'datasourceName', 'previewLink'], example: null })
  .openapi('DataSourceUpdateResponse')

const FormDataContentDispositionSchema = z
  .object({
    creationDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the file was created, in ISO 8601 format.',
        example: null,
      }),
    fileName: z
      .string()
      .openapi({
        description:
          'A string indicating the name of the file associated with this content disposition.',
        example: null,
      }),
    modificationDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the file was last modified, in ISO 8601 format.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'A string representing the name associated with this content disposition.',
        example: null,
      }),
    parameters: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional parameters for the content disposition, with each parameter represented as a string.',
        example: null,
      }),
    readDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the file was last read, in ISO 8601 format.',
        example: null,
      }),
    size: z
      .int32()
      .openapi({
        description: 'An integer representing the size of the file in bytes.',
        example: null,
      }),
    type: z
      .string()
      .openapi({
        description: 'A string representing the type of content disposition.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'creationDate',
      'fileName',
      'modificationDate',
      'name',
      'parameters',
      'readDate',
      'size',
      'type',
    ],
    example: null,
  })
  .openapi('FormDataContentDisposition')

const FormDataBodyPartSchema = z
  .object({
    contentDisposition: ContentDispositionSchema,
    entity: z
      .object({})
      .openapi({
        description:
          'An object representing the entity of the form data part, which contains the actual data being submitted.',
        example: null,
      }),
    formDataContentDisposition: FormDataContentDispositionSchema,
    headers: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing the headers associated with this form data part, where each header can have multiple string values.',
        example: null,
      }),
    mediaType: MediaTypeSchema,
    messageBodyWorkers: z
      .object({})
      .openapi({
        description:
          'An object representing the message body workers, which are responsible for processing the body of the message.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description:
          'The name of the form data part, typically used to identify the part within the multipart request.',
        example: null,
      }),
    parameterizedHeaders: z
      .record(z.string(), z.array(ParameterizedHeaderSchema).openapi({ example: null }))
      .openapi({
        description:
          'An object containing parameterized headers, where each header can have multiple values represented as ParameterizedHeader objects.',
        example: null,
      }),
    parent: MultiPartSchema,
    providers: z
      .object({})
      .openapi({
        description: 'An object representing the providers associated with this form data part.',
        example: null,
      }),
    simple: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the form data part is simple, typically meaning it does not contain complex nested structures.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description:
          'The string value of the form data part, representing the actual data being submitted as a string.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'contentDisposition',
      'entity',
      'formDataContentDisposition',
      'headers',
      'mediaType',
      'messageBodyWorkers',
      'name',
      'parameterizedHeaders',
      'parent',
      'providers',
      'simple',
      'value',
    ],
    example: null,
  })
  .openapi('FormDataBodyPart')

const FormDataMultiPartSchema = z
  .object({
    bodyParts: z
      .array(BodyPartSchema)
      .openapi({
        description:
          'An array of BodyPart objects, each representing a part of the multipart form data.',
        example: null,
      }),
    contentDisposition: ContentDispositionSchema,
    entity: z
      .object({})
      .openapi({
        description:
          'An object representing the entity of the multipart form data, containing the actual data to be processed.',
        example: null,
      }),
    fields: z
      .record(z.string(), z.array(FormDataBodyPartSchema).openapi({ example: null }))
      .openapi({
        description:
          'An object containing fields of the multipart form data, where each field can have multiple FormDataBodyPart items.',
        example: null,
      }),
    headers: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing headers associated with the multipart form data, where each header can have multiple string values.',
        example: null,
      }),
    mediaType: MediaTypeSchema,
    messageBodyWorkers: z
      .object({})
      .openapi({
        description:
          'An object representing workers that process the message body of the multipart form data.',
        example: null,
      }),
    parameterizedHeaders: z
      .record(z.string(), z.array(ParameterizedHeaderSchema).openapi({ example: null }))
      .openapi({
        description:
          'An object containing parameterized headers, where each header can have multiple ParameterizedHeader items.',
        example: null,
      }),
    parent: MultiPartSchema,
    providers: z
      .object({})
      .openapi({
        description: 'An object representing providers associated with the multipart form data.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'bodyParts',
      'contentDisposition',
      'entity',
      'fields',
      'headers',
      'mediaType',
      'messageBodyWorkers',
      'parameterizedHeaders',
      'parent',
      'providers',
    ],
    example: null,
  })
  .openapi('FormDataMultiPart')

const DataSourceGetResponseSchema = z
  .object({
    columns: z
      .array(FileColumnSchema)
      .openapi({
        description: 'An array of FileColumn objects representing the columns in the data source.',
        example: null,
      }),
    createdAt: z
      .string()
      .openapi({
        description: 'The creation date and time of the data source, represented as a string.',
        example: null,
      }),
    datasourceId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The unique identifier for the data source, represented as a 64-bit integer.',
        example: null,
      }),
    datasourceName: z
      .string()
      .openapi({
        description: 'The name of the data source, represented as a string.',
        example: null,
      }),
    datasourceType: z
      .literal('FILE')
      .openapi({
        description: "The type of the data source, which is a string with a valid value of 'FILE'.",
        example: null,
      }),
    lastIngestionStatus: z
      .enum(['FAILED', 'IN_PROGRESS', 'SUCCESSFUL'])
      .openapi({
        description:
          "The status of the last data ingestion process, represented as a string. Valid values include 'SUCCESSFUL', 'IN_PROGRESS', and 'FAILED'.",
        example: null,
      }),
  })
  .openapi({
    required: [
      'columns',
      'createdAt',
      'datasourceId',
      'datasourceName',
      'datasourceType',
      'lastIngestionStatus',
    ],
    example: null,
  })
  .openapi('DataSourceGetResponse')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {
        'data_integration.data_source.file.read':
          'Read access to data_integration file data sources.',
        'data_integration.data_source.file.write':
          'Write access to data_integration file data sources.',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

export const postDataStudioDataSource202609Route = createRoute({
  method: 'post',
  path: '/data-studio/data-source/2026-09',
  tags: ['Advanced'],
  operationId: 'post-/data-studio/data-source/2026-09_/data-studio/data-source/2026-09',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              bodyParts: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        contentDisposition: z
                          .object({
                            creationDate: z.iso
                              .datetime({ offset: true })
                              .openapi({
                                description:
                                  'The date and time when the file was created, formatted as a date-time string.',
                                example: null,
                              }),
                            fileName: z
                              .string()
                              .openapi({
                                description:
                                  "The name of the file as a string, indicating the file's name in the content disposition.",
                                example: null,
                              }),
                            modificationDate: z.iso
                              .datetime({ offset: true })
                              .openapi({
                                description:
                                  'The date and time when the file was last modified, formatted as a date-time string.',
                                example: null,
                              }),
                            parameters: z
                              .record(z.string(), z.string().openapi({ example: null }))
                              .openapi({
                                description:
                                  'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                example: null,
                              }),
                            readDate: z.iso
                              .datetime({ offset: true })
                              .openapi({
                                description:
                                  'The date and time when the file was last read, formatted as a date-time string.',
                                example: null,
                              }),
                            size: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .openapi({
                                description:
                                  "The size of the file as an integer, representing the file's size in bytes.",
                                example: null,
                              }),
                            type: z
                              .string()
                              .openapi({
                                description:
                                  'The type of content disposition, typically a string indicating how the content should be handled.',
                                example: null,
                              }),
                          })
                          .openapi({
                            required: [
                              'creationDate',
                              'fileName',
                              'modificationDate',
                              'parameters',
                              'readDate',
                              'size',
                              'type',
                            ],
                            example: null,
                          }),
                        entity: z
                          .object({})
                          .openapi({
                            description:
                              'An object representing the actual content or payload of the body part.',
                            example: null,
                          }),
                        headers: z
                          .record(
                            z.string(),
                            z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(z.string().openapi({ example: null })),
                              )
                              .openapi({ example: null }),
                          )
                          .openapi({
                            description:
                              'An object containing the headers associated with this body part, where each header can have multiple string values.',
                            example: null,
                          }),
                        mediaType: z
                          .object({
                            parameters: z
                              .record(z.string(), z.string().openapi({ example: null }))
                              .openapi({
                                description:
                                  'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                example: null,
                              }),
                            subtype: z
                              .string()
                              .openapi({
                                description:
                                  'The specific subtype of the media, represented as a string.',
                                example: null,
                              }),
                            type: z
                              .string()
                              .openapi({
                                description:
                                  'The primary type of the media, represented as a string.',
                                example: null,
                              }),
                            wildcardSubtype: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .openapi({
                                description:
                                  'A boolean indicating whether the media subtype is a wildcard.',
                                example: null,
                              }),
                            wildcardType: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .openapi({
                                description:
                                  'A boolean indicating whether the media type is a wildcard.',
                                example: null,
                              }),
                          })
                          .openapi({
                            required: [
                              'parameters',
                              'subtype',
                              'type',
                              'wildcardSubtype',
                              'wildcardType',
                            ],
                            example: null,
                          }),
                        messageBodyWorkers: z
                          .object({})
                          .openapi({
                            description:
                              'An object representing workers that handle the processing of the message body.',
                            example: null,
                          }),
                        parameterizedHeaders: z
                          .record(
                            z.string(),
                            z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ParameterizedHeaderSchema),
                              )
                              .openapi({ example: null }),
                          )
                          .openapi({
                            description:
                              'An object containing headers with parameters, where each header can have multiple ParameterizedHeader objects.',
                            example: null,
                          }),
                        parent: z
                          .object({
                            bodyParts: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(BodyPartSchema),
                              )
                              .openapi({
                                description:
                                  'An array of BodyPart objects, each representing a distinct part of the multipart entity.',
                                example: null,
                              }),
                            contentDisposition: z
                              .object({
                                creationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was created, formatted as a date-time string.',
                                    example: null,
                                  }),
                                fileName: z
                                  .string()
                                  .openapi({
                                    description:
                                      "The name of the file as a string, indicating the file's name in the content disposition.",
                                    example: null,
                                  }),
                                modificationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last modified, formatted as a date-time string.',
                                    example: null,
                                  }),
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                    example: null,
                                  }),
                                readDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last read, formatted as a date-time string.',
                                    example: null,
                                  }),
                                size: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .openapi({
                                    description:
                                      "The size of the file as an integer, representing the file's size in bytes.",
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The type of content disposition, typically a string indicating how the content should be handled.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'creationDate',
                                  'fileName',
                                  'modificationDate',
                                  'parameters',
                                  'readDate',
                                  'size',
                                  'type',
                                ],
                                example: null,
                              }),
                            entity: z
                              .object({})
                              .openapi({
                                description:
                                  'An object that holds the main content or payload of the multipart entity.',
                                example: null,
                              }),
                            headers: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string().openapi({ example: null })),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing a map of header names to their respective values, where each value is an array of strings.',
                                example: null,
                              }),
                            mediaType: z
                              .object({
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                    example: null,
                                  }),
                                subtype: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The specific subtype of the media, represented as a string.',
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The primary type of the media, represented as a string.',
                                    example: null,
                                  }),
                                wildcardSubtype: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media subtype is a wildcard.',
                                    example: null,
                                  }),
                                wildcardType: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media type is a wildcard.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'parameters',
                                  'subtype',
                                  'type',
                                  'wildcardSubtype',
                                  'wildcardType',
                                ],
                                example: null,
                              }),
                            messageBodyWorkers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object that may contain workers for processing the message body, though its specific properties are not detailed.',
                                example: null,
                              }),
                            parameterizedHeaders: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(ParameterizedHeaderSchema),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing a map of header names to arrays of ParameterizedHeader objects, which include additional parameters for each header.',
                                example: null,
                              }),
                            parent: MultiPartSchema,
                            providers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object that may contain providers related to the multipart entity, though its specific properties are not detailed.',
                                example: null,
                              }),
                          })
                          .openapi({
                            required: [
                              'bodyParts',
                              'contentDisposition',
                              'entity',
                              'headers',
                              'mediaType',
                              'messageBodyWorkers',
                              'parameterizedHeaders',
                              'parent',
                              'providers',
                            ],
                            example: null,
                          }),
                        providers: z
                          .object({})
                          .openapi({
                            description:
                              'An object representing providers that supply additional handling or processing for the body part.',
                            example: null,
                          }),
                      })
                      .openapi({
                        required: [
                          'contentDisposition',
                          'entity',
                          'headers',
                          'mediaType',
                          'messageBodyWorkers',
                          'parameterizedHeaders',
                          'parent',
                          'providers',
                        ],
                        example: null,
                      }),
                  ),
                )
                .openapi({
                  description:
                    'An array of BodyPart objects, each representing a part of the multipart form data.',
                  example: null,
                }),
              contentDisposition: z
                .object({
                  creationDate: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description:
                        'The date and time when the file was created, formatted as a date-time string.',
                      example: null,
                    }),
                  fileName: z
                    .string()
                    .openapi({
                      description:
                        "The name of the file as a string, indicating the file's name in the content disposition.",
                      example: null,
                    }),
                  modificationDate: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description:
                        'The date and time when the file was last modified, formatted as a date-time string.',
                      example: null,
                    }),
                  parameters: z
                    .record(z.string(), z.string().openapi({ example: null }))
                    .openapi({
                      description:
                        'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                      example: null,
                    }),
                  readDate: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description:
                        'The date and time when the file was last read, formatted as a date-time string.',
                      example: null,
                    }),
                  size: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .openapi({
                      description:
                        "The size of the file as an integer, representing the file's size in bytes.",
                      example: null,
                    }),
                  type: z
                    .string()
                    .openapi({
                      description:
                        'The type of content disposition, typically a string indicating how the content should be handled.',
                      example: null,
                    }),
                })
                .openapi({
                  required: [
                    'creationDate',
                    'fileName',
                    'modificationDate',
                    'parameters',
                    'readDate',
                    'size',
                    'type',
                  ],
                  example: null,
                }),
              entity: z
                .object({})
                .openapi({
                  description:
                    'An object representing the entity of the multipart form data, containing the actual data to be processed.',
                  example: null,
                }),
              fields: z
                .record(
                  z.string(),
                  z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            contentDisposition: z
                              .object({
                                creationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was created, formatted as a date-time string.',
                                    example: null,
                                  }),
                                fileName: z
                                  .string()
                                  .openapi({
                                    description:
                                      "The name of the file as a string, indicating the file's name in the content disposition.",
                                    example: null,
                                  }),
                                modificationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last modified, formatted as a date-time string.',
                                    example: null,
                                  }),
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                    example: null,
                                  }),
                                readDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last read, formatted as a date-time string.',
                                    example: null,
                                  }),
                                size: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .openapi({
                                    description:
                                      "The size of the file as an integer, representing the file's size in bytes.",
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The type of content disposition, typically a string indicating how the content should be handled.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'creationDate',
                                  'fileName',
                                  'modificationDate',
                                  'parameters',
                                  'readDate',
                                  'size',
                                  'type',
                                ],
                                example: null,
                              }),
                            entity: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing the entity of the form data part, which contains the actual data being submitted.',
                                example: null,
                              }),
                            formDataContentDisposition: z
                              .object({
                                creationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was created, in ISO 8601 format.',
                                    example: null,
                                  }),
                                fileName: z
                                  .string()
                                  .openapi({
                                    description:
                                      'A string indicating the name of the file associated with this content disposition.',
                                    example: null,
                                  }),
                                modificationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last modified, in ISO 8601 format.',
                                    example: null,
                                  }),
                                name: z
                                  .string()
                                  .openapi({
                                    description:
                                      'A string representing the name associated with this content disposition.',
                                    example: null,
                                  }),
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the content disposition, with each parameter represented as a string.',
                                    example: null,
                                  }),
                                readDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last read, in ISO 8601 format.',
                                    example: null,
                                  }),
                                size: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .openapi({
                                    description:
                                      'An integer representing the size of the file in bytes.',
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'A string representing the type of content disposition.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'creationDate',
                                  'fileName',
                                  'modificationDate',
                                  'name',
                                  'parameters',
                                  'readDate',
                                  'size',
                                  'type',
                                ],
                                example: null,
                              }),
                            headers: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string().openapi({ example: null })),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing the headers associated with this form data part, where each header can have multiple string values.',
                                example: null,
                              }),
                            mediaType: z
                              .object({
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                    example: null,
                                  }),
                                subtype: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The specific subtype of the media, represented as a string.',
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The primary type of the media, represented as a string.',
                                    example: null,
                                  }),
                                wildcardSubtype: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media subtype is a wildcard.',
                                    example: null,
                                  }),
                                wildcardType: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media type is a wildcard.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'parameters',
                                  'subtype',
                                  'type',
                                  'wildcardSubtype',
                                  'wildcardType',
                                ],
                                example: null,
                              }),
                            messageBodyWorkers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing the message body workers, which are responsible for processing the body of the message.',
                                example: null,
                              }),
                            name: z
                              .string()
                              .openapi({
                                description:
                                  'The name of the form data part, typically used to identify the part within the multipart request.',
                                example: null,
                              }),
                            parameterizedHeaders: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(ParameterizedHeaderSchema),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing parameterized headers, where each header can have multiple values represented as ParameterizedHeader objects.',
                                example: null,
                              }),
                            parent: z
                              .object({
                                bodyParts: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          contentDisposition: z
                                            .object({
                                              creationDate: z.iso
                                                .datetime({ offset: true })
                                                .openapi({
                                                  description:
                                                    'The date and time when the file was created, formatted as a date-time string.',
                                                  example: null,
                                                }),
                                              fileName: z
                                                .string()
                                                .openapi({
                                                  description:
                                                    "The name of the file as a string, indicating the file's name in the content disposition.",
                                                  example: null,
                                                }),
                                              modificationDate: z.iso
                                                .datetime({ offset: true })
                                                .openapi({
                                                  description:
                                                    'The date and time when the file was last modified, formatted as a date-time string.',
                                                  example: null,
                                                }),
                                              parameters: z
                                                .record(
                                                  z.string(),
                                                  z.string().openapi({ example: null }),
                                                )
                                                .openapi({
                                                  description:
                                                    'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                                  example: null,
                                                }),
                                              readDate: z.iso
                                                .datetime({ offset: true })
                                                .openapi({
                                                  description:
                                                    'The date and time when the file was last read, formatted as a date-time string.',
                                                  example: null,
                                                }),
                                              size: z
                                                .preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.int32(),
                                                )
                                                .openapi({
                                                  description:
                                                    "The size of the file as an integer, representing the file's size in bytes.",
                                                  example: null,
                                                }),
                                              type: z
                                                .string()
                                                .openapi({
                                                  description:
                                                    'The type of content disposition, typically a string indicating how the content should be handled.',
                                                  example: null,
                                                }),
                                            })
                                            .openapi({
                                              required: [
                                                'creationDate',
                                                'fileName',
                                                'modificationDate',
                                                'parameters',
                                                'readDate',
                                                'size',
                                                'type',
                                              ],
                                              example: null,
                                            }),
                                          entity: z
                                            .object({})
                                            .openapi({
                                              description:
                                                'An object representing the actual content or payload of the body part.',
                                              example: null,
                                            }),
                                          headers: z
                                            .record(
                                              z.string(),
                                              z
                                                .preprocess(
                                                  (val) =>
                                                    val === undefined || Array.isArray(val)
                                                      ? val
                                                      : [val],
                                                  z.array(z.string().openapi({ example: null })),
                                                )
                                                .openapi({ example: null }),
                                            )
                                            .openapi({
                                              description:
                                                'An object containing the headers associated with this body part, where each header can have multiple string values.',
                                              example: null,
                                            }),
                                          mediaType: z
                                            .object({
                                              parameters: z
                                                .record(
                                                  z.string(),
                                                  z.string().openapi({ example: null }),
                                                )
                                                .openapi({
                                                  description:
                                                    'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                                  example: null,
                                                }),
                                              subtype: z
                                                .string()
                                                .openapi({
                                                  description:
                                                    'The specific subtype of the media, represented as a string.',
                                                  example: null,
                                                }),
                                              type: z
                                                .string()
                                                .openapi({
                                                  description:
                                                    'The primary type of the media, represented as a string.',
                                                  example: null,
                                                }),
                                              wildcardSubtype: z
                                                .preprocess(
                                                  ((read) => (val: unknown) => {
                                                    const result = read.safeParse(val)
                                                    return result.success ? result.data : val
                                                  })(z.stringbool()),
                                                  z.boolean(),
                                                )
                                                .openapi({
                                                  description:
                                                    'A boolean indicating whether the media subtype is a wildcard.',
                                                  example: null,
                                                }),
                                              wildcardType: z
                                                .preprocess(
                                                  ((read) => (val: unknown) => {
                                                    const result = read.safeParse(val)
                                                    return result.success ? result.data : val
                                                  })(z.stringbool()),
                                                  z.boolean(),
                                                )
                                                .openapi({
                                                  description:
                                                    'A boolean indicating whether the media type is a wildcard.',
                                                  example: null,
                                                }),
                                            })
                                            .openapi({
                                              required: [
                                                'parameters',
                                                'subtype',
                                                'type',
                                                'wildcardSubtype',
                                                'wildcardType',
                                              ],
                                              example: null,
                                            }),
                                          messageBodyWorkers: z
                                            .object({})
                                            .openapi({
                                              description:
                                                'An object representing workers that handle the processing of the message body.',
                                              example: null,
                                            }),
                                          parameterizedHeaders: z
                                            .record(
                                              z.string(),
                                              z
                                                .preprocess(
                                                  (val) =>
                                                    val === undefined || Array.isArray(val)
                                                      ? val
                                                      : [val],
                                                  z.array(ParameterizedHeaderSchema),
                                                )
                                                .openapi({ example: null }),
                                            )
                                            .openapi({
                                              description:
                                                'An object containing headers with parameters, where each header can have multiple ParameterizedHeader objects.',
                                              example: null,
                                            }),
                                          parent: MultiPartSchema,
                                          providers: z
                                            .object({})
                                            .openapi({
                                              description:
                                                'An object representing providers that supply additional handling or processing for the body part.',
                                              example: null,
                                            }),
                                        })
                                        .openapi({
                                          required: [
                                            'contentDisposition',
                                            'entity',
                                            'headers',
                                            'mediaType',
                                            'messageBodyWorkers',
                                            'parameterizedHeaders',
                                            'parent',
                                            'providers',
                                          ],
                                          example: null,
                                        }),
                                    ),
                                  )
                                  .openapi({
                                    description:
                                      'An array of BodyPart objects, each representing a distinct part of the multipart entity.',
                                    example: null,
                                  }),
                                contentDisposition: z
                                  .object({
                                    creationDate: z.iso
                                      .datetime({ offset: true })
                                      .openapi({
                                        description:
                                          'The date and time when the file was created, formatted as a date-time string.',
                                        example: null,
                                      }),
                                    fileName: z
                                      .string()
                                      .openapi({
                                        description:
                                          "The name of the file as a string, indicating the file's name in the content disposition.",
                                        example: null,
                                      }),
                                    modificationDate: z.iso
                                      .datetime({ offset: true })
                                      .openapi({
                                        description:
                                          'The date and time when the file was last modified, formatted as a date-time string.',
                                        example: null,
                                      }),
                                    parameters: z
                                      .record(z.string(), z.string().openapi({ example: null }))
                                      .openapi({
                                        description:
                                          'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                        example: null,
                                      }),
                                    readDate: z.iso
                                      .datetime({ offset: true })
                                      .openapi({
                                        description:
                                          'The date and time when the file was last read, formatted as a date-time string.',
                                        example: null,
                                      }),
                                    size: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.int32(),
                                      )
                                      .openapi({
                                        description:
                                          "The size of the file as an integer, representing the file's size in bytes.",
                                        example: null,
                                      }),
                                    type: z
                                      .string()
                                      .openapi({
                                        description:
                                          'The type of content disposition, typically a string indicating how the content should be handled.',
                                        example: null,
                                      }),
                                  })
                                  .openapi({
                                    required: [
                                      'creationDate',
                                      'fileName',
                                      'modificationDate',
                                      'parameters',
                                      'readDate',
                                      'size',
                                      'type',
                                    ],
                                    example: null,
                                  }),
                                entity: z
                                  .object({})
                                  .openapi({
                                    description:
                                      'An object that holds the main content or payload of the multipart entity.',
                                    example: null,
                                  }),
                                headers: z
                                  .record(
                                    z.string(),
                                    z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(z.string().openapi({ example: null })),
                                      )
                                      .openapi({ example: null }),
                                  )
                                  .openapi({
                                    description:
                                      'An object containing a map of header names to their respective values, where each value is an array of strings.',
                                    example: null,
                                  }),
                                mediaType: z
                                  .object({
                                    parameters: z
                                      .record(z.string(), z.string().openapi({ example: null }))
                                      .openapi({
                                        description:
                                          'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                        example: null,
                                      }),
                                    subtype: z
                                      .string()
                                      .openapi({
                                        description:
                                          'The specific subtype of the media, represented as a string.',
                                        example: null,
                                      }),
                                    type: z
                                      .string()
                                      .openapi({
                                        description:
                                          'The primary type of the media, represented as a string.',
                                        example: null,
                                      }),
                                    wildcardSubtype: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .openapi({
                                        description:
                                          'A boolean indicating whether the media subtype is a wildcard.',
                                        example: null,
                                      }),
                                    wildcardType: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .openapi({
                                        description:
                                          'A boolean indicating whether the media type is a wildcard.',
                                        example: null,
                                      }),
                                  })
                                  .openapi({
                                    required: [
                                      'parameters',
                                      'subtype',
                                      'type',
                                      'wildcardSubtype',
                                      'wildcardType',
                                    ],
                                    example: null,
                                  }),
                                messageBodyWorkers: z
                                  .object({})
                                  .openapi({
                                    description:
                                      'An object that may contain workers for processing the message body, though its specific properties are not detailed.',
                                    example: null,
                                  }),
                                parameterizedHeaders: z
                                  .record(
                                    z.string(),
                                    z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(ParameterizedHeaderSchema),
                                      )
                                      .openapi({ example: null }),
                                  )
                                  .openapi({
                                    description:
                                      'An object containing a map of header names to arrays of ParameterizedHeader objects, which include additional parameters for each header.',
                                    example: null,
                                  }),
                                parent: MultiPartSchema,
                                providers: z
                                  .object({})
                                  .openapi({
                                    description:
                                      'An object that may contain providers related to the multipart entity, though its specific properties are not detailed.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'bodyParts',
                                  'contentDisposition',
                                  'entity',
                                  'headers',
                                  'mediaType',
                                  'messageBodyWorkers',
                                  'parameterizedHeaders',
                                  'parent',
                                  'providers',
                                ],
                                example: null,
                              }),
                            providers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing the providers associated with this form data part.',
                                example: null,
                              }),
                            simple: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .openapi({
                                description:
                                  'A boolean indicating whether the form data part is simple, typically meaning it does not contain complex nested structures.',
                                example: null,
                              }),
                            value: z
                              .string()
                              .openapi({
                                description:
                                  'The string value of the form data part, representing the actual data being submitted as a string.',
                                example: null,
                              }),
                          })
                          .openapi({
                            required: [
                              'contentDisposition',
                              'entity',
                              'formDataContentDisposition',
                              'headers',
                              'mediaType',
                              'messageBodyWorkers',
                              'name',
                              'parameterizedHeaders',
                              'parent',
                              'providers',
                              'simple',
                              'value',
                            ],
                            example: null,
                          }),
                      ),
                    )
                    .openapi({ example: null }),
                )
                .openapi({
                  description:
                    'An object containing fields of the multipart form data, where each field can have multiple FormDataBodyPart items.',
                  example: null,
                }),
              headers: z
                .record(
                  z.string(),
                  z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string().openapi({ example: null })),
                    )
                    .openapi({ example: null }),
                )
                .openapi({
                  description:
                    'An object containing headers associated with the multipart form data, where each header can have multiple string values.',
                  example: null,
                }),
              mediaType: z
                .object({
                  parameters: z
                    .record(z.string(), z.string().openapi({ example: null }))
                    .openapi({
                      description:
                        'An object containing additional parameters for the media type, where each key-value pair is a string.',
                      example: null,
                    }),
                  subtype: z
                    .string()
                    .openapi({
                      description: 'The specific subtype of the media, represented as a string.',
                      example: null,
                    }),
                  type: z
                    .string()
                    .openapi({
                      description: 'The primary type of the media, represented as a string.',
                      example: null,
                    }),
                  wildcardSubtype: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .openapi({
                      description: 'A boolean indicating whether the media subtype is a wildcard.',
                      example: null,
                    }),
                  wildcardType: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .openapi({
                      description: 'A boolean indicating whether the media type is a wildcard.',
                      example: null,
                    }),
                })
                .openapi({
                  required: ['parameters', 'subtype', 'type', 'wildcardSubtype', 'wildcardType'],
                  example: null,
                }),
              messageBodyWorkers: z
                .object({})
                .openapi({
                  description:
                    'An object representing workers that process the message body of the multipart form data.',
                  example: null,
                }),
              parameterizedHeaders: z
                .record(
                  z.string(),
                  z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(ParameterizedHeaderSchema),
                    )
                    .openapi({ example: null }),
                )
                .openapi({
                  description:
                    'An object containing parameterized headers, where each header can have multiple ParameterizedHeader items.',
                  example: null,
                }),
              parent: z
                .object({
                  bodyParts: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            contentDisposition: z
                              .object({
                                creationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was created, formatted as a date-time string.',
                                    example: null,
                                  }),
                                fileName: z
                                  .string()
                                  .openapi({
                                    description:
                                      "The name of the file as a string, indicating the file's name in the content disposition.",
                                    example: null,
                                  }),
                                modificationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last modified, formatted as a date-time string.',
                                    example: null,
                                  }),
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                    example: null,
                                  }),
                                readDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last read, formatted as a date-time string.',
                                    example: null,
                                  }),
                                size: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .openapi({
                                    description:
                                      "The size of the file as an integer, representing the file's size in bytes.",
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The type of content disposition, typically a string indicating how the content should be handled.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'creationDate',
                                  'fileName',
                                  'modificationDate',
                                  'parameters',
                                  'readDate',
                                  'size',
                                  'type',
                                ],
                                example: null,
                              }),
                            entity: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing the actual content or payload of the body part.',
                                example: null,
                              }),
                            headers: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string().openapi({ example: null })),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing the headers associated with this body part, where each header can have multiple string values.',
                                example: null,
                              }),
                            mediaType: z
                              .object({
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                    example: null,
                                  }),
                                subtype: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The specific subtype of the media, represented as a string.',
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The primary type of the media, represented as a string.',
                                    example: null,
                                  }),
                                wildcardSubtype: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media subtype is a wildcard.',
                                    example: null,
                                  }),
                                wildcardType: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media type is a wildcard.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'parameters',
                                  'subtype',
                                  'type',
                                  'wildcardSubtype',
                                  'wildcardType',
                                ],
                                example: null,
                              }),
                            messageBodyWorkers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing workers that handle the processing of the message body.',
                                example: null,
                              }),
                            parameterizedHeaders: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(ParameterizedHeaderSchema),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing headers with parameters, where each header can have multiple ParameterizedHeader objects.',
                                example: null,
                              }),
                            parent: MultiPartSchema,
                            providers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing providers that supply additional handling or processing for the body part.',
                                example: null,
                              }),
                          })
                          .openapi({
                            required: [
                              'contentDisposition',
                              'entity',
                              'headers',
                              'mediaType',
                              'messageBodyWorkers',
                              'parameterizedHeaders',
                              'parent',
                              'providers',
                            ],
                            example: null,
                          }),
                      ),
                    )
                    .openapi({
                      description:
                        'An array of BodyPart objects, each representing a distinct part of the multipart entity.',
                      example: null,
                    }),
                  contentDisposition: z
                    .object({
                      creationDate: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The date and time when the file was created, formatted as a date-time string.',
                          example: null,
                        }),
                      fileName: z
                        .string()
                        .openapi({
                          description:
                            "The name of the file as a string, indicating the file's name in the content disposition.",
                          example: null,
                        }),
                      modificationDate: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The date and time when the file was last modified, formatted as a date-time string.',
                          example: null,
                        }),
                      parameters: z
                        .record(z.string(), z.string().openapi({ example: null }))
                        .openapi({
                          description:
                            'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                          example: null,
                        }),
                      readDate: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The date and time when the file was last read, formatted as a date-time string.',
                          example: null,
                        }),
                      size: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .openapi({
                          description:
                            "The size of the file as an integer, representing the file's size in bytes.",
                          example: null,
                        }),
                      type: z
                        .string()
                        .openapi({
                          description:
                            'The type of content disposition, typically a string indicating how the content should be handled.',
                          example: null,
                        }),
                    })
                    .openapi({
                      required: [
                        'creationDate',
                        'fileName',
                        'modificationDate',
                        'parameters',
                        'readDate',
                        'size',
                        'type',
                      ],
                      example: null,
                    }),
                  entity: z
                    .object({})
                    .openapi({
                      description:
                        'An object that holds the main content or payload of the multipart entity.',
                      example: null,
                    }),
                  headers: z
                    .record(
                      z.string(),
                      z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string().openapi({ example: null })),
                        )
                        .openapi({ example: null }),
                    )
                    .openapi({
                      description:
                        'An object containing a map of header names to their respective values, where each value is an array of strings.',
                      example: null,
                    }),
                  mediaType: z
                    .object({
                      parameters: z
                        .record(z.string(), z.string().openapi({ example: null }))
                        .openapi({
                          description:
                            'An object containing additional parameters for the media type, where each key-value pair is a string.',
                          example: null,
                        }),
                      subtype: z
                        .string()
                        .openapi({
                          description:
                            'The specific subtype of the media, represented as a string.',
                          example: null,
                        }),
                      type: z
                        .string()
                        .openapi({
                          description: 'The primary type of the media, represented as a string.',
                          example: null,
                        }),
                      wildcardSubtype: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .openapi({
                          description:
                            'A boolean indicating whether the media subtype is a wildcard.',
                          example: null,
                        }),
                      wildcardType: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .openapi({
                          description: 'A boolean indicating whether the media type is a wildcard.',
                          example: null,
                        }),
                    })
                    .openapi({
                      required: [
                        'parameters',
                        'subtype',
                        'type',
                        'wildcardSubtype',
                        'wildcardType',
                      ],
                      example: null,
                    }),
                  messageBodyWorkers: z
                    .object({})
                    .openapi({
                      description:
                        'An object that may contain workers for processing the message body, though its specific properties are not detailed.',
                      example: null,
                    }),
                  parameterizedHeaders: z
                    .record(
                      z.string(),
                      z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(ParameterizedHeaderSchema),
                        )
                        .openapi({ example: null }),
                    )
                    .openapi({
                      description:
                        'An object containing a map of header names to arrays of ParameterizedHeader objects, which include additional parameters for each header.',
                      example: null,
                    }),
                  parent: MultiPartSchema,
                  providers: z
                    .object({})
                    .openapi({
                      description:
                        'An object that may contain providers related to the multipart entity, though its specific properties are not detailed.',
                      example: null,
                    }),
                })
                .openapi({
                  required: [
                    'bodyParts',
                    'contentDisposition',
                    'entity',
                    'headers',
                    'mediaType',
                    'messageBodyWorkers',
                    'parameterizedHeaders',
                    'parent',
                    'providers',
                  ],
                  example: null,
                }),
              providers: z
                .object({})
                .openapi({
                  description:
                    'An object representing providers associated with the multipart form data.',
                  example: null,
                }),
            })
            .openapi({
              required: [
                'bodyParts',
                'contentDisposition',
                'entity',
                'fields',
                'headers',
                'mediaType',
                'messageBodyWorkers',
                'parameterizedHeaders',
                'parent',
                'providers',
              ],
              example: null,
            }),
          example: null,
        },
      },
      required: true,
    },
  },
  responses: { default: ErrorResponse },
  security: [
    { oauth2: ['data_integration.data_source.file.write'] },
    { private_apps: ['data_integration.data_source.file.write'] },
  ],
})

export const getDataStudioDataSource202609DatasourceIdRoute = createRoute({
  method: 'get',
  path: '/data-studio/data-source/2026-09/{datasourceId}',
  tags: ['Basic'],
  operationId:
    'get-/data-studio/data-source/2026-09/{datasourceId}_/data-studio/data-source/2026-09/{datasourceId}',
  request: {
    params: z.object({
      datasourceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'datasourceId',
            in: 'path',
            description: '',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: DataSourceGetResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['data_integration.data_source.file.read'] },
    { private_apps: ['data_integration.data_source.file.read'] },
  ],
})

export const putDataStudioDataSource202609DatasourceIdRoute = createRoute({
  method: 'put',
  path: '/data-studio/data-source/2026-09/{datasourceId}',
  tags: ['Basic'],
  operationId:
    'put-/data-studio/data-source/2026-09/{datasourceId}_/data-studio/data-source/2026-09/{datasourceId}',
  request: {
    params: z.object({
      datasourceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'datasourceId',
            in: 'path',
            description: '',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              bodyParts: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        contentDisposition: z
                          .object({
                            creationDate: z.iso
                              .datetime({ offset: true })
                              .openapi({
                                description:
                                  'The date and time when the file was created, formatted as a date-time string.',
                                example: null,
                              }),
                            fileName: z
                              .string()
                              .openapi({
                                description:
                                  "The name of the file as a string, indicating the file's name in the content disposition.",
                                example: null,
                              }),
                            modificationDate: z.iso
                              .datetime({ offset: true })
                              .openapi({
                                description:
                                  'The date and time when the file was last modified, formatted as a date-time string.',
                                example: null,
                              }),
                            parameters: z
                              .record(z.string(), z.string().openapi({ example: null }))
                              .openapi({
                                description:
                                  'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                example: null,
                              }),
                            readDate: z.iso
                              .datetime({ offset: true })
                              .openapi({
                                description:
                                  'The date and time when the file was last read, formatted as a date-time string.',
                                example: null,
                              }),
                            size: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .openapi({
                                description:
                                  "The size of the file as an integer, representing the file's size in bytes.",
                                example: null,
                              }),
                            type: z
                              .string()
                              .openapi({
                                description:
                                  'The type of content disposition, typically a string indicating how the content should be handled.',
                                example: null,
                              }),
                          })
                          .openapi({
                            required: [
                              'creationDate',
                              'fileName',
                              'modificationDate',
                              'parameters',
                              'readDate',
                              'size',
                              'type',
                            ],
                            example: null,
                          }),
                        entity: z
                          .object({})
                          .openapi({
                            description:
                              'An object representing the actual content or payload of the body part.',
                            example: null,
                          }),
                        headers: z
                          .record(
                            z.string(),
                            z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(z.string().openapi({ example: null })),
                              )
                              .openapi({ example: null }),
                          )
                          .openapi({
                            description:
                              'An object containing the headers associated with this body part, where each header can have multiple string values.',
                            example: null,
                          }),
                        mediaType: z
                          .object({
                            parameters: z
                              .record(z.string(), z.string().openapi({ example: null }))
                              .openapi({
                                description:
                                  'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                example: null,
                              }),
                            subtype: z
                              .string()
                              .openapi({
                                description:
                                  'The specific subtype of the media, represented as a string.',
                                example: null,
                              }),
                            type: z
                              .string()
                              .openapi({
                                description:
                                  'The primary type of the media, represented as a string.',
                                example: null,
                              }),
                            wildcardSubtype: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .openapi({
                                description:
                                  'A boolean indicating whether the media subtype is a wildcard.',
                                example: null,
                              }),
                            wildcardType: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .openapi({
                                description:
                                  'A boolean indicating whether the media type is a wildcard.',
                                example: null,
                              }),
                          })
                          .openapi({
                            required: [
                              'parameters',
                              'subtype',
                              'type',
                              'wildcardSubtype',
                              'wildcardType',
                            ],
                            example: null,
                          }),
                        messageBodyWorkers: z
                          .object({})
                          .openapi({
                            description:
                              'An object representing workers that handle the processing of the message body.',
                            example: null,
                          }),
                        parameterizedHeaders: z
                          .record(
                            z.string(),
                            z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ParameterizedHeaderSchema),
                              )
                              .openapi({ example: null }),
                          )
                          .openapi({
                            description:
                              'An object containing headers with parameters, where each header can have multiple ParameterizedHeader objects.',
                            example: null,
                          }),
                        parent: z
                          .object({
                            bodyParts: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(BodyPartSchema),
                              )
                              .openapi({
                                description:
                                  'An array of BodyPart objects, each representing a distinct part of the multipart entity.',
                                example: null,
                              }),
                            contentDisposition: z
                              .object({
                                creationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was created, formatted as a date-time string.',
                                    example: null,
                                  }),
                                fileName: z
                                  .string()
                                  .openapi({
                                    description:
                                      "The name of the file as a string, indicating the file's name in the content disposition.",
                                    example: null,
                                  }),
                                modificationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last modified, formatted as a date-time string.',
                                    example: null,
                                  }),
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                    example: null,
                                  }),
                                readDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last read, formatted as a date-time string.',
                                    example: null,
                                  }),
                                size: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .openapi({
                                    description:
                                      "The size of the file as an integer, representing the file's size in bytes.",
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The type of content disposition, typically a string indicating how the content should be handled.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'creationDate',
                                  'fileName',
                                  'modificationDate',
                                  'parameters',
                                  'readDate',
                                  'size',
                                  'type',
                                ],
                                example: null,
                              }),
                            entity: z
                              .object({})
                              .openapi({
                                description:
                                  'An object that holds the main content or payload of the multipart entity.',
                                example: null,
                              }),
                            headers: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string().openapi({ example: null })),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing a map of header names to their respective values, where each value is an array of strings.',
                                example: null,
                              }),
                            mediaType: z
                              .object({
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                    example: null,
                                  }),
                                subtype: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The specific subtype of the media, represented as a string.',
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The primary type of the media, represented as a string.',
                                    example: null,
                                  }),
                                wildcardSubtype: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media subtype is a wildcard.',
                                    example: null,
                                  }),
                                wildcardType: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media type is a wildcard.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'parameters',
                                  'subtype',
                                  'type',
                                  'wildcardSubtype',
                                  'wildcardType',
                                ],
                                example: null,
                              }),
                            messageBodyWorkers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object that may contain workers for processing the message body, though its specific properties are not detailed.',
                                example: null,
                              }),
                            parameterizedHeaders: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(ParameterizedHeaderSchema),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing a map of header names to arrays of ParameterizedHeader objects, which include additional parameters for each header.',
                                example: null,
                              }),
                            parent: MultiPartSchema,
                            providers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object that may contain providers related to the multipart entity, though its specific properties are not detailed.',
                                example: null,
                              }),
                          })
                          .openapi({
                            required: [
                              'bodyParts',
                              'contentDisposition',
                              'entity',
                              'headers',
                              'mediaType',
                              'messageBodyWorkers',
                              'parameterizedHeaders',
                              'parent',
                              'providers',
                            ],
                            example: null,
                          }),
                        providers: z
                          .object({})
                          .openapi({
                            description:
                              'An object representing providers that supply additional handling or processing for the body part.',
                            example: null,
                          }),
                      })
                      .openapi({
                        required: [
                          'contentDisposition',
                          'entity',
                          'headers',
                          'mediaType',
                          'messageBodyWorkers',
                          'parameterizedHeaders',
                          'parent',
                          'providers',
                        ],
                        example: null,
                      }),
                  ),
                )
                .openapi({
                  description:
                    'An array of BodyPart objects, each representing a part of the multipart form data.',
                  example: null,
                }),
              contentDisposition: z
                .object({
                  creationDate: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description:
                        'The date and time when the file was created, formatted as a date-time string.',
                      example: null,
                    }),
                  fileName: z
                    .string()
                    .openapi({
                      description:
                        "The name of the file as a string, indicating the file's name in the content disposition.",
                      example: null,
                    }),
                  modificationDate: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description:
                        'The date and time when the file was last modified, formatted as a date-time string.',
                      example: null,
                    }),
                  parameters: z
                    .record(z.string(), z.string().openapi({ example: null }))
                    .openapi({
                      description:
                        'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                      example: null,
                    }),
                  readDate: z.iso
                    .datetime({ offset: true })
                    .openapi({
                      description:
                        'The date and time when the file was last read, formatted as a date-time string.',
                      example: null,
                    }),
                  size: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .openapi({
                      description:
                        "The size of the file as an integer, representing the file's size in bytes.",
                      example: null,
                    }),
                  type: z
                    .string()
                    .openapi({
                      description:
                        'The type of content disposition, typically a string indicating how the content should be handled.',
                      example: null,
                    }),
                })
                .openapi({
                  required: [
                    'creationDate',
                    'fileName',
                    'modificationDate',
                    'parameters',
                    'readDate',
                    'size',
                    'type',
                  ],
                  example: null,
                }),
              entity: z
                .object({})
                .openapi({
                  description:
                    'An object representing the entity of the multipart form data, containing the actual data to be processed.',
                  example: null,
                }),
              fields: z
                .record(
                  z.string(),
                  z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            contentDisposition: z
                              .object({
                                creationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was created, formatted as a date-time string.',
                                    example: null,
                                  }),
                                fileName: z
                                  .string()
                                  .openapi({
                                    description:
                                      "The name of the file as a string, indicating the file's name in the content disposition.",
                                    example: null,
                                  }),
                                modificationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last modified, formatted as a date-time string.',
                                    example: null,
                                  }),
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                    example: null,
                                  }),
                                readDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last read, formatted as a date-time string.',
                                    example: null,
                                  }),
                                size: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .openapi({
                                    description:
                                      "The size of the file as an integer, representing the file's size in bytes.",
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The type of content disposition, typically a string indicating how the content should be handled.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'creationDate',
                                  'fileName',
                                  'modificationDate',
                                  'parameters',
                                  'readDate',
                                  'size',
                                  'type',
                                ],
                                example: null,
                              }),
                            entity: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing the entity of the form data part, which contains the actual data being submitted.',
                                example: null,
                              }),
                            formDataContentDisposition: z
                              .object({
                                creationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was created, in ISO 8601 format.',
                                    example: null,
                                  }),
                                fileName: z
                                  .string()
                                  .openapi({
                                    description:
                                      'A string indicating the name of the file associated with this content disposition.',
                                    example: null,
                                  }),
                                modificationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last modified, in ISO 8601 format.',
                                    example: null,
                                  }),
                                name: z
                                  .string()
                                  .openapi({
                                    description:
                                      'A string representing the name associated with this content disposition.',
                                    example: null,
                                  }),
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the content disposition, with each parameter represented as a string.',
                                    example: null,
                                  }),
                                readDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last read, in ISO 8601 format.',
                                    example: null,
                                  }),
                                size: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .openapi({
                                    description:
                                      'An integer representing the size of the file in bytes.',
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'A string representing the type of content disposition.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'creationDate',
                                  'fileName',
                                  'modificationDate',
                                  'name',
                                  'parameters',
                                  'readDate',
                                  'size',
                                  'type',
                                ],
                                example: null,
                              }),
                            headers: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string().openapi({ example: null })),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing the headers associated with this form data part, where each header can have multiple string values.',
                                example: null,
                              }),
                            mediaType: z
                              .object({
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                    example: null,
                                  }),
                                subtype: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The specific subtype of the media, represented as a string.',
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The primary type of the media, represented as a string.',
                                    example: null,
                                  }),
                                wildcardSubtype: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media subtype is a wildcard.',
                                    example: null,
                                  }),
                                wildcardType: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media type is a wildcard.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'parameters',
                                  'subtype',
                                  'type',
                                  'wildcardSubtype',
                                  'wildcardType',
                                ],
                                example: null,
                              }),
                            messageBodyWorkers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing the message body workers, which are responsible for processing the body of the message.',
                                example: null,
                              }),
                            name: z
                              .string()
                              .openapi({
                                description:
                                  'The name of the form data part, typically used to identify the part within the multipart request.',
                                example: null,
                              }),
                            parameterizedHeaders: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(ParameterizedHeaderSchema),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing parameterized headers, where each header can have multiple values represented as ParameterizedHeader objects.',
                                example: null,
                              }),
                            parent: z
                              .object({
                                bodyParts: z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(
                                      z
                                        .object({
                                          contentDisposition: z
                                            .object({
                                              creationDate: z.iso
                                                .datetime({ offset: true })
                                                .openapi({
                                                  description:
                                                    'The date and time when the file was created, formatted as a date-time string.',
                                                  example: null,
                                                }),
                                              fileName: z
                                                .string()
                                                .openapi({
                                                  description:
                                                    "The name of the file as a string, indicating the file's name in the content disposition.",
                                                  example: null,
                                                }),
                                              modificationDate: z.iso
                                                .datetime({ offset: true })
                                                .openapi({
                                                  description:
                                                    'The date and time when the file was last modified, formatted as a date-time string.',
                                                  example: null,
                                                }),
                                              parameters: z
                                                .record(
                                                  z.string(),
                                                  z.string().openapi({ example: null }),
                                                )
                                                .openapi({
                                                  description:
                                                    'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                                  example: null,
                                                }),
                                              readDate: z.iso
                                                .datetime({ offset: true })
                                                .openapi({
                                                  description:
                                                    'The date and time when the file was last read, formatted as a date-time string.',
                                                  example: null,
                                                }),
                                              size: z
                                                .preprocess(
                                                  (val) =>
                                                    typeof val === 'string' &&
                                                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(
                                                      val,
                                                    ) &&
                                                    (!/^-?\d+$/.test(val) ||
                                                      Number.isSafeInteger(Number(val)))
                                                      ? Number(val)
                                                      : val,
                                                  z.int32(),
                                                )
                                                .openapi({
                                                  description:
                                                    "The size of the file as an integer, representing the file's size in bytes.",
                                                  example: null,
                                                }),
                                              type: z
                                                .string()
                                                .openapi({
                                                  description:
                                                    'The type of content disposition, typically a string indicating how the content should be handled.',
                                                  example: null,
                                                }),
                                            })
                                            .openapi({
                                              required: [
                                                'creationDate',
                                                'fileName',
                                                'modificationDate',
                                                'parameters',
                                                'readDate',
                                                'size',
                                                'type',
                                              ],
                                              example: null,
                                            }),
                                          entity: z
                                            .object({})
                                            .openapi({
                                              description:
                                                'An object representing the actual content or payload of the body part.',
                                              example: null,
                                            }),
                                          headers: z
                                            .record(
                                              z.string(),
                                              z
                                                .preprocess(
                                                  (val) =>
                                                    val === undefined || Array.isArray(val)
                                                      ? val
                                                      : [val],
                                                  z.array(z.string().openapi({ example: null })),
                                                )
                                                .openapi({ example: null }),
                                            )
                                            .openapi({
                                              description:
                                                'An object containing the headers associated with this body part, where each header can have multiple string values.',
                                              example: null,
                                            }),
                                          mediaType: z
                                            .object({
                                              parameters: z
                                                .record(
                                                  z.string(),
                                                  z.string().openapi({ example: null }),
                                                )
                                                .openapi({
                                                  description:
                                                    'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                                  example: null,
                                                }),
                                              subtype: z
                                                .string()
                                                .openapi({
                                                  description:
                                                    'The specific subtype of the media, represented as a string.',
                                                  example: null,
                                                }),
                                              type: z
                                                .string()
                                                .openapi({
                                                  description:
                                                    'The primary type of the media, represented as a string.',
                                                  example: null,
                                                }),
                                              wildcardSubtype: z
                                                .preprocess(
                                                  ((read) => (val: unknown) => {
                                                    const result = read.safeParse(val)
                                                    return result.success ? result.data : val
                                                  })(z.stringbool()),
                                                  z.boolean(),
                                                )
                                                .openapi({
                                                  description:
                                                    'A boolean indicating whether the media subtype is a wildcard.',
                                                  example: null,
                                                }),
                                              wildcardType: z
                                                .preprocess(
                                                  ((read) => (val: unknown) => {
                                                    const result = read.safeParse(val)
                                                    return result.success ? result.data : val
                                                  })(z.stringbool()),
                                                  z.boolean(),
                                                )
                                                .openapi({
                                                  description:
                                                    'A boolean indicating whether the media type is a wildcard.',
                                                  example: null,
                                                }),
                                            })
                                            .openapi({
                                              required: [
                                                'parameters',
                                                'subtype',
                                                'type',
                                                'wildcardSubtype',
                                                'wildcardType',
                                              ],
                                              example: null,
                                            }),
                                          messageBodyWorkers: z
                                            .object({})
                                            .openapi({
                                              description:
                                                'An object representing workers that handle the processing of the message body.',
                                              example: null,
                                            }),
                                          parameterizedHeaders: z
                                            .record(
                                              z.string(),
                                              z
                                                .preprocess(
                                                  (val) =>
                                                    val === undefined || Array.isArray(val)
                                                      ? val
                                                      : [val],
                                                  z.array(ParameterizedHeaderSchema),
                                                )
                                                .openapi({ example: null }),
                                            )
                                            .openapi({
                                              description:
                                                'An object containing headers with parameters, where each header can have multiple ParameterizedHeader objects.',
                                              example: null,
                                            }),
                                          parent: MultiPartSchema,
                                          providers: z
                                            .object({})
                                            .openapi({
                                              description:
                                                'An object representing providers that supply additional handling or processing for the body part.',
                                              example: null,
                                            }),
                                        })
                                        .openapi({
                                          required: [
                                            'contentDisposition',
                                            'entity',
                                            'headers',
                                            'mediaType',
                                            'messageBodyWorkers',
                                            'parameterizedHeaders',
                                            'parent',
                                            'providers',
                                          ],
                                          example: null,
                                        }),
                                    ),
                                  )
                                  .openapi({
                                    description:
                                      'An array of BodyPart objects, each representing a distinct part of the multipart entity.',
                                    example: null,
                                  }),
                                contentDisposition: z
                                  .object({
                                    creationDate: z.iso
                                      .datetime({ offset: true })
                                      .openapi({
                                        description:
                                          'The date and time when the file was created, formatted as a date-time string.',
                                        example: null,
                                      }),
                                    fileName: z
                                      .string()
                                      .openapi({
                                        description:
                                          "The name of the file as a string, indicating the file's name in the content disposition.",
                                        example: null,
                                      }),
                                    modificationDate: z.iso
                                      .datetime({ offset: true })
                                      .openapi({
                                        description:
                                          'The date and time when the file was last modified, formatted as a date-time string.',
                                        example: null,
                                      }),
                                    parameters: z
                                      .record(z.string(), z.string().openapi({ example: null }))
                                      .openapi({
                                        description:
                                          'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                        example: null,
                                      }),
                                    readDate: z.iso
                                      .datetime({ offset: true })
                                      .openapi({
                                        description:
                                          'The date and time when the file was last read, formatted as a date-time string.',
                                        example: null,
                                      }),
                                    size: z
                                      .preprocess(
                                        (val) =>
                                          typeof val === 'string' &&
                                          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                          (!/^-?\d+$/.test(val) ||
                                            Number.isSafeInteger(Number(val)))
                                            ? Number(val)
                                            : val,
                                        z.int32(),
                                      )
                                      .openapi({
                                        description:
                                          "The size of the file as an integer, representing the file's size in bytes.",
                                        example: null,
                                      }),
                                    type: z
                                      .string()
                                      .openapi({
                                        description:
                                          'The type of content disposition, typically a string indicating how the content should be handled.',
                                        example: null,
                                      }),
                                  })
                                  .openapi({
                                    required: [
                                      'creationDate',
                                      'fileName',
                                      'modificationDate',
                                      'parameters',
                                      'readDate',
                                      'size',
                                      'type',
                                    ],
                                    example: null,
                                  }),
                                entity: z
                                  .object({})
                                  .openapi({
                                    description:
                                      'An object that holds the main content or payload of the multipart entity.',
                                    example: null,
                                  }),
                                headers: z
                                  .record(
                                    z.string(),
                                    z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(z.string().openapi({ example: null })),
                                      )
                                      .openapi({ example: null }),
                                  )
                                  .openapi({
                                    description:
                                      'An object containing a map of header names to their respective values, where each value is an array of strings.',
                                    example: null,
                                  }),
                                mediaType: z
                                  .object({
                                    parameters: z
                                      .record(z.string(), z.string().openapi({ example: null }))
                                      .openapi({
                                        description:
                                          'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                        example: null,
                                      }),
                                    subtype: z
                                      .string()
                                      .openapi({
                                        description:
                                          'The specific subtype of the media, represented as a string.',
                                        example: null,
                                      }),
                                    type: z
                                      .string()
                                      .openapi({
                                        description:
                                          'The primary type of the media, represented as a string.',
                                        example: null,
                                      }),
                                    wildcardSubtype: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .openapi({
                                        description:
                                          'A boolean indicating whether the media subtype is a wildcard.',
                                        example: null,
                                      }),
                                    wildcardType: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .openapi({
                                        description:
                                          'A boolean indicating whether the media type is a wildcard.',
                                        example: null,
                                      }),
                                  })
                                  .openapi({
                                    required: [
                                      'parameters',
                                      'subtype',
                                      'type',
                                      'wildcardSubtype',
                                      'wildcardType',
                                    ],
                                    example: null,
                                  }),
                                messageBodyWorkers: z
                                  .object({})
                                  .openapi({
                                    description:
                                      'An object that may contain workers for processing the message body, though its specific properties are not detailed.',
                                    example: null,
                                  }),
                                parameterizedHeaders: z
                                  .record(
                                    z.string(),
                                    z
                                      .preprocess(
                                        (val) =>
                                          val === undefined || Array.isArray(val) ? val : [val],
                                        z.array(ParameterizedHeaderSchema),
                                      )
                                      .openapi({ example: null }),
                                  )
                                  .openapi({
                                    description:
                                      'An object containing a map of header names to arrays of ParameterizedHeader objects, which include additional parameters for each header.',
                                    example: null,
                                  }),
                                parent: MultiPartSchema,
                                providers: z
                                  .object({})
                                  .openapi({
                                    description:
                                      'An object that may contain providers related to the multipart entity, though its specific properties are not detailed.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'bodyParts',
                                  'contentDisposition',
                                  'entity',
                                  'headers',
                                  'mediaType',
                                  'messageBodyWorkers',
                                  'parameterizedHeaders',
                                  'parent',
                                  'providers',
                                ],
                                example: null,
                              }),
                            providers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing the providers associated with this form data part.',
                                example: null,
                              }),
                            simple: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .openapi({
                                description:
                                  'A boolean indicating whether the form data part is simple, typically meaning it does not contain complex nested structures.',
                                example: null,
                              }),
                            value: z
                              .string()
                              .openapi({
                                description:
                                  'The string value of the form data part, representing the actual data being submitted as a string.',
                                example: null,
                              }),
                          })
                          .openapi({
                            required: [
                              'contentDisposition',
                              'entity',
                              'formDataContentDisposition',
                              'headers',
                              'mediaType',
                              'messageBodyWorkers',
                              'name',
                              'parameterizedHeaders',
                              'parent',
                              'providers',
                              'simple',
                              'value',
                            ],
                            example: null,
                          }),
                      ),
                    )
                    .openapi({ example: null }),
                )
                .openapi({
                  description:
                    'An object containing fields of the multipart form data, where each field can have multiple FormDataBodyPart items.',
                  example: null,
                }),
              headers: z
                .record(
                  z.string(),
                  z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string().openapi({ example: null })),
                    )
                    .openapi({ example: null }),
                )
                .openapi({
                  description:
                    'An object containing headers associated with the multipart form data, where each header can have multiple string values.',
                  example: null,
                }),
              mediaType: z
                .object({
                  parameters: z
                    .record(z.string(), z.string().openapi({ example: null }))
                    .openapi({
                      description:
                        'An object containing additional parameters for the media type, where each key-value pair is a string.',
                      example: null,
                    }),
                  subtype: z
                    .string()
                    .openapi({
                      description: 'The specific subtype of the media, represented as a string.',
                      example: null,
                    }),
                  type: z
                    .string()
                    .openapi({
                      description: 'The primary type of the media, represented as a string.',
                      example: null,
                    }),
                  wildcardSubtype: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .openapi({
                      description: 'A boolean indicating whether the media subtype is a wildcard.',
                      example: null,
                    }),
                  wildcardType: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .openapi({
                      description: 'A boolean indicating whether the media type is a wildcard.',
                      example: null,
                    }),
                })
                .openapi({
                  required: ['parameters', 'subtype', 'type', 'wildcardSubtype', 'wildcardType'],
                  example: null,
                }),
              messageBodyWorkers: z
                .object({})
                .openapi({
                  description:
                    'An object representing workers that process the message body of the multipart form data.',
                  example: null,
                }),
              parameterizedHeaders: z
                .record(
                  z.string(),
                  z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(ParameterizedHeaderSchema),
                    )
                    .openapi({ example: null }),
                )
                .openapi({
                  description:
                    'An object containing parameterized headers, where each header can have multiple ParameterizedHeader items.',
                  example: null,
                }),
              parent: z
                .object({
                  bodyParts: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(
                        z
                          .object({
                            contentDisposition: z
                              .object({
                                creationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was created, formatted as a date-time string.',
                                    example: null,
                                  }),
                                fileName: z
                                  .string()
                                  .openapi({
                                    description:
                                      "The name of the file as a string, indicating the file's name in the content disposition.",
                                    example: null,
                                  }),
                                modificationDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last modified, formatted as a date-time string.',
                                    example: null,
                                  }),
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                                    example: null,
                                  }),
                                readDate: z.iso
                                  .datetime({ offset: true })
                                  .openapi({
                                    description:
                                      'The date and time when the file was last read, formatted as a date-time string.',
                                    example: null,
                                  }),
                                size: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .openapi({
                                    description:
                                      "The size of the file as an integer, representing the file's size in bytes.",
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The type of content disposition, typically a string indicating how the content should be handled.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'creationDate',
                                  'fileName',
                                  'modificationDate',
                                  'parameters',
                                  'readDate',
                                  'size',
                                  'type',
                                ],
                                example: null,
                              }),
                            entity: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing the actual content or payload of the body part.',
                                example: null,
                              }),
                            headers: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(z.string().openapi({ example: null })),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing the headers associated with this body part, where each header can have multiple string values.',
                                example: null,
                              }),
                            mediaType: z
                              .object({
                                parameters: z
                                  .record(z.string(), z.string().openapi({ example: null }))
                                  .openapi({
                                    description:
                                      'An object containing additional parameters for the media type, where each key-value pair is a string.',
                                    example: null,
                                  }),
                                subtype: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The specific subtype of the media, represented as a string.',
                                    example: null,
                                  }),
                                type: z
                                  .string()
                                  .openapi({
                                    description:
                                      'The primary type of the media, represented as a string.',
                                    example: null,
                                  }),
                                wildcardSubtype: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media subtype is a wildcard.',
                                    example: null,
                                  }),
                                wildcardType: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .openapi({
                                    description:
                                      'A boolean indicating whether the media type is a wildcard.',
                                    example: null,
                                  }),
                              })
                              .openapi({
                                required: [
                                  'parameters',
                                  'subtype',
                                  'type',
                                  'wildcardSubtype',
                                  'wildcardType',
                                ],
                                example: null,
                              }),
                            messageBodyWorkers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing workers that handle the processing of the message body.',
                                example: null,
                              }),
                            parameterizedHeaders: z
                              .record(
                                z.string(),
                                z
                                  .preprocess(
                                    (val) =>
                                      val === undefined || Array.isArray(val) ? val : [val],
                                    z.array(ParameterizedHeaderSchema),
                                  )
                                  .openapi({ example: null }),
                              )
                              .openapi({
                                description:
                                  'An object containing headers with parameters, where each header can have multiple ParameterizedHeader objects.',
                                example: null,
                              }),
                            parent: MultiPartSchema,
                            providers: z
                              .object({})
                              .openapi({
                                description:
                                  'An object representing providers that supply additional handling or processing for the body part.',
                                example: null,
                              }),
                          })
                          .openapi({
                            required: [
                              'contentDisposition',
                              'entity',
                              'headers',
                              'mediaType',
                              'messageBodyWorkers',
                              'parameterizedHeaders',
                              'parent',
                              'providers',
                            ],
                            example: null,
                          }),
                      ),
                    )
                    .openapi({
                      description:
                        'An array of BodyPart objects, each representing a distinct part of the multipart entity.',
                      example: null,
                    }),
                  contentDisposition: z
                    .object({
                      creationDate: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The date and time when the file was created, formatted as a date-time string.',
                          example: null,
                        }),
                      fileName: z
                        .string()
                        .openapi({
                          description:
                            "The name of the file as a string, indicating the file's name in the content disposition.",
                          example: null,
                        }),
                      modificationDate: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The date and time when the file was last modified, formatted as a date-time string.',
                          example: null,
                        }),
                      parameters: z
                        .record(z.string(), z.string().openapi({ example: null }))
                        .openapi({
                          description:
                            'An object containing additional parameters for the content disposition, with each parameter represented as a key-value pair of strings.',
                          example: null,
                        }),
                      readDate: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description:
                            'The date and time when the file was last read, formatted as a date-time string.',
                          example: null,
                        }),
                      size: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .openapi({
                          description:
                            "The size of the file as an integer, representing the file's size in bytes.",
                          example: null,
                        }),
                      type: z
                        .string()
                        .openapi({
                          description:
                            'The type of content disposition, typically a string indicating how the content should be handled.',
                          example: null,
                        }),
                    })
                    .openapi({
                      required: [
                        'creationDate',
                        'fileName',
                        'modificationDate',
                        'parameters',
                        'readDate',
                        'size',
                        'type',
                      ],
                      example: null,
                    }),
                  entity: z
                    .object({})
                    .openapi({
                      description:
                        'An object that holds the main content or payload of the multipart entity.',
                      example: null,
                    }),
                  headers: z
                    .record(
                      z.string(),
                      z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string().openapi({ example: null })),
                        )
                        .openapi({ example: null }),
                    )
                    .openapi({
                      description:
                        'An object containing a map of header names to their respective values, where each value is an array of strings.',
                      example: null,
                    }),
                  mediaType: z
                    .object({
                      parameters: z
                        .record(z.string(), z.string().openapi({ example: null }))
                        .openapi({
                          description:
                            'An object containing additional parameters for the media type, where each key-value pair is a string.',
                          example: null,
                        }),
                      subtype: z
                        .string()
                        .openapi({
                          description:
                            'The specific subtype of the media, represented as a string.',
                          example: null,
                        }),
                      type: z
                        .string()
                        .openapi({
                          description: 'The primary type of the media, represented as a string.',
                          example: null,
                        }),
                      wildcardSubtype: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .openapi({
                          description:
                            'A boolean indicating whether the media subtype is a wildcard.',
                          example: null,
                        }),
                      wildcardType: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .openapi({
                          description: 'A boolean indicating whether the media type is a wildcard.',
                          example: null,
                        }),
                    })
                    .openapi({
                      required: [
                        'parameters',
                        'subtype',
                        'type',
                        'wildcardSubtype',
                        'wildcardType',
                      ],
                      example: null,
                    }),
                  messageBodyWorkers: z
                    .object({})
                    .openapi({
                      description:
                        'An object that may contain workers for processing the message body, though its specific properties are not detailed.',
                      example: null,
                    }),
                  parameterizedHeaders: z
                    .record(
                      z.string(),
                      z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(ParameterizedHeaderSchema),
                        )
                        .openapi({ example: null }),
                    )
                    .openapi({
                      description:
                        'An object containing a map of header names to arrays of ParameterizedHeader objects, which include additional parameters for each header.',
                      example: null,
                    }),
                  parent: MultiPartSchema,
                  providers: z
                    .object({})
                    .openapi({
                      description:
                        'An object that may contain providers related to the multipart entity, though its specific properties are not detailed.',
                      example: null,
                    }),
                })
                .openapi({
                  required: [
                    'bodyParts',
                    'contentDisposition',
                    'entity',
                    'headers',
                    'mediaType',
                    'messageBodyWorkers',
                    'parameterizedHeaders',
                    'parent',
                    'providers',
                  ],
                  example: null,
                }),
              providers: z
                .object({})
                .openapi({
                  description:
                    'An object representing providers associated with the multipart form data.',
                  example: null,
                }),
            })
            .openapi({
              required: [
                'bodyParts',
                'contentDisposition',
                'entity',
                'fields',
                'headers',
                'mediaType',
                'messageBodyWorkers',
                'parameterizedHeaders',
                'parent',
                'providers',
              ],
              example: null,
            }),
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: DataSourceUpdateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['data_integration.data_source.file.write'] },
    { private_apps: ['data_integration.data_source.file.write'] },
  ],
})

export const deleteDataStudioDataSource202609DatasourceIdRoute = createRoute({
  method: 'delete',
  path: '/data-studio/data-source/2026-09/{datasourceId}',
  tags: ['Basic'],
  operationId:
    'delete-/data-studio/data-source/2026-09/{datasourceId}_/data-studio/data-source/2026-09/{datasourceId}',
  request: {
    params: z.object({
      datasourceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'datasourceId',
            in: 'path',
            description: '',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { default: ErrorResponse },
  security: [
    { oauth2: ['data_integration.data_source.file.write'] },
    { private_apps: ['data_integration.data_source.file.write'] },
  ],
})
