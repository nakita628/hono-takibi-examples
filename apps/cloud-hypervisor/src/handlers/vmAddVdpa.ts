import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmAddVdpaRoute } from '../routes'

const app = new OpenAPIHono()

export const vmAddVdpaHandler = app.openapi(putVmAddVdpaRoute, (c) => {
  throw new Error('Not implemented')
})
