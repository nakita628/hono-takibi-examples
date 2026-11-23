import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyAquaConfigurationRoute,
  postActionModifyAquaConfigurationRoute,
} from '../routes'

export const getActionModifyAquaConfigurationRouteHandler: RouteHandler<
  typeof getActionModifyAquaConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyAquaConfigurationRouteHandler: RouteHandler<
  typeof postActionModifyAquaConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
