import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePackagingConfigurationsIdRoute,
  getPackagingConfigurationsIdRoute,
  getPackagingConfigurationsRoute,
  postPackagingConfigurationsRoute,
} from '../routes'

export const postPackagingConfigurationsRouteHandler: RouteHandler<
  typeof postPackagingConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPackagingConfigurationsRouteHandler: RouteHandler<
  typeof getPackagingConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePackagingConfigurationsIdRouteHandler: RouteHandler<
  typeof deletePackagingConfigurationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPackagingConfigurationsIdRouteHandler: RouteHandler<
  typeof getPackagingConfigurationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
