import { createRoute, z } from '@hono/zod-openapi'

type ContentDispositionType = {
  type?: string
  parameters?: { [key: string]: string }
  fileName?: string
  creationDate?: string
  modificationDate?: string
  readDate?: string
  size?: bigint
}

const ContentDispositionSchema: z.ZodType<ContentDispositionType> = z
  .object({
    type: z.string().exactOptional(),
    parameters: z.record(z.string(), z.string()).exactOptional(),
    fileName: z.string().exactOptional(),
    creationDate: z.iso.datetime({ offset: true }).exactOptional(),
    modificationDate: z.iso.datetime({ offset: true }).exactOptional(),
    readDate: z.iso.datetime({ offset: true }).exactOptional(),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('ContentDisposition')

type MessageBodyWorkersType = { [key: string]: unknown }

const MessageBodyWorkersSchema: z.ZodType<MessageBodyWorkersType> = z
  .object({})
  .openapi('MessageBodyWorkers')

const MultiPartSchema: z.ZodType<MultiPartType> = z
  .lazy(() =>
    z
      .object({
        contentDisposition: ContentDispositionSchema.exactOptional(),
        entity: z.object({}).exactOptional(),
        headers: z
          .object({ empty: z.boolean().exactOptional() })
          .catchall(z.array(z.string()))
          .exactOptional(),
        mediaType: z
          .object({
            type: z.string().exactOptional(),
            subtype: z.string().exactOptional(),
            parameters: z.record(z.string(), z.string()).exactOptional(),
            wildcardType: z.boolean().exactOptional(),
            wildcardSubtype: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        messageBodyWorkers: MessageBodyWorkersSchema.exactOptional(),
        parent: MultiPartSchema.exactOptional(),
        providers: z.object({}).exactOptional(),
        bodyParts: z.array(BodyPartSchema).exactOptional(),
        parameterizedHeaders: z
          .object({ empty: z.boolean().exactOptional() })
          .catchall(z.array(ParameterizedHeaderSchema))
          .exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('MultiPart')

type BodyPartType = {
  contentDisposition?: z.infer<typeof ContentDispositionSchema>
  entity?: { [key: string]: unknown }
  headers?: { empty?: boolean }
  mediaType?: {
    type?: string
    subtype?: string
    parameters?: { [key: string]: string }
    wildcardType?: boolean
    wildcardSubtype?: boolean
  }
  messageBodyWorkers?: z.infer<typeof MessageBodyWorkersSchema>
  parent?: z.infer<typeof MultiPartSchema>
  providers?: { [key: string]: unknown }
  parameterizedHeaders?: { empty?: boolean }
}

const BodyPartSchema: z.ZodType<BodyPartType> = z
  .lazy(() =>
    z
      .object({
        contentDisposition: ContentDispositionSchema.exactOptional(),
        entity: z.object({}).exactOptional(),
        headers: z
          .object({ empty: z.boolean().exactOptional() })
          .catchall(z.array(z.string()))
          .exactOptional(),
        mediaType: z
          .object({
            type: z.string().exactOptional(),
            subtype: z.string().exactOptional(),
            parameters: z.record(z.string(), z.string()).exactOptional(),
            wildcardType: z.boolean().exactOptional(),
            wildcardSubtype: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        messageBodyWorkers: MessageBodyWorkersSchema.exactOptional(),
        parent: MultiPartSchema.exactOptional(),
        providers: z.object({}).exactOptional(),
        parameterizedHeaders: z
          .object({ empty: z.boolean().exactOptional() })
          .catchall(z.array(ParameterizedHeaderSchema))
          .exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('BodyPart')

type MultiPartType = {
  contentDisposition?: z.infer<typeof ContentDispositionSchema>
  entity?: { [key: string]: unknown }
  headers?: { empty?: boolean }
  mediaType?: {
    type?: string
    subtype?: string
    parameters?: { [key: string]: string }
    wildcardType?: boolean
    wildcardSubtype?: boolean
  }
  messageBodyWorkers?: z.infer<typeof MessageBodyWorkersSchema>
  parent?: MultiPartType
  providers?: { [key: string]: unknown }
  bodyParts?: z.infer<typeof BodyPartSchema>[]
  parameterizedHeaders?: { empty?: boolean }
}

type ParameterizedHeaderType = { value?: string; parameters?: { [key: string]: string } }

const ZoneRulesSchema: z.ZodType<ZoneRulesType> = z
  .lazy(() =>
    z
      .object({ transitions: z.array(ZoneOffsetTransitionSchema).exactOptional() })
      .openapi({ required: [] }),
  )
  .openapi('ZoneRules')

type ZoneOffsetType = { id?: string; rules?: z.infer<typeof ZoneRulesSchema> }

const ZoneOffsetSchema: z.ZodType<ZoneOffsetType> = z
  .lazy(() =>
    z
      .object({ id: z.string().exactOptional(), rules: ZoneRulesSchema.exactOptional() })
      .openapi({ required: [] }),
  )
  .openapi('ZoneOffset')

type ZoneOffsetTransitionType = {
  offsetBefore?: z.infer<typeof ZoneOffsetSchema>
  offsetAfter?: z.infer<typeof ZoneOffsetSchema>
  dateTimeAfter?: string
  dateTimeBefore?: string
}

const ZoneOffsetTransitionSchema: z.ZodType<ZoneOffsetTransitionType> = z
  .lazy(() =>
    z
      .object({
        offsetBefore: ZoneOffsetSchema.exactOptional(),
        offsetAfter: ZoneOffsetSchema.exactOptional(),
        dateTimeAfter: z.iso.datetime({ offset: true }).exactOptional(),
        dateTimeBefore: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ZoneOffsetTransition')

type ZoneRulesType = { transitions?: z.infer<typeof ZoneOffsetTransitionSchema>[] }

const FormDataContentDispositionSchema = z
  .object({
    type: z.string().exactOptional(),
    parameters: z.record(z.string(), z.string()).exactOptional(),
    fileName: z.string().exactOptional(),
    creationDate: z.iso.datetime({ offset: true }).exactOptional(),
    modificationDate: z.iso.datetime({ offset: true }).exactOptional(),
    readDate: z.iso.datetime({ offset: true }).exactOptional(),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FormDataContentDisposition')

const ParameterizedHeaderSchema: z.ZodType<ParameterizedHeaderType> = z
  .object({
    value: z.string().exactOptional(),
    parameters: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParameterizedHeader')

const FormDataBodyPartSchema = z
  .object({
    contentDisposition: ContentDispositionSchema.exactOptional(),
    entity: z.object({}).exactOptional(),
    headers: z
      .object({ empty: z.boolean().exactOptional() })
      .catchall(z.array(z.string()))
      .exactOptional(),
    mediaType: z
      .object({
        type: z.string().exactOptional(),
        subtype: z.string().exactOptional(),
        parameters: z.record(z.string(), z.string()).exactOptional(),
        wildcardType: z.boolean().exactOptional(),
        wildcardSubtype: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    messageBodyWorkers: MessageBodyWorkersSchema.exactOptional(),
    parent: MultiPartSchema.exactOptional(),
    providers: z.object({}).exactOptional(),
    name: z.string().exactOptional(),
    value: z.string().exactOptional(),
    formDataContentDisposition: FormDataContentDispositionSchema.exactOptional(),
    simple: z.boolean().exactOptional(),
    parameterizedHeaders: z
      .object({ empty: z.boolean().exactOptional() })
      .catchall(z.array(ParameterizedHeaderSchema))
      .exactOptional(),
  })
  .openapi({
    description:
      'A single file which will be added/updated or a ZIP archive containing files that will be added/updated. The name of the ZIP archive does not matter but the names of the files contained within do.',
    example: 'file=@2018-report.pdf',
    required: [],
  })
  .openapi('FormDataBodyPart')

const ZoneIdSchema = z
  .object({ rules: ZoneRulesSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ZoneId')

export const putNestedTestRoute = createRoute({
  method: 'put',
  path: '/nestedTest',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              foo: z.string().exactOptional(),
              arr: z
                .array(
                  z.array(
                    z.array(z.array(z.array(z.array(z.array(z.array(z.array(z.string()))))))),
                  ),
                )
                .exactOptional(),
              obj: z
                .object({
                  ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff:
                    z
                      .object({
                        fooa: z
                          .object({
                            'foob:': z
                              .object({ fooc: z.string().exactOptional() })
                              .exactOptional()
                              .openapi({ required: [] }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putCircularRoute = createRoute({
  method: 'put',
  path: '/circular',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            description: 'API key.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .object({
                  contentDisposition: z
                    .object({
                      type: z.string().exactOptional(),
                      parameters: z.record(z.string(), z.string()).exactOptional(),
                      fileName: z.string().exactOptional(),
                      creationDate: z.iso.datetime({ offset: true }).exactOptional(),
                      modificationDate: z.iso.datetime({ offset: true }).exactOptional(),
                      readDate: z.iso.datetime({ offset: true }).exactOptional(),
                      size: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.int64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  entity: z.object({}).exactOptional(),
                  headers: z
                    .object({
                      empty: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .catchall(
                      z.preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(z.string()),
                      ),
                    )
                    .exactOptional(),
                  mediaType: z
                    .object({
                      type: z.string().exactOptional(),
                      subtype: z.string().exactOptional(),
                      parameters: z.record(z.string(), z.string()).exactOptional(),
                      wildcardType: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                      wildcardSubtype: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  messageBodyWorkers: MessageBodyWorkersSchema.exactOptional(),
                  parent: z
                    .object({
                      contentDisposition: z
                        .object({
                          type: z.string().exactOptional(),
                          parameters: z.record(z.string(), z.string()).exactOptional(),
                          fileName: z.string().exactOptional(),
                          creationDate: z.iso.datetime({ offset: true }).exactOptional(),
                          modificationDate: z.iso.datetime({ offset: true }).exactOptional(),
                          readDate: z.iso.datetime({ offset: true }).exactOptional(),
                          size: z
                            .preprocess((val) => {
                              if (
                                typeof val !== 'string' ||
                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                              )
                                return val
                              if (/^-?\d+$/.test(val)) return BigInt(val)
                              const num = Number(val)
                              return Number.isSafeInteger(num) ? BigInt(num) : val
                            }, z.int64())
                            .exactOptional()
                            .openapi({ type: 'integer', format: 'int64' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      entity: z.object({}).exactOptional(),
                      headers: z
                        .object({
                          empty: z
                            .preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            )
                            .exactOptional(),
                        })
                        .catchall(
                          z.preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(z.string()),
                          ),
                        )
                        .exactOptional(),
                      mediaType: z
                        .object({
                          type: z.string().exactOptional(),
                          subtype: z.string().exactOptional(),
                          parameters: z.record(z.string(), z.string()).exactOptional(),
                          wildcardType: z
                            .preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            )
                            .exactOptional(),
                          wildcardSubtype: z
                            .preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      messageBodyWorkers: MessageBodyWorkersSchema.exactOptional(),
                      parent: MultiPartSchema.exactOptional(),
                      providers: z.object({}).exactOptional(),
                      bodyParts: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                contentDisposition: z
                                  .object({
                                    type: z.string().exactOptional(),
                                    parameters: z.record(z.string(), z.string()).exactOptional(),
                                    fileName: z.string().exactOptional(),
                                    creationDate: z.iso.datetime({ offset: true }).exactOptional(),
                                    modificationDate: z.iso
                                      .datetime({ offset: true })
                                      .exactOptional(),
                                    readDate: z.iso.datetime({ offset: true }).exactOptional(),
                                    size: z
                                      .preprocess((val) => {
                                        if (
                                          typeof val !== 'string' ||
                                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                        )
                                          return val
                                        if (/^-?\d+$/.test(val)) return BigInt(val)
                                        const num = Number(val)
                                        return Number.isSafeInteger(num) ? BigInt(num) : val
                                      }, z.int64())
                                      .exactOptional()
                                      .openapi({ type: 'integer', format: 'int64' }),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                entity: z.object({}).exactOptional(),
                                headers: z
                                  .object({
                                    empty: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional(),
                                  })
                                  .catchall(
                                    z.preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(z.string()),
                                    ),
                                  )
                                  .exactOptional(),
                                mediaType: z
                                  .object({
                                    type: z.string().exactOptional(),
                                    subtype: z.string().exactOptional(),
                                    parameters: z.record(z.string(), z.string()).exactOptional(),
                                    wildcardType: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional(),
                                    wildcardSubtype: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                messageBodyWorkers: MessageBodyWorkersSchema.exactOptional(),
                                parent: MultiPartSchema.exactOptional(),
                                providers: z.object({}).exactOptional(),
                                parameterizedHeaders: z
                                  .object({
                                    empty: z
                                      .preprocess(
                                        ((read) => (val: unknown) => {
                                          const result = read.safeParse(val)
                                          return result.success ? result.data : val
                                        })(z.stringbool()),
                                        z.boolean(),
                                      )
                                      .exactOptional(),
                                  })
                                  .catchall(
                                    z.preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(ParameterizedHeaderSchema),
                                    ),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({ required: [] }),
                          ),
                        )
                        .exactOptional(),
                      parameterizedHeaders: z
                        .object({
                          empty: z
                            .preprocess(
                              ((read) => (val: unknown) => {
                                const result = read.safeParse(val)
                                return result.success ? result.data : val
                              })(z.stringbool()),
                              z.boolean(),
                            )
                            .exactOptional(),
                        })
                        .catchall(
                          z.preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(ParameterizedHeaderSchema),
                          ),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  providers: z.object({}).exactOptional(),
                  name: z.string().exactOptional(),
                  value: z.string().exactOptional(),
                  formDataContentDisposition: z
                    .object({
                      type: z.string().exactOptional(),
                      parameters: z.record(z.string(), z.string()).exactOptional(),
                      fileName: z.string().exactOptional(),
                      creationDate: z.iso.datetime({ offset: true }).exactOptional(),
                      modificationDate: z.iso.datetime({ offset: true }).exactOptional(),
                      readDate: z.iso.datetime({ offset: true }).exactOptional(),
                      size: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.int64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64' }),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  simple: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  parameterizedHeaders: z
                    .object({
                      empty: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                    })
                    .catchall(
                      z.preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(ParameterizedHeaderSchema),
                      ),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A single file which will be added/updated or a ZIP archive containing files that will be added/updated. The name of the ZIP archive does not matter but the names of the files contained within do.',
                  example: 'file=@2018-report.pdf',
                  required: [],
                }),
              typename: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Successfully processed.' },
    400: {
      description: 'Invalid payload. This can be due to invalid headers or form-data params.',
    },
    401: {
      description:
        'Permissions error. The Authorization header may be missing, the value may be invalid or the associated organization/user does not have permission to modify the specified typename.',
    },
    500: {
      description:
        'Server error. Something unexpected happened while processing the request. Try again later.',
    },
  },
})

export const postNotQuiteCircularRoute = createRoute({
  method: 'post',
  path: '/not-quite-circular',
  description:
    'This is a schema that is technically circular, but not in a way that will cause infinite recursion when processing it.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ rules: ZoneRulesSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'successful operation' } },
})
