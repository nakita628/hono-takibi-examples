import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayGatewaysGatewayIdCustomDomainsHostnameRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdCustomDomainsHostnameRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdCustomDomainsRoute,
  postAccountsAccountIdAiGatewayGatewaysGatewayIdCustomDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayCustomDomainsHandler = app
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdCustomDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayGatewaysGatewayIdCustomDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayGatewaysGatewayIdCustomDomainsHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdCustomDomainsHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
