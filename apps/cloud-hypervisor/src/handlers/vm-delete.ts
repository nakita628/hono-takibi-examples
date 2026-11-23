import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const vmDeleteHandler = app.openapi(putVmDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
