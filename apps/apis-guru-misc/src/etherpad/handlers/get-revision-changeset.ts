import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetRevisionChangesetRoute, postGetRevisionChangesetRoute } from '../routes'

export const getGetRevisionChangesetRouteHandler: RouteHandler<
  typeof getGetRevisionChangesetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGetRevisionChangesetRouteHandler: RouteHandler<
  typeof postGetRevisionChangesetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
