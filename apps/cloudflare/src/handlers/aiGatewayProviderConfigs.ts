import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsRoute,
  postAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsIdTestRoute,
  postAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsRoute,
  putAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayProviderConfigsHandler = app
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayGatewaysGatewayIdProviderConfigsIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
