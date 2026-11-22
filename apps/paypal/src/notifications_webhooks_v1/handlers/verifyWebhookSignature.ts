import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1NotificationsVerifyWebhookSignatureRoute } from '../routes'

const app = new OpenAPIHono()

export const verifyWebhookSignatureHandler = app.openapi(
  postV1NotificationsVerifyWebhookSignatureRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
