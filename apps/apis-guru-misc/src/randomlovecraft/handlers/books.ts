import type { RouteHandler } from '@hono/zod-openapi'
import type { getBooksIdSentencesRoute, getBooksRoute } from '../routes'

export const getBooksRouteHandler: RouteHandler<typeof getBooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBooksIdSentencesRouteHandler: RouteHandler<
  typeof getBooksIdSentencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
