import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2Route } from '../routes'

export const getV2RouteHandler: RouteHandler<typeof getV2Route> = async (c) => {
  throw new Error('Not implemented')
}
