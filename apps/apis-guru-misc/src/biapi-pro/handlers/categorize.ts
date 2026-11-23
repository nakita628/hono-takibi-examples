import { OpenAPIHono } from '@hono/zod-openapi'
import { postCategorizeRoute } from '../routes'

const app = new OpenAPIHono()

export const categorizeHandler = app.openapi(postCategorizeRoute, (c) => {
  throw new Error('Not implemented')
})
