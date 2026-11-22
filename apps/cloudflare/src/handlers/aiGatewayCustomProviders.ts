import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayCustomProvidersIdRoute,
  getAccountsAccountIdAiGatewayCustomProvidersIdRoute,
  getAccountsAccountIdAiGatewayCustomProvidersRoute,
  patchAccountsAccountIdAiGatewayCustomProvidersIdRoute,
  postAccountsAccountIdAiGatewayCustomProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayCustomProvidersHandler = app
  .openapi(getAccountsAccountIdAiGatewayCustomProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayCustomProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayCustomProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayCustomProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAiGatewayCustomProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
