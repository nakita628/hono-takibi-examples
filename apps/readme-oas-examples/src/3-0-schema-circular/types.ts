type ContentDisposition = {
  type?: string | undefined
  parameters?: { [x: string]: string } | undefined
  fileName?: string | undefined
  creationDate?: string | undefined
  modificationDate?: string | undefined
  readDate?: string | undefined
  size?: bigint | undefined
}
type MessageBodyWorkers = { [x: string]: unknown }
type BodyPart = {
  contentDisposition?: ContentDisposition | undefined
  entity?: { [x: string]: unknown } | undefined
  headers?: { empty?: boolean | undefined } | undefined
  mediaType?:
    | {
        type?: string | undefined
        subtype?: string | undefined
        parameters?: { [x: string]: string } | undefined
        wildcardType?: boolean | undefined
        wildcardSubtype?: boolean | undefined
      }
    | undefined
  messageBodyWorkers?: MessageBodyWorkers | undefined
  parent?: MultiPart | undefined
  providers?: { [x: string]: unknown } | undefined
  parameterizedHeaders?: { empty?: boolean | undefined } | undefined
}
type MultiPart = {
  contentDisposition?: ContentDisposition | undefined
  entity?: { [x: string]: unknown } | undefined
  headers?: { empty?: boolean | undefined } | undefined
  mediaType?:
    | {
        type?: string | undefined
        subtype?: string | undefined
        parameters?: { [x: string]: string } | undefined
        wildcardType?: boolean | undefined
        wildcardSubtype?: boolean | undefined
      }
    | undefined
  messageBodyWorkers?: MessageBodyWorkers | undefined
  parent?: MultiPart | undefined
  providers?: { [x: string]: unknown } | undefined
  bodyParts?: BodyPart[] | undefined
  parameterizedHeaders?: { empty?: boolean | undefined } | undefined
}
type FormDataContentDisposition = {
  type?: string | undefined
  parameters?: { [x: string]: string } | undefined
  fileName?: string | undefined
  creationDate?: string | undefined
  modificationDate?: string | undefined
  readDate?: string | undefined
  size?: bigint | undefined
  name?: string | undefined
}
type FormDataBodyPart = {
  contentDisposition?: ContentDisposition | undefined
  entity?: { [x: string]: unknown } | undefined
  headers?: { empty?: boolean | undefined } | undefined
  mediaType?:
    | {
        type?: string | undefined
        subtype?: string | undefined
        parameters?: { [x: string]: string } | undefined
        wildcardType?: boolean | undefined
        wildcardSubtype?: boolean | undefined
      }
    | undefined
  messageBodyWorkers?: MessageBodyWorkers | undefined
  parent?: MultiPart | undefined
  providers?: { [x: string]: unknown } | undefined
  name?: string | undefined
  value?: string | undefined
  formDataContentDisposition?: FormDataContentDisposition | undefined
  simple?: boolean | undefined
  parameterizedHeaders?: { empty?: boolean | undefined } | undefined
}
type ZoneOffset = { id?: string | undefined; rules?: ZoneRules | undefined }
type ZoneOffsetTransition = {
  offsetBefore?: ZoneOffset | undefined
  offsetAfter?: ZoneOffset | undefined
  dateTimeAfter?: string | undefined
  dateTimeBefore?: string | undefined
}
type ZoneRules = { transitions?: ZoneOffsetTransition[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/nestedTest': {
      $put: {
        input: {
          json: {
            foo?: string | undefined
            arr?: string[][][][][][][][][] | undefined
            obj?:
              | {
                  ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff?:
                    | { fooa?: { 'foob:'?: { fooc?: string | undefined } | undefined } | undefined }
                    | undefined
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/circular': {
      $put:
        | {
            input: { header: { Authorization: string } } & {
              form: { file?: FormDataBodyPart | undefined; typename?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { Authorization: string } } & {
              form: { file?: FormDataBodyPart | undefined; typename?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & {
              form: { file?: FormDataBodyPart | undefined; typename?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & {
              form: { file?: FormDataBodyPart | undefined; typename?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/not-quite-circular': {
      $post: {
        input: { json: { rules?: ZoneRules | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
