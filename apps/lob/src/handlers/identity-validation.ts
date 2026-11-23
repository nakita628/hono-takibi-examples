import type { RouteHandler } from '@hono/zod-openapi'
import type { postIdentityValidationRoute } from '../routes'

export const postIdentityValidationRouteHandler: RouteHandler<
  typeof postIdentityValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
