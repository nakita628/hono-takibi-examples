import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApplePaySessionsRoute,
  postOriginKeysRoute,
  postPaypalUpdateOrderRoute,
  postValidateShopperIdRoute,
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
  .openapi(postValidateShopperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
