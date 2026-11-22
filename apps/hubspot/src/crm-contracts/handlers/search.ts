import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609ContractsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609ContractsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
