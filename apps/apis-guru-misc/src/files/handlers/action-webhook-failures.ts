import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionWebhookFailuresIdRetryRoute } from '../routes'

const app = new OpenAPIHono()

export const actionWebhookFailuresHandler = app.openapi(
  postActionWebhookFailuresIdRetryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
