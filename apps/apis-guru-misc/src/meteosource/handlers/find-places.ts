import type { RouteHandler } from '@hono/zod-openapi'
import type { getFindPlacesRoute } from '../routes'

export const getFindPlacesRouteHandler: RouteHandler<typeof getFindPlacesRoute> = async (c) => {
  throw new Error('Not implemented')
}
