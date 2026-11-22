import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayCustomProvidersCostsIdRoute,
  getAccountsAccountIdAiGatewayCustomProvidersCostsIdRoute,
  getAccountsAccountIdAiGatewayCustomProvidersCostsRoute,
  patchAccountsAccountIdAiGatewayCustomProvidersCostsIdRoute,
  postAccountsAccountIdAiGatewayCustomProvidersCostsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayCustomProviderCostsHandler = app
  .openapi(getAccountsAccountIdAiGatewayCustomProvidersCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayCustomProvidersCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayCustomProvidersCostsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayCustomProvidersCostsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAiGatewayCustomProvidersCostsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
