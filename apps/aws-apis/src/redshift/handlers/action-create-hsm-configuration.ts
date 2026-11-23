import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateHsmConfigurationRoute,
  postActionCreateHsmConfigurationRoute,
} from '../routes'

export const getActionCreateHsmConfigurationRouteHandler: RouteHandler<
  typeof getActionCreateHsmConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateHsmConfigurationRouteHandler: RouteHandler<
  typeof postActionCreateHsmConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
