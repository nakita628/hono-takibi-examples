import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateStreamRoute } from '../routes'

export const postCreateStreamRouteHandler: RouteHandler<typeof postCreateStreamRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
