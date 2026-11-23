import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAdvanceReceiptsIdRoute,
  getAdvanceReceiptsRoute,
  patchAdvanceReceiptsIdRoute,
  postAdvanceReceiptsIdCancellationRoute,
  postAdvanceReceiptsIdPeriodicReductionRoute,
  postAdvanceReceiptsIdReductionRoute,
  postAdvanceReceiptsRoute,
  putAdvanceReceiptsIdCollectionStatusRoute,
} from '../routes'

export const getAdvanceReceiptsRouteHandler: RouteHandler<typeof getAdvanceReceiptsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdvanceReceiptsRouteHandler: RouteHandler<
  typeof postAdvanceReceiptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdvanceReceiptsIdRouteHandler: RouteHandler<
  typeof getAdvanceReceiptsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdvanceReceiptsIdRouteHandler: RouteHandler<
  typeof patchAdvanceReceiptsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdvanceReceiptsIdCancellationRouteHandler: RouteHandler<
  typeof postAdvanceReceiptsIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdvanceReceiptsIdReductionRouteHandler: RouteHandler<
  typeof postAdvanceReceiptsIdReductionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdvanceReceiptsIdPeriodicReductionRouteHandler: RouteHandler<
  typeof postAdvanceReceiptsIdPeriodicReductionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdvanceReceiptsIdCollectionStatusRouteHandler: RouteHandler<
  typeof putAdvanceReceiptsIdCollectionStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
