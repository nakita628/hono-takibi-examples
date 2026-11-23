import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateNetworkInsightsPathRoute,
  postActionCreateNetworkInsightsPathRoute,
} from '../routes'

export const getActionCreateNetworkInsightsPathRouteHandler: RouteHandler<
  typeof getActionCreateNetworkInsightsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateNetworkInsightsPathRouteHandler: RouteHandler<
  typeof postActionCreateNetworkInsightsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
