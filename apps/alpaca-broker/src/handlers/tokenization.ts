import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AccountsAccountIdTokenizationRequestsByClientRequestIdRoute,
  getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdRoute,
  getV1AccountsAccountIdTokenizationRequestsRoute,
  getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdRoute,
  postV1AccountsAccountIdTokenizationCallbackMintRoute,
  postV1AccountsAccountIdTokenizationCallbackRedeemRoute,
  postV1AccountsAccountIdTokenizationMintRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokenizationHandler = app
  .openapi(postV1AccountsAccountIdTokenizationCallbackMintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdTokenizationCallbackRedeemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdTokenizationMintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTokenizationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTokenizationRequestsTokenizationRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTokenizationRequestsByClientRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTokenizationRequestsByIssuerRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
