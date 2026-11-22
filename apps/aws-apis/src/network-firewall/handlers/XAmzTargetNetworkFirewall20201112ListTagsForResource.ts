import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112ListTagsForResourceHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
