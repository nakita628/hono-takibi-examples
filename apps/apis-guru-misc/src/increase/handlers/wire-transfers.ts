import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWireTransfersRoute,
  getWireTransfersWireTransferIdRoute,
  postWireTransfersRoute,
  postWireTransfersWireTransferIdApproveRoute,
  postWireTransfersWireTransferIdCancelRoute,
} from '../routes'

export const getWireTransfersRouteHandler: RouteHandler<typeof getWireTransfersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWireTransfersRouteHandler: RouteHandler<typeof postWireTransfersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWireTransfersWireTransferIdRouteHandler: RouteHandler<
  typeof getWireTransfersWireTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWireTransfersWireTransferIdApproveRouteHandler: RouteHandler<
  typeof postWireTransfersWireTransferIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWireTransfersWireTransferIdCancelRouteHandler: RouteHandler<
  typeof postWireTransfersWireTransferIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
