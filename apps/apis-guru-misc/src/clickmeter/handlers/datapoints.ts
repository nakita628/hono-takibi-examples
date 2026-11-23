import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDatapointsBatchRoute,
  deleteDatapointsIdRoute,
  getDatapointsAggregatedListRoute,
  getDatapointsAggregatedRoute,
  getDatapointsCountRoute,
  getDatapointsIdAggregatedListRoute,
  getDatapointsIdAggregatedRoute,
  getDatapointsIdHitsRoute,
  getDatapointsIdRoute,
  getDatapointsRoute,
  postDatapointsBatchRoute,
  postDatapointsIdRoute,
  postDatapointsRoute,
  putDatapointsBatchRoute,
  putDatapointsIdFavouriteRoute,
  putDatapointsIdNotesRoute,
} from '../routes'

export const getDatapointsRouteHandler: RouteHandler<typeof getDatapointsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatapointsRouteHandler: RouteHandler<typeof postDatapointsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatapointsAggregatedRouteHandler: RouteHandler<
  typeof getDatapointsAggregatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatapointsAggregatedListRouteHandler: RouteHandler<
  typeof getDatapointsAggregatedListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDatapointsBatchRouteHandler: RouteHandler<
  typeof deleteDatapointsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatapointsBatchRouteHandler: RouteHandler<
  typeof postDatapointsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDatapointsBatchRouteHandler: RouteHandler<typeof putDatapointsBatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDatapointsCountRouteHandler: RouteHandler<typeof getDatapointsCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDatapointsIdRouteHandler: RouteHandler<typeof deleteDatapointsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDatapointsIdRouteHandler: RouteHandler<typeof getDatapointsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatapointsIdRouteHandler: RouteHandler<typeof postDatapointsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDatapointsIdAggregatedRouteHandler: RouteHandler<
  typeof getDatapointsIdAggregatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatapointsIdAggregatedListRouteHandler: RouteHandler<
  typeof getDatapointsIdAggregatedListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDatapointsIdFavouriteRouteHandler: RouteHandler<
  typeof putDatapointsIdFavouriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatapointsIdHitsRouteHandler: RouteHandler<
  typeof getDatapointsIdHitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDatapointsIdNotesRouteHandler: RouteHandler<
  typeof putDatapointsIdNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
