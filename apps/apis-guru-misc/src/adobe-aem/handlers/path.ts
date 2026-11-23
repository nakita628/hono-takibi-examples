import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePathNameRoute,
  getPathNameRoute,
  postPathIndexRoute,
  postPathNameRoute,
  postPathNameRwHtmlRoute,
} from '../routes'

export const postPathIndexRouteHandler: RouteHandler<typeof postPathIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePathNameRouteHandler: RouteHandler<typeof deletePathNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPathNameRouteHandler: RouteHandler<typeof getPathNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPathNameRouteHandler: RouteHandler<typeof postPathNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPathNameRwHtmlRouteHandler: RouteHandler<typeof postPathNameRwHtmlRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
