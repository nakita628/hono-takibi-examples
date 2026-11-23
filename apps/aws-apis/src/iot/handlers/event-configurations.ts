import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventConfigurationsRoute, patchEventConfigurationsRoute } from '../routes'

export const getEventConfigurationsRouteHandler: RouteHandler<
  typeof getEventConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEventConfigurationsRouteHandler: RouteHandler<
  typeof patchEventConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
