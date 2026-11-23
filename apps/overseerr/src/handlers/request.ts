import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRequestRequestIdRoute,
  getRequestCountRoute,
  getRequestRequestIdRoute,
  getRequestRoute,
  postRequestRequestIdRetryRoute,
  postRequestRequestIdStatusRoute,
  postRequestRoute,
  putRequestRequestIdRoute,
} from '../routes'

export const getRequestRouteHandler: RouteHandler<typeof getRequestRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequestRouteHandler: RouteHandler<typeof postRequestRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequestCountRouteHandler: RouteHandler<typeof getRequestCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequestRequestIdRouteHandler: RouteHandler<
  typeof getRequestRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRequestRequestIdRouteHandler: RouteHandler<
  typeof putRequestRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRequestRequestIdRouteHandler: RouteHandler<
  typeof deleteRequestRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequestRequestIdRetryRouteHandler: RouteHandler<
  typeof postRequestRequestIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequestRequestIdStatusRouteHandler: RouteHandler<
  typeof postRequestRequestIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
