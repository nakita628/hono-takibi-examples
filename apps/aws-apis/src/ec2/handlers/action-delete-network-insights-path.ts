import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteNetworkInsightsPathRoute,
  postActionDeleteNetworkInsightsPathRoute,
} from '../routes'

export const getActionDeleteNetworkInsightsPathRouteHandler: RouteHandler<
  typeof getActionDeleteNetworkInsightsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteNetworkInsightsPathRouteHandler: RouteHandler<
  typeof postActionDeleteNetworkInsightsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
