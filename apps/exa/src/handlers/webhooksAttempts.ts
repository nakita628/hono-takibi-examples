import { OpenAPIHono } from '@hono/zod-openapi'
import { getV0WebhooksIdAttemptsRoute } from '../routes'

const app = new OpenAPIHono()

export const webhooksAttemptsHandler = app.openapi(getV0WebhooksIdAttemptsRoute, (c) => {
  throw new Error('Not implemented')
})
