import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateAlertRoute } from '../routes'

export const postCreateAlertRouteHandler: RouteHandler<typeof postCreateAlertRoute> = async (c) => {
  throw new Error('Not implemented')
}
