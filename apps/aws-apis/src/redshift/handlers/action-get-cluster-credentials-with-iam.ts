import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetClusterCredentialsWithIAMRoute,
  postActionGetClusterCredentialsWithIAMRoute,
} from '../routes'

export const getActionGetClusterCredentialsWithIAMRouteHandler: RouteHandler<
  typeof getActionGetClusterCredentialsWithIAMRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetClusterCredentialsWithIAMRouteHandler: RouteHandler<
  typeof postActionGetClusterCredentialsWithIAMRoute
> = async (c) => {
  throw new Error('Not implemented')
}
