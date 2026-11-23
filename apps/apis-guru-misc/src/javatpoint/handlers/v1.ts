import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1ParentMessagesSendRoute } from '../routes'

export const postV1ParentMessagesSendRouteHandler: RouteHandler<
  typeof postV1ParentMessagesSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}
