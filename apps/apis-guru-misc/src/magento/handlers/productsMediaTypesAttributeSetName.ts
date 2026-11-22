import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsMediaTypesAttributeSetNameRoute } from '../routes'

const app = new OpenAPIHono()

export const productsMediaTypesAttributeSetNameHandler = app.openapi(
  getV1ProductsMediaTypesAttributeSetNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
