import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsTierPricesInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const productsTierPricesInformationHandler = app.openapi(
  postV1ProductsTierPricesInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
