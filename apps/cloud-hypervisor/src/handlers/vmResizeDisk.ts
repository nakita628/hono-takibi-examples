import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmResizeDiskRoute } from '../routes'

const app = new OpenAPIHono()

export const vmResizeDiskHandler = app.openapi(putVmResizeDiskRoute, (c) => {
  throw new Error('Not implemented')
})
