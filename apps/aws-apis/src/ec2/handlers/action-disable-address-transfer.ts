import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableAddressTransferRoute,
  postActionDisableAddressTransferRoute,
} from '../routes'

export const getActionDisableAddressTransferRouteHandler: RouteHandler<
  typeof getActionDisableAddressTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableAddressTransferRouteHandler: RouteHandler<
  typeof postActionDisableAddressTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}
