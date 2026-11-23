import { OpenAPIHono } from '@hono/zod-openapi'
import { postCategoryUnassignJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryUnassignJsonHandler = app.openapi(postCategoryUnassignJsonRoute, (c) => {
  throw new Error('Not implemented')
})
