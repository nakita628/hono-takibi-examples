import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnyOfWithTypeRoute } from '../routes'

export const postAnyOfWithTypeRouteHandler: RouteHandler<typeof postAnyOfWithTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
