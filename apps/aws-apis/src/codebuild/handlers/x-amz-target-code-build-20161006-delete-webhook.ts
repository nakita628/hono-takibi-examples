import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DeleteWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006DeleteWebhookHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DeleteWebhookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
