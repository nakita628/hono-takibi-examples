import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWalletPassesPassIdInstallUrlContactIdRoute,
  postWalletPassesInstallationIdRedeemRoute,
} from '../routes'

export const getWalletPassesPassIdInstallUrlContactIdRouteHandler: RouteHandler<
  typeof getWalletPassesPassIdInstallUrlContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWalletPassesInstallationIdRedeemRouteHandler: RouteHandler<
  typeof postWalletPassesInstallationIdRedeemRoute
> = async (c) => {
  throw new Error('Not implemented')
}
