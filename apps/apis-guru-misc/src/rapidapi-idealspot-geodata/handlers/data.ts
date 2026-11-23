import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDataInsightsInsightIdQueryRoute,
  getDataInsightsInsightIdRoute,
  getDataInsightsRoute,
} from '../routes'

export const getDataInsightsRouteHandler: RouteHandler<typeof getDataInsightsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataInsightsInsightIdRouteHandler: RouteHandler<
  typeof getDataInsightsInsightIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataInsightsInsightIdQueryRouteHandler: RouteHandler<
  typeof getDataInsightsInsightIdQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
