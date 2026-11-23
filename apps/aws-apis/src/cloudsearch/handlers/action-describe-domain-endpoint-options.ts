import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDomainEndpointOptionsRoute,
  postActionDescribeDomainEndpointOptionsRoute,
} from '../routes'

export const getActionDescribeDomainEndpointOptionsRouteHandler: RouteHandler<
  typeof getActionDescribeDomainEndpointOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDomainEndpointOptionsRouteHandler: RouteHandler<
  typeof postActionDescribeDomainEndpointOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
