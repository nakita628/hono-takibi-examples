import type { RouteHandler } from '@hono/zod-openapi'
import type { postPhoneCallRedirectsRoute } from '../routes'

export const postPhoneCallRedirectsRouteHandler: RouteHandler<
  typeof postPhoneCallRedirectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
