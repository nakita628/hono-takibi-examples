import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrainerTypesRoute, getTrainerTypesTrainerTypeRoute } from '../routes'

export const getTrainerTypesRouteHandler: RouteHandler<typeof getTrainerTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrainerTypesTrainerTypeRouteHandler: RouteHandler<
  typeof getTrainerTypesTrainerTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
