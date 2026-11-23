import type { RouteHandler } from '@hono/zod-openapi'
import type { getValuesRoute } from '../routes'

export const getValuesRouteHandler: RouteHandler<typeof getValuesRoute> = async (c) => {
  throw new Error('Not implemented')
}
