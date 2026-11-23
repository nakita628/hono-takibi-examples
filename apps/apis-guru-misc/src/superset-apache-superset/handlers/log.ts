import type { RouteHandler } from '@hono/zod-openapi'
import type { getLogIndexRoute, getLogPkRoute, postLogIndexRoute } from '../routes'

export const getLogIndexRouteHandler: RouteHandler<typeof getLogIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLogIndexRouteHandler: RouteHandler<typeof postLogIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogPkRouteHandler: RouteHandler<typeof getLogPkRoute> = async (c) => {
  throw new Error('Not implemented')
}
