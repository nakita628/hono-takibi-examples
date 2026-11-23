import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupsDeleteNameRoute,
  getGroupsExportRoute,
  getGroupsGetNameRoute,
  getGroupsListRoute,
  getGroupsListWithWorkspacesRoute,
  postGroupsAdduserNameRoute,
  postGroupsCreateRoute,
  postGroupsOverwriteRoute,
  postGroupsRemoveuserNameRoute,
  postGroupsUpdateNameRoute,
} from '../routes'

export const getGroupsListRouteHandler: RouteHandler<typeof getGroupsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsListWithWorkspacesRouteHandler: RouteHandler<
  typeof getGroupsListWithWorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGetNameRouteHandler: RouteHandler<typeof getGroupsGetNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGroupsCreateRouteHandler: RouteHandler<typeof postGroupsCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGroupsUpdateNameRouteHandler: RouteHandler<
  typeof postGroupsUpdateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupsDeleteNameRouteHandler: RouteHandler<
  typeof deleteGroupsDeleteNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsAdduserNameRouteHandler: RouteHandler<
  typeof postGroupsAdduserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsRemoveuserNameRouteHandler: RouteHandler<
  typeof postGroupsRemoveuserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsExportRouteHandler: RouteHandler<typeof getGroupsExportRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsOverwriteRouteHandler: RouteHandler<
  typeof postGroupsOverwriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
