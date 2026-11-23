import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyAddressAttributeRoute,
  postActionModifyAddressAttributeRoute,
} from '../routes'

export const getActionModifyAddressAttributeRouteHandler: RouteHandler<
  typeof getActionModifyAddressAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyAddressAttributeRouteHandler: RouteHandler<
  typeof postActionModifyAddressAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
