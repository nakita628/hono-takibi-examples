import type { RouteHandler } from '@hono/zod-openapi'
import type { getModeActiveServiceTypesRoute, getModeModeArrivalsRoute } from '../routes'

export const getModeActiveServiceTypesRouteHandler: RouteHandler<
  typeof getModeActiveServiceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getModeModeArrivalsRouteHandler: RouteHandler<
  typeof getModeModeArrivalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
