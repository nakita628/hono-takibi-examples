import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1OutputFormatRoute } from '../routes'

export const getV1OutputFormatRouteHandler: RouteHandler<typeof getV1OutputFormatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
