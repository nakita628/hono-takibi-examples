import type { RouteHandler } from '@hono/zod-openapi'
import type { getPullrequestsSelectedUserRoute } from '../routes'

export const getPullrequestsSelectedUserRouteHandler: RouteHandler<
  typeof getPullrequestsSelectedUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
