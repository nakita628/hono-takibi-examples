import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ServerDebugRoute, postApiV1ServerDebugRunCommandRoute } from '../routes'

const app = new OpenAPIHono()

export const debugHandler = app
  .openapi(getApiV1ServerDebugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerDebugRunCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
