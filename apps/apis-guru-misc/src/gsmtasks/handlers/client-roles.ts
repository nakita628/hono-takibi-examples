import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClientRolesIdIndexRoute,
  getClientRolesIndexRoute,
  patchClientRolesIdIndexRoute,
  postClientRolesIdNotifyIndexRoute,
  postClientRolesIndexRoute,
  putClientRolesIdIndexRoute,
} from '../routes'

export const getClientRolesIndexRouteHandler: RouteHandler<
  typeof getClientRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClientRolesIndexRouteHandler: RouteHandler<
  typeof postClientRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClientRolesIdIndexRouteHandler: RouteHandler<
  typeof getClientRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchClientRolesIdIndexRouteHandler: RouteHandler<
  typeof patchClientRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putClientRolesIdIndexRouteHandler: RouteHandler<
  typeof putClientRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClientRolesIdNotifyIndexRouteHandler: RouteHandler<
  typeof postClientRolesIdNotifyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
