import type { RouteHandler } from '@hono/zod-openapi'
import type { postCommunicationRoute } from '../routes'

export const postCommunicationRouteHandler: RouteHandler<typeof postCommunicationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
