import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateDomainEndpointOptionsRoute,
  postActionUpdateDomainEndpointOptionsRoute,
} from '../routes'

export const getActionUpdateDomainEndpointOptionsRouteHandler: RouteHandler<
  typeof getActionUpdateDomainEndpointOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateDomainEndpointOptionsRouteHandler: RouteHandler<
  typeof postActionUpdateDomainEndpointOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
