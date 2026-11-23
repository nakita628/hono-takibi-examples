import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteClientsIdClientLogoRoute,
  deleteClientsIdClientRoute,
  getClientsIdClientRoute,
  getClientsRoute,
  postClientsIdClientLogoRoute,
  postClientsRoute,
  putClientsIdClientRoute,
} from '../routes'

export const getClientsRouteHandler: RouteHandler<typeof getClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postClientsRouteHandler: RouteHandler<typeof postClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteClientsIdClientRouteHandler: RouteHandler<
  typeof deleteClientsIdClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClientsIdClientRouteHandler: RouteHandler<typeof getClientsIdClientRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putClientsIdClientRouteHandler: RouteHandler<typeof putClientsIdClientRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteClientsIdClientLogoRouteHandler: RouteHandler<
  typeof deleteClientsIdClientLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClientsIdClientLogoRouteHandler: RouteHandler<
  typeof postClientsIdClientLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
