import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSessionConfigurationsRoute,
  getSessionConfigurationsRoute,
  putSessionConfigurationsRoute,
} from '../routes'

export const getSessionConfigurationsRouteHandler: RouteHandler<
  typeof getSessionConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSessionConfigurationsRouteHandler: RouteHandler<
  typeof putSessionConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSessionConfigurationsRouteHandler: RouteHandler<
  typeof deleteSessionConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
