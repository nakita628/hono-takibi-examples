import type { RouteHandler } from '@hono/zod-openapi'
import type { getQuestionsRoute, postQuestionsRoute } from '../routes'

export const getQuestionsRouteHandler: RouteHandler<typeof getQuestionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuestionsRouteHandler: RouteHandler<typeof postQuestionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
