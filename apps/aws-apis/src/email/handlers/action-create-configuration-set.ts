import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateConfigurationSetRoute,
  postActionCreateConfigurationSetRoute,
} from '../routes'

export const getActionCreateConfigurationSetRouteHandler: RouteHandler<
  typeof getActionCreateConfigurationSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateConfigurationSetRouteHandler: RouteHandler<
  typeof postActionCreateConfigurationSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
