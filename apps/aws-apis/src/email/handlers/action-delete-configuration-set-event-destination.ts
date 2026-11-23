import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteConfigurationSetEventDestinationRoute,
  postActionDeleteConfigurationSetEventDestinationRoute,
} from '../routes'

export const getActionDeleteConfigurationSetEventDestinationRouteHandler: RouteHandler<
  typeof getActionDeleteConfigurationSetEventDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteConfigurationSetEventDestinationRouteHandler: RouteHandler<
  typeof postActionDeleteConfigurationSetEventDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
