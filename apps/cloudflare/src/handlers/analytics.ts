import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAnalyticsSqlIntrospectionRoute,
  getAnalyticsSqlRoute,
  postAnalyticsSqlRoute,
} from '../routes'

export const getAnalyticsSqlRouteHandler: RouteHandler<typeof getAnalyticsSqlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnalyticsSqlRouteHandler: RouteHandler<typeof postAnalyticsSqlRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAnalyticsSqlIntrospectionRouteHandler: RouteHandler<
  typeof getAnalyticsSqlIntrospectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
