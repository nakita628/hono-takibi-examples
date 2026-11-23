import type { RouteHandler } from '@hono/zod-openapi'
import type { getSuggestV1TypeRoute } from '../routes'

export const getSuggestV1TypeRouteHandler: RouteHandler<typeof getSuggestV1TypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
