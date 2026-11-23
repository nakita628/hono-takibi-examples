import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteChangeSetRoute, postActionDeleteChangeSetRoute } from '../routes'

export const getActionDeleteChangeSetRouteHandler: RouteHandler<
  typeof getActionDeleteChangeSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteChangeSetRouteHandler: RouteHandler<
  typeof postActionDeleteChangeSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
