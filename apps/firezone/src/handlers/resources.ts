import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteResourcesIdRoute,
  getResourcesIdRoute,
  getResourcesResourceIdPoolMembersRoute,
  getResourcesRoute,
  patchResourcesIdRoute,
  patchResourcesResourceIdPoolMembersRoute,
  postResourcesRoute,
  putResourcesIdRoute,
  putResourcesResourceIdPoolMembersRoute,
} from '../routes'

export const getResourcesRouteHandler: RouteHandler<typeof getResourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postResourcesRouteHandler: RouteHandler<typeof postResourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteResourcesIdRouteHandler: RouteHandler<typeof deleteResourcesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getResourcesIdRouteHandler: RouteHandler<typeof getResourcesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchResourcesIdRouteHandler: RouteHandler<typeof patchResourcesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putResourcesIdRouteHandler: RouteHandler<typeof putResourcesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getResourcesResourceIdPoolMembersRouteHandler: RouteHandler<
  typeof getResourcesResourceIdPoolMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchResourcesResourceIdPoolMembersRouteHandler: RouteHandler<
  typeof patchResourcesResourceIdPoolMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putResourcesResourceIdPoolMembersRouteHandler: RouteHandler<
  typeof putResourcesResourceIdPoolMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
