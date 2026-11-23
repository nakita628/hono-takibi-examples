import type { RouteHandler } from '@hono/zod-openapi'
import type { postChannelsStopRoute } from '../routes'

export const postChannelsStopRouteHandler: RouteHandler<typeof postChannelsStopRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
