import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAppClientsAppClientIdRoute,
  getAppClientsRoute,
  optionsAppClientsAppClientIdRoute,
  optionsAppClientsRoute,
  patchAppClientsAppClientIdRoute,
  postAppClientsRoute,
} from '../routes'

export const getAppClientsRouteHandler: RouteHandler<typeof getAppClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAppClientsRouteHandler: RouteHandler<typeof optionsAppClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAppClientsRouteHandler: RouteHandler<typeof postAppClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppClientsAppClientIdRouteHandler: RouteHandler<
  typeof deleteAppClientsAppClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAppClientsAppClientIdRouteHandler: RouteHandler<
  typeof optionsAppClientsAppClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAppClientsAppClientIdRouteHandler: RouteHandler<
  typeof patchAppClientsAppClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
