import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateRouteTableRoute,
  postActionDisassociateRouteTableRoute,
} from '../routes'

export const getActionDisassociateRouteTableRouteHandler: RouteHandler<
  typeof getActionDisassociateRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateRouteTableRouteHandler: RouteHandler<
  typeof postActionDisassociateRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
