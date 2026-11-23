import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEmailListsIdRoute,
  getEmailListsIdRoute,
  getEmailListsRoute,
  patchEmailListsIdRoute,
  postEmailListsRoute,
} from '../routes'

export const getEmailListsRouteHandler: RouteHandler<typeof getEmailListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailListsRouteHandler: RouteHandler<typeof postEmailListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEmailListsIdRouteHandler: RouteHandler<typeof deleteEmailListsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEmailListsIdRouteHandler: RouteHandler<typeof getEmailListsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmailListsIdRouteHandler: RouteHandler<typeof patchEmailListsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
