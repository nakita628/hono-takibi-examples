import type { RouteHandler } from '@hono/zod-openapi'
import type { postOpinionsRoute } from '../routes'

export const postOpinionsRouteHandler: RouteHandler<typeof postOpinionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
