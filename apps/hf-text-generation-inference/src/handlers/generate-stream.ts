import type { RouteHandler } from '@hono/zod-openapi'
import type { postGenerateStreamRoute } from '../routes'

export const postGenerateStreamRouteHandler: RouteHandler<typeof postGenerateStreamRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
