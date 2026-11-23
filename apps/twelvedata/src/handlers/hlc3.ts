import type { RouteHandler } from '@hono/zod-openapi'
import type { getHlc3Route } from '../routes'

export const getHlc3RouteHandler: RouteHandler<typeof getHlc3Route> = async (c) => {
  throw new Error('Not implemented')
}
