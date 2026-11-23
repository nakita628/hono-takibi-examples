import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpIpv4Route, getIpIpv4TxtRoute, getIpRoute } from '../routes'

export const getIpRouteHandler: RouteHandler<typeof getIpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpIpv4RouteHandler: RouteHandler<typeof getIpIpv4Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpIpv4TxtRouteHandler: RouteHandler<typeof getIpIpv4TxtRoute> = async (c) => {
  throw new Error('Not implemented')
}
