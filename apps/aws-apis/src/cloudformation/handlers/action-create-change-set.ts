import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateChangeSetRoute, postActionCreateChangeSetRoute } from '../routes'

export const getActionCreateChangeSetRouteHandler: RouteHandler<
  typeof getActionCreateChangeSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateChangeSetRouteHandler: RouteHandler<
  typeof postActionCreateChangeSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
