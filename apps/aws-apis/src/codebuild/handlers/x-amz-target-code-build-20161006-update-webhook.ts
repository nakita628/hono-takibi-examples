import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006UpdateWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006UpdateWebhookHandler = app.openapi(
  postXAmzTargetCodeBuild20161006UpdateWebhookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
