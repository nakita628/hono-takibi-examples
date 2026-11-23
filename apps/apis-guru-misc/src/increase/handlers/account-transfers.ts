import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountTransfersAccountTransferIdRoute,
  getAccountTransfersRoute,
  postAccountTransfersAccountTransferIdApproveRoute,
  postAccountTransfersAccountTransferIdCancelRoute,
  postAccountTransfersRoute,
} from '../routes'

export const getAccountTransfersRouteHandler: RouteHandler<
  typeof getAccountTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountTransfersRouteHandler: RouteHandler<
  typeof postAccountTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountTransfersAccountTransferIdRouteHandler: RouteHandler<
  typeof getAccountTransfersAccountTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountTransfersAccountTransferIdApproveRouteHandler: RouteHandler<
  typeof postAccountTransfersAccountTransferIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountTransfersAccountTransferIdCancelRouteHandler: RouteHandler<
  typeof postAccountTransfersAccountTransferIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
