import { OpenAPIHono } from '@hono/zod-openapi'
import { getMerchantIdPromotionsIdRoute, postMerchantIdPromotionsRoute } from '../routes'

const app = new OpenAPIHono()

export const promotionsHandler = app
  .openapi(postMerchantIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdPromotionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
