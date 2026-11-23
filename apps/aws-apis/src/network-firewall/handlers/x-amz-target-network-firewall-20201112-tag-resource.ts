import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112TagResourceHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
