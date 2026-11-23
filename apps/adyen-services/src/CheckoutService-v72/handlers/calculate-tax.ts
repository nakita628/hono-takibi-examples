import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateTaxRoute } from '../routes'

export const postCalculateTaxRouteHandler: RouteHandler<typeof postCalculateTaxRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
