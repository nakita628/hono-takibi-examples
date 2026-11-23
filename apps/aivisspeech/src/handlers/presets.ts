import type { RouteHandler } from '@hono/zod-openapi'
import type { getPresetsRoute } from '../routes'

export const getPresetsRouteHandler: RouteHandler<typeof getPresetsRoute> = async (c) => {
  throw new Error('Not implemented')
}
