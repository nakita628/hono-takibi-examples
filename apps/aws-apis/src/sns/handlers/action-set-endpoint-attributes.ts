import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetEndpointAttributesRoute,
  postActionSetEndpointAttributesRoute,
} from '../routes'

export const getActionSetEndpointAttributesRouteHandler: RouteHandler<
  typeof getActionSetEndpointAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetEndpointAttributesRouteHandler: RouteHandler<
  typeof postActionSetEndpointAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
