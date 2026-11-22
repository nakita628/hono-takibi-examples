import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsSpecialPriceDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const productsSpecialPriceDeleteHandler = app.openapi(
  postV1ProductsSpecialPriceDeleteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
