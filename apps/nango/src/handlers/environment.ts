import type { RouteHandler } from '@hono/zod-openapi'
import type { postEnvironmentWebhookSigningKeyRotateRoute } from '../routes'

export const postEnvironmentWebhookSigningKeyRotateRouteHandler: RouteHandler<
  typeof postEnvironmentWebhookSigningKeyRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
