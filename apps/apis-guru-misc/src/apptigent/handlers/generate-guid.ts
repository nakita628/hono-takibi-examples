import type { RouteHandler } from '@hono/zod-openapi'
import type { postGenerateGuidRoute } from '../routes'

export const postGenerateGuidRouteHandler: RouteHandler<typeof postGenerateGuidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
