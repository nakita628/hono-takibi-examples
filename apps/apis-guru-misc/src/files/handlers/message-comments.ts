import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMessageCommentsIdRoute,
  getMessageCommentsIdRoute,
  getMessageCommentsRoute,
  patchMessageCommentsIdRoute,
  postMessageCommentsRoute,
} from '../routes'

export const getMessageCommentsRouteHandler: RouteHandler<typeof getMessageCommentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMessageCommentsRouteHandler: RouteHandler<
  typeof postMessageCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMessageCommentsIdRouteHandler: RouteHandler<
  typeof deleteMessageCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessageCommentsIdRouteHandler: RouteHandler<
  typeof getMessageCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMessageCommentsIdRouteHandler: RouteHandler<
  typeof patchMessageCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
