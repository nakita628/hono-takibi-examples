import { OpenAPIHono } from '@hono/zod-openapi'
import { postOperationRoute } from '../routes'

const app = new OpenAPIHono()

export const operationHandler = app.openapi(postOperationRoute, (c) => {
  throw new Error('Not implemented')
})
