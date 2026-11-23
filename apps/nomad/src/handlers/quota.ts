import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteQuotaSpecNameRoute,
  getQuotaSpecNameRoute,
  postQuotaRoute,
  postQuotaSpecNameRoute,
} from '../routes'

export const postQuotaRouteHandler: RouteHandler<typeof postQuotaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteQuotaSpecNameRouteHandler: RouteHandler<
  typeof deleteQuotaSpecNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuotaSpecNameRouteHandler: RouteHandler<typeof getQuotaSpecNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postQuotaSpecNameRouteHandler: RouteHandler<typeof postQuotaSpecNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
