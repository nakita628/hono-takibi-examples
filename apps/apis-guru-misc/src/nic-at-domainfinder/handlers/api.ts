import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiV1SuggestRoute } from '../routes'

export const getApiV1SuggestRouteHandler: RouteHandler<typeof getApiV1SuggestRoute> = async (c) => {
  throw new Error('Not implemented')
}
