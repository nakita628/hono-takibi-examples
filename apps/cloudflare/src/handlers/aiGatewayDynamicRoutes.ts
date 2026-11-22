import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdDeploymentsRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdVersionsRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdVersionsVersionIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesRoute,
  patchAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdRoute,
  postAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdDeploymentsRoute,
  postAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdVersionsRoute,
  postAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayDynamicRoutesHandler = app
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdRoutesIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
