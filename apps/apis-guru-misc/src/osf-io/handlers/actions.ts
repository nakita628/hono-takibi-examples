import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app.openapi(getActionsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
