import { OpenAPIHono } from '@hono/zod-openapi'
import { patchXHeadersRoute, postXHeadersRoute } from '../routes'

const app = new OpenAPIHono()

export const staticallyDefinedHeadersHandler = app
  .openapi(postXHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchXHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
