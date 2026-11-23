import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCommunicationCostsAggregatesIndexRoute,
  getCommunicationCostsByCandidateIndexRoute,
  getCommunicationCostsIndexRoute,
  getCommunicationCostsTotalsByCandidateIndexRoute,
} from '../routes'

export const getCommunicationCostsIndexRouteHandler: RouteHandler<
  typeof getCommunicationCostsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationCostsAggregatesIndexRouteHandler: RouteHandler<
  typeof getCommunicationCostsAggregatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationCostsByCandidateIndexRouteHandler: RouteHandler<
  typeof getCommunicationCostsByCandidateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationCostsTotalsByCandidateIndexRouteHandler: RouteHandler<
  typeof getCommunicationCostsTotalsByCandidateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
