import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClientsClientIdRoute,
  getClientsRoute,
  postClientsClientIdRevokeRoute,
  postClientsVerifyRoute,
} from '../routes'

export const getClientsRouteHandler: RouteHandler<typeof getClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postClientsVerifyRouteHandler: RouteHandler<typeof postClientsVerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getClientsClientIdRouteHandler: RouteHandler<typeof getClientsClientIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postClientsClientIdRevokeRouteHandler: RouteHandler<
  typeof postClientsClientIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
