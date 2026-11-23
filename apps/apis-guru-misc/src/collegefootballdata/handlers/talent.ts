import type { RouteHandler } from '@hono/zod-openapi'
import type { getTalentRoute } from '../routes'

export const getTalentRouteHandler: RouteHandler<typeof getTalentRoute> = async (c) => {
  throw new Error('Not implemented')
}
