import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSyncCommerceConfigUiTextRoute,
  patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRoute,
  patchSyncCommerceConfigUiTextRoute,
} from '../routes'

export const patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRouteHandler: RouteHandler<
  typeof patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSyncCommerceConfigUiTextRouteHandler: RouteHandler<
  typeof getSyncCommerceConfigUiTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSyncCommerceConfigUiTextRouteHandler: RouteHandler<
  typeof patchSyncCommerceConfigUiTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}
