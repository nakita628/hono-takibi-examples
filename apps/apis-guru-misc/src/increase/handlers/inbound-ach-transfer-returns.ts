import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInboundAchTransferReturnsInboundAchTransferReturnIdRoute,
  getInboundAchTransferReturnsRoute,
  postInboundAchTransferReturnsRoute,
} from '../routes'

export const getInboundAchTransferReturnsRouteHandler: RouteHandler<
  typeof getInboundAchTransferReturnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInboundAchTransferReturnsRouteHandler: RouteHandler<
  typeof postInboundAchTransferReturnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInboundAchTransferReturnsInboundAchTransferReturnIdRouteHandler: RouteHandler<
  typeof getInboundAchTransferReturnsInboundAchTransferReturnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
