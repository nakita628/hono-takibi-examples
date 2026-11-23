import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAcceptAddressTransferRoute,
  postActionAcceptAddressTransferRoute,
} from '../routes'

export const getActionAcceptAddressTransferRouteHandler: RouteHandler<
  typeof getActionAcceptAddressTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAcceptAddressTransferRouteHandler: RouteHandler<
  typeof postActionAcceptAddressTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}
