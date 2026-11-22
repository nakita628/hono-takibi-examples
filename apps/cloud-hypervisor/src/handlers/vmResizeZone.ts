import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmResizeZoneRoute } from '../routes'

const app = new OpenAPIHono()

export const vmResizeZoneHandler = app.openapi(putVmResizeZoneRoute, (c) => {
  throw new Error('Not implemented')
})
