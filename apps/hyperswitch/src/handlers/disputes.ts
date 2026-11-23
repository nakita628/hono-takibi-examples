import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDisputesEvidenceRoute,
  getDisputesAggregateRoute,
  getDisputesDisputeIdRoute,
  getDisputesEvidenceDisputeIdRoute,
  getDisputesFilterRoute,
  getDisputesListRoute,
  getDisputesProfileAggregateRoute,
  getDisputesProfileFilterRoute,
  getDisputesProfileListRoute,
  postDisputesAcceptDisputeIdRoute,
  postDisputesEvidenceRoute,
  putDisputesEvidenceRoute,
} from '../routes'

export const getDisputesDisputeIdRouteHandler: RouteHandler<
  typeof getDisputesDisputeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDisputesListRouteHandler: RouteHandler<typeof getDisputesListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDisputesProfileListRouteHandler: RouteHandler<
  typeof getDisputesProfileListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDisputesFilterRouteHandler: RouteHandler<typeof getDisputesFilterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDisputesProfileFilterRouteHandler: RouteHandler<
  typeof getDisputesProfileFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDisputesAcceptDisputeIdRouteHandler: RouteHandler<
  typeof postDisputesAcceptDisputeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDisputesEvidenceRouteHandler: RouteHandler<
  typeof postDisputesEvidenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDisputesEvidenceRouteHandler: RouteHandler<
  typeof putDisputesEvidenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDisputesEvidenceRouteHandler: RouteHandler<
  typeof deleteDisputesEvidenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDisputesEvidenceDisputeIdRouteHandler: RouteHandler<
  typeof getDisputesEvidenceDisputeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDisputesAggregateRouteHandler: RouteHandler<
  typeof getDisputesAggregateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDisputesProfileAggregateRouteHandler: RouteHandler<
  typeof getDisputesProfileAggregateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
