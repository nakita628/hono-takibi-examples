import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3VaultPaymentTokensIdRoute,
  getV3VaultPaymentTokensIdRoute,
  getV3VaultPaymentTokensRoute,
  getV3VaultSetupTokensIdRoute,
  postV3VaultPaymentTokensRoute,
  postV3VaultSetupTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
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
  .openapi(postV3VaultSetupTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VaultSetupTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
