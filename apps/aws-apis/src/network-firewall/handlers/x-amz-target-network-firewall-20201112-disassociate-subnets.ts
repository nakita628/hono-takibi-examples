import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DisassociateSubnetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112DisassociateSubnetsHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DisassociateSubnetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
