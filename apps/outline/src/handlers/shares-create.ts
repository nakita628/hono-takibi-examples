import type { RouteHandler } from '@hono/zod-openapi'
import type { postSharesCreateRoute } from '../routes'

export const postSharesCreateRouteHandler: RouteHandler<typeof postSharesCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
