import { OpenAPIHono } from '@hono/zod-openapi'
import { putCategoryUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryUpdateJsonHandler = app.openapi(putCategoryUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
