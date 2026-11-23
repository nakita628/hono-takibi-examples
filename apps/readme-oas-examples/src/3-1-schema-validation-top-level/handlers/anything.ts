import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnythingNumbersRoute } from '../routes'

export const getAnythingNumbersRouteHandler: RouteHandler<typeof getAnythingNumbersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
