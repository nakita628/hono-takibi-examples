import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApplePaySessionsRoute,
  postCalculateTaxRoute,
  postOriginKeysRoute,
  postPaypalUpdateOrderRoute,
  postValidateShopperIdRoute,
  postVerifyShopperTaxIdentificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const utilityHandler = app
  .openapi(postApplePaySessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOriginKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaypalUpdateOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateTaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postValidateShopperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifyShopperTaxIdentificationRoute, (c) => {
    throw new Error('Not implemented')
  })
