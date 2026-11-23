import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getElectioneeringAggregatesIndexRoute,
  getElectioneeringByCandidateIndexRoute,
  getElectioneeringIndexRoute,
  getElectioneeringTotalsByCandidateIndexRoute,
} from '../routes'

export const getElectioneeringIndexRouteHandler: RouteHandler<
  typeof getElectioneeringIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getElectioneeringAggregatesIndexRouteHandler: RouteHandler<
  typeof getElectioneeringAggregatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getElectioneeringByCandidateIndexRouteHandler: RouteHandler<
  typeof getElectioneeringByCandidateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getElectioneeringTotalsByCandidateIndexRouteHandler: RouteHandler<
  typeof getElectioneeringTotalsByCandidateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
