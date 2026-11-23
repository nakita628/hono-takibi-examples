import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionStartNetworkInsightsAnalysisRoute,
  postActionStartNetworkInsightsAnalysisRoute,
} from '../routes'

export const getActionStartNetworkInsightsAnalysisRouteHandler: RouteHandler<
  typeof getActionStartNetworkInsightsAnalysisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartNetworkInsightsAnalysisRouteHandler: RouteHandler<
  typeof postActionStartNetworkInsightsAnalysisRoute
> = async (c) => {
  throw new Error('Not implemented')
}
