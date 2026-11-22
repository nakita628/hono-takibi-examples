import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsTierPricesDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const productsTierPricesDeleteHandler = app.openapi(
  postV1ProductsTierPricesDeleteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
