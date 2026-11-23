import type { RouteHandler } from '@hono/zod-openapi'
import type { getBasicAuthUserPasswdRoute } from '../routes'

export const getBasicAuthUserPasswdRouteHandler: RouteHandler<
  typeof getBasicAuthUserPasswdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
