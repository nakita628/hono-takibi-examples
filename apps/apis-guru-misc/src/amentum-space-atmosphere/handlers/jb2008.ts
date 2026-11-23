import type { RouteHandler } from '@hono/zod-openapi'
import type { getJb2008Route } from '../routes'

export const getJb2008RouteHandler: RouteHandler<typeof getJb2008Route> = async (c) => {
  throw new Error('Not implemented')
}
