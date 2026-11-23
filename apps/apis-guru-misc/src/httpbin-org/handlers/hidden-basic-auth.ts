import type { RouteHandler } from '@hono/zod-openapi'
import type { getHiddenBasicAuthUserPasswdRoute } from '../routes'

export const getHiddenBasicAuthUserPasswdRouteHandler: RouteHandler<
  typeof getHiddenBasicAuthUserPasswdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
