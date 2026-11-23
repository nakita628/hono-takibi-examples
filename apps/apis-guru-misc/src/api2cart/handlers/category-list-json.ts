import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoryListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryListJsonHandler = app.openapi(getCategoryListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
