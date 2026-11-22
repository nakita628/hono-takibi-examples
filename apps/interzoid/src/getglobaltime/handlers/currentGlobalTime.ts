import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetglobaltimeRoute } from '../routes'

const app = new OpenAPIHono()

export const currentGlobalTimeHandler = app.openapi(getGetglobaltimeRoute, (c) => {
  throw new Error('Not implemented')
})
