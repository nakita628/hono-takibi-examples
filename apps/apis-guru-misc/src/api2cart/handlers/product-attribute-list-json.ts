import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductAttributeListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productAttributeListJsonHandler = app.openapi(
  getProductAttributeListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
