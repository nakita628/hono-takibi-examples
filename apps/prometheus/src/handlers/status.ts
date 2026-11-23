import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatusBuildinfoRoute,
  getStatusConfigRoute,
  getStatusFlagsRoute,
  getStatusRuntimeinfoRoute,
  getStatusSelfMetricsRoute,
  getStatusTsdbBlocksRoute,
  getStatusTsdbRoute,
  getStatusWalreplayRoute,
} from '../routes'

export const getStatusConfigRouteHandler: RouteHandler<typeof getStatusConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatusRuntimeinfoRouteHandler: RouteHandler<
  typeof getStatusRuntimeinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatusBuildinfoRouteHandler: RouteHandler<typeof getStatusBuildinfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStatusFlagsRouteHandler: RouteHandler<typeof getStatusFlagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatusTsdbRouteHandler: RouteHandler<typeof getStatusTsdbRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatusTsdbBlocksRouteHandler: RouteHandler<
  typeof getStatusTsdbBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatusWalreplayRouteHandler: RouteHandler<typeof getStatusWalreplayRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStatusSelfMetricsRouteHandler: RouteHandler<
  typeof getStatusSelfMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
