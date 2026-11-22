import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdMnmVpcFlowsTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const magicNetworkMonitoringVPCFlowLogsHandler = app.openapi(
  postAccountsAccountIdMnmVpcFlowsTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
