import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserActionsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const userActionsJsonHandler = app.openapi(getUserActionsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
