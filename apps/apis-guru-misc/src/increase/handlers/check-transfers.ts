import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCheckTransfersCheckTransferIdRoute,
  getCheckTransfersRoute,
  postCheckTransfersCheckTransferIdApproveRoute,
  postCheckTransfersCheckTransferIdCancelRoute,
  postCheckTransfersCheckTransferIdStopPaymentRoute,
  postCheckTransfersRoute,
} from '../routes'

export const getCheckTransfersRouteHandler: RouteHandler<typeof getCheckTransfersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCheckTransfersRouteHandler: RouteHandler<typeof postCheckTransfersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCheckTransfersCheckTransferIdRouteHandler: RouteHandler<
  typeof getCheckTransfersCheckTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCheckTransfersCheckTransferIdApproveRouteHandler: RouteHandler<
  typeof postCheckTransfersCheckTransferIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCheckTransfersCheckTransferIdCancelRouteHandler: RouteHandler<
  typeof postCheckTransfersCheckTransferIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCheckTransfersCheckTransferIdStopPaymentRouteHandler: RouteHandler<
  typeof postCheckTransfersCheckTransferIdStopPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
