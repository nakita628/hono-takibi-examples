import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRolesIdRoute,
  deleteRolesRoute,
  getRolesIdRoute,
  getRolesRoute,
  patchRolesIdRoute,
  patchRolesRoute,
  postRolesRoute,
} from '../routes'

export const getRolesRouteHandler: RouteHandler<typeof getRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRolesRouteHandler: RouteHandler<typeof postRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRolesRouteHandler: RouteHandler<typeof patchRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRolesRouteHandler: RouteHandler<typeof deleteRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRolesIdRouteHandler: RouteHandler<typeof getRolesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRolesIdRouteHandler: RouteHandler<typeof patchRolesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRolesIdRouteHandler: RouteHandler<typeof deleteRolesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
