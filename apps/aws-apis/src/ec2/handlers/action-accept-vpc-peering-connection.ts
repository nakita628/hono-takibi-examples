import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAcceptVpcPeeringConnectionRoute,
  postActionAcceptVpcPeeringConnectionRoute,
} from '../routes'

export const getActionAcceptVpcPeeringConnectionRouteHandler: RouteHandler<
  typeof getActionAcceptVpcPeeringConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAcceptVpcPeeringConnectionRouteHandler: RouteHandler<
  typeof postActionAcceptVpcPeeringConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
