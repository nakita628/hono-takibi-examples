import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmNmiRoute } from '../routes'

const app = new OpenAPIHono()

export const vmNmiHandler = app.openapi(putVmNmiRoute, (c) => {
  throw new Error('Not implemented')
})
