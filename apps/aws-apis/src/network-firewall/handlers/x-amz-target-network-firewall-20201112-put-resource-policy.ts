import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112PutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112PutResourcePolicyHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112PutResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
