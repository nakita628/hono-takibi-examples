import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1SupportMessagesSendRoute } from '../routes'

const app = new OpenAPIHono()

export const supportHandler = app.openapi(postApiV1SupportMessagesSendRoute, (c) => {
  throw new Error('Not implemented')
})
