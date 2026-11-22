import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayGatewaysGatewayIdModelAliasesIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdModelAliasesIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdModelAliasesRoute,
  postAccountsAccountIdAiGatewayGatewaysGatewayIdModelAliasesRoute,
  putAccountsAccountIdAiGatewayGatewaysGatewayIdModelAliasesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayModelAliasesHandler = app
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdModelAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayGatewaysGatewayIdModelAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayGatewaysGatewayIdModelAliasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdModelAliasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAiGatewayGatewaysGatewayIdModelAliasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
