import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006CreateWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006CreateWebhookHandler = app.openapi(
  postXAmzTargetCodeBuild20161006CreateWebhookRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
