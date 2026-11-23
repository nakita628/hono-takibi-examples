import type { RouteHandler } from '@hono/zod-openapi'
import type { getCrsiRoute } from '../routes'

export const getCrsiRouteHandler: RouteHandler<typeof getCrsiRoute> = async (c) => {
  throw new Error('Not implemented')
}
