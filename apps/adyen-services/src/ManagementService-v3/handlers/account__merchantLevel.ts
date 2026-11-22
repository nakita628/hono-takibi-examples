import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantsMerchantIdRoute,
  getMerchantsRoute,
  postMerchantsMerchantIdActivateRoute,
  postMerchantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const account__merchantLevelHandler = app
  .openapi(getMerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
