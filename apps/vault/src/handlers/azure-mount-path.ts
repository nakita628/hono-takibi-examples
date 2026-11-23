import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAzureMountPathConfigRoute,
  deleteAzureMountPathRolesNameRoute,
  getAzureMountPathConfigRoute,
  getAzureMountPathCredsRoleRoute,
  getAzureMountPathRolesIndexRoute,
  getAzureMountPathRolesNameRoute,
  postAzureMountPathConfigRoute,
  postAzureMountPathRolesNameRoute,
  postAzureMountPathRotateRootRoute,
} from '../routes'

export const getAzureMountPathConfigRouteHandler: RouteHandler<
  typeof getAzureMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAzureMountPathConfigRouteHandler: RouteHandler<
  typeof postAzureMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAzureMountPathConfigRouteHandler: RouteHandler<
  typeof deleteAzureMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAzureMountPathCredsRoleRouteHandler: RouteHandler<
  typeof getAzureMountPathCredsRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAzureMountPathRolesIndexRouteHandler: RouteHandler<
  typeof getAzureMountPathRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAzureMountPathRolesNameRouteHandler: RouteHandler<
  typeof getAzureMountPathRolesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAzureMountPathRolesNameRouteHandler: RouteHandler<
  typeof postAzureMountPathRolesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAzureMountPathRolesNameRouteHandler: RouteHandler<
  typeof deleteAzureMountPathRolesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAzureMountPathRotateRootRouteHandler: RouteHandler<
  typeof postAzureMountPathRotateRootRoute
> = async (c) => {
  throw new Error('Not implemented')
}
