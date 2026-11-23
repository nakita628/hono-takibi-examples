import type { RouteHandler } from '@hono/zod-openapi'
import type { getAttachmentLawRevisionIdRoute } from '../routes'

export const getAttachmentLawRevisionIdRouteHandler: RouteHandler<
  typeof getAttachmentLawRevisionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
