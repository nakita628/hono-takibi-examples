import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRemoveTagsFromResourceRoute,
  postActionRemoveTagsFromResourceRoute,
} from '../routes'

export const getActionRemoveTagsFromResourceRouteHandler: RouteHandler<
  typeof getActionRemoveTagsFromResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemoveTagsFromResourceRouteHandler: RouteHandler<
  typeof postActionRemoveTagsFromResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
