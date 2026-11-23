import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSalesIdRoute,
  getSalesRoute,
  patchSalesIdRoute,
  postSalesIdCancellationRoute,
  postSalesRoute,
  putSalesIdCollectionStatusRoute,
} from '../routes'

export const getSalesRouteHandler: RouteHandler<typeof getSalesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSalesRouteHandler: RouteHandler<typeof postSalesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSalesIdRouteHandler: RouteHandler<typeof getSalesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSalesIdRouteHandler: RouteHandler<typeof patchSalesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSalesIdCancellationRouteHandler: RouteHandler<
  typeof postSalesIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSalesIdCollectionStatusRouteHandler: RouteHandler<
  typeof putSalesIdCollectionStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
