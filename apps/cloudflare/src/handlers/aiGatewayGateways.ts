import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayGatewaysIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdUrlProviderRoute,
  getAccountsAccountIdAiGatewayGatewaysIdRoute,
  getAccountsAccountIdAiGatewayGatewaysRoute,
  postAccountsAccountIdAiGatewayGatewaysRoute,
  putAccountsAccountIdAiGatewayGatewaysIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayGatewaysHandler = app
  .openapi(getAccountsAccountIdAiGatewayGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdUrlProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAiGatewayGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
