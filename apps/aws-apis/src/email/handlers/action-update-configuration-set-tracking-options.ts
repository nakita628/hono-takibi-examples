import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateConfigurationSetTrackingOptionsRoute,
  postActionUpdateConfigurationSetTrackingOptionsRoute,
} from '../routes'

export const getActionUpdateConfigurationSetTrackingOptionsRouteHandler: RouteHandler<
  typeof getActionUpdateConfigurationSetTrackingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateConfigurationSetTrackingOptionsRouteHandler: RouteHandler<
  typeof postActionUpdateConfigurationSetTrackingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
