import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendMediaGroupRoute } from '../routes'

export const postSendMediaGroupRouteHandler: RouteHandler<typeof postSendMediaGroupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
