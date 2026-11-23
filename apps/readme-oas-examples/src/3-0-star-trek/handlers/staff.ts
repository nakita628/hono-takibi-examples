import type { RouteHandler } from '@hono/zod-openapi'
import type { getStaffRoute, getStaffSearchRoute, postStaffSearchRoute } from '../routes'

export const getStaffRouteHandler: RouteHandler<typeof getStaffRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStaffSearchRouteHandler: RouteHandler<typeof getStaffSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStaffSearchRouteHandler: RouteHandler<typeof postStaffSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
