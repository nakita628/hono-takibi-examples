import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnswerRoute } from '../routes'

export const postAnswerRouteHandler: RouteHandler<typeof postAnswerRoute> = async (c) => {
  throw new Error('Not implemented')
}
