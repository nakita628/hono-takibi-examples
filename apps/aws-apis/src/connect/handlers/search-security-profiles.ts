import type { RouteHandler } from '@hono/zod-openapi'
import type { postSearchSecurityProfilesRoute } from '../routes'

export const postSearchSecurityProfilesRouteHandler: RouteHandler<
  typeof postSearchSecurityProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
