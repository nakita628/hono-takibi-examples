import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdShoppingadsprogramRoute,
  postMerchantIdShoppingadsprogramRequestreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shoppingadsprogramHandler = app
  .openapi(getMerchantIdShoppingadsprogramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdShoppingadsprogramRequestreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
