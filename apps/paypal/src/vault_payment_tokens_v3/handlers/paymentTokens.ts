import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3VaultPaymentTokensIdRoute,
  getV3VaultPaymentTokensIdRoute,
  getV3VaultPaymentTokensRoute,
  postV3VaultPaymentTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentTokensHandler = app
  .openapi(postV3VaultPaymentTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VaultPaymentTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VaultPaymentTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3VaultPaymentTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
