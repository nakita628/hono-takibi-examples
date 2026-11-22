import { OpenAPIHono } from '@hono/zod-openapi'
import { getSuggestionsRoute, getSuggestionsSellerIdSellerSkuIdRoute } from '../routes'

const app = new OpenAPIHono()

export const getSuggestionsHandler = app
  .openapi(getSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuggestionsSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
