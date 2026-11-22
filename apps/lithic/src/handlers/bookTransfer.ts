import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1BookTransfersBookTransferTokenRoute,
  getV1BookTransfersRoute,
  postV1BookTransfersBookTransferTokenRetryRoute,
  postV1BookTransfersBookTransferTokenReverseRoute,
  postV1BookTransfersRoute,
  postV1TransferRoute,
} from '../routes'

export const postV1TransferRouteHandler: RouteHandler<typeof postV1TransferRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BookTransfersRouteHandler: RouteHandler<typeof getV1BookTransfersRoute> = async (
  c,
) => {}

export const postV1BookTransfersRouteHandler: RouteHandler<
  typeof postV1BookTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BookTransfersBookTransferTokenRouteHandler: RouteHandler<
  typeof getV1BookTransfersBookTransferTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BookTransfersBookTransferTokenRetryRouteHandler: RouteHandler<
  typeof postV1BookTransfersBookTransferTokenRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BookTransfersBookTransferTokenReverseRouteHandler: RouteHandler<
  typeof postV1BookTransfersBookTransferTokenReverseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
