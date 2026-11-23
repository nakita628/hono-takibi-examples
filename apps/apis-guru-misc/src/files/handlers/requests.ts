import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRequestsIdRoute,
  getRequestsFoldersPathRoute,
  getRequestsRoute,
  postRequestsRoute,
} from '../routes'

export const getRequestsRouteHandler: RouteHandler<typeof getRequestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequestsRouteHandler: RouteHandler<typeof postRequestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequestsFoldersPathRouteHandler: RouteHandler<
  typeof getRequestsFoldersPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRequestsIdRouteHandler: RouteHandler<typeof deleteRequestsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
