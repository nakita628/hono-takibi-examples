import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiAppsPublicAppIdTemplateMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppHandler = app.openapi(postApiAppsPublicAppIdTemplateMessageRoute, (c) => {
  throw new Error('Not implemented')
})
