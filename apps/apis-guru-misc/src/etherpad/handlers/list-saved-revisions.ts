import type { RouteHandler } from '@hono/zod-openapi'
import type { getListSavedRevisionsRoute, postListSavedRevisionsRoute } from '../routes'

export const getListSavedRevisionsRouteHandler: RouteHandler<
  typeof getListSavedRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postListSavedRevisionsRouteHandler: RouteHandler<
  typeof postListSavedRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
