import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendLocationRoute } from '../routes'

export const postSendLocationRouteHandler: RouteHandler<typeof postSendLocationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
