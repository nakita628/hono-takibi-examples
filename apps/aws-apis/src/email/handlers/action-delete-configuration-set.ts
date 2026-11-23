import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteConfigurationSetRoute,
  postActionDeleteConfigurationSetRoute,
} from '../routes'

export const getActionDeleteConfigurationSetRouteHandler: RouteHandler<
  typeof getActionDeleteConfigurationSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteConfigurationSetRouteHandler: RouteHandler<
  typeof postActionDeleteConfigurationSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
