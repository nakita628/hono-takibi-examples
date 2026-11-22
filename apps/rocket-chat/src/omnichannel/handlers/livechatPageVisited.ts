import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1LivechatPageVisitedRoute } from '../routes'

const app = new OpenAPIHono()

export const livechatPageVisitedHandler = app.openapi(postApiV1LivechatPageVisitedRoute, (c) => {
  throw new Error('Not implemented')
})
