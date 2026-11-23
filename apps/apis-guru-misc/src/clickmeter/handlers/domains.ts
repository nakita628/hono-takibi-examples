import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDomainsIdRoute,
  getDomainsCountRoute,
  getDomainsIdRoute,
  getDomainsRoute,
  postDomainsIdRoute,
  postDomainsRoute,
} from '../routes'

export const getDomainsRouteHandler: RouteHandler<typeof getDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsRouteHandler: RouteHandler<typeof postDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsCountRouteHandler: RouteHandler<typeof getDomainsCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDomainsIdRouteHandler: RouteHandler<typeof deleteDomainsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsIdRouteHandler: RouteHandler<typeof getDomainsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsIdRouteHandler: RouteHandler<typeof postDomainsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
