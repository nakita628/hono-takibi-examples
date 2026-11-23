import type { RouteHandler } from '@hono/zod-openapi'
import type { getMgetRoute, postMgetRoute } from '../routes'

export const getMgetRouteHandler: RouteHandler<typeof getMgetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMgetRouteHandler: RouteHandler<typeof postMgetRoute> = async (c) => {
  throw new Error('Not implemented')
}
