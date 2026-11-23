import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrdersOrderIdRoute,
  getOrdersRoute,
  postOrdersImportOrderRoute,
  postOrdersOrderIdAssignOrderNumberRoute,
  postOrdersOrderIdCancelRoute,
  postOrdersOrderIdCreateRefundableCreditNoteRoute,
  postOrdersOrderIdDeleteRoute,
  postOrdersOrderIdReopenRoute,
  postOrdersOrderIdResendRoute,
  postOrdersOrderIdRoute,
  postOrdersRoute,
} from '../routes'

export const getOrdersRouteHandler: RouteHandler<typeof getOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersRouteHandler: RouteHandler<typeof postOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersImportOrderRouteHandler: RouteHandler<
  typeof postOrdersImportOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersOrderIdAssignOrderNumberRouteHandler: RouteHandler<
  typeof postOrdersOrderIdAssignOrderNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersOrderIdResendRouteHandler: RouteHandler<
  typeof postOrdersOrderIdResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersOrderIdReopenRouteHandler: RouteHandler<
  typeof postOrdersOrderIdReopenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersOrderIdCancelRouteHandler: RouteHandler<
  typeof postOrdersOrderIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrdersOrderIdRouteHandler: RouteHandler<typeof getOrdersOrderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOrdersOrderIdRouteHandler: RouteHandler<typeof postOrdersOrderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOrdersOrderIdDeleteRouteHandler: RouteHandler<
  typeof postOrdersOrderIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrdersOrderIdCreateRefundableCreditNoteRouteHandler: RouteHandler<
  typeof postOrdersOrderIdCreateRefundableCreditNoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
