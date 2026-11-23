import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const vmCreateHandler = app.openapi(putVmCreateRoute, (c) => {
  throw new Error('Not implemented')
})
