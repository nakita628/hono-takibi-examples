import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupsNameRoute,
  getGroupsNameRoute,
  getGroupsRoute,
  postGroupsRoute,
  putGroupsNameRoute,
} from '../routes'

export const getGroupsNameRouteHandler: RouteHandler<typeof getGroupsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putGroupsNameRouteHandler: RouteHandler<typeof putGroupsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupsNameRouteHandler: RouteHandler<typeof deleteGroupsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGroupsRouteHandler: RouteHandler<typeof getGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsRouteHandler: RouteHandler<typeof postGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}
