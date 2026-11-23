import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCommentsIdRoute,
  deleteCommentsRoute,
  getCommentsIdRoute,
  getCommentsRoute,
  patchCommentsIdRoute,
  patchCommentsRoute,
  postCommentsRoute,
} from '../routes'

export const getCommentsRouteHandler: RouteHandler<typeof getCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommentsRouteHandler: RouteHandler<typeof postCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommentsRouteHandler: RouteHandler<typeof patchCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommentsRouteHandler: RouteHandler<typeof deleteCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsIdRouteHandler: RouteHandler<typeof getCommentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommentsIdRouteHandler: RouteHandler<typeof patchCommentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommentsIdRouteHandler: RouteHandler<typeof deleteCommentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
