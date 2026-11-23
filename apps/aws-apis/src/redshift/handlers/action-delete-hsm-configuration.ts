import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteHsmConfigurationRoute,
  postActionDeleteHsmConfigurationRoute,
} from '../routes'

export const getActionDeleteHsmConfigurationRouteHandler: RouteHandler<
  typeof getActionDeleteHsmConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteHsmConfigurationRouteHandler: RouteHandler<
  typeof postActionDeleteHsmConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
