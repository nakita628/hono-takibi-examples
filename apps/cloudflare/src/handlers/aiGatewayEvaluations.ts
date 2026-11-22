import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiGatewayGatewaysGatewayIdEvaluationsIdRoute,
  getAccountsAccountIdAiGatewayEvaluationTypesRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdEvaluationsIdRoute,
  getAccountsAccountIdAiGatewayGatewaysGatewayIdEvaluationsRoute,
  postAccountsAccountIdAiGatewayGatewaysGatewayIdEvaluationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayEvaluationsHandler = app
  .openapi(getAccountsAccountIdAiGatewayEvaluationTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiGatewayGatewaysGatewayIdEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiGatewayGatewaysGatewayIdEvaluationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayGatewaysGatewayIdEvaluationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
