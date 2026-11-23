import { OpenAPIHono } from '@hono/zod-openapi'
import { postTargetActionsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const targetActionsHandler = app.openapi(postTargetActionsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
