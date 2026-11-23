import { OpenAPIHono } from '@hono/zod-openapi'
import { postExportChatInviteLinkRoute } from '../routes'

const app = new OpenAPIHono()

export const exportChatInviteLinkHandler = app.openapi(postExportChatInviteLinkRoute, (c) => {
  throw new Error('Not implemented')
})
