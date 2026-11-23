import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthClientsRotateSecretRoute } from '../routes'

export const postOauthClientsRotateSecretRouteHandler: RouteHandler<
  typeof postOauthClientsRotateSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}
