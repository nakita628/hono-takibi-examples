import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteVerifiedAccessEndpointRoute,
  postActionDeleteVerifiedAccessEndpointRoute,
} from '../routes'

export const getActionDeleteVerifiedAccessEndpointRouteHandler: RouteHandler<
  typeof getActionDeleteVerifiedAccessEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVerifiedAccessEndpointRouteHandler: RouteHandler<
  typeof postActionDeleteVerifiedAccessEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
