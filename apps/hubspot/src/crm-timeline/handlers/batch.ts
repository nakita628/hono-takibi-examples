import { OpenAPIHono } from '@hono/zod-openapi'
import { postIntegratorsTimeline202609EventsBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app.openapi(postIntegratorsTimeline202609EventsBatchRoute, (c) => {
  throw new Error('Not implemented')
})
