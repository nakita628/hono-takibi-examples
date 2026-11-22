import { OpenAPIHono } from '@hono/zod-openapi'
import { postPayoutRoute } from '../routes'

const app = new OpenAPIHono()

export const instantPayoutsHandler = app.openapi(postPayoutRoute, (c) => {
  throw new Error('Not implemented')
})
