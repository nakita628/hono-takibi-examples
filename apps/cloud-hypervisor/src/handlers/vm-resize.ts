import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmResizeRoute } from '../routes'

const app = new OpenAPIHono()

export const vmResizeHandler = app.openapi(putVmResizeRoute, (c) => {
  throw new Error('Not implemented')
})
