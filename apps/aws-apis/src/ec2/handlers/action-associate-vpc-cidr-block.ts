import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateVpcCidrBlockRoute,
  postActionAssociateVpcCidrBlockRoute,
} from '../routes'

export const getActionAssociateVpcCidrBlockRouteHandler: RouteHandler<
  typeof getActionAssociateVpcCidrBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateVpcCidrBlockRouteHandler: RouteHandler<
  typeof postActionAssociateVpcCidrBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}
