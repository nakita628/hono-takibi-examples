import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateConfigurationSetTrackingOptionsRoute,
  postActionCreateConfigurationSetTrackingOptionsRoute,
} from '../routes'

export const getActionCreateConfigurationSetTrackingOptionsRouteHandler: RouteHandler<
  typeof getActionCreateConfigurationSetTrackingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateConfigurationSetTrackingOptionsRouteHandler: RouteHandler<
  typeof postActionCreateConfigurationSetTrackingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
