import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFindingsFindingIdRevealAvailabilityRoute,
  getFindingsFindingIdRevealRoute,
  postFindingsDescribeRoute,
  postFindingsRoute,
  postFindingsSampleRoute,
  postFindingsStatisticsRoute,
} from '../routes'

export const postFindingsSampleRouteHandler: RouteHandler<typeof postFindingsSampleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFindingsStatisticsRouteHandler: RouteHandler<
  typeof postFindingsStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFindingsDescribeRouteHandler: RouteHandler<
  typeof postFindingsDescribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFindingsFindingIdRevealRouteHandler: RouteHandler<
  typeof getFindingsFindingIdRevealRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFindingsFindingIdRevealAvailabilityRouteHandler: RouteHandler<
  typeof getFindingsFindingIdRevealAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFindingsRouteHandler: RouteHandler<typeof postFindingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
