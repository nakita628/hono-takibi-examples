import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmBootRoute } from '../routes'

const app = new OpenAPIHono()

export const vmBootHandler = app.openapi(putVmBootRoute, (c) => {
  throw new Error('Not implemented')
})
