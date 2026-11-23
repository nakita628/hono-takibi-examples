import type { RouteHandler } from '@hono/zod-openapi'
import type { getEntityTypeIdTagsRoute, postEntityTypeIdChangeTagsRoute } from '../routes'

export const postEntityTypeIdChangeTagsRouteHandler: RouteHandler<
  typeof postEntityTypeIdChangeTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEntityTypeIdTagsRouteHandler: RouteHandler<
  typeof getEntityTypeIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
