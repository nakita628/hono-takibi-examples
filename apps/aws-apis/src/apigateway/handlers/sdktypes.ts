import { OpenAPIHono } from '@hono/zod-openapi'
import { getSdktypesRoute, getSdktypesSdktypeIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sdktypesHandler = app
  .openapi(getSdktypesSdktypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSdktypesRoute, (c) => {
    throw new Error('Not implemented')
  })
