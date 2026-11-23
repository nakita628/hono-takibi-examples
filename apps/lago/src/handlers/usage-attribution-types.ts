import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsageAttributionTypesCodeRoute,
  getUsageAttributionTypesCodeRoute,
  getUsageAttributionTypesRoute,
  postUsageAttributionTypesRoute,
  putUsageAttributionTypesCodeRoute,
} from '../routes'

export const postUsageAttributionTypesRouteHandler: RouteHandler<
  typeof postUsageAttributionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsageAttributionTypesRouteHandler: RouteHandler<
  typeof getUsageAttributionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsageAttributionTypesCodeRouteHandler: RouteHandler<
  typeof putUsageAttributionTypesCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsageAttributionTypesCodeRouteHandler: RouteHandler<
  typeof getUsageAttributionTypesCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsageAttributionTypesCodeRouteHandler: RouteHandler<
  typeof deleteUsageAttributionTypesCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
