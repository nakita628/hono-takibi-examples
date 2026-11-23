import type { RouteHandler } from '@hono/zod-openapi'
import type { getSentencesIdRoute, getSentencesRoute } from '../routes'

export const getSentencesRouteHandler: RouteHandler<typeof getSentencesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSentencesIdRouteHandler: RouteHandler<typeof getSentencesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
