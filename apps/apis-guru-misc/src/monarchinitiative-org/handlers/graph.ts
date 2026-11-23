import type { RouteHandler } from '@hono/zod-openapi'
import type { getGraphEdgesFromIdRoute, getGraphNodeIdRoute } from '../routes'

export const getGraphEdgesFromIdRouteHandler: RouteHandler<
  typeof getGraphEdgesFromIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGraphNodeIdRouteHandler: RouteHandler<typeof getGraphNodeIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
