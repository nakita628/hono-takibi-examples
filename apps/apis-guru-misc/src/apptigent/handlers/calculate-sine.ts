import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateSineRoute } from '../routes'

export const postCalculateSineRouteHandler: RouteHandler<typeof postCalculateSineRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
