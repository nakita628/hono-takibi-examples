import type { RouteHandler } from '@hono/zod-openapi'
import type { getGenesisRoute } from '../routes'

export const getGenesisRouteHandler: RouteHandler<typeof getGenesisRoute> = async (c) => {
  throw new Error('Not implemented')
}
