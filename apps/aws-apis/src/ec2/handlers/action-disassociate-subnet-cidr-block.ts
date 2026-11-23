import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateSubnetCidrBlockRoute,
  postActionDisassociateSubnetCidrBlockRoute,
} from '../routes'

export const getActionDisassociateSubnetCidrBlockRouteHandler: RouteHandler<
  typeof getActionDisassociateSubnetCidrBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateSubnetCidrBlockRouteHandler: RouteHandler<
  typeof postActionDisassociateSubnetCidrBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}
