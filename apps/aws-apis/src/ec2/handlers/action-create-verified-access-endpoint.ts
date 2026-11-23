import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateVerifiedAccessEndpointRoute,
  postActionCreateVerifiedAccessEndpointRoute,
} from '../routes'

export const getActionCreateVerifiedAccessEndpointRouteHandler: RouteHandler<
  typeof getActionCreateVerifiedAccessEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVerifiedAccessEndpointRouteHandler: RouteHandler<
  typeof postActionCreateVerifiedAccessEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
