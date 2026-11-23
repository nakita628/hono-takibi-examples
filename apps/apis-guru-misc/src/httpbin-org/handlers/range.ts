import type { RouteHandler } from '@hono/zod-openapi'
import type { getRangeNumbytesRoute } from '../routes'

export const getRangeNumbytesRouteHandler: RouteHandler<typeof getRangeNumbytesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
