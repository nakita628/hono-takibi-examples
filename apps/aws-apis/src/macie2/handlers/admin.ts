import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAdminConfigurationRoute,
  getAdminRoute,
  patchAdminConfigurationRoute,
  postAdminRoute,
} from '../routes'

export const getAdminConfigurationRouteHandler: RouteHandler<
  typeof getAdminConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminConfigurationRouteHandler: RouteHandler<
  typeof patchAdminConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRouteHandler: RouteHandler<typeof postAdminRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRouteHandler: RouteHandler<typeof getAdminRoute> = async (c) => {
  throw new Error('Not implemented')
}
