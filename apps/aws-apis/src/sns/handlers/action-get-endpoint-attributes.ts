import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetEndpointAttributesRoute,
  postActionGetEndpointAttributesRoute,
} from '../routes'

export const getActionGetEndpointAttributesRouteHandler: RouteHandler<
  typeof getActionGetEndpointAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetEndpointAttributesRouteHandler: RouteHandler<
  typeof postActionGetEndpointAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
