import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayGatewaysGatewayIdDatasetsIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdDatasetsIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdDatasetsRoute,
  postAccountsAccountIdAiGatewayGatewaysGatewayIdDatasetsRoute,
  putAccountsAccountIdAiGatewayGatewaysGatewayIdDatasetsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayDatasetsHandler = app
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayGatewaysGatewayIdDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayGatewaysGatewayIdDatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdDatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAiGatewayGatewaysGatewayIdDatasetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
