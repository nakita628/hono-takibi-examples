import type { RouteHandler } from '@hono/zod-openapi'
import type { postExportChatInviteLinkRoute } from '../routes'

export const postExportChatInviteLinkRouteHandler: RouteHandler<
  typeof postExportChatInviteLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
