import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsAttributesTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributesTypesHandler = app.openapi(
  getV1ProductsAttributesTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
