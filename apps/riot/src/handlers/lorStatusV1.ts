import { OpenAPIHono } from '@hono/zod-openapi'
import { getLorStatusV1PlatformDataRoute } from '../routes'

const app = new OpenAPIHono()

export const lorStatusV1Handler = app.openapi(getLorStatusV1PlatformDataRoute, (c) => {
  throw new Error('Not implemented')
})
