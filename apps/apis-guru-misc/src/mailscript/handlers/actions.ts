import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteActionsActionRoute,
  getActionsRoute,
  postActionsRoute,
  putActionsActionRoute,
} from '../routes'

export const getActionsRouteHandler: RouteHandler<typeof getActionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionsRouteHandler: RouteHandler<typeof postActionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteActionsActionRouteHandler: RouteHandler<
  typeof deleteActionsActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putActionsActionRouteHandler: RouteHandler<typeof putActionsActionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
