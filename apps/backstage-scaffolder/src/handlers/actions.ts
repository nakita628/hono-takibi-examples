import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2ActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app.openapi(getV2ActionsRoute, (c) => {
  throw new Error('Not implemented')
})
