import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserTopicsRoute } from '../routes'

export const postUserTopicsRouteHandler: RouteHandler<typeof postUserTopicsRoute> = async (c) => {
  throw new Error('Not implemented')
}
