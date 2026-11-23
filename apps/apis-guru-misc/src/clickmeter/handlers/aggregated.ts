import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAggregatedListRoute,
  getAggregatedRoute,
  getAggregatedSummaryConversionsRoute,
  getAggregatedSummaryDatapointsRoute,
  getAggregatedSummaryGroupsRoute,
} from '../routes'

export const getAggregatedRouteHandler: RouteHandler<typeof getAggregatedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAggregatedListRouteHandler: RouteHandler<typeof getAggregatedListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAggregatedSummaryConversionsRouteHandler: RouteHandler<
  typeof getAggregatedSummaryConversionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAggregatedSummaryDatapointsRouteHandler: RouteHandler<
  typeof getAggregatedSummaryDatapointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAggregatedSummaryGroupsRouteHandler: RouteHandler<
  typeof getAggregatedSummaryGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
