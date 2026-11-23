import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOtaUpdatesOtaUpdateIdRoute,
  getOtaUpdatesOtaUpdateIdRoute,
  getOtaUpdatesRoute,
  postOtaUpdatesOtaUpdateIdRoute,
} from '../routes'

export const postOtaUpdatesOtaUpdateIdRouteHandler: RouteHandler<
  typeof postOtaUpdatesOtaUpdateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOtaUpdatesOtaUpdateIdRouteHandler: RouteHandler<
  typeof deleteOtaUpdatesOtaUpdateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOtaUpdatesOtaUpdateIdRouteHandler: RouteHandler<
  typeof getOtaUpdatesOtaUpdateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOtaUpdatesRouteHandler: RouteHandler<typeof getOtaUpdatesRoute> = async (c) => {
  throw new Error('Not implemented')
}
