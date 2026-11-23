import type { RouteHandler } from '@hono/zod-openapi'
import type { getEnergyTypesEnergyTypeRoute, getEnergyTypesRoute } from '../routes'

export const getEnergyTypesRouteHandler: RouteHandler<typeof getEnergyTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnergyTypesEnergyTypeRouteHandler: RouteHandler<
  typeof getEnergyTypesEnergyTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
