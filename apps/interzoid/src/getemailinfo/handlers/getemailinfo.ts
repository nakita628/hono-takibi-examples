import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetemailinfoRoute } from '../routes'

export const getGetemailinfoRouteHandler: RouteHandler<typeof getGetemailinfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
