import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAddTagsToResourceRoute, postActionAddTagsToResourceRoute } from '../routes'

export const getActionAddTagsToResourceRouteHandler: RouteHandler<
  typeof getActionAddTagsToResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAddTagsToResourceRouteHandler: RouteHandler<
  typeof postActionAddTagsToResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
