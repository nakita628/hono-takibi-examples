import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateRouteTableRoute,
  postActionAssociateRouteTableRoute,
} from '../routes'

export const getActionAssociateRouteTableRouteHandler: RouteHandler<
  typeof getActionAssociateRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateRouteTableRouteHandler: RouteHandler<
  typeof postActionAssociateRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
