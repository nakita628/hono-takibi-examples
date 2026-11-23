import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartCutoverRoute } from '../routes'

export const postStartCutoverRouteHandler: RouteHandler<typeof postStartCutoverRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
