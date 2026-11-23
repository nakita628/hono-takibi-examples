import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetEffectivePermissionsForPathRoute } from '../routes'

export const postGetEffectivePermissionsForPathRouteHandler: RouteHandler<
  typeof postGetEffectivePermissionsForPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
