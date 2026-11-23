import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateTagsRoute, postActionCreateTagsRoute } from '../routes'

export const getActionCreateTagsRouteHandler: RouteHandler<
  typeof getActionCreateTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTagsRouteHandler: RouteHandler<
  typeof postActionCreateTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
