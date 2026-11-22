import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsTierPricesRoute, putV1ProductsTierPricesRoute } from '../routes'

const app = new OpenAPIHono()

export const productsTierPricesHandler = app
  .openapi(postV1ProductsTierPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsTierPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
