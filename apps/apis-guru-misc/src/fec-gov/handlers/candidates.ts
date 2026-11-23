import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCandidatesIndexRoute,
  getCandidatesSearchIndexRoute,
  getCandidatesTotalsAggregatesIndexRoute,
  getCandidatesTotalsByOfficeByPartyIndexRoute,
  getCandidatesTotalsByOfficeIndexRoute,
  getCandidatesTotalsIndexRoute,
} from '../routes'

export const getCandidatesIndexRouteHandler: RouteHandler<typeof getCandidatesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCandidatesSearchIndexRouteHandler: RouteHandler<
  typeof getCandidatesSearchIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCandidatesTotalsIndexRouteHandler: RouteHandler<
  typeof getCandidatesTotalsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCandidatesTotalsAggregatesIndexRouteHandler: RouteHandler<
  typeof getCandidatesTotalsAggregatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCandidatesTotalsByOfficeIndexRouteHandler: RouteHandler<
  typeof getCandidatesTotalsByOfficeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCandidatesTotalsByOfficeByPartyIndexRouteHandler: RouteHandler<
  typeof getCandidatesTotalsByOfficeByPartyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
