import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEdgeGroupsIdRoute,
  getEdgeGroupsIdRoute,
  getEdgeGroupsRoute,
  postEdgeGroupsRoute,
  putEdgeGroupsIdRoute,
} from '../routes'

export const getEdgeGroupsRouteHandler: RouteHandler<typeof getEdgeGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEdgeGroupsRouteHandler: RouteHandler<typeof postEdgeGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEdgeGroupsIdRouteHandler: RouteHandler<typeof deleteEdgeGroupsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEdgeGroupsIdRouteHandler: RouteHandler<typeof getEdgeGroupsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putEdgeGroupsIdRouteHandler: RouteHandler<typeof putEdgeGroupsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
