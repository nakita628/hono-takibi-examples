import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAdminPortalLinkTokensRoute,
  postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRoute,
} from '../routes'

export const postAdminPortalLinkTokensRouteHandler: RouteHandler<
  typeof postAdminPortalLinkTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRouteHandler: RouteHandler<
  typeof postAdminPortalLinkTokensAdminPortalLinkTokenIDRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
