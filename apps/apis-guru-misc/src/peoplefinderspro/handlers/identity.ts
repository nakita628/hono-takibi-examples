import type { RouteHandler } from '@hono/zod-openapi'
import type { postIdentityVerifyIdRoute } from '../routes'

export const postIdentityVerifyIdRouteHandler: RouteHandler<
  typeof postIdentityVerifyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
