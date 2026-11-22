import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112UntagResourceHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
