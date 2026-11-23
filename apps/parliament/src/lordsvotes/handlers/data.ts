import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDataDivisionsDivisionIdRoute,
  getDataDivisionsGroupedbypartyRoute,
  getDataDivisionsMembervotingRoute,
  getDataDivisionsSearchRoute,
  getDataDivisionsSearchTotalResultsRoute,
} from '../routes'

export const getDataDivisionsGroupedbypartyRouteHandler: RouteHandler<
  typeof getDataDivisionsGroupedbypartyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataDivisionsMembervotingRouteHandler: RouteHandler<
  typeof getDataDivisionsMembervotingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataDivisionsSearchRouteHandler: RouteHandler<
  typeof getDataDivisionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataDivisionsSearchTotalResultsRouteHandler: RouteHandler<
  typeof getDataDivisionsSearchTotalResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataDivisionsDivisionIdRouteHandler: RouteHandler<
  typeof getDataDivisionsDivisionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
