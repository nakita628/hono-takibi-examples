import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmAddUserDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const vmAddUserDeviceHandler = app.openapi(putVmAddUserDeviceRoute, (c) => {
  throw new Error('Not implemented')
})
