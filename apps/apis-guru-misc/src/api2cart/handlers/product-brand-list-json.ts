import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductBrandListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productBrandListJsonHandler = app.openapi(getProductBrandListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
