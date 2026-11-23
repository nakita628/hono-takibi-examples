import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteConfigurationTemplateRoute,
  postActionDeleteConfigurationTemplateRoute,
} from '../routes'

export const getActionDeleteConfigurationTemplateRouteHandler: RouteHandler<
  typeof getActionDeleteConfigurationTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteConfigurationTemplateRouteHandler: RouteHandler<
  typeof postActionDeleteConfigurationTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
