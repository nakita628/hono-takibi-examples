import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmAddDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const vmAddDeviceHandler = app.openapi(putVmAddDeviceRoute, (c) => {
  throw new Error('Not implemented')
})
