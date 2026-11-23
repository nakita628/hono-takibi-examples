import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdaptersNameRoute,
  getAdaptersNameLogsRoute,
  getAdaptersNameRoute,
  getAdaptersNameStatusRoute,
  getAdaptersRoute,
  postAdaptersNameMcpRoute,
  postAdaptersRoute,
  putAdaptersNameRoute,
} from '../routes'

export const postAdaptersRouteHandler: RouteHandler<typeof postAdaptersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdaptersRouteHandler: RouteHandler<typeof getAdaptersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdaptersNameRouteHandler: RouteHandler<typeof getAdaptersNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdaptersNameRouteHandler: RouteHandler<typeof putAdaptersNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdaptersNameRouteHandler: RouteHandler<typeof deleteAdaptersNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdaptersNameStatusRouteHandler: RouteHandler<
  typeof getAdaptersNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdaptersNameLogsRouteHandler: RouteHandler<
  typeof getAdaptersNameLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdaptersNameMcpRouteHandler: RouteHandler<
  typeof postAdaptersNameMcpRoute
> = async (c) => {
  throw new Error('Not implemented')
}
