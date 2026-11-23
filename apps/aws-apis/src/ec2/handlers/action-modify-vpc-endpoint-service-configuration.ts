import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVpcEndpointServiceConfigurationRoute,
  postActionModifyVpcEndpointServiceConfigurationRoute,
} from '../routes'

export const getActionModifyVpcEndpointServiceConfigurationRouteHandler: RouteHandler<
  typeof getActionModifyVpcEndpointServiceConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVpcEndpointServiceConfigurationRouteHandler: RouteHandler<
  typeof postActionModifyVpcEndpointServiceConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
