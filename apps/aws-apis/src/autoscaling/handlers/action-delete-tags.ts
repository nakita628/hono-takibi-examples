import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteTagsRoute, postActionDeleteTagsRoute } from '../routes'

export const getActionDeleteTagsRouteHandler: RouteHandler<
  typeof getActionDeleteTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteTagsRouteHandler: RouteHandler<
  typeof postActionDeleteTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
