import type { RouteHandler } from '@hono/zod-openapi'
import type { getJourneyJourneyResultsFromToToRoute, getJourneyMetaModesRoute } from '../routes'

export const getJourneyJourneyResultsFromToToRouteHandler: RouteHandler<
  typeof getJourneyJourneyResultsFromToToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJourneyMetaModesRouteHandler: RouteHandler<
  typeof getJourneyMetaModesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
