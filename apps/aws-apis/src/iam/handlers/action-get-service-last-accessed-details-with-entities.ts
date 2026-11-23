import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetServiceLastAccessedDetailsWithEntitiesRoute,
  postActionGetServiceLastAccessedDetailsWithEntitiesRoute,
} from '../routes'

export const getActionGetServiceLastAccessedDetailsWithEntitiesRouteHandler: RouteHandler<
  typeof getActionGetServiceLastAccessedDetailsWithEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetServiceLastAccessedDetailsWithEntitiesRouteHandler: RouteHandler<
  typeof postActionGetServiceLastAccessedDetailsWithEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
