import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupsIdRoute,
  getGroupsRoute,
  postGroupsRoute,
  putGroupsIdRoute,
} from '../routes'

export const getGroupsRouteHandler: RouteHandler<typeof getGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsRouteHandler: RouteHandler<typeof postGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupsIdRouteHandler: RouteHandler<typeof deleteGroupsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putGroupsIdRouteHandler: RouteHandler<typeof putGroupsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
