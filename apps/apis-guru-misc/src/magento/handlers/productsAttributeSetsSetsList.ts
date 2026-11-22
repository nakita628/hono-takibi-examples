import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProductsAttributeSetsSetsListRoute } from '../routes'

const app = new OpenAPIHono()

export const productsAttributeSetsSetsListHandler = app.openapi(
  getV1ProductsAttributeSetsSetsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
