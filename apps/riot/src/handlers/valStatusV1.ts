import { OpenAPIHono } from '@hono/zod-openapi'
import { getValStatusV1PlatformDataRoute } from '../routes'

const app = new OpenAPIHono()

export const valStatusV1Handler = app.openapi(getValStatusV1PlatformDataRoute, (c) => {
  throw new Error('Not implemented')
})
