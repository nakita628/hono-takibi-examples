import type { RouteHandler } from '@hono/zod-openapi'
import type { postGenerateHashRoute } from '../routes'

export const postGenerateHashRouteHandler: RouteHandler<typeof postGenerateHashRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
