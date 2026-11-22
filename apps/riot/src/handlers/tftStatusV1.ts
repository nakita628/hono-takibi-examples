import { OpenAPIHono } from '@hono/zod-openapi'
import { getTftStatusV1PlatformDataRoute } from '../routes'

const app = new OpenAPIHono()

export const tftStatusV1Handler = app.openapi(getTftStatusV1PlatformDataRoute, (c) => {
  throw new Error('Not implemented')
})
