import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnswersRoute } from '../routes'

export const postAnswersRouteHandler: RouteHandler<typeof postAnswersRoute> = async (c) => {
  throw new Error('Not implemented')
}
