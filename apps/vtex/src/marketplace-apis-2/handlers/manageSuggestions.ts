import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuggestionsSellerIdSellerSkuIdRoute,
  putSuggestionsSellerIdSellerSkuIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageSuggestionsHandler = app
  .openapi(deleteSuggestionsSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSuggestionsSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
