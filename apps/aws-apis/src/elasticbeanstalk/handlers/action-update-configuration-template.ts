import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateConfigurationTemplateRoute,
  postActionUpdateConfigurationTemplateRoute,
} from '../routes'

export const getActionUpdateConfigurationTemplateRouteHandler: RouteHandler<
  typeof getActionUpdateConfigurationTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateConfigurationTemplateRouteHandler: RouteHandler<
  typeof postActionUpdateConfigurationTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
