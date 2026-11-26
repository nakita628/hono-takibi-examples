import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationPermissionsRoute,
  postOrganizationPermissionsRoute,
  getOrganizationPermissionsPermissionIdRoute,
  patchOrganizationPermissionsPermissionIdRoute,
  deleteOrganizationPermissionsPermissionIdRoute,
} from '../routes'

export const getOrganizationPermissionsRouteHandler: RouteHandler<
  typeof getOrganizationPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationPermissionsRouteHandler: RouteHandler<
  typeof postOrganizationPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationPermissionsPermissionIdRouteHandler: RouteHandler<
  typeof getOrganizationPermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOrganizationPermissionsPermissionIdRouteHandler: RouteHandler<
  typeof patchOrganizationPermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationPermissionsPermissionIdRouteHandler: RouteHandler<
  typeof deleteOrganizationPermissionsPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
