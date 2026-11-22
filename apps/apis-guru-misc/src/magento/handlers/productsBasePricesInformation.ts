import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsBasePricesInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const productsBasePricesInformationHandler = app.openapi(
  postV1ProductsBasePricesInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
