import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112DeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DeleteResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
