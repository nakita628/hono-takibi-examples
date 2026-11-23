import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112UpdateSubnetChangeProtectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
