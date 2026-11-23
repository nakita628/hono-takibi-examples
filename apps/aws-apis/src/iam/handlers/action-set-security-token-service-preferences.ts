import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetSecurityTokenServicePreferencesRoute,
  postActionSetSecurityTokenServicePreferencesRoute,
} from '../routes'

export const getActionSetSecurityTokenServicePreferencesRouteHandler: RouteHandler<
  typeof getActionSetSecurityTokenServicePreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetSecurityTokenServicePreferencesRouteHandler: RouteHandler<
  typeof postActionSetSecurityTokenServicePreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
