import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2MerchantsMerchantIdRoute, getV2MerchantsRoute } from '../routes'

const app = new OpenAPIHono()

export const merchantsHandler = app
  .openapi(getV2MerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MerchantsMerchantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
