import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRequestIdRoute,
  getRequestIdRoute,
  getRequestRoute,
  postRequestIdCmdDiffRoute,
  postRequestIdRoute,
  postRequestRoute,
  putRequestIdRoute,
} from '../routes'

export const getRequestRouteHandler: RouteHandler<typeof getRequestRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequestRouteHandler: RouteHandler<typeof postRequestRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRequestIdRouteHandler: RouteHandler<typeof deleteRequestIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequestIdRouteHandler: RouteHandler<typeof getRequestIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequestIdRouteHandler: RouteHandler<typeof postRequestIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRequestIdRouteHandler: RouteHandler<typeof putRequestIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequestIdCmdDiffRouteHandler: RouteHandler<
  typeof postRequestIdCmdDiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}
