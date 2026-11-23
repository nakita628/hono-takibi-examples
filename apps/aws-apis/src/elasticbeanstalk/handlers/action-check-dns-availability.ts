import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCheckDNSAvailabilityRoute,
  postActionCheckDNSAvailabilityRoute,
} from '../routes'

export const getActionCheckDNSAvailabilityRouteHandler: RouteHandler<
  typeof getActionCheckDNSAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCheckDNSAvailabilityRouteHandler: RouteHandler<
  typeof postActionCheckDNSAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
