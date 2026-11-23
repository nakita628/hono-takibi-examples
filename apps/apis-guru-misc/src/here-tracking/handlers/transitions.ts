import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransitionsV2DevicesTrackingIdRoute,
  getTransitionsV2HealthRoute,
  getTransitionsV2VersionRoute,
} from '../routes'

export const getTransitionsV2DevicesTrackingIdRouteHandler: RouteHandler<
  typeof getTransitionsV2DevicesTrackingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransitionsV2HealthRouteHandler: RouteHandler<
  typeof getTransitionsV2HealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransitionsV2VersionRouteHandler: RouteHandler<
  typeof getTransitionsV2VersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
