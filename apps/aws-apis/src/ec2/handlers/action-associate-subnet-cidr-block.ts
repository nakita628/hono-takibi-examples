import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateSubnetCidrBlockRoute,
  postActionAssociateSubnetCidrBlockRoute,
} from '../routes'

export const getActionAssociateSubnetCidrBlockRouteHandler: RouteHandler<
  typeof getActionAssociateSubnetCidrBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateSubnetCidrBlockRouteHandler: RouteHandler<
  typeof postActionAssociateSubnetCidrBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}
