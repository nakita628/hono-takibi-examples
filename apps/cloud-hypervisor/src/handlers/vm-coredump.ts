import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmCoredumpRoute } from '../routes'

const app = new OpenAPIHono()

export const vmCoredumpHandler = app.openapi(putVmCoredumpRoute, (c) => {
  throw new Error('Not implemented')
})
