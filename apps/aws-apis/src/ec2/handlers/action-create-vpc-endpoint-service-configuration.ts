import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateVpcEndpointServiceConfigurationRoute,
  postActionCreateVpcEndpointServiceConfigurationRoute,
} from '../routes'

export const getActionCreateVpcEndpointServiceConfigurationRouteHandler: RouteHandler<
  typeof getActionCreateVpcEndpointServiceConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVpcEndpointServiceConfigurationRouteHandler: RouteHandler<
  typeof postActionCreateVpcEndpointServiceConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
