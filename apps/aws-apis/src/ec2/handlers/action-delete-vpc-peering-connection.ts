import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteVpcPeeringConnectionRoute,
  postActionDeleteVpcPeeringConnectionRoute,
} from '../routes'

export const getActionDeleteVpcPeeringConnectionRouteHandler: RouteHandler<
  typeof getActionDeleteVpcPeeringConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVpcPeeringConnectionRouteHandler: RouteHandler<
  typeof postActionDeleteVpcPeeringConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
