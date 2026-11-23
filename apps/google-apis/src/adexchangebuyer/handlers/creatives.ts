import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCreativesAccountIdBuyerCreativeIdListDealsRoute,
  getCreativesAccountIdBuyerCreativeIdRoute,
  getCreativesRoute,
  postCreativesAccountIdBuyerCreativeIdAddDealDealIdRoute,
  postCreativesAccountIdBuyerCreativeIdRemoveDealDealIdRoute,
  postCreativesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creativesHandler = app
  .openapi(getCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreativesAccountIdBuyerCreativeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreativesAccountIdBuyerCreativeIdAddDealDealIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreativesAccountIdBuyerCreativeIdListDealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreativesAccountIdBuyerCreativeIdRemoveDealDealIdRoute, (c) => {
    throw new Error('Not implemented')
  })
