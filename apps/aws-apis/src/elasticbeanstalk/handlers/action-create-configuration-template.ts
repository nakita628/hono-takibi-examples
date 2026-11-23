import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateConfigurationTemplateRoute,
  postActionCreateConfigurationTemplateRoute,
} from '../routes'

export const getActionCreateConfigurationTemplateRouteHandler: RouteHandler<
  typeof getActionCreateConfigurationTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateConfigurationTemplateRouteHandler: RouteHandler<
  typeof postActionCreateConfigurationTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
