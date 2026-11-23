import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBookmarksIdRoute,
  getBookmarksIdRawBodyRoute,
  getBookmarksIdRoute,
  getBookmarksRoute,
  postBookmarksIdTriggerRoute,
  postBookmarksRoute,
  putBookmarksIdRoute,
} from '../routes'

export const getBookmarksRouteHandler: RouteHandler<typeof getBookmarksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookmarksRouteHandler: RouteHandler<typeof postBookmarksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookmarksIdRouteHandler: RouteHandler<typeof getBookmarksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putBookmarksIdRouteHandler: RouteHandler<typeof putBookmarksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBookmarksIdRouteHandler: RouteHandler<typeof deleteBookmarksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBookmarksIdRawBodyRouteHandler: RouteHandler<
  typeof getBookmarksIdRawBodyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookmarksIdTriggerRouteHandler: RouteHandler<
  typeof postBookmarksIdTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
