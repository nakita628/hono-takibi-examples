import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsSpecialPriceInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSpecialPriceInformationHandler = app.openapi(
  postV1ProductsSpecialPriceInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
