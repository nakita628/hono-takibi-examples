import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupGroupTitleRoute,
  getGroupGroupTitleRoute,
  getGroupRoute,
  postGroupGroupTitleRoute,
  putGroupGroupTitleRoute,
} from '../routes'

export const getGroupRouteHandler: RouteHandler<typeof getGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupGroupTitleRouteHandler: RouteHandler<
  typeof deleteGroupGroupTitleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupGroupTitleRouteHandler: RouteHandler<typeof getGroupGroupTitleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGroupGroupTitleRouteHandler: RouteHandler<
  typeof postGroupGroupTitleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putGroupGroupTitleRouteHandler: RouteHandler<typeof putGroupGroupTitleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
