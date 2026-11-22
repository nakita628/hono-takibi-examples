import { OpenAPIHono } from '@hono/zod-openapi'
import { putV3UsageBatchesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app.openapi(putV3UsageBatchesIdRoute, (c) => {
  throw new Error('Not implemented')
})
