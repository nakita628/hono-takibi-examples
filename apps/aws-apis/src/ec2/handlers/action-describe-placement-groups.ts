import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribePlacementGroupsRoute,
  postActionDescribePlacementGroupsRoute,
} from '../routes'

export const getActionDescribePlacementGroupsRouteHandler: RouteHandler<
  typeof getActionDescribePlacementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribePlacementGroupsRouteHandler: RouteHandler<
  typeof postActionDescribePlacementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
