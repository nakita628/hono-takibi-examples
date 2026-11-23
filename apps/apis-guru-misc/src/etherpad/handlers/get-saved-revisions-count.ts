import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetSavedRevisionsCountRoute, postGetSavedRevisionsCountRoute } from '../routes'

export const getGetSavedRevisionsCountRouteHandler: RouteHandler<
  typeof getGetSavedRevisionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGetSavedRevisionsCountRouteHandler: RouteHandler<
  typeof postGetSavedRevisionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
