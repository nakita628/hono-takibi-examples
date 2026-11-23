import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeletePlacementGroupRoute,
  postActionDeletePlacementGroupRoute,
} from '../routes'

export const getActionDeletePlacementGroupRouteHandler: RouteHandler<
  typeof getActionDeletePlacementGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeletePlacementGroupRouteHandler: RouteHandler<
  typeof postActionDeletePlacementGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
