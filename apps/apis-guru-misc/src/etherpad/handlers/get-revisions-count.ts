import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetRevisionsCountRoute, postGetRevisionsCountRoute } from '../routes'

export const getGetRevisionsCountRouteHandler: RouteHandler<
  typeof getGetRevisionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGetRevisionsCountRouteHandler: RouteHandler<
  typeof postGetRevisionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
