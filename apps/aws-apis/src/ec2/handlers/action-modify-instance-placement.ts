import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyInstancePlacementRoute,
  postActionModifyInstancePlacementRoute,
} from '../routes'

export const getActionModifyInstancePlacementRouteHandler: RouteHandler<
  typeof getActionModifyInstancePlacementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyInstancePlacementRouteHandler: RouteHandler<
  typeof postActionModifyInstancePlacementRoute
> = async (c) => {
  throw new Error('Not implemented')
}
