import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPurchaseOrdersIdRoute,
  getPurchaseOrdersRoute,
  getPurchaseOrdersTemplatesRoute,
  postPurchaseOrdersRoute,
  putPurchaseOrdersIdCancelRoute,
  putPurchaseOrdersIdRoute,
  putPurchaseOrdersIdUncancelRoute,
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

export const getPurchaseOrdersTemplatesRouteHandler: RouteHandler<
  typeof getPurchaseOrdersTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPurchaseOrdersIdRouteHandler: RouteHandler<
  typeof getPurchaseOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPurchaseOrdersIdRouteHandler: RouteHandler<
  typeof putPurchaseOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPurchaseOrdersIdCancelRouteHandler: RouteHandler<
  typeof putPurchaseOrdersIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPurchaseOrdersIdUncancelRouteHandler: RouteHandler<
  typeof putPurchaseOrdersIdUncancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
