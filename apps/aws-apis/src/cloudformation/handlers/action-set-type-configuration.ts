import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetTypeConfigurationRoute,
  postActionSetTypeConfigurationRoute,
} from '../routes'

export const getActionSetTypeConfigurationRouteHandler: RouteHandler<
  typeof getActionSetTypeConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetTypeConfigurationRouteHandler: RouteHandler<
  typeof postActionSetTypeConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
