import type { RouteHandler } from '@hono/zod-openapi'
import type { getLog10Route } from '../routes'

export const getLog10RouteHandler: RouteHandler<typeof getLog10Route> = async (c) => {
  throw new Error('Not implemented')
}
