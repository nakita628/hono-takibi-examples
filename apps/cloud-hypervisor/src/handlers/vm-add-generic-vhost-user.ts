import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmAddGenericVhostUserRoute } from '../routes'

const app = new OpenAPIHono()

export const vmAddGenericVhostUserHandler = app.openapi(putVmAddGenericVhostUserRoute, (c) => {
  throw new Error('Not implemented')
})
