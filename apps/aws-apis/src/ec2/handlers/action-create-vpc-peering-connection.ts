import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateVpcPeeringConnectionRoute,
  postActionCreateVpcPeeringConnectionRoute,
} from '../routes'

export const getActionCreateVpcPeeringConnectionRouteHandler: RouteHandler<
  typeof getActionCreateVpcPeeringConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVpcPeeringConnectionRouteHandler: RouteHandler<
  typeof postActionCreateVpcPeeringConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
