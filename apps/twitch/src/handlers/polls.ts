import type { RouteHandler } from '@hono/zod-openapi'
import type { getPollsRoute, patchPollsRoute, postPollsRoute } from '../routes'

export const getPollsRouteHandler: RouteHandler<typeof getPollsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPollsRouteHandler: RouteHandler<typeof postPollsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPollsRouteHandler: RouteHandler<typeof patchPollsRoute> = async (c) => {
  throw new Error('Not implemented')
}
