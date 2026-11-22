import { OpenAPIHono } from '@hono/zod-openapi'
import { getMerchantIdOrderreturnsReturnIdRoute, getMerchantIdOrderreturnsRoute } from '../routes'

const app = new OpenAPIHono()

export const orderreturnsHandler = app
  .openapi(getMerchantIdOrderreturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrderreturnsReturnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
