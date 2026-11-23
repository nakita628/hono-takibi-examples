import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAdministratorRoute,
  postAdministratorDisassociateRoute,
  postAdministratorRoute,
} from '../routes'

export const postAdministratorRouteHandler: RouteHandler<typeof postAdministratorRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdministratorRouteHandler: RouteHandler<typeof getAdministratorRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdministratorDisassociateRouteHandler: RouteHandler<
  typeof postAdministratorDisassociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
