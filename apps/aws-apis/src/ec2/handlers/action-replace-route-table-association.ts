import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionReplaceRouteTableAssociationRoute,
  postActionReplaceRouteTableAssociationRoute,
} from '../routes'

export const getActionReplaceRouteTableAssociationRouteHandler: RouteHandler<
  typeof getActionReplaceRouteTableAssociationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionReplaceRouteTableAssociationRouteHandler: RouteHandler<
  typeof postActionReplaceRouteTableAssociationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
