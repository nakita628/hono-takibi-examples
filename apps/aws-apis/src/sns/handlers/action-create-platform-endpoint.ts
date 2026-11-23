import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreatePlatformEndpointRoute,
  postActionCreatePlatformEndpointRoute,
} from '../routes'

export const getActionCreatePlatformEndpointRouteHandler: RouteHandler<
  typeof getActionCreatePlatformEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreatePlatformEndpointRouteHandler: RouteHandler<
  typeof postActionCreatePlatformEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
