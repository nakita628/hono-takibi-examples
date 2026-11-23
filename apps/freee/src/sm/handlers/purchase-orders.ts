import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPurchaseOrdersIdRoute,
  getPurchaseOrdersRoute,
  patchPurchaseOrdersIdRoute,
  postPurchaseOrdersIdCancellationRoute,
  postPurchaseOrdersRoute,
} from '../routes'

export const getPurchaseOrdersRouteHandler: RouteHandler<typeof getPurchaseOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPurchaseOrdersRouteHandler: RouteHandler<typeof postPurchaseOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPurchaseOrdersIdRouteHandler: RouteHandler<
  typeof getPurchaseOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPurchaseOrdersIdRouteHandler: RouteHandler<
  typeof patchPurchaseOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPurchaseOrdersIdCancellationRouteHandler: RouteHandler<
  typeof postPurchaseOrdersIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
