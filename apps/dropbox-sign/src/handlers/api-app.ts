import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiAppClientIdRoute,
  getApiAppClientIdRoute,
  getApiAppListRoute,
  postApiAppRoute,
  putApiAppClientIdRoute,
} from '../routes'

export const postApiAppRouteHandler: RouteHandler<typeof postApiAppRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAppClientIdRouteHandler: RouteHandler<typeof getApiAppClientIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiAppClientIdRouteHandler: RouteHandler<typeof putApiAppClientIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiAppClientIdRouteHandler: RouteHandler<
  typeof deleteApiAppClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAppListRouteHandler: RouteHandler<typeof getApiAppListRoute> = async (c) => {
  throw new Error('Not implemented')
}
