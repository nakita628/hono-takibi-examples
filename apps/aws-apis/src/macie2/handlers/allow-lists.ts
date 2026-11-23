import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAllowListsIdRoute,
  getAllowListsIdRoute,
  getAllowListsRoute,
  postAllowListsRoute,
  putAllowListsIdRoute,
} from '../routes'

export const postAllowListsRouteHandler: RouteHandler<typeof postAllowListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAllowListsRouteHandler: RouteHandler<typeof getAllowListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAllowListsIdRouteHandler: RouteHandler<typeof deleteAllowListsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAllowListsIdRouteHandler: RouteHandler<typeof getAllowListsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAllowListsIdRouteHandler: RouteHandler<typeof putAllowListsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
