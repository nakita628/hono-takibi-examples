import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateTagsForResourceRoute,
  postActionUpdateTagsForResourceRoute,
} from '../routes'

export const getActionUpdateTagsForResourceRouteHandler: RouteHandler<
  typeof getActionUpdateTagsForResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateTagsForResourceRouteHandler: RouteHandler<
  typeof postActionUpdateTagsForResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
