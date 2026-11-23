import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateAvailabilityOptionsRoute,
  postActionUpdateAvailabilityOptionsRoute,
} from '../routes'

export const getActionUpdateAvailabilityOptionsRouteHandler: RouteHandler<
  typeof getActionUpdateAvailabilityOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateAvailabilityOptionsRouteHandler: RouteHandler<
  typeof postActionUpdateAvailabilityOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
