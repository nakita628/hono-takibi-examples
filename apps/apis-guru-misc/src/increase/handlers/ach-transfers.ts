import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAchTransfersAchTransferIdRoute,
  getAchTransfersRoute,
  postAchTransfersAchTransferIdApproveRoute,
  postAchTransfersAchTransferIdCancelRoute,
  postAchTransfersRoute,
} from '../routes'

export const getAchTransfersRouteHandler: RouteHandler<typeof getAchTransfersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAchTransfersRouteHandler: RouteHandler<typeof postAchTransfersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAchTransfersAchTransferIdRouteHandler: RouteHandler<
  typeof getAchTransfersAchTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAchTransfersAchTransferIdApproveRouteHandler: RouteHandler<
  typeof postAchTransfersAchTransferIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAchTransfersAchTransferIdCancelRouteHandler: RouteHandler<
  typeof postAchTransfersAchTransferIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
