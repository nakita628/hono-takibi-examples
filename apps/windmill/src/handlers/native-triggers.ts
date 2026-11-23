import { OpenAPIHono } from '@hono/zod-openapi'
import { postNativeTriggersServiceNameWWorkspaceIdWebhookInternalIdRoute } from '../routes'

const app = new OpenAPIHono()

export const nativeTriggersHandler = app.openapi(
  postNativeTriggersServiceNameWWorkspaceIdWebhookInternalIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
