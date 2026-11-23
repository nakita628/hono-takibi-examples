import type { RouteHandler } from '@hono/zod-openapi'
import type { postMakeSubUserKeyRoute } from '../routes'

export const postMakeSubUserKeyRouteHandler: RouteHandler<typeof postMakeSubUserKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
