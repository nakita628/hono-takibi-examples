import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVpcPeeringConnectionOptionsRoute,
  postActionModifyVpcPeeringConnectionOptionsRoute,
} from '../routes'

export const getActionModifyVpcPeeringConnectionOptionsRouteHandler: RouteHandler<
  typeof getActionModifyVpcPeeringConnectionOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVpcPeeringConnectionOptionsRouteHandler: RouteHandler<
  typeof postActionModifyVpcPeeringConnectionOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
