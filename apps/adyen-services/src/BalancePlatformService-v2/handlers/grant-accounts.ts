import type { RouteHandler } from '@hono/zod-openapi'
import type { getGrantAccountsIdRoute } from '../routes'

export const getGrantAccountsIdRouteHandler: RouteHandler<typeof getGrantAccountsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
