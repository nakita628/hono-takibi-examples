import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyAvailabilityZoneGroupRoute,
  postActionModifyAvailabilityZoneGroupRoute,
} from '../routes'

export const getActionModifyAvailabilityZoneGroupRouteHandler: RouteHandler<
  typeof getActionModifyAvailabilityZoneGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyAvailabilityZoneGroupRouteHandler: RouteHandler<
  typeof postActionModifyAvailabilityZoneGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
