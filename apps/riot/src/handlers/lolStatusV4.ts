import { OpenAPIHono } from '@hono/zod-openapi'
import { getLolStatusV4PlatformDataRoute } from '../routes'

const app = new OpenAPIHono()

export const lolStatusV4Handler = app.openapi(getLolStatusV4PlatformDataRoute, (c) => {
  throw new Error('Not implemented')
})
