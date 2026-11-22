import { OpenAPIHono } from '@hono/zod-openapi'
import { postExecuteSqlRoute } from '../routes'

const app = new OpenAPIHono()

export const ExecuteSqlHandler = app.openapi(postExecuteSqlRoute, (c) => {
  throw new Error('Not implemented')
})
