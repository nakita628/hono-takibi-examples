import type { RouteHandler } from '@hono/zod-openapi'
import type { getPollStatusPollIdRoute } from '../routes'

export const getPollStatusPollIdRouteHandler: RouteHandler<
  typeof getPollStatusPollIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
