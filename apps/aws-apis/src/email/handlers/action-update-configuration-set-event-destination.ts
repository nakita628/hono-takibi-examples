import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateConfigurationSetEventDestinationRoute,
  postActionUpdateConfigurationSetEventDestinationRoute,
} from '../routes'

export const getActionUpdateConfigurationSetEventDestinationRouteHandler: RouteHandler<
  typeof getActionUpdateConfigurationSetEventDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateConfigurationSetEventDestinationRouteHandler: RouteHandler<
  typeof postActionUpdateConfigurationSetEventDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
