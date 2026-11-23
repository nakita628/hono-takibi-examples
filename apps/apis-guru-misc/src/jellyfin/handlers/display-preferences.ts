import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDisplayPreferencesDisplayPreferencesIdRoute,
  postDisplayPreferencesDisplayPreferencesIdRoute,
} from '../routes'

export const getDisplayPreferencesDisplayPreferencesIdRouteHandler: RouteHandler<
  typeof getDisplayPreferencesDisplayPreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDisplayPreferencesDisplayPreferencesIdRouteHandler: RouteHandler<
  typeof postDisplayPreferencesDisplayPreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
