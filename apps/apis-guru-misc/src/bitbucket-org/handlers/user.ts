import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserEmailsEmailRoute,
  getUserEmailsRoute,
  getUserPermissionsRepositoriesRoute,
  getUserPermissionsWorkspacesRoute,
  getUserRoute,
} from '../routes'

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserEmailsRouteHandler: RouteHandler<typeof getUserEmailsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserEmailsEmailRouteHandler: RouteHandler<typeof getUserEmailsEmailRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserPermissionsRepositoriesRouteHandler: RouteHandler<
  typeof getUserPermissionsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserPermissionsWorkspacesRouteHandler: RouteHandler<
  typeof getUserPermissionsWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
