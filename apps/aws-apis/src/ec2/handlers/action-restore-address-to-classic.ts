import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreAddressToClassicRoute,
  postActionRestoreAddressToClassicRoute,
} from '../routes'

export const getActionRestoreAddressToClassicRouteHandler: RouteHandler<
  typeof getActionRestoreAddressToClassicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreAddressToClassicRouteHandler: RouteHandler<
  typeof postActionRestoreAddressToClassicRoute
> = async (c) => {
  throw new Error('Not implemented')
}
