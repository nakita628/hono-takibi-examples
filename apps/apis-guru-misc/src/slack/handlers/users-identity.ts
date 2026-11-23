import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersIdentityRoute } from '../routes'

export const getUsersIdentityRouteHandler: RouteHandler<typeof getUsersIdentityRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
