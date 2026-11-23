import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionEnableAddressTransferRoute,
  postActionEnableAddressTransferRoute,
} from '../routes'

export const getActionEnableAddressTransferRouteHandler: RouteHandler<
  typeof getActionEnableAddressTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableAddressTransferRouteHandler: RouteHandler<
  typeof postActionEnableAddressTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}
