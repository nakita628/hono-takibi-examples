import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductFindJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productFindJsonHandler = app.openapi(getProductFindJsonRoute, (c) => {
  throw new Error('Not implemented')
})
