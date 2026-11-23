import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmAddNetRoute } from '../routes'

const app = new OpenAPIHono()

export const vmAddNetHandler = app.openapi(putVmAddNetRoute, (c) => {
  throw new Error('Not implemented')
})
