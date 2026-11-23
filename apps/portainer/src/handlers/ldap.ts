import type { RouteHandler } from '@hono/zod-openapi'
import type { postLdapCheckRoute } from '../routes'

export const postLdapCheckRouteHandler: RouteHandler<typeof postLdapCheckRoute> = async (c) => {
  throw new Error('Not implemented')
}
