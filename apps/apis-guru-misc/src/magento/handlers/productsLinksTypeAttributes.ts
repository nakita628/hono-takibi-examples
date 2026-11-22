import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsLinksTypeAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsLinksTypeAttributesHandler = app.openapi(
  getV1ProductsLinksTypeAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
