import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoryFindJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryFindJsonHandler = app.openapi(getCategoryFindJsonRoute, (c) => {
  throw new Error('Not implemented')
})
