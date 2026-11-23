import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSsoStrategiesIdRoute,
  getSsoStrategiesRoute,
  postSsoStrategiesIdSyncRoute,
} from '../routes'

export const getSsoStrategiesRouteHandler: RouteHandler<typeof getSsoStrategiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSsoStrategiesIdRouteHandler: RouteHandler<typeof getSsoStrategiesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSsoStrategiesIdSyncRouteHandler: RouteHandler<
  typeof postSsoStrategiesIdSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}
