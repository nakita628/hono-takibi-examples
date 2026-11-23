import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV2OauthAccessTokenRoute,
  postV2OauthRevokeRoute,
  postV2OauthVerifyRoute,
} from '../routes'

export const postV2OauthAccessTokenRouteHandler: RouteHandler<
  typeof postV2OauthAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OauthVerifyRouteHandler: RouteHandler<typeof postV2OauthVerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2OauthRevokeRouteHandler: RouteHandler<typeof postV2OauthRevokeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
