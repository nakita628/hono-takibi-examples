import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFindingAggregatorDeleteFindingAggregatorArnRoute,
  getFindingAggregatorGetFindingAggregatorArnRoute,
  getFindingAggregatorListRoute,
  patchFindingAggregatorUpdateRoute,
  postFindingAggregatorCreateRoute,
} from '../routes'

export const postFindingAggregatorCreateRouteHandler: RouteHandler<
  typeof postFindingAggregatorCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFindingAggregatorDeleteFindingAggregatorArnRouteHandler: RouteHandler<
  typeof deleteFindingAggregatorDeleteFindingAggregatorArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFindingAggregatorGetFindingAggregatorArnRouteHandler: RouteHandler<
  typeof getFindingAggregatorGetFindingAggregatorArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFindingAggregatorListRouteHandler: RouteHandler<
  typeof getFindingAggregatorListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFindingAggregatorUpdateRouteHandler: RouteHandler<
  typeof patchFindingAggregatorUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
