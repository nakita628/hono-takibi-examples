import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVerifiedAccessEndpointRoute,
  postActionModifyVerifiedAccessEndpointRoute,
} from '../routes'

export const getActionModifyVerifiedAccessEndpointRouteHandler: RouteHandler<
  typeof getActionModifyVerifiedAccessEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVerifiedAccessEndpointRouteHandler: RouteHandler<
  typeof postActionModifyVerifiedAccessEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
