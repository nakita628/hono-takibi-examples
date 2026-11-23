import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmRemoveDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const vmRemoveDeviceHandler = app.openapi(putVmRemoveDeviceRoute, (c) => {
  throw new Error('Not implemented')
})
