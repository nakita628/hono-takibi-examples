import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetSpotPlacementScoresRoute,
  postActionGetSpotPlacementScoresRoute,
} from '../routes'

export const getActionGetSpotPlacementScoresRouteHandler: RouteHandler<
  typeof getActionGetSpotPlacementScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSpotPlacementScoresRouteHandler: RouteHandler<
  typeof postActionGetSpotPlacementScoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}
