import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postOauth2ClientsClientIdAccessTokenRenewRoute,
  postOauth2RevokeRoute,
  postOauth2TokenRoute,
} from '../routes'

export const postOauth2ClientsClientIdAccessTokenRenewRouteHandler: RouteHandler<
  typeof postOauth2ClientsClientIdAccessTokenRenewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2RevokeRouteHandler: RouteHandler<typeof postOauth2RevokeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauth2TokenRouteHandler: RouteHandler<typeof postOauth2TokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
