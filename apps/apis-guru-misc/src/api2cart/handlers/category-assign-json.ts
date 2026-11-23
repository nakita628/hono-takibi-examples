import { OpenAPIHono } from '@hono/zod-openapi'
import { postCategoryAssignJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryAssignJsonHandler = app.openapi(postCategoryAssignJsonRoute, (c) => {
  throw new Error('Not implemented')
})
