import { OpenAPIHono } from '@hono/zod-openapi'
import { getGoalsRoute } from '../routes'

const app = new OpenAPIHono()

export const goalsHandler = app.openapi(getGoalsRoute, (c) => {
  throw new Error('Not implemented')
})
