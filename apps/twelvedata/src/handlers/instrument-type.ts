import type { RouteHandler } from '@hono/zod-openapi'
import type { getInstrumentTypeRoute } from '../routes'

export const getInstrumentTypeRouteHandler: RouteHandler<typeof getInstrumentTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
