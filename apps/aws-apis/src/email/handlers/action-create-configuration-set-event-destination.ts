import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateConfigurationSetEventDestinationRoute,
  postActionCreateConfigurationSetEventDestinationRoute,
} from '../routes'

export const getActionCreateConfigurationSetEventDestinationRouteHandler: RouteHandler<
  typeof getActionCreateConfigurationSetEventDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateConfigurationSetEventDestinationRouteHandler: RouteHandler<
  typeof postActionCreateConfigurationSetEventDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
