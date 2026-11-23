import type { RouteHandler } from '@hono/zod-openapi'
import type { postTestingTokensRoute } from '../routes'

export const postTestingTokensRouteHandler: RouteHandler<typeof postTestingTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
