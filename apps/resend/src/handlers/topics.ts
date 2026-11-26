import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postTopicsRoute,
  getTopicsRoute,
  getTopicsIdRoute,
  patchTopicsIdRoute,
  deleteTopicsIdRoute,
} from '../routes'

export const postTopicsRouteHandler: RouteHandler<typeof postTopicsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTopicsRouteHandler: RouteHandler<typeof getTopicsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTopicsIdRouteHandler: RouteHandler<typeof getTopicsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTopicsIdRouteHandler: RouteHandler<typeof patchTopicsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTopicsIdRouteHandler: RouteHandler<typeof deleteTopicsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
