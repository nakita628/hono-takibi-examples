import type { RouteHandler } from '@hono/zod-openapi'
import type { getSimulationTypesRoute } from '../routes'

export const getSimulationTypesRouteHandler: RouteHandler<typeof getSimulationTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
