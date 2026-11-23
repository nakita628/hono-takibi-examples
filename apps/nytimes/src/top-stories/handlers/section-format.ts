import type { RouteHandler } from '@hono/zod-openapi'
import type { getSectionFormatRoute } from '../routes'

export const getSectionFormatRouteHandler: RouteHandler<typeof getSectionFormatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
