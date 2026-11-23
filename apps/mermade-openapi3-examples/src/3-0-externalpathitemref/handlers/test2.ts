import type { RouteHandler } from '@hono/zod-openapi'
import type { getTest2Route } from '../routes'

export const getTest2RouteHandler: RouteHandler<typeof getTest2Route> = async (c) => {
  throw new Error('Not implemented')
}
