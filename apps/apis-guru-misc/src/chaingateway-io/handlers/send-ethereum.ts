import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendEthereumRoute } from '../routes'

export const postSendEthereumRouteHandler: RouteHandler<typeof postSendEthereumRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
