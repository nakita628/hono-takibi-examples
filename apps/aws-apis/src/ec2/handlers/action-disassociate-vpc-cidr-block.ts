import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateVpcCidrBlockRoute,
  postActionDisassociateVpcCidrBlockRoute,
} from '../routes'

export const getActionDisassociateVpcCidrBlockRouteHandler: RouteHandler<
  typeof getActionDisassociateVpcCidrBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateVpcCidrBlockRouteHandler: RouteHandler<
  typeof postActionDisassociateVpcCidrBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}
