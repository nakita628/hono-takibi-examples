import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreatePlacementGroupRoute,
  postActionCreatePlacementGroupRoute,
} from '../routes'

export const getActionCreatePlacementGroupRouteHandler: RouteHandler<
  typeof getActionCreatePlacementGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreatePlacementGroupRouteHandler: RouteHandler<
  typeof postActionCreatePlacementGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
