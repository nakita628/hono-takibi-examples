import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifySpotFleetRequestRoute,
  postActionModifySpotFleetRequestRoute,
} from '../routes'

export const getActionModifySpotFleetRequestRouteHandler: RouteHandler<
  typeof getActionModifySpotFleetRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifySpotFleetRequestRouteHandler: RouteHandler<
  typeof postActionModifySpotFleetRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
