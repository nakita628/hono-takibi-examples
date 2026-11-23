import type { RouteHandler } from '@hono/zod-openapi'
import type { getBelegeBelegUuidRoute } from '../routes'

export const getBelegeBelegUuidRouteHandler: RouteHandler<typeof getBelegeBelegUuidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
