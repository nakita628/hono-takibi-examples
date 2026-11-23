import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransfersIdRoute,
  getTransfersRoute,
  postTransfersApproveRoute,
  postTransfersCancelRoute,
  postTransfersRoute,
  postTransfersTransferIdReturnsRoute,
} from '../routes'

export const getTransfersRouteHandler: RouteHandler<typeof getTransfersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransfersRouteHandler: RouteHandler<typeof postTransfersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransfersApproveRouteHandler: RouteHandler<
  typeof postTransfersApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransfersCancelRouteHandler: RouteHandler<
  typeof postTransfersCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransfersIdRouteHandler: RouteHandler<typeof getTransfersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransfersTransferIdReturnsRouteHandler: RouteHandler<
  typeof postTransfersTransferIdReturnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
