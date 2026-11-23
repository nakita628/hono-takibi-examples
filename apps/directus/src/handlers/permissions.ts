import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePermissionsIdRoute,
  deletePermissionsRoute,
  getPermissionsIdRoute,
  getPermissionsMeRoute,
  getPermissionsRoute,
  patchPermissionsIdRoute,
  patchPermissionsRoute,
  postPermissionsRoute,
} from '../routes'

export const getPermissionsRouteHandler: RouteHandler<typeof getPermissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPermissionsRouteHandler: RouteHandler<typeof postPermissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPermissionsRouteHandler: RouteHandler<typeof patchPermissionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePermissionsRouteHandler: RouteHandler<typeof deletePermissionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPermissionsMeRouteHandler: RouteHandler<typeof getPermissionsMeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPermissionsIdRouteHandler: RouteHandler<typeof getPermissionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchPermissionsIdRouteHandler: RouteHandler<typeof patchPermissionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePermissionsIdRouteHandler: RouteHandler<
  typeof deletePermissionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
