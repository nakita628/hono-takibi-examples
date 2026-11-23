import type { RouteHandler } from '@hono/zod-openapi'
import type { putInvalidateTokenRoute } from '../routes'

export const putInvalidateTokenRouteHandler: RouteHandler<typeof putInvalidateTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
