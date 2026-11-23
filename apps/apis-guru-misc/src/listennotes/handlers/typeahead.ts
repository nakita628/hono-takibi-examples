import type { RouteHandler } from '@hono/zod-openapi'
import type { getTypeaheadRoute } from '../routes'

export const getTypeaheadRouteHandler: RouteHandler<typeof getTypeaheadRoute> = async (c) => {
  throw new Error('Not implemented')
}
