import type { RouteHandler } from '@hono/zod-openapi'
import type { getScenariosIdEventsRoute, postScenariosIdEventsRoute } from '../routes'

export const getScenariosIdEventsRouteHandler: RouteHandler<
  typeof getScenariosIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScenariosIdEventsRouteHandler: RouteHandler<
  typeof postScenariosIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
