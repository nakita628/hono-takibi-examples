import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListTagsForResourceRoute,
  postActionListTagsForResourceRoute,
} from '../routes'

export const getActionListTagsForResourceRouteHandler: RouteHandler<
  typeof getActionListTagsForResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListTagsForResourceRouteHandler: RouteHandler<
  typeof postActionListTagsForResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
