import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRejectVpcPeeringConnectionRoute,
  postActionRejectVpcPeeringConnectionRoute,
} from '../routes'

export const getActionRejectVpcPeeringConnectionRouteHandler: RouteHandler<
  typeof getActionRejectVpcPeeringConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRejectVpcPeeringConnectionRouteHandler: RouteHandler<
  typeof postActionRejectVpcPeeringConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
