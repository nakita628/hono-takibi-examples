import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrappedFluxMeanRoute, getTrappedFluxPercentileRoute } from '../routes'

export const getTrappedFluxMeanRouteHandler: RouteHandler<typeof getTrappedFluxMeanRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTrappedFluxPercentileRouteHandler: RouteHandler<
  typeof getTrappedFluxPercentileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
