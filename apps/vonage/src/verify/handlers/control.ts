import type { RouteHandler } from '@hono/zod-openapi'
import type { postControlFormatRoute } from '../routes'

export const postControlFormatRouteHandler: RouteHandler<typeof postControlFormatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
