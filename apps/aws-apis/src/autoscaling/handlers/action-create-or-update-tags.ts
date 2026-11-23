import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateOrUpdateTagsRoute, postActionCreateOrUpdateTagsRoute } from '../routes'

export const getActionCreateOrUpdateTagsRouteHandler: RouteHandler<
  typeof getActionCreateOrUpdateTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateOrUpdateTagsRouteHandler: RouteHandler<
  typeof postActionCreateOrUpdateTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
