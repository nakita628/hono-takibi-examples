import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteNetworkInsightsAnalysisRoute,
  postActionDeleteNetworkInsightsAnalysisRoute,
} from '../routes'

export const getActionDeleteNetworkInsightsAnalysisRouteHandler: RouteHandler<
  typeof getActionDeleteNetworkInsightsAnalysisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteNetworkInsightsAnalysisRouteHandler: RouteHandler<
  typeof postActionDeleteNetworkInsightsAnalysisRoute
> = async (c) => {
  throw new Error('Not implemented')
}
