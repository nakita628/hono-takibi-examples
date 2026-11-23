import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112AssociateSubnetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112AssociateSubnetsHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112AssociateSubnetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
