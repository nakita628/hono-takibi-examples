import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendDocumentRoute } from '../routes'

export const postSendDocumentRouteHandler: RouteHandler<typeof postSendDocumentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
