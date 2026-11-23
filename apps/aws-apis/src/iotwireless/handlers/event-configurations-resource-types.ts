import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEventConfigurationsResourceTypesRoute,
  patchEventConfigurationsResourceTypesRoute,
} from '../routes'

export const getEventConfigurationsResourceTypesRouteHandler: RouteHandler<
  typeof getEventConfigurationsResourceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEventConfigurationsResourceTypesRouteHandler: RouteHandler<
  typeof patchEventConfigurationsResourceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
