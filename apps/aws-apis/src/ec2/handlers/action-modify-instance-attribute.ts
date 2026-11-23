import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyInstanceAttributeRoute,
  postActionModifyInstanceAttributeRoute,
} from '../routes'

export const getActionModifyInstanceAttributeRouteHandler: RouteHandler<
  typeof getActionModifyInstanceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyInstanceAttributeRouteHandler: RouteHandler<
  typeof postActionModifyInstanceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
