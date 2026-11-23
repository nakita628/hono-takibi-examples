import type { RouteHandler } from '@hono/zod-openapi'
import type { getBadWordsRoute } from '../routes'

export const getBadWordsRouteHandler: RouteHandler<typeof getBadWordsRoute> = async (c) => {
  throw new Error('Not implemented')
}
