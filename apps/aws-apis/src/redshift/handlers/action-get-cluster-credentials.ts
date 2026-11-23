import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetClusterCredentialsRoute,
  postActionGetClusterCredentialsRoute,
} from '../routes'

export const getActionGetClusterCredentialsRouteHandler: RouteHandler<
  typeof getActionGetClusterCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetClusterCredentialsRouteHandler: RouteHandler<
  typeof postActionGetClusterCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
