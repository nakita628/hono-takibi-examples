import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2AiGuardEvaluateRoute } from '../routes'

const app = new OpenAPIHono()

export const aiGuardHandler = app.openapi(postApiV2AiGuardEvaluateRoute, (c) => {
  throw new Error('Not implemented')
})
