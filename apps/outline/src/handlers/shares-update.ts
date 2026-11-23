import type { RouteHandler } from '@hono/zod-openapi'
import type { postSharesUpdateRoute } from '../routes'

export const postSharesUpdateRouteHandler: RouteHandler<typeof postSharesUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
