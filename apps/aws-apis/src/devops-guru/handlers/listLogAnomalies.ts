import { OpenAPIHono } from '@hono/zod-openapi'
import { postListLogAnomaliesRoute } from '../routes'

const app = new OpenAPIHono()

export const listLogAnomaliesHandler = app.openapi(postListLogAnomaliesRoute, (c) => {
  throw new Error('Not implemented')
})
