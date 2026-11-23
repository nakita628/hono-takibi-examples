import type { RouteHandler } from '@hono/zod-openapi'
import type { postOneOfWithTypeRoute } from '../routes'

export const postOneOfWithTypeRouteHandler: RouteHandler<typeof postOneOfWithTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
