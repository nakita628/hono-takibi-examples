import type { RouteHandler } from '@hono/zod-openapi'
import type { getListings2Route } from '../routes'

export const getListings2RouteHandler: RouteHandler<typeof getListings2Route> = async (c) => {
  throw new Error('Not implemented')
}
