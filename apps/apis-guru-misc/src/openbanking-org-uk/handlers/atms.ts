import type { RouteHandler } from '@hono/zod-openapi'
import type { getAtmsRoute, headAtmsRoute } from '../routes'

export const getAtmsRouteHandler: RouteHandler<typeof getAtmsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headAtmsRouteHandler: RouteHandler<typeof headAtmsRoute> = async (c) => {
  throw new Error('Not implemented')
}
