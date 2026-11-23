import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInsightsInsightArnRoute,
  getInsightsResultsInsightArnRoute,
  patchInsightsInsightArnRoute,
  postInsightsGetRoute,
  postInsightsRoute,
} from '../routes'

export const postInsightsRouteHandler: RouteHandler<typeof postInsightsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInsightsInsightArnRouteHandler: RouteHandler<
  typeof deleteInsightsInsightArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchInsightsInsightArnRouteHandler: RouteHandler<
  typeof patchInsightsInsightArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsightsResultsInsightArnRouteHandler: RouteHandler<
  typeof getInsightsResultsInsightArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInsightsGetRouteHandler: RouteHandler<typeof postInsightsGetRoute> = async (c) => {
  throw new Error('Not implemented')
}
