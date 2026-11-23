import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCommentsIdsRoute,
  getCommentsRoute,
  postCommentsIdDeleteRoute,
  postCommentsIdEditRoute,
} from '../routes'

export const getCommentsRouteHandler: RouteHandler<typeof getCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsIdsRouteHandler: RouteHandler<typeof getCommentsIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommentsIdDeleteRouteHandler: RouteHandler<
  typeof postCommentsIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommentsIdEditRouteHandler: RouteHandler<typeof postCommentsIdEditRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
