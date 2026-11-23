import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchHintsRoute } from '../routes'

export const getSearchHintsRouteHandler: RouteHandler<typeof getSearchHintsRoute> = async (c) => {
  throw new Error('Not implemented')
}
